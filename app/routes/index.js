var express = require('express');
var router = express.Router();


// before using ejs
// router.get('/', function (req, res) {
//     var content = '';
//     content += '<link href="css/style.css" type="text/css" rel="stylesheet">';
//     content += '<h1>HELLO WORLD</h1>';
//     content += '<h1>THIS TUTORIAL IS FUCKING SUCK!!!</h1>';
//     content += '<img src="/images/misc/background.jpg" alt="background" style="height: 300px">';
//     content += '<script  src="/reload/reload.js"></script>';
//     res.send(content);
// });


router.get('/', function (req, res) {
    var data = req.app.get('appData');
    var pagePhotos = [];

    data.speakers.forEach(function (item) {
        pagePhotos = pagePhotos.concat(item.artwork);
    });


    res.render('index', {
        pageTitle: "Home",
        artwork: pagePhotos,
        pageID: "home"
    });
});
module.exports = router;