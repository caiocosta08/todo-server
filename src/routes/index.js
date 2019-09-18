const express = require('express');
const router = express.Router();
const {User} = require('../../app/models');

router.get('/', async function (req, res, next) {
    let txt = '<h3>Página Inicial</h3><h4>Usuários cadastrados: </h4>';
    let users = await User.findAll();
    await users.map((u) => {
        txt += 'ID: ' + u.id + ' - Nome: ' + u.name + '<br>';    
    } )
    res.send(txt);
    users = User.findOne({
        where: {
            name: 'Caio'
        }
    })
    .then(item => {
        item = JSON.stringify(item);
        console.log(item)
    })
    
});

module.exports = router;