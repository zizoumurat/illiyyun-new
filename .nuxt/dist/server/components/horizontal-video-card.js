exports.ids = [4,10];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=horizontal-video-card.js.map