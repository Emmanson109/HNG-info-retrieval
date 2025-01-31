const mongoose = require('mongoose')
require('dotenv').config();

const database = async ()=>{
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('Database connection successful');
    }).catch(()=>{
        console.log('Database connection not successfull')
    })
}

module.exports = database;