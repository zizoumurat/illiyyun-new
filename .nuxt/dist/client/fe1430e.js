(window.webpackJsonp=window.webpackJsonp||[]).push([[20,7,12],{331:function(t,e,r){var content=r(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("3206968c",content,!0,{sourceMap:!1})},337:function(t,e,r){"use strict";r(331)},338:function(t,e,r){var n=r(57),o=r(237),c=r(339),l=n(!1),d=o(c);l.push([t.i,"#cover[data-v-7cc8ee16]{background-image:url("+d+");position:relative;height:400px;margin-bottom:-50px;-webkit-mask-image:-webkit-gradient(linear,center bottom,center top,color-stop(0,transparent),color-stop(1,#000))}a[data-v-7cc8ee16]{text-decoration:none!important;color:#fff}",""]),t.exports=l},339:function(t,e,r){t.exports=r.p+"img/videosHeadImage.91d6b77.jpg"},341:function(t,e,r){"use strict";r.r(e);var n={props:["videos"]},o=(r(337),r(48)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container-fluid"},[t.videos.search?r("div",[r("p",{staticClass:"text-muted"},[r("i",[t._v(t._s(t.videos.data.length)+" adet sonuç bulundu")])])]):t._e(),t._v(" "),r("div",{staticClass:"row"},t._l(t.videos,(function(video,e){return r("div",{key:e,staticClass:"col-md-3"},[r("div",{staticStyle:{position:"relative"}},[r("span",{staticClass:"badge p-1 bg-siyah",staticStyle:{position:"absolute",right:"7px",bottom:"5px"}},[t._v(t._s(t.$videoTime(video.duration)))]),t._v(" "),r("nuxt-link",{staticStyle:{width:"100%",cursor:"pointer"},attrs:{to:"/videos/watch/"+video.link.split("/")[3]}},[r("img",{staticStyle:{width:"100%",cursor:"pointer"},attrs:{src:video.pictures.sizes[2].link,alt:""}})])],1),t._v(" "),r("br"),t._v(" "),r("span",[r("nuxt-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/videos/watch/"+video.link.split("/")[3]}},[t._v(t._s(video.name))])],1),t._v(" "),r("br"),t._v(" "),r("span",{staticClass:"text-muted"},[r("small",[r("i",{staticClass:"fa fa-play-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{domProps:{innerHTML:t._s(0==video.stats.plays?"Görüntüleme Yok":video.stats.plays+" Görüntülenme")}})])]),t._v("\n          \n        "),r("span",{staticClass:"text-muted"},[r("small",[r("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",[t._v(t._s(t.$timeEgo(Date.parse(video.created_time))))])])]),t._v(" "),r("br"),r("br")])})),0)])])}),[],!1,null,"7cc8ee16",null);e.default=component.exports},347:function(t,e,r){"use strict";r.r(e);r(5),r(4),r(2),r(1),r(6),r(3),r(7);var n=r(0),o=r(89);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["url"],data:function(){return{infiniteKey:"infiniteKey",page:2,per_page:12}},computed:l(l({},Object(o.b)({horizonData:"horizonVidCardData"})),{},{lastUrl:function(){var t=this.url;return this.$route.query.aranan&&(t="query="+this.$route.query.aranan),t+"&per_page="+this.per_page+"&page="+this.page}}),methods:{infiniteScroll:function(t){this.$store.dispatch("getVideosForHorizontalVidCard",this.lastUrl).then((function(e){1==e?t.loaded():t.complete()})).catch((function(e){console.log(e),t.complete()})),this.page++}},watch:{"$route.query.aranan":function(){this.infiniteKey=100*Math.random()}}},v=r(48),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["/videos/all"==t.$route.path?r("div",[r("Videos",{attrs:{videos:t.horizonData.videos}})],1):t._l(t.horizonData.videos,(function(e,n){return r("div",{key:e.name+n+t.$route.query.aranan,staticClass:"oneriVideoItem"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col",style:{maxWidth:t.$route.query.aranan?"320px":"220px"}},[r("div",{staticClass:"position-relative"},[r("span",{staticClass:"badge p-1 bg-siyah videoTimeSpan"},[t._v(t._s(t.$videoTime(e.duration)))]),t._v(" "),r("nuxt-link",{attrs:{to:"/videos/watch/"+e.link.split("/")[3]}},[r("img",{staticStyle:{width:"100%",cursor:"pointer"},attrs:{src:e.pictures.sizes[3].link,alt:""}})])],1)]),t._v(" "),r("div",{staticClass:"col p-0"},[r("span",[r("nuxt-link",{staticStyle:{cursor:"pointer","text-decoration":"none",color:"white"},attrs:{to:"/videos/watch/"+e.link.split("/")[3]}},[t._v(t._s(e.name.length>40?e.name.slice(0,40)+"...":e.name))])],1),t._v(" "),r("br"),t._v(" "),r("span",{staticClass:"text-muted"},[r("small",[r("span",{domProps:{innerHTML:t._s(0==e.stats.plays?"0":e.stats.plays+" görüntüleme")}}),t._v("\n            •\n          ")])]),t._v(" "),r("span",{staticClass:"text-muted"},[r("small",[r("span",[t._v(t._s(t.$timeEgo(Date.parse(e.created_time))))])])])])])])})),t._v(" "),r("infinite-loading",{key:t.infiniteKey,attrs:{spinner:"spiral"},on:{infinite:t.infiniteScroll}},[r("span",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),r("span",{attrs:{slot:"no-results"},slot:"no-results"})])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Videos:r(341).default})},385:function(t,e,r){"use strict";r.r(e);var n,o=r(22),c=(r(70),r(11),r(19),r(71),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=function(t){return t.replace("Ğ","g").replace("Ü","u").replace("Ş","s").replace("I","i").replace("İ","i").replace("Ö","o").replace("Ç","c").replace("ğ","g").replace("ü","u").replace("ş","s").replace("ı","i").replace("ö","o").replace("ç","c")},r=t.query.aranan,e.next=4,n(r);case 4:return r=e.sent,o="query="+r,e.next=8,t.store.dispatch("getVideosForHorizontalVidCard",o+"&per_page=12&page=1");case 8:return e.abrupt("return",{url:o});case 9:case"end":return e.stop()}}),e)})))()},watch:{"$route.query.aranan":(n=Object(o.a)(regeneratorRuntime.mark((function t(){var e,r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=function(t){return t.replace("Ğ","g").replace("Ü","u").replace("Ş","s").replace("I","i").replace("İ","i").replace("Ö","o").replace("Ç","c").replace("ğ","g").replace("ü","u").replace("ş","s").replace("ı","i").replace("ö","o").replace("ç","c")},e=this.$route.query.aranan,t.next=4,r(e);case 4:return e=t.sent,n="query="+e,t.next=8,this.$store.dispatch("getVideosForHorizontalVidCard",n+"&per_page=12&page=1");case 8:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})}}),l=c,d=r(48),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("HorizontalVideoCard",{attrs:{url:t.url}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HorizontalVideoCard:r(347).default})}}]);