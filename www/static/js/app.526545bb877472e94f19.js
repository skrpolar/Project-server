webpackJsonp([1],{10:function(t,e,n){function s(t){n(23)}var i=n(0)(n(18),n(212),s,null,null);t.exports=i.exports},12:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(208),i=n.n(s),o=n(206),a=n.n(o),r=n(207),c=n.n(r),l=n(209),u=n.n(l),h=n(5),v=(n.n(h),n(4)),d=(n.n(v),n(2)),g=n.n(d),m=new g.a({locale:"ch",messages:{ch:{search:{msg:"搜索点什么..."}},en:{search:{msg:"Search something..."}}}});e.default={name:"app",i18n:m,data:function(){return{url:"",isEmputy:!1,locale:"ch",searchPng:!1,searchContent:"",navInit:{},liIndex:sessionStorage.index}},watch:{locale:function(t){this.$i18n.locale=t,document.title="en"==t?"Documentation 丨 VRVIU":"技术文档丨威尔直播 VRVIU"}},beforeCreate:function(){},created:function(){},beforeMount:function(){},mounted:function(){var t=navigator.language,e="";localStorage.locale?("en"==localStorage.locale?document.title="Documentation 丨 VRVIU":document.title="技术文档丨威尔直播 VRVIU",this.$i18n.locale=localStorage.locale,this.locale=localStorage.locale):(t.indexOf("zh")>-1&&(e="ch",document.title="技术文档丨威尔直播 VRVIU"),t.indexOf("en")>-1&&(e="en",document.title="Documentation 丨 VRVIU"),this.$i18n.locale=e,this.locale=e,localStorage.locale=e);var n=this,s=document.documentElement,i="orientationchange"in window?"orientationchange":"resize",o=function(){var t=s.clientWidth;t&&(s.style.fontSize=t/1920*100+"px",n.isEmputy=!0)};if(document.addEventListener){window.addEventListener(i,o,!1),document.addEventListener("DOMContentLoaded",o,!1);var a=document.getElementsByClassName("oTop")[0];a.style.display="none",a.onclick=function(){setTimeout(moveScroll,10)};var r=document.getElementsByClassName("left_nav")[0],c=document.getElementsByClassName("right_rev")[0],l=document.getElementsByClassName("content")[0];document.getElementsByClassName("footer")[0];window.moveScroll=function(){document.documentElement.scrollTop=0,document.body.scrollTop=0},c.style.minHeight="10rem",window.onresize=function(){r.style.maxHeight=s.clientHeight+"px",l.getBoundingClientRect().top<=0&&(r.offsetHeight>=s.clientHeight?l.getBoundingClientRect().bottom<=s.clientHeight?r.offsetHeight>l.getBoundingClientRect().bottom-parseFloat(s.style.fontSize)?(r.style.overflowY="scroll",r.style.maxHeight=l.getBoundingClientRect().bottom-parseFloat(s.style.fontSize)+"px"):r.style.overflowY="visible":(r.style.overflowY="scroll",r.style.maxHeight=s.clientHeight+"px"):l.getBoundingClientRect().bottom<=s.clientHeight&&r.offsetHeight>l.getBoundingClientRect().bottom-parseFloat(s.style.fontSize)?(r.style.overflowY="scroll",r.style.maxHeight=l.getBoundingClientRect().bottom-parseFloat(s.style.fontSize)+"px"):r.style.overflowY="visible")},window.onscroll=function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=s.clientWidth;s.clientHeight;a.style.display=t/e>.20876?"block":"none",r.style.maxHeight=s.clientHeight+"px",r.offsetHeight>c.offsetHeight&&(c.style.height=r.offsetHeight+"px"),l.getBoundingClientRect().top<=0?(r.style.position="fixed",r.style.width="2.721761969519731rem",c.style.marginLeft="2.721761969519731rem",r.style.top=0,r.offsetHeight>=s.clientHeight?l.getBoundingClientRect().bottom<=s.clientHeight?r.offsetHeight>l.getBoundingClientRect().bottom-parseFloat(s.style.fontSize)?(r.style.overflowY="scroll",r.style.maxHeight=l.getBoundingClientRect().bottom-parseFloat(s.style.fontSize)+"px"):r.style.overflowY="visible":(r.style.overflowY="scroll",r.style.maxHeight=s.clientHeight+"px"):l.getBoundingClientRect().bottom<=s.clientHeight&&r.offsetHeight>l.getBoundingClientRect().bottom-parseFloat(s.style.fontSize)?(r.style.overflowY="scroll",r.style.maxHeight=l.getBoundingClientRect().bottom-parseFloat(s.style.fontSize)+"px"):r.style.overflowY="visible"):(r.style.position="relative",r.style.top=0,r.style.width="17.01%",c.style.marginLeft="0rem",r.style.overflowY="visible")},sessionStorage.maxLevel=0,this.$http.jsonp("http://66.55.159.227:8089/getnavbar").then(function(t){this.$data.navInit=t.data,this.navCreator(this.navInit)}).catch(function(t){console.log("Getnavbar error:"+t),this.getNavBar("http://66.55.159.227:8089/getnavbar")})}},beforeUpdate:function(){},updated:function(){this.liIndex=sessionStorage.index,document.getElementsByClassName("left_nav")[0].style.overflowY="visible"},components:{HeaderLine:i.a,FooterLine:a.a,FooterLine2:c.a,LeftNav:u.a},methods:{onLocaleChange:function(t){this.locale=t},navClick:function(){var t=document.getElementsByClassName("left_nav")[0],e=(document.getElementsByClassName("right_rev")[0],document.getElementsByClassName("content")[0]),n=document.documentElement;e.getBoundingClientRect().top<=0&&(t.offsetHeight>=n.clientHeight?e.getBoundingClientRect().bottom<=n.clientHeight?t.offsetHeight>e.getBoundingClientRect().bottom-parseFloat(n.style.fontSize)?(t.style.overflowY="scroll",t.style.maxHeight=e.getBoundingClientRect().bottom-parseFloat(n.style.fontSize)+"px"):t.style.overflowY="visible":(t.style.overflowY="scroll",t.style.maxHeight=n.clientHeight+"px"):e.getBoundingClientRect().bottom<=n.clientHeight?(t.style.overflowY="scroll",t.style.maxHeight=e.getBoundingClientRect().bottom-parseFloat(n.style.fontSize)+"px"):t.style.overflowY="visible")},searchFunc:function(){this.$router.push({path:"/search?lang="+this.locale+"&s="+this.searchContent})},navCreator:function(t){this.iterator(t),this.languageCreator(t)},iterator:function(t){for(var e in t)t[e].hasOwnProperty("navActive")&&(sessionStorage.navIndex.indexOf(e)>-1&&(t[e].navActive=!0),this.iterator(t[e].next))},languageCreator:function(t){for(var e in t){for(var n in t[e].text){this.$i18n.messages[n].hasOwnProperty("messages")||(this.$i18n.messages[n].messages={});var s=t[e].text[n].toString();this.$i18n.messages[n].messages[e]=s}t[e].hasOwnProperty("navActive")&&this.languageCreator(t[e].next)}},getNavBar:function(t){this.$http.jsonp(t).then(function(t){this.$data.navInit=t.data,this.navCreator(this.navInit)}).catch(function(){var e=this;console.log("Restart to connect server..."),setTimeout(function(){e.getNavBar(t)},1e3)})}}}},13:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=(n(1),n(5)),i=n.n(s),o=n(4),a=n.n(o),r=n(20);n.n(r);e.default={data:function(){return{}},beforeMount:function(){i.a.setOptions({renderer:new i.a.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!1,smartLists:!0,highlight:function(t){return a.a.highlightAuto(t).value}})},mounted:function(){document.getElementById("content").style.opacity=0,this.navIndexCreator(),this.indexCreator(),this.contentCreator()},props:["locale"],watch:{locale:function(t){this.contentCreator()},$route:function(t,e){this.indexCreator(),document.getElementById("content").style.opacity=0,this.contentCreator()}},methods:{indexCreator:function(){for(var t=this.$route.name.replace(/[^0-9]/gi,""),e="",n=0;n<t.length;n++)e=0==n?""+t[n]:e+"_"+t[n];sessionStorage.index=e},navIndexCreator:function(){var t=-1,e="";do{-1!=(t=this.$route.name.indexOf("_",t+1))&&(e+=" "+this.$route.name.substr(0,t))}while(-1!=t);sessionStorage.navIndex=e},headerCreator:function(){for(var t=1;t<7;t++)for(var e=document.getElementsByTagName("h"+t),n=0;n<e.length;n++){var s=document.createElement("a");"en"!==this.locale?(e[n].id=e[n].innerHTML,s.href="#"+e[n].innerHTML):s.href="#"+e[n].id,s.innerHTML="#",s.style.float="left",s.style.marginLeft="-.3rem",s.style.textDecoration="none",s.style.opacity=0,s.style.transition=".2s opacity ease-in-out 0s",function(t){e[n].addEventListener("mouseover",function(){t.style.opacity=1}),e[n].addEventListener("mouseout",function(){t.style.opacity=0})}(s),e[n].insertBefore(s,e[n].firstChild)}},contentCreator:function(){this.$http.jsonp("http://66.55.159.227:8089/getmarkdown?name="+this.$route.name+"&locale="+this.locale).then(function(t){document.getElementById("content").innerHTML=i()(t.data.a),this.headerCreator(),document.getElementById("content").style.opacity=1}).catch(function(){console.log("error")}),document.documentElement.scrollTop=0,document.body.scrollTop=0}}}},14:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{showWeiXin:!1}}}},15:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{msg:"Welcome to Your Vue.js App"}}}},16:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n(2),o=n.n(i);s.a.use(o.a);var a=new o.a({});e.default={name:"Header",data:function(){return{loops:[{title:"产品服务",index:"0",url:"#"},{title:"关于我们",index:"1",url:"#"},{title:"加入我们",index:"2",url:"#"},{title:"技术文档",index:"3",url:"#"}],locale3:this.locale,index3:this.index}},i18n:a,props:["index","isShow","locale"],mounted:function(){var t=navigator.language,e="";t.indexOf("zh")>-1&&(e="ch"),t.indexOf("en")>-1&&(e="en"),this.$i18n.locale=localStorage.locale||e,this.locale3=localStorage.locale||e},watch:{locale3:function(t){this.$i18n.locale=t,"en"==t?(this.loops[0].title="Features",this.loops[1].title="About",this.loops[2].title="Join Us",this.loops[3].title="Documentation"):(this.loops[0].title="产品服务",this.loops[1].title="关于我们",this.loops[2].title="加入我们",this.loops[3].title="技术文档"),this.$emit("on-locale-change",t)}},methods:{changeLanguage:function(t){localStorage.locale=t,this.locale3=t}}}},17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"LeftNav",data:function(){return{}},props:["locale","nav","liIndex"],components:{},mounted:function(){}}},18:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n(2),o=n.n(i);s.a.use(o.a);var a=new o.a({locale:this.locale,messages:{ch:{},en:{}}});e.default={data:function(){return{msg:"",go:"",goNum:"",searchList:{},searchNum:0,searchResult:"",search:!0,searchPageList:{},searchPageNumS:!0,searchListActive:1}},i18n:a,props:["locale","searchContent","navInit"],mounted:function(){this.$i18n.locale=this.locale,"en"==this.locale?(this.msg="back",this.go="Go"):"ch"==this.locale&&(this.msg="返回",this.go="前往"),this.searchCreator(),this.searchListActive=1},updated:function(){this.getDot(190),this.getBread()},watch:{locale:function(t){this.$i18n.locale=t,this.$router.push({path:"/search?lang="+this.locale+"&s="+this.searchContent}),"en"==this.locale?(this.msg="back",this.go="Go"):"ch"==this.locale&&(this.msg="返回",this.go="前往")},$route:function(t,e){this.searchCreator(),this.goNum=1,this.searchListActive=1}},methods:{goPage:function(){/^[0-9]*[1-9][0-9]*$/.test(this.goNum)&&0<this.goNum&&this.goNum<=this.searchPageList.length&&(this.searchListActive=this.goNum)},pageListClick:function(t){this.searchListActive=t+1,document.documentElement.scrollTop=0,document.body.scrollTop=0},backRoute:function(){this.$router.push({name:"menu"+sessionStorage.index})},dotCreator:function(t,e,n){-1!==t.substr(e,1).search(/[A-Za-z]/)?this.dotCreator(t,e+1,n):n.innerHTML=t.substr(0,e)+"..."},resultDotCreator:function(t,e){return t.length>e?t.substr(0,e)+"...":t},getDot:function(t){for(var e=document.getElementsByClassName("rev_content"),n=e.length,s=0;s<n;s++){var i=e[s].innerHTML;i.length>t&&this.dotCreator(i,t,e[s])}},getBread:function(){for(var t=document.getElementsByClassName("bread"),e=t.length,n=0;n<e;n++)this.iteratorb(this.navInit,t[n],this.locale,"")},iteratorb:function(t,e,n,s){for(var i in t)i==e.id?e.firstChild.innerText=""==s?""+t[i].text[n]:s+" > "+t[i].text[n]:t[i].hasOwnProperty("navActive")&&(""==s?this.iteratorb(t[i].next,e,n,""+t[i].text[n]):this.iteratorb(t[i].next,e,n,s+" > "+t[i].text[n]))},notSearch:function(t,e){this.search=!1,this.searchResult=this.resultDotCreator(t,e),this.searchList=[]},splitListCreator:function(t){for(var e=[],n=0;n<this.searchNum;){for(var s=[],i=0;i<t;i++)void 0!==this.searchList[n+i]&&s.push(this.searchList[n+i]);e.push(s),n+=t}this.searchPageList=e},searchCreator:function(){var t=/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/gi,e=this.$route.query.s;""!==e&&-1==e.search(t)?this.$http.jsonp("http://66.55.159.227:8089/search?lang="+this.locale+"&s="+e).then(function(t){this.searchList=t.data,this.searchNum=this.searchList.length,this.searchResult=e;0!=this.searchNum?(this.search=!0,this.splitListCreator(2),this.searchPageList.length>3?this.searchPageNumS=!1:this.searchPageNumS=!0):this.notSearch(e,80)}).catch(function(){console.log("error")}):this.notSearch(e,80)}}}},19:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),i=n(7),o=n(9),a=n.n(o),r=n(10),c=n.n(r),l=n(11),u=n(3),h=n.n(u),v=n(8);n.n(v);s.a.use(l.a),s.a.config.productionTip=!1;var d=[{path:"/search",name:c.a,component:c.a}],g=document.createElement("script");g.src="http://66.55.159.227:8089/getnavbar?type=router";var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(g,m),window.change=function(t){for(var e in t)t[e].hasOwnProperty("next")?window.change(t[e].next):(d.push({path:t[e].path,name:e,component:h.a}),i.a.addRoutes(d),d=[])},new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:a.a}})},20:function(t,e){},205:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAZlBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgxKPNAAAAInRSTlMAJhIGCCMlIQEHDxYTHB4JFwsRFQMdHw0OGSIFJBsMEBgUaXHvbQAAAflJREFUeNrtWNl2gyAQhYDiUo1GjUbT7f9/siZHUBorssw5act9dTI3zHIZBnl4eHj8ApCkyFgQhgHLioQgx4irHkvoqxi5w1uOV5CXyA0od/9IQZE9ohRvII1s/ZMz3sTZMt3HK1YgONr4L0OsRFha/H/JP0vbuI6iOm5TJjEYn4Es4/NBpcq6LKNkmIdokd/X4YE9W2TarJbSOQjd2vdkDmBq1F9zCOIfLAJhYqIbuTrERDDkBvoj4hNvnFJEqTQ/QLdllXCrRlufRf1s22WmWaj4DwdFr3C7SpOg5/2lMuQd13//sPOPUaWccEuddp6Tx9SmXJcSLYKCt6hT05XiaNWm3WSaaRGw/cVHRTR1wDWgVpvWXFG0CLgERDtUnUsKNAGGDtH1uZJsUKYNdKMVzyUV4GIn5PqyV66Z6YVDgC4c8Cvzfumrk/dufOmjUowtFGZs0Ru8GrvRkYKMjsvhN1mN/zz8flqP7xnZGt9zhapvh5h33FHqX+kBMjh6QhUdvT2haFcwLKEFfQROeDE8Q6B8xgoGoIf40AoGiFVCNdbPHCXny5Dm3oHWeRhz3ay6n/THPtNrCyk2L6QOThhuK7X0tlLDV9ZMKzXXDDI8gw3DAUHAM3gGV/hjDCcEggOw/5EB2D9CJ2D/IwOw/5EB2L+Hh4fHP8YXhrcT5ad0MfAAAAAASUVORK5CYII="},206:function(t,e,n){function s(t){n(22)}var i=n(0)(n(14),n(211),s,"data-v-5336c095",null);t.exports=i.exports},207:function(t,e,n){function s(t){n(21)}var i=n(0)(n(15),n(210),s,null,null);t.exports=i.exports},208:function(t,e,n){function s(t){n(24)}var i=n(0)(n(16),n(213),s,null,null);t.exports=i.exports},209:function(t,e,n){function s(t){n(27)}var i=n(0)(n(17),n(216),s,null,null);t.exports=i.exports},21:function(t,e){},210:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",{staticStyle:{"padding-top":"0.9rem"}},[t._v("\n\t\t@2017 VRVIU All Rights Reserved.\n\t")])])}]}},211:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("div",{staticClass:"footer_container"},[t._m(0),t._v(" "),n("div",{staticClass:"fr"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.showWeiXin,expression:"showWeiXin"}],staticClass:"weixin"},[n("img",{staticStyle:{width:"1.59rem"},attrs:{src:"https://img.vrviu.com/images/weixin.png",alt:""}}),t._v(" "),n("p",{staticClass:"weixin-title"},[t._v("关注微信公众号")])]),t._v(" "),n("div",{staticStyle:{"margin-top":"-0.22rem"}},[n("span",{staticClass:"weixin_nohover",on:{mouseover:function(e){t.showWeiXin=!0},mouseleave:function(e){t.showWeiXin=!1}}}),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fl"},[n("p",[t._v("\n                合作电话：0755-86960615\n                "),n("span",{staticStyle:{margin:"0 0.2rem"}},[t._v("|")]),t._v("合作邮箱：business@vrviu.com\n            ")]),t._v(" "),n("p",[t._v("\n                公司地址：深圳市南山区科技园琼宇路特发信息科技大厦1-2楼\n            ")]),t._v(" "),n("p",{staticClass:"copyright"},[t._v("\n                © 2016-2017 vrviu.com 版权所有 粤ICP备17011655号\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"http://weibo.com/p/1006066122607798/home",target:"_blank"}},[n("span",{staticClass:"weibo_nohover"})])}]}},212:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search_content"}},[n("div",{staticClass:"return",on:{click:function(e){t.backRoute()}}},[n("span",{staticClass:"arrow"},[t._v("^")]),t._v(" "),n("span",{staticClass:"re_content"},[t._v(t._s(t.msg))])]),t._v(" "),t.search?n("div",["ch"==t.locale?n("p",{staticClass:"search_num"},[t._v("共"+t._s(t.searchNum)+"条与“"+t._s(t.searchResult)+"”相关的结果")]):n("p",{staticClass:"search_num"},[t._v("About "+t._s(t.searchNum)+" results found for '"+t._s(t.searchResult)+"'")]),t._v(" "),t._l(t.searchPageList,function(e,s,i){return[t._l(e,function(e,i,o){return t.searchListActive==s+1?[n("div",{key:i,staticClass:"rev_list"},[n("p",{staticClass:"rev_head"},[n("router-link",{attrs:{to:{name:e.router}},domProps:{innerHTML:t._s(e.name)}})],1),t._v(" "),n("p",{staticClass:"rev_content",domProps:{innerHTML:t._s(e.content)}}),t._v(" "),n("p",{staticClass:"bread",attrs:{id:e.router}},[n("span")])])]:t._e()})]}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.searchPageNumS,expression:"searchPageNumS"}],staticClass:"page_list"},[t._l(t.searchPageList,function(e,s,i){return[n("div",{class:{page:!0,page_active:t.searchListActive==s+1},on:{click:function(e){t.pageListClick(s)}}},[t._v(t._s(s+1))])]})],2),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.searchPageNumS,expression:"!searchPageNumS"}],staticClass:"page_list_right"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.searchListActive>1,expression:"searchListActive>1"}],staticClass:"page rotate",on:{click:function(e){t.searchListActive--}}},[n("span",[t._v("<")])]),t._v(" "),n("div",{staticClass:"page_single"},[t._v(t._s(t.searchListActive+" / "+t.searchPageList.length))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.searchListActive<t.searchPageList.length,expression:"searchListActive<searchPageList.length"}],staticClass:"page rotate_right",on:{click:function(e){t.searchListActive++}}},[n("span",[t._v(">")])]),t._v(" "),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.goNum,expression:"goNum"}],attrs:{type:"text",id:"page_input"},domProps:{value:t.goNum},on:{keydown:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.goPage()},input:function(e){e.target.composing||(t.goNum=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"page",on:{click:function(e){t.goPage()}}},[t._v(t._s(t.go))])])],2):n("div",["ch"==t.locale?n("p",{staticClass:"not_search ch"},[t._v("没有与“"+t._s(t.searchResult)+"”相关的结果。")]):n("p",{staticClass:"not_search en"},[t._v("Your search - "+t._s(t.searchResult)+" - did not match any documents.")])])])},staticRenderFns:[]}},213:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header"},[n("div",{staticClass:"Header_right",staticStyle:{position:"absolute",right:"0.5rem"}},[n("a",{class:{active:"ch"==t.locale3},attrs:{href:"#"},on:{click:function(e){t.changeLanguage("ch")}}},[t._v("中文")]),t._v(" "),n("a",{staticStyle:{margin:"0 0.1rem"},attrs:{href:""}},[t._v("/")]),t._v(" "),n("a",{class:{active:"en"==t.locale3},attrs:{href:"#"},on:{click:function(e){t.changeLanguage("en")}}},[t._v("ENG")])]),t._v(" "),n("div",{staticClass:"Header"},["ch"==t.locale3?n("a",{attrs:{href:"./index.html?animate=false"}},[n("img",{attrs:{src:"https://img.vrviu.com/images/LOGO.png",alt:""}})]):n("a",{attrs:{href:"./index.html?animate=false"}},[n("img",{attrs:{src:"https://img.vrviu.com/images/LOGO2.png",alt:""}})]),t._v(" "),n("ul",{staticClass:"Header_right"},t._l(t.loops,function(e){return n("li",{class:{active:t.index3==e.index},on:{click:function(n){t.index3=e.index}}},[n("a",{attrs:{href:e.url}},[t._v(t._s(e.title)+" ")])])}))])])},staticRenderFns:[]}},214:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"content"}})},staticRenderFns:[]}},215:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main_content"},[s("HeaderLine",{attrs:{index:"3",locale:t.locale},on:{"on-locale-change":t.onLocaleChange}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isEmputy,expression:"isEmputy"}],staticClass:"main_body"},[s("div",{staticClass:"content"},[s("div",{staticClass:"left_nav",on:{click:function(e){t.navClick()}}},[s("LeftNav",{attrs:{nav:t.navInit,locale:t.locale,liIndex:t.liIndex}})],1),t._v(" "),s("div",{staticClass:"right_rev"},[s("div",{staticClass:"search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchContent,expression:"searchContent"}],class:[t.searchPng?"ser_input_active":"ser_input"],attrs:{type:"text",id:"search_input",placeholder:t.$t("search.msg")},domProps:{value:t.searchContent},on:{keyup:function(e){t.searchFunc()},input:function(e){e.target.composing||(t.searchContent=e.target.value)}}}),t._v(" "),s("img",{class:[t.searchPng?"ser_png_active":"ser_png"],attrs:{id:"ser",src:n(205)},on:{click:function(e){t.searchPng=!t.searchPng}}})]),t._v(" "),s("router-view",{attrs:{locale:t.locale,searchContent:t.searchContent,navInit:t.navInit}})],1),t._v(" "),t._m(0)])]),t._v(" "),s("ch"==t.locale?"FooterLine":"FooterLine2")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"oTop"},[n("div",[t._v("^")])])}]}},216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ul_loop"}},[t._l(t.nav,function(e,s,i){return[e.hasNext?[n("li",{class:["level"+e.level,{level_plus:e.hasNext}],attrs:{title:e.text[t.locale]},on:{click:function(t){e.navActive=!e.navActive}}},[n("div",[n("span",{class:[e.navActive?"sub":"plus"]},[t._v("^")]),t._v(" "),n("a",{staticClass:"nav_title",style:{paddingLeft:.35+.1*e.level+"rem"}},[t._v(t._s(e.text[t.locale]))])])]),t._v(" "),n("ul",{class:["level_ul",{open:e.navActive}]},[n("LeftNav",{attrs:{nav:e.next,locale:t.locale,liIndex:t.liIndex}})],1)]:[n("li",{class:["level"+e.level,{li_active:t.liIndex==e.liActive}]},[n("router-link",{style:{paddingLeft:.35+.1*e.level+"rem"},attrs:{title:e.text[t.locale],to:{name:s}}},[t._v(t._s(e.text[t.locale]))])],1)]]})],2)},staticRenderFns:[]}},219:function(t,e){},22:function(t,e){},23:function(t,e){},24:function(t,e){},25:function(t,e){},26:function(t,e){},27:function(t,e){},3:function(t,e,n){function s(t){n(25)}var i=n(0)(n(13),n(214),s,null,null);t.exports=i.exports},7:function(t,e,n){"use strict";(function(t){var s=n(1),i=n(217),o=n(3);n.n(o);s.a.use(i.a);var a={mode:"history",base:t,routes:[]};e.a=new i.a(a)}).call(e,"/")},8:function(t,e){},9:function(t,e,n){function s(t){n(26)}var i=n(0)(n(12),n(215),s,null,null);t.exports=i.exports}},[19]);
//# sourceMappingURL=app.526545bb877472e94f19.js.map