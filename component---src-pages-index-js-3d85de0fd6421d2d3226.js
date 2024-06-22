"use strict";(self.webpackChunkarvid_sandin=self.webpackChunkarvid_sandin||[]).push([[678],{2961:function(e,t,M){M.d(t,{Z:function(){return n}});var N=M(7294);var n=e=>N.createElement("div",{className:"footer-module--footer--a2fe4"},e.children,N.createElement("p",{className:"footer-module--footer-text--407b8"}," Made by: ",N.createElement("a",{href:"https://github.com/arvidsandin",target:"_blank",rel:"noopener noreferrer"},"arvidsandin")))},9454:function(e,t,M){M.d(t,{Z:function(){return a}});var N=M(7294),n="icon-module--icon--589c7";var a=e=>{const t=e.height||e.size||32,M=e.width||e.size||32;return e.link?N.createElement("a",{href:e.link,className:`${n} icon-module--icon-clickable--8a33f ${e.className}`},N.createElement("img",{src:e.icon,style:{height:t,width:M},alt:e.alt}),e.children):N.createElement("div",{className:`${n} ${e.className}`},N.createElement("img",{src:e.icon,style:{height:t,width:M},alt:e.alt}),e.children)}},7945:function(e,t,M){M.d(t,{Z:function(){return d}});var N=M(7294);function n(e,t,n,a){void 0===n&&(n=M.g),void 0===a&&(a={});var i=(0,N.useRef)(),u=a.capture,c=a.passive,r=a.once;(0,N.useEffect)((function(){i.current=t}),[t]),(0,N.useEffect)((function(){if(M.g&&M.g.addEventListener){var t=function(e){return i.current(e)},N={capture:u,passive:c,once:r};return M.g.addEventListener(e,t,N),function(){M.g.removeEventListener(e,t,N)}}}),[e,M.g,u,c,r])}var a={},i=function(e,t,M){return a[e]||(a[e]={callbacks:[],value:M}),a[e].callbacks.push(t),{deregister:function(){var M=a[e].callbacks,N=M.indexOf(t);N>-1&&M.splice(N,1)},emit:function(M){a[e].value!==M&&(a[e].value=M,a[e].callbacks.forEach((function(e){t!==e&&e(M)})))}}};function u(e,t){if(void 0===t&&(t=void 0!==M.g&&M.g.localStorage?M.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),t){var a=(u=t,{get:function(e,t){var M=u.getItem(e);return null==M?"function"==typeof t?t():t:JSON.parse(M)},set:function(e,t){u.setItem(e,JSON.stringify(t))}});return function(t){return function(e,t,M){var a=M.get,u=M.set,c=(0,N.useRef)(null),r=(0,N.useState)((function(){return a(t,e)})),o=r[0],l=r[1];n("storage",(function(e){if(e.key===t){var M=JSON.parse(e.newValue);o!==M&&l(M)}})),(0,N.useEffect)((function(){return c.current=i(t,l,e),function(){c.current.deregister()}}),[e,t]);var g=(0,N.useCallback)((function(e){var M="function"==typeof e?e(o):e;u(t,M),l(M),c.current.emit(e)}),[o,u,t]);return[o,g]}(t,e,a)}}var u;return N.useState}var c=function(){},r={classList:{add:c,remove:c}},o=function(e,t,n){void 0===n&&(n=M.g);var a=e?u(e,t):N.useState,i=M.g.matchMedia?M.g.matchMedia("(prefers-color-scheme: dark)"):{},c={addEventListener:function(e,t){return i.addListener&&i.addListener(t)},removeEventListener:function(e,t){return i.removeListener&&i.removeListener(t)}},o="(prefers-color-scheme: dark)"===i.media,l=M.g.document&&M.g.document.body||r;return{usePersistedDarkModeState:a,getDefaultOnChange:function(e,t,M){return void 0===e&&(e=l),void 0===t&&(t="dark-mode"),void 0===M&&(M="light-mode"),function(N){e.classList.add(N?t:M),e.classList.remove(N?M:t)}},mediaQueryEventTarget:c,getInitialValue:function(e){return o?i.matches:e}}};var l=M(9454),g="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptNi4zMTItMTAuODk3Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIvPjwvc3ZnPg==",j="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTAuOTk5YzEuNDM3LjQzOCAyLjU2MiAxLjU2NCAyLjk5OSAzLjAwMS40NC0xLjQzNyAxLjU2NS0yLjU2MiAzLjAwMS0zLTEuNDM2LS40MzktMi41NjEtMS41NjMtMy4wMDEtMy0uNDM3IDEuNDM2LTEuNTYyIDIuNTYxLTIuOTk5IDIuOTk5em04LjAwMS4wMDFjLjk1OC4yOTMgMS43MDcgMS4wNDIgMiAyLjAwMS4yOTEtLjk1OSAxLjA0Mi0xLjcwOSAxLjk5OS0yLjAwMS0uOTU3LS4yOTItMS43MDctMS4wNDItMi0yLS4yOTMuOTU4LTEuMDQyIDEuNzA4LTEuOTk5IDJ6bS0xLTljLS40MzcgMS40MzctMS41NjMgMi41NjItMi45OTggMy4wMDEgMS40MzguNDQgMi41NjEgMS41NjQgMy4wMDEgMy4wMDIuNDM3LTEuNDM4IDEuNTYzLTIuNTYzIDIuOTk2LTMuMDAyLTEuNDMzLS40MzctMi41NTktMS41NjQtMi45OTktMy4wMDF6bS03LjAwMSAyMmMtNi42MTcgMC0xMi01LjM4My0xMi0xMnM1LjM4My0xMiAxMi0xMmMxLjg5NCAwIDMuNjMuNDk3IDUuMzcgMS4xNzktMi45NDguNTA0LTkuMzcgMy4yNjYtOS4zNyAxMC44MjEgMCA3LjQ1NCA1LjkxNyAxMC4yMDggOS4zNyAxMC44MjEtMS41Ljg0Ni0zLjQ3NiAxLjE3OS01LjM3IDEuMTc5eiIvPjwvc3ZnPg==",L="light_darkmodetoggler-module--button--f6de7",D="light_darkmodetoggler-module--expandable-content-item--e891c",I="light_darkmodetoggler-module--light-dark-mode-icon--ea1e9";const s=()=>"undefined"!=typeof window;var d=e=>{const t=function(e,t){void 0===e&&(e=!1),void 0===t&&(t={});var M=t.element,a=t.classNameDark,i=t.classNameLight,u=t.onChange,c=t.storageKey;void 0===c&&(c="darkMode");var r=t.storageProvider,l=t.global,g=(0,N.useMemo)((function(){return o(c,r,l)}),[c,r,l]),j=g.getDefaultOnChange,L=g.mediaQueryEventTarget,D=(0,g.usePersistedDarkModeState)((0,g.getInitialValue)(e)),I=D[0],s=D[1],d=(0,N.useMemo)((function(){return u||j(M,a,i)}),[u,M,a,i,j]);return(0,N.useEffect)((function(){d(I)}),[d,I]),n("change",(function(e){return s(e.matches)}),L),{value:I,enable:(0,N.useCallback)((function(){return s(!0)}),[s]),disable:(0,N.useCallback)((function(){return s(!1)}),[s]),toggle:(0,N.useCallback)((function(){return s((function(e){return!e}))}),[s])}}(r()),{0:M,1:a}=(0,N.useState)(!1),{0:i,1:u}=(0,N.useState)(void 0);function c(e){s()&&localStorage.setItem("followSystemDarkMode","false"),s()&&u(localStorage.getItem("followSystemDarkMode")),e?t.enable():t.disable()}function r(){var e,t;return s()&&(null===(e=window)||void 0===e?void 0:e.matchMedia)&&(null===(t=window)||void 0===t?void 0:t.matchMedia("(prefers-color-scheme: dark)").matches)}var d;s()&&(null===(d=window)||void 0===d||d.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{"true"===i&&(e.matches?t.enable():t.disable())})));const y=(0,N.useRef)(null),z=(0,N.useRef)(null);return(0,N.useEffect)((()=>{function e(e){y.current.contains(e.target)||z.current.contains(e.target)||a(!1)}return u(localStorage.getItem("followSystemDarkMode")),null==i?(s()&&localStorage.setItem("followSystemDarkMode","true"),s()&&u(localStorage.getItem("followSystemDarkMode"))):"true"===i&&(r()?t.enable():t.disable()),document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[i,t]),N.createElement("div",{className:"light_darkmodetoggler-module--menu--3e0ff"},N.createElement("button",{ref:y,type:"button",className:`${L} unselectable`,onClick:()=>{a(!M)}},N.createElement(l.Z,{icon:g,className:I,size:"24px",alt:"Change to light mode"}),N.createElement("div",{className:I}," / "),N.createElement(l.Z,{icon:j,className:I,size:"18px",alt:"Change to dark mode"})),N.createElement("div",{ref:z,className:"light_darkmodetoggler-module--expandable-content--347ba "+(M?"light_darkmodetoggler-module--expanded--624c8":"")},M&&N.createElement("button",{type:"button",className:`${L} ${D} darkenOnHover unselectable`,onClick:function(){s()&&localStorage.setItem("followSystemDarkMode","true"),s()&&u(localStorage.getItem("followSystemDarkMode")),r()?t.enable():t.disable()}},N.createElement("div",null," Follow system ")),M&&N.createElement("button",{type:"button",className:`${L} ${D} darkenOnHover unselectable`,onClick:()=>{c(!1)}},N.createElement(l.Z,{icon:g,size:"24px",alt:"Change to light mode"})),M&&N.createElement("button",{type:"button",className:`${L} ${D} darkenOnHover unselectable`,onClick:()=>{c(!0)}},N.createElement(l.Z,{icon:j,size:"18px",alt:"Change to dark mode"}))))}},866:function(e,t,M){M.d(t,{S:function(){return a}});var N=M(7294),n=M(4854);const a=e=>{let{title:t,description:M,pathname:a,type:i,image:u,children:c}=e;const{title:r,description:o,image:l,siteUrl:g}=(0,n.useStaticQuery)("2269431855").site.siteMetadata,j={title:t||r,extendedTitle:t?`${t} | ${r}`:r,description:M||o,image:u?`${g}${u}`:`${g}${l}`,url:`${g}${a||""}`,type:i||"website"};return N.createElement(N.Fragment,null,N.createElement("title",null,j.extendedTitle),N.createElement("meta",{name:"description",content:j.description}),N.createElement("meta",{name:"image",content:j.image}),N.createElement("meta",{property:"og:title",content:j.title}),N.createElement("meta",{property:"og:url",content:j.url}),N.createElement("meta",{property:"og:type",content:j.type}),N.createElement("meta",{property:"og:image",content:j.image}),N.createElement("meta",{property:"og:description",content:j.description}),c)}},390:function(e,t,M){M.d(t,{Z:function(){return n}});var N=M(7294);var n=e=>N.createElement("div",{className:`navbaritem-module--navbar-item--acbd7 ${e.className} darkenOnHover`},N.createElement("a",{className:"navbaritem-module--link--ee495",href:e.link,id:e.id},e.text))},1317:function(e,t,M){M.d(t,{Z:function(){return c}});var N=M(7294),n=M(390),a=M(7945),i=M(9454),u=M(7144);var c=()=>{const{0:e,1:t}=(0,N.useState)(!1),M=(0,N.useRef)(null),c=(0,N.useRef)(null);return(0,N.useEffect)((()=>{function N(N){console.log("here");const n=c.current.contains(N.target);M.current.contains(N.target)?(t(!e),console.log("here3")):n||(t(!1),console.log("here2"))}return document.addEventListener("click",N),()=>{document.removeEventListener("click",N)}}),[e]),N.createElement("div",{className:u.SC},N.createElement("div",{className:`${u.Ah}`},N.createElement("div",{ref:M,className:u._C},N.createElement(i.Z,{className:"",icon:"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjIgMTYuNzVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE4LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE4LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXptMC01YzAtLjQxNC0uMzM2LS43NS0uNzUtLjc1aC0xOC41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWgxOC41Yy40MTQgMCAuNzUtLjMzNi43NS0uNzV6bTAtNWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMTguNWMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1cy4zMzYuNzUuNzUuNzVoMTguNWMuNDE0IDAgLjc1LS4zMzYuNzUtLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",size:"36px",link:"#"})),N.createElement("div",{className:`${u.AX} ${e?u.zh:""}`,ref:c},e&&N.createElement(n.Z,{className:u.w5,link:"/",id:"homelink",text:"Home"}),e&&N.createElement(n.Z,{className:u.w5,link:"/blog",id:"bloglink",text:"Blog"}),e&&N.createElement(n.Z,{className:u.w5,link:"/thesis",id:"thesisLink",text:"Illegal Cookie Banners"}),e&&N.createElement(n.Z,{className:u.w5,link:"/custom-top-sort",id:"custom-top-sortLink",text:"Custom top sort"}),e&&N.createElement(n.Z,{className:u.w5,link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),e&&N.createElement(n.Z,{className:u.w5,link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}))),N.createElement(n.Z,{className:u._X,link:"/",id:"homelink",text:"Home"}),N.createElement(n.Z,{className:u._X,link:"/blog",id:"blogLink",text:"Blog"}),N.createElement(n.Z,{className:u._X,link:"/thesis",id:"thesisLink",text:"Illegal Cookie Banners"}),N.createElement(n.Z,{className:u._X,link:"/custom-top-sort",id:"custom-top-sortLink",text:"Custom top sort"}),N.createElement(n.Z,{className:u._X,link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),N.createElement(n.Z,{className:u._X,link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}),N.createElement(a.Z,null))}},4804:function(e,t,M){M.d(t,{Z:function(){return u}});var N=M(7294),n=M(2137);var a=e=>{let{classes:t,children:M}=e;return N.createElement("div",{className:`${n.r} ${t}`},M)};var i=e=>{let{children:t}=e;return N.createElement("div",{className:"maincontent-module--main-content--498d8"},t)};var u=e=>{let{header:t,date:M,content:n,leftSidebarClass:u,rightSidebarClass:c,children:r}=e;return console.log("leftSidebarClass: "+u),N.createElement("div",{className:"wrapper-module--wrapper--c93c8"},N.createElement(a,{classes:u}),N.createElement(i,{id:"mainContent"},N.createElement("h1",null,t),M&&N.createElement("p",{className:"wrapper-module--created-date--69f6d"}," ",M," "),n&&N.createElement("div",{className:"wrapper-module--main-content-div--71d98",dangerouslySetInnerHTML:{__html:n}}),r),N.createElement(a,{classes:c}))}},9416:function(e,t,M){M.r(t),M.d(t,{Head:function(){return o},default:function(){return r}});var N=M(7294),n=M(866),a=M(1317),i=M(4804),u=M(2961);var c=e=>{const t=e.size||32;return N.createElement("a",{href:e.link,className:"logo-module--logo--36d88",target:"_blank",rel:"noopener noreferrer"+(e.rel_me?" me":"")},N.createElement("img",{src:e.logo,style:{height:t,width:t},alt:e.alt}))};var r=()=>N.createElement("div",null,N.createElement("title",null,"Arvid Sandin"),N.createElement(a.Z,null),N.createElement(i.Z,{header:"Arvid Sandin",content:"Hi! I'm Arvid Sandin and I'm a system developer with a Master of Science in engineering degree in IT. As a person I am always open to learn and appreciate well executed technical solutions<br /><br />In the navigation bar, you will find some of my personal programming projects and experiments. If you want to get in touch, please send a message in any of the services linked below.<br /><br />If you're wondering about this website in particular, it's build with Gatsby.js and React.js and hosted with GitHub Pages. More details and the source code for can be found  <a href='https://github.com/arvidsandin/arvidsandin.github.io'>in the repository</a>.<br />"},N.createElement(c,{logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg==",link:"https://www.linkedin.com/in/arvid-sandin/",alt:"LinkedIn logo",rel_me:!0}),N.createElement(c,{logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==",link:"https://github.com/arvidsandin",alt:"Github logo",rel_me:!0}),N.createElement(c,{logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45MTkgNC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAzLjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIwNCAwLTMuNTg0LS4wMTItNC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAwLTMuMjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0NS0uMDY5IDQuODQ5LS4wNjl6bTAtMi4xNjNjLTMuMjU5IDAtMy42NjcuMDE0LTQuOTQ3LjA3Mi00LjM1OC4yLTYuNzggMi42MTgtNi45OCA2Ljk4LS4wNTkgMS4yODEtLjA3MyAxLjY4OS0uMDczIDQuOTQ4IDAgMy4yNTkuMDE0IDMuNjY4LjA3MiA0Ljk0OC4yIDQuMzU4IDIuNjE4IDYuNzggNi45OCA2Ljk4IDEuMjgxLjA1OCAxLjY4OS4wNzIgNC45NDguMDcyIDMuMjU5IDAgMy42NjgtLjAxNCA0Ljk0OC0uMDcyIDQuMzU0LS4yIDYuNzgyLTIuNjE4IDYuOTc5LTYuOTguMDU5LTEuMjguMDczLTEuNjg5LjA3My00Ljk0OCAwLTMuMjU5LS4wMTQtMy42NjctLjA3Mi00Ljk0Ny0uMTk2LTQuMzU0LTIuNjE3LTYuNzgtNi45NzktNi45OC0xLjI4MS0uMDU5LTEuNjktLjA3My00Ljk0OS0uMDczem0wIDUuODM4Yy0zLjQwMyAwLTYuMTYyIDIuNzU5LTYuMTYyIDYuMTYyczIuNzU5IDYuMTYzIDYuMTYyIDYuMTYzIDYuMTYyLTIuNzU5IDYuMTYyLTYuMTYzYzAtMy40MDMtMi43NTktNi4xNjItNi4xNjItNi4xNjJ6bTAgMTAuMTYyYy0yLjIwOSAwLTQtMS43OS00LTQgMC0yLjIwOSAxLjc5MS00IDQtNHM0IDEuNzkxIDQgNGMwIDIuMjEtMS43OTEgNC00IDR6bTYuNDA2LTExLjg0NWMtLjc5NiAwLTEuNDQxLjY0NS0xLjQ0MSAxLjQ0cy42NDUgMS40NCAxLjQ0MSAxLjQ0Yy43OTUgMCAxLjQzOS0uNjQ1IDEuNDM5LTEuNDRzLS42NDQtMS40NC0xLjQzOS0xLjQ0eiIvPjwvc3ZnPg==",link:"https://www.instagram.com/arvidsandin/",alt:"Instagram logo",rel_me:!0}),N.createElement(c,{logo:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzQiIGhlaWdodD0iNzkiIHZpZXdCb3g9IjAgMCA3NCA3OSIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNNzMuNzAxNCAxNy40MzIzQzcyLjU2MTYgOS4wNTE1MiA2NS4xNzc0IDIuNDQ2OSA1Ni40MjQgMS4xNjcxQzU0Ljk0NzIgMC45NTA4NDMgNDkuMzUxOCAwLjE2MzgxOCAzNi4zOTAxIDAuMTYzODE4SDM2LjI5MzNDMjMuMzI4MSAwLjE2MzgxOCAyMC41NDY1IDAuOTUwODQzIDE5LjA2OTcgMS4xNjcxQzEwLjU2IDIuNDExNDUgMi43ODg3NyA4LjM0NjA0IDAuOTAzMzA2IDE2LjgyNkMtMC4wMDM1Nzg1NCAyMS4wMDIyIC0wLjEwMDM2MSAyNS42MzIyIDAuMDY4MTEyIDI5Ljg3OTNDMC4zMDgyNzUgMzUuOTY5OSAwLjM1NDg3NCA0Mi4wNDk4IDAuOTE0MDYgNDguMTE1NkMxLjMwMDY0IDUyLjE0NDggMS45NzUwMiA1Ni4xNDE5IDIuOTMyMTUgNjAuMDc2OUM0LjcyNDQxIDY3LjM0NDUgMTEuOTc5NSA3My4zOTI1IDE5LjA4NzYgNzUuODZDMjYuNjk3OSA3OC40MzMyIDM0Ljg4MjEgNzguODYwMyA0Mi43MjQgNzcuMDkzN0M0My41ODY2IDc2Ljg5NTIgNDQuNDM5OCA3Ni42NjQ3IDQ1LjI4MzMgNzYuNDAyNEM0Ny4xODY3IDc1LjgwMzMgNDkuNDE5OSA3NS4xMzMyIDUxLjA2MTYgNzMuOTU2MkM1MS4wODQxIDczLjkzOTcgNTEuMTAyNiA3My45MTg0IDUxLjExNTYgNzMuODkzOEM1MS4xMjg2IDczLjg2OTMgNTEuMTM1OSA3My44NDIxIDUxLjEzNjggNzMuODE0NFY2Ny45MzY2QzUxLjEzNjQgNjcuOTEwNyA1MS4xMzAyIDY3Ljg4NTIgNTEuMTE4NiA2Ny44NjJDNTEuMTA2OSA2Ny44Mzg4IDUxLjA5MDIgNjcuODE4NCA1MS4wNjk1IDY3LjgwMjVDNTEuMDQ4OSA2Ny43ODY1IDUxLjAyNDkgNjcuNzc1MyA1MC45OTk0IDY3Ljc2OTZDNTAuOTczOCA2Ny43NjQgNTAuOTQ3MyA2Ny43NjQxIDUwLjkyMTggNjcuNzY5OUM0NS44OTc2IDY4Ljk1NjkgNDAuNzQ5MSA2OS41NTE5IDM1LjU4MzYgNjkuNTQyNUMyNi42OTQgNjkuNTQyNSAyNC4zMDMxIDY1LjM2OTkgMjMuNjE4NCA2My42MzI3QzIzLjA2ODEgNjIuMTMxNCAyMi43MTg2IDYwLjU2NTQgMjIuNTc4OSA1OC45NzQ0QzIyLjU3NzUgNTguOTQ3NyAyMi41ODI1IDU4LjkyMSAyMi41OTM0IDU4Ljg5NjVDMjIuNjA0MyA1OC44NzIxIDIyLjYyMSA1OC44NTA1IDIyLjY0MTkgNTguODMzNkMyMi42NjI5IDU4LjgxNjcgMjIuNjg3NiA1OC44MDQ5IDIyLjcxNCA1OC43OTkyQzIyLjc0MDQgNTguNzkzNCAyMi43Njc4IDU4Ljc5NCAyMi43OTQgNTguODAwN0MyNy43MzQ1IDU5Ljk3OTYgMzIuNzk5IDYwLjU3NDYgMzcuODgxMyA2MC41NzMzQzM5LjEwMzYgNjAuNTczMyA0MC4zMjIzIDYwLjU3MzMgNDEuNTQ0NyA2MC41NDE0QzQ2LjY1NjIgNjAuMzk5NiA1Mi4wNDM3IDYwLjE0MDggNTcuMDcyOCA1OS4xNjk0QzU3LjE5ODMgNTkuMTQ0NiA1Ny4zMjM3IDU5LjEyMzMgNTcuNDMxMyA1OS4wOTE0QzY1LjM2MzggNTcuNTg0NyA3Mi45MTI4IDUyLjg1NTUgNzMuNjc5OSA0MC44Nzk5QzczLjcwODYgNDAuNDA4NCA3My43ODAzIDM1Ljk0MTUgNzMuNzgwMyAzNS40NTIzQzczLjc4MzkgMzMuNzg5NiA3NC4zMjE2IDIzLjY1NzYgNzMuNzAxNCAxNy40MzIzWk02MS40OTI1IDQ3LjMxNDRINTMuMTUxNFYyNy4xMDdDNTMuMTUxNCAyMi44NTI4IDUxLjM1OTEgMjAuNjgzMiA0Ny43MTM2IDIwLjY4MzJDNDMuNzA2MSAyMC42ODMyIDQxLjY5ODggMjMuMjQ5OSA0MS42OTg4IDI4LjMxOTRWMzkuMzgwM0gzMy40MDc4VjI4LjMxOTRDMzMuNDA3OCAyMy4yNDk5IDMxLjM5NjkgMjAuNjgzMiAyNy4zODk0IDIwLjY4MzJDMjMuNzY1NCAyMC42ODMyIDIxLjk1NTIgMjIuODUyOCAyMS45NTE2IDI3LjEwN1Y0Ny4zMTQ0SDEzLjYxNzZWMjYuNDkzN0MxMy42MTc2IDIyLjIzOTUgMTQuNzE1NyAxOC44NTk4IDE2LjkxMTggMTYuMzU0NUMxOS4xNzcyIDEzLjg1NTIgMjIuMTQ4OCAxMi41NzE5IDI1LjgzNzMgMTIuNTcxOUMzMC4xMDY0IDEyLjU3MTkgMzMuMzMyNSAxNC4xOTU1IDM1LjQ4MzIgMTcuNDM5NEwzNy41NTg3IDIwLjg4NTNMMzkuNjM3NyAxNy40Mzk0QzQxLjc4ODQgMTQuMTk1NSA0NS4wMTQ1IDEyLjU3MTkgNDkuMjc2NSAxMi41NzE5QzUyLjk2MTQgMTIuNTcxOSA1NS45MzI5IDEzLjg1NTIgNTguMjA1NSAxNi4zNTQ1QzYwLjQwMTcgMTguODU3NCA2MS40OTk3IDIyLjIzNzEgNjEuNDk5NyAyNi40OTM3TDYxLjQ5MjUgNDcuMzE0NFoiIGZpbGw9ImluaGVyaXQiLz4NCjwvc3ZnPg0K",link:"https://mas.to/@arvidsandin",alt:"Mastodon logo",rel_me:!0}),N.createElement(c,{logo:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNIDE2LDMyIEMgNy4xNjM0NDQsMzIgMCwyNC44MzY1NTYgMCwxNiAwLDcuMTYzNDQ0IDcuMTYzNDQ0LDAgMTYsMCAyNC44MzY1NTYsMCAzMiw3LjE2MzQ0NCAzMiwxNiAzMiwyNC44MzY1NTYgMjQuODM2NTU2LDMyIDE2LDMyIFogTSAxNC43Mjk4MDIsMTkuNDkzMTMgaCAyLjkzNTEzNSBjIDIuNzY1MDE0LDAgNS4wMDY1MDEsLTIuMTgyMDkyIDUuMDA2NTAxLC00Ljg3MzgzOCAwLC0yLjY5MTc0NiAtMi4yNDE0ODcsLTQuODczODM3NCAtNS4wMDY1MDEsLTQuODczODM3NCBoIC00LjIzNjI3IGMgLTEuNTk1MjAxLDAgLTIuODg4MzY2LDEuMjU4ODk4NCAtMi44ODgzNjYsMi44MTE4Mjk0IHYgMTAuOTQ0MDE0IHoiLz4NCjwvc3ZnPg==",link:"https://pixey.org/arvidsandin",alt:"Pixelfed logo",rel_me:!0}),N.createElement(u.Z,null)));const o=()=>N.createElement(n.S,null)},7144:function(e,t,M){M.d(t,{AX:function(){return n},Ah:function(){return u},SC:function(){return r},TT:function(){return o},_C:function(){return N},_X:function(){return c},w5:function(){return a},zh:function(){return i}});var N="navigationbar-module--blog-link--1e674",n="navigationbar-module--expandable-content--54ab8",a="navigationbar-module--expandable-content-item--7816d",i="navigationbar-module--expanded--16d66",u="navigationbar-module--hide-on-desktop--c387c",c="navigationbar-module--hide-on-mobile--8674f",r="navigationbar-module--navigation-bar--880ae",o="navigationbar-module--navigation-bar-blog--9b855"},2137:function(e,t,M){M.d(t,{U:function(){return n},r:function(){return N}});var N="sidebar-module--sidebar--ac64c",n="sidebar-module--sidebar-small--54e7a"}}]);
//# sourceMappingURL=component---src-pages-index-js-3d85de0fd6421d2d3226.js.map