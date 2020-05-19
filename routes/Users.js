const express = require('express')
const router = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


let User = require('../models/Models')
router.use(cors())

process.env.SECRET_KEY = 'secret'

//Регистрация
router.post('/register', (req, res) => {
    const userData = {
        login: req.body.login,  
        password: req.body.password,
        email: req.body.email
    }
    User.users.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {
            if (!user) {
                 bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.users.create(userData)
                        .then(user => {
                            res.json({ status: user.email + 'Registered!' })   
                        })
                        .catch(err => {
                            res.send('error:' + err)
                        })
                    }) 
            } else {
                res.status(400).json({ error: 'Пользователь уже существует' })    
            }
        })
        .catch(err => {
            res.send('error:' + err)
        })
})
//логин
router.post('/login', (req, res) => {
    User.users.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(user => {                
                if (user) {
                    if(bcrypt.compareSync(req.body.password, user.password)){
                    console.log("Success")
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440                        
                    })
                    res.header('Authorization',token).send(token)            
                    }else{res.status(400).json({error:'Password is not correct'})}                         
                }else{            
                    res.status(400).json({ error: 'User does not exist' })                
                }   
        })
        .catch(err => {
            res.status(400).json( 'error:' + err )
            
        })
})
//Инфо о клиентах
router.post('/info', (req,res)=>{
    const today = new Date()
const infoData ={
    First_name:req.body.First_name,
    Second_name:req.body.Second_name,
    Number_of_phone:req.body.Number_of_phone,
    Name_of_Organize:req.body.Name_of_Organize,
    Last_update: today
    
}

        User.clients.create(infoData)
        .then(()=>{
            res.send("Info was added")
        }).catch(err=>{
            res.send("error: " + err)
        }) 
})
//подтверждние токена выводим e-mail
router.get('/profile', (req, res) => {
    
   var decoded = jwt.verify(req.header('Authorization'), process.env.SECRET_KEY)
  
    User.users.findOne({
      where: {
    email: decoded.email
      }
    })
      .then(user => {
        if (user) {
          res.json(user)
        } else {
          res.send('User does not exist')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
    
})

//все пользователи
router.get("/getAll", (req, res) => {
    User.users.findAll()
        .then(login => {
            res.json(login)
        }).catch(err => {
            res.send("error: " + err)
        })
})/*
//удалить
router.delete("/delete/:id", (req, res) => {
    User.destroy({
        where: {
            idUsers: req.params.id
        }
    }).then(() => {
        res.send("User with id:" + req.params.id + "is delete")
    })
        .catch(err => {
            res.send("errors: " + err)
        })
})
// обновить
router.put("/update/:id", (req, res) => {
    if (!req.body.login) {
        res.status(400)
        res.json({
            error: "Bad data"
        })
    } else {
        User.update({
            login: req.body.login
        },
            { where: { idUsers: req.params.id } }
        )
            .then(() => {
                res.send("User update")
            }).error(err => res.send(err))
    }
})
//Добавить сотрудника 
router.post("/add", (req, res) => {
    const userDate = {
        login: req.body.login,
        password: req.body.password,
        email: req.body.email
    }

    if (!req.body.login) {
        res.status(400)
        res.json({
            error: "Неверные данные"
        })

    } else {
        User.create(userDate)
            .then(() => {
                res.send("сотрудник создан создан")
            }).catch(err => {
                res.send("error: " + err)
            })
    }
})
//найти одного пользователя
router.get('/get/:id', (req, res) => {
    User.findOne({
        where: {
            idUsers: req.params.id
        }
    }).then((login) => {
        res.json(login)
    }).catch((err) => {
        res.send("error: " + err)
    })
})
*/

module.exports = router