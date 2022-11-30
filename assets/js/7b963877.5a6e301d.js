"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46613,31144,59992,94768,82719,45730,17642,41869,1312],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2784),a=n(6277);const i="tabItem_OMyP";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7896),a=n(2784),i=n(6277),o=n(89741),s=n(42244),l=n(78963),p=n(24126);const c="tabList_M0Dn",u="tabItem_ysIP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:g,className:v}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=m??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,s.l)(w,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!w.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:y}=(0,l.U)(),[x,T]=(0,a.useState)(h),N=[],{blockElementScrollPositionUntilNextRender:S}=(0,p.o5)();if(null!=g){const e=k[g];null!=e&&e!==x&&w.some((t=>t.value===e))&&T(e)}const D=e=>{const t=e.currentTarget,n=N.indexOf(t),r=w[n].value;r!==x&&(S(t),T(r),null!=g&&y(g,String(r)))},M=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},v)},w.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>N.push(e),onKeyDown:M,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(37949),a=n(90077),i=n(37614),o=n(2784),s=n(90943);function l(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),l=(0,a.Z)("/"),[p,c]=(0,o.useState)(""),[u,d]=(0,o.useState)((0,s.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,o.useEffect)((()=>{const t=null==m?void 0:m.name;c(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,null==m?void 0:m.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,s.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):o.createElement("iframe",{src:`${p}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(82009),a=n(1112),i=n(2784),o=n(77942);const s={angular:1,react:2,javascript:3,preview:4};function l(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return i.createElement(a.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[i.createElement(r.Z,{value:"preview",key:"preview"},i.createElement(o.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>s[e.props.value]-s[t.props.value])))}},68747:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/ix-spinner/events",id:"auto-generated/ix-spinner/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-spinner/events.md",sourceDirName:"auto-generated/ix-spinner",slug:"/auto-generated/ix-spinner/events",permalink:"/docs/auto-generated/ix-spinner/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-spinner/events.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No events available for this component."))}u.isMDXComponent=!0},75396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/ix-spinner/props",id:"auto-generated/ix-spinner/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-spinner/props.md",sourceDirName:"auto-generated/ix-spinner",slug:"/auto-generated/ix-spinner/props",permalink:"/docs/auto-generated/ix-spinner/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-spinner/props.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"size"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Size of spinner"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"size")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"large" \uff5c "medium"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'medium'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"variant"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Variant of spinner"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"variant")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"primary" \uff5c "secondary" \uff5c "sencodary"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'secondary'"))))))}u.isMDXComponent=!0},46991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/angular/spinner-large",id:"auto-generated/previews/angular/spinner-large",title:"spinner-large",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/spinner-large.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/spinner-large",permalink:"/docs/auto-generated/previews/angular/spinner-large",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/spinner-large.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-spinner-large',\n  template: ` <ix-spinner size=\"large\"></ix-spinner> `,\n})\nexport class SpinnerLarge {}\n")))}u.isMDXComponent=!0},44122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/angular/spinner",id:"auto-generated/previews/angular/spinner",title:"spinner",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/spinner.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/spinner",permalink:"/docs/auto-generated/previews/angular/spinner",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/spinner.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-spinner',\n  template: ` <ix-spinner></ix-spinner> `,\n})\nexport class Spinner {}\n")))}u.isMDXComponent=!0},85479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/react/spinner-large",id:"auto-generated/previews/react/spinner-large",title:"spinner-large",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/spinner-large.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/spinner-large",permalink:"/docs/auto-generated/previews/react/spinner-large",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/spinner-large.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxSpinner } from '@siemens/ix-react';\nimport React from 'react';\n\nexport const SpinnerLarge: React.FC = () => {\n  return <IxSpinner size=\"large\"></IxSpinner>;\n};\n")))}u.isMDXComponent=!0},1194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/react/spinner",id:"auto-generated/previews/react/spinner",title:"spinner",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/spinner.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/spinner",permalink:"/docs/auto-generated/previews/react/spinner",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/spinner.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxSpinner } from '@siemens/ix-react';\nimport React from 'react';\n\nexport const Spinner: React.FC = () => {\n  return <IxSpinner></IxSpinner>;\n};\n")))}u.isMDXComponent=!0},40824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/spinner-large",id:"auto-generated/previews/web-component/spinner-large",title:"spinner-large",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/spinner-large.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/spinner-large",permalink:"/docs/auto-generated/previews/web-component/spinner-large",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/spinner-large.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-spinner size="large"></ix-spinner>\n')))}u.isMDXComponent=!0},73047:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const i={},o=void 0,s={unversionedId:"auto-generated/previews/web-component/spinner",id:"auto-generated/previews/web-component/spinner",title:"spinner",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/spinner.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/spinner",permalink:"/docs/auto-generated/previews/web-component/spinner",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/spinner.md",tags:[],version:"current",frontMatter:{}},l={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-spinner></ix-spinner>\n")))}u.isMDXComponent=!0},17844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>y,frontMatter:()=>v,metadata:()=>w,toc:()=>h});var r=n(7896),a=(n(2784),n(30876)),i=n(82009),o=n(64176),s=n(75396),l=n(68747),p=n(73047),c=n(40824),u=n(1194),d=n(85479),m=n(44122),g=n(46991);const v={},f="Spinner",w={unversionedId:"controls/spinner",id:"controls/spinner",title:"Spinner",description:"Usage",source:"@site/docs/controls/spinner.md",sourceDirName:"controls",slug:"/controls/spinner",permalink:"/docs/controls/spinner",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/spinner.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Select",permalink:"/docs/controls/select"},next:{title:"Split Button",permalink:"/docs/controls/split-button"}},b={},h=[{value:"Usage",id:"usage",level:2},{value:"Large",id:"large",level:3},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],k={toc:h};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spinner"},"Spinner"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{name:"spinner",height:"5rem",mdxType:"Preview"},(0,a.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)(p.default,{mdxType:"SourceSpinner"})),(0,a.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)(u.default,{mdxType:"SourceReactSpinner"})),(0,a.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)(m.default,{mdxType:"SourceAngularSpinner"}))),(0,a.kt)("h3",{id:"large"},"Large"),(0,a.kt)(o.Z,{name:"spinner-large",height:"16rem",mdxType:"Preview"},(0,a.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)(c.default,{mdxType:"SourceSpinnerLarge"})),(0,a.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)(d.default,{mdxType:"SourceReactSpinnerLarge"})),(0,a.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)(g.default,{mdxType:"SourceAngularSpinnerLarge"}))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(s.default,{mdxType:"Props"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(l.default,{mdxType:"Events"}))}y.isMDXComponent=!0}}]);