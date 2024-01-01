(globalThis.webpackChunkweb_stories_wp=globalThis.webpackChunkweb_stories_wp||[]).push([[2886],{"./node_modules/@ap.cx/hues/dist/hues.umd.js":function(__unused_webpack_module,exports){!function(exports){"use strict";function str2rgba(str){var color,colorStr=str.toLowerCase();if("rgb"===colorStr.substring(0,3)){var matches=/^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)([^)]*)\)$/.exec(colorStr);color={r:matches[1]/255,g:matches[2]/255,b:matches[3]/255,a:1},matches[4]&&(color.a=parseFloat(/^,\s*(.*)$/.exec(matches[4])[1]))}else"#"===colorStr.charAt(0)&&(colorStr=colorStr.substr(1)),3===colorStr.length&&(colorStr=colorStr.replace(/^(.)(.)(.)$/,"$1$1$2$2$3$3")),4===colorStr.length&&(colorStr=colorStr.replace(/^(.)(.)(.)(.)$/,"$1$1$2$2$3$3$4$4")),color={r:parseInt(colorStr.substr(0,2),16)/255,g:parseInt(colorStr.substr(2,2),16)/255,b:parseInt(colorStr.substr(4,2),16)/255,a:1},8===colorStr.length&&(color.a=parseInt(colorStr.substr(6,2),16)/255);return color}function rgba2hsla(_ref){var h,s,l,r=_ref.r,g=_ref.g,b=_ref.b,a=_ref.a,min=Math.min(r,g,b),max=Math.max(r,g,b),delta=max-min;return max===min?h=0:r===max?h=(g-b)/delta:g===max?h=2+(b-r)/delta:b===max&&(h=4+(r-g)/delta),(h=Math.min(60*h,360))<0&&(h+=360),l=(min+max)/2,s=max===min?0:l<=.5?delta/(max+min):delta/(2-max-min),{h,s:s*=100,l:l*=100,a}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _iterableToArrayLimit(arr,i){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function rgb2hsl(rgb){var _rgba2hsla=rgba2hsla(_objectSpread2(_objectSpread2({},rgb),{},{a:1}));return{h:_rgba2hsla.h,s:_rgba2hsla.s,l:_rgba2hsla.l}}function hsla2rgba(_ref){var r,g,b,m,c,x,h=_ref.h,s=_ref.s,l=_ref.l,a=_ref.a;return isFinite(h)||(h=0),isFinite(s)||(s=0),isFinite(l)||(l=0),(h/=60)<0&&(h=6- -h%6),h%=6,s=Math.max(0,Math.min(1,s/100)),l=Math.max(0,Math.min(1,l/100)),x=(c=(1-Math.abs(2*l-1))*s)*(1-Math.abs(h%2-1)),h<1?(r=c,g=x,b=0):h<2?(r=x,g=c,b=0):h<3?(r=0,g=c,b=x):h<4?(r=0,g=x,b=c):h<5?(r=x,g=0,b=c):(r=c,g=0,b=x),{r:r+=m=l-c/2,g:g+=m,b:b+=m,a}}function hsl2rgb(hsl){var _hsla2rgba=hsla2rgba(_objectSpread2(_objectSpread2({},hsl),{},{a:1}));return{r:_hsla2rgba.r,g:_hsla2rgba.g,b:_hsla2rgba.b}}function rgba2hex(_ref){var r=_ref.r,g=_ref.g,b=_ref.b,a=_ref.a;return"#"+(255*r|256).toString(16).slice(1)+(255*g|256).toString(16).slice(1)+(255*b|256).toString(16).slice(1)+(255*a|256).toString(16).slice(1)}function rgb2hex(rgb){return rgba2hex(_objectSpread2(_objectSpread2({},rgb),{},{a:1})).slice(0,7)}function contrast(l1,l2){return(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05)}function relativeLuminance(_ref){var r=_ref.r,g=_ref.g,b=_ref.b,a=_ref.a,_map2=_slicedToArray([r,g,b].map((function(c){return c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4)})),3);return(.2126*_map2[0]+.7152*_map2[1]+.0722*_map2[2])*a}var ratios={"min-ratio-3":{description:"(WCAG AA, large text)",minRatio:3},"min-ratio-4.5":{description:"(WCAG AA, normal text / WCAG AAA, large text)",minRatio:4.5},"min-ratio-7":{description:"(WCAG AAA, normal text)",minRatio:7},"AA-large":{description:"(WCAG AA, large text)",minRatio:3},AA:{description:"(WCAG AA, normal text)",minRatio:4.5},AAA:{description:"(WCAG AAA, normal text)",minRatio:7}};function aa(ratio){var verbose=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ratio>=3&&(arguments.length>1&&void 0!==arguments[1]?arguments[1]:16)>=18?(verbose&&console.log(ratios["min-ratio-3"]),!0):ratio>=4.5&&(verbose&&console.log(ratios["min-ratio-4.5"]),!0)}function aaa(ratio){var verbose=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return ratio>=4.5&&(arguments.length>1&&void 0!==arguments[1]?arguments[1]:16)>=18?(verbose&&console.log(ratios["min-ratio-4.5"]),!0):ratio>=7&&(verbose&&console.log(ratios["min-ratio-7"]),!0)}function hslaVector3(_ref,v3){var h=_ref.h,s=_ref.s,l=_ref.l,a=_ref.a,hv=v3[0],sv=v3[1],lv=v3[2],h1=(h+hv)%360;return h1<0&&(h1+=360),{h:h1,s:Math.min(Math.max(s+sv,0),100),l:Math.min(Math.max(l+lv,0),100),a}}var THRESHOLD=.1;function getAccesibleHexColor(rgba,background,ratio){var r,result=rgba;do{r=contrast(relativeLuminance(str2rgba(rgba2hex(result=hsla2rgba(hslaVector3(rgba2hsla(result),[0,0,THRESHOLD]))))),relativeLuminance(background))}while(Math.round(100*r)/100<=ratio);return result}exports.aa=aa,exports.aaa=aaa,exports.contrast=contrast,exports.getAccesibleHexColor=getAccesibleHexColor,exports.hsl2rgb=hsl2rgb,exports.hsla2rgba=hsla2rgba,exports.hslaVector3=hslaVector3,exports.ratios=ratios,exports.relativeLuminance=relativeLuminance,exports.rgb2hex=rgb2hex,exports.rgb2hsl=rgb2hsl,exports.rgba2hex=rgba2hex,exports.rgba2hsla=rgba2hsla,exports.str2rgba=str2rgba,Object.defineProperty(exports,"__esModule",{value:!0})}(exports)},"./packages/design-system/src/icons/exclamation_outline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgExclamationOutline=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M16 9a7 7 0 1 0 0 14 7 7 0 0 0 0-14m0-1a8 8 0 1 0 0 16 8 8 0 0 0 0-16m0 10a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-.5-2a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-1 0z",clipRule:"evenodd"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgExclamationOutline)},"./packages/design-system/src/components/keyboard/keyboard.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z9:()=>Shortcut,Xl:()=>useEscapeToBlurEffect,yg:()=>useGlobalIsKeyPressed,xb:()=>useGlobalKeyDownEffect,Ew:()=>useKeyDownEffect,LP:()=>useKeyEffect});__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/core-js/modules/esnext.iterator.map.js");var src=__webpack_require__("./packages/react/src/index.ts");const keyboard_keys={undo:"mod+z",redo:"shift+mod+z",delete:["del","backspace"],clone:"mod+d"},context=(0,src.kr)({keys:keyboard_keys});var utils=__webpack_require__("./packages/design-system/src/components/keyboard/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const globalRef={current:null};function setGlobalRef(){globalRef.current||(globalRef.current=document.documentElement)}function useKeyEffectInternal(refOrNode,keyNameOrSpec,type,callback,deps){const{keys}=(0,src.qp)(context),batchingCallback=(0,src.iS)(callback,deps||[]);(0,src.d4)((()=>{const nodeEl=(0,utils.Lc)(refOrNode);if(!nodeEl)return;if(nodeEl.nodeType!==Node.ELEMENT_NODE&&nodeEl.nodeType!==Node.DOCUMENT_NODE)throw new Error("only an element or a document node can be used");const keySpec=(0,utils.zO)(keys,keyNameOrSpec);if(1===keySpec.key.length&&""===keySpec.key[0])return;const mousetrap=(0,utils.x0)(nodeEl),handler=(0,utils.qs)(nodeEl,keySpec,batchingCallback);return mousetrap.bind(keySpec.key,handler,type),()=>{mousetrap.unbind(keySpec.key,type)}}),[batchingCallback,keys])}function useKeyEffect(refOrNode,keyNameOrSpec,callback,deps){useKeyEffectInternal(refOrNode,keyNameOrSpec,void 0,callback,deps)}function useKeyDownEffect(refOrNode,keyNameOrSpec,callback,deps){useKeyEffectInternal(refOrNode,keyNameOrSpec,"keydown",callback,deps)}function useKeyUpEffect(refOrNode,keyNameOrSpec,callback,deps){useKeyEffectInternal(refOrNode,keyNameOrSpec,"keyup",callback,deps)}function useGlobalKeyDownEffect(keyNameOrSpec,callback,deps){setGlobalRef(),useKeyDownEffect(globalRef,keyNameOrSpec,callback,deps)}function useGlobalIsKeyPressed(keyNameOrSpec,deps){return setGlobalRef(),function useIsKeyPressed(refOrNode,keyNameOrSpec,deps){const[isKeyPressed,setIsKeyPressed]=(0,src.eJ)(!1),handleBlur=(0,src.I4)((()=>{setIsKeyPressed(!1)}),[]);return(0,src.d4)((()=>(window.addEventListener("blur",handleBlur),function(){window.removeEventListener("blur",handleBlur)})),[handleBlur]),useKeyDownEffect(refOrNode,keyNameOrSpec,(()=>setIsKeyPressed(!0)),deps),useKeyUpEffect(refOrNode,keyNameOrSpec,(()=>setIsKeyPressed(!1)),deps),isKeyPressed}(globalRef,keyNameOrSpec,deps)}function useEscapeToBlurEffect(refOrNode,deps){useKeyDownEffect(refOrNode,{key:"esc",editable:!0},(()=>{const nodeEl=(0,utils.Lc)(refOrNode),{activeElement}=document;nodeEl&&activeElement&&nodeEl.contains(activeElement)&&activeElement.blur()}),deps)}function Shortcut(_ref){let{component:Component,shortcut=""}=_ref;const chars=shortcut.split(" ");return(0,jsx_runtime.jsx)(Component,{"aria-label":(0,utils.k$)(shortcut),children:chars.map(((char,index)=>(0,jsx_runtime.jsx)(Component,{children:(0,utils.U2)(char)},`${index}-${char}`)))})}Shortcut.displayName="Shortcut"},"./packages/design-system/src/components/popup/popup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/index.ts"),_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/utils/noop.ts"),_contexts__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/contexts/popup/usePopup.ts"),_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/components/popup/utils/getOffset.ts"),_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/design-system/src/components/popup/utils/getTransforms.ts"),_constants__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/popup/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_TOP_OFFSET=0,DEFAULT_POPUP_Z_INDEX=2,DEFAULT_LEFT_OFFSET=0;const __WEBPACK_DEFAULT_EXPORT__=function Popup(_ref){let{anchor,dock,children,renderContents,placement=_constants__WEBPACK_IMPORTED_MODULE_3__.ug.Bottom,spacing,isOpen,fillWidth=!1,refCallback=_utils__WEBPACK_IMPORTED_MODULE_4__.Z,zIndex=DEFAULT_POPUP_Z_INDEX,ignoreMaxOffsetY,offsetOverride=!1,maxWidth}=_ref;const{topOffset=DEFAULT_TOP_OFFSET,leftOffset=DEFAULT_LEFT_OFFSET,isRTL=!1}=(0,_contexts__WEBPACK_IMPORTED_MODULE_5__.Z)(),[popupState,setPopupState]=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.eJ)(null),isMounted=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.sO)(!1),popup=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.sO)(null),positionPopup=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.I4)((evt=>{if(!isMounted.current||!anchor?.current)return;if(evt instanceof Event&&evt.target instanceof Element&&popup.current?.contains(evt.target))return;const offset=anchor.current?(0,_utils__WEBPACK_IMPORTED_MODULE_6__.os)({placement,spacing,anchor,dock,popup,isRTL,topOffset,ignoreMaxOffsetY,offsetOverride}):_utils__WEBPACK_IMPORTED_MODULE_6__.tp,popupRect=popup.current?.getBoundingClientRect();setPopupState({offset:(()=>{if(!popupRect)return null;if(popupRect.x<=leftOffset)switch(placement){case _constants__WEBPACK_IMPORTED_MODULE_3__.ug.BottomEnd:case _constants__WEBPACK_IMPORTED_MODULE_3__.ug.TopEnd:return{...offset,x:isRTL?offset.x:popupRect.width+leftOffset};case _constants__WEBPACK_IMPORTED_MODULE_3__.ug.LeftEnd:case _constants__WEBPACK_IMPORTED_MODULE_3__.ug.Left:case _constants__WEBPACK_IMPORTED_MODULE_3__.ug.LeftStart:return{...offset,x:isRTL?offset.x:popupRect.width+-popupRect.x-leftOffset};case _constants__WEBPACK_IMPORTED_MODULE_3__.ug.BottomStart:case _constants__WEBPACK_IMPORTED_MODULE_3__.ug.TopStart:case _constants__WEBPACK_IMPORTED_MODULE_3__.ug.RightEnd:case _constants__WEBPACK_IMPORTED_MODULE_3__.ug.RightStart:case _constants__WEBPACK_IMPORTED_MODULE_3__.ug.Right:return{...offset,x:popupRect.width};default:return{...offset,x:popupRect.width/2+(isRTL?0:leftOffset)}}return isRTL&&popupRect.right>=offset.bodyRight-leftOffset?{...offset,x:offset.bodyRight-popupRect.width-leftOffset}:null})()||offset,height:popupRect?.height||null})}),[anchor,placement,spacing,dock,isRTL,topOffset,leftOffset,ignoreMaxOffsetY,offsetOverride]);return(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.d4)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.d4)((()=>{popupState?.height&&popupState.height!==popup.current?.getBoundingClientRect()?.height&&positionPopup()}),[popupState?.height,positionPopup]),(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.bt)((()=>{if(isOpen)return isMounted.current=!0,positionPopup(),document.addEventListener("scroll",positionPopup,!0),()=>{document.removeEventListener("scroll",positionPopup,!0),isMounted.current=!1}}),[isOpen,positionPopup]),(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.bt)((()=>{isMounted.current&&refCallback(popup)}),[popupState,refCallback]),(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.Bz)({current:document.body},positionPopup,[positionPopup]),popupState&&isOpen?(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.jz)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_constants__WEBPACK_IMPORTED_MODULE_3__.kZ,{ref:popup,fillWidth:Boolean(fillWidth),maxWidth,$offset:popupState.offset,topOffset,zIndex,transforms:(0,_utils__WEBPACK_IMPORTED_MODULE_7__.fg)(placement,isRTL),children:renderContents?renderContents({propagateDimensionChange:positionPopup}):children}),document.body):null}},"./packages/design-system/src/utils/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>FOCUSABLE_SELECTORS,t:()=>KEYS});const KEYS={DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",ENTER:"Enter",SPACE:"Space",TAB:"Tab"},FOCUSABLE_SELECTORS=["button:not(:disabled)","[href]","input:not(:disabled)","select:not(:disabled)","textarea:not(:disabled)",'[tabindex]:not([tabindex="-1"])']},"./packages/story-editor/src/components/thumbnail/stories/demoThumbnails.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>THUMBNAIL_BG});__webpack_require__("./node_modules/react/index.js");var _footer_pagepreview__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/story-editor/src/components/footer/pagepreview/index.js"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/story-editor/src/components/thumbnail/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const LayerIconImageOutput=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:"http://placekitten.com/200/300",alt:"a cute little kitten",height:"20",crossOrigin:"anonymous"}),LayerIconVideoOutput=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img",{src:"https://storage.coverr.co/p/rhOM3iuhDqxedD7lKLpPO34yN2lhf5Kk",alt:"media/coverr:hWGAKF358u",width:"28",height:"28",crossOrigin:"anonymous"}),LayerIconShapeOutput=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"icon__Container-sc-1f3yf81-0 eqIMqM",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{width:"16",height:"16",className:"icon__ShapePreview-sc-1f3yf81-1 iLoXqT",style:{clipPath:"url('#mask-triangle-94fcc48e-5e07-48db-9ab5-a4d8b2314a3f-layer-preview')",backgroundColor:"#691818"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{width:"0",height:"0",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("defs",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("clipPath",{id:"mask-triangle-94fcc48e-5e07-48db-9ab5-a4d8b2314a3f-layer-preview",transform:"scale(1 1)",clipPathUnits:"objectBoundingBox",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{d:"M 0.5 0 L 1 1 L 0 1 Z"})})})})})}),LayerIconTextOutput=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",height:"30px",width:"30px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.5 9.5a.5.5 0 00-.5.5v1.178a.5.5 0 01-1 0V10a1.5 1.5 0 011.5-1.5h11A1.5 1.5 0 0123 10v1.178a.5.5 0 01-1 0V10a.5.5 0 00-.5-.5h-5v13h2.1a.5.5 0 010 1h-5.2a.5.5 0 010-1h2.1v-13h-5z",fill:"currentColor"})})}),PageThumbnail=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_footer_pagepreview__WEBPACK_IMPORTED_MODULE_1__.Z,{page:{elements:[{opacity:100,flip:{vertical:!1,horizontal:!1},rotationAngle:0,lockAspectRatio:!0,backgroundColor:{color:{r:255,g:255,b:255}},x:1,y:1,width:1,height:1,mask:{type:"rectangle"},isBackground:!0,isDefaultBackground:!0,type:"shape",id:"d5753439-bb84-45df-b348-e8d018e05aec"},{opacity:100,flip:{vertical:!1,horizontal:!1},rotationAngle:0,lockAspectRatio:!0,backgroundColor:{color:{r:242,g:242,b:8}},type:"shape",x:0,y:-49,width:269,height:256,scale:100,focalX:50,focalY:50,mask:{type:"star"},id:"81d3fd2e-2acf-4af1-95fa-373c647621f5"},{opacity:100,flip:{vertical:!1,horizontal:!1},rotationAngle:0,lockAspectRatio:!0,backgroundColor:{color:{r:242,g:242,b:8}},type:"shape",width:155,height:148,scale:100,focalX:50,focalY:50,mask:{type:"star"},id:"d2a7bed9-b81b-4f65-9bc5-17a14471e178",x:258,y:136},{opacity:100,flip:{vertical:!1,horizontal:!1},rotationAngle:0,lockAspectRatio:!0,backgroundColor:{color:{r:242,g:242,b:8}},type:"shape",width:301,height:287,scale:100,focalX:50,focalY:50,mask:{type:"star"},id:"318a9c26-2d6e-43b5-99c0-f6f249c22f6a",x:34,y:330}],backgroundColor:{color:{r:242,g:12,b:217}},type:"page",id:"02fef47d-d072-4e4b-a49f-6253eca35fda"},width:___WEBPACK_IMPORTED_MODULE_2__.sq.WIDTH,height:___WEBPACK_IMPORTED_MODULE_2__.sq.HEIGHT,as:"div",label:"Page Thumbnail"}),THUMBNAIL_BG={[___WEBPACK_IMPORTED_MODULE_2__.r1.IMAGE]:LayerIconImageOutput,[___WEBPACK_IMPORTED_MODULE_2__.r1.SHAPE]:LayerIconShapeOutput,[___WEBPACK_IMPORTED_MODULE_2__.r1.TEXT]:LayerIconTextOutput,[___WEBPACK_IMPORTED_MODULE_2__.r1.VIDEO]:LayerIconVideoOutput,[___WEBPACK_IMPORTED_MODULE_2__.r1.PAGE]:PageThumbnail}},"./node_modules/core-js/modules/esnext.iterator.find.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),iterate=__webpack_require__("./node_modules/core-js/internals/iterate.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),getIteratorDirect=__webpack_require__("./node_modules/core-js/internals/get-iterator-direct.js");$({target:"Iterator",proto:!0,real:!0},{find:function find(predicate){anObject(this),aCallable(predicate);var record=getIteratorDirect(this),counter=0;return iterate(record,(function(value,stop){if(predicate(value,counter++))return stop(value)}),{IS_RECORD:!0,INTERRUPTED:!0}).result}})},"./node_modules/core-js/modules/esnext.iterator.some.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var $=__webpack_require__("./node_modules/core-js/internals/export.js"),iterate=__webpack_require__("./node_modules/core-js/internals/iterate.js"),aCallable=__webpack_require__("./node_modules/core-js/internals/a-callable.js"),anObject=__webpack_require__("./node_modules/core-js/internals/an-object.js"),getIteratorDirect=__webpack_require__("./node_modules/core-js/internals/get-iterator-direct.js");$({target:"Iterator",proto:!0,real:!0},{some:function some(predicate){anObject(this),aCallable(predicate);var record=getIteratorDirect(this),counter=0;return iterate(record,(function(value,stop){if(predicate(value,counter++))return stop()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},"./packages/story-editor/node_modules/react-blurhash/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>u});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),blurhash__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/blurhash/dist/esm/index.js"),P=Object.defineProperty,R=Object.defineProperties,C=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,b=(e,s,t)=>s in e?P(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,h=(e,s)=>{for(var t in s||(s={}))v.call(s,t)&&b(e,t,s[t]);if(m)for(var t of m(s))x.call(s,t)&&b(e,t,s[t]);return e},p=(e,s)=>R(e,C(s)),g=(e,s)=>{var t={};for(var r in e)v.call(e,r)&&s.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&m)for(var r of m(e))s.indexOf(r)<0&&x.call(e,r)&&(t[r]=e[r]);return t},o=class extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{constructor(){super(...arguments),this.canvas=null,this.handleRef=t=>{this.canvas=t,this.draw()},this.draw=()=>{let{hash:t,height:r,punch:n,width:a}=this.props;if(this.canvas){let i=(0,blurhash__WEBPACK_IMPORTED_MODULE_1__.Jx)(t,a,r,n),c=this.canvas.getContext("2d"),d=c.createImageData(a,r);d.data.set(i),c.putImageData(d,0,0)}}}componentDidUpdate(){this.draw()}render(){let i=this.props,{hash:t,height:r,width:n}=i,a=g(i,["hash","height","width"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("canvas",p(h({},a),{height:r,width:n,ref:this.handleRef}))}};o.defaultProps={height:128,width:128};var D={position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"},u=class extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{componentDidUpdate(){if(this.props.resolutionX<=0)throw new Error("resolutionX must be larger than zero");if(this.props.resolutionY<=0)throw new Error("resolutionY must be larger than zero")}render(){let w=this.props,{hash:s,height:t,width:r,punch:n,resolutionX:a,resolutionY:i,style:c}=w,d=g(w,["hash","height","width","punch","resolutionX","resolutionY","style"]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",p(h({},d),{style:p(h({display:"inline-block",height:t,width:r},c),{position:"relative"})}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(o,{hash:s,height:i,width:a,punch:n,style:D}))}};u.defaultProps={height:128,width:128,resolutionX:32,resolutionY:32}}}]);