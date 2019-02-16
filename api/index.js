var express = require('express')
var app = express()
var SequelizeMod = require('sequelize')
const bodyParser = require('body-parser');

//use bodyParser() to let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var sequelize = require('./config.js')

app.post('/signup', function (req, res) {
    const {username, password} = req.body;

    const sQuery = 'INSERT INTO user (username, password) VALUES (:username, :password)';

    sequelize.query(sQuery,{
        replacements: {
            username,
            password
        },
        type: SequelizeMod.QueryTypes.INSERT
    }).then(res => {
        res.sendStatus(200)        
    }).catch(e=>  {
        res.sendStatus(400)        
    })
    res.send('SIGN UP')
})

app.post('/login', function (req, res) {
    const {username, password} = req.body;

    const sQuery = 'SELECT * FROM user WHERE username=:username AND password=:password';

    sequelize.query(sQuery,{
        replacements: {
            username,
            password
        },
        type: SequelizeMod.QueryTypes.SELECT
    }).then(result => {
        if(result.length > 0) {
            res.send(200, {
                username: result[0].username
            })
        } else {
            res.send(403, "Invalid user")
        }
        return res
    }).catch(e=>  {
        res.sendStatus(400)
    })
    
})

app.listen(3000)