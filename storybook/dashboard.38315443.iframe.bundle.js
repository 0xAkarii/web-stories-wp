"use strict";(globalThis.webpackChunkweb_stories_wp=globalThis.webpackChunkweb_stories_wp||[]).push([[9966],{"./.storybook/stories/playground/dashboard/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{_default:()=>_default,default:()=>dashboard});var react=__webpack_require__("./node_modules/react/index.js"),dist=(__webpack_require__("./node_modules/core-js/modules/web.url-search-params.delete.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.has.js"),__webpack_require__("./node_modules/core-js/modules/web.url-search-params.size.js"),__webpack_require__("./node_modules/@storybook/csf/dist/index.mjs")),src=__webpack_require__("./packages/dashboard/src/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),scrollbar=__webpack_require__("./packages/design-system/src/theme/helpers/scrollbar.ts");const GlobalStyle=(0,styled_components_browser_esm.vJ)(["body.web-story_page_stories-dashboard #wpbody{",";}"],scrollbar.d);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const dashboard={title:"Playground/Dashboard"},linkHrefTo=(title,name)=>{const url=new URL(window.parent.location);return url.searchParams.set("path","/story/"+(0,dist.KK)(title,name)),decodeURIComponent(url.href)},fetchStories=()=>Promise.resolve({stories:{1:{id:1,status:"publish",title:"Example story",created:"2021-11-04T10:12:47",createdGmt:"2021-11-04T10:12:47Z",author:{name:"Author",id:1},featuredMediaUrl:"https://wp.stories.google/static/main/images/templates/food-and-stuff/page1_bg.jpg"},2:{id:2,status:"publish",title:"Example story 2",created:"2021-12-04T10:12:47",createdGmt:"2021-12-04T10:12:47Z",author:{name:"Author",id:1},featuredMediaUrl:"https://wp.stories.google/static/main/images/templates/fresh-and-bright/page8_figure.jpg"}},fetchedStoryIds:[1,2],totalPages:1,totalStoriesByStatus:{all:2,publish:2}}),getTaxonomies=()=>Promise.resolve([{restBase:"",restPath:"",labels:{allItems:"All Categories",notFound:"No categories found",searchItems:"Search Categories"}}]),getTaxonomyTerms=()=>Promise.resolve([{name:"Food",id:1}]),getAuthors=()=>Promise.resolve([{name:"Author",id:1}]),_default={render:function Render(){(()=>{const isHashCleaned=(0,react.useRef)(!1);isHashCleaned.current||(window.location.hash="/",isHashCleaned.current=!0)})();const config={newStoryURL:linkHrefTo("Playground/Stories Editor","default"),apiCallbacks:{fetchStories,getTaxonomies,getTaxonomyTerms,getAuthors}};return(0,jsx_runtime.jsxs)(src.A,{config,children:[(0,jsx_runtime.jsx)(GlobalStyle,{}),(0,jsx_runtime.jsx)(src.v4,{})]})}}}}]);