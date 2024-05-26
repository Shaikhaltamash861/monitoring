const Customer = require('../model/Customer');
const Subscription = require('../model/Subscription');
const addCustomer = async(req, res) => {
    try {
        const { name, email, phone, address, company } = req.body;

        // Create a new customer instance
        const newCustomer = new Customer({
            name,
            email,
            phone,
            address,
            company
        });

        // Save the customer to the database
        const savedCustomer = await newCustomer.save();

        // Send the saved customer as a response
        res.status(201).json(savedCustomer);
    } catch (error) {
        console.error('Error adding customer:', error);
        res.status(500).json({ message: 'Error adding customer', error });
    }
};

const customers = async (req, res) => {
    try {
        const customers = await Customer.find();
       // Get the total count of customers
       const totalCount = await Customer.countDocuments();

       // Return an object containing the customers array and the total count
       res.status(200).json({ customers, totalCount });
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({ message: 'Error fetching customers', error });
    }
}
// Route for fetching a customer and their subscriptions
const customer =  async (req, res) => {
    try {
        // Your logic to fetch the customer details and their subscriptions from the database
        // For example, assuming you have a Customer and Subscription model
        const customer = await Customer.findById(req.params.id);
        const subscriptions = await Subscription.find({ customerId: req.params.id });

        // Check if the customer exists
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Return the customer details and their subscriptions
        res.status(200).json({ customer, subscriptions });
    } catch (error) {
        console.error('Error fetching customer and subscriptions:', error);
        res.status(500).json({ message: 'Error fetching customer and subscriptions', error });
    }
}

exports.addCustomer = addCustomer;
exports.customers = customers;
exports.customer = customer;