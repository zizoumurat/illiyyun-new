exports.ids = [11,2];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=template&id=08dfe2d3&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('Header'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container-fluid\" data-v-08dfe2d3>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-08dfe2d3>","</div>",[_vm._ssrNode("<div class=\"col\" data-v-08dfe2d3>","</div>",[_vm._ssrNode("<div class=\"p-2\" data-v-08dfe2d3>","</div>",[_vm._ssrNode("<div class=\"image-container\" data-v-08dfe2d3><img"+(_vm._ssrAttr("src",_vm.getImg))+(_vm._ssrAttr("alt",_vm.blog.title))+" class=\"blog-img\" data-v-08dfe2d3></div> "),_vm._ssrNode("<div class=\"mt-5 blog-content\" data-v-08dfe2d3>","</div>",[_vm._ssrNode("<div class=\"title-section\" data-v-08dfe2d3><h1 data-v-08dfe2d3>"+_vm._ssrEscape(_vm._s(_vm.blog.title))+"</h1> <div class=\"share-icons\" data-v-08dfe2d3><p data-v-08dfe2d3>"+_vm._ssrEscape(_vm._s(_vm.convertDate(_vm.blog.created_at)))+"</p> <i class=\"fa fa-twitter\" data-v-08dfe2d3></i> <i class=\"fa fa-facebook\" data-v-08dfe2d3></i> <i class=\"fa fa-telegram\" data-v-08dfe2d3></i> <i class=\"fa fa-whatsapp\" data-v-08dfe2d3></i></div></div> "),_c('markdown-it-vue',{staticClass:"mt-3",attrs:{"content":_vm.blog.detail ? _vm.blog.detail : ''}})],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col col-posts\" data-v-08dfe2d3>","</div>",[_vm._ssrNode("<div class=\"p-4\" data-v-08dfe2d3>","</div>",_vm._l((_vm.otherBlogs),function(post,index){return _vm._ssrNode("<div class=\"card mb-4 box-shadow\" data-v-08dfe2d3>","</div>",[_c('nuxt-link',{staticClass:"card-link",attrs:{"to":("/blog/" + (post.slug))}},[_c('img',{attrs:{"src":post.image.url,"alt":""}})]),_vm._ssrNode(" <div class=\"card-body\" data-v-08dfe2d3><p class=\"card-text\" data-v-08dfe2d3>"+_vm._ssrEscape("\n                "+_vm._s(post.title)+"\n              ")+"</p> <p class=\"card-date\" data-v-08dfe2d3>"+_vm._ssrEscape("\n                "+_vm._s(_vm.$timeCreate(post.created_at))+"\n              ")+"</p></div>")],2)}),0)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=template&id=08dfe2d3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/blog/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _slugvue_type_script_lang_js_ = ({async fetch(){const{data}=await this.$axios.get(`/blogs?slug=${this.$route.params.slug}`);this.blog=data[0];const{data:blogs}=await this.$axios.get(`/blogs`);this.otherBlogs=blogs.filter(blog=>blog.id!==this.blog.id).sort((a,b)=>a.created_at<b.created_at?1:-1);},data(){return{blog:{},otherBlogs:{}};},computed:{getImg(){var _this$blog,_this$blog$image;return(_this$blog=this.blog)===null||_this$blog===void 0?void 0:(_this$blog$image=_this$blog.image)===null||_this$blog$image===void 0?void 0:_this$blog$image.url;}},methods:{convertDate(date){const newDate=new Date(date);const monthNames=["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];const day=newDate.getDate();const monthIndex=newDate.getMonth();const year=newDate.getFullYear();return`${day} ${monthNames[monthIndex]} ${year}`;},share(site){var pageUrl=window.location.href;var pageTitle=encodeURIComponent(document.title);switch(site){case"telegram":window.open("https://telegram.me/share/url?url="+pageUrl,"_blank");break;case"whatsapp":window.open("https://api.whatsapp.com/send?text="+pageUrl,"_blank");break;case"facebook":window.open("https://www.facebook.com/sharer.php?u="+pageUrl,"_blank");break;case"twitter":window.open("https://twitter.com/intent/tweet?url="+pageUrl+"&text="+pageTitle,"_blank");break;case"linkedin":window.open("https://www.linkedin.com/shareArticle?mini=true&url="+pageUrl,"_blank");break;}}}});
// CONCATENATED MODULE: ./pages/blog/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var blog_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/blog/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(95)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  blog_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "08dfe2d3",
  "f4ae956a"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(55).default})


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

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(96);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("14bbe1f5", content, true, context)
};

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_08dfe2d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_08dfe2d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_08dfe2d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_08dfe2d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_08dfe2d3_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".title-section[data-v-08dfe2d3]{display:flex;justify-content:space-between;align-items:center}.col-posts[data-v-08dfe2d3]{flex:0 0 450px;position:-webkit-sticky;position:sticky;top:0;max-height:100vh;overflow-y:auto}.image-container[data-v-08dfe2d3]{text-align:center}.fa[data-v-08dfe2d3]{font-size:22px;cursor:pointer}.share-icons[data-v-08dfe2d3]{display:flex;grid-gap:20px;gap:20px}.card[data-v-08dfe2d3]{background:none}.card .card-body[data-v-08dfe2d3]{padding:10px 0;font-size:18px}.card .card-link img[data-v-08dfe2d3]{max-width:100%}.fa-twitter[data-v-08dfe2d3]{color:#1da1f2}.fa-facebook[data-v-08dfe2d3]{color:#4267b2}.fa-telegram[data-v-08dfe2d3]{color:#229ed9}.fa-whatsapp[data-v-08dfe2d3]{color:#4fce5d}.blog-img[data-v-08dfe2d3]{-o-object-fit:cover;object-fit:cover;width:100%;max-height:400px}@media(max-width:500px){.blog-img[data-v-08dfe2d3]{-o-object-fit:contain;object-fit:contain;max-width:100%}.title-section[data-v-08dfe2d3]{flex-direction:column}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=_slug.js.map