/*! For license information please see 8553.3d1a3768.js.LICENSE.txt */
"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8553],{69979:(n,e,r)=>{r.d(e,{Z:()=>u});var t=r(2784),a=r(89741);function u(n){let{children:e,fallback:r}=n;return(0,a.Z)()?t.createElement(t.Fragment,null,null==e?void 0:e()):r??null}},98802:(n,e,r)=>{r.d(e,{Z:()=>hn});var t=r(52322),a=r(2784),u={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},o={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],c={CSS:{},springs:{}};function s(n,e,r){return Math.min(Math.max(n,e),r)}function f(n,e){return n.indexOf(e)>-1}function l(n,e){return n.apply(null,e)}var d={arr:function(n){return Array.isArray(n)},obj:function(n){return f(Object.prototype.toString.call(n),"Object")},pth:function(n){return d.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||d.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return d.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return d.hex(n)||d.rgb(n)||d.hsl(n)},key:function(n){return!u.hasOwnProperty(n)&&!o.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function p(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map((function(n){return parseFloat(n)})):[]}function h(n,e){var r=p(n),t=s(d.und(r[0])?1:r[0],.1,100),a=s(d.und(r[1])?100:r[1],.1,100),u=s(d.und(r[2])?10:r[2],.1,100),o=s(d.und(r[3])?0:r[3],.1,100),i=Math.sqrt(a/t),f=u/(2*Math.sqrt(a*t)),l=f<1?i*Math.sqrt(1-f*f):0,h=f<1?(f*i-o)/l:-o+i;function v(n){var r=e?e*n/1e3:n;return r=f<1?Math.exp(-r*f*i)*(1*Math.cos(l*r)+h*Math.sin(l*r)):(1+h*r)*Math.exp(-r*i),0===n||1===n?n:1-r}return e?v:function(){var e=c.springs[n];if(e)return e;for(var r=1/6,t=0,a=0;;)if(1===v(t+=r)){if(++a>=16)break}else a=0;var u=t*r*1e3;return c.springs[n]=u,u}}function v(n){return void 0===n&&(n=10),function(e){return Math.ceil(s(e,1e-6,1)*n)*(1/n)}}var g,m,y=function(){var n=.1;function e(n,e){return 1-3*e+3*n}function r(n,e){return 3*e-6*n}function t(n){return 3*n}function a(n,a,u){return((e(a,u)*n+r(a,u))*n+t(a))*n}function u(n,a,u){return 3*e(a,u)*n*n+2*r(a,u)*n+t(a)}return function(e,r,t,o){if(0<=e&&e<=1&&0<=t&&t<=1){var i=new Float32Array(11);if(e!==r||t!==o)for(var c=0;c<11;++c)i[c]=a(c*n,e,t);return function(n){return e===r&&t===o||0===n||1===n?n:a(s(n),r,o)}}function s(r){for(var o=0,c=1;10!==c&&i[c]<=r;++c)o+=n;--c;var s=o+(r-i[c])/(i[c+1]-i[c])*n,f=u(s,e,t);return f>=.001?function(n,e,r,t){for(var o=0;o<4;++o){var i=u(e,r,t);if(0===i)return e;e-=(a(e,r,t)-n)/i}return e}(r,s,e,t):0===f?s:function(n,e,r,t,u){var o,i,c=0;do{(o=a(i=e+(r-e)/2,t,u)-n)>0?r=i:e=i}while(Math.abs(o)>1e-7&&++c<10);return i}(r,o,o+n,e,t)}}}(),b=(g={linear:function(){return function(n){return n}}},m={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,r=4;n<((e=Math.pow(2,--r))-1)/11;);return 1/Math.pow(4,3-r)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var r=s(n,1,10),t=s(e,.1,2);return function(n){return 0===n||1===n?n:-r*Math.pow(2,10*(n-1))*Math.sin((n-1-t/(2*Math.PI)*Math.asin(1/r))*(2*Math.PI)/t)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(n,e){m[n]=function(){return function(n){return Math.pow(n,e+2)}}})),Object.keys(m).forEach((function(n){var e=m[n];g["easeIn"+n]=e,g["easeOut"+n]=function(n,r){return function(t){return 1-e(n,r)(1-t)}},g["easeInOut"+n]=function(n,r){return function(t){return t<.5?e(n,r)(2*t)/2:1-e(n,r)(-2*t+2)/2}},g["easeOutIn"+n]=function(n,r){return function(t){return t<.5?(1-e(n,r)(1-2*t))/2:(e(n,r)(2*t-1)+1)/2}}})),g);function w(n,e){if(d.fnc(n))return n;var r=n.split("(")[0],t=b[r],a=p(n);switch(r){case"spring":return h(n,e);case"cubicBezier":return l(y,a);case"steps":return l(v,a);default:return l(t,a)}}function x(n){try{return document.querySelectorAll(n)}catch(e){return}}function M(n,e){for(var r=n.length,t=arguments.length>=2?arguments[1]:void 0,a=[],u=0;u<r;u++)if(u in n){var o=n[u];e.call(t,o,u,n)&&a.push(o)}return a}function O(n){return n.reduce((function(n,e){return n.concat(d.arr(e)?O(e):e)}),[])}function k(n){return d.arr(n)?n:(d.str(n)&&(n=x(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function C(n,e){return n.some((function(n){return n===e}))}function P(n){var e={};for(var r in n)e[r]=n[r];return e}function I(n,e){var r=P(n);for(var t in n)r[t]=e.hasOwnProperty(t)?e[t]:n[t];return r}function D(n,e){var r=P(n);for(var t in e)r[t]=d.und(n[t])?e[t]:n[t];return r}function E(n){return d.rgb(n)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=n))?"rgba("+r[1]+",1)":e:d.hex(n)?function(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(n,e,r,t){return e+e+r+r+t+t})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(r[1],16)+","+parseInt(r[2],16)+","+parseInt(r[3],16)+",1)"}(n):d.hsl(n)?function(n){var e,r,t,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),u=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+6*(e-n)*r:r<.5?e:r<2/3?n+(e-n)*(2/3-r)*6:n}if(0==o)e=r=t=i;else{var f=i<.5?i*(1+o):i+o-i*o,l=2*i-f;e=s(l,f,u+1/3),r=s(l,f,u),t=s(l,f,u-1/3)}return"rgba("+255*e+","+255*r+","+255*t+","+c+")"}(n):void 0;var e,r}function T(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function _(n,e){return d.fnc(n)?n(e.target,e.id,e.total):n}function B(n,e){return n.getAttribute(e)}function S(n,e,r){if(C([r,"deg","rad","turn"],T(e)))return e;var t=c.CSS[e+r];if(!d.und(t))return t;var a=document.createElement(n.tagName),u=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;u.appendChild(a),a.style.position="absolute",a.style.width=100+r;var o=100/a.offsetWidth;u.removeChild(a);var i=o*parseFloat(e);return c.CSS[e+r]=i,i}function A(n,e,r){if(e in n.style){var t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(t)||"0";return r?S(n,a,r):a}}function F(n,e){return d.dom(n)&&!d.inp(n)&&(!d.nil(B(n,e))||d.svg(n)&&n[e])?"attribute":d.dom(n)&&C(i,e)?"transform":d.dom(n)&&"transform"!==e&&A(n,e)?"css":null!=n[e]?"object":void 0}function j(n){if(d.dom(n)){for(var e,r=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map;e=t.exec(r);)a.set(e[1],e[2]);return a}}function N(n,e,r,t){var a=f(e,"scale")?1:0+function(n){return f(n,"translate")||"perspective"===n?"px":f(n,"rotate")||f(n,"skew")?"deg":void 0}(e),u=j(n).get(e)||a;return r&&(r.transforms.list.set(e,u),r.transforms.last=e),t?S(n,u,t):u}function L(n,e,r,t){switch(F(n,e)){case"transform":return N(n,e,t,r);case"css":return A(n,e,r);case"attribute":return B(n,e);default:return n[e]||0}}function R(n,e){var r=/^(\*=|\+=|-=)/.exec(n);if(!r)return n;var t=T(n)||0,a=parseFloat(e),u=parseFloat(n.replace(r[0],""));switch(r[0][0]){case"+":return a+u+t;case"-":return a-u+t;case"*":return a*u+t}}function $(n,e){if(d.col(n))return E(n);if(/\s/g.test(n))return n;var r=T(n),t=r?n.substr(0,n.length-r.length):n;return e?t+e:t}function q(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function H(n){for(var e,r=n.points,t=0,a=0;a<r.numberOfItems;a++){var u=r.getItem(a);a>0&&(t+=q(e,u)),e=u}return t}function V(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return function(n){return 2*Math.PI*B(n,"r")}(n);case"rect":return function(n){return 2*B(n,"width")+2*B(n,"height")}(n);case"line":return function(n){return q({x:B(n,"x1"),y:B(n,"y1")},{x:B(n,"x2"),y:B(n,"y2")})}(n);case"polyline":return H(n);case"polygon":return function(n){var e=n.points;return H(n)+q(e.getItem(e.numberOfItems-1),e.getItem(0))}(n)}}function W(n,e){var r=e||{},t=r.el||function(n){for(var e=n.parentNode;d.svg(e)&&d.svg(e.parentNode);)e=e.parentNode;return e}(n),a=t.getBoundingClientRect(),u=B(t,"viewBox"),o=a.width,i=a.height,c=r.viewBox||(u?u.split(" "):[0,0,o,i]);return{el:t,viewBox:c,x:c[0]/1,y:c[1]/1,w:o,h:i,vW:c[2],vH:c[3]}}function Z(n,e,r){function t(r){void 0===r&&(r=0);var t=e+r>=1?e+r:0;return n.el.getPointAtLength(t)}var a=W(n.el,n.svg),u=t(),o=t(-1),i=t(1),c=r?1:a.w/a.vW,s=r?1:a.h/a.vH;switch(n.property){case"x":return(u.x-a.x)*c;case"y":return(u.y-a.y)*s;case"angle":return 180*Math.atan2(i.y-o.y,i.x-o.x)/Math.PI}}function Y(n,e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,t=$(d.pth(n)?n.totalLength:n,e)+"";return{original:t,numbers:t.match(r)?t.match(r).map(Number):[0],strings:d.str(n)||e?t.split(r):[]}}function X(n){return M(n?O(d.arr(n)?n.map(k):k(n)):[],(function(n,e,r){return r.indexOf(n)===e}))}function G(n){var e=X(n);return e.map((function(n,r){return{target:n,id:r,total:e.length,transforms:{list:j(n)}}}))}function Q(n,e){var r=P(e);if(/^spring/.test(r.easing)&&(r.duration=h(r.easing)),d.arr(n)){var t=n.length;2===t&&!d.obj(n[0])?n={value:n}:d.fnc(e.duration)||(r.duration=e.duration/t)}var a=d.arr(n)?n:[n];return a.map((function(n,r){var t=d.obj(n)&&!d.pth(n)?n:{value:n};return d.und(t.delay)&&(t.delay=r?0:e.delay),d.und(t.endDelay)&&(t.endDelay=r===a.length-1?e.endDelay:0),t})).map((function(n){return D(n,r)}))}function z(n,e){var r=[],t=e.keyframes;for(var a in t&&(e=D(function(n){for(var e=M(O(n.map((function(n){return Object.keys(n)}))),(function(n){return d.key(n)})).reduce((function(n,e){return n.indexOf(e)<0&&n.push(e),n}),[]),r={},t=function(t){var a=e[t];r[a]=n.map((function(n){var e={};for(var r in n)d.key(r)?r==a&&(e.value=n[r]):e[r]=n[r];return e}))},a=0;a<e.length;a++)t(a);return r}(t),e)),e)d.key(a)&&r.push({name:a,tweens:Q(e[a],n)});return r}function U(n,e){var r;return n.tweens.map((function(t){var a=function(n,e){var r={};for(var t in n){var a=_(n[t],e);d.arr(a)&&1===(a=a.map((function(n){return _(n,e)}))).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(t,e),u=a.value,o=d.arr(u)?u[1]:u,i=T(o),c=L(e.target,n.name,i,e),s=r?r.to.original:c,f=d.arr(u)?u[0]:s,l=T(f)||T(c),p=i||l;return d.und(o)&&(o=s),a.from=Y(f,p),a.to=Y(R(o,f),p),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=w(a.easing,a.duration),a.isPath=d.pth(u),a.isPathTargetInsideSVG=a.isPath&&d.svg(e.target),a.isColor=d.col(a.from.original),a.isColor&&(a.round=1),r=a,a}))}var J={css:function(n,e,r){return n.style[e]=r},attribute:function(n,e,r){return n.setAttribute(e,r)},object:function(n,e,r){return n[e]=r},transform:function(n,e,r,t,a){if(t.list.set(e,r),e===t.last||a){var u="";t.list.forEach((function(n,e){u+=e+"("+n+") "})),n.style.transform=u}}};function K(n,e){G(n).forEach((function(n){for(var r in e){var t=_(e[r],n),a=n.target,u=T(t),o=L(a,r,u,n),i=R($(t,u||T(o)),o),c=F(a,r);J[c](a,r,i,n.transforms,!0)}}))}function nn(n,e){return M(O(n.map((function(n){return e.map((function(e){return function(n,e){var r=F(n.target,e.name);if(r){var t=U(e,n),a=t[t.length-1];return{type:r,property:e.name,animatable:n,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}(n,e)}))}))),(function(n){return!d.und(n)}))}function en(n,e){var r=n.length,t=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,n.map((function(n){return t(n)+n.duration}))):e.duration,a.delay=r?Math.min.apply(Math,n.map((function(n){return t(n)+n.delay}))):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map((function(n){return t(n)+n.duration-n.endDelay}))):e.endDelay,a}var rn=0;var tn=[],an=function(){var n;function e(r){for(var t=tn.length,a=0;a<t;){var u=tn[a];u.paused?(tn.splice(a,1),t--):(u.tick(r),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){on.suspendWhenDocumentHidden&&(un()?n=cancelAnimationFrame(n):(tn.forEach((function(n){return n._onDocumentVisibility()})),an()))})),function(){n||un()&&on.suspendWhenDocumentHidden||!(tn.length>0)||(n=requestAnimationFrame(e))}}();function un(){return!!document&&document.hidden}function on(n){void 0===n&&(n={});var e,r=0,t=0,a=0,i=0,c=null;function f(n){var e=window.Promise&&new Promise((function(n){return c=n}));return n.finished=e,e}var l=function(n){var e=I(u,n),r=I(o,n),t=z(r,n),a=G(n.targets),i=nn(a,t),c=en(i,r),s=rn;return rn++,D(e,{id:s,children:[],animatables:a,animations:i,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}(n);f(l);function d(){var n=l.direction;"alternate"!==n&&(l.direction="normal"!==n?"normal":"reverse"),l.reversed=!l.reversed,e.forEach((function(n){return n.reversed=l.reversed}))}function p(n){return l.reversed?l.duration-n:n}function h(){r=0,t=p(l.currentTime)*(1/on.speed)}function v(n,e){e&&e.seek(n-e.timelineOffset)}function g(n){for(var e=0,r=l.animations,t=r.length;e<t;){var a=r[e],u=a.animatable,o=a.tweens,i=o.length-1,c=o[i];i&&(c=M(o,(function(e){return n<e.end}))[0]||c);for(var f=s(n-c.start-c.delay,0,c.duration)/c.duration,d=isNaN(f)?1:c.easing(f),p=c.to.strings,h=c.round,v=[],g=c.to.numbers.length,m=void 0,y=0;y<g;y++){var b=void 0,w=c.to.numbers[y],x=c.from.numbers[y]||0;b=c.isPath?Z(c.value,d*w,c.isPathTargetInsideSVG):x+d*(w-x),h&&(c.isColor&&y>2||(b=Math.round(b*h)/h)),v.push(b)}var O=p.length;if(O){m=p[0];for(var k=0;k<O;k++){p[k];var C=p[k+1],P=v[k];isNaN(P)||(m+=C?P+C:P+" ")}}else m=v[0];J[a.type](u.target,a.property,m,u.transforms),a.currentValue=m,e++}}function m(n){l[n]&&!l.passThrough&&l[n](l)}function y(n){var u=l.duration,o=l.delay,h=u-l.endDelay,y=p(n);l.progress=s(y/u*100,0,100),l.reversePlayback=y<l.currentTime,e&&function(n){if(l.reversePlayback)for(var r=i;r--;)v(n,e[r]);else for(var t=0;t<i;t++)v(n,e[t])}(y),!l.began&&l.currentTime>0&&(l.began=!0,m("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,m("loopBegin")),y<=o&&0!==l.currentTime&&g(0),(y>=h&&l.currentTime!==u||!u)&&g(u),y>o&&y<h?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,m("changeBegin")),m("change"),g(y)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,m("changeComplete")),l.currentTime=s(y,0,u),l.began&&m("update"),n>=u&&(t=0,l.remaining&&!0!==l.remaining&&l.remaining--,l.remaining?(r=a,m("loopComplete"),l.loopBegan=!1,"alternate"===l.direction&&d()):(l.paused=!0,l.completed||(l.completed=!0,m("loopComplete"),m("complete"),!l.passThrough&&"Promise"in window&&(c(),f(l)))))}return l.reset=function(){var n=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed="reverse"===n,l.remaining=l.loop,e=l.children;for(var r=i=e.length;r--;)l.children[r].reset();(l.reversed&&!0!==l.loop||"alternate"===n&&1===l.loop)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=h,l.set=function(n,e){return K(n,e),l},l.tick=function(n){a=n,r||(r=a),y((a+(t-r))*on.speed)},l.seek=function(n){y(p(n))},l.pause=function(){l.paused=!0,h()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,tn.push(l),h(),an())},l.reverse=function(){d(),l.completed=!l.reversed,h()},l.restart=function(){l.reset(),l.play()},l.remove=function(n){sn(X(n),l)},l.reset(),l.autoplay&&l.play(),l}function cn(n,e){for(var r=e.length;r--;)C(n,e[r].animatable.target)&&e.splice(r,1)}function sn(n,e){var r=e.animations,t=e.children;cn(n,r);for(var a=t.length;a--;){var u=t[a],o=u.animations;cn(n,o),o.length||u.children.length||t.splice(a,1)}r.length||t.length||e.pause()}on.version="3.2.1",on.speed=1,on.suspendWhenDocumentHidden=!0,on.running=tn,on.remove=function(n){for(var e=X(n),r=tn.length;r--;){sn(e,tn[r])}},on.get=L,on.set=K,on.convertPx=S,on.path=function(n,e){var r=d.str(n)?x(n)[0]:n,t=e||100;return function(n){return{property:n,el:r,svg:W(r),totalLength:V(r)*(t/100)}}},on.setDashoffset=function(n){var e=V(n);return n.setAttribute("stroke-dasharray",e),e},on.stagger=function(n,e){void 0===e&&(e={});var r=e.direction||"normal",t=e.easing?w(e.easing):null,a=e.grid,u=e.axis,o=e.from||0,i="first"===o,c="center"===o,s="last"===o,f=d.arr(n),l=f?parseFloat(n[0]):parseFloat(n),p=f?parseFloat(n[1]):0,h=T(f?n[1]:n)||0,v=e.start||0+(f?l:0),g=[],m=0;return function(n,e,d){if(i&&(o=0),c&&(o=(d-1)/2),s&&(o=d-1),!g.length){for(var y=0;y<d;y++){if(a){var b=c?(a[0]-1)/2:o%a[0],w=c?(a[1]-1)/2:Math.floor(o/a[0]),x=b-y%a[0],M=w-Math.floor(y/a[0]),O=Math.sqrt(x*x+M*M);"x"===u&&(O=-x),"y"===u&&(O=-M),g.push(O)}else g.push(Math.abs(o-y));m=Math.max.apply(Math,g)}t&&(g=g.map((function(n){return t(n/m)*m}))),"reverse"===r&&(g=g.map((function(n){return u?n<0?-1*n:-n:Math.abs(m-n)})))}return v+(f?(p-l)/m:l)*(Math.round(100*g[e])/100)+h}},on.timeline=function(n){void 0===n&&(n={});var e=on(n);return e.duration=0,e.add=function(r,t){var a=tn.indexOf(e),u=e.children;function i(n){n.passThrough=!0}a>-1&&tn.splice(a,1);for(var c=0;c<u.length;c++)i(u[c]);var s=D(r,I(o,n));s.targets=s.targets||n.targets;var f=e.duration;s.autoplay=!1,s.direction=e.direction,s.timelineOffset=d.und(t)?f:R(t,f),i(e),e.seek(s.timelineOffset);var l=on(s);i(l),u.push(l);var p=en(u,n);return e.delay=p.delay,e.endDelay=p.endDelay,e.duration=p.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},on.easing=w,on.penner=b,on.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};const fn=on;function ln(){return(ln=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n}).apply(this,arguments)}function dn(n){const e=[];return pn(n,e),e}function pn(n,e){for(let r=0;r<n.length;r++){const t=n[r];Array.isArray(t)?pn(t,e):e.push(t)}}const hn=function(n){const e=(0,a.useRef)([]),r=(0,a.useRef)([]),u=(0,a.useRef)([]),o=(0,a.useRef)(new Set),i=()=>{for(let n of e.current)n.completed&&(e.current=e.current.filter((e=>e!=n)));r.current=r.current.filter((n=>null!=n&&null!=n)),u.current=u.current.filter((n=>n&&null!=n.current))},c=(0,a.useCallback)((()=>{(n=>{i(),r.current.length>0&&fn.remove(r),r.current=[];for(let e of u.current)e.current&&!o.current.has(e.current)&&r.current.push(e.current);const t=ln({},n,{targets:r.current,complete:e=>{n.complete&&n.complete(e),e.animatables.map((n=>o.current.add(n.target))),i()}});delete t.children,e.current.push(fn(t))})(n)}),[n]);(0,a.useEffect)((()=>{c()}),[c]);const s=u.current;let f=Array.isArray(n.children)?n.children:[n.children];return f=dn(f),(0,t.jsx)(a.Fragment,{children:f.map(((e,r)=>(s.push((0,a.createRef)()),(0,t.jsx)(n.component?n.component:"div",Object.assign({ref:s[s.length-1]},{children:e}),`__anime__${r}`))))},void 0)}},11837:(n,e,r)=>{r(37320);var t=r(2784),a=60103;if(60107,"function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),u("react.fragment")}var o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function s(n,e,r){var t,u={},s=null,f=null;for(t in void 0!==r&&(s=""+r),void 0!==e.key&&(s=""+e.key),void 0!==e.ref&&(f=e.ref),e)i.call(e,t)&&!c.hasOwnProperty(t)&&(u[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===u[t]&&(u[t]=e[t]);return{$$typeof:a,type:n,key:s,ref:f,props:u,_owner:o.current}}e.jsx=s},52322:(n,e,r)=>{n.exports=r(11837)}}]);