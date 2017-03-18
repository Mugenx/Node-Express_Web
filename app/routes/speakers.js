var express = require('express');
var router = express.Router();

// router.get('/speakers', function (req, res) {
//     // var content = '';
//     // var dataFile = req.app.get('appData');
//     // dataFile.speakers.forEach(function (item) {
//     //     content += '<link href="css/style.css" type="text/css" rel="stylesheet">';
//     //     content += '<li>';
//     //     content += '<h2>' + item.name + '</h2>';
//     //     content += '<img src="images/speakers/' + item.shortname + '.jpg" alt="speaker" style="height: 300px">';
//     //     content += '<p>' + item.summary + '</p>';
//     //     content += '</li>';
//     //     content += '<script src="/reload/reload.js"></script>';
//     // });
//     // res.send(content);
//     var data = req.app.get('appData');
//     var pagePhotos = [];
//
//     data.speakers.forEach(function (item) {
//         pagePhotos = pagePhotos.concat(item.artwork);
//     });
//
//
//     res.render('speakers', {
//         pageTitle: "Speakers",
//         artwork: pagePhotos,
//         pageID: "speakers"
//     });
// });

router.get('/speakers', function(req, res) {
    var data = req.app.get('appData');
    var pagePhotos = [];
    var pageSpeakers = data.speakers;

    data.speakers.forEach(function(item) {
        pagePhotos = pagePhotos.concat(item.artwork);
    });

    res.render('speakers', {
        pageTitle: 'Speakers',
        artwork: pagePhotos,
        speakers: pageSpeakers,
        pageID: 'speakers'
    });

});

router.get('/speakers/:id', function (req, res) {
    var dataFile = req.app.get('appData');
    var speaker = dataFile.speakers[req.params.id];
    var output = '<h1>' + speaker.title + '</h1>' +
        '<img src="/images/speakers/' + speaker.shortname + '.jpg" alt="speaker" style="height: 300px">' +
        '<h2>' + speaker.name + '</h2>' +
        '<p>' + speaker.summary + '</p>' +
        '<script src="/reload/reload.js"></script>';
    res.send('<link href="/css/style.css" type="text/css" rel="stylesheet">' + output);
});

module.exports = router;