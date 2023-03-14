"use strict";(self.webpackChunkarvid_sandin=self.webpackChunkarvid_sandin||[]).push([[524],{2961:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=()=>a.createElement("div",{className:"footer-module--footer--a2fe4"},a.createElement("p",{className:"footer-module--footer-text--407b8"}," Made by: ",a.createElement("a",{href:"https://github.com/arvidsandin",target:"_blank",rel:"noopener noreferrer"},"arvidsandin")))},9454:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r="icon-module--icon--589c7";var o=e=>{const t=e.height||e.size||32,n=e.width||e.size||32;return e.link?a.createElement("a",{href:e.link,className:r+" icon-module--icon-clickable--8a33f "+e.className},a.createElement("img",{src:e.icon,style:{height:t,width:n},alt:e.alt})):a.createElement("div",{className:r+" "+e.className},a.createElement("img",{src:e.icon,style:{height:t,width:n},alt:e.alt}))}},4542:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(7294);function r(e,t,r,o){void 0===r&&(r=n.g),void 0===o&&(o={});var l=(0,a.useRef)(),i=o.capture,u=o.passive,c=o.once;(0,a.useEffect)((function(){l.current=t}),[t]),(0,a.useEffect)((function(){if(n.g&&n.g.addEventListener){var t=function(e){return l.current(e)},a={capture:i,passive:u,once:c};return n.g.addEventListener(e,t,a),function(){n.g.removeEventListener(e,t,a)}}}),[e,n.g,i,u,c])}var o={},l=function(e,t,n){return o[e]||(o[e]={callbacks:[],value:n}),o[e].callbacks.push(t),{deregister:function(){var n=o[e].callbacks,a=n.indexOf(t);a>-1&&n.splice(a,1)},emit:function(n){o[e].value!==n&&(o[e].value=n,o[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function i(e,t){if(void 0===t&&(t=void 0!==n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var o=(i=t,{get:function(e,t){var n=i.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){i.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var o=n.get,i=n.set,u=(0,a.useRef)(null),c=(0,a.useState)((function(){return o(t,e)})),d=c[0],M=c[1];r("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);d!==n&&M(n)}})),(0,a.useEffect)((function(){return u.current=l(t,M,e),function(){u.current.deregister()}}),[e,t]);var s=(0,a.useCallback)((function(e){var n="function"==typeof e?e(d):e;i(t,n),M(n),u.current.emit(e)}),[d,i,t]);return[d,s]}(t,e,o)}}var i;return a.useState}var u=function(){},c={classList:{add:u,remove:u}},d=function(e,t,r){void 0===r&&(r=n.g);var o=e?i(e,t):a.useState,l=n.g.matchMedia?n.g.matchMedia("(prefers-color-scheme: dark)"):{},u={addEventListener:function(e,t){return l.addListener&&l.addListener(t)},removeEventListener:function(e,t){return l.removeListener&&l.removeListener(t)}},d="(prefers-color-scheme: dark)"===l.media,M=n.g.document&&n.g.document.body||c;return{usePersistedDarkModeState:o,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=M),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(a){e.classList.add(a?t:n),e.classList.remove(a?n:t)}},mediaQueryEventTarget:u,getInitialValue:function(e){return d?l.matches:e}}};var M=n(9454),s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptNi4zMTItMTAuODk3Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIvPjwvc3ZnPg==",m="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTAuOTk5YzEuNDM3LjQzOCAyLjU2MiAxLjU2NCAyLjk5OSAzLjAwMS40NC0xLjQzNyAxLjU2NS0yLjU2MiAzLjAwMS0zLTEuNDM2LS40MzktMi41NjEtMS41NjMtMy4wMDEtMy0uNDM3IDEuNDM2LTEuNTYyIDIuNTYxLTIuOTk5IDIuOTk5em04LjAwMS4wMDFjLjk1OC4yOTMgMS43MDcgMS4wNDIgMiAyLjAwMS4yOTEtLjk1OSAxLjA0Mi0xLjcwOSAxLjk5OS0yLjAwMS0uOTU3LS4yOTItMS43MDctMS4wNDItMi0yLS4yOTMuOTU4LTEuMDQyIDEuNzA4LTEuOTk5IDJ6bS0xLTljLS40MzcgMS40MzctMS41NjMgMi41NjItMi45OTggMy4wMDEgMS40MzguNDQgMi41NjEgMS41NjQgMy4wMDEgMy4wMDIuNDM3LTEuNDM4IDEuNTYzLTIuNTYzIDIuOTk2LTMuMDAyLTEuNDMzLS40MzctMi41NTktMS41NjQtMi45OTktMy4wMDF6bS03LjAwMSAyMmMtNi42MTcgMC0xMi01LjM4My0xMi0xMnM1LjM4My0xMiAxMi0xMmMxLjg5NCAwIDMuNjMuNDk3IDUuMzcgMS4xNzktMi45NDguNTA0LTkuMzcgMy4yNjYtOS4zNyAxMC44MjEgMCA3LjQ1NCA1LjkxNyAxMC4yMDggOS4zNyAxMC44MjEtMS41Ljg0Ni0zLjQ3NiAxLjE3OS01LjM3IDEuMTc5eiIvPjwvc3ZnPg==",g="light_darkmodetoggler-module--button--f6de7",f="light_darkmodetoggler-module--expandable-content-item--e891c",N="light_darkmodetoggler-module--light-dark-mode-icon--ea1e9";const v=()=>"undefined"!=typeof window;var L=e=>{const t=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,o=t.classNameDark,l=t.classNameLight,i=t.onChange,u=t.storageKey;void 0===u&&(u="darkMode");var c=t.storageProvider,M=t.global,s=(0,a.useMemo)((function(){return d(u,c,M)}),[u,c,M]),m=s.getDefaultOnChange,g=s.mediaQueryEventTarget,f=(0,s.usePersistedDarkModeState)((0,s.getInitialValue)(e)),N=f[0],v=f[1],L=(0,a.useMemo)((function(){return i||m(n,o,l)}),[i,n,o,l,m]);return(0,a.useEffect)((function(){L(N)}),[L,N]),r("change",(function(e){return v(e.matches)}),g),{value:N,enable:(0,a.useCallback)((function(){return v(!0)}),[v]),disable:(0,a.useCallback)((function(){return v(!1)}),[v]),toggle:(0,a.useCallback)((function(){return v((function(e){return!e}))}),[v])}}(c()),{0:n,1:o}=(0,a.useState)(!1),{0:l,1:i}=(0,a.useState)(void 0);function u(e){v&&localStorage.setItem("followSystemDarkMode","false"),v&&i(localStorage.getItem("followSystemDarkMode")),e?t.enable():t.disable()}function c(){var e,t;return v()&&(null===(e=window)||void 0===e?void 0:e.matchMedia)&&(null===(t=window)||void 0===t?void 0:t.matchMedia("(prefers-color-scheme: dark)").matches)}var L;v()&&(null===(L=window)||void 0===L||L.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{"true"===l&&(e.matches?t.enable():t.disable())})));const D=(0,a.useRef)(null),E=(0,a.useRef)(null);return(0,a.useEffect)((()=>{function e(e){D.current.contains(e.target)||E.current.contains(e.target)||o(!1)}return i(localStorage.getItem("followSystemDarkMode")),null==l&&(v&&localStorage.setItem("followSystemDarkMode","true"),v&&i(localStorage.getItem("followSystemDarkMode"))),document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),a.createElement("div",{className:"light_darkmodetoggler-module--menu--3e0ff"},a.createElement("button",{ref:D,type:"button",className:g+" unselectable",onClick:()=>{o(!n)}},a.createElement(M.Z,{icon:s,className:N,size:"24px",alt:"Change to light mode"}),a.createElement("div",{className:N}," / "),a.createElement(M.Z,{icon:m,className:N,size:"18px",alt:"Change to dark mode"})),a.createElement("div",{ref:E,className:"light_darkmodetoggler-module--expandable-content--347ba "+(n?"light_darkmodetoggler-module--expanded--624c8":"")},n&&a.createElement("button",{type:"button",className:g+" "+f+" darkenOnHover unselectable",onClick:function(){v&&localStorage.setItem("followSystemDarkMode","true"),v&&i(localStorage.getItem("followSystemDarkMode")),c()?t.enable():t.disable()}},a.createElement("div",null," Follow system ")),n&&a.createElement("button",{type:"button",className:g+" "+f+" darkenOnHover unselectable",onClick:()=>{u(!1)}},a.createElement(M.Z,{icon:s,size:"24px",alt:"Change to light mode"})),n&&a.createElement("button",{type:"button",className:g+" "+f+" darkenOnHover unselectable",onClick:()=>{u(!0)}},a.createElement(M.Z,{icon:m,size:"18px",alt:"Change to dark mode"}))))}},1778:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=e=>{let{children:t}=e;return a.createElement("div",{className:"maincontent-module--main-content--498d8"},t)}},390:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=e=>a.createElement("div",{className:"navbaritem-module--navbar-item--acbd7 "+e.className+" darkenOnHover"},a.createElement("a",{className:"navbaritem-module--link--ee495",href:e.link,id:e.id},e.text))},4320:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294);var r=e=>{let{children:t}=e;return a.createElement("div",{className:"sidebar-module--sidebar--ac64c"},t)},o=n(1778),l="wrapper-module--wrapper-item--025c3";var i=e=>{let{header:t,content:n,children:i}=e;return a.createElement("div",{className:"wrapper-module--wrapper--c93c8"},a.createElement(r,{className:l}),a.createElement(o.Z,{className:l,id:"mainContent"},a.createElement("h1",null,t),n&&a.createElement("div",{className:"wrapper-module--main-content-div--71d98",dangerouslySetInnerHTML:{__html:n}}),i),a.createElement(r,{className:l}))}},3939:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(7294),r=n(390),o=n(4542),l=n(7144);var i=()=>a.createElement("div",{className:l.SC},a.createElement(r.Z,{link:"/",id:"homelink",text:"Portfolio"}),a.createElement(o.Z,null)),u=n(4320),c=n(1778),d=n(2961);var M=e=>{let{data:{allMarkdownRemark:{edges:t}}}=e;const n=t.map((e=>a.createElement(c.Z,{key:e.node.id},a.createElement("a",{href:"/blog"+e.node.frontmatter.slug},a.createElement("h2",null,e.node.frontmatter.title)),a.createElement("p",null,e.node.excerpt),a.createElement("p",null,e.node.frontmatter.date))));return a.createElement("div",null,a.createElement("title",null,"Arvid Sandin - Blog"),a.createElement(i,null),a.createElement(u.Z,{header:"Blog"},n,a.createElement(d.Z,null)))}},7144:function(e,t,n){n.d(t,{AX:function(){return r},Ah:function(){return i},SC:function(){return c},TT:function(){return d},_C:function(){return a},_X:function(){return u},w5:function(){return o},zh:function(){return l}});var a="navigationbar-module--blog-link--1e674",r="navigationbar-module--expandable-content--54ab8",o="navigationbar-module--expandable-content-item--7816d",l="navigationbar-module--expanded--16d66",i="navigationbar-module--hide-on-desktop--c387c",u="navigationbar-module--hide-on-mobile--8674f",c="navigationbar-module--navigation-bar--880ae",d="navigationbar-module--navigation-bar-blog--9b855"}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-777cbf2d1275c4d800cd.js.map