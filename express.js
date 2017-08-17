var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express(),
    server = require('http').createServer(app),
    router = express.Router(),
    marked = require('marked');

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
    // fs.readFile(`./md/x/${req.query.name}_${req.query.locale}.md`, 'utf8', function (err, data) {
    //     res.jsonp({
    //         a: data
    //     });
    // });


    var b = searchDir('./md', `${req.query.name}_${req.query.locale}.md`)
    .then(function (p){
        console.log(p);
    })
    

});

app.use(router);

server.listen(8089);



function searchDir(path, fileName) {
    return new Promise(function (resolve, reject) {
        fs.readdir(path, function (err, files) {
            for (var i in files) {
                (function (i) {
                    fs.stat(`${path}/${files[i]}`, function (err, stats) {
                        if (stats.isDirectory()) {
                            
                        } else {
                            if (files[i] == fileName) {
                                resolve(files[i]);
                            } 
                        }
                    });
                })(i);
            }
        });
    });
}
