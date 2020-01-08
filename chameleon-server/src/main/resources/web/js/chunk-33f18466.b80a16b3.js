(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33f18466"],{"1a40":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("CVrangeSlider",{attrs:{name:"Hue",min:0,max:180},on:{input:function(e){return t.handleData("hue")}},model:{value:t.value.hue,callback:function(e){t.$set(t.value,"hue",e)},expression:"value.hue"}}),i("CVrangeSlider",{attrs:{name:"Saturation",min:0,max:255},on:{input:function(e){return t.handleData("saturation")}},model:{value:t.value.saturation,callback:function(e){t.$set(t.value,"saturation",e)},expression:"value.saturation"}}),i("CVrangeSlider",{attrs:{name:"Value",min:0,max:255},on:{input:function(e){return t.handleData("value")}},model:{value:t.value.value,callback:function(e){t.$set(t.value,"value",e)},expression:"value.value"}}),i("v-divider",{staticStyle:{"margin-top":"5px"},attrs:{color:"darkgray "}}),i("v-btn",{staticStyle:{margin:"20px"},attrs:{color:"#4baf62",small:""},on:{click:function(e){return t.setFunction(1)}}},[i("v-icon",[t._v("colorize")]),t._v("\n        Eye drop\n    ")],1),i("v-btn",{staticStyle:{margin:"20px"},attrs:{color:"#4baf62",small:""},on:{click:function(e){return t.setFunction(2)}}},[i("v-icon",[t._v("add")]),t._v("\n        Expand Selection\n    ")],1),i("v-btn",{staticStyle:{margin:"20px"},attrs:{color:"#4baf62",small:""},on:{click:function(e){return t.setFunction(3)}}},[i("v-icon",[t._v("remove")]),t._v("\n        Shrink Selection\n    ")],1),i("v-divider",{attrs:{color:"darkgray "}}),i("CVswitch",{attrs:{name:"Erode"},on:{input:function(e){return t.handleData("erode")}},model:{value:t.value.erode,callback:function(e){t.$set(t.value,"erode",e)},expression:"value.erode"}}),i("CVswitch",{attrs:{name:"Dilate"},on:{input:function(e){return t.handleData("dilate")}},model:{value:t.value.dilate,callback:function(e){t.$set(t.value,"dilate",e)},expression:"value.dilate"}})],1)},n=[],s=i("1029"),r=i("b530"),l={name:"Threshold",props:["value"],components:{CVrangeSlider:s["a"],CVswitch:r["a"]},data(){return{currentFunction:void 0,colorPicker:void 0,currentBinaryState:0}},computed:{pipeline:{get(){return this.$store.state.pipeline}},driverState:{get(){return this.$store.state.driverMode},set(t){this.$store.commit("driverMode",t)}}},methods:{onClick(t){if(void 0!==this.currentFunction){let e=this.colorPicker.colorPickerClick(t,this.currentFunction,[[this.value.hue[0],this.value.saturation[0],this.value.value[0]],[this.value.hue[1],this.value.saturation[1],this.value.value[1]]]);this.currentFunction=void 0,this.value.hue=[e[0][0],e[1][0]],this.value.saturation=[e[0][1],e[1][1]],this.value.value=[e[0][2],e[1][2]],this.value.isBinary=this.currentBinaryState;let i=this.$msgPack.encode({hue:this.value.hue,saturation:this.value.saturation,value:this.value.value,isBinary:this.value.isBinary});this.$socket.send(i),this.$emit("update")}},setFunction(t){switch(this.currentBinaryState=this.value.isBinary,!0===this.currentBinaryState&&(this.value.isBinary=!1,this.handleData("isBinary")),t){case 0:this.currentFunction=void 0;break;case 1:this.currentFunction=this.colorPicker.eyeDrop;break;case 2:this.currentFunction=this.colorPicker.expand;break;case 3:this.currentFunction=this.colorPicker.shrink;break}},handleData(t){this.handleInput(t,this.value[t]),this.$emit("update")}},mounted:function(){const t=this;this.colorPicker=i("b3e4").default,this.$nextTick(()=>{t.colorPicker.initColorPicker()})}},o=l,u=i("2877"),c=i("6544"),h=i.n(c),d=i("8336"),v=i("ce7e"),p=i("132d"),m=Object(u["a"])(o,a,n,!1,null,"37575e52",null);e["default"]=m.exports;h()(m,{VBtn:d["a"],VDivider:v["a"],VIcon:p["a"]})},5311:function(t,e,i){"use strict";var a=i("5607"),n=i("2b0e");e["a"]=n["a"].extend({name:"rippleable",directives:{ripple:a["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange(){}}})},"8ce9":function(t,e,i){},"9d01":function(t,e,i){},a293:function(t,e,i){"use strict";function a(){return!1}function n(t,e,i){i.args=i.args||{};const n=i.args.closeConditional||a;if(!t||!1===n(t))return;if("isTrusted"in t&&!t.isTrusted||"pointerType"in t&&!t.pointerType)return;const s=(i.args.include||(()=>[]))();s.push(e),!s.some(e=>e.contains(t.target))&&setTimeout(()=>{n(t)&&i.value&&i.value(t)},0)}const s={inserted(t,e){const i=i=>n(i,t,e),a=document.querySelector("[data-app]")||document.body;a.addEventListener("click",i,!0),t._clickOutside=i},unbind(t){if(!t._clickOutside)return;const e=document.querySelector("[data-app]")||document.body;e&&e.removeEventListener("click",t._clickOutside,!0),delete t._clickOutside}};e["a"]=s},b3e4:function(t,e,i){"use strict";i.r(e);var a=void 0,n=void 0;function s(){a=document.createElement("canvas"),n=document.getElementById("CameraStream"),a.width=n.width,a.height=n.height}function r(t,e,i){let s=n.getBoundingClientRect(),r=Math.round(t.clientX-s.left),l=Math.round(t.clientY-s.top),o=a.getContext("2d");o.drawImage(n,0,0,n.width,n.height);let u=o.getImageData(r,l,1,1).data;if(void 0!==e)return e(u,i)}function l(t){let e=c(t),i=d([e,e.slice(0)]);return i}function o(t,e){let i=c(t),a=d([[].concat(i),i]);return h(e.concat(a))}function u(t,e){let i=c(t),a=d([[].concat(i),i]);return v(e,a[0])||v(e,a[1]),e}function c(t){let e=t[0],i=t[1],a=t[2];e/=255,i/=255,a/=255;let n=Math.min(e,Math.min(i,a)),s=Math.max(e,Math.max(i,a)),r=e===n?i-a:a===n?e-i:a-e,l=e===n?3:a===n?1:5,o=30*(l-r/(s-n)),u=255*(s-n)/s,c=255*s;return isNaN(o)&&(o=0),isNaN(u)&&(u=0),isNaN(c)&&(c=0),[Math.round(o),Math.round(u),Math.round(c)]}function h(t){let e=[[],[]];for(var i=0;i<3;i++){e[0][i]=t[0][i],e[1][i]=t[0][i];for(var a=t.length-1;a>=0;a--)e[0][i]=Math.min(t[a][i],e[0][i]),e[1][i]=Math.max(t[a][i],e[1][i])}return e}function d(t){let e=[[],[]];for(let i=0;i<3;i++)e[0][i]=Math.max(0,t[0][i]-10),e[1][i]=Math.min(255,t[1][i]+10);return e[1][0]=Math.min(180,e[1][0]),e}function v(t,e){let i=!0;for(let a=0;a<e.length&&i;a++)t[0][a]<=e[a]<=t[1][a]||(i=!1);if(i)for(let a=0;a<e.length;a++)e[a]-t[0][a]<t[1][a]-e[a]?t[0][a]=Math.min(t[0][a]+10,t[1][a]):t[1][a]=Math.max(t[1][a]-10,t[0][a]);return i}e["default"]={initColorPicker:s,colorPickerClick:r,eyeDrop:l,expand:o,shrink:u}},b530:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",{attrs:{dense:"",align:"center"}},[i("v-col",{attrs:{cols:2}},[i("span",[t._v(t._s(t.name))])]),i("v-col",[i("v-switch",{attrs:{dark:"",disabled:t.disabled,color:"#4baf62"},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1)],1)],1)},n=[],s={name:"CVSwitch",props:["name","value","disabled"],data(){return{}},computed:{localValue:{get(){return this.value},set(t){this.$emit("input",t)}}}},r=s,l=i("2877"),o=i("6544"),u=i.n(o),c=i("62ad"),h=i("0fd9"),d=(i("ec29"),i("9d01"),i("fe09")),v=i("c37a"),p=i("c3f0"),m=i("0789"),f=i("490a"),g=i("80d2"),k=d["a"].extend({name:"v-switch",directives:{Touch:p["a"]},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes(){return{...v["a"].options.computed.classes.call(this),"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset}},attrs(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.disabled),role:"switch"}},validationState(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},switchData(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot(){return[this.genSwitch(),this.genLabel()]},genSwitch(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",{...this.$attrs,...this.attrs}),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",{staticClass:"v-input--switch__track",...this.switchData}),this.$createElement("div",{staticClass:"v-input--switch__thumb",...this.switchData},[this.genProgress()])])},genProgress(){return this.$createElement(m["c"],{},[!1===this.loading?null:this.$slots.progress||this.$createElement(f["a"],{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft(){this.isActive&&this.onChange()},onSwipeRight(){this.isActive||this.onChange()},onKeydown(t){(t.keyCode===g["s"].left&&this.isActive||t.keyCode===g["s"].right&&!this.isActive)&&this.onChange()}}}),b=Object(l["a"])(r,a,n,!1,null,"1f391c39",null);e["a"]=b.exports;u()(b,{VCol:c["a"],VRow:h["a"],VSwitch:k})},ce7e:function(t,e,i){"use strict";i("8ce9");var a=i("7560");e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},ec29:function(t,e,i){},fe09:function(t,e,i){"use strict";var a=i("c37a"),n=i("5311"),s=i("8547"),r=i("58df");e["a"]=Object(r["a"])(a["a"],n["a"],s["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"accent"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=a["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:t=>{t.preventDefault(),this.onChange()}},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown},ref:"input"})},onBlur(){this.isFocused=!1},onChange(){if(this.isDisabled)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const i=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===i&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}})}}]);
//# sourceMappingURL=chunk-33f18466.b80a16b3.js.map