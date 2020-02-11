import React, { FC, ComponentType, useState, createContext } from 'react'
import { BrowserRouter as Router, Route, RouteProps } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import swal from 'sweetalert'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'


import Header, { HeaderLinkProps } from './components/Header'
import {SocialLinkProps} from './components/Socials'
import BasketContext from './components/BasketContext'

import Home from './pages/Home'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import ItemPage, { BasketItemProps }  from './pages/ItemPage'

import './App.css'
import MyAccount from './pages/MyAccount'

const App : FC = () => {
  const basketData = JSON.parse(localStorage.getItem('basket') || '[]')
  const [ basketItems, setBasketItems ] = useState(basketData)

  const addItem = ( item: BasketItemProps) => {
    // Adds item to localStorage to save checkout items
    localStorage.setItem('basket', JSON.stringify([ ...basketItems, item ]))

    // Updates basket context
    setBasketItems( [ ...basketItems, item] )
    swal("Added to basket", "Item has been added to the basket","success")   
  }

  const removeItem = ( id: string ) => {
    
    // Flag to indicate that item has been removed
    let itemRemoved = false

    // Remove item that matches the ID of removed item
    const newBasket = basketItems.filter( (item: BasketItemProps) => {
      const match = item._id === id
      const removedState = itemRemoved
      if( match ) 
        itemRemoved = true
      return removedState || !match 
    } )

    // Update localStorage
    localStorage.setItem('basket', JSON.stringify( newBasket ) )
    setBasketItems( newBasket )
    swal("Removed Item", "Item has been removed from the basket","success")
  }
  

  interface AnimatedRouteProps extends RouteProps {
    component : ComponentType<any>
  }

  const mainRoutes : Array<AnimatedRouteProps> = [
    {path: '/', component: Home},
    {path: '/basket', component: Basket},
    {path: '/shop', component: Shop},
    {path: '/account', component: MyAccount},
    {path: '/products', component: Shop},
    {path: '/contact', component: Contact},
    {path: '/products/search/:query/:category', component: Shop},
    {path: '/products/search/:query', component: Shop},
  ]

  const subRoutes : Array<AnimatedRouteProps> = [
    {path: '/shop/:id', component: ItemPage},
    {path: '/products/:id', component: ItemPage},

  ]

  const headerLinks : Array<HeaderLinkProps> = [
    { label: 'Home', url: '' },
    { label: 'Products', url: 'products' },
    { label: 'My Account', url: 'account' },
    { label: 'Contact', url: 'contact' },
  ]
  

  const socialLinks : Array<SocialLinkProps> = [
    { label: 'Instagram', url: 'https://instagram.com', icon: <FontAwesomeIcon icon={faInstagram} /> },
    { label: 'Facebook', url: 'https://facebook.com', icon: <FontAwesomeIcon icon={faFacebook}  />  },
    { label: 'Youtube', url: 'https://youtube.com', icon: <FontAwesomeIcon icon={faYoutube}  />  },
  ]

  return (
    <div className="App">
      <Router>
        <BasketContext.Provider value={{ items: basketItems, addItem: ( item: BasketItemProps ) => addItem( item ), removeItem: ( id: string ) => removeItem( id )  } } >
        <header className="App-header">
          <Header headerLinks={headerLinks} socialLinks={socialLinks} />
            {mainRoutes.map( ( { path, component: Component } : AnimatedRouteProps ) => (
                <Route key={path as string} path={path} exact>
                  { ({match}) => (
                    <CSSTransition in={!!match} key={path as string} timeout={1000} classNames='page' unmountOnExit>
                      <div className="page">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route> 
            ) )}

            {subRoutes.map( ( { path, component: Component } : AnimatedRouteProps ) => (
                <Route key={path as string} path={path} exact>
                  { ({match}) => (
                    <CSSTransition in={!!match} key={path as string} timeout={1000} classNames='subpage' unmountOnExit>
                      <div className="subpage">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route> 
            ) )}
        </header>
        </BasketContext.Provider>
      </Router>
    </div>
  )
}

export default App
