const express = require('express');
const router = express.Router();
const {User} = require('../../app/models');

router.get('/', async function(req, res, next){
    let users = await User.findAll();
    res.send(users);
});

router.post('/new', async function(req, res, next){
    let users = await User.create(req.body);
    if(users) res.json(users);
    else res.jsonp(null);
});

router.post('/delete', async function(req, res, next){
    let users = await User.destroy({
        where: {
            id: req.body.id
        }
    });
    if(users) res.json(users);
    else res.jsonp(null);
});

router.post('/update', async function(req, res, next){
    let users = await User.update({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    },{
        where: {
            id: req.body.id
        }
    });
    if(users) res.json(users);
    else res.jsonp(null);
});

module.exports = router;