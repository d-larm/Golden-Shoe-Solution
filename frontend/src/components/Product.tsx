import React, { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'


import './Product.css'

export type ProductProps = {
    _id: string,
    name: string,
    image: string,
    price: number,
    large?: boolean, // Determines size of product card
    size?: string,
    colour?: string,
    description: string,
    sizes?: Array<string>,
    gender?: "Male" | "Female",
    category: string,
    stock: number,
}

const Product : FunctionComponent<ProductProps> = ( { name, _id: id, price, image, large, size } ) => (
    <Link className='product-card' to={`/products/${id}`} key={id}>
        <img className='product-card-image' src={image} alt={name} />
        <div className='product-card-name'>{name}</div> 
        <div className='product-card-price'>£{price.toFixed(2)}</div>
    </Link>
)

export default Product