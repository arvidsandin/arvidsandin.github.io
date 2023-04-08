"use strict";(self.webpackChunkarvid_sandin=self.webpackChunkarvid_sandin||[]).push([[678],{2961:function(e,M,t){t.d(M,{Z:function(){return a}});var N=t(7294);var a=()=>N.createElement("div",{className:"footer-module--footer--a2fe4"},N.createElement("p",{className:"footer-module--footer-text--407b8"}," Made by: ",N.createElement("a",{href:"https://github.com/arvidsandin",target:"_blank",rel:"noopener noreferrer"},"arvidsandin")))},9454:function(e,M,t){t.d(M,{Z:function(){return n}});var N=t(7294),a="icon-module--icon--589c7";var n=e=>{const M=e.height||e.size||32,t=e.width||e.size||32;return e.link?N.createElement("a",{href:e.link,className:a+" icon-module--icon-clickable--8a33f "+e.className},N.createElement("img",{src:e.icon,style:{height:M,width:t},alt:e.alt})):N.createElement("div",{className:a+" "+e.className},N.createElement("img",{src:e.icon,style:{height:M,width:t},alt:e.alt}))}},1341:function(e,M,t){t.d(M,{Z:function(){return s}});var N=t(7294);function a(e,M,a,n){void 0===a&&(a=t.g),void 0===n&&(n={});var u=(0,N.useRef)(),i=n.capture,j=n.passive,c=n.once;(0,N.useEffect)((function(){u.current=M}),[M]),(0,N.useEffect)((function(){if(t.g&&t.g.addEventListener){var M=function(e){return u.current(e)},N={capture:i,passive:j,once:c};return t.g.addEventListener(e,M,N),function(){t.g.removeEventListener(e,M,N)}}}),[e,t.g,i,j,c])}var n={},u=function(e,M,t){return n[e]||(n[e]={callbacks:[],value:t}),n[e].callbacks.push(M),{deregister:function(){var t=n[e].callbacks,N=t.indexOf(M);N>-1&&t.splice(N,1)},emit:function(t){n[e].value!==t&&(n[e].value=t,n[e].callbacks.forEach((function(e){M!==e&&e(t)})))}}};function i(e,M){if(void 0===M&&(M=void 0!==t.g&&t.g.localStorage?t.g.localStorage:"undefined"!=typeof globalThis&&globalThis.localStorage?globalThis.localStorage:"undefined"!=typeof window&&window.localStorage?window.localStorage:"undefined"!=typeof localStorage?localStorage:null),M){var n=(i=M,{get:function(e,M){var t=i.getItem(e);return null==t?"function"==typeof M?M():M:JSON.parse(t)},set:function(e,M){i.setItem(e,JSON.stringify(M))}});return function(M){return function(e,M,t){var n=t.get,i=t.set,j=(0,N.useRef)(null),c=(0,N.useState)((function(){return n(M,e)})),g=c[0],o=c[1];a("storage",(function(e){if(e.key===M){var t=JSON.parse(e.newValue);g!==t&&o(t)}})),(0,N.useEffect)((function(){return j.current=u(M,o,e),function(){j.current.deregister()}}),[e,M]);var L=(0,N.useCallback)((function(e){var t="function"==typeof e?e(g):e;i(M,t),o(t),j.current.emit(e)}),[g,i,M]);return[g,L]}(M,e,n)}}var i;return N.useState}var j=function(){},c={classList:{add:j,remove:j}},g=function(e,M,a){void 0===a&&(a=t.g);var n=e?i(e,M):N.useState,u=t.g.matchMedia?t.g.matchMedia("(prefers-color-scheme: dark)"):{},j={addEventListener:function(e,M){return u.addListener&&u.addListener(M)},removeEventListener:function(e,M){return u.removeListener&&u.removeListener(M)}},g="(prefers-color-scheme: dark)"===u.media,o=t.g.document&&t.g.document.body||c;return{usePersistedDarkModeState:n,getDefaultOnChange:function(e,M,t){return void 0===e&&(e=o),void 0===M&&(M="dark-mode"),void 0===t&&(t="light-mode"),function(N){e.classList.add(N?M:t),e.classList.remove(N?t:M)}},mediaQueryEventTarget:j,getInitialValue:function(e){return g?u.matches:e}}};var o=t(9454),L="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNC4wNjkgMTNoLTQuMDY5di0yaDQuMDY5Yy0uMDQxLjMyOC0uMDY5LjY2MS0uMDY5IDFzLjAyOC42NzIuMDY5IDF6bTMuMDM0LTcuMzEybC0yLjg4MS0yLjg4MS0xLjQxNCAxLjQxNCAyLjg4MSAyLjg4MWMuNDExLS41MjkuODg1LTEuMDAzIDEuNDE0LTEuNDE0em0xMS4yMDkgMS40MTRsMi44ODEtMi44ODEtMS40MTQtMS40MTQtMi44ODEgMi44ODFjLjUyOC40MTEgMS4wMDIuODg2IDEuNDE0IDEuNDE0em0tNi4zMTItMy4xMDJjLjMzOSAwIC42NzIuMDI4IDEgLjA2OXYtNC4wNjloLTJ2NC4wNjljLjMyOC0uMDQxLjY2MS0uMDY5IDEtLjA2OXptMCAxNmMtLjMzOSAwLS42NzItLjAyOC0xLS4wNjl2NC4wNjloMnYtNC4wNjljLS4zMjguMDQxLS42NjEuMDY5LTEgLjA2OXptNy45MzEtOWMuMDQxLjMyOC4wNjkuNjYxLjA2OSAxcy0uMDI4LjY3Mi0uMDY5IDFoNC4wNjl2LTJoLTQuMDY5em0tMy4wMzMgNy4zMTJsMi44OCAyLjg4IDEuNDE1LTEuNDE0LTIuODgtMi44OGMtLjQxMi41MjgtLjg4NiAxLjAwMi0xLjQxNSAxLjQxNHptLTExLjIxLTEuNDE1bC0yLjg4IDIuODggMS40MTQgMS40MTQgMi44OC0yLjg4Yy0uNTI4LS40MTEtMS4wMDMtLjg4NS0xLjQxNC0xLjQxNHptNi4zMTItMTAuODk3Yy0zLjMxNCAwLTYgMi42ODYtNiA2czIuNjg2IDYgNiA2IDYtMi42ODYgNi02LTIuNjg2LTYtNi02eiIvPjwvc3ZnPg==",r="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMTAuOTk5YzEuNDM3LjQzOCAyLjU2MiAxLjU2NCAyLjk5OSAzLjAwMS40NC0xLjQzNyAxLjU2NS0yLjU2MiAzLjAwMS0zLTEuNDM2LS40MzktMi41NjEtMS41NjMtMy4wMDEtMy0uNDM3IDEuNDM2LTEuNTYyIDIuNTYxLTIuOTk5IDIuOTk5em04LjAwMS4wMDFjLjk1OC4yOTMgMS43MDcgMS4wNDIgMiAyLjAwMS4yOTEtLjk1OSAxLjA0Mi0xLjcwOSAxLjk5OS0yLjAwMS0uOTU3LS4yOTItMS43MDctMS4wNDItMi0yLS4yOTMuOTU4LTEuMDQyIDEuNzA4LTEuOTk5IDJ6bS0xLTljLS40MzcgMS40MzctMS41NjMgMi41NjItMi45OTggMy4wMDEgMS40MzguNDQgMi41NjEgMS41NjQgMy4wMDEgMy4wMDIuNDM3LTEuNDM4IDEuNTYzLTIuNTYzIDIuOTk2LTMuMDAyLTEuNDMzLS40MzctMi41NTktMS41NjQtMi45OTktMy4wMDF6bS03LjAwMSAyMmMtNi42MTcgMC0xMi01LjM4My0xMi0xMnM1LjM4My0xMiAxMi0xMmMxLjg5NCAwIDMuNjMuNDk3IDUuMzcgMS4xNzktMi45NDguNTA0LTkuMzcgMy4yNjYtOS4zNyAxMC44MjEgMCA3LjQ1NCA1LjkxNyAxMC4yMDggOS4zNyAxMC44MjEtMS41Ljg0Ni0zLjQ3NiAxLjE3OS01LjM3IDEuMTc5eiIvPjwvc3ZnPg==",D="light_darkmodetoggler-module--button--f6de7",l="light_darkmodetoggler-module--expandable-content-item--e891c",I="light_darkmodetoggler-module--light-dark-mode-icon--ea1e9";const z=()=>"undefined"!=typeof window;var s=e=>{const M=function(e,M){void 0===e&&(e=!1),void 0===M&&(M={});var t=M.element,n=M.classNameDark,u=M.classNameLight,i=M.onChange,j=M.storageKey;void 0===j&&(j="darkMode");var c=M.storageProvider,o=M.global,L=(0,N.useMemo)((function(){return g(j,c,o)}),[j,c,o]),r=L.getDefaultOnChange,D=L.mediaQueryEventTarget,l=(0,L.usePersistedDarkModeState)((0,L.getInitialValue)(e)),I=l[0],z=l[1],s=(0,N.useMemo)((function(){return i||r(t,n,u)}),[i,t,n,u,r]);return(0,N.useEffect)((function(){s(I)}),[s,I]),a("change",(function(e){return z(e.matches)}),D),{value:I,enable:(0,N.useCallback)((function(){return z(!0)}),[z]),disable:(0,N.useCallback)((function(){return z(!1)}),[z]),toggle:(0,N.useCallback)((function(){return z((function(e){return!e}))}),[z])}}(c()),{0:t,1:n}=(0,N.useState)(!1),{0:u,1:i}=(0,N.useState)(void 0);function j(e){z()&&localStorage.setItem("followSystemDarkMode","false"),z()&&i(localStorage.getItem("followSystemDarkMode")),e?M.enable():M.disable()}function c(){var e,M;return z()&&(null===(e=window)||void 0===e?void 0:e.matchMedia)&&(null===(M=window)||void 0===M?void 0:M.matchMedia("(prefers-color-scheme: dark)").matches)}var s;z()&&(null===(s=window)||void 0===s||s.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{"true"===u&&(e.matches?M.enable():M.disable())})));const d=(0,N.useRef)(null),y=(0,N.useRef)(null);return(0,N.useEffect)((()=>{function e(e){d.current.contains(e.target)||y.current.contains(e.target)||n(!1)}return i(localStorage.getItem("followSystemDarkMode")),null==u?(z()&&localStorage.setItem("followSystemDarkMode","true"),z()&&i(localStorage.getItem("followSystemDarkMode"))):"true"===u&&(c()?M.enable():M.disable()),document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[u,M]),N.createElement("div",{className:"light_darkmodetoggler-module--menu--3e0ff"},N.createElement("button",{ref:d,type:"button",className:D+" unselectable",onClick:()=>{n(!t)}},N.createElement(o.Z,{icon:L,className:I,size:"24px",alt:"Change to light mode"}),N.createElement("div",{className:I}," / "),N.createElement(o.Z,{icon:r,className:I,size:"18px",alt:"Change to dark mode"})),N.createElement("div",{ref:y,className:"light_darkmodetoggler-module--expandable-content--347ba "+(t?"light_darkmodetoggler-module--expanded--624c8":"")},t&&N.createElement("button",{type:"button",className:D+" "+l+" darkenOnHover unselectable",onClick:function(){z()&&localStorage.setItem("followSystemDarkMode","true"),z()&&i(localStorage.getItem("followSystemDarkMode")),c()?M.enable():M.disable()}},N.createElement("div",null," Follow system ")),t&&N.createElement("button",{type:"button",className:D+" "+l+" darkenOnHover unselectable",onClick:()=>{j(!1)}},N.createElement(o.Z,{icon:L,size:"24px",alt:"Change to light mode"})),t&&N.createElement("button",{type:"button",className:D+" "+l+" darkenOnHover unselectable",onClick:()=>{j(!0)}},N.createElement(o.Z,{icon:r,size:"18px",alt:"Change to dark mode"}))))}},390:function(e,M,t){t.d(M,{Z:function(){return a}});var N=t(7294);var a=e=>N.createElement("div",{className:"navbaritem-module--navbar-item--acbd7 "+e.className+" darkenOnHover"},N.createElement("a",{className:"navbaritem-module--link--ee495",href:e.link,id:e.id},e.text))},1317:function(e,M,t){t.d(M,{Z:function(){return j}});var N=t(7294),a=t(390),n=t(1341),u=t(9454),i=t(7144);var j=()=>{const{0:e,1:M}=(0,N.useState)(!1),t=(0,N.useRef)(null),j=(0,N.useRef)(null);return(0,N.useEffect)((()=>{function N(N){console.log("here");const a=j.current.contains(N.target);t.current.contains(N.target)?(M(!e),console.log("here3")):a||(M(!1),console.log("here2"))}return document.addEventListener("click",N),()=>{document.removeEventListener("click",N)}}),[e]),N.createElement("div",{className:i.SC},N.createElement("div",{className:""+i.Ah},N.createElement("div",{ref:t,className:i._C},N.createElement(u.Z,{className:"",icon:"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjIgMTYuNzVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE4LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE4LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXptMC01YzAtLjQxNC0uMzM2LS43NS0uNzUtLjc1aC0xOC41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWgxOC41Yy40MTQgMCAuNzUtLjMzNi43NS0uNzV6bTAtNWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMTguNWMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1cy4zMzYuNzUuNzUuNzVoMTguNWMuNDE0IDAgLjc1LS4zMzYuNzUtLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",size:"36px",link:"#"})),N.createElement("div",{className:i.AX+" "+(e?i.zh:""),ref:j},e&&N.createElement(a.Z,{className:i.w5,link:"/",id:"homelink",text:"Home"}),e&&N.createElement(a.Z,{className:i.w5,link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),e&&N.createElement(a.Z,{className:i.w5,link:"/custom-top-sort",id:"custom-top-sortLink",text:"Custom top sort"}),e&&N.createElement(a.Z,{className:i.w5,link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}))),N.createElement(a.Z,{className:i._X,link:"/",id:"homelink",text:"Home"}),N.createElement(a.Z,{className:i._X,link:"/colorCodes",id:"colorcodesLink",text:"Color Codes"}),N.createElement(a.Z,{className:i._X,link:"/custom-top-sort",id:"custom-top-sortLink",text:"Custom top sort"}),N.createElement(a.Z,{className:i._X,link:"/draw-contest",id:"drawcontestLink",text:"Draw contest"}),N.createElement(n.Z,null))}},5839:function(e,M,t){t.d(M,{Z:function(){return i}});var N=t(7294);var a=e=>{let{children:M}=e;return N.createElement("div",{className:"sidebar-module--sidebar--ac64c"},M)};var n=e=>{let{children:M}=e;return N.createElement("div",{className:"maincontent-module--main-content--498d8"},M)},u="wrapper-module--wrapper-item--025c3";var i=e=>{let{header:M,date:t,content:i,children:j}=e;return N.createElement("div",{className:"wrapper-module--wrapper--c93c8"},N.createElement(a,{className:u}),N.createElement(n,{className:u,id:"mainContent"},N.createElement("h1",null,M),t&&N.createElement("p",{className:"wrapper-module--created-date--69f6d"}," ",t," "),i&&N.createElement("div",{className:"wrapper-module--main-content-div--71d98",dangerouslySetInnerHTML:{__html:i}}),j),N.createElement(a,{className:u}))}},9416:function(e,M,t){t.r(M),t.d(M,{default:function(){return j}});var N=t(7294),a=t(1317),n=t(5839),u=t(2961);var i=e=>{const M=e.size||32;return N.createElement("a",{href:e.link,className:"logo-module--logo--36d88",target:"_blank",rel:"noopener noreferrer"+(e.rel_me?" me":"")},N.createElement("img",{src:e.logo,style:{height:M,width:M},alt:e.alt}))};var j=()=>N.createElement("div",null,N.createElement("title",null,"Arvid Sandin"),N.createElement(a.Z,null),N.createElement(n.Z,{header:"Arvid Sandin",content:"Hi! I'm Arvid Sandin and I'm currently studying towards a Master of Science in engineering degree in IT at Uppsala University. As a person I am always open to learn and appreciate well executed technical solutions<br /><br />In the navigation bar, you will find some of my personal programming projects and experiments. If you want to get in touch, please send a message in any of the services linked below.<br /><br />If you're wondering about this website in particular, it's build with Gatsby.js and React.js and hosted with GitHub Pages. More details and the source code for can be found  <a href='https://github.com/arvidsandin/arvidsandin.github.io'>in the repository</a>.<br />"},N.createElement(i,{logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMTEgMTloLTN2LTExaDN2MTF6bS0xLjUtMTIuMjY4Yy0uOTY2IDAtMS43NS0uNzktMS43NS0xLjc2NHMuNzg0LTEuNzY0IDEuNzUtMS43NjQgMS43NS43OSAxLjc1IDEuNzY0LS43ODMgMS43NjQtMS43NSAxLjc2NHptMTMuNSAxMi4yNjhoLTN2LTUuNjA0YzAtMy4zNjgtNC0zLjExMy00IDB2NS42MDRoLTN2LTExaDN2MS43NjVjMS4zOTYtMi41ODYgNy0yLjc3NyA3IDIuNDc2djYuNzU5eiIvPjwvc3ZnPg==",link:"https://www.linkedin.com/in/arvid-sandin/",alt:"LinkedIn logo",rel_me:!0}),N.createElement(i,{logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMGMtNi42MjYgMC0xMiA1LjM3My0xMiAxMiAwIDUuMzAyIDMuNDM4IDkuOCA4LjIwNyAxMS4zODcuNTk5LjExMS43OTMtLjI2MS43OTMtLjU3N3YtMi4yMzRjLTMuMzM4LjcyNi00LjAzMy0xLjQxNi00LjAzMy0xLjQxNi0uNTQ2LTEuMzg3LTEuMzMzLTEuNzU2LTEuMzMzLTEuNzU2LTEuMDg5LS43NDUuMDgzLS43MjkuMDgzLS43MjkgMS4yMDUuMDg0IDEuODM5IDEuMjM3IDEuODM5IDEuMjM3IDEuMDcgMS44MzQgMi44MDcgMS4zMDQgMy40OTIuOTk3LjEwNy0uNzc1LjQxOC0xLjMwNS43NjItMS42MDQtMi42NjUtLjMwNS01LjQ2Ny0xLjMzNC01LjQ2Ny01LjkzMSAwLTEuMzExLjQ2OS0yLjM4MSAxLjIzNi0zLjIyMS0uMTI0LS4zMDMtLjUzNS0xLjUyNC4xMTctMy4xNzYgMCAwIDEuMDA4LS4zMjIgMy4zMDEgMS4yMy45NTctLjI2NiAxLjk4My0uMzk5IDMuMDAzLS40MDQgMS4wMi4wMDUgMi4wNDcuMTM4IDMuMDA2LjQwNCAyLjI5MS0xLjU1MiAzLjI5Ny0xLjIzIDMuMjk3LTEuMjMuNjUzIDEuNjUzLjI0MiAyLjg3NC4xMTggMy4xNzYuNzcuODQgMS4yMzUgMS45MTEgMS4yMzUgMy4yMjEgMCA0LjYwOS0yLjgwNyA1LjYyNC01LjQ3OSA1LjkyMS40My4zNzIuODIzIDEuMTAyLjgyMyAyLjIyMnYzLjI5M2MwIC4zMTkuMTkyLjY5NC44MDEuNTc2IDQuNzY1LTEuNTg5IDguMTk5LTYuMDg2IDguMTk5LTExLjM4NiAwLTYuNjI3LTUuMzczLTEyLTEyLTEyeiIvPjwvc3ZnPg==",link:"https://github.com/arvidsandin",alt:"Github logo",rel_me:!0}),N.createElement(i,{logo:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45MTkgNC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAzLjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIwNCAwLTMuNTg0LS4wMTItNC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAwLTMuMjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0NS0uMDY5IDQuODQ5LS4wNjl6bTAtMi4xNjNjLTMuMjU5IDAtMy42NjcuMDE0LTQuOTQ3LjA3Mi00LjM1OC4yLTYuNzggMi42MTgtNi45OCA2Ljk4LS4wNTkgMS4yODEtLjA3MyAxLjY4OS0uMDczIDQuOTQ4IDAgMy4yNTkuMDE0IDMuNjY4LjA3MiA0Ljk0OC4yIDQuMzU4IDIuNjE4IDYuNzggNi45OCA2Ljk4IDEuMjgxLjA1OCAxLjY4OS4wNzIgNC45NDguMDcyIDMuMjU5IDAgMy42NjgtLjAxNCA0Ljk0OC0uMDcyIDQuMzU0LS4yIDYuNzgyLTIuNjE4IDYuOTc5LTYuOTguMDU5LTEuMjguMDczLTEuNjg5LjA3My00Ljk0OCAwLTMuMjU5LS4wMTQtMy42NjctLjA3Mi00Ljk0Ny0uMTk2LTQuMzU0LTIuNjE3LTYuNzgtNi45NzktNi45OC0xLjI4MS0uMDU5LTEuNjktLjA3My00Ljk0OS0uMDczem0wIDUuODM4Yy0zLjQwMyAwLTYuMTYyIDIuNzU5LTYuMTYyIDYuMTYyczIuNzU5IDYuMTYzIDYuMTYyIDYuMTYzIDYuMTYyLTIuNzU5IDYuMTYyLTYuMTYzYzAtMy40MDMtMi43NTktNi4xNjItNi4xNjItNi4xNjJ6bTAgMTAuMTYyYy0yLjIwOSAwLTQtMS43OS00LTQgMC0yLjIwOSAxLjc5MS00IDQtNHM0IDEuNzkxIDQgNGMwIDIuMjEtMS43OTEgNC00IDR6bTYuNDA2LTExLjg0NWMtLjc5NiAwLTEuNDQxLjY0NS0xLjQ0MSAxLjQ0cy42NDUgMS40NCAxLjQ0MSAxLjQ0Yy43OTUgMCAxLjQzOS0uNjQ1IDEuNDM5LTEuNDRzLS42NDQtMS40NC0xLjQzOS0xLjQ0eiIvPjwvc3ZnPg==",link:"https://www.instagram.com/arvidsandin/",alt:"Instagram logo",rel_me:!0}),N.createElement(i,{logo:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzQiIGhlaWdodD0iNzkiIHZpZXdCb3g9IjAgMCA3NCA3OSIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03My43MDE0IDE3LjQzMjNDNzIuNTYxNiA5LjA1MTUyIDY1LjE3NzQgMi40NDY5IDU2LjQyNCAxLjE2NzFDNTQuOTQ3MiAwLjk1MDg0MyA0OS4zNTE4IDAuMTYzODE4IDM2LjM5MDEgMC4xNjM4MThIMzYuMjkzM0MyMy4zMjgxIDAuMTYzODE4IDIwLjU0NjUgMC45NTA4NDMgMTkuMDY5NyAxLjE2NzFDMTAuNTYgMi40MTE0NSAyLjc4ODc3IDguMzQ2MDQgMC45MDMzMDYgMTYuODI2Qy0wLjAwMzU3ODU0IDIxLjAwMjIgLTAuMTAwMzYxIDI1LjYzMjIgMC4wNjgxMTIgMjkuODc5M0MwLjMwODI3NSAzNS45Njk5IDAuMzU0ODc0IDQyLjA0OTggMC45MTQwNiA0OC4xMTU2QzEuMzAwNjQgNTIuMTQ0OCAxLjk3NTAyIDU2LjE0MTkgMi45MzIxNSA2MC4wNzY5QzQuNzI0NDEgNjcuMzQ0NSAxMS45Nzk1IDczLjM5MjUgMTkuMDg3NiA3NS44NkMyNi42OTc5IDc4LjQzMzIgMzQuODgyMSA3OC44NjAzIDQyLjcyNCA3Ny4wOTM3QzQzLjU4NjYgNzYuODk1MiA0NC40Mzk4IDc2LjY2NDcgNDUuMjgzMyA3Ni40MDI0QzQ3LjE4NjcgNzUuODAzMyA0OS40MTk5IDc1LjEzMzIgNTEuMDYxNiA3My45NTYyQzUxLjA4NDEgNzMuOTM5NyA1MS4xMDI2IDczLjkxODQgNTEuMTE1NiA3My44OTM4QzUxLjEyODYgNzMuODY5MyA1MS4xMzU5IDczLjg0MjEgNTEuMTM2OCA3My44MTQ0VjY3LjkzNjZDNTEuMTM2NCA2Ny45MTA3IDUxLjEzMDIgNjcuODg1MiA1MS4xMTg2IDY3Ljg2MkM1MS4xMDY5IDY3LjgzODggNTEuMDkwMiA2Ny44MTg0IDUxLjA2OTUgNjcuODAyNUM1MS4wNDg5IDY3Ljc4NjUgNTEuMDI0OSA2Ny43NzUzIDUwLjk5OTQgNjcuNzY5NkM1MC45NzM4IDY3Ljc2NCA1MC45NDczIDY3Ljc2NDEgNTAuOTIxOCA2Ny43Njk5QzQ1Ljg5NzYgNjguOTU2OSA0MC43NDkxIDY5LjU1MTkgMzUuNTgzNiA2OS41NDI1QzI2LjY5NCA2OS41NDI1IDI0LjMwMzEgNjUuMzY5OSAyMy42MTg0IDYzLjYzMjdDMjMuMDY4MSA2Mi4xMzE0IDIyLjcxODYgNjAuNTY1NCAyMi41Nzg5IDU4Ljk3NDRDMjIuNTc3NSA1OC45NDc3IDIyLjU4MjUgNTguOTIxIDIyLjU5MzQgNTguODk2NUMyMi42MDQzIDU4Ljg3MjEgMjIuNjIxIDU4Ljg1MDUgMjIuNjQxOSA1OC44MzM2QzIyLjY2MjkgNTguODE2NyAyMi42ODc2IDU4LjgwNDkgMjIuNzE0IDU4Ljc5OTJDMjIuNzQwNCA1OC43OTM0IDIyLjc2NzggNTguNzk0IDIyLjc5NCA1OC44MDA3QzI3LjczNDUgNTkuOTc5NiAzMi43OTkgNjAuNTc0NiAzNy44ODEzIDYwLjU3MzNDMzkuMTAzNiA2MC41NzMzIDQwLjMyMjMgNjAuNTczMyA0MS41NDQ3IDYwLjU0MTRDNDYuNjU2MiA2MC4zOTk2IDUyLjA0MzcgNjAuMTQwOCA1Ny4wNzI4IDU5LjE2OTRDNTcuMTk4MyA1OS4xNDQ2IDU3LjMyMzcgNTkuMTIzMyA1Ny40MzEzIDU5LjA5MTRDNjUuMzYzOCA1Ny41ODQ3IDcyLjkxMjggNTIuODU1NSA3My42Nzk5IDQwLjg3OTlDNzMuNzA4NiA0MC40MDg0IDczLjc4MDMgMzUuOTQxNSA3My43ODAzIDM1LjQ1MjNDNzMuNzgzOSAzMy43ODk2IDc0LjMyMTYgMjMuNjU3NiA3My43MDE0IDE3LjQzMjNaTTYxLjQ5MjUgNDcuMzE0NEg1My4xNTE0VjI3LjEwN0M1My4xNTE0IDIyLjg1MjggNTEuMzU5MSAyMC42ODMyIDQ3LjcxMzYgMjAuNjgzMkM0My43MDYxIDIwLjY4MzIgNDEuNjk4OCAyMy4yNDk5IDQxLjY5ODggMjguMzE5NFYzOS4zODAzSDMzLjQwNzhWMjguMzE5NEMzMy40MDc4IDIzLjI0OTkgMzEuMzk2OSAyMC42ODMyIDI3LjM4OTQgMjAuNjgzMkMyMy43NjU0IDIwLjY4MzIgMjEuOTU1MiAyMi44NTI4IDIxLjk1MTYgMjcuMTA3VjQ3LjMxNDRIMTMuNjE3NlYyNi40OTM3QzEzLjYxNzYgMjIuMjM5NSAxNC43MTU3IDE4Ljg1OTggMTYuOTExOCAxNi4zNTQ1QzE5LjE3NzIgMTMuODU1MiAyMi4xNDg4IDEyLjU3MTkgMjUuODM3MyAxMi41NzE5QzMwLjEwNjQgMTIuNTcxOSAzMy4zMzI1IDE0LjE5NTUgMzUuNDgzMiAxNy40Mzk0TDM3LjU1ODcgMjAuODg1M0wzOS42Mzc3IDE3LjQzOTRDNDEuNzg4NCAxNC4xOTU1IDQ1LjAxNDUgMTIuNTcxOSA0OS4yNzY1IDEyLjU3MTlDNTIuOTYxNCAxMi41NzE5IDU1LjkzMjkgMTMuODU1MiA1OC4yMDU1IDE2LjM1NDVDNjAuNDAxNyAxOC44NTc0IDYxLjQ5OTcgMjIuMjM3MSA2MS40OTk3IDI2LjQ5MzdMNjEuNDkyNSA0Ny4zMTQ0WiIgZmlsbD0iaW5oZXJpdCIvPgo8L3N2Zz4K",link:"https://mas.to/@arvidsandin",alt:"Mastodon logoo",rel_me:!0}),N.createElement(i,{logo:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0iYmxhY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0gMTYsMzIgQyA3LjE2MzQ0NCwzMiAwLDI0LjgzNjU1NiAwLDE2IDAsNy4xNjM0NDQgNy4xNjM0NDQsMCAxNiwwIDI0LjgzNjU1NiwwIDMyLDcuMTYzNDQ0IDMyLDE2IDMyLDI0LjgzNjU1NiAyNC44MzY1NTYsMzIgMTYsMzIgWiBNIDE0LjcyOTgwMiwxOS40OTMxMyBoIDIuOTM1MTM1IGMgMi43NjUwMTQsMCA1LjAwNjUwMSwtMi4xODIwOTIgNS4wMDY1MDEsLTQuODczODM4IDAsLTIuNjkxNzQ2IC0yLjI0MTQ4NywtNC44NzM4Mzc0IC01LjAwNjUwMSwtNC44NzM4Mzc0IGggLTQuMjM2MjcgYyAtMS41OTUyMDEsMCAtMi44ODgzNjYsMS4yNTg4OTg0IC0yLjg4ODM2NiwyLjgxMTgyOTQgdiAxMC45NDQwMTQgeiIvPgo8L3N2Zz4=",link:"https://pixey.org/arvidsandin",alt:"Pixelfed logo",rel_me:!0}),N.createElement(u.Z,null)))},7144:function(e,M,t){t.d(M,{AX:function(){return a},Ah:function(){return i},SC:function(){return c},TT:function(){return g},_C:function(){return N},_X:function(){return j},w5:function(){return n},zh:function(){return u}});var N="navigationbar-module--blog-link--1e674",a="navigationbar-module--expandable-content--54ab8",n="navigationbar-module--expandable-content-item--7816d",u="navigationbar-module--expanded--16d66",i="navigationbar-module--hide-on-desktop--c387c",j="navigationbar-module--hide-on-mobile--8674f",c="navigationbar-module--navigation-bar--880ae",g="navigationbar-module--navigation-bar-blog--9b855"}}]);
//# sourceMappingURL=component---src-pages-index-js-439d23127f4ba78ad173.js.map