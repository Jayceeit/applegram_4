!function(e){function t(t){for(var n,r,a=t[0],i=t[1],c=0,s=[];c<a.length;c++)r=a[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);s.length;)s.shift()()}var n={},o={9:0};function r(e){return a.p+""+({10:"npm.qr-code-styling"}[e]||e)+"."+{0:"948b50c9a8047c9c0842",1:"a63d35a16b0b0d9da750",2:"935038cc2873713ebe19",3:"bdf444277e969e63a4c3",4:"6b5dd97948b29c598f75",5:"faa04da46f838e65acdf",6:"6e7728bc6b5d237c3b8e",7:"52c0a0f3b6f476d2bcec",8:"cbbad398924d87521a47",10:"c53238820878551c10bf",11:"4cedf32c13708a0f972d",12:"3862167550311cfa0c62",13:"a60e06bd2a9f185ee65e",14:"d7d066ee29f13f939ccf",15:"e91ef68debad566c74d5",16:"8f20a4414cdceb869a1b",17:"e503493b3028be8a4735",18:"7e5208c5f212e0e6a5a8",19:"96f69841477e2045dbd5",20:"475b02f54077024062fb",21:"3aef9bc049fb6abb3cd5",22:"0606c021aacfc21418bd",23:"e3145c0ea9684176558f",24:"8835e4abc95acb08dcd5",25:"8300e3ae1cb91fc2bed3",26:"27b86f0f8f80f7f420ab",27:"1bfe793cc702c7aa75db",28:"b17aefb7c51046ff48ec",29:"08bf9f3c8b9be9d555f9",30:"0ba6f57fe3c460b08e24",31:"84335c11f524f2436890"}[e]+".chunk.js"}function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var c=new Error;var s=function t(n,i){var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=n,s=function(n){u.onerror=u.onload=null,clearTimeout(l);var a=o[e];if(0!==a)if(a)if(0===i){var s=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.src;c.message="Loading chunk "+e+" failed after 999999 retries.\n("+s+": "+d+")",c.name="ChunkLoadError",c.type=s,c.request=d,a[1](c),o[e]=void 0}else setTimeout((function(){var n=Date.now(),o=t(r(e)+"?"+n,i-1);document.head.appendChild(o)}),0);else o[e]=void 0};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);return u.onerror=u.onload=s,u}(r(e),999999);document.head.appendChild(s)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var i=this.webpackJsonp=this.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;a(a.s=11)}([function(e,t,n){"use strict";n.r(t),n.d(t,"USER_AGENT",(function(){return r})),n.d(t,"IS_APPLE",(function(){return a})),n.d(t,"IS_ANDROID",(function(){return i})),n.d(t,"IS_CHROMIUM",(function(){return c})),n.d(t,"IS_APPLE_MOBILE",(function(){return s})),n.d(t,"IS_SAFARI",(function(){return u})),n.d(t,"IS_FIREFOX",(function(){return l})),n.d(t,"IS_MOBILE_SAFARI",(function(){return d})),n.d(t,"IS_MOBILE",(function(){return f}));var o=n(2);const r=navigator?navigator.userAgent:null,a=-1!==navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),i=-1!==navigator.userAgent.toLowerCase().indexOf("android"),c=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),s=(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!o.a.MSStream,u=!!("safari"in o.a)||!(!r||!(/\b(iPad|iPhone|iPod)\b/.test(r)||r.match("Safari")&&!r.match("Chrome"))),l=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,d=u&&s,f=navigator.maxTouchPoints>0&&-1!=navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i)},function(e,t,n){"use strict";n.r(t),n.d(t,"IS_TOUCH_SUPPORTED",(function(){return o}));const o="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},function(e,t,n){"use strict";const o="undefined"!=typeof window?window:self;t.a=o},function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return s}));var o=n(1),r=n(0),a=n(6),i=n(4);const c=r.IS_SAFARI&&r.IS_MOBILE&&o.IS_TOUCH_SUPPORTED;if(c){let e="clientY",t=0;const n={capture:!0,passive:!1},o=n=>{const o=n.touches[0],r=Object(a.a)(o.target,"scrollable-y");if(r){const a=o[e],i=t-a,c=r.scrollTop,s=r.scrollHeight,u=r.clientHeight,l=c?Math.round(c+r.clientHeight+i):c+i;(s===u||l>=s||l<=0)&&n.preventDefault()}else n.preventDefault()};let r=0;document.addEventListener("focusin",a=>{!a.target.classList.contains("is-sticky-input-bugged")||a.timeStamp-r<50||(Object(i.a)(a.target),document.addEventListener("touchmove",o,n),document.addEventListener("touchstart",n=>{if(n.touches.length>1)return;const o=n.touches[0];t=o[e]}))},{passive:!0}),document.addEventListener("focusout",e=>{document.removeEventListener("touchmove",o,n),r=e.timeStamp},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.activeElement&&document.activeElement.classList.contains("is-sticky-input-bugged")&&document.activeElement.blur&&Object(i.a)(document.activeElement)},{passive:!0})}function s(e){c&&e.classList.add("is-sticky-input-bugged")}},function(e,t,n){"use strict";function o(e){e.style.transform="translateY(-99999px)",e.focus(),setTimeout(()=>{e.style.transform=""},0)}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";function o(e){if(e=e||window.event){e=e.originalEvent||e;try{e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0}catch(e){}}return!1}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";function o(e,t){return e.closest("."+t)}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";function o(){return!(!document.activeElement||!document.activeElement.blur)&&(document.activeElement.blur(),!0)}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";const o={id:2782814,hash:"0301ec07940020f06eaf4243b31623c3",version:"0.9.2",versionFull:"0.9.2 (35)",build:35,langPackVersion:"0.3.7",langPack:"macos",langPackCode:"en",domains:["web.telegram.org"],baseDcId:2,isMainDomain:"web.telegram.org"===location.hostname,suffix:"K"};o.isMainDomain&&(o.id=2496,o.hash="8da85b0d5bfe62527e5b244c209159c3"),t.a=o},function(e,t,n){"use strict";let o;function r(){return o||(o="fonts"in document?Promise.race([Promise.all(["400 1rem Roboto","500 1rem Roboto","500 1rem tgico"].map(e=>document.fonts.load(e))),new Promise(e=>setTimeout(e,1e3))]):Promise.resolve())}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";const o=-1!==navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i);t.a=o},function(e,t,n){"use strict";n.r(t);var o=n(8),r=n(7),a=n(5),i=n(3),c=n(9),s=n(10),u=n(0),l=(n(12),n(13),n(14),function(e,t,n,o){return new(n||(n=Promise))((function(r,a){function i(e){try{s(o.next(e))}catch(e){a(e)}}function c(e){try{s(o.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}s((o=o.apply(e,t||[])).next())}))});document.addEventListener("DOMContentLoaded",()=>l(void 0,void 0,void 0,(function*(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,t){return void 0!==t&&(t=!!t),this.hasAttribute(e)?!!t||(this.removeAttribute(e),!1):!1!==t&&(this.setAttribute(e,""),!0)});document.querySelector("#press");const e=document.querySelector("#press2"),t=document.querySelector("#press3"),d=document.querySelector(".switch"),f=document.querySelector("#memberlist"),m=document.querySelector("#messageList"),b=document.querySelector("#submitdate");d.addEventListener("click",n=>{n.preventDefault(),"buttonStyleDark"===e.className?(t.className="buttonStyleLight",e.className="buttonStyleLight",f.style.backgroundColor="#FBFFF1",f.style.color="#4C86A8",m.style.backgroundColor="#FBFFF1",m.style.color="#4C86A8",d.textContent="Dark",b.className="stylenormbuttonlight"):(f.style.backgroundColor="",f.style.color="",m.style.backgroundColor="",m.style.color="",t.className="buttonStyleDark",e.className="buttonStyleDark",d.textContent="Light",b.className="stylenormbutton")}),t.addEventListener("click",e=>l(void 0,void 0,void 0,(function*(){let e=document.querySelector(".idofchan");yield navigator.clipboard.writeText(e.textContent).then(()=>{alert("copied")})}))),e.addEventListener("click",e=>l(void 0,void 0,void 0,(function*(){let e=document.querySelectorAll(".member"),t=[];e.forEach(e=>{t.push(e.textContent)});yield navigator.clipboard.writeText(t.join("\n")).then(()=>{alert("copied")})})));const h=document.querySelector("#htmlName").value,v=document.querySelector("#contentOfHTML");document.querySelector("#downloadthefile").addEventListener("click",()=>{!function(e,t){let n=document.createElement("a");n.setAttribute("href","data:text/html;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}(h,v.textContent)});const p=window.visualViewport||window;let g,y=!1;const S=()=>{const e=.01*(y&&!I.default.isOverlayActive?p.height||p.innerHeight:window.innerHeight);g!==e&&(w.IS_TOUCH_SUPPORTED&&g<e&&e-g>1&&Object(r.a)(),g=e,document.documentElement.style.setProperty("--vh",e+"px"))},P=new Proxy(Worker,{construct:(e,t)=>new e(t[0]+location.search)});Worker=P;const[E,w,L,I,O,_,A]=yield Promise.all([n.e(22).then(n.bind(null,27)),Promise.resolve().then(n.bind(null,1)),Promise.resolve().then(n.bind(null,0)),n.e(20).then(n.bind(null,15)),Promise.all([n.e(0),n.e(27)]).then(n.bind(null,17)),Promise.all([n.e(0),n.e(1)]).then(n.bind(null,16)),n.e(26).then(n.bind(null,28))]);if(window.addEventListener("resize",S),S(),i.a){const e=()=>{y=1===t&&i.a&&!I.default.isOverlayActive,S(),p!==window&&(y?(window.removeEventListener("resize",S),p.addEventListener("resize",S)):(p.removeEventListener("resize",S),window.addEventListener("resize",S)))};let t;I.default.addEventListener("im_tab_change",n=>{const o=void 0!==t;t=n,(o||1===t)&&e()}),I.default.addEventListener("overlay_toggle",()=>{e()})}L.IS_FIREFOX&&!s.a&&document.addEventListener("dragstart",e=>{const t=e.target;if("IMG"===t.tagName&&t.classList.contains("emoji"))return Object(a.a)(e),!1}),document.addEventListener("dragstart",e=>{var t;if("IMG"===(null===(t=e.target)||void 0===t?void 0:t.tagName))return e.preventDefault(),!1}),L.IS_FIREFOX&&document.documentElement.classList.add("is-firefox"),L.IS_APPLE?(L.IS_SAFARI&&document.documentElement.classList.add("is-safari"),document.documentElement.classList.add("emoji-supported"),L.IS_APPLE_MOBILE?document.documentElement.classList.add("is-ios"):document.documentElement.classList.add("is-mac")):L.IS_ANDROID&&document.documentElement.classList.add("is-android"),w.IS_TOUCH_SUPPORTED?document.documentElement.classList.add("is-touch"):document.documentElement.classList.add("no-touch");const k=performance.now(),C=_.default.getCacheLangPack(),[D,T]=yield Promise.all([O.default.getState(),C]);function x(e,t){e.style.opacity="0",t.then(()=>{window.requestAnimationFrame(()=>{e.style.opacity=""})})}_.default.setTimeFormat(D.settings.timeFormat),I.default.setThemeListener(),T.appVersion!==o.a.langPackVersion&&_.default.getLangPack(T.lang_code),console.log("got state, time:",performance.now()-k);const M=D.authState;if("authStateSignedIn"!==M._){console.log("Will mount auth page:",M._,Date.now()/1e3);const e=document.getElementById("auth-pages");let t,o;if(e){t=e.querySelector(".scrollable"),w.IS_TOUCH_SUPPORTED&&!u.IS_MOBILE_SAFARI||t.classList.add("no-scrollbar"),t.style.opacity="0";const n=document.createElement("div");n.classList.add("auth-placeholder"),t.prepend(n),t.append(n.cloneNode())}try{yield Promise.all([Promise.all([n.e(0),n.e(1)]).then(n.bind(null,24)),Promise.all([n.e(0),n.e(1)]).then(n.bind(null,26))]).then(([e,t])=>{e.default.setAuthorized(!1),t.default.forceUnsubscribe()})}catch(e){}switch(M._){case"authStateSignIn":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,20))).default.mount();break;case"authStateSignQr":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(17)]).then(n.bind(null,22))).default.mount();break;case"authStateAuthCode":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,23))).default.mount(M.sentCode);break;case"authStatePassword":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(11)]).then(n.bind(null,21))).default.mount();break;case"authStateSignUp":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(12)]).then(n.bind(null,25))).default.mount(M.authCode)}if(t){o&&(yield o);x(t,"fonts"in document?Promise.race([new Promise(e=>setTimeout(e,1e3)),document.fonts.ready]):Promise.resolve())}}else console.log("Will mount IM page:",Date.now()/1e3),x(document.getElementById("main-columns"),Object(c.a)()),(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(29)]).then(n.bind(null,19))).default.mount();const F=(yield n.e(18).then(n.bind(null,18))).ripple;Array.from(document.getElementsByClassName("rp")).forEach(e=>F(e))})))},function(e,t,n){},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=main.d788b5a2daf22ba6dded.bundle.js.map