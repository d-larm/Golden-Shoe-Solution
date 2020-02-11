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
    let categoryQuery = category
    if( (query.includes('mens-') || query.includes('womens-')) && !category ){
        // Only category has been selected. Treat query as category search
        categoryQuery = query
    }
    
    const res = await fetch( `${PRODUCT_API}/search?searchString=${query}&category=${categoryQuery || ''}` )
    const { results } = await res.json()
    return results
}