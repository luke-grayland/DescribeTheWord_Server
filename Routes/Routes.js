const {GetAllCategories} = require("../Controllers/CategoryController");
const {GetWords} = require("../Controllers/WordController");

const Routes = (server) => {
    server.get('/categories', GetAllCategories)
    server.get('/words/:category', GetWords)
}

module.exports = Routes