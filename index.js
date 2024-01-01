// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(e){"use strict";var r=Math.floor;function t(e){return r(e)===e}function n(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&t(e.length)&&e.length>=0&&e.length<=9007199254740991}var i="function"==typeof Object.defineProperty?Object.defineProperty:null,o=Object.defineProperty;function a(e){return"number"==typeof e}function s(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function c(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+s(i):s(i)+e,n&&(e="-"+e)),e}var l=String.prototype.toLowerCase,u=String.prototype.toUpperCase;function p(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!a(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=c(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=c(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(e){return"string"==typeof e}var g=Math.abs,d=String.prototype.toLowerCase,h=String.prototype.toUpperCase,m=String.prototype.replace,b=/e\+(\d)$/,v=/e-(\d)$/,y=/^(\d+)$/,_=/^(\d+)e/,w=/\.0$/,S=/\.0*e/,E=/(\..*[^0])0*e/;function k(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":g(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=m.call(t,E,"$1e"),t=m.call(t,S,"e"),t=m.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=m.call(t,b,"e+0$1"),t=m.call(t,v,"e-0$1"),e.alternate&&(t=m.call(t,y,"$1."),t=m.call(t,_,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):d.call(t)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function x(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var T=String.fromCharCode,I=isNaN,O=Array.isArray;function V(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function F(e){var r,t,n,i,o,a,s,l,u;if(!O(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",s=1,l=0;l<e.length;l++)if(f(n=e[l]))a+=n;else{if(r=void 0!==n.precision,!(n=V(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,I(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=p(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!I(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(o)?String(n.arg):T(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=c(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=x(n.arg,n.width,n.padRight)),a+=n.arg||"",s+=1}return a}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function P(e){var r,t,n,i;for(t=[],i=0,n=$.exec(e);n;)(r=e.slice(i,$.lastIndex-n[0].length)).length&&t.push(r),t.push(N(n)),i=$.lastIndex,n=$.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){return"string"==typeof e}function C(e){var r,t,n;if(!A(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=P(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var R=Object.prototype,G=R.toString,M=R.__defineGetter__,Z=R.__defineSetter__,W=R.__lookupGetter__,q=R.__lookupSetter__,L=function(){try{return i({},"x",{}),!0}catch(e){return!1}}()?o:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===G.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===G.call(t))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(W.call(e,r)||q.call(e,r)?(n=e.__proto__,e.__proto__=R,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(e,r,t.get),a&&Z&&Z.call(e,r,t.set),e};function z(e,r,t){L(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function U(e){return"number"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Y(){return X&&"symbol"==typeof Symbol.toStringTag}var B=Object.prototype.toString,D=Object.prototype.hasOwnProperty,H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"",K=Y()?function(e){var r,t,n,i,o;if(null==e)return B.call(e);t=e[J],o=J,r=null!=(i=e)&&D.call(i,o);try{e[J]=void 0}catch(r){return B.call(e)}return n=B.call(e),r?e[J]=t:delete e[J],n}:function(e){return B.call(e)},Q=Number,ee=Q.prototype.toString,re=Y();function te(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Number]"===K(e)))}function ne(e){return U(e)||te(e)}z(ne,"isPrimitive",U),z(ne,"isObject",te);var ie=Number.POSITIVE_INFINITY,oe=Q.NEGATIVE_INFINITY;function ae(e){return e<ie&&e>oe&&t(e)}function se(e){return U(e)&&ae(e)}function ce(e){return te(e)&&ae(e.valueOf())}function le(e){return se(e)||ce(e)}function ue(e){return"string"==typeof e}z(le,"isPrimitive",se),z(le,"isObject",ce);var pe=String.prototype.valueOf,fe=Y();function ge(e){return"object"==typeof e&&(e instanceof String||(fe?function(e){try{return pe.call(e),!0}catch(e){return!1}}(e):"[object String]"===K(e)))}function de(e){return ue(e)||ge(e)}function he(e){return e!=e}function me(e){return U(e)&&he(e)}function be(e){return te(e)&&he(e.valueOf())}function ve(e){return me(e)||be(e)}z(de,"isPrimitive",ue),z(de,"isObject",ge),z(ve,"isPrimitive",me),z(ve,"isObject",be);var ye=e.builtinModules||["assert","async_hooks","buffer","child_process","cluster","console","constants","crypto","dgram","dns","domain","events","fs","http","http2","https","_http_agent","_http_client","_http_common","_http_incoming","_http_outgoing","_http_server","inspector","module","net","os","path","perf_hooks","process","punycode","querystring","readline","repl","stream","_stream_readable","_stream_writable","_stream_duplex","_stream_transform","_stream_passthrough","_stream_wrap","string_decoder","sys","timers","tls","_tls_common","_tls_legacy","_tls_wrap","tty","url","util","v8","vm","zlib","v8/tools/splaytree","v8/tools/codemap","v8/tools/consarray","v8/tools/csvparser","v8/tools/profile","v8/tools/profile_view","v8/tools/logreader","v8/tools/tickprocessor","v8/tools/SourceMap","v8/tools/tickprocessor-driver","node-inspect/lib/_inspect","node-inspect/lib/internal/inspect_client","node-inspect/lib/internal/inspect_repl"];return function(e){return!!ue(e)&&function(e,r,t){var i,o,a;if(!n(e)&&!ue(e))throw new TypeError(C("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!se(t))throw new TypeError(C("invalid argument. Third argument must be an integer. Value: `%s`.",t));(o=t)<0&&(o=0)}else o=0;if(ue(e)){if(!ue(r))throw new TypeError(C("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,o)}if(i=e.length,me(r)){for(a=o;a<i;a++)if(me(e[a]))return!0;return!1}for(a=o;a<i;a++)if(e[a]===r)return!0;return!1}(ye,e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("module")):"function"==typeof define&&define.amd?define(["module"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).isNodeBuiltin=r(e.require$$0);
//# sourceMappingURL=index.js.map
