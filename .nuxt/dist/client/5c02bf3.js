(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5,11],{330:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("50805f6e",content,!0,{sourceMap:!1})},332:function(t,e,n){"use strict";n(330)},333:function(t,e,n){var o=n(57)(!1);o.push([t.i,"#searchDiv[data-v-d9a770b6]{width:500px;max-width:95%}.search-input[data-v-d9a770b6]{height:44px}",""]),t.exports=o},334:function(t,e,n){"use strict";n.r(e);var o=n(22),r=(n(39),n(70),{props:{bannerImageUrl:{default:""}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/logo");case 2:n=e.sent,data=n.data,t.logo=data.Image?data.Image.url:"";case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{logo:"",isActiveMenuModal:!1,isActiveSearchModal:!1,showSearchResult:!1,searchKey:"",timer:void 0,videoCount:0,blogCount:0,galleryCount:0}},methods:{search:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:clearTimeout(t.timer),t.timer=setTimeout(t.doSearch,500);case 2:case"end":return e.stop()}}),e)})))()},doSearch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,data,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.showSearchResult=!0,!(t.searchKey.length>3)){e.next=19;break}return n={headers:{Authorization:"bearer 65b33c797381dac21098a627af08ffe1",Accept:"application/vnd.vimeo.user+json;version=3.0,application/vnd.vimeo.video+json;version=3.4","Content-Type":"application/json"}},e.next=5,t.$axios.$get("https://api.vimeo.com/me/videos?query="+t.searchKey,n);case 5:return o=e.sent,t.videoCount=o.data.length,e.next=9,t.$axios.get("/blogs/count?title_contains="+t.searchKey);case 9:return r=e.sent,data=r.data,t.blogCount=data,e.next=14,t.$axios.get("/blogs/count?title_contains="+t.searchKey);case 14:l=e.sent,c=l.data,t.galleryCount=c,e.next=20;break;case 19:t.showSearchResult=!1;case 20:case"end":return e.stop()}}),e)})))()}}}),l=(n(332),n(48)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"home"}},[t.isActiveSearchModal?n("div",{attrs:{id:"searchModal"}},[n("div",{staticClass:"d-flex justify-content-end"},[n("i",{staticClass:"fa fa-close p-2 bg-danger m-2 btn text-white",staticStyle:{"font-size":"30px"},on:{click:function(e){t.isActiveSearchModal=!1}}})]),t._v(" "),n("div",{attrs:{id:"modalStyle"}},[n("div",{staticClass:"input-group"},[n("input",{staticClass:"form-control",attrs:{type:"text",name:"",placeholder:"Ara",id:"modalSearchBar"},on:{input:t.search}}),t._v(" "),n("i",{staticClass:"fa fa-search text-secondary p-3 c-p",attrs:{id:"modalSearchButton"},on:{click:t.search}})])])]):t._e()]),t._v(" "),n("transition",{attrs:{name:"home"}},[t.isActiveMenuModal?n("div",{attrs:{id:"menuModal"}},[n("div",{staticClass:"d-flex justify-content-end"},[n("i",{staticClass:"fa fa-close p-2 bg-danger m-2 btn text-white",staticStyle:{"font-size":"30px"},on:{click:function(e){t.isActiveMenuModal=!1}}})]),t._v(" "),n("div",{staticClass:"d-flex justify-content-center",attrs:{id:"modalStyle"}},[n("div",{staticClass:"d-flex flex-column",staticStyle:{"font-size":"25px","font-family":"Montserrat"}},[n("div",{staticClass:"itemIcon p-1 text-white"},[n("p",[n("nuxt-link",{staticClass:"text-center",attrs:{to:"/"}},[n("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),t._v("\n                Ana Sayfa")])],1)]),t._v(" "),n("div",{staticClass:"itemIcon p-1 text-white"},[n("p",[n("nuxt-link",{staticClass:"text-center",attrs:{to:"/videos/all"}},[n("i",{staticClass:"fa fa-video-camera",attrs:{"aria-hidden":"true"}}),t._v("\n                Videolar")])],1)]),t._v(" "),n("div",{staticClass:"itemIcon p-1 text-white"},[n("p",[n("nuxt-link",{staticClass:"text-center",attrs:{to:"/photos"}},[n("i",{staticClass:"fa fa-picture-o",attrs:{"aria-hidden":"true"}}),t._v("\n                Resimler")])],1)]),t._v(" "),n("div",{staticClass:"itemIcon p-1 text-white"},[n("p",[n("nuxt-link",{staticClass:"text-center",attrs:{to:"/blog"}},[n("img",{attrs:{src:"/images/blog-icon.png",alt:""}}),t._v("\n                Yazılar")])],1)]),t._v(" "),n("div",{staticClass:"itemIcon p-1 text-white"},[n("p",[n("nuxt-link",{staticClass:"text-center",attrs:{to:"/"}},[n("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),t._v("\n                Hesabım")])],1)])])])]):t._e()]),t._v(" "),n("div",{staticClass:"centeredBackgroundImage mobilHeightCover mb-2",class:{home:"/"===t.$route.fullPath},style:[t.bannerImageUrl.length>0?{"background-image":"url("+t.bannerImageUrl+")"}:""],attrs:{id:"cover"}},[n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"container-fluid px-0"},[n("div",{staticClass:"menu d-flex justify-content-between p-4",class:{home:"/"===t.$route.fullPath},attrs:{id:"pcMenu"}},[n("div",{attrs:{id:"logo"}},[n("nuxt-link",{attrs:{to:"/"}},[n("img",{attrs:{src:t.logo,alt:"İlliyyun Tv"}})])],1),t._v(" "),n("div",{staticClass:"\n                d-flex\n                align-items-center\n                flex-column\n                bd-highlight\n                relative\n              "},[n("div",{staticClass:"mt-1 bd-highlight",attrs:{id:"searchDiv"}},[n("div",{staticClass:"input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],staticClass:"form-control search-input",attrs:{type:"text",placeholder:"Aranacak içerik..."},domProps:{value:t.searchKey},on:{input:[function(e){e.target.composing||(t.searchKey=e.target.value)},t.search]}}),t._v(" "),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn search-btn",on:{click:t.search}},[n("b",[t._v("ARA")])])])])]),t._v(" "),t.showSearchResult?n("div",{staticClass:"search-result"},[n("a",{staticClass:"result-item",attrs:{href:"#"}},[n("span",{staticClass:"left"},[t._v("Videolar")]),t._v(" "),n("span",{staticClass:"right"},[t._v(t._s(t.videoCount)+" İçerik")])]),t._v(" "),n("a",{staticClass:"result-item",attrs:{href:"#"}},[n("span",{staticClass:"left"},[t._v("Resimler")]),t._v(" "),n("span",{staticClass:"right"},[t._v(t._s(t.galleryCount)+" İçerik")])]),t._v(" "),n("a",{staticClass:"result-item",attrs:{href:"#"}},[n("span",{staticClass:"left"},[t._v("Yazılar")]),t._v(" "),n("span",{staticClass:"right"},[t._v(t._s(t.blogCount)+" İçerik")])])]):t._e()]),t._v(" "),n("div",{staticClass:"d-flex justify-content-between",attrs:{id:"headerIcons"}},[n("div",{staticClass:"itemIcon p-1"},[n("nuxt-link",{attrs:{to:"/videos/all"}},[n("div",[n("i",{staticClass:"fa fa-video-camera"})]),t._v(" "),n("span",[t._v("Videolar")])])],1),t._v(" "),n("div",{staticClass:"itemIcon p-1"},[n("nuxt-link",{attrs:{to:"/photos"}},[n("div",[n("i",{staticClass:"fa fa-picture-o"})]),t._v(" "),n("span",[t._v("Resimler")])])],1),t._v(" "),n("div",{staticClass:"itemIcon p-1"},[n("nuxt-link",{attrs:{to:"/blog"}},[n("div",[n("img",{attrs:{src:"/images/blog-icon.png",alt:""}})]),t._v(" "),n("span",[t._v("Yazılar")])])],1),t._v(" "),t.$store.state.userData.isLogin?n("div",{staticClass:"itemIcon p-1"},[n("nuxt-link",{attrs:{to:"/"}},[n("div",[n("i",{staticClass:"fa fa-user-circle"})]),t._v(" "),n("span",[t._v("Hesabım")])])],1):t._e(),t._v(" "),t.$store.state.userData.isLogin?n("div",{staticClass:"itemIcon p-1",on:{click:t.logOut}},[t._m(0)]):n("div",{staticClass:"itemIcon p-1"},[n("nuxt-link",{attrs:{to:"/"}},[n("div",[n("i",{staticClass:"fa fa-sign-in"})]),t._v(" "),n("span",[t._v("Kayıt / Giriş")])])],1)])]),t._v(" "),n("div",{staticClass:"d-flex justify-content-between pt-2 mobilMenuDivPadding",attrs:{id:"mobilMenu"}},[n("div",[n("i",{staticClass:"fa fa-bars text-white btn p-0",staticStyle:{"font-size":"35px"},attrs:{"aria-hidden":"true"},on:{click:function(e){t.isActiveMenuModal=!0}}})]),t._v(" "),n("div",[n("img",{staticStyle:{width:"50px"},attrs:{src:t.logo,alt:"İlliyyun Tv"}})]),t._v(" "),n("div",[n("i",{staticClass:"fa fa-search btn btn-danger btn-sm p-2",attrs:{id:"mobilSearchButton","aria-hidden":"true"},on:{click:function(e){t.isActiveSearchModal=!0}}})])])])])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"#"}},[n("div",[n("i",{staticClass:"fa fa-sign-out",attrs:{"aria-hidden":"true"}})]),t._v(" "),n("span",[t._v("Çıkış")])])}],!1,null,"d9a770b6",null);e.default=component.exports},353:function(t,e,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("22390e86",content,!0,{sourceMap:!1})},362:function(t,e,n){"use strict";(function(t){e.a={data:function(){return{cdnUrl:t.env.CDN_URL}}}}).call(this,n(104))},363:function(t,e,n){"use strict";n(353)},364:function(t,e,n){var o=n(57)(!1);o.push([t.i,".custom-grid[data-v-670fb7ad]{display:grid;grid-template-columns:auto auto;grid-gap:20px;margin-bottom:20px}.post-title[data-v-670fb7ad]{text-decoration:none;color:inherit}.postContentClosed[data-v-670fb7ad]{overflow:hidden;height:220px!important}.postContentOpened[data-v-670fb7ad]{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:20;line-clamp:2;-webkit-box-orient:vertical}#plusIcon[data-v-670fb7ad]{outline:none!important;outline-width:0!important;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}#plusIconDiv i[data-v-670fb7ad]{bottom:-17px;cursor:pointer}.readMoreShadow[data-v-670fb7ad]{width:100%;height:250px;position:absolute;top:0;background:linear-gradient(transparent,#111)}.ornek[data-v-670fb7ad]{margin:auto}.sola-kaydir[data-v-670fb7ad]{float:left;margin:0 40px 40px 0}.markdown-custom[data-v-670fb7ad]{position:relative}@media (max-width:500px){.custom-grid[data-v-670fb7ad]{display:grid;grid-template-columns:auto;grid-gap:20px;margin-bottom:20px}}",""]),t.exports=o},368:function(t,e,n){var content=n(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("60cd96ba",content,!0,{sourceMap:!1})},370:function(t,e,n){"use strict";n.r(e);n(15),n(39);var o={mixins:[n(362).a],props:{post:{required:!0,type:Object}},data:function(){return{collapseStatus:!1,showPosts:!1}},methods:{convertDate:function(t){var e=new Date(t),n=e.getDate(),o=e.getMonth(),r=e.getFullYear();return"".concat(n," ").concat(["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"][o]," ").concat(r)}},mounted:function(){var t=this;setTimeout((function(){t.showPosts=!0}),1e3)}},r=(n(363),n(48)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"p-4 mt-5 postCard"},[n("div",[n("div",{staticClass:"custom-grid"},[n("div",{},[n("nuxt-link",{attrs:{to:"/blog/"+t.post.slug}},[t.post.image&&t.post.image.url?n("img",{staticStyle:{width:"450px","max-width":"100%",border:"1px solid #4e4e4e"},attrs:{src:""+t.post.image.url}}):t._e()])],1),t._v(" "),n("div",[n("nuxt-link",{staticClass:"post-title",attrs:{to:"/blog/"+t.post.slug}},[n("h2",[t._v("\n              "+t._s(t.post.title)+"\n            ")])]),t._v(" "),n("p",{staticClass:"text-muted"},[n("small",[n("i",{staticClass:"fa fa-clock-o",attrs:{"aria-hidden":"true"}}),t._v("\n              "+t._s(t.convertDate(t.post.created_at))+"\n            ")])]),t._v(" "),n("div",{staticClass:"markdown-custom"},[n("div",[t.showPosts?n("markdown-it-vue",{staticClass:"mt-3",class:{postContentClosed:!t.collapseStatus,postContentOpened:t.collapseStatus},attrs:{content:t.post.detail?t.post.detail:""}}):t._e(),t._v(" "),n("nuxt-link",{attrs:{to:"/blog/"+t.post.slug}},[t.collapseStatus?n("a",{staticStyle:{float:"right"},attrs:{href:""}},[t._v("Devamını oku")]):t._e()])],1),t._v(" "),n("div",{class:{readMoreShadow:!t.collapseStatus}})])],1)]),t._v(" "),n("div",{attrs:{id:"plusIconDiv"}},[n("i",{class:{"fa fa-times-circle":t.collapseStatus,"fa fa-plus-circle":!t.collapseStatus},attrs:{id:"plusIcon"},on:{click:function(e){t.collapseStatus=!t.collapseStatus}}})])])])])}),[],!1,null,"670fb7ad",null);e.default=component.exports},380:function(t,e,n){"use strict";n(368)},381:function(t,e,n){var o=n(57)(!1);o.push([t.i,"[data-v-2633df9b] #cover{height:550px}[data-v-2633df9b] .modal-header{background-color:#fff}",""]),t.exports=o},389:function(t,e,n){"use strict";n.r(e);var o=n(22),r=(n(70),n(87),n(4),n(63),n(39),{fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,data,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/blogs");case 2:return n=e.sent,data=n.data,e.next=6,t.$axios.get("/banner");case 6:o=e.sent,r=o.data,data.sort((function(a,b){return new Date(b.created_at)-new Date(a.created_at)})),t.posts=data,t.homeBanner=r.Image?r.Image.url:"";case 11:case"end":return e.stop()}}),e)})))()},data:function(){return{say:10,posts:[],homeBanner:""}},methods:{moveTo:function(){var t=this.moveToDown?this.$refs.description.offsetTop-60:0;window.scroll({top:t,left:0,behavior:"smooth"}),this.moveToDown=!this.moveToDown}},mounted:function(){var t=this;this.$refs["app-modal"].show(),setInterval((function(){t.say--,0==t.say&&t.$refs["app-modal"].hide()}),1e3)}}),l=(n(380),n(48)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{"banner-image-url":t.homeBanner}}),t._v(" "),n("div",[n("b-modal",{ref:"app-modal",attrs:{id:"modal-center",size:"lg","hide-footer":"",centered:"",title:t.say+" Saniye içerisinde kapanacak","header-text-variant":"dark"}},[n("a",{attrs:{href:"https://illiyyuntv.com/illiyyuntv-android.apk",target:"blank"}},[n("img",{staticStyle:{width:"100%"},attrs:{src:"https://beyraha.com/media/resimler/illiyyun/android-down.jpg",alt:""}})])])],1),t._v(" "),t._l(t.posts,(function(t,e){return n("Posts",{key:e,attrs:{post:t}})}))],2)}),[],!1,null,"2633df9b",null);e.default=component.exports;installComponents(component,{Header:n(334).default,Posts:n(370).default})}}]);