const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const register = require('./controlers/register');
const signin = require('./controlers/signin');
const profile = require('./controlers/profile');
const image = require('./controlers/image');

const db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'Admin1!1!',
    database : 'smart-brain'
  }
});

const app = express();
app.use(bodyParser.json())
app.use(cors())

const database = {
  users: [
    {
      id: '123',
      name: 'John',
      email: 'john@gmail.com',
      password: 'cookies',
      entries: 0,
      joined: new Date()
    },
    {
      id: '124',
      name: 'Sally',
      email: 'sally@gmail.com',
      password: 'bananas',
      entries: 0,
      joined: new Date()
    }
  ]
}

app.get('/', (req, res) => {
  res.send(database.users)
})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) } );

app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)} )


app.get('/profile/:id', (req, res) => {profile.handleProfileGet(req, res, db)} )

app.put('/image', (req, res) => { image.handleImage(req, res, db) } )

app.post('/imageurl', (req, res) => { image.handleAPICall(req, res) } )



app.listen(3001, () => {
  console.log('app is running on port 3001');
})

console.log(process.env)