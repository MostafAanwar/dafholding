const mongoose = require('mongoose');

const schema = mongoose.Schema;

const UserSchema = new schema ({
    email: {type: String},
    password: {type: String},
    First_name: {type: String},
    Mid_name: {type: String},
    Last_name: {type: String},
    Phone_number: {type: Number},
    Created_at:{type: Date, default: Date.now},
});

module.exports = mongoose.model('user', UserSchema);