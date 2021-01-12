var t
function e(t,e,r,i,n,s,o){try{var a=t[s](o),l=a.value}catch(t){return void r(t)}a.done?e(l):Promise.resolve(l).then(i,n)}function r(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,i)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?i(Object(n),!0).forEach(function(e){r(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}t=window.customElements.define,window.customElements.define=function(e,r,i){window.customElements.get(e)?console.warn("".concat(e," has been defined twice")):t.call(window.customElements,e,r,i)}
var o=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,a=function(t,e){for(var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e!==r;){var i=e.nextSibling
t.removeChild(e),e=i}},l="{{lit-".concat(String(Math.random()).slice(2),"}}"),h="\x3c!--".concat(l,"--\x3e"),d=new RegExp("".concat(l,"|").concat(h))
class p{constructor(t,e){this.parts=[],this.element=e
for(var r=[],i=[],n=document.createTreeWalker(e.content,133,null,!1),s=0,o=-1,a=0,{strings:h,values:{length:p}}=t;a<p;){var c=n.nextNode()
if(null!==c){if(o++,1===c.nodeType){if(c.hasAttributes()){for(var g=c.attributes,{length:y}=g,f=0,b=0;b<y;b++)u(g[b].name,"$lit$")&&f++
for(;f-- >0;){var _=h[a],w=m.exec(_)[2],S=w.toLowerCase()+"$lit$",x=c.getAttribute(S)
c.removeAttribute(S)
var P=x.split(d)
this.parts.push({type:"attribute",index:o,name:w,strings:P}),a+=P.length-1}}"TEMPLATE"===c.tagName&&(i.push(c),n.currentNode=c.content)}else if(3===c.nodeType){var C=c.data
if(C.indexOf(l)>=0){for(var E=c.parentNode,k=C.split(d),N=k.length-1,A=0;A<N;A++){var R=void 0,T=k[A]
if(""===T)R=v()
else{var O=m.exec(T)
null!==O&&u(O[2],"$lit$")&&(T=T.slice(0,O.index)+O[1]+O[2].slice(0,-"$lit$".length)+O[3]),R=document.createTextNode(T)}E.insertBefore(R,c),this.parts.push({type:"node",index:++o})}""===k[N]?(E.insertBefore(v(),c),r.push(c)):c.data=k[N],a+=N}}else if(8===c.nodeType)if(c.data===l){var V=c.parentNode
null!==c.previousSibling&&o!==s||(o++,V.insertBefore(v(),c)),s=o,this.parts.push({type:"node",index:o}),null===c.nextSibling?c.data="":(r.push(c),o--),a++}else for(var B=-1;-1!==(B=c.data.indexOf(l,B+1));)this.parts.push({type:"node",index:-1}),a++}else n.currentNode=i.pop()}for(var j of r)j.parentNode.removeChild(j)}}var u=(t,e)=>{var r=t.length-e.length
return r>=0&&t.slice(r)===e},c=t=>-1!==t.index,v=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
function g(t,e){for(var{element:{content:r},parts:i}=t,n=document.createTreeWalker(r,133,null,!1),s=f(i),o=i[s],a=-1,l=0,h=[],d=null;n.nextNode();){a++
var p=n.currentNode
for(p.previousSibling===d&&(d=null),e.has(p)&&(h.push(p),null===d&&(d=p)),null!==d&&l++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-l,o=i[s=f(i,s)]}h.forEach(t=>t.parentNode.removeChild(t))}var y=t=>{for(var e=11===t.nodeType?0:1,r=document.createTreeWalker(t,133,null,!1);r.nextNode();)e++
return e},f=function(t){for(var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;e<t.length;e++){var r=t[e]
if(c(r))return e}return-1},b=new WeakMap,_=t=>"function"==typeof t&&b.has(t),w={},S={}
class x{constructor(t,e,r){this.__parts=[],this.template=t,this.processor=e,this.options=r}update(t){var e=0
for(var r of this.__parts)void 0!==r&&r.setValue(t[e]),e++
for(var i of this.__parts)void 0!==i&&i.commit()}_clone(){for(var t,e=o?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),r=[],i=this.template.parts,n=document.createTreeWalker(e,133,null,!1),s=0,a=0,l=n.nextNode();s<i.length;)if(t=i[s],c(t)){for(;a<t.index;)a++,"TEMPLATE"===l.nodeName&&(r.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=r.pop(),l=n.nextNode())
if("node"===t.type){var h=this.processor.handleTextExpression(this.options)
h.insertAfterNode(l.previousSibling),this.__parts.push(h)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,t.name,t.strings,this.options))
s++}else this.__parts.push(void 0),s++
return o&&(document.adoptNode(e),customElements.upgrade(e)),e}}class P{constructor(t,e,r,i){this.strings=t,this.values=e,this.type=r,this.processor=i}getHTML(){for(var t=this.strings.length-1,e="",r=!1,i=0;i<t;i++){var n=this.strings[i],s=n.lastIndexOf("\x3c!--")
r=(s>-1||r)&&-1===n.indexOf("--\x3e",s+1)
var o=m.exec(n)
e+=null===o?n+(r?l:h):n.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+l}return e+this.strings[t]}getTemplateElement(){var t=document.createElement("template")
return t.innerHTML=this.getHTML(),t}}var C=t=>null===t||!("object"==typeof t||"function"==typeof t),E=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator])
class k{constructor(t,e,r){this.dirty=!0,this.element=t,this.name=e,this.strings=r,this.parts=[]
for(var i=0;i<r.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new N(this)}_getValue(){for(var t=this.strings,e=t.length-1,r="",i=0;i<e;i++){r+=t[i]
var n=this.parts[i]
if(void 0!==n){var s=n.value
if(C(s)||!E(s))r+="string"==typeof s?s:String(s)
else for(var o of s)r+="string"==typeof o?o:String(o)}}return r+t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class N{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===w||C(t)&&t===this.value||(this.value=t,_(t)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){var t=this.value
this.value=w,t(this)}this.value!==w&&this.committer.commit()}}class A{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(v()),this.endNode=t.appendChild(v())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=v()),t.__insert(this.endNode=v())}insertAfterPart(t){t.__insert(this.startNode=v()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){var t=this.__pendingValue
this.__pendingValue=w,t(this)}var e=this.__pendingValue
e!==w&&(C(e)?e!==this.value&&this.__commitText(e):e instanceof P?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):E(e)?this.__commitIterable(e):e===S?(this.value=S,this.clear()):this.__commitText(e))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){var e=this.startNode.nextSibling,r="string"==typeof(t=null==t?"":t)?t:String(t)
e===this.endNode.previousSibling&&3===e.nodeType?e.data=r:this.__commitNode(document.createTextNode(r)),this.value=t}__commitTemplateResult(t){var e=this.options.templateFactory(t)
if(this.value instanceof x&&this.value.template===e)this.value.update(t.values)
else{var r=new x(e,t.processor,this.options),i=r._clone()
r.update(t.values),this.__commitNode(i),this.value=r}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear())
var e,r=this.value,i=0
for(var n of t)void 0===(e=r[i])&&(e=new A(this.options),r.push(e),0===i?e.appendIntoPart(this):e.insertAfterPart(r[i-1])),e.setValue(n),e.commit(),i++
i<r.length&&(r.length=i,this.clear(e&&e.endNode))}clear(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode
a(this.startNode.parentNode,t.nextSibling,this.endNode)}}class T{constructor(t,e,r){if(this.value=void 0,this.__pendingValue=void 0,2!==r.length||""!==r[0]||""!==r[1])throw new Error("Boolean attributes can only contain a single expression")
this.element=t,this.name=e,this.strings=r}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){var t=this.__pendingValue
this.__pendingValue=w,t(this)}if(this.__pendingValue!==w){var e=!!this.__pendingValue
this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=w}}}class O extends k{constructor(t,e,r){super(t,e,r),this.single=2===r.length&&""===r[0]&&""===r[1]}_createPart(){return new R(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class R extends N{}var V=!1
try{var B={get capture(){return V=!0,!1}}
window.addEventListener("test",B,B),window.removeEventListener("test",B,B)}catch(t){}class j{constructor(t,e,r){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=r,this.__boundHandleEvent=(t=>this.handleEvent(t))}setValue(t){this.__pendingValue=t}commit(){for(;_(this.__pendingValue);){var t=this.__pendingValue
this.__pendingValue=w,t(this)}if(this.__pendingValue!==w){var e=this.__pendingValue,r=this.value,i=null==e||null!=r&&(e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive),n=null!=e&&(null==r||i)
i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),n&&(this.__options=M(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=w}}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}var M=t=>t&&(V?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
function U(t){var e=$.get(t.type)
void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$.set(t.type,e))
var r=e.stringsArray.get(t.strings)
if(void 0!==r)return r
var i=t.strings.join(l)
return void 0===(r=e.keyString.get(i))&&(r=new p(t,t.getTemplateElement()),e.keyString.set(i,r)),e.stringsArray.set(t.strings,r),r}var $=new Map,q=new WeakMap,L=new class{handleAttributeExpressions(t,e,r,i){var n=e[0]
return"."===n?new O(t,e.slice(1),r).parts:"@"===n?[new j(t,e.slice(1),i.eventContext)]:"?"===n?[new T(t,e.slice(1),r)]:new k(t,e,r).parts}handleTextExpression(t){return new A(t)}};(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1")
var z=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i]
return new P(t,r,"html",L)},F=(t,e)=>"".concat(t,"--").concat(e),D=!0
void 0===window.ShadyCSS?D=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),D=!1)
var I=t=>e=>{var r=F(e.type,t),i=$.get(r)
void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},$.set(r,i))
var n=i.stringsArray.get(e.strings)
if(void 0!==n)return n
var s=e.strings.join(l)
if(void 0===(n=i.keyString.get(s))){var o=e.getTemplateElement()
D&&window.ShadyCSS.prepareTemplateDom(o,t),n=new p(e,o),i.keyString.set(s,n)}return i.stringsArray.set(e.strings,n),n},H=["html","svg"],W=new Set,J=(t,e,r)=>{W.add(t)
var i=r?r.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:s}=n
if(0!==s){for(var o=document.createElement("style"),a=0;a<s;a++){var l=n[a]
l.parentNode.removeChild(l),o.textContent+=l.textContent}(t=>{H.forEach(e=>{var r=$.get(F(e,t))
void 0!==r&&r.keyString.forEach(t=>{var{element:{content:e}}=t,r=new Set
Array.from(e.querySelectorAll("style")).forEach(t=>{r.add(t)}),g(t,r)})})})(t)
var h=i.content
r?function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,{element:{content:i},parts:n}=t
if(null!=r)for(var s=document.createTreeWalker(i,133,null,!1),o=f(n),a=0,l=-1;s.nextNode();){for(l++,s.currentNode===r&&(a=y(e),r.parentNode.insertBefore(e,r));-1!==o&&n[o].index===l;){if(a>0){for(;-1!==o;)n[o].index+=a,o=f(n,o)
return}o=f(n,o)}}else i.appendChild(e)}(r,o,h.firstChild):h.insertBefore(o,h.firstChild),window.ShadyCSS.prepareTemplateStyles(i,t)
var d=h.querySelector("style")
if(window.ShadyCSS.nativeShadow&&null!==d)e.insertBefore(d.cloneNode(!0),e.firstChild)
else if(r){h.insertBefore(o,h.firstChild)
var p=new Set
p.add(o),g(r,p)}}else window.ShadyCSS.prepareTemplateStyles(i,t)}
window.JSCompiler_renameProperty=((t,e)=>t)
var X={toAttribute(t,e){switch(e){case Boolean:return t?"":null
case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t
case Number:return null===t?null:Number(t)
case Object:case Array:return JSON.parse(t)}return t}},Y=(t,e)=>e!==t&&(e==e||t==t),K={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:Y}
class G extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize()
var t=[]
return this._classProperties.forEach((e,r)=>{var i=this._attributeNameForProperty(r,e)
void 0!==i&&(this._attributeToPropertyMap.set(i,r),t.push(i))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map
var t=Object.getPrototypeOf(this)._classProperties
void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:K
if(this._ensureClassProperties(),this._classProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){var r="symbol"==typeof t?Symbol():"__".concat(t),i=this.getPropertyDescriptor(t,r,e)
void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){return{get(){return this[e]},set(r){var i=this[t]
this[e]=r,this._requestUpdate(t,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||K}static finalize(){var t=Object.getPrototypeOf(this)
if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var e=this.properties,r=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]]
for(var i of r)this.createProperty(i,e[i])}}static _attributeNameForProperty(t,e){var r=e.attribute
return!1===r?void 0:"string"==typeof r?r:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:Y)(t,e)}static _propertyValueFromAttribute(t,e){var r=e.type,i=e.converter||X,n="function"==typeof i?i:i.fromAttribute
return n?n(t,r):t}static _propertyValueToAttribute(t,e){if(void 0!==e.reflect){var r=e.type,i=e.converter
return(i&&i.toAttribute||X.toAttribute)(t,r)}}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){var r=this[e]
delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,r)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,r){e!==r&&this._attributeToProperty(t,r)}_propertyToAttribute(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:K,i=this.constructor,n=i._attributeNameForProperty(t,r)
if(void 0!==n){var s=i._propertyValueToAttribute(e,r)
if(void 0===s)return
this._updateState=8|this._updateState,null==s?this.removeAttribute(n):this.setAttribute(n,s),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(!(8&this._updateState)){var r=this.constructor,i=r._attributeToPropertyMap.get(t)
if(void 0!==i){var n=r.getPropertyOptions(i)
this._updateState=16|this._updateState,this[i]=r._propertyValueFromAttribute(e,n),this._updateState=-17&this._updateState}}}_requestUpdate(t,e){var r=!0
if(void 0!==t){var i=this.constructor,n=i.getPropertyOptions(t)
i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}_enqueueUpdate(){var t,r=this
return(t=function*(){r._updateState=4|r._updateState
try{yield r._updatePromise}catch(t){}var t=r.performUpdate()
return null!=t&&(yield t),!r._hasRequestedUpdate},function(){var r=this,i=arguments
return new Promise(function(n,s){var o=t.apply(r,i)
function a(t){e(o,n,s,a,l,"next",t)}function l(t){e(o,n,s,a,l,"throw",t)}a(void 0)})})()}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties()
var t=!1,e=this._changedProperties
try{(t=this.shouldUpdate(e))?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}G.finalized=!0
var Q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{var{kind:r,elements:i}=e
return{kind:r,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e),Z=(t,e)=>"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(r){r.createProperty(e.key,t)}}:Object.assign(Object.assign({},e),{finisher(r){r.createProperty(e.key,t)}})
function tt(t){return(e,r)=>void 0!==r?((t,e,r)=>{e.constructor.createProperty(r,t)})(t,e,r):Z(t,e)}var et=(t,e,r)=>{Object.defineProperty(e,r,t)},rt=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t}),it="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,nt=Symbol()
class st{constructor(t,e){if(e!==nt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.")
this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(it?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}var ot=t=>new st(String(t),nt),at=t=>{if(t instanceof st)return t.cssText
if("number"==typeof t)return t
throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(t,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))},lt=function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i]
var n=r.reduce((e,r,i)=>e+at(r)+t[i+1],t[0])
return new st(n,nt)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1")
var ht={}
class dt extends G{static getStyles(){return this.styles}static _getUniqueStyles(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var t=this.getStyles()
if(void 0===t)this._styles=[]
else if(Array.isArray(t)){var e=(t,r)=>t.reduceRight((t,r)=>Array.isArray(r)?e(r,t):(t.add(r),t),r),r=e(t,new Set),i=[]
r.forEach(t=>i.unshift(t)),this._styles=i}else this._styles=[t]}}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){var t=this.constructor._styles
0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?it?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){var e=this.render()
super.update(t),e!==ht&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{var e=document.createElement("style")
e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return ht}}dt.finalized=!0,dt.render=((t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.")
var i=r.scopeName,n=q.has(e),s=D&&11===e.nodeType&&!!e.host,o=s&&!W.has(i),l=o?document.createDocumentFragment():e
if(((t,e,r)=>{var i=q.get(e)
void 0===i&&(a(e,e.firstChild),q.set(e,i=new A(Object.assign({templateFactory:U},r))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:I(i)},r)),o){var h=q.get(l)
q.delete(l)
var d=h.value instanceof x?h.value.template:void 0
J(i,l,d),a(e,e.firstChild),e.appendChild(l),q.set(e,h)}!n&&s&&window.ShadyCSS.styleElement(e.host)})
var pt=":host {\n\tdisplay: block;\n\tpadding: 20px 20px 30px;\n\ttext-align: center;\n\tbackground-color: #fff;\n\tmargin-bottom: 20px;\n}\n\n.big {\n\tfont-size: 45px;\n\tfont-weight: bold;\n\tmargin: 10px 0;\n}\n\np {\n\tfont-weight: 600;\n}\n\nimg {\n\twidth: 200px;\n}\n\n.button {\n\t--button-border-radius: 4px;\n}\n"
function ut(t){return ot(t)}function ct(t,e,r,i){var n,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,r):i
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,i)
else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(s<3?n(o):s>3?n(e,r,o):n(e,r))||o)
return s>3&&o&&Object.defineProperty(e,r,o),o}function vt(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}var mt=new Map
function gt(t,e,r,i,n){var s=Array.isArray(e)?e:[e],o=Math.random().toString(),a=t=>null==n?r(t):function(t,e,r){var i=mt.get(r)
null!=i&&window.clearTimeout(i),mt.set(r,window.setTimeout(()=>{t(),mt.delete(r)},e))}(()=>r(t),n,o)
return s.forEach(e=>t.addEventListener(e,a,i)),()=>s.forEach(e=>t.removeEventListener(e,a,i))}function yt(t){t.forEach(t=>t()),t.length=0}function ft(t){t.preventDefault(),t.stopPropagation()}function bt(t,e){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))/2}function _t(t,e){var r=function(t){return new WebKitCSSMatrix(t.webkitTransform)}(t)
return{x:0===(null==e?t.getPropertyValue("width"):e.width)?0:r.a,y:0===(null==e?t.getPropertyValue("height"):e.height)?0:r.d}}var wt=ut("*{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}")
function St(){var t=s([""])
return St=function(){return t},t}var xt={easing:"ease-out",fill:"both"},Pt=class extends dt{constructor(){super(...arguments),this.unbounded=!1,this.centered=!1,this.overlay=!1,this.disabled=!1,this.focusable=!1,this.autoRelease=!1,this.initialDuration=350,this.releaseDuration=500,this.role="presentation",this.target=this,this.listeners=[],this.rippleAnimationListeners=[]}connectedCallback(){super.connectedCallback(),this.addListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeListeners()}updated(t){super.updated(t),t.has("target")&&null!=this.target&&(this.removeListeners(),this.addListeners())}addListeners(){null!=this.target&&this.listeners.push(gt(this.target,"mousedown",this.spawnRipple.bind(this),{passive:!0}),gt(this.target,"focusin",this.onFocusIn.bind(this),{passive:!0}),gt(this.target,"focusout",this.onFocusOut.bind(this),{passive:!0}))}removeListeners(){yt(this.listeners)}spawnRipple(t,e){if(this.disabled)return()=>{}
this.releaseRipple()
var r=this.getBoundingClientRect(),i=0,n=0
if(this.centered||null==t)i=r.width/2,n=r.height/2
else{var{clientX:s,clientY:o}=function(t){var e,r=!1
null!=t.changedTouches?(e=t.changedTouches[0],r=!0):e=t
var{clientX:i,clientY:n,pageX:s,pageY:o}=e
return{clientX:i,clientY:n,pageX:s,pageY:o,isTouch:r}}(t)
i=s-r.left,n=o-r.top}var a=this.showRippleAtCoords({x:i,y:n},e)
return this.rippleAnimationListeners.push(a),null==this.target||this.focusable||this.rippleAnimationListeners.push(gt(window,"mouseup",this.releaseRipple.bind(this),{passive:!0})),a}releaseRipple(){yt(this.rippleAnimationListeners)}showRippleAtCoords(t,e){var{x:r,y:i}=t,{offsetWidth:s,offsetHeight:o}=this,a=_t(window.getComputedStyle(this)),{releaseDuration:l=this.releaseDuration,initialDuration:h=this.initialDuration,autoRelease:d=this.autoRelease}=e||{}
r*=0===a.x?1:1/a.x,i*=0===a.y?1:1/a.y
var p=document.createElement("div")
p.classList.add("ripple")
var u=bt(s,o),c=bt(Math.abs(s/2-r),Math.abs(o/2-i)),v=Math.round(u+2*c),m=2*v
Object.assign(p.style,{left:"".concat(r-v,"px"),top:"".concat(i-v,"px"),height:"".concat(m,"px"),width:"".concat(m,"px"),position:"absolute"})
var g=!1,y=()=>{if(!g){g=!0
var t=function(t){if("0px"===t.getPropertyValue("width")||"0px"===t.getPropertyValue("height"))return 0
var e=t.getPropertyValue("opacity")
return isNaN(+e)?0:Number(e)}(window.getComputedStyle(p))
p.animate({opacity:[t.toString(),"0"]},n({},xt,{duration:l})).onfinish=(()=>{requestAnimationFrame(()=>{this.shadowRoot.contains(p)&&this.shadowRoot.removeChild(p)})})}}
return this.shadowRoot.appendChild(p),d&&y(),p.animate({transform:["scale(0)","scale(1)"]},n({},xt,{duration:h})),y}onFocusIn(){this.focusable&&this.spawnRipple(void 0,{autoRelease:!1})}onFocusOut(){this.focusable&&this.releaseRipple()}render(){return z(St())}}
Pt.styles=[wt,ut(":host{position:relative;display:block;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([unbounded])){overflow:hidden}:host([overlay]){position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%)}.ripple{background:var(--ripple-color,currentcolor);opacity:var(--ripple-opacity,.15);border-radius:100%;pointer-events:none;will-change:opacity,transform}")],ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Pt.prototype,"unbounded",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Pt.prototype,"centered",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Pt.prototype,"overlay",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Pt.prototype,"disabled",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Pt.prototype,"focusable",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Pt.prototype,"autoRelease",void 0),ct([tt({type:Number}),vt("design:type",Number)],Pt.prototype,"initialDuration",void 0),ct([tt({type:Number}),vt("design:type",Number)],Pt.prototype,"releaseDuration",void 0),ct([tt({type:String,reflect:!0}),vt("design:type",String)],Pt.prototype,"role",void 0),ct([tt({type:Object}),vt("design:type",EventTarget)],Pt.prototype,"target",void 0),Pt=ct([Q("wl-ripple")],Pt)
var Ct,Et=(Ct=(t=>e=>{if(void 0===t&&e instanceof N){if(t!==e.value){var r=e.committer.name
e.committer.element.removeAttribute(r)}}else e.setValue(t)}),function(){var t=Ct(...arguments)
return b.set(t,!0),t})
class kt extends dt{constructor(){super(...arguments),this.disabled=!1,this.readonly=!1,this.required=!1,this.value="",this.formElementId=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10
return"_".concat(Math.random().toString(36).substr(2,t))}(),this.listeners=[]}get validationMessage(){return this.$formElement.validationMessage}get valid(){return null==this.validity||this.validity.valid}get validity(){return this.$formElement.validity}get willValidate(){return this.$formElement.willValidate}get form(){return this.$formElement.form}checkValidity(){return this.$formElement.checkValidity()}setCustomValidity(t){return this.$formElement.setCustomValidity(t)}firstUpdated(t){super.firstUpdated(t),this.$formElement=this.queryFormElement(),this.appendChild(this.$formElement)}disconnectedCallback(){super.disconnectedCallback(),yt(this.listeners)}updated(t){super.updated(t),t.has("disabled")&&function(t,e){for(var r in e){var i=!0===e[r]?"":e[r]
i||""===i||0===i?t.getAttribute(r)!==i&&t.setAttribute(r,i.toString()):t.hasAttribute(r)&&t.removeAttribute(r)}}(this,{"aria-disabled":this.disabled.toString()}),this.updateTabindex(t)}updateTabindex(t){var e,r
t.has("disabled")&&(e=this,r=this.disabled,e.tabIndex=r?-1:e.tabIndex<0?0:e.tabIndex)}getFormItemValue(){return null!=this.$formElement?this.$formElement.value:this.initialValue||""}queryFormElement(){return this.shadowRoot.querySelector("#".concat(this.formElementId))}}function Nt(){var t=s([' <button style="display: none;" id="','" aria-hidden="true" tabindex="-1" type="','" ?disabled="','" name="','" value="','"> </button> '])
return Nt=function(){return t},t}kt.styles=[wt,ut("")],ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],kt.prototype,"disabled",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],kt.prototype,"readonly",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],kt.prototype,"required",void 0),ct([tt({type:String}),vt("design:type",String)],kt.prototype,"name",void 0),ct([tt({type:String}),vt("design:type",String)],kt.prototype,"value",void 0)
class At extends kt{constructor(){super(...arguments),this.type="submit"}connectedCallback(){super.connectedCallback(),this.listeners.push(gt(this,"click",this.onClick.bind(this)),gt(this,"keydown",this.onKeyDown.bind(this)))}onKeyDown(t){"Enter"!==t.code&&"Space"!==t.code||(this.click(),ft(t),null!=this.$ripple&&this.$ripple.spawnRipple(void 0,{autoRelease:!0}))}onClick(t){this.disabled?ft(t):t.target!=this||t.defaultPrevented||this.$formElement.dispatchEvent(new MouseEvent("click",{relatedTarget:this,composed:!0}))}renderFormElement(){return z(Nt(),this.formElementId,this.type,this.disabled,Et(this.name),Et(this.value))}}function Tt(){var t=s([' <wl-ripple id="ripple" overlay .target="','" ?disabled="','"></wl-ripple> <slot></slot> '," "])
return Tt=function(){return t},t}At.styles=[...kt.styles,ut("")],ct([tt({type:String}),vt("design:type",String)],At.prototype,"type",void 0)
var Ot,Rt=class extends At{constructor(){super(...arguments),this.inverted=!1,this.fab=!1,this.outlined=!1,this.noRipple=!1,this.flat=!1,this.role="button"}render(){return z(Tt(),this,this.disabled||this.noRipple,this.renderFormElement())}}
function Vt(){var t=s(["\n\t\t\t<p>","</p>\n\t\t\t<img src=",' alt="">\n\t\t\t<p class="big">','</p>\n\t\t\t<wl-button class="button" inverted @click=',">Click me!</wl-button>\n\t\t"])
return Vt=function(){return t},t}function Bt(){var t=s(["",""])
return Bt=function(){return t},t}function jt(){var t=s(["",""])
return jt=function(){return t},t}Rt.styles=[...At.styles,ut(':host{--_button-color:var(--button-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_button-shadow-color:var(--button-shadow-color,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.2));color:var(--_button-color);background:var(--_button-bg);box-shadow:var(--elevation-1,0 .3125rem .625rem -.125rem var(--_button-shadow-color));padding:var(--button-padding,.75rem 1.5rem);font-size:var(--button-font-size,1rem);border-radius:var(--button-border-radius,.5rem);font-family:var(--button-font-family,var(--font-family-sans-serif,"Roboto Condensed",helvetica,sans-serif));transition:var(--button-transition,box-shadow var(--transition-duration-slow,.25s) var(--transition-timing-function-ease,ease),background var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease),color var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease));letter-spacing:var(--button-letter-spacing,.125rem);line-height:1;text-transform:uppercase;cursor:pointer;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;z-index:0}:host,:host([fab]){display:inline-flex;align-items:center;justify-content:center}:host([fab]){width:var(--button-fab-size,2.5rem);height:var(--button-fab-size,2.5rem);padding:0;letter-spacing:0;border-radius:100%}:host([inverted]){color:var(--_button-bg);background:var(--_button-color)}:host([outlined]){border:var(--button-border-outlined,.125rem solid currentColor)}:host(:focus),:host(:hover){--_button-color:var(--button-color-hover,hsl(var(--primary-400-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg-hover,hsl(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%))));--_button-shadow-color:var(--button-shadow-color-hover,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.5));will-change:background,color,box-shadow}:host(:active){--_button-color:var(--button-color-active,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));box-shadow:var(--elevation-4,0 .5rem 1rem -.125rem var(--_button-shadow-color))}:host([flat]:focus){background:var(--button-bg-active-flat,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.08))}:host([disabled]){--_button-color:var(--button-color-disabled,hsl(var(--shade-400-contrast,var(--shade-hue-contrast,0),var(--shade-saturation-contrast,100%),var(--shade-lightness-contrast,100%))));--_button-bg:var(--button-bg-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));box-shadow:none;cursor:default;pointer-events:none}:host([flat]){box-shadow:none;background:none}#ripple{z-index:-1}')],ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Rt.prototype,"inverted",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Rt.prototype,"fab",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Rt.prototype,"outlined",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Rt.prototype,"noRipple",void 0),ct([tt({type:Boolean,reflect:!0}),vt("design:type",Boolean)],Rt.prototype,"flat",void 0),ct([tt({type:String,reflect:!0}),vt("design:type",String)],Rt.prototype,"role",void 0),ct([(Ot="#ripple",(t,e)=>{var r={get(){return this.renderRoot.querySelector(Ot)},enumerable:!0,configurable:!0}
return void 0!==e?et(r,t,e):rt(r,t)}),vt("design:type",Pt)],Rt.prototype,"$ripple",void 0),Rt=ct([Q("wl-button")],Rt),customElements.define("component-one",class extends dt{static get properties(){return{greeting:{type:String},counter:{type:Number},imgSrc:{type:String,attribute:"img-src"}}}constructor(){super(),this.greeting="Hello World!",this.counter=0}static get styles(){return[lt(jt(),ot(pt)),lt(Bt(),ot(".button {\n\tcolor: inherit;\n\tbackground-color: #fdca2c;\n\t--button-shadow-color: transparent;\n\t--button-shadow-color-hover: transparent;\n}\n"))]}render(){return z(Vt(),this.greeting,this.imgSrc,this.counter,this._onButtonClick)}_onButtonClick(){this.counter++}})
var Mt=document.createElement("template")
Mt.innerHTML="\n<style>\n\t".concat(pt,'\n\n\t.button {\n\t\tbackground-color: #e44d26;\n\t}\n</style>\n\n<p></p>\n<img src="" alt="">\n<p class="big"></p>\n<wl-button flat class="button">Click me!</wl-button>')
class Ut extends HTMLElement{connectedCallback(){this.imgSrc=this.getAttribute("img-src")||this.imgSrc,this.greeting=this.getAttribute("greeting")||this.greeting,this.counter=0,this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Mt.content.cloneNode(!0)),this.$image=this.shadowRoot.querySelector("img"),this.$paragraph=this.shadowRoot.querySelector("p"),this.$bigParagraph=this.shadowRoot.querySelector(".big"),this.$button=this.shadowRoot.querySelector(".button"),this.$image.src=this.imgSrc,this.$paragraph.textContent=this.greeting,this.$bigParagraph.textContent=this.counter,this.$button.addEventListener("click",this._onButtonClick.bind(this)))}constructor(){super(),this.imgSrc="",this.greeting=""}_onButtonClick(){this.counter++,this.$bigParagraph.textContent=this.counter}}customElements.define("component-two",Ut)
