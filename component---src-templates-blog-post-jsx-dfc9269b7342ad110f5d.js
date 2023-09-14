"use strict";(self.webpackChunkarvid_sandin=self.webpackChunkarvid_sandin||[]).push([[390],{2961:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=e=>a.createElement("div",{className:"footer-module--footer--a2fe4"},e.children,a.createElement("p",{className:"footer-module--footer-text--407b8"}," Made by: ",a.createElement("a",{href:"https://github.com/arvidsandin",target:"_blank",rel:"noopener noreferrer"},"arvidsandin")))},9454:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r="icon-module--icon--589c7";var i=e=>{const t=e.height||e.size||32,n=e.width||e.size||32;return e.link?a.createElement("a",{href:e.link,className:r+" icon-module--icon-clickable--8a33f "+e.className},a.createElement("img",{src:e.icon,style:{height:t,width:n},alt:e.alt}),e.children):a.createElement("div",{className:r+" "+e.className},a.createElement("img",{src:e.icon,style:{height:t,width:n},alt:e.alt}),e.children)}},7945:function(e,t,n){n.d(t,{Z:function(){return f}});var a=n(7294);function r(e,t,r,i){void 0===r&&(r=n.g),void 0===i&&(i={});var l=(0,a.useRef)(),o=i.capture,c=i.passive,u=i.once;(0,a.useEffect)((function(){l.current=t}),[t]),(0,a.useEffect)((function(){if(n.g&&n.g.addEventListener){var t=function(e){return l.current(e)},a={capture:o,passive:c,once:u};return n.g.addEventListener(e,t,a),function(){n.g.removeEventListener(e,t,a)}}}),[e,n.g,o,c,u])}var i={},l=function(e,t,n){return i[e]||(i[e]={callbacks:[],value:n}),i[e].callbacks.push(t),{deregister:function(){var n=i[e].callbacks,a=n.indexOf(t);a>-1&&n.splice(a,1)},emit:function(n){i[e].value!==n&&(i[e].value=n,i[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function o(e,t){if(void 0===t&&(t=void 0!==n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var i=(o=t,{get:function(e,t){var n=o.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){o.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var i=n.get,o=n.set,c=(0,a.useRef)(null),u=(0,a.useState)((function(){return i(t,e)})),d=u[0],M=u[1];r("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);d!==n&&M(n)}})),(0,a.useEffect)((function(){return c.current=l(t,M,e),function(){c.current.deregister()}}),[e,t]);var s=(0,a.useCallback)((function(e){var n="function"==typeof e?e(d):e;o(t,n),M(n),c.current.emit(e)}),[d,o,t]);return[d,s]}(t,e,i)}}var o;return a.useState}var c=function(){},u={classList:{add:c,remove:c}},d=function(e,t,r){void 0===r&&(r=n.g);var i=e?o(e,t):a.useState,l=n.g.matchMedia?n.g.matchMedia("(prefers-color-scheme: dark)"):{},c={addEventListener:function(e,t){return l.addListener&&l.addListener(t)},removeEventListener:function(e,t){return l.removeListener&&l.removeListener(t)}},d="(prefers-color-scheme: dark)"===l.media,M=n.g.document&&n.g.document.body||u;return{usePersistedDarkModeState:i,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=M),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(a){e.classList.add(a?t:n),e.classList.remove(a?n:t)}},mediaQueryEventTarget:c,getInitialValue:function(e){return d?l.matches:e}}};var M=n(9454),s="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptNi4zMTItMTAuODk3Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIvPjwvc3ZnPg==",m="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTAuOTk5YzEuNDM3LjQzOCAyLjU2MiAxLjU2NCAyLjk5OSAzLjAwMS40NC0xLjQzNyAxLjU2NS0yLjU2MiAzLjAwMS0zLTEuNDM2LS40MzktMi41NjEtMS41NjMtMy4wMDEtMy0uNDM3IDEuNDM2LTEuNTYyIDIuNTYxLTIuOTk5IDIuOTk5em04LjAwMS4wMDFjLjk1OC4yOTMgMS43MDcgMS4wNDIgMiAyLjAwMS4yOTEtLjk1OSAxLjA0Mi0xLjcwOSAxLjk5OS0yLjAwMS0uOTU3LS4yOTItMS43MDctMS4wNDItMi0yLS4yOTMuOTU4LTEuMDQyIDEuNzA4LTEuOTk5IDJ6bS0xLTljLS40MzcgMS40MzctMS41NjMgMi41NjItMi45OTggMy4wMDEgMS40MzguNDQgMi41NjEgMS41NjQgMy4wMDEgMy4wMDIuNDM3LTEuNDM4IDEuNTYzLTIuNTYzIDIuOTk2LTMuMDAyLTEuNDMzLS40MzctMi41NTktMS41NjQtMi45OTktMy4wMDF6bS03LjAwMSAyMmMtNi42MTcgMC0xMi01LjM4My0xMi0xMnM1LjM4My0xMiAxMi0xMmMxLjg5NCAwIDMuNjMuNDk3IDUuMzcgMS4xNzktMi45NDguNTA0LTkuMzcgMy4yNjYtOS4zNyAxMC44MjEgMCA3LjQ1NCA1LjkxNyAxMC4yMDggOS4zNyAxMC44MjEtMS41Ljg0Ni0zLjQ3NiAxLjE3OS01LjM3IDEuMTc5eiIvPjwvc3ZnPg==",g="light_darkmodetoggler-module--button--f6de7",N="light_darkmodetoggler-module--expandable-content-item--e891c",L="light_darkmodetoggler-module--light-dark-mode-icon--ea1e9";const j=()=>"undefined"!=typeof window;var f=e=>{const t=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,i=t.classNameDark,l=t.classNameLight,o=t.onChange,c=t.storageKey;void 0===c&&(c="darkMode");var u=t.storageProvider,M=t.global,s=(0,a.useMemo)((function(){return d(c,u,M)}),[c,u,M]),m=s.getDefaultOnChange,g=s.mediaQueryEventTarget,N=(0,s.usePersistedDarkModeState)((0,s.getInitialValue)(e)),L=N[0],j=N[1],f=(0,a.useMemo)((function(){return o||m(n,i,l)}),[o,n,i,l,m]);return(0,a.useEffect)((function(){f(L)}),[f,L]),r("change",(function(e){return j(e.matches)}),g),{value:L,enable:(0,a.useCallback)((function(){return j(!0)}),[j]),disable:(0,a.useCallback)((function(){return j(!1)}),[j]),toggle:(0,a.useCallback)((function(){return j((function(e){return!e}))}),[j])}}(u()),{0:n,1:i}=(0,a.useState)(!1),{0:l,1:o}=(0,a.useState)(void 0);function c(e){j()&&localStorage.setItem("followSystemDarkMode","false"),j()&&o(localStorage.getItem("followSystemDarkMode")),e?t.enable():t.disable()}function u(){var e,t;return j()&&(null===(e=window)||void 0===e?void 0:e.matchMedia)&&(null===(t=window)||void 0===t?void 0:t.matchMedia("(prefers-color-scheme: dark)").matches)}var f;j()&&(null===(f=window)||void 0===f||f.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{"true"===l&&(e.matches?t.enable():t.disable())})));const v=(0,a.useRef)(null),y=(0,a.useRef)(null);return(0,a.useEffect)((()=>{function e(e){v.current.contains(e.target)||y.current.contains(e.target)||i(!1)}return o(localStorage.getItem("followSystemDarkMode")),null==l?(j()&&localStorage.setItem("followSystemDarkMode","true"),j()&&o(localStorage.getItem("followSystemDarkMode"))):"true"===l&&(u()?t.enable():t.disable()),document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[l,t]),a.createElement("div",{className:"light_darkmodetoggler-module--menu--3e0ff"},a.createElement("button",{ref:v,type:"button",className:g+" unselectable",onClick:()=>{i(!n)}},a.createElement(M.Z,{icon:s,className:L,size:"24px",alt:"Change to light mode"}),a.createElement("div",{className:L}," / "),a.createElement(M.Z,{icon:m,className:L,size:"18px",alt:"Change to dark mode"})),a.createElement("div",{ref:y,className:"light_darkmodetoggler-module--expandable-content--347ba "+(n?"light_darkmodetoggler-module--expanded--624c8":"")},n&&a.createElement("button",{type:"button",className:g+" "+N+" darkenOnHover unselectable",onClick:function(){j()&&localStorage.setItem("followSystemDarkMode","true"),j()&&o(localStorage.getItem("followSystemDarkMode")),u()?t.enable():t.disable()}},a.createElement("div",null," Follow system ")),n&&a.createElement("button",{type:"button",className:g+" "+N+" darkenOnHover unselectable",onClick:()=>{c(!1)}},a.createElement(M.Z,{icon:s,size:"24px",alt:"Change to light mode"})),n&&a.createElement("button",{type:"button",className:g+" "+N+" darkenOnHover unselectable",onClick:()=>{c(!0)}},a.createElement(M.Z,{icon:m,size:"18px",alt:"Change to dark mode"}))))}},866:function(e,t,n){n.d(t,{S:function(){return i}});var a=n(7294),r=n(4854);const i=e=>{let{title:t,description:n,pathname:i,type:l,image:o,children:c}=e;const{title:u,description:d,image:M,siteUrl:s}=(0,r.useStaticQuery)("2269431855").site.siteMetadata,m={title:t||u,extendedTitle:t?t+" | "+u:u,description:n||d,image:o?""+s+o:""+s+M,url:""+s+(i||""),type:l||"website"};return a.createElement(a.Fragment,null,a.createElement("title",null,m.extendedTitle),a.createElement("meta",{name:"description",content:m.description}),a.createElement("meta",{name:"image",content:m.image}),a.createElement("meta",{property:"og:title",content:m.title}),a.createElement("meta",{property:"og:url",content:m.url}),a.createElement("meta",{property:"og:type",content:m.type}),a.createElement("meta",{property:"og:image",content:m.image}),a.createElement("meta",{property:"og:description",content:m.description}),c)}},4804:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(2137);var i=e=>{let{classes:t,children:n}=e;return a.createElement("div",{className:r.r+" "+t},n)};var l=e=>{let{children:t}=e;return a.createElement("div",{className:"maincontent-module--main-content--498d8"},t)};var o=e=>{let{header:t,date:n,content:r,leftSidebarClass:o,rightSidebarClass:c,children:u}=e;return console.log("leftSidebarClass: "+o),a.createElement("div",{className:"wrapper-module--wrapper--c93c8"},a.createElement(i,{classes:o}),a.createElement(l,{id:"mainContent"},a.createElement("h1",null,t),n&&a.createElement("p",{className:"wrapper-module--created-date--69f6d"}," ",n," "),r&&a.createElement("div",{className:"wrapper-module--main-content-div--71d98",dangerouslySetInnerHTML:{__html:r}}),u),a.createElement(i,{classes:c}))}},4472:function(e,t,n){n.r(t),n.d(t,{Head:function(){return g},default:function(){return m}});var a=n(7294),r=n(866),i=n(9454),l=n(7945),o=n(7144);var c=()=>a.createElement("div",{className:o.SC+" "+o.TT},a.createElement(i.Z,{className:o._C,icon:"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOS40NzQgNS4yMDlzLTQuNTAxIDQuNTA1LTYuMjU0IDYuMjU5Yy0uMTQ3LjE0Ni0uMjIuMzM4LS4yMi41M3MuMDczLjM4NC4yMi41M2MxLjc1MiAxLjc1NCA2LjI1MiA2LjI1NyA2LjI1MiA2LjI1Ny4xNDUuMTQ1LjMzNi4yMTcuNTI3LjIxNy4xOTEtLjAwMS4zODMtLjA3NC41My0uMjIxLjI5My0uMjkzLjI5NC0uNzY2LjAwNC0xLjA1N2wtNC45NzYtNC45NzZoMTQuNjkyYy40MTQgMCAuNzUtLjMzNi43NS0uNzVzLS4zMzYtLjc1LS43NS0uNzVoLTE0LjY5Mmw0Ljk3OC00Ljk3OWMuMjg5LS4yODkuMjg3LS43NjEtLjAwNi0xLjA1NC0uMTQ3LS4xNDctLjMzOS0uMjIxLS41My0uMjIxLS4xOTEtLjAwMS0uMzguMDcxLS41MjUuMjE1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",size:"36px",link:"/blog"},"Back to blog"),a.createElement(l.Z,null)),u=n(4804),d=n(2961);var M=e=>{let{edited:t,created:n}=e;return a.createElement("div",{className:"editnote-module--edit-note--bb29b"},a.createElement("p",null,"Last edited: ",t||n))},s=n(2137);var m=e=>{let{data:t}=e;const{markdownRemark:n}=t,{frontmatter:r,html:i}=n;return a.createElement("div",null,a.createElement(c,null),a.createElement(u.Z,{leftSidebarClass:s.U,header:r.title,date:r.date,content:i},a.createElement(M,{edited:r.lastChanged,created:r.date}),a.createElement(d.Z,null)))};const g=e=>{let{data:t}=e;const{markdownRemark:n}=t,{frontmatter:i}=n;return a.createElement(r.S,{title:i.title,pathname:"/blog"+i.slug,description:i.description,const:!0,image:"/blog"+i.image})}},7144:function(e,t,n){n.d(t,{AX:function(){return r},Ah:function(){return o},SC:function(){return u},TT:function(){return d},_C:function(){return a},_X:function(){return c},w5:function(){return i},zh:function(){return l}});var a="navigationbar-module--blog-link--1e674",r="navigationbar-module--expandable-content--54ab8",i="navigationbar-module--expandable-content-item--7816d",l="navigationbar-module--expanded--16d66",o="navigationbar-module--hide-on-desktop--c387c",c="navigationbar-module--hide-on-mobile--8674f",u="navigationbar-module--navigation-bar--880ae",d="navigationbar-module--navigation-bar-blog--9b855"},2137:function(e,t,n){n.d(t,{U:function(){return r},r:function(){return a}});var a="sidebar-module--sidebar--ac64c",r="sidebar-module--sidebar-small--54e7a"}}]);
//# sourceMappingURL=component---src-templates-blog-post-jsx-dfc9269b7342ad110f5d.js.map