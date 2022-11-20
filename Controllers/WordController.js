const {DbService} = require("../Services/DbService");
const {JsonResponse} = require("../Services/JsonResponseService");

module.exports.GetWords = async(req, res) => {
    const db = await DbService()
    const wordsCollection = await db.collection('Words')
        .find({"Category": `${req.params.category}`}).toArray()

    const words = []
    wordsCollection.forEach((word) => {
        words.push(word.Word)
    })

    const response = words.length > 0
        ? JsonResponse(words, true, "Success", 200)
        : JsonResponse()

    res.json(response)
}
