const express = require('express');
const app = express();
const cors = require('cors');
const port = 7700;
require('dotenv').config()
const database = require('./config/db')


 
//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//routes
app.use('/api/users', require('./routes/userRoute'));

app.get('/api/retrieve', (req,res) => {
    res.send('Hello world!');
})

// database
database()

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
})    