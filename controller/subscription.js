const Subscription = require('../model/Subscription');
const Customer = require('../model/Customer');
const subscription = async (req, res) => {
    try {
        const { customerId, start_date, end_date, product } = req.body;

        // Check if the customer exists
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: 'Customer not found' });
        }

        // Check if the customer has an active subscription
        const activeSubscription = await Subscription.findOne({ customerId: customerId, status: 'Active' });
        if (activeSubscription) {
            return res.status(400).json({ message: 'Customer already has an active subscription' });
        }

        // Create a new subscription instance
        const newSubscription = new Subscription({
            customerId: customerId,
            customerName: customer.name,
            customerEmail: customer.email,
            start_date,
            end_date,
            product
        });

        // Save the subscription to the database
        const savedSubscription = await newSubscription.save();

        // Send the saved subscription as a response
        res.status(201).json(savedSubscription);
    } catch (error) {
        console.error('Error adding subscription:', error);
        res.status(500).json({ message: 'Error adding subscription', error });
    }
}

const subscriptions = async (req, res) => {
    try {
        // Your logic to fetch subscriptions from the database
        // For example, assuming you have a Subscription model
        // const subscriptions = await Subscription.find({ customer: req.user.userId });
        const subscriptions = await Subscription.find();
        const totalCount = await Subscription.countDocuments();;
        // Return the subscriptions
        res.status(200).json({subscriptions,totalCount});
    } catch (error) {
        console.error('Error listing subscriptions:', error);
        res.status(500).json({ message: 'Error listing subscriptions', error });
    }
}

const deleteSubscription= async (req, res) => {
    try {
        // Your logic to delete the subscription from the database
        // For example, assuming you have a Subscription model
        if(!req.params.id){
            return res.status(404).json({ message: 'Please pass id' });
        }
        const deletedSubscription = await Subscription.findByIdAndDelete(req.params.id);

        // Check if the subscription exists
        if (!deletedSubscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }

        // Return a success response
        res.status(200).json({ message: 'Subscription deleted successfully', deletedSubscription });
    } catch (error) {
        console.error('Error deleting subscription:', error);
        res.status(500).json({ message: 'Error deleting subscription', error });
    }
}

const cancelSubscription = async (req, res) => {
    try {
        // Your logic to cancel the subscription in the database
        // For example, assuming you have a Subscription model
        const canceledSubscription = await Subscription.findByIdAndUpdate(
            req.params.id,
            { status: 'canceled' },
            { new: true }
        );

        // Check if the subscription exists
        if (!canceledSubscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }

        // Return a success response
        res.status(200).json({ message: 'Subscription canceled successfully', canceledSubscription });
    } catch (error) {
        console.error('Error canceling subscription:', error);
        res.status(500).json({ message: 'Error canceling subscription', error });
    }
}

const updateSubscription =  async (req, res) => {
    try {
        // Extract the fields to update from the request body
        const { subscriptionDetailsToUpdate } = req.body;

        // Your logic to update the subscription in the database
        // For example, assuming you have a Subscription model
        const updatedSubscription = await Subscription.findByIdAndUpdate(
            req.params.id,
            subscriptionDetailsToUpdate,
            { new: true }
        );

        // Check if the subscription exists
        if (!updatedSubscription) {
            return res.status(404).json({ message: 'Subscription not found' });
        }

        // Return a success response
        res.status(200).json({ message: 'Subscription updated successfully', updatedSubscription });
    } catch (error) {
        console.error('Error updating subscription:', error);
        res.status(500).json({ message: 'Error updating subscription', error });
    }
}

const getCancelledSubscriptions = async (req, res) => {
    try {
        // Query for cancelled subscriptions
        const cancelledSubscriptions = await Subscription.find({ status: 'canceled' });

        // Return the cancelled subscriptions
        res.status(200).json({ message: 'Cancelled subscriptions fetched successfully', cancelledSubscriptions });
    } catch (error) {
        console.error('Error fetching cancelled subscriptions:', error);
        res.status(500).json({ message: 'Error fetching cancelled subscriptions', error });
    }
}


const activeSubscriptions = async (req, res) => {
    try {
        // Query for cancelled subscriptions
        const activeSubscriptions = await Subscription.find({ status: 'Active' });

        // Return the cancelled subscriptions
        res.status(200).json({ activeSubscriptions });
    } catch (error) {
        console.error('Error fetching active subscriptions:', error);
        res.status(500).json({ message: 'Error fetching active subscriptions', error });
    }
}

exports.subscription = subscription;
exports.subscriptions = subscriptions;
exports.deleteSubscription = deleteSubscription;
exports.cancelSubscription = cancelSubscription;
exports.updateSubscription = updateSubscription;
exports.getCancelledSubscriptions = getCancelledSubscriptions;
exports.activeSubscriptions = activeSubscriptions;