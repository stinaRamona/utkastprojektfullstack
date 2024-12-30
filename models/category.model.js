const mongoose = require("mongoose"); 

const categorySchema = new mongoose.Schema({
    //id skapas automatiskt
    category_name: {type: String, required: true, unique: true}
}); 

module.exports = mongoose.model('Category', categorySchema); 