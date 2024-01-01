(globalThis.webpackChunkweb_stories_wp=globalThis.webpackChunkweb_stories_wp||[]).push([[6946],{"./node_modules/@ap.cx/hues/dist/hues.umd.js":function(__unused_webpack_module,exports){!function(exports){"use strict";function str2rgba(str){var color,colorStr=str.toLowerCase();if("rgb"===colorStr.substring(0,3)){var matches=/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)([^)]*)\)$/.exec(colorStr);color={r:matches[1]/255,g:matches[2]/255,b:matches[3]/255,a:1},matches[4]&&(color.a=parseFloat(/^,\s*(.*)$/.exec(matches[4])[1]))}else"#"===colorStr.charAt(0)&&(colorStr=colorStr.substr(1)),3===colorStr.length&&(colorStr=colorStr.replace(/^(.)(.)(.)$/,"$1$1$2$2$3$3")),4===colorStr.length&&(colorStr=colorStr.replace(/^(.)(.)(.)(.)$/,"$1$1$2$2$3$3$4$4")),color={r:parseInt(colorStr.substr(0,2),16)/255,g:parseInt(colorStr.substr(2,2),16)/255,b:parseInt(colorStr.substr(4,2),16)/255,a:1},8===colorStr.length&&(color.a=parseInt(colorStr.substr(6,2),16)/255);return color}function rgba2hsla(_ref){var h,s,l,r=_ref.r,g=_ref.g,b=_ref.b,a=_ref.a,min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min;return max===min?h=0:r===max?h=(g-b)/delta:g===max?h=2+(b-r)/delta:b===max&&(h=4+(r-g)/delta),(h=Math.min(60*h,360))<0&&(h+=360),l=(min+max)/2,s=max===min?0:l<=.5?delta/(max+min):delta/(2-max-min),{h,s:s*=100,l:l*=100,a}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function rgb2hsl(rgb){var _rgba2hsla=rgba2hsla(_objectSpread2(_objectSpread2({},rgb),{},{a:1}));return{h:_rgba2hsla.h,s:_rgba2hsla.s,l:_rgba2hsla.l}}function hsla2rgba(_ref){var r,g,b,m,c,x,h=_ref.h,s=_ref.s,l=_ref.l,a=_ref.a;return isFinite(h)||(h=0),isFinite(s)||(s=0),isFinite(l)||(l=0),(h/=60)<0&&(h=6- -h%6),h%=6,s=Math.max(0,Math.min(1,s/100)),l=Math.max(0,Math.min(1,l/100)),x=(c=(1-Math.abs(2*l-1))*s)*(1-Math.abs(h%2-1)),h<1?(r=c,g=x,b=0):h<2?(r=x,g=c,b=0):h<3?(r=0,g=c,b=x):h<4?(r=0,g=x,b=c):h<5?(r=x,g=0,b=c):(r=c,g=0,b=x),{r:r+=m=l-c/2,g:g+=m,b:b+=m,a}}function hsl2rgb(hsl){var _hsla2rgba=hsla2rgba(_objectSpread2(_objectSpread2({},hsl),{},{a:1}));return{r:_hsla2rgba.r,g:_hsla2rgba.g,b:_hsla2rgba.b}}function rgba2hex(_ref){var r=_ref.r,g=_ref.g,b=_ref.b,a=_ref.a;return"#"+(255*r|256).toString(16).slice(1)+(255*g|256).toString(16).slice(1)+(255*b|256).toString(16).slice(1)+(255*a|256).toString(16).slice(1)}function rgb2hex(rgb){return rgba2hex(_objectSpread2(_objectSpread2({},rgb),{},{a:1})).slice(0,7)}function contrast(l1,l2){return(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05)}function relativeLuminance(_ref){var r=_ref.r,g=_ref.g,b=_ref.b,a=_ref.a,_map2=_slicedToArray([r,g,b].map((function(c){return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)})),3);return(.2126*_map2[0]+.7152*_map2[1]+.0722*_map2[2])*a}var ratios={"min-ratio-3":{description:"(WCAG AA, large text)",minRatio:3},"min-ratio-4.5":{description:"(WCAG AA, normal text / WCAG AAA, large text)",minRatio:4.5},"min-ratio-7":{description:"(WCAG AAA, normal text)",minRatio:7},"AA-large":{description:"(WCAG AA, large text)",minRatio:3},AA:{description:"(WCAG AA, normal text)",minRatio:4.5},AAA:{description:"(WCAG AAA, normal text)",minRatio:7}};function aa(ratio){var verbose=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ratio>=3&&(arguments.length>1&&void 0!==arguments[1]?arguments[1]:16)>=18?(verbose&&console.log(ratios["min-ratio-3"]),!0):ratio>=4.5&&(verbose&&console.log(ratios["min-ratio-4.5"]),!0)}function aaa(ratio){var verbose=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ratio>=4.5&&(arguments.length>1&&void 0!==arguments[1]?arguments[1]:16)>=18?(verbose&&console.log(ratios["min-ratio-4.5"]),!0):ratio>=7&&(verbose&&console.log(ratios["min-ratio-7"]),!0)}function hslaVector3(_ref,v3){var h=_ref.h,s=_ref.s,l=_ref.l,a=_ref.a,hv=v3[0],sv=v3[1],lv=v3[2],h1=(h+hv)%360;return h1<0&&(h1+=360),{h:h1,s:Math.min(Math.max(s+sv,0),100),l:Math.min(Math.max(l+lv,0),100),a}}var THRESHOLD=.1;function getAccesibleHexColor(rgba,background,ratio){var r,result=rgba;do{r=contrast(relativeLuminance(str2rgba(rgba2hex(result=hsla2rgba(hslaVector3(rgba2hsla(result),[0,0,THRESHOLD]))))),relativeLuminance(background))}while(Math.round(100*r)/100<=ratio);return result}exports.aa=aa,exports.aaa=aaa,exports.contrast=contrast,exports.getAccesibleHexColor=getAccesibleHexColor,exports.hsl2rgb=hsl2rgb,exports.hsla2rgba=hsla2rgba,exports.hslaVector3=hslaVector3,exports.ratios=ratios,exports.relativeLuminance=relativeLuminance,exports.rgb2hex=rgb2hex,exports.rgb2hsl=rgb2hsl,exports.rgba2hex=rgba2hex,exports.rgba2hsla=rgba2hsla,exports.str2rgba=str2rgba,Object.defineProperty(exports,"__esModule",{value:!0})}(exports)},"./packages/design-system/src/icons/arrow_outline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgArrowOutline=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.5 8A1.5 1.5 0 0 0 8 9.5v13A1.5 1.5 0 0 0 9.5 24h13a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 22.5 8zM9 9.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5zm3.12 6.323a.5.5 0 0 1 .055-.705l3.499-3a.5.5 0 0 1 .651 0l3.5 3a.5.5 0 1 1-.651.76l-2.675-2.294V19.5a.5.5 0 1 1-1 0v-5.915l-2.674 2.292a.5.5 0 0 1-.704-.054",clipRule:"evenodd"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgArrowOutline)},"./packages/design-system/src/icons/checkmark.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgCheckmark=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M23.847 10.14a.5.5 0 0 1 .013.707l-10.625 11a.5.5 0 0 1-.72 0L8.14 17.318a.5.5 0 0 1 .72-.695l4.015 4.157L23.14 10.153a.5.5 0 0 1 .707-.013",clipRule:"evenodd"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCheckmark)},"./packages/design-system/src/icons/cross.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgCross=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.854 9.146a.5.5 0 1 0-.708.708L15.293 16l-6.147 6.146a.5.5 0 0 0 .708.708L16 16.707l6.146 6.147a.5.5 0 0 0 .708-.708L16.707 16l6.147-6.146a.5.5 0 0 0-.708-.708L16 15.293z",clipRule:"evenodd"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCross)},"./packages/design-system/src/icons/exclamation_outline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgExclamationOutline=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16 9a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0-1a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-.5-2a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0z",clipRule:"evenodd"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgExclamationOutline)},"./packages/design-system/src/icons/link.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgLink=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M12.364 15.343a.5.5 0 0 0-.707-.707zm3.535-.707a.5.5 0 0 0-.707.707zm-.353 4.596-3.536 3.536.707.707 3.536-3.536zm-7.071 0 1.768-1.767-.707-.708-1.768 1.768zm1.768-1.767 2.121-2.122-.707-.707-2.121 2.121zm6.01-2.475-.354-.354-.707.707.354.354zm-4.243 7.778a2.5 2.5 0 0 1-3.535 0l-.707.707a3.5 3.5 0 0 0 4.95 0zm4.243-2.829a3.5 3.5 0 0 0 0-4.95l-.707.708a2.5 2.5 0 0 1 0 3.535zm-7.778 2.829a2.5 2.5 0 0 1 0-3.536l-.707-.707a3.5 3.5 0 0 0 0 4.95zM18.02 16.757a.5.5 0 1 0 .708.707zm-3.535.707a.5.5 0 1 0 .707-.707zm.354-4.596 3.535-3.535-.707-.707-3.535 3.535zm7.07 0-1.767 1.768.707.707 1.768-1.767zm-1.767 1.768-2.121 2.121.707.707 2.121-2.12zm-6.01 2.475.353.354.707-.708-.353-.353zm4.242-7.778a2.5 2.5 0 0 1 3.536 0l.707-.707a3.5 3.5 0 0 0-4.95 0zm-4.242 2.828a3.5 3.5 0 0 0 0 4.95l.707-.707a2.5 2.5 0 0 1 0-3.536zm7.778-2.828a2.5 2.5 0 0 1 0 3.535l.707.707a3.5 3.5 0 0 0 0-4.95z"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgLink)},"./packages/design-system/src/icons/rotate.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,_path2,_path3,_path4,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgRotate=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M22.02 21.785a.5.5 0 0 0-.687-.727zm-5.68 1.244c-3.262 0-6.01-2.124-6.891-5.023l-.957.29c1.01 3.321 4.146 5.733 7.849 5.733v-1Zm4.993-1.971a7.248 7.248 0 0 1-4.992 1.971v1a8.249 8.249 0 0 0 5.679-2.244z"})),_path2||(_path2=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,d:"M8.5 24v-5.647h5.647"})),_path3||(_path3=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",d:"M10.51 10.215a.5.5 0 0 0 .686.728zm5.679-1.244c3.262 0 6.01 2.124 6.891 5.023l.957-.29c-1.01-3.321-4.145-5.733-7.848-5.733zm-4.993 1.972A7.248 7.248 0 0 1 16.19 8.97v-1a8.249 8.249 0 0 0-5.68 2.244l.687.728Z"})),_path4||(_path4=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,d:"M24.03 8v5.647h-5.648"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgRotate)},"./packages/design-system/src/icons/trash.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgTrash=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M14 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V11h-4zM13 11H8.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H19V9.5A1.5 1.5 0 0 0 17.5 8h-3A1.5 1.5 0 0 0 13 9.5zm-2.5 3a.5.5 0 0 1 .5.5v7a1.5 1.5 0 0 0 1.5 1.5h7a1.5 1.5 0 0 0 1.5-1.5v-7a.5.5 0 0 1 1 0v7a2.5 2.5 0 0 1-2.5 2.5h-7a2.5 2.5 0 0 1-2.5-2.5v-7a.5.5 0 0 1 .5-.5m3.5.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 .5-.5m4.5.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0z",clipRule:"evenodd"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgTrash)},"./packages/i18n/src/translateWithMarkup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>translateWithMarkup});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js"),__webpack_require__("./node_modules/core-js/modules/esnext.iterator.constructor.js"),__webpack_require__("./node_modules/core-js/modules/esnext.iterator.filter.js");var src=__webpack_require__("./packages/react/src/index.ts");__webpack_require__("./node_modules/core-js/modules/es.array.push.js");function transform(node){let mapping=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const result=[];do{result.push(transformNode(node,mapping)),node=node.nextSibling}while(null!==node);return result}function transformNode(node){let mapping=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{childNodes,nodeType,textContent}=node;if(Node.TEXT_NODE===nodeType)return textContent;const children=node.hasChildNodes()?Array.from(childNodes).map((child=>transform(child,mapping))):null,{localName}=node;return localName in mapping?(0,src.Tm)(mapping[localName],{},children):(0,src.az)(localName,null,children)}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const VOID_ELEMENTS=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"];function TranslateWithMarkup(_ref){let{mapping={},children}=_ref;mapping=Object.fromEntries(Object.entries(mapping).map((_ref2=>{let[k,v]=_ref2;return[k.toLowerCase(),v]})));const foundVoidElements=Object.keys(mapping).filter((tag=>VOID_ELEMENTS.includes(tag))).join(" ");if(foundVoidElements.length>0)throw new Error(`Found disallowed void elements in TranslateWithMarkup map: ${foundVoidElements}`);const node=(new DOMParser).parseFromString(children,"text/html").body.firstChild;return node?(0,jsx_runtime.jsx)(src.HY,{children:transform(node,mapping).map(((element,index)=>(0,jsx_runtime.jsx)(src.HY,{children:element},index)))}):null}TranslateWithMarkup.displayName="TranslateWithMarkup";const translateWithMarkup=TranslateWithMarkup},"./packages/story-editor/src/app/highlights/styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var polished__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/polished/dist/polished.esm.js"),styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/theme/theme.ts"),_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/theme/helpers/outline.ts");const flash=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.F4)(["50%{background-color:",";}"],(0,polished__WEBPACK_IMPORTED_MODULE_1__.m4)(_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_2__.r.colors.standard.white,.3)),FLASH=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["background-color:",";animation:"," 0.3s ease-in-out 2;"],(0,polished__WEBPACK_IMPORTED_MODULE_1__.m4)(_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_2__.r.colors.standard.white,0),flash),__WEBPACK_DEFAULT_EXPORT__={OUTLINE:(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["",";"],_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_3__.R),FLASH}},"./packages/story-editor/src/components/panels/shared/media/loopPanelContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var uuid__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/story-editor/node_modules/uuid/dist/esm-browser/v4.js"),_googleforcreators_i18n__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/i18n/src/i18n.ts"),_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/checkbox/checkbox.tsx"),_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/components/typography/text/index.ts"),_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/design-system/src/theme/types.ts"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledCheckbox=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_4__.Z).withConfig({displayName:"loopPanelContent__StyledCheckbox",componentId:"sc-4opv01-0"})(["",""],(_ref=>{let{theme}=_ref;return`\n    input[type='checkbox']:focus-visible ~ div, input[type='checkbox']:focus ~ div {\n      box-shadow: 0px 0px 0 2px ${theme.colors.bg.secondary}, 0px 0px 0 4px ${theme.colors.border.focus} !important;\n    }\n  `})),Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div.withConfig({displayName:"loopPanelContent__Wrapper",componentId:"sc-4opv01-1"})(["display:flex;gap:12px;align-items:center;"]);function LoopPanelContent(_ref2){let{loop,className="",onChange,...props}=_ref2;const checkboxId=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.UX)((()=>`cb-${(0,uuid__WEBPACK_IMPORTED_MODULE_5__.Z)()}`));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Wrapper,{className,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledCheckbox,{id:checkboxId,checked:loop,onChange,...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_6__.x.Label,{size:_googleforcreators_design_system__WEBPACK_IMPORTED_MODULE_7__.TextSize.Small,htmlFor:checkboxId,children:(0,_googleforcreators_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("Loop","web-stories")})]})}LoopPanelContent.displayName="LoopPanelContent";const __WEBPACK_DEFAULT_EXPORT__=LoopPanelContent},"./packages/story-editor/src/components/publishModal/stories/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_default:()=>_default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/index.ts"),_app_story_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/story-editor/src/app/story/context.ts"),_app_config__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/story-editor/src/app/config/index.ts"),_checklist__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/story-editor/src/components/checklist/index.js"),_sidebar_context__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/story-editor/src/components/sidebar/context.js"),_panels_document__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/story-editor/src/components/panels/document/index.js"),_publishModal__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/story-editor/src/components/publishModal/publishModal.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MockDocumentPane=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_panels_document__WEBPACK_IMPORTED_MODULE_6__.JL,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_panels_document__WEBPACK_IMPORTED_MODULE_6__.QM,{})]}),__WEBPACK_DEFAULT_EXPORT__={title:"Stories Editor/Components/Dialog/Publish Modal",args:{canPublish:!0,hasChecklist:!0,hasFutureDate:!1,hasPublisherLogo:!0,hasFeaturedMedia:!0,hasUploadMediaAction:!0,hasPriorityIssues:!0,publishButtonDisabled:!0,publisher:"Gotham Bugle",isOpen:!0,isSaving:!1},argTypes:{onPublish:{action:"onPublish clicked"},onClose:{action:"onClose clicked"},handleReviewChecklist:{action:"handleReviewChecklist clicked"},checkpoint:{options:Object.values(_checklist__WEBPACK_IMPORTED_MODULE_4__.Q3),control:{type:"select"},name:"Checklist's given checkpoint"},storyStatus:{options:["publish","future","private","draft"],control:{type:"select"},name:"Status of Story"}}},_default={render:function Render(args){const{canPublish,checkpoint,isSaving,hasChecklist,hasUploadMediaAction,hasFeaturedMedia,hasPublisherLogo,hasPriorityIssues,handleReviewChecklist,publisher,storyStatus}=args,[inputValues,setInputValues]=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.eJ)({excerpt:"",title:"",link:"http://sample.com/post_type=web-story&p=274"}),handleUpdateStory=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.I4)((_ref=>{let{properties}=_ref;setInputValues((prevVal=>({...prevVal,...properties})))}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_app_config__WEBPACK_IMPORTED_MODULE_3__.E_.Provider,{value:{metadata:{publisher},capabilities:{hasUploadMediaAction}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_app_story_context__WEBPACK_IMPORTED_MODULE_2__.Z.Provider,{value:{actions:{updateStory:handleUpdateStory},state:{capabilities:{publish:canPublish},meta:{isSaving},story:{...inputValues,permalinkConfig:{prefix:"http://sample.com/",suffix:""},featuredMedia:{url:hasFeaturedMedia?"http://placekitten.com/230/342":"",height:333,width:250},publisherLogo:{url:hasPublisherLogo?"http://placekitten.com/158/96":"",height:96,width:158},status:storyStatus}}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sidebar_context__WEBPACK_IMPORTED_MODULE_5__.Z.Provider,{value:{actions:{loadUsers:()=>{}},data:{modalSidebarTab:{title:"document panel",DocumentPane:MockDocumentPane}},state:{users:{},sidebarContentHeight:600}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_checklist__WEBPACK_IMPORTED_MODULE_4__.rJ,{hasChecklist,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_checklist__WEBPACK_IMPORTED_MODULE_4__.aK.Provider,{value:{actions:{handleReviewChecklist},state:{hasHighPriorityIssues:hasPriorityIssues,checkpoint}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_publishModal__WEBPACK_IMPORTED_MODULE_7__.Z,{...args})})})})})})}}},"./node_modules/core-js/internals/array-group.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var bind=__webpack_require__("./node_modules/core-js/internals/function-bind-context.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),IndexedObject=__webpack_require__("./node_modules/core-js/internals/indexed-object.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),toPropertyKey=__webpack_require__("./node_modules/core-js/internals/to-property-key.js"),lengthOfArrayLike=__webpack_require__("./node_modules/core-js/internals/length-of-array-like.js"),objectCreate=__webpack_require__("./node_modules/core-js/internals/object-create.js"),arrayFromConstructorAndList=__webpack_require__("./node_modules/core-js/internals/array-from-constructor-and-list.js"),$Array=Array,push=uncurryThis([].push);module.exports=function($this,callbackfn,that,specificConstructor){for(var Constructor,key,value,O=toObject($this),self=IndexedObject(O),boundFunction=bind(callbackfn,that),target=objectCreate(null),length=lengthOfArrayLike(self),index=0;length>index;index++)value=self[index],(key=toPropertyKey(boundFunction(value,index,O)))in target?push(target[key],value):target[key]=[value];if(specificConstructor&&(Constructor=specificConstructor(O))!==$Array)for(key in target)target[key]=arrayFromConstructorAndList(Constructor,target[key]);return target}},"./node_modules/core-js/modules/esnext.array.group.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),$group=__webpack_require__("./node_modules/core-js/internals/array-group.js"),addToUnscopables=__webpack_require__("./node_modules/core-js/internals/add-to-unscopables.js");$({target:"Array",proto:!0},{group:function group(callbackfn){return $group(this,callbackfn,arguments.length>1?arguments[1]:void 0)}}),addToUnscopables("group")},"./packages/story-editor/node_modules/react-blurhash/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>u});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),blurhash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/blurhash/dist/esm/index.js"),P=Object.defineProperty,R=Object.defineProperties,C=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,b=(e,s,t)=>s in e?P(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,h=(e,s)=>{for(var t in s||(s={}))v.call(s,t)&&b(e,t,s[t]);if(m)for(var t of m(s))x.call(s,t)&&b(e,t,s[t]);return e},p=(e,s)=>R(e,C(s)),g=(e,s)=>{var t={};for(var r in e)v.call(e,r)&&s.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&m)for(var r of m(e))s.indexOf(r)<0&&x.call(e,r)&&(t[r]=e[r]);return t},o=class extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(){super(...arguments),this.canvas=null,this.handleRef=t=>{this.canvas=t,this.draw()},this.draw=()=>{let{hash:t,height:r,punch:n,width:a}=this.props;if(this.canvas){let i=(0,blurhash__WEBPACK_IMPORTED_MODULE_1__.Jx)(t,a,r,n),c=this.canvas.getContext("2d"),d=c.createImageData(a,r);d.data.set(i),c.putImageData(d,0,0)}}}componentDidUpdate(){this.draw()}render(){let i=this.props,{hash:t,height:r,width:n}=i,a=g(i,["hash","height","width"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas",p(h({},a),{height:r,width:n,ref:this.handleRef}))}};o.defaultProps={height:128,width:128};var D={position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"},u=class extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{componentDidUpdate(){if(this.props.resolutionX<=0)throw new Error("resolutionX must be larger than zero");if(this.props.resolutionY<=0)throw new Error("resolutionY must be larger than zero")}render(){let w=this.props,{hash:s,height:t,width:r,punch:n,resolutionX:a,resolutionY:i,style:c}=w,d=g(w,["hash","height","width","punch","resolutionX","resolutionY","style"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",p(h({},d),{style:p(h({display:"inline-block",height:t,width:r},c),{position:"relative"})}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(o,{hash:s,height:i,width:a,punch:n,style:D}))}};u.defaultProps={height:128,width:128,resolutionX:32,resolutionY:32}}}]);