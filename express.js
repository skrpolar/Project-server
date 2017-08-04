var express = require('express');
var fs = require('fs');
var app = express();
var server = require('http').createServer(app);
// var router = express.Router();

app.use('/getnavbar', function (req, res) {
    var s = JSON.parse(fs.readFileSync('./www/navInit.json', 'utf8'));
    console.log(s);
    // res.header('Access-Control-Allow-Origin', '*');
    res.jsonp(s);
});


// var marked = require('marked');
// console.log(marked('I am using __markdown__.'));

// app.use('/', express.static(__dirname + '/www'));

// router.get('/getnavbar',function(req, res) {
//     var s = JSON.parse(fs.readFileSync('./www/navInit.json'));
//     console.log(s);
//     // res.header('Access-Control-Allow-Origin','*');
//     res.send(s);
// });

// router.get('/getMarkDown',function(req, res) {
//     fs.readFile('./www/gitbook.md','utf8',function(err, data) {
//         res.send(marked(data));
//         console.log(marked(data));
//     });
//     // res.send(md);
// });

// app.use(router);

server.listen(90);