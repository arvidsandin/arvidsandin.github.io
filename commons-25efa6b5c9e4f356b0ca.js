(self.webpackChunkarvid_sandin=self.webpackChunkarvid_sandin||[]).push([[351],{9662:function(t,n,e){var r=e(7854),o=e(614),i=e(6330),u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},9670:function(t,n,e){var r=e(7854),o=e(111),i=r.String,u=r.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},1318:function(t,n,e){var r=e(5656),o=e(1400),i=e(6244),u=function(t){return function(n,e,u){var a,c=r(n),f=i(c),s=o(u,f);if(t&&e!=e){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},4326:function(t,n,e){var r=e(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,n,e){var r=e(2597),o=e(3887),i=e(1236),u=e(3070);t.exports=function(t,n,e){for(var a=o(n),c=u.f,f=i.f,s=0;s<a.length;s++){var l=a[s];r(t,l)||e&&r(e,l)||c(t,l,f(n,l))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),u=e(8113),a=i.process,c=i.Deno,f=a&&a.versions||c&&c.version,s=f&&f.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),u=e(1320),a=e(3505),c=e(9920),f=e(4705);t.exports=function(t,n){var e,s,l,p,v,d=t.target,m=t.global,b=t.stat;if(e=m?r:b?r[d]||a(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!f(m?s:d+(b?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,s,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},4374:function(t,n,e){var r=e(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,n,e){var r=e(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,n,e){var r=e(9781),o=e(2597),i=Function.prototype,u=r&&Object.getOwnPropertyDescriptor,a=o(i,"name"),c=a&&"something"===function(){}.name,f=a&&(!r||r&&u(i,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:f}},1702:function(t,n,e){var r=e(4374),o=Function.prototype,i=o.bind,u=o.call,a=r&&i.bind(u,u);t.exports=r?function(t){return t&&a(t)}:function(t){return t&&function(){return u.apply(t,arguments)}}},5005:function(t,n,e){var r=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},8173:function(t,n,e){var r=e(9662);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:function(t,n,e){var r=e(1702),o=e(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7854),o=e(1702),i=e(7293),u=e(4326),a=r.Object,c=o("".split);t.exports=i((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"==u(t)?c(t,""):a(t)}:a},2788:function(t,n,e){var r=e(1702),o=e(614),i=e(5465),u=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return u(t)}),t.exports=i.inspectSource},9909:function(t,n,e){var r,o,i,u=e(8536),a=e(7854),c=e(1702),f=e(111),s=e(8880),l=e(2597),p=e(5465),v=e(6200),d=e(3501),m="Object already initialized",b=a.TypeError,g=a.WeakMap;if(u||p.state){var y=p.state||(p.state=new g),h=c(y.get),x=c(y.has),S=c(y.set);r=function(t,n){if(x(y,t))throw new b(m);return n.facade=t,S(y,t,n),n},o=function(t){return h(y,t)||{}},i=function(t){return x(y,t)}}else{var w=v("state");d[w]=!0,r=function(t,n){if(l(t,w))throw new b(m);return n.facade=t,s(t,w,n),n},o=function(t){return l(t,w)?t[w]:{}},i=function(t){return l(t,w)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw b("Incompatible receiver, "+t+" required");return e}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,n,e){var r=e(7293),o=e(614),i=/#|\.prototype\./,u=function(t,n){var e=c[a(t)];return e==s||e!=f&&(o(n)?r(n):!!n)},a=u.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=u.data={},f=u.NATIVE="N",s=u.POLYFILL="P";t.exports=u},111:function(t,n,e){var r=e(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(7854),o=e(5005),i=e(614),u=e(7976),a=e(3307),c=r.Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,c(t))}},6244:function(t,n,e){var r=e(7466);t.exports=function(t){return r(t.length)}},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(614),i=e(2788),u=r.WeakMap;t.exports=o(u)&&/native code/.test(i(u))},3070:function(t,n,e){var r=e(7854),o=e(9781),i=e(4664),u=e(3353),a=e(9670),c=e(4948),f=r.TypeError,s=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p="enumerable",v="configurable",d="writable";n.f=o?u?function(t,n,e){if(a(t),n=c(n),a(e),"function"==typeof t&&"prototype"===n&&"value"in e&&d in e&&!e.writable){var r=l(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:v in e?e.configurable:r.configurable,enumerable:p in e?e.enumerable:r.enumerable,writable:!1})}return s(t,n,e)}:s:function(t,n,e){if(a(t),n=c(n),a(e),i)try{return s(t,n,e)}catch(r){}if("get"in e||"set"in e)throw f("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(6916),i=e(5296),u=e(9114),a=e(5656),c=e(4948),f=e(2597),s=e(4664),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=a(t),n=c(n),s)try{return l(t,n)}catch(e){}if(f(t,n))return u(!o(i.f,t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},7976:function(t,n,e){var r=e(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,n,e){var r=e(1702),o=e(2597),i=e(5656),u=e(1318).indexOf,a=e(3501),c=r([].push);t.exports=function(t,n){var e,r=i(t),f=0,s=[];for(e in r)!o(a,e)&&o(r,e)&&c(s,e);for(;n.length>f;)o(r,e=n[f++])&&(~u(s,e)||c(s,e));return s}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},2140:function(t,n,e){var r=e(7854),o=e(6916),i=e(614),u=e(111),a=r.TypeError;t.exports=function(t,n){var e,r;if("string"===n&&i(e=t.toString)&&!u(r=o(e,t)))return r;if(i(e=t.valueOf)&&!u(r=o(e,t)))return r;if("string"!==n&&i(e=t.toString)&&!u(r=o(e,t)))return r;throw a("Can't convert object to primitive value")}},3887:function(t,n,e){var r=e(5005),o=e(1702),i=e(8006),u=e(5181),a=e(9670),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(a(t)),e=u.f;return e?c(n,e(t)):n}},1320:function(t,n,e){var r=e(7854),o=e(614),i=e(2597),u=e(8880),a=e(3505),c=e(2788),f=e(9909),s=e(6530).CONFIGURABLE,l=f.get,p=f.enforce,v=String(String).split("String");(t.exports=function(t,n,e,c){var f,l=!!c&&!!c.unsafe,d=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,b=c&&void 0!==c.name?c.name:n;o(e)&&("Symbol("===String(b).slice(0,7)&&(b="["+String(b).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||s&&e.name!==b)&&u(e,"name",b),(f=p(e)).source||(f.source=v.join("string"==typeof b?b:""))),t!==r?(l?!m&&t[n]&&(d=!0):delete t[n],d?t[n]=e:u(t,n,e)):d?t[n]=e:a(n,e)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||c(this)}))},4488:function(t,n,e){var r=e(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",u=r[i]||o(i,{});t.exports=u},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.20.3",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.20.3/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,n,e){var r=e(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?e:n)(r)}},7466:function(t,n,e){var r=e(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(7854),o=e(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,n,e){var r=e(7854),o=e(6916),i=e(111),u=e(2190),a=e(8173),c=e(2140),f=e(5112),s=r.TypeError,l=f("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var e,r=a(t,l);if(r){if(void 0===n&&(n="default"),e=o(r,t,n),!i(e)||u(e))return e;throw s("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},6330:function(t,n,e){var r=e(7854).String;t.exports=function(t){try{return r(t)}catch(n){return"Object"}}},9711:function(t,n,e){var r=e(1702),o=0,i=Math.random(),u=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+u(++o+i,36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,e){var r=e(9781),o=e(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(2597),u=e(9711),a=e(133),c=e(3307),f=o("wks"),s=r.Symbol,l=s&&s.for,p=c?s:s&&s.withoutSetter||u;t.exports=function(t){if(!i(f,t)||!a&&"string"!=typeof f[t]){var n="Symbol."+t;a&&i(s,t)?f[t]=s[t]:f[t]=c&&l?l(n):p(n)}return f[t]}},5837:function(t,n,e){e(2109)({global:!0},{globalThis:e(7854)})},5743:function(t,n,e){e(5837)},6484:function(t,n,e){"use strict";e.d(n,{Z:function(){return o}});var r=e(7294),o=function(){return r.createElement("div",{className:"footer-module--footer--ov5Kw"},r.createElement("p",{className:"footer-module--footer-text--QHuHp"}," Made by: ",r.createElement("a",{href:"https://github.com/arvidsandin",target:"_blank",rel:"noopener noreferrer"},"arvidsandin")))}},2149:function(t,n,e){"use strict";e.d(n,{Z:function(){return p}});var r=e(7294),o=function(t){return r.createElement("div",{className:"navbaritem-module--navbar-item--rL173 darkenOnHover"},r.createElement("a",{className:"navbaritem-module--link--7klbu",href:t.link,id:t.id},t.text))};function i(t,n,o,i){void 0===o&&(o=e.g),void 0===i&&(i={});var u=(0,r.useRef)(),a=i.capture,c=i.passive,f=i.once;(0,r.useEffect)((function(){u.current=n}),[n]),(0,r.useEffect)((function(){if(o&&o.addEventListener){var n=function(t){return u.current(t)},e={capture:a,passive:c,once:f};return o.addEventListener(t,n,e),function(){o.removeEventListener(t,n,e)}}}),[t,o,a,c,f])}e(5743);var u={},a=function(t,n,e){return u[t]||(u[t]={callbacks:[],value:e}),u[t].callbacks.push(n),{deregister:function(){var e=u[t].callbacks,r=e.indexOf(n);r>-1&&e.splice(r,1)},emit:function(e){u[t].value!==e&&(u[t].value=e,u[t].callbacks.forEach((function(t){n!==t&&t(e)})))}}};function c(t,n){if(void 0===n&&(n=void 0!==e.g&&e.g.localStorage?e.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),n){var o=(u=n,{get:function(t,n){var e=u.getItem(t);return null==e?"function"==typeof n?n():n:JSON.parse(e)},set:function(t,n){u.setItem(t,JSON.stringify(n))}});return function(n){return function(t,n,e){var o=e.get,u=e.set,c=(0,r.useRef)(null),f=(0,r.useState)((function(){return o(n,t)})),s=f[0],l=f[1];i("storage",(function(t){if(t.key===n){var e=JSON.parse(t.newValue);s!==e&&l(e)}})),(0,r.useEffect)((function(){return c.current=a(n,l,t),function(){c.current.deregister()}}),[t,n]);var p=(0,r.useCallback)((function(t){var e="function"==typeof t?t(s):t;u(n,e),l(e),c.current.emit(t)}),[s,u,n]);return[s,p]}(n,t,o)}}var u;return r.useState}var f=function(){},s={classList:{add:f,remove:f}},l=function(t,n,o){void 0===o&&(o=e.g);var i=t?c(t,n):r.useState,u=o.matchMedia?o.matchMedia("(prefers-color-scheme: dark)"):{},a={addEventListener:function(t,n){return u.addListener&&u.addListener(n)},removeEventListener:function(t,n){return u.removeListener&&u.removeListener(n)}},f="(prefers-color-scheme: dark)"===u.media,l=o.document&&o.document.body||s;return{usePersistedDarkModeState:i,getDefaultOnChange:function(t,n,e){return void 0===t&&(t=l),void 0===n&&(n="dark-mode"),void 0===e&&(e="light-mode"),function(r){t.classList.add(r?n:e),t.classList.remove(r?e:n)}},mediaQueryEventTarget:a,getInitialValue:function(t){return f?u.matches:t}}};var p=function(){var t=function(t,n){void 0===t&&(t=!1),void 0===n&&(n={});var e=n.element,o=n.classNameDark,u=n.classNameLight,a=n.onChange,c=n.storageKey;void 0===c&&(c="darkMode");var f=n.storageProvider,s=n.global,p=(0,r.useMemo)((function(){return l(c,f,s)}),[c,f,s]),v=p.getDefaultOnChange,d=p.mediaQueryEventTarget,m=(0,p.usePersistedDarkModeState)((0,p.getInitialValue)(t)),b=m[0],g=m[1],y=(0,r.useMemo)((function(){return a||v(e,o,u)}),[a,e,o,u,v]);return(0,r.useEffect)((function(){y(b)}),[y,b]),i("change",(function(t){return g(t.matches)}),d),{value:b,enable:(0,r.useCallback)((function(){return g(!0)}),[g]),disable:(0,r.useCallback)((function(){return g(!1)}),[g]),toggle:(0,r.useCallback)((function(){return g((function(t){return!t}))}),[g])}}(!1);return r.createElement("div",{className:"navigationbar-module--navigation-bar--iArvK"},r.createElement(o,{link:"/",id:"homelink",text:"Home"}),r.createElement(o,{link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),r.createElement(o,{link:"/custom-top-sort",id:"custom-top-sortLink",text:"Custom top sort"}),r.createElement(o,{link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}),r.createElement(o,{link:"/button",id:"buttonLink",text:"Button"}),r.createElement("button",{type:"button",className:"navigationbar-module--button--cpuWf unselectable",onClick:t.toggle},"☀/☾"))}}}]);
//# sourceMappingURL=commons-25efa6b5c9e4f356b0ca.js.map