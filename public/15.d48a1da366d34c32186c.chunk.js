(this.webpackJsonp=this.webpackJsonp||[]).push([[15,19],{22:function(e,t,n){"use strict";n.r(t);var i=n(31),s=n(36),a=n(35),o=n(99),r=n(14),c=n(12),l=n(28),h=n(27),u=n(79),d=n(60),p=n(5),m=n(33);let f=null;const b=new d.a("page-signUp",!0,()=>Promise.all([n.e(4),n.e(6)]).then(n.bind(null,69)).then(e=>{const t=new u.a({className:"page-signUp",withInputWrapper:!0,titleLangKey:"YourName",subtitleLangKey:"Login.Register.Subtitle"});t.imageDiv.classList.add("avatar-edit"),t.title.classList.add("fullName");const r=document.createElement("canvas");r.id="canvas-avatar",r.className="avatar-edit-canvas";const d=document.createElement("span");d.className="tgico tgico-cameraadd",t.imageDiv.append(r,d);const b=e.default;let v;t.imageDiv.addEventListener("click",()=>{(new o.a).open(r,e=>{v=e})});const g=e=>{const n=y.value||"",i=w.value||"",s=n||i?(n+" "+i).trim():"";s?Object(m.a)(t.title,h.b.wrapEmojiText(s)):Object(m.a)(t.title,Object(c.i18n)("YourName"))};const y=new s.b({label:"FirstName",maxLength:70}),w=new s.b({label:"LastName",maxLength:64}),L=Object(i.a)("btn-primary btn-color-primary"),E=new c.default.IntlElement({key:"StartMessaging"});return L.append(E.element),t.inputWrapper.append(y.container,w.container,L),y.input.addEventListener("input",g),w.input.addEventListener("input",g),L.addEventListener("click",(function(e){if(y.input.classList.contains("error")||w.input.classList.contains("error"))return!1;if(!y.value.length)return y.input.classList.add("error"),!1;this.disabled=!0;const t=y.value.trim(),i=w.value.trim(),s={phone_number:f.phone_number,phone_code_hash:f.phone_code_hash,first_name:t,last_name:i};E.update({key:"PleaseWait"});const o=Object(a.f)(this);l.a.invokeApi("auth.signUp",s).then(e=>{switch(e._){case"auth.authorization":l.a.setUserAuth(e.user.id),new Promise((e,t)=>{if(!v)return e();v().then(n=>{b.uploadProfilePhoto(n).then(e,t)},t)}).finally(()=>{n.e(5).then(n.bind(null,17)).then(e=>{e.default.mount()})});break;default:E.update({key:e._}),this.removeAttribute("disabled"),o.remove()}}).catch(e=>{this.removeAttribute("disabled"),o.remove(),e.type,E.update({key:e.type})})})),Object(p.a)(),new Promise(e=>{window.requestAnimationFrame(e)})}),e=>{f=e,r.default.pushToState("authState",{_:"authStateSignUp",authCode:e})});t.default=b},33:function(e,t,n){"use strict";function i(e,t){if("string"==typeof t)return void(e.innerHTML=t);const n=e.firstChild;n?e.lastChild===n?n.replaceWith(t):(e.textContent="",e.append(t)):e.append(t)}n.d(t,"a",(function(){return i}))},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n(66),s=n(44),a=n(67),o=n(32),r=n(12),c=n(27);let l=()=>{document.addEventListener("paste",e=>{if(!Object(i.a)(e.target,'contenteditable="true"'))return;e.preventDefault();let t=(e.originalEvent||e).clipboardData.getData("text/plain"),n=c.b.parseEntities(t);n=n.filter(e=>"messageEntityEmoji"===e._||"messageEntityLinebreak"===e._),t=c.b.wrapRichText(t,{entities:n,noLinks:!0,wrappingDraft:!0}),window.document.execCommand("insertHTML",!1,t)}),l=null};var h;!function(e){e[e.Neutral=0]="Neutral",e[e.Valid=1]="Valid",e[e.Error=2]="Error"}(h||(h={}));t.b=class{constructor(e={}){this.options=e,this.container=document.createElement("div"),this.container.classList.add("input-field"),e.maxLength&&(e.showLengthOn=Math.round(e.maxLength/3));const{placeholder:t,maxLength:n,showLengthOn:i,name:c,plainText:h}=e;let u,d,p=e.label||e.labelText;if(h)this.container.innerHTML=`\n      <input type="text" ${c?`name="${c}"`:""} autocomplete="off" ${p?'required=""':""} class="input-field-input">\n      `,u=this.container.firstElementChild;else{l&&l(),this.container.innerHTML='\n      <div contenteditable="true" class="input-field-input"></div>\n      ',u=this.container.firstElementChild;const t=new MutationObserver(()=>{d&&d()});u.addEventListener("input",()=>{Object(a.a)(u)&&(u.innerHTML=""),this.inputFake&&(this.inputFake.innerHTML=u.innerHTML,this.onFakeInput())}),t.observe(u,{characterData:!0,childList:!0,subtree:!0}),e.animate&&(u.classList.add("scrollable","scrollable-y"),this.wasInputFakeClientHeight=0,this.showScrollDebounced=Object(o.a)(()=>this.input.classList.remove("no-scrollbar"),150,!1,!0),this.inputFake=document.createElement("div"),this.inputFake.setAttribute("contenteditable","true"),this.inputFake.className=u.className+" input-field-input-fake")}if(u.setAttribute("dir","auto"),t&&(Object(r._i18n)(u,t,void 0,"placeholder"),this.inputFake&&Object(r._i18n)(this.inputFake,t,void 0,"placeholder")),p||t){const e=document.createElement("div");e.classList.add("input-field-border"),this.container.append(e)}if(p&&(this.label=document.createElement("label"),this.setLabel(),this.container.append(this.label)),n){const e=this.container.lastElementChild;let t=!1;d=()=>{const a=u.classList.contains("error"),o=h?u.value.length:[...Object(s.a)(u,!1).value].length,r=n-o,c=r<0;u.classList.toggle("error",c),c||r<=i?(this.setLabel(),e.append(` (${n-o})`),t||(t=!0)):(a&&!c||t)&&(this.setLabel(),t=!1)},u.addEventListener("input",d)}this.input=u}select(){this.input.value&&this.input.select()}setLabel(){this.label.textContent="",this.options.labelText?this.label.innerHTML=this.options.labelText:this.label.append(Object(r.i18n)(this.options.label,this.options.labelOptions))}onFakeInput(){const{scrollHeight:e,clientHeight:t}=this.inputFake;this.wasInputFakeClientHeight&&this.wasInputFakeClientHeight!==t&&(this.input.classList.add("no-scrollbar"),this.showScrollDebounced()),this.wasInputFakeClientHeight=t,this.input.style.height=e?e+"px":""}get value(){return this.options.plainText?this.input.value:Object(s.a)(this.input,!1).value}set value(e){this.setValueSilently(e,!1);const t=new Event("input",{bubbles:!0,cancelable:!0});this.input.dispatchEvent(t)}setValueSilently(e,t=!0){this.options.plainText?this.input.value=e:(this.input.innerHTML=e,this.inputFake&&(this.inputFake.innerHTML=e,t&&this.onFakeInput()))}isValid(){return!this.input.classList.contains("error")&&this.value!==this.originalValue}setOriginalValue(e="",t=!1){this.originalValue=e,this.options.plainText||(e=c.b.wrapDraftText(e)),t?this.setValueSilently(e,!1):this.value=e}setState(e,t){t&&(this.label.textContent="",this.label.append(Object(r.i18n)(t,this.options.labelOptions))),this.input.classList.toggle("error",!!(e&h.Error)),this.input.classList.toggle("valid",!!(e&h.Valid))}setError(e){this.setState(h.Error,e)}}},44:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var i=n(26),s=n(27),a=n(63);function o(e,t=!0){const n=[],i=[],o=t?[]:void 0;Object(a.a)(e,n,i,void 0,void 0,o),i.length&&n.push(i.join(""));let r=n.join("\n");return r=r.replace(/\u00A0/g," "),o&&s.b.combineSameEntities(o),{value:r,entities:o}}i.a.getRichValue=o},50:function(e,t,n){"use strict";var i=n(13),s=n(28),a=n(43),o=n(84),r=n(80),c=n(26);const l=new class{constructor(){this.cacheStorage=new r.a("cachedFiles"),this.downloads={},this.progress={},this.progressCallbacks={},this.uploadId=0,this.thumbsCache={photo:{},document:{}},i.default.addEventListener("download_progress",e=>{const t=e;this.progress[t.fileName]=t;const n=this.progressCallbacks[t.fileName];n&&n.forEach(e=>e(t));const i=this.downloads[t.fileName];i&&i.notifyAll(t)})}getNewDeferred(e){const t=Object(a.a)();return t.cancel=()=>{const n=new Error("Download canceled");n.name="AbortError",s.a.cancelDownload(e),t.reject(n),t.cancel=()=>{}},t.finally(()=>{delete this.progress[e],delete this.progressCallbacks[e]}),t.catch(()=>{this.clearDownload(e)}),this.downloads[e]=t}clearDownload(e){delete this.downloads[e]}fakeDownload(e,t){const n=this.getNewDeferred(e);return"string"==typeof t?fetch(t).then(e=>e.blob()).then(e=>n.resolve(e)):n.resolve(t),n}download(e){const t=Object(o.a)(e.location,{fileName:e.fileName});if(this.downloads.hasOwnProperty(t))return this.downloads[t];const n=this.getNewDeferred(t),i=e=>{n.reject(e)};return(()=>{if(!s.a.worker||e.onlyCache){const a=this.cacheStorage.getFile(t).then(t=>{if(t.size<e.size)throw"wrong size";n.resolve(t)});return e.onlyCache?a.catch(i):a.catch(()=>s.a.downloadFile(e).then(n.resolve,i))}s.a.downloadFile(e).then(n.resolve,i)})(),n}upload(e,t){if(!t){const n=null==e?void 0:e.type;if(n){const e=this.uploadId+++"."+n.split("/")[1];t=["image/jpeg","image/png","image/bmp"].indexOf(n)>=0?"photo"+e:0===n.indexOf("audio/")||["video/ogg"].indexOf(n)>=0?"audio"+e:0===n.indexOf("video/")?"video"+e:"document"+e}else t="upload-"+this.uploadId++}const n=this.getNewDeferred(t);return s.a.uploadFile({file:e,fileName:t}).then(n.resolve,n.reject),n.finally(()=>{this.clearDownload(t)}),n}getDownload(e){return this.downloads[e]}addProgressCallback(e,t){var n;const i=this.progress[e];(null!==(n=this.progressCallbacks[e])&&void 0!==n?n:this.progressCallbacks[e]=[]).push(t),i&&t(i)}createDownloadAnchor(e,t,n){const i=document.createElement("a");i.href=e,i.download=t,i.target="_blank",i.style.position="absolute",i.style.top="1px",i.style.left="1px",document.body.append(i);try{var s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),i.dispatchEvent(s)}catch(t){console.error("Download click error",t);try{i.click()}catch(t){window.open(e,"_blank")}}setTimeout(()=>{i.remove(),n&&n()},100)}downloadToDisc(e,t){const n=this.download(e);return n.then(e=>{const n=URL.createObjectURL(e);this.createDownloadAnchor(n,t,()=>{URL.revokeObjectURL(n)})}),n}getCacheContext(e,t="full"){var n,i;const s=null!==(n=this.thumbsCache[e._][e.id])&&void 0!==n?n:this.thumbsCache[e._][e.id]={};return null!==(i=s[t])&&void 0!==i?i:s[t]={downloaded:0,url:""}}};c.a&&(c.a.appDownloadManager=l),t.a=l},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return u}));var i=n(13),s=n(16),a=n(62),o=n(65),r=n(12),c=n(3),l=n(5);class h{constructor(e,t,n={}){if(this.element=document.createElement("div"),this.container=document.createElement("div"),this.header=document.createElement("div"),this.title=document.createElement("div"),this.onEscape=()=>!0,this.hide=()=>{o.a.back("popup")},this.destroy=()=>{this.onClose&&this.onClose(),this.element.classList.add("hiding"),this.element.classList.remove("active"),this.btnClose&&this.btnClose.removeEventListener("click",this.hide),i.default.overlayIsActive=!1,o.a.removeItem(this.navigationItem),this.navigationItem=void 0,setTimeout(()=>{this.element.remove(),this.onCloseAfterTimeout&&this.onCloseAfterTimeout(),a.a.checkAnimations(!1)},150)},this.element.classList.add("popup"),this.element.className="popup"+(e?" "+e:""),this.container.classList.add("popup-container","z-depth-1"),this.header.classList.add("popup-header"),this.title.classList.add("popup-title"),this.header.append(this.title),n.closable&&(this.btnClose=document.createElement("span"),this.btnClose.classList.add("btn-icon","popup-close","tgico-close"),this.header.prepend(this.btnClose),this.btnClose.addEventListener("click",this.hide,{once:!0})),n.overlayClosable){const e=t=>{Object(c.a)(t.target,"popup-container")||(this.hide(),this.element.removeEventListener("click",e))};this.element.addEventListener("click",e)}if(n.withConfirm&&(this.btnConfirm=document.createElement("button"),this.btnConfirm.classList.add("btn-primary","btn-color-primary"),!0!==n.withConfirm&&this.btnConfirm.append(Object(r.i18n)(n.withConfirm)),this.header.append(this.btnConfirm),Object(s.ripple)(this.btnConfirm)),this.container.append(this.header),n.body&&(this.body=document.createElement("div"),this.body.classList.add("popup-body"),this.container.append(this.body)),t&&t.length){const e=document.createElement("div");e.classList.add("popup-buttons"),2===t.length&&e.classList.add("popup-buttons-row");const n=t.map(e=>{const t=document.createElement("button");return t.className="btn"+(e.isDanger?" danger":" primary"),Object(s.ripple)(t),e.text?t.innerHTML=e.text:t.append(Object(r.i18n)(e.langKey,e.langArgs)),e.callback?t.addEventListener("click",()=>{e.callback(),this.destroy()},{once:!0}):e.isCancel&&t.addEventListener("click",()=>{this.destroy()},{once:!0}),t});e.append(...n),this.container.append(e)}this.element.append(this.container)}show(){this.navigationItem={type:"popup",onPop:this.destroy,onEscape:this.onEscape},o.a.pushItem(this.navigationItem),Object(l.a)(),document.body.append(this.element),this.element.offsetWidth,this.element.classList.add("active"),i.default.overlayIsActive=!0,a.a.checkAnimations(!0)}}const u=e=>(e.find(e=>e.isCancel)||e.push({langKey:"Cancel",isCancel:!0}),e)},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));const i={bold:{match:'[style*="font-weight"], b',entityName:"messageEntityBold"},underline:{match:'[style*="underline"], u',entityName:"messageEntityUnderline"},italic:{match:'[style*="italic"], i',entityName:"messageEntityItalic"},monospace:{match:'[style*="monospace"], [face="monospace"]',entityName:"messageEntityPre"},strikethrough:{match:'[style*="line-through"], strike',entityName:"messageEntityStrike"},link:{match:"A:not(.follow)",entityName:"messageEntityTextUrl"},mentionName:{match:"A.follow",entityName:"messageEntityMentionName"}};function s(e,t,n,a,o,r,c={offset:0}){if(3===e.nodeType){const t=e.nodeValue;if(a===e?n.push(t.substr(0,o)+""+t.substr(o)):n.push(t),r&&t.trim()&&e.parentNode){const n=e.parentElement;for(const e in i){const s=i[e],a=n.closest(s.match+", [contenteditable]");a&&null===a.getAttribute("contenteditable")&&("messageEntityTextUrl"===s.entityName?r.push({_:s.entityName,url:n.href,offset:c.offset,length:t.length}):"messageEntityMentionName"===s.entityName?r.push({_:s.entityName,offset:c.offset,length:t.length,user_id:+n.dataset.follow}):r.push({_:s.entityName,offset:c.offset,length:t.length}))}}return void(c.offset+=t.length)}if(1!==e.nodeType)return;const l=a===e,h="DIV"===e.tagName||"P"===e.tagName;if(h&&n.length||"BR"===e.tagName)t.push(n.join("")),n.splice(0,n.length);else if("IMG"===e.tagName){const t=e.alt;t&&(n.push(t),c.offset+=t.length)}l&&!o&&n.push("");let u=e.firstChild;for(;u;)s(u,t,n,a,o,r,c),u=u.nextSibling;l&&o&&n.push(""),h&&n.length&&(t.push(n.join("")),n.splice(0,n.length))}},66:function(e,t,n){"use strict";function i(e,t){return e.closest(`[${t}]`)}n.d(t,"a",(function(){return i}))},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(44);function s(e){return e.hasAttribute("contenteditable")||"INPUT"!==e.tagName?!Object(i.a)(e,!1).value.trim():!e.value.trim()}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var i=n(12);class s{constructor(e){this.element=document.body.querySelector("."+e.className),this.container=document.createElement("div"),this.container.className="container center-align",this.imageDiv=document.createElement("div"),this.imageDiv.className="auth-image",this.title=document.createElement("h4"),e.titleLangKey&&this.title.append(Object(i.i18n)(e.titleLangKey)),this.subtitle=document.createElement("p"),this.subtitle.className="subtitle",e.subtitleLangKey&&this.subtitle.append(Object(i.i18n)(e.subtitleLangKey)),this.container.append(this.imageDiv,this.title,this.subtitle),e.withInputWrapper&&(this.inputWrapper=document.createElement("div"),this.inputWrapper.className="input-wrapper",this.container.append(this.inputWrapper)),this.element.append(this.container)}}},80:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var i=n(53),s=n(64),a=function(e,t,n,i){return new(n||(n=Promise))((function(s,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function r(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((i=i.apply(e,t||[])).next())}))};var o=new class{constructor(){this.blobSupported=!0;try{Object(s.a)([],"")}catch(e){this.blobSupported=!1}}isAvailable(){return this.blobSupported}write(e,t){return t instanceof Blob?Object(s.d)(t).then(t=>e.write(t)):e.write(t)}getFakeFileWriter(e,t){const n=[];return{write:e=>a(this,void 0,void 0,(function*(){if(!this.blobSupported)throw!1;n.push(e)})),truncate:()=>{n.length=0},finalize:(i=!0)=>{const a=Object(s.a)(n,e);return i&&t&&t(a),a}}}},r=function(e,t,n,i){return new(n||(n=Promise))((function(s,a){function o(e){try{c(i.next(e))}catch(e){a(e)}}function r(e){try{c(i.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,r)}c((i=i.apply(e,t||[])).next())}))};class c{constructor(e){this.dbName=e,this.useStorage=!0,i.a.test&&(this.dbName+="_test"),c.STORAGES.length&&(this.useStorage=c.STORAGES[0].useStorage),this.openDatabase(),c.STORAGES.push(this)}openDatabase(){var e;return null!==(e=this.openDbPromise)&&void 0!==e?e:this.openDbPromise=caches.open(this.dbName)}delete(e){return this.timeoutOperation(t=>t.delete("/"+e))}deleteAll(){return caches.delete(this.dbName)}get(e){return this.timeoutOperation(t=>t.match("/"+e))}save(e,t){return this.timeoutOperation(n=>n.put("/"+e,t))}getFile(e,t="blob"){return this.get(e).then(e=>{if(!e)throw"NO_ENTRY_FOUND";return e[t]()})}saveFile(e,t){t instanceof Blob||(t=Object(s.a)(t));const n=new Response(t,{headers:{"Content-Length":""+t.size}});return this.save(e,n).then(()=>t)}timeoutOperation(e){return this.useStorage?new Promise((t,n)=>r(this,void 0,void 0,(function*(){let i=!1;const s=setTimeout(()=>{n(),i=!0},15e3);try{const n=yield this.openDatabase();if(!n)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const s=yield e(n);if(i)return;t(s)}catch(e){n(e)}clearTimeout(s)}))):Promise.reject("STORAGE_OFFLINE")}getFileWriter(e,t){const n=o.getFakeFileWriter(t,t=>this.saveFile(e,t).catch(()=>t));return Promise.resolve(n)}static toggleStorage(e){return Promise.all(this.STORAGES.map(t=>{if(t.useStorage=e,!e)return t.deleteAll()}))}}c.STORAGES=[]},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}));function i(e,t){const n=""["".length-1]||"";let i;switch(e._){case"inputPhotoFileLocation":i=["photo",""[0],e.id,e.thumb_size].filter(Boolean).join("_");break;case"inputDocumentFileLocation":i=["document",""[0],e.id,e.thumb_size].filter(Boolean).join("_");break;case"inputPeerPhotoFileLocation":i=["peerPhoto",e.photo_id,e.pFlags.big?"big":"small"].join("_");break;case"inputStickerSetThumb":i=["stickerSetThumb",e.stickerset.id||e.stickerset.short_name||e.stickerset.emoticon||e.stickerset._,e.thumb_version].join("_");break;case"inputFileLocation":i=e.volume_id+"_"+e.local_id;break;default:console.error("Unrecognized location:",e),i=""}return i+(n?"."+n:n)}function s(e,t){return"/"+e+"/"+encodeURIComponent(JSON.stringify(t))}},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(50);var s=function(e,t){let n,i,s,a={},o=0,r=0,c=0,l=0,h=0;function u(){e.classList.add("crop-blur"),e.draggable=!1,s=new Image,s.src=e.src,s.draggable=!1,s.classList.add("crop-overlay-image"),t||(t=document.createElement("canvas")),n=document.createElement("div"),n.classList.add("crop-component"),i=document.createElement("div"),i.classList.add("crop-overlay");const a=document.createElement("div");a.classList.add("crop-overlay-color"),n.appendChild(i);e.parentNode.appendChild(n),n.appendChild(s),n.appendChild(e),n.appendChild(a),i.appendChild(s),s.style.maxWidth=e.width+"px",h=e.naturalWidth/e.offsetWidth;const o=e.offsetWidth/2-100,r=e.offsetHeight/2-100;d(200,200),p(o,r),m(o,r),i.addEventListener("mousedown",g,!1),i.addEventListener("touchstart",g,!1),i.addEventListener("wheel",v,!1),document.addEventListener("keypress",b,!1)}function d(e,t){c=e*h,l=t*h,i.style.width=e+"px",i.style.height=t+"px"}function p(e,t){r=t*h,o=e*h,s.style.top=-t+"px",s.style.left=-e+"px"}function m(e,t){i.style.top=t+"px",i.style.left=e+"px"}function f(e){e=e*Math.PI*2;let t,n,a,o,r=Math.floor(i.clientWidth+e),c=Math.floor(i.clientHeight+e),l=s.clientWidth,h=s.clientHeight;r<50||r>l||(t=i.offsetLeft-e/2,n=i.offsetTop-e/2,a=t+r,o=n+c,t<0&&(t=0),n<0&&(n=0),a>l||o>h||(d(r,r),p(t,n),m(t,n)))}function b(e){switch(e.preventDefault(),String.fromCharCode(e.charCode)){case"+":f(4);break;case"-":f(-4)}}function v(e){e.preventDefault(),f(e.deltaY>0?1:-1)}function g(e){e.preventDefault(),e.stopPropagation(),function(e){a.container_width=i.offsetWidth,a.container_height=i.offsetHeight,a.container_left=i.offsetLeft,a.container_top=i.offsetTop,a.mouse_x=(e.clientX||e.pageX||e.touches&&e.touches[0].clientX)+window.scrollX,a.mouse_y=(e.clientY||e.pageY||e.touches&&e.touches[0].clientY)+window.scrollY}(e),document.addEventListener("mousemove",w),document.addEventListener("touchmove",w),document.addEventListener("mouseup",y),document.addEventListener("touchend",y)}function y(e){e.preventDefault(),document.removeEventListener("mouseup",y),document.removeEventListener("touchend",y),document.removeEventListener("mousemove",w),document.removeEventListener("touchmove",w)}function w(e){let t,n,o,r,c={x:0,y:0};e.preventDefault(),e.stopPropagation(),c.x=e.pageX||e.touches&&e.touches[0].pageX,c.y=e.pageY||e.touches&&e.touches[0].pageY,t=c.x-(a.mouse_x-a.container_left),n=c.y-(a.mouse_y-a.container_top),o=i.offsetWidth,r=i.offsetHeight,t<0?t=0:t>s.offsetWidth-o&&(t=s.offsetWidth-o),n<0?n=0:n>s.offsetHeight-r&&(n=s.offsetHeight-r),p(t,n),m(t,n)}return e.complete?u():e.onload=u,{crop:function(){t.width=c,t.height=l,t.getContext("2d").drawImage(e,o,r,c,l,0,0,c,l)},removeHandlers:function(){i.removeEventListener("mousedown",g),i.removeEventListener("touchstart",g),i.removeEventListener("wheel",v),document.removeEventListener("mouseup",y),document.removeEventListener("touchend",y),document.removeEventListener("mousemove",w),document.removeEventListener("touchmove",w),document.removeEventListener("keypress",b),n.remove(),i.remove(),s.remove()}}},a=n(51),o=n(16),r=n(12),c=n(64);class l extends a.b{constructor(){super("popup-avatar",null,{closable:!0}),this.image=new Image,this.cropper={crop:()=>{},removeHandlers:()=>{}},this.h6=document.createElement("h6"),Object(r._i18n)(this.h6,"Popup.Avatar.Title"),this.btnClose.classList.remove("btn-icon"),this.header.append(this.h6),this.cropContainer=document.createElement("div"),this.cropContainer.classList.add("crop"),this.cropContainer.append(this.image),this.input=document.createElement("input"),this.input.type="file",this.input.style.display="none",this.input.addEventListener("change",e=>{const t=e.target.files[0];t&&Object(c.b)(t).then(e=>{this.image=new Image,this.cropContainer.append(this.image),this.image.src=e,this.image.onload=()=>{this.show(),this.cropper=s(this.image,this.canvas),this.input.value=""}})},!1),this.btnSubmit=document.createElement("button"),this.btnSubmit.className="btn-primary btn-color-primary btn-circle btn-crop btn-icon tgico-check z-depth-1",Object(o.ripple)(this.btnSubmit),this.btnSubmit.addEventListener("click",()=>{this.cropper.crop(),this.btnClose.click(),this.canvas.toBlob(e=>{this.blob=e,this.darkenCanvas(),this.resolve()},"image/jpeg",1)}),this.container.append(this.cropContainer,this.btnSubmit,this.input),this.onCloseAfterTimeout=()=>{this.cropper.removeHandlers(),this.image&&this.image.remove()}}resolve(){this.onCrop(()=>i.a.upload(this.blob))}open(e,t){this.canvas=e,this.onCrop=t,this.input.click()}darkenCanvas(){let e=this.canvas.getContext("2d");e.fillStyle="rgba(0, 0, 0, 0.3)",e.fillRect(0,0,this.canvas.width,this.canvas.height)}}}}]);
//# sourceMappingURL=15.d48a1da366d34c32186c.chunk.js.map