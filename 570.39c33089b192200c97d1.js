/*! For license information please see 570.39c33089b192200c97d1.js.LICENSE.txt */
(self.webpackChunkroot=self.webpackChunkroot||[]).push([[570],{258:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.createRemoteComponent=void 0;const c=r(3437),a=i(r(4824));t.createRemoteComponent=(e,t,n)=>{const o=a.lazy(async()=>{await r.I("default");const o=r.S.default,i=window["microfrontend_"+e];await i.init(o);const c=(await i.get(t))();return{default:n?c[n]:c}});return t=>c.jsx(a.Suspense,Object.assign({fallback:"Loading Remote Component"},{children:c.jsx("div",Object.assign({className:"remote-component "+e},{children:c.jsx(o,Object.assign({},t),void 0)}),void 0)}),void 0)}},4966:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.history=t.initHistory=void 0,t.initHistory=e=>{window.microfrontend_history=e},t.history=()=>window.microfrontend_history},2570:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initHistory=t.history=t.createRemoteComponent=void 0;const n=r(258);Object.defineProperty(t,"createRemoteComponent",{enumerable:!0,get:function(){return n.createRemoteComponent}});const o=r(4966);Object.defineProperty(t,"history",{enumerable:!0,get:function(){return o.history}}),Object.defineProperty(t,"initHistory",{enumerable:!0,get:function(){return o.initHistory}})},99:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var c,a,s=o(e),u=1;u<arguments.length;u++){for(var f in c=Object(arguments[u]))r.call(c,f)&&(s[f]=c[f]);if(t){a=t(c);for(var l=0;l<a.length;l++)n.call(c,a[l])&&(s[a[l]]=c[a[l]])}}return s}},3620:(e,t,r)=>{"use strict";r(99);var n=r(4824),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,f=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(f=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:f,props:i,_owner:c.current}}t.jsx=u,t.jsxs=u},3437:(e,t,r)=>{"use strict";e.exports=r(3620)}}]);
//# sourceMappingURL=570.39c33089b192200c97d1.js.map