const express = require('express');
const { addCustomer, customers, customer } = require('../controller/customer');
const { subscription, subscriptions, deleteSubscription, updateSubscription, cancelSubscription, getCancelledSubscriptions, activeSubscriptions } = require('../controller/subscription');
const { verifyAdmin } = require('../middlewares/admin');
const { register, login } = require('../controller/user');
const { authToken } = require('../middlewares/authentication');
const router = express.Router();
router.get('/get',(req,res)=>{
    res.send('get')
})


// Customer Module
router.post('/customer',authToken,addCustomer);
router.get('/customers',authToken,customers);
router.get('/customer/:id',authToken,customer);

// Subscriptions module
router.post('/subscription',authToken,subscription);
router.get('/subscriptions',authToken,subscriptions);
router.get('/subscription/inactive',authToken,getCancelledSubscriptions);
router.get('/subscription/active',authToken,activeSubscriptions);
router.put('/subscription/:id',authToken,updateSubscription);
router.put('/subscription/:id/cancel',authToken,cancelSubscription);
router.delete('/subscription/:id',authToken,deleteSubscription);

// User module
router.post('/register',register);
router.post('/login',login);

module.exports = router;