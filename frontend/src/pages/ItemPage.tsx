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
            

        const basketItem = {
            ...itemInfo,
            sizes: undefined,
            size: selectedSize,
        }

        delete basketItem.sizes

        basketContext.addItem( basketItem )

            
        localStorage.setItem('basket', JSON.stringify([ ...basketContext.items, basketItem ]))
        swal("Added to basket", "Item has been added to the basket","success")      

    }


    useEffect(() => {
        const getItemData = async () => { // Call API to obtain item information from database

            const itemData = await getProduct( match.params.id )
            // const itemData = {
            //     id: match.params.id,
            //     image: Shirt,
            //     name: 'Shirt',
            //     description: 'A plain black fabric tee for all your needs',
            //     price: 20,
            //     sizes: [ '6', '7', '8', '9' ]
            // }
            console.log( itemData )
            setItemInfo( itemData )
        }
        getItemData()
    }, [ ] )

    const { name, image, price, description, sizes, colour, category } = itemInfo as ProductProps

    return (
        <>
            <Container vertical>
                
                <div className='item-page'>
                    <div className='item-page-container'>
                        <img className='item-page-image' src={image} alt='shop item' />
                    </div>

                    <Container className='item-page-container' flexible vertical>
                        <div className='item-page-name'>{name}</div> 
                        <div className='item-page-price'>£{price ? price.toFixed(2) : 0}</div>
                       
                        
                        <div className='item-page-description'>{description}</div>
                        <div className='item-page-category'>{category}</div>
                        <div className='item-page-colour'>Colour: {colour}</div>
                        <select className='item-page-sizes' onChange={(e) => setSelectedSize( e.target.value )}>
                            <option value='' >Select size</option>
                            {sizes && sizes.map( ( size ) => <option value={size as string}>{size}</option>)}
                        </select>
                        <div className='add-basket-button' onClick={() => addItemToBasket()}>Add to Basket</div>
                    </Container>
                </div>
            </Container>
        </>
    )
}

export default withRouter(ItemPage)