(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"094J":function(e,t,a){"use strict";(function(e){a("j+VE");var n=a("q1tI"),i=a("puqk"),r={},u=function(e,t,a){return r[e]||(r[e]={callbacks:[],value:a}),r[e].callbacks.push(t),{deregister:function(){var a=r[e].callbacks,n=a.indexOf(t);n>-1&&a.splice(n,1)},emit:function(a){r[e].value!==a&&(r[e].value=a,r[e].callbacks.forEach((function(e){t!==e&&e(a)})))}}};t.a=function(t,a){if(void 0===a&&(a=void 0!==e&&e.localStorage?e.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),a){var r=(o=a,{get:function(e,t){var a=o.getItem(e);return null==a?"function"==typeof t?t():t:JSON.parse(a)},set:function(e,t){o.setItem(e,JSON.stringify(t))}});return function(e){return function(e,t,a){var r=a.get,o=a.set,s=Object(n.useRef)(null),l=Object(n.useState)((function(){return r(t,e)})),c=l[0],m=l[1];Object(i.a)("storage",(function(e){if(e.key===t){var a=JSON.parse(e.newValue);c!==a&&m(a)}})),Object(n.useEffect)((function(){return s.current=u(t,m,e),function(){s.current.deregister()}}),[e,t]);var d=Object(n.useCallback)((function(e){var a="function"==typeof e?e(c):e;o(t,a),m(a),s.current.emit(e)}),[c,o,t]);return[c,d]}(e,t,r)}}var o;return n.useState}}).call(this,a("yLpj"))},IgVs:function(e,t,a){"use strict";var n=a("q1tI"),i=a("nBEs"),r=function(e){return n.createElement("div",{className:i.navbarItem+" darkenOnHover"},n.createElement("a",{className:i.link,href:e.link,id:e.id},e.text))},u=a("g+62"),o=a("yQAd");t.a=function(){var e=Object(u.a)(!1);return n.createElement("div",{className:o.navigationBar},n.createElement(r,{link:"/",id:"homelink",text:"Home"}),n.createElement(r,{link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),n.createElement(r,{link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}),n.createElement(r,{link:"/button",id:"buttonLink",text:"Button"}),n.createElement("button",{type:"button",className:o.button+" unselectable",onClick:e.toggle},"☀/☾"))}},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a("IgVs"),r=a("Xj0o"),u=a("W/9C");t.default=function(){return n.createElement("div",null,n.createElement("title",null,"Arvid Sandin"),n.createElement(i.a,null),n.createElement(r.a,{header:"Arvid Sandin",content:["On this website, you will find various hobby projects and experiments. The pages above are sorted by seriousness. Now, here comes some placeholder text:",n.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo ullamcorper a lacus vestibulum sed arcu. Tortor condimentum lacinia quis vel eros donec. Sapien pellentesque habitant morbi tristique senectus et. Ultrices dui sapien eget mi. Mauris sit amet massa vitae. Nulla aliquet enim tortor at auctor. Ultrices in iaculis nunc sed. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Varius sit amet mattis vulputate enim nulla aliquet. Aenean euismod elementum nisi quis eleifend.",n.createElement("br",null),"Tellus molestie nunc non blandit massa enim nec. Sit amet justo donec enim diam vulputate ut pharetra. Pretium aenean pharetra magna ac placerat vestibulum. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Massa placerat duis ultricies lacus sed turpis tincidunt id aliquet. Sagittis purus sit amet volutpat consequat mauris nunc congue. Eget velit aliquet sagittis id consectetur. Enim blandit volutpat maecenas volutpat blandit. Amet cursus sit amet dictum sit amet justo donec. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Vel elit scelerisque mauris pellentesque.",n.createElement("br",null),n.createElement("br",null),"Bibendum enim facilisis gravida neque convallis a cras semper auctor. In ornare quam viverra orci sagittis eu volutpat. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Dui ut ornare lectus sit amet est placerat in egestas. Morbi tristique senectus et netus et malesuada. Faucibus et molestie ac feugiat sed lectus vestibulum mattis. Ligula ullamcorper malesuada proin libero nunc consequat. Ut enim blandit volutpat maecenas volutpat blandit aliquam. Turpis in eu mi bibendum neque egestas congue quisque egestas. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. Ante metus dictum at tempor commodo ullamcorper. Dictum varius duis at consectetur. Malesuada proin libero nunc consequat. Viverra adipiscing at in tellus integer feugiat scelerisque varius. Convallis tellus id interdum velit laoreet id donec. Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Volutpat lacus laoreet non curabitur gravida. Ut tellus elementum sagittis vitae et leo duis ut diam. Ac turpis egestas sed tempus urna et pharetra pharetra. Sem nulla pharetra diam sit."]}),n.createElement(u.a,null))}},UNbL:function(e,t,a){e.exports={footer:"footer-module--footer--2r2aa",footerText:"footer-module--footer-text--YSA30"}},VQ3a:function(e,t,a){e.exports={sidebar:"sidebar-module--sidebar--2ZGHi"}},"W/9C":function(e,t,a){"use strict";var n=a("q1tI"),i=a("UNbL");t.a=function(){return n.createElement("div",{className:i.footer},n.createElement("p",{className:i.footerText}," Made by: ",n.createElement("a",{href:"https://github.com/arvidsandin"},"arvidsandin")))}},Xj0o:function(e,t,a){"use strict";var n=a("q1tI"),i=a("VQ3a"),r=function(e){var t=e.children;return n.createElement("div",{className:i.sidebar},t)},u=a("jpuQ"),o=function(e){var t=e.children;return n.createElement("div",{className:u.mainContent},t)},s=a("YgPA");t.a=function(e){var t=e.header,a=e.content;return n.createElement("div",{className:s.wrapper},n.createElement(r,{className:s.wrapperItem}),n.createElement(o,{className:s.wrapperItem,id:"mainContent"},n.createElement("h2",null,t),n.createElement("p",null,a)),n.createElement(r,{className:s.wrapperItem}))}},YgPA:function(e,t,a){e.exports={wrapper:"wrapper-module--wrapper--1BWmH",wrapperItem:"wrapper-module--wrapper-item--1ATr3"}},bFeb:function(e,t,a){a("I+eb")({global:!0},{globalThis:a("2oRo")})},"g+62":function(e,t,a){"use strict";(function(e){var n=a("puqk"),i=a("q1tI"),r=a("094J"),u=function(){},o={classList:{add:u,remove:u}},s=function(t,a,n){void 0===n&&(n=e);var u=t?Object(r.a)(t,a):i.useState,s=n.matchMedia?n.matchMedia("(prefers-color-scheme: dark)"):{},l={addEventListener:function(e,t){return s.addListener&&s.addListener(t)},removeEventListener:function(e,t){return s.removeListener&&s.removeListener(t)}},c="(prefers-color-scheme: dark)"===s.media,m=n.document&&n.document.body||o;return{usePersistedDarkModeState:u,getDefaultOnChange:function(e,t,a){return void 0===e&&(e=m),void 0===t&&(t="dark-mode"),void 0===a&&(a="light-mode"),function(n){e.classList.add(n?t:a),e.classList.remove(n?a:t)}},mediaQueryEventTarget:l,getInitialValue:function(e){return c?s.matches:e}}};t.a=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var a=t.element,r=t.classNameDark,u=t.classNameLight,o=t.onChange,l=t.storageKey;void 0===l&&(l="darkMode");var c=t.storageProvider,m=t.global,d=Object(i.useMemo)((function(){return s(l,c,m)}),[l,c,m]),v=d.getDefaultOnChange,p=d.mediaQueryEventTarget,f=(0,d.usePersistedDarkModeState)((0,d.getInitialValue)(e)),b=f[0],g=f[1],E=Object(i.useMemo)((function(){return o||v(a,r,u)}),[o,a,r,u,v]);return Object(i.useEffect)((function(){E(b)}),[E,b]),Object(n.a)("change",(function(e){return g(e.matches)}),p),{value:b,enable:Object(i.useCallback)((function(){return g(!0)}),[g]),disable:Object(i.useCallback)((function(){return g(!1)}),[g]),toggle:Object(i.useCallback)((function(){return g((function(e){return!e}))}),[g])}}}).call(this,a("yLpj"))},"j+VE":function(e,t,a){a("bFeb")},jpuQ:function(e,t,a){e.exports={mainContent:"maincontent-module--main-content--_b3qD"}},nBEs:function(e,t,a){e.exports={navbarItem:"navbaritem-module--navbar-item--17jKT",link:"navbaritem-module--link--IyqiF"}},puqk:function(e,t,a){"use strict";(function(e){var n=a("q1tI");t.a=function(t,a,i,r){void 0===i&&(i=e),void 0===r&&(r={});var u=Object(n.useRef)(),o=r.capture,s=r.passive,l=r.once;Object(n.useEffect)((function(){u.current=a}),[a]),Object(n.useEffect)((function(){if(i&&i.addEventListener){var e=function(e){return u.current(e)},a={capture:o,passive:s,once:l};return i.addEventListener(t,e,a),function(){i.removeEventListener(t,e,a)}}}),[t,i,o,s,l])}}).call(this,a("yLpj"))},yQAd:function(e,t,a){e.exports={navigationBar:"navigationbar-module--navigation-bar--9E1Lu",button:"navigationbar-module--button--3pg6H"}}}]);
//# sourceMappingURL=component---src-pages-index-js-2bd0826683191cd5ed4f.js.map