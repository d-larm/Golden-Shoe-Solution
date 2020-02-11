import { PRODUCT_API } from './consts'

export const getProduct = async ( id: string ) => {
    const res = await fetch( `${PRODUCT_API}/${id}`)
    const { results } = await res.json()
    return results
}

export const getAllProducts = async () => {
    const res = await fetch( PRODUCT_API )
    const { results } = await res.json()
    return results
}

export const search = async ( query: string, category: string ) => {
    // const category = categoryQuery && categoryQuery.split('-')[1]
    
    const res = await fetch( `${PRODUCT_API}/search?searchString=${query}&category=${category || ''}` )
    const { results } = await res.json()
    return results
}