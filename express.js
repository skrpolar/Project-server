var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);
var router = express.Router();
var marked = require('marked');

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});


app.use('/', express.static(__dirname + '/vuewebpack'));

router.get('/getnavbar', function (req, res) {
    var s = JSON.parse(fs.readFileSync('./www/navInit.json', 'utf8'));
    res.jsonp(s);
});

router.get('/getmarkdown', function (req, res) {
    fs.readFile('./www/gitbook.md', 'utf8', function (err, data) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
        console.log(data);
    });
    // res.send(md);
});

app.use(router);

server.listen(90);