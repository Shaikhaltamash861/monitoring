const express = require('express')
const app = express();
const cors = require('cors');
const parser = require('body-parser');
require('dotenv').config();
require('./connectionDb/connection');
const PORT = process.env.PORT
const router = require('./router/Router');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/api',router);
app.get('/test',(req,res)=>{
    res.send("Backend is live");
})


app.listen(PORT,()=>console.log('app is running'));