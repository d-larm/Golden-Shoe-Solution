import express from 'express'
import endpoints from './api'
import bunyan from 'bunyan'
import bunyanMiddleware from 'bunyan-middleware'
import { PORT } from './lib/consts'
const app = express()
const cors = require( 'cors' )

const main = async () => {
  // Mount all the provided endpoints
  endpoints.forEach( endpoint => app.use( endpoint ) )
  app.use( cors() )
  app.use( bunyanMiddleware( { logger: bunyan.createLogger( { name: 'product' } ) } ) )
  try {
    const server = await app.listen( PORT )
    const { address: host, port } = server.address()
    console.log( `Listening at http://${host}:${port}` )
  } catch ( err ) {
    console.error( 'Exited with error', err )
  }
}

main()
