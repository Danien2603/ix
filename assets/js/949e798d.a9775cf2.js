"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[7167,8568,8867,7483,73,9548],{30876:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||s;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82009:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(2784),r=a(6277);const s="tabItem_OMyP";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,o),hidden:a},t)}},1112:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(7896),r=a(2784),s=a(6277),o=a(89741),i=a(42244),l=a(78963),u=a(24126);const c="tabList_M0Dn",m="tabItem_ysIP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:p,groupId:g,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,i.l)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==x&&!f.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:k}=(0,l.U)(),[w,N]=(0,r.useState)(x),M=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=g){const e=y[g];null!=e&&e!==w&&f.some((t=>t.value===e))&&N(e)}const D=e=>{const t=e.currentTarget,a=M.indexOf(t),n=f[a].value;n!==w&&(T(t),N(n),null!=g&&k(g,String(n)))},E=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=M.indexOf(e.currentTarget)+1;a=M[t]??M[0];break}case"ArrowLeft":{const t=M.indexOf(e.currentTarget)-1;a=M[t]??M[M.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},b)},f.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>M.push(e),onKeyDown:E,onFocus:D,onClick:D},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function p(e){const t=(0,o.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},77942:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(37949),r=a(90077),s=a(37614),o=a(2784),i=a(90943);function l(e){const t=(0,s.Z)(),[a]=(0,o.useState)(!1),l=(0,r.Z)("/"),[u,c]=(0,o.useState)(""),[m,d]=(0,o.useState)((0,i.V)(t)),{preferredVersion:p}=(0,n.J)();return(0,o.useEffect)((()=>{const t=null==p?void 0:p.name;c(void 0===t||"current"===t?l+`webcomponent-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/${e.name}.html`)}),[l,null==p?void 0:p.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,i.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},a=new MutationObserver((()=>e()));return a.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{a.disconnect()}}),[]),o.createElement(o.Fragment,null,a?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):o.createElement("iframe",{src:`${u}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(82009),r=a(1112),s=a(2784),o=a(77942);const i={angular:1,react:2,javascript:3,preview:4};function l(e){const t=e.children??[],a=Array.isArray(t)?t:[t];return s.createElement(r.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Component"}].filter((e=>a.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[s.createElement(n.Z,{value:"preview",key:"preview"},s.createElement(o.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...a].sort(((e,t)=>i[e.props.value]-i[t.props.value])))}},50685:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7896),r=(a(2784),a(30876));const s={},o=void 0,i={unversionedId:"auto-generated/ix-message-bar/events",id:"auto-generated/ix-message-bar/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-message-bar/events.md",sourceDirName:"auto-generated/ix-message-bar",slug:"/auto-generated/ix-message-bar/events",permalink:"/siemens-ix/docs/auto-generated/ix-message-bar/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-message-bar/events.md",tags:[],version:"current",frontMatter:{}},l={},u=[],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"closedChange"),(0,r.kt)("td",{parentName:"tr",align:null},"An event emitted when the close button is clicked"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},11446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7896),r=(a(2784),a(30876));const s={},o=void 0,i={unversionedId:"auto-generated/ix-message-bar/props",id:"auto-generated/ix-message-bar/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-message-bar/props.md",sourceDirName:"auto-generated/ix-message-bar",slug:"/auto-generated/ix-message-bar/props",permalink:"/siemens-ix/docs/auto-generated/ix-message-bar/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-message-bar/props.md",tags:[],version:"current",frontMatter:{}},l={},u=[],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dismissible"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, close button is enabled and alert can be dismissed by the user"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"dismissible")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the type of the alert."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"danger" \uff5c "info" \uff5c "warning"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'info'"))))))}m.isMDXComponent=!0},99098:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7896),r=(a(2784),a(30876));const s={},o=void 0,i={unversionedId:"auto-generated/previews/angular/message-bar",id:"auto-generated/previews/angular/message-bar",title:"message-bar",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/message-bar.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/message-bar",permalink:"/siemens-ix/docs/auto-generated/previews/angular/message-bar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/message-bar.md",tags:[],version:"current",frontMatter:{}},l={},u=[],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-message-bar\',\n  template: `\n    <ix-message-bar>Message text</ix-message-bar>\n    <ix-message-bar type="warning">Message text</ix-message-bar>\n    <ix-message-bar type="danger">\n      <div class="d-flex align-items-center justify-content-between">\n        Message text <ix-button>Action</ix-button>\n      </div>\n    </ix-message-bar>\n  `,\n})\nexport class MessageBar {}\n')))}m.isMDXComponent=!0},49290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7896),r=(a(2784),a(30876));const s={},o=void 0,i={unversionedId:"auto-generated/previews/react/message-bar",id:"auto-generated/previews/react/message-bar",title:"message-bar",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/message-bar.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/message-bar",permalink:"/siemens-ix/docs/auto-generated/previews/react/message-bar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/message-bar.md",tags:[],version:"current",frontMatter:{}},l={},u=[],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, IxMessageBar } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const MessageBar: React.FC = () => {\n  return (\n    <>\n      <IxMessageBar>Message text</IxMessageBar>\n      <IxMessageBar type="warning">Message text</IxMessageBar>\n      <IxMessageBar type="danger">\n        <div className="d-flex align-items-center justify-content-between">\n          Message text <IxButton>Action</IxButton>\n        </div>\n      </IxMessageBar>\n    </>\n  );\n};\n')))}m.isMDXComponent=!0},79491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var n=a(7896),r=(a(2784),a(30876));const s={},o=void 0,i={unversionedId:"auto-generated/previews/web-component/message-bar",id:"auto-generated/previews/web-component/message-bar",title:"message-bar",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/message-bar.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/message-bar",permalink:"/siemens-ix/docs/auto-generated/previews/web-component/message-bar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/message-bar.md",tags:[],version:"current",frontMatter:{}},l={},u=[],c={toc:u};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-message-bar>Message text</ix-message-bar>\n<ix-message-bar type="warning">Message text</ix-message-bar>\n<ix-message-bar type="danger">\n  <div class="d-flex align-items-center justify-content-between">\n    Message text <ix-button>Action</ix-button>\n  </div>\n</ix-message-bar>\n')))}m.isMDXComponent=!0},630:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>p,default:()=>h,frontMatter:()=>d,metadata:()=>g,toc:()=>v});var n=a(7896),r=(a(2784),a(30876)),s=a(82009),o=a(64176),i=a(11446),l=a(50685),u=a(79491),c=a(49290),m=a(99098);const d={},p="Messagebar",g={unversionedId:"controls/messagebar",id:"controls/messagebar",title:"Messagebar",description:"Usage",source:"@site/docs/controls/messagebar.md",sourceDirName:"controls",slug:"/controls/messagebar",permalink:"/siemens-ix/docs/controls/messagebar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/messagebar.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"KPI",permalink:"/siemens-ix/docs/controls/kpi"},next:{title:"Modal",permalink:"/siemens-ix/docs/controls/modal"}},b={},v=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],f={toc:v};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"messagebar"},"Messagebar"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{name:"message-bar",height:"14rem",mdxType:"Preview"},(0,r.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)(u.default,{mdxType:"SourceMessage"})),(0,r.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)(c.default,{mdxType:"SourceReactMessage"})),(0,r.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)(m.default,{mdxType:"SourceAnuglarMessage"}))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(i.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(l.default,{mdxType:"Events"}))}h.isMDXComponent=!0}}]);