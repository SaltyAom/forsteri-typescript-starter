!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){e.exports=n("2YZa")},"0de0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=(e,t={},...n)=>({nodeName:null===e?"fragment":e.toLowerCase(),attributes:null!==t&&t,childNodes:n}),i=e=>Object.keys(e),o=e=>i(e).length,l=e=>!!o(e)&&e,s=e=>"string"==typeof e,a=(e,t)=>{let n={},r=i(e).filter(e=>i(t).includes(e));return i(t).filter(e=>{r.includes(e)||(n[e]="")}),r.forEach(r=>{if("object"==typeof e[r]){let i=a(e[r],t[r]);return o(i)?n[r]=i:null}if(r.startsWith("on"))return n[r]=e[r];if("function"==typeof e[r]){if(e[r].toString()===t[r].toString())return;n[r]=e[r]}return e[r]!==t[r]?n[r]=e[r]:void 0}),n},d=(e,t)=>{if("string"!=typeof e&&"children"===e.nodeName)return{nodeName:!1,attributes:!1,childNodes:!1};if("string"==typeof e||"string"==typeof t||typeof e!=typeof t)return e;if(e.nodeName!==t.nodeName)return e;let n=e.attributes,r=Array.apply(!1,new Array(e.childNodes.length));return typeof e.attributes==typeof t.attributes&&(n=a(e.attributes,t.attributes)),e.childNodes.forEach((e,n)=>{if(s(e)){let i=t.childNodes[n];if(s(i))return r[n]=e!==i&&e;r[n]=e}else{if(s(t.childNodes[n]))return r[n]=e;if("children"===e.nodeName)return r[n]=!1}let o=d(e,t.childNodes[n]);return 3===i(o).map(e=>o[e]).filter(e=>!1===e).length?r[n]=!1:r[n]=o}),r.filter(e=>!1!==e).length||(r=!1),{nodeName:!1,attributes:l(n),childNodes:l(r)}},c=(e,t,n=!0)=>{i(e).forEach(r=>{if("object"==typeof e[r])c(e[r],t[r],!1);else if(r.startsWith("on")){let n=r.replace("on","");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),void 0===t.events&&(t.events={});try{t.removeEventListener(n,t.events[n],!1)}catch(e){}finally{t.addEventListener(n,e[r],!1)}t.events[n]=e[r]}else n?t.setAttribute(r,e[r]):t[r]=e[r]})},h=e=>{if(s(e))return document.createTextNode(e);let{nodeName:t,attributes:n,childNodes:r}=e,i="fragment"===t?document.createDocumentFragment():document.createElement(t);"fragment"!==t&&c(n,i),r.forEach(e=>{s(e)?i.appendChild(document.createTextNode(e)):i.appendChild(h(e))});let o=u(e).flat(1/0);return"fragment"!==t&&(i.vnode=Object.assign(e,{childNodes:o})),i},u=(e,t=!1)=>e.childNodes.map(e=>"fragment"===e.nodeName&&e.childNodes.length?e.childNodes.map(e=>"fragment"===e.nodeName?u(e)[0]:t?void 0:e):e),p=(e,t)=>{let n=(e,t,r)=>{if(void 0===t)return null==r?void 0:r.appendChild(h(e));if(s(e)){if("#text"===t.nodeName)return e!==t.textContent?t.textContent=e:null;try{return t.parentElement.replaceChild(h(e),t)}catch(n){return t.getRootNode().replaceChild(h(e),t.getRootNode().childNodes[0])}}let{nodeName:i,childNodes:o}=e,l=d(e,t.vnode);if("children"===i)return;if(i!==(""+t.nodeName).toLowerCase())return null!==t.parentElement?t.parentElement.replaceChild(h(e),t):t.getRootNode().replaceChild(h(e),t);c(l.attributes,t),o.forEach((e,r)=>{void 0!==t.childNodes[r]?void 0!==t.vnode.childNodes[r].nodeName&&"children"===t.vnode.childNodes[r].nodeName.toLowerCase()||n(e,t.childNodes[r]):t.appendChild(h(e))});let a=o.filter(({nodeName:e})=>"fragment"!==e);if(a.length>=t.childNodes.length)return;let u=()=>Array.apply(null,new Array(t.childNodes.length-a.length)).map((e,t)=>t+a.length).reverse().forEach(e=>{t.removeChild(t.childNodes[e])});try{"children"!==t.vnode.childNodes[0].nodeName.toLowerCase()&&u()}catch(e){u()}};e.childNodes.length||n(e,t.childNodes[0],t),u(e).flat(1/0).forEach((r,i)=>{n("fragment"===e.nodeName?r:Object.assign(e,{childNodes:[r]}),t.childNodes[i],t)})},f=({component:e,view:t,state:n,props:r,onCreated:i=(()=>()=>{})})=>{customElements.get(e)||customElements.define(e,class extends HTMLElement{constructor(){super(),this.state=Object.assign({},n),this.props={},this.lifecycle=()=>null,null==r||r.forEach(e=>this.props[e]=""),this.element=this.attachShadow({mode:"closed"}),p(t(m(this.state,this.props,t,this.element),this.props),this.element),requestAnimationFrame(()=>{this.element.querySelectorAll("link").length&&(this.style.visibility="hidden")});let e=[];this.element.querySelectorAll("link").forEach(t=>{e.push(0),t.addEventListener("load",()=>{e.pop(),e.length||requestAnimationFrame(()=>{this.style.visibility=""})})}),this.observer=new MutationObserver(e=>e.forEach(()=>{requestAnimationFrame(()=>{g(this.element,this.childNodes)})})),this.observer.observe(this,{childList:!0,subtree:!0,characterData:!0})}static get observedAttributes(){return void 0!==r?r:[]}attributeChangedCallback(e,n,r){this.props[e]=r,requestAnimationFrame(()=>{p(t(m(this.state,this.props,t,this.element),this.props),this.element),g(this.element,this.childNodes)})}connectedCallback(){this.lifecycle=i(m(this.state,this.props,t,this.element,1))}disconnectedCallback(){this.observer.disconnect(),this.lifecycle()}})},m=(e,t,n,r,i=0)=>{let o=Object.assign({},e),l=Object.assign({},t),s=(e,t=0)=>(requestAnimationFrame(()=>{p(n(m(e,l,n,r,1===t?2:t),l),r),g(r,r.getRootNode().host.childNodes)}),e),a=[];return{state:o,set:(e,t)=>(o[e]=t,requestAnimationFrame(()=>{s(o,i)}),a.forEach(({listener:t,callback:n})=>{(!0===t||t.includes(e))&&n(o)}),o),update:(e,t)=>(o[e]=Object.assign(o[e],t),requestAnimationFrame(()=>{s(o,i)}),a.forEach(({listener:t,callback:n})=>{(!0===t||t.includes(e)||2===i)&&n(o)}),o),on:(e,t)=>{a.push({listener:e,callback:t}),2===i&&(t(o),i=0)}}},g=(e,t)=>{e.querySelectorAll("children").forEach(e=>{let n=document.createDocumentFragment();t.forEach(e=>{n.appendChild(e.cloneNode(!0))}),null!==e.parentElement?e.parentElement.replaceChild(n,e):e.getRootNode().replaceChild(n,e)})};t.h=r,t.compareAttributes=a,t.diff=d,t.create=h,t.registerComponent=f,t.default={h:r,registerComponent:f}},"2YZa":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n("0de0"),i=n("xDBF"),o=n("Tf39"),l=n("m8hH");r.registerComponent({component:"app-title",view:i.Title,props:i.props}),r.registerComponent({component:"app-detail",view:o.Detail}),r.registerComponent({component:"app-link",view:l.Link,props:l.props})},Tf39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Detail=void 0;const r=n("0de0");t.Detail=()=>r.h("fragment",null,r.h("link",{rel:"stylesheet",href:"/init.css"}),r.h("link",{rel:"stylesheet",href:"/components/detail.css"}),r.h("p",{id:"detail"},"Glad to see you~ To get started, edit"," ",r.h("app-link",{href:"/"},"src/index.tsx"),", save and reload.")),t.default=t.Detail},m8hH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Link=t.props=void 0;const r=n("0de0");t.props=["href","standalone"],t.Link=(e,{href:t="/",standalone:n=!1})=>r.h("fragment",null,r.h("link",{rel:"stylesheet",href:"/components/link.css"}),n?r.h("fragment",null,r.h("link",{rel:"stylesheet",href:"/components/link.css"}),r.h("style",null,"\n                        :host {\n                            margin: 60px auto 0 auto;\n                        }\n\n                        #link { \n                            font-size: 21px;\n                        }\n                    ")):r.h("fragment",null),r.h("a",{id:"link",href:t},r.h("children",null))),t.default=t.Link},xDBF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Title=t.props=void 0;const r=n("0de0");t.props=["title"],t.Title=({set:e},{title:t="Forsteri"})=>r.h("fragment",null,r.h("link",{rel:"stylesheet",href:"/init.css"}),r.h("link",{rel:"stylesheet",href:"/components/title.css"}),r.h("h1",{id:"title"},t)),t.default=t.Title}});