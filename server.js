var express = require('express')
var cors=require('cors')
var bodyParser = require('body-parser')
var app =express()
var acl = require('express-acl')
var port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))



var Orders = require('./routes/Orders')
var Users = require('./routes/Users')

app.use('/users', Users)
app.use('/orders', Orders)

app.listen(port, ()=>{
    console.log("Server is running on port: " + port)
})