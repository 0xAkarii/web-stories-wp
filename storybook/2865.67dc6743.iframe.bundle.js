(globalThis.webpackChunkweb_stories_wp=globalThis.webpackChunkweb_stories_wp||[]).push([[2865],{"./node_modules/core-js/internals/define-built-in-accessor.js":(module,__unused_webpack_exports,__webpack_require__)=>{var makeBuiltIn=__webpack_require__("./node_modules/core-js/internals/make-built-in.js"),defineProperty=__webpack_require__("./node_modules/core-js/internals/object-define-property.js");module.exports=function(target,name,descriptor){return descriptor.get&&makeBuiltIn(descriptor.get,name,{getter:!0}),descriptor.set&&makeBuiltIn(descriptor.set,name,{setter:!0}),defineProperty.f(target,name,descriptor)}},"./node_modules/core-js/internals/validate-arguments-length.js":module=>{var $TypeError=TypeError;module.exports=function(passed,required){if(passed<required)throw $TypeError("Not enough arguments");return passed}},"./node_modules/core-js/modules/web.url-search-params.delete.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),validateArgumentsLength=__webpack_require__("./node_modules/core-js/internals/validate-arguments-length.js"),$URLSearchParams=URLSearchParams,URLSearchParamsPrototype=$URLSearchParams.prototype,append=uncurryThis(URLSearchParamsPrototype.append),$delete=uncurryThis(URLSearchParamsPrototype.delete),forEach=uncurryThis(URLSearchParamsPrototype.forEach),push=uncurryThis([].push),params=new $URLSearchParams("a=1&a=2");params.delete("a",1),params+""!="a=2"&&defineBuiltIn(URLSearchParamsPrototype,"delete",(function(name){var length=arguments.length,$value=length<2?void 0:arguments[1];if(length&&void 0===$value)return $delete(this,name);var entries=[];forEach(this,(function(v,k){push(entries,{key:k,value:v})})),validateArgumentsLength(length,1);for(var entry,key=toString(name),value=toString($value),index=0,dindex=0,found=!1,entriesLength=entries.length;index<entriesLength;)entry=entries[index++],found||entry.key===key?(found=!0,$delete(this,entry.key)):dindex++;for(;dindex<entriesLength;)(entry=entries[dindex++]).key===key&&entry.value===value||append(this,entry.key,entry.value)}),{enumerable:!0,unsafe:!0})},"./node_modules/core-js/modules/web.url-search-params.has.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var defineBuiltIn=__webpack_require__("./node_modules/core-js/internals/define-built-in.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),toString=__webpack_require__("./node_modules/core-js/internals/to-string.js"),validateArgumentsLength=__webpack_require__("./node_modules/core-js/internals/validate-arguments-length.js"),$URLSearchParams=URLSearchParams,URLSearchParamsPrototype=$URLSearchParams.prototype,getAll=uncurryThis(URLSearchParamsPrototype.getAll),$has=uncurryThis(URLSearchParamsPrototype.has);new $URLSearchParams("a=1").has("a",2)&&defineBuiltIn(URLSearchParamsPrototype,"has",(function has(name){var length=arguments.length,$value=length<2?void 0:arguments[1];if(length&&void 0===$value)return $has(this,name);var values=getAll(this,name);validateArgumentsLength(length,1);for(var value=toString($value),index=0;index<values.length;)if(values[index++]===value)return!0;return!1}),{enumerable:!0,unsafe:!0})},"./node_modules/core-js/modules/web.url-search-params.size.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{"use strict";var DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),uncurryThis=__webpack_require__("./node_modules/core-js/internals/function-uncurry-this.js"),defineBuiltInAccessor=__webpack_require__("./node_modules/core-js/internals/define-built-in-accessor.js"),URLSearchParamsPrototype=URLSearchParams.prototype,forEach=uncurryThis(URLSearchParamsPrototype.forEach);DESCRIPTORS&&!("size"in URLSearchParamsPrototype)&&defineBuiltInAccessor(URLSearchParamsPrototype,"size",{get:function size(){var count=0;return forEach(this,(function(){count++})),count},configurable:!0,enumerable:!0})},"./node_modules/history/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q_:()=>createHashHistory});var Action,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js");!function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(Action||(Action={}));var readOnly=function(obj){return obj};var BeforeUnloadEventType="beforeunload",HashChangeEventType="hashchange",PopStateEventType="popstate";function createHashHistory(options){void 0===options&&(options={});var _options2$window=options.window,window=void 0===_options2$window?document.defaultView:_options2$window,globalHistory=window.history;function getIndexAndLocation(){var _parsePath=parsePath(window.location.hash.substr(1)),_parsePath$pathname=_parsePath.pathname,pathname=void 0===_parsePath$pathname?"/":_parsePath$pathname,_parsePath$search=_parsePath.search,search=void 0===_parsePath$search?"":_parsePath$search,_parsePath$hash=_parsePath.hash,hash=void 0===_parsePath$hash?"":_parsePath$hash,state=globalHistory.state||{};return[state.idx,readOnly({pathname,search,hash,state:state.usr||null,key:state.key||"default"})]}var blockedPopTx=null;function handlePop(){if(blockedPopTx)blockers.call(blockedPopTx),blockedPopTx=null;else{var nextAction=Action.Pop,_getIndexAndLocation4=getIndexAndLocation(),nextIndex=_getIndexAndLocation4[0],nextLocation=_getIndexAndLocation4[1];if(blockers.length){if(null!=nextIndex){var delta=index-nextIndex;delta&&(blockedPopTx={action:nextAction,location:nextLocation,retry:function retry(){go(-1*delta)}},go(delta))}}else applyTx(nextAction)}}window.addEventListener(PopStateEventType,handlePop),window.addEventListener(HashChangeEventType,(function(){createPath(getIndexAndLocation()[1])!==createPath(location)&&handlePop()}));var action=Action.Pop,_getIndexAndLocation6=getIndexAndLocation(),index=_getIndexAndLocation6[0],location=_getIndexAndLocation6[1],listeners=createEvents(),blockers=createEvents();function createHref(to){return function getBaseHref(){var base=document.querySelector("base"),href="";if(base&&base.getAttribute("href")){var url=window.location.href,hashIndex=url.indexOf("#");href=-1===hashIndex?url:url.slice(0,hashIndex)}return href}()+"#"+("string"==typeof to?to:createPath(to))}function getNextLocation(to,state){return void 0===state&&(state=null),readOnly((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.Z)({pathname:location.pathname,hash:"",search:""},"string"==typeof to?parsePath(to):to,{state,key:createKey()}))}function getHistoryStateAndUrl(nextLocation,index){return[{usr:nextLocation.state,key:nextLocation.key,idx:index},createHref(nextLocation)]}function allowTx(action,location,retry){return!blockers.length||(blockers.call({action,location,retry}),!1)}function applyTx(nextAction){action=nextAction;var _getIndexAndLocation7=getIndexAndLocation();index=_getIndexAndLocation7[0],location=_getIndexAndLocation7[1],listeners.call({action,location})}function go(delta){globalHistory.go(delta)}null==index&&(index=0,globalHistory.replaceState((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.Z)({},globalHistory.state,{idx:index}),""));var history={get action(){return action},get location(){return location},createHref,push:function push(to,state){var nextAction=Action.Push,nextLocation=getNextLocation(to,state);if(allowTx(nextAction,nextLocation,(function retry(){push(to,state)}))){var _getHistoryStateAndUr3=getHistoryStateAndUrl(nextLocation,index+1),historyState=_getHistoryStateAndUr3[0],url=_getHistoryStateAndUr3[1];try{globalHistory.pushState(historyState,"",url)}catch(error){window.location.assign(url)}applyTx(nextAction)}},replace:function replace(to,state){var nextAction=Action.Replace,nextLocation=getNextLocation(to,state);if(allowTx(nextAction,nextLocation,(function retry(){replace(to,state)}))){var _getHistoryStateAndUr4=getHistoryStateAndUrl(nextLocation,index),historyState=_getHistoryStateAndUr4[0],url=_getHistoryStateAndUr4[1];globalHistory.replaceState(historyState,"",url),applyTx(nextAction)}},go,back:function back(){go(-1)},forward:function forward(){go(1)},listen:function listen(listener){return listeners.push(listener)},block:function block(blocker){var unblock=blockers.push(blocker);return 1===blockers.length&&window.addEventListener(BeforeUnloadEventType,promptBeforeUnload),function(){unblock(),blockers.length||window.removeEventListener(BeforeUnloadEventType,promptBeforeUnload)}}};return history}function promptBeforeUnload(event){event.preventDefault(),event.returnValue=""}function createEvents(){var handlers=[];return{get length(){return handlers.length},push:function push(fn){return handlers.push(fn),function(){handlers=handlers.filter((function(handler){return handler!==fn}))}},call:function call(arg){handlers.forEach((function(fn){return fn&&fn(arg)}))}}}function createKey(){return Math.random().toString(36).substr(2,8)}function createPath(_ref){var _ref$pathname=_ref.pathname,pathname=void 0===_ref$pathname?"/":_ref$pathname,_ref$search=_ref.search,search=void 0===_ref$search?"":_ref$search,_ref$hash=_ref.hash,hash=void 0===_ref$hash?"":_ref$hash;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function parsePath(path){var parsedPath={};if(path){var hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));var searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}}}]);