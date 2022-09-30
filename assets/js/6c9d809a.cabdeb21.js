"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5714,9075,2949,1963,2394,4875,708,9060],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(2784),r=n(6277);const o="tabItem_OMyP";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7896),r=n(2784),o=n(6277),i=n(89741),u=n(42244),l=n(78963),s=n(24126);const p="tabList_M0Dn",d="tabItem_ysIP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:m,groupId:b,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,u.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:h}=(0,l.U)(),[x,N]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=b){const e=w[b];null!=e&&e!==x&&f.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),a=f[n].value;a!==x&&(C(t),N(a),null!=b&&h(b,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(37949),r=n(90077),o=n(37614),i=n(2784),u=n(90943);function l(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),l=(0,r.Z)("/"),[s,p]=(0,i.useState)(""),[d,c]=(0,i.useState)((0,u.V)(t)),{preferredVersion:m}=(0,a.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;p(void 0===t||"current"===t?l+`webcomponent-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/${e.name}.html`)}),[l,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,u.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),c(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${s}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(82009),r=n(1112),o=n(2784),i=n(77942);const u={angular:1,react:2,javascript:3,preview:4};function l(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return o.createElement(r.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Component"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[o.createElement(a.Z,{value:"preview",key:"preview"},o.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>u[e.props.value]-u[t.props.value])))}},44544:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/ix-button/props",id:"auto-generated/ix-button/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-button/props.md",sourceDirName:"auto-generated/ix-button",slug:"/auto-generated/ix-button/props",permalink:"/docs/auto-generated/ix-button/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-button/props.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable the button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ghost"),(0,r.kt)("td",{parentName:"tr",align:null},"Button with no background or outline"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ghost")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invisible"),(0,r.kt)("td",{parentName:"tr",align:null},"Invisible button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invisible")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outline"),(0,r.kt)("td",{parentName:"tr",align:null},"Outline button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"outline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selected"),(0,r.kt)("td",{parentName:"tr",align:null},"Show button as selected. Should be used with outline or invisible"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"button" \uff5c "submit"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'button'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},"Button varaint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"variant")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Primary" \uff5c "Secondary"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Primary'"))))))}d.isMDXComponent=!0},88339:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/angular/button-group",id:"auto-generated/previews/angular/button-group",title:"button-group",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/button-group.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/button-group",permalink:"/docs/auto-generated/previews/angular/button-group",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/button-group.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-button-group\',\n  template: `\n    <div class="btn-group">\n      <ix-button variant="Primary" outline> Left </ix-button>\n      <ix-button variant="Primary">Middle</ix-button>\n      <ix-button variant="Primary" outline> Right </ix-button>\n    </div>\n  `,\n})\nexport class ButtonGroup {}\n')))}d.isMDXComponent=!0},49761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/angular/buttons",id:"auto-generated/previews/angular/buttons",title:"buttons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/buttons.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/buttons",permalink:"/docs/auto-generated/previews/angular/buttons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/buttons.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-buttons\',\n  template: `\n    <ix-button class="m-1" variant="primary">Webcomponents button</ix-button>\n    <ix-button class="m-1" variant="secondary">Webcomponents button</ix-button>\n    <ix-button class="m-1" outline>Webcomponents button</ix-button>\n    <ix-button class="m-1" invisible>Webcomponents button</ix-button>\n  `,\n})\nexport class Buttons {}\n')))}d.isMDXComponent=!0},55658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/react/button-group",id:"auto-generated/previews/react/button-group",title:"button-group",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/button-group.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/button-group",permalink:"/docs/auto-generated/previews/react/button-group",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/button-group.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const ButtonGroup: React.FC = () => (\n  <>\n    <div className="btn-group">\n      <IxButton variant="Primary" outline>\n        Left\n      </IxButton>\n      <IxButton variant="Primary">Middle</IxButton>\n      <IxButton variant="Primary" outline>\n        Right\n      </IxButton>\n    </div>\n  </>\n);\n')))}d.isMDXComponent=!0},21963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/react/buttons",id:"auto-generated/previews/react/buttons",title:"buttons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/buttons.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/buttons",permalink:"/docs/auto-generated/previews/react/buttons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/buttons.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const Buttons: React.FC = () => {\n  return (\n    <>\n      <IxButton className="m-1" variant="Primary">\n        Webcomponents button\n      </IxButton>\n      <IxButton className="m-1" variant="Secondary">\n        Webcomponents button\n      </IxButton>\n      <IxButton className="m-1" outline>\n        Webcomponents button\n      </IxButton>\n      <IxButton className="m-1" invisible>\n        Webcomponents button\n      </IxButton>\n    </>\n  );\n};\n')))}d.isMDXComponent=!0},47305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/web-component/button-group",id:"auto-generated/previews/web-component/button-group",title:"button-group",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/button-group.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/button-group",permalink:"/docs/auto-generated/previews/web-component/button-group",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/button-group.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="btn-group">\n  <ix-button outline>Left</ix-button>\n  <ix-button>Middle</ix-button>\n  <ix-button outline>Right</ix-button>\n</div>\n')))}d.isMDXComponent=!0},50486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/web-component/buttons",id:"auto-generated/previews/web-component/buttons",title:"buttons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/buttons.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/buttons",permalink:"/docs/auto-generated/previews/web-component/buttons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/buttons.md",tags:[],version:"current",frontMatter:{}},l={},s=[],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-button class="m-1" variant="primary">Webcomponents button</ix-button>\n<ix-button class="m-1" variant="secondary">Webcomponents button</ix-button>\n<ix-button class="m-1" outline>Webcomponents button</ix-button>\n<ix-button class="m-1" invisible>Webcomponents button</ix-button>\n')))}d.isMDXComponent=!0},79498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>w,frontMatter:()=>b,metadata:()=>v,toc:()=>k});var a=n(7896),r=(n(2784),n(30876)),o=n(82009),i=n(64176),u=n(44544),l=n(50486),s=n(47305),p=n(21963),d=n(55658),c=n(49761),m=n(88339);const b={title:"Button"},g=void 0,v={unversionedId:"controls/button",id:"controls/button",title:"Button",description:"Usage",source:"@site/docs/controls/button.md",sourceDirName:"controls",slug:"/controls/button",permalink:"/docs/controls/button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/button.md",tags:[],version:"current",frontMatter:{title:"Button"},sidebar:"mySidebar",previous:{title:"Breadcrumb",permalink:"/docs/controls/breadcrumb"},next:{title:"Category Filter",permalink:"/docs/controls/category-filter"}},f={},k=[{value:"Usage",id:"usage",level:2},{value:"Default buttons",id:"default-buttons",level:3},{value:"Button group",id:"button-group",level:3},{value:"Properties",id:"properties",level:2}],y={toc:k};function w(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"default-buttons"},"Default buttons"),(0,r.kt)(i.Z,{name:"buttons",mdxType:"Preview"},(0,r.kt)(o.Z,{value:"angular",key:"angular",mdxType:"TabItem"},(0,r.kt)(c.default,{mdxType:"AngularButtons"})),(0,r.kt)(o.Z,{value:"react",key:"react",mdxType:"TabItem"},(0,r.kt)(p.default,{mdxType:"ReactButtons"})),(0,r.kt)(o.Z,{value:"javascript",key:"javascript",mdxType:"TabItem"},(0,r.kt)(l.default,{mdxType:"WebComponentButtons"}))),(0,r.kt)("h3",{id:"button-group"},"Button group"),(0,r.kt)(i.Z,{name:"button-group",mdxType:"Preview"},(0,r.kt)(o.Z,{value:"angular",key:"angular",mdxType:"TabItem"},(0,r.kt)(m.default,{mdxType:"AngularButtonGroup"})),(0,r.kt)(o.Z,{value:"react",key:"react",mdxType:"TabItem"},(0,r.kt)(d.default,{mdxType:"ReactButtonGroup"})),(0,r.kt)(o.Z,{value:"javascript",key:"javascript",mdxType:"TabItem"},(0,r.kt)(s.default,{mdxType:"WebComponentButtonGroup"}))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)(u.default,{mdxType:"Props"}))}w.isMDXComponent=!0}}]);