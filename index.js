const express = require('express');

const router = require('./router')
const app = express();

/**
 * Mock Server
 * 此处代码解决卡与问题
 * */
const cors = require('cors');
app.use(cors());

// 方案2
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method' )
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
//     res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
//     next();
//     });

app.use('/', router)

const server = app.listen(8001, function(){
    console.log('Mock server is running......')
    console.log('localhost:8001')
});