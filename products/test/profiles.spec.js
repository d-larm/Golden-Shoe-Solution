/**
 * Tests the feed endpoint, basic.
 */
import chai, { should } from 'chai'
import chaiHttp from 'chai-http'
import { SERVICE_NAME } from '../lib/consts'
import server from '../server'

should()

chai.use( chaiHttp )

const id = '0ncR83gYpkzgvEWU4A4a'

describe( `${SERVICE_NAME} endpoint /${id}`, async () => {
  // Get feed
  it( 'Fetching the feed should return 200 OK', async () => {
    const res = await chai.request( server ).get( id )

    res.status.should.be.equal( 200, JSON.stringify( res.body, null, 2 ) )
  } )
} )
