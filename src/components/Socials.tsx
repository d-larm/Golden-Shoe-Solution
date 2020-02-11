import React, { ReactNode, FunctionComponent } from 'react'
 

export type SocialLinkProps = {
    url: string,
    icon: ReactNode,
    label?: string,
}

type SocialProps = {
    links: Array<SocialLinkProps>,
}

const SocialLink : FunctionComponent<SocialLinkProps> = ( { url, icon } ) => (
    <a href={url} className='social-link'>
        {icon}
    </a>
)



const Socials : FunctionComponent<SocialProps> = ( { links } ) => (
    <div className='socials'>
        {links.map( ( link ) => <SocialLink {...link} /> )}
    </div>
)

export default Socials