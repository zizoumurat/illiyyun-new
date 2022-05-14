exports.ids = [2];
exports.modules = {

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

/***/ })

};;
//# sourceMappingURL=header.js.map