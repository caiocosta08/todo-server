const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
//const router = express.Router();
const indexRouter = require('./routes/index');
const configRouter = require('./routes/config');
const profileRouter = require('./routes/profile');
const {User} = require('../app/models');

const app = express();
//User.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });


/*
app.get('/users/:name/:email/:password', async (req, res) => {
    
    let name = req.params.name;
    let email = req.params.email;
    let password = req.params.password;
    const user = await User.create({name: name, email: email, password: password})
    console.log(user)
    res.json(user)
});
*/

global.users = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//app.use('/', indexRouter);
app.use('/profile', profileRouter);
app.use('/config', configRouter);
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


app.engine('pug', require('pug').__express)

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res){
    res.render('index', { title: 'Hey', message: 'Hello there!'});
})


app.get('/form', function(req, res){
    console.log('get form')
    res.type('html')
    res.render('form');
})
app.get('/users', async (req, res) => {
    const user = await User.findAll();
    res.json(await user)

    //console.log(await user)
    //res.redirect('/')
    //res.end()
}); //Listar todos

app.get('/list', async (req, res) => {
    
    res.sendFile(path.join(__dirname+'/views/list.html'))

    //console.log('entrou no get list')
    //res.render('list')
})

app.post('/register', async (req, res) => {
    
    console.log('POST REQ TO ADD NEW USER')
    let user = await User.create(req.body)
                    .then()
                    .catch(e => false)//e)
    //let user = await req.body;
    if(user) res.json(await user)
    else res.jsonp(null);
    //res.redirect('/')
    //res.end()
});

app.post('/update', async (req, res) => {
    
    console.log('POST REQ TO EDIT USER')
    let user = await User.update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }, {where: {
        id: req.body.id
    }})
                    .then()
                    .catch(e => false)//e)
                    
    //let user = await req.body;
    if(user) res.json(await user)
    else res.jsonp(null);
    //res.redirect('/')
    //res.end()
});

app.listen(8000, function(){
    console.log('Servidor rodando no link: http://localhost:8000');
});

