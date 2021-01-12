!function(){"use strict"
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n,r,i,o,a){try{var s=t[o](a),u=s.value}catch(t){return void n(t)}s.done?e(u):Promise.resolve(u).then(r,i)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t)
e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?a(Object(n),!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function")
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t,e,n){return(p=h()?Reflect.construct:function(t,e,n){var r=[null]
r.push.apply(r,e)
var i=new(Function.bind.apply(t,r))
return n&&c(i,n.prototype),i}).apply(null,arguments)}function d(t){var e="function"==typeof Map?new Map:void 0
return(d=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t
var n
if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function")
if(void 0!==e){if(e.has(t))return e.get(t)
e.set(t,r)}function r(){return p(t,arguments,l(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),c(r,t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return t}function v(t){return function(){var e,n=l(t)
if(h()){var r=l(this).constructor
e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments)
return function(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?f(t):e}(this,e)}}function y(t,e,n){return(y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e)
if(r){var i=Object.getOwnPropertyDescriptor(r,e)
return i.get?i.get.call(n):i.value}})(t,e,n||t)}function m(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){return function(t){if(Array.isArray(t))return w(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||b(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){if(t){if("string"==typeof t)return w(t,e)
var n=Object.prototype.toString.call(t).slice(8,-1)
return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}function w(t,e){(null==e||e>t.length)&&(e=t.length)
for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n]
return r}function _(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=b(t))){var e=0,n=function(){}
return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,a=!1
return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next()
return o=t.done,t},e:function(t){a=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}var S
!function(t,e){t({exports:{}})}(function(e){var n=function(e){var n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag"
function u(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),a=new k(r||[])
return o._invoke=function(t,e,n){var r="suspendedStart"
return function(i,o){if("executing"===r)throw new Error("Generator is already running")
if("completed"===r){if("throw"===i)throw o
return{value:void 0,done:!0}}for(n.method=i,n.arg=o;;){var a=n.delegate
if(a){var s=w(a,n)
if(s){if(s===c)continue
return s}}if("next"===n.method)n.sent=n._sent=n.arg
else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg
n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg)
r="executing"
var u=l(t,e,n)
if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===c)continue
return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u
var c={}
function h(){}function p(){}function d(){}var f={}
f[o]=function(){return this}
var v=Object.getPrototypeOf,y=v&&v(v(x([])))
y&&y!==n&&r.call(y,o)&&(f=y)
var m=d.prototype=h.prototype=Object.create(f)
function g(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function b(e,n){var i
this._invoke=function(o,a){function s(){return new n(function(i,s){!function i(o,a,s,u){var c=l(e[o],e,a)
if("throw"!==c.type){var h=c.arg,p=h.value
return p&&"object"===t(p)&&r.call(p,"__await")?n.resolve(p.__await).then(function(t){i("next",t,s,u)},function(t){i("throw",t,s,u)}):n.resolve(p).then(function(t){h.value=t,s(h)},function(t){return i("throw",t,s,u)})}u(c.arg)}(o,a,i,s)})}return i=i?i.then(s,s):s()}}function w(t,e){var n=t.iterator[e.method]
if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return c
e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var r=l(n,t.iterator,e.arg)
if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,c
var i=r.arg
return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function _(t){var e={tryLoc:t[0]}
1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{}
e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function x(t){if(t){var e=t[o]
if(e)return e.call(t)
if("function"==typeof t.next)return t
if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e
return e.value=void 0,e.done=!0,e}
return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=m.constructor=d,d.constructor=p,d[s]=p.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor
return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},e.awrap=function(t){return{__await:t}},g(b.prototype),b.prototype[a]=function(){return this},e.AsyncIterator=b,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise)
var a=new b(u(t,n,r,i),o)
return e.isGeneratorFunction(n)?a:a.next().then(function(t){return t.done?t.value:a.next()})},g(m),m[s]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[]
for(var n in t)e.push(n)
return e.reverse(),function n(){for(;e.length;){var r=e.pop()
if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0
var t=this.tryEntries[0].completion
if("throw"===t.type)throw t.arg
return this.rval},dispatchException:function(t){if(this.done)throw t
var e=this
function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion
if("root"===o.tryLoc)return n("end")
if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc")
if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)
if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally")
if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n]
if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i
break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null)
var a=o?o.completion:{}
return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,c):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg
return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e]
if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e]
if(n.tryLoc===t){var r=n.completion
if("throw"===r.type){var i=r.arg
S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),c}},e}(e.exports)
try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}),S=window.customElements.define,window.customElements.define=function(t,e,n){window.customElements.get(t)?console.warn("".concat(t," has been defined twice")):S.call(window.customElements,t,e,n)}
var k=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,x=function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e!==n;){var r=e.nextSibling
t.removeChild(e),e=r}},P="{{lit-".concat(String(Math.random()).slice(2),"}}"),E="\x3c!--".concat(P,"--\x3e"),C=new RegExp("".concat(P,"|").concat(E)),O=function t(e,r){n(this,t),this.parts=[],this.element=r
for(var i=[],o=[],a=document.createTreeWalker(r.content,133,null,!1),s=0,u=-1,l=0,c=e.strings,h=e.values.length;l<h;){var p=a.nextNode()
if(null!==p){if(u++,1===p.nodeType){if(p.hasAttributes()){for(var d=p.attributes,f=d.length,v=0,y=0;y<f;y++)N(d[y].name,"$lit$")&&v++
for(;v-- >0;){var m=c[l],g=T.exec(m)[2],b=g.toLowerCase()+"$lit$",w=p.getAttribute(b)
p.removeAttribute(b)
var _=w.split(C)
this.parts.push({type:"attribute",index:u,name:g,strings:_}),l+=_.length-1}}"TEMPLATE"===p.tagName&&(o.push(p),a.currentNode=p.content)}else if(3===p.nodeType){var S=p.data
if(S.indexOf(P)>=0){for(var k=p.parentNode,x=S.split(C),E=x.length-1,O=0;O<E;O++){var A=void 0,j=x[O]
if(""===j)A=R()
else{var V=T.exec(j)
null!==V&&N(V[2],"$lit$")&&(j=j.slice(0,V.index)+V[1]+V[2].slice(0,-"$lit$".length)+V[3]),A=document.createTextNode(j)}k.insertBefore(A,p),this.parts.push({type:"node",index:++u})}""===x[E]?(k.insertBefore(R(),p),i.push(p)):p.data=x[E],l+=E}}else if(8===p.nodeType)if(p.data===P){var L=p.parentNode
null!==p.previousSibling&&u!==s||(u++,L.insertBefore(R(),p)),s=u,this.parts.push({type:"node",index:u}),null===p.nextSibling?p.data="":(i.push(p),u--),l++}else for(var B=-1;-1!==(B=p.data.indexOf(P,B+1));)this.parts.push({type:"node",index:-1}),l++}else a.currentNode=o.pop()}for(var M=0,U=i;M<U.length;M++){var $=U[M]
$.parentNode.removeChild($)}},N=function(t,e){var n=t.length-e.length
return n>=0&&t.slice(n)===e},A=function(t){return-1!==t.index},R=function(){return document.createComment("")},T=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/
function j(t,e){for(var n=t.element.content,r=t.parts,i=document.createTreeWalker(n,133,null,!1),o=L(r),a=r[o],s=-1,u=0,l=[],c=null;i.nextNode();){s++
var h=i.currentNode
for(h.previousSibling===c&&(c=null),e.has(h)&&(l.push(h),null===c&&(c=h)),null!==c&&u++;void 0!==a&&a.index===s;)a.index=null!==c?-1:a.index-u,a=r[o=L(r,o)]}l.forEach(function(t){return t.parentNode.removeChild(t)})}var V=function(t){for(var e=11===t.nodeType?0:1,n=document.createTreeWalker(t,133,null,!1);n.nextNode();)e++
return e},L=function(t){for(var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;e<t.length;e++){var n=t[e]
if(A(n))return e}return-1},B=new WeakMap,M=function(t){return"function"==typeof t&&B.has(t)},U={},$={},F=function(){function t(e,r,i){n(this,t),this.__parts=[],this.template=e,this.processor=r,this.options=i}return i(t,[{key:"update",value:function(t){var e,n=0,r=_(this.__parts)
try{for(r.s();!(e=r.n()).done;){var i=e.value
void 0!==i&&i.setValue(t[n]),n++}}catch(t){r.e(t)}finally{r.f()}var o,a=_(this.__parts)
try{for(a.s();!(o=a.n()).done;){var s=o.value
void 0!==s&&s.commit()}}catch(t){a.e(t)}finally{a.f()}}},{key:"_clone",value:function(){for(var t,e=k?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(e,133,null,!1),o=0,a=0,s=i.nextNode();o<r.length;)if(t=r[o],A(t)){for(;a<t.index;)a++,"TEMPLATE"===s.nodeName&&(n.push(s),i.currentNode=s.content),null===(s=i.nextNode())&&(i.currentNode=n.pop(),s=i.nextNode())
if("node"===t.type){var u=this.processor.handleTextExpression(this.options)
u.insertAfterNode(s.previousSibling),this.__parts.push(u)}else{var l;(l=this.__parts).push.apply(l,g(this.processor.handleAttributeExpressions(s,t.name,t.strings,this.options)))}o++}else this.__parts.push(void 0),o++
return k&&(document.adoptNode(e),customElements.upgrade(e)),e}}]),t}(),I=function(){function t(e,r,i,o){n(this,t),this.strings=e,this.values=r,this.type=i,this.processor=o}return i(t,[{key:"getHTML",value:function(){for(var t=this.strings.length-1,e="",n=!1,r=0;r<t;r++){var i=this.strings[r],o=i.lastIndexOf("\x3c!--")
n=(o>-1||n)&&-1===i.indexOf("--\x3e",o+1)
var a=T.exec(i)
e+=null===a?i+(n?P:E):i.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+P}return e+this.strings[t]}},{key:"getTemplateElement",value:function(){var t=document.createElement("template")
return t.innerHTML=this.getHTML(),t}}]),t}(),q=function(e){return null===e||!("object"===t(e)||"function"==typeof e)},z=function(t){return Array.isArray(t)||!(!t||!t[Symbol.iterator])},D=function(){function t(e,r,i){n(this,t),this.dirty=!0,this.element=e,this.name=r,this.strings=i,this.parts=[]
for(var o=0;o<i.length-1;o++)this.parts[o]=this._createPart()}return i(t,[{key:"_createPart",value:function(){return new H(this)}},{key:"_getValue",value:function(){for(var t=this.strings,e=t.length-1,n="",r=0;r<e;r++){n+=t[r]
var i=this.parts[r]
if(void 0!==i){var o=i.value
if(q(o)||!z(o))n+="string"==typeof o?o:String(o)
else{var a,s=_(o)
try{for(s.s();!(a=s.n()).done;){var u=a.value
n+="string"==typeof u?u:String(u)}}catch(t){s.e(t)}finally{s.f()}}}}return n+t[e]}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}]),t}(),H=function(){function t(e){n(this,t),this.value=void 0,this.committer=e}return i(t,[{key:"setValue",value:function(t){t===U||q(t)&&t===this.value||(this.value=t,M(t)||(this.committer.dirty=!0))}},{key:"commit",value:function(){for(;M(this.value);){var t=this.value
this.value=U,t(this)}this.value!==U&&this.committer.commit()}}]),t}(),W=function(){function t(e){n(this,t),this.value=void 0,this.__pendingValue=void 0,this.options=e}return i(t,[{key:"appendInto",value:function(t){this.startNode=t.appendChild(R()),this.endNode=t.appendChild(R())}},{key:"insertAfterNode",value:function(t){this.startNode=t,this.endNode=t.nextSibling}},{key:"appendIntoPart",value:function(t){t.__insert(this.startNode=R()),t.__insert(this.endNode=R())}},{key:"insertAfterPart",value:function(t){t.__insert(this.startNode=R()),this.endNode=t.endNode,t.endNode=this.startNode}},{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;M(this.__pendingValue);){var t=this.__pendingValue
this.__pendingValue=U,t(this)}var e=this.__pendingValue
e!==U&&(q(e)?e!==this.value&&this.__commitText(e):e instanceof I?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):z(e)?this.__commitIterable(e):e===$?(this.value=$,this.clear()):this.__commitText(e))}},{key:"__insert",value:function(t){this.endNode.parentNode.insertBefore(t,this.endNode)}},{key:"__commitNode",value:function(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}},{key:"__commitText",value:function(t){var e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t)
e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}},{key:"__commitTemplateResult",value:function(t){var e=this.options.templateFactory(t)
if(this.value instanceof F&&this.value.template===e)this.value.update(t.values)
else{var n=new F(e,t.processor,this.options),r=n._clone()
n.update(t.values),this.__commitNode(r),this.value=n}}},{key:"__commitIterable",value:function(e){Array.isArray(this.value)||(this.value=[],this.clear())
var n,r,i=this.value,o=0,a=_(e)
try{for(a.s();!(r=a.n()).done;){var s=r.value
void 0===(n=i[o])&&(n=new t(this.options),i.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(i[o-1])),n.setValue(s),n.commit(),o++}}catch(t){a.e(t)}finally{a.f()}o<i.length&&(i.length=o,this.clear(n&&n.endNode))}},{key:"clear",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode
x(this.startNode.parentNode,t.nextSibling,this.endNode)}}]),t}(),G=function(){function t(e,r,i){if(n(this,t),this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression")
this.element=e,this.name=r,this.strings=i}return i(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;M(this.__pendingValue);){var t=this.__pendingValue
this.__pendingValue=U,t(this)}if(this.__pendingValue!==U){var e=!!this.__pendingValue
this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=U}}}]),t}(),Y=function(t){u(r,D)
var e=v(r)
function r(t,i,o){var a
return n(this,r),(a=e.call(this,t,i,o)).single=2===o.length&&""===o[0]&&""===o[1],a}return i(r,[{key:"_createPart",value:function(){return new J(this)}},{key:"_getValue",value:function(){return this.single?this.parts[0].value:y(l(r.prototype),"_getValue",this).call(this)}},{key:"commit",value:function(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}]),r}(),J=function(t){u(r,H)
var e=v(r)
function r(){return n(this,r),e.apply(this,arguments)}return r}(),X=!1
try{var K={get capture(){return X=!0,!1}}
window.addEventListener("test",K,K),window.removeEventListener("test",K,K)}catch(t){}var Q=function(){function t(e,r,i){var o=this
n(this,t),this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=r,this.eventContext=i,this.__boundHandleEvent=function(t){return o.handleEvent(t)}}return i(t,[{key:"setValue",value:function(t){this.__pendingValue=t}},{key:"commit",value:function(){for(;M(this.__pendingValue);){var t=this.__pendingValue
this.__pendingValue=U,t(this)}if(this.__pendingValue!==U){var e=this.__pendingValue,n=this.value,r=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),i=null!=e&&(null==n||r)
r&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=Z(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=U}}},{key:"handleEvent",value:function(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}]),t}(),Z=function(t){return t&&(X?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)}
function tt(t){var e=et.get(t.type)
void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},et.set(t.type,e))
var n=e.stringsArray.get(t.strings)
if(void 0!==n)return n
var r=t.strings.join(P)
return void 0===(n=e.keyString.get(r))&&(n=new O(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}var et=new Map,nt=new WeakMap,rt=new(function(){function t(){n(this,t)}return i(t,[{key:"handleAttributeExpressions",value:function(t,e,n,r){var i=e[0]
return"."===i?new Y(t,e.slice(1),n).parts:"@"===i?[new Q(t,e.slice(1),r.eventContext)]:"?"===i?[new G(t,e.slice(1),n)]:new D(t,e,n).parts}},{key:"handleTextExpression",value:function(t){return new W(t)}}]),t}());(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1")
var it=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]
return new I(t,n,"html",rt)},ot=function(t,e){return"".concat(t,"--").concat(e)},at=!0
void 0===window.ShadyCSS?at=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),at=!1)
var st=function(t){return function(e){var n=ot(e.type,t),r=et.get(n)
void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},et.set(n,r))
var i=r.stringsArray.get(e.strings)
if(void 0!==i)return i
var o=e.strings.join(P)
if(void 0===(i=r.keyString.get(o))){var a=e.getTemplateElement()
at&&window.ShadyCSS.prepareTemplateDom(a,t),i=new O(e,a),r.keyString.set(o,i)}return r.stringsArray.set(e.strings,i),i}},ut=["html","svg"],lt=new Set
window.JSCompiler_renameProperty=function(t,e){return t}
var ct={toAttribute:function(t,e){switch(e){case Boolean:return t?"":null
case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){switch(e){case Boolean:return null!==t
case Number:return null===t?null:Number(t)
case Object:case Array:return JSON.parse(t)}return t}},ht=function(t,e){return e!==t&&(e==e||t==t)},pt={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:ht},dt=function(r){u(l,d(HTMLElement))
var o,a,s=v(l)
function l(){var t
return n(this,l),(t=s.call(this))._updateState=0,t._instanceProperties=void 0,t._updatePromise=new Promise(function(e){return t._enableUpdatingResolver=e}),t._changedProperties=new Map,t._reflectingProperties=void 0,t.initialize(),t}return i(l,[{key:"initialize",value:function(){this._saveInstanceProperties(),this._requestUpdate()}},{key:"_saveInstanceProperties",value:function(){var t=this
this.constructor._classProperties.forEach(function(e,n){if(t.hasOwnProperty(n)){var r=t[n]
delete t[n],t._instanceProperties||(t._instanceProperties=new Map),t._instanceProperties.set(n,r)}})}},{key:"_applyInstanceProperties",value:function(){var t=this
this._instanceProperties.forEach(function(e,n){return t[n]=e}),this._instanceProperties=void 0}},{key:"connectedCallback",value:function(){this.enableUpdating()}},{key:"enableUpdating",value:function(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(t,e,n){e!==n&&this._attributeToProperty(t,n)}},{key:"_propertyToAttribute",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:pt,r=this.constructor,i=r._attributeNameForProperty(t,n)
if(void 0!==i){var o=r._propertyValueToAttribute(e,n)
if(void 0===o)return
this._updateState=8|this._updateState,null==o?this.removeAttribute(i):this.setAttribute(i,o),this._updateState=-9&this._updateState}}},{key:"_attributeToProperty",value:function(t,e){if(!(8&this._updateState)){var n=this.constructor,r=n._attributeToPropertyMap.get(t)
if(void 0!==r){var i=n.getPropertyOptions(r)
this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(e,i),this._updateState=-17&this._updateState}}}},{key:"_requestUpdate",value:function(t,e){var n=!0
if(void 0!==t){var r=this.constructor,i=r.getPropertyOptions(t)
r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}},{key:"requestUpdate",value:function(t,e){return this._requestUpdate(t,e),this.updateComplete}},{key:"_enqueueUpdate",value:(o=regeneratorRuntime.mark(function t(){var e
return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._updateState=4|this._updateState,t.prev=1,t.next=4,this._updatePromise
case 4:t.next=8
break
case 6:t.prev=6,t.t0=t.catch(1)
case 8:if(null==(e=this.performUpdate())){t.next=12
break}return t.next=12,e
case 12:return t.abrupt("return",!this._hasRequestedUpdate)
case 13:case"end":return t.stop()}},t,this,[[1,6]])}),a=function(){var t=this,n=arguments
return new Promise(function(r,i){var a=o.apply(t,n)
function s(t){e(a,r,i,s,u,"next",t)}function u(t){e(a,r,i,s,u,"throw",t)}s(void 0)})},function(){return a.apply(this,arguments)})},{key:"performUpdate",value:function(){this._instanceProperties&&this._applyInstanceProperties()
var t=!1,e=this._changedProperties
try{(t=this.shouldUpdate(e))?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}},{key:"_markUpdated",value:function(){this._changedProperties=new Map,this._updateState=-5&this._updateState}},{key:"_getUpdateComplete",value:function(){return this._updatePromise}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this
void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(function(t,n){return e._propertyToAttribute(n,e[n],t)}),this._reflectingProperties=void 0),this._markUpdated()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}},{key:"_hasRequestedUpdate",get:function(){return 4&this._updateState}},{key:"hasUpdated",get:function(){return 1&this._updateState}},{key:"updateComplete",get:function(){return this._getUpdateComplete()}}],[{key:"_ensureClassProperties",value:function(){var t=this
if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map
var e=Object.getPrototypeOf(this)._classProperties
void 0!==e&&e.forEach(function(e,n){return t._classProperties.set(n,e)})}}},{key:"createProperty",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:pt
if(this._ensureClassProperties(),this._classProperties.set(e,n),!n.noAccessor&&!this.prototype.hasOwnProperty(e)){var r="symbol"===t(e)?Symbol():"__".concat(e),i=this.getPropertyDescriptor(e,r,n)
void 0!==i&&Object.defineProperty(this.prototype,e,i)}}},{key:"getPropertyDescriptor",value:function(t,e,n){return{get:function(){return this[e]},set:function(n){var r=this[t]
this[e]=n,this._requestUpdate(t,r)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){return this._classProperties&&this._classProperties.get(t)||pt}},{key:"finalize",value:function(){var t=Object.getPrototypeOf(this)
if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){var e,n=this.properties,r=_([].concat(g(Object.getOwnPropertyNames(n)),g("function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(n):[])))
try{for(r.s();!(e=r.n()).done;){var i=e.value
this.createProperty(i,n[i])}}catch(t){r.e(t)}finally{r.f()}}}},{key:"_attributeNameForProperty",value:function(t,e){var n=e.attribute
return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}},{key:"_valueHasChanged",value:function(t,e){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:ht)(t,e)}},{key:"_propertyValueFromAttribute",value:function(t,e){var n=e.type,r=e.converter||ct,i="function"==typeof r?r:r.fromAttribute
return i?i(t,n):t}},{key:"_propertyValueToAttribute",value:function(t,e){if(void 0!==e.reflect){var n=e.type,r=e.converter
return(r&&r.toAttribute||ct.toAttribute)(t,n)}}},{key:"observedAttributes",get:function(){var t=this
this.finalize()
var e=[]
return this._classProperties.forEach(function(n,r){var i=t._attributeNameForProperty(r,n)
void 0!==i&&(t._attributeToPropertyMap.set(i,r),e.push(i))}),e}}]),l}()
dt.finalized=!0
var ft=function(t){return function(e){return"function"==typeof e?function(t,e){return window.customElements.define(t,e),e}(t,e):function(t,e){return{kind:e.kind,elements:e.elements,finisher:function(e){window.customElements.define(t,e)}}}(t,e)}}
function vt(t){return function(e,n){return void 0!==n?function(t,e,n){e.constructor.createProperty(n,t)}(t,e,n):function(t,e){return"method"!==e.kind||!e.descriptor||"value"in e.descriptor?{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer:function(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher:function(n){n.createProperty(e.key,t)}}:Object.assign(Object.assign({},e),{finisher:function(n){n.createProperty(e.key,t)}})}(t,e)}}var yt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,mt=Symbol(),gt=function(){function t(e,r){if(n(this,t),r!==mt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.")
this.cssText=e}return i(t,[{key:"toString",value:function(){return this.cssText}},{key:"styleSheet",get:function(){return void 0===this._styleSheet&&(yt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}}]),t}(),bt=function(t){return new gt(String(t),mt)},wt=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]
var i=n.reduce(function(e,n,r){return e+function(t){if(t instanceof gt)return t.cssText
if("number"==typeof t)return t
throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(t,". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."))}(n)+t[r+1]},t[0])
return new gt(i,mt)};(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1")
var _t={},St=function(t){u(r,dt)
var e=v(r)
function r(){return n(this,r),e.apply(this,arguments)}return i(r,[{key:"initialize",value:function(){y(l(r.prototype),"initialize",this).call(this),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}},{key:"createRenderRoot",value:function(){return this.attachShadow({mode:"open"})}},{key:"adoptStyles",value:function(){var t=this.constructor._styles
0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?yt?this.renderRoot.adoptedStyleSheets=t.map(function(t){return t.styleSheet}):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(function(t){return t.cssText}),this.localName))}},{key:"connectedCallback",value:function(){y(l(r.prototype),"connectedCallback",this).call(this),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}},{key:"update",value:function(t){var e=this,n=this.render()
y(l(r.prototype),"update",this).call(this,t),n!==_t&&this.constructor.render(n,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(function(t){var n=document.createElement("style")
n.textContent=t.cssText,e.renderRoot.appendChild(n)}))}},{key:"render",value:function(){return _t}}],[{key:"getStyles",value:function(){return this.styles}},{key:"_getUniqueStyles",value:function(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_styles",this))){var t=this.getStyles()
if(void 0===t)this._styles=[]
else if(Array.isArray(t)){var e=function t(e,n){return e.reduceRight(function(e,n){return Array.isArray(n)?t(n,e):(e.add(n),e)},n)}(t,new Set),n=[]
e.forEach(function(t){return n.unshift(t)}),this._styles=n}else this._styles=[t]}}}]),r}()
St.finalized=!0,St.render=function(e,n,r){if(!r||"object"!==t(r)||!r.scopeName)throw new Error("The `scopeName` option is required.")
var i=r.scopeName,o=nt.has(n),a=at&&11===n.nodeType&&!!n.host,s=a&&!lt.has(i),u=s?document.createDocumentFragment():n
if(function(t,e,n){var r=nt.get(e)
void 0===r&&(x(e,e.firstChild),nt.set(e,r=new W(Object.assign({templateFactory:tt},n))),r.appendInto(e)),r.setValue(t),r.commit()}(e,u,Object.assign({templateFactory:st(i)},r)),s){var l=nt.get(u)
nt.delete(u),function(t,e,n){lt.add(t)
var r=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),o=i.length
if(0!==o){for(var a=document.createElement("style"),s=0;s<o;s++){var u=i[s]
u.parentNode.removeChild(u),a.textContent+=u.textContent}!function(t){ut.forEach(function(e){var n=et.get(ot(e,t))
void 0!==n&&n.keyString.forEach(function(t){var e=t.element.content,n=new Set
Array.from(e.querySelectorAll("style")).forEach(function(t){n.add(t)}),j(t,n)})})}(t)
var l=r.content
n?function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=t.element.content,i=t.parts
if(null!=n)for(var o=document.createTreeWalker(r,133,null,!1),a=L(i),s=0,u=-1;o.nextNode();)for(u++,o.currentNode===n&&(s=V(e),n.parentNode.insertBefore(e,n));-1!==a&&i[a].index===u;){if(s>0){for(;-1!==a;)i[a].index+=s,a=L(i,a)
return}a=L(i,a)}else r.appendChild(e)}(n,a,l.firstChild):l.insertBefore(a,l.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t)
var c=l.querySelector("style")
if(window.ShadyCSS.nativeShadow&&null!==c)e.insertBefore(c.cloneNode(!0),e.firstChild)
else if(n){l.insertBefore(a,l.firstChild)
var h=new Set
h.add(a),j(n,h)}}else window.ShadyCSS.prepareTemplateStyles(r,t)}(i,u,l.value instanceof F?l.value.template:void 0),x(n,n.firstChild),n.appendChild(u),nt.set(n,l)}!o&&a&&window.ShadyCSS.styleElement(n.host)}
var kt=":host {\n\tdisplay: block;\n\tpadding: 20px 20px 30px;\n\ttext-align: center;\n\tbackground-color: #fff;\n\tmargin-bottom: 20px;\n}\n\n.big {\n\tfont-size: 45px;\n\tfont-weight: bold;\n\tmargin: 10px 0;\n}\n\np {\n\tfont-weight: 600;\n}\n\nimg {\n\twidth: 200px;\n}\n\n.button {\n\t--button-border-radius: 4px;\n}\n"
function xt(t){return bt(t)}function Pt(e,n,r,i){var o,a=arguments.length,s=a<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,r):i
if("object"===("undefined"==typeof Reflect?"undefined":t(Reflect))&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,n,r,i)
else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(s=(a<3?o(s):a>3?o(n,r,s):o(n,r))||s)
return a>3&&s&&Object.defineProperty(n,r,s),s}function Et(e,n){if("object"===("undefined"==typeof Reflect?"undefined":t(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}var Ct=new Map
function Ot(t,e,n,r,i){var o=Array.isArray(e)?e:[e],a=Math.random().toString(),s=function(t){return null==i?n(t):function(t,e,n){var r=Ct.get(n)
null!=r&&window.clearTimeout(r),Ct.set(n,window.setTimeout(function(){t(),Ct.delete(n)},e))}(function(){return n(t)},i,a)}
return o.forEach(function(e){return t.addEventListener(e,s,r)}),function(){return o.forEach(function(e){return t.removeEventListener(e,s,r)})}}function Nt(t){t.forEach(function(t){return t()}),t.length=0}function At(t){t.preventDefault(),t.stopPropagation()}function Rt(t,e){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))/2}var Tt=xt("*{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-tap-highlight-color:transparent;box-sizing:border-box}")
function jt(){var t=m([""])
return jt=function(){return t},t}var Vt={easing:"ease-out",fill:"both"},Lt=function(t){u(r,St)
var e=v(r)
function r(){var t
return n(this,r),(t=e.apply(this,arguments)).unbounded=!1,t.centered=!1,t.overlay=!1,t.disabled=!1,t.focusable=!1,t.autoRelease=!1,t.initialDuration=350,t.releaseDuration=500,t.role="presentation",t.target=f(t),t.listeners=[],t.rippleAnimationListeners=[],t}return i(r,[{key:"connectedCallback",value:function(){y(l(r.prototype),"connectedCallback",this).call(this),this.addListeners()}},{key:"disconnectedCallback",value:function(){y(l(r.prototype),"disconnectedCallback",this).call(this),this.removeListeners()}},{key:"updated",value:function(t){y(l(r.prototype),"updated",this).call(this,t),t.has("target")&&null!=this.target&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){null!=this.target&&this.listeners.push(Ot(this.target,"mousedown",this.spawnRipple.bind(this),{passive:!0}),Ot(this.target,"focusin",this.onFocusIn.bind(this),{passive:!0}),Ot(this.target,"focusout",this.onFocusOut.bind(this),{passive:!0}))}},{key:"removeListeners",value:function(){Nt(this.listeners)}},{key:"spawnRipple",value:function(t,e){if(this.disabled)return function(){}
this.releaseRipple()
var n=this.getBoundingClientRect(),r=0,i=0
if(this.centered||null==t)r=n.width/2,i=n.height/2
else{var o=function(t){var e,n=!1
null!=t.changedTouches?(e=t.changedTouches[0],n=!0):e=t
var r=e
return{clientX:r.clientX,clientY:r.clientY,pageX:r.pageX,pageY:r.pageY,isTouch:n}}(t),a=o.clientX,s=o.clientY
r=a-n.left,i=s-n.top}var u=this.showRippleAtCoords({x:r,y:i},e)
return this.rippleAnimationListeners.push(u),null==this.target||this.focusable||this.rippleAnimationListeners.push(Ot(window,"mouseup",this.releaseRipple.bind(this),{passive:!0})),u}},{key:"releaseRipple",value:function(){Nt(this.rippleAnimationListeners)}},{key:"showRippleAtCoords",value:function(t,e){var n=this,r=t.x,i=t.y,o=this.offsetWidth,a=this.offsetHeight,u=function(t,e){var n=function(t){return new WebKitCSSMatrix(t.webkitTransform)}(t)
return{x:0===(null==e?t.getPropertyValue("width"):e.width)?0:n.a,y:0===(null==e?t.getPropertyValue("height"):e.height)?0:n.d}}(window.getComputedStyle(this)),l=e||{},c=l.releaseDuration,h=void 0===c?this.releaseDuration:c,p=l.initialDuration,d=void 0===p?this.initialDuration:p,f=l.autoRelease,v=void 0===f?this.autoRelease:f
r*=0===u.x?1:1/u.x,i*=0===u.y?1:1/u.y
var y=document.createElement("div")
y.classList.add("ripple")
var m=Rt(o,a),g=Rt(Math.abs(o/2-r),Math.abs(a/2-i)),b=Math.round(m+2*g),w=2*b
Object.assign(y.style,{left:"".concat(r-b,"px"),top:"".concat(i-b,"px"),height:"".concat(w,"px"),width:"".concat(w,"px"),position:"absolute"})
var _=!1,S=function(){if(!_){_=!0
var t=function(t){if("0px"===t.getPropertyValue("width")||"0px"===t.getPropertyValue("height"))return 0
var e=t.getPropertyValue("opacity")
return isNaN(+e)?0:Number(e)}(window.getComputedStyle(y))
y.animate({opacity:[t.toString(),"0"]},s({},Vt,{duration:h})).onfinish=function(){requestAnimationFrame(function(){n.shadowRoot.contains(y)&&n.shadowRoot.removeChild(y)})}}}
return this.shadowRoot.appendChild(y),v&&S(),y.animate({transform:["scale(0)","scale(1)"]},s({},Vt,{duration:d})),S}},{key:"onFocusIn",value:function(){this.focusable&&this.spawnRipple(void 0,{autoRelease:!1})}},{key:"onFocusOut",value:function(){this.focusable&&this.releaseRipple()}},{key:"render",value:function(){return it(jt())}}]),r}()
Lt.styles=[Tt,xt(":host{position:relative;display:block;outline:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([unbounded])){overflow:hidden}:host([overlay]){position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%)}.ripple{background:var(--ripple-color,currentcolor);opacity:var(--ripple-opacity,.15);border-radius:100%;pointer-events:none;will-change:opacity,transform}")],Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],Lt.prototype,"unbounded",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],Lt.prototype,"centered",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],Lt.prototype,"overlay",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],Lt.prototype,"disabled",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],Lt.prototype,"focusable",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],Lt.prototype,"autoRelease",void 0),Pt([vt({type:Number}),Et("design:type",Number)],Lt.prototype,"initialDuration",void 0),Pt([vt({type:Number}),Et("design:type",Number)],Lt.prototype,"releaseDuration",void 0),Pt([vt({type:String,reflect:!0}),Et("design:type",String)],Lt.prototype,"role",void 0),Pt([vt({type:Object}),Et("design:type",EventTarget)],Lt.prototype,"target",void 0),Lt=Pt([ft("wl-ripple")],Lt)
var Bt,Mt=(Bt=function(t){return function(e){if(void 0===t&&e instanceof H){if(t!==e.value){var n=e.committer.name
e.committer.element.removeAttribute(n)}}else e.setValue(t)}},function(){var t=Bt.apply(void 0,arguments)
return B.set(t,!0),t})
var Ut=function(t){u(r,St)
var e=v(r)
function r(){var t
return n(this,r),(t=e.apply(this,arguments)).disabled=!1,t.readonly=!1,t.required=!1,t.value="",t.formElementId=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10
return"_".concat(Math.random().toString(36).substr(2,t))}(),t.listeners=[],t}return i(r,[{key:"checkValidity",value:function(){return this.$formElement.checkValidity()}},{key:"setCustomValidity",value:function(t){return this.$formElement.setCustomValidity(t)}},{key:"firstUpdated",value:function(t){y(l(r.prototype),"firstUpdated",this).call(this,t),this.$formElement=this.queryFormElement(),this.appendChild(this.$formElement)}},{key:"disconnectedCallback",value:function(){y(l(r.prototype),"disconnectedCallback",this).call(this),Nt(this.listeners)}},{key:"updated",value:function(t){y(l(r.prototype),"updated",this).call(this,t),t.has("disabled")&&function(t,e){for(var n in e){var r=!0===e[n]?"":e[n]
r||""===r||0===r?t.getAttribute(n)!==r&&t.setAttribute(n,r.toString()):t.hasAttribute(n)&&t.removeAttribute(n)}}(this,{"aria-disabled":this.disabled.toString()}),this.updateTabindex(t)}},{key:"updateTabindex",value:function(t){var e,n
t.has("disabled")&&(e=this,n=this.disabled,e.tabIndex=n?-1:e.tabIndex<0?0:e.tabIndex)}},{key:"getFormItemValue",value:function(){return null!=this.$formElement?this.$formElement.value:this.initialValue||""}},{key:"queryFormElement",value:function(){return this.shadowRoot.querySelector("#".concat(this.formElementId))}},{key:"validationMessage",get:function(){return this.$formElement.validationMessage}},{key:"valid",get:function(){return null==this.validity||this.validity.valid}},{key:"validity",get:function(){return this.$formElement.validity}},{key:"willValidate",get:function(){return this.$formElement.willValidate}},{key:"form",get:function(){return this.$formElement.form}}]),r}()
function $t(){var t=m([' <button style="display: none;" id="','" aria-hidden="true" tabindex="-1" type="','" ?disabled="','" name="','" value="','"> </button> '])
return $t=function(){return t},t}Ut.styles=[Tt,xt("")],Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],Ut.prototype,"disabled",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],Ut.prototype,"readonly",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],Ut.prototype,"required",void 0),Pt([vt({type:String}),Et("design:type",String)],Ut.prototype,"name",void 0),Pt([vt({type:String}),Et("design:type",String)],Ut.prototype,"value",void 0)
var Ft=function(t){u(r,Ut)
var e=v(r)
function r(){var t
return n(this,r),(t=e.apply(this,arguments)).type="submit",t}return i(r,[{key:"connectedCallback",value:function(){y(l(r.prototype),"connectedCallback",this).call(this),this.listeners.push(Ot(this,"click",this.onClick.bind(this)),Ot(this,"keydown",this.onKeyDown.bind(this)))}},{key:"onKeyDown",value:function(t){"Enter"!==t.code&&"Space"!==t.code||(this.click(),At(t),null!=this.$ripple&&this.$ripple.spawnRipple(void 0,{autoRelease:!0}))}},{key:"onClick",value:function(t){this.disabled?At(t):t.target!=this||t.defaultPrevented||this.$formElement.dispatchEvent(new MouseEvent("click",{relatedTarget:this,composed:!0}))}},{key:"renderFormElement",value:function(){return it($t(),this.formElementId,this.type,this.disabled,Mt(this.name),Mt(this.value))}}]),r}()
function It(){var t=m([' <wl-ripple id="ripple" overlay .target="','" ?disabled="','"></wl-ripple> <slot></slot> '," "])
return It=function(){return t},t}Ft.styles=[].concat(g(Ut.styles),[xt("")]),Pt([vt({type:String}),Et("design:type",String)],Ft.prototype,"type",void 0)
var qt=function(t){u(r,Ft)
var e=v(r)
function r(){var t
return n(this,r),(t=e.apply(this,arguments)).inverted=!1,t.fab=!1,t.outlined=!1,t.noRipple=!1,t.flat=!1,t.role="button",t}return i(r,[{key:"render",value:function(){return it(It(),this,this.disabled||this.noRipple,this.renderFormElement())}}]),r}()
function zt(){var t=m(["",""])
return zt=function(){return t},t}function Dt(){var t=m(["",""])
return Dt=function(){return t},t}function Ht(){var t=m(["\n\t\t\t<p>","</p>\n\t\t\t<img src=",' alt="">\n\t\t\t<p class="big">','</p>\n\t\t\t<wl-button class="button" inverted @click=',">Click me!</wl-button>\n\t\t"])
return Ht=function(){return t},t}qt.styles=[].concat(g(Ft.styles),[xt(':host{--_button-color:var(--button-color,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));--_button-shadow-color:var(--button-shadow-color,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.2));color:var(--_button-color);background:var(--_button-bg);box-shadow:var(--elevation-1,0 .3125rem .625rem -.125rem var(--_button-shadow-color));padding:var(--button-padding,.75rem 1.5rem);font-size:var(--button-font-size,1rem);border-radius:var(--button-border-radius,.5rem);font-family:var(--button-font-family,var(--font-family-sans-serif,"Roboto Condensed",helvetica,sans-serif));transition:var(--button-transition,box-shadow var(--transition-duration-slow,.25s) var(--transition-timing-function-ease,ease),background var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease),color var(--transition-duration-medium,.18s) var(--transition-timing-function-ease,ease));letter-spacing:var(--button-letter-spacing,.125rem);line-height:1;text-transform:uppercase;cursor:pointer;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:relative;z-index:0}:host,:host([fab]){display:inline-flex;align-items:center;justify-content:center}:host([fab]){width:var(--button-fab-size,2.5rem);height:var(--button-fab-size,2.5rem);padding:0;letter-spacing:0;border-radius:100%}:host([inverted]){color:var(--_button-bg);background:var(--_button-color)}:host([outlined]){border:var(--button-border-outlined,.125rem solid currentColor)}:host(:focus),:host(:hover){--_button-color:var(--button-color-hover,hsl(var(--primary-400-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg-hover,hsl(var(--primary-400,var(--primary-hue,224),var(--primary-saturation,42%),var(--primary-lightness,52%))));--_button-shadow-color:var(--button-shadow-color-hover,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),0.5));will-change:background,color,box-shadow}:host(:active){--_button-color:var(--button-color-active,hsl(var(--primary-500-contrast,var(--primary-hue-contrast,0),var(--primary-saturation-contrast,100%),var(--primary-lightness-contrast,100%))));--_button-bg:var(--button-bg-active,hsl(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%))));box-shadow:var(--elevation-4,0 .5rem 1rem -.125rem var(--_button-shadow-color))}:host([flat]:focus){background:var(--button-bg-active-flat,hsla(var(--primary-500,var(--primary-hue,224),var(--primary-saturation,47%),var(--primary-lightness,38%)),.08))}:host([disabled]){--_button-color:var(--button-color-disabled,hsl(var(--shade-400-contrast,var(--shade-hue-contrast,0),var(--shade-saturation-contrast,100%),var(--shade-lightness-contrast,100%))));--_button-bg:var(--button-bg-disabled,hsl(var(--shade-400,var(--shade-hue,200),var(--shade-saturation,4%),var(--shade-lightness,65%))));box-shadow:none;cursor:default;pointer-events:none}:host([flat]){box-shadow:none;background:none}#ripple{z-index:-1}')]),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],qt.prototype,"inverted",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],qt.prototype,"fab",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],qt.prototype,"outlined",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],qt.prototype,"noRipple",void 0),Pt([vt({type:Boolean,reflect:!0}),Et("design:type",Boolean)],qt.prototype,"flat",void 0),Pt([vt({type:String,reflect:!0}),Et("design:type",String)],qt.prototype,"role",void 0),Pt([("#ripple",function(t,e){var n={get:function(){return this.renderRoot.querySelector("#ripple")},enumerable:!0,configurable:!0}
return void 0!==e?function(t,e,n){Object.defineProperty(e,n,t)}(n,t,e):function(t,e){return{kind:"method",placement:"prototype",key:e.key,descriptor:t}}(n,t)}),Et("design:type",Lt)],qt.prototype,"$ripple",void 0),qt=Pt([ft("wl-button")],qt)
var Wt=function(t){u(r,St)
var e=v(r)
function r(){var t
return n(this,r),(t=e.call(this)).greeting="Hello World!",t.counter=0,t}return i(r,null,[{key:"properties",get:function(){return{greeting:{type:String},counter:{type:Number},imgSrc:{type:String,attribute:"img-src"}}}}]),i(r,[{key:"render",value:function(){return it(Ht(),this.greeting,this.imgSrc,this.counter,this._onButtonClick)}},{key:"_onButtonClick",value:function(){this.counter++}}],[{key:"styles",get:function(){return[wt(Dt(),bt(kt)),wt(zt(),bt(".button {\n\tcolor: inherit;\n\tbackground-color: #fdca2c;\n\t--button-shadow-color: transparent;\n\t--button-shadow-color-hover: transparent;\n}\n"))]}}]),r}()
customElements.define("component-one",Wt)
var Gt=document.createElement("template")
Gt.innerHTML="\n<style>\n\t".concat(kt,'\n\n\t.button {\n\t\tbackground-color: #e44d26;\n\t}\n</style>\n\n<p></p>\n<img src="" alt="">\n<p class="big"></p>\n<wl-button flat class="button">Click me!</wl-button>')
var Yt=function(t){u(r,d(HTMLElement))
var e=v(r)
function r(){var t
return n(this,r),(t=e.call(this)).imgSrc="",t.greeting="",t}return i(r,[{key:"connectedCallback",value:function(){this.imgSrc=this.getAttribute("img-src")||this.imgSrc,this.greeting=this.getAttribute("greeting")||this.greeting,this.counter=0,this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Gt.content.cloneNode(!0)),this.$image=this.shadowRoot.querySelector("img"),this.$paragraph=this.shadowRoot.querySelector("p"),this.$bigParagraph=this.shadowRoot.querySelector(".big"),this.$button=this.shadowRoot.querySelector(".button"),this.$image.src=this.imgSrc,this.$paragraph.textContent=this.greeting,this.$bigParagraph.textContent=this.counter,this.$button.addEventListener("click",this._onButtonClick.bind(this)))}}]),i(r,[{key:"_onButtonClick",value:function(){this.counter++,this.$bigParagraph.textContent=this.counter}}]),r}()
customElements.define("component-two",Yt)}()
