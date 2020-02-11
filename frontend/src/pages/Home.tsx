import React, { FunctionComponent, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { getProduct, getAllProducts } from '../lib/controller'
import Container from '../components/Container'
import Product, { ProductProps } from '../components/Product'

import Item1 from '../assets/images/item1.jpg'
import Item2 from '../assets/images/item2.jpg'
import Item3 from '../assets/images/item3.jpg'


import './Home.css'
import Search from '../components/Search'
import { Link } from 'react-router-dom'


const MainProduct : FunctionComponent<ProductProps> = ({ _id: id, image, description }) => (
    <Link className='main-product-link' to={`/products/${id}`} key={id}>
        <img className="home-main-product" src={ image } alt="Homepage main item"></img>
        <p>{description}</p>
    </Link>
)

const Home : FunctionComponent<any> = () => {
    const [ mainProduct, setMainProduct ] = useState<ProductProps>()
    const [ productList, setProductList ] = useState<Array<ProductProps>>([])

    useEffect( () => {
        const getProductList = async () => {
            const products = await getAllProducts()
            setProductList( products )
            
            // Randomly select a product to be highlighted
            const index = Math.round(Math.random()*(products.length - 1))
            products.length > 0 && setMainProduct(products[ index ])
        }
        getProductList()

    }, [])

    return (
    <>
    <Search />
    <Container vertical className="home-container">
        {mainProduct && <MainProduct {...mainProduct} />}
    </Container>
   <hr/>
   <Container vertical >
        {/* <h2 style={ { margin: "4px" } }>Top Picks</h2> */}
        <Container className='home-products'>
            {productList.slice(0,3).map( (product: ProductProps ) => <Product {...product} /> )}
        </Container>
   </Container>
   </>
)}

export default Home