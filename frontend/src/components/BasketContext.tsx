/**
 * React app context which stores the ID of the currently selected person in the app
 * Used to determine which person's information should be expanded
 */


import { createContext } from 'react'
import { BasketItemProps } from '../pages/ItemPage'

interface BasketItem {

}

const BasketContext = 
createContext<{ items: Array<BasketItemProps>, addItem: Function, removeItem: Function} >( { 
    items: [], 
    addItem: () => {},
    removeItem: ( id: string ) => {}
} )

export default BasketContext
