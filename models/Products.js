const mongoose = require('mongoose');
const schema = mongoose.Schema;


const ProductSchema = new schema ({
    id: {type: Number},
    product_name: {type: String},
    quantity: {type: Number},
    price: {type: Number}
});

module.exports = mongoose.model('product', ProductSchema);