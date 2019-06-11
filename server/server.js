const express = require('express'); 
const app = express(); 
const morgan = require('morgan'); 
const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');


const userRoute = require('./routes/user'); 

mongoose.connect('mongodb+srv://recipe-manager:'+ process.env.MONGO_ATLAS_PW+'@recipe-manager-h6st3.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser : true
}).then(() => {console.log(`database connection successful`)})
    .catch(err => {
        console.log(err);
        return console.log(`database connection unsuccessful`)
    });

//middleware
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json())
app.use(morgan('dev')); 


//ROUTES
app.use('/user', userRoute); 


app.listen(4000, () => console.log('server running on port 4000')); 



