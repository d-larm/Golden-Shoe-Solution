/**
 * Provides a health check to determine if the server is still running.
 */
import { Router } from 'express'

import { HEALTH_ENDPOINT } from '../lib/consts'

const endpoint = Router()

endpoint.get( HEALTH_ENDPOINT, ( _, res ) => res.json( { status: 'OK' } ) )

export default endpoint
