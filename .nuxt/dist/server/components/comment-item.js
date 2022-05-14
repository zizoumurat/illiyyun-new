exports.ids = [1,5];
exports.modules = {

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


/***/ })

};;
//# sourceMappingURL=comment-item.js.map