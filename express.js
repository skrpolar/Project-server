var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);
var router = express.Router();
var marked = require('marked');

app.use('/', express.static(__dirname + '/vuewebpack'));

router.get('/getnavbar', function (req, res) {
    fs.readFile('./www/navInit.json', 'utf8', function (err, data) {
        if (req.query.type == 'router') {
            res.send(`change(${data})`);
        } else {
            res.jsonp(JSON.parse(data));
        }

    });
});

router.get('/getmarkdown', function (req, res) {
    fs.readFile(`./md/${req.query.name}_${req.query.locale}.md`, 'utf8', function (err, data) {
        res.jsonp({
            a: data
        });
    });
});

app.use(router);

server.listen(8089);