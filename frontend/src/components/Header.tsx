import React, { FunctionComponent, useState, useContext } from 'react'
import { Link, NavLink, RouteComponentProps, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Socials, {SocialLinkProps} from './Socials'
import Container from './Container'
import SideNav from './SideNav'
import Logo from '../assets/logo.jpg'

import './Header.css'
import BasketContext from './BasketContext'

export type HeaderLinkProps = {
    label : string,
    url: string,
    
}

interface HeaderProps extends RouteComponentProps {
    headerLinks : Array<HeaderLinkProps>,
    socialLinks : Array<SocialLinkProps>,
}

const BasketLink : FunctionComponent = () => {
    const basketContext = useContext(BasketContext)
    return (
        <div className="basket-link">
            <Link to='/basket' className='header-link'> <FontAwesomeIcon icon={faShoppingBasket} /></Link>
    <div className="basket-link-badge">{basketContext.items.length}</div>
        </div>
    )
}



const Header : FunctionComponent<HeaderProps> = ( { location, history, headerLinks, socialLinks } ) => {
    const [ showNav, setShowNav ] = useState(false)



    return (
        <div className='header'>
            <SideNav links={headerLinks} sideNavClass={`side-nav ${!showNav && 'hidden'}`} hideNav={()=> setShowNav(false)} />
            {/* {console.log(match)} */}
            <Container className='main-header' flexible>
                <div className='menu-button' onClick={() => setShowNav(true)}><FontAwesomeIcon icon={faBars} /></div>
                <Link to='/' ><img className="golden-shoe-logo" src={Logo} alt="Golden Shoe Logo" /></Link>
                <BasketLink />
            </Container>
            {/* <div className='header-link-container'>
                {headerLinks.map( ( { label, url } ) => <NavLink key={label} to={`/${url}`} exact className='header-link' activeClassName='header-link active'>{label}</NavLink> ) }
            </div> */}
            {/* <Socials links={socialLinks} /> */}
        { location.pathname !== '/' && <FontAwesomeIcon className="back-button" icon={faChevronLeft} onClick={() => history.goBack()} /> }
        </div>
    )

}
    

export default withRouter(Header)