(this.webpackJsonp=this.webpackJsonp||[]).push([[15,17,24,25],{123:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(81);class i{constructor(e,t){this.inputField=e,this.size=t,this.max=45,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper");const n=e.input;n.addEventListener("blur",()=>{this.playAnimation(0)}),n.addEventListener("input",t=>{this.playAnimation(e.value.length)})}playAnimation(e){if(!this.animation)return;let t;(e=Math.min(e,30))?(t=Math.round(Math.min(this.max,e)*(165/this.max)+11.33),this.idleAnimation&&(this.idleAnimation.stop(!0),this.idleAnimation.canvas.style.display="none"),this.animation.canvas.style.display=""):t=0;const n=this.needFrame>t?-1:1;this.animation.setDirection(n),0!==this.needFrame&&0===t&&this.animation.setSpeed(7),this.needFrame=t,this.animation.play()}load(){return this.loadPromise?this.loadPromise:this.loadPromise=Promise.all([a.b.loadAnimationFromURL({container:this.container,loop:!0,autoplay:!0,width:this.size,height:this.size},"assets/img/TwoFactorSetupMonkeyIdle.tgs").then(e=>(this.idleAnimation=e,this.inputField.value.length||e.play(),a.b.waitForFirstFrame(e))),a.b.loadAnimationFromURL({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size},"assets/img/TwoFactorSetupMonkeyTracking.tgs").then(e=>(this.animation=e,this.inputField.value.length||(this.animation.canvas.style.display="none"),this.animation.addEventListener("enterFrame",e=>{(1===this.animation.direction&&e>=this.needFrame||-1===this.animation.direction&&e<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause()),0===e&&0===this.needFrame&&this.idleAnimation&&(this.idleAnimation.canvas.style.display="",this.idleAnimation.play(),this.animation.canvas.style.display="none")}),a.b.waitForFirstFrame(e)))])}remove(){this.animation&&this.animation.remove(),this.idleAnimation&&this.idleAnimation.remove()}}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(76);class i extends a.b{constructor(e){super(Object.assign({plainText:!0},e));const t=this.input;t.type="tel",t.setAttribute("required",""),t.autocomplete="off";let n=0;this.input.addEventListener("input",t=>{this.input.classList.remove("error"),this.setLabel();const a=this.value.replace(/\D/g,"").slice(0,e.length);this.setValueSilently(a);const i=this.value.length;if(i===e.length)e.onFill(this.value);else if(i===n)return;n=i})}}},63:function(e,t,n){"use strict";n.r(t);var a=n(75),i=n(79),o=n(5),s=n(1),c=n(16),l=n(95),r=n(76),d=n(82),u=n(73),h=n(105),p=n(33),m=n(10),b=n(9),g=n(81),v=n(61),f=n(88),y=n(42),E=n(29),_=n(22),L=n(128),O=n(66),w=n(131),S=n(41),j=n(72),k=n(74),C=n(86),T=n(11),A=n(116),x=n(35),F=n(87),P=n(21),N=n(0),D=n(132),I=n(24),M=function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function s(e){try{l(a.next(e))}catch(e){o(e)}}function c(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}l((a=a.apply(e,t||[])).next())}))};let H,R=null;const z=new l.a("page-sign",!0,()=>{const e=()=>{t=b.default.countriesList.filter(e=>{var t;return!(null===(t=e.pFlags)||void 0===t?void 0:t.hidden)}).sort((e,t)=>(e.name||e.default_name).localeCompare(t.name||t.default_name))};let t;e(),N.default.addEventListener("language_change",()=>{e()});const l=new Map;let v,U;const q=document.createElement("div");q.classList.add("input-wrapper");const B=new r.b({label:"Login.CountrySelectorLabel",name:Object(E.b)()});B.container.classList.add("input-select");const V=B.input,W=document.createElement("div");W.classList.add("select-wrapper","z-depth-3","hide");const J=document.createElement("span");J.classList.add("arrow","arrow-down"),B.container.append(J);const K=document.createElement("ul");W.appendChild(K);new i.b(W);let X=()=>{X=null,t.forEach(e=>{const t=Object(x.c)(e.iso2),n=[];e.country_codes.forEach(a=>{const i=document.createElement("li");let o=c.a.wrapEmojiText(t);if(I.a){const e=document.createElement("span");e.innerHTML=o,i.append(e)}else i.innerHTML=o;const s=Object(b.i18n)(e.default_name);s.dataset.defaultName=e.default_name,i.append(s);const l=document.createElement("span");l.classList.add("phone-code"),l.innerText="+"+a.country_code,i.appendChild(l),n.push(i),K.append(i)}),l.set(e.iso2,n)}),K.addEventListener("mousedown",e=>{if(0!==e.button)return;const t=Object(f.a)(e.target,"LI");Q(t)}),B.container.appendChild(W)};const Q=e=>{const n=e.childNodes[1].dataset.defaultName,a=e.querySelector(".phone-code").innerText,i=a.replace(/\D/g,"");Object(k.a)(V,Object(b.i18n)(n)),Object(F.a)(V,"input"),v=t.find(e=>e.default_name===n),U=v.country_codes.find(e=>e.country_code===i),ee.value=ee.lastValue=a,Z(),setTimeout(()=>{te.focus(),Object(A.a)(te,!0)},0)};let Y;X(),V.addEventListener("focus",(function(e){X?X():t.forEach(e=>{l.get(e.iso2).forEach(e=>e.style.display="")}),clearTimeout(Y),Y=void 0,W.classList.remove("hide"),W.offsetWidth,W.classList.add("active"),B.select(),Object(h.b)(z.pageEl.parentElement.parentElement,V,"start",4),setTimeout(()=>{$||(document.addEventListener("mousedown",G,{capture:!0}),$=!0)},0)}));let $=!1;const G=e=>{Object(y.a)(e.target,"input-select")||e.target!==V&&(Z(),document.removeEventListener("mousedown",G,{capture:!0}),$=!1)},Z=()=>{void 0===Y&&(W.classList.remove("active"),Y=window.setTimeout(()=>{W.classList.add("hide"),Y=void 0},200))};V.addEventListener("keyup",e=>{const n=e.key;if(e.ctrlKey||"Control"===n)return!1;let a=B.value.toLowerCase(),i=[];t.forEach(e=>{let t=!![e.name,e.default_name].filter(Boolean).find(e=>-1!==e.toLowerCase().indexOf(a));l.get(e.iso2).forEach(e=>e.style.display=t?"":"none"),t&&i.push(e)}),0===i.length?t.forEach(e=>{l.get(e.iso2).forEach(e=>e.style.display="")}):1===i.length&&"Enter"===n&&Q(l.get(i[0].iso2)[0])}),J.addEventListener("mousedown",(function(e){e.cancelBubble=!0,e.preventDefault(),V.matches(":focus")?V.blur():V.focus()}));const ee=new D.a({onInput:e=>{g.b.loadLottieWorkers();const{country:t,code:n}=e||{};let a=t?t.name||t.default_name:"";a===B.value||v&&t&&n&&(v===t||U.country_code===n.country_code)||(Object(k.a)(V,t?Object(b.i18n)(t.default_name):a),v=t,U=n),t||ee.value.length-1>1?R.style.visibility="":R.style.visibility="hidden"}}),te=ee.input;te.addEventListener("keypress",e=>{if(!R.style.visibility&&"Enter"===e.key)return ae()});const ne=new d.a({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});ne.input.addEventListener("change",()=>{const e=ne.checked;o.default.pushToState("keepSigned",e),_.a.toggleStorage(e),L.a.toggleStorage(e),s.a.toggleStorage(e),T.a.toggleStorage(e)}),o.default.getState().then(e=>{o.default.storage.isAvailable()?ne.checked=e.keepSigned:(ne.checked=!1,ne.label.classList.add("checkbox-disabled"))}),R=Object(u.a)("btn-primary btn-color-primary",{text:"Login.Next"}),R.style.visibility="hidden";const ae=e=>{e&&Object(S.a)(e);const t=Object(C.a)([R,H],!0);Object(k.a)(R,Object(b.i18n)("PleaseWait")),Object(a.f)(R);let i=ee.value;s.a.invokeApi("auth.sendCode",{phone_number:i,api_id:m.a.id,api_hash:m.a.hash,settings:{_:"codeSettings"}}).then(e=>{n.e(17).then(n.bind(null,65)).then(t=>t.default.mount(Object.assign(e,{phone_number:i})))}).catch(e=>{switch(t(),e.type){case"PHONE_NUMBER_INVALID":ee.setError(),Object(k.a)(ee.label,Object(b.i18n)("Login.PhoneLabelInvalid")),te.classList.add("error"),Object(k.a)(R,Object(b.i18n)("Login.Next"));break;default:console.error("auth.sendCode error:",e),R.innerText=e.type}})};Object(j.b)(R,ae),H=Object(u.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"});H.addEventListener("click",()=>{O.default.mount()}),q.append(B.container,ee.container,ne.label,R,H);const ie=document.createElement("h4");ie.classList.add("text-center"),Object(b._i18n)(ie,"Login.Title");const oe=document.createElement("div");oe.classList.add("subtitle","text-center"),Object(b._i18n)(oe,"Login.StartText"),z.pageEl.querySelector(".container").append(ie,oe,q);p.IS_TOUCH_SUPPORTED||setTimeout(()=>{te.focus()},0),Object(w.a)(q),s.a.invokeApi("help.getNearestDc").then(e=>{var t;const n=P.a.getFromCache("langPack");n&&!(null===(t=n.countries)||void 0===t?void 0:t.hash)&&b.default.getLangPack(n.lang_code).then(()=>{Object(F.a)(te,"input")});const a=new Set([1,2,3,4,5]),i=[e.this_dc];let o;return e.nearest_dc!==e.this_dc&&(o=s.a.getNetworker(e.nearest_dc).then(()=>{i.push(e.nearest_dc)})),(o||Promise.resolve()).then(()=>{i.forEach(e=>{a.delete(e)});const e=[...a],t=()=>M(void 0,void 0,void 0,(function*(){const n=e.shift();if(!n)return;const a=`dc${n}_auth_key`;if(yield T.a.get(a))return t();setTimeout(()=>{s.a.getNetworker(n).finally(t)},3e3)}));t()}),e}).then(e=>{B.value.length||ee.value.length||Q(l.get(e.country)[0])})},()=>{R&&(Object(k.a)(R,Object(b.i18n)("Login.Next")),Object(v.ripple)(R,void 0,void 0,!0),R.removeAttribute("disabled")),H&&H.removeAttribute("disabled"),o.default.pushToState("authState",{_:"authStateSignIn"})});t.default=z},65:function(e,t,n){"use strict";n.r(t);var a=n(26),i=n(5),o=n(1),s=n(95),c=n(63),l=n(123),r=n(124),d=n(9),u=n(29),h=n(74),p=function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function s(e){try{l(a.next(e))}catch(e){o(e)}}function c(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,c)}l((a=a.apply(e,t||[])).next())}))};let m,b=null,g=null,v=null;const f=new s.a("page-authCode",!0,()=>{const e=b.type.length,t=new r.a({label:"Code",name:Object(u.b)(),length:e,onFill:e=>{s(e)}});m=t.input,f.pageEl.querySelector(".input-wrapper").append(t.container);f.pageEl.querySelector(".phone-edit").addEventListener("click",(function(){return c.default.mount()}));const i=()=>{setTimeout(()=>{y.remove()},300)},s=e=>{m.setAttribute("disabled","true");const a={phone_number:b.phone_number,phone_code_hash:b.phone_code_hash,phone_code:e};o.a.invokeApi("auth.signIn",a,{ignoreErrors:!0}).then(e=>{switch(e._){case"auth.authorization":o.a.setUser(e.user),n.e(2).then(n.bind(null,62)).then(e=>{e.default.mount()}),i();break;case"auth.authorizationSignUpRequired":Promise.all([n.e(4),n.e(19)]).then(n.bind(null,67)).then(e=>{e.default.mount({phone_number:b.phone_number,phone_code_hash:b.phone_code_hash})}),i()}}).catch(e=>p(void 0,void 0,void 0,(function*(){let a=!1;switch(e.type){case"SESSION_PASSWORD_NEEDED":a=!0,e.handled=!0,yield(yield n.e(14).then(n.bind(null,64))).default.mount(),setTimeout(()=>{m.value=""},300);break;case"PHONE_CODE_EXPIRED":m.classList.add("error"),Object(h.a)(t.label,Object(d.i18n)("PHONE_CODE_EXPIRED"));break;case"PHONE_CODE_EMPTY":case"PHONE_CODE_INVALID":m.classList.add("error"),Object(h.a)(t.label,Object(d.i18n)("PHONE_CODE_INVALID"));break;default:t.label.innerText=e.type}a||t.select(),m.removeAttribute("disabled")})))},g=f.pageEl.querySelector(".auth-image"),v=a.b.isMobile?100:166,y=new l.a(t,v);return g.append(y.container),y.load()},e=>{if(b=e,g){m.value="";const e=document.createEvent("HTMLEvents");e.initEvent("input",!1,!0),m.dispatchEvent(e)}else g=f.pageEl.getElementsByClassName("phone")[0],v=f.pageEl.getElementsByClassName("sent-type")[0];let t,n;switch(g.innerText=b.phone_number,b.type._){case"auth.sentCodeTypeSms":t="Login.Code.SentSms";break;case"auth.sentCodeTypeApp":t="Login.Code.SentInApp";break;case"auth.sentCodeTypeCall":t="Login.Code.SentCall";break;default:t="Login.Code.SentUnknown",n=[b.type._]}Object(h.a)(v,Object(d.i18n)(t,n)),i.default.pushToState("authState",{_:"authStateAuthCode",sentCode:e})},()=>{m.focus()});t.default=f}}]);
//# sourceMappingURL=15.11bb3d97a269308a89ca.chunk.js.map