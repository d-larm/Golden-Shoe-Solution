import React, { useState, useEffect, FunctionComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { ProductProps } from '../components/Product'
import Container from '../components/Container'
import Shirt from '../assets/shirt.jpg'

import '../components/Product.css'

const ItemPage : FunctionComponent<any> = ( { match } ) => {

    interface Item extends ProductProps {
        description: string,
        sizes: Array<String>,
    }


    const [ itemInfo, setItemInfo ] = useState( { } )


    useEffect(() => {
        const getItemData = async () => { // Call API to obtain item information from database
            const itemData = {
                id: match.params.id,
                image: Shirt,
                name: 'Shirt',
                description: 'A plain black fabric tee for all your needs',
                price: 20,
                sizes: [ 'S', 'M', 'L', 'XL' ]
            }
            setItemInfo( itemData )
        }
        getItemData()
    }, [ ] )

    const { name, image, price, description, sizes } = itemInfo as Item

    return (
        <>
            <Container>
            <div className='item-page'>
                <img className='item-page-image' src={image} alt='shop item' />
                <div className='item-page-name'>{name}</div> 
                <div className='item-page-price'>{`$${price}`}</div>
                <select className='item-page-sizes'>
                    <option value=''>Please select</option>
                    {sizes && sizes.map( ( size ) => <option value={size as string}>{size}</option>)}
                </select>
                <div className='add-basket-button'>Add to Basket</div>
                <div className='item-page-description'>{description}</div>
            </div>
            </Container>
        </>
    )
}

export default withRouter(ItemPage)