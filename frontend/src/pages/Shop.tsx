import React, { FunctionComponent, useState, useEffect } from 'react'
import Container from '../components/Container'
import Product, { ProductProps } from '../components/Product'
import Shirt from '../assets/shirt.jpg'
import { getAllProducts, search } from '../lib/controller'
import { withRouter } from 'react-router-dom'

import Search from '../components/Search'

const items = [
    { id: Math.random().toString(), image: Shirt, name: 'Shirt', price: 20 },
    { id: Math.random().toString(), image: Shirt, name: 'Shirt', price: 20 },
    { id: Math.random().toString(), image: Shirt, name: 'Shirt', price: 20 },
    { id: Math.random().toString(), image: Shirt, name: 'Shirt', price: 20 },
    { id: Math.random().toString(), image: Shirt, name: 'Shirt', price: 20 },
    { id: Math.random().toString(), image: Shirt, name: 'Shirt', price: 20 },
    { id: Math.random().toString(), image: Shirt, name: 'Shirt', price: 20 },
    { id: Math.random().toString(), image: Shirt, name: 'Shirt', price: 20 },
]

const Shop : FunctionComponent<any> = ( { match } ) => {
    const [ productList, setProductList ] = useState<Array<ProductProps>>()

    useEffect( () => {
        
        const getProducts = async () => {
            const products =  await getAllProducts()
            setProductList( products )
        }

        const searchProducts = async () => {
            if( match ) {
                console.log(match.params)
                const { query, category } = match.params || { }
                const products = await search( query, category )
                setProductList( products )
            }
            
        }

        if( match && !match.params.query )
            getProducts()
        else
            searchProducts()


    }, [ match ] )


    return (
        <>
        <Container vertical >
        { match && match.params.query ? <h2> Results for "{match.params.query}" <br/> { match.params.category && `in ${match.params.category}` } </h2> : <h1>Products</h1> }
        <Search />
        </Container>
        
        <Container className='shop'>
            
            {/* <div>Item List</div> */}
            { productList && productList.map( ( item ) => <Product {...item} /> ) }
        </Container>
    </>
    )
}

export default withRouter(Shop)