exports.ids = [19,1,2,4,5,9,10];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/videos/watch/_videoId/index.vue?vue&type=template&id=f155327c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('Video',{attrs:{"videoItem":_vm.videoItem,"relatedItems":_vm.url},on:{"ended":_vm.ended}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/videos/watch/_videoId/index.vue?vue&type=template&id=f155327c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/videos/watch/_videoId/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var _videoIdvue_type_script_lang_js_ = ({middleware:"generalControls",head(){return{title:this.videoItem.name,meta:[{hid:"og:description",property:"og:description",content:this.videoItem.name+" başlıklı kur'an videosu || illiyyun tv"},{hid:"og:image",property:"og:image",content:this.videoItem.pictures.base_link},{hid:"twitter:image",property:"twitter:image",content:this.videoItem.pictures.base_link}]};},async asyncData({params,$axios,store}){let config={headers:{Authorization:"bearer 7ff64c7012578270af241ddbe0db2349",Accept:"application/vnd.vimeo.user+json;version=3.0,application/vnd.vimeo.video+json;version=3.4","Content-Type":"application/json"}};const videoItem=await $axios.$get("https://api.vimeo.com/videos/"+params.videoId+"?filter=playable",config);const url="https://api.vimeo.com/me/videos?sort=last_user_action_event_date&filter=playable";await store.dispatch("getVideosForHorizontalVidCard",url+"&per_page=12"+"&page=1");let next=true;let page=1;const videos=[];while(next){const data=await $axios.$get("https://api.vimeo.com/me/videos?fields=uri,link&page="+page+"&per_page=100",config);next=data.paging.next!==null?true:false;videos.push(...data.data);page++;if(data.data.length<100)next=false;}return{url,videoItem,videos};},beforeDestroy(){//sayfa kapanmadan önce store daki comments arrayını boşaltıyoruz ki buradaki yorumlar diğer routeda görünmesin
this.$store.commit("deleteAllComments");},methods:{ended(){const activeVideo=this.videos.find(video=>video.uri===`/videos/${this.$route.params.videoId}`);const nextVideo=this.videos[this.videos.indexOf(activeVideo)+1];if(nextVideo)this.$router.push("/videos/watch/"+nextVideo.link.split("/")[3]);}}});
// CONCATENATED MODULE: ./pages/videos/watch/_videoId/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var watch_videoIdvue_type_script_lang_js_ = (_videoIdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/videos/watch/_videoId/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  watch_videoIdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "44a016da"
  
)

/* harmony default export */ var _videoId = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(55).default,Video: __webpack_require__(91).default})


/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(54);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("50805f6e", content, true, context)
};

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3206968c", content, true, context)
};

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d9a770b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d9a770b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d9a770b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d9a770b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_d9a770b6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#searchDiv[data-v-d9a770b6]{width:500px;max-width:95%}.search-input[data-v-d9a770b6]{height:44px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=d9a770b6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('transition',{attrs:{"name":"home"}},[(_vm.isActiveSearchModal)?_c('div',{attrs:{"id":"searchModal"}},[_c('div',{staticClass:"d-flex justify-content-end"},[_c('i',{staticClass:"fa fa-close p-2 bg-danger m-2 btn text-white",staticStyle:{"font-size":"30px"},on:{"click":function($event){_vm.isActiveSearchModal = false}}})]),_vm._v(" "),_c('div',{attrs:{"id":"modalStyle"}},[_c('div',{staticClass:"input-group"},[_c('input',{staticClass:"form-control",attrs:{"type":"text","name":"","placeholder":"Ara","id":"modalSearchBar"},on:{"input":_vm.search}}),_vm._v(" "),_c('i',{staticClass:"fa fa-search text-secondary p-3 c-p",attrs:{"id":"modalSearchButton"},on:{"click":_vm.search}})])])]):_vm._e()]),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"home"}},[(_vm.isActiveMenuModal)?_c('div',{attrs:{"id":"menuModal"}},[_c('div',{staticClass:"d-flex justify-content-end"},[_c('i',{staticClass:"fa fa-close p-2 bg-danger m-2 btn text-white",staticStyle:{"font-size":"30px"},on:{"click":function($event){_vm.isActiveMenuModal = false}}})]),_vm._v(" "),_c('div',{staticClass:"d-flex justify-content-center",attrs:{"id":"modalStyle"}},[_c('div',{staticClass:"d-flex flex-column",staticStyle:{"font-size":"25px","font-family":"Montserrat"}},[_c('div',{staticClass:"itemIcon p-1 text-white"},[_c('p',[_c('nuxt-link',{staticClass:"text-center",attrs:{"to":"/"}},[_c('i',{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),_vm._v("\n                Ana Sayfa")])],1)]),_vm._v(" "),_c('div',{staticClass:"itemIcon p-1 text-white"},[_c('p',[_c('nuxt-link',{staticClass:"text-center",attrs:{"to":"/videos/all"}},[_c('i',{staticClass:"fa fa-video-camera",attrs:{"aria-hidden":"true"}}),_vm._v("\n                Videolar")])],1)]),_vm._v(" "),_c('div',{staticClass:"itemIcon p-1 text-white"},[_c('p',[_c('nuxt-link',{staticClass:"text-center",attrs:{"to":"/photos"}},[_c('i',{staticClass:"fa fa-picture-o",attrs:{"aria-hidden":"true"}}),_vm._v("\n                Resimler")])],1)]),_vm._v(" "),_c('div',{staticClass:"itemIcon p-1 text-white"},[_c('p',[_c('nuxt-link',{staticClass:"text-center",attrs:{"to":"/blog"}},[_c('img',{attrs:{"src":"/images/blog-icon.png","alt":""}}),_vm._v("\n                Yazılar")])],1)]),_vm._v(" "),_c('div',{staticClass:"itemIcon p-1 text-white"},[_c('p',[_c('nuxt-link',{staticClass:"text-center",attrs:{"to":"/"}},[_c('i',{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),_vm._v("\n                Hesabım")])],1)])])])]):_vm._e()]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"cover\""+(_vm._ssrClass("centeredBackgroundImage mobilHeightCover mb-2",{ home: _vm.$route.fullPath === '/' }))+(_vm._ssrStyle(null,[
      _vm.bannerImageUrl.length > 0
        ? { 'background-image': ("url(" + _vm.bannerImageUrl + ")") }
        : '' ], null))+" data-v-d9a770b6>","</div>",[_vm._ssrNode("<div class=\"container-fluid\" data-v-d9a770b6>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-d9a770b6>","</div>",[_vm._ssrNode("<div class=\"container-fluid px-0\" data-v-d9a770b6>","</div>",[_vm._ssrNode("<div id=\"pcMenu\""+(_vm._ssrClass("menu d-flex justify-content-between p-4",{ home: _vm.$route.fullPath === '/' }))+" data-v-d9a770b6>","</div>",[_vm._ssrNode("<div id=\"logo\" data-v-d9a770b6>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":_vm.logo,"alt":"İlliyyun Tv"}})])],1),_vm._ssrNode(" <div class=\"\n                d-flex\n                align-items-center\n                flex-column\n                bd-highlight\n                relative\n              \" data-v-d9a770b6><div id=\"searchDiv\" class=\"mt-1 bd-highlight\" data-v-d9a770b6><div class=\"input-group\" data-v-d9a770b6><input type=\"text\" placeholder=\"Aranacak içerik...\""+(_vm._ssrAttr("value",(_vm.searchKey)))+" class=\"form-control search-input\" data-v-d9a770b6> <div class=\"input-group-append\" data-v-d9a770b6><button class=\"btn search-btn\" data-v-d9a770b6><b data-v-d9a770b6>ARA</b></button></div></div></div> "+((_vm.showSearchResult)?("<div class=\"search-result\" data-v-d9a770b6><a href=\"#\" class=\"result-item\" data-v-d9a770b6><span class=\"left\" data-v-d9a770b6>Videolar</span> <span class=\"right\" data-v-d9a770b6>"+_vm._ssrEscape(_vm._s(_vm.videoCount)+" İçerik")+"</span></a> <a href=\"#\" class=\"result-item\" data-v-d9a770b6><span class=\"left\" data-v-d9a770b6>Resimler</span> <span class=\"right\" data-v-d9a770b6>"+_vm._ssrEscape(_vm._s(_vm.galleryCount)+" İçerik")+"</span></a> <a href=\"#\" class=\"result-item\" data-v-d9a770b6><span class=\"left\" data-v-d9a770b6>Yazılar</span> <span class=\"right\" data-v-d9a770b6>"+_vm._ssrEscape(_vm._s(_vm.blogCount)+" İçerik")+"</span></a></div>"):"<!---->")+"</div> "),_vm._ssrNode("<div id=\"headerIcons\" class=\"d-flex justify-content-between\" data-v-d9a770b6>","</div>",[_vm._ssrNode("<div class=\"itemIcon p-1\" data-v-d9a770b6>","</div>",[_c('nuxt-link',{attrs:{"to":"/videos/all"}},[_c('div',[_c('i',{staticClass:"fa fa-video-camera"})]),_vm._v(" "),_c('span',[_vm._v("Videolar")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"itemIcon p-1\" data-v-d9a770b6>","</div>",[_c('nuxt-link',{attrs:{"to":"/photos"}},[_c('div',[_c('i',{staticClass:"fa fa-picture-o"})]),_vm._v(" "),_c('span',[_vm._v("Resimler")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"itemIcon p-1\" data-v-d9a770b6>","</div>",[_c('nuxt-link',{attrs:{"to":"/blog"}},[_c('div',[_c('img',{attrs:{"src":"/images/blog-icon.png","alt":""}})]),_vm._v(" "),_c('span',[_vm._v("Yazılar")])])],1),_vm._ssrNode(" "),(_vm.$store.state.userData.isLogin)?_vm._ssrNode("<div class=\"itemIcon p-1\" data-v-d9a770b6>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('div',[_c('i',{staticClass:"fa fa-user-circle"})]),_vm._v(" "),_c('span',[_vm._v("Hesabım")])])],1):_vm._e(),_vm._ssrNode(" "),(_vm.$store.state.userData.isLogin)?_vm._ssrNode("<div class=\"itemIcon p-1\" data-v-d9a770b6>","</div>",[_vm._ssrNode("<a href=\"#\" data-v-d9a770b6><div data-v-d9a770b6><i aria-hidden=\"true\" class=\"fa fa-sign-out\" data-v-d9a770b6></i></div> <span data-v-d9a770b6>Çıkış</span></a>")],2):_vm._ssrNode("<div class=\"itemIcon p-1\" data-v-d9a770b6>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('div',[_c('i',{staticClass:"fa fa-sign-in"})]),_vm._v(" "),_c('span',[_vm._v("Kayıt / Giriş")])])],1)],2)],2),_vm._ssrNode(" <div id=\"mobilMenu\" class=\"d-flex justify-content-between pt-2 mobilMenuDivPadding\" data-v-d9a770b6><div data-v-d9a770b6><i aria-hidden=\"true\" class=\"fa fa-bars text-white btn p-0\" style=\"font-size: 35px\" data-v-d9a770b6></i></div> <div data-v-d9a770b6><img"+(_vm._ssrAttr("src",_vm.logo))+" alt=\"İlliyyun Tv\" style=\"width: 50px\" data-v-d9a770b6></div> <div data-v-d9a770b6><i id=\"mobilSearchButton\" aria-hidden=\"true\" class=\"fa fa-search btn btn-danger btn-sm p-2\" data-v-d9a770b6></i></div></div>")],2)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=d9a770b6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({props:{bannerImageUrl:{default:""}},async fetch(){const{data}=await this.$axios.get("/logo");this.logo=data.Image?data.Image.url:"";},data(){return{logo:"",isActiveMenuModal:false,isActiveSearchModal:false,showSearchResult:false,searchKey:"",timer:undefined,videoCount:0,blogCount:0,galleryCount:0};},methods:{async search(){clearTimeout(this.timer);this.timer=setTimeout(this.doSearch,500);},async doSearch(){this.showSearchResult=true;if(this.searchKey.length>3){let config={headers:{Authorization:"bearer 65b33c797381dac21098a627af08ffe1",Accept:"application/vnd.vimeo.user+json;version=3.0,application/vnd.vimeo.video+json;version=3.4","Content-Type":"application/json"}};const videos=await this.$axios.$get("https://api.vimeo.com/me/videos?query="+this.searchKey,config);this.videoCount=videos.data.length;const{data}=await this.$axios.get("/blogs/count?title_contains="+this.searchKey);this.blogCount=data;const{data:galleryCount}=await this.$axios.get("/blogs/count?title_contains="+this.searchKey);this.galleryCount=galleryCount;}else{this.showSearchResult=false;}}}});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(53)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d9a770b6",
  "edca67da"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_7cc8ee16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_7cc8ee16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_7cc8ee16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_7cc8ee16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Videos_vue_vue_type_style_index_0_id_7cc8ee16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(21);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(59);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#cover[data-v-7cc8ee16]{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");position:relative;height:400px;margin-bottom:-50px;-webkit-mask-image:-webkit-gradient(linear,center bottom,center top,color-stop(0,transparent),color-stop(1,#000))}a[data-v-7cc8ee16]{text-decoration:none!important;color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/videosHeadImage.91d6b77.jpg";

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/video/Videos.vue?vue&type=template&id=7cc8ee16&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"container-fluid\" data-v-7cc8ee16>","</div>",[_vm._ssrNode(((_vm.videos.search)?("<div data-v-7cc8ee16><p class=\"text-muted\" data-v-7cc8ee16><i data-v-7cc8ee16>"+_vm._ssrEscape(_vm._s(_vm.videos.data.length)+" adet sonuç bulundu")+"</i></p></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"row\" data-v-7cc8ee16>","</div>",_vm._l((_vm.videos),function(video,index){return _vm._ssrNode("<div class=\"col-md-3\" data-v-7cc8ee16>","</div>",[_vm._ssrNode("<div style=\"position: relative\" data-v-7cc8ee16>","</div>",[_vm._ssrNode("<span class=\"badge p-1 bg-siyah\" style=\"position: absolute; right: 7px; bottom: 5px\" data-v-7cc8ee16>"+_vm._ssrEscape(_vm._s(_vm.$videoTime(video.duration)))+"</span> "),_c('nuxt-link',{staticStyle:{"width":"100%","cursor":"pointer"},attrs:{"to":'/videos/watch/' + video.link.split('/')[3]}},[_c('img',{staticStyle:{"width":"100%","cursor":"pointer"},attrs:{"src":video.pictures.sizes[2].link,"alt":""}})])],2),_vm._ssrNode(" <br data-v-7cc8ee16> "),_vm._ssrNode("<span data-v-7cc8ee16>","</span>",[_c('nuxt-link',{staticStyle:{"cursor":"pointer"},attrs:{"to":'/videos/watch/' + video.link.split('/')[3]}},[_vm._v(_vm._s(video.name))])],1),_vm._ssrNode(" <br data-v-7cc8ee16> <span class=\"text-muted\" data-v-7cc8ee16><small data-v-7cc8ee16><i aria-hidden=\"true\" class=\"fa fa-play-circle\" data-v-7cc8ee16></i> <span data-v-7cc8ee16>"+(_vm._s(
                video.stats.plays == 0
                  ? 'Görüntüleme Yok'
                  : video.stats.plays + ' Görüntülenme'
              ))+"</span></small></span>\n          \n        <span class=\"text-muted\" data-v-7cc8ee16><small data-v-7cc8ee16><i aria-hidden=\"true\" class=\"fa fa-clock-o\" data-v-7cc8ee16></i> <span data-v-7cc8ee16>"+_vm._ssrEscape(_vm._s(_vm.$timeEgo(Date.parse(video.created_time))))+"</span></small></span> <br data-v-7cc8ee16><br data-v-7cc8ee16>")],2)}),0)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/video/Videos.vue?vue&type=template&id=7cc8ee16&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/video/Videos.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Videosvue_type_script_lang_js_ = ({props:["videos"]});
// CONCATENATED MODULE: ./components/video/Videos.vue?vue&type=script&lang=js&
 /* harmony default export */ var video_Videosvue_type_script_lang_js_ = (Videosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/video/Videos.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  video_Videosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7cc8ee16",
  "e6c1f21c"
  
)

/* harmony default export */ var Videos = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(76);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("06195dfa", content, true, context)
};

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/video/HorizontalVideoCard.vue?vue&type=template&id=302865d3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.$route.path == '/videos/all')?_vm._ssrNode("<div>","</div>",[_c('Videos',{attrs:{"videos":_vm.horizonData.videos}})],1):_vm._l((_vm.horizonData.videos),function(relatedItem,index){return _vm._ssrNode("<div class=\"oneriVideoItem\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col\""+(_vm._ssrStyle(null,{ maxWidth: _vm.$route.query.aranan ? '320px' : '220px' }, null))+">","</div>",[_vm._ssrNode("<div class=\"position-relative\">","</div>",[_vm._ssrNode("<span class=\"badge p-1 bg-siyah videoTimeSpan\">"+_vm._ssrEscape(_vm._s(_vm.$videoTime(relatedItem.duration)))+"</span> "),_c('nuxt-link',{attrs:{"to":'/videos/watch/' + relatedItem.link.split('/')[3]}},[_c('img',{staticStyle:{"width":"100%","cursor":"pointer"},attrs:{"src":relatedItem.pictures.sizes[3].link,"alt":""}})])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col p-0\">","</div>",[_vm._ssrNode("<span>","</span>",[_c('nuxt-link',{staticStyle:{"cursor":"pointer","text-decoration":"none","color":"white"},attrs:{"to":'/videos/watch/' + relatedItem.link.split('/')[3]}},[_vm._v(_vm._s(relatedItem.name.length > 40
                ? relatedItem.name.slice(0, 40) + "..."
                : relatedItem.name))])],1),_vm._ssrNode(" <br> <span class=\"text-muted\"><small><span>"+(_vm._s(
                relatedItem.stats.plays == 0
                  ? '0'
                  : relatedItem.stats.plays + ' görüntüleme'
              ))+"</span>\n            •\n          </small></span> <span class=\"text-muted\"><small><span>"+_vm._ssrEscape(_vm._s(_vm.$timeEgo(Date.parse(relatedItem.created_time))))+"</span></small></span>")],2)],2)])}),_vm._ssrNode(" "),_c('infinite-loading',{key:_vm.infiniteKey,attrs:{"spinner":"spiral"},on:{"infinite":_vm.infiniteScroll}},[_c('span',{attrs:{"slot":"no-more"},slot:"no-more"}),_vm._v(" "),_c('span',{attrs:{"slot":"no-results"},slot:"no-results"})])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/video/HorizontalVideoCard.vue?vue&type=template&id=302865d3&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/video/HorizontalVideoCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HorizontalVideoCardvue_type_script_lang_js_ = ({props:["url"],data(){return{infiniteKey:"infiniteKey",page:2,per_page:12};},computed:{...Object(external_vuex_["mapGetters"])({horizonData:"horizonVidCardData"}),lastUrl:function(){let url=this.url;this.$route.query.aranan?url="query="+this.$route.query.aranan:"";return url+"&per_page="+this.per_page+"&page="+this.page;}},methods:{infiniteScroll($state){this.$store.dispatch("getVideosForHorizontalVidCard",this.lastUrl).then(response=>{if(response==true){$state.loaded();}else{$state.complete();}}).catch(err=>{console.log(err);$state.complete();});this.page++;}},watch:{"$route.query.aranan":function(){this.infiniteKey=Math.random()*100;}}});
// CONCATENATED MODULE: ./components/video/HorizontalVideoCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var video_HorizontalVideoCardvue_type_script_lang_js_ = (HorizontalVideoCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/video/HorizontalVideoCard.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  video_HorizontalVideoCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "84324086"
  
)

/* harmony default export */ var HorizontalVideoCard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Videos: __webpack_require__(60).default})


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/video/InsertComment.vue?vue&type=template&id=76a3b571&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"d-flex bd-highlight mb-3 mt-3\">","</div>",[_vm._ssrNode("<div class=\"bd-highlight\">","</div>",[_vm._ssrNode("<div class=\"defaultProfileDiv\">","</div>",[_c('big',[_c('b',{staticClass:"text-siyah"},[_vm._v(_vm._s(_vm.$store.state.userData.user.userFullName.charAt(0)))])])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"ml-3 flex-fill bd-highlight\">","</div>",[_vm._ssrNode("<textarea placeholder=\"Herkese açık bir yorum ekle...\" class=\"form-control bg-transparent textAreaDotNone videoCommentTextarea p-0\" style=\"min: height 50px\"></textarea> "),_c('transition-group',{attrs:{"name":"home","mode":"out-in"}},[(_vm.newComment.length > 0)?_c('b-button',{key:"1",staticClass:"mt-2 bg-kirmizi ml-2 float-right",attrs:{"size":"sm","disabled":_vm.newComment.length < 3},on:{"click":_vm.submitComment}},[_vm._v("Yorum ekle")]):_vm._e(),_vm._v(" "),(this.newComment.length != 0)?_c('b-button',{key:"2",staticClass:"mt-2 btn-white float-right",attrs:{"size":"sm"},on:{"click":_vm.cancelComment}},[_vm._v("İptal")]):_vm._e()],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/video/InsertComment.vue?vue&type=template&id=76a3b571&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/video/InsertComment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var InsertCommentvue_type_script_lang_js_ = ({props:["isReply","commentItem"],data(){return{newComment:"",isCommentButton:false,isCancelButton:false};},methods:{cancelComment(){this.newComment="";this.$refs.commentArea.value="";this.isCommentButton=false;},changeCommentValue(e){this.newComment=e.target.value;},async submitComment(){let obj={comment_comment:this.newComment,user_id:this.$store.state.userData.user.user_id,video_id:this.$route.params.videoId};if(this.isReply){obj.parentId=this.commentItem.parentId==0?this.commentItem.id:this.commentItem.parentId;obj.commentProps={repliedCommentFullName:this.commentItem.userFullName,isReplied:false};}const response=await this.$axios.$post(process.env.baseapi1+"video/comments/add",{...obj});if(response.durum=="success"){this.newComment="";this.$refs.commentArea.value="";this.$store.commit("afterSendComment",{...response.results3[0],...this.$store.state.userData.user});}}},watch:{newComment(){const element=this.$refs.commentArea;element.style.height="auto";element.style.height=element.scrollHeight+"px";if(this.newComment==0){element.style.height="50px";}}}});
// CONCATENATED MODULE: ./components/video/InsertComment.vue?vue&type=script&lang=js&
 /* harmony default export */ var video_InsertCommentvue_type_script_lang_js_ = (InsertCommentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/video/InsertComment.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  video_InsertCommentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7963f5bc"
  
)

/* harmony default export */ var InsertComment = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/video/CommentItem.vue?vue&type=template&id=4f5a84f4&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.commentItem.parentId == 0 || _vm.replyComp)?_c('div',[_vm._ssrNode("<div class=\"media mt-3\">","</div>",[_vm._ssrNode("<div class=\"bd-highlight mr-3\">","</div>",[_vm._ssrNode("<div class=\"defaultProfileDiv\">","</div>",[_c('big',[_c('b',{staticClass:"text-siyah"},[_vm._v(_vm._s(_vm.commentItem.userFullName.charAt(0)))])])],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"media-body\">","</div>",[_vm._ssrNode("<div class=\"d-flex justify-content-between\">","</div>",[_c('big',{staticClass:"mt-0",staticStyle:{"font-size":"17px !important"}},[_vm._v("\n          "+_vm._s(_vm.commentItem.userFullName)+"\n          "),_c('small',{staticClass:"text-muted ml-2"},[_vm._v(_vm._s(_vm.$timeEgo(Date.parse(_vm.commentItem.comment_date))))])]),_vm._ssrNode(" "),(_vm.$store.state.userData.user.user_id != null)?_c('b-dropdown',{attrs:{"right":"","size":"lg","variant":"link","no-caret":"","toggle-class":"m-0 p-0"},scopedSlots:_vm._u([{key:"button-content",fn:function(){return [_c('i',{staticClass:"text-decoration-none fa fa-ellipsis-v m-0 text-gri"}),_vm._v(" "),_c('span',{staticClass:"sr-only"},[_vm._v("Search")])]},proxy:true}],null,false,3361441876)},[_vm._v(" "),(
              _vm.$store.state.userData.user.userType == 1 ||
              _vm.commentItem.user_id == _vm.$store.state.userData.user.user_id
            )?[(_vm.commentItem.user_id == _vm.$store.state.userData.user.user_id)?_c('b-dropdown-item',{attrs:{"href":"#"},on:{"click":function($event){_vm.isEditing = true}}},[_vm._v("Düzenle")]):_vm._e(),_vm._v(" "),_c('b-dropdown-item',{attrs:{"href":"#"},on:{"click":_vm.deleteComment}},[_vm._v("Sil")])]:_vm._e(),_vm._v(" "),(
              _vm.$store.state.userData.user.userType != 1 &&
              _vm.commentItem.user_id != _vm.$store.state.userData.user.user_id
            )?_c('b-dropdown-item',[_vm._v("Şikayet et")]):_vm._e(),_vm._v(" "),(_vm.$store.state.userData.user.userType == 1)?_c('b-dropdown-item',{on:{"click":_vm.banned}},[_vm._v("Üyeyi Engelle")]):_vm._e()],2):_vm._e()],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"commentParagItem\">","</div>",[_vm._ssrNode("<div id=\"faq\" class=\"accordion\">","</div>",[_vm._ssrNode("<small>"+(_vm._s(
              _vm.replyComp
                ? '<span class=text-mavi>@' +
                  JSON.parse(_vm.commentItem.commentProps)
                    .repliedCommentFullName +
                  '</span>  '
                : ''
            ))+"</small> <div"+(_vm._ssrAttr("contenteditable",_vm.isEditing))+(_vm._ssrClass(null,{
              activeEditing: _vm.isEditing,
              'font-size-15 font-source-sans-pro commentDiv mt-2': true,
            }))+(_vm._ssrStyle(null,_vm.readMore ? 'max-height:none !important' : '', null))+">"+(_vm._s(_vm.commentItem.comment_comment))+"</div> "),(_vm.isEditing)?_vm._ssrNode("<div>","</div>",[_c('b-button',{key:"1",staticClass:"mt-2 bg-kirmizi ml-2 float-right",attrs:{"size":"sm"},on:{"click":_vm.updateComment}},[_vm._v("Kaydet")]),_vm._ssrNode(" "),_c('b-button',{key:"2",staticClass:"mt-2 btn-white float-right",attrs:{"size":"sm"},on:{"click":_vm.cancelEditing}},[_vm._v("İptal")])],2):_vm._e(),_vm._ssrNode(" <i>"+((
                _vm.commentItem.comment_comment.split(/\r\n|\r|\n/).length > 7 &&
                _vm.isEditing == false
              )?("<p style=\"cursor: pointer\">"+_vm._ssrEscape(_vm._s(_vm.readMore ? 'devamını gizle' : 'devamını oku'))+"</p>"):"<!---->")+"</i>")],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-2\" style=\"line-height: 20px\">","</div>",[_vm._ssrNode("<div class=\"row m-0\">","</div>",[_c('big',[_c('i',{class:{
                'fa fa-thumbs-up text-gri': true,
                'text-mavi': _vm.configLikes(
                  _vm.commentItem.comment_likes,
                  'isLiked'
                ),
              },staticStyle:{"cursor":"pointer"},attrs:{"aria-hidden":"true"},on:{"click":function($event){return _vm.likeAComment({
                  id: _vm.commentItem.id,
                  user_id: _vm.$store.state.userData.user.user_id,
                })}}}),_vm._v("  ")]),_vm._ssrNode(" <span class=\"text-muted\"><small>"+(_vm._s(_vm.configLikes(_vm.commentItem.comment_likes, 'userLikes')))+"</small></span>    \n\n          <div>"+((
                JSON.parse(_vm.commentItem.comment_likes).adminLike == 1 ||
                _vm.$store.state.userData.user.userType == 1
              )?("<i aria-hidden=\"true\""+(_vm._ssrClass("fa fa-heart text-gri",{
                'text-kirmizi':
                  JSON.parse(_vm.commentItem.comment_likes).adminLike == 1,
              }))+" style=\"cursor: pointer\"></i>"):"<!---->")+" "+((JSON.parse(_vm.commentItem.comment_likes).adminLike == 1)?("<img"+(_vm._ssrAttr("src",__webpack_require__(74)))+" width=\"20\" style=\"border-radius:50%\">"):"<!---->")+"</div> "+((_vm.$store.state.userData.user.user_id != null)?("<span class=\"text-muted ml-2 c-p\"> Yanıtla</span>"):"<!---->"))],2),_vm._ssrNode(" "),(_vm.$store.state.userData.user.user_id != null && _vm.isReply == true)?_c('InsertComment',{attrs:{"commentItem":_vm.commentItem,"isReply":_vm.isReply}}):_vm._e(),_vm._ssrNode(" "+((
            JSON.parse(_vm.commentItem.commentProps).isReplied == true &&
            !_vm.replyComp
          )?("<p class=\"mt-2 text-mavi c-p\">"+_vm._ssrEscape(_vm._s(!_vm.isOpenReplies ? 'Yanıtları gör' : 'Yanıtları gizle'))+"</p>"):"<!---->")+" "),_vm._l((_vm.commentItem.replies),function(repliesItem){return _c('CommentItem',{key:repliesItem.id,attrs:{"commentItem":repliesItem,"replyComp":true}})}),_vm._ssrNode(" "+((_vm.isNextData && _vm.isOpenReplies)?("<p class=\"text-mavi mt-3 c-p\">\n          Daha fazla yanıt gör\n        </p>"):"<!---->"))],2)],2)],2)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/video/CommentItem.vue?vue&type=template&id=4f5a84f4&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(7);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/video/CommentItem.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var CommentItemvue_type_script_lang_js_ = ({props:["commentItem","replyComp"],name:"CommentItem",data(){return{isEditing:false,readMore:false,editedComment:null,isReply:false,parentUser:null,isOpenReplies:false,isNextData:false};},methods:{async banned(){if(confirm("Üye engellensinmi ? üyeye dair tüm içerik silinecek.")){const response=await this.$axios.$post(process.env.baseapi1+"user/delete",{id:this.commentItem.user_id});if(response.durum=="success"){external_js_cookie_default.a.remove("acsess_token");this.$toast.success("Üye engellendi.",{duration:3000});}else{this.$toast.success("Bir sorun oluştu.",{duration:3000});}}},promise(term,payload){return this.$store.dispatch(term,payload).then(res=>{return res;}).then(resp=>{return resp;});},cancelEditing(){this.$refs.commentArea.innerHTML=this.commentItem.comment_comment;this.isCommentButton=false;this.isEditing=false;},async getReplies(){const mevcut=this.commentItem.replies?this.commentItem.replies.length:0;const res=await this.promise("getReplies",{id:this.commentItem.id,mevcut});this.isNextData=res;this.isOpenReplies=true;},hideReplies(){this.$store.commit("hideReplies",this.commentItem.id);this.isOpenReplies=false;},newComment(val){this.editedComment=val.target.innerHTML;},async updateComment(){await this.$store.dispatch("updateComment",{id:this.commentItem.id,user_id:this.commentItem.user_id,comment_comment:this.editedComment,parentId:this.commentItem.parentId}).then(r=>{this.$toast.success("Yorum güncellendi.",{duration:3000});}).catch(e=>{this.$toast.error("Bir hata oluştu.",{duration:3000});});this.cancelEditing();},async deleteComment(){const response=await this.$axios.$post(process.env.baseapi1+"video/comments/delete",{id:this.commentItem.id,user_id:this.commentItem.user_id,parentId:this.commentItem.parentId});if(response.durum=="success"){await this.$store.commit("deleteComment",{id:this.commentItem.id,parentId:this.commentItem.parentId});this.$toast.success("Yorum silindi.",{duration:3000});}},configLikes(obj,opt){if(opt=="userLikes"){return JSON.parse(obj).userLikes;}if(opt=="isLiked"){return JSON.parse(obj).userIds.find(x=>x===this.$store.state.userData.user.user_id)!=undefined;}},likeAComment(obj){this.$store.dispatch("likeAComment",obj);}}});
// CONCATENATED MODULE: ./components/video/CommentItem.vue?vue&type=script&lang=js&
 /* harmony default export */ var video_CommentItemvue_type_script_lang_js_ = (CommentItemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/video/CommentItem.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(75)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  video_CommentItemvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1bcf7be8"
  
)

/* harmony default export */ var CommentItem = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InsertComment: __webpack_require__(64).default,CommentItem: __webpack_require__(67).default})


/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6f9c5ad0", content, true, context)
};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/illiyyunProfileLogo.d15f6a9.png";

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentItem_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".activeEditing{max-height:none!important;padding:10px;background-color:#202020}.commentDiv{white-space:pre-wrap;max-height:160px;overflow:hidden;width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/tick.49e2e5a.png";

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_3c97d8e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_3c97d8e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_3c97d8e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_3c97d8e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Video_vue_vue_type_style_index_0_id_3c97d8e7_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#plusIconVideoPage[data-v-3c97d8e7]{outline:none!important;outline-width:0!important;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none}.logo[data-v-3c97d8e7]{aspect-ratio:contain;width:40px;height:40px;margin-bottom:-10px}.custom-row[data-v-3c97d8e7]{display:flex;align-items:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/video/Video.vue?vue&type=template&id=3c97d8e7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"videoPageContainer\" class=\"container-fluid\" data-v-3c97d8e7>","</div>",[_vm._ssrNode("<div class=\"row m-0\" data-v-3c97d8e7>","</div>",[_vm._ssrNode("<div id=\"videoCol\" class=\"col mb-4\" data-v-3c97d8e7>","</div>",[_vm._ssrNode("<div id=\"videoContent\" class=\"embed-responsive embed-responsive-16by9\" data-v-3c97d8e7><iframe"+(_vm._ssrAttr("src",'https://player.vimeo.com/video/' +
              _vm.videoId +
              '?autoplay=1&autopause=0'))+" width=\"640\" height=\"360\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen=\"allowfullscreen\" data-v-3c97d8e7></iframe></div> "),_vm._ssrNode("<div class=\"d-flex justify-content-between\" data-v-3c97d8e7>","</div>",[_vm._ssrNode("<div class=\"mt-4\" data-v-3c97d8e7>","</div>",[_vm._l((_vm.videoItem.tags),function(tag,index){return _vm._ssrNode("<small data-v-3c97d8e7>","</small>",[_c('nuxt-link',{staticStyle:{"font-size":"14px"},attrs:{"to":'/videos?aranan=' + tag.tag}},[_vm._v("#"+_vm._s(tag.tag)+"\n              ")])],1)}),_vm._ssrNode(" <h1 id=\"videoBaslik\" class=\"font-source-sans-pro font-size-25\" data-v-3c97d8e7>"+_vm._ssrEscape("\n              "+_vm._s(_vm.videoItem.name)+"\n            ")+"</h1>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"text-muted mt-4 pt-1\" data-v-3c97d8e7>","</div>",[_c('b-dropdown',{attrs:{"right":"","size":"lg","variant":"link","no-caret":"","toggle-class":"m-0 p-0"},scopedSlots:_vm._u([{key:"button-content",fn:function(){return [_c('i',{staticClass:"\n                    fa fa-cloud-download fa-2x\n                    m-0\n                    btn\n                    bg-kirmizi\n                    text-white\n                    p-1\n                    pl-2\n                    pr-2\n                  "}),_vm._v(" "),_c('span',{staticClass:"sr-only"},[_vm._v("Search")])]},proxy:true}])},[_vm._v(" "),_vm._l((_vm.videoItem.files),function(downItem,index){return [(index != 5)?_c('b-dropdown-item',{key:index,attrs:{"href":downItem.link,"download":""}},[_c('i',{staticClass:"fa fa-angle-double-down",attrs:{"aria-hidden":"true"}}),_vm._v("\n                  "+_vm._s(downItem.public_name)+" ("+_vm._s(downItem.size_short)+")\n                ")]):_vm._e()]})],2)],1)],2),_vm._ssrNode(" <div class=\"row\" data-v-3c97d8e7><div class=\"col-md-6\" style=\"font-size: 14px\" data-v-3c97d8e7><p class=\"text-muted\" data-v-3c97d8e7><i aria-hidden=\"true\" class=\"fa fa-play-circle\" data-v-3c97d8e7></i> <span data-v-3c97d8e7>"+(_vm._s(
                  _vm.videoItem.stats.plays == 0
                    ? 'Görüntüleme Yok'
                    : _vm.videoItem.stats.plays + ' Görüntülenme'
                ))+"</span>\n                 <i aria-hidden=\"true\" class=\"fa fa-clock-o\" data-v-3c97d8e7></i>"+_vm._ssrEscape("\n              "+_vm._s(_vm.$timeCreate(_vm.videoItem.created_time.split("T")[0]))+"\n            ")+"</p></div></div> "),_vm._ssrNode("<div data-v-3c97d8e7>","</div>",[_c('span',{directives:[{name:"b-modal",rawName:"v-b-modal.modal-1",modifiers:{"modal-1":true}}]},[_vm._ssrNode("\n            Paylaş\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\" class=\"bi bi-share\" data-v-3c97d8e7><path d=\"M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z\" data-v-3c97d8e7></path></svg>")]),_vm._ssrNode(" "),_c('b-modal',{attrs:{"id":"modal-1","hide-footer":"","hide-header":"","title":"BootstrapVue"}},[_c('div',{staticClass:"modal-content col-12"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title"},[_vm._v("Paylaş")]),_vm._v(" "),_c('button',{staticClass:"close",attrs:{"type":"button","aria-label":"Close"},on:{"click":function($event){return _vm.$bvModal.hide('modal-1')}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])]),_vm._v(" "),_c('div',{staticClass:"modal-body mt-3"},[_c('div',{staticClass:"icon-container1 d-flex"},[_c('div',{staticClass:"smd"},[_c('a',{attrs:{"target":"_blank","href":'https://twitter.com/intent/tweet?text=' +
                        _vm.videoItem.name.replace('|', '-') +
                        '&url=' +
                        _vm.link}},[_c('i',{staticClass:"img-thumbnail fa fa-twitter fa-2x p-3",staticStyle:{"color":"#4c6ef5","background-color":"aliceblue"}}),_vm._v(" "),_c('p',[_vm._v("Twitter")])])]),_vm._v(" "),_c('div',{staticClass:"smd"},[_c('a',{attrs:{"target":"_blank","href":'https://www.facebook.com/sharer/sharer.php?u=' + _vm.link}},[_c('i',{staticClass:"\n                          img-thumbnail\n                          fa fa-facebook-official fa-2x\n                          p-3\n                        ",staticStyle:{"color":"#3b5998","background-color":"#eceff5"}}),_vm._v(" "),_c('p',[_vm._v("Facebook")])])]),_vm._v(" "),_c('div',{staticClass:"smd"},[_c('a',{attrs:{"href":'http://www.reddit.com/submit?url=' +
                        _vm.link +
                        '&title=' +
                        _vm.videoItem.name,"target":"_blank","rel":"noopener noreferrer"}},[_c('i',{staticClass:"img-thumbnail fa fa-reddit-alien fa-2x p-3",staticStyle:{"color":"#ff5700","background-color":"#fdd9ce"}}),_vm._v(" "),_c('p',[_vm._v("Reddit")])])])]),_vm._v(" "),_c('div',{staticClass:"icon-container2 d-flex"},[_c('div',{staticClass:"smd"},[_c('a',{attrs:{"href":'whatsapp://send?text=' + _vm.link + ' ' + _vm.videoItem.name,"data-action":"share/whatsapp/share","target":"_blank"}},[_c('i',{staticClass:"img-thumbnail fa fa-whatsapp fa-2x p-3",staticStyle:{"color":"#25d366","background-color":"#cef5dc"}}),_vm._v(" "),_c('p',[_vm._v("Whatsapp")])])]),_vm._v(" "),_c('div',{staticClass:"smd"},[_c('div',{staticClass:"img-thumbnail fa fa-messenger fa-2x p-3",staticStyle:{"color":"#3b5998","background-color":"#eceff5"}},[_c('a',{attrs:{"target":"_blank","href":'fb-messenger://share/?link=' + _vm.link}},[_c('img',{attrs:{"width":"30","src":"https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Facebook_Messenger-512.png","alt":""}})])]),_vm._v(" "),_c('a',{attrs:{"target":"_blank","href":'fb-messenger://share/?link=' + _vm.link}},[_c('p',[_vm._v("Messenger")])])]),_vm._v(" "),_c('div',{staticClass:"smd"},[_c('a',{attrs:{"href":'https://telegram.me/share/url?url=' +
                        _vm.link +
                        '&text=' +
                        _vm.videoItem.name,"target":"_blank","rel":"noopener noreferrer"}},[_c('i',{staticClass:"img-thumbnail fa fa-telegram fa-2x p-3",staticStyle:{"color":"#4c6ef5","background-color":"aliceblue"}}),_vm._v(" "),_c('p',[_vm._v("Telegram")])])])])]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('label',{staticStyle:{"font-weight":"600"}},[_vm._v("Sayfa Linki "),_c('span',{staticClass:"message"})]),_c('br'),_vm._v(" "),_c('div',{staticClass:"row"},[_c('input',{staticClass:"col-10 ur",staticStyle:{"height":"40px"},attrs:{"type":"url","id":"myInput","aria-describedby":"inputGroup-sizing-default"},domProps:{"value":_vm.link}}),_vm._v(" "),_c('button',{staticClass:"cpy",on:{"click":_vm.kopyala}},[_c('i',{staticClass:"fa fa-clone"})])]),_vm._v(" "),(_vm.linkmesaj)?_c('span',[_vm._v("Kopyalandı!")]):_vm._e()])])])],2),_vm._ssrNode(" <div class=\"yanCizgi mt-2\" data-v-3c97d8e7></div> "),_vm._ssrNode("<div data-v-3c97d8e7>","</div>",[_vm._ssrNode("<div class=\"custom-row m-0 mt-2\" data-v-3c97d8e7>","</div>",[_vm._ssrNode("<img src=\"https://res.cloudinary.com/dt2yilfxo/image/upload/v1648170617/logo_a57e49401f.png\" class=\"logo\" style=\"border-radius: 50%\" data-v-3c97d8e7> "),_vm._ssrNode("<span class=\"p-3\" style=\"font-family: Open Sans\" data-v-3c97d8e7>","</span>",[_vm._ssrNode("<b class=\"row m-0\" data-v-3c97d8e7>","</b>",[_c('nuxt-link',{staticClass:"c-p mr-2",attrs:{"to":"/videos/all"}},[_c('span',[_vm._v("İlliyyûnTV")])]),_vm._ssrNode(" <span"+(_vm._ssrStyle(null,"\n                      display: flex;\n                      justify-content: center;\n                      align-items: center;\n                      width: 17px;\n                          margin-top: 3px;\n                      height: 17px;\n                      \n                      border-radius: 50%;", null))+" data-v-3c97d8e7><img"+(_vm._ssrAttr("src",__webpack_require__(81)))+" width=\"20\" alt srcset data-v-3c97d8e7></span>")],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mt-3\" data-v-3c97d8e7>","</div>",[_vm._ssrNode("<div id=\"faq\" class=\"accordion\" data-v-3c97d8e7>","</div>",[_vm._ssrNode("<p data-v-3c97d8e7>\n                Sadece meal okumak ile Kur'ân-ı Kerim'in bir çok âyetinin\n                anlaşılması mümkün değildir. Mutlaka bir tefsire başvurulması\n                gerekir.\n              </p> <p data-v-3c97d8e7>\n                Tefsir için tıklayınız;\n                <a target=\"blank\" href=\"https://mega.nz/folder/T8MCTILT#Q7cNjUEiSdUSUiCKtaKtWQ\" data-v-3c97d8e7>https://mega.nz/folder/T8MCTILT#Q7cNj...</a></p> "),_c('b-collapse',{attrs:{"id":"collapse-2"}},[_c('p',[_vm._v("\n                  Hadis için tıklayınız;\n                  "),_c('a',{attrs:{"target":"blank","href":"https://mega.nz/folder/DxExGSqC#Is6xpyAN5EIxiWdiSS2Xmw"}},[_vm._v("https://mega.nz/folder/T8MCTILT#Q7cNj...")])]),_vm._v(" "),_c('p',[_vm._v("İbn Abbâs (Radıyallahu anh) dedi ki;")]),_vm._v(" "),_c('p',[_vm._v("\"Kur'ân'ın tefsiri dört yöndedir:")]),_vm._v(" "),_c('p',[_vm._v("\n                  • Birincisi, arapların kendi dilleri ile bildiği tefsir.\n                ")]),_vm._v(" "),_c('p',[_vm._v("\n                  • İkincisi, bilmemenin mazeret olmadığı ve herkesin bilmesi\n                  gereken tefsir.\n                ")]),_vm._v(" "),_c('p',[_vm._v("• Üçüncüsü, âlimlerin bildiği tefsir.")]),_vm._v(" "),_c('p',[_vm._v("• Dördüncü ise, yalnızca Allah'ın bildiği tefsirdir.")]),_vm._v(" "),_c('p',[_vm._v("Kim bu tefsiri bildiğini iddia ederse, o yalancıdır.\"")]),_vm._v(" "),_c('p',[_vm._v("(Mecmû'u'l-Fetâvâ: 5/37)")]),_vm._v(" "),_c('p',_vm._l((_vm.videoItem.tags),function(tag,index){return _c('a',{key:index,attrs:{"href":"#"}},[_vm._v("#"+_vm._s(tag.tag)+"  \n                  ")])}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"yanCizgi position-relative\" data-v-3c97d8e7>","</div>",[_vm._ssrNode("<div id=\"plusIconDiv\" data-v-3c97d8e7>","</div>",[_c('i',{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":true}}],class:{
                      'fa fa-plus-circle': _vm.videoPageData.collapseStatus,
                      'fa fa-times-circle': !_vm.videoPageData.collapseStatus,
                    },attrs:{"id":"plusIconVideoPage"},on:{"click":function($event){return _vm.updateCollapseStatus(!_vm.videoPageData.collapseStatus)}}},[])])])],2)])],2),_vm._ssrNode(" <br data-v-3c97d8e7> <small data-v-3c97d8e7>"+_vm._ssrEscape(_vm._s(Object.keys(_vm.videoPageData.comments).length == 0
              ? "Henüz yorum yapılmamış, ilk yorumu siz yapın"
              : Object.keys(_vm.videoPageData.comments).length + " Yorum")+"\n        ")+"</small> "),(_vm.$store.state.userData.user.user_id != null)?_c('InsertComment'):_c('div',{staticClass:"mt-3"},[_c('p',{staticStyle:{"font-size":"14px"}},[_vm._v("\n            Yorum yapabilmek için lütfen\n            "),_c('nuxt-link',{attrs:{"to":"/"}},[_vm._v("kaydolun veya giriş")]),_vm._v("\n            yapın.\n          ")],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"comments mt-5\" data-v-3c97d8e7>","</div>",[_vm._l((_vm.videoPageData.comments),function(commentItem){return _c('CommentItem',{key:commentItem.id,attrs:{"commentItem":commentItem}})}),_vm._ssrNode(" "),_c('infinite-loading',{attrs:{"spinner":"spiral"},on:{"infinite":_vm.infiniteScroll}},[_c('span',{attrs:{"slot":"no-more"},slot:"no-more"}),_vm._v(" "),_c('span',{attrs:{"slot":"no-results"},slot:"no-results"})])],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col my-sidebar\" data-v-3c97d8e7>","</div>",[_vm._ssrNode("<div class=\"d-flex justify-content-between\" data-v-3c97d8e7><span style=\"line-height: 100%\" data-v-3c97d8e7><small data-v-3c97d8e7>Sıradaki</small></span> <span style=\"line-height: 100%\" data-v-3c97d8e7><small data-v-3c97d8e7>OTOMATİK OYNAT  </small> <label class=\"switch\" data-v-3c97d8e7><input type=\"checkbox\""+(_vm._ssrAttr("checked",_vm.videoPageData.autoPlayStatus))+" data-v-3c97d8e7> <span class=\"slider round\" data-v-3c97d8e7></span></label></span></div> <br data-v-3c97d8e7> "),_c('HorizontalVideoCard',{attrs:{"url":_vm.url}})],2)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/video/Video.vue?vue&type=template&id=3c97d8e7&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/video/Video.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Videovue_type_script_lang_js_ = ({props:["videoItem","url"],middleware:["generalControls"],data(){return{videoId:this.$route.params.videoId,commentPage:0,link:"https://illiyyuntv.com/videos/watch/"+this.$route.params.videoId,linkmesaj:false};},computed:{...Object(external_vuex_["mapGetters"])({videoPageData:"videoPageData"})},methods:{kopyala(){var copyText=this.$refs.link;var copyText=document.getElementById("myInput");copyText.select();copyText.setSelectionRange(0,99999);document.execCommand("copy");this.linkmesaj=true;},infiniteScroll($state){this.$store.dispatch("getVideoPageDatas",this.$route.params.videoId+"&page="+this.commentPage).then(response=>{if(response==true){$state.loaded();}else{$state.complete();}}).catch(err=>{console.log(err);});this.commentPage++;},endedEvent:function(){if(this.videoPageData.autoPlayStatus==true){this.$emit("ended");}},updateCollapseStatus(val){this.$store.commit("updateCollapseStatus",val);}},mounted(){let iframe=document.querySelector("iframe");let player=new Vimeo.Player(iframe);player.on("ended",this.endedEvent);}});
// CONCATENATED MODULE: ./components/video/Video.vue?vue&type=script&lang=js&
 /* harmony default export */ var video_Videovue_type_script_lang_js_ = (Videovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/video/Video.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(82)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  video_Videovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3c97d8e7",
  "1d312451"
  
)

/* harmony default export */ var Video = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {InsertComment: __webpack_require__(64).default,CommentItem: __webpack_require__(67).default,HorizontalVideoCard: __webpack_require__(63).default})


/***/ })

};;
//# sourceMappingURL=index.js.map