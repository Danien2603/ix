"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1574],{30876:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>d});var t=r(2784);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=t.createContext({}),l=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?t.createElement(f,o(o({ref:n},s),{},{components:r})):t.createElement(f,o({ref:n},s))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},76520:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var t=r(7896),i=(r(2784),r(30876));const a={},o=void 0,c={unversionedId:"auto-generated/previews/angular/chip",id:"auto-generated/previews/angular/chip",title:"chip",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/chip.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/chip",permalink:"/siemens-ix/docs/auto-generated/previews/angular/chip",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/chip.md",tags:[],version:"current",frontMatter:{}},p={},l=[],s={toc:l};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-chip\',\n  template: `\n    <ix-chip closable outline> Primary </ix-chip>\n    <ix-chip icon="print">Primary with icon</ix-chip>\n    <ix-chip icon="print" style="width: 10rem" closable> Primary </ix-chip>\n\n    <ix-chip variant="critical" closable outline> Alarm </ix-chip>\n    <ix-chip variant="alarm" icon="print"> Alarm with icon </ix-chip>\n    <ix-chip variant="alarm" icon="print" style="width: 10rem" closable>\n      Alarm\n    </ix-chip>\n    <ix-chip variant="warning" icon="print" style="width: 10rem" closable>\n      Alarm\n    </ix-chip>\n    <ix-chip\n      background="purple"\n      color="green"\n      variant="custom"\n      icon="print"\n      style="width: 10rem"\n      closable\n    >\n      Custom\n    </ix-chip>\n  `,\n})\nexport class Chip {}\n')))}u.isMDXComponent=!0}}]);