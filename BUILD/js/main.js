!function(t,e){"function"==typeof define&&define.amd?define(["module","exports"],e):"undefined"!=typeof exports?e(module,exports):(e(e={exports:{}},e.exports),t.WOW=e.exports)}(this,function(t,e){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){return 0<=e.indexOf(t)}function n(t,e,i){null!=t.addEventListener?t.addEventListener(e,i,!1):null!=t.attachEvent?t.attachEvent("on"+e,i):t[e]=i}function a(t,e,i){null!=t.removeEventListener?t.removeEventListener(e,i,!1):null!=t.detachEvent?t.detachEvent("on"+e,i):delete t[e]}Object.defineProperty(e,"__esModule",{value:!0});var o=function(t,e,i){return e&&v(t.prototype,e),i&&v(t,i),t},r=window.WeakMap||window.MozWeakMap||(o(d,[{key:"get",value:function(t){for(var e=0;e<this.keys.length;e++)if(this.keys[e]===t)return this.values[e]}},{key:"set",value:function(t,e){for(var i=0;i<this.keys.length;i++)if(this.keys[i]===t)return this.values[i]=e,this;return this.keys.push(t),this.values.push(e),this}}]),d),l=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(o(u,[{key:"observe",value:function(){}}]),u.notSupported=!0,u),h=window.getComputedStyle||function(i){var n=/(\-([a-z]){1})/g;return{getPropertyValue:function(t){n.test(t="float"===t?"styleFloat":t)&&t.replace(n,function(t,e){return e.toUpperCase()});var e=i.currentStyle;return(null!=e?e[t]:void 0)||null}}},o=(o(c,[{key:"init",value:function(){this.element=window.document.documentElement,s(document.readyState,["interactive","complete"])?this.start():n(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var t=0;t<this.boxes.length;t++){var e=this.boxes[t];this.applyStyle(e,!0)}this.disabled()||(n(this.config.scrollContainer||window,"scroll",this.scrollHandler),n(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live&&new l(function(t){for(var e=0;e<t.length;e++)for(var i=t[e],n=0;n<i.addedNodes.length;n++){var s=i.addedNodes[n];a.doSync(s)}}).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function(){this.stopped=!0,a(this.config.scrollContainer||window,"scroll",this.scrollHandler),a(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){l.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(t){if(1===(t=null==t?this.element:t).nodeType)for(var e=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass),i=0;i<e.length;i++){var n=e[i];s(n,this.all)||(this.boxes.push(n),this.all.push(n),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(n,!0),this.scrolled=!0)}}},{key:"show",value:function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),e=t,i=this.wowEvent,null!=e.dispatchEvent?e.dispatchEvent(i):i in(null!=e)?e[i]():"on"+i in(null!=e)&&e["on"+i](),this.config.resetAnimation&&(n(t,"animationend",this.resetAnimation),n(t,"oanimationend",this.resetAnimation),n(t,"webkitAnimationEnd",this.resetAnimation),n(t,"MSAnimationEnd",this.resetAnimation)),t;var e,i}},{key:"applyStyle",value:function(t,e){var i=this,n=t.getAttribute("data-wow-duration"),s=t.getAttribute("data-wow-delay"),a=t.getAttribute("data-wow-iteration");return this.animate(function(){return i.customStyle(t,e,n,s,a)})}},{key:"resetStyle",value:function(){for(var t=0;t<this.boxes.length;t++)this.boxes[t].style.visibility="visible"}},{key:"resetAnimation",value:function(t){0<=t.type.toLowerCase().indexOf("animationend")&&((t=t.target||t.srcElement).className=t.className.replace(this.config.animateClass,"").trim())}},{key:"customStyle",value:function(t,e,i,n,s){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),n&&this.vendorSet(t.style,{animationDelay:n}),s&&this.vendorSet(t.style,{animationIterationCount:s}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t}},{key:"vendorSet",value:function(t,e){for(var i in e)if(e.hasOwnProperty(i)){var n=e[i];t[""+i]=n;for(var s=0;s<this.vendors.length;s++)t[""+this.vendors[s]+i.charAt(0).toUpperCase()+i.substr(1)]=n}}},{key:"vendorCSS",value:function(t,e){for(var i=h(t),n=i.getPropertyCSSValue(e),s=0;s<this.vendors.length;s++)var a=this.vendors[s],n=n||i.getPropertyCSSValue("-"+a+"-"+e);return n}},{key:"animationName",value:function(e){var i=void 0;try{i=this.vendorCSS(e,"animation-name").cssText}catch(t){i=h(e).getPropertyValue("animation-name")}return"none"===i?"":i}},{key:"cacheAnimationName",value:function(t){return this.animationNameCache.set(t,this.animationName(t))}},{key:"cachedAnimationName",value:function(t){return this.animationNameCache.get(t)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var t=[],e=0;e<this.boxes.length;e++){var i=this.boxes[e];i&&(this.isVisible(i)?this.show(i):t.push(i))}this.boxes=t,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(t){for(;void 0===t.offsetTop;)t=t.parentNode;for(var e=t.offsetTop;t.offsetParent;)e+=(t=t.offsetParent).offsetTop;return e}},{key:"isVisible",value:function(t){var e=t.getAttribute("data-wow-offset")||this.config.offset,i=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,e=i+Math.min(this.element.clientHeight,"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight)-e,n=this.offsetTop(t),t=n+t.clientHeight;return n<=e&&i<=t}},{key:"disabled",value:function(){return!this.config.mobile&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}]),c);function c(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,c),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=function(t,e){for(var i in e){var n;null==t[i]&&(n=e[i],t[i]=n)}return t}(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new r,this.wowEvent=function(t,e,i,n){var e=!(arguments.length<=1||void 0===e)&&e,i=!(arguments.length<=2||void 0===i)&&i,n=arguments.length<=3||void 0===n?null:n,s=void 0;return null!=document.createEvent?(s=document.createEvent("CustomEvent")).initCustomEvent(t,e,i,n):null!=document.createEventObject?(s=document.createEventObject()).eventType=t:s.eventName=t,s}(this.config.boxClass)}function u(){i(this,u),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}function d(){i(this,d),this.keys=[],this.values=[]}function v(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}e.default=o,t.exports=e.default}),(new WOW).init();var Stars={canvas:null,context:null,circleArray:[],colorArray:["#FFFFFF","#FFFFFF","#FFFFFF","#F1D5AB","#F1D5AB","#F1D5AB","#8BB3C3","#8BB3C3","#8BB3C3","#DAD3C1","#D4B6B0","#71878D","#213B3D","#D7967A","#0A95DC"],mouseDistance:30,radius:.5,maxRadius:1.2,mouse:{x:void 0,y:void 0,down:!1,move:!1},init:function(){this.canvas=document.getElementById("stars"),this.canvas.width=document.getElementById("container-main").offsetWidth,this.canvas.height=window.innerHeight,this.canvas.style.display="block",this.context=this.canvas.getContext("2d"),window.addEventListener("mousemove",this.mouseMove),window.addEventListener("resize",this.resize),this.prepare(),this.animate()},Circle:function(t,e,i,n,s,a){this.x=t,this.y=e,this.dx=i,this.dy=n,this.radius=s,this.minRadius=this.radius,this.draw=function(){Stars.context.beginPath(),Stars.context.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),Stars.context.fillStyle=a,Stars.context.fill()},this.update=function(){(this.x+this.radius>Stars.canvas.width||this.x-this.radius<0)&&(this.dx=-this.dx),(this.y+this.radius>Stars.canvas.height||this.y-this.radius<0)&&(this.dy=-this.dy),this.x+=this.dx,this.y+=this.dy,Stars.mouse.x-this.x<Stars.mouseDistance&&Stars.mouse.x-this.x>-Stars.mouseDistance&&Stars.mouse.y-this.y<Stars.mouseDistance&&Stars.mouse.y-this.y>-Stars.mouseDistance?this.radius<Stars.maxRadius&&(this.radius+=1):this.radius>this.minRadius&&--this.radius,this.draw()}},prepare:function(){this.circleArray=[];for(var t=0;t<3e3;t++){var e=Stars.radius,i=Math.random()*(this.canvas.width-2*e)+e,n=Math.random()*(this.canvas.height-2*e)+e,s=.4*(Math.random()-.5),a=.4*(Math.random()-.5),o=this.colorArray[Math.floor(Math.random()*this.colorArray.length)];this.circleArray.push(new this.Circle(i,n,s,a,e,o))}},animate:function(){requestAnimationFrame(Stars.animate),Stars.context.clearRect(0,0,Stars.canvas.width,Stars.canvas.height);for(var t=0;t<Stars.circleArray.length;t++)Stars.circleArray[t].update()},mouseMove:function(t){Stars.mouse.x=t.x,Stars.mouse.y=t.y},resize:function(){Stars.canvas.width=document.getElementById("container-main").offsetWidth,Stars.canvas.height=window.innerHeight}};Stars.init();