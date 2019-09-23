const express = require('express');
const router = express.Router();
const {Scope} = require('../../app/models');

router.get('/', async function(req, res, next){
    let scopes = await Scope.findAll();
    res.send(scopes);
});

router.post('/new', async function(req, res, next){
    let scopes = await Scope.create(req.body);
    if(scopes) res.json(scopes);
    else res.jsonp(null);
});

router.post('/delete', async function(req, res, next){
    let scopes = await Scope.destroy({
        where: {
            id: req.body.id
        }
    });
    if(scopes) res.json(scopes);
    else res.jsonp(null);
});

router.post('/update', async function(req, res, next){
    let scopes = await Scope.update({
        name: req.body.name,
        description: req.body.description
    },{
        where: {
            id: req.body.id
        }
    });
    if(scopes) res.json(scopes);
    else res.jsonp(null);
});

module.exports = router;