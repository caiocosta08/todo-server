const express = require('express');
const router = express.Router();
const {Status} = require("../../app/models")

router.get('/', async function (req, res, next) {
    let statuses = await Status.findAll();
    res.send(statuses); 
});

router.post('/new', async function(req, res, next){
    let statuses = await Status.create(req.body);
    if(statuses) res.json(statuses);
    else res.jsonp(null);
});

router.post('/delete', async function(req, res, next){
    let statuses = await Status.destroy({
        where: {
            id: req.body.id
        }
    });
    if(statuses) res.json(statuses);
    else res.jsonp(null);
});

router.post('/update', async function(req, res, next){
    let statuses = await Status.update({
        name: req.body.name,
        description: req.body.description
    },{
        where: {
            id: req.body.id
        }
    });
    if(statuses) res.json(statuses);
    else res.jsonp(null);
});

module.exports = router;