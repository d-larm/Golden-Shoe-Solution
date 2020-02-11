import React, { FunctionComponent, useState } from 'react'
import { Link, NavLink, RouteComponentProps, withRouter } from 'react-router-dom'
import Socials, {SocialLinkProps} from './Socials'
import Container from './Container'
import SideNav from './SideNav'
import Logo from '../assets/logo.jpg'

import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faBars } from '@fortawesome/free-solid-svg-icons'

export type HeaderLinkProps = {
    label : string,
    url: string,
    
}

interface HeaderProps extends RouteComponentProps {
    headerLinks : Array<HeaderLinkProps>,
    socialLinks : Array<SocialLinkProps>,
}

const BasketLink : FunctionComponent = () => (
    <Link to='/basket' className='header-link'> <FontAwesomeIcon icon={faShoppingBasket} /></Link>
)



const Header : FunctionComponent<HeaderProps> = ( { match, headerLinks, socialLinks } ) => {
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
            
        </div>
    )

}
    

export default withRouter(Header)