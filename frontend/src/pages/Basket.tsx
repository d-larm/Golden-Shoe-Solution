import React, { FunctionComponent, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import Container from '../components/Container'
import { ProductProps } from '../components/Product'
import BasketContext from '../components/BasketContext'
import { BasketItemProps } from './ItemPage'

import './Basket.css'


export const BasketItem : FunctionComponent<ProductProps> = ( { name, _id: id, price, image, large, size } ) => {
    const { removeItem } = useContext(BasketContext)
    const removeBasketItem = () => removeItem(id)
    return (
        <div className='basket-item'>
            <FontAwesomeIcon icon={faTimes} className='product-remove' onClick={() => removeBasketItem()}/>
            <Link className='product-card basket' to={`/products/${id}`} key={id}>
                <img className='product-card-image' src={image} alt={name} />
                <div className='product-card-name'>{name}</div> 
                <div className='product-card-price'>£{price.toFixed(2)}</div>
            </Link>
            
        </div>
    )
}


const Basket : FunctionComponent = () => {
    const { items } = useContext(BasketContext)

    const getTotal = () => items.reduce( ( sum, { price } ) => price ? sum + price : sum, 0 )

    return (
        <Container className="basket-items-container" vertical >
            {items.length > 0 && <h2>Basket</h2>}
            {items.length <= 0 && <p>Basket is empty</p>}
            {items.map( (basketItem: BasketItemProps) => <BasketItem large {...basketItem}/>) }
            {items.length > 0 && <div className="basket-total">Total: £{getTotal().toFixed(2)}</div>}
            {items.length > 0 && <div className="checkout-button">Checkout</div>}
        </Container>
    )
}

export default Basket