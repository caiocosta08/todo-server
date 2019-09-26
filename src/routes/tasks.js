const express = require('express');
const router = express.Router();
const {Task} = require("../../app/models");

router.get('/', async function (req, res, next) {
    let tasks = await Task.findAll();
    res.send(tasks); 
});

router.post('/new', async function(req, res, next){
    let tasks = await Task.create(req.body);
    if(tasks) res.json(tasks);
    else res.jsonp(null);
});

router.post('/delete', async function(req, res, next){
    let task = await Task.destroy({
        where: {
            id: req.body.id,
            //user_id: req.body.user_id 
        }
    });
    if(task) res.json(task);
    else res.jsonp(null);
});

router.post('/update', async function(req, res, next){
    let task = await Task.update({
        name: req.body.name,
        description: req.body.description,
        scope: req.body.scope,
        date_todo: req.body.date_todo,
        categorie_id: req.body.categorie_id,
        status_id: req.body.status_id,
        date_finish: req.body.date_finish,

    },{
        where: {
            id: req.body.id,
            //user_id: req.body.user_id
        }
    });
    if(task) res.json(task);
    else res.jsonp(null);
});

module.exports = router;