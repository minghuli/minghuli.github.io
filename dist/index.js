!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=s(n(1)),a=s(n(2)),o=s(n(3));s(n(4));function s(t){return t&&t.__esModule?t:{default:t}}var u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.getElementById("canvas"),this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.context=this.canvas.getContext("2d"),this.START_COUNT=600,this.moon=new a.default(this.context,this.width,this.height),this.stars=new r.default(this.context,this.width,this.height,this.START_COUNT),this.meteors=[],this.timer=[],this.moon.drow(),this.stars.drow()}return i(t,[{key:"init",value:function(){var t=this,e=0;!function n(){if(window.cancelAnimationFrame(t.timer),++e%10==0&&t.stars.lighting(),t.moon.drow(),t.stars.drow(),t.meteors.forEach(function(e,n){e.slide()?e.drow():t.meteors.splice(n,1)}),e%100==0||10===e){var i=Math.random()*t.width+800;t.meteors.push(new o.default(t.context,i,t.height))}t.timer=requestAnimationFrame(n)}()}}]),t}();e.default=u,(new u).init()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var r=function(){function t(e,n,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.context=e,this.width=n,this.height=i,this.count=r,this.stars=[],this.createStar(),this.drow()}return i(t,[{key:"createStar",value:function(){for(var t=this.count;t--;)this.stars.push({x:Math.random()*this.width,y:Math.random()*this.height,r:Math.random()+.2})}},{key:"lighting",value:function(){return this.stars=this.stars.map(function(t){var e=Math.random()>.5?-1:1;return t.r+=.2*e,t.r<0?t.r=-t.r:t.r>1&&(t.r-=.2*e),t}),this}},{key:"drow",value:function(){var t=this.context;return t.save(),t.fillStyle="white",this.stars.forEach(function(e){t.beginPath(),t.arc(e.x,e.y,e.r,0,2*Math.PI,!1),t.fill(),t.closePath()}),t.restore(),this}}]),t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var r=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.width=n,this.height=i}return i(t,[{key:"drow",value:function(){var t=this.ctx,e=t.createRadialGradient(150,150,80,150,150,800);e.addColorStop(0,"rgb(255, 255, 255)"),e.addColorStop(.01,"rgba(255, 255, 255, .6)"),e.addColorStop(.02,"rgb(6, 61, 126)"),e.addColorStop(1,"rgb(2, 30, 67)"),t.save(),t.fillStyle=e,t.fillRect(0,0,this.width,this.height),t.restore()}}]),t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var r=function(){function t(e,n,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.x=n,this.y=0,this.h=i,this.r=100*Math.random()+300,this.vx=-(4*Math.random()+4),this.vy=-this.vx}return i(t,[{key:"drow",value:function(){var t=this.ctx,e=t.createRadialGradient(this.x,this.y,0,this.x,this.y,this.r);e.addColorStop(0,"rgba(255, 255, 255, 1)"),e.addColorStop(1,"rgba(0, 0, 0, 0)"),t.save(),t.fillStyle=e,t.beginPath(),t.arc(this.x,this.y,1,Math.PI/4,5*Math.PI/4),t.lineTo(this.x+this.r,this.y-this.r),t.closePath(),t.fill(),t.restore()}},{key:"slide",value:function(){return!(this.x<-this.r||this.y-this.r>=this.h)&&(this.x+=this.vx,this.y+=this.vy,!0)}}]),t}();e.default=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.fontSize=16,this.ctx.fillStyle="rgba(255, 255, 255, 1)",this.ctx.textAlign="left",this.ctx.textBaseline="top",this.ctx.font=this.fontSize+"px Microsoft YaHei",this.ctx.fillText(e,0,0),this.getImage()}return i(t,[{key:"getImage",value:function(){var t=this,e=new Image;return e.src=this.canvas.toDataURL("image/png"),e.onload=function(){t.getImageData()},e}},{key:"getImageData",value:function(){this.imageData=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height);[].slice.call(this.imageData.data);console.log(this.imageData)}}]),t}();e.default=r}]);