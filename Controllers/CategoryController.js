const { DbService } = require("../Services/DbService");
const { JsonResponse } = require("../Services/JsonResponseService");

module.exports.GetAllCategories = async (req, res) => {
    const db = await DbService()
    const categoriesCollection = await db.collection('Categories').find({}).toArray()

    const categories = []
    categoriesCollection.forEach(cat => {
        categories.push(cat[["Category"]])
    })

    const response = categories.length > 0
        ? JsonResponse(categories, true, 'Success', 200)
        : JsonResponse()

    res.json(response)
}

