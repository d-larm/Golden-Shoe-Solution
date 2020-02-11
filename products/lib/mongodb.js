import { MongoClient, ObjectId } from 'mongodb'
// var mongo_client = require("mongodb").MongoClient
const { MONGO_URL, MONGO_DB_NAME } = process.env
// const db_name = 'indjoi'
// const mongoDBUrl = 'mongodb://localhost:27017/'
console.log( { MONGO_DB_NAME, MONGO_URL } )
const mongo = MongoClient.connect( MONGO_URL ).then( db => db.db( MONGO_DB_NAME ), err => err )
export const ASC = 1
export const DESC = -1
export { ObjectId }
export default mongo
