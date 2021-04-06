const express = require('express'),
router = express.Router();

var itemCtrl = require('./item-controller');
var userCtrl = require('./user-controller');

// GET
router.get('/hello', itemCtrl.getWorld);

router.get('/users', userCtrl.getUsers);

router.get('/users/:id', userCtrl.getUser);

router.get('/hello/:foo/:bar', itemCtrl.getWorldParams);

// POST
router.post('/hello', itemCtrl.postWorld);

router.post('/users', userCtrl.createUser);

// PUT
router.put('users/:id', userCtrl.updateUser);

router.delete('users/:id', userCtrl.deleteUser);

// calling external API from Controller
router.get('/characters', itemCtrl.getCharacters);

// Uploading images
module.exports.UPLOAD_PATH = "uploads";

var multer = require("multer");
var upload = multer({dest: module.exports.UPLOAD_PATH});
var imageCtrl = require('./image-controller');

router.post('/images', upload.single('image'), imageCtrl.uploadImage);
router.get('/images', imageCtrl.getImages);
module.exports = router;