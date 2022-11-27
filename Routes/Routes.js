const {GetAllCategories} = require("../Controllers/CategoryController");
const {GetWords} = require("../Controllers/WordController");
const {GetAllWords} = require("../Controllers/AllWordsController");

const Routes = (server) => {
    server.get('/categories', GetAllCategories)
    server.get('/words/:category', GetWords)
    server.get('/allWords', GetAllWords)
}

module.exports = Routes