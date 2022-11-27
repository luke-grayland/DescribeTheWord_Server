const { MongoClient } = require('mongodb')
require('dotenv').config()
const uri = process.env.DB_CONNECTIONSTRING.toString()
const client = new MongoClient(uri)

const DbService = async() => {
    try {
        return client.db('DescribeTheWord')
    } catch (e) {
        console.error(e)
    }
}

module.exports.DbService = DbService