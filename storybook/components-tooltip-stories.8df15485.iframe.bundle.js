"use strict";(globalThis.webpackChunkweb_stories_wp=globalThis.webpackChunkweb_stories_wp||[]).push([[4258],{"./packages/design-system/src/icons/table.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}const SvgTable=_ref=>{let{title,titleId,...props}=_ref;return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 32","aria-labelledby":titleId},props),title?react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{id:titleId},title):null,_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M9.5 9A1.5 1.5 0 0 0 8 10.5v11A1.5 1.5 0 0 0 9.5 23h13a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 22.5 9h-13m3 1h-3a.5.5 0 0 0-.5.5V13h3.5zM9 14v4h3.5v-4zm0 5v2.5a.5.5 0 0 0 .5.5h3v-3zm4.5 3h9a.5.5 0 0 0 .5-.5V19h-9.5zm9.5-4v-4h-9.5v4zm0-5v-2.5a.5.5 0 0 0-.5-.5h-9v3z",clipRule:"evenodd"})))},__WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgTable)},"./packages/design-system/src/components/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>ButtonAsLink,z:()=>Button});__webpack_require__("./node_modules/react/index.js");var _googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/index.ts"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_theme__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/theme/helpers/outline.ts"),_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/theme/helpers/expandPresetStyles.ts"),_theme__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/design-system/src/theme/types.ts"),_theme__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/design-system/src/theme/constants/index.ts"),_constants__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/components/button/constants.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const base=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["display:flex;align-items:center;justify-content:space-around;padding:0;margin:0;background:transparent;border:none;cursor:pointer;color:",";",";",";&:active{background-color:",";color:",";}&:disabled,&[aria-disabled='true']{pointer-events:none;background-color:",";color:",";}transition:background-color ",",color ",";"],(_ref=>{let{theme}=_ref;return theme.colors.fg.primary}),(_ref2=>{let{theme}=_ref2;return _theme__WEBPACK_IMPORTED_MODULE_4__.L(theme.colors.border.focus)}),(_ref3=>{let{theme,size}=_ref3;return _theme__WEBPACK_IMPORTED_MODULE_5__._({preset:{...theme.typography.presets.label[size===_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Small?_theme__WEBPACK_IMPORTED_MODULE_7__.TextSize.Small:_theme__WEBPACK_IMPORTED_MODULE_7__.TextSize.Medium]},theme})}),(_ref4=>{let{theme}=_ref4;return theme.colors.interactiveBg.active}),(_ref5=>{let{theme}=_ref5;return theme.colors.interactiveFg.active}),(_ref6=>{let{theme}=_ref6;return theme.colors.interactiveBg.disable}),(_ref7=>{let{theme}=_ref7;return theme.colors.fg.disable}),_constants__WEBPACK_IMPORTED_MODULE_6__.ok,_constants__WEBPACK_IMPORTED_MODULE_6__.ok),anchorBase=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["&:hover,&:focus{color:",";}"],(_ref8=>{let{theme}=_ref8;return theme.colors.interactiveFg.active})),buttonColors={[_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Primary]:_ref9=>{let{theme}=_ref9;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["background-color:",";color:",";&:active{background-color:",";color:",";}&:hover,&:focus{background-color:",";color:"," !important;}"],theme.colors.interactiveBg.brandNormal,theme.colors.interactiveFg.brandNormal,theme.colors.interactiveBg.active,theme.colors.interactiveFg.active,theme.colors.interactiveBg.brandHover,theme.colors.interactiveFg.brandHover)},[_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Secondary]:_ref10=>{let{theme}=_ref10;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["background-color:",";&:hover,&:focus{background-color:",";}&:disabled{&:hover,&:focus{background-color:",";}}"],theme.colors.interactiveBg.secondaryNormal,theme.colors.interactiveBg.secondaryHover,theme.colors.interactiveBg.disable)},[_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Tertiary]:_ref11=>{let{theme}=_ref11;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["background-color:",";&:hover,&:focus{background-color:",";}&:disabled,&[aria-disabled='true']{background-color:",";&:hover,&:focus{background-color:",";}}"],theme.colors.interactiveBg.tertiaryNormal,theme.colors.interactiveBg.tertiaryHover,theme.colors.interactiveBg.tertiaryNormal,theme.colors.interactiveBg.tertiaryNormal)},[_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Quaternary]:_ref12=>{let{theme}=_ref12;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["background-color:",";border:1px solid ",";&:hover{border-color:",";}&:focus{box-shadow:none;border-color:",";}&:active{border-color:",";background-color:",";}",";"," &:disabled,&[aria-disabled='true']{border-color:",";background-color:",";}"],theme.colors.interactiveBg.quaternaryNormal,theme.colors.border.defaultNormal,theme.colors.border.quaternaryHover,theme.colors.border.quaternaryHover,theme.colors.border.quaternaryActive,theme.colors.interactiveBg.quaternaryNormal,_theme__WEBPACK_IMPORTED_MODULE_4__.L,(_ref13=>{let{isToggled}=_ref13;return isToggled&&(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["border-color:",";"],theme.colors.border.defaultPress)}),theme.colors.border.disable,theme.colors.interactiveBg.quaternaryNormal)},[_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Plain]:(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)([""])},rectangle=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",";min-width:1px;min-height:1em;border-radius:",";padding:",";"],(_ref14=>{let{$type}=_ref14;return $type&&buttonColors[$type]}),(_ref15=>{let{theme}=_ref15;return theme.borders.radius.small}),(_ref16=>{let{size}=_ref16;return size===_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Small?"8px 16px":"18px 32px"})),square=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",";border-radius:",";"," svg{width:","px;height:","px;}"],(_ref17=>{let{$type}=_ref17;return $type&&buttonColors[$type]}),(_ref18=>{let{theme}=_ref18;return theme.borders.radius.small}),(_ref19=>{let{size}=_ref19;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["width:","px;height:","px;"],size===_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Small?_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE:_theme__WEBPACK_IMPORTED_MODULE_8__.Z.LARGE_BUTTON_SIZE,size===_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Small?_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE:_theme__WEBPACK_IMPORTED_MODULE_8__.Z.LARGE_BUTTON_SIZE)}),_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE,_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE),circle=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["border-radius:",";"],(_ref20=>{let{theme}=_ref20;return theme.borders.radius.round})),icon=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",";width:","px;height:","px;svg{width:100%;height:100%;}"],(_ref21=>{let{$type}=_ref21;return $type&&buttonColors[$type]}),_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE,_theme__WEBPACK_IMPORTED_MODULE_8__.Z.ICON_SIZE);function getTextSize(size){switch(size){case _constants__WEBPACK_IMPORTED_MODULE_6__.qE.Small:return _theme__WEBPACK_IMPORTED_MODULE_7__.TextSize.Small;case _constants__WEBPACK_IMPORTED_MODULE_6__.qE.Medium:default:return _theme__WEBPACK_IMPORTED_MODULE_7__.TextSize.Medium}}const link=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",""],(_ref22=>{let{theme,size}=_ref22;return(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.iv)(["",";color:",";border-radius:0;:hover{color:",";}&:active,&:disabled,&[aria-disabled='true']{background-color:",";}"],_theme__WEBPACK_IMPORTED_MODULE_5__._({preset:theme.typography.presets.link[getTextSize(size)],theme}),theme.colors.fg.linkNormal,theme.colors.fg.linkHover,theme.colors.opacity.footprint)})),ButtonRectangle=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"button__ButtonRectangle",componentId:"sc-1wfpfsz-0"})([""," ",""],base,rectangle),AnchorRectangle=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"button__AnchorRectangle",componentId:"sc-1wfpfsz-1"})([""," "," ",""],base,anchorBase,rectangle),ButtonSquare=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"button__ButtonSquare",componentId:"sc-1wfpfsz-2"})([""," ",""],base,square),AnchorSquare=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"button__AnchorSquare",componentId:"sc-1wfpfsz-3"})([""," "," ",""],base,anchorBase,square),ButtonCircle=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"button__ButtonCircle",componentId:"sc-1wfpfsz-4"})([""," "," ",""],base,square,circle),AnchorCircle=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"button__AnchorCircle",componentId:"sc-1wfpfsz-5"})([""," "," "," ",""],base,anchorBase,square,circle),ButtonIcon=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"button__ButtonIcon",componentId:"sc-1wfpfsz-6"})([""," ",""],base,icon),AnchorIcon=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"button__AnchorIcon",componentId:"sc-1wfpfsz-7"})([""," "," ",""],base,anchorBase,icon),ButtonLink=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.button.withConfig({displayName:"button__ButtonLink",componentId:"sc-1wfpfsz-8"})([""," ",""],base,link),AnchorLink=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.a.withConfig({displayName:"button__AnchorLink",componentId:"sc-1wfpfsz-9"})([""," "," ",""],base,anchorBase,link),Button=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.Gp)((function Button(_ref23,ref){let{size=_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Medium,type=_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Plain,variant=_constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Rectangle,children,...rest}=_ref23;const elementProps={ref,size,$type:type,...rest};switch(variant){case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Rectangle:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonRectangle,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Circle:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonCircle,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Square:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonSquare,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Icon:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonIcon,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Link:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ButtonLink,{...elementProps,children});default:return null}})),ButtonAsLink=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.Gp)((function ButtonAsLink(_ref24,ref){let{size=_constants__WEBPACK_IMPORTED_MODULE_6__.qE.Medium,type=_constants__WEBPACK_IMPORTED_MODULE_6__.L$.Plain,variant=_constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Rectangle,children,...rest}=_ref24;const elementProps={ref,size,$type:type,...rest};switch(variant){case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Rectangle:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnchorRectangle,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Circle:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnchorCircle,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Square:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnchorSquare,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Icon:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnchorIcon,{...elementProps,children});case _constants__WEBPACK_IMPORTED_MODULE_6__.Wu.Link:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AnchorLink,{...elementProps,children});default:return null}}))},"./packages/design-system/src/components/button/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L$:()=>ButtonType,Wu:()=>ButtonVariant,ok:()=>BUTTON_TRANSITION_TIMING,qE:()=>ButtonSize});let ButtonType=function(ButtonType){return ButtonType.Primary="primary",ButtonType.Secondary="secondary",ButtonType.Tertiary="tertiary",ButtonType.Quaternary="quaternary",ButtonType.Plain="plain",ButtonType}({}),ButtonSize=function(ButtonSize){return ButtonSize.Small="small",ButtonSize.Medium="medium",ButtonSize}({}),ButtonVariant=function(ButtonVariant){return ButtonVariant.Circle="circle",ButtonVariant.Rectangle="rectangle",ButtonVariant.Square="square",ButtonVariant.Icon="icon",ButtonVariant.Link="link",ButtonVariant}({});const BUTTON_TRANSITION_TIMING="0.3s ease 0s"},"./packages/design-system/src/components/tooltip/stories/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LightMode:()=>LightMode,TooltipWithChangingTextOnClick:()=>TooltipWithChangingTextOnClick,TooltipWithChangingTextOnInterval:()=>TooltipWithChangingTextOnInterval,_default:()=>_default,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/react/src/index.ts"),_theme__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/theme/theme.ts"),_icons__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./packages/design-system/src/icons/table.svg"),_button__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/design-system/src/components/button/button.tsx"),_button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./packages/design-system/src/components/button/constants.ts"),_popup__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/popup/constants.ts"),___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/components/tooltip/tooltip.tsx"),_typography__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./packages/design-system/src/components/typography/text/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Components/Tooltip",args:{hasTail:!0,placement:_popup__WEBPACK_IMPORTED_MODULE_3__.ug.Bottom,colorShortcut:"mod+z",colorTitle:"Page background colors cannot have opacity",iconShortcut:"Shortcut for icon",iconTitle:"To save draft click enter",buttonShortcut:"Shortcut for button",buttonTitle:"Tooltip message over a button"},argTypes:{placement:{options:Object.values(_popup__WEBPACK_IMPORTED_MODULE_3__.ug),control:"select"},colorShortcut:{name:"Shortcut for color"},colorTitle:{name:"Title for color"},iconShortcut:{name:"Shortcut for icon"},iconTitle:{name:"Title for icon"},buttonShortcut:{name:"Shortcut for button"},buttonTitle:{name:"Title for button"}}},Container=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div.withConfig({displayName:"stories__Container",componentId:"sc-1sryy4p-0"})(["display:flex;align-items:center;justify-content:center;width:600px;height:400px;background-color:",";padding:30px;p{margin:10px;}"],(props=>props.theme.colors.bg.primary)),Color=styled_components__WEBPACK_IMPORTED_MODULE_4__.ZP.div.withConfig({displayName:"stories__Color",componentId:"sc-1sryy4p-1"})(["width:20px;height:20px;border-radius:50%;background-color:red;"]),_default={render:function Render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(styled_components__WEBPACK_IMPORTED_MODULE_4__.f6,{theme:_theme__WEBPACK_IMPORTED_MODULE_5__.r,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.Z,{hasTail:args.hasTail,placement:args.placement,shortcut:args.colorShortcut,title:args.colorTitle,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Color,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.Z,{hasTail:args.hasTail,placement:args.placement,shortcut:args.iconShortcut,title:args.iconTitle,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_7__.z,{type:_button__WEBPACK_IMPORTED_MODULE_8__.L$.Primary,variant:_button__WEBPACK_IMPORTED_MODULE_8__.Wu.Icon,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_9__.Z,{"aria-hidden":!0})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.Z,{hasTail:args.hasTail,placement:args.placement,shortcut:args.buttonShortcut,title:args.buttonTitle,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_7__.z,{type:_button__WEBPACK_IMPORTED_MODULE_8__.L$.Primary,size:_button__WEBPACK_IMPORTED_MODULE_8__.qE.Small,children:"I am just a normal button"})})]})})}},LightMode={render:function Render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.Z,{hasTail:args.hasTail,placement:args.placement,shortcut:args.colorShortcut,title:args.colorTitle,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Color,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.Z,{hasTail:args.hasTail,placement:args.placement,shortcut:args.iconShortcut,title:args.iconTitle,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_7__.z,{type:_button__WEBPACK_IMPORTED_MODULE_8__.L$.Primary,variant:_button__WEBPACK_IMPORTED_MODULE_8__.Wu.Icon,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_9__.Z,{"aria-hidden":!0})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.Z,{hasTail:args.hasTail,placement:args.placement,shortcut:args.buttonShortcut,title:args.buttonTitle,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_7__.z,{type:_button__WEBPACK_IMPORTED_MODULE_8__.L$.Primary,size:_button__WEBPACK_IMPORTED_MODULE_8__.qE.Small,children:"I am just a normal button"})})]})}},tooltipTitles=["initial tooltip title","secondary tooltip title but quite a bit longer"],TooltipWithChangingTextOnClick={render:function Render(args){const[currentTooltipIndex,setCurrentTooltipIndex]=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.eJ)(0),handleTooltipTextChange=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.I4)((()=>{setCurrentTooltipIndex((existingIndex=>1===existingIndex?0:1))}),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_typography__WEBPACK_IMPORTED_MODULE_10__.x,{children:"Click button to change tooltip title."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.Z,{hasTail:args.hasTail,placement:args.placement,shortcut:args.iconShortcut,title:tooltipTitles[currentTooltipIndex],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_7__.z,{type:_button__WEBPACK_IMPORTED_MODULE_8__.L$.Primary,size:_button__WEBPACK_IMPORTED_MODULE_8__.qE.Small,onClick:handleTooltipTextChange,children:"Switch view"})})]})},parameters:{controls:{include:["hasTail","placement","Shortcut for icon"]}}},TooltipWithChangingTextOnInterval={render:function Render(args){const[currentTooltipIndex,setCurrentTooltipIndex]=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.eJ)(0),[isTooltipIntervalActive,setIsTooltipIntervalActive]=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.eJ)(!1);(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.d4)((()=>{let interval;return isTooltipIntervalActive&&(interval=setInterval((()=>setCurrentTooltipIndex((existingIndex=>1===existingIndex?0:1))),1e3)),()=>interval&&clearInterval(interval)}),[isTooltipIntervalActive]);const handleToggleButtonFocus=(0,_googleforcreators_react__WEBPACK_IMPORTED_MODULE_1__.I4)((()=>setIsTooltipIntervalActive((currentActiveState=>!currentActiveState))),[]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Container,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_typography__WEBPACK_IMPORTED_MODULE_10__.x,{children:"Place focus on button to begin updating tooltip text with interval behind the scenes, remove focus to stop."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_6__.Z,{hasTail:args.hasTail,placement:args.placement,shortcut:args.iconShortcut,title:tooltipTitles[currentTooltipIndex],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_button__WEBPACK_IMPORTED_MODULE_7__.z,{type:_button__WEBPACK_IMPORTED_MODULE_8__.L$.Primary,size:_button__WEBPACK_IMPORTED_MODULE_8__.qE.Small,onFocus:handleToggleButtonFocus,onBlur:handleToggleButtonFocus,children:"Switch view"})})]})},parameters:{controls:{include:["hasTail","placement","Shortcut for icon"]}}}},"./packages/design-system/src/components/tooltip/tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>tooltip});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),src=__webpack_require__("./packages/react/src/index.ts"),types=__webpack_require__("./packages/design-system/src/theme/types.ts"),noop=__webpack_require__("./packages/design-system/src/utils/noop.ts"),usePopup=__webpack_require__("./packages/design-system/src/contexts/popup/usePopup.ts"),constants=__webpack_require__("./packages/design-system/src/components/popup/constants.ts"),utils=__webpack_require__("./packages/design-system/src/components/keyboard/utils.ts"),typography_text=__webpack_require__("./packages/design-system/src/components/typography/text/index.ts"),getOffset=__webpack_require__("./packages/design-system/src/components/popup/utils/getOffset.ts"),getTransforms=__webpack_require__("./packages/design-system/src/components/popup/utils/getTransforms.ts");const SvgForTail=styled_components_browser_esm.ZP.svg.withConfig({displayName:"tail__SvgForTail",componentId:"sc-bxihlv-0"})(["position:absolute;width:0;height:0;"]),Tail=styled_components_browser_esm.ZP.span.withConfig({displayName:"tail__Tail",componentId:"sc-bxihlv-1"})(["@supports (clip-path:url('#","')){position:absolute;display:block;height:","px;width:","px;",";background-color:inherit;border:none;border-bottom:none;clip-path:url('#","');}"],"tooltip-tail",8,34,(_ref2=>{let{placement,translateX,isRTL}=_ref2;return(_ref=>{let{placement,translateX,isRTL}=_ref;switch(placement){case constants.ug.Top:case constants.ug.TopStart:case constants.ug.TopEnd:return(0,styled_components_browser_esm.iv)(["bottom:-","px;/*! @noflip */ transform:translateX(","px) rotate(180deg);"],7,translateX);case constants.ug.Bottom:case constants.ug.BottomStart:case constants.ug.BottomEnd:return(0,styled_components_browser_esm.iv)(["top:-","px;/*! @noflip */ transform:translateX(","px);"],7,translateX);case constants.ug.Left:case constants.ug.LeftStart:case constants.ug.LeftEnd:return(0,styled_components_browser_esm.iv)(["right:-","px;transform:rotate(",");"],20,isRTL?"-90deg":"90deg");case constants.ug.Right:case constants.ug.RightStart:case constants.ug.RightEnd:return(0,styled_components_browser_esm.iv)(["left:-","px;transform:rotate(",");"],20,isRTL?"90deg":"-90deg");default:return""}})({placement,translateX,isRTL})}),"tooltip-tail");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const DEFAULT_LEFT_OFFSET=0,Wrapper=styled_components_browser_esm.ZP.div.withConfig({displayName:"tooltip__Wrapper",componentId:"sc-128lmkf-0"})(["position:relative;"]),TooltipContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"tooltip__TooltipContainer",componentId:"sc-128lmkf-1"})(["margin:0;display:flex;justify-content:center;align-items:center;text-align:center;flex-direction:row;max-width:14em;transition:0.4s opacity;opacity:",";pointer-events:",";z-index:",";border-radius:4px;background-color:",";filter:drop-shadow(0px 4px 4px rgba(0,0,0,0.25));",""],(_ref=>{let{shown}=_ref;return shown?1:0}),(_ref2=>{let{shown}=_ref2;return shown?"all":"none"}),(_ref3=>{let{zIndex}=_ref3;return zIndex}),(_ref4=>{let{theme}=_ref4;return theme.colors.inverted.bg.primary}),(_ref5=>{let{styleOverride}=_ref5;return styleOverride})),TooltipText=(0,styled_components_browser_esm.ZP)(typography_text.x.Paragraph).withConfig({displayName:"tooltip__TooltipText",componentId:"sc-128lmkf-2"})(["color:",";padding:10px;"],(_ref6=>{let{theme}=_ref6;return theme.colors.inverted.fg.primary})),getBoundingBoxCenter=_ref7=>{let{x,width}=_ref7;return x+width/2};let lastVisibleDelayedTooltip=0;const tooltip=function Tooltip(_ref8){let{title,shortcut="",hasTail=!1,placement=constants.ug.Bottom,children,onFocus=noop.Z,onBlur=noop.Z,isDelayed=!1,forceAnchorRef,className,popupZIndexOverride,styleOverride,...props}=_ref8;const{leftOffset=DEFAULT_LEFT_OFFSET,isRTL}=(0,usePopup.Z)(),[shown,setShown]=(0,src.eJ)(!1),[arrowDelta,setArrowDelta]=(0,src.eJ)(0),anchorRef=(0,src.sO)(null),tooltipRef=(0,src.sO)(null),placementRef=(0,src.sO)(placement),[dynamicPlacement,setDynamicPlacement]=(0,src.eJ)(placement),isMounted=(0,src.sO)(!1),[popupState,setPopupState]=(0,src.eJ)({}),isPopupMounted=(0,src.sO)(!1),popup=(0,src.sO)(null),isOpen=Boolean(shown&&(shortcut||title)),[dynamicOffset,setDynamicOffset]=(0,src.eJ)({}),spacing=(0,src.Ye)((()=>({x:placement.startsWith("left")||placement.startsWith("right")?8:0,y:placement.startsWith("top")||placement.startsWith("bottom")?8:0})),[placement]),getAnchor=(0,src.I4)((()=>forceAnchorRef||anchorRef),[forceAnchorRef]),positionPopup=(0,src.I4)((()=>{isPopupMounted.current&&anchorRef?.current&&setPopupState({offset:anchorRef.current?(0,getOffset.os)({placement:dynamicPlacement,spacing,anchor:getAnchor(),popup,isRTL,ignoreMaxOffsetY:!0}):void 0})}),[dynamicPlacement,spacing,getAnchor,isRTL]),positionPlacement=(0,src.I4)(((_ref9,_ref10)=>{let{offset}=_ref9,{left,right,height}=_ref10;if(!offset)return;const neededVerticalSpace=offset.y+height+8,shouldMoveToTop=dynamicPlacement.startsWith("bottom")&&neededVerticalSpace>=window.innerHeight,isOverFlowingLeft=Math.trunc(left)<(isRTL?0:leftOffset),isOverFlowingRight=isRTL&&Math.trunc(right)>offset.bodyRight-leftOffset;shouldMoveToTop?dynamicPlacement.endsWith("-start")?setDynamicPlacement(constants.ug.TopStart):dynamicPlacement.endsWith("-end")?setDynamicPlacement(constants.ug.TopEnd):setDynamicPlacement(constants.ug.Top):isOverFlowingLeft?setDynamicOffset({x:(isRTL?0:leftOffset)-left}):isOverFlowingRight&&setDynamicOffset({x:offset.bodyRight-right-leftOffset})}),[dynamicPlacement,isRTL,leftOffset]),positionArrow=(0,src.I4)((()=>{const anchor=getAnchor(),anchorElBoundingBox=anchor.current?.getBoundingClientRect(),tooltipElBoundingBox=tooltipRef.current?.getBoundingClientRect();if(!tooltipElBoundingBox||!anchorElBoundingBox)return;positionPlacement(popupState,tooltipElBoundingBox);const delta=getBoundingBoxCenter(anchorElBoundingBox)-getBoundingBoxCenter(tooltipElBoundingBox);setArrowDelta(delta)}),[positionPlacement,popupState,getAnchor]),resetPlacement=(0,src.y1)((()=>{setDynamicPlacement(placementRef.current)}),100),delay=(0,src.sO)(null),onHover=(0,src.I4)((()=>{const handle=()=>{isMounted.current&&setShown(!0)};if(isDelayed){performance.now()-lastVisibleDelayedTooltip<500&&handle(),delay.current&&clearTimeout(delay.current),delay.current=setTimeout(handle,1e3)}else handle()}),[isDelayed]),onHoverOut=(0,src.I4)((()=>{setShown(!1),resetPlacement(),isDelayed&&delay.current&&(clearTimeout(delay.current),shown&&(lastVisibleDelayedTooltip=performance.now()))}),[resetPlacement,isDelayed,shown]);return(0,src.d4)((()=>(isMounted.current=!0,()=>{isMounted.current=!1})),[]),(0,src.d4)((()=>(isPopupMounted.current=!0,()=>{isPopupMounted.current=!1})),[]),(0,src.bt)((()=>{if(isOpen)return isPopupMounted.current=!0,positionPopup(),document.addEventListener("scroll",positionPopup,!0),()=>{document.removeEventListener("scroll",positionPopup,!0),isPopupMounted.current=!1}}),[isOpen,positionPopup]),(0,src.bt)((()=>{isPopupMounted.current&&positionArrow()}),[positionArrow]),(0,src.Bz)({current:document.body},positionPopup,[positionPopup]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Wrapper,{onPointerEnter:onHover,onPointerLeave:onHoverOut,onFocus:e=>{setShown(!0),onFocus(e)},onBlur:e=>{setShown(!1),onBlur(e),resetPlacement()},ref:anchorRef,...props,children}),popupState?.offset&&isOpen?(0,src.jz)((0,jsx_runtime.jsx)(constants.kZ,{ref:popup,$offset:dynamicOffset?{...popupState.offset,x:(popupState.offset?.x||0)+(dynamicOffset?.x||0)}:popupState.offset,noOverFlow:!0,zIndex:popupZIndexOverride||2,transforms:(0,getTransforms.fg)(dynamicPlacement,isRTL),children:(0,jsx_runtime.jsxs)(TooltipContainer,{className,ref:tooltipRef,shown,zIndex:popupZIndexOverride||2,styleOverride,children:[(0,jsx_runtime.jsx)(TooltipText,{size:types.TextSize.XSmall,children:shortcut?`${title} (${(0,utils.U2)(shortcut)})`:title}),hasTail&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(SvgForTail,{children:(0,jsx_runtime.jsx)("clipPath",{id:"tooltip-tail",clipPathUnits:"objectBoundingBox",children:(0,jsx_runtime.jsx)("path",{d:"M1,1 L0.868,1 C0.792,1,0.72,0.853,0.676,0.606 L0.585,0.098 C0.562,-0.033,0.513,-0.033,0.489,0.098 L0.399,0.606 C0.355,0.853,0.283,1,0.207,1 L0,1 L1,1"})})}),(0,jsx_runtime.jsx)(Tail,{placement:dynamicPlacement,translateX:-(dynamicOffset?.x||0)||arrowDelta,isRTL})]})]})}),document.body):null]})}},"./packages/design-system/src/theme/helpers/outline.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>focusableOutlineCSS,R:()=>focusCSS});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const focusCSS=(accent,background)=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["outline:none;box-shadow:",";"],(_ref=>{let{theme}=_ref;return`0px 0px 0 2px ${background||theme.colors.bg.primary}, 0px 0px 0 4px ${"string"==typeof accent?accent:theme.colors.border.focus}`})),focusableOutlineCSS=(colorOrProps,background)=>{const accent="string"==typeof colorOrProps?colorOrProps:colorOrProps?.theme?.colors?.border?.focus;return(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.iv)(["&:focus-visible{",";}"],focusCSS(accent,background))}}}]);