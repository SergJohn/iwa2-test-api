const express = require('express'),
router = express.Router();

var itemCtrl = require('./item-controller');
var userCtrl = require('./user-controller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

// calling external API from Controller

router.get('/characters', itemCtrl.getCharacters);

module.exports = router;