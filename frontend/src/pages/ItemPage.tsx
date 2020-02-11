import React, { useState, useEffect, FunctionComponent, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import swal from 'sweetalert'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { ProductProps } from '../components/Product'
import BasketContext from '../components/BasketContext'
import Container from '../components/Container'
import Shirt from '../assets/shirt.jpg'

import './ItemPage.css'
import { getProduct } from '../lib/controller'

export interface BasketItemProps extends ProductProps {
    size: string,
}

const ItemPage : FunctionComponent<any> = ( { match, history } ) => {
    const basketContext = useContext( BasketContext )


    const [ itemInfo, setItemInfo ] = useState( { } )
    const [ selectedSize, setSelectedSize ] = useState('')

    const addItemToBasket = () => {

        if( selectedSize === ''){
            swal( "Error", "A size has not been selected","error" )
            return
        }
        
        if( itemInfo && ( itemInfo as ProductProps).stock <= 0 ) {
            swal( "Error", "This item is currently out of stock","error" )
            return
        }

        // Add selected size to the object to prepare for basket
        const basketItem = {
            ...itemInfo,
            sizes: undefined,
            size: selectedSize,
        }

        delete basketItem.sizes

        // Add item to the basket
        basketContext.addItem( basketItem )

    }


    useEffect(() => {
        const getItemData = async () => { // Call API to obtain item information from database

            const itemData = await getProduct( match.params.id )
            console.log(itemData)
            setItemInfo( itemData )
        }
        getItemData()
    }, [ ] )

    const { name, image, price, description, sizes, colour, category, stock } = itemInfo as ProductProps

    return (
        <>
            <Container vertical>
                
                <div className='item-page'>
                    <div className='item-page-container'>
                        <img className='item-page-image' src={image} alt='shop item' />
                    </div>

                    <Container className='item-page-container' flexible vertical>
                        <div className='item-page-name'>{name}</div>
                        <div className={stock > 0 ? "item-page-stock available" : "item-page-stock unavailable"}>
                            {stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </div>
                        <div className='item-page-price'>£{price ? price.toFixed(2) : 0}</div>
                        
                        
                        <div className='item-page-description'>{description}</div>
                        <div className='item-page-category'>{category}</div>
                        <div className='item-page-colour'>Colour: {colour}</div>
                        <select className='item-page-sizes' onChange={(e) => setSelectedSize( e.target.value )}>
                            <option value='' >Select size</option>
                            {sizes && sizes.map( ( size ) => <option value={size as string}>{size}</option>)}
                        </select>
                        <div className='add-basket-button' onClick={() => stock > 0 && addItemToBasket()}>Add to Basket</div>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default withRouter(ItemPage)