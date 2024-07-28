// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(e){if(e.__esModule)return e;var r=e.default;if("function"==typeof r){var t=function e(){return this instanceof e?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};t.prototype=r.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var r=e(Object.freeze({__proto__:null,default:{}})),t=Math.floor;function n(e){return t(e)===e}var i=9007199254740991;var o="function"==typeof Object.defineProperty?Object.defineProperty:null;var a=Object.defineProperty;function s(e){return"number"==typeof e}function c(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function l(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+c(i):c(i)+e,n&&(e="-"+e)),e}var u=String.prototype.toLowerCase,p=String.prototype.toUpperCase;function f(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!s(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=l(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=l(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===p.call(e.specifier)?p.call(t):u.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var g=Math.abs,d=String.prototype.toLowerCase,h=String.prototype.toUpperCase,v=String.prototype.replace,b=/e\+(\d)$/,y=/e-(\d)$/,m=/^(\d+)$/,_=/^(\d+)e/,w=/\.0$/,S=/\.0*e/,j=/(\..*[^0])0*e/;function E(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!s(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":g(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=v.call(t,j,"$1e"),t=v.call(t,S,"e"),t=v.call(t,w,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=v.call(t,b,"e+0$1"),t=v.call(t,y,"e-0$1"),e.alternate&&(t=v.call(t,m,"$1."),t=v.call(t,_,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===h.call(e.specifier)?h.call(t):d.call(t)}function k(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var O=String.fromCharCode,x=Array.isArray;function T(e){return e!=e}function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function V(e){var r,t,n,i,o,a,s,c,u,p,g,d,h;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",s=1,c=0;c<e.length;c++)if(n=e[c],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=I(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,T(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,T(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!T(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=T(o)?String(n.arg):O(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=E(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=l(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-p.length)<0?p:p=d?p+k(h):k(h)+p)),a+=n.arg||"",s+=1}return a}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,t,n,i;for(t=[],i=0,n=P.exec(e);n;)(r=e.slice(i,P.lastIndex-n[0].length)).length&&t.push(r),t.push(F(n)),i=P.lastIndex,n=P.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function A(e){var r,t;if("string"!=typeof e)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[$(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return V.apply(null,r)}var N=Object.prototype,C=N.toString,M=N.__defineGetter__,R=N.__defineSetter__,G=N.__lookupGetter__,Z=N.__lookupSetter__;var W=function(){try{return o({},"x",{}),!0}catch(e){return!1}}()?a:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===C.call(e))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(G.call(e,r)||Z.call(e,r)?(n=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(e,r,t.get),a&&R&&R.call(e,r,t.set),e};function z(e,r,t){W(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function L(e){return"number"==typeof e}var U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function X(){return U&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var D="function"==typeof Symbol?Symbol:void 0,B="function"==typeof D?D.toStringTag:"";var H=X()?function(e){var r,t,n,i,o;if(null==e)return Y.call(e);t=e[B],o=B,r=null!=(i=e)&&q.call(i,o);try{e[B]=void 0}catch(r){return Y.call(e)}return n=Y.call(e),r?e[B]=t:delete e[B],n}:function(e){return Y.call(e)},J=Number,K=J.prototype.toString;var Q=X();function ee(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Number]"===H(e)))}function re(e){return L(e)||ee(e)}z(re,"isPrimitive",L),z(re,"isObject",ee);var te=Number.POSITIVE_INFINITY,ne=J.NEGATIVE_INFINITY;function ie(e){return e<te&&e>ne&&n(e)}function oe(e){return L(e)&&ie(e)}function ae(e){return ee(e)&&ie(e.valueOf())}function se(e){return oe(e)||ae(e)}function ce(e){return"string"==typeof e}z(se,"isPrimitive",oe),z(se,"isObject",ae);var le=String.prototype.valueOf;var ue=X();function pe(e){return"object"==typeof e&&(e instanceof String||(ue?function(e){try{return le.call(e),!0}catch(e){return!1}}(e):"[object String]"===H(e)))}function fe(e){return ce(e)||pe(e)}function ge(e){return e!=e}function de(e){return L(e)&&ge(e)}function he(e){return ee(e)&&ge(e.valueOf())}function ve(e){return de(e)||he(e)}function be(e,r,t){var o,a,s,c;if(!(c=e,"object"==typeof c&&null!==c&&"number"==typeof c.length&&n(c.length)&&c.length>=0&&c.length<=i||ce(e)))throw new TypeError(A("invalid argument. First argument must be array-like. Value: `%s`.",e));if(arguments.length<2)throw new Error("insufficient arguments. Must provide a search value.");if(arguments.length>2){if(!oe(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));(a=t)<0&&(a=0)}else a=0;if(ce(e)){if(!ce(r))throw new TypeError(A("invalid argument. Second argument must be a string. Value: `%s`.",r));return-1!==e.indexOf(r,a)}if(o=e.length,de(r)){for(s=a;s<o;s++)if(de(e[s]))return!0;return!1}for(s=a;s<o;s++)if(e[s]===r)return!0;return!1}z(fe,"isPrimitive",ce),z(fe,"isObject",pe),z(ve,"isPrimitive",de),z(ve,"isObject",he);var ye=r.builtinModules||["assert","async_hooks","buffer","child_process","cluster","console","constants","crypto","dgram","dns","domain","events","fs","http","http2","https","_http_agent","_http_client","_http_common","_http_incoming","_http_outgoing","_http_server","inspector","module","net","os","path","perf_hooks","process","punycode","querystring","readline","repl","stream","_stream_readable","_stream_writable","_stream_duplex","_stream_transform","_stream_passthrough","_stream_wrap","string_decoder","sys","timers","tls","_tls_common","_tls_legacy","_tls_wrap","tty","url","util","v8","vm","zlib","v8/tools/splaytree","v8/tools/codemap","v8/tools/consarray","v8/tools/csvparser","v8/tools/profile","v8/tools/profile_view","v8/tools/logreader","v8/tools/tickprocessor","v8/tools/SourceMap","v8/tools/tickprocessor-driver","node-inspect/lib/_inspect","node-inspect/lib/internal/inspect_client","node-inspect/lib/internal/inspect_repl"];function me(e){return!!ce(e)&&be(ye,e)}export{me as default};
//# sourceMappingURL=mod.js.map
