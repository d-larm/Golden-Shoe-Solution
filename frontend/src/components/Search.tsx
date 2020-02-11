import React, { FunctionComponent, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import { getProduct, getAllProducts } from '../lib/controller'
import Container from '../components/Container'
import Product, { ProductProps } from '../components/Product'


import './Search.css'
import { withRouter, Route, RouteComponentProps } from 'react-router-dom'
import Shop from '../pages/Shop'

const Search : FunctionComponent<any> = ( { history } ) => {
    const [ searchInput, setSearchInput ] = useState('')
    const [ searchCategory, setSearchCategory ] = useState('')

    const search = ( input: string, category: string ) => { // Route depending on the search being made
        if( input && category )
            history.push( `/products/search/${input}/${category}` )
        else if( input )
            history.push( `/products/search/${input}` )
        else if( category )
            history.push( `/products/search/${category}` )
        else
            return
    }

    return (
    <>
    <Container className="home-search-container" flexible >
            <input className="home-search-input" type="text" name="search" placeholder="What are you looking for?" onChange={(e) => setSearchInput(e.target.value)}/>
            <select className="home-search-categories" name="categories" onChange={(e) => setSearchCategory(e.target.value)}>
                <option value="" selected>All Categories</option>
                <option value="mens-eveningwear">Mens Evening-Wear</option>
                <option value="womens-eveningwear">Womens Evening-Wear</option>
                <option value="mens-sportswear">Mens Sportswear</option>
                <option value="womens-sportswear">Womens Sportswear</option>
                <option value="mens-sandles">Mens Sandles</option>
                <option value="womens-sandles">Womens Sandles</option>
                <option value="mens-casual">Mens Casual</option>
                <option value="womens-casual">Womens Casual</option>
            </select>
            <button className="home-search-button" onClick={() => search(searchInput, searchCategory)}> <FontAwesomeIcon icon={faSearch} /></button>
    </Container>
   </>
)}

export default withRouter( Search )