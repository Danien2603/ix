"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[56287],{56287:(e,t,i)=>{i.r(t),i.d(t,{ix_select:()=>l,ix_select_item:()=>n});var s=i(19656);const l=class{constructor(e){(0,s.r)(this,e),this.itemSelectionChange=(0,s.c)(this,"itemSelectionChange",7),this.addItem=(0,s.c)(this,"addItem",7),this.selectedIndices=[],this.allowClear=!1,this.mode="single",this.editable=!1,this.disabled=!1,this.readonly=!1,this.i18nPlaceholder="Select an option",this.i18nPlaceholderEditable="Type of select option",this.i18nSelectListHeader="Please select an option",this.dropdownShow=!1,this.value=void 0,this.dropdownWrapperRef=void 0,this.dropdownAnchor=void 0,this.isDropdownEmpty=!1,this.hasFocus=!1,this.navigationItem=void 0,this.inputFilterText=void 0,this.inputValue=void 0}get items(){return Array.from(this.hostElement.querySelectorAll("ix-select-item"))}get selectedItems(){return this.items.filter((e=>e.selected))}get addItemButton(){return this.hostElement.querySelector(".add-item")}get isSingleMode(){return"single"===this.mode}get isMultipleMode(){return"multiple"===this.mode}watchSelectedIndices(e){e?Array.isArray(e)?this.selectValue([...e]):this.selectValue([e]):this.selectValue([])}onItemClicked(e){const t=e.detail;this.emitItemClick(t)}watchInputText(e){this.editable&&this.itemExists(e)}emitItemClick(e){this.isMultipleMode&&Array.isArray(this.selectedIndices)?this.selectedIndices.includes(e)?this.selectedIndices=this.selectedIndices.filter((t=>t!==e)):this.selectedIndices=[...this.selectedIndices,e]:this.selectedIndices=[e],this.selectValue(this.selectedIndices),this.itemSelectionChange.emit(this.selectedIndices)}emitAddItem(e){if(""===e.trim())return;const t=document.createElement("ix-select-item");t.value=e,t.label=e,this.addItemRef.appendChild(t),this.clearInput(),this.emitItemClick(e),this.addItem.emit(e)}selectValue(e){var t;this.items.forEach((t=>{t.selected=e.some((e=>e===t.value))})),this.value=this.selectedItems.map((e=>e.label)),this.isSingleMode?this.inputValue=(null===(t=this.value)||void 0===t?void 0:t.length)?this.value[0]:null:this.inputValue=null}componentWillLoad(){this.selectedIndices&&this.selectValue(Array.isArray(this.selectedIndices)?this.selectedIndices:[this.selectedIndices])}componentDidLoad(){this.labelMutationObserver=new MutationObserver((()=>{this.selectValue(Array.isArray(this.selectedIndices)?this.selectedIndices:[this.selectedIndices])})),this.labelMutationObserver.observe(this.hostElement,{subtree:!0,attributes:!0,attributeFilter:["label"]})}disconnectedCallback(){this.labelMutationObserver&&this.labelMutationObserver.disconnect()}itemExists(e){return this.items.find((t=>t.label===e))}dropdownVisibilityChanged(e){this.dropdownShow=e.detail,e.detail&&(this.inputRef.focus(),this.inputRef.select(),this.navigationItem=this.items[0],this.setHoverEffectForNavigatedSelectItem(),this.removeHiddenFromItems()),this.hasFocus=e.detail}async onKeyDown(e){this.dropdownShow&&("ArrowDown"!==e.code&&"ArrowUp"!==e.code||this.onArrowNavigation(e),"Enter"!==e.code&&"NumpadEnter"!==e.code||await this.onEnterNavigation(),"Escape"===e.code&&(this.dropdownShow=!1))}async onEnterNavigation(){var e,t;this.editable&&!this.itemExists(this.inputFilterText)&&(this.emitAddItem(this.inputFilterText),this.navigationItem=this.items[this.items.length-1]),null===(e=this.navigationItem)||void 0===e||e.onItemClick(),await(null===(t=this.dropdownRef)||void 0===t?void 0:t.updatePosition()),this.isSingleMode&&!this.editable&&(this.dropdownShow=!1)}onArrowNavigation(e){e.stopPropagation(),e.preventDefault();const t=this.items.filter((e=>!e.classList.contains("d-none"))),i=t.indexOf(this.navigationItem);"ArrowDown"===e.code&&i<t.length-1?this.navigationItem=t[i+1]:"ArrowUp"===e.code&&i>0&&(this.navigationItem=t[i-1]),this.setHoverEffectForNavigatedSelectItem()}setHoverEffectForNavigatedSelectItem(){this.items.forEach((e=>{e.hover=e===this.navigationItem}))}filterItemsWithTypeahead(){this.inputFilterText=this.inputRef.value,this.inputFilterText?this.items.forEach((e=>{e.classList.remove("d-none"),e.label.toLowerCase().includes(this.inputFilterText.toLowerCase())||e.classList.add("d-none")})):this.removeHiddenFromItems(),this.isDropdownEmpty=this.items.every((e=>e.classList.contains("d-none")))}removeHiddenFromItems(){this.items.forEach((e=>{e.classList.remove("d-none")}))}clearInput(){this.inputRef.value="",this.inputFilterText=""}clear(){this.clearInput(),this.value=[],this.selectedIndices=[],this.itemSelectionChange.emit(null)}render(){var e,t,i;return(0,s.h)(s.H,null,(0,s.h)("div",{class:{"form-control":!0,select:!0,focus:this.hasFocus,editable:this.editable,disabled:this.disabled,readonly:this.readonly},ref:e=>{this.dropdownAnchor=e,this.editable||(this.dropdownWrapperRef=e)}},(0,s.h)("div",{class:"input-container"},this.isMultipleMode?(0,s.h)("div",{class:"chips"},null===(e=this.selectedItems)||void 0===e?void 0:e.map((e=>(0,s.h)("ix-filter-chip",{disabled:this.disabled||this.readonly,onCloseClick:t=>{t.preventDefault(),t.stopPropagation(),this.emitItemClick(e.value)}},e.label)))):null,(0,s.h)("div",{class:"trigger"},(0,s.h)("input",{"data-testid":"input",disabled:this.disabled,readOnly:this.readonly,type:"text",class:{"allow-clear":this.allowClear&&!!(null===(t=this.value)||void 0===t?void 0:t.length)},placeholder:this.editable?this.i18nPlaceholderEditable:this.i18nPlaceholder,value:this.inputValue,ref:e=>this.inputRef=e,onInput:()=>this.filterItemsWithTypeahead()}),this.disabled||this.readonly?null:(0,s.h)("div",{class:"chevron-down-container",ref:e=>{this.editable&&(this.dropdownWrapperRef=e)}},(0,s.h)("ix-icon",{class:"chevron",name:"chevron-down-small"})))),this.allowClear&&((null===(i=this.value)||void 0===i?void 0:i.length)||this.inputFilterText)?(0,s.h)("ix-icon-button",{class:"clear",icon:"clear",ghost:!0,oval:!0,size:"24",onClick:e=>{e.preventDefault(),e.stopPropagation(),this.clear()}}):null),(0,s.h)("ix-dropdown",{ref:e=>this.dropdownRef=e,show:this.dropdownShow,style:{width:"100%"},class:{"d-none":this.disabled||this.readonly||this.isDropdownEmpty&&!this.editable},anchor:this.dropdownAnchor,trigger:this.dropdownWrapperRef,onShowChanged:e=>this.dropdownVisibilityChanged(e),placement:"bottom",positioningStrategy:"fixed",adjustDropdownWidthToReferenceWidth:!0},(0,s.h)("div",{class:"select-list-header"},this.i18nSelectListHeader),(0,s.h)("slot",null),(0,s.h)("div",{ref:e=>this.addItemRef=e,class:"d-contents"}),this.itemExists(this.inputFilterText)?"":(0,s.h)("ix-dropdown-item",{"data-testid":"add-item",icon:"plus",class:{"add-item":!0,"d-none":!(this.editable&&this.inputFilterText)},label:this.inputFilterText,onItemClick:e=>{e.preventDefault(),e.stopPropagation(),this.emitAddItem(this.inputFilterText)}})))}get hostElement(){return(0,s.g)(this)}static get watchers(){return{selectedIndices:["watchSelectedIndices"],inputFilterText:["watchInputText"]}}};l.style=".sc-ix-select-h{display:inline-block;position:relative;height:auto;width:100%}.sc-ix-select-h .select.sc-ix-select{position:relative;display:flex;align-items:center;height:auto;background-color:var(--theme-input--background);border:var(--theme-input--border-thickness) solid var(--theme-input--border-color);border-radius:var(--theme-input--border-radius);padding:0 0 0 0.5rem}.sc-ix-select-h .select.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .select.sc-ix-select:not(.disabled):not(:disabled):hover{background-color:var(--theme-input--background--hover);border-color:var(--theme-input--border-color--hover)}.sc-ix-select-h .select.sc-ix-select:focus-within{background-color:var(--theme-input--background--focus);border-color:var(--theme-input--border-color--focus);outline:1px solid #119fff !important;outline-offset:var(--theme-input--focus--outline-offset)}.sc-ix-select-h .trigger.sc-ix-select{display:flex;align-items:center;flex-grow:1;height:100%}.sc-ix-select-h .input-container.sc-ix-select{display:flex;position:relative;align-items:flex-start;height:calc(2rem - 2 * var(--theme-input--border-thickness));width:100%}.sc-ix-select-h .input-container.allow-clear.sc-ix-select{padding-right:3.5rem}.sc-ix-select-h .input-container.sc-ix-select .chips.sc-ix-select{position:relative;display:flex;align-items:center;flex-wrap:wrap;height:100%;max-width:70%;flex-shrink:0;margin:auto}.sc-ix-select-h .input-container.sc-ix-select .chips.sc-ix-select>ix-filter-chip.sc-ix-select{margin:0.1rem}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-font-smoothing:antialiased;-moz-osx-font-smooting:grayscale;font-family:Siemens Sans, sans-serif;font-size:0.875rem;font-weight:400;line-height:1.429em;color:var(--theme-color-std-text);background:transparent;height:1.75rem;width:100%;-webkit-margin-end:2rem;margin-inline-end:2rem}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select,.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select:hover,.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select:focus-visible{border:none;outline:none}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select::-moz-placeholder{color:var(--theme-input-select-icon--color)}.sc-ix-select-h .input-container.sc-ix-select input.sc-ix-select::placeholder{color:var(--theme-input-select-icon--color)}.sc-ix-select-h .input-container.sc-ix-select input.hide-placeholder.sc-ix-select::-moz-placeholder{opacity:0}.sc-ix-select-h .input-container.sc-ix-select input.hide-placeholder.sc-ix-select::placeholder{opacity:0}.sc-ix-select-h .chevron-down-container.sc-ix-select{display:flex;align-items:center;justify-content:center;width:2rem;min-width:2rem;height:100%}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled):hover{background-color:var(--theme-btn-invisible-secondary--background--hover)}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-select-h .editable.sc-ix-select .chevron-down-container.sc-ix-select:not(.disabled):not(:disabled):active{background-color:var(--theme-btn-invisible-secondary--background--active)}.sc-ix-select-h .clear.sc-ix-select{position:absolute;right:2rem}.sc-ix-select-h .add-item.sc-ix-select{display:flex;justify-content:flex-start;align-items:center;position:relative;width:100%}.sc-ix-select-h .select-list-header.sc-ix-select{display:flex;align-items:center;height:2rem;color:var(--theme-select-list-item-hint--color);margin:0 0.5rem 0 2rem}.sc-ix-select-h ix-dropdown.sc-ix-select{background-color:var(--theme-select-list--background)}";const n=class{constructor(e){(0,s.r)(this,e),this.itemClick=(0,s.c)(this,"itemClick",7),this.label=void 0,this.value=void 0,this.selected=!1,this.hover=!1}async onItemClick(e){null==e||e.preventDefault(),null==e||e.stopPropagation(),this.itemClick.emit(this.value)}componentDidRender(){if(!this.value)throw Error("ix-select-item must have a `value` property")}render(){return(0,s.h)(s.H,null,(0,s.h)("ix-dropdown-item",{checked:this.selected,hover:this.hover,label:this.label?this.label:this.value,onItemClick:e=>this.onItemClick(e)}))}get hostElement(){return(0,s.g)(this)}};n.style=".sc-ix-select-item-h{display:block}.sc-ix-select-item-h ix-dropdown-item.sc-ix-select-item button.sc-ix-select-item{margin-left:1rem}"}}]);