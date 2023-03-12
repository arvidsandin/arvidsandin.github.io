"use strict";(self.webpackChunkarvid_sandin=self.webpackChunkarvid_sandin||[]).push([[937],{2961:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=()=>a.createElement("div",{className:"footer-module--footer--a2fe4"},a.createElement("p",{className:"footer-module--footer-text--407b8"}," Made by: ",a.createElement("a",{href:"https://github.com/arvidsandin",target:"_blank",rel:"noopener noreferrer"},"arvidsandin")))},9454:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r="icon-module--icon--589c7";var o=e=>{const t=e.height||e.size||32,n=e.width||e.size||32;return e.link?a.createElement("a",{href:e.link,className:r+" icon-module--icon-clickable--8a33f "+e.className},a.createElement("img",{src:e.icon,style:{height:t,width:n},alt:e.alt})):a.createElement("div",{className:r+" "+e.className},a.createElement("img",{src:e.icon,style:{height:t,width:n},alt:e.alt}))}},4542:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7294);function r(e,t,r,o){void 0===r&&(r=n.g),void 0===o&&(o={});var l=(0,a.useRef)(),c=o.capture,i=o.passive,u=o.once;(0,a.useEffect)((function(){l.current=t}),[t]),(0,a.useEffect)((function(){if(n.g&&n.g.addEventListener){var t=function(e){return l.current(e)},a={capture:c,passive:i,once:u};return n.g.addEventListener(e,t,a),function(){n.g.removeEventListener(e,t,a)}}}),[e,n.g,c,i,u])}var o={},l=function(e,t,n){return o[e]||(o[e]={callbacks:[],value:n}),o[e].callbacks.push(t),{deregister:function(){var n=o[e].callbacks,a=n.indexOf(t);a>-1&&n.splice(a,1)},emit:function(n){o[e].value!==n&&(o[e].value=n,o[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function c(e,t){if(void 0===t&&(t=void 0!==n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var o=(c=t,{get:function(e,t){var n=c.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){c.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var o=n.get,c=n.set,i=(0,a.useRef)(null),u=(0,a.useState)((function(){return o(t,e)})),s=u[0],d=u[1];r("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);s!==n&&d(n)}})),(0,a.useEffect)((function(){return i.current=l(t,d,e),function(){i.current.deregister()}}),[e,t]);var M=(0,a.useCallback)((function(e){var n="function"==typeof e?e(s):e;c(t,n),d(n),i.current.emit(e)}),[s,c,t]);return[s,M]}(t,e,o)}}var c;return a.useState}var i=function(){},u={classList:{add:i,remove:i}},s=function(e,t,r){void 0===r&&(r=n.g);var o=e?c(e,t):a.useState,l=n.g.matchMedia?n.g.matchMedia("(prefers-color-scheme: dark)"):{},i={addEventListener:function(e,t){return l.addListener&&l.addListener(t)},removeEventListener:function(e,t){return l.removeListener&&l.removeListener(t)}},s="(prefers-color-scheme: dark)"===l.media,d=n.g.document&&n.g.document.body||u;return{usePersistedDarkModeState:o,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=d),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(a){e.classList.add(a?t:n),e.classList.remove(a?n:t)}},mediaQueryEventTarget:i,getInitialValue:function(e){return s?l.matches:e}}};var d=n(9454),M="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptNi4zMTItMTAuODk3Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIvPjwvc3ZnPg==",m="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTAuOTk5YzEuNDM3LjQzOCAyLjU2MiAxLjU2NCAyLjk5OSAzLjAwMS40NC0xLjQzNyAxLjU2NS0yLjU2MiAzLjAwMS0zLTEuNDM2LS40MzktMi41NjEtMS41NjMtMy4wMDEtMy0uNDM3IDEuNDM2LTEuNTYyIDIuNTYxLTIuOTk5IDIuOTk5em04LjAwMS4wMDFjLjk1OC4yOTMgMS43MDcgMS4wNDIgMiAyLjAwMS4yOTEtLjk1OSAxLjA0Mi0xLjcwOSAxLjk5OS0yLjAwMS0uOTU3LS4yOTItMS43MDctMS4wNDItMi0yLS4yOTMuOTU4LTEuMDQyIDEuNzA4LTEuOTk5IDJ6bS0xLTljLS40MzcgMS40MzctMS41NjMgMi41NjItMi45OTggMy4wMDEgMS40MzguNDQgMi41NjEgMS41NjQgMy4wMDEgMy4wMDIuNDM3LTEuNDM4IDEuNTYzLTIuNTYzIDIuOTk2LTMuMDAyLTEuNDMzLS40MzctMi41NTktMS41NjQtMi45OTktMy4wMDF6bS03LjAwMSAyMmMtNi42MTcgMC0xMi01LjM4My0xMi0xMnM1LjM4My0xMiAxMi0xMmMxLjg5NCAwIDMuNjMuNDk3IDUuMzcgMS4xNzktMi45NDguNTA0LTkuMzcgMy4yNjYtOS4zNyAxMC44MjEgMCA3LjQ1NCA1LjkxNyAxMC4yMDggOS4zNyAxMC44MjEtMS41Ljg0Ni0zLjQ3NiAxLjE3OS01LjM3IDEuMTc5eiIvPjwvc3ZnPg==",g="light_darkmodetoggler-module--button--f6de7",N="light_darkmodetoggler-module--expandable-content-item--e891c",L="light_darkmodetoggler-module--light-dark-mode-icon--ea1e9";const f=()=>"undefined"!=typeof window;var v=e=>{const t=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,o=t.classNameDark,l=t.classNameLight,c=t.onChange,i=t.storageKey;void 0===i&&(i="darkMode");var u=t.storageProvider,d=t.global,M=(0,a.useMemo)((function(){return s(i,u,d)}),[i,u,d]),m=M.getDefaultOnChange,g=M.mediaQueryEventTarget,N=(0,M.usePersistedDarkModeState)((0,M.getInitialValue)(e)),L=N[0],f=N[1],v=(0,a.useMemo)((function(){return c||m(n,o,l)}),[c,n,o,l,m]);return(0,a.useEffect)((function(){v(L)}),[v,L]),r("change",(function(e){return f(e.matches)}),g),{value:L,enable:(0,a.useCallback)((function(){return f(!0)}),[f]),disable:(0,a.useCallback)((function(){return f(!1)}),[f]),toggle:(0,a.useCallback)((function(){return f((function(e){return!e}))}),[f])}}(u()),{0:n,1:o}=(0,a.useState)(!1),{0:l,1:c}=(0,a.useState)(void 0);function i(e){f()&&localStorage.setItem("followSystemDarkMode","false"),f()&&c(localStorage.getItem("followSystemDarkMode")),e?t.enable():t.disable()}function u(){var e,t;return f()&&(null===(e=window)||void 0===e?void 0:e.matchMedia)&&(null===(t=window)||void 0===t?void 0:t.matchMedia("(prefers-color-scheme: dark)").matches)}var v;f()&&(null===(v=window)||void 0===v||v.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{"true"===l&&(e.matches?t.enable():t.disable())})));const j=(0,a.useRef)(null),E=(0,a.useRef)(null);return(0,a.useEffect)((()=>{function e(e){j.current.contains(e.target)||E.current.contains(e.target)||o(!1)}return c(localStorage.getItem("followSystemDarkMode")),null==l&&(f()&&localStorage.setItem("followSystemDarkMode","true"),f()&&c(localStorage.getItem("followSystemDarkMode"))),document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[l]),a.createElement("div",{className:"light_darkmodetoggler-module--menu--3e0ff"},a.createElement("button",{ref:j,type:"button",className:g+" unselectable",onClick:()=>{o(!n)}},a.createElement(d.Z,{icon:M,className:L,size:"24px",alt:"Change to light mode"}),a.createElement("div",{className:L}," / "),a.createElement(d.Z,{icon:m,className:L,size:"18px",alt:"Change to dark mode"})),a.createElement("div",{ref:E,className:"light_darkmodetoggler-module--expandable-content--347ba "+(n?"light_darkmodetoggler-module--expanded--624c8":"")},n&&a.createElement("button",{type:"button",className:g+" "+N+" darkenOnHover unselectable",onClick:function(){f()&&localStorage.setItem("followSystemDarkMode","true"),f()&&c(localStorage.getItem("followSystemDarkMode")),u()?t.enable():t.disable()}},a.createElement("div",null," Follow system ")),n&&a.createElement("button",{type:"button",className:g+" "+N+" darkenOnHover unselectable",onClick:()=>{i(!1)}},a.createElement(d.Z,{icon:M,size:"24px",alt:"Change to light mode"})),n&&a.createElement("button",{type:"button",className:g+" "+N+" darkenOnHover unselectable",onClick:()=>{i(!0)}},a.createElement(d.Z,{icon:m,size:"18px",alt:"Change to dark mode"}))))}},1778:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=e=>{let{children:t}=e;return a.createElement("div",{className:"maincontent-module--main-content--498d8"},t)}},390:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=e=>a.createElement("div",{className:"navbaritem-module--navbar-item--acbd7 "+e.className+" darkenOnHover"},a.createElement("a",{className:"navbaritem-module--link--ee495",href:e.link,id:e.id},e.text))},1317:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(390),o=n(4542),l=n(9454),c=n(7144);var i=()=>{const{0:e,1:t}=(0,a.useState)(!1),n=(0,a.useRef)(null),i=(0,a.useRef)(null);return(0,a.useEffect)((()=>{function a(a){console.log("here");const r=i.current.contains(a.target);n.current.contains(a.target)?(t(!e),console.log("here3")):r||(t(!1),console.log("here2"))}return document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}}),[e]),a.createElement("div",{className:c.SC},a.createElement("div",{className:""+c.Ah},a.createElement("div",{ref:n,className:c._C},a.createElement(l.Z,{className:"",icon:"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjIgMTYuNzVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE4LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE4LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXptMC01YzAtLjQxNC0uMzM2LS43NS0uNzUtLjc1aC0xOC41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWgxOC41Yy40MTQgMCAuNzUtLjMzNi43NS0uNzV6bTAtNWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMTguNWMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1cy4zMzYuNzUuNzUuNzVoMTguNWMuNDE0IDAgLjc1LS4zMzYuNzUtLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",size:"36px",link:"#"})),a.createElement("div",{className:c.AX+" "+(e?c.zh:""),ref:i},e&&a.createElement(r.Z,{className:c.w5,link:"/",id:"homelink",text:"Home"}),e&&a.createElement(r.Z,{className:c.w5,link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),e&&a.createElement(r.Z,{className:c.w5,link:"/custom-top-sort",id:"custom-top-sortLink",text:"Custom top sort"}),e&&a.createElement(r.Z,{className:c.w5,link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}))),a.createElement(r.Z,{className:c._X,link:"/",id:"homelink",text:"Home"}),a.createElement(r.Z,{className:c._X,link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),a.createElement(r.Z,{className:c._X,link:"/custom-top-sort",id:"custom-top-sortLink",text:"Custom top sort"}),a.createElement(r.Z,{className:c._X,link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}),a.createElement(o.Z,null))}},4320:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294);var r=e=>{let{children:t}=e;return a.createElement("div",{className:"sidebar-module--sidebar--ac64c"},t)},o=n(1778),l="wrapper-module--wrapper-item--025c3";var c=e=>{let{header:t,content:n,children:c}=e;return a.createElement("div",{className:"wrapper-module--wrapper--c93c8"},a.createElement(r,{className:l}),a.createElement(o.Z,{className:l,id:"mainContent"},a.createElement("h1",null,t),n&&a.createElement("div",{className:"wrapper-module--main-content-div--71d98",dangerouslySetInnerHTML:{__html:n}}),c),a.createElement(r,{className:l}))}},8717:function(e,t,n){n.r(t);var a=n(7294),r=n(1317),o=n(4320),l=n(2961);t.default=e=>{let{data:t}=e;const{markdownRemark:n}=t,{frontmatter:c,html:i}=n;return a.createElement("div",null,a.createElement("title",null,"Arvid Sandin - ",c.title),a.createElement(r.Z,null),a.createElement(o.Z,{header:c.headerLink?a.createElement("a",{href:c.headerLink,target:"_blank",rel:"noopener noreferrer"},c.title):c.title,content:i},a.createElement(l.Z,null)))}},7144:function(e,t,n){n.d(t,{AX:function(){return r},Ah:function(){return c},SC:function(){return u},TT:function(){return s},_C:function(){return a},_X:function(){return i},w5:function(){return o},zh:function(){return l}});var a="navigationbar-module--blog-link--1e674",r="navigationbar-module--expandable-content--54ab8",o="navigationbar-module--expandable-content-item--7816d",l="navigationbar-module--expanded--16d66",c="navigationbar-module--hide-on-desktop--c387c",i="navigationbar-module--hide-on-mobile--8674f",u="navigationbar-module--navigation-bar--880ae",s="navigationbar-module--navigation-bar-blog--9b855"}}]);
//# sourceMappingURL=component---src-templates-portfolio-entry-jsx-eec670b400a032c75817.js.map