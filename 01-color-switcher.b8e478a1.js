!function(){var t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")},e=null,n=function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))};t.startBtn.addEventListener("click",(function(){t.startBtn.setAttribute("disabled","disabled"),e=setInterval(n,1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.removeAttribute("disabled"),clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.b8e478a1.js.map
