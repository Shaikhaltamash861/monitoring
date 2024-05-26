const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the subscription schema
const subscriptionSchema = new Schema({
    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'cancelled'],
        default: 'Active'
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    product: {
        type: String,
        required: true
    }
});

// Create the model from the schema and export it
const Subscription = mongoose.model('Subscription', subscriptionSchema);
module.exports = Subscription;
