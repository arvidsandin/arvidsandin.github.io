"use strict";(self.webpackChunkarvid_sandin=self.webpackChunkarvid_sandin||[]).push([[937],{2961:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=e=>a.createElement("div",{className:"footer-module--footer--a2fe4"},e.children,a.createElement("p",{className:"footer-module--footer-text--407b8"}," Made by: ",a.createElement("a",{href:"https://github.com/arvidsandin",target:"_blank",rel:"noopener noreferrer"},"arvidsandin")))},9454:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r="icon-module--icon--589c7";var l=e=>{const t=e.height||e.size||32,n=e.width||e.size||32;return e.link?a.createElement("a",{href:e.link,className:`${r} icon-module--icon-clickable--8a33f ${e.className}`},a.createElement("img",{src:e.icon,style:{height:t,width:n},alt:e.alt}),e.children):a.createElement("div",{className:`${r} ${e.className}`},a.createElement("img",{src:e.icon,style:{height:t,width:n},alt:e.alt}),e.children)}},7945:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7294);function r(e,t,r,l){void 0===r&&(r=n.g),void 0===l&&(l={});var o=(0,a.useRef)(),i=l.capture,c=l.passive,u=l.once;(0,a.useEffect)((function(){o.current=t}),[t]),(0,a.useEffect)((function(){if(n.g&&n.g.addEventListener){var t=function(e){return o.current(e)},a={capture:i,passive:c,once:u};return n.g.addEventListener(e,t,a),function(){n.g.removeEventListener(e,t,a)}}}),[e,n.g,i,c,u])}var l={},o=function(e,t,n){return l[e]||(l[e]={callbacks:[],value:n}),l[e].callbacks.push(t),{deregister:function(){var n=l[e].callbacks,a=n.indexOf(t);a>-1&&n.splice(a,1)},emit:function(n){l[e].value!==n&&(l[e].value=n,l[e].callbacks.forEach((function(e){t!==e&&e(n)})))}}};function i(e,t){if(void 0===t&&(t=void 0!==n.g&&n.g.localStorage?n.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var l=(i=t,{get:function(e,t){var n=i.getItem(e);return null==n?"function"==typeof t?t():t:JSON.parse(n)},set:function(e,t){i.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,n){var l=n.get,i=n.set,c=(0,a.useRef)(null),u=(0,a.useState)((function(){return l(t,e)})),s=u[0],d=u[1];r("storage",(function(e){if(e.key===t){var n=JSON.parse(e.newValue);s!==n&&d(n)}})),(0,a.useEffect)((function(){return c.current=o(t,d,e),function(){c.current.deregister()}}),[e,t]);var m=(0,a.useCallback)((function(e){var n="function"==typeof e?e(s):e;i(t,n),d(n),c.current.emit(e)}),[s,i,t]);return[s,m]}(t,e,l)}}var i;return a.useState}var c=function(){},u={classList:{add:c,remove:c}},s=function(e,t,r){void 0===r&&(r=n.g);var l=e?i(e,t):a.useState,o=n.g.matchMedia?n.g.matchMedia("(prefers-color-scheme: dark)"):{},c={addEventListener:function(e,t){return o.addListener&&o.addListener(t)},removeEventListener:function(e,t){return o.removeListener&&o.removeListener(t)}},s="(prefers-color-scheme: dark)"===o.media,d=n.g.document&&n.g.document.body||u;return{usePersistedDarkModeState:l,getDefaultOnChange:function(e,t,n){return void 0===e&&(e=d),void 0===t&&(t="dark-mode"),void 0===n&&(n="light-mode"),function(a){e.classList.add(a?t:n),e.classList.remove(a?n:t)}},mediaQueryEventTarget:c,getInitialValue:function(e){return s?o.matches:e}}};var d=n(9454),m="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptNi4zMTItMTAuODk3Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIvPjwvc3ZnPg==",M="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTAuOTk5YzEuNDM3LjQzOCAyLjU2MiAxLjU2NCAyLjk5OSAzLjAwMS40NC0xLjQzNyAxLjU2NS0yLjU2MiAzLjAwMS0zLTEuNDM2LS40MzktMi41NjEtMS41NjMtMy4wMDEtMy0uNDM3IDEuNDM2LTEuNTYyIDIuNTYxLTIuOTk5IDIuOTk5em04LjAwMS4wMDFjLjk1OC4yOTMgMS43MDcgMS4wNDIgMiAyLjAwMS4yOTEtLjk1OSAxLjA0Mi0xLjcwOSAxLjk5OS0yLjAwMS0uOTU3LS4yOTItMS43MDctMS4wNDItMi0yLS4yOTMuOTU4LTEuMDQyIDEuNzA4LTEuOTk5IDJ6bS0xLTljLS40MzcgMS40MzctMS41NjMgMi41NjItMi45OTggMy4wMDEgMS40MzguNDQgMi41NjEgMS41NjQgMy4wMDEgMy4wMDIuNDM3LTEuNDM4IDEuNTYzLTIuNTYzIDIuOTk2LTMuMDAyLTEuNDMzLS40MzctMi41NTktMS41NjQtMi45OTktMy4wMDF6bS03LjAwMSAyMmMtNi42MTcgMC0xMi01LjM4My0xMi0xMnM1LjM4My0xMiAxMi0xMmMxLjg5NCAwIDMuNjMuNDk3IDUuMzcgMS4xNzktMi45NDguNTA0LTkuMzcgMy4yNjYtOS4zNyAxMC44MjEgMCA3LjQ1NCA1LjkxNyAxMC4yMDggOS4zNyAxMC44MjEtMS41Ljg0Ni0zLjQ3NiAxLjE3OS01LjM3IDEuMTc5eiIvPjwvc3ZnPg==",g="light_darkmodetoggler-module--button--f6de7",N="light_darkmodetoggler-module--expandable-content-item--e891c",L="light_darkmodetoggler-module--light-dark-mode-icon--ea1e9";const f=()=>"undefined"!=typeof window;var v=e=>{const t=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var n=t.element,l=t.classNameDark,o=t.classNameLight,i=t.onChange,c=t.storageKey;void 0===c&&(c="darkMode");var u=t.storageProvider,d=t.global,m=(0,a.useMemo)((function(){return s(c,u,d)}),[c,u,d]),M=m.getDefaultOnChange,g=m.mediaQueryEventTarget,N=(0,m.usePersistedDarkModeState)((0,m.getInitialValue)(e)),L=N[0],f=N[1],v=(0,a.useMemo)((function(){return i||M(n,l,o)}),[i,n,l,o,M]);return(0,a.useEffect)((function(){v(L)}),[v,L]),r("change",(function(e){return f(e.matches)}),g),{value:L,enable:(0,a.useCallback)((function(){return f(!0)}),[f]),disable:(0,a.useCallback)((function(){return f(!1)}),[f]),toggle:(0,a.useCallback)((function(){return f((function(e){return!e}))}),[f])}}(u()),{0:n,1:l}=(0,a.useState)(!1),{0:o,1:i}=(0,a.useState)(void 0);function c(e){f()&&localStorage.setItem("followSystemDarkMode","false"),f()&&i(localStorage.getItem("followSystemDarkMode")),e?t.enable():t.disable()}function u(){var e,t;return f()&&(null===(e=window)||void 0===e?void 0:e.matchMedia)&&(null===(t=window)||void 0===t?void 0:t.matchMedia("(prefers-color-scheme: dark)").matches)}var v;f()&&(null===(v=window)||void 0===v||v.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{"true"===o&&(e.matches?t.enable():t.disable())})));const E=(0,a.useRef)(null),j=(0,a.useRef)(null);return(0,a.useEffect)((()=>{function e(e){E.current.contains(e.target)||j.current.contains(e.target)||l(!1)}return i(localStorage.getItem("followSystemDarkMode")),null==o?(f()&&localStorage.setItem("followSystemDarkMode","true"),f()&&i(localStorage.getItem("followSystemDarkMode"))):"true"===o&&(u()?t.enable():t.disable()),document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[o,t]),a.createElement("div",{className:"light_darkmodetoggler-module--menu--3e0ff"},a.createElement("button",{ref:E,type:"button",className:`${g} unselectable`,onClick:()=>{l(!n)}},a.createElement(d.Z,{icon:m,className:L,size:"24px",alt:"Change to light mode"}),a.createElement("div",{className:L}," / "),a.createElement(d.Z,{icon:M,className:L,size:"18px",alt:"Change to dark mode"})),a.createElement("div",{ref:j,className:"light_darkmodetoggler-module--expandable-content--347ba "+(n?"light_darkmodetoggler-module--expanded--624c8":"")},n&&a.createElement("button",{type:"button",className:`${g} ${N} darkenOnHover unselectable`,onClick:function(){f()&&localStorage.setItem("followSystemDarkMode","true"),f()&&i(localStorage.getItem("followSystemDarkMode")),u()?t.enable():t.disable()}},a.createElement("div",null," Follow system ")),n&&a.createElement("button",{type:"button",className:`${g} ${N} darkenOnHover unselectable`,onClick:()=>{c(!1)}},a.createElement(d.Z,{icon:m,size:"24px",alt:"Change to light mode"})),n&&a.createElement("button",{type:"button",className:`${g} ${N} darkenOnHover unselectable`,onClick:()=>{c(!0)}},a.createElement(d.Z,{icon:M,size:"18px",alt:"Change to dark mode"}))))}},866:function(e,t,n){n.d(t,{S:function(){return l}});var a=n(7294),r=n(4854);const l=e=>{let{title:t,description:n,pathname:l,type:o,image:i,children:c}=e;const{title:u,description:s,image:d,siteUrl:m}=(0,r.useStaticQuery)("2269431855").site.siteMetadata,M={title:t||u,extendedTitle:t?`${t} | ${u}`:u,description:n||s,image:i?`${m}${i}`:`${m}${d}`,url:`${m}${l||""}`,type:o||"website"};return a.createElement(a.Fragment,null,a.createElement("title",null,M.extendedTitle),a.createElement("meta",{name:"description",content:M.description}),a.createElement("meta",{name:"image",content:M.image}),a.createElement("meta",{property:"og:title",content:M.title}),a.createElement("meta",{property:"og:url",content:M.url}),a.createElement("meta",{property:"og:type",content:M.type}),a.createElement("meta",{property:"og:image",content:M.image}),a.createElement("meta",{property:"og:description",content:M.description}),c)}},390:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294);var r=e=>a.createElement("div",{className:`navbaritem-module--navbar-item--acbd7 ${e.className} darkenOnHover`},a.createElement("a",{className:"navbaritem-module--link--ee495",href:e.link,id:e.id},e.text))},1317:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(390),l=n(7945),o=n(9454),i=n(7144);var c=()=>{const{0:e,1:t}=(0,a.useState)(!1),n=(0,a.useRef)(null),c=(0,a.useRef)(null);return(0,a.useEffect)((()=>{function a(a){console.log("here");const r=c.current.contains(a.target);n.current.contains(a.target)?(t(!e),console.log("here3")):r||(t(!1),console.log("here2"))}return document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}}),[e]),a.createElement("div",{className:i.SC},a.createElement("div",{className:`${i.Ah}`},a.createElement("div",{ref:n,className:i._C},a.createElement(o.Z,{className:"",icon:"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjIgMTYuNzVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE4LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE4LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXptMC01YzAtLjQxNC0uMzM2LS43NS0uNzUtLjc1aC0xOC41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWgxOC41Yy40MTQgMCAuNzUtLjMzNi43NS0uNzV6bTAtNWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMTguNWMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1cy4zMzYuNzUuNzUuNzVoMTguNWMuNDE0IDAgLjc1LS4zMzYuNzUtLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",size:"36px",link:"#"})),a.createElement("div",{className:`${i.AX} ${e?i.zh:""}`,ref:c},e&&a.createElement(r.Z,{className:i.w5,link:"/",id:"homelink",text:"Home"}),e&&a.createElement(r.Z,{className:i.w5,link:"/blog",id:"bloglink",text:"Blog"}),e&&a.createElement(r.Z,{className:i.w5,link:"/thesis",id:"thesisLink",text:"Illegal Cookie Banners"}),e&&a.createElement(r.Z,{className:i.w5,link:"/custom-top-sort",id:"custom-top-sortLink",text:"Custom top sort"}),e&&a.createElement(r.Z,{className:i.w5,link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),e&&a.createElement(r.Z,{className:i.w5,link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}))),a.createElement(r.Z,{className:i._X,link:"/",id:"homelink",text:"Home"}),a.createElement(r.Z,{className:i._X,link:"/blog",id:"blogLink",text:"Blog"}),a.createElement(r.Z,{className:i._X,link:"/thesis",id:"thesisLink",text:"Illegal Cookie Banners"}),a.createElement(r.Z,{className:i._X,link:"/custom-top-sort",id:"custom-top-sortLink",text:"Custom top sort"}),a.createElement(r.Z,{className:i._X,link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),a.createElement(r.Z,{className:i._X,link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}),a.createElement(l.Z,null))}},4804:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),r=n(2137);var l=e=>{let{classes:t,children:n}=e;return a.createElement("div",{className:`${r.r} ${t}`},n)};var o=e=>{let{children:t}=e;return a.createElement("div",{className:"maincontent-module--main-content--498d8"},t)};var i=e=>{let{header:t,date:n,content:r,leftSidebarClass:i,rightSidebarClass:c,children:u}=e;return console.log("leftSidebarClass: "+i),a.createElement("div",{className:"wrapper-module--wrapper--c93c8"},a.createElement(l,{classes:i}),a.createElement(o,{id:"mainContent"},a.createElement("h1",null,t),n&&a.createElement("p",{className:"wrapper-module--created-date--69f6d"}," ",n," "),r&&a.createElement("div",{className:"wrapper-module--main-content-div--71d98",dangerouslySetInnerHTML:{__html:r}}),u),a.createElement(l,{classes:c}))}},8717:function(e,t,n){n.r(t),n.d(t,{Head:function(){return c}});var a=n(7294),r=n(866),l=n(1317),o=n(4804),i=n(2961);t.default=e=>{let{data:t}=e;const{markdownRemark:n}=t,{frontmatter:r,html:c}=n;return a.createElement("div",null,a.createElement(l.Z,null),a.createElement(o.Z,{header:r.headerLink?a.createElement("a",{href:r.headerLink,target:"_blank",rel:"noopener noreferrer"},r.title):r.title,content:c},a.createElement(i.Z,null)))};const c=e=>{let{data:t}=e;const{markdownRemark:n}=t,{frontmatter:l}=n;return a.createElement(r.S,{title:l.title,pathname:l.slug})}},7144:function(e,t,n){n.d(t,{AX:function(){return r},Ah:function(){return i},SC:function(){return u},TT:function(){return s},_C:function(){return a},_X:function(){return c},w5:function(){return l},zh:function(){return o}});var a="navigationbar-module--blog-link--1e674",r="navigationbar-module--expandable-content--54ab8",l="navigationbar-module--expandable-content-item--7816d",o="navigationbar-module--expanded--16d66",i="navigationbar-module--hide-on-desktop--c387c",c="navigationbar-module--hide-on-mobile--8674f",u="navigationbar-module--navigation-bar--880ae",s="navigationbar-module--navigation-bar-blog--9b855"},2137:function(e,t,n){n.d(t,{U:function(){return r},r:function(){return a}});var a="sidebar-module--sidebar--ac64c",r="sidebar-module--sidebar-small--54e7a"}}]);
//# sourceMappingURL=component---src-templates-portfolio-entry-jsx-998005d5d1fd85bdbe99.js.map