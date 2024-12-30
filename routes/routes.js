const Category = require("../models/category.model"); 
const Product = require("../models/product.model"); 

module.exports = [
//Lägga till produkt 
{
    method: "POST", 
    path: "/product", 
    handler: async (request, h) => {
        const product = new Product(request.payload);
        return await product.save(); 
    }
},

//Lägga till kategori 
{
    method: "POST", 
    path: "/category",
    handler: async (request, h) => {
        const category = new Category(request.payload);
        return await category.save(); 
    } 
},

//Ta bort produkt 
{
    method: "DELETE",
    path: "/product/{id}", 
    handler: async (request, h) => {
        try {
            return await Product.findByIdAndDelete(request.params.id); 
        } catch(err) {
            return h.response(err).code(500); 
        }
    }
}, 

//Ta bort kategori
{
    method: "DELETE",
    path: "/category/{id}", 
    handler: async (request, h) => {
        try {
            return await Category.findByIdAndDelete(request.params.id); 
        } catch(err) {
            return h.response(err).code(500); 
        }
    }
},

//Hämta produkter 

{
    method: "GET",
    path: "/product", 
    handler: async () => {
        const products = await Product.find().populate('category', 'category_name');
        return products;
      },
}, 

//Hämta en produkt genom id
{
    method: "GET", 
    path: "/product/{id}", 
    handler: async (request, h) => {
        try {
            const product = await Product.findById(request.params.id); 
            return product || h.response("Produkten hittades inte. Vänligen försök igen").code(404);
        } catch(err) {
            return h.response(err).code(500); 
        }
    }
},

//Uppdatera produkt 
{
    method: "PUT",
    path: "/product/{id}", 
    handler: async (request, h) => {
        try {
            return await Product.findByIdAndUpdate(
                request.params.id, 
                request.payload, 
                { new:true }
            ); 

        } catch(err) {
            return h.response(err).code(500); 
        }

    }
}

]
