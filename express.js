var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);
var router = express.Router();
var marked = require('marked');

app.use('/', express.static(__dirname + '/vuewebpack'));

router.get('/getnavbar', function (req, res) {
    var s = JSON.parse(fs.readFileSync('./www/navInit.json', 'utf8'));
    res.jsonp(s);
});

router.get('/getmarkdown', function (req, res) {
    var b = ((fs.readFileSync(`./md/${req.query.name}.md`, 'utf8')).toString());
    res.jsonp({a: b});
});

app.use(router);

server.listen(8089);

// marked.setOptions({
//     renderer: new marked.Renderer(),
//     gfm: true,
//     tables: true,
//     breaks: false,
//     pedantic: false,
//     sanitize: false,
//     smartLists: true,
//     smartypants: false
// });
