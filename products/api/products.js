import { Router } from 'express'
import database, { ObjectId } from '../lib/mongodb'
import { PRODUCT_COLLECTION, DEFAULT_SIZE } from '../lib/consts'
// import bodyParser from 'body_parser'
const bodyParser = require( 'body-parser' )
const cors = require( 'cors' )
const endpoint = Router()

// endpoint.use( ( req, res, next ) => {
//   res.header( 'Access-Control-Allow-Origin', '*' )
//   res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' )
//   next()
// } )

// endpoint.options( '*', cors() )
// cors( { credentials: true, origin: true } )
endpoint.use( bodyParser.json() )
endpoint.use( cors() )

const fetchResults = async ( page = 0, size = DEFAULT_SIZE, sort = { }, filter = { } ) => {
  try {
    // console.log(filter)
    return {
      results: await ( await database ).collection( PRODUCT_COLLECTION )
        .find( filter )
        .collation( { locale: 'en' } )
        .sort( sort )
        .limit( +size )
        .skip( size * page )
        .toArray()
    }
  } catch ( { message, err = 'Failed to obtain results', statusCode = 500 } ) {
    console.log(message)
    return { message, err, statusCode }
  }
}

endpoint.get( '/products/hello', async ( { query: { page, size, searchString = '', category } }, res ) => {
  console.log("Hello mate")
  // const {
  //   results, statusCode, message, err
  // } = await fetchResults( page, size, { }, { $text: { $search: searchString }, category } )
  // !err ? res.json( { results } ) : res.status( statusCode ).json( { err, message } )
} )


endpoint.get( '/products/search', async ( { query: { page, size, searchString = '', category } }, res ) => {
  const filter = category ? { $text: { $search: searchString }, category } : { $text: { $search: searchString } }
  const {
    results, statusCode, message, err
  } = await fetchResults( page, size, { }, filter  )
  !err ? res.json( { results } ) : res.status( statusCode ).json( { err, message } )
  
} )

endpoint.get( '/products/:id', async ( { params: { id = '' } }, res ) => {
  try {
    console.log( id )
    const [ product ] = await ( await database ).collection( PRODUCT_COLLECTION )
      .find( { _id: ObjectId( id ) } )
      .toArray()
    console.log( product )
    return res.json( { results: product } )
  } catch ( { message, err = 'Failed to obtain product', statusCode = 500 } ) {
    return { message, err, statusCode }
  }
} )

endpoint.get( '/products', async ( _, res ) => {
  try {
    const products = await ( await database ).collection( PRODUCT_COLLECTION )
      .find( )
      .toArray()
    return res.json( { results: products } )
  } catch ( { message, err = 'Failed to obtain product', statusCode = 500 } ) {
    return { message, err, statusCode }
  }
} )







// endpoint.post( '/profile', async ( { body }, res ) => {
//   try {
//     const user = {
//       ...body,
//       time: new Date(),
//       verified: false
//     }
//     const response = await ( await database ).collection( USER_COLLECTION ).insert( user )
//     return res.json( { success: 'Profile uploaded successfully', response } )
//   } catch ( { message, err = 'Failed to upload profile', statusCode = 500 } ) {
//     return res.json( { message, err, statusCode } )
//   }
// } )

export default endpoint
