const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
PORT = 4000;
require('dotenv').config();

// console.log(process.env.PORT)

const ShowAll = require('./Routes/showAll'); 
const addTodo = require('./Routes/addTodo'); 
const updateTodo = require('./Routes/updateTodo'); 

app.use(cors());
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());     

mongoose.connect('mongodb+srv://hemant:hemant@node-rest-shop-iqovk.mongodb.net/test?retryWrites=true', {
    useNewUrlParser: true
}).then(() => console.log('database connected successfully'));

app.use('/showall', ShowAll)
app.use('/addtodo',addTodo);
app.use('/updatetodo', updateTodo);  

app.use(bodyParser.json()); 
app.listen(PORT, () => console.log(`server running on port ${PORT}`));