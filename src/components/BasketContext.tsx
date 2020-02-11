/**
 * React app context which stores the ID of the currently selected person in the app
 * Used to determine which person's information should be expanded
 */


import { createContext } from 'react'

interface BasketItem {

}

const BasketContext = createContext([])

export default BasketContext
