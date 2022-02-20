(()=>{"use strict";var r={122:(r,n,e)=>{e.d(n,{Z:()=>u});var t=e(537),o=e.n(t),a=e(645),i=e.n(a),c=e(667),A=e.n(c),l=new URL(e(21),e.b),p=i()(o());p.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap);"]);var s=A()(l);p.push([r.id,":root {\r\n    --primary-color:rgb(25, 35, 128);\r\n    --primary-color-darker:rgb(5, 10, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ndiv p button{\r\n    width: 10%;\r\n    margin: 0 0 0 10%;\r\n    height:      25px;  \r\n    display: inline-block;\r\n}\r\n\r\n@keyframes fadein {\r\n    0% {margin:0 0 0 0; color: white;}\r\n    50% {margin: 1em 0 1em 0; color:white;}\r\n    100% { color:black;}    \r\n}\r\n\r\n@keyframes fadeout {\r\n    0% {color:black; margin: 1em 0 1em 0;}\r\n    50%{margin: 1em 0 1em 0;color:white;}\r\n    100%{margin: 0 0 0 0; color: white;}    \r\n}\r\n\r\ndiv.cpfdiv p{\r\n    animation: fadein 1s;\r\n}\r\n\r\ndiv.cpfdiv.cpfdel p{\r\n    animation: fadeout 1s;\r\n}\r\n\r\n@keyframes fadeinbutton{\r\n    0% {opacity: 0; height:0px; color: #fff;}\r\n    50% {opacity: 0; height: 0px;}\r\n    75% {color: #fff;}\r\n    100% {opacity: 1; height: 25px; color: black}\r\n}\r\n\r\n@keyframes fadeoutbutton{\r\n    0% {opacity: 1; height: 25px; color: black}\r\n    25% {color: #fff;}\r\n    50% {opacity: 0; height: 25px;}\r\n    100% {opacity: 0; height:0px; color: #fff;}\r\n}\r\n\r\ndiv.cpfdiv.cpfdel p button.delbutton{\r\n    animation: fadeoutbutton 1s;\r\n}\r\n\r\ndiv.cpfdiv p button.delbutton{\r\n    animation: fadeinbutton 1s;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    background-color: #06061A;\r\n    background-image: url("+s+");\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    box-shadow: rgba(49, 46, 240, 0.5) 5px 5px, rgba(49, 46, 240, 0.4) 10px 10px, rgba(49, 46, 240, 0.3) 15px 15px, rgba(49, 46, 240, 0.2) 20px 20px, rgba(49, 46, 240, 0.1) 25px 25px;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\nform button:active{\r\n    background: blue;\r\n}\r\n\r\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAGA;IACI,gCAAgC;IAChC,qCAAqC;AACzC;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,UAAU;IACV,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,IAAI,cAAc,EAAE,YAAY,CAAC;IACjC,KAAK,mBAAmB,EAAE,WAAW,CAAC;IACtC,OAAO,WAAW,CAAC;AACvB;;AAEA;IACI,IAAI,WAAW,EAAE,mBAAmB,CAAC;IACrC,IAAI,mBAAmB,CAAC,WAAW,CAAC;IACpC,KAAK,eAAe,EAAE,YAAY,CAAC;AACvC;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,IAAI,UAAU,EAAE,UAAU,EAAE,WAAW,CAAC;IACxC,KAAK,UAAU,EAAE,WAAW,CAAC;IAC7B,KAAK,WAAW,CAAC;IACjB,MAAM,UAAU,EAAE,YAAY,EAAE,YAAY;AAChD;;AAEA;IACI,IAAI,UAAU,EAAE,YAAY,EAAE,YAAY;IAC1C,KAAK,WAAW,CAAC;IACjB,KAAK,UAAU,EAAE,YAAY,CAAC;IAC9B,MAAM,UAAU,EAAE,UAAU,EAAE,WAAW,CAAC;AAC9C;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,yBAAyB;IACzB,yDAA26C;IAC36C,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,kLAAkL;IAClL,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,gBAAgB;AACpB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');\r\n\r\n\r\n:root {\r\n    --primary-color:rgb(25, 35, 128);\r\n    --primary-color-darker:rgb(5, 10, 56);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ndiv p button{\r\n    width: 10%;\r\n    margin: 0 0 0 10%;\r\n    height:      25px;  \r\n    display: inline-block;\r\n}\r\n\r\n@keyframes fadein {\r\n    0% {margin:0 0 0 0; color: white;}\r\n    50% {margin: 1em 0 1em 0; color:white;}\r\n    100% { color:black;}    \r\n}\r\n\r\n@keyframes fadeout {\r\n    0% {color:black; margin: 1em 0 1em 0;}\r\n    50%{margin: 1em 0 1em 0;color:white;}\r\n    100%{margin: 0 0 0 0; color: white;}    \r\n}\r\n\r\ndiv.cpfdiv p{\r\n    animation: fadein 1s;\r\n}\r\n\r\ndiv.cpfdiv.cpfdel p{\r\n    animation: fadeout 1s;\r\n}\r\n\r\n@keyframes fadeinbutton{\r\n    0% {opacity: 0; height:0px; color: #fff;}\r\n    50% {opacity: 0; height: 0px;}\r\n    75% {color: #fff;}\r\n    100% {opacity: 1; height: 25px; color: black}\r\n}\r\n\r\n@keyframes fadeoutbutton{\r\n    0% {opacity: 1; height: 25px; color: black}\r\n    25% {color: #fff;}\r\n    50% {opacity: 0; height: 25px;}\r\n    100% {opacity: 0; height:0px; color: #fff;}\r\n}\r\n\r\ndiv.cpfdiv.cpfdel p button.delbutton{\r\n    animation: fadeoutbutton 1s;\r\n}\r\n\r\ndiv.cpfdiv p button.delbutton{\r\n    animation: fadeinbutton 1s;\r\n}\r\n\r\np {\r\n    text-align: center;\r\n}\r\n\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    background-color: #06061A;\r\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='317' height='317' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%230017FF' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23070055'%3E%3Ccircle cx='769' cy='229' r='12'/%3E%3Ccircle cx='539' cy='269' r='12'/%3E%3Ccircle cx='603' cy='493' r='12'/%3E%3Ccircle cx='731' cy='737' r='12'/%3E%3Ccircle cx='520' cy='660' r='12'/%3E%3Ccircle cx='309' cy='538' r='12'/%3E%3Ccircle cx='295' cy='764' r='12'/%3E%3Ccircle cx='40' cy='599' r='12'/%3E%3Ccircle cx='102' cy='382' r='12'/%3E%3Ccircle cx='127' cy='80' r='12'/%3E%3Ccircle cx='370' cy='105' r='12'/%3E%3Ccircle cx='578' cy='42' r='12'/%3E%3Ccircle cx='237' cy='261' r='12'/%3E%3Ccircle cx='390' cy='382' r='12'/%3E%3C/g%3E%3C/svg%3E\");\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    box-shadow: rgba(49, 46, 240, 0.5) 5px 5px, rgba(49, 46, 240, 0.4) 10px 10px, rgba(49, 46, 240, 0.3) 15px 15px, rgba(49, 46, 240, 0.2) 20px 20px, rgba(49, 46, 240, 0.1) 25px 25px;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\nform button:active{\r\n    background: blue;\r\n}\r\n\r\n"],sourceRoot:""}]);const u=p},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(i[A]=!0)}for(var l=0;l<r.length;l++){var p=[].concat(r[l]);t&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:r=>{r.exports=function(r,n){return n||(n={}),r?(r=String(r.__esModule?r.default:r),/^['"].*['"]$/.test(r)&&(r=r.slice(1,-1)),n.hash&&(r+=n.hash),/["'() \t\n]|(%20)/.test(r)||n.needQuotes?'"'.concat(r.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):r):r}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */"),i=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},i=[],c=0;c<r.length;c++){var A=r[c],l=t.base?A[0]+t.base:A[0],p=a[l]||0,s="".concat(l," ").concat(p);a[l]=p+1;var u=e(s),f={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var d=o(f,t);t.byIndex=c,n.splice(c,0,{identifier:s,updater:d,references:1})}i.push(s)}return i}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var A=t(r,o),l=0;l<a.length;l++){var p=e(a[l]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=A}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},21:r=>{r.exports="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27317%27 height=%27317%27 viewBox=%270 0 800 800%27%3E%3Cg fill=%27none%27 stroke=%27%230017FF%27 stroke-width=%271%27%3E%3Cpath d=%27M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63%27/%3E%3Cpath d=%27M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764%27/%3E%3Cpath d=%27M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880%27/%3E%3Cpath d=%27M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382%27/%3E%3Cpath d=%27M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269%27/%3E%3C/g%3E%3Cg fill=%27%23070055%27%3E%3Ccircle cx=%27769%27 cy=%27229%27 r=%2712%27/%3E%3Ccircle cx=%27539%27 cy=%27269%27 r=%2712%27/%3E%3Ccircle cx=%27603%27 cy=%27493%27 r=%2712%27/%3E%3Ccircle cx=%27731%27 cy=%27737%27 r=%2712%27/%3E%3Ccircle cx=%27520%27 cy=%27660%27 r=%2712%27/%3E%3Ccircle cx=%27309%27 cy=%27538%27 r=%2712%27/%3E%3Ccircle cx=%27295%27 cy=%27764%27 r=%2712%27/%3E%3Ccircle cx=%2740%27 cy=%27599%27 r=%2712%27/%3E%3Ccircle cx=%27102%27 cy=%27382%27 r=%2712%27/%3E%3Ccircle cx=%27127%27 cy=%2780%27 r=%2712%27/%3E%3Ccircle cx=%27370%27 cy=%27105%27 r=%2712%27/%3E%3Ccircle cx=%27578%27 cy=%2742%27 r=%2712%27/%3E%3Ccircle cx=%27237%27 cy=%27261%27 r=%2712%27/%3E%3Ccircle cx=%27390%27 cy=%27382%27 r=%2712%27/%3E%3C/g%3E%3C/svg%3E"}},n={};function e(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={id:t,exports:{}};return r[t](a,a.exports,e),a.exports}e.m=r,e.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return e.d(n,{a:n}),n},e.d=(r,n)=>{for(var t in n)e.o(n,t)&&!e.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:n[t]})},e.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),e.b=document.baseURI||self.location.href,(()=>{var r=e(379),n=e.n(r),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),A=e.n(c),l=e(216),p=e.n(l),s=e(589),u=e.n(s),f=e(122),d={};function C(r,n){(null==n||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function m(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}d.styleTagTransform=u(),d.setAttributes=A(),d.insert=i().bind(null,"head"),d.domAPI=o(),d.insertStyleElement=p(),n()(f.Z,d),f.Z&&f.Z.locals&&f.Z.locals;var g=function(){function r(){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r)}var n,e;return n=r,(e=[{key:"valida",value:function(r){var n,e,t=(n=r.split("-"),e=2,function(r){if(Array.isArray(r))return r}(n)||function(r,n){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var t,o,a=[],i=!0,c=!1;try{for(e=e.call(r);!(i=(t=e.next()).done)&&(a.push(t.value),!n||a.length!==n);i=!0);}catch(r){c=!0,o=r}finally{try{i||null==e.return||e.return()}finally{if(c)throw o}}return a}}(n,e)||function(r,n){if(r){if("string"==typeof r)return C(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?C(r,n):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=t[0],a=t[1],i=(o=o.replaceAll(".","")).split(""),c=i.concat(a);if(c.every((function(r){return r===c[0]})))return!1;var A=(i=i.reverse()).map((function(r){return parseInt(r)})).reduce((function(r,n,e,t){return r+n*(e+2)}),0),l=10*A%11>9?0:10*A%11;return l===parseInt(a[0])&&(i.unshift(a[0]),(l=10*(A=i.map((function(r){return parseInt(r)})).reduce((function(r,n,e,t){return r+n*(e+2)}),0))%11>9?0:10*A%11)===parseInt(a[1]))}}])&&m(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),r}();function h(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}var b=function(){function r(){!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r)}var n,e;return n=r,(e=[{key:"gera",value:function(){var r=new Array(9).fill().map((function(){return Math.floor(10*Math.random())})),n=r.map((function(r){return parseInt(r)})).reduce((function(r,n,e,t){return r+n*(e+2)}),0),e=10*n%11>9?0:10*n%11;return r.unshift(e),e=10*(n=r.map((function(r){return parseInt(r)})).reduce((function(r,n,e,t){return r+n*(e+2)}),0))%11>9?0:10*n%11,r.unshift(e),(r=r.reverse().join("")).slice(0,3)+"."+r.slice(3,6)+"."+r.slice(6,9)+"-"+r.slice(9,11)}}])&&h(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),r}();function y(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}var v=function(){function r(){var n=this;!function(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),this.divCPF=document.querySelector(".cpfcontainer"),this.buttonGeraCPF=document.querySelector(".cpfgera"),this.geradorCPF=new b,document.addEventListener("click",(function(r){r.target.classList.contains("cpfgera")&&n.addCPF(n.geradorCPF.gera()),r.target.classList.contains("delbutton")&&n.delCPF(r.target)}))}var n,e;return n=r,(e=[{key:"delCPF",value:function(r){r.parentElement.parentElement.classList.add("cpfdel"),r.parentElement.addEventListener("animationend",(function(){r.parentElement.remove()}))}},{key:"addCPF",value:function(r){var n=document.createElement("div"),e=document.createElement("p");e.innerText=r,n.appendChild(e);var t=document.createElement("button");t.innerText="Deletar",t.classList.add("delbutton"),e.appendChild(t),n.classList.add("cpfdiv"),this.divCPF.appendChild(n)}}])&&y(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),r}();new g,new v})()})();
//# sourceMappingURL=bundle.js.map