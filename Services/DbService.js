const { MongoClient } = require('mongodb')
const uri = "mongodb+srv://lgrayland96:Ni7C9NMWE8kkqm7@cluster0.2wcgjpv.mongodb.net/?retryWrites=true&w=majority"
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