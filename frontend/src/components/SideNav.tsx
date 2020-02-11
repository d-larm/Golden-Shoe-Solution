import React, { FunctionComponent, CSSProperties } from 'react'
import { NavLink, RouteComponentProps, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons' 
// import Socials, {SocialLinkProps} from './Socials'
// import Logo from '../assets/logo-gold-transparent-cropped.png'

import './SideNav.css'


export type HeaderLinkProps = {
    label : string,
    url: string,
}

interface SideNavProps extends RouteComponentProps {
    links : Array<HeaderLinkProps>,
    sideNavClass: string,
    hideNav: Function,
}

// const BasketLink : FunctionComponent = () => (
//     <NavLink to='/basket' exact className='header-link' activeClassName='header-link-active'> <FontAwesomeIcon icon={faShoppingBasket} /></NavLink>
// )

const SideNav : FunctionComponent<SideNavProps> = ( { links, sideNavClass, hideNav } ) => (
        <>
            <div className={sideNavClass.includes('hidden') ? "side-nav-back hidden" : "side-nav-back" } onClick={() => hideNav()} />
            <div className={sideNavClass}>
                    {/* <span className="side-nav-close-button" onClick={()=> hideNav()}><FontAwesomeIcon icon={faTimes} /></span> */}
                    {links.map( ( { label, url } ) => <NavLink onClick={(e) => hideNav()} key={label} to={`/${url}`} exact={!url} className='side-nav-link'>{label}</NavLink> ) }
            </div>
        </>
)

export default withRouter(SideNav)