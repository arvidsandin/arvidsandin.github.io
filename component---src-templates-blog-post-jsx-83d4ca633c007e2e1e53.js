"use strict";(self.webpackChunkarvid_sandin=self.webpackChunkarvid_sandin||[]).push([[390],{2961:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=()=>a.createElement("div",{className:"footer-module--footer--a2fe4"},a.createElement("p",{className:"footer-module--footer-text--407b8"}," Made by: ",a.createElement("a",{href:"https://github.com/arvidsandin",target:"_blank",rel:"noopener noreferrer"},"arvidsandin")))},5839:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294);var r=e=>{let{children:t}=e;return a.createElement("div",{className:"sidebar-module--sidebar--ac64c"},t)};var i=e=>{let{children:t}=e;return a.createElement("div",{className:"maincontent-module--main-content--498d8"},t)},u="wrapper-module--wrapper-item--025c3";var c=e=>{let{header:t,content:n,children:c}=e;return a.createElement("div",{className:"wrapper-module--wrapper--c93c8"},a.createElement(r,{className:u}),a.createElement(i,{className:u,id:"mainContent"},a.createElement("h1",null,t),a.createElement("div",{className:"wrapper-module--main-content-div--71d98",dangerouslySetInnerHTML:{__html:n}}),c),a.createElement(r,{className:u}))}},4379:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),r=n(6150),i="icon-module--icon--589c7";var u=e=>{const t=e.size||32;return e.link?a.createElement("a",{href:e.link,className:i+" icon-module--icon-clickable--8a33f"},a.createElement("img",{src:e.logo,style:{height:t,width:t},alt:e.alt})):a.createElement("div",{className:i},a.createElement("img",{src:e.logo,style:{height:t,width:t},alt:e.alt}))},c=n(7144);var l=()=>{const e=(0,r.Z)(!1);return a.createElement("div",{className:c.SC+" "+c.TT},a.createElement(u,{className:c._C,logo:"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOS40NzQgNS4yMDlzLTQuNTAxIDQuNTA1LTYuMjU0IDYuMjU5Yy0uMTQ3LjE0Ni0uMjIuMzM4LS4yMi41M3MuMDczLjM4NC4yMi41M2MxLjc1MiAxLjc1NCA2LjI1MiA2LjI1NyA2LjI1MiA2LjI1Ny4xNDUuMTQ1LjMzNi4yMTcuNTI3LjIxNy4xOTEtLjAwMS4zODMtLjA3NC41My0uMjIxLjI5My0uMjkzLjI5NC0uNzY2LjAwNC0xLjA1N2wtNC45NzYtNC45NzZoMTQuNjkyYy40MTQgMCAuNzUtLjMzNi43NS0uNzVzLS4zMzYtLjc1LS43NS0uNzVoLTE0LjY5Mmw0Ljk3OC00Ljk3OWMuMjg5LS4yODkuMjg3LS43NjEtLjAwNi0xLjA1NC0uMTQ3LS4xNDctLjMzOS0uMjIxLS41My0uMjIxLS4xOTEtLjAwMS0uMzguMDcxLS41MjUuMjE1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",size:"36px",link:"/blog"}),a.createElement("button",{type:"button",className:c.LI+" unselectable",onClick:e.toggle},"☀/☾"))},o=n(5839),s=n(2961);var d=e=>{let{data:t}=e;const{markdownRemark:n}=t,{frontmatter:r,html:i}=n;return a.createElement("div",null,a.createElement("title",null,"Arvid Sandin - ",r.title),a.createElement(l,null),a.createElement(o.Z,{header:a.createElement("div",null,r.title),content:i},a.createElement(s.Z,null)))}},7144:function(e,t,n){n.d(t,{LI:function(){return r},SC:function(){return i},TT:function(){return u},_C:function(){return a}});var a="navigationbar-module--blog-link--1e674",r="navigationbar-module--button--729b9",i="navigationbar-module--navigation-bar--880ae",u="navigationbar-module--navigation-bar-blog--9b855"},6150:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294);function r(e,t,r,i){void 0===r&&(r=n.g),void 0===i&&(i={});var u=(0,a.useRef)(),c=i.capture,l=i.passive,o=i.once;(0,a.useEffect)((function(){u.current=t}),[t]),(0,a.useEffect)((function(){if(n.g&&n.g.addEventListener){var t=function(e){return u.current(e)},a={capture:c,passive:l,once:o};return n.g.addEventListener(e,t,a),function(){n.g.removeEventListener(e,t,a)}}}),[e,n.g,c,l,o])}var i={},u=function(e,t,n){return i[e]||(i[e]={callbacks:[],value:n}),i[e].callbacks.push(t),{deregister:function(){var n=i[e].callbacks,a=n.indexOf(t);a>-1&&n.splice(a,1)},emit:function(n){i[e].value!==n&&(i[e].value=n,i[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function c(e,t){if(void 0===t&&(t=void 0!==n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var i=(c=t,{get:function(e,t){var n=c.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){c.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var i=n.get,c=n.set,l=(0,a.useRef)(null),o=(0,a.useState)((function(){return i(t,e)})),s=o[0],d=o[1];r("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);s!==n&&d(n)}})),(0,a.useEffect)((function(){return l.current=u(t,d,e),function(){l.current.deregister()}}),[e,t]);var m=(0,a.useCallback)((function(e){var n="function"==typeof e?e(s):e;c(t,n),d(n),l.current.emit(e)}),[s,c,t]);return[s,m]}(t,e,i)}}var c;return a.useState}var l=function(){},o={classList:{add:l,remove:l}},s=function(e,t,r){void 0===r&&(r=n.g);var i=e?c(e,t):a.useState,u=n.g.matchMedia?n.g.matchMedia("(prefers-color-scheme: dark)"):{},l={addEventListener:function(e,t){return u.addListener&&u.addListener(t)},removeEventListener:function(e,t){return u.removeListener&&u.removeListener(t)}},s="(prefers-color-scheme: dark)"===u.media,d=n.g.document&&n.g.document.body||o;return{usePersistedDarkModeState:i,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=d),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(a){e.classList.add(a?t:n),e.classList.remove(a?n:t)}},mediaQueryEventTarget:l,getInitialValue:function(e){return s?u.matches:e}}};function d(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,i=t.classNameDark,u=t.classNameLight,c=t.onChange,l=t.storageKey;void 0===l&&(l="darkMode");var o=t.storageProvider,d=t.global,m=(0,a.useMemo)((function(){return s(l,o,d)}),[l,o,d]),f=m.getDefaultOnChange,g=m.mediaQueryEventTarget,v=(0,m.usePersistedDarkModeState)((0,m.getInitialValue)(e)),M=v[0],L=v[1],b=(0,a.useMemo)((function(){return c||f(n,i,u)}),[c,n,i,u,f]);return(0,a.useEffect)((function(){b(M)}),[b,M]),r("change",(function(e){return L(e.matches)}),g),{value:M,enable:(0,a.useCallback)((function(){return L(!0)}),[L]),disable:(0,a.useCallback)((function(){return L(!1)}),[L]),toggle:(0,a.useCallback)((function(){return L((function(e){return!e}))}),[L])}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-83d4ca633c007e2e1e53.js.map