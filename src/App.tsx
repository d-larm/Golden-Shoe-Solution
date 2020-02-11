import React, { FC, ComponentType } from 'react'
import { BrowserRouter as Router, Route, RouteProps } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'


import Header, { HeaderLinkProps } from './components/Header'
import {SocialLinkProps} from './components/Socials'
import BasketContext from './components/BasketContext'

import Home from './pages/Home'
import Basket from './pages/Basket'
import Shop from './pages/Shop'
import ItemPage from './pages/ItemPage'

import './App.css'

const App : FC = () => {

  interface AnimatedRouteProps extends RouteProps {
    component : ComponentType<any>
  }

  const mainRoutes : Array<AnimatedRouteProps> = [
    {path: '/', component: Home},
    {path: '/basket', component: Basket},
    {path: '/shop', component: Shop},
  ]

  const subRoutes : Array<AnimatedRouteProps> = [
    {path: '/shop/:shopId', component: ItemPage},
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
        <BasketContext.Provider value={[]} >
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
