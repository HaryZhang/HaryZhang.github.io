webpackJsonp([5],{"3L6B":function(t,a){},"5sLO":function(t,a){},"6rJY":function(t,a,i){"use strict";var e={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"common-mask-dialog mt-20",class:{"no-mask":t.exitGameBox},on:{click:function(a){return a.stopPropagation(),t.closeDialog(a)}}},[i("div",{staticClass:"common-box",on:{click:function(a){return a.stopPropagation(),t.preventClick(a)}}},[i("i",{staticClass:"icon icon-gift-close",on:{click:t.closeDialog}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"body"},[i("a",{staticClass:"cdkey"},[t._v(t._s(t.giftData.cdkey))]),t._v(" "),i("a",{ref:"copy",staticClass:"copy mt16",attrs:{"data-clipboard-text":t.giftData.cdkey},on:{click:function(a){return a.stopPropagation(),t.copyCdkey(a)}}},[t._v("复制兑换码")])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"head"},[a("p",[this._v("礼包兑换码已领取")]),this._v(" "),a("p",[this._v("请复制后在游戏内兑换使用")])])}]};var s=i("vSla")({props:["giftData"],data:function(){return{copyBtn:null}},mounted:function(){this.copyBtn=new this.$clipboard(this.$refs.copy)},computed:{exitGameBox:function(){return this.$store.state.game.exitlayer.show}},methods:{preventClick:function(){return!1},closeDialog:function(){this.$emit("change",!1)},copyCdkey:function(){var t=this;this.copyBtn.on("success",function(){t.$toast({message:"复制成功，请在游戏内兑换",duration:2e3})})}}},e,!1,function(t){i("3L6B")},"data-v-1be47e22",null);a.a=s.exports},"9+Lw":function(t,a,i){"use strict";var e=i("3cXf"),s=i.n(e),n=i("AAo7"),o=i("0xDb"),c={data:function(){return{gettingCodeTag:!1,loginData:{phone:"",smsCode:""},count:60,showCodeBox:!0,guestData:Object(o.f)()}},computed:{exitGameBox:function(){return this.$store.state.game.exitlayer.show}},methods:{preventClick:function(){return!1},closeDialog:function(){this.$emit("change",!1)},checkPhoneNum:function(){var t=!1;return this.loginData.phone?o.b.check("mobile",this.loginData.phone)?t=!0:this.$toast("手机号码格式不正确"):this.$toast("请输入手机号码"),t},getSmsCode:function(){this.checkPhoneNum()&&this.getIdentiCode()},getIdentiCode:function(){var t=this;if(!this.gettingCodeTag){this.gettingCodeTag=!0;var a={phone:this.loginData.phone,channel:$GLOBAL_CONST.channel};this.$api.decipherPost(n.a.SMSCODE,a,function(a){t.gettingCodeTag=!1,t.showCodeBox=!1;var i=t.count;!function a(){var e=setTimeout(a,1e3);t.count--,0==t.count&&(clearTimeout(e),t.showCodeBox=!0,t.count=i)}()},function(){t.gettingCodeTag=!1,t.showCodeBox=!0,t.$toast("系统君抽风，请稍候再来骚扰")})}},login:function(){var t=this;if(this.loginData.phone)if(o.b.check("mobile",this.loginData.phone))if(this.loginData.smsCode)if(o.b.check("smsCode",this.loginData.smsCode)){var a={phone:this.loginData.phone,code:this.loginData.smsCode,channel:$GLOBAL_CONST.channel};this.guestData&&(a.uid=this.guestData.uid,a.token=this.guestData.token),this.$api.decipherPost(n.a.LOGIN,a,function(a){if(0==a.status&&a.decryptData){o.a.del("TDY_GUESTDATA"),localStorage.removeItem("TDY_GUESTDATA"),o.a.set("TDY_USERINFO",s()(a.decryptData),1728e3),localStorage.setItem("TDY_USERINFO",s()(a.decryptData)),sessionStorage.setItem("TDY_SESSIONID",a.decryptData.sessionId),t.$emit("signin",a.decryptData)}else t.$toast(a.message)},function(){t.$toast("系统君抽风，请稍候再来骚扰")})}else this.$toast("验证码格式不正确");else this.$toast("请输入验证码");else this.$toast("手机号码格式不正确");else this.$toast("请输入手机号码")}}},r={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"common-mask-dialog mt-20",class:{"no-mask":t.exitGameBox},on:{click:function(a){return a.stopPropagation(),t.closeDialog(a)}}},[i("div",{staticClass:"common-box phone-box",on:{click:function(a){return a.stopPropagation(),t.preventClick(a)}}},[i("p",{staticClass:"title"},[t._v("登录游戏")]),t._v(" "),i("div",{staticClass:"content mt30"},[i("i",{staticClass:"icon icon-login-phone"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.loginData.phone,expression:"loginData.phone",modifiers:{trim:!0}}],staticClass:"phonenum",attrs:{maxlength:"11",type:"tel",placeholder:"请输入手机号码"},domProps:{value:t.loginData.phone},on:{input:function(a){a.target.composing||t.$set(t.loginData,"phone",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}})]),t._v(" "),i("div",{staticClass:"content mt20"},[i("i",{staticClass:"icon icon-login-sms"}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.loginData.smsCode,expression:"loginData.smsCode",modifiers:{trim:!0}}],staticClass:"smscode",attrs:{maxlength:"6",type:"tel",placeholder:"请输入短信验证码"},domProps:{value:t.loginData.smsCode},on:{input:function(a){a.target.composing||t.$set(t.loginData,"smsCode",a.target.value.trim())},blur:function(a){t.$forceUpdate()}}}),t._v(" "),t.showCodeBox?i("a",{staticClass:"text",on:{click:t.getSmsCode}},[t._v("发送验证码")]):i("a",{staticClass:"text disabled"},[t._v(t._s(t.count)+"秒后重新发送")])]),t._v(" "),i("a",{staticClass:"login-btn",on:{click:function(a){return a.stopPropagation(),t.login(a)}}},[t._v("登录")])])])},staticRenderFns:[]};var l=i("vSla")(c,r,!1,function(t){i("hMef")},"data-v-32f77653",null);a.a=l.exports},Gl1R:function(t,a,i){"use strict";var e={props:["giftData","hideIcon","open","isFloat"],data:function(){return{openGiftCon:!1,scalePer:"0%",loaded:0}},watch:{"giftData.remain":function(t,a){this.initProgress(this.giftData)}},mounted:function(){if(!this.hideIcon){var t=this,a=this.$refs.gameIcon;a.addEventListener("load",function(){t.loaded=1},!1),a.addEventListener("error",function(){t.loaded=0},!1),a.src=this.giftData.gameIcon}this.initProgress(this.giftData),this.hideIcon&&(this.$refs.progress.style.width="48%")},methods:{initProgress:function(t){if(!t.bxl){var a=0;t.total&&(a=Math.ceil(t.remain/t.total*100))>100&&(a=100),this.scalePer=a+"%",this.$refs.progressbar.style.width=this.scalePer}},getGift:function(){this.$emit("getGift",this.giftData)},showGift:function(){this.$emit("showGift",this.giftData)},toGiftDetail:function(){this.open?this.openGiftCon=!this.openGiftCon:this.$router.push({path:"gifts/detail/"+this.giftData.gift_id,query:this.$route.query})}}},s={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"gift-item",class:{"float-item":t.isFloat},on:{click:function(a){return a.stopPropagation(),t.toGiftDetail(a)}}},[t.hideIcon?t._e():e("div",{staticClass:"icon-box fl"},[e("div",{staticClass:"img-cont",class:{bgw:1==t.loaded}},[e("img",{directives:[{name:"show",rawName:"v-show",value:1==t.loaded,expression:"loaded == 1"}],ref:"gameIcon",staticClass:"game-icon",attrs:{alt:""}}),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:0==t.loaded,expression:"loaded == 0"}],staticClass:"game-icon_loading",attrs:{src:i("p/op"),alt:""}})])]),t._v(" "),e("div",{staticClass:"fr",class:{mt9:t.hideIcon,mt18:!t.hideIcon}},[t.giftData.cdkey?e("a",{staticClass:"common-btn check-btn",on:{click:function(a){return a.stopPropagation(),t.showGift(a)}}},[t._v("查看")]):e("a",{staticClass:"common-btn gift-btn",on:{click:function(a){return a.stopPropagation(),t.getGift(a)}}},[t._v("领取")])]),t._v(" "),e("div",{staticClass:"info-box",class:{"no-icon":t.hideIcon}},[e("p",{staticClass:"title ellipsis"},[t._v(t._s(t.giftData.name))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.openGiftCon,expression:"openGiftCon"}],domProps:{innerHTML:t._s(t.giftData.content)}}),t._v(" "),e("div",{staticClass:"progress-box font12"},[t.giftData.bxl?[e("span",[t._v("礼包剩余：不限量")])]:[e("span",[t._v("礼包剩余")]),t._v(" "),e("span",{ref:"progress",staticClass:"progress clearfix"},[e("span",{ref:"progressbar",attrs:{id:"progress-bar"}})]),t._v(" "),e("span",[t._v(t._s(t.scalePer))])]],2)])])},staticRenderFns:[]};var n=i("vSla")(e,s,!1,function(t){i("5sLO")},"data-v-69740737",null);a.a=n.exports},LSGZ:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("4YfN"),s=i.n(e),n=i("AAo7"),o=i("0xDb"),c=i("Gl1R"),r=i("6rJY"),l=i("MTC2"),g={props:["imgList"],mounted:function(){var t=this;this.imgList.forEach(function(a){t.$set(a,"loaded",0)}),this.loadImg(this.imgList)},methods:{loadImg:function(t){for(var a=function(a){var i=t[a],e=document.getElementById("img"+a);e.addEventListener("load",function(){i.loaded=1},!1),e.addEventListener("error",function(){i.loaded=0},!1),e.src=i.gameScreenshot},i=0;i<t.length;i++)a(i)}}},d={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"img-info-box"},[e("div",{staticClass:"main-wraper"},[e("div",{staticClass:"main-box"},t._l(t.imgList,function(a,s){return e("a",{key:a.gameScreenshot,staticClass:"game-item"},[e("div",{staticClass:"img-cont",class:{bgw:1==a.loaded}},[e("img",{directives:[{name:"show",rawName:"v-show",value:1==a.loaded,expression:"item.loaded == 1"}],staticClass:"img",attrs:{id:"img"+s,alt:""}}),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:0==a.loaded,expression:"item.loaded == 0"}],staticClass:"img_loading",attrs:{src:i("p/op"),alt:""}})])])}))])])},staticRenderFns:[]};var h=i("vSla")(g,d,!1,function(t){i("ZJwk")},"data-v-6fecd296",null).exports,m={components:{"login-mode-dialog":l.a,"gift-item":c.a,"gift-dialog":r.a,"game-img-list":h},data:function(){return{isInWX:$GLOBAL_CONST.isInWX,isIOS:Object(o.j)(),config:Object(o.d)(),appLink:"https://youxicdn.tangdaoya.com/package/yaya_android.apk",hideLoadAppBtn:!0,loaded:0,showLoginModeDialog:!1,gameId:"",giftList:[],giftData:{},showGiftDialog:!1,gameData:{gameName:""},tagInfo:{tagName:"游戏详情",tagId:"xq"},tagInfo2:{tagName:"礼包",tagId:"lb"},curTagInfo:null,userData:null}},computed:{gameTags:function(){return this.gameData.tags&&this.gameData.tags.length?this.gameData.tags.map(function(t){return t.tagName}).join(" | "):""}},created:function(){this.gameId=this.$route.params.id,this.curTagInfo=this.tagInfo,this.userData=Object(o.h)(),this.getGiftList(this.gameId),this.getGameData(this.gameId)},methods:{loadApp:function(){this.isInWX||this.isIOS?this.jumpToLoadpage():window.location.href=this.config.app_and||this.gameData.game_and||this.appLink},jumpToLoadpage:function(){Object(o.l)(this.$route.query)},loadedImg:function(){var t=this,a=this.$refs.gameIcon;a.addEventListener("load",function(){t.loaded=1},!1),a.addEventListener("error",function(){t.loaded=0},!1),a.src=this.gameData.gameIcon},toParentPage:function(){var t=this.$route.params.from;this.$router.push({path:"/"+t,query:this.$route.query})},handlerPhoneSign:function(t){this.userData=t,this.showLoginModeDialog=!1,window.location.reload()},changeTab:function(t){this.curTagInfo!=t&&(this.curTagInfo=t)},hideModeDialog:function(){this.showLoginModeDialog=!1},showCurGift:function(t){this.giftData=t,this.showGiftDialog=!0},getGiftList:function(t){var a=this,i={channel:$GLOBAL_CONST.channel,size:100,page:1,gameId:t,uid:this.userData?this.userData.user.id:"",token:this.userData?this.userData.token:""};this.$api.decipherPost(n.a.GETGIFTBYNAMELIST,i,function(t){t.decryptData&&(a.giftList=t.decryptData.gifts)})},hideGiftDialog:function(t){this.showGiftDialog=t},getCurGift:function(t){var a=this;if(this.userData){var i={channel:$GLOBAL_CONST.channel,uid:this.userData.user.id,token:this.userData.token,gift_id:t.gift_id};this.$api.decipherPost(n.a.GETGIFT,i,function(i){switch(i.status){case 300001:a.$toast("礼包已下线");break;case 300002:a.$toast("礼包未开放领取");break;case 300003:a.$toast("礼包已领完");break;case 300004:a.$toast("领取礼包失败");break;default:i.decryptData&&i.decryptData.item?(a.giftData=t,a.giftData.cdkey=i.decryptData.item.cdkey,a.giftData.remain-=1,a.giftData.remain<0&&(a.giftData.remain=0),a.showGiftDialog=!0):a.$toast("领取礼包失败")}})}else this.showLoginModeDialog=!0},enterGame:function(){if(Object(o.n)(this.gameData),_czc&&_czc.push(["_trackEvent","游戏详情页-进入游戏-"+this.gameData.gameName,"detail_game_"+this.gameData.gameId+"_from_"+$GLOBAL_CONST.channel]),window.jsInvoke&&window.jsInvoke.getEnvironmentInfo&&window.jsInvoke.goToUrlByFullScreen)if(this.gameData.isCP){var t=window.location.origin+"/game/play?_tdygid="+this.gameData.gameId+"&channel="+$GLOBAL_CONST.channel;/\/pre/.test(window.location.pathname)&&(t=window.location.origin+"/pre/game/play?_tdygid="+this.gameData.gameId+"&channel="+$GLOBAL_CONST.channel),window.jsInvoke.goToUrlByFullScreen(t)}else this.gameData.gameUrl&&window.jsInvoke.goToUrlByFullScreen(this.gameData.gameUrl);else this.gameData.isCP?this.toGamePage(this.gameData.gameId):this.gameData.gameUrl?window.location.href=this.gameData.gameUrl:this.gameData.gameId&&this.toGamePage(this.gameData.gameId)},toGamePage:function(t){var a={_tdygid:t},i=s()({},a,this.$route.query);Object(o.k)(i)},getGameData:function(t,a){var i=this,e={channel:$GLOBAL_CONST.channel,gameId:t,nickname:this.userData?this.userData.user.nickname:"",sex:this.userData?this.userData.user.sex:0,uid:this.userData?this.userData.user.id:"",token:this.userData?this.userData.token:""};this.$api.decipherPost(n.a.CURGAMEINFO,e,function(t){0==t.status?(i.gameData=t.decryptData.game,i.isIOS?i.gameData.game_ios?i.hideLoadAppBtn=!1:i.hideLoadAppBtn=!0:i.gameData.game_and?i.hideLoadAppBtn=!1:i.hideLoadAppBtn=!0,i.$nextTick(function(){i.loadedImg()})):i.$toast(t.message)},function(){i.$toast("系统君抽风，请稍候再来骚扰")})}}},u={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bgw pb40"},[e("div",{staticClass:"head-wraper"},[e("i",{staticClass:"icon icon-arrow-l",on:{click:t.toParentPage}}),t._v(" "),e("span",[t._v(t._s(t.gameData.gameName))])]),t._v(" "),e("div",{staticClass:"detail-main-wraper"},[e("div",{staticClass:"icon-box",class:{bgw:1==t.loaded}},[e("img",{ref:"gameIcon",staticClass:"icon-img",attrs:{alt:""}}),t._v(" "),e("img",{directives:[{name:"show",rawName:"v-show",value:0==t.loaded,expression:"loaded == 0"}],staticClass:"game-icon_loading",attrs:{src:i("p/op"),alt:""}})]),t._v(" "),e("div",{staticClass:"info-box"},[e("div",{staticClass:"title"},[t._v(t._s(t.gameData.gameName))]),t._v(" "),t.gameTags.length?e("div",{staticClass:"desc"},[t._v(t._s(t.gameTags))]):t._e(),t._v(" "),e("div",{staticClass:"intro"},[t._v(t._s(t.gameData.gameDesc))])])]),t._v(" "),e("div",{staticClass:"btn-wraper"},[t.hideLoadAppBtn?t._e():e("div",{staticClass:"width50 pr4"},[e("p",{staticClass:"loadapp-btn",on:{click:t.loadApp}},[t._v("下载APP")])]),t._v(" "),e("div",{class:{width100:t.hideLoadAppBtn,width50:!t.hideLoadAppBtn,pl4:!t.hideLoadAppBtn}},[e("p",{staticClass:"play-btn",on:{click:t.enterGame}},[t._v("开始游戏")])])]),t._v(" "),e("p",{staticClass:"split-line"}),t._v(" "),e("div",{staticClass:"tab-bar"},[e("div",{staticClass:"tab-item",class:{width33:t.giftList.length,width100:!t.giftList.length,ml_17:t.giftList.length},on:{click:function(a){t.changeTab(t.tagInfo)}}},[e("a",{class:{"is-selected":t.tagInfo.tagId===t.curTagInfo.tagId}},[t._v("\r\n        "+t._s(t.tagInfo.tagName)+"\r\n      ")])]),t._v(" "),t.giftList.length?e("div",{staticClass:"tab-item width33",on:{click:function(a){t.changeTab(t.tagInfo2)}}},[e("a",{class:{"is-selected":t.tagInfo2.tagId===t.curTagInfo.tagId}},[t._v("\r\n        "+t._s(t.tagInfo2.tagName)+"\r\n      ")])]):t._e()]),t._v(" "),t.tagInfo.tagId===t.curTagInfo.tagId?[t.gameData.gameScreenshots&&t.gameData.gameScreenshots.length?[e("game-img-list",{attrs:{imgList:t.gameData.gameScreenshots}})]:t._e(),t._v(" "),t.gameData.gameIntr?[e("div",{staticStyle:{padding:"16px 15px"},domProps:{innerHTML:t._s(t.gameData.gameIntr)}})]:e("p",{staticClass:"tip-g"},[t._v("该游戏暂无详情介绍哦~")])]:t._e(),t._v(" "),t.giftList.length&&t.tagInfo2.tagId===t.curTagInfo.tagId?e("div",{staticClass:"gift-list-wraper"},t._l(t.giftList,function(a,i){return e("gift-item",{key:"gift"+i,attrs:{giftData:a,open:!0,hideIcon:!0},on:{getGift:t.getCurGift,showGift:t.showCurGift}})})):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showGiftDialog,expression:"showGiftDialog"}]},[e("gift-dialog",{attrs:{giftData:t.giftData},on:{change:t.hideGiftDialog}})],1),t._v(" "),t.userData?t._e():[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showLoginModeDialog,expression:"showLoginModeDialog"}],staticClass:"login-mode-layer"},[e("login-mode-dialog",{attrs:{responseEvent:!0},on:{signByPhone:t.handlerPhoneSign,hide:t.hideModeDialog}})],1)]],2)},staticRenderFns:[]};var f=i("vSla")(m,u,!1,function(t){i("g90n")},"data-v-79298028",null);a.default=f.exports},MTC2:function(t,a,i){"use strict";var e=i("AAo7"),s=i("0xDb"),n={components:{"phone-signin-box":i("9+Lw").a},props:["responseEvent","payByLink"],data:function(){return{isOwnClient:$GLOBAL_CONST.isOwnClient,userData:null,showPhoneDialog:!1}},mounted:function(){window.loginCallBack=this.loginCallBack},computed:{exitGameBox:function(){return this.$store.state.game.exitlayer.show}},methods:{loginCallBack:function(t,a,i){if(t&&i){var e=JSON.parse(i);s.a.del("TDY_GUESTDATA"),localStorage.removeItem("TDY_GUESTDATA"),s.a.set("TDY_USERINFO",i,1728e3),localStorage.setItem("TDY_USERINFO",i),sessionStorage.setItem("TDY_SESSIONID",e.sessionId),this.handlerSign&&this.handlerSign(e)}},closeDialog:function(){return this.responseEvent&&this.$emit("hide",!1),!1},preventClick:function(){return!1},hidePhoneDialog:function(t){this.showPhoneDialog=t},toTermPage:function(){var t=this.$route.query,a=Object(s.o)(t),i=window.location.origin+"/personal/agreement"+a;/\/pre/.test(window.location.pathname)&&(i=window.location.origin+"/pre/personal/agreement"+a),window.location.href=i},handlerSign:function(t){this.$toast({message:"登录成功，游戏加载中…",duration:1200}),this.$emit("signByPhone",t)},loginByWX:function(){window.jsInvoke.nativeLogin("wx")},loginByQQ:function(){this.isOwnClient?$GLOBAL_CONST.isOwnClientIos?this.getAuth("qq"):window.jsInvoke.nativeLogin("qq"):this.getAuth("qq")},getAuth:function(t){var a=this;this.$indicator.open();var i=""+this.$route.path,s=encodeURIComponent(i),n=window.location.href.replace(i,"/proxy_qq");-1!==n.indexOf("?")?n+="&fromPage="+s:n+="?fromPage="+s;var o={form:t,channel:$GLOBAL_CONST.channel,redirect_uri:n};this.$api.decipherPost(e.a.AUTHEXCHANGE,o,function(t){a.$indicator.close(),0==t.status?window.location.href=t.decryptData.authorize_url:a.$toast(t.message)},function(){a.$indicator.close(),a.$toast("系统君抽风，请稍候再来骚扰")})},loginByPhone:function(){this.showPhoneDialog=!0}}},o={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"common-mask-dialog login-dialog mt-20",class:{translucence:!t.showPhoneDialog&&!t.exitGameBox},on:{click:function(a){return a.stopPropagation(),t.closeDialog(a)}}},[i("div",{staticClass:"common-box dialog mt-20",on:{click:function(a){return a.stopPropagation(),t.preventClick(a)}}},[t._m(0),t._v(" "),i("div",{staticClass:"mode-body mt34"},[t.isOwnClient?i("a",{staticStyle:{width:"33.2%"},on:{click:t.loginByWX}},[i("i",{staticClass:"icon icon-mode-wx"}),t._v(" "),i("p",{staticClass:"mt8 font12"},[t._v("微信登录")])]):t._e(),t._v(" "),i("a",{class:{width50:!t.isOwnClient},on:{click:t.loginByQQ}},[i("i",{staticClass:"icon icon-mode-qq"}),t._v(" "),i("p",{staticClass:"mt8 font12"},[t._v("QQ登录")])]),t._v(" "),i("a",{class:{width50:!t.isOwnClient},on:{click:t.loginByPhone}},[i("i",{staticClass:"icon icon-mode-p"}),t._v(" "),i("p",{staticClass:"mt8 font12"},[t._v("手机登录")])])]),t._v(" "),i("div",{staticClass:"mode-footer mt45"},[t._v("\n        登录即代表你已经阅读并知晓"),i("span",{staticClass:"ml4",on:{click:t.toTermPage}},[t._v("用户协议")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showPhoneDialog,expression:"showPhoneDialog"}]},[i("phone-signin-box",{on:{signin:t.handlerSign,change:t.hidePhoneDialog}})],1)])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"mode-header"},[a("i",{staticClass:"mr8 fl"}),this._v(" "),a("i",{staticClass:"ml8 fr"}),this._v(" "),a("span",[this._v("选择登录方式")])])}]};var c=i("vSla")(n,o,!1,function(t){i("w1tj")},"data-v-8c00a8d4",null);a.a=c.exports},ZJwk:function(t,a){},g90n:function(t,a){},hMef:function(t,a){},"p/op":function(t,a,i){t.exports=i.p+"static/img/seat.aa167b4.svg"},w1tj:function(t,a){}});