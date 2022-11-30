"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90658,99582,73136,23442,3995,14294,30006],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,g=p["".concat(u,".").concat(c)]||p[c]||m[c]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(2784),r=n(6277);const o="tabItem_OMyP";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7896),r=n(2784),o=n(6277),i=n(89741),l=n(42244),u=n(78963),s=n(24126);const d="tabList_M0Dn",m="tabItem_ysIP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:c,groupId:g,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:N}=(0,u.U)(),[w,y]=(0,r.useState)(h),T=[],{blockElementScrollPositionUntilNextRender:M}=(0,s.o5)();if(null!=g){const e=x[g];null!=e&&e!==w&&f.some((t=>t.value===e))&&y(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==w&&(M(t),y(a),null!=g&&N(g,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},b)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(37949),r=n(90077),o=n(37614),i=n(2784),l=n(90943);function u(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),u=(0,r.Z)("/"),[s,d]=(0,i.useState)(""),[m,p]=(0,i.useState)((0,l.V)(t)),{preferredVersion:c}=(0,a.J)();return(0,i.useEffect)((()=>{const t=null==c?void 0:c.name;d(void 0===t||"current"===t?u+`webcomponent-examples/dist/preview-examples/${e.name}.html`:u+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[u,null==c?void 0:c.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==c?void 0:c.name):i.createElement("iframe",{src:`${s}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(82009),r=n(1112),o=n(2784),i=n(77942);const l={angular:1,react:2,javascript:3,preview:4};function u(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return o.createElement(r.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[o.createElement(a.Z,{value:"preview",key:"preview"},o.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>l[e.props.value]-l[t.props.value])))}},28425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/ix-menu-about-item/props",id:"auto-generated/ix-menu-about-item/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-menu-about-item/props.md",sourceDirName:"auto-generated/ix-menu-about-item",slug:"/auto-generated/ix-menu-about-item/props",permalink:"/docs/auto-generated/ix-menu-about-item/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-about-item/props.md",tags:[],version:"current",frontMatter:{}},u={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"About Item label"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))))}m.isMDXComponent=!0},66382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/ix-menu-about/events",id:"auto-generated/ix-menu-about/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-menu-about/events.md",sourceDirName:"auto-generated/ix-menu-about",slug:"/auto-generated/ix-menu-about/events",permalink:"/docs/auto-generated/ix-menu-about/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-about/events.md",tags:[],version:"current",frontMatter:{}},u={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"About and Legal closed"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MouseEvent")),(0,r.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},12768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/ix-menu-about/props",id:"auto-generated/ix-menu-about/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-menu-about/props.md",sourceDirName:"auto-generated/ix-menu-about",slug:"/auto-generated/ix-menu-about/props",permalink:"/docs/auto-generated/ix-menu-about/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-about/props.md",tags:[],version:"current",frontMatter:{}},u={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"activeTabLabel"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Active tab"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"active-tab-label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"label"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Label of first tab"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"label")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'About & legal information'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{className:"Api__Table"},(0,r.kt)("div",null,"Internal"),(0,r.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"show")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}m.isMDXComponent=!0},35722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/about-and-legal",id:"auto-generated/previews/angular/about-and-legal",title:"about-and-legal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/about-and-legal.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/about-and-legal",permalink:"/docs/auto-generated/previews/angular/about-and-legal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/about-and-legal.md",tags:[],version:"current",frontMatter:{}},u={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';\n\n@Component({\n  selector: 'app-about-and-legal',\n  template: `\n    <ix-basic-navigation>\n      <ix-menu #menu>\n        <ix-menu-about>\n          <ix-menu-about-item label=\"Tab 1\">Content 1</ix-menu-about-item>\n          <ix-menu-about-item label=\"Tab 2\">Content 2</ix-menu-about-item>\n        </ix-menu-about>\n      </ix-menu>\n    </ix-basic-navigation>\n  `,\n})\nexport class AboutAndLegal implements AfterViewInit {\n  @ViewChild('menu', { read: ElementRef })\n  menuRef!: ElementRef<HTMLIxMenuElement>;\n\n  ngAfterViewInit() {\n    const { nativeElement } = this.menuRef;\n    nativeElement.toggleAbout(true);\n  }\n}\n")))}m.isMDXComponent=!0},62314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/react/about-and-legal",id:"auto-generated/previews/react/about-and-legal",title:"about-and-legal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/about-and-legal.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/about-and-legal",permalink:"/docs/auto-generated/previews/react/about-and-legal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/about-and-legal.md",tags:[],version:"current",frontMatter:{}},u={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport {\n    IxBasicNavigation,\n    IxMenu,\n    IxMenuAbout,\n    IxMenuAboutItem\n} from '@siemens/ix-react';\nimport React, { useLayoutEffect, useRef } from 'react';\n\nexport const AboutAndLegal: React.FC = () => {\n  const ref = useRef<HTMLIxMenuElement>(null);\n\n  useLayoutEffect(() => {\n    const element = ref.current;\n    if (element) {\n      element.toggleAbout(true);\n    }\n  }, []);\n\n  return (\n    <IxBasicNavigation>\n      <IxMenu ref={ref}>\n        <IxMenuAbout>\n          <IxMenuAboutItem label=\"Tab 1\">Content 1</IxMenuAboutItem>\n          <IxMenuAboutItem label=\"Tab 2\">Content 2</IxMenuAboutItem>\n        </IxMenuAbout>\n      </IxMenu>\n    </IxBasicNavigation>\n  );\n};\n")))}m.isMDXComponent=!0},74437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/web-component/about-and-legal",id:"auto-generated/previews/web-component/about-and-legal",title:"about-and-legal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/about-and-legal.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/about-and-legal",permalink:"/docs/auto-generated/previews/web-component/about-and-legal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/about-and-legal.md",tags:[],version:"current",frontMatter:{}},u={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<ix-basic-navigation>\n  <ix-menu>\n    <ix-menu-about>\n      <ix-menu-about-item label=\"Tab 1\">Content 1</ix-menu-about-item>\n      <ix-menu-about-item label=\"Tab 2\">Content 2</ix-menu-about-item>\n    </ix-menu-about>\n  </ix-menu>\n</ix-basic-navigation>\n\n<script>\n  (async function () {\n    await window.customElements.whenDefined('ix-menu');\n    const instance = document.querySelector('ix-menu');\n    await instance.toggleAbout(true);\n  })();\n<\/script>\n")))}m.isMDXComponent=!0},5626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>h,frontMatter:()=>c,metadata:()=>b,toc:()=>f});var a=n(7896),r=(n(2784),n(30876)),o=n(82009),i=(n(77942),n(12768)),l=n(66382),u=n(28425),s=n(64176),d=n(74437),m=n(62314),p=n(35722);const c={sidebar_position:3,title:"About and legal"},g=void 0,b={unversionedId:"controls/navigation/about-and-legal",id:"controls/navigation/about-and-legal",title:"About and legal",description:"Usage",source:"@site/docs/controls/navigation/about-and-legal.md",sourceDirName:"controls/navigation",slug:"/controls/navigation/about-and-legal",permalink:"/docs/controls/navigation/about-and-legal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/navigation/about-and-legal.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"About and legal"},sidebar:"mySidebar",previous:{title:"Navigation Menu",permalink:"/docs/controls/navigation/vertical-tabs"},next:{title:"Settings",permalink:"/docs/controls/navigation/settings"}},v={},f=[{value:"Usage",id:"usage",level:2},{value:"Change language of legal links",id:"change-language-of-legal-links",level:2},{value:"Properties (ix-menu-about)",id:"properties-ix-menu-about",level:2},{value:"Props",id:"props",level:4},{value:"Events",id:"events",level:4},{value:"Properties (ix-menu-about-item)",id:"properties-ix-menu-about-item",level:2},{value:"Props",id:"props-1",level:4}],k={toc:f};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(s.Z,{name:"about-and-legal",height:"30rem",width:"100%",noMargin:!0,mdxType:"Preview"},(0,r.kt)(o.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)(d.default,{mdxType:"SourceWebComponent"})),(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)(m.default,{mdxType:"SourceReact"})),(0,r.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)(p.default,{mdxType:"SourceAngular"}))),(0,r.kt)("h2",{id:"change-language-of-legal-links"},"Change language of legal links"),(0,r.kt)("p",null,"Supported language codes are ",(0,r.kt)("inlineCode",{parentName:"p"},"'global/en' | 'global/es' | 'de/de' | 'cn/zh'")),(0,r.kt)("h2",{id:"properties-ix-menu-about"},"Properties (ix-menu-about)"),(0,r.kt)("h4",{id:"props"},"Props"),(0,r.kt)(i.default,{mdxType:"Props"}),(0,r.kt)("h4",{id:"events"},"Events"),(0,r.kt)(l.default,{mdxType:"Events"}),(0,r.kt)("h2",{id:"properties-ix-menu-about-item"},"Properties (ix-menu-about-item)"),(0,r.kt)("h4",{id:"props-1"},"Props"),(0,r.kt)(u.default,{mdxType:"PropsItem"}))}h.isMDXComponent=!0}}]);