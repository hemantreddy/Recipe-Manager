const mongoose = require('mongoose')
const Schema = mongoose.Schema

let RecipeSchema = new Schema({
    title : {
        type : String
    },
    instructions : {
        type : String
    },
    ingredients : {
        type : String
    },
    notes : {
        type : String
    },

});

module.exports = mongoose.model('Recipe', RecipeSchema); 