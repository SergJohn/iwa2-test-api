const UPLOAD_PATH = require('./routes').UPLOAD_PATH;
const Image = require('./models/image');
const path = require('path');
const fs = require('fs');
const del = require('del');

exports.uploadImage = function(req, res){

    let newImage = new Image();
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalname;
    newImage.desc = req.body.desc;

    newImage.save(err => {
        if (err){
            return res.sendStatus(400);
        }
        res.status(201).send({newImage});
    });

}