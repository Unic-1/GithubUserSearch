var express = require('express')
var SequelizeMod = require('sequelize')
var passport = require('./config/passport')
const bodyParser = require('body-parser');
var cors = require('cors')
var app = express()
app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Orgin', '*');
    res.header(
      'Access-Control-Allow-Header',
      'Orgin,X-Requested-With, Content-Type, Accept, Authorization',
    );
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Orgin', 'PUT,POST,PATCH,DELETE,GET');
      return res.status(200).json({});
    }
    next();
  });

var sequelizeDb = require('./db')

//use bodyParser() to let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize Passport and restore authentication state, if any, from the
// session.
// app.use(passport.initialize());
// app.use(passport.session());


app.post('/signup', function (req, res) {
    const {username, password} = req.body;

    const sQuery = 'INSERT INTO user (username, password) VALUES (:username, :password)';

    sequelizeDb.sequelize.query(sQuery,{
        replacements: {
            username,
            password
        },
        type: SequelizeMod.QueryTypes.INSERT
    })
    .then(res => {
        res.sendStatus(200)        
    }).catch(e=>  {
        res.sendStatus(400)        
    })
})

app.get('/products/:id',  cors(),function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.post('/login', passport.authenticate('local'),function (req, res) {
    res.send(200)
})

app.listen(3020)