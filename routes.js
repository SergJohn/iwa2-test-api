const express = require('express'),
router = express.Router();

var itemCtrl = require('./item-controller');
var userCtrl = require('./user-controller');

router.get('/hello', itemCtrl.getWorld);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

router.post('/hello', itemCtrl.postWorld);

module.exports = router;