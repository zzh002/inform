webpackJsonp([1],{"/kuH":function(t,o){},0:function(t,o){},"34KM":function(t,o){},FhoZ:function(t,o,e){"use strict";(function(o){const s=e("o/zv");t.exports={dev:{assetsSubDirectory:"static",assetsPublicPath:"/",host:"localhost",port:8100,autoOpenBrowser:!1,errorOverlay:!0,notifyOnErrors:!0,poll:!1,useEslint:!0,showEslintErrorsInOverlay:!1,devtool:"cheap-module-eval-source-map",cacheBusting:!0,cssSourceMap:!0,buyerUrl:"http://wxsell.nat200.top",tokenUrl:"http://wxsell.nat200.top/sell/wechat/authorize2token",buyUrl:"http://wxsell.nat200.top/sell/pay/create"},build:{index:s.resolve(o,"../dist/index.html"),replenishment:s.resolve(o,"../dist/replenishment.html"),order:s.resolve(o,"../dist/order.html"),create:s.resolve(o,"../dist/create.html"),assetsRoot:s.resolve(o,"../dist"),assetsSubDirectory:"static",assetsPublicPath:"/",productionSourceMap:!0,devtool:"#source-map",productionGzip:!1,productionGzipExtensions:["js","css"],bundleAnalyzerReport:Object({NODE_ENV:"production"}).npm_config_report,buyerUrl:"http://wxsell.nat200.top",tokenUrl:"http://wxsell.nat200.top/sell/wechat/authorize2token",buyUrl:"http://wxsell.nat200.top/sell/pay/create"}}}).call(o,"/")},VbuR:function(t,o){},XVnt:function(t,o){},eszT:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("7+uW"),n=e("GQaK"),i={props:{food:{type:Object}},methods:{addCart:function(t){t._constructed&&(this.food.count?this.food.count++:s.a.set(this.food,"count",1),console.log(t.target),this.$emit("add",t.target))},decreaseCart:function(t){t._constructed&&this.food.count>0&&this.food.count--}}},a={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(o){o.stopPropagation(),o.preventDefault(),t.decreaseCart(o)}}},[e("span",{staticClass:"inner icon-remove_circle_outline"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(o){o.stopPropagation(),o.preventDefault(),t.addCart(o)}}})],1)},staticRenderFns:[]};var r=e("VU/8")(i,a,!1,function(t){e("zMBq")},null,null).exports,l=e("mtWM"),c=e.n(l),d=e("mw3O"),u=e.n(d),h=e("FhoZ");h=h.build;var f={props:{selectFoods:{type:Array,default:function(){return[]}}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0,flag:1}},computed:{totalCount:function(){var t=0;return this.selectFoods.forEach(function(o){t+=o.count}),t},payDesc:function(){return 0===this.totalCount?"请选择零食":"放入盒子"},payClass:function(){return 0===this.totalCount?"not-enough":"enough"},listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var o=!this.fold;return o&&this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new n.a(t.$refs.listContent,{click:!0})}),o}},methods:{changeString:function(){for(var t="",o=0;o<this.selectFoods.length;o++)t+=this.selectFoods[o].name+"   X"+this.selectFoods[o].count+"\n";return t},getCookie:function(t){var o=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));return null!=o?unescape(o[2]):null},setfoods:function(){for(var t="[",o=0;o<this.selectFoods.length;o++)t+='{productId: "'+this.selectFoods[o].id+'",productQuantity:'+this.selectFoods[o].count+"},";t=t.substring(0,t.length-1),t+="]",console.log(t);var e={items:t};return console.log(e),u.a.stringify(e)},addFood:function(t){this.drop(t)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},hideList:function(){this.fold=!0},pay:function(){if(0!==this.totalCount)if(1===this.flag){this.flag=0;var t=this.setfoods();console.log(t);var o=this,e=this.getCookie("token");console.log(e),null===e&&(window.location.href=h.tokenUrl+"?returnUrl="+h.buyerUrl+"/buyerInterface/replenishment.html"),c.a.post("/sell/token/verify",{token:e},{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t.data.code),40===t.data.code&&(window.location.href=h.tokenUrl+"?returnUrl="+h.buyerUrl+"/buyerInterface/replenishment.html")}).catch(function(t){console.log(t)}),c.a.post("/sell/buyer/replenish/WxCreate?token="+e,t,{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(t){console.log(t.data.msg),"成功"===t.data.msg?(window.alert(o.changeString()),o.empty(),o.flag=1):"用户不存在"===t.data.msg?window.alert("请先注册用户"):window.alert(t.data.msg)}).catch(function(t){console.log(t)})}else window.alert("请勿重复支付");else window.alert("没有选择零食")},drop:function(t){for(var o=0;o<this.balls.length;o++){var e=this.balls[o];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeDrop:function(t){for(var o=this.balls.length;o--;){var e=this.balls[o];if(e.show){var s=e.el.getBoundingClientRect(),n=s.left-32,i=-(window.innerHeight-s.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+i+"px,0)",t.style.transform="translate3d(0,"+i+"px,0)";var a=t.getElementsByClassName("inner-hook")[0];a.style.webkitTransform="translate3d("+n+"px,0,0)",a.style.transform="translate3d("+n+"px,0,0)"}}},dropping:function(t,o){t.offsetHeight;this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var e=t.getElementsByClassName("inner-hook")[0];e.style.webkitTransform="translate3d(0,0,0)",e.style.transform="translate3d(0,0,0)",t.addEventListener("transitionend",o)})},afterDrop:function(t){var o=this.dropBalls.shift();o&&(o.show=!1,t.style.display="none")}},components:{Cartcontrol:r}},p={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"shopcar"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{staticClass:"logo",class:{highlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{highlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount > 0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])])]),t._v(" "),e("div",{staticClass:"content-right"},[e("div",{staticClass:"pay",class:t.payClass,on:{click:function(o){o.stopPropagation(),o.preventDefault(),t.pay(o)}}},[t._v("\n          "+t._s(t.payDesc)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},[t._l(t.balls,function(o,s){return e("div",{key:s},[e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeDrop,enter:t.dropping,"after-enter":t.afterDrop}},[e("div",{directives:[{name:"show",rawName:"v-show",value:o.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])],1)}),t._v(" "),e("div",{staticClass:"inner"})],2),t._v(" "),e("transition",{attrs:{name:"fold"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcar-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listContent",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(o,s){return e("li",{key:s,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(o.name))]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:o},on:{add:t.addFood}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},staticRenderFns:[]};var v=e("VU/8")(f,p,!1,function(t){e("XVnt")},null,null).exports,m={props:{food:{type:Object}},data:function(){return{showFlag:!1}},methods:{show:function(){var t=this;this.showFlag=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new n.a(t.$refs.food,{click:!0})})},addFood:function(t){this.$emit("add",t)},addFirst:function(t){t._constructed&&(this.$emit("add",t.target),console.log(t.tatget),s.a.set(this.food,"count",1))},hide:function(){this.showFlag=!1}},components:{Cartcontrol:r}},g={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.icon}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("p",{staticClass:"desc"},[t._v(t._s(t.food.description))])]),t._v(" "),e("div",{staticClass:"price"}),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food},on:{add:t.addFood}})],1),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count===0"}],staticClass:"buy",on:{click:function(o){o.stopPropagation(),o.preventDefault(),t.addFirst(o)}}},[t._v("\n           放入盒子\n         ")])])],1)])])},staticRenderFns:[]};var w=e("VU/8")(m,g,!1,function(t){e("vWED")},null,null).exports,C=e("FhoZ");C=C.build;var _={data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var o=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=o&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(o){o.foods.forEach(function(o){o.count&&t.push(o)})}),t}},created:function(){var t=this,o=this.getCookie("token"),e=this.getQueryToken("token");null!==o||null!==e?(null!==e&&(this.setTime(e),o=e),c.a.post("/sell/token/verify",{token:o},{headers:{"Content-Type":"application/json"}}).then(function(t){console.log(t.data.code),40===t.data.code&&(window.location.href=C.tokenUrl+"?returnUrl="+C.buyerUrl+"/buyerInterface/replenishment.html")}).catch(function(t){console.log(t)}),console.log(o),c.a.get("/sell/buyer/product/WxList?token="+o).then(function(o){console.log(o),o=o.request.responseText;var e=JSON.parse(o).data;t.goods=e,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})}).catch(function(t){console.log(t)})):window.location.href=C.tokenUrl+"?returnUrl="+C.buyerUrl+"/buyerInterface/replenishment.html"},methods:{getCookie:function(t){var o=document.cookie.match(new RegExp("(^| )"+t+"=([^;]*)(;|$)"));return null!=o?unescape(o[2]):null},getQueryToken:function(t){var o=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),e=window.location.search.substr(1).match(o);return null!=e?unescape(e[2]):null},setTime:function(t){var o=new Date;o.setTime(o.getTime()+72e5),document.cookie="token="+t+";expires="+o.toGMTString()},addFood:function(t){this._drop(t)},selectMenu:function(t,o){if(o._constructed){var e=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook")[t];this.foodsScroll.scrollToElement(e,300)}},selectFood:function(t,o){o._constructed&&(this.selectedFood=t,this.$refs.food.show())},_initScroll:function(){var t=this;this.meunScroll=new n.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new n.a(this.$refs.foodsWrapper,{probeType:3,click:!0}),this.foodsScroll.on("scroll",function(o){o.y<=0&&(t.scrollY=Math.abs(Math.round(o.y)))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook"),o=0;this.listHeight.push(o);for(var e=0;e<t.length;e++){o+=t[e].clientHeight,this.listHeight.push(o)}},_drop:function(t){var o=this;this.$nextTick(function(){o.$refs.shopcart.drop(t)})}},components:{Cartcontrol:r,shopcart:v,food:w}},y={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper menu-list-hook"},[e("ul",t._l(t.goods,function(o,s){return e("li",{key:s,staticClass:"menu-item",class:{current:t.currentIndex===s},on:{click:function(o){t.selectMenu(s,o)}}},[e("span",{staticClass:"text border-1px"},[t._v("\n             "+t._s(o.name)+"\n         ")])])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(o,s){return e("li",{key:s,staticClass:"food-list food-list-hook"},[e("h1",{staticClass:"title"},[t._v(t._s(o.name))]),t._v(" "),e("ul",t._l(o.foods,function(o,s){return e("li",{key:s,staticClass:"food-item border-1px",on:{click:function(e){t.selectFood(o,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"68",height:"68",src:o.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(o.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(o.description))]),t._v(" "),e("div",{staticClass:"extra"}),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:o},on:{add:t.addFood}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"select-foods":t.selectFoods}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood},on:{add:t.addFood}})],1)},staticRenderFns:[]};var k={components:{goods:e("VU/8")(_,y,!1,function(t){e("/kuH")},null,null).exports}},b={render:function(){var t=this.$createElement,o=this._self._c||t;return o("div",{attrs:{id:"replenishment"}},[o("goods")],1)},staticRenderFns:[]};var x=e("VU/8")(k,b,!1,function(t){e("VbuR")},null,null).exports,F=(e("34KM"),e("8+8L"));s.a.config.productionTip=!1,s.a.use(F.a),new s.a({el:"#replenishment",components:{Replenishment:x},template:"<Replenishment/>"})},vWED:function(t,o){},zMBq:function(t,o){}},["eszT"]);
//# sourceMappingURL=replenishment.554db6b39d6d98173ef0.js.map