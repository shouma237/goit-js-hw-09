!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},r=t.parcelRequired7c6;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in o){var r=o[t];delete o[t];var n={id:t,exports:{}};return e[t]=n,r.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},t.parcelRequired7c6=r);var n=r("h6c0i");n.Notify.init({position:"center-top",cssAnimationStyle:"zoom",cssAnimationDuration:250,timeout:1500});var a,l=document.querySelector("button[data-stop]"),i=document.querySelector("button[data-start]"),d=document.querySelectorAll("button");l.disabled=!0,i.style.backgroundColor="rgba(0,255,0,1)",l.style.backgroundColor="rgba(255,0,0,0.5)",d.forEach((function(t){t.style.color="#fcf",t.style.fontSize="20px",t.style.border="1px solid #fff",t.style.borderRadius="80%/50px",t.style.padding="5px 15px",t.style.boxShadow="0 0 1px #000",t.style.textShadow="0 0 3px #000",t.style.transition="text-decoration-color ease 250ms,background-color ease 250ms"}));var c=function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))},s=function(t){d.forEach((function(t){t.style.textDecoration="none",t.style.textDecorationColor="transparent"})),t.style.textDecoration="line-through #888"};s(l),i.addEventListener("click",(function(t){i.disabled=!0,l.disabled=!1,s(t.currentTarget),i.style.backgroundColor="rgba(0,255,0,0.3)",l.style.backgroundColor="rgba(255,0,0,1)",a=setInterval(c,1e3),c(),document.body.style.transition="background-color ease-in-out 500ms",n.Notify.success("PLAY")})),l.addEventListener("click",(function(t){l.disabled=!0,i.disabled=!1,s(t.currentTarget),i.style.backgroundColor="rgba(0,255,0,1)",l.style.backgroundColor="rgba(255,0,0,0.5)",clearInterval(a),n.Notify.failure("STOP")}))}();
//# sourceMappingURL=01-color-switcher.f917628d.js.map
