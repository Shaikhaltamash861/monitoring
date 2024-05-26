const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// Define the customer schema
const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    }
});

// Create the model from the schema and export it
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;
