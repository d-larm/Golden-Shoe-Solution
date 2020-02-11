/**
 * Tests the `/health` endpoint
 */

import chai, { should } from 'chai'
import chaiHttp from 'chai-http'

import { SERVICE_NAME, HEALTH_ENDPOINT } from '../lib/consts'
import server from '../server'

should()
chai.use( chaiHttp )

describe( `${SERVICE_NAME} endpoint ${HEALTH_ENDPOINT}`, () => {
  it( 'should return return 200 OK', done => {
    chai.request( server )
      .get( HEALTH_ENDPOINT )
      .end( ( err, res ) => {
        res.should.have.status( 200 )
        done()
      } )
  } )

  after( () => process.exit() )
} )
