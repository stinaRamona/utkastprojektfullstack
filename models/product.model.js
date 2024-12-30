const mongoose = require("mongoose"); 

const productSchema = mongoose.Schema({
    //id skapas automatiskt
    product_name: {type: String, required: true},
    price: {type: Number, required: true}, 
    description: {type: String, required: true}, //ska beskrivning va obligatoriskt?
    amount: {type: Number, default: 1, required: true }, //använda $inc för att öka eller minska värdet? "enkelt" står det i projektbeskrivningen
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }] //hämtar från category
}, 
{timestamps: true}); 

module.exports = mongoose.model('Product', productSchema); 