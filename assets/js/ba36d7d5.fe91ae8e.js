"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1057],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,f=u["".concat(l,".").concat(p)]||u[p]||m[p]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,s={unversionedId:"auto-generated/previews/react/validation",id:"auto-generated/previews/react/validation",title:"validation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/validation.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/validation",permalink:"/docs/auto-generated/previews/react/validation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/validation.md",tags:[],version:"current",frontMatter:{}},l={},c=[],d={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n/*\n * COPYRIGHT (c) Siemens AG\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport { IxValidationTooltip } from \'@siemens/ix-react\';\nimport React, { useState } from \'react\';\nimport { useForm } from \'react-hook-form\';\n\nexport const Validation: React.FC = () => {\n  const [wasValidated, setValidation] = useState(false);\n  const { register, handleSubmit, formState } = useForm({\n    defaultValues: {\n      firstName: \'\',\n      lastName: \'\',\n      userName: \'\',\n    },\n  });\n\n  const onSubmit = (data: any) => {\n    console.log(data);\n    setValidation(true);\n  };\n\n  return (\n    <>\n      <form\n        className={`row g-3 needs-validation`}\n        noValidate\n        onSubmit={handleSubmit(onSubmit)}\n      >\n        <div className="col-md-4">\n          <label htmlFor="validationCustom01" className="form-label">\n            First name\n          </label>\n          <input\n            type="text"\n            className={`form-control ${\n              formState.errors.firstName ? \'is-invalid\' : \'\'\n            }`}\n            id="validationCustom01"\n            {...register(\'firstName\', {\n              required: true,\n            })}\n          />\n          <div className="valid-feedback">Looks good!</div>\n        </div>\n        <div className="col-md-4">\n          <label htmlFor="validationCustom02" className="form-label">\n            Last name\n          </label>\n          <IxValidationTooltip message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text">\n            <input\n              type="text"\n              className={`form-control ${\n                formState.errors.lastName ? \'is-invalid\' : \'\'\n              }`}\n              id="validationCustom02"\n              {...register(\'lastName\', {\n                required: true,\n              })}\n            />\n          </IxValidationTooltip>\n          <div className="valid-feedback">Looks good!</div>\n        </div>\n        <div className="col-md-4">\n          <label htmlFor="validationCustomUsername" className="form-label">\n            Username\n          </label>\n          <input\n            type="text"\n            className={`form-control ${\n              formState.errors.userName ? \'is-invalid\' : \'\'\n            }`}\n            id="validationCustomUsername"\n            aria-describedby="inputGroupPrepend"\n            {...register(\'userName\', {\n              required: true,\n            })}\n          />\n          <div className="invalid-feedback">Please choose a username.</div>\n        </div>\n        <div className="col-12">\n          <button className="btn btn-primary" type="submit">\n            Submit form\n          </button>\n        </div>\n      </form>\n    </>\n  );\n};\n')))}m.isMDXComponent=!0}}]);