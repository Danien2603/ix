"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[660,8857,4166,2553,4636,3932,4841,7593,1021],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(2784),r=n(6277);const i="tabItem_OMyP";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7896),r=n(2784),i=n(6277),o=n(89741),l=n(42244),s=n(78963),d=n(24126);const c="tabList_M0Dn",m="tabItem_ysIP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:u,groupId:h,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=u??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,l.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===p?p:p??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,s.U)(),[b,T]=(0,r.useState)(w),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=h){const e=y[h];null!=e&&e!==b&&f.some((t=>t.value===e))&&T(e)}const I=e=>{const t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==b&&(C(t),T(a),null!=h&&x(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},g)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,key:t,ref:e=>N.push(e),onKeyDown:D,onFocus:I,onClick:I},o,{className:(0,i.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":b===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===b))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}function u(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(37949),r=n(90077),i=n(37614),o=n(2784),l=n(90943);function s(e){const t=(0,i.Z)(),[n]=(0,o.useState)(!1),s=(0,r.Z)("/"),[d,c]=(0,o.useState)(""),[m,p]=(0,o.useState)((0,l.V)(t)),{preferredVersion:u}=(0,a.J)();return(0,o.useEffect)((()=>{const t=null==u?void 0:u.name;c(void 0===t||"current"===t?s+`webcomponent-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/${e.name}.html`)}),[s,null==u?void 0:u.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==u?void 0:u.name):o.createElement("iframe",{src:`${d}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(82009),r=n(1112),i=n(2784),o=n(77942);const l={angular:1,react:2,javascript:3,preview:4};function s(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return i.createElement(r.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Component"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[i.createElement(a.Z,{value:"preview",key:"preview"},i.createElement(o.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>l[e.props.value]-l[t.props.value])))}},22603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-tree/events",id:"auto-generated/ix-tree/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/docs/auto-generated/ix-tree/events.md",sourceDirName:"auto-generated/ix-tree",slug:"/auto-generated/ix-tree/events",permalink:"/docs/auto-generated/ix-tree/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tree/events.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contextChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Context changed"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ [x: string]: TreeItemContext; }")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodeRemoved"),(0,r.kt)("td",{parentName:"tr",align:null},"Emits removed nodes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"any")),(0,r.kt)("td",{parentName:"tr",align:null})))))}m.isMDXComponent=!0},75093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/ix-tree/props",id:"auto-generated/ix-tree/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-tree/props.md",sourceDirName:"auto-generated/ix-tree",slug:"/auto-generated/ix-tree/props",permalink:"/docs/auto-generated/ix-tree/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tree/props.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"context"),(0,r.kt)("td",{parentName:"tr",align:null},"Selection and collapsed state management"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ [x: string]: TreeItemContext; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model"),(0,r.kt)("td",{parentName:"tr",align:null},"Tree modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{ [x: string]: TreeItem<any>; }")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"renderItem"),(0,r.kt)("td",{parentName:"tr",align:null},"Render function of tree items"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"<T = any>(index: number, data: T, dataList: T[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"root"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial root element will not be rendered"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"root")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))))}m.isMDXComponent=!0},53782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/angular/tree-custom",id:"auto-generated/previews/angular/tree-custom",title:"tree-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tree-custom.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tree-custom",permalink:"/docs/auto-generated/previews/angular/tree-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tree-custom.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\nimport { TreeModel } from '@siemens/ix';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\n@Component({\n  selector: 'app-tree',\n  styles: [\n    `\n      .example {\n        display: block;\n        position: relative;\n        height: 32rem;\n        width: 100%;\n      }\n    `,\n  ],\n  template: `<div class=\"example\">\n    <ix-tree root=\"root\" [model]=\"model\" [renderItem]=\"treeItem\"></ix-tree>\n    <ng-template #treeItem let-item>\n      <div class=\"d-flex align-items-center\">\n        <ix-icon [name]=\"item.icon\" size=\"16\" class=\"me-2\"></ix-icon>\n        {{ item.name }}\n      </div>\n    </ng-template>\n  </div>`,\n})\nexport class TreeCustom {\n  model: TreeModel<TreeData> = {\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: 'star',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: 'cut',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: 'print',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  };\n}\n")))}m.isMDXComponent=!0},21224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/angular/tree",id:"auto-generated/previews/angular/tree",title:"tree",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tree.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tree",permalink:"/docs/auto-generated/previews/angular/tree",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tree.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\nimport { TreeModel } from '@siemens/ix';\n\n@Component({\n  selector: 'app-tree',\n  styles: [\n    `\n      .example {\n        display: block;\n        position: relative;\n        height: 32rem;\n        width: 100%;\n      }\n    `,\n  ],\n  template: `<div class=\"example\">\n    <ix-tree root=\"root\" [model]=\"model\"></ix-tree>\n  </div>`,\n})\nexport class Tree {\n  model: TreeModel<{\n    name: string;\n  }> = {\n    root: {\n      id: 'root',\n      data: {\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  };\n}\n")))}m.isMDXComponent=!0},44108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/react/tree-custom",id:"auto-generated/previews/react/tree-custom",title:"tree-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tree-custom.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tree-custom",permalink:"/docs/auto-generated/previews/react/tree-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tree-custom.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { TreeModel } from '@siemens/ix';\nimport { IxIcon, IxTree } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\nexport const TreeCustom: React.FC = () => {\n  const [model] = useState<TreeModel<TreeData>>({\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: 'star',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: 'cut',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: 'print',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  });\n  return (\n    <div\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n        height: '40rem',\n      }}\n    >\n      <IxTree\n        root=\"root\"\n        model={model}\n        renderItem={(data: TreeData) => (\n          <div className=\"d-flex align-items-center\">\n            <IxIcon name={data.icon} size=\"16\" className=\"me-2\" /> {data.name}\n          </div>\n        )}\n      ></IxTree>\n    </div>\n  );\n};\n")))}m.isMDXComponent=!0},73901:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/react/tree",id:"auto-generated/previews/react/tree",title:"tree",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/tree.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/tree",permalink:"/docs/auto-generated/previews/react/tree",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/tree.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { TreeModel } from '@siemens/ix';\nimport { IxTree } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\ntype TreeData = {\n  name: string;\n  icon: string;\n};\n\nexport const Tree: React.FC = () => {\n  const [model] = useState<TreeModel<TreeData>>({\n    root: {\n      id: 'root',\n      data: {\n        icon: '',\n        name: '',\n      },\n      hasChildren: true,\n      children: ['sample'],\n    },\n    sample: {\n      id: 'sample',\n      data: {\n        name: 'Sample',\n        icon: 'star',\n      },\n      hasChildren: true,\n      children: ['sample-child-1', 'sample-child-2'],\n    },\n    'sample-child-1': {\n      id: 'sample-child-1',\n      data: {\n        name: 'Sample Child 1',\n        icon: 'cut',\n      },\n      hasChildren: false,\n      children: [],\n    },\n    'sample-child-2': {\n      id: 'sample-child-2',\n      data: {\n        name: 'Sample Child 2',\n        icon: 'print',\n      },\n      hasChildren: false,\n      children: [],\n    },\n  });\n  return (\n    <div\n      style={{\n        display: 'block',\n        position: 'relative',\n        width: '100%',\n        height: '40rem',\n      }}\n    >\n      <IxTree root=\"root\" model={model}></IxTree>\n    </div>\n  );\n};\n")))}m.isMDXComponent=!0},22108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/tree-custom",id:"auto-generated/previews/web-component/tree-custom",title:"tree-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tree-custom.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tree-custom",permalink:"/docs/auto-generated/previews/web-component/tree-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tree-custom.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\n<div style=\"height: 8rem; width: 100%\">\n  <ix-tree root=\"root\" id=\"tree\"></ix-tree>\n</div>\n\n<script type=\"text/javascript\">\n  (async function () {\n    await window.customElements.whenDefined('ix-tree');\n    const tree = document.getElementById('tree');\n\n    tree.renderItem = (index, item, dataList, context, update) => {\n      const el = document.createElement('ix-tree-item');\n      el.hasChildren = item.hasChildren;\n      el.context = context;\n\n      const div = document.createElement('div');\n      div.style.display = 'flex';\n\n      const name = document.createElement('span');\n      const icon = document.createElement('ix-icon');\n      icon.name = item.data.icon;\n      icon.style.marginRight = '0.5rem';\n\n      div.appendChild(icon);\n      div.appendChild(name);\n\n      name.innerText = item.data.name;\n\n      el.appendChild(div);\n\n      update((updateTreeItem) => {\n        name.innerText = updateTreeItem.data.name;\n      });\n\n      return el;\n    };\n\n    tree.model = {\n      root: {\n        id: 'root',\n        data: null,\n        hasChildren: true,\n        children: ['sample'],\n      },\n      sample: {\n        id: 'sample',\n        data: {\n          name: 'Sample',\n          icon: 'star',\n        },\n        hasChildren: true,\n        children: ['sample-child-1', 'sample-child-2'],\n      },\n      'sample-child-1': {\n        id: 'sample-child-1',\n        data: {\n          name: 'Sample Child 1',\n          icon: 'cut',\n        },\n        hasChildren: false,\n        children: [],\n      },\n      'sample-child-2': {\n        id: 'sample-child-2',\n        data: {\n          name: 'Sample Child 2',\n          icon: 'print',\n        },\n        hasChildren: false,\n        children: [],\n      },\n    };\n  })();\n<\/script>\n")))}m.isMDXComponent=!0},10382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7896),r=(n(2784),n(30876));const i={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/tree",id:"auto-generated/previews/web-component/tree",title:"tree",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/tree.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/tree",permalink:"/docs/auto-generated/previews/web-component/tree",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/tree.md",tags:[],version:"current",frontMatter:{}},s={},d=[],c={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"\n<div style=\"height: 8rem; width: 100%\">\n  <ix-tree root=\"root\" id=\"tree\"></ix-tree>\n</div>\n\n<script type=\"text/javascript\">\n  (async function () {\n    await window.customElements.whenDefined('ix-tree');\n    const tree = document.getElementById('tree');\n\n    tree.model = {\n      root: {\n        id: 'root',\n        data: null,\n        hasChildren: true,\n        children: ['sample'],\n      },\n      sample: {\n        id: 'sample',\n        data: {\n          name: 'Sample',\n        },\n        hasChildren: true,\n        children: ['sample-child-1', 'sample-child-2'],\n      },\n      'sample-child-1': {\n        id: 'sample-child-1',\n        data: {\n          name: 'Sample Child 1',\n        },\n        hasChildren: false,\n        children: [],\n      },\n      'sample-child-2': {\n        id: 'sample-child-2',\n        data: {\n          name: 'Sample Child 2',\n        },\n        hasChildren: false,\n        children: [],\n      },\n    };\n  })();\n<\/script>\n")))}m.isMDXComponent=!0},82130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>x,frontMatter:()=>g,metadata:()=>f,toc:()=>w});var a=n(7896),r=(n(2784),n(30876)),i=n(64176),o=n(75093),l=n(22603),s=n(82009),d=n(10382),c=n(22108),m=n(73901),p=n(44108),u=n(21224),h=n(53782);const g={},v="Tree",f={unversionedId:"controls/tree",id:"controls/tree",title:"Tree",description:"Usage",source:"@site/docs/controls/tree.md",sourceDirName:"controls",slug:"/controls/tree",permalink:"/docs/controls/tree",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/tree.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Toggle",permalink:"/docs/controls/toggle"},next:{title:"Upload",permalink:"/docs/controls/upload"}},k={},w=[{value:"Usage",id:"usage",level:2},{value:"Custom tree node",id:"custom-tree-node",level:3},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}],y={toc:w};function x(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tree"},"Tree"),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(i.Z,{name:"tree",height:"16rem",mdxType:"Preview"},(0,r.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)(d.default,{mdxType:"SourceTree"})),(0,r.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)(m.default,{mdxType:"SourceReactTree"})),(0,r.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)(u.default,{mdxType:"SourceAngularTree"}))),(0,r.kt)("h3",{id:"custom-tree-node"},"Custom tree node"),(0,r.kt)(i.Z,{name:"tree-custom",height:"16rem",mdxType:"Preview"},(0,r.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)(c.default,{mdxType:"SourceTreeCustom"})),(0,r.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)(p.default,{mdxType:"SourceReactTreeCustom"})),(0,r.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)(h.default,{mdxType:"SourceAngularTreeCustom"}))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(o.default,{mdxType:"Props"}),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)(l.default,{mdxType:"Events"}))}x.isMDXComponent=!0}}]);