import React, { FunctionComponent, useState, useEffect } from 'react'
import Container from '../components/Container'

import './MyAccount.css'

const MyAccount : FunctionComponent<{}> = () => { // Future development
    return (
        <>
        <Container flexible>
            <h1>My Account</h1>
        </Container>
        <Container className='account-option' vertical>
            <h2>My Orders</h2>
        </Container>
        <Container className='account-option' vertical>
            <h2>Wish List</h2>
        </Container>
        <Container className='account-option' vertical>
            <h2>Returns</h2>
        </Container>
        </>
    )
}

export default MyAccount