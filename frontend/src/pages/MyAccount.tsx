import React, { FunctionComponent, useState, useEffect } from 'react'
import Container from '../components/Container'


const MyAccount : FunctionComponent<{}> = () => {
    return (
        <>
        <Container flexible>
            <h1>My Account</h1>
        </Container>
        <Container vertical>
            <h2>My Orders</h2>
        </Container>
        <Container vertical>
            <h2>Wish List</h2>
        </Container>
        </>
    )
}

export default MyAccount