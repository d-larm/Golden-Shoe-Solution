import React, { FunctionComponent } from 'react'
import Container from '../components/Container'
import ShopItem from '../components/Product'
import Shirt from '../assets/shirt.jpg'

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

const Shop : FunctionComponent<any> = () => (
    <>
    <Container >
        <p>SHOP</p>
    </Container>
       
    <Container className='shop'>
       {/* <div>Item List</div> */}
       {items.map( ( item ) => <ShopItem {...item} />) }
   </Container>
   </>
)

export default Shop