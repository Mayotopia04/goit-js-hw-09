!function(){var t=null,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");e.addEventListener("click",(function(){e.disabled=!0,t=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.033c8e06.js.map
