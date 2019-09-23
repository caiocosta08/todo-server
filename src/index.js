const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const router = express.Router();
const indexRouter = require('./routes/index');
const configRouter = require('./routes/config');
const profileRouter = require('./routes/profile');
const tasksRouter = require('./routes/tasks');
const categoriesRouter = require('./routes/categories');
const statusRouter = require('./routes/status');
const usersRouter = require('./routes/users');
const scopesRouter = require('./routes/scopes');

const app = express();

global.users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/config', configRouter);
app.use('/tasks', tasksRouter)
app.use('/categories', categoriesRouter)
app.use('/status', statusRouter)
app.use('/users', usersRouter)
app.use('/scopes', scopesRouter)
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/', function(req, res){
    res.render('index', { title: 'Hey', message: 'Hello there!'});
})

app.listen(8000, function(){
    console.log('Servidor rodando no link: http://localhost:8000');
});

