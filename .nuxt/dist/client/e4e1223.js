(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{331:function(t,e,o){var content=o(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(58).default)("3206968c",content,!0,{sourceMap:!1})},337:function(t,e,o){"use strict";o(331)},338:function(t,e,o){var r=o(57),n=o(237),c=o(339),l=r(!1),d=n(c);l.push([t.i,"#cover[data-v-7cc8ee16]{background-image:url("+d+");position:relative;height:400px;margin-bottom:-50px;-webkit-mask-image:-webkit-gradient(linear,center bottom,center top,color-stop(0,transparent),color-stop(1,#000))}a[data-v-7cc8ee16]{text-decoration:none!important;color:#fff}",""]),t.exports=l},339:function(t,e,o){t.exports=o.p+"img/videosHeadImage.91d6b77.jpg"},341:function(t,e,o){"use strict";o.r(e);var r={props:["videos"]},n=(o(337),o(48)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-fluid"},[t.videos.search?o("div",[o("p",{staticClass:"text-muted"},[o("i",[t._v(t._s(t.videos.data.length)+" adet sonuç bulundu")])])]):t._e(),t._v(" "),o("div",{staticClass:"row"},t._l(t.videos,(function(video,e){return o("div",{key:e,staticClass:"col-md-3"},[o("div",{staticStyle:{position:"relative"}},[o("span",{staticClass:"badge p-1 bg-siyah",staticStyle:{position:"absolute",right:"7px",bottom:"5px"}},[t._v(t._s(t.$videoTime(video.duration)))]),t._v(" "),o("nuxt-link",{staticStyle:{width:"100%",cursor:"pointer"},attrs:{to:"/videos/watch/"+video.link.split("/")[3]}},[o("img",{staticStyle:{width:"100%",cursor:"pointer"},attrs:{src:video.pictures.sizes[2].link,alt:""}})])],1),t._v(" "),o("br"),t._v(" "),o("span",[o("nuxt-link",{staticStyle:{cursor:"pointer"},attrs:{to:"/videos/watch/"+video.link.split("/")[3]}},[t._v(t._s(video.name))])],1),t._v(" "),o("br"),t._v(" "),o("span",{staticClass:"text-muted"},[o("small",[o("i",{staticClass:"fa fa-play-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),o("span",{domProps:{innerHTML:t._s(0==video.stats.plays?"Görüntüleme Yok":video.stats.plays+" Görüntülenme")}})])]),t._v("\n          \n        "),o("span",{staticClass:"text-muted"},[o("small",[o("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),t._v(" "),o("span",[t._v(t._s(t.$timeEgo(Date.parse(video.created_time))))])])]),t._v(" "),o("br"),o("br")])})),0)])])}),[],!1,null,"7cc8ee16",null);e.default=component.exports}}]);