function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var u=i("7Y9D8");e(u).Notify.init({width:"280px",position:"center-top",distance:"100px",clickToClose:!0});const r={submitBtn:document.querySelector("button"),delayInput:document.querySelector("input[name='delay']"),stepInput:document.querySelector("input[name='step']"),amountInput:document.querySelector("input[name='amount']")};function l(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function a({position:t,delay:n}){!function(t,n="2000"){e(u).Notify.success(t,{timeout:n})}(`✅ Fulfilled promise ${t} in ${n}ms`)}function d({position:t,delay:n}){!function(t,n="2000"){e(u).Notify.failure(t,{timeout:n})}(`❌ Rejected promise ${t} in ${n}ms`)}r.submitBtn.addEventListener("click",(e=>{e.preventDefault(),function(){let e=1*r.delayInput.value,t=1*r.stepInput.value;for(let n=1;n<=r.amountInput.value;n++)l(n,e).then(a).catch(d),e+=t}()}));
//# sourceMappingURL=03-promises.40d499cd.js.map