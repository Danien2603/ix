"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[739],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4146:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},c=void 0,i={unversionedId:"auto-generated/previews/web-component/aggrid",id:"auto-generated/previews/web-component/aggrid",title:"aggrid",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/aggrid.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/aggrid",permalink:"/docs/auto-generated/previews/web-component/aggrid",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/aggrid.md",tags:[],version:"current",frontMatter:{}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<div\n  style=\"height: 12rem; width: 100%\"\n  id=\"grid-container\"\n  class=\"ag-theme-alpine-dark ag-theme-ix\"\n></div>\n<script>\n  (async function () {\n    const container = document.querySelector('#grid-container');\n\n    const gridOptions = {\n      columnDefs: [\n        { field: 'make', resizable: true, checkboxSelection: true },\n        { field: 'model', resizable: true, sortable: true, filter: true },\n        { field: 'price', resizable: true },\n      ],\n      rowData: [\n        { make: 'Toyota', model: 'Celica', price: 35000, checked: false },\n        { make: 'Ford', model: 'Mondeo', price: 32000, checked: true },\n        { make: 'Porsche', model: 'Boxster', price: 72000, checked: false },\n      ],\n      rowSelection: 'multiple',\n      suppressCellFocus: true,\n      checkboxSelection: true,\n    };\n\n    new agGrid.Grid(container, gridOptions);\n  })();\n<\/script>\n")))}u.isMDXComponent=!0}}]);