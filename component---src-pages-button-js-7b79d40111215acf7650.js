(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"094J":function(e,t,n){"use strict";(function(e){n("j+VE");var a=n("q1tI"),o=n("puqk"),r={},u=function(e,t,n){return r[e]||(r[e]={callbacks:[],value:n}),r[e].callbacks.push(t),{deregister:function(){var n=r[e].callbacks,a=n.indexOf(t);a>-1&&n.splice(a,1)},emit:function(n){r[e].value!==n&&(r[e].value=n,r[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};t.a=function(t,n){if(void 0===n&&(n=void 0!==e&&e.localStorage?e.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),n){var r=(c=n,{get:function(e,t){var n=c.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){c.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,n){var r=n.get,c=n.set,i=Object(a.useRef)(null),l=Object(a.useState)((function(){return r(t,e)})),s=l[0],d=l[1];Object(o.a)("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);s!==n&&d(n)}})),Object(a.useEffect)((function(){return i.current=u(t,d,e),function(){i.current.deregister()}}),[e,t]);var f=Object(a.useCallback)((function(e){var n="function"==typeof e?e(s):e;c(t,n),d(n),i.current.emit(e)}),[s,c,t]);return[s,f]}(e,t,r)}}var c;return a.useState}}).call(this,n("yLpj"))},AedR:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n("IgVs"),r=n("W/9C"),u=n("mjJD"),c=function(){var e=!1;return a.createElement("div",{id:u.buttonContainer},a.createElement("button",{type:"button",name:"button",class:"unselectable",id:u.theButton,onClick:function(){var t=document.getElementById(u.theButton);e?(document.body.style.background="#f2f2f2",t.style.background="#fadadd",e=!1):(document.body.style.background="#fadadd",t.style.background="#f2f2f2",e=!0)}},"Button"))};t.default=function(){return a.createElement("div",null,a.createElement("title",null,"Button"),a.createElement(o.a,null),a.createElement(c,null),a.createElement(r.a,null))}},IgVs:function(e,t,n){"use strict";var a=n("q1tI"),o=n("nBEs"),r=function(e){return a.createElement("div",{className:o.navbarItem+" darkenOnHover"},a.createElement("a",{className:o.link,href:e.link,id:e.id},e.text))},u=n("g+62"),c=n("yQAd");t.a=function(){var e=Object(u.a)(!1);return a.createElement("div",{className:c.navigationBar},a.createElement(r,{link:"/",id:"homelink",text:"Home"}),a.createElement(r,{link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),a.createElement(r,{link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}),a.createElement(r,{link:"/button",id:"buttonLink",text:"Button"}),a.createElement("button",{type:"button",className:c.button+" unselectable",onClick:e.toggle},"☀/☾"))}},UNbL:function(e,t,n){e.exports={footer:"footer-module--footer--2r2aa",footerText:"footer-module--footer-text--YSA30"}},"W/9C":function(e,t,n){"use strict";var a=n("q1tI"),o=n("UNbL");t.a=function(){return a.createElement("div",{className:o.footer},a.createElement("p",{className:o.footerText}," Made by: ",a.createElement("a",{href:"https://github.com/arvidsandin"},"arvidsandin")))}},bFeb:function(e,t,n){n("I+eb")({global:!0},{globalThis:n("2oRo")})},"g+62":function(e,t,n){"use strict";(function(e){var a=n("puqk"),o=n("q1tI"),r=n("094J"),u=function(){},c={classList:{add:u,remove:u}},i=function(t,n,a){void 0===a&&(a=e);var u=t?Object(r.a)(t,n):o.useState,i=a.matchMedia?a.matchMedia("(prefers-color-scheme: dark)"):{},l={addEventListener:function(e,t){return i.addListener&&i.addListener(t)},removeEventListener:function(e,t){return i.removeListener&&i.removeListener(t)}},s="(prefers-color-scheme: dark)"===i.media,d=a.document&&a.document.body||c;return{usePersistedDarkModeState:u,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=d),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(a){e.classList.add(a?t:n),e.classList.remove(a?n:t)}},mediaQueryEventTarget:l,getInitialValue:function(e){return s?i.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,r=t.classNameDark,u=t.classNameLight,c=t.onChange,l=t.storageKey;void 0===l&&(l="darkMode");var s=t.storageProvider,d=t.global,f=Object(o.useMemo)((function(){return i(l,s,d)}),[l,s,d]),b=f.getDefaultOnChange,m=f.mediaQueryEventTarget,v=(0,f.usePersistedDarkModeState)((0,f.getInitialValue)(e)),g=v[0],k=v[1],E=Object(o.useMemo)((function(){return c||b(n,r,u)}),[c,n,r,u,b]);return Object(o.useEffect)((function(){E(g)}),[E,g]),Object(a.a)("change",(function(e){return k(e.matches)}),m),{value:g,enable:Object(o.useCallback)((function(){return k(!0)}),[k]),disable:Object(o.useCallback)((function(){return k(!1)}),[k]),toggle:Object(o.useCallback)((function(){return k((function(e){return!e}))}),[k])}}}).call(this,n("yLpj"))},"j+VE":function(e,t,n){n("bFeb")},mjJD:function(e,t,n){e.exports={buttonContainer:"thebutton-module--button-container--1OYaS",theButton:"thebutton-module--the-button--2S9sR"}},nBEs:function(e,t,n){e.exports={navbarItem:"navbaritem-module--navbar-item--17jKT",link:"navbaritem-module--link--IyqiF"}},puqk:function(e,t,n){"use strict";(function(e){var a=n("q1tI");t.a=function(t,n,o,r){void 0===o&&(o=e),void 0===r&&(r={});var u=Object(a.useRef)(),c=r.capture,i=r.passive,l=r.once;Object(a.useEffect)((function(){u.current=n}),[n]),Object(a.useEffect)((function(){if(o&&o.addEventListener){var e=function(e){return u.current(e)},n={capture:c,passive:i,once:l};return o.addEventListener(t,e,n),function(){o.removeEventListener(t,e,n)}}}),[t,o,c,i,l])}}).call(this,n("yLpj"))},yQAd:function(e,t,n){e.exports={navigationBar:"navigationbar-module--navigation-bar--9E1Lu",button:"navigationbar-module--button--3pg6H"}}}]);
//# sourceMappingURL=component---src-pages-button-js-7b79d40111215acf7650.js.map