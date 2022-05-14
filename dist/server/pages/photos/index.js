exports.ids = [16,2,6,7];
exports.modules = {

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/photos/index.vue?vue&type=template&id=39881d20&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_c('PhotoGallery',{attrs:{"gallery":_vm.gallery}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/photos/index.vue?vue&type=template&id=39881d20&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/photos/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var photosvue_type_script_lang_js_ = ({async fetch(){const{data:banner}=await this.$axios.get("/gallery-banner");const{data}=await this.$axios.get("/galleries?_limit=-1");this.gallery=data.sort((a,b)=>a.media.created_at<b.media.created_at?1:-1);this.banner=banner.image?banner.image.url:"";},data(){return{banner:'',gallery:[]};}});
// CONCATENATED MODULE: ./pages/photos/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_photosvue_type_script_lang_js_ = (photosvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/photos/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_photosvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "c10fb19c"
  
)

/* harmony default export */ var photos = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(55).default,PhotoGallery: __webpack_require__(78).default})


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

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("6fe55cda", content, true, context)
};

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4c36566a", content, true, context)
};

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoModal_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal-wrapper,.photo-footer{display:flex;justify-content:space-between}.modal-wrapper{flex-direction:column;height:100%}#galleryPrevIcon{left:-30px;z-index:12}#galleryNextIcon,#galleryPrevIcon{font-size:30px;color:hsla(0,0%,100%,.50196);display:flex;align-items:center;position:absolute;top:0;height:100%}#galleryNextIcon{right:-30px;z-index:15}#commentContent{font-family:Montserrat;font-weight:200;font-size:15px;color:#fff}#commentContent,#imageContent{border:3px solid #261d1e}#closeCommentModal{font-size:20px;color:#fff;position:absolute;font-family:Helvetica;z-index:13}#commentTextArea{background-color:transparent;border-radius:50px;border:1px solid #494142}.modal-content{background-color:transparent!important}#indir{color:#d6d6d6;border:1px solid #fff;padding:5px;border-radius:5px;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/photos/PhotoModal.vue?vue&type=template&id=564b81ce&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>","</div>",[_c('b-modal',{attrs:{"id":"modal-center","centered":"","title":"BootstrapVue","size":"xl","hide-header":"","hide-footer":"","modal-class":'pl-0'},on:{"hidden":_vm.closed}},[_c('span',{staticClass:"btn pt-1 pl-2",attrs:{"id":"closeCommentModal"},on:{"click":function($event){return _vm.$bvModal.hide('modal-center')}}},[_vm._v("\n        X\n      ")]),_vm._v(" "),_c('i',{staticClass:"fa fa-chevron-left btn p-0",attrs:{"id":"galleryPrevIcon"},on:{"click":_vm.prev}}),_vm._v(" "),_c('i',{staticClass:"fa fa-chevron-right btn p-0",attrs:{"id":"galleryNextIcon"},on:{"click":_vm.next}}),_vm._v(" "),_c('div',{staticClass:"row m-0",staticStyle:{"background-color":"#111111"}},[_c('div',{staticClass:"col-xl-6 p-1",attrs:{"id":"imageContent"}},[_c('img',{staticStyle:{"width":"100%"},attrs:{"src":_vm.getPhotoUrl}})]),_vm._v(" "),_c('div',{staticClass:"col-xl-6 p-3",attrs:{"id":"commentContent"}},[_c('div',{staticClass:"modal-wrapper"},[_c('div',{staticClass:"photo-data"},[_c('div',[_c('b',[_vm._v("illiyyuntv")])]),_vm._v(" "),_c('div',{staticClass:"mt-3"},[_vm._v("\n                "+_vm._s(_vm.getPhotoDescription)+"\n              ")])]),_vm._v(" "),_c('div',{staticClass:"photo-footer"},[_c('p',{staticClass:"text-muted mt-1"},[_vm._v(_vm._s(_vm.getPhotoDate))]),_vm._v(" "),_c('p',[_c('i',{staticClass:"fa fa-arrow-down",attrs:{"id":"indir"},on:{"click":function($event){return _vm.download(_vm.photoData.media)}}})])])])])])])],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/photos/PhotoModal.vue?vue&type=template&id=564b81ce&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/photos/PhotoModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PhotoModalvue_type_script_lang_js_ = ({props:["photoData"],methods:{prev(){this.$emit("prev");},next(){this.$emit("next");},closed(){this.$emit("closed");},download(img){external_axios_default()({method:"get",url:img.url,responseType:"blob"}).then(response=>{const url=window.URL.createObjectURL(new Blob([response.data]));const link=document.createElement("a");link.href=url;link.setAttribute("download",img.name||"image");document.body.appendChild(link);link.click();});}},watch:{photoData:function(){var _this$photoData;if(((_this$photoData=this.photoData)===null||_this$photoData===void 0?void 0:_this$photoData.media.url)!=null){this.$bvModal.show("modal-center");}}},computed:{getPhotoUrl(){var _this$photoData2;return(_this$photoData2=this.photoData)===null||_this$photoData2===void 0?void 0:_this$photoData2.media.url;},getPhotoDescription(){var _this$photoData3;return((_this$photoData3=this.photoData)===null||_this$photoData3===void 0?void 0:_this$photoData3.description)||"";},getPhotoDate(){var _this$photoData4;const d=new Date((_this$photoData4=this.photoData)===null||_this$photoData4===void 0?void 0:_this$photoData4.created_at);const yyyy=d.getFullYear();let mm=d.getMonth()+1;// Months start at 0!
let dd=d.getDate();if(dd<10)dd="0"+dd;if(mm<10)mm="0"+mm;const returnDate=dd+"/"+mm+"/"+yyyy;return returnDate;}}});
// CONCATENATED MODULE: ./components/photos/PhotoModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var photos_PhotoModalvue_type_script_lang_js_ = (PhotoModalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/photos/PhotoModal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(65)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  photos_PhotoModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "63743613"
  
)

/* harmony default export */ var PhotoModal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_id_04fa4556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_id_04fa4556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_id_04fa4556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_id_04fa4556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PhotoGallery_vue_vue_type_style_index_0_id_04fa4556_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(21);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(72);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#cover[data-v-04fa4556]{height:200px;background-position:bottom top!important;background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");margin-bottom:-100px;-webkit-mask-image:-webkit-gradient(linear,center bottom,center top,color-stop(0,transparent),color-stop(1,#000))}.visually-hidden[data-v-04fa4556]{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px)}.gallery[data-v-04fa4556]{display:flex;flex-wrap:wrap;padding-bottom:3rem}.gallery-item[data-v-04fa4556]{position:relative;flex:1 0 18rem;margin:1rem;color:#fff;cursor:pointer}.gallery-item:focus .gallery-item-info[data-v-04fa4556],.gallery-item:hover .gallery-item-info[data-v-04fa4556]{display:flex;justify-content:center;align-items:center;position:absolute;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.3)}.gallery-item-info[data-v-04fa4556]{display:none}.gallery-item-info span[data-v-04fa4556]{display:inline-block;font-size:1rem;font-weight:600}.gallery-item-likes[data-v-04fa4556]{margin-right:2.2rem}.gallery-item-type[data-v-04fa4556]{position:absolute;top:1rem;right:1rem;font-size:1.5rem;text-shadow:.2rem .2rem .2rem rgba(0,0,0,.1)}.fa-clone[data-v-04fa4556],.fa-comment[data-v-04fa4556]{transform:rotateY(180deg)}.gallery-image[data-v-04fa4556]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}#indir[data-v-04fa4556]{right:10px;border:1px solid #fff;padding:5px;border-radius:5px}#begen[data-v-04fa4556],#indir[data-v-04fa4556]{position:absolute;z-index:10;bottom:10px;color:#d6d6d6}#begen[data-v-04fa4556]{left:10px;font-size:20px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/galleryHead.36f7e74.jpg";

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/photos/PhotoGallery.vue?vue&type=template&id=04fa4556&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('PhotoModal',{attrs:{"photoData":_vm.imgData},on:{"prev":_vm.prev,"next":_vm.next,"closed":_vm.closed}}),_vm._ssrNode(" <div class=\"container-fluid\" data-v-04fa4556><div class=\"gallery\" data-v-04fa4556>"+(_vm._ssrList((_vm.gallery),function(item,index){return ("<div tabindex=\"0\" data-toggle=\"modal\" data-target=\"#exampleModal\" class=\"gallery-item\" data-v-04fa4556><i id=\"indir\" class=\"fa fa-arrow-down\" data-v-04fa4556></i> <img"+(_vm._ssrAttr("src",item.media.url))+" alt class=\"gallery-image\" data-v-04fa4556></div>")}))+"</div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/photos/PhotoGallery.vue?vue&type=template&id=04fa4556&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/photos/PhotoGallery.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var PhotoGalleryvue_type_script_lang_js_ = ({props:{gallery:{required:true,type:Array}},data(){return{imgData:null};},methods:{linkGen(pageNum){return pageNum===1?"?":`/photos/${pageNum}`;},closed(){this.imgData=null;},download(img){external_axios_default()({method:'get',url:img.url,responseType:'blob'}).then(response=>{const url=window.URL.createObjectURL(new Blob([response.data]));const link=document.createElement('a');link.href=url;link.setAttribute('download',img.name||'image');document.body.appendChild(link);link.click();});},next(){const findIndex=this.gallery.findIndex(item=>item===this.imgData);this.imgData=this.gallery[findIndex<this.gallery.length-1?findIndex+1:0];},prev(){const findIndex=this.gallery.findIndex(item=>item===this.imgData);this.imgData=this.gallery[findIndex===0?this.gallery.length-1:findIndex-1];}}});
// CONCATENATED MODULE: ./components/photos/PhotoGallery.vue?vue&type=script&lang=js&
 /* harmony default export */ var photos_PhotoGalleryvue_type_script_lang_js_ = (PhotoGalleryvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/photos/PhotoGallery.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(70)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  photos_PhotoGalleryvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "04fa4556",
  "cf118690"
  
)

/* harmony default export */ var PhotoGallery = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PhotoModal: __webpack_require__(68).default})


/***/ })

};;
//# sourceMappingURL=index.js.map