import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

import './Product.css'

export type ProductProps = {
    name: string,
    image: string,
    price?: number,
    id?: string,
    large?: boolean
}

const Product : FunctionComponent<ProductProps> = ( { name, id, price, image, large } ) => (
    <Link className='product-card' to={`/shop/${id}`} key={id}>
        <img className='product-card-image' src={image} alt='Shop Product' />
        <div className='product-card-name'>{name}</div> 
        <div className='product-card-price'>{`$${price}`}</div>
    </Link>
)

export default Product