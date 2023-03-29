const Mongoose = require('mongoose');
const subCategorySchema = {
    productItems: { type: String },
    imageUrl: { type: String }
}
const categorySchema = {
    categoryId: { type: String},
    categoryName: { type: String },
    categoryCode: { type: String },
    image: { type: String },
    subCategory:  subCategorySchema
}