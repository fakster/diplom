const Sequelize = require('sequelize')
const db =require('../database/db.js')

let users =  db.sequelize.define(
    'users',
    {
        idUsers:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        login:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        role:{
            type:Sequelize.STRING
        } 
        
    },
    {
        
        timestamps:false
    } 
 
)
let clients = db.sequelize.define(
    'clients',
    {
        idClient:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        First_name:{
            type:Sequelize.STRING
        },
        Second_name:{
            type:Sequelize.STRING
        },
        Number_of_phone:{
            type:Sequelize.STRING
        },
        Name_of_Organize:{
            type:Sequelize.STRING
        },
        last_update:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
       
    },
    {
        timestamps:false
    }
    
)

let orders = db.sequelize.define(
    'order',
    {
        idOrder:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        Comment:{
            type:Sequelize.STRING
        },
        Type:{
            type:Sequelize.STRING
        },
        Description:{
            type:Sequelize.STRING
        },
        Last_update:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }   
    },
    {
        timestamps:false
    }  
);
let review = db.sequelize.define(
    'review',
    {
        idReview:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        Text:{
            type:Sequelize.STRING
        },
        Date_of_create:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        Rating:{
            type:Sequelize.INTEGER
        },
        Last_update:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }   
    },
    {
        timestamps:false
    }  
);
let contract = db.sequelize.define(
    'contract',
    {
        idContract:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        Price:{
            type:Sequelize.FLOAT
        },
        Conditions:{
            type:Sequelize.INTEGER
        },
        Last_update:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }   
    },
    {
        timestamps:false
    }  
);
let passport = db.sequelize.define(
    'passport_data',
    {
        idPassport:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        Date_of_birth:{
            type:Sequelize.TEXT
        },
        Issued_by:{
            type:Sequelize.TEXT
        },
        Date_of_issue:{
            type:Sequelize.TEXT
        },
        Adress:{
            type:Sequelize.TEXT
        },
        Last_update:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        Series_Number_Passport:{
            type:Sequelize.TEXT
        }   
    },
    {
        timestamps:false
    }  
);
let position = db.sequelize.define(
    'position',
    {
        idPosition:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        Job_title:{
            type:Sequelize.FLOAT
        },
        Date_of_entry:{
            type:Sequelize.INTEGER
        },
        last_update:{
            type:Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }   
    },
    {
        timestamps:false
    }  
);


users.hasOne(clients);
clients.belongsTo(users);

module.exports.passport = passport
module.exports.contract = contract
module.exports.review = review
module.exports.orders = orders
module.exports.users = users
module.exports.position = position