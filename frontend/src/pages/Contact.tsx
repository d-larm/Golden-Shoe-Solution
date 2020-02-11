import React, { FunctionComponent, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Container from '../components/Container'



import './Contact.css'

const Contact : FunctionComponent<any> = () => {
    
    return (
        <>
            <Container vertical>
                <h1>Contact</h1>
            </Container>
            <Container vertical>
                <div className="contact-details">Email: info@golden-shoe.com</div>
                <div className="contact-details">Telephone: 0800 423 5484</div>
            </Container>
        </>
    )
}

export default Contact