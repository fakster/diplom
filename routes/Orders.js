const express = require('express')
const router = express.Router()
const Model = require('../models/Models')
const cors = require('cors')

router.use(cors())

//GetAll
router.get('/orders', (req,res)=>{
    
    Model.orders.FindAll()
    .then(orders=>{
        res.json(orders)
    })
    .catch(err =>{
        res.send("error: " + err)
    })
})

//Add order

router.post('/order', (req,res)=>{
    const today = new Date()
const orderData ={
    Comment:req.body.Comment,
    Type:req.body.Type,
    Description:req.body.Description,
    Last_update: today
}
        Model.orders.create(orderData)
        .then(()=>{
            res.send("Заказ создан")
        }).catch(err=>{
            res.send("error: " + err)
        }) 
})


module.exports = router