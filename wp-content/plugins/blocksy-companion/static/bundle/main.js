!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=window.ctEvents},function(e,t){e.exports=window.ctFrontend},function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o),a=r(1),c=function(e,t){var r=t.screen,o=void 0===r?"login":r;e.querySelector("ul")&&e.querySelector("ul .ct-".concat(o))&&(e.querySelector("ul .active").classList.remove("active"),e.querySelector("ul .ct-".concat(o)).classList.add("active")),e.querySelector('[class*="-form"].active').classList.remove("active"),e.querySelector(".ct-".concat(o,"-form")).classList.add("active"),e.querySelector(".ct-".concat(o,"-form form"))&&e.querySelector(".ct-".concat(o,"-form form")).reset(),e.querySelector(".ct-account-form").classList.remove("ct-error");var n=e.querySelector(".ct-".concat(o,"-form")).querySelector(".ct-message");n&&n.remove();var a=e.querySelector(".ct-".concat(o,"-form")).querySelector(".ct-errors");a&&a.remove()},i=function(e,t){var r=(new DOMParser).parseFromString(t,"text/html"),o=e.querySelector(".ct-errors");o&&o.remove(),e.closest(".ct-account-form").classList.remove("ct-error");var n=r.querySelector("#login_error");return n&&(e.insertAdjacentHTML("afterbegin",'<div class="ct-errors">'.concat(n.innerHTML,"</div>")),requestAnimationFrame((function(){e.closest(".ct-account-form").classList.add("ct-error")}))),{hasError:!!n,doc:r}},s=function(e,t){var r=(new DOMParser).parseFromString(t,"text/html"),o=e.querySelector(".ct-message");o&&o.remove();var n=e.querySelector(".ct-errors");n&&n.remove();var a=r.querySelector(".message");return e.closest(".ct-account-form").classList.remove("ct-error"),a&&e.insertAdjacentHTML("afterbegin",'<div class="ct-message">'.concat(a.innerHTML,"</div>")),{doc:r}},u=function(){Array.from(document.querySelectorAll(".ct-header-account[href]")).map((function(e){e.hasSearchEventListener||(e.hasSearchEventListener=!0,e.addEventListener("click",(function(t){try{document.querySelector(e.hash)}catch(t){return}t.preventDefault(),c(document.querySelector(e.hash),{screen:"login"}),n.a.trigger("ct:overlay:handle-click",{e:t,href:e.hash,options:{isModal:!0}})})),document.querySelector("#account-modal")&&function(e){if(e){e.addEventListener("click",(function(t){t.target.href&&t.target.href.indexOf("lostpassword")>-1&&(c(e,{screen:"forgot-password"}),t.preventDefault()),t.target.href&&t.target.href.indexOf("wp-login")>-1&&-1===t.target.href.indexOf("lostpassword")&&(c(e,{screen:"login"}),t.preventDefault())}),!0);var t=e.querySelector('[name="loginform"]'),r=e.querySelector('[name="registerform"]'),o=e.querySelector('[name="lostpasswordform"]');t&&t.addEventListener("submit",(function(e){e.preventDefault(),window.ct_customizer_localizations||fetch(t.action,{method:t.method,body:new FormData(t)}).then((function(e){return e.text()})).then((function(e){var r=i(t.closest(".ct-login-form"),e);r.doc;r.hasError||(location=t.querySelector('[name="redirect_to"]').value)}))})),r&&r.addEventListener("submit",(function(e){e.preventDefault(),window.ct_customizer_localizations||fetch(r.action,{method:r.method,body:new FormData(r)}).then((function(e){return e.text()})).then((function(e){var t=i(r.closest(".ct-register-form"),e);t.doc;t.hasError||s(r.closest(".ct-register-form"),e)}))})),o&&o.addEventListener("submit",(function(e){e.preventDefault(),window.ct_customizer_localizations||fetch(o.action,{method:o.method,body:new FormData(o)}).then((function(e){return e.text()})).then((function(e){var t=i(o.closest(".ct-forgot-password-form"),e);t.doc;t.hasError||s(o.closest(".ct-forgot-password-form"),e)}))})),["login","register","forgot-password"].map((function(t){Array.from(e.querySelectorAll(".ct-".concat(t))).map((function(r){r.addEventListener("click",(function(r){r.preventDefault(),c(e,{screen:t})}))}))}))}}(document.querySelector("#account-modal")))}))};function l(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}var y=!1,f=function(e,t,r){return Math.max(e,Math.min(t,r))},m=function(e,t,r){return t[0]+(t[1]-t[0])/(e[1]-e[0])*(r-e[0])},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yes";Array.from(e.querySelectorAll("[data-row][data-transparent-row]")).map((function(e){e.dataset.transparentRow=t}))},h=function(e){return parseFloat(getComputedStyle(e).getPropertyValue("--height"))},v=function(e){var t=getComputedStyle(e).getPropertyValue("--stickyShrink");return t?parseFloat(t)/100*h(e):h(e)};var g=!1,S=function(){if(document.querySelector("[data-sticky]")){var e=window.scrollY,t=function(){var t=document.querySelector('[data-device="'.concat(Object(a.getCurrentScreen)(),'"] [data-sticky]'));if(t){var r=function(e){if(-1===e.dataset.sticky.indexOf("shrink")&&-1===e.dataset.sticky.indexOf("auto-hide"))return e.parentNode.getBoundingClientRect().height+200;var t=e.closest("header").getBoundingClientRect().top+scrollY,r=e.parentNode;return 1===r.parentNode.children.length||r.parentNode.children[0].classList.contains("ct-sticky-container")?t:Array.from(r.parentNode.children).reduce((function(e,t,r){return e.indexOf(0)>-1||!t.dataset.row?[].concat(l(e),[0]):[].concat(l(e),[t.classList.contains("ct-sticky-container")?0:t.getBoundingClientRect().height])}),[]).reduce((function(e,t){return e+t}),t)}(t),o=r>0&&Math.abs(window.scrollY-r)<3||window.scrollY>r,n=t.dataset.sticky.split(":").filter((function(e){return"yes"!==e&&"no"!==e})),c=Array.from(t.querySelectorAll("[data-row]")).reduce((function(e,t){return e+parseFloat(getComputedStyle(t).getPropertyValue("--height"))}),0);if(n.indexOf("auto-hide")>-1){if(window.scrollY<r&&(e=window.scrollY),o&&window.scrollY-e==0&&document.body.style.setProperty("--headerStickyHeightAnimated","0px"),o&&window.scrollY-e<-5)-1===t.dataset.sticky.indexOf("yes")&&(t.dataset.sticky=["yes-start"].concat(l(n)).join(":"),requestAnimationFrame((function(){t.dataset.sticky=t.dataset.sticky.replace("yes-start","yes-end"),setTimeout((function(){t.dataset.sticky=t.dataset.sticky.replace("yes-end","yes")}),200)}))),p(t,"no"),document.body.removeAttribute("style"),t.parentNode.style.setProperty("--minHeight","".concat(c,"px"));else{if(!o)return t.dataset.sticky=n.filter((function(e){return"yes-end"!==e})).join(":"),t.parentNode.removeAttribute("style"),Array.from(t.querySelectorAll("[data-row]")).map((function(e){return e.removeAttribute("style")})),p(t,"yes"),document.body.style.setProperty("--headerStickyHeightAnimated","0px"),void(e=window.scrollY);-1===t.dataset.sticky.indexOf("yes-hide")&&t.dataset.sticky.indexOf("yes:")>-1&&window.scrollY-e>5&&(t.dataset.sticky=["yes-hide-start"].concat(l(n)).join(":"),document.body.style.setProperty("--headerStickyHeightAnimated","0px"),requestAnimationFrame((function(){t.dataset.sticky=t.dataset.sticky.replace("yes-hide-start","yes-hide-end"),setTimeout((function(){t.dataset.sticky=n.join(":"),t.parentNode.removeAttribute("style"),Array.from(t.querySelectorAll("[data-row]")).map((function(e){return e.removeAttribute("style")})),p(t,"yes")}),200)})))}e=window.scrollY}if((n.indexOf("slide")>-1||n.indexOf("fade")>-1)&&(o?(-1===t.dataset.sticky.indexOf("yes")&&(t.dataset.sticky=["yes-start"].concat(l(n)).join(":"),requestAnimationFrame((function(){t.dataset.sticky=t.dataset.sticky.replace("yes-start","yes-end"),setTimeout((function(){t.dataset.sticky=t.dataset.sticky.replace("yes-end","yes")}),200)}))),p(t,"no"),t.parentNode.style.setProperty("--minHeight","".concat(c,"px"))):-1===t.dataset.sticky.indexOf("yes-hide")&&t.dataset.sticky.indexOf("yes:")>-1&&(Math.abs(window.scrollY-r)>10?(t.dataset.sticky=n.join(":"),setTimeout((function(){t.parentNode.removeAttribute("style"),Array.from(t.querySelectorAll("[data-row]")).map((function(e){return e.removeAttribute("style")}))}),300),p(t,"yes")):(t.dataset.sticky=["yes-hide-start"].concat(l(n)).join(":"),requestAnimationFrame((function(){t.dataset.sticky=t.dataset.sticky.replace("yes-hide-start","yes-hide-end"),setTimeout((function(){t.dataset.sticky=n.join(":"),setTimeout((function(){t.parentNode.removeAttribute("style"),Array.from(t.querySelectorAll("[data-row]")).map((function(e){return e.removeAttribute("style")}))}),300),p(t,"yes")}),200)}))))),n.indexOf("shrink")>-1){if(o){p(t,"no"),t.parentNode.style.setProperty("--minHeight","".concat(c,"px"));var i=Array.from(t.querySelectorAll("[data-row]")).reduce((function(e,t,r){return e+v(t)}),0);l(t.querySelectorAll('[data-row="middle"]')).map((function(e){if(e.querySelector('[data-id="logo"] .site-logo-container')){var t=e.querySelector('[data-id="logo"] .site-logo-container'),o=parseFloat(getComputedStyle(t).getPropertyValue("--maxHeight")||50),n=parseFloat(getComputedStyle(t).getPropertyValue("--logoStickyShrink")||1),a=o*n;if(1===n)return;var c=h(e),i=v(e);t.style.setProperty("--logo-shrink-height",m([r,r+Math.abs(c===i?o-a:c-i)],[1,n],f(r,r+Math.abs(c===i?o-a:c-i),scrollY)))}})),i!==c&&t.querySelector('[data-row="middle"]')&&[t.querySelector('[data-row="middle"]')].map((function(e){var t=h(e),o=v(e);e.style.setProperty("--shrinkHeight","".concat(m([r,r+Math.abs(t-o)],[t,o],f(r,r+Math.abs(t-o),scrollY)),"px"))}))}else t.parentNode.removeAttribute("style"),Array.from(t.querySelectorAll("[data-row]")).map((function(e){return e.removeAttribute("style")})),Array.from(t.querySelectorAll('[data-row="middle"] .site-logo-container')).map((function(e){return e.removeAttribute("style")})),p(t,"yes");var s=t.dataset.sticky.split(":").filter((function(e){return"yes"!==e&&"no"!==e}));t.dataset.sticky=(o?["yes"].concat(l(s)):s).join(":")}}};t(),g||(g=!0,window.addEventListener("scroll",(function(){y||(y=!0,requestAnimationFrame((function(){t(),y=!1})))})))}};Object(a.onDocumentLoaded)((function(){u(),S()})),n.a.on("blocksy:frontend:init",(function(){u(),S()}))}]);