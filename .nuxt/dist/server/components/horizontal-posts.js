exports.ids = [3];
exports.modules = {

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4f4a1402", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalPosts_vue_vue_type_style_index_0_id_eca004d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalPosts_vue_vue_type_style_index_0_id_eca004d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalPosts_vue_vue_type_style_index_0_id_eca004d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalPosts_vue_vue_type_style_index_0_id_eca004d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalPosts_vue_vue_type_style_index_0_id_eca004d0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".card[data-v-eca004d0]{background:none}.card-body[data-v-eca004d0]{padding:1.25rem 0}.card-text[data-v-eca004d0]{font-size:1.2rem;margin:0}.card-date[data-v-eca004d0]{margin:0}.card-link[data-v-eca004d0]{height:250px;overflow:hidden}.card-link img[data-v-eca004d0]{width:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HorizontalPosts.vue?vue&type=template&id=eca004d0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-fluid"},[_vm._ssrNode("<div class=\"row\" data-v-eca004d0>","</div>",_vm._l((_vm.posts),function(post,index){return _vm._ssrNode("<div class=\"col-md-3\" data-v-eca004d0>","</div>",[_vm._ssrNode("<div data-v-eca004d0>","</div>",[_c('nuxt-link',{staticClass:"card-link",attrs:{"to":("/blog/" + (post.slug))}},[_c('img',{attrs:{"src":post.image.url,"alt":""}})]),_vm._ssrNode(" <div class=\"card-body\" data-v-eca004d0><p class=\"card-text\" data-v-eca004d0>"+_vm._ssrEscape("\n            "+_vm._s(post.title)+"\n          ")+"</p> <p class=\"card-date text-muted\" data-v-eca004d0>"+_vm._ssrEscape("\n            "+_vm._s(_vm.getPhotoDate(post))+"\n          ")+"</p></div>")],2)])}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HorizontalPosts.vue?vue&type=template&id=eca004d0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HorizontalPosts.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HorizontalPostsvue_type_script_lang_js_ = ({props:{posts:{required:true,type:Array}},methods:{getPhotoDate(post){const d=new Date(post===null||post===void 0?void 0:post.created_at);const yyyy=d.getFullYear();let mm=d.getMonth()+1;// Months start at 0!
let dd=d.getDate();if(dd<10)dd="0"+dd;if(mm<10)mm="0"+mm;const returnDate=dd+"/"+mm+"/"+yyyy;return returnDate;}}});
// CONCATENATED MODULE: ./components/HorizontalPosts.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HorizontalPostsvue_type_script_lang_js_ = (HorizontalPostsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HorizontalPosts.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HorizontalPostsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "eca004d0",
  "7349ff79"
  
)

/* harmony default export */ var HorizontalPosts = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=horizontal-posts.js.map