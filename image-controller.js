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

exports.getImages = function(req, res) {
    Image.find({}, '-__v').lean().exec((err, images => {
        if (err) {
            return res.sendStatus(400);
        }

        for (let i = 0; i < images.length; i++) {
            var img = images[i];
            img.url = req.protocol + '://' + req.get('host') + '/images/' + img._id;
        }
        res.json(images);
    })
    )
}

exports.getImage = function(req, res) {
    let imgId = req.params.id;

    Image.findById(imgId, (err, image) => {
        if (err) {
            return res.sendStatus(400);
        }

        res.setHeader('Content-Type', 'image/jpeg');
        fs.createReadStream(path.join(UPLOAD_PATH, image.filename)).pipe(res);
    });
};