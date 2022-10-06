(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d0e6b8a"],{"0e8f":function(e,t,i){"use strict";i("20f6");var n=i("e8f2");t["a"]=Object(n["a"])("flex")},"195f":function(e,t,i){},"3c93":function(e,t,i){},"4bd4":function(e,t,i){"use strict";var n=i("58df"),s=i("7e2b"),a=i("3206");t["a"]=Object(n["a"])(s["a"],Object(a["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",t=>{this.$set(this.errorBag,e._uid,t)},{immediate:!0}),i={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?i.shouldValidate=e.$watch("shouldValidate",n=>{n&&(this.errorBag.hasOwnProperty(e._uid)||(i.valid=t(e)))}):i.valid=t(e),i},validate(){return 0===this.inputs.filter(e=>!e.validate(!0)).length},reset(){this.inputs.forEach(e=>e.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(e=>e.resetValidation()),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find(t=>t._uid===e._uid);if(!t)return;const i=this.watchers.find(e=>e._uid===t._uid);i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(e=>e._uid!==t._uid),this.inputs=this.inputs.filter(e=>e._uid!==t._uid),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},a523:function(e,t,i){"use strict";i("20f6"),i("4b85");var n=i("e8f2"),s=i("d9f7");t["a"]=Object(n["a"])("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:i,children:n}){let a;const{attrs:o}=i;return o&&(i.attrs={},a=Object.keys(o).filter(e=>{if("slot"===e)return!1;const t=o[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t})),t.id&&(i.domProps=i.domProps||{},i.domProps.id=t.id),e(t.tag,Object(s["a"])(i,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(a||[])}),n)}})},a55b:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"wrap-login"},[i("v-container",{staticClass:"px-0 pt-0",attrs:{id:"login-page",fluid:"",tag:"section"}},[i("div",{staticClass:"container-wrap"},[i("div",{staticClass:"wrap-title"},[i("v-flex",{staticStyle:{"text-align":"center"}},[i("img",{staticClass:"img-login-logo",attrs:{src:e.publicPath+"/images/image-logo.png?t=93111413"}})]),i("v-flex",{staticClass:"pt-1",staticStyle:{"text-align":"center","margin-top":"20px"}},[i("div",{staticClass:"text-1"},[e._v("HỆ THỐNG GIÁM SÁT VÀ ĐÁNH GIÁ THÍCH ỨNG BIẾN ĐỔI KHÍ HẬU")]),i("div",{staticClass:"text-2"},[e._v("BỘ GIAO THÔNG VẬN TẢI")])])],1),e.signed?e._e():i("div",{staticClass:"wrap-form px-4 py-3"},[i("div",[i("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-flex",{staticClass:"mb-5",staticStyle:{"text-align":"center","font-size":"22px","font-family":"'Roboto Slab'",color:"#fff","font-weight":"700"},attrs:{xs12:""}},[i("div",[e._v("ĐĂNG NHẬP")])]),i("v-flex",{attrs:{xs12:""}},[i("v-text-field",{staticClass:"input-text",attrs:{dense:"",placeholder:"Tên đăng nhập",rules:[function(e){return!!e||"Tên đăng nhập là bắt buộc"}],required:"","prepend-inner-icon":"mdi-account","hide-details":"auto"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),i("v-flex",{staticStyle:{"margin-top":"30px"},attrs:{xs12:""}},[i("v-text-field",{staticClass:"input-text",attrs:{dense:"",placeholder:"Mật khẩu",type:"password",rules:[function(e){return!!e||"Mật khẩu là bắt buộc"}],required:"","prepend-inner-icon":"mdi-key","hide-details":"auto"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),i("v-flex",{staticClass:"wrap-btn-login",staticStyle:{"margin-top":"30px","margin-bottom":"20px"},attrs:{xs12:""}},[i("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{loading:e.loading,disabled:e.loading},on:{click:e.login}},[i("v-icon",{attrs:{size:"20"}},[e._v("mdi-login")]),e._v("  Đăng nhập ")],1)],1)],1)],1)]),e.signed?i("div",{staticClass:"wrap-form px-3 py-3"},[i("div",{staticClass:"text-login"},[e._v("TÀI KHOẢN ĐÃ ĐĂNG NHẬP HỆ THỐNG")]),i("v-flex",{staticStyle:{margin:"20px 0","text-align":"center"},attrs:{xs12:""}},[i("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{loading:e.loading,disabled:e.loading},on:{click:e.submitLogout}},[i("div",{staticClass:"v-btn__content"},[i("v-icon",{attrs:{size:"18"}},[e._v("mdi-logout-variant")]),e._v("  "),i("span",[e._v("Đăng xuất")])],1)]),i("v-btn",{staticClass:"my-0 white--text mr-3 btn-login",staticStyle:{padding:"0 15px !important"},attrs:{loading:e.loading,disabled:e.loading},on:{click:e.goToPage}},[i("v-icon",{attrs:{size:"20"}},[e._v("mdi-home-circle-outline")]),e._v("  "),i("span",[e._v("Truy cập hệ thống")])],1)],1)],1):e._e()])]),i("div",{staticClass:"wrap-contact-info"},[i("div",{staticClass:"mb-1"},[e._v("Trung tâm công nghệ thông tin - Bộ Giao thông vận tải")]),i("div",{staticClass:"mb-1"},[i("v-icon",{attrs:{size:"18",color:"#fff"}},[e._v("mdi-map-marker-outline")]),e._v("  "),i("span",[e._v("Trụ sở: Số 80 Trần Hưng Đạo, Hoàn Kiếm, Hà Nội")])],1),i("div",{staticClass:"mb-1"},[i("v-icon",{attrs:{size:"18",color:"#fff"}},[e._v("mdi-phone-in-talk-outline")]),e._v("  "),i("span",[e._v("1900 0318 - (024) 3.822.2979")])],1),i("div",{staticClass:"mb-1"},[i("v-icon",{attrs:{size:"18",color:"#fff"}},[e._v("mdi-email-outline")]),e._v("  "),i("span",[e._v("bophanhotro@mt.gov.vn")])],1)]),i("div",{staticClass:"text-center"},[i("v-overlay",{attrs:{value:e.overlay}},[i("v-progress-circular",{attrs:{indeterminate:"",size:"64"}})],1)],1)],1)},s=[],a=i("2b0e"),o=i("bc3a"),r=i.n(o),c=i("854a"),l=i.n(c);l.a.options={closeButton:!0,timeOut:"5000",positionClass:"toast-top-center"};var u={name:"Login",data:()=>({publicPath:"",apiSso:"http://119.17.200.69:8379",overlay:!1,loading:!1,valid:!0,userName:"",password:"",client_secret:"",code:"",signed:!1}),created(){let e=this;a["a"].$cookies.get("Token")?e.signed=!0:e.signed=!1},computed:{},methods:{login(){let e=this;if(e.loading||!e.userName||!e.password)return;e.loading=!0;let t={data:{username:e.userName,password:e.password,app:"dvc-mobile"}};e.$store.dispatch("login",t).then((function(t){if(e.loading=!1,t&&t.access_token)try{let i=String(t.access_token.split(".")[1]).replace(/_/g,"/"),n=JSON.parse(atob(i)),s=n&&n.hasOwnProperty("realm_access")&&n.realm_access["roles"]?n.realm_access.roles:"",a=!!s&&s.find((function(e){return"site-admin"===e}));if(s&&s.length)if(e.$cookies.set("Token",t.access_token,t.expires_in),e.$cookies.set("RefreshToken",t.refresh_token,t.refresh_expires_in),r.a.defaults.headers["Authorization"]="Bearer "+t.access_token,e.$store.commit("SET_ISSIGNED",!0),a){e.$cookies.set("admin",!0,t.expires_in);let i={hoVaTen:"Quản trị",maSoCanBo:"",viTriChucDanh:"Quản trị hệ thống",vaiTroSuDung:""};e.$cookies.set("UserInfo",i,t.expires_in),e.$cookies.set("Roles","",t.expires_in),e.goToPage()}else{let i={token:"Bearer "+t.access_token,email:n.email};e.$store.dispatch("getThongTinUserDangNhap",i).then((function(t){let i="",s="",a={hoVaTen:t.hoVaTen?t.hoVaTen:"",maSoCanBo:t.maSoCanBo?t.maSoCanBo:"",viTriChucDanh:i,vaiTroSuDung:s};if(t.viTriChucDanh&&t.viTriChucDanh.length){s=[],i=Array.from(t.viTriChucDanh,(function(e){return e.tenGoi})),n.viTriChucDanh=i,t.viTriChucDanh.forEach(e=>{if(e.vaiTroSuDung&&e.vaiTroSuDung.length){let t=Array.from(e.vaiTroSuDung,(function(e){return e.maMuc}));s=s.concat(t)}}),n.vaiTroSuDung=s;let o=s.find((function(e){return"QUANTRIHETHONG"==e}));o?e.$cookies.set("admin",!0,t.expires_in):e.$cookies.set("admin","",t.expires_in),e.$cookies.set("UserInfo",a,t.expires_in),e.$cookies.set("Roles",s,t.expires_in)}else e.$cookies.set("admin","",t.expires_in),e.$cookies.set("UserInfo",a,t.expires_in),e.$cookies.set("Roles",s,t.expires_in);setTimeout((function(){e.goToPage()}),200)})).catch((function(){e.loading=!1,l.a.error("TÀI KHOẢN CHƯA ĐƯỢC CẤP QUYỀN CÁN BỘ"),setTimeout((function(){e.submitLogout()}),500)}))}else e.loading=!1,e.overlay=!1,l.a.error("TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG"),setTimeout((function(){e.submitLogout()}),500)}catch(i){e.loading=!1,l.a.error("TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG"),setTimeout((function(){e.submitLogout()}),500)}else l.a.remove(),l.a.error("Tên đăng nhập hoặc mật khẩu không chính xác")})).catch((function(t){e.loading=!1,l.a.remove(),l.a.error("Tên đăng nhập hoặc mật khẩu không chính xác")}))},loginKeyCloak(){let e=this;if(e.loading)return;e.loading=!0;let t={uri:"http://119.17.200.69:8032/index.html"};e.$store.dispatch("loginKeyCloak",t).then((function(t){e.loading=!1,t&&(window.location.href=t.endpoint)})).catch((function(t){e.loading=!1}))},getToken(){let e=this;e.loading=!1;let t={code:e.code,redirect_uri:"http://119.17.200.69:8032/index.html"};e.$store.dispatch("getTokenKeyCloak",t).then((function(t){if(e.loading=!1,e.overlay=!1,t.access_token)try{let i=String(t.access_token.split(".")[1]).replace(/_/g,"/"),n=JSON.parse(atob(i)),s=n&&n.hasOwnProperty("realm_access")&&n.realm_access["roles"]?n.realm_access.roles:"",a=!!s&&s.find((function(e){return"site-admin"===e}));if(s&&s.length)if(e.$cookies.set("Token",t.access_token,t.expires_in),e.$cookies.set("RefreshToken",t.refresh_token,t.refresh_expires_in),r.a.defaults.headers["Authorization"]="Bearer "+t.access_token,e.$store.commit("SET_ISSIGNED",!0),a){e.$cookies.set("admin",!0,t.expires_in);let i={hoVaTen:"Quản trị",maSoCanBo:"",viTriChucDanh:"Quản trị hệ thống",vaiTroSuDung:""};e.$cookies.set("UserInfo",i,t.expires_in),e.$cookies.set("Roles","",t.expires_in),window.location.href=window.location.origin+"/#/"}else{let i={token:"Bearer "+t.access_token,email:n.email};e.$store.dispatch("getEmployee",i).then((function(t){let i=t,n=i.mappingUser.userId?i.mappingUser.userId:"",s=i.groupId?i.groupId:"";e.$cookies.set("userId",String(n),t.expires_in),e.$cookies.set("groupId",s,t.expires_in)})),e.$store.dispatch("getThongTinUserDangNhap",i).then((function(t){let i="",s="",a={hoVaTen:t.hoVaTen?t.hoVaTen:"",maSoCanBo:t.maSoCanBo?t.maSoCanBo:"",viTriChucDanh:i,vaiTroSuDung:s};if(t.viTriChucDanh&&t.viTriChucDanh.length){s=[],i=Array.from(t.viTriChucDanh,(function(e){return e.tenGoi})),n.viTriChucDanh=i,t.viTriChucDanh.forEach(e=>{if(e.vaiTroSuDung&&e.vaiTroSuDung.length){let t=Array.from(e.vaiTroSuDung,(function(e){return e.maMuc}));s=s.concat(t)}}),n.vaiTroSuDung=s;let a=s.find((function(e){return"QUANTRIHETHONG"==e}));a?e.$cookies.set("admin",!0,t.expires_in):e.$cookies.set("admin","",t.expires_in)}else e.$cookies.set("admin","",t.expires_in),e.$cookies.set("UserInfo",a,t.expires_in),e.$cookies.set("Roles",s,t.expires_in);e.$cookies.set("UserInfo",a,t.expires_in),e.$cookies.set("Roles",s,t.expires_in),setTimeout((function(){window.location.href=window.location.origin+"/#/"}),200)})).catch((function(){e.loading=!1,e.overlay=!1,l.a.error("TÀI KHOẢN CHƯA ĐƯỢC CẤP QUYỀN CÁN BỘ"),setTimeout((function(){e.submitLogout()}),500)}))}else e.loading=!1,e.overlay=!1,l.a.error("TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG"),setTimeout((function(){e.submitLogout()}),500)}catch(i){e.loading=!1,e.overlay=!1,l.a.error("TÀI KHOẢN KHÔNG CÓ TRÊN HỆ THỐNG"),setTimeout((function(){e.submitLogout()}),500)}})).catch((function(t){e.loading=!1,e.overlay=!1,l.a.error("Đăng nhập không thành công")}))},submitLogout(){let e=this;e.signed=!1,e.$store.commit("SET_ISSIGNED",!1),localStorage.setItem("user",null),e.$cookies.set("Token",""),e.$cookies.set("RefreshToken","")},goToPage(){let e=this;e.isAdmin||e.checkRole("THEMMOIBAOCAO")?e.$router.push({path:"/"}):(e.checkRole("XEMBAOCAODONVI")||e.checkRole("XEMTATCABAOCAO"))&&e.$router.push({path:"/bao-cao/cho-xu-ly"})}}},d=u,h=(i("c3dd"),i("2877")),p=i("6544"),g=i.n(p),m=i("8336"),f=i("a523"),v=i("0e8f"),_=i("4bd4"),T=i("132d"),k=i("a797"),x=i("490a"),y=i("8654"),C=Object(h["a"])(d,n,s,!1,null,null,null);t["default"]=C.exports;g()(C,{VBtn:m["a"],VContainer:f["a"],VFlex:v["a"],VForm:_["a"],VIcon:T["a"],VOverlay:k["a"],VProgressCircular:x["a"],VTextField:y["a"]})},a797:function(e,t,i){"use strict";i("3c93");var n=i("a9ad"),s=i("7560"),a=i("f2e7"),o=i("58df");t["a"]=Object(o["a"])(n["a"],s["a"],a["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}})},c3dd:function(e,t,i){"use strict";i("195f")}}]);