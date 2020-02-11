import React, { FunctionComponent, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Container from '../components/Container'
import { ProductProps } from '../components/Product'
import BasketContext from '../components/BasketContext'
import { BasketItemProps } from './ItemPage'

import './Basket.css'
import { getProduct } from '../lib/controller'
import swal from 'sweetalert'


export const BasketItem : FunctionComponent<ProductProps> = ( { name, _id: id, stock, price, image, large, size } ) => {
    const { removeItem } = useContext(BasketContext)
    const removeBasketItem = () => removeItem(id)
    return (
        <div className='basket-item'>
            <FontAwesomeIcon icon={faTimes} className='product-remove' onClick={() => removeBasketItem()}/>
            <Link className='product-card basket' to={`/products/${id}`} key={id}>
                <img className='product-card-image' src={image} alt={name} />
                <div className='product-card-name'>{name}</div>
                <div className={stock > 0 ? "item-page-stock available" : "item-page-stock unavailable"}>
                    {stock > 0 ? 'In Stock' : 'Out of Stock'}
                </div>
                <div className='product-card-size'>Size {size}</div> 
                <div className='product-card-price'>£{price.toFixed(2)}</div>
            </Link>
            
        </div>
    )
}


const Basket : FunctionComponent = () => {
    const { items: localItems } = useContext( BasketContext )
    const [ items, setItems ] = useState( localItems )


    useEffect( () => {

        const updateBasketData = async () => {
            const products = await Promise.all( localItems.map(
                async ( item: BasketItemProps ) => {
                    const data = await getProduct( item._id )
                    return { ...item, ...data } // Overwrite basket data with updated data
                }
            ))
            setItems( products )
        }

        updateBasketData()

    }, [ localItems ] )

    const checkout = () => {

        const stockChecks = items.map( ( item: BasketItemProps ) => item.stock > 0 )
        const outOfStockItems = items.filter( ( item: BasketItemProps, index ) => {
            // Get all items that are out of stock
            return stockChecks[ index ] === false
        } )

        if( outOfStockItems.length === 0 ){
            // All items in stock. Proceed to checkout
            swal("Proceeding to checkout", "","success")   

            
        } else {
            // Items are out of stock in basket. Cannot proceed to checkout until they are removed
            swal("Cannot proceed", "Some items are out of stock","success") 
        }

    }

    const getTotal = () => items.reduce( ( sum, { price } ) => price ? sum + price : sum, 0 )

    return (
        <Container className="basket-items-container" vertical >
            {items.length > 0 && <h2>Basket</h2>}
            {items.length <= 0 && <p>Basket is empty</p>}
            {items.map( (basketItem: BasketItemProps) => <BasketItem large {...basketItem}/>) }
            {items.length > 0 && <div className="basket-total">Total: £{getTotal().toFixed(2)}</div>}
            {items.length > 0 && <div className="checkout-button" onClick={checkout}>Checkout</div>}
        </Container>
    )
}

export default Basket