"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2465,4302,4971,1574,6588,106],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(2784),r=n(6277);const i="tabItem_OMyP";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7896),r=n(2784),i=n(6277),o=n(89741),l=n(42244),c=n(78963),p=n(24126);const s="tabList_M0Dn",u="tabItem_ysIP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(k,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,c.U)(),[N,w]=(0,r.useState)(f),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=y[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&w(e)}const I=e=>{const t=e.currentTarget,n=C.indexOf(t),a=k[n].value;a!==N&&(T(t),w(a),null!=h&&x(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},g)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>C.push(e),onKeyDown:D,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",u,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(37949),r=n(90077),i=n(37614),o=n(2784),l=n(90943);function c(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),c=(0,r.Z)("/"),[p,s]=(0,o.useState)(""),[u,d]=(0,o.useState)((0,l.V)(t)),{preferredVersion:m}=(0,a.J)();return(0,o.useEffect)((()=>{const t=null==m?void 0:m.name;s(void 0===t||"current"===t?c+`webcomponent-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/${e.name}.html`)}),[c,null==m?void 0:m.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):o.createElement("iframe",{src:`${p}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(82009),r=n(1112),i=n(2784),o=n(77942);const l={angular:1,react:2,javascript:3,preview:4};function c(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return i.createElement(r.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Component"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[i.createElement(a.Z,{value:"preview",key:"preview"},i.createElement(o.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>l[e.props.value]-l[t.props.value])))}},18371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-chip/events",id:"auto-generated/ix-chip/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-chip/events.md",sourceDirName:"auto-generated/ix-chip",slug:"/auto-generated/ix-chip/events",permalink:"/siemens-ix/docs/auto-generated/ix-chip/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-chip/events.md",tags:[],version:"current",frontMatter:{}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"Fire event if close button is clicked"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},38120:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-chip/props",id:"auto-generated/ix-chip/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-chip/props.md",sourceDirName:"auto-generated/ix-chip",slug:"/auto-generated/ix-chip/props",permalink:"/siemens-ix/docs/auto-generated/ix-chip/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-chip/props.md",tags:[],version:"current",frontMatter:{}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active"),(0,r.kt)("td",{parentName:"tr",align:null},"Display chip in active state. Only working witht ",(0,r.kt)("inlineCode",{parentName:"td"},'variant="primary"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"active")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"background"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom color for pill. Only working for ",(0,r.kt)("inlineCode",{parentName:"td"},"variant='custom'")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"background")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"closable"),(0,r.kt)("td",{parentName:"tr",align:null},"Show close icon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"closable")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"color"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom font color for pill. Only working for ",(0,r.kt)("inlineCode",{parentName:"td"},"variant='custom'")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"icon"),(0,r.kt)("td",{parentName:"tr",align:null},"Show icon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"icon")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outline"),(0,r.kt)("td",{parentName:"tr",align:null},"Show chip with outline style"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"outline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},"Chip variant"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"variant")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"alarm" \uff5c "critical" \uff5c "custom" \uff5c "info" \uff5c "neutral" \uff5c "primary" \uff5c "success" \uff5c "warning"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'primary'"))))))}u.isMDXComponent=!0},76520:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/angular/chip",id:"auto-generated/previews/angular/chip",title:"chip",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/chip.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/chip",permalink:"/siemens-ix/docs/auto-generated/previews/angular/chip",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/chip.md",tags:[],version:"current",frontMatter:{}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-chip\',\n  template: `\n    <ix-chip closable outline> Primary </ix-chip>\n    <ix-chip icon="print">Primary with icon</ix-chip>\n    <ix-chip icon="print" style="width: 10rem" closable> Primary </ix-chip>\n\n    <ix-chip variant="critical" closable outline> Alarm </ix-chip>\n    <ix-chip variant="alarm" icon="print"> Alarm with icon </ix-chip>\n    <ix-chip variant="alarm" icon="print" style="width: 10rem" closable>\n      Alarm\n    </ix-chip>\n    <ix-chip variant="warning" icon="print" style="width: 10rem" closable>\n      Alarm\n    </ix-chip>\n    <ix-chip\n      background="purple"\n      color="green"\n      variant="custom"\n      icon="print"\n      style="width: 10rem"\n      closable\n    >\n      Custom\n    </ix-chip>\n  `,\n})\nexport class Chip {}\n')))}u.isMDXComponent=!0},38707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/react/chip",id:"auto-generated/previews/react/chip",title:"chip",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/chip.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/chip",permalink:"/siemens-ix/docs/auto-generated/previews/react/chip",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/chip.md",tags:[],version:"current",frontMatter:{}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxChip } from \'@siemens/ix-react\';\nimport React, { CSSProperties } from \'react\';\n\nexport const Chip: React.FC = () => {\n  const styled: CSSProperties = {\n    width: \'10rem\',\n  };\n  return (\n    <div className="example">\n      <IxChip closable outline>\n        Primary\n      </IxChip>\n      <IxChip icon="print">Primary with icon</IxChip>\n      <IxChip icon="print" style={styled} closable>\n        Primary\n      </IxChip>\n\n      <IxChip variant="critical" closable outline>\n        Alarm\n      </IxChip>\n      <IxChip variant="alarm" icon="print">\n        Alarm with icon\n      </IxChip>\n      <IxChip variant="alarm" icon="print" style={styled} closable>\n        Alarm\n      </IxChip>\n      <IxChip variant="warning" icon="print" style={styled} closable>\n        Alarm\n      </IxChip>\n      <IxChip\n        background="purple"\n        color="green"\n        variant="custom"\n        icon="print"\n        style={styled}\n        closable\n      >\n        Custom\n      </IxChip>\n    </div>\n  );\n};\n')))}u.isMDXComponent=!0},11998:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/chip",id:"auto-generated/previews/web-component/chip",title:"chip",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/chip.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/chip",permalink:"/siemens-ix/docs/auto-generated/previews/web-component/chip",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/chip.md",tags:[],version:"current",frontMatter:{}},c={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="example">\n  <ix-chip closable outline> Primary </ix-chip>\n  <ix-chip icon="print">Primary with icon</ix-chip>\n  <ix-chip icon="print" style="width: 10rem" closable> Primary </ix-chip>\n\n  <ix-chip variant="critical" closable outline> Alarm </ix-chip>\n  <ix-chip variant="alarm" icon="print"> Alarm with icon </ix-chip>\n  <ix-chip variant="alarm" icon="print" style="width: 10rem" closable>\n    Alarm\n  </ix-chip>\n  <ix-chip variant="warning" icon="print" style="width: 10rem" closable>\n    Alarm\n  </ix-chip>\n  <ix-chip\n    background="purple"\n    color="green"\n    variant="custom"\n    icon="print"\n    style="width: 10rem"\n    closable\n  >\n    Custom\n  </ix-chip>\n</div>\n')))}u.isMDXComponent=!0},62436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>b,frontMatter:()=>d,metadata:()=>h,toc:()=>v});var a=n(7896),r=(n(2784),n(30876)),i=n(82009),o=n(64176),l=n(38120),c=n(18371),p=n(11998),s=n(38707),u=n(76520);const d={},m="Chip",h={unversionedId:"controls/chip",id:"controls/chip",title:"Chip",description:"Usage",source:"@site/docs/controls/chip.md",sourceDirName:"controls",slug:"/controls/chip",permalink:"/siemens-ix/docs/controls/chip",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/chip.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Checkbox",permalink:"/siemens-ix/docs/controls/checkbox"},next:{title:"Datepicker",permalink:"/siemens-ix/docs/controls/date-picker"}},g={},v=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],k={toc:v};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"chip"},"Chip"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(o.Z,{name:"chip",height:"25rem",mdxType:"Preview"},(0,r.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)(p.default,{mdxType:"SourceChip"})),(0,r.kt)(i.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)(s.default,{mdxType:"SourceReactChip"})),(0,r.kt)(i.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)(u.default,{mdxType:"SourceAngularChip"}))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(l.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(c.default,{mdxType:"Events"}))}b.isMDXComponent=!0}}]);