!function(e){function t(t){for(var n,r,c=t[0],a=t[1],i=0,l=[];i<c.length;i++)r=c[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);l.length;)l.shift()()}var n={},o={9:0};function r(e){return c.p+""+({10:"npm.qr-code-styling"}[e]||e)+"."+{0:"1348dd58bc9f896c525a",1:"fd621e0b04aea2785948",2:"b281331becfd6e1f77be",3:"dbec6a629f97d5f89fa4",4:"37ca7441021f118c75ff",5:"b66b55196f43044a886e",6:"68be1170aa94d61dda81",7:"072fd947c2263ef1b883",8:"c37cc0c9e022e9510584",10:"0cd214cd2f6c8668d6ea",11:"c765617c3107db3d8f9e",12:"5297b9c580306f2725f4",13:"395afdfdf15407a70583",14:"3765fa65b1a095093ad8",15:"bb81908593ad8500bc8d",16:"dd1ec32347643e9c2f8e",17:"773cc1c09d2eae587492",18:"869c6d3d1901f3042705",19:"fe55a1907eff80fbf628",20:"b7c3cec610e79bd3d179",21:"12337b9d46186326c853",22:"bce40ae269cc314b4c2f",23:"97f27947f25b0ac5deb9",24:"5c474da8eb9be7051d6c",25:"ead575584937f6eded48",26:"85ce966f69fb306b5663",27:"f0393bf62161080fa57a",28:"f42256e55de74108eda2",29:"eb719849a24a5e039976",30:"8c2dc7fe7059cb406812",31:"84335c11f524f2436890"}[e]+".chunk.js"}function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=a);var i=new Error;var l=function t(n,a){var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=n,l=function(n){s.onerror=s.onload=null,clearTimeout(d);var c=o[e];if(0!==c)if(c)if(0===a){var l=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed after 999999 retries.\n("+l+": "+u+")",i.name="ChunkLoadError",i.type=l,i.request=u,c[1](i),o[e]=void 0}else setTimeout((function(){var n=Date.now(),o=t(r(e)+"?"+n,a-1);document.head.appendChild(o)}),0);else o[e]=void 0};var d=setTimeout((function(){l({type:"timeout",target:s})}),12e4);return s.onerror=s.onload=l,s}(r(e),999999);document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var a=this.webpackJsonp=this.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var s=i;c(c.s=12)}([function(e,t,n){"use strict";n.r(t),n.d(t,"USER_AGENT",(function(){return r})),n.d(t,"IS_APPLE",(function(){return c})),n.d(t,"IS_ANDROID",(function(){return a})),n.d(t,"IS_CHROMIUM",(function(){return i})),n.d(t,"IS_APPLE_MOBILE",(function(){return l})),n.d(t,"IS_SAFARI",(function(){return s})),n.d(t,"IS_FIREFOX",(function(){return d})),n.d(t,"IS_MOBILE_SAFARI",(function(){return u})),n.d(t,"IS_MOBILE",(function(){return m}));var o=n(2);const r=navigator?navigator.userAgent:null,c=-1!==navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),a=-1!==navigator.userAgent.toLowerCase().indexOf("android"),i=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),l=(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&!o.a.MSStream,s=!!("safari"in o.a)||!(!r||!(/\b(iPad|iPhone|iPod)\b/.test(r)||r.match("Safari")&&!r.match("Chrome"))),d=navigator.userAgent.toLowerCase().indexOf("firefox")>-1,u=s&&l,m=navigator.maxTouchPoints>0&&-1!=navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i)},function(e,t,n){"use strict";n.r(t),n.d(t,"IS_TOUCH_SUPPORTED",(function(){return o}));const o="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch},function(e,t,n){"use strict";const o="undefined"!=typeof window?window:self;t.a=o},function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));var o=n(1),r=n(0),c=n(6),a=n(4);const i=r.IS_SAFARI&&r.IS_MOBILE&&o.IS_TOUCH_SUPPORTED;if(i){let e="clientY",t=0;const n={capture:!0,passive:!1},o=n=>{const o=n.touches[0],r=Object(c.a)(o.target,"scrollable-y");if(r){const c=o[e],a=t-c,i=r.scrollTop,l=r.scrollHeight,s=r.clientHeight,d=i?Math.round(i+r.clientHeight+a):i+a;(l===s||d>=l||d<=0)&&n.preventDefault()}else n.preventDefault()};let r=0;document.addEventListener("focusin",c=>{!c.target.classList.contains("is-sticky-input-bugged")||c.timeStamp-r<50||(Object(a.a)(c.target),document.addEventListener("touchmove",o,n),document.addEventListener("touchstart",n=>{if(n.touches.length>1)return;const o=n.touches[0];t=o[e]}))},{passive:!0}),document.addEventListener("focusout",e=>{document.removeEventListener("touchmove",o,n),r=e.timeStamp},{passive:!0}),document.addEventListener("visibilitychange",()=>{document.activeElement&&document.activeElement.classList.contains("is-sticky-input-bugged")&&document.activeElement.blur&&Object(a.a)(document.activeElement)},{passive:!0})}function l(e){i&&e.classList.add("is-sticky-input-bugged")}},function(e,t,n){"use strict";function o(e){e.style.transform="translateY(-99999px)",e.focus(),setTimeout(()=>{e.style.transform=""},0)}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";function o(e){if(e=e||window.event){e=e.originalEvent||e;try{e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0}catch(e){}}return!1}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";function o(e,t){return e.closest("."+t)}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";function o(){return!(!document.activeElement||!document.activeElement.blur)&&(document.activeElement.blur(),!0)}n.d(t,"a",(function(){return o}))},function(e,t,n){"use strict";const o={id:2782814,hash:"0301ec07940020f06eaf4243b31623c3",version:"0.9.2",versionFull:"0.9.2 (35)",build:35,langPackVersion:"0.3.7",langPack:"macos",langPackCode:"en",domains:["web.telegram.org"],baseDcId:2,isMainDomain:"web.telegram.org"===location.hostname,suffix:"K"};o.isMainDomain&&(o.id=2496,o.hash="8da85b0d5bfe62527e5b244c209159c3"),t.a=o},function(e,t,n){"use strict";let o;function r(){return o||(o="fonts"in document?Promise.race([Promise.all(["400 1rem Roboto","500 1rem Roboto","500 1rem tgico"].map(e=>document.fonts.load(e))),new Promise(e=>setTimeout(e,1e3))]):Promise.resolve())}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";const o=-1!==navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i);t.a=o},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const o=new class{constructor(e){this.messageArr=e}scrollChannel(e){let t=setInterval(()=>{const t=document.querySelectorAll(".bubbles")[0];e.scrollTop=e.scrollHeight,t.classList.forEach(e=>{"scrolled-down"===e&&n()}),this.net()},400),n=()=>{clearInterval(t),this.appendToHtml(this.cleanData())}}net(){this.messageArr=[],document.querySelectorAll(".bubble-content-wrapper > .bubble-content > .name").forEach(e=>{this.messageArr.push(e)})}cleanData(){return this.messageArr.map(e=>e.textContent.replace(/\n/g," ").replace("Forwarded from","").replace("-","").split(" ")).reduce((e,t)=>(e[t[t.length-1]]=t.join(" "),e),{})}appendToHtml(e){const t=document.querySelector("#member-scrape");t.innerHTML="";Object.keys(e).forEach(n=>{const o=document.createElement("li");o.className="scraped-user",o.textContent=e[n],t.appendChild(o)})}}([])},function(e,t,n){"use strict";n.r(t);var o=n(11),r=n(8),c=n(7),a=n(5),i=n(3),l=n(9),s=n(10),d=n(0),u=(n(13),n(14),n(15),function(e,t,n,o){return new(n||(n=Promise))((function(r,c){function a(e){try{l(o.next(e))}catch(e){c(e)}}function i(e){try{l(o.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((o=o.apply(e,t||[])).next())}))});document.addEventListener("DOMContentLoaded",()=>u(void 0,void 0,void 0,(function*(){Element.prototype.toggleAttribute||(Element.prototype.toggleAttribute=function(e,t){return void 0!==t&&(t=!!t),this.hasAttribute(e)?!!t||(this.removeAttribute(e),!1):!1!==t&&(this.setAttribute(e,""),!0)});const e=document.querySelector("#htmlName").value,t=document.querySelector("#contentOfHTML");let m=document.querySelector("#downloadthefile");document.querySelector("#press");const f=document.querySelector("#press2"),h=document.querySelector("#press3"),p=document.querySelector("#press4"),v=document.querySelector("#press5"),b=document.querySelector(".switch"),y=document.querySelector("#memberlist"),g=document.querySelector("#messageList"),S=document.querySelector("#submitdate");document.querySelector("body");const E=document.querySelector("#user-modal"),w=document.querySelector(".user-name"),P=document.querySelector(".user-displayname"),L=document.querySelector(".user-id"),I=document.querySelector(".copy-username"),O=document.querySelector(".copy-userid"),A=document.querySelector(".copy-userdisplayname"),k=document.querySelector(".copy-user-display-id"),C=document.querySelector(".close-modal"),_=document.querySelector("#channel-modal"),x=document.querySelector(".copy-channel-name"),q=document.querySelector(".copy-channel-id"),D=document.querySelector(".close-channel-modal"),T=document.querySelector(".copy-channel-name-id"),M=document.querySelector(".channel-name"),N=document.querySelector(".channel-id");function j(e){let t={"copy-username":w,"copy-userid":L,"copy-userdisplayname":P,"copy-channel-name":M,"copy-channel-id":N}[e.className];navigator.clipboard.writeText(t.textContent).then(()=>{alert("copied")})}function F(e){var t=0,n=0,o=0,r=0;function c(e){(e=e||window.event).preventDefault(),o=e.clientX,r=e.clientY,document.onmouseup=i,document.onmousemove=a}function a(c){(c=c||window.event).preventDefault(),t=o-c.clientX,n=r-c.clientY,o=c.clientX,r=c.clientY,e.style.top=e.offsetTop-n+"px",e.style.left=e.offsetLeft-t+"px"}function i(){document.onmouseup=null,document.onmousemove=null}document.getElementById(e.id+"header")?document.getElementById(e.id+"header").onmousedown=c:e.onmousedown=c}F(E),F(_),v.addEventListener("click",()=>{document.querySelectorAll(".scrollable")[3].setAttribute("id","secure");let e=document.querySelector("#secure");o.a.scrollChannel(e)}),D.addEventListener("click",e=>{_.className="hide-modal"}),x.addEventListener("click",e=>{j(x)}),q.addEventListener("click",e=>{j(q)}),T.addEventListener("click",e=>u(void 0,void 0,void 0,(function*(){yield navigator.clipboard.writeText(`${M.textContent} ID: ${N.textContent}`).then(()=>{alert("copied")})}))),C.addEventListener("click",e=>{E.className="hide-modal"}),I.addEventListener("click",e=>{j(I)}),A.addEventListener("click",e=>{j(A)}),O.addEventListener("click",e=>{j(O)}),k.addEventListener("click",e=>u(void 0,void 0,void 0,(function*(){yield navigator.clipboard.writeText(`${P.textContent} ID: ${L.textContent}`).then(()=>{alert("copied")})}))),b.addEventListener("click",e=>{e.preventDefault(),"buttonStyleDark"===f.className?(h.className="buttonStyleLight",f.className="buttonStyleLight",p.className="buttonStyleLight",v.className="buttonStyleLight",y.style.backgroundColor="#FBFFF1",y.style.color="#4C86A8",g.style.backgroundColor="#FBFFF1",g.style.color="#4C86A8",b.textContent="Dark",S.className="stylenormbuttonlight"):(y.style.backgroundColor="",y.style.color="",g.style.backgroundColor="",g.style.color="",h.className="buttonStyleDark",f.className="buttonStyleDark",p.className="buttonStyleDark",v.className="buttonStyleDark",b.textContent="Light",S.className="stylenormbutton")}),p.addEventListener("click",e=>u(void 0,void 0,void 0,(function*(){let e=document.querySelectorAll(".scraped-user"),t=[];e.forEach(e=>{t.push(e.textContent)});yield navigator.clipboard.writeText(t.join("\n")).then(()=>{alert("copied")})}))),h.addEventListener("click",e=>u(void 0,void 0,void 0,(function*(){let e=document.querySelector(".idofchan");yield navigator.clipboard.writeText(e.textContent).then(()=>{alert("copied")})}))),f.addEventListener("click",e=>u(void 0,void 0,void 0,(function*(){let e=document.querySelectorAll(".member"),t=[];e.forEach(e=>{t.push(e.textContent)});yield navigator.clipboard.writeText(t.join("\n")).then(()=>{alert("copied")})}))),m.addEventListener("click",()=>{!function(e,t){let n=document.createElement("a");n.setAttribute("href","data:text/html;charset=utf-8,"+encodeURIComponent(t)),n.setAttribute("download",e),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}(e,t.textContent)}),window.addEventListener("click",e=>{const t=e.target;if("peer-title"===t.className){_.className="show-modal";let e=t.textContent.replace("-","").replace("ID:","").split(" ");N.textContent=e[e.length-1],e.join(" ").replace(""+e[e.length-1],""),M.textContent=e.join(" ").replace(""+e[e.length-1],"")}}),window.addEventListener("beforeunload",()=>{sessionStorage.clear()});const R=window.visualViewport||window;let B,H=!1;const U=()=>{const e=.01*(H&&!W.default.isOverlayActive?R.height||R.innerHeight:window.innerHeight);B!==e&&(G.IS_TOUCH_SUPPORTED&&B<e&&e-B>1&&Object(c.a)(),B=e,document.documentElement.style.setProperty("--vh",e+"px"))},X=new Proxy(Worker,{construct:(e,t)=>new e(t[0]+location.search)});Worker=X;const[z,G,V,W,Y,$,J]=yield Promise.all([n.e(22).then(n.bind(null,28)),Promise.resolve().then(n.bind(null,1)),Promise.resolve().then(n.bind(null,0)),n.e(20).then(n.bind(null,16)),Promise.all([n.e(0),n.e(27)]).then(n.bind(null,18)),Promise.all([n.e(0),n.e(1)]).then(n.bind(null,17)),n.e(26).then(n.bind(null,29))]);if(window.addEventListener("resize",U),U(),i.a){const e=()=>{H=1===t&&i.a&&!W.default.isOverlayActive,U(),R!==window&&(H?(window.removeEventListener("resize",U),R.addEventListener("resize",U)):(R.removeEventListener("resize",U),window.addEventListener("resize",U)))};let t;W.default.addEventListener("im_tab_change",n=>{const o=void 0!==t;t=n,(o||1===t)&&e()}),W.default.addEventListener("overlay_toggle",()=>{e()})}V.IS_FIREFOX&&!s.a&&document.addEventListener("dragstart",e=>{const t=e.target;if("IMG"===t.tagName&&t.classList.contains("emoji"))return Object(a.a)(e),!1}),document.addEventListener("dragstart",e=>{var t;if("IMG"===(null===(t=e.target)||void 0===t?void 0:t.tagName))return e.preventDefault(),!1}),V.IS_FIREFOX&&document.documentElement.classList.add("is-firefox"),V.IS_APPLE?(V.IS_SAFARI&&document.documentElement.classList.add("is-safari"),document.documentElement.classList.add("emoji-supported"),V.IS_APPLE_MOBILE?document.documentElement.classList.add("is-ios"):document.documentElement.classList.add("is-mac")):V.IS_ANDROID&&document.documentElement.classList.add("is-android"),G.IS_TOUCH_SUPPORTED?document.documentElement.classList.add("is-touch"):document.documentElement.classList.add("no-touch");const K=performance.now(),Q=$.default.getCacheLangPack(),[Z,ee]=yield Promise.all([Y.default.getState(),Q]);function te(e,t){e.style.opacity="0",t.then(()=>{window.requestAnimationFrame(()=>{e.style.opacity=""})})}$.default.setTimeFormat(Z.settings.timeFormat),W.default.setThemeListener(),ee.appVersion!==r.a.langPackVersion&&$.default.getLangPack(ee.lang_code),console.log("got state, time:",performance.now()-K);const ne=Z.authState;if("authStateSignedIn"!==ne._){console.log("Will mount auth page:",ne._,Date.now()/1e3);const e=document.getElementById("auth-pages");let t,o;if(e){t=e.querySelector(".scrollable"),G.IS_TOUCH_SUPPORTED&&!d.IS_MOBILE_SAFARI||t.classList.add("no-scrollbar"),t.style.opacity="0";const n=document.createElement("div");n.classList.add("auth-placeholder"),t.prepend(n),t.append(n.cloneNode())}try{yield Promise.all([Promise.all([n.e(0),n.e(1)]).then(n.bind(null,25)),Promise.all([n.e(0),n.e(1)]).then(n.bind(null,27))]).then(([e,t])=>{e.default.setAuthorized(!1),t.default.forceUnsubscribe()})}catch(e){}switch(ne._){case"authStateSignIn":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,21))).default.mount();break;case"authStateSignQr":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(17)]).then(n.bind(null,23))).default.mount();break;case"authStateAuthCode":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,24))).default.mount(ne.sentCode);break;case"authStatePassword":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(11)]).then(n.bind(null,22))).default.mount();break;case"authStateSignUp":o=(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(5),n.e(12)]).then(n.bind(null,26))).default.mount(ne.authCode)}if(t){o&&(yield o);te(t,"fonts"in document?Promise.race([new Promise(e=>setTimeout(e,1e3)),document.fonts.ready]):Promise.resolve())}}else console.log("Will mount IM page:",Date.now()/1e3),te(document.getElementById("main-columns"),Object(l.a)()),(yield Promise.all([n.e(0),n.e(1),n.e(2),n.e(29)]).then(n.bind(null,20))).default.mount();const oe=(yield n.e(18).then(n.bind(null,19))).ripple;Array.from(document.getElementsByClassName("rp")).forEach(e=>oe(e))})))},function(e,t,n){},function(e,t,n){},function(e,t,n){}]);
//# sourceMappingURL=main.3e956e4b3ad1b2ff1839.bundle.js.map