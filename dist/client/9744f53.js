(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{353:function(t,o,e){var content=e(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("22390e86",content,!0,{sourceMap:!1})},362:function(t,o,e){"use strict";(function(t){o.a={data:function(){return{cdnUrl:t.env.CDN_URL}}}}).call(this,e(104))},363:function(t,o,e){"use strict";e(353)},364:function(t,o,e){var n=e(57)(!1);n.push([t.i,".custom-grid[data-v-670fb7ad]{display:grid;grid-template-columns:auto auto;grid-gap:20px;margin-bottom:20px}.post-title[data-v-670fb7ad]{text-decoration:none;color:inherit}.postContentClosed[data-v-670fb7ad]{overflow:hidden;height:220px!important}.postContentOpened[data-v-670fb7ad]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:20;line-clamp:2;-webkit-box-orient:vertical}#plusIcon[data-v-670fb7ad]{outline:none!important;outline-width:0!important;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}#plusIconDiv i[data-v-670fb7ad]{bottom:-17px;cursor:pointer}.readMoreShadow[data-v-670fb7ad]{width:100%;height:250px;position:absolute;top:0;background:linear-gradient(transparent,#111)}.ornek[data-v-670fb7ad]{margin:auto}.sola-kaydir[data-v-670fb7ad]{float:left;margin:0 40px 40px 0}.markdown-custom[data-v-670fb7ad]{position:relative}@media (max-width:500px){.custom-grid[data-v-670fb7ad]{display:grid;grid-template-columns:auto;grid-gap:20px;margin-bottom:20px}}",""]),t.exports=n},370:function(t,o,e){"use strict";e.r(o);e(15),e(39);var n={mixins:[e(362).a],props:{post:{required:!0,type:Object}},data:function(){return{collapseStatus:!1,showPosts:!1}},methods:{convertDate:function(t){var o=new Date(t),e=o.getDate(),n=o.getMonth(),l=o.getFullYear();return"".concat(e," ").concat(["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"][n]," ").concat(l)}},mounted:function(){var t=this;setTimeout((function(){t.showPosts=!0}),1e3)}},l=(e(363),e(48)),component=Object(l.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"p-4 mt-5 postCard"},[e("div",[e("div",{staticClass:"custom-grid"},[e("div",{},[e("nuxt-link",{attrs:{to:"/blog/"+t.post.slug}},[t.post.image&&t.post.image.url?e("img",{staticStyle:{width:"450px","max-width":"100%",border:"1px solid #4e4e4e"},attrs:{src:""+t.post.image.url}}):t._e()])],1),t._v(" "),e("div",[e("nuxt-link",{staticClass:"post-title",attrs:{to:"/blog/"+t.post.slug}},[e("h2",[t._v("\n              "+t._s(t.post.title)+"\n            ")])]),t._v(" "),e("p",{staticClass:"text-muted"},[e("small",[e("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),t._v("\n              "+t._s(t.convertDate(t.post.created_at))+"\n            ")])]),t._v(" "),e("div",{staticClass:"markdown-custom"},[e("div",[t.showPosts?e("markdown-it-vue",{staticClass:"mt-3",class:{postContentClosed:!t.collapseStatus,postContentOpened:t.collapseStatus},attrs:{content:t.post.detail?t.post.detail:""}}):t._e(),t._v(" "),e("nuxt-link",{attrs:{to:"/blog/"+t.post.slug}},[t.collapseStatus?e("a",{staticStyle:{float:"right"},attrs:{href:""}},[t._v("Devamını oku")]):t._e()])],1),t._v(" "),e("div",{class:{readMoreShadow:!t.collapseStatus}})])],1)]),t._v(" "),e("div",{attrs:{id:"plusIconDiv"}},[e("i",{class:{"fa fa-times-circle":t.collapseStatus,"fa fa-plus-circle":!t.collapseStatus},attrs:{id:"plusIcon"},on:{click:function(o){t.collapseStatus=!t.collapseStatus}}})])])])])}),[],!1,null,"670fb7ad",null);o.default=component.exports}}]);