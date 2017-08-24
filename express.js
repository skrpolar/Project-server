var express = require('express'),
    fs = require('fs'),
    path = require('path'),
    app = express(),
    server = require('http').createServer(app),
    router = express.Router(),
    marked = require('marked'),
    history = require('connect-history-api-fallback');

// app.use(history());

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
    var nav = JSON.parse(fs.readFileSync('./www/navInit.json', 'utf8'));
    coreContent(obj, req.query.s, req.query.lang, nav)
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

function searchContent(obj, content, nav, lang) {
    return new Promise(function (resolve, reject) {
        function ser(obj, content, nav, lang) {
            for (var i in obj) {
                (function (i) {
                    fs.readFile(obj[i].path, function (err, data) {
                        var re = /<[^>]+>/gi;
                        var str = marked(data.toString()).replace(re, '');
                        var re2 = new RegExp(`.*${content}.*`, 'gi');
                        var re3 = new RegExp(`${content}`, 'gi');
                        if (str.search(re2) !== -1) {
                            coreTitle(nav, content, lang, obj[i].name, true, re3)
                                .then(t => {
                                    var index = str.search(re2);
                                    var n = str.substr(index, 300);
                                    var x = n.replace(re3, '<em>$&</em>');
                                    x = x.replace(/[\n]/gi, '');
                                    c.push({
                                        name: t,
                                        router: obj[i].name,
                                        content: x
                                    });
                                });
                        } else {
                            coreTitle(nav, content, lang, obj[i].name, false, re3)
                                .then(t => {
                                    c.push({
                                        name: t,
                                        router: obj[i].name,
                                        content: str
                                    });
                                }).catch(e => {
                                    console.log(e);
                                });
                        }
                        num++;
                        if (num == obj.length) {
                            setTimeout(function() {
                                resolve(c);
                            }, 0);
                        }
                    });
                })(i);
            }
        }

        var num = 0;
        var c = [];
        ser(obj, content, nav, lang);
    });
}

function searchNav(obj, content, lang, name, j, re3) {
    return new Promise(function (resolve, reject) {
        function searchNavInit(obj, content, lang, name, j, re3) {
            for (var i in obj) {
                if (i == name) {
                    if (j) {
                        // console.log(name);
                        if (obj[i].text[lang].search(re3) !== -1) {
                            resolve(obj[i].text[lang].replace(re3, '<em>$&</em>'));
                        } else resolve(obj[i].text[lang]);
                    } else {
                        if (obj[i].text[lang].search(re3) !== -1) {
                            resolve(obj[i].text[lang].replace(re3, '<em>$&</em>'));
                        }
                    }
                } else if (obj[i].hasOwnProperty('navActive')) {
                    searchNavInit(obj[i].next, content, lang, name, j, re3);
                }
            }
        }

        searchNavInit(obj, content, lang, name, j, re3);
    });
}

/*

if (obj[i].hasOwnProperty('navActive')) {
            if (obj[i].text[lang].search(re) !== -1) {
                if (i == name) {
                    return obj[i].text[lang].replace(re, '<em>$&</em>');
                } else {
                    return (i => searchNavInit(obj[i].next, content, lang, name))(i);
                }
            } else {
                if (i == name) {
                    return obj[i].text[lang];
                } else {
                    return (i => searchNavInit(obj[i].next, content, lang, name))(i);
                }
            }
        } else {
            if (obj[i].text[lang].search(re) !== -1) {
                if (i == name) {
                    return obj[i].text[lang].replace(re, '<em>$&</em>');
                }
            } else {
                if (i == name) {
                    return obj[i].text[lang];
                }
            }
        }

*/

async function coreDir(path, fileName) {
    try {
        const result = await searchDir(path, fileName);
        return result;
    } catch (error) {
        console.log(`core_dir_error: ${error}`);
    }
}

async function coreContent(obj, content, lang, nav) {
    try {
        const result = await searchContent(obj, content, nav, lang);
        return result;
    } catch (error) {
        console.log(`core_dir_error: ${error}`);
    }
}

async function coreTitle(obj, content, lang, name, j, re3) {
    try {
        const result = await searchNav(obj, content, lang, name, j, re3);
        return result;
    } catch (error) {
        console.log(`core_title_error: ${error}`);
    }
}