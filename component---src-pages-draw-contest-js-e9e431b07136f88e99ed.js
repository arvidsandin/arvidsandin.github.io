(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"094J":function(e,t,n){"use strict";(function(e){n("j+VE");var a=n("q1tI"),r=n("puqk"),o={},c=function(e,t,n){return o[e]||(o[e]={callbacks:[],value:n}),o[e].callbacks.push(t),{deregister:function(){var n=o[e].callbacks,a=n.indexOf(t);a>-1&&n.splice(a,1)},emit:function(n){o[e].value!==n&&(o[e].value=n,o[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};t.a=function(t,n){if(void 0===n&&(n=void 0!==e&&e.localStorage?e.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),n){var o=(i=n,{get:function(e,t){var n=i.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){i.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,n){var o=n.get,i=n.set,u=Object(a.useRef)(null),l=Object(a.useState)((function(){return o(t,e)})),s=l[0],d=l[1];Object(r.a)("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);s!==n&&d(n)}})),Object(a.useEffect)((function(){return u.current=c(t,d,e),function(){u.current.deregister()}}),[e,t]);var f=Object(a.useCallback)((function(e){var n="function"==typeof e?e(s):e;i(t,n),d(n),u.current.emit(e)}),[s,i,t]);return[s,f]}(e,t,o)}}var i;return a.useState}}).call(this,n("yLpj"))},IgVs:function(e,t,n){"use strict";var a=n("q1tI"),r=n("nBEs"),o=function(e){return a.createElement("div",{className:r.navbarItem+" darkenOnHover"},a.createElement("a",{className:r.link,href:e.link,id:e.id},e.text))},c=n("g+62"),i=n("yQAd");t.a=function(){var e=Object(c.a)(!1);return a.createElement("div",{className:i.navigationBar},a.createElement(o,{link:"/",id:"homelink",text:"Home"}),a.createElement(o,{link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),a.createElement(o,{link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}),a.createElement(o,{link:"/button",id:"buttonLink",text:"Button"}),a.createElement("button",{type:"button",className:i.button+" unselectable",onClick:e.toggle},"☀/☾"))}},UNbL:function(e,t,n){e.exports={footer:"footer-module--footer--2r2aa",footerText:"footer-module--footer-text--YSA30"}},VQ3a:function(e,t,n){e.exports={sidebar:"sidebar-module--sidebar--2ZGHi"}},"W/9C":function(e,t,n){"use strict";var a=n("q1tI"),r=n("UNbL");t.a=function(){return a.createElement("div",{className:r.footer},a.createElement("p",{className:r.footerText}," Made by: ",a.createElement("a",{href:"https://github.com/arvidsandin"},"arvidsandin")))}},Xj0o:function(e,t,n){"use strict";var a=n("q1tI"),r=n("VQ3a"),o=function(e){var t=e.children;return a.createElement("div",{className:r.sidebar},t)},c=n("jpuQ"),i=function(e){var t=e.children;return a.createElement("div",{className:c.mainContent},t)},u=n("YgPA");t.a=function(e){var t=e.header,n=e.content;return a.createElement("div",{className:u.wrapper},a.createElement(o,{className:u.wrapperItem}),a.createElement(i,{className:u.wrapperItem,id:"mainContent"},a.createElement("h2",null,t),a.createElement("p",null,n)),a.createElement(o,{className:u.wrapperItem}))}},YgPA:function(e,t,n){e.exports={wrapper:"wrapper-module--wrapper--1BWmH",wrapperItem:"wrapper-module--wrapper-item--1ATr3"}},bFeb:function(e,t,n){n("I+eb")({global:!0},{globalThis:n("2oRo")})},"g+62":function(e,t,n){"use strict";(function(e){var a=n("puqk"),r=n("q1tI"),o=n("094J"),c=function(){},i={classList:{add:c,remove:c}},u=function(t,n,a){void 0===a&&(a=e);var c=t?Object(o.a)(t,n):r.useState,u=a.matchMedia?a.matchMedia("(prefers-color-scheme: dark)"):{},l={addEventListener:function(e,t){return u.addListener&&u.addListener(t)},removeEventListener:function(e,t){return u.removeListener&&u.removeListener(t)}},s="(prefers-color-scheme: dark)"===u.media,d=a.document&&a.document.body||i;return{usePersistedDarkModeState:c,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=d),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(a){e.classList.add(a?t:n),e.classList.remove(a?n:t)}},mediaQueryEventTarget:l,getInitialValue:function(e){return s?u.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,o=t.classNameDark,c=t.classNameLight,i=t.onChange,l=t.storageKey;void 0===l&&(l="darkMode");var s=t.storageProvider,d=t.global,f=Object(r.useMemo)((function(){return u(l,s,d)}),[l,s,d]),m=f.getDefaultOnChange,v=f.mediaQueryEventTarget,b=(0,f.usePersistedDarkModeState)((0,f.getInitialValue)(e)),p=b[0],g=b[1],h=Object(r.useMemo)((function(){return i||m(n,o,c)}),[i,n,o,c,m]);return Object(r.useEffect)((function(){h(p)}),[h,p]),Object(a.a)("change",(function(e){return g(e.matches)}),v),{value:p,enable:Object(r.useCallback)((function(){return g(!0)}),[g]),disable:Object(r.useCallback)((function(){return g(!1)}),[g]),toggle:Object(r.useCallback)((function(){return g((function(e){return!e}))}),[g])}}}).call(this,n("yLpj"))},"j+VE":function(e,t,n){n("bFeb")},jpuQ:function(e,t,n){e.exports={mainContent:"maincontent-module--main-content--_b3qD"}},nBEs:function(e,t,n){e.exports={navbarItem:"navbaritem-module--navbar-item--17jKT",link:"navbaritem-module--link--IyqiF"}},o0a9:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n("IgVs"),o=n("Xj0o"),c=n("W/9C");t.default=function(){return a.createElement("div",null,a.createElement("title",null,"Arvid Sandin - Draw contest"),a.createElement(r.a,null),a.createElement(o.a,{header:a.createElement("a",{href:" https://drawcontest.herokuapp.com/"},"Draw contest"),content:a.createElement("p",null,a.createElement("b",null,"Draw contest")," is a real-time draw-and-guess game where one player tries to draw an image of something, while the others try to guess what it is. If a player guesses the correct word, both that player and the drawer gets awarded with one point each. The game can be played ",a.createElement("a",{href:"https://drawcontest.herokuapp.com/"},"here")," and the source code is available on ",a.createElement("a",{href:"https://github.com/arvidsandin/draw-contest"},"Github"))}),a.createElement(c.a,null))}},puqk:function(e,t,n){"use strict";(function(e){var a=n("q1tI");t.a=function(t,n,r,o){void 0===r&&(r=e),void 0===o&&(o={});var c=Object(a.useRef)(),i=o.capture,u=o.passive,l=o.once;Object(a.useEffect)((function(){c.current=n}),[n]),Object(a.useEffect)((function(){if(r&&r.addEventListener){var e=function(e){return c.current(e)},n={capture:i,passive:u,once:l};return r.addEventListener(t,e,n),function(){r.removeEventListener(t,e,n)}}}),[t,r,i,u,l])}}).call(this,n("yLpj"))},yQAd:function(e,t,n){e.exports={navigationBar:"navigationbar-module--navigation-bar--9E1Lu",button:"navigationbar-module--button--3pg6H"}}}]);
//# sourceMappingURL=component---src-pages-draw-contest-js-e9e431b07136f88e99ed.js.map