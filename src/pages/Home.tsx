import React, { FunctionComponent, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import Container from '../components/Container'
import Product, { ProductProps } from '../components/Product'

import Item1 from '../assets/items/item1.jpg'
import Item2 from '../assets/items/item2.jpg'
import Item3 from '../assets/items/item3.jpg'


import './Home.css'

const Home : FunctionComponent<any> = () => {
    const [ searchInput, setSearchInput ] = useState('')
    const [ searchCategory, setSearchCategory ] = useState('')

    const search = ( input: string, category: string ) => {

    }

    const products = [
        { name: "Item 2", image: Item2, price: 70 },
        { name: "Item 3", image: Item3, price: 65 },
        { name: "Item 1", image: Item1, price: 100 },
    ]
    
    return (
    <>
    <Container className="home-search-container" flexible >
            <input className="home-search-input" type="text" name="search" placeholder="What are you looking for?" onChange={(e) => setSearchInput(e.target.value)}/>
            <select className="home-search-categories" name="categories" onChange={(e) => setSearchCategory(e.target.value)}>
                <option value="" selected>All Categories</option>
                <option value="mens-footwear">Mens Sportswear</option>
                <option value="womens-footwear">Womens Sportswear</option>
                <option value="mens-sandles">Mens Sandles</option>
                <option value="womens-sandles">Womens Sandles</option>
                <option value="mens-footwear">Mens Casual</option>
                <option value="womens-footwear">Womens Casual</option>
            </select>
            <button className="home-search-button" onClick={() => search(searchInput, searchCategory)}> <FontAwesomeIcon icon={faSearch} /></button>
    </Container>
    <Container vertical className="home-container">
       <img className="home-main-product" src={Item1} alt="Homepage main item"></img>
       <p>Indestructible Trainers</p>
       
   </Container>
   <hr/>
   <Container vertical >
        {/* <h2 style={ { margin: "4px" } }>Top Picks</h2> */}
        <Container className='home-products'>
            {products.map( (product: ProductProps ) => <Product {...product} /> )}
        </Container>
   </Container>
   </>
)}

export default Home