"use strict";(self.webpackChunkarvid_sandin=self.webpackChunkarvid_sandin||[]).push([[390],{2961:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=()=>a.createElement("div",{className:"footer-module--footer--a2fe4"},a.createElement("p",{className:"footer-module--footer-text--407b8"}," Made by: ",a.createElement("a",{href:"https://github.com/arvidsandin",target:"_blank",rel:"noopener noreferrer"},"arvidsandin")))},9454:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r="icon-module--icon--589c7";var i=e=>{const t=e.height||e.size||32,n=e.width||e.size||32;return e.link?a.createElement("a",{href:e.link,className:r+" icon-module--icon-clickable--8a33f "+e.className},a.createElement("img",{src:e.icon,style:{height:t,width:n},alt:e.alt})):a.createElement("div",{className:r+" "+e.className},a.createElement("img",{src:e.icon,style:{height:t,width:n},alt:e.alt}))}},4542:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294);function r(e,t,r,i){void 0===r&&(r=n.g),void 0===i&&(i={});var o=(0,a.useRef)(),u=i.capture,l=i.passive,c=i.once;(0,a.useEffect)((function(){o.current=t}),[t]),(0,a.useEffect)((function(){if(n.g&&n.g.addEventListener){var t=function(e){return o.current(e)},a={capture:u,passive:l,once:c};return n.g.addEventListener(e,t,a),function(){n.g.removeEventListener(e,t,a)}}}),[e,n.g,u,l,c])}var i={},o=function(e,t,n){return i[e]||(i[e]={callbacks:[],value:n}),i[e].callbacks.push(t),{deregister:function(){var n=i[e].callbacks,a=n.indexOf(t);a>-1&&n.splice(a,1)},emit:function(n){i[e].value!==n&&(i[e].value=n,i[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function u(e,t){if(void 0===t&&(t=void 0!==n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var i=(u=t,{get:function(e,t){var n=u.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){u.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var i=n.get,u=n.set,l=(0,a.useRef)(null),c=(0,a.useState)((function(){return i(t,e)})),M=c[0],d=c[1];r("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);M!==n&&d(n)}})),(0,a.useEffect)((function(){return l.current=o(t,d,e),function(){l.current.deregister()}}),[e,t]);var s=(0,a.useCallback)((function(e){var n="function"==typeof e?e(M):e;u(t,n),d(n),l.current.emit(e)}),[M,u,t]);return[M,s]}(t,e,i)}}var u;return a.useState}var l=function(){},c={classList:{add:l,remove:l}},M=function(e,t,r){void 0===r&&(r=n.g);var i=e?u(e,t):a.useState,o=n.g.matchMedia?n.g.matchMedia("(prefers-color-scheme: dark)"):{},l={addEventListener:function(e,t){return o.addListener&&o.addListener(t)},removeEventListener:function(e,t){return o.removeListener&&o.removeListener(t)}},M="(prefers-color-scheme: dark)"===o.media,d=n.g.document&&n.g.document.body||c;return{usePersistedDarkModeState:i,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=d),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(a){e.classList.add(a?t:n),e.classList.remove(a?n:t)}},mediaQueryEventTarget:l,getInitialValue:function(e){return M?o.matches:e}}};var d=n(9454),s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptNi4zMTItMTAuODk3Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIvPjwvc3ZnPg==",m="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTAuOTk5YzEuNDM3LjQzOCAyLjU2MiAxLjU2NCAyLjk5OSAzLjAwMS40NC0xLjQzNyAxLjU2NS0yLjU2MiAzLjAwMS0zLTEuNDM2LS40MzktMi41NjEtMS41NjMtMy4wMDEtMy0uNDM3IDEuNDM2LTEuNTYyIDIuNTYxLTIuOTk5IDIuOTk5em04LjAwMS4wMDFjLjk1OC4yOTMgMS43MDcgMS4wNDIgMiAyLjAwMS4yOTEtLjk1OSAxLjA0Mi0xLjcwOSAxLjk5OS0yLjAwMS0uOTU3LS4yOTItMS43MDctMS4wNDItMi0yLS4yOTMuOTU4LTEuMDQyIDEuNzA4LTEuOTk5IDJ6bS0xLTljLS40MzcgMS40MzctMS41NjMgMi41NjItMi45OTggMy4wMDEgMS40MzguNDQgMi41NjEgMS41NjQgMy4wMDEgMy4wMDIuNDM3LTEuNDM4IDEuNTYzLTIuNTYzIDIuOTk2LTMuMDAyLTEuNDMzLS40MzctMi41NTktMS41NjQtMi45OTktMy4wMDF6bS03LjAwMSAyMmMtNi42MTcgMC0xMi01LjM4My0xMi0xMnM1LjM4My0xMiAxMi0xMmMxLjg5NCAwIDMuNjMuNDk3IDUuMzcgMS4xNzktMi45NDguNTA0LTkuMzcgMy4yNjYtOS4zNyAxMC44MjEgMCA3LjQ1NCA1LjkxNyAxMC4yMDggOS4zNyAxMC44MjEtMS41Ljg0Ni0zLjQ3NiAxLjE3OS01LjM3IDEuMTc5eiIvPjwvc3ZnPg==",g="light_darkmodetoggler-module--button--f6de7",N="light_darkmodetoggler-module--expandable-content-item--e891c",L="light_darkmodetoggler-module--light-dark-mode-icon--ea1e9";const j=()=>"undefined"!=typeof window;var f=e=>{const t=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,i=t.classNameDark,o=t.classNameLight,u=t.onChange,l=t.storageKey;void 0===l&&(l="darkMode");var c=t.storageProvider,d=t.global,s=(0,a.useMemo)((function(){return M(l,c,d)}),[l,c,d]),m=s.getDefaultOnChange,g=s.mediaQueryEventTarget,N=(0,s.usePersistedDarkModeState)((0,s.getInitialValue)(e)),L=N[0],j=N[1],f=(0,a.useMemo)((function(){return u||m(n,i,o)}),[u,n,i,o,m]);return(0,a.useEffect)((function(){f(L)}),[f,L]),r("change",(function(e){return j(e.matches)}),g),{value:L,enable:(0,a.useCallback)((function(){return j(!0)}),[j]),disable:(0,a.useCallback)((function(){return j(!1)}),[j]),toggle:(0,a.useCallback)((function(){return j((function(e){return!e}))}),[j])}}(c()),{0:n,1:i}=(0,a.useState)(!1),{0:o,1:u}=(0,a.useState)(void 0);function l(e){j&&localStorage.setItem("followSystemDarkMode","false"),j&&u(localStorage.getItem("followSystemDarkMode")),e?t.enable():t.disable()}function c(){var e,t;return j()&&(null===(e=window)||void 0===e?void 0:e.matchMedia)&&(null===(t=window)||void 0===t?void 0:t.matchMedia("(prefers-color-scheme: dark)").matches)}var f;j()&&(null===(f=window)||void 0===f||f.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{"true"===o&&(e.matches?t.enable():t.disable())})));const v=(0,a.useRef)(null),S=(0,a.useRef)(null);return(0,a.useEffect)((()=>{function e(e){v.current.contains(e.target)||S.current.contains(e.target)||i(!1)}return u(localStorage.getItem("followSystemDarkMode")),null==o&&(j&&localStorage.setItem("followSystemDarkMode","true"),j&&u(localStorage.getItem("followSystemDarkMode"))),document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]),a.createElement("div",{className:"light_darkmodetoggler-module--menu--3e0ff"},a.createElement("button",{ref:v,type:"button",className:g+" unselectable",onClick:()=>{i(!n)}},a.createElement(d.Z,{icon:s,className:L,size:"24px",alt:"Change to light mode"}),a.createElement("div",{className:L}," / "),a.createElement(d.Z,{icon:m,className:L,size:"18px",alt:"Change to dark mode"})),a.createElement("div",{ref:S,className:"light_darkmodetoggler-module--expandable-content--347ba "+(n?"light_darkmodetoggler-module--expanded--624c8":"")},n&&a.createElement("button",{type:"button",className:g+" "+N+" darkenOnHover unselectable",onClick:function(){j&&localStorage.setItem("followSystemDarkMode","true"),j&&u(localStorage.getItem("followSystemDarkMode")),c()?t.enable():t.disable()}},a.createElement("div",null," Follow system ")),n&&a.createElement("button",{type:"button",className:g+" "+N+" darkenOnHover unselectable",onClick:()=>{l(!1)}},a.createElement(d.Z,{icon:s,size:"24px",alt:"Change to light mode"})),n&&a.createElement("button",{type:"button",className:g+" "+N+" darkenOnHover unselectable",onClick:()=>{l(!0)}},a.createElement(d.Z,{icon:m,size:"18px",alt:"Change to dark mode"}))))}},1778:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=e=>{let{children:t}=e;return a.createElement("div",{className:"maincontent-module--main-content--498d8"},t)}},4320:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294);var r=e=>{let{children:t}=e;return a.createElement("div",{className:"sidebar-module--sidebar--ac64c"},t)},i=n(1778),o="wrapper-module--wrapper-item--025c3";var u=e=>{let{header:t,content:n,children:u}=e;return a.createElement("div",{className:"wrapper-module--wrapper--c93c8"},a.createElement(r,{className:o}),a.createElement(i.Z,{className:o,id:"mainContent"},a.createElement("h1",null,t),n&&a.createElement("div",{className:"wrapper-module--main-content-div--71d98",dangerouslySetInnerHTML:{__html:n}}),u),a.createElement(r,{className:o}))}},2920:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(7294),r=n(9454),i=n(4542),o=n(7144);var u=()=>a.createElement("div",{className:o.SC+" "+o.TT},a.createElement(r.Z,{className:o._C,icon:"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOS40NzQgNS4yMDlzLTQuNTAxIDQuNTA1LTYuMjU0IDYuMjU5Yy0uMTQ3LjE0Ni0uMjIuMzM4LS4yMi41M3MuMDczLjM4NC4yMi41M2MxLjc1MiAxLjc1NCA2LjI1MiA2LjI1NyA2LjI1MiA2LjI1Ny4xNDUuMTQ1LjMzNi4yMTcuNTI3LjIxNy4xOTEtLjAwMS4zODMtLjA3NC41My0uMjIxLjI5My0uMjkzLjI5NC0uNzY2LjAwNC0xLjA1N2wtNC45NzYtNC45NzZoMTQuNjkyYy40MTQgMCAuNzUtLjMzNi43NS0uNzVzLS4zMzYtLjc1LS43NS0uNzVoLTE0LjY5Mmw0Ljk3OC00Ljk3OWMuMjg5LS4yODkuMjg3LS43NjEtLjAwNi0xLjA1NC0uMTQ3LS4xNDctLjMzOS0uMjIxLS41My0uMjIxLS4xOTEtLjAwMS0uMzguMDcxLS41MjUuMjE1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",size:"36px",link:"/blog"}),a.createElement(i.Z,null)),l=n(4320),c=n(2961);var M=e=>{let{data:t}=e;const{markdownRemark:n}=t,{frontmatter:r,html:i}=n;return a.createElement("div",null,a.createElement("title",null,"Arvid Sandin - ",r.title),a.createElement(u,null),a.createElement(l.Z,{header:a.createElement("div",null,r.title),content:i},a.createElement(c.Z,null)))}},7144:function(e,t,n){n.d(t,{AX:function(){return r},Ah:function(){return u},SC:function(){return c},TT:function(){return M},_C:function(){return a},_X:function(){return l},w5:function(){return i},zh:function(){return o}});var a="navigationbar-module--blog-link--1e674",r="navigationbar-module--expandable-content--54ab8",i="navigationbar-module--expandable-content-item--7816d",o="navigationbar-module--expanded--16d66",u="navigationbar-module--hide-on-desktop--c387c",l="navigationbar-module--hide-on-mobile--8674f",c="navigationbar-module--navigation-bar--880ae",M="navigationbar-module--navigation-bar-blog--9b855"}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-50a80f8aa93026603a46.js.map