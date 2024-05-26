const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.DB_URI).then((res)=>{
    console.log('Database is connected successfully');
}).catch((error)=>{
    console.log(error);
})