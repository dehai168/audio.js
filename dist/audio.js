!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.audiojs=void 0;var n=r(1),i={},o=new n.Media;i.isSupported=o.isSupported(),i.userMedia=o.promiseStream(),Object.defineProperty(i,"version",{enumerable:!0,get:function(){return"1.0.1"}}),t.audiojs=i},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.Media=function(){function e(){n(this,e);var t=function(e){var t=navigator.getUserMedia||navigator.webketGetUserMedia||navigator.mozGetUserMedia;return t?new Promise(function(r,n){t.call(navigator,e,r,n)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))};void 0===navigator.mediaDevices&&(navigator.mediaDevices={}),void 0===navigator.mediaDevices.getUserMedia&&(navigator.mediaDevices.getUserMedia=t),this._constraints={audio:!0,video:!1}}return i(e,[{key:"isSupported",value:function(){return!(void 0===navigator.mediaDevices.getUserMedia)}},{key:"promiseStream",value:function(){var e=this;return new Promise(function(t,r){navigator.mediaDevices.getUserMedia(e._constraints).then(function(e){t(e)}).catch(function(e){r(e)})})}},{key:"userMedia",get:function(){return navigator.mediaDevices.getUserMedia}}]),e}()}])});