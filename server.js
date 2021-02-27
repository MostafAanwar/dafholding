const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const products = require('./routes/api/products');
const signup = require('./routes/api/signUp');
const cors = require('cors')
const app = express();


app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});


app.use(bodyParser.urlencoded({
  extended: true
}));

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('connected to db'))
    .catch(err => console.log(err));

app.use('/', express.static(__dirname));
app.use('/products', products);
app.use('/signup', signup);

const port = 3000; 

app.listen(port, () => console.log(`server on http://localhost:3000`));