const { MongoClient } = require('mongodb')
const {DB_CONNECTIONSTRING} = require("../Config/Config");
const uri = DB_CONNECTIONSTRING
const client = new MongoClient(uri)

const DbService = async() => {
    try {
        return client.db('DescribeTheWord')
    } catch (e) {
        console.error(e)
    } finally {
        // await client.close()
    }
}

module.exports.DbService = DbService