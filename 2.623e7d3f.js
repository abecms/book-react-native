(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{134:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(140),l=a(128),o=a(120),s=a(124);const i="",u="dark";var d=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(o.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):i),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),c=Object(n.useCallback)(()=>{a(i),r(i)},[]),l=Object(n.useCallback)(()=>{a(u),r(u)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?u:i)})},[]),{isDarkTheme:t===u,setLightTheme:c,setDarkTheme:l}},h=a(141);var m=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=d();return r.a.createElement(h.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)};var f=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var b=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});var p=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=f();return r.a.createElement(b.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a}},e.children)},v=a(93),g=a.n(v);var k=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(o.a)(),{id:t,content:a,backgroundColor:c,textColor:l}=e,[s,i]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{const e=localStorage.getItem("docusaurus.announcement.id"),a=t!==e;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&i(!1)},[]),!a||s?null:r.a.createElement("div",{className:g.a.announcementBar,style:{backgroundColor:c,color:l},role:"banner"},r.a.createElement("div",{className:g.a.announcementBarContent,dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("button",{type:"button",className:g.a.announcementBarClose,onClick:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),i(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},E=a(1),_=a(121),O=a.n(_),y=a(125),j=(a(12),a(135));a(94);var C=e=>{const[t,c]=Object(n.useState)(!1),l=Object(n.useRef)(null),{siteConfig:s={}}=Object(o.a)(),{themeConfig:{algolia:i}}=s,u=Object(j.b)();const d=(e=!0)=>{t||Promise.all([a.e(17).then(a.t.bind(null,210,7)),a.e(10).then(a.t.bind(null,211,7))]).then(([{default:t}])=>{c(!0),window.docsearch=t,function(e){window.docsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,inputSelector:"#search_input_react",algoliaOptions:i.algoliaOptions,handleSelected:(e,t,a)=>{const n=document.createElement("a");n.href=a.url;const r="#__docusaurus"===n.hash?""+n.pathname:`${n.pathname}${n.hash}`;u.push(r)}}),e&&l.current.focus()}(e)})},h=Object(n.useCallback)(()=>{d(),t&&l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),m=Object(n.useCallback)(()=>{e.handleSearchBarToggle(!e.isSearchBarExpanded)},[e.isSearchBarExpanded]),f=Object(n.useCallback)(e=>{const t="mouseover"!==e.type;d(t)});return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:O()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:O()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:f,onFocus:f,onBlur:m,ref:l}))},N=a(159),w=a.n(N),S=a(95),T=a.n(S);const x=()=>r.a.createElement("span",{className:O()(T.a.toggle,T.a.moon)}),B=()=>r.a.createElement("span",{className:O()(T.a.toggle,T.a.sun)});var L=function(e){const{isClient:t}=Object(o.a)();return r.a.createElement(w.a,Object(E.a)({disabled:!t,icons:{checked:r.a.createElement(x,null),unchecked:r.a.createElement(B,null)}},e))},M=a(136);var I=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};var D=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[l,o]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(j.c)(),[h,m]=I(d.hash),f=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(0===e&&a(!0),e<s)return;if(r)return c(!1),a(!1),void o(e);const t=document.documentElement.scrollHeight-s,n=window.innerHeight;l&&e>=l?a(!1):e+n<t&&a(!0),o(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[l,s]),Object(n.useEffect)(()=>{e&&(a(!0),m(d.hash))},[d]),Object(n.useEffect)(()=>{e&&h&&c(!0)},[h]),{navbarRef:u,isNavbarVisible:t}},P=a(142),F=a(143),X=a(96),G=a.n(X);function A({activeBasePath:e,to:t,href:a,label:n,position:c,...l}){const o=Object(s.a)(t),i=Object(s.a)(e);return r.a.createElement(y.a,Object(E.a)({},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:o,...e?{isActive:(e,t)=>t.pathname.startsWith(i)}:null},l),n)}function H({items:e,position:t,...a}){return e?r.a.createElement("div",{className:O()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(A,Object(E.a)({className:"navbar__item navbar__link"},a),a.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map((e,t)=>r.a.createElement("li",{key:t},r.a.createElement(A,Object(E.a)({className:"navbar__item navbar__link"},e)))))):r.a.createElement(A,Object(E.a)({className:"navbar__item navbar__link"},a))}function R({items:e,...t}){return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(A,Object(E.a)({className:"menu__link menu__link--sublist"},t),t.label),r.a.createElement("ul",{className:"menu__list"},e.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(A,Object(E.a)({className:"menu__link"},e)))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(A,Object(E.a)({className:"menu__link"},t)))}var K=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:c=!1}},isClient:l}=Object(o.a)(),[s,i]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),{isDarkTheme:h,setLightTheme:m,setDarkTheme:f}=Object(M.a)(),{navbarRef:b,isNavbarVisible:p}=D(a),{logoLink:v,logoLinkProps:g,logoImageUrl:k,logoAlt:_}=Object(F.a)();Object(P.a)(s);const j=Object(n.useCallback)(()=>{i(!0)},[i]),N=Object(n.useCallback)(()=>{i(!1)},[i]),w=Object(n.useCallback)(e=>e.target.checked?f():m(),[m,f]);return r.a.createElement("nav",{ref:b,className:O()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[G.a.navbarHideable]:a,[G.a.navbarHidden]:!p})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:j,onKeyDown:j},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(y.a,Object(E.a)({className:"navbar__brand",to:v},g),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:_}),null!=e&&r.a.createElement("strong",{className:O()("navbar__title",{[G.a.hideLogoText]:u})},e)),t.filter(e=>"left"===e.position).map((e,t)=>r.a.createElement(H,Object(E.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(H,Object(E.a)({},e,{key:t}))),!c&&r.a.createElement(L,{className:G.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:h,onChange:w}),r.a.createElement(C,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:N}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(y.a,Object(E.a)({className:"navbar__brand",onClick:N,to:v},g),null!=k&&r.a.createElement("img",{key:l,className:"navbar__logo",src:k,alt:_}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!c&&s&&r.a.createElement(L,{"aria-label":"Dark mode toggle in sidebar",checked:h,onChange:w})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(R,Object(E.a)({},e,{onClick:N,key:t}))))))))},U=a(97),$=a.n(U);function V({to:e,href:t,label:a,...n}){const c=Object(s.a)(e);return r.a.createElement(y.a,Object(E.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},n),a)}const W=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var Y=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:l=[],logo:i={}}=n||{},u=Object(s.a)(i.src);return n?r.a.createElement("footer",{className:O()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(V,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:$.a.footerLogoLink},r.a.createElement(W,{alt:i.alt,url:u})):r.a.createElement(W,{alt:i.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(98);t.a=function(e){const{siteConfig:t={}}=Object(o.a)(),{favicon:a,title:n,themeConfig:{image:i},url:u}=t,{children:d,title:h,noFooter:f,description:b,image:v,keywords:g,permalink:E,version:_}=e,O=h?`${h} | ${n}`:n,y=v||i;let j=u+Object(s.a)(y);Object(l.a)(y)||(j=y);const C=Object(s.a)(a);return r.a.createElement(m,null,r.a.createElement(p,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),O&&r.a.createElement("title",null,O),O&&r.a.createElement("meta",{property:"og:title",content:O}),a&&r.a.createElement("link",{rel:"shortcut icon",href:C}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),_&&r.a.createElement("meta",{name:"docsearch:version",content:_}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:j}),y&&r.a.createElement("meta",{property:"twitter:image",content:j}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),E&&r.a.createElement("meta",{property:"og:url",content:u+E}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(k,null),r.a.createElement(K,null),r.a.createElement("div",{className:"main-wrapper"},d),!f&&r.a.createElement(Y,null)))}},135:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},136:function(e,t,a){"use strict";var n=a(0),r=a(141);t.a=function(){return Object(n.useContext)(r.a)}},141:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},142:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},143:function(e,t,a){"use strict";var n=a(120),r=a(136),c=a(124),l=a(128);t.a=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:t={}}={}}}={}}=Object(n.a)(),{isDarkTheme:a}=Object(r.a)(),o=t.href||e;let s={};t.target?s={target:t.target}:Object(l.a)(o)||(s={rel:"noopener noreferrer",target:"_blank"});const i=t.srcDark&&a?t.srcDark:t.src;return{logoLink:o,logoLinkProps:s,logoImageUrl:Object(c.a)(i),logoAlt:t.alt}}},159:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=h(c),o=h(a(121)),s=h(a(9)),i=h(a(160)),u=h(a(161)),d=a(162);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(u.default,null)}},m.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},160:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},161:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},162:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);