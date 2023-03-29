const Mongoose = require('mongoose');

const storeDetails = {
    storeId: {type: String},
    storeName: { type: String },
    isOpened: { type: Boolean },
    distance: { type: Number },
    storeRating: { type: Number },
    address: { type: Object },
    contact: { type: Object },
    Items: [], 
    categoryCode: { type: String },
}