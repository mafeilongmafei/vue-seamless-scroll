(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{317:function(t,i,e){"undefined"!=typeof self&&self,t.exports=function(t){function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}var e={};return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},i.p="",i(i.s=1)}([function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),e(4)();var o=e(5),n=e(6);i.default={name:"vue-seamless-scroll",data:function(){return{xPos:0,yPos:0,delay:0,copyHtml:"",height:0,width:0,realBoxWidth:0}},props:{data:{type:Array,default:function(){return[]}},classOption:{type:Object,default:function(){return{}}}},computed:{leftSwitchState:function(){return this.xPos<0},rightSwitchState:function(){return Math.abs(this.xPos)<this.realBoxWidth-this.width},leftSwitchClass:function(){return this.leftSwitchState?"":this.options.switchDisabledClass},rightSwitchClass:function(){return this.rightSwitchState?"":this.options.switchDisabledClass},leftSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 -"+this.options.switchOffset+"px",transform:"translate(-100%,-50%)"}},rightSwitch:function(){return{position:"absolute",margin:this.height/2+"px 0 0 "+(this.width+this.options.switchOffset)+"px",transform:"translateY(-50%)"}},float:function(){return this.isHorizontal?{float:"left",overflow:"hidden"}:{overflow:"hidden"}},pos:function(){return{transform:"translate("+this.xPos+"px,"+this.yPos+"px)",transition:"all "+this.ease+" "+this.delay+"ms",overflow:"hidden"}},defaultOption:function(){return{step:1,limitMoveNum:5,hoverStop:!0,direction:1,openTouch:!0,singleHeight:0,singleWidth:0,waitTime:1e3,switchOffset:30,autoPlay:!0,navigation:!1,switchSingleStep:134,switchDelay:400,switchDisabledClass:"disabled",isSingleRemUnit:!1}},options:function(){return n({},this.defaultOption,this.classOption)},navigation:function(){return this.options.navigation},autoPlay:function(){return!this.navigation&&this.options.autoPlay},scrollSwitch:function(){return this.data.length>=this.options.limitMoveNum},hoverStopSwitch:function(){return this.options.hoverStop&&this.autoPlay&&this.scrollSwitch},canTouchScroll:function(){return this.options.openTouch},isHorizontal:function(){return this.options.direction>1},baseFontSize:function(){return this.options.isSingleRemUnit?parseInt(window.getComputedStyle(document.documentElement,null).fontSize):1},realSingleStopWidth:function(){return this.options.singleWidth*this.baseFontSize},realSingleStopHeight:function(){return this.options.singleHeight*this.baseFontSize},step:function(){var t=this.options.step;return this.isHorizontal?this.realSingleStopWidth:this.realSingleStopHeight,t}},methods:{leftSwitchClick:function(){if(this.leftSwitchState)return Math.abs(this.xPos)<this.options.switchSingleStep?void(this.xPos=0):void(this.xPos+=this.options.switchSingleStep)},rightSwitchClick:function(){if(this.rightSwitchState)return this.realBoxWidth-this.width+this.xPos<this.options.switchSingleStep?void(this.xPos=this.width-this.realBoxWidth):void(this.xPos-=this.options.switchSingleStep)},_cancle:function(){cancelAnimationFrame(this.reqFrame||"")},touchStart:function(t){var i=this;if(this.canTouchScroll){var e=void 0,o=t.targetTouches[0],n=this.options,s=n.waitTime,a=n.singleHeight,r=n.singleWidth;this.startPos={x:o.pageX,y:o.pageY},this.startPosY=this.yPos,this.startPosX=this.xPos,a&&r?(e&&clearTimeout(e),e=setTimeout((function(){i._cancle()}),s+20)):this._cancle()}},touchMove:function(t){if(!(!this.canTouchScroll||t.targetTouches.length>1||t.scale&&1!==t.scale)){var i=t.targetTouches[0],e=this.options.direction;this.endPos={x:i.pageX-this.startPos.x,y:i.pageY-this.startPos.y},event.preventDefault();var o=Math.abs(this.endPos.x)<Math.abs(this.endPos.y)?1:0;1===o&&e<2?this.yPos=this.startPosY+this.endPos.y:0===o&&e>1&&(this.xPos=this.startPosX+this.endPos.x)}},touchEnd:function(){var t=this;if(this.canTouchScroll){var i=void 0,e=this.options.direction;if(this.delay=50,1===e)this.yPos>0&&(this.yPos=0);else if(0===e){var o=this.realBoxHeight/2*-1;this.yPos<o&&(this.yPos=o)}else if(2===e)this.xPos>0&&(this.xPos=0);else if(3===e){var n=-1*this.realBoxWidth;this.xPos<n&&(this.xPos=n)}i&&clearTimeout(i),i=setTimeout((function(){t.delay=0,t._move()}),this.delay)}},enter:function(){this.hoverStopSwitch&&this._stopMove()},leave:function(){this.hoverStopSwitch&&this._startMove()},_move:function(){this.isHover||(this._cancle(),this.reqFrame=requestAnimationFrame(function(){var t=this,i=this.realBoxHeight/2,e=this.realBoxWidth/2,o=this.options,n=o.direction,s=o.waitTime,a=this.step;1===n?(Math.abs(this.yPos)>=i&&(this.$emit("ScrollEnd"),this.yPos=0),this.yPos-=a):0===n?(this.yPos>=0&&(this.$emit("ScrollEnd"),this.yPos=-1*i),this.yPos+=a):2===n?(Math.abs(this.xPos)>=e&&(this.$emit("ScrollEnd"),this.xPos=0),this.xPos-=a):3===n&&(this.xPos>=0&&(this.$emit("ScrollEnd"),this.xPos=-1*e),this.xPos+=a),this.singleWaitTime&&clearTimeout(this.singleWaitTime),this.realSingleStopHeight?Math.abs(this.yPos)%this.realSingleStopHeight<a?this.singleWaitTime=setTimeout((function(){t._move()}),s):this._move():this.realSingleStopWidth&&Math.abs(this.xPos)%this.realSingleStopWidth<a?this.singleWaitTime=setTimeout((function(){t._move()}),s):this._move()}.bind(this)))},_initMove:function(){var t=this;this.$nextTick((function(){var i=t.options.switchDelay,e=t.autoPlay,o=t.isHorizontal;if(t._dataWarm(t.data),t.copyHtml="",o){t.height=t.$refs.wrap.offsetHeight,t.width=t.$refs.wrap.offsetWidth;var n=t.$refs.slotList.offsetWidth;e&&(n=2*n+1),t.$refs.realBox.style.width=n+"px",t.realBoxWidth=n}if(!e)return t.ease="linear",void(t.delay=i);t.ease="ease-in",t.delay=0,t.scrollSwitch?(t.copyHtml=t.$refs.slotList.innerHTML,setTimeout((function(){t.realBoxHeight=t.$refs.realBox.offsetHeight,t._move()}),0)):(t._cancle(),t.yPos=t.xPos=0)}))},_dataWarm:function(t){t.length},_startMove:function(){this.isHover=!1,this._move()},_stopMove:function(){this.isHover=!0,this.singleWaitTime&&clearTimeout(this.singleWaitTime),this._cancle()}},mounted:function(){this._initMove()},watch:{data:function(t,i){this._dataWarm(t),o(t,i)||(this._cancle(),this._initMove())},autoPlay:function(t){t?(this._cancle(),this._initMove()):this._stopMove()}},beforeCreate:function(){this.reqFrame=null,this.singleWaitTime=null,this.isHover=!1,this.ease="ease-in"},beforeDestroy:function(){this._cancle(),clearTimeout(this.singleWaitTime)}}},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(e(2));o.default.install=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(i.componentName||o.default.name,o.default)},"undefined"!=typeof window&&window.Vue&&Vue.component(o.default.name,o.default),i.default=o.default},function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e(0),n=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(i,t,(function(){return o[t]}))}(s);var a=e(7),r=e(3)(n.a,a.a,!1,null,null,null);i.default=r.exports},function(t,i){t.exports=function(t,i,e,o,n,s){var a,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,r=t.default);var h,c="function"==typeof r?r.options:r;if(i&&(c.render=i.render,c.staticRenderFns=i.staticRenderFns,c._compiled=!0),e&&(c.functional=!0),n&&(c._scopeId=n),s?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=h):o&&(h=o),h){var u=c.functional,f=u?c.render:c.beforeCreate;u?(c._injectStyles=h,c.render=function(t,i){return h.call(i),f(t,i)}):c.beforeCreate=f?[].concat(f,h):[h]}return{esModule:a,exports:r,options:c}}},function(t,i){t.exports=function(){window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||window.oCancelAnimationFrame||window.msCancelAnimationFrame||function(t){return window.clearTimeout(t)},window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}},function(t,i){t.exports=function(t,i){if(t===i)return!0;if(t.length!==i.length)return!1;for(var e=0;e<t.length;++e)if(t[e]!==i[e])return!1;return!0}},function(t,i){var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};t.exports=function t(){Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var i=void 0,o=void 0,n=void 0,s=void 0,a=void 0,r=void 0,l=1,h=arguments[0]||{},c=!1,u=arguments.length;if("boolean"==typeof h&&(c=h,h=arguments[1]||{},l++),"object"!==(void 0===h?"undefined":e(h))&&"function"!=typeof h&&(h={}),l===u)return h;for(;l<u;l++)if(null!=(o=arguments[l]))for(i in o)n=h[i],s=o[i],a=Array.isArray(s),c&&s&&("object"===(void 0===s?"undefined":e(s))||a)?(a?(a=!1,r=n&&Array.isArray(n)?n:[]):r=n&&"object"===(void 0===n?"undefined":e(n))?n:{},h[i]=t(c,r,s)):void 0!==s&&(h[i]=s);return h}},function(t,i,e){"use strict";var o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"wrap"},[t.navigation?e("div",{class:t.leftSwitchClass,style:t.leftSwitch,on:{click:t.leftSwitchClick}},[t._t("left-switch")],2):t._e(),t._v(" "),t.navigation?e("div",{class:t.rightSwitchClass,style:t.rightSwitch,on:{click:t.rightSwitchClick}},[t._t("right-switch")],2):t._e(),t._v(" "),e("div",{ref:"realBox",style:t.pos,on:{mouseenter:t.enter,mouseleave:t.leave,touchstart:t.touchStart,touchmove:t.touchMove,touchend:t.touchEnd}},[e("div",{ref:"slotList",style:t.float},[t._t("default")],2),t._v(" "),e("div",{style:t.float,domProps:{innerHTML:t._s(t.copyHtml)}})])])},staticRenderFns:[]};i.a=o}]).default},456:function(t,i,e){},585:function(t,i,e){"use strict";e(456)},898:function(t,i,e){"use strict";e.r(i);var o=e(317),n={name:"Example05Basic",components:{vueSeamlessScroll:e.n(o).a},data:function(){return{listData:[{title:"无缝滚动第一行无缝滚动第一行",date:"2017-12-16"},{title:"无缝滚动第二行无缝滚动第二行",date:"2017-12-16"},{title:"无缝滚动第三行无缝滚动第三行",date:"2017-12-16"},{title:"无缝滚动第四行无缝滚动第四行",date:"2017-12-16"},{title:"无缝滚动第五行无缝滚动第五行",date:"2017-12-16"},{title:"无缝滚动第六行无缝滚动第六行",date:"2017-12-16"},{title:"无缝滚动第七行无缝滚动第七行",date:"2017-12-16"},{title:"无缝滚动第八行无缝滚动第八行",date:"2017-12-16"},{title:"无缝滚动第九行无缝滚动第九行",date:"2017-12-16"}],classOption:{hoverStop:!1}}}},s=(e(585),e(42)),a=Object(s.a)(n,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("vue-seamless-scroll",{staticClass:"warp",attrs:{data:t.listData,"class-option":t.classOption}},[e("ul",{staticClass:"item"},t._l(t.listData,(function(i,o){return e("li",{key:o},[e("span",{staticClass:"title",domProps:{textContent:t._s(i.title)}}),t._v(" "),e("span",{staticClass:"date",domProps:{textContent:t._s(i.date)}})])})),0)])}),[],!1,null,"104e0677",null);i.default=a.exports}}]);