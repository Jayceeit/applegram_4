(this.webpackJsonp=this.webpackJsonp||[]).push([[24,25],{63:function(e,t,n){"use strict";n.r(t);var a=n(75),o=n(79),c=n(5),i=n(1),s=n(16),r=n(95),d=n(76),l=n(82),u=n(73),p=n(105),h=n(33),b=n(10),m=n(9),f=n(81),g=n(61),v=n(88),y=n(42),L=n(29),E=n(22),O=n(128),_=n(66),j=n(131),w=n(41),k=n(72),S=n(74),T=n(86),x=n(11),C=n(116),N=n(35),P=n(87),I=n(21),A=n(0),D=n(132),H=n(24),M=function(e,t,n,a){return new(n||(n=Promise))((function(o,c){function i(e){try{r(a.next(e))}catch(e){c(e)}}function s(e){try{r(a.throw(e))}catch(e){c(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}r((a=a.apply(e,t||[])).next())}))};let R,B=null;const U=new r.a("page-sign",!0,()=>{const e=()=>{t=m.default.countriesList.filter(e=>{var t;return!(null===(t=e.pFlags)||void 0===t?void 0:t.hidden)}).sort((e,t)=>(e.name||e.default_name).localeCompare(t.name||t.default_name))};let t;e(),A.default.addEventListener("language_change",()=>{e()});const r=new Map;let g,W;const q=document.createElement("div");q.classList.add("input-wrapper");const F=new d.b({label:"Login.CountrySelectorLabel",name:Object(L.b)()});F.container.classList.add("input-select");const J=F.input,K=document.createElement("div");K.classList.add("select-wrapper","z-depth-3","hide");const V=document.createElement("span");V.classList.add("arrow","arrow-down"),F.container.append(V);const z=document.createElement("ul");K.appendChild(z);new o.b(K);let Q=()=>{Q=null,t.forEach(e=>{const t=Object(N.c)(e.iso2),n=[];e.country_codes.forEach(a=>{const o=document.createElement("li");let c=s.a.wrapEmojiText(t);if(H.a){const e=document.createElement("span");e.innerHTML=c,o.append(e)}else o.innerHTML=c;const i=Object(m.i18n)(e.default_name);i.dataset.defaultName=e.default_name,o.append(i);const r=document.createElement("span");r.classList.add("phone-code"),r.innerText="+"+a.country_code,o.appendChild(r),n.push(o),z.append(o)}),r.set(e.iso2,n)}),z.addEventListener("mousedown",e=>{if(0!==e.button)return;const t=Object(v.a)(e.target,"LI");$(t)}),F.container.appendChild(K)};const $=e=>{const n=e.childNodes[1].dataset.defaultName,a=e.querySelector(".phone-code").innerText,o=a.replace(/\D/g,"");Object(S.a)(J,Object(m.i18n)(n)),Object(P.a)(J,"input"),g=t.find(e=>e.default_name===n),W=g.country_codes.find(e=>e.country_code===o),ee.value=ee.lastValue=a,Z(),setTimeout(()=>{te.focus(),Object(C.a)(te,!0)},0)};let G;Q(),J.addEventListener("focus",(function(e){Q?Q():t.forEach(e=>{r.get(e.iso2).forEach(e=>e.style.display="")}),clearTimeout(G),G=void 0,K.classList.remove("hide"),K.offsetWidth,K.classList.add("active"),F.select(),Object(p.b)(U.pageEl.parentElement.parentElement,J,"start",4),setTimeout(()=>{X||(document.addEventListener("mousedown",Y,{capture:!0}),X=!0)},0)}));let X=!1;const Y=e=>{Object(y.a)(e.target,"input-select")||e.target!==J&&(Z(),document.removeEventListener("mousedown",Y,{capture:!0}),X=!1)},Z=()=>{void 0===G&&(K.classList.remove("active"),G=window.setTimeout(()=>{K.classList.add("hide"),G=void 0},200))};J.addEventListener("keyup",e=>{const n=e.key;if(e.ctrlKey||"Control"===n)return!1;let a=F.value.toLowerCase(),o=[];t.forEach(e=>{let t=!![e.name,e.default_name].filter(Boolean).find(e=>-1!==e.toLowerCase().indexOf(a));r.get(e.iso2).forEach(e=>e.style.display=t?"":"none"),t&&o.push(e)}),0===o.length?t.forEach(e=>{r.get(e.iso2).forEach(e=>e.style.display="")}):1===o.length&&"Enter"===n&&$(r.get(o[0].iso2)[0])}),V.addEventListener("mousedown",(function(e){e.cancelBubble=!0,e.preventDefault(),J.matches(":focus")?J.blur():J.focus()}));const ee=new D.a({onInput:e=>{f.b.loadLottieWorkers();const{country:t,code:n}=e||{};let a=t?t.name||t.default_name:"";a===F.value||g&&t&&n&&(g===t||W.country_code===n.country_code)||(Object(S.a)(J,t?Object(m.i18n)(t.default_name):a),g=t,W=n),t||ee.value.length-1>1?B.style.visibility="":B.style.visibility="hidden"}}),te=ee.input;te.addEventListener("keypress",e=>{if(!B.style.visibility&&"Enter"===e.key)return ae()});const ne=new l.a({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});ne.input.addEventListener("change",()=>{const e=ne.checked;c.default.pushToState("keepSigned",e),E.a.toggleStorage(e),O.a.toggleStorage(e),i.a.toggleStorage(e),x.a.toggleStorage(e)}),c.default.getState().then(e=>{c.default.storage.isAvailable()?ne.checked=e.keepSigned:(ne.checked=!1,ne.label.classList.add("checkbox-disabled"))}),B=Object(u.a)("btn-primary btn-color-primary",{text:"Login.Next"}),B.style.visibility="hidden";const ae=e=>{e&&Object(w.a)(e);const t=Object(T.a)([B,R],!0);Object(S.a)(B,Object(m.i18n)("PleaseWait")),Object(a.f)(B);let o=ee.value;i.a.invokeApi("auth.sendCode",{phone_number:o,api_id:b.a.id,api_hash:b.a.hash,settings:{_:"codeSettings"}}).then(e=>{n.e(17).then(n.bind(null,65)).then(t=>t.default.mount(Object.assign(e,{phone_number:o})))}).catch(e=>{switch(t(),e.type){case"PHONE_NUMBER_INVALID":ee.setError(),Object(S.a)(ee.label,Object(m.i18n)("Login.PhoneLabelInvalid")),te.classList.add("error"),Object(S.a)(B,Object(m.i18n)("Login.Next"));break;default:console.error("auth.sendCode error:",e),B.innerText=e.type}})};Object(k.b)(B,ae),R=Object(u.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"});R.addEventListener("click",()=>{_.default.mount()}),q.append(F.container,ee.container,ne.label,B,R);const oe=document.createElement("h4");oe.classList.add("text-center"),Object(m._i18n)(oe,"Login.Title");const ce=document.createElement("div");ce.classList.add("subtitle","text-center"),Object(m._i18n)(ce,"Login.StartText"),U.pageEl.querySelector(".container").append(oe,ce,q);h.IS_TOUCH_SUPPORTED||setTimeout(()=>{te.focus()},0),Object(j.a)(q),i.a.invokeApi("help.getNearestDc").then(e=>{var t;const n=I.a.getFromCache("langPack");n&&!(null===(t=n.countries)||void 0===t?void 0:t.hash)&&m.default.getLangPack(n.lang_code).then(()=>{Object(P.a)(te,"input")});const a=new Set([1,2,3,4,5]),o=[e.this_dc];let c;return e.nearest_dc!==e.this_dc&&(c=i.a.getNetworker(e.nearest_dc).then(()=>{o.push(e.nearest_dc)})),(c||Promise.resolve()).then(()=>{o.forEach(e=>{a.delete(e)});const e=[...a],t=()=>M(void 0,void 0,void 0,(function*(){const n=e.shift();if(!n)return;const a=`dc${n}_auth_key`;if(yield x.a.get(a))return t();setTimeout(()=>{i.a.getNetworker(n).finally(t)},3e3)}));t()}),e}).then(e=>{F.value.length||ee.value.length||$(r.get(e.country)[0])})},()=>{B&&(Object(S.a)(B,Object(m.i18n)("Login.Next")),Object(g.ripple)(B,void 0,void 0,!0),B.removeAttribute("disabled")),R&&R.removeAttribute("disabled"),c.default.pushToState("authState",{_:"authStateSignIn"})});t.default=U}}]);
//# sourceMappingURL=24.85dd01a0c5fd85adf450.chunk.js.map