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
    coreDir('./md', `${req.query.name}_${req.query.locale}.md`)
        .then(path => {
            fs.readFile(path, 'utf8', function (err, data) {
                res.jsonp({
                    a: data
                });
            });
        })
});

router.get('/search', function (req, res) {
    var obj = getFileList('./md', req.query.lang);
    coreContent(obj, req.query.s)
        .then(arr => {
            res.jsonp(arr);
        });
});

app.use(router);

server.listen(8089);

function searchDir(path, fileName) {
    return new Promise(function (resolve, reject) {
        function ser(path, fileName) {
            fs.readdir(path, function (err, files) {
                for (var i in files) {
                    (function (i) {
                        fs.stat(`${path}/${files[i]}`, function (err, stats) {
                            if (stats.isDirectory()) {
                                ser(`${path}/${files[i]}`, fileName)
                            } else {
                                if (files[i] == fileName) {
                                    resolve(`${path}/${files[i]}`);
                                }
                            }
                        });
                    })(i);
                }
            });
        }

        ser(path, fileName);
    });
}

function getFileList(path, lang) {
    var filesList = [];
    readFile(path, filesList, lang);
    return filesList;
}

function readFile(path, filesList, lang) {
    files = fs.readdirSync(path);
    files.forEach(walk);

    function walk(file) {
        states = fs.statSync(`${path}/${file}`);
        if (states.isDirectory()) {
            readFile(`${path}/${file}`, filesList, lang);
        } else {
            var index = file.indexOf(`_${lang}`);
            if (index !== -1) {
                filesList.push({
                    name: file.substring(0, index),
                    path: `${path}/${file}`
                });
            }
        }
    }
}

function searchContent(obj, content) {
    return new Promise(function (resolve, reject) {
        function ser(obj, content) {
            for (var i in obj) {
                (function (i) {
                    fs.readFile(obj[i].path, function (err, data) {
                        var re = /<[^>]+>/gi;
                        var str = marked(data.toString()).replace(re, '');
                        var re2 = new RegExp(`.*${content}.*`, "gi");
                        if (str.search(re2) !== -1) {
                            var index = str.search(re2);
                            var n = str.substr(index, 300);
                            // var n = str;
                            n = n.replace(/[\n]/gi, '');
                            c.push({
                                name: obj[i].name,
                                content: n
                            });
                        }
                        num++;
                        if (num == obj.length) {
                            resolve(c);
                        }
                    });
                })(i);
            }
        }

        var num = 0;
        var c = [];
        ser(obj, content);
    });
}

async function coreDir(path, fileName) {
    try {
        const result = await searchDir(path, fileName);
        return result;
    } catch (error) {
        console.log(`core_dir_error: ${error}`);
    }
}

async function coreContent(obj, content) {
    try {
        const result = await searchContent(obj, content);
        return result;
    } catch (error) {
        console.log(`core_dir_error: ${error}`);
    }
}