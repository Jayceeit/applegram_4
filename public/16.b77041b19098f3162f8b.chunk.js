(this.webpackJsonp=this.webpackJsonp||[]).push([[16],{61:function(e,t,n){"use strict";n.r(t),n.d(t,"ripple",(function(){return u}));var s=n(42),i=n(97),r=n(33),o=n(0);let a=0;function u(e,t=(()=>Promise.resolve()),n=null,u=!1){if(e.querySelector(".c-ripple"))return;e.classList.add("rp");let d=document.createElement("div");d.classList.add("c-ripple");let c;e.classList.contains("rp-square")&&d.classList.add("is-square"),e[u?"prepend":"append"](d);const l=(e,s)=>{const o=Date.now(),u=document.createElement("div"),l=a++,h=1e3*+window.getComputedStyle(d).getPropertyValue("--ripple-duration").replace("s","");c=()=>{let e=Date.now()-o;const t=()=>{i.a.mutate(()=>{u.remove()}),n&&n(l)};if(e<h){let n=Math.max(h-e,h/2);setTimeout(()=>u.classList.add("hiding"),Math.max(n-h/2,0)),setTimeout(t,n)}else u.classList.add("hiding"),setTimeout(t,h/2);r.IS_TOUCH_SUPPORTED||window.removeEventListener("contextmenu",c),c=null,p=!1},t&&t(l),window.requestAnimationFrame(()=>{const t=d.getBoundingClientRect();u.classList.add("c-ripple__circle");const n=e-t.left,i=s-t.top,r=Math.sqrt(Math.pow(Math.abs(i-t.height/2)+t.height/2,2)+Math.pow(Math.abs(n-t.width/2)+t.width/2,2)),o=n-r/2,a=i-r/2;u.style.width=u.style.height=r+"px",u.style.left=o+"px",u.style.top=a+"px",d.append(u)})},h=t=>t.target!==e&&(["BUTTON","A"].includes(t.target.tagName)||Object(s.a)(t.target,"c-ripple")!==d);let p=!1;if(r.IS_TOUCH_SUPPORTED){let t=()=>{c&&c()};e.addEventListener("touchstart",n=>{if(!o.default.settings.animationsEnabled)return;if(n.touches.length>1||p||h(n))return;p=!0;let{clientX:s,clientY:i}=n.touches[0];l(s,i),e.addEventListener("touchend",t,{once:!0}),window.addEventListener("touchmove",n=>{n.cancelBubble=!0,n.stopPropagation(),t(),e.removeEventListener("touchend",t)},{once:!0})},{passive:!0})}else e.addEventListener("mousedown",t=>{if(![0,2].includes(t.button))return;if(!o.default.settings.animationsEnabled)return;if("0"===e.dataset.ripple||h(t))return;if(p)return void(p=!1);let{clientX:n,clientY:s}=t;l(n,s),window.addEventListener("mouseup",c,{once:!0,passive:!0}),window.addEventListener("contextmenu",c,{once:!0,passive:!0})},{passive:!0})}},78:function(e,t,n){"use strict";let s;function i(e){s?s.push(e):(s=[e],requestAnimationFrame(()=>{const e=s;s=void 0,e.forEach(e=>e())}))}n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return c}));let r,o,a=!1;function u(e){r?a?e():r.push(e):(r=[e],requestAnimationFrame(()=>{a=!0;for(let e=0;e<r.length;++e)r[e]();r=void 0,a=!1}))}function d(){return o||(o=new Promise(requestAnimationFrame),o.then(()=>{o=void 0}),o)}function c(){return new Promise(e=>{i(()=>{i(e)})})}},91:function(e,t,n){"use strict";function s(e){return null==e?void 0:e.isConnected}n.d(t,"a",(function(){return s}))},97:function(e,t,n){"use strict";var s=n(78),i=n(15),r=n(2),o=n(91);const a=new class{constructor(){this.promises={},this.raf=s.b.bind(null),this.scheduled=!1}do(e,t){let n=this.promises[e];return n||(this.scheduleFlush(),n=this.promises[e]=Object(i.a)()),void 0!==t&&n.then(()=>t()),n}measure(e){return this.do("read",e)}mutate(e){return this.do("write",e)}mutateElement(e,t){const n=Object(o.a)(e)?this.mutate():Promise.resolve();return void 0!==t&&n.then(()=>t()),n}scheduleFlush(){this.scheduled||(this.scheduled=!0,this.raf(()=>{this.promises.read&&this.promises.read.resolve(),this.promises.write&&this.promises.write.resolve(),this.scheduled=!1,this.promises={}}))}};r.a&&(r.a.sequentialDom=a),t.a=a}}]);
//# sourceMappingURL=16.b77041b19098f3162f8b.chunk.js.map