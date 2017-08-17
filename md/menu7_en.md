# test

```javascript
console.log('test');

var routers = []; 

var g = document.createElement('script');
g.src = 'http://localhost:8089/getnavbar?type=router';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(g, s);

window.change = function (d) {
  for ( var i in d ) {
    if( d[i].hasOwnProperty('next') ){
      window.change(d[i].next);
    }else {
      routers.push({
        path: d[i].path,
        name: i,
        component: content
      });
      router.addRoutes(routers);
      routers = [];
    }
  }
}

if (this.$route.name.length > 5) {
    var i = -1;
    var routename = '';
    do {
        i = this.$route.name.indexOf('_', i + 1);
        if (i != -1) {
            routename += ' ' + this.$route.name.substr(0, i);
        }
    } while (i != -1);
    sessionStorage.navIndex = routename;
}
```