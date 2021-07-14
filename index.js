const express = require('express');

const router = require('./router')
const app = express();


app.use('/', router)

const server = app.listen(8001, function(){
    console.log('Mock server is running......')
    console.log('localhost:8001')
});