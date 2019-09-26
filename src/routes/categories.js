const express = require('express');
const router = express.Router();
const {Categorie} = require("../../app/models")

router.get('/', async function (req, res, next) {
    let categories = await Categorie.findAll();
    res.send(categories); 
});

router.post('/new', async function(req, res, next){
    let categorie = await Categorie.create(req.body);
    if(categorie) res.json(categorie);
    else res.jsonp(null);
});

router.post('/delete', async function(req, res, next){
    let categorie = await Categorie.destroy({
        where: {
            id: req.body.id
        }
    });
    if(categorie) res.json(categorie);
    else res.jsonp(null);
});

router.post('/update', async function(req, res, next){
    let categorie = await Categorie.update({
        name: req.body.name,
        description: req.body.description
    },{
        where: {
            id: req.body.id
        }
    });
    if(categorie) res.json(categorie);
    else res.jsonp(null);
});

module.exports = router;