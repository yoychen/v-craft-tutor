(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/v-craft-tutor/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"516d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Editor",{staticClass:"container",attrs:{component:"div",resolverMap:t.resolverMap}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("Export"),n("hr"),n("Blueprint",{staticClass:"btn btn-outline-dark",attrs:{component:"button"},scopedSlots:t._u([{key:"blueprint",fn:function(){return[n("Paragraph")]},proxy:!0}])},[t._v(" Paragraph ")]),n("Blueprint",{staticClass:"btn btn-outline-dark",attrs:{component:"button"},scopedSlots:t._u([{key:"blueprint",fn:function(){return[n("Canvas",{attrs:{component:"Container"}})]},proxy:!0}])},[t._v(" Container ")]),n("hr"),n("SettingPanel")],1),n("div",{staticClass:"col-8"},[n("Frame",{staticClass:"preview-panel",attrs:{component:"div"}},[n("Canvas",{attrs:{component:"Container"}},[n("Paragraph",{attrs:{content:"demo text"}})],1)],1)],1)])])],1)},a=[],i=n("649c"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},l=[],c=(n("d6fc"),n("2877")),u={},p=Object(c["a"])(u,s,l,!1,null,"6e891a08",null),d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(t._s(t.content))])},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"form-control",domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}})])},h=[],b={mixins:[i["settingMixin"]],computed:{content:{get:function(){return this.elementProps.content},set:function(t){this.updateContent(t)}}},methods:{updateContent:function(t){this.elementPropsSetter({content:t})}}},g=b,_=Object(c["a"])(g,v,h,!1,null,null,null),C=_.exports,x={props:{content:String},craft:{defaultProps:{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."},settings:{ParagraphSetting:C}}},y=x,P=Object(c["a"])(y,f,m,!1,null,null,null),j=P.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"setting-panel"},[n("div",{staticClass:"custom-control custom-switch"},[n("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"editorState"},domProps:{checked:t.editor.enabled},on:{change:t.toggleState}}),n("label",{staticClass:"custom-control-label",attrs:{for:"editorState"}},[t._v("Enable")])]),n("hr"),t.settings?n("div",{staticClass:"settings"},t._l(t.settings,(function(e,r){return n(e,{key:r,tag:"component",attrs:{node:t.selectedNode}})})),1):t._e(),t.selectedNode?n("button",{staticClass:"btn btn-danger mt-3",on:{click:t.removeElement}},[t._v("Delete")]):t._e()])},O=[],S={inject:["editor"],computed:{selectedNode:function(){return this.editor.selectedNode},settings:function(){return this.selectedNode?this.editor.getSettings(this.selectedNode):null}},methods:{removeElement:function(){return this.editor.removeNode(this.selectedNode)},toggleState:function(){this.editor.enabled?this.editor.disable():this.editor.enable()}}},w=S,k=Object(c["a"])(w,E,O,!1,null,null,null),N=k.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"form-group"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.plainData,expression:"plainData"}],staticClass:"form-control",domProps:{value:t.plainData},on:{input:function(e){e.target.composing||(t.plainData=e.target.value)}}})]),n("button",{staticClass:"btn btn-primary mr-1",on:{click:t.doExport}},[t._v("Export")]),n("button",{staticClass:"btn btn-secondary",on:{click:t.doImport}},[t._v("Import")])])},M=[],$={inject:["editor"],data:function(){return{plainData:""}},methods:{doExport:function(){this.plainData=this.editor.export()},doImport:function(){this.editor.import(this.plainData)}}},B=$,F=Object(c["a"])(B,D,M,!1,null,null,null),I=F.exports,T={name:"App",components:{Canvas:i["Canvas"],Editor:i["Editor"],Frame:i["Frame"],Paragraph:j,SettingPanel:N,Blueprint:i["Blueprint"],Export:I},data:function(){return{resolverMap:{Canvas:i["Canvas"],Container:d,Paragraph:j}}}},J=T,A=Object(c["a"])(J,o,a,!1,null,null,null),L=A.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(L)}}).$mount("#app")},d6fc:function(t,e,n){"use strict";var r=n("516d"),o=n.n(r);o.a}});
//# sourceMappingURL=app.ea498bc9.js.map