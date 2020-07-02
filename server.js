const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./Controllers/register');
const signin = require('./Controllers/signin');
const profile = require('./Controllers/profile');
const image = require('./Controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'test',
    database : 'smartbrain'
  }
});


const app = express();
app.use(bodyParser.json());
app.use(cors());
//How to create an Array in node.js (array of database users)


app.get('/', (req, res) => {
    res.json(database.users);
})

app.post('/signin', (req, res) => {signin.handleSignin(req, res, db, bcrypt)})

app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})

app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)})

app.put('/image', (req,res) => {image.handleImage(req,res,db)})

app.post('/imageurl', (req, res) => {image.handleApiCall(req,res)})

<<<<<<< HEAD
app.listen(process.env.PORT || 3001, () =>{
    console.log(`app is running on port ${process.env.PORT}`);
=======
app.listen(3001, () =>{
    console.log('app is running on port 3001');
>>>>>>> 5b0e288d43a5b7638eae4c1e2b81f768dd13b64e
})
