// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";function t(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var e=t(Object.freeze({__proto__:null,default:{}})),r=Math.floor;function n(t){return r(t)===t}function o(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&n(t.length)&&t.length>=0&&t.length<=9007199254740991}var i="function"==typeof Object.defineProperty?Object.defineProperty:null,u=Object.defineProperty,l=Object.prototype,c=l.toString,a=l.__defineGetter__,s=l.__defineSetter__,f=l.__lookupGetter__,p=l.__lookupSetter__,_=function(){try{return i({},"x",{}),!0}catch(t){return!1}}()?u:function(t,e,r){var n,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===c.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===c.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(f.call(t,e)||p.call(t,e)?(n=t.__proto__,t.__proto__=l,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),i="get"in r,u="set"in r,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&a&&a.call(t,e,r.get),u&&s&&s.call(t,e,r.set),t};function y(t,e,r){_(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function b(t){return"number"==typeof t}var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return m&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString,g=Object.prototype.hasOwnProperty,h="function"==typeof Symbol?Symbol.toStringTag:"",j=d()?function(t){var e,r,n,o,i;if(null==t)return v.call(t);r=t[h],i=h,e=null!=(o=t)&&g.call(o,i);try{t[h]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[h]=r:delete t[h],n}:function(t){return v.call(t)},w=Number,O=w.prototype.toString,S=d();function T(t){return"object"==typeof t&&(t instanceof w||(S?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function P(t){return b(t)||T(t)}y(P,"isPrimitive",b),y(P,"isObject",T);var E=Number.POSITIVE_INFINITY,I=w.NEGATIVE_INFINITY;function N(t){return t<E&&t>I&&n(t)}function k(t){return b(t)&&N(t)}function V(t){return T(t)&&N(t.valueOf())}function x(t){return k(t)||V(t)}function M(t){return"string"==typeof t}y(x,"isPrimitive",k),y(x,"isObject",V);var F=String.prototype.valueOf,A=d();function G(t){return"object"==typeof t&&(t instanceof String||(A?function(t){try{return F.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function z(t){return M(t)||G(t)}function Y(t){return t!=t}function q(t){return b(t)&&Y(t)}function B(t){return T(t)&&Y(t.valueOf())}function C(t){return q(t)||B(t)}y(z,"isPrimitive",M),y(z,"isObject",G),y(C,"isPrimitive",q),y(C,"isObject",B);var D=e.builtinModules||["assert","async_hooks","buffer","child_process","cluster","console","constants","crypto","dgram","dns","domain","events","fs","http","http2","https","_http_agent","_http_client","_http_common","_http_incoming","_http_outgoing","_http_server","inspector","module","net","os","path","perf_hooks","process","punycode","querystring","readline","repl","stream","_stream_readable","_stream_writable","_stream_duplex","_stream_transform","_stream_passthrough","_stream_wrap","string_decoder","sys","timers","tls","_tls_common","_tls_legacy","_tls_wrap","tty","url","util","v8","vm","zlib","v8/tools/splaytree","v8/tools/codemap","v8/tools/consarray","v8/tools/csvparser","v8/tools/profile","v8/tools/profile_view","v8/tools/logreader","v8/tools/tickprocessor","v8/tools/SourceMap","v8/tools/tickprocessor-driver","node-inspect/lib/_inspect","node-inspect/lib/internal/inspect_client","node-inspect/lib/internal/inspect_repl"];return function(t){return!!M(t)&&function(t,e,r){var n,i,u;if(!o(t)&&!M(t))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+t+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!k(r))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+r+"`.");(i=r)<0&&(i=0)}else i=0;if(M(t)){if(!M(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==t.indexOf(e,i)}if(n=t.length,q(e)){for(u=i;u<n;u++)if(q(t[u]))return!0;return!1}for(u=i;u<n;u++)if(t[u]===e)return!0;return!1}(D,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isNodeBuiltin=e();
//# sourceMappingURL=browser.js.map
