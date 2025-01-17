var u2=Object.defineProperty;var l2=(e,r,i)=>r in e?u2(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i;var Au=(e,r,i)=>l2(e,typeof r!="symbol"?r+"":r,i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(o){if(o.ep)return;o.ep=!0;const d=i(o);fetch(o.href,d)}})();function Vy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dd={exports:{}},Ds={},Nd={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function d2(){if(dh)return Fe;dh=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function f(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,b={};function T(z,N,ne){this.props=z,this.context=N,this.refs=b,this.updater=ne||x}T.prototype.isReactComponent={},T.prototype.setState=function(z,N){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,N,"setState")},T.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function A(){}A.prototype=T.prototype;function C(z,N,ne){this.props=z,this.context=N,this.refs=b,this.updater=ne||x}var O=C.prototype=new A;O.constructor=C,S(O,T.prototype),O.isPureReactComponent=!0;var R=Array.isArray,B=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Y(z,N,ne){var ce,xe={},Ce=null,je=null;if(N!=null)for(ce in N.ref!==void 0&&(je=N.ref),N.key!==void 0&&(Ce=""+N.key),N)B.call(N,ce)&&!U.hasOwnProperty(ce)&&(xe[ce]=N[ce]);var We=arguments.length-2;if(We===1)xe.children=ne;else if(1<We){for(var De=Array(We),Ve=0;Ve<We;Ve++)De[Ve]=arguments[Ve+2];xe.children=De}if(z&&z.defaultProps)for(ce in We=z.defaultProps,We)xe[ce]===void 0&&(xe[ce]=We[ce]);return{$$typeof:e,type:z,key:Ce,ref:je,props:xe,_owner:F.current}}function ae(z,N){return{$$typeof:e,type:z.type,key:N,ref:z.ref,props:z.props,_owner:z._owner}}function oe(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function me(z){var N={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ne){return N[ne]})}var ge=/\/+/g;function le(z,N){return typeof z=="object"&&z!==null&&z.key!=null?me(""+z.key):N.toString(36)}function Te(z,N,ne,ce,xe){var Ce=typeof z;(Ce==="undefined"||Ce==="boolean")&&(z=null);var je=!1;if(z===null)je=!0;else switch(Ce){case"string":case"number":je=!0;break;case"object":switch(z.$$typeof){case e:case r:je=!0}}if(je)return je=z,xe=xe(je),z=ce===""?"."+le(je,0):ce,R(xe)?(ne="",z!=null&&(ne=z.replace(ge,"$&/")+"/"),Te(xe,N,ne,"",function(Ve){return Ve})):xe!=null&&(oe(xe)&&(xe=ae(xe,ne+(!xe.key||je&&je.key===xe.key?"":(""+xe.key).replace(ge,"$&/")+"/")+z)),N.push(xe)),1;if(je=0,ce=ce===""?".":ce+":",R(z))for(var We=0;We<z.length;We++){Ce=z[We];var De=ce+le(Ce,We);je+=Te(Ce,N,ne,De,xe)}else if(De=f(z),typeof De=="function")for(z=De.call(z),We=0;!(Ce=z.next()).done;)Ce=Ce.value,De=ce+le(Ce,We++),je+=Te(Ce,N,ne,De,xe);else if(Ce==="object")throw N=String(z),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return je}function Oe(z,N,ne){if(z==null)return z;var ce=[],xe=0;return Te(z,ce,"","",function(Ce){return N.call(ne,Ce,xe++)}),ce}function ve(z){if(z._status===-1){var N=z._result;N=N(),N.then(function(ne){(z._status===0||z._status===-1)&&(z._status=1,z._result=ne)},function(ne){(z._status===0||z._status===-1)&&(z._status=2,z._result=ne)}),z._status===-1&&(z._status=0,z._result=N)}if(z._status===1)return z._result.default;throw z._result}var Se={current:null},q={transition:null},J={ReactCurrentDispatcher:Se,ReactCurrentBatchConfig:q,ReactCurrentOwner:F};function G(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:Oe,forEach:function(z,N,ne){Oe(z,function(){N.apply(this,arguments)},ne)},count:function(z){var N=0;return Oe(z,function(){N++}),N},toArray:function(z){return Oe(z,function(N){return N})||[]},only:function(z){if(!oe(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Fe.Component=T,Fe.Fragment=i,Fe.Profiler=o,Fe.PureComponent=C,Fe.StrictMode=s,Fe.Suspense=m,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J,Fe.act=G,Fe.cloneElement=function(z,N,ne){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ce=S({},z.props),xe=z.key,Ce=z.ref,je=z._owner;if(N!=null){if(N.ref!==void 0&&(Ce=N.ref,je=F.current),N.key!==void 0&&(xe=""+N.key),z.type&&z.type.defaultProps)var We=z.type.defaultProps;for(De in N)B.call(N,De)&&!U.hasOwnProperty(De)&&(ce[De]=N[De]===void 0&&We!==void 0?We[De]:N[De])}var De=arguments.length-2;if(De===1)ce.children=ne;else if(1<De){We=Array(De);for(var Ve=0;Ve<De;Ve++)We[Ve]=arguments[Ve+2];ce.children=We}return{$$typeof:e,type:z.type,key:xe,ref:Ce,props:ce,_owner:je}},Fe.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:d,_context:z},z.Consumer=z},Fe.createElement=Y,Fe.createFactory=function(z){var N=Y.bind(null,z);return N.type=z,N},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(z){return{$$typeof:h,render:z}},Fe.isValidElement=oe,Fe.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:ve}},Fe.memo=function(z,N){return{$$typeof:g,type:z,compare:N===void 0?null:N}},Fe.startTransition=function(z){var N=q.transition;q.transition={};try{z()}finally{q.transition=N}},Fe.unstable_act=G,Fe.useCallback=function(z,N){return Se.current.useCallback(z,N)},Fe.useContext=function(z){return Se.current.useContext(z)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(z){return Se.current.useDeferredValue(z)},Fe.useEffect=function(z,N){return Se.current.useEffect(z,N)},Fe.useId=function(){return Se.current.useId()},Fe.useImperativeHandle=function(z,N,ne){return Se.current.useImperativeHandle(z,N,ne)},Fe.useInsertionEffect=function(z,N){return Se.current.useInsertionEffect(z,N)},Fe.useLayoutEffect=function(z,N){return Se.current.useLayoutEffect(z,N)},Fe.useMemo=function(z,N){return Se.current.useMemo(z,N)},Fe.useReducer=function(z,N,ne){return Se.current.useReducer(z,N,ne)},Fe.useRef=function(z){return Se.current.useRef(z)},Fe.useState=function(z){return Se.current.useState(z)},Fe.useSyncExternalStore=function(z,N,ne){return Se.current.useSyncExternalStore(z,N,ne)},Fe.useTransition=function(){return Se.current.useTransition()},Fe.version="18.3.1",Fe}var ch;function Gc(){return ch||(ch=1,Nd.exports=d2()),Nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function c2(){if(fh)return Ds;fh=1;var e=Gc(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(h,m,g){var _,v={},f=null,x=null;g!==void 0&&(f=""+g),m.key!==void 0&&(f=""+m.key),m.ref!==void 0&&(x=m.ref);for(_ in m)s.call(m,_)&&!d.hasOwnProperty(_)&&(v[_]=m[_]);if(h&&h.defaultProps)for(_ in m=h.defaultProps,m)v[_]===void 0&&(v[_]=m[_]);return{$$typeof:r,type:h,key:f,ref:x,props:v,_owner:o.current}}return Ds.Fragment=i,Ds.jsx=u,Ds.jsxs=u,Ds}var ph;function f2(){return ph||(ph=1,Dd.exports=c2()),Dd.exports}var Pe=f2(),ot=Gc();const p2=Vy(ot);var Ru={},Ld={exports:{}},Xt={},Ud={exports:{}},jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function h2(){return hh||(hh=1,function(e){function r(q,J){var G=q.length;q.push(J);e:for(;0<G;){var z=G-1>>>1,N=q[z];if(0<o(N,J))q[z]=J,q[G]=N,G=z;else break e}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var J=q[0],G=q.pop();if(G!==J){q[0]=G;e:for(var z=0,N=q.length,ne=N>>>1;z<ne;){var ce=2*(z+1)-1,xe=q[ce],Ce=ce+1,je=q[Ce];if(0>o(xe,G))Ce<N&&0>o(je,xe)?(q[z]=je,q[Ce]=G,z=Ce):(q[z]=xe,q[ce]=G,z=ce);else if(Ce<N&&0>o(je,G))q[z]=je,q[Ce]=G,z=Ce;else break e}}return J}function o(q,J){var G=q.sortIndex-J.sortIndex;return G!==0?G:q.id-J.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var u=Date,h=u.now();e.unstable_now=function(){return u.now()-h}}var m=[],g=[],_=1,v=null,f=3,x=!1,S=!1,b=!1,T=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(q){for(var J=i(g);J!==null;){if(J.callback===null)s(g);else if(J.startTime<=q)s(g),J.sortIndex=J.expirationTime,r(m,J);else break;J=i(g)}}function R(q){if(b=!1,O(q),!S)if(i(m)!==null)S=!0,ve(B);else{var J=i(g);J!==null&&Se(R,J.startTime-q)}}function B(q,J){S=!1,b&&(b=!1,A(Y),Y=-1),x=!0;var G=f;try{for(O(J),v=i(m);v!==null&&(!(v.expirationTime>J)||q&&!me());){var z=v.callback;if(typeof z=="function"){v.callback=null,f=v.priorityLevel;var N=z(v.expirationTime<=J);J=e.unstable_now(),typeof N=="function"?v.callback=N:v===i(m)&&s(m),O(J)}else s(m);v=i(m)}if(v!==null)var ne=!0;else{var ce=i(g);ce!==null&&Se(R,ce.startTime-J),ne=!1}return ne}finally{v=null,f=G,x=!1}}var F=!1,U=null,Y=-1,ae=5,oe=-1;function me(){return!(e.unstable_now()-oe<ae)}function ge(){if(U!==null){var q=e.unstable_now();oe=q;var J=!0;try{J=U(!0,q)}finally{J?le():(F=!1,U=null)}}else F=!1}var le;if(typeof C=="function")le=function(){C(ge)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Oe=Te.port2;Te.port1.onmessage=ge,le=function(){Oe.postMessage(null)}}else le=function(){T(ge,0)};function ve(q){U=q,F||(F=!0,le())}function Se(q,J){Y=T(function(){q(e.unstable_now())},J)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,ve(B))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return i(m)},e.unstable_next=function(q){switch(f){case 1:case 2:case 3:var J=3;break;default:J=f}var G=f;f=J;try{return q()}finally{f=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,J){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var G=f;f=q;try{return J()}finally{f=G}},e.unstable_scheduleCallback=function(q,J,G){var z=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?z+G:z):G=z,q){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=G+N,q={id:_++,callback:J,priorityLevel:q,startTime:G,expirationTime:N,sortIndex:-1},G>z?(q.sortIndex=G,r(g,q),i(m)===null&&q===i(g)&&(b?(A(Y),Y=-1):b=!0,Se(R,G-z))):(q.sortIndex=N,r(m,q),S||x||(S=!0,ve(B))),q},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(q){var J=f;return function(){var G=f;f=J;try{return q.apply(this,arguments)}finally{f=G}}}}(jd)),jd}var mh;function m2(){return mh||(mh=1,Ud.exports=h2()),Ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function g2(){if(gh)return Xt;gh=1;var e=Gc(),r=m2();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function d(t,n){u(t,n),u(t+"Capture",n)}function u(t,n){for(o[t]=n,t=0;t<n.length;t++)s.add(n[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function f(t){return m.call(v,t)?!0:m.call(_,t)?!1:g.test(t)?v[t]=!0:(_[t]=!0,!1)}function x(t,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S(t,n,a,l){if(n===null||typeof n>"u"||x(t,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function b(t,n,a,l,p,y,E){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=t,this.type=n,this.sanitizeURL=y,this.removeEmptyString=E}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){T[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];T[n]=new b(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){T[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){T[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){T[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){T[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){T[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){T[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){T[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(A,C);T[n]=new b(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(A,C);T[n]=new b(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(A,C);T[n]=new b(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){T[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),T.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){T[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function O(t,n,a,l){var p=T.hasOwnProperty(n)?T[n]:null;(p!==null?p.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(S(n,a,p,l)&&(a=null),l||p===null?f(n)&&(a===null?t.removeAttribute(n):t.setAttribute(n,""+a)):p.mustUseProperty?t[p.propertyName]=a===null?p.type===3?!1:"":a:(n=p.attributeName,l=p.attributeNamespace,a===null?t.removeAttribute(n):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,l?t.setAttributeNS(l,n,a):t.setAttribute(n,a))))}var R=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),ae=Symbol.for("react.profiler"),oe=Symbol.for("react.provider"),me=Symbol.for("react.context"),ge=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),Oe=Symbol.for("react.memo"),ve=Symbol.for("react.lazy"),Se=Symbol.for("react.offscreen"),q=Symbol.iterator;function J(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var G=Object.assign,z;function N(t){if(z===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+t}var ne=!1;function ce(t,n){if(!t||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(V){var l=V}Reflect.construct(t,[],n)}else{try{n.call()}catch(V){l=V}t.call(n.prototype)}else{try{throw Error()}catch(V){l=V}t()}}catch(V){if(V&&l&&typeof V.stack=="string"){for(var p=V.stack.split(`
`),y=l.stack.split(`
`),E=p.length-1,P=y.length-1;1<=E&&0<=P&&p[E]!==y[P];)P--;for(;1<=E&&0<=P;E--,P--)if(p[E]!==y[P]){if(E!==1||P!==1)do if(E--,P--,0>P||p[E]!==y[P]){var D=`
`+p[E].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=E&&0<=P);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?N(t):""}function xe(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=ce(t.type,!1),t;case 11:return t=ce(t.type.render,!1),t;case 1:return t=ce(t.type,!0),t;default:return""}}function Ce(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case F:return"Portal";case ae:return"Profiler";case Y:return"StrictMode";case le:return"Suspense";case Te:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case me:return(t.displayName||"Context")+".Consumer";case oe:return(t._context.displayName||"Context")+".Provider";case ge:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Oe:return n=t.displayName||null,n!==null?n:Ce(t.type)||"Memo";case ve:n=t._payload,t=t._init;try{return Ce(t(n))}catch{}}return null}function je(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ce(n);case 8:return n===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function We(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function De(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ve(t){var n=De(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,y=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return p.call(this)},set:function(E){l=""+E,y.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ft(t){t._valueTracker||(t._valueTracker=Ve(t))}function et(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=De(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function it(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function It(t,n){var a=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function xn(t,n){var a=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;a=We(n.value!=null?n.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Zr(t,n){n=n.checked,n!=null&&O(t,"checked",n,!1)}function Dn(t,n){Zr(t,n);var a=We(n.value),l=n.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Bi(t,n.type,a):n.hasOwnProperty("defaultValue")&&Bi(t,n.type,We(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Pi(t,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,a||n===t.value||(t.value=n),t.defaultValue=n}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Bi(t,n,a){(n!=="number"||it(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var pr=Array.isArray;function Zn(t,n,a,l){if(t=t.options,n){n={};for(var p=0;p<a.length;p++)n["$"+a[p]]=!0;for(a=0;a<t.length;a++)p=n.hasOwnProperty("$"+t[a].value),t[a].selected!==p&&(t[a].selected=p),p&&l&&(t[a].defaultSelected=!0)}else{for(a=""+We(a),n=null,p=0;p<t.length;p++){if(t[p].value===a){t[p].selected=!0,l&&(t[p].defaultSelected=!0);return}n!==null||t[p].disabled||(n=t[p])}n!==null&&(n.selected=!0)}}function Mi(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Oa(t,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(i(92));if(pr(a)){if(1<a.length)throw Error(i(93));a=a[0]}n=a}n==null&&(n=""),a=n}t._wrapperState={initialValue:We(a)}}function Di(t,n){var a=We(n.value),l=We(n.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),n.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function no(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function ro(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xr(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?ro(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var hr,Pa=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,l,p){MSApp.execUnsafeLocalFunction(function(){return t(n,a,l,p)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(hr=hr||document.createElement("div"),hr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=hr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function en(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ba=["Webkit","ms","Moz","O"];Object.keys(Qe).forEach(function(t){Ba.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Qe[n]=Qe[t]})});function Ma(t,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||Qe.hasOwnProperty(t)&&Qe[t]?(""+n).trim():n+"px"}function Ni(t,n){t=t.style;for(var a in n)if(n.hasOwnProperty(a)){var l=a.indexOf("--")===0,p=Ma(a,n[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,p):t[a]=p}}var Nn=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bn(t,n){if(n){if(Nn[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Li(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wt=null;function Ui(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ji=null,Xn=null,Jn=null;function Jr(t){if(t=xs(t)){if(typeof ji!="function")throw Error(i(280));var n=t.stateNode;n&&(n=qo(n),ji(t.stateNode,t.type,n))}}function io(t){Xn?Jn?Jn.push(t):Jn=[t]:Xn=t}function ao(){if(Xn){var t=Xn,n=Jn;if(Jn=Xn=null,Jr(t),n)for(t=0;t<n.length;t++)Jr(n[t])}}function so(t,n){return t(n)}function oo(){}var Fi=!1;function Da(t,n,a){if(Fi)return t(n,a);Fi=!0;try{return so(t,n,a)}finally{Fi=!1,(Xn!==null||Jn!==null)&&(oo(),ao())}}function mr(t,n){var a=t.stateNode;if(a===null)return null;var l=qo(a);if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,n,typeof a));return a}var Wi=!1;if(h)try{var at={};Object.defineProperty(at,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",at,at),window.removeEventListener("test",at,at)}catch{Wi=!1}function uo(t,n,a,l,p,y,E,P,D){var V=Array.prototype.slice.call(arguments,3);try{n.apply(a,V)}catch(te){this.onError(te)}}var gr=!1,yr=null,ei=!1,Ln=null,lo={onError:function(t){gr=!0,yr=t}};function co(t,n,a,l,p,y,E,P,D){gr=!1,yr=null,uo.apply(lo,arguments)}function fo(t,n,a,l,p,y,E,P,D){if(co.apply(this,arguments),gr){if(gr){var V=yr;gr=!1,yr=null}else throw Error(i(198));ei||(ei=!0,Ln=V)}}function Un(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function Na(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function La(t){if(Un(t)!==t)throw Error(i(188))}function po(t){var n=t.alternate;if(!n){if(n=Un(t),n===null)throw Error(i(188));return n!==t?null:t}for(var a=t,l=n;;){var p=a.return;if(p===null)break;var y=p.alternate;if(y===null){if(l=p.return,l!==null){a=l;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===a)return La(p),t;if(y===l)return La(p),n;y=y.sibling}throw Error(i(188))}if(a.return!==l.return)a=p,l=y;else{for(var E=!1,P=p.child;P;){if(P===a){E=!0,a=p,l=y;break}if(P===l){E=!0,l=p,a=y;break}P=P.sibling}if(!E){for(P=y.child;P;){if(P===a){E=!0,a=y,l=p;break}if(P===l){E=!0,l=y,a=p;break}P=P.sibling}if(!E)throw Error(i(189))}}if(a.alternate!==l)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:n}function Ua(t){return t=po(t),t!==null?ja(t):null}function ja(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=ja(t);if(n!==null)return n;t=t.sibling}return null}var Fa=r.unstable_scheduleCallback,Wa=r.unstable_cancelCallback,ho=r.unstable_shouldYield,jn=r.unstable_requestPaint,ut=r.unstable_now,dn=r.unstable_getCurrentPriorityLevel,ti=r.unstable_ImmediatePriority,Vi=r.unstable_UserBlockingPriority,Vt=r.unstable_NormalPriority,mo=r.unstable_LowPriority,go=r.unstable_IdlePriority,tn=null,cn=null;function Va(t){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(tn,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:qt,Ha=Math.log,Ht=Math.LN2;function qt(t){return t>>>=0,t===0?32:31-(Ha(t)/Ht|0)|0}var wr=64,Hi=4194304;function ni(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qi(t,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,p=t.suspendedLanes,y=t.pingedLanes,E=a&268435455;if(E!==0){var P=E&~p;P!==0?l=ni(P):(y&=E,y!==0&&(l=ni(y)))}else E=a&~p,E!==0?l=ni(E):y!==0&&(l=ni(y));if(l===0)return 0;if(n!==0&&n!==l&&!(n&p)&&(p=l&-l,y=n&-n,p>=y||p===16&&(y&4194240)!==0))return n;if(l&4&&(l|=a&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)a=31-ht(n),p=1<<a,l|=t[a],n&=~p;return l}function ol(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ul(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,p=t.expirationTimes,y=t.pendingLanes;0<y;){var E=31-ht(y),P=1<<E,D=p[E];D===-1?(!(P&a)||P&l)&&(p[E]=ol(P,n)):D<=n&&(t.expiredLanes|=P),y&=~P}}function qa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yo(){var t=wr;return wr<<=1,!(wr&4194240)&&(wr=64),t}function Gi(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ri(t,n,a){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-ht(n),t[n]=a}function ll(t,n){var a=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var p=31-ht(a),y=1<<p;n[p]=0,l[p]=-1,t[p]=-1,a&=~y}}function Ga(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-ht(a),p=1<<l;p&n|t[l]&n&&(t[l]|=n),a&=~p}}var Ke=0;function wo(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vo,Ka,_o,$o,xo,Ki=!1,vr=[],nn=null,Fn=null,fn=null,ii=new Map,ai=new Map,Wn=[],Qa="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ya(t,n){switch(t){case"focusin":case"focusout":nn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":ii.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(n.pointerId)}}function si(t,n,a,l,p,y){return t===null||t.nativeEvent!==y?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:y,targetContainers:[p]},n!==null&&(n=xs(n),n!==null&&Ka(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,p!==null&&n.indexOf(p)===-1&&n.push(p),t)}function Qi(t,n,a,l,p){switch(n){case"focusin":return nn=si(nn,t,n,a,l,p),!0;case"dragenter":return Fn=si(Fn,t,n,a,l,p),!0;case"mouseover":return fn=si(fn,t,n,a,l,p),!0;case"pointerover":var y=p.pointerId;return ii.set(y,si(ii.get(y)||null,t,n,a,l,p)),!0;case"gotpointercapture":return y=p.pointerId,ai.set(y,si(ai.get(y)||null,t,n,a,l,p)),!0}return!1}function Sn(t){var n=yi(t.target);if(n!==null){var a=Un(n);if(a!==null){if(n=a.tag,n===13){if(n=Na(a),n!==null){t.blockedOn=n,xo(t.priority,function(){_o(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Mt(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ja(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Wt=l,a.target.dispatchEvent(l),Wt=null}else return n=xs(a),n!==null&&Ka(n),t.blockedOn=a,!1;n.shift()}return!0}function Za(t,n,a){Mt(t)&&a.delete(n)}function Yi(){Ki=!1,nn!==null&&Mt(nn)&&(nn=null),Fn!==null&&Mt(Fn)&&(Fn=null),fn!==null&&Mt(fn)&&(fn=null),ii.forEach(Za),ai.forEach(Za)}function _r(t,n){t.blockedOn===n&&(t.blockedOn=null,Ki||(Ki=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Yi)))}function $r(t){function n(p){return _r(p,t)}if(0<vr.length){_r(vr[0],t);for(var a=1;a<vr.length;a++){var l=vr[a];l.blockedOn===t&&(l.blockedOn=null)}}for(nn!==null&&_r(nn,t),Fn!==null&&_r(Fn,t),fn!==null&&_r(fn,t),ii.forEach(n),ai.forEach(n),a=0;a<Wn.length;a++)l=Wn[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Wn.length&&(a=Wn[0],a.blockedOn===null);)Sn(a),a.blockedOn===null&&Wn.shift()}var xr=R.ReactCurrentBatchConfig,br=!0;function dl(t,n,a,l){var p=Ke,y=xr.transition;xr.transition=null;try{Ke=1,Xa(t,n,a,l)}finally{Ke=p,xr.transition=y}}function bo(t,n,a,l){var p=Ke,y=xr.transition;xr.transition=null;try{Ke=4,Xa(t,n,a,l)}finally{Ke=p,xr.transition=y}}function Xa(t,n,a,l){if(br){var p=Ja(t,n,a,l);if(p===null)Cl(t,n,l,er,a),Ya(t,l);else if(Qi(p,t,n,a,l))l.stopPropagation();else if(Ya(t,l),n&4&&-1<Qa.indexOf(t)){for(;p!==null;){var y=xs(p);if(y!==null&&vo(y),y=Ja(t,n,a,l),y===null&&Cl(t,n,l,er,a),y===p)break;p=y}p!==null&&l.stopPropagation()}else Cl(t,n,l,null,a)}}var er=null;function Ja(t,n,a,l){if(er=null,t=Ui(l),t=yi(t),t!==null)if(n=Un(t),n===null)t=null;else if(a=n.tag,a===13){if(t=Na(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return er=t,null}function So(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(dn()){case ti:return 1;case Vi:return 4;case Vt:case mo:return 16;case go:return 536870912;default:return 16}default:return 16}}var rn=null,es=null,oi=null;function ko(){if(oi)return oi;var t,n=es,a=n.length,l,p="value"in rn?rn.value:rn.textContent,y=p.length;for(t=0;t<a&&n[t]===p[t];t++);var E=a-t;for(l=1;l<=E&&n[a-l]===p[y-l];l++);return oi=p.slice(t,1<l?1-l:void 0)}function Zi(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xi(){return!0}function ts(){return!1}function Dt(t){function n(a,l,p,y,E){this._reactName=a,this._targetInst=p,this.type=l,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(a=t[P],this[P]=a?a(y):y[P]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Xi:ts,this.isPropagationStopped=ts,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),n}var Sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Dt(Sr),ui=G({},Sr,{view:0,detail:0}),cl=Dt(ui),rs,is,li,Ji=G({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==li&&(li&&t.type==="mousemove"?(rs=t.screenX-li.screenX,is=t.screenY-li.screenY):is=rs=0,li=t),rs)},movementY:function(t){return"movementY"in t?t.movementY:is}}),Eo=Dt(Ji),fl=G({},Ji,{dataTransfer:0}),pl=Dt(fl),kr=G({},ui,{relatedTarget:0}),ea=Dt(kr),Co=G({},Sr,{animationName:0,elapsedTime:0,pseudoElement:0}),hl=Dt(Co),ml=G({},Sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),To=Dt(ml),Io=G({},Sr,{data:0}),zo=Dt(Io),as={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ao={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yl(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=gl[t])?!!n[t]:!1}function ss(){return yl}var wl=G({},ui,{key:function(t){if(t.key){var n=as[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ao[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(t){return t.type==="keypress"?Zi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vl=Dt(wl),Ro=G({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=Dt(Ro),_l=G({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),$l=Dt(_l),xl=G({},Sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bl=Dt(xl),ta=G({},Ji,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),di=Dt(ta),Po=[9,13,27,32],os=h&&"CompositionEvent"in window,ci=null;h&&"documentMode"in document&&(ci=document.documentMode);var us=h&&"TextEvent"in window&&!ci,na=h&&(!os||ci&&8<ci&&11>=ci),ls=" ",ds=!1;function cs(t,n){switch(t){case"keyup":return Po.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var tr=!1;function Bo(t,n){switch(t){case"compositionend":return fs(n);case"keypress":return n.which!==32?null:(ds=!0,ls);case"textInput":return t=n.data,t===ls&&ds?null:t;default:return null}}function Sl(t,n){if(tr)return t==="compositionend"||!os&&cs(t,n)?(t=ko(),oi=es=rn=null,tr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return na&&n.locale!=="ko"?null:n.data;default:return null}}var Mo={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ps(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Mo[t.type]:n==="textarea"}function hs(t,n,a,l){io(l),n=Wo(n,"onChange"),0<n.length&&(a=new ns("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var fi=null,Er=null;function kl(t){Ef(t,0)}function pi(t){var n=ca(t);if(et(n))return t}function ra(t,n){if(t==="change")return n}var Do=!1;if(h){var _e;if(h){var ia="oninput"in document;if(!ia){var ms=document.createElement("div");ms.setAttribute("oninput","return;"),ia=typeof ms.oninput=="function"}_e=ia}else _e=!1;Do=_e&&(!document.documentMode||9<document.documentMode)}function hi(){fi&&(fi.detachEvent("onpropertychange",nr),Er=fi=null)}function nr(t){if(t.propertyName==="value"&&pi(Er)){var n=[];hs(n,Er,t,Ui(t)),Da(kl,n)}}function aa(t,n,a){t==="focusin"?(hi(),fi=n,Er=a,fi.attachEvent("onpropertychange",nr)):t==="focusout"&&hi()}function pn(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pi(Er)}function gs(t,n){if(t==="click")return pi(n)}function No(t,n){if(t==="input"||t==="change")return pi(n)}function Lo(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Nt=typeof Object.is=="function"?Object.is:Lo;function Vn(t,n){if(Nt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var p=a[l];if(!m.call(n,p)||!Nt(t[p],n[p]))return!1}return!0}function ys(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ws(t,n){var a=ys(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ys(a)}}function mi(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?mi(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function sa(){for(var t=window,n=it();n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=it(t.document)}return n}function gi(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Uo(t){var n=sa(),a=t.focusedElem,l=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&mi(a.ownerDocument.documentElement,a)){if(l!==null&&gi(a)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(t,a.value.length);else if(t=(n=a.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var p=a.textContent.length,y=Math.min(l.start,p);l=l.end===void 0?y:Math.min(l.end,p),!t.extend&&y>l&&(p=l,l=y,y=p),p=ws(a,y);var E=ws(a,l);p&&E&&(t.rangeCount!==1||t.anchorNode!==p.node||t.anchorOffset!==p.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(n=n.createRange(),n.setStart(p.node,p.offset),t.removeAllRanges(),y>l?(t.addRange(n),t.extend(E.node,E.offset)):(n.setEnd(E.node,E.offset),t.addRange(n)))}}for(n=[],t=a;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)t=n[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jo=h&&"documentMode"in document&&11>=document.documentMode,rr=null,oa=null,Cr=null,ua=!1;function c(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ua||rr==null||rr!==it(l)||(l=rr,"selectionStart"in l&&gi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Cr&&Vn(Cr,l)||(Cr=l,l=Wo(oa,"onSelect"),0<l.length&&(n=new ns("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=rr)))}function w(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $={animationend:w("Animation","AnimationEnd"),animationiteration:w("Animation","AnimationIteration"),animationstart:w("Animation","AnimationStart"),transitionend:w("Transition","TransitionEnd")},k={},I={};h&&(I=document.createElement("div").style,"AnimationEvent"in window||(delete $.animationend.animation,delete $.animationiteration.animation,delete $.animationstart.animation),"TransitionEvent"in window||delete $.transitionend.transition);function M(t){if(k[t])return k[t];if(!$[t])return t;var n=$[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in I)return k[t]=n[a];return t}var K=M("animationend"),X=M("animationiteration"),ue=M("animationstart"),de=M("transitionend"),Ee=new Map,Ue="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Le(t,n){Ee.set(t,n),d(n,[t])}for(var H=0;H<Ue.length;H++){var Ne=Ue[H],tt=Ne.toLowerCase(),ir=Ne[0].toUpperCase()+Ne.slice(1);Le(tt,"on"+ir)}Le(K,"onAnimationEnd"),Le(X,"onAnimationIteration"),Le(ue,"onAnimationStart"),Le("dblclick","onDoubleClick"),Le("focusin","onFocus"),Le("focusout","onBlur"),Le(de,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function kf(t,n,a){var l=t.type||"unknown-event";t.currentTarget=a,fo(l,n,void 0,t),t.currentTarget=null}function Ef(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],p=l.event;l=l.listeners;e:{var y=void 0;if(n)for(var E=l.length-1;0<=E;E--){var P=l[E],D=P.instance,V=P.currentTarget;if(P=P.listener,D!==y&&p.isPropagationStopped())break e;kf(p,P,V),y=D}else for(E=0;E<l.length;E++){if(P=l[E],D=P.instance,V=P.currentTarget,P=P.listener,D!==y&&p.isPropagationStopped())break e;kf(p,P,V),y=D}}}if(ei)throw t=Ln,ei=!1,Ln=null,t}function nt(t,n){var a=n[Ol];a===void 0&&(a=n[Ol]=new Set);var l=t+"__bubble";a.has(l)||(Cf(n,t,2,!1),a.add(l))}function El(t,n,a){var l=0;n&&(l|=4),Cf(a,t,l,n)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function vs(t){if(!t[Fo]){t[Fo]=!0,s.forEach(function(a){a!=="selectionchange"&&(_1.has(a)||El(a,!1,t),El(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Fo]||(n[Fo]=!0,El("selectionchange",!1,n))}}function Cf(t,n,a,l){switch(So(n)){case 1:var p=dl;break;case 4:p=bo;break;default:p=Xa}a=p.bind(null,n,a,t),p=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(p=!0),l?p!==void 0?t.addEventListener(n,a,{capture:!0,passive:p}):t.addEventListener(n,a,!0):p!==void 0?t.addEventListener(n,a,{passive:p}):t.addEventListener(n,a,!1)}function Cl(t,n,a,l,p){var y=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var P=l.stateNode.containerInfo;if(P===p||P.nodeType===8&&P.parentNode===p)break;if(E===4)for(E=l.return;E!==null;){var D=E.tag;if((D===3||D===4)&&(D=E.stateNode.containerInfo,D===p||D.nodeType===8&&D.parentNode===p))return;E=E.return}for(;P!==null;){if(E=yi(P),E===null)return;if(D=E.tag,D===5||D===6){l=y=E;continue e}P=P.parentNode}}l=l.return}Da(function(){var V=y,te=Ui(a),ie=[];e:{var ee=Ee.get(t);if(ee!==void 0){var fe=ns,ye=t;switch(t){case"keypress":if(Zi(a)===0)break e;case"keydown":case"keyup":fe=vl;break;case"focusin":ye="focus",fe=ea;break;case"focusout":ye="blur",fe=ea;break;case"beforeblur":case"afterblur":fe=ea;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=Eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=pl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=$l;break;case K:case X:case ue:fe=hl;break;case de:fe=bl;break;case"scroll":fe=cl;break;case"wheel":fe=di;break;case"copy":case"cut":case"paste":fe=To;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=Oo}var $e=(n&4)!==0,mt=!$e&&t==="scroll",j=$e?ee!==null?ee+"Capture":null:ee;$e=[];for(var L=V,W;L!==null;){W=L;var se=W.stateNode;if(W.tag===5&&se!==null&&(W=se,j!==null&&(se=mr(L,j),se!=null&&$e.push(_s(L,se,W)))),mt)break;L=L.return}0<$e.length&&(ee=new fe(ee,ye,null,a,te),ie.push({event:ee,listeners:$e}))}}if(!(n&7)){e:{if(ee=t==="mouseover"||t==="pointerover",fe=t==="mouseout"||t==="pointerout",ee&&a!==Wt&&(ye=a.relatedTarget||a.fromElement)&&(yi(ye)||ye[ar]))break e;if((fe||ee)&&(ee=te.window===te?te:(ee=te.ownerDocument)?ee.defaultView||ee.parentWindow:window,fe?(ye=a.relatedTarget||a.toElement,fe=V,ye=ye?yi(ye):null,ye!==null&&(mt=Un(ye),ye!==mt||ye.tag!==5&&ye.tag!==6)&&(ye=null)):(fe=null,ye=V),fe!==ye)){if($e=Eo,se="onMouseLeave",j="onMouseEnter",L="mouse",(t==="pointerout"||t==="pointerover")&&($e=Oo,se="onPointerLeave",j="onPointerEnter",L="pointer"),mt=fe==null?ee:ca(fe),W=ye==null?ee:ca(ye),ee=new $e(se,L+"leave",fe,a,te),ee.target=mt,ee.relatedTarget=W,se=null,yi(te)===V&&($e=new $e(j,L+"enter",ye,a,te),$e.target=W,$e.relatedTarget=mt,se=$e),mt=se,fe&&ye)t:{for($e=fe,j=ye,L=0,W=$e;W;W=la(W))L++;for(W=0,se=j;se;se=la(se))W++;for(;0<L-W;)$e=la($e),L--;for(;0<W-L;)j=la(j),W--;for(;L--;){if($e===j||j!==null&&$e===j.alternate)break t;$e=la($e),j=la(j)}$e=null}else $e=null;fe!==null&&Tf(ie,ee,fe,$e,!1),ye!==null&&mt!==null&&Tf(ie,mt,ye,$e,!0)}}e:{if(ee=V?ca(V):window,fe=ee.nodeName&&ee.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ee.type==="file")var ke=ra;else if(ps(ee))if(Do)ke=No;else{ke=pn;var Ie=aa}else(fe=ee.nodeName)&&fe.toLowerCase()==="input"&&(ee.type==="checkbox"||ee.type==="radio")&&(ke=gs);if(ke&&(ke=ke(t,V))){hs(ie,ke,a,te);break e}Ie&&Ie(t,ee,V),t==="focusout"&&(Ie=ee._wrapperState)&&Ie.controlled&&ee.type==="number"&&Bi(ee,"number",ee.value)}switch(Ie=V?ca(V):window,t){case"focusin":(ps(Ie)||Ie.contentEditable==="true")&&(rr=Ie,oa=V,Cr=null);break;case"focusout":Cr=oa=rr=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,c(ie,a,te);break;case"selectionchange":if(jo)break;case"keydown":case"keyup":c(ie,a,te)}var ze;if(os)e:{switch(t){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else tr?cs(t,a)&&(Re="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Re="onCompositionStart");Re&&(na&&a.locale!=="ko"&&(tr||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&tr&&(ze=ko()):(rn=te,es="value"in rn?rn.value:rn.textContent,tr=!0)),Ie=Wo(V,Re),0<Ie.length&&(Re=new zo(Re,t,null,a,te),ie.push({event:Re,listeners:Ie}),ze?Re.data=ze:(ze=fs(a),ze!==null&&(Re.data=ze)))),(ze=us?Bo(t,a):Sl(t,a))&&(V=Wo(V,"onBeforeInput"),0<V.length&&(te=new zo("onBeforeInput","beforeinput",null,a,te),ie.push({event:te,listeners:V}),te.data=ze))}Ef(ie,n)})}function _s(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wo(t,n){for(var a=n+"Capture",l=[];t!==null;){var p=t,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=mr(t,a),y!=null&&l.unshift(_s(t,y,p)),y=mr(t,n),y!=null&&l.push(_s(t,y,p))),t=t.return}return l}function la(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tf(t,n,a,l,p){for(var y=n._reactName,E=[];a!==null&&a!==l;){var P=a,D=P.alternate,V=P.stateNode;if(D!==null&&D===l)break;P.tag===5&&V!==null&&(P=V,p?(D=mr(a,y),D!=null&&E.unshift(_s(a,D,P))):p||(D=mr(a,y),D!=null&&E.push(_s(a,D,P)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var $1=/\r\n?/g,x1=/\u0000|\uFFFD/g;function If(t){return(typeof t=="string"?t:""+t).replace($1,`
`).replace(x1,"")}function Vo(t,n,a){if(n=If(n),If(t)!==n&&a)throw Error(i(425))}function Ho(){}var Tl=null,Il=null;function zl(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,b1=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,S1=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(t){return zf.resolve(null).then(t).catch(k1)}:Al;function k1(t){setTimeout(function(){throw t})}function Rl(t,n){var a=n,l=0;do{var p=a.nextSibling;if(t.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(l===0){t.removeChild(p),$r(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=p}while(a);$r(n)}function Ir(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Af(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}var da=Math.random().toString(36).slice(2),Hn="__reactFiber$"+da,$s="__reactProps$"+da,ar="__reactContainer$"+da,Ol="__reactEvents$"+da,E1="__reactListeners$"+da,C1="__reactHandles$"+da;function yi(t){var n=t[Hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ar]||a[Hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Af(t);t!==null;){if(a=t[Hn])return a;t=Af(t)}return n}t=a,a=t.parentNode}return null}function xs(t){return t=t[Hn]||t[ar],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ca(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function qo(t){return t[$s]||null}var Pl=[],fa=-1;function zr(t){return{current:t}}function rt(t){0>fa||(t.current=Pl[fa],Pl[fa]=null,fa--)}function Xe(t,n){fa++,Pl[fa]=t.current,t.current=n}var Ar={},zt=zr(Ar),Gt=zr(!1),wi=Ar;function pa(t,n){var a=t.type.contextTypes;if(!a)return Ar;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in a)p[y]=n[y];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=p),p}function Kt(t){return t=t.childContextTypes,t!=null}function Go(){rt(Gt),rt(zt)}function Rf(t,n,a){if(zt.current!==Ar)throw Error(i(168));Xe(zt,n),Xe(Gt,a)}function Of(t,n,a){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var p in l)if(!(p in n))throw Error(i(108,je(t)||"Unknown",p));return G({},a,l)}function Ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,wi=zt.current,Xe(zt,t),Xe(Gt,Gt.current),!0}function Pf(t,n,a){var l=t.stateNode;if(!l)throw Error(i(169));a?(t=Of(t,n,wi),l.__reactInternalMemoizedMergedChildContext=t,rt(Gt),rt(zt),Xe(zt,t)):rt(Gt),Xe(Gt,a)}var sr=null,Qo=!1,Bl=!1;function Bf(t){sr===null?sr=[t]:sr.push(t)}function T1(t){Qo=!0,Bf(t)}function Rr(){if(!Bl&&sr!==null){Bl=!0;var t=0,n=Ke;try{var a=sr;for(Ke=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}sr=null,Qo=!1}catch(p){throw sr!==null&&(sr=sr.slice(t+1)),Fa(ti,Rr),p}finally{Ke=n,Bl=!1}}return null}var ha=[],ma=0,Yo=null,Zo=0,hn=[],mn=0,vi=null,or=1,ur="";function _i(t,n){ha[ma++]=Zo,ha[ma++]=Yo,Yo=t,Zo=n}function Mf(t,n,a){hn[mn++]=or,hn[mn++]=ur,hn[mn++]=vi,vi=t;var l=or;t=ur;var p=32-ht(l)-1;l&=~(1<<p),a+=1;var y=32-ht(n)+p;if(30<y){var E=p-p%5;y=(l&(1<<E)-1).toString(32),l>>=E,p-=E,or=1<<32-ht(n)+p|a<<p|l,ur=y+t}else or=1<<y|a<<p|l,ur=t}function Ml(t){t.return!==null&&(_i(t,1),Mf(t,1,0))}function Dl(t){for(;t===Yo;)Yo=ha[--ma],ha[ma]=null,Zo=ha[--ma],ha[ma]=null;for(;t===vi;)vi=hn[--mn],hn[mn]=null,ur=hn[--mn],hn[mn]=null,or=hn[--mn],hn[mn]=null}var an=null,sn=null,st=!1,kn=null;function Df(t,n){var a=vn(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=t,n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)}function Nf(t,n){switch(t.tag){case 5:var a=t.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,an=t,sn=Ir(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,an=t,sn=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=vi!==null?{id:or,overflow:ur}:null,t.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=vn(18,null,null,0),a.stateNode=n,a.return=t,t.child=a,an=t,sn=null,!0):!1;default:return!1}}function Nl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ll(t){if(st){var n=sn;if(n){var a=n;if(!Nf(t,n)){if(Nl(t))throw Error(i(418));n=Ir(a.nextSibling);var l=an;n&&Nf(t,n)?Df(l,a):(t.flags=t.flags&-4097|2,st=!1,an=t)}}else{if(Nl(t))throw Error(i(418));t.flags=t.flags&-4097|2,st=!1,an=t}}}function Lf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;an=t}function Xo(t){if(t!==an)return!1;if(!st)return Lf(t),st=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!zl(t.type,t.memoizedProps)),n&&(n=sn)){if(Nl(t))throw Uf(),Error(i(418));for(;n;)Df(t,n),n=Ir(n.nextSibling)}if(Lf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(n===0){sn=Ir(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}t=t.nextSibling}sn=null}}else sn=an?Ir(t.stateNode.nextSibling):null;return!0}function Uf(){for(var t=sn;t;)t=Ir(t.nextSibling)}function ga(){sn=an=null,st=!1}function Ul(t){kn===null?kn=[t]:kn.push(t)}var I1=R.ReactCurrentBatchConfig;function bs(t,n,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var l=a.stateNode}if(!l)throw Error(i(147,t));var p=l,y=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===y?n.ref:(n=function(E){var P=p.refs;E===null?delete P[y]:P[y]=E},n._stringRef=y,n)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function Jo(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function jf(t){var n=t._init;return n(t._payload)}function Ff(t){function n(j,L){if(t){var W=j.deletions;W===null?(j.deletions=[L],j.flags|=16):W.push(L)}}function a(j,L){if(!t)return null;for(;L!==null;)n(j,L),L=L.sibling;return null}function l(j,L){for(j=new Map;L!==null;)L.key!==null?j.set(L.key,L):j.set(L.index,L),L=L.sibling;return j}function p(j,L){return j=Ur(j,L),j.index=0,j.sibling=null,j}function y(j,L,W){return j.index=W,t?(W=j.alternate,W!==null?(W=W.index,W<L?(j.flags|=2,L):W):(j.flags|=2,L)):(j.flags|=1048576,L)}function E(j){return t&&j.alternate===null&&(j.flags|=2),j}function P(j,L,W,se){return L===null||L.tag!==6?(L=Ad(W,j.mode,se),L.return=j,L):(L=p(L,W),L.return=j,L)}function D(j,L,W,se){var ke=W.type;return ke===U?te(j,L,W.props.children,se,W.key):L!==null&&(L.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===ve&&jf(ke)===L.type)?(se=p(L,W.props),se.ref=bs(j,L,W),se.return=j,se):(se=bu(W.type,W.key,W.props,null,j.mode,se),se.ref=bs(j,L,W),se.return=j,se)}function V(j,L,W,se){return L===null||L.tag!==4||L.stateNode.containerInfo!==W.containerInfo||L.stateNode.implementation!==W.implementation?(L=Rd(W,j.mode,se),L.return=j,L):(L=p(L,W.children||[]),L.return=j,L)}function te(j,L,W,se,ke){return L===null||L.tag!==7?(L=Ti(W,j.mode,se,ke),L.return=j,L):(L=p(L,W),L.return=j,L)}function ie(j,L,W){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Ad(""+L,j.mode,W),L.return=j,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case B:return W=bu(L.type,L.key,L.props,null,j.mode,W),W.ref=bs(j,null,L),W.return=j,W;case F:return L=Rd(L,j.mode,W),L.return=j,L;case ve:var se=L._init;return ie(j,se(L._payload),W)}if(pr(L)||J(L))return L=Ti(L,j.mode,W,null),L.return=j,L;Jo(j,L)}return null}function ee(j,L,W,se){var ke=L!==null?L.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return ke!==null?null:P(j,L,""+W,se);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case B:return W.key===ke?D(j,L,W,se):null;case F:return W.key===ke?V(j,L,W,se):null;case ve:return ke=W._init,ee(j,L,ke(W._payload),se)}if(pr(W)||J(W))return ke!==null?null:te(j,L,W,se,null);Jo(j,W)}return null}function fe(j,L,W,se,ke){if(typeof se=="string"&&se!==""||typeof se=="number")return j=j.get(W)||null,P(L,j,""+se,ke);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case B:return j=j.get(se.key===null?W:se.key)||null,D(L,j,se,ke);case F:return j=j.get(se.key===null?W:se.key)||null,V(L,j,se,ke);case ve:var Ie=se._init;return fe(j,L,W,Ie(se._payload),ke)}if(pr(se)||J(se))return j=j.get(W)||null,te(L,j,se,ke,null);Jo(L,se)}return null}function ye(j,L,W,se){for(var ke=null,Ie=null,ze=L,Re=L=0,kt=null;ze!==null&&Re<W.length;Re++){ze.index>Re?(kt=ze,ze=null):kt=ze.sibling;var Ge=ee(j,ze,W[Re],se);if(Ge===null){ze===null&&(ze=kt);break}t&&ze&&Ge.alternate===null&&n(j,ze),L=y(Ge,L,Re),Ie===null?ke=Ge:Ie.sibling=Ge,Ie=Ge,ze=kt}if(Re===W.length)return a(j,ze),st&&_i(j,Re),ke;if(ze===null){for(;Re<W.length;Re++)ze=ie(j,W[Re],se),ze!==null&&(L=y(ze,L,Re),Ie===null?ke=ze:Ie.sibling=ze,Ie=ze);return st&&_i(j,Re),ke}for(ze=l(j,ze);Re<W.length;Re++)kt=fe(ze,j,Re,W[Re],se),kt!==null&&(t&&kt.alternate!==null&&ze.delete(kt.key===null?Re:kt.key),L=y(kt,L,Re),Ie===null?ke=kt:Ie.sibling=kt,Ie=kt);return t&&ze.forEach(function(jr){return n(j,jr)}),st&&_i(j,Re),ke}function $e(j,L,W,se){var ke=J(W);if(typeof ke!="function")throw Error(i(150));if(W=ke.call(W),W==null)throw Error(i(151));for(var Ie=ke=null,ze=L,Re=L=0,kt=null,Ge=W.next();ze!==null&&!Ge.done;Re++,Ge=W.next()){ze.index>Re?(kt=ze,ze=null):kt=ze.sibling;var jr=ee(j,ze,Ge.value,se);if(jr===null){ze===null&&(ze=kt);break}t&&ze&&jr.alternate===null&&n(j,ze),L=y(jr,L,Re),Ie===null?ke=jr:Ie.sibling=jr,Ie=jr,ze=kt}if(Ge.done)return a(j,ze),st&&_i(j,Re),ke;if(ze===null){for(;!Ge.done;Re++,Ge=W.next())Ge=ie(j,Ge.value,se),Ge!==null&&(L=y(Ge,L,Re),Ie===null?ke=Ge:Ie.sibling=Ge,Ie=Ge);return st&&_i(j,Re),ke}for(ze=l(j,ze);!Ge.done;Re++,Ge=W.next())Ge=fe(ze,j,Re,Ge.value,se),Ge!==null&&(t&&Ge.alternate!==null&&ze.delete(Ge.key===null?Re:Ge.key),L=y(Ge,L,Re),Ie===null?ke=Ge:Ie.sibling=Ge,Ie=Ge);return t&&ze.forEach(function(o2){return n(j,o2)}),st&&_i(j,Re),ke}function mt(j,L,W,se){if(typeof W=="object"&&W!==null&&W.type===U&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case B:e:{for(var ke=W.key,Ie=L;Ie!==null;){if(Ie.key===ke){if(ke=W.type,ke===U){if(Ie.tag===7){a(j,Ie.sibling),L=p(Ie,W.props.children),L.return=j,j=L;break e}}else if(Ie.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===ve&&jf(ke)===Ie.type){a(j,Ie.sibling),L=p(Ie,W.props),L.ref=bs(j,Ie,W),L.return=j,j=L;break e}a(j,Ie);break}else n(j,Ie);Ie=Ie.sibling}W.type===U?(L=Ti(W.props.children,j.mode,se,W.key),L.return=j,j=L):(se=bu(W.type,W.key,W.props,null,j.mode,se),se.ref=bs(j,L,W),se.return=j,j=se)}return E(j);case F:e:{for(Ie=W.key;L!==null;){if(L.key===Ie)if(L.tag===4&&L.stateNode.containerInfo===W.containerInfo&&L.stateNode.implementation===W.implementation){a(j,L.sibling),L=p(L,W.children||[]),L.return=j,j=L;break e}else{a(j,L);break}else n(j,L);L=L.sibling}L=Rd(W,j.mode,se),L.return=j,j=L}return E(j);case ve:return Ie=W._init,mt(j,L,Ie(W._payload),se)}if(pr(W))return ye(j,L,W,se);if(J(W))return $e(j,L,W,se);Jo(j,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,L!==null&&L.tag===6?(a(j,L.sibling),L=p(L,W),L.return=j,j=L):(a(j,L),L=Ad(W,j.mode,se),L.return=j,j=L),E(j)):a(j,L)}return mt}var ya=Ff(!0),Wf=Ff(!1),eu=zr(null),tu=null,wa=null,jl=null;function Fl(){jl=wa=tu=null}function Wl(t){var n=eu.current;rt(eu),t._currentValue=n}function Vl(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function va(t,n){tu=t,jl=wa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&(Qt=!0),t.firstContext=null)}function gn(t){var n=t._currentValue;if(jl!==t)if(t={context:t,memoizedValue:n,next:null},wa===null){if(tu===null)throw Error(i(308));wa=t,tu.dependencies={lanes:0,firstContext:t}}else wa=wa.next=t;return n}var $i=null;function Hl(t){$i===null?$i=[t]:$i.push(t)}function Vf(t,n,a,l){var p=n.interleaved;return p===null?(a.next=a,Hl(n)):(a.next=p.next,p.next=a),n.interleaved=a,lr(t,l)}function lr(t,n){t.lanes|=n;var a=t.alternate;for(a!==null&&(a.lanes|=n),a=t,t=t.return;t!==null;)t.childLanes|=n,a=t.alternate,a!==null&&(a.childLanes|=n),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Or=!1;function ql(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Pr(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,qe&2){var p=l.pending;return p===null?n.next=n:(n.next=p.next,p.next=n),l.pending=n,lr(t,a)}return p=l.interleaved,p===null?(n.next=n,Hl(l)):(n.next=p.next,p.next=n),l.interleaved=n,lr(t,a)}function nu(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Ga(t,a)}}function qf(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var p=null,y=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};y===null?p=y=E:y=y.next=E,a=a.next}while(a!==null);y===null?p=y=n:y=y.next=n}else p=y=n;a={baseState:l.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}function ru(t,n,a,l){var p=t.updateQueue;Or=!1;var y=p.firstBaseUpdate,E=p.lastBaseUpdate,P=p.shared.pending;if(P!==null){p.shared.pending=null;var D=P,V=D.next;D.next=null,E===null?y=V:E.next=V,E=D;var te=t.alternate;te!==null&&(te=te.updateQueue,P=te.lastBaseUpdate,P!==E&&(P===null?te.firstBaseUpdate=V:P.next=V,te.lastBaseUpdate=D))}if(y!==null){var ie=p.baseState;E=0,te=V=D=null,P=y;do{var ee=P.lane,fe=P.eventTime;if((l&ee)===ee){te!==null&&(te=te.next={eventTime:fe,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var ye=t,$e=P;switch(ee=n,fe=a,$e.tag){case 1:if(ye=$e.payload,typeof ye=="function"){ie=ye.call(fe,ie,ee);break e}ie=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=$e.payload,ee=typeof ye=="function"?ye.call(fe,ie,ee):ye,ee==null)break e;ie=G({},ie,ee);break e;case 2:Or=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,ee=p.effects,ee===null?p.effects=[P]:ee.push(P))}else fe={eventTime:fe,lane:ee,tag:P.tag,payload:P.payload,callback:P.callback,next:null},te===null?(V=te=fe,D=ie):te=te.next=fe,E|=ee;if(P=P.next,P===null){if(P=p.shared.pending,P===null)break;ee=P,P=ee.next,ee.next=null,p.lastBaseUpdate=ee,p.shared.pending=null}}while(!0);if(te===null&&(D=ie),p.baseState=D,p.firstBaseUpdate=V,p.lastBaseUpdate=te,n=p.shared.interleaved,n!==null){p=n;do E|=p.lane,p=p.next;while(p!==n)}else y===null&&(p.shared.lanes=0);Si|=E,t.lanes=E,t.memoizedState=ie}}function Gf(t,n,a){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],p=l.callback;if(p!==null){if(l.callback=null,l=a,typeof p!="function")throw Error(i(191,p));p.call(l)}}}var Ss={},qn=zr(Ss),ks=zr(Ss),Es=zr(Ss);function xi(t){if(t===Ss)throw Error(i(174));return t}function Gl(t,n){switch(Xe(Es,n),Xe(ks,t),Xe(qn,Ss),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Xr(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Xr(n,t)}rt(qn),Xe(qn,n)}function _a(){rt(qn),rt(ks),rt(Es)}function Kf(t){xi(Es.current);var n=xi(qn.current),a=Xr(n,t.type);n!==a&&(Xe(ks,t),Xe(qn,a))}function Kl(t){ks.current===t&&(rt(qn),rt(ks))}var lt=zr(0);function iu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ql=[];function Yl(){for(var t=0;t<Ql.length;t++)Ql[t]._workInProgressVersionPrimary=null;Ql.length=0}var au=R.ReactCurrentDispatcher,Zl=R.ReactCurrentBatchConfig,bi=0,dt=null,_t=null,bt=null,su=!1,Cs=!1,Ts=0,z1=0;function At(){throw Error(i(321))}function Xl(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Nt(t[a],n[a]))return!1;return!0}function Jl(t,n,a,l,p,y){if(bi=y,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,au.current=t===null||t.memoizedState===null?P1:B1,t=a(l,p),Cs){y=0;do{if(Cs=!1,Ts=0,25<=y)throw Error(i(301));y+=1,bt=_t=null,n.updateQueue=null,au.current=M1,t=a(l,p)}while(Cs)}if(au.current=lu,n=_t!==null&&_t.next!==null,bi=0,bt=_t=dt=null,su=!1,n)throw Error(i(300));return t}function ed(){var t=Ts!==0;return Ts=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?dt.memoizedState=bt=t:bt=bt.next=t,bt}function yn(){if(_t===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var n=bt===null?dt.memoizedState:bt.next;if(n!==null)bt=n,_t=t;else{if(t===null)throw Error(i(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},bt===null?dt.memoizedState=bt=t:bt=bt.next=t}return bt}function Is(t,n){return typeof n=="function"?n(t):n}function td(t){var n=yn(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var l=_t,p=l.baseQueue,y=a.pending;if(y!==null){if(p!==null){var E=p.next;p.next=y.next,y.next=E}l.baseQueue=p=y,a.pending=null}if(p!==null){y=p.next,l=l.baseState;var P=E=null,D=null,V=y;do{var te=V.lane;if((bi&te)===te)D!==null&&(D=D.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),l=V.hasEagerState?V.eagerState:t(l,V.action);else{var ie={lane:te,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};D===null?(P=D=ie,E=l):D=D.next=ie,dt.lanes|=te,Si|=te}V=V.next}while(V!==null&&V!==y);D===null?E=l:D.next=P,Nt(l,n.memoizedState)||(Qt=!0),n.memoizedState=l,n.baseState=E,n.baseQueue=D,a.lastRenderedState=l}if(t=a.interleaved,t!==null){p=t;do y=p.lane,dt.lanes|=y,Si|=y,p=p.next;while(p!==t)}else p===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function nd(t){var n=yn(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var l=a.dispatch,p=a.pending,y=n.memoizedState;if(p!==null){a.pending=null;var E=p=p.next;do y=t(y,E.action),E=E.next;while(E!==p);Nt(y,n.memoizedState)||(Qt=!0),n.memoizedState=y,n.baseQueue===null&&(n.baseState=y),a.lastRenderedState=y}return[y,l]}function Qf(){}function Yf(t,n){var a=dt,l=yn(),p=n(),y=!Nt(l.memoizedState,p);if(y&&(l.memoizedState=p,Qt=!0),l=l.queue,rd(Jf.bind(null,a,l,t),[t]),l.getSnapshot!==n||y||bt!==null&&bt.memoizedState.tag&1){if(a.flags|=2048,zs(9,Xf.bind(null,a,l,p,n),void 0,null),St===null)throw Error(i(349));bi&30||Zf(a,n,p)}return p}function Zf(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n={lastEffect:null,stores:null},dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Xf(t,n,a,l){n.value=a,n.getSnapshot=l,ep(n)&&tp(t)}function Jf(t,n,a){return a(function(){ep(n)&&tp(t)})}function ep(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Nt(t,a)}catch{return!0}}function tp(t){var n=lr(t,1);n!==null&&In(n,t,1,-1)}function np(t){var n=Gn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},n.queue=t,t=t.dispatch=O1.bind(null,dt,t),[n.memoizedState,t]}function zs(t,n,a,l){return t={tag:t,create:n,destroy:a,deps:l,next:null},n=dt.updateQueue,n===null?(n={lastEffect:null,stores:null},dt.updateQueue=n,n.lastEffect=t.next=t):(a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t)),t}function rp(){return yn().memoizedState}function ou(t,n,a,l){var p=Gn();dt.flags|=t,p.memoizedState=zs(1|n,a,void 0,l===void 0?null:l)}function uu(t,n,a,l){var p=yn();l=l===void 0?null:l;var y=void 0;if(_t!==null){var E=_t.memoizedState;if(y=E.destroy,l!==null&&Xl(l,E.deps)){p.memoizedState=zs(n,a,y,l);return}}dt.flags|=t,p.memoizedState=zs(1|n,a,y,l)}function ip(t,n){return ou(8390656,8,t,n)}function rd(t,n){return uu(2048,8,t,n)}function ap(t,n){return uu(4,2,t,n)}function sp(t,n){return uu(4,4,t,n)}function op(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function up(t,n,a){return a=a!=null?a.concat([t]):null,uu(4,4,op.bind(null,n,t),a)}function id(){}function lp(t,n){var a=yn();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&Xl(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function dp(t,n){var a=yn();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&Xl(n,l[1])?l[0]:(t=t(),a.memoizedState=[t,n],t)}function cp(t,n,a){return bi&21?(Nt(a,n)||(a=yo(),dt.lanes|=a,Si|=a,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=a)}function A1(t,n){var a=Ke;Ke=a!==0&&4>a?a:4,t(!0);var l=Zl.transition;Zl.transition={};try{t(!1),n()}finally{Ke=a,Zl.transition=l}}function fp(){return yn().memoizedState}function R1(t,n,a){var l=Nr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},pp(t))hp(n,a);else if(a=Vf(t,n,a,l),a!==null){var p=Ut();In(a,t,l,p),mp(a,n,l)}}function O1(t,n,a){var l=Nr(t),p={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(pp(t))hp(n,p);else{var y=t.alternate;if(t.lanes===0&&(y===null||y.lanes===0)&&(y=n.lastRenderedReducer,y!==null))try{var E=n.lastRenderedState,P=y(E,a);if(p.hasEagerState=!0,p.eagerState=P,Nt(P,E)){var D=n.interleaved;D===null?(p.next=p,Hl(n)):(p.next=D.next,D.next=p),n.interleaved=p;return}}catch{}finally{}a=Vf(t,n,p,l),a!==null&&(p=Ut(),In(a,t,l,p),mp(a,n,l))}}function pp(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function hp(t,n){Cs=su=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function mp(t,n,a){if(a&4194240){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Ga(t,a)}}var lu={readContext:gn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},P1={readContext:gn,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:gn,useEffect:ip,useImperativeHandle:function(t,n,a){return a=a!=null?a.concat([t]):null,ou(4194308,4,op.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ou(4194308,4,t,n)},useInsertionEffect:function(t,n){return ou(4,2,t,n)},useMemo:function(t,n){var a=Gn();return n=n===void 0?null:n,t=t(),a.memoizedState=[t,n],t},useReducer:function(t,n,a){var l=Gn();return n=a!==void 0?a(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=R1.bind(null,dt,t),[l.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:np,useDebugValue:id,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=np(!1),n=t[0];return t=A1.bind(null,t[1]),Gn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,a){var l=dt,p=Gn();if(st){if(a===void 0)throw Error(i(407));a=a()}else{if(a=n(),St===null)throw Error(i(349));bi&30||Zf(l,n,a)}p.memoizedState=a;var y={value:a,getSnapshot:n};return p.queue=y,ip(Jf.bind(null,l,y,t),[t]),l.flags|=2048,zs(9,Xf.bind(null,l,y,a,n),void 0,null),a},useId:function(){var t=Gn(),n=St.identifierPrefix;if(st){var a=ur,l=or;a=(l&~(1<<32-ht(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=Ts++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=z1++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},B1={readContext:gn,useCallback:lp,useContext:gn,useEffect:rd,useImperativeHandle:up,useInsertionEffect:ap,useLayoutEffect:sp,useMemo:dp,useReducer:td,useRef:rp,useState:function(){return td(Is)},useDebugValue:id,useDeferredValue:function(t){var n=yn();return cp(n,_t.memoizedState,t)},useTransition:function(){var t=td(Is)[0],n=yn().memoizedState;return[t,n]},useMutableSource:Qf,useSyncExternalStore:Yf,useId:fp,unstable_isNewReconciler:!1},M1={readContext:gn,useCallback:lp,useContext:gn,useEffect:rd,useImperativeHandle:up,useInsertionEffect:ap,useLayoutEffect:sp,useMemo:dp,useReducer:nd,useRef:rp,useState:function(){return nd(Is)},useDebugValue:id,useDeferredValue:function(t){var n=yn();return _t===null?n.memoizedState=t:cp(n,_t.memoizedState,t)},useTransition:function(){var t=nd(Is)[0],n=yn().memoizedState;return[t,n]},useMutableSource:Qf,useSyncExternalStore:Yf,useId:fp,unstable_isNewReconciler:!1};function En(t,n){if(t&&t.defaultProps){n=G({},n),t=t.defaultProps;for(var a in t)n[a]===void 0&&(n[a]=t[a]);return n}return n}function ad(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:G({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var du={isMounted:function(t){return(t=t._reactInternals)?Un(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var l=Ut(),p=Nr(t),y=dr(l,p);y.payload=n,a!=null&&(y.callback=a),n=Pr(t,y,p),n!==null&&(In(n,t,p,l),nu(n,t,p))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=Ut(),p=Nr(t),y=dr(l,p);y.tag=1,y.payload=n,a!=null&&(y.callback=a),n=Pr(t,y,p),n!==null&&(In(n,t,p,l),nu(n,t,p))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Ut(),l=Nr(t),p=dr(a,l);p.tag=2,n!=null&&(p.callback=n),n=Pr(t,p,l),n!==null&&(In(n,t,l,a),nu(n,t,l))}};function gp(t,n,a,l,p,y,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,y,E):n.prototype&&n.prototype.isPureReactComponent?!Vn(a,l)||!Vn(p,y):!0}function yp(t,n,a){var l=!1,p=Ar,y=n.contextType;return typeof y=="object"&&y!==null?y=gn(y):(p=Kt(n)?wi:zt.current,l=n.contextTypes,y=(l=l!=null)?pa(t,p):Ar),n=new n(a,y),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=du,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=p,t.__reactInternalMemoizedMaskedChildContext=y),n}function wp(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&du.enqueueReplaceState(n,n.state,null)}function sd(t,n,a,l){var p=t.stateNode;p.props=a,p.state=t.memoizedState,p.refs={},ql(t);var y=n.contextType;typeof y=="object"&&y!==null?p.context=gn(y):(y=Kt(n)?wi:zt.current,p.context=pa(t,y)),p.state=t.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(ad(t,n,y,a),p.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(n=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),n!==p.state&&du.enqueueReplaceState(p,p.state,null),ru(t,a,p,l),p.state=t.memoizedState),typeof p.componentDidMount=="function"&&(t.flags|=4194308)}function $a(t,n){try{var a="",l=n;do a+=xe(l),l=l.return;while(l);var p=a}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:t,source:n,stack:p,digest:null}}function od(t,n,a){return{value:t,source:null,stack:a??null,digest:n??null}}function ud(t,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var D1=typeof WeakMap=="function"?WeakMap:Map;function vp(t,n,a){a=dr(-1,a),a.tag=3,a.payload={element:null};var l=n.value;return a.callback=function(){yu||(yu=!0,bd=l),ud(t,n)},a}function _p(t,n,a){a=dr(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var p=n.value;a.payload=function(){return l(p)},a.callback=function(){ud(t,n)}}var y=t.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(a.callback=function(){ud(t,n),typeof l!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var E=n.stack;this.componentDidCatch(n.value,{componentStack:E!==null?E:""})}),a}function $p(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new D1;var p=new Set;l.set(n,p)}else p=l.get(n),p===void 0&&(p=new Set,l.set(n,p));p.has(a)||(p.add(a),t=Z1.bind(null,t,n,a),n.then(t,t))}function xp(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function bp(t,n,a,l,p){return t.mode&1?(t.flags|=65536,t.lanes=p,t):(t===n?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=dr(-1,1),n.tag=2,Pr(a,n,1))),a.lanes|=1),t)}var N1=R.ReactCurrentOwner,Qt=!1;function Lt(t,n,a,l){n.child=t===null?Wf(n,null,a,l):ya(n,t.child,a,l)}function Sp(t,n,a,l,p){a=a.render;var y=n.ref;return va(n,p),l=Jl(t,n,a,l,y,p),a=ed(),t!==null&&!Qt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~p,cr(t,n,p)):(st&&a&&Ml(n),n.flags|=1,Lt(t,n,l,p),n.child)}function kp(t,n,a,l,p){if(t===null){var y=a.type;return typeof y=="function"&&!zd(y)&&y.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=y,Ep(t,n,y,l,p)):(t=bu(a.type,null,l,n,n.mode,p),t.ref=n.ref,t.return=n,n.child=t)}if(y=t.child,!(t.lanes&p)){var E=y.memoizedProps;if(a=a.compare,a=a!==null?a:Vn,a(E,l)&&t.ref===n.ref)return cr(t,n,p)}return n.flags|=1,t=Ur(y,l),t.ref=n.ref,t.return=n,n.child=t}function Ep(t,n,a,l,p){if(t!==null){var y=t.memoizedProps;if(Vn(y,l)&&t.ref===n.ref)if(Qt=!1,n.pendingProps=l=y,(t.lanes&p)!==0)t.flags&131072&&(Qt=!0);else return n.lanes=t.lanes,cr(t,n,p)}return ld(t,n,a,l,p)}function Cp(t,n,a){var l=n.pendingProps,p=l.children,y=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xe(ba,on),on|=a;else{if(!(a&1073741824))return t=y!==null?y.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Xe(ba,on),on|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=y!==null?y.baseLanes:a,Xe(ba,on),on|=l}else y!==null?(l=y.baseLanes|a,n.memoizedState=null):l=a,Xe(ba,on),on|=l;return Lt(t,n,p,a),n.child}function Tp(t,n){var a=n.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function ld(t,n,a,l,p){var y=Kt(a)?wi:zt.current;return y=pa(n,y),va(n,p),a=Jl(t,n,a,l,y,p),l=ed(),t!==null&&!Qt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~p,cr(t,n,p)):(st&&l&&Ml(n),n.flags|=1,Lt(t,n,a,p),n.child)}function Ip(t,n,a,l,p){if(Kt(a)){var y=!0;Ko(n)}else y=!1;if(va(n,p),n.stateNode===null)fu(t,n),yp(n,a,l),sd(n,a,l,p),l=!0;else if(t===null){var E=n.stateNode,P=n.memoizedProps;E.props=P;var D=E.context,V=a.contextType;typeof V=="object"&&V!==null?V=gn(V):(V=Kt(a)?wi:zt.current,V=pa(n,V));var te=a.getDerivedStateFromProps,ie=typeof te=="function"||typeof E.getSnapshotBeforeUpdate=="function";ie||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(P!==l||D!==V)&&wp(n,E,l,V),Or=!1;var ee=n.memoizedState;E.state=ee,ru(n,l,E,p),D=n.memoizedState,P!==l||ee!==D||Gt.current||Or?(typeof te=="function"&&(ad(n,a,te,l),D=n.memoizedState),(P=Or||gp(n,a,P,l,ee,D,V))?(ie||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(n.flags|=4194308)):(typeof E.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=D),E.props=l,E.state=D,E.context=V,l=P):(typeof E.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{E=n.stateNode,Hf(t,n),P=n.memoizedProps,V=n.type===n.elementType?P:En(n.type,P),E.props=V,ie=n.pendingProps,ee=E.context,D=a.contextType,typeof D=="object"&&D!==null?D=gn(D):(D=Kt(a)?wi:zt.current,D=pa(n,D));var fe=a.getDerivedStateFromProps;(te=typeof fe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(P!==ie||ee!==D)&&wp(n,E,l,D),Or=!1,ee=n.memoizedState,E.state=ee,ru(n,l,E,p);var ye=n.memoizedState;P!==ie||ee!==ye||Gt.current||Or?(typeof fe=="function"&&(ad(n,a,fe,l),ye=n.memoizedState),(V=Or||gp(n,a,V,l,ee,ye,D)||!1)?(te||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,ye,D),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,ye,D)),typeof E.componentDidUpdate=="function"&&(n.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof E.componentDidUpdate!="function"||P===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ye),E.props=l,E.state=ye,E.context=D,l=V):(typeof E.componentDidUpdate!="function"||P===t.memoizedProps&&ee===t.memoizedState||(n.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&ee===t.memoizedState||(n.flags|=1024),l=!1)}return dd(t,n,a,l,y,p)}function dd(t,n,a,l,p,y){Tp(t,n);var E=(n.flags&128)!==0;if(!l&&!E)return p&&Pf(n,a,!1),cr(t,n,y);l=n.stateNode,N1.current=n;var P=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&E?(n.child=ya(n,t.child,null,y),n.child=ya(n,null,P,y)):Lt(t,n,P,y),n.memoizedState=l.state,p&&Pf(n,a,!0),n.child}function zp(t){var n=t.stateNode;n.pendingContext?Rf(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Rf(t,n.context,!1),Gl(t,n.containerInfo)}function Ap(t,n,a,l,p){return ga(),Ul(p),n.flags|=256,Lt(t,n,a,l),n.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rp(t,n,a){var l=n.pendingProps,p=lt.current,y=!1,E=(n.flags&128)!==0,P;if((P=E)||(P=t!==null&&t.memoizedState===null?!1:(p&2)!==0),P?(y=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(p|=1),Xe(lt,p&1),t===null)return Ll(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(E=l.children,t=l.fallback,y?(l=n.mode,y=n.child,E={mode:"hidden",children:E},!(l&1)&&y!==null?(y.childLanes=0,y.pendingProps=E):y=Su(E,l,0,null),t=Ti(t,l,a,null),y.return=n,t.return=n,y.sibling=t,n.child=y,n.child.memoizedState=fd(a),n.memoizedState=cd,t):pd(n,E));if(p=t.memoizedState,p!==null&&(P=p.dehydrated,P!==null))return L1(t,n,E,l,P,p,a);if(y){y=l.fallback,E=n.mode,p=t.child,P=p.sibling;var D={mode:"hidden",children:l.children};return!(E&1)&&n.child!==p?(l=n.child,l.childLanes=0,l.pendingProps=D,n.deletions=null):(l=Ur(p,D),l.subtreeFlags=p.subtreeFlags&14680064),P!==null?y=Ur(P,y):(y=Ti(y,E,a,null),y.flags|=2),y.return=n,l.return=n,l.sibling=y,n.child=l,l=y,y=n.child,E=t.child.memoizedState,E=E===null?fd(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},y.memoizedState=E,y.childLanes=t.childLanes&~a,n.memoizedState=cd,l}return y=t.child,t=y.sibling,l=Ur(y,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=a),l.return=n,l.sibling=null,t!==null&&(a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)),n.child=l,n.memoizedState=null,l}function pd(t,n){return n=Su({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function cu(t,n,a,l){return l!==null&&Ul(l),ya(n,t.child,null,a),t=pd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function L1(t,n,a,l,p,y,E){if(a)return n.flags&256?(n.flags&=-257,l=od(Error(i(422))),cu(t,n,E,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(y=l.fallback,p=n.mode,l=Su({mode:"visible",children:l.children},p,0,null),y=Ti(y,p,E,null),y.flags|=2,l.return=n,y.return=n,l.sibling=y,n.child=l,n.mode&1&&ya(n,t.child,null,E),n.child.memoizedState=fd(E),n.memoizedState=cd,y);if(!(n.mode&1))return cu(t,n,E,null);if(p.data==="$!"){if(l=p.nextSibling&&p.nextSibling.dataset,l)var P=l.dgst;return l=P,y=Error(i(419)),l=od(y,l,void 0),cu(t,n,E,l)}if(P=(E&t.childLanes)!==0,Qt||P){if(l=St,l!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(l.suspendedLanes|E)?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,lr(t,p),In(l,t,p,-1))}return Id(),l=od(Error(i(421))),cu(t,n,E,l)}return p.data==="$?"?(n.flags|=128,n.child=t.child,n=X1.bind(null,t),p._reactRetry=n,null):(t=y.treeContext,sn=Ir(p.nextSibling),an=n,st=!0,kn=null,t!==null&&(hn[mn++]=or,hn[mn++]=ur,hn[mn++]=vi,or=t.id,ur=t.overflow,vi=n),n=pd(n,l.children),n.flags|=4096,n)}function Op(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Vl(t.return,n,a)}function hd(t,n,a,l,p){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:p}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=a,y.tailMode=p)}function Pp(t,n,a){var l=n.pendingProps,p=l.revealOrder,y=l.tail;if(Lt(t,n,l.children,a),l=lt.current,l&2)l=l&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Op(t,a,n);else if(t.tag===19)Op(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Xe(lt,l),!(n.mode&1))n.memoizedState=null;else switch(p){case"forwards":for(a=n.child,p=null;a!==null;)t=a.alternate,t!==null&&iu(t)===null&&(p=a),a=a.sibling;a=p,a===null?(p=n.child,n.child=null):(p=a.sibling,a.sibling=null),hd(n,!1,p,a,y);break;case"backwards":for(a=null,p=n.child,n.child=null;p!==null;){if(t=p.alternate,t!==null&&iu(t)===null){n.child=p;break}t=p.sibling,p.sibling=a,a=p,p=t}hd(n,!0,a,null,y);break;case"together":hd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function fu(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function cr(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Si|=n.lanes,!(a&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,a=Ur(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ur(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function U1(t,n,a){switch(n.tag){case 3:zp(n),ga();break;case 5:Kf(n);break;case 1:Kt(n.type)&&Ko(n);break;case 4:Gl(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,p=n.memoizedProps.value;Xe(eu,l._currentValue),l._currentValue=p;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Xe(lt,lt.current&1),n.flags|=128,null):a&n.child.childLanes?Rp(t,n,a):(Xe(lt,lt.current&1),t=cr(t,n,a),t!==null?t.sibling:null);Xe(lt,lt.current&1);break;case 19:if(l=(a&n.childLanes)!==0,t.flags&128){if(l)return Pp(t,n,a);n.flags|=128}if(p=n.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xe(lt,lt.current),l)break;return null;case 22:case 23:return n.lanes=0,Cp(t,n,a)}return cr(t,n,a)}var Bp,md,Mp,Dp;Bp=function(t,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},md=function(){},Mp=function(t,n,a,l){var p=t.memoizedProps;if(p!==l){t=n.stateNode,xi(qn.current);var y=null;switch(a){case"input":p=It(t,p),l=It(t,l),y=[];break;case"select":p=G({},p,{value:void 0}),l=G({},l,{value:void 0}),y=[];break;case"textarea":p=Mi(t,p),l=Mi(t,l),y=[];break;default:typeof p.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Ho)}bn(a,l);var E;a=null;for(V in p)if(!l.hasOwnProperty(V)&&p.hasOwnProperty(V)&&p[V]!=null)if(V==="style"){var P=p[V];for(E in P)P.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(o.hasOwnProperty(V)?y||(y=[]):(y=y||[]).push(V,null));for(V in l){var D=l[V];if(P=p!=null?p[V]:void 0,l.hasOwnProperty(V)&&D!==P&&(D!=null||P!=null))if(V==="style")if(P){for(E in P)!P.hasOwnProperty(E)||D&&D.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in D)D.hasOwnProperty(E)&&P[E]!==D[E]&&(a||(a={}),a[E]=D[E])}else a||(y||(y=[]),y.push(V,a)),a=D;else V==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,P=P?P.__html:void 0,D!=null&&P!==D&&(y=y||[]).push(V,D)):V==="children"?typeof D!="string"&&typeof D!="number"||(y=y||[]).push(V,""+D):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(o.hasOwnProperty(V)?(D!=null&&V==="onScroll"&&nt("scroll",t),y||P===D||(y=[])):(y=y||[]).push(V,D))}a&&(y=y||[]).push("style",a);var V=y;(n.updateQueue=V)&&(n.flags|=4)}},Dp=function(t,n,a,l){a!==l&&(n.flags|=4)};function As(t,n){if(!st)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Rt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var p=t.child;p!==null;)a|=p.lanes|p.childLanes,l|=p.subtreeFlags&14680064,l|=p.flags&14680064,p.return=t,p=p.sibling;else for(p=t.child;p!==null;)a|=p.lanes|p.childLanes,l|=p.subtreeFlags,l|=p.flags,p.return=t,p=p.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function j1(t,n,a){var l=n.pendingProps;switch(Dl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(n),null;case 1:return Kt(n.type)&&Go(),Rt(n),null;case 3:return l=n.stateNode,_a(),rt(Gt),rt(zt),Yl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Xo(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,kn!==null&&(Ed(kn),kn=null))),md(t,n),Rt(n),null;case 5:Kl(n);var p=xi(Es.current);if(a=n.type,t!==null&&n.stateNode!=null)Mp(t,n,a,l,p),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return Rt(n),null}if(t=xi(qn.current),Xo(n)){l=n.stateNode,a=n.type;var y=n.memoizedProps;switch(l[Hn]=n,l[$s]=y,t=(n.mode&1)!==0,a){case"dialog":nt("cancel",l),nt("close",l);break;case"iframe":case"object":case"embed":nt("load",l);break;case"video":case"audio":for(p=0;p<Tr.length;p++)nt(Tr[p],l);break;case"source":nt("error",l);break;case"img":case"image":case"link":nt("error",l),nt("load",l);break;case"details":nt("toggle",l);break;case"input":xn(l,y),nt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!y.multiple},nt("invalid",l);break;case"textarea":Oa(l,y),nt("invalid",l)}bn(a,y),p=null;for(var E in y)if(y.hasOwnProperty(E)){var P=y[E];E==="children"?typeof P=="string"?l.textContent!==P&&(y.suppressHydrationWarning!==!0&&Vo(l.textContent,P,t),p=["children",P]):typeof P=="number"&&l.textContent!==""+P&&(y.suppressHydrationWarning!==!0&&Vo(l.textContent,P,t),p=["children",""+P]):o.hasOwnProperty(E)&&P!=null&&E==="onScroll"&&nt("scroll",l)}switch(a){case"input":Ft(l),Pi(l,y,!0);break;case"textarea":Ft(l),no(l);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(l.onclick=Ho)}l=p,n.updateQueue=l,l!==null&&(n.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ro(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[Hn]=n,t[$s]=l,Bp(t,n,!1,!1),n.stateNode=t;e:{switch(E=Li(a,l),a){case"dialog":nt("cancel",t),nt("close",t),p=l;break;case"iframe":case"object":case"embed":nt("load",t),p=l;break;case"video":case"audio":for(p=0;p<Tr.length;p++)nt(Tr[p],t);p=l;break;case"source":nt("error",t),p=l;break;case"img":case"image":case"link":nt("error",t),nt("load",t),p=l;break;case"details":nt("toggle",t),p=l;break;case"input":xn(t,l),p=It(t,l),nt("invalid",t);break;case"option":p=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},p=G({},l,{value:void 0}),nt("invalid",t);break;case"textarea":Oa(t,l),p=Mi(t,l),nt("invalid",t);break;default:p=l}bn(a,p),P=p;for(y in P)if(P.hasOwnProperty(y)){var D=P[y];y==="style"?Ni(t,D):y==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&Pa(t,D)):y==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&en(t,D):typeof D=="number"&&en(t,""+D):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?D!=null&&y==="onScroll"&&nt("scroll",t):D!=null&&O(t,y,D,E))}switch(a){case"input":Ft(t),Pi(t,l,!1);break;case"textarea":Ft(t),no(t);break;case"option":l.value!=null&&t.setAttribute("value",""+We(l.value));break;case"select":t.multiple=!!l.multiple,y=l.value,y!=null?Zn(t,!!l.multiple,y,!1):l.defaultValue!=null&&Zn(t,!!l.multiple,l.defaultValue,!0);break;default:typeof p.onClick=="function"&&(t.onclick=Ho)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Rt(n),null;case 6:if(t&&n.stateNode!=null)Dp(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(a=xi(Es.current),xi(qn.current),Xo(n)){if(l=n.stateNode,a=n.memoizedProps,l[Hn]=n,(y=l.nodeValue!==a)&&(t=an,t!==null))switch(t.tag){case 3:Vo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vo(l.nodeValue,a,(t.mode&1)!==0)}y&&(n.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Hn]=n,n.stateNode=l}return Rt(n),null;case 13:if(rt(lt),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&sn!==null&&n.mode&1&&!(n.flags&128))Uf(),ga(),n.flags|=98560,y=!1;else if(y=Xo(n),l!==null&&l.dehydrated!==null){if(t===null){if(!y)throw Error(i(318));if(y=n.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(i(317));y[Hn]=n}else ga(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Rt(n),y=!1}else kn!==null&&(Ed(kn),kn=null),y=!0;if(!y)return n.flags&65536?n:null}return n.flags&128?(n.lanes=a,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(t===null||lt.current&1?$t===0&&($t=3):Id())),n.updateQueue!==null&&(n.flags|=4),Rt(n),null);case 4:return _a(),md(t,n),t===null&&vs(n.stateNode.containerInfo),Rt(n),null;case 10:return Wl(n.type._context),Rt(n),null;case 17:return Kt(n.type)&&Go(),Rt(n),null;case 19:if(rt(lt),y=n.memoizedState,y===null)return Rt(n),null;if(l=(n.flags&128)!==0,E=y.rendering,E===null)if(l)As(y,!1);else{if($t!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(E=iu(t),E!==null){for(n.flags|=128,As(y,!1),l=E.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=a,a=n.child;a!==null;)y=a,t=l,y.flags&=14680066,E=y.alternate,E===null?(y.childLanes=0,y.lanes=t,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=E.childLanes,y.lanes=E.lanes,y.child=E.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=E.memoizedProps,y.memoizedState=E.memoizedState,y.updateQueue=E.updateQueue,y.type=E.type,t=E.dependencies,y.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Xe(lt,lt.current&1|2),n.child}t=t.sibling}y.tail!==null&&ut()>Sa&&(n.flags|=128,l=!0,As(y,!1),n.lanes=4194304)}else{if(!l)if(t=iu(E),t!==null){if(n.flags|=128,l=!0,a=t.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),As(y,!0),y.tail===null&&y.tailMode==="hidden"&&!E.alternate&&!st)return Rt(n),null}else 2*ut()-y.renderingStartTime>Sa&&a!==1073741824&&(n.flags|=128,l=!0,As(y,!1),n.lanes=4194304);y.isBackwards?(E.sibling=n.child,n.child=E):(a=y.last,a!==null?a.sibling=E:n.child=E,y.last=E)}return y.tail!==null?(n=y.tail,y.rendering=n,y.tail=n.sibling,y.renderingStartTime=ut(),n.sibling=null,a=lt.current,Xe(lt,l?a&1|2:a&1),n):(Rt(n),null);case 22:case 23:return Td(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?on&1073741824&&(Rt(n),n.subtreeFlags&6&&(n.flags|=8192)):Rt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function F1(t,n){switch(Dl(n),n.tag){case 1:return Kt(n.type)&&Go(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(),rt(Gt),rt(zt),Yl(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return Kl(n),null;case 13:if(rt(lt),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));ga()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return rt(lt),null;case 4:return _a(),null;case 10:return Wl(n.type._context),null;case 22:case 23:return Td(),null;case 24:return null;default:return null}}var pu=!1,Ot=!1,W1=typeof WeakSet=="function"?WeakSet:Set,pe=null;function xa(t,n){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){ft(t,n,l)}else a.current=null}function gd(t,n,a){try{a()}catch(l){ft(t,n,l)}}var Np=!1;function V1(t,n){if(Tl=br,t=sa(),gi(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var p=l.anchorOffset,y=l.focusNode;l=l.focusOffset;try{a.nodeType,y.nodeType}catch{a=null;break e}var E=0,P=-1,D=-1,V=0,te=0,ie=t,ee=null;t:for(;;){for(var fe;ie!==a||p!==0&&ie.nodeType!==3||(P=E+p),ie!==y||l!==0&&ie.nodeType!==3||(D=E+l),ie.nodeType===3&&(E+=ie.nodeValue.length),(fe=ie.firstChild)!==null;)ee=ie,ie=fe;for(;;){if(ie===t)break t;if(ee===a&&++V===p&&(P=E),ee===y&&++te===l&&(D=E),(fe=ie.nextSibling)!==null)break;ie=ee,ee=ie.parentNode}ie=fe}a=P===-1||D===-1?null:{start:P,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(Il={focusedElem:t,selectionRange:a},br=!1,pe=n;pe!==null;)if(n=pe,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pe=t;else for(;pe!==null;){n=pe;try{var ye=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ye!==null){var $e=ye.memoizedProps,mt=ye.memoizedState,j=n.stateNode,L=j.getSnapshotBeforeUpdate(n.elementType===n.type?$e:En(n.type,$e),mt);j.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var W=n.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(se){ft(n,n.return,se)}if(t=n.sibling,t!==null){t.return=n.return,pe=t;break}pe=n.return}return ye=Np,Np=!1,ye}function Rs(t,n,a){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var p=l=l.next;do{if((p.tag&t)===t){var y=p.destroy;p.destroy=void 0,y!==void 0&&gd(n,a,y)}p=p.next}while(p!==l)}}function hu(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==n)}}function yd(t){var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof n=="function"?n(t):n.current=t}}function Lp(t){var n=t.alternate;n!==null&&(t.alternate=null,Lp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Hn],delete n[$s],delete n[Ol],delete n[E1],delete n[C1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Up(t){return t.tag===5||t.tag===3||t.tag===4}function jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Up(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ho));else if(l!==4&&(t=t.child,t!==null))for(wd(t,n,a),t=t.sibling;t!==null;)wd(t,n,a),t=t.sibling}function vd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(vd(t,n,a),t=t.sibling;t!==null;)vd(t,n,a),t=t.sibling}var Et=null,Cn=!1;function Br(t,n,a){for(a=a.child;a!==null;)Fp(t,n,a),a=a.sibling}function Fp(t,n,a){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(tn,a)}catch{}switch(a.tag){case 5:Ot||xa(a,n);case 6:var l=Et,p=Cn;Et=null,Br(t,n,a),Et=l,Cn=p,Et!==null&&(Cn?(t=Et,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Et.removeChild(a.stateNode));break;case 18:Et!==null&&(Cn?(t=Et,a=a.stateNode,t.nodeType===8?Rl(t.parentNode,a):t.nodeType===1&&Rl(t,a),$r(t)):Rl(Et,a.stateNode));break;case 4:l=Et,p=Cn,Et=a.stateNode.containerInfo,Cn=!0,Br(t,n,a),Et=l,Cn=p;break;case 0:case 11:case 14:case 15:if(!Ot&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){p=l=l.next;do{var y=p,E=y.destroy;y=y.tag,E!==void 0&&(y&2||y&4)&&gd(a,n,E),p=p.next}while(p!==l)}Br(t,n,a);break;case 1:if(!Ot&&(xa(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(P){ft(a,n,P)}Br(t,n,a);break;case 21:Br(t,n,a);break;case 22:a.mode&1?(Ot=(l=Ot)||a.memoizedState!==null,Br(t,n,a),Ot=l):Br(t,n,a);break;default:Br(t,n,a)}}function Wp(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new W1),n.forEach(function(l){var p=J1.bind(null,t,l);a.has(l)||(a.add(l),l.then(p,p))})}}function Tn(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var p=a[l];try{var y=t,E=n,P=E;e:for(;P!==null;){switch(P.tag){case 5:Et=P.stateNode,Cn=!1;break e;case 3:Et=P.stateNode.containerInfo,Cn=!0;break e;case 4:Et=P.stateNode.containerInfo,Cn=!0;break e}P=P.return}if(Et===null)throw Error(i(160));Fp(y,E,p),Et=null,Cn=!1;var D=p.alternate;D!==null&&(D.return=null),p.return=null}catch(V){ft(p,n,V)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vp(n,t),n=n.sibling}function Vp(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Tn(n,t),Kn(t),l&4){try{Rs(3,t,t.return),hu(3,t)}catch($e){ft(t,t.return,$e)}try{Rs(5,t,t.return)}catch($e){ft(t,t.return,$e)}}break;case 1:Tn(n,t),Kn(t),l&512&&a!==null&&xa(a,a.return);break;case 5:if(Tn(n,t),Kn(t),l&512&&a!==null&&xa(a,a.return),t.flags&32){var p=t.stateNode;try{en(p,"")}catch($e){ft(t,t.return,$e)}}if(l&4&&(p=t.stateNode,p!=null)){var y=t.memoizedProps,E=a!==null?a.memoizedProps:y,P=t.type,D=t.updateQueue;if(t.updateQueue=null,D!==null)try{P==="input"&&y.type==="radio"&&y.name!=null&&Zr(p,y),Li(P,E);var V=Li(P,y);for(E=0;E<D.length;E+=2){var te=D[E],ie=D[E+1];te==="style"?Ni(p,ie):te==="dangerouslySetInnerHTML"?Pa(p,ie):te==="children"?en(p,ie):O(p,te,ie,V)}switch(P){case"input":Dn(p,y);break;case"textarea":Di(p,y);break;case"select":var ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var fe=y.value;fe!=null?Zn(p,!!y.multiple,fe,!1):ee!==!!y.multiple&&(y.defaultValue!=null?Zn(p,!!y.multiple,y.defaultValue,!0):Zn(p,!!y.multiple,y.multiple?[]:"",!1))}p[$s]=y}catch($e){ft(t,t.return,$e)}}break;case 6:if(Tn(n,t),Kn(t),l&4){if(t.stateNode===null)throw Error(i(162));p=t.stateNode,y=t.memoizedProps;try{p.nodeValue=y}catch($e){ft(t,t.return,$e)}}break;case 3:if(Tn(n,t),Kn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{$r(n.containerInfo)}catch($e){ft(t,t.return,$e)}break;case 4:Tn(n,t),Kn(t);break;case 13:Tn(n,t),Kn(t),p=t.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(xd=ut())),l&4&&Wp(t);break;case 22:if(te=a!==null&&a.memoizedState!==null,t.mode&1?(Ot=(V=Ot)||te,Tn(n,t),Ot=V):Tn(n,t),Kn(t),l&8192){if(V=t.memoizedState!==null,(t.stateNode.isHidden=V)&&!te&&t.mode&1)for(pe=t,te=t.child;te!==null;){for(ie=pe=te;pe!==null;){switch(ee=pe,fe=ee.child,ee.tag){case 0:case 11:case 14:case 15:Rs(4,ee,ee.return);break;case 1:xa(ee,ee.return);var ye=ee.stateNode;if(typeof ye.componentWillUnmount=="function"){l=ee,a=ee.return;try{n=l,ye.props=n.memoizedProps,ye.state=n.memoizedState,ye.componentWillUnmount()}catch($e){ft(l,a,$e)}}break;case 5:xa(ee,ee.return);break;case 22:if(ee.memoizedState!==null){Gp(ie);continue}}fe!==null?(fe.return=ee,pe=fe):Gp(ie)}te=te.sibling}e:for(te=null,ie=t;;){if(ie.tag===5){if(te===null){te=ie;try{p=ie.stateNode,V?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(P=ie.stateNode,D=ie.memoizedProps.style,E=D!=null&&D.hasOwnProperty("display")?D.display:null,P.style.display=Ma("display",E))}catch($e){ft(t,t.return,$e)}}}else if(ie.tag===6){if(te===null)try{ie.stateNode.nodeValue=V?"":ie.memoizedProps}catch($e){ft(t,t.return,$e)}}else if((ie.tag!==22&&ie.tag!==23||ie.memoizedState===null||ie===t)&&ie.child!==null){ie.child.return=ie,ie=ie.child;continue}if(ie===t)break e;for(;ie.sibling===null;){if(ie.return===null||ie.return===t)break e;te===ie&&(te=null),ie=ie.return}te===ie&&(te=null),ie.sibling.return=ie.return,ie=ie.sibling}}break;case 19:Tn(n,t),Kn(t),l&4&&Wp(t);break;case 21:break;default:Tn(n,t),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{e:{for(var a=t.return;a!==null;){if(Up(a)){var l=a;break e}a=a.return}throw Error(i(160))}switch(l.tag){case 5:var p=l.stateNode;l.flags&32&&(en(p,""),l.flags&=-33);var y=jp(t);vd(t,y,p);break;case 3:case 4:var E=l.stateNode.containerInfo,P=jp(t);wd(t,P,E);break;default:throw Error(i(161))}}catch(D){ft(t,t.return,D)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function H1(t,n,a){pe=t,Hp(t)}function Hp(t,n,a){for(var l=(t.mode&1)!==0;pe!==null;){var p=pe,y=p.child;if(p.tag===22&&l){var E=p.memoizedState!==null||pu;if(!E){var P=p.alternate,D=P!==null&&P.memoizedState!==null||Ot;P=pu;var V=Ot;if(pu=E,(Ot=D)&&!V)for(pe=p;pe!==null;)E=pe,D=E.child,E.tag===22&&E.memoizedState!==null?Kp(p):D!==null?(D.return=E,pe=D):Kp(p);for(;y!==null;)pe=y,Hp(y),y=y.sibling;pe=p,pu=P,Ot=V}qp(t)}else p.subtreeFlags&8772&&y!==null?(y.return=p,pe=y):qp(t)}}function qp(t){for(;pe!==null;){var n=pe;if(n.flags&8772){var a=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ot||hu(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Ot)if(a===null)l.componentDidMount();else{var p=n.elementType===n.type?a.memoizedProps:En(n.type,a.memoizedProps);l.componentDidUpdate(p,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var y=n.updateQueue;y!==null&&Gf(n,y,l);break;case 3:var E=n.updateQueue;if(E!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}Gf(n,E,a)}break;case 5:var P=n.stateNode;if(a===null&&n.flags&4){a=P;var D=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var V=n.alternate;if(V!==null){var te=V.memoizedState;if(te!==null){var ie=te.dehydrated;ie!==null&&$r(ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Ot||n.flags&512&&yd(n)}catch(ee){ft(n,n.return,ee)}}if(n===t){pe=null;break}if(a=n.sibling,a!==null){a.return=n.return,pe=a;break}pe=n.return}}function Gp(t){for(;pe!==null;){var n=pe;if(n===t){pe=null;break}var a=n.sibling;if(a!==null){a.return=n.return,pe=a;break}pe=n.return}}function Kp(t){for(;pe!==null;){var n=pe;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{hu(4,n)}catch(D){ft(n,a,D)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var p=n.return;try{l.componentDidMount()}catch(D){ft(n,p,D)}}var y=n.return;try{yd(n)}catch(D){ft(n,y,D)}break;case 5:var E=n.return;try{yd(n)}catch(D){ft(n,E,D)}}}catch(D){ft(n,n.return,D)}if(n===t){pe=null;break}var P=n.sibling;if(P!==null){P.return=n.return,pe=P;break}pe=n.return}}var q1=Math.ceil,mu=R.ReactCurrentDispatcher,_d=R.ReactCurrentOwner,wn=R.ReactCurrentBatchConfig,qe=0,St=null,yt=null,Ct=0,on=0,ba=zr(0),$t=0,Os=null,Si=0,gu=0,$d=0,Ps=null,Yt=null,xd=0,Sa=1/0,fr=null,yu=!1,bd=null,Mr=null,wu=!1,Dr=null,vu=0,Bs=0,Sd=null,_u=-1,$u=0;function Ut(){return qe&6?ut():_u!==-1?_u:_u=ut()}function Nr(t){return t.mode&1?qe&2&&Ct!==0?Ct&-Ct:I1.transition!==null?($u===0&&($u=yo()),$u):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:So(t.type)),t):1}function In(t,n,a,l){if(50<Bs)throw Bs=0,Sd=null,Error(i(185));ri(t,a,l),(!(qe&2)||t!==St)&&(t===St&&(!(qe&2)&&(gu|=a),$t===4&&Lr(t,Ct)),Zt(t,l),a===1&&qe===0&&!(n.mode&1)&&(Sa=ut()+500,Qo&&Rr()))}function Zt(t,n){var a=t.callbackNode;ul(t,n);var l=qi(t,t===St?Ct:0);if(l===0)a!==null&&Wa(a),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(a!=null&&Wa(a),n===1)t.tag===0?T1(Yp.bind(null,t)):Bf(Yp.bind(null,t)),S1(function(){!(qe&6)&&Rr()}),a=null;else{switch(wo(l)){case 1:a=ti;break;case 4:a=Vi;break;case 16:a=Vt;break;case 536870912:a=go;break;default:a=Vt}a=ih(a,Qp.bind(null,t))}t.callbackPriority=n,t.callbackNode=a}}function Qp(t,n){if(_u=-1,$u=0,qe&6)throw Error(i(327));var a=t.callbackNode;if(ka()&&t.callbackNode!==a)return null;var l=qi(t,t===St?Ct:0);if(l===0)return null;if(l&30||l&t.expiredLanes||n)n=xu(t,l);else{n=l;var p=qe;qe|=2;var y=Xp();(St!==t||Ct!==n)&&(fr=null,Sa=ut()+500,Ei(t,n));do try{Q1();break}catch(P){Zp(t,P)}while(!0);Fl(),mu.current=y,qe=p,yt!==null?n=0:(St=null,Ct=0,n=$t)}if(n!==0){if(n===2&&(p=qa(t),p!==0&&(l=p,n=kd(t,p))),n===1)throw a=Os,Ei(t,0),Lr(t,l),Zt(t,ut()),a;if(n===6)Lr(t,l);else{if(p=t.current.alternate,!(l&30)&&!G1(p)&&(n=xu(t,l),n===2&&(y=qa(t),y!==0&&(l=y,n=kd(t,y))),n===1))throw a=Os,Ei(t,0),Lr(t,l),Zt(t,ut()),a;switch(t.finishedWork=p,t.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:Ci(t,Yt,fr);break;case 3:if(Lr(t,l),(l&130023424)===l&&(n=xd+500-ut(),10<n)){if(qi(t,0)!==0)break;if(p=t.suspendedLanes,(p&l)!==l){Ut(),t.pingedLanes|=t.suspendedLanes&p;break}t.timeoutHandle=Al(Ci.bind(null,t,Yt,fr),n);break}Ci(t,Yt,fr);break;case 4:if(Lr(t,l),(l&4194240)===l)break;for(n=t.eventTimes,p=-1;0<l;){var E=31-ht(l);y=1<<E,E=n[E],E>p&&(p=E),l&=~y}if(l=p,l=ut()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*q1(l/1960))-l,10<l){t.timeoutHandle=Al(Ci.bind(null,t,Yt,fr),l);break}Ci(t,Yt,fr);break;case 5:Ci(t,Yt,fr);break;default:throw Error(i(329))}}}return Zt(t,ut()),t.callbackNode===a?Qp.bind(null,t):null}function kd(t,n){var a=Ps;return t.current.memoizedState.isDehydrated&&(Ei(t,n).flags|=256),t=xu(t,n),t!==2&&(n=Yt,Yt=a,n!==null&&Ed(n)),t}function Ed(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function G1(t){for(var n=t;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var p=a[l],y=p.getSnapshot;p=p.value;try{if(!Nt(y(),p))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Lr(t,n){for(n&=~$d,n&=~gu,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var a=31-ht(n),l=1<<a;t[a]=-1,n&=~l}}function Yp(t){if(qe&6)throw Error(i(327));ka();var n=qi(t,0);if(!(n&1))return Zt(t,ut()),null;var a=xu(t,n);if(t.tag!==0&&a===2){var l=qa(t);l!==0&&(n=l,a=kd(t,l))}if(a===1)throw a=Os,Ei(t,0),Lr(t,n),Zt(t,ut()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Ci(t,Yt,fr),Zt(t,ut()),null}function Cd(t,n){var a=qe;qe|=1;try{return t(n)}finally{qe=a,qe===0&&(Sa=ut()+500,Qo&&Rr())}}function ki(t){Dr!==null&&Dr.tag===0&&!(qe&6)&&ka();var n=qe;qe|=1;var a=wn.transition,l=Ke;try{if(wn.transition=null,Ke=1,t)return t()}finally{Ke=l,wn.transition=a,qe=n,!(qe&6)&&Rr()}}function Td(){on=ba.current,rt(ba)}function Ei(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,b1(a)),yt!==null)for(a=yt.return;a!==null;){var l=a;switch(Dl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Go();break;case 3:_a(),rt(Gt),rt(zt),Yl();break;case 5:Kl(l);break;case 4:_a();break;case 13:rt(lt);break;case 19:rt(lt);break;case 10:Wl(l.type._context);break;case 22:case 23:Td()}a=a.return}if(St=t,yt=t=Ur(t.current,null),Ct=on=n,$t=0,Os=null,$d=gu=Si=0,Yt=Ps=null,$i!==null){for(n=0;n<$i.length;n++)if(a=$i[n],l=a.interleaved,l!==null){a.interleaved=null;var p=l.next,y=a.pending;if(y!==null){var E=y.next;y.next=p,l.next=E}a.pending=l}$i=null}return t}function Zp(t,n){do{var a=yt;try{if(Fl(),au.current=lu,su){for(var l=dt.memoizedState;l!==null;){var p=l.queue;p!==null&&(p.pending=null),l=l.next}su=!1}if(bi=0,bt=_t=dt=null,Cs=!1,Ts=0,_d.current=null,a===null||a.return===null){$t=1,Os=n,yt=null;break}e:{var y=t,E=a.return,P=a,D=n;if(n=Ct,P.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var V=D,te=P,ie=te.tag;if(!(te.mode&1)&&(ie===0||ie===11||ie===15)){var ee=te.alternate;ee?(te.updateQueue=ee.updateQueue,te.memoizedState=ee.memoizedState,te.lanes=ee.lanes):(te.updateQueue=null,te.memoizedState=null)}var fe=xp(E);if(fe!==null){fe.flags&=-257,bp(fe,E,P,y,n),fe.mode&1&&$p(y,V,n),n=fe,D=V;var ye=n.updateQueue;if(ye===null){var $e=new Set;$e.add(D),n.updateQueue=$e}else ye.add(D);break e}else{if(!(n&1)){$p(y,V,n),Id();break e}D=Error(i(426))}}else if(st&&P.mode&1){var mt=xp(E);if(mt!==null){!(mt.flags&65536)&&(mt.flags|=256),bp(mt,E,P,y,n),Ul($a(D,P));break e}}y=D=$a(D,P),$t!==4&&($t=2),Ps===null?Ps=[y]:Ps.push(y),y=E;do{switch(y.tag){case 3:y.flags|=65536,n&=-n,y.lanes|=n;var j=vp(y,D,n);qf(y,j);break e;case 1:P=D;var L=y.type,W=y.stateNode;if(!(y.flags&128)&&(typeof L.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(Mr===null||!Mr.has(W)))){y.flags|=65536,n&=-n,y.lanes|=n;var se=_p(y,P,n);qf(y,se);break e}}y=y.return}while(y!==null)}eh(a)}catch(ke){n=ke,yt===a&&a!==null&&(yt=a=a.return);continue}break}while(!0)}function Xp(){var t=mu.current;return mu.current=lu,t===null?lu:t}function Id(){($t===0||$t===3||$t===2)&&($t=4),St===null||!(Si&268435455)&&!(gu&268435455)||Lr(St,Ct)}function xu(t,n){var a=qe;qe|=2;var l=Xp();(St!==t||Ct!==n)&&(fr=null,Ei(t,n));do try{K1();break}catch(p){Zp(t,p)}while(!0);if(Fl(),qe=a,mu.current=l,yt!==null)throw Error(i(261));return St=null,Ct=0,$t}function K1(){for(;yt!==null;)Jp(yt)}function Q1(){for(;yt!==null&&!ho();)Jp(yt)}function Jp(t){var n=rh(t.alternate,t,on);t.memoizedProps=t.pendingProps,n===null?eh(t):yt=n,_d.current=null}function eh(t){var n=t;do{var a=n.alternate;if(t=n.return,n.flags&32768){if(a=F1(a,n),a!==null){a.flags&=32767,yt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,yt=null;return}}else if(a=j1(a,n,on),a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);$t===0&&($t=5)}function Ci(t,n,a){var l=Ke,p=wn.transition;try{wn.transition=null,Ke=1,Y1(t,n,a,l)}finally{wn.transition=p,Ke=l}return null}function Y1(t,n,a,l){do ka();while(Dr!==null);if(qe&6)throw Error(i(327));a=t.finishedWork;var p=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var y=a.lanes|a.childLanes;if(ll(t,y),t===St&&(yt=St=null,Ct=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||wu||(wu=!0,ih(Vt,function(){return ka(),null})),y=(a.flags&15990)!==0,a.subtreeFlags&15990||y){y=wn.transition,wn.transition=null;var E=Ke;Ke=1;var P=qe;qe|=4,_d.current=null,V1(t,a),Vp(a,t),Uo(Il),br=!!Tl,Il=Tl=null,t.current=a,H1(a),jn(),qe=P,Ke=E,wn.transition=y}else t.current=a;if(wu&&(wu=!1,Dr=t,vu=p),y=t.pendingLanes,y===0&&(Mr=null),Va(a.stateNode),Zt(t,ut()),n!==null)for(l=t.onRecoverableError,a=0;a<n.length;a++)p=n[a],l(p.value,{componentStack:p.stack,digest:p.digest});if(yu)throw yu=!1,t=bd,bd=null,t;return vu&1&&t.tag!==0&&ka(),y=t.pendingLanes,y&1?t===Sd?Bs++:(Bs=0,Sd=t):Bs=0,Rr(),null}function ka(){if(Dr!==null){var t=wo(vu),n=wn.transition,a=Ke;try{if(wn.transition=null,Ke=16>t?16:t,Dr===null)var l=!1;else{if(t=Dr,Dr=null,vu=0,qe&6)throw Error(i(331));var p=qe;for(qe|=4,pe=t.current;pe!==null;){var y=pe,E=y.child;if(pe.flags&16){var P=y.deletions;if(P!==null){for(var D=0;D<P.length;D++){var V=P[D];for(pe=V;pe!==null;){var te=pe;switch(te.tag){case 0:case 11:case 15:Rs(8,te,y)}var ie=te.child;if(ie!==null)ie.return=te,pe=ie;else for(;pe!==null;){te=pe;var ee=te.sibling,fe=te.return;if(Lp(te),te===V){pe=null;break}if(ee!==null){ee.return=fe,pe=ee;break}pe=fe}}}var ye=y.alternate;if(ye!==null){var $e=ye.child;if($e!==null){ye.child=null;do{var mt=$e.sibling;$e.sibling=null,$e=mt}while($e!==null)}}pe=y}}if(y.subtreeFlags&2064&&E!==null)E.return=y,pe=E;else e:for(;pe!==null;){if(y=pe,y.flags&2048)switch(y.tag){case 0:case 11:case 15:Rs(9,y,y.return)}var j=y.sibling;if(j!==null){j.return=y.return,pe=j;break e}pe=y.return}}var L=t.current;for(pe=L;pe!==null;){E=pe;var W=E.child;if(E.subtreeFlags&2064&&W!==null)W.return=E,pe=W;else e:for(E=L;pe!==null;){if(P=pe,P.flags&2048)try{switch(P.tag){case 0:case 11:case 15:hu(9,P)}}catch(ke){ft(P,P.return,ke)}if(P===E){pe=null;break e}var se=P.sibling;if(se!==null){se.return=P.return,pe=se;break e}pe=P.return}}if(qe=p,Rr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(tn,t)}catch{}l=!0}return l}finally{Ke=a,wn.transition=n}}return!1}function th(t,n,a){n=$a(a,n),n=vp(t,n,1),t=Pr(t,n,1),n=Ut(),t!==null&&(ri(t,1,n),Zt(t,n))}function ft(t,n,a){if(t.tag===3)th(t,t,a);else for(;n!==null;){if(n.tag===3){th(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Mr===null||!Mr.has(l))){t=$a(a,t),t=_p(n,t,1),n=Pr(n,t,1),t=Ut(),n!==null&&(ri(n,1,t),Zt(n,t));break}}n=n.return}}function Z1(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),n=Ut(),t.pingedLanes|=t.suspendedLanes&a,St===t&&(Ct&a)===a&&($t===4||$t===3&&(Ct&130023424)===Ct&&500>ut()-xd?Ei(t,0):$d|=a),Zt(t,n)}function nh(t,n){n===0&&(t.mode&1?(n=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):n=1);var a=Ut();t=lr(t,n),t!==null&&(ri(t,n,a),Zt(t,a))}function X1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),nh(t,a)}function J1(t,n){var a=0;switch(t.tag){case 13:var l=t.stateNode,p=t.memoizedState;p!==null&&(a=p.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),nh(t,a)}var rh;rh=function(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps||Gt.current)Qt=!0;else{if(!(t.lanes&a)&&!(n.flags&128))return Qt=!1,U1(t,n,a);Qt=!!(t.flags&131072)}else Qt=!1,st&&n.flags&1048576&&Mf(n,Zo,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;fu(t,n),t=n.pendingProps;var p=pa(n,zt.current);va(n,a),p=Jl(null,n,l,t,p,a);var y=ed();return n.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Kt(l)?(y=!0,Ko(n)):y=!1,n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ql(n),p.updater=du,n.stateNode=p,p._reactInternals=n,sd(n,l,t,a),n=dd(null,n,l,!0,y,a)):(n.tag=0,st&&y&&Ml(n),Lt(null,n,p,a),n=n.child),n;case 16:l=n.elementType;e:{switch(fu(t,n),t=n.pendingProps,p=l._init,l=p(l._payload),n.type=l,p=n.tag=t2(l),t=En(l,t),p){case 0:n=ld(null,n,l,t,a);break e;case 1:n=Ip(null,n,l,t,a);break e;case 11:n=Sp(null,n,l,t,a);break e;case 14:n=kp(null,n,l,En(l.type,t),a);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:En(l,p),ld(t,n,l,p,a);case 1:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:En(l,p),Ip(t,n,l,p,a);case 3:e:{if(zp(n),t===null)throw Error(i(387));l=n.pendingProps,y=n.memoizedState,p=y.element,Hf(t,n),ru(n,l,null,a);var E=n.memoizedState;if(l=E.element,y.isDehydrated)if(y={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},n.updateQueue.baseState=y,n.memoizedState=y,n.flags&256){p=$a(Error(i(423)),n),n=Ap(t,n,l,a,p);break e}else if(l!==p){p=$a(Error(i(424)),n),n=Ap(t,n,l,a,p);break e}else for(sn=Ir(n.stateNode.containerInfo.firstChild),an=n,st=!0,kn=null,a=Wf(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ga(),l===p){n=cr(t,n,a);break e}Lt(t,n,l,a)}n=n.child}return n;case 5:return Kf(n),t===null&&Ll(n),l=n.type,p=n.pendingProps,y=t!==null?t.memoizedProps:null,E=p.children,zl(l,p)?E=null:y!==null&&zl(l,y)&&(n.flags|=32),Tp(t,n),Lt(t,n,E,a),n.child;case 6:return t===null&&Ll(n),null;case 13:return Rp(t,n,a);case 4:return Gl(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=ya(n,null,l,a):Lt(t,n,l,a),n.child;case 11:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:En(l,p),Sp(t,n,l,p,a);case 7:return Lt(t,n,n.pendingProps,a),n.child;case 8:return Lt(t,n,n.pendingProps.children,a),n.child;case 12:return Lt(t,n,n.pendingProps.children,a),n.child;case 10:e:{if(l=n.type._context,p=n.pendingProps,y=n.memoizedProps,E=p.value,Xe(eu,l._currentValue),l._currentValue=E,y!==null)if(Nt(y.value,E)){if(y.children===p.children&&!Gt.current){n=cr(t,n,a);break e}}else for(y=n.child,y!==null&&(y.return=n);y!==null;){var P=y.dependencies;if(P!==null){E=y.child;for(var D=P.firstContext;D!==null;){if(D.context===l){if(y.tag===1){D=dr(-1,a&-a),D.tag=2;var V=y.updateQueue;if(V!==null){V=V.shared;var te=V.pending;te===null?D.next=D:(D.next=te.next,te.next=D),V.pending=D}}y.lanes|=a,D=y.alternate,D!==null&&(D.lanes|=a),Vl(y.return,a,n),P.lanes|=a;break}D=D.next}}else if(y.tag===10)E=y.type===n.type?null:y.child;else if(y.tag===18){if(E=y.return,E===null)throw Error(i(341));E.lanes|=a,P=E.alternate,P!==null&&(P.lanes|=a),Vl(E,a,n),E=y.sibling}else E=y.child;if(E!==null)E.return=y;else for(E=y;E!==null;){if(E===n){E=null;break}if(y=E.sibling,y!==null){y.return=E.return,E=y;break}E=E.return}y=E}Lt(t,n,p.children,a),n=n.child}return n;case 9:return p=n.type,l=n.pendingProps.children,va(n,a),p=gn(p),l=l(p),n.flags|=1,Lt(t,n,l,a),n.child;case 14:return l=n.type,p=En(l,n.pendingProps),p=En(l.type,p),kp(t,n,l,p,a);case 15:return Ep(t,n,n.type,n.pendingProps,a);case 17:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:En(l,p),fu(t,n),n.tag=1,Kt(l)?(t=!0,Ko(n)):t=!1,va(n,a),yp(n,l,p),sd(n,l,p,a),dd(null,n,l,!0,t,a);case 19:return Pp(t,n,a);case 22:return Cp(t,n,a)}throw Error(i(156,n.tag))};function ih(t,n){return Fa(t,n)}function e2(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,n,a,l){return new e2(t,n,a,l)}function zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function t2(t){if(typeof t=="function")return zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ge)return 11;if(t===Oe)return 14}return 2}function Ur(t,n){var a=t.alternate;return a===null?(a=vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function bu(t,n,a,l,p,y){var E=2;if(l=t,typeof t=="function")zd(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case U:return Ti(a.children,p,y,n);case Y:E=8,p|=8;break;case ae:return t=vn(12,a,n,p|2),t.elementType=ae,t.lanes=y,t;case le:return t=vn(13,a,n,p),t.elementType=le,t.lanes=y,t;case Te:return t=vn(19,a,n,p),t.elementType=Te,t.lanes=y,t;case Se:return Su(a,p,y,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case oe:E=10;break e;case me:E=9;break e;case ge:E=11;break e;case Oe:E=14;break e;case ve:E=16,l=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=vn(E,a,n,p),n.elementType=t,n.type=l,n.lanes=y,n}function Ti(t,n,a,l){return t=vn(7,t,l,n),t.lanes=a,t}function Su(t,n,a,l){return t=vn(22,t,l,n),t.elementType=Se,t.lanes=a,t.stateNode={isHidden:!1},t}function Ad(t,n,a){return t=vn(6,t,null,n),t.lanes=a,t}function Rd(t,n,a){return n=vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function n2(t,n,a,l,p){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=l,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Od(t,n,a,l,p,y,E,P,D){return t=new n2(t,n,a,P,D),n===1?(n=1,y===!0&&(n|=8)):n=0,y=vn(3,null,null,n),t.current=y,y.stateNode=t,y.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(y),t}function r2(t,n,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:n,implementation:a}}function ah(t){if(!t)return Ar;t=t._reactInternals;e:{if(Un(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Kt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(Kt(a))return Of(t,a,n)}return n}function sh(t,n,a,l,p,y,E,P,D){return t=Od(a,l,!0,t,p,y,E,P,D),t.context=ah(null),a=t.current,l=Ut(),p=Nr(a),y=dr(l,p),y.callback=n??null,Pr(a,y,p),t.current.lanes=p,ri(t,p,l),Zt(t,l),t}function ku(t,n,a,l){var p=n.current,y=Ut(),E=Nr(p);return a=ah(a),n.context===null?n.context=a:n.pendingContext=a,n=dr(y,E),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=Pr(p,n,E),t!==null&&(In(t,p,E,y),nu(t,p,E)),E}function Eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oh(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Pd(t,n){oh(t,n),(t=t.alternate)&&oh(t,n)}var uh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bd(t){this._internalRoot=t}Cu.prototype.render=Bd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));ku(t,n,null,null)},Cu.prototype.unmount=Bd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ki(function(){ku(null,t,null,null)}),n[ar]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var n=$o();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wn.length&&n!==0&&n<Wn[a].priority;a++);Wn.splice(a,0,t),a===0&&Sn(t)}};function Md(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lh(){}function i2(t,n,a,l,p){if(p){if(typeof l=="function"){var y=l;l=function(){var V=Eu(E);y.call(V)}}var E=sh(n,l,t,0,null,!1,!1,"",lh);return t._reactRootContainer=E,t[ar]=E.current,vs(t.nodeType===8?t.parentNode:t),ki(),E}for(;p=t.lastChild;)t.removeChild(p);if(typeof l=="function"){var P=l;l=function(){var V=Eu(D);P.call(V)}}var D=Od(t,0,!1,null,null,!1,!1,"",lh);return t._reactRootContainer=D,t[ar]=D.current,vs(t.nodeType===8?t.parentNode:t),ki(function(){ku(n,D,a,l)}),D}function Iu(t,n,a,l,p){var y=a._reactRootContainer;if(y){var E=y;if(typeof p=="function"){var P=p;p=function(){var D=Eu(E);P.call(D)}}ku(n,E,t,p)}else E=i2(a,n,t,p,l);return Eu(E)}vo=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var a=ni(n.pendingLanes);a!==0&&(Ga(n,a|1),Zt(n,ut()),!(qe&6)&&(Sa=ut()+500,Rr()))}break;case 13:ki(function(){var l=lr(t,1);if(l!==null){var p=Ut();In(l,t,1,p)}}),Pd(t,1)}},Ka=function(t){if(t.tag===13){var n=lr(t,134217728);if(n!==null){var a=Ut();In(n,t,134217728,a)}Pd(t,134217728)}},_o=function(t){if(t.tag===13){var n=Nr(t),a=lr(t,n);if(a!==null){var l=Ut();In(a,t,n,l)}Pd(t,n)}},$o=function(){return Ke},xo=function(t,n){var a=Ke;try{return Ke=t,n()}finally{Ke=a}},ji=function(t,n,a){switch(n){case"input":if(Dn(t,a),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var p=qo(l);if(!p)throw Error(i(90));et(l),Dn(l,p)}}}break;case"textarea":Di(t,a);break;case"select":n=a.value,n!=null&&Zn(t,!!a.multiple,n,!1)}},so=Cd,oo=ki;var a2={usingClientEntryPoint:!1,Events:[xs,ca,qo,io,ao,Cd]},Ms={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s2={bundleType:Ms.bundleType,version:Ms.version,rendererPackageName:Ms.rendererPackageName,rendererConfig:Ms.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ua(t),t===null?null:t.stateNode},findFiberByHostInstance:Ms.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{tn=zu.inject(s2),cn=zu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a2,Xt.createPortal=function(t,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Md(n))throw Error(i(200));return r2(t,n,null,a)},Xt.createRoot=function(t,n){if(!Md(t))throw Error(i(299));var a=!1,l="",p=uh;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Od(t,1,!1,null,null,a,!1,l,p),t[ar]=n.current,vs(t.nodeType===8?t.parentNode:t),new Bd(n)},Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Ua(n),t=t===null?null:t.stateNode,t},Xt.flushSync=function(t){return ki(t)},Xt.hydrate=function(t,n,a){if(!Tu(n))throw Error(i(200));return Iu(null,t,n,!0,a)},Xt.hydrateRoot=function(t,n,a){if(!Md(t))throw Error(i(405));var l=a!=null&&a.hydratedSources||null,p=!1,y="",E=uh;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(y=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),n=sh(n,null,t,1,a??null,p,!1,y,E),t[ar]=n.current,vs(t),l)for(t=0;t<l.length;t++)a=l[t],p=a._getVersion,p=p(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,p]:n.mutableSourceEagerHydrationData.push(a,p);return new Cu(n)},Xt.render=function(t,n,a){if(!Tu(n))throw Error(i(200));return Iu(null,t,n,!1,a)},Xt.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(i(40));return t._reactRootContainer?(ki(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[ar]=null})}),!0):!1},Xt.unstable_batchedUpdates=Cd,Xt.unstable_renderSubtreeIntoContainer=function(t,n,a,l){if(!Tu(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Iu(t,n,a,!1,l)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var yh;function y2(){if(yh)return Ld.exports;yh=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),Ld.exports=g2(),Ld.exports}var wh;function w2(){if(wh)return Ru;wh=1;var e=y2();return Ru.createRoot=e.createRoot,Ru.hydrateRoot=e.hydrateRoot,Ru}var v2=w2();const _2=Vy(v2);/*!
 * ONNX Runtime Web v1.20.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Kc=Object.defineProperty,$2=Object.getOwnPropertyDescriptor,x2=Object.getOwnPropertyNames,b2=Object.prototype.hasOwnProperty,S2=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,i)=>(typeof require<"u"?require:r)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),re=(e,r)=>()=>(e&&(r=e(e=0)),r),to=(e,r)=>{for(var i in r)Kc(e,i,{get:r[i],enumerable:!0})},k2=(e,r,i,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of x2(r))!b2.call(e,o)&&o!==i&&Kc(e,o,{get:()=>r[o],enumerable:!(s=$2(r,o))||s.enumerable});return e},Gu=e=>k2(Kc({},"__esModule",{value:!0}),e),Ns,Fr,Ta,vh,Qc,Yc=re(()=>{Ns=new Map,Fr=[],Ta=(e,r,i)=>{if(r&&typeof r.init=="function"&&typeof r.createInferenceSessionHandler=="function"){let s=Ns.get(e);if(s===void 0)Ns.set(e,{backend:r,priority:i});else{if(s.priority>i)return;if(s.priority===i&&s.backend!==r)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let o=Fr.indexOf(e);o!==-1&&Fr.splice(o,1);for(let d=0;d<Fr.length;d++)if(Ns.get(Fr[d]).priority<=i){Fr.splice(d,0,e);return}Fr.push(e)}return}throw new TypeError("not a valid backend")},vh=async e=>{let r=Ns.get(e);if(!r)return"backend not found.";if(r.initialized)return r.backend;if(r.aborted)return r.error;{let i=!!r.initPromise;try{return i||(r.initPromise=r.backend.init(e)),await r.initPromise,r.initialized=!0,r.backend}catch(s){return i||(r.error=`${s}`,r.aborted=!0),r.error}finally{delete r.initPromise}}},Qc=async e=>{let r=e.executionProviders||[],i=r.map(m=>typeof m=="string"?m:m.name),s=i.length===0?Fr:i,o,d=[],u=new Set;for(let m of s){let g=await vh(m);typeof g=="string"?d.push({name:m,err:g}):(o||(o=g),o===g&&u.add(m))}if(!o)throw new Error(`no available backend found. ERR: ${d.map(m=>`[${m.name}] ${m.err}`).join(", ")}`);for(let{name:m,err:g}of d)i.includes(m)&&console.warn(`removing requested execution provider "${m}" from session options because it is not available: ${g}`);let h=r.filter(m=>u.has(typeof m=="string"?m:m.name));return[o,new Proxy(e,{get:(m,g)=>g==="executionProviders"?h:Reflect.get(m,g)})]}}),E2=re(()=>{Yc()}),Hy,C2=re(()=>{Hy="1.20.1"}),Fd,$n,qy=re(()=>{C2(),Fd="warning",$n={wasm:{},webgl:{},webgpu:{},versions:{common:Hy},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Fd=e}},get logLevel(){return Fd}},Object.defineProperty($n,"logLevel",{enumerable:!0})}),Je,T2=re(()=>{qy(),Je=$n}),Gy,Ky,I2=re(()=>{Gy=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let s=i.getContext("2d");if(s!=null){let o,d;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],d=e.dims[3]):(o=e.dims[3],d=e.dims[2]);let u=(r==null?void 0:r.format)!==void 0?r.format:"RGB",h=r==null?void 0:r.norm,m,g;h===void 0||h.mean===void 0?m=[255,255,255,255]:typeof h.mean=="number"?m=[h.mean,h.mean,h.mean,h.mean]:(m=[h.mean[0],h.mean[1],h.mean[2],0],h.mean[3]!==void 0&&(m[3]=h.mean[3])),h===void 0||h.bias===void 0?g=[0,0,0,0]:typeof h.bias=="number"?g=[h.bias,h.bias,h.bias,h.bias]:(g=[h.bias[0],h.bias[1],h.bias[2],0],h.bias[3]!==void 0&&(g[3]=h.bias[3]));let _=d*o,v=0,f=_,x=_*2,S=-1;u==="RGBA"?(v=0,f=_,x=_*2,S=_*3):u==="RGB"?(v=0,f=_,x=_*2):u==="RBG"&&(v=0,x=_,f=_*2);for(let b=0;b<d;b++)for(let T=0;T<o;T++){let A=(e.data[v++]-g[0])*m[0],C=(e.data[f++]-g[1])*m[1],O=(e.data[x++]-g[2])*m[2],R=S===-1?255:(e.data[S++]-g[3])*m[3];s.fillStyle="rgba("+A+","+C+","+O+","+R+")",s.fillRect(T,b,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ky=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),s;if(i!=null){let o,d,u;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],d=e.dims[1],u=e.dims[3]):(o=e.dims[3],d=e.dims[2],u=e.dims[1]);let h=r!==void 0&&r.format!==void 0?r.format:"RGB",m=r==null?void 0:r.norm,g,_;m===void 0||m.mean===void 0?g=[255,255,255,255]:typeof m.mean=="number"?g=[m.mean,m.mean,m.mean,m.mean]:(g=[m.mean[0],m.mean[1],m.mean[2],255],m.mean[3]!==void 0&&(g[3]=m.mean[3])),m===void 0||m.bias===void 0?_=[0,0,0,0]:typeof m.bias=="number"?_=[m.bias,m.bias,m.bias,m.bias]:(_=[m.bias[0],m.bias[1],m.bias[2],0],m.bias[3]!==void 0&&(_[3]=m.bias[3]));let v=d*o;if(r!==void 0&&(r.format!==void 0&&u===4&&r.format!=="RGBA"||u===3&&r.format!=="RGB"&&r.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,x=0,S=1,b=2,T=3,A=0,C=v,O=v*2,R=-1;h==="RGBA"?(A=0,C=v,O=v*2,R=v*3):h==="RGB"?(A=0,C=v,O=v*2):h==="RBG"&&(A=0,O=v,C=v*2),s=i.createImageData(o,d);for(let B=0;B<d*o;x+=f,S+=f,b+=f,T+=f,B++)s.data[x]=(e.data[A++]-_[0])*g[0],s.data[S]=(e.data[C++]-_[1])*g[1],s.data[b]=(e.data[O++]-_[2])*g[2],s.data[T]=R===-1?255:(e.data[R++]-_[3])*g[3]}else throw new Error("Can not access image data");return s}}),Ou,Qy,Yy,Zy,Xy,Jy,z2=re(()=>{Zc(),Ou=(e,r)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(r.height===void 0||r.width===void 0)throw new Error("Image height and width must be defined");if(r.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:s}=r,o=r.norm??{mean:255,bias:0},d,u;typeof o.mean=="number"?d=[o.mean,o.mean,o.mean,o.mean]:d=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?u=[o.bias,o.bias,o.bias,o.bias]:u=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let h=r.format!==void 0?r.format:"RGBA",m=r.tensorFormat!==void 0&&r.tensorFormat!==void 0?r.tensorFormat:"RGB",g=i*s,_=m==="RGBA"?new Float32Array(g*4):new Float32Array(g*3),v=4,f=0,x=1,S=2,b=3,T=0,A=g,C=g*2,O=-1;h==="RGB"&&(v=3,f=0,x=1,S=2,b=-1),m==="RGBA"?O=g*3:m==="RBG"?(T=0,C=g,A=g*2):m==="BGR"&&(C=0,A=g,T=g*2);for(let R=0;R<g;R++,f+=v,S+=v,x+=v,b+=v)_[T++]=(e[f]+u[0])/d[0],_[A++]=(e[x]+u[1])/d[1],_[C++]=(e[S]+u[2])/d[2],O!==-1&&b!==-1&&(_[O++]=(e[b]+u[3])/d[3]);return m==="RGBA"?new un("float32",_,[1,4,i,s]):new un("float32",_,[1,3,i,s])},Qy=async(e,r)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,s=typeof ImageData<"u"&&e instanceof ImageData,o=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,d=typeof e=="string",u,h=r??{},m=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},g=_=>typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||_ instanceof OffscreenCanvas?_.getContext("2d"):null;if(i){let _=m();_.width=e.width,_.height=e.height;let v=g(_);if(v!=null){let f=e.height,x=e.width;if(r!==void 0&&r.resizedHeight!==void 0&&r.resizedWidth!==void 0&&(f=r.resizedHeight,x=r.resizedWidth),r!==void 0){if(h=r,r.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");h.tensorFormat="RGBA",h.height=f,h.width=x}else h.tensorFormat="RGBA",h.height=f,h.width=x;v.drawImage(e,0,0),u=v.getImageData(0,0,x,f).data}else throw new Error("Can not access image data")}else if(s){let _,v;if(r!==void 0&&r.resizedWidth!==void 0&&r.resizedHeight!==void 0?(_=r.resizedHeight,v=r.resizedWidth):(_=e.height,v=e.width),r!==void 0&&(h=r),h.format="RGBA",h.height=_,h.width=v,r!==void 0){let f=m();f.width=v,f.height=_;let x=g(f);if(x!=null)x.putImageData(e,0,0),u=x.getImageData(0,0,v,_).data;else throw new Error("Can not access image data")}else u=e.data}else if(o){if(r===void 0)throw new Error("Please provide image config with format for Imagebitmap");let _=m();_.width=e.width,_.height=e.height;let v=g(_);if(v!=null){let f=e.height,x=e.width;return v.drawImage(e,0,0,x,f),u=v.getImageData(0,0,x,f).data,h.height=f,h.width=x,Ou(u,h)}else throw new Error("Can not access image data")}else{if(d)return new Promise((_,v)=>{let f=m(),x=g(f);if(!e||!x)return v();let S=new Image;S.crossOrigin="Anonymous",S.src=e,S.onload=()=>{f.width=S.width,f.height=S.height,x.drawImage(S,0,0,f.width,f.height);let b=x.getImageData(0,0,f.width,f.height);h.height=f.height,h.width=f.width,_(Ou(b.data,h))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(u!==void 0)return Ou(u,h);throw new Error("Input data provided is not supported - aborted tensor creation")},Yy=(e,r)=>{let{width:i,height:s,download:o,dispose:d}=r,u=[1,s,i,4];return new un({location:"texture",type:"float32",texture:e,dims:u,download:o,dispose:d})},Zy=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:d}=r;return new un({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:s,download:o,dispose:d})},Xy=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:d}=r;return new un({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:s,download:o,dispose:d})},Jy=(e,r,i)=>new un({location:"cpu-pinned",type:e,data:r,dims:i??[r.length]})}),Ai,Ks,Wd,e0,A2=re(()=>{Ai=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ks=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Wd=!1,e0=()=>{if(!Wd){Wd=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,r=typeof BigUint64Array<"u"&&BigUint64Array.from,i=typeof Float16Array<"u"&&Float16Array.from;e&&(Ai.set("int64",BigInt64Array),Ks.set(BigInt64Array,"int64")),r&&(Ai.set("uint64",BigUint64Array),Ks.set(BigUint64Array,"uint64")),i?(Ai.set("float16",Float16Array),Ks.set(Float16Array,"float16")):Ai.set("float16",Uint16Array)}}}),t0,n0,R2=re(()=>{Zc(),t0=e=>{let r=1;for(let i=0;i<e.length;i++){let s=e[i];if(typeof s!="number"||!Number.isSafeInteger(s))throw new TypeError(`dims[${i}] must be an integer, got: ${s}`);if(s<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${s}`);r*=s}return r},n0=(e,r)=>{switch(e.location){case"cpu":return new un(e.type,e.data,r);case"cpu-pinned":return new un({location:"cpu-pinned",data:e.data,type:e.type,dims:r});case"texture":return new un({location:"texture",texture:e.texture,type:e.type,dims:r});case"gpu-buffer":return new un({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:r});case"ml-tensor":return new un({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:r});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),un,Zc=re(()=>{I2(),z2(),A2(),R2(),un=class{constructor(e,r,i){e0();let s,o;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,s=e.type,o=e.dims,e.location){case"cpu-pinned":{let u=Ai.get(s);if(!u)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(e.data instanceof u))throw new TypeError(`buffer should be of type ${u.name}`);this.cpuData=e.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let u,h;if(typeof e=="string")if(s=e,h=i,e==="string"){if(!Array.isArray(r))throw new TypeError("A string tensor's data must be a string array.");u=r}else{let m=Ai.get(e);if(m===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(r)){if(e==="float16"&&m===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${m.name} as data.`);e==="uint64"||e==="int64"?u=m.from(r,BigInt):u=m.from(r)}else if(r instanceof m)u=r;else if(r instanceof Uint8ClampedArray)if(e==="uint8")u=Uint8Array.from(r);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${s} tensor's data must be type of ${m}`)}else if(h=r,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let m=typeof e[0];if(m==="string")s="string",u=e;else if(m==="boolean")s="bool",u=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${m}.`)}else if(e instanceof Uint8ClampedArray)s="uint8",u=Uint8Array.from(e);else{let m=Ks.get(e.constructor);if(m===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);s=m,u=e}if(h===void 0)h=[u.length];else if(!Array.isArray(h))throw new TypeError("A tensor's dims must be a number array");o=h,this.cpuData=u,this.dataLocation="cpu"}let d=t0(o);if(this.cpuData&&d!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(d/2)===this.cpuData.length))throw new Error(`Tensor's size(${d}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=o,this.size=d}static async fromImage(e,r){return Qy(e,r)}static fromTexture(e,r){return Yy(e,r)}static fromGpuBuffer(e,r){return Zy(e,r)}static fromMLTensor(e,r){return Xy(e,r)}static fromPinnedBuffer(e,r,i){return Jy(e,r,i)}toDataURL(e){return Gy(this,e)}toImageData(e){return Ky(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,e&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return n0(this,e)}}}),wt,Xc=re(()=>{Zc(),wt=un}),Ku,Vd,Qn,Bn,r0=re(()=>{qy(),Ku=(e,r)=>{(typeof $n.trace>"u"?!$n.wasm.trace:!$n.trace)||console.timeStamp(`${e}::ORT::${r}`)},Vd=(e,r)=>{var o;let i=((o=new Error().stack)==null?void 0:o.split(/\r\n|\r|\n/g))||[],s=!1;for(let d=0;d<i.length;d++){if(s&&!i[d].includes("TRACE_FUNC")){let u=`FUNC_${e}::${i[d].trim().split(" ")[1]}`;r&&(u+=`::${r}`),Ku("CPU",u);return}i[d].includes("TRACE_FUNC")&&(s=!0)}},Qn=e=>{(typeof $n.trace>"u"?!$n.wasm.trace:!$n.trace)||Vd("BEGIN",e)},Bn=e=>{(typeof $n.trace>"u"?!$n.wasm.trace:!$n.trace)||Vd("END",e)}}),i0,O2=re(()=>{Yc(),Xc(),r0(),i0=class a0{constructor(r){this.handler=r}async run(r,i,s){Qn();let o={},d={};if(typeof r!="object"||r===null||r instanceof wt||Array.isArray(r))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let u=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof wt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");u=!1;for(let g of i){if(typeof g!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(g)===-1)throw new RangeError(`'fetches' contains invalid output name: ${g}.`);o[g]=null}if(typeof s=="object"&&s!==null)d=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let g=!1,_=Object.getOwnPropertyNames(i);for(let v of this.outputNames)if(_.indexOf(v)!==-1){let f=i[v];(f===null||f instanceof wt)&&(g=!0,u=!1,o[v]=f)}if(g){if(typeof s=="object"&&s!==null)d=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else d=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let g of this.inputNames)if(typeof r[g]>"u")throw new Error(`input '${g}' is missing in 'feeds'.`);if(u)for(let g of this.outputNames)o[g]=null;let h=await this.handler.run(r,o,d),m={};for(let g in h)if(Object.hasOwnProperty.call(h,g)){let _=h[g];_ instanceof wt?m[g]=_:m[g]=new wt(_.type,_.data,_.dims)}return Bn(),m}async release(){return this.handler.dispose()}static async create(r,i,s,o){Qn();let d,u={};if(typeof r=="string"){if(d=r,typeof i=="object"&&i!==null)u=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof Uint8Array){if(d=r,typeof i=="object"&&i!==null)u=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&r instanceof SharedArrayBuffer){let _=r,v=0,f=r.byteLength;if(typeof i=="object"&&i!==null)u=i;else if(typeof i=="number"){if(v=i,!Number.isSafeInteger(v))throw new RangeError("'byteOffset' must be an integer.");if(v<0||v>=_.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${_.byteLength}).`);if(f=r.byteLength-v,typeof s=="number"){if(f=s,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||v+f>_.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${_.byteLength-v}].`);if(typeof o=="object"&&o!==null)u=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof s<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");d=new Uint8Array(_,v,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[h,m]=await Qc(u),g=await h.createInferenceSessionHandler(d,m);return Bn(),new a0(g)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Qu,P2=re(()=>{O2(),Qu=i0}),B2=re(()=>{}),M2=re(()=>{}),D2=re(()=>{}),N2=re(()=>{}),_h,s0,L2=re(()=>{Yc(),Xc(),_h="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",s0=class o0{constructor(r,i,s){this.handler=r,this.hasOptimizerModel=i,this.hasEvalModel=s}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(r,i){let s=r.evalModel||"",o=r.optimizerModel||"",d=i||{},[u,h]=await Qc(d);if(u.createTrainingSessionHandler){let m=await u.createTrainingSessionHandler(r.checkpointState,r.trainModel,s,o,h);return new o0(m,!!r.optimizerModel,!!r.evalModel)}else throw new Error(_h)}typeNarrowingForRunStep(r,i,s,o,d){let u={},h={};if(typeof s!="object"||s===null||s instanceof wt||Array.isArray(s))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let m=!0;if(typeof o=="object"){if(o===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(o instanceof wt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(o)){if(o.length===0)throw new TypeError("'fetches' cannot be an empty array.");m=!1;for(let g of o){if(typeof g!="string")throw new TypeError("'fetches' must be a string array or an object.");if(i.indexOf(g)===-1)throw new RangeError(`'fetches' contains invalid output name: ${g}.`);u[g]=null}if(typeof d=="object"&&d!==null)h=d;else if(typeof d<"u")throw new TypeError("'options' must be an object.")}else{let g=!1,_=Object.getOwnPropertyNames(o);for(let v of i)if(_.indexOf(v)!==-1){let f=o[v];(f===null||f instanceof wt)&&(g=!0,m=!1,u[v]=f)}if(g){if(typeof d=="object"&&d!==null)h=d;else if(typeof d<"u")throw new TypeError("'options' must be an object.")}else h=o}}else if(typeof o<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let g of r)if(typeof s[g]>"u")throw new Error(`input '${g}' is missing in 'feeds'.`);if(m)for(let g of i)u[g]=null;return[u,h]}convertHandlerReturnTypeToMapOfTensors(r){let i={};for(let s in r)if(Object.hasOwnProperty.call(r,s)){let o=r[s];o instanceof wt?i[s]=o:i[s]=new wt(o.type,o.data,o.dims)}return i}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(r,i,s){let[o,d]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,r,i,s),u=await this.handler.runTrainStep(r,o,d);return this.convertHandlerReturnTypeToMapOfTensors(u)}async runOptimizerStep(r){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(r||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(r,i,s){if(this.hasEvalModel){let[o,d]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,r,i,s),u=await this.handler.runEvalStep(r,o,d);return this.convertHandlerReturnTypeToMapOfTensors(u)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(r=!0){return this.handler.getParametersSize(r)}async loadParametersBuffer(r,i=!0){let s=await this.getParametersSize(i);if(r.length!==4*s)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(r,i)}async getContiguousParameters(r=!0){return this.handler.getContiguousParameters(r)}async release(){return this.handler.dispose()}}}),u0,U2=re(()=>{L2(),u0=s0}),j2={};to(j2,{InferenceSession:()=>Qu,TRACE:()=>Ku,TRACE_FUNC_BEGIN:()=>Qn,TRACE_FUNC_END:()=>Bn,Tensor:()=>wt,TrainingSession:()=>u0,env:()=>Je,registerBackend:()=>Ta});var Mn=re(()=>{E2(),T2(),P2(),Xc(),B2(),M2(),r0(),D2(),N2(),U2()}),Jc=re(()=>{}),l0={};to(l0,{default:()=>d0});var Hd,qd,d0,F2=re(()=>{var e;o1(),Oi(),il(),Hd="ort-wasm-proxy-worker",qd=((e=globalThis.self)==null?void 0:e.name)===Hd,qd&&(self.onmessage=r=>{let{type:i,in:s}=r.data;try{switch(i){case"init-wasm":ef(s.wasm).then(()=>{wf(s).then(()=>{postMessage({type:i})},o=>{postMessage({type:i,err:o})})},o=>{postMessage({type:i,err:o})});break;case"init-ep":{let{epName:o,env:d}=s;vf(d,o).then(()=>{postMessage({type:i})},u=>{postMessage({type:i,err:u})});break}case"copy-from":{let{buffer:o}=s,d=nl(o);postMessage({type:i,out:d});break}case"create":{let{model:o,options:d}=s;_f(o,d).then(u=>{postMessage({type:i,out:u})},u=>{postMessage({type:i,err:u})});break}case"release":$f(s),postMessage({type:i});break;case"run":{let{sessionId:o,inputIndices:d,inputs:u,outputIndices:h,options:m}=s;xf(o,d,u,h,new Array(h.length).fill(null),m).then(g=>{g.some(_=>_[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:g},Sf([...u,...g]))},g=>{postMessage({type:i,err:g})});break}case"end-profiling":bf(s),postMessage({type:i});break;default:}}catch(o){postMessage({type:i,err:o})}}),d0=qd?null:r=>new Worker(r??Ca,{type:"module",name:Hd})}),c0={};to(c0,{default:()=>f0});var Gd,Kd,f0,W2=re(()=>{var e;Kd=(Gd=import.meta.url,async function(r={}){function i(){return ve.buffer!=J.buffer&&Ve(),J}function s(){return ve.buffer!=J.buffer&&Ve(),G}function o(){return ve.buffer!=J.buffer&&Ve(),z}function d(){return ve.buffer!=J.buffer&&Ve(),N}function u(){return ve.buffer!=J.buffer&&Ve(),ne}function h(){return ve.buffer!=J.buffer&&Ve(),ce}function m(){return ve.buffer!=J.buffer&&Ve(),xe}function g(){return ve.buffer!=J.buffer&&Ve(),We}var _,v,f=Object.assign({},r),x=new Promise((c,w)=>{_=c,v=w}),S=typeof window=="object",b=typeof importScripts=="function",T=b&&self.name=="em-pthread";f.mountExternalData=(c,w)=>{c.startsWith("./")&&(c=c.substring(2)),(f.Fb||(f.Fb=new Map)).set(c,w)},f.unmountExternalData=()=>{delete f.Fb};var A=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let C=()=>{let c=($,k,I)=>(...M)=>{let K=Mt,X=k==null?void 0:k();M=$(...M);let ue=k==null?void 0:k();return X!==ue&&($=ue,I(X),k=I=null),Mt!=K?new Promise((de,Ee)=>{br={resolve:de,reject:Ee}}):M},w=$=>async(...k)=>{var I;try{if(f.Eb)throw Error("Session already started");let M=f.Eb={fc:k[0],errors:[]},K=await $(...k);if(f.Eb!==M)throw Error("Session mismatch");(I=f.Gb)==null||I.flush();let X=M.errors;if(0<X.length){let ue=await Promise.all(X);if(ue=ue.filter(de=>de),0<ue.length)throw Error(ue.join(`
`))}return K}finally{f.Eb=null}};f._OrtCreateSession=c(f._OrtCreateSession,()=>f._OrtCreateSession,$=>f._OrtCreateSession=$),f._OrtRun=w(c(f._OrtRun,()=>f._OrtRun,$=>f._OrtRun=$)),f._OrtRunWithBinding=w(c(f._OrtRunWithBinding,()=>f._OrtRunWithBinding,$=>f._OrtRunWithBinding=$)),f._OrtBindInput=c(f._OrtBindInput,()=>f._OrtBindInput,$=>f._OrtBindInput=$),C=void 0};f.jsepInit=(c,w)=>{if(C==null||C(),c==="webgpu"){[f.Gb,f.Ub,f.Yb,f.Nb,f.Xb,f.jb,f.Zb,f.bc,f.Vb,f.Wb,f.$b]=w;let $=f.Gb;f.jsepRegisterBuffer=(k,I,M,K)=>$.registerBuffer(k,I,M,K),f.jsepGetBuffer=k=>$.getBuffer(k),f.jsepCreateDownloader=(k,I,M)=>$.createDownloader(k,I,M),f.jsepOnReleaseSession=k=>{$.onReleaseSession(k)},f.jsepOnRunStart=k=>$.onRunStart(k),f.cc=(k,I)=>{$.upload(k,I)}}else if(c==="webnn"){[f.Gb,f.ac,f.Ob,f.jsepEnsureTensor,f.dc,f.jsepDownloadTensor]=w,f.jsepReleaseTensorId=f.Ob;let $=f.Gb;f.jsepOnRunStart=k=>$.onRunStart(k),f.jsepRegisterMLContext=(k,I)=>{$.registerMLContext(k,I)},f.jsepOnReleaseSession=k=>{$.onReleaseSession(k)},f.jsepCreateMLTensorDownloader=(k,I)=>$.createMLTensorDownloader(k,I),f.jsepRegisterMLTensor=(k,I,M)=>$.registerMLTensor(k,I,M)}};var O,R,B=Object.assign({},f),F="./this.program",U=(c,w)=>{throw w},Y="";(S||b)&&(b?Y=self.location.href:typeof document<"u"&&document.currentScript&&(Y=document.currentScript.src),Gd&&(Y=Gd),Y=Y.startsWith("blob:")?"":Y.substr(0,Y.replace(/[?#].*/,"").lastIndexOf("/")+1),b&&(R=c=>{var w=new XMLHttpRequest;return w.open("GET",c,!1),w.responseType="arraybuffer",w.send(null),new Uint8Array(w.response)}),O=(c,w,$)=>{var k=new XMLHttpRequest;k.open("GET",c,!0),k.responseType="arraybuffer",k.onload=()=>{k.status==200||k.status==0&&k.response?w(k.response):$()},k.onerror=$,k.send(null)});var ae,oe=console.log.bind(console),me=console.error.bind(console),ge=oe,le=me;if(Object.assign(f,B),B=null,T){let c=function(w){try{var $=w.data,k=$.cmd;if(k==="load"){let I=[];self.onmessage=M=>I.push(M),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let M of I)c(M);self.onmessage=c};for(let M of $.handlers)f[M]&&!f[M].proxy||(f[M]=(...K)=>{postMessage({Mb:"callHandler",oc:M,args:K})},M=="print"&&(ge=f[M]),M=="printErr"&&(le=f[M]));ve=$.wasmMemory,Ve(),Te($.wasmModule)}else if(k==="run"){gs($.pthread_ptr,0,0,1,0,0),vr($.pthread_ptr),io(),ji(),Oe||(ms(),Oe=!0);try{ao($.start_routine,$.arg)}catch(I){if(I!="unwind")throw I}}else k==="cancel"?nr()&&Vn(-1):$.target!=="setimmediate"&&(k==="checkMailbox"?Oe&&nn():k&&(le(`worker: received unknown command ${k}`),le($)))}catch(I){throw No(),I}};var Te,Oe=!1;le=function(...w){w=w.join(" "),console.error(w)},self.alert=function(...w){postMessage({Mb:"alert",text:w.join(" "),qc:nr()})},f.instantiateWasm=(w,$)=>new Promise(k=>{Te=I=>{I=new WebAssembly.Instance(I,Oa()),$(I),k()}}),self.onunhandledrejection=w=>{throw w.reason||w},self.onmessage=c}f.wasmBinary&&(ae=f.wasmBinary);var ve,Se,q,J,G,z,N,ne,ce,xe,Ce,je,We,De=!1;function Ve(){var c=ve.buffer;f.HEAP8=J=new Int8Array(c),f.HEAP16=z=new Int16Array(c),f.HEAPU8=G=new Uint8Array(c),f.HEAPU16=N=new Uint16Array(c),f.HEAP32=ne=new Int32Array(c),f.HEAPU32=ce=new Uint32Array(c),f.HEAPF32=xe=new Float32Array(c),f.HEAPF64=We=new Float64Array(c),f.HEAP64=Ce=new BigInt64Array(c),f.HEAPU64=je=new BigUint64Array(c)}if(!T){if(!((ve=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof A))throw le("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");Ve()}var Ft=[],et=[],it=[],It=0,xn=null;function Zr(){if(--It==0&&xn){var c=xn;xn=null,c()}}function Dn(c){throw le(c="Aborted("+c+")"),De=!0,q=1,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),v(c),c}var Pi,Bi=c=>c.startsWith("data:application/octet-stream;base64,"),pr=c=>c.startsWith("file://");function Zn(c){if(c==Pi&&ae)return new Uint8Array(ae);if(R)return R(c);throw"both async and sync fetching of the wasm failed"}function Mi(c,w,$){return function(k){if(!ae&&(S||b)){if(typeof fetch=="function"&&!pr(k))return fetch(k,{credentials:"same-origin"}).then(I=>{if(!I.ok)throw`failed to load wasm binary file at '${k}'`;return I.arrayBuffer()}).catch(()=>Zn(k));if(O)return new Promise((I,M)=>{O(k,K=>I(new Uint8Array(K)),M)})}return Promise.resolve().then(()=>Zn(k))}(c).then(k=>WebAssembly.instantiate(k,w)).then($,k=>{le(`failed to asynchronously prepare wasm: ${k}`),Dn(k)})}function Oa(){return{a:{O:ro,Aa:no,b:oo,aa:Da,B:uo,qa:gr,Y:lo,_:co,ra:fo,oa:Un,ha:Na,na:La,L:po,Z:Ua,W:ja,pa:Fa,X:Wa,wa:ut,F:go,Q:cn,P:ni,E:ol,u:ul,q:qa,G:yo,A:Ka,R:_o,ua:$o,ka:xo,U:Fn,ba:ii,H:ai,ja:vr,ta:Wn,t:si,x:Xa,o:Ja,l:es,c:Ha,n:ko,j:Dt,w:Sr,p:ns,g:ui,s:cl,m:rs,e:is,k:li,i:Ji,h:Eo,d:fl,ea:pl,fa:hl,ga:ml,ca:To,da:Io,T:zo,f:gl,D:yl,I:ss,M:wl,y:vl,sa:Oo,V:_l,v:Ro,z:$l,N:xl,S:bl,za:os,ya:ci,la:ds,ma:cs,$:Ni,C:fs,K:tr,ia:Bo,J:Mo,a:ve,xa:Ba,va:Er,r:kl}}}var Di={868340:(c,w,$,k,I)=>{if(f===void 0||!f.Fb)return 1;if((c=at(c>>>0)).startsWith("./")&&(c=c.substring(2)),!(c=f.Fb.get(c)))return 2;if(k>>>=0,(w>>>=0)+($>>>=0)>c.byteLength)return 3;try{let M=c.subarray(w,w+$);switch(I){case 0:s().set(M,k>>>0);break;case 1:f.cc(k,M);break;default:return 4}return 0}catch{return 4}},869023:(c,w,$)=>{f.dc(c,s().subarray(w>>>0,w+$>>>0))},869086:()=>f.ac(),869127:c=>{f.Ob(c)},869163:()=>{f.Vb()},869194:()=>{f.Wb()},869223:()=>{f.$b()},869248:c=>f.Ub(c),869281:c=>f.Yb(c),869313:(c,w,$)=>{f.Nb(c,w,$,!0)},869352:(c,w,$)=>{f.Nb(c,w,$)},869385:()=>typeof wasmOffsetConverter<"u",869442:c=>{f.jb("Abs",c,void 0)},869493:c=>{f.jb("Neg",c,void 0)},869544:c=>{f.jb("Floor",c,void 0)},869597:c=>{f.jb("Ceil",c,void 0)},869649:c=>{f.jb("Reciprocal",c,void 0)},869707:c=>{f.jb("Sqrt",c,void 0)},869759:c=>{f.jb("Exp",c,void 0)},869810:c=>{f.jb("Erf",c,void 0)},869861:c=>{f.jb("Sigmoid",c,void 0)},869916:(c,w,$)=>{f.jb("HardSigmoid",c,{alpha:w,beta:$})},869995:c=>{f.jb("Log",c,void 0)},870046:c=>{f.jb("Sin",c,void 0)},870097:c=>{f.jb("Cos",c,void 0)},870148:c=>{f.jb("Tan",c,void 0)},870199:c=>{f.jb("Asin",c,void 0)},870251:c=>{f.jb("Acos",c,void 0)},870303:c=>{f.jb("Atan",c,void 0)},870355:c=>{f.jb("Sinh",c,void 0)},870407:c=>{f.jb("Cosh",c,void 0)},870459:c=>{f.jb("Asinh",c,void 0)},870512:c=>{f.jb("Acosh",c,void 0)},870565:c=>{f.jb("Atanh",c,void 0)},870618:c=>{f.jb("Tanh",c,void 0)},870670:c=>{f.jb("Not",c,void 0)},870721:(c,w,$)=>{f.jb("Clip",c,{min:w,max:$})},870790:c=>{f.jb("Clip",c,void 0)},870842:(c,w)=>{f.jb("Elu",c,{alpha:w})},870900:c=>{f.jb("Gelu",c,void 0)},870952:c=>{f.jb("Relu",c,void 0)},871004:(c,w)=>{f.jb("LeakyRelu",c,{alpha:w})},871068:(c,w)=>{f.jb("ThresholdedRelu",c,{alpha:w})},871138:(c,w)=>{f.jb("Cast",c,{to:w})},871196:c=>{f.jb("Add",c,void 0)},871247:c=>{f.jb("Sub",c,void 0)},871298:c=>{f.jb("Mul",c,void 0)},871349:c=>{f.jb("Div",c,void 0)},871400:c=>{f.jb("Pow",c,void 0)},871451:c=>{f.jb("Equal",c,void 0)},871504:c=>{f.jb("Greater",c,void 0)},871559:c=>{f.jb("GreaterOrEqual",c,void 0)},871621:c=>{f.jb("Less",c,void 0)},871673:c=>{f.jb("LessOrEqual",c,void 0)},871732:(c,w,$,k,I)=>{f.jb("ReduceMean",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},871891:(c,w,$,k,I)=>{f.jb("ReduceMax",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872049:(c,w,$,k,I)=>{f.jb("ReduceMin",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872207:(c,w,$,k,I)=>{f.jb("ReduceProd",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872366:(c,w,$,k,I)=>{f.jb("ReduceSum",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872524:(c,w,$,k,I)=>{f.jb("ReduceL1",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872681:(c,w,$,k,I)=>{f.jb("ReduceL2",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872838:(c,w,$,k,I)=>{f.jb("ReduceLogSum",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},872999:(c,w,$,k,I)=>{f.jb("ReduceSumSquare",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},873163:(c,w,$,k,I)=>{f.jb("ReduceLogSumExp",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},873327:c=>{f.jb("Where",c,void 0)},873380:(c,w,$)=>{f.jb("Transpose",c,{perm:w?Array.from(u().subarray(w>>>0,$>>>0)):[]})},873488:(c,w,$,k)=>{f.jb("DepthToSpace",c,{blocksize:w,mode:at($),format:k?"NHWC":"NCHW"})},873621:(c,w,$,k)=>{f.jb("DepthToSpace",c,{blocksize:w,mode:at($),format:k?"NHWC":"NCHW"})},873754:(c,w,$,k,I,M,K,X,ue,de,Ee,Ue,Le,H,Ne)=>{f.jb("ConvTranspose",c,{format:ue?"NHWC":"NCHW",autoPad:w,dilations:[$],group:k,kernelShape:[I],pads:[M,K],strides:[X],wIsConst:()=>!!i()[de>>>0],outputPadding:Ee?Array.from(u().subarray(Ee>>>0,Ue>>>0)):[],outputShape:Le?Array.from(u().subarray(Le>>>0,H>>>0)):[],activation:at(Ne)})},874155:(c,w,$,k,I,M,K,X,ue,de,Ee,Ue,Le,H)=>{f.jb("ConvTranspose",c,{format:X?"NHWC":"NCHW",autoPad:w,dilations:Array.from(u().subarray($>>>0,2+($>>>0)>>>0)),group:k,kernelShape:Array.from(u().subarray(I>>>0,2+(I>>>0)>>>0)),pads:Array.from(u().subarray(M>>>0,4+(M>>>0)>>>0)),strides:Array.from(u().subarray(K>>>0,2+(K>>>0)>>>0)),wIsConst:()=>!!i()[ue>>>0],outputPadding:de?Array.from(u().subarray(de>>>0,Ee>>>0)):[],outputShape:Ue?Array.from(u().subarray(Ue>>>0,Le>>>0)):[],activation:at(H)})},874720:(c,w,$,k,I,M,K,X,ue,de,Ee,Ue,Le,H,Ne)=>{f.jb("ConvTranspose",c,{format:ue?"NHWC":"NCHW",autoPad:w,dilations:[$],group:k,kernelShape:[I],pads:[M,K],strides:[X],wIsConst:()=>!!i()[de>>>0],outputPadding:Ee?Array.from(u().subarray(Ee>>>0,Ue>>>0)):[],outputShape:Le?Array.from(u().subarray(Le>>>0,H>>>0)):[],activation:at(Ne)})},875121:(c,w,$,k,I,M,K,X,ue,de,Ee,Ue,Le,H)=>{f.jb("ConvTranspose",c,{format:X?"NHWC":"NCHW",autoPad:w,dilations:Array.from(u().subarray($>>>0,2+($>>>0)>>>0)),group:k,kernelShape:Array.from(u().subarray(I>>>0,2+(I>>>0)>>>0)),pads:Array.from(u().subarray(M>>>0,4+(M>>>0)>>>0)),strides:Array.from(u().subarray(K>>>0,2+(K>>>0)>>>0)),wIsConst:()=>!!i()[ue>>>0],outputPadding:de?Array.from(u().subarray(de>>>0,Ee>>>0)):[],outputShape:Ue?Array.from(u().subarray(Ue>>>0,Le>>>0)):[],activation:at(H)})},875686:(c,w)=>{f.jb("GlobalAveragePool",c,{format:w?"NHWC":"NCHW"})},875777:(c,w,$,k,I,M,K,X,ue,de,Ee,Ue,Le,H)=>{f.jb("AveragePool",c,{format:H?"NHWC":"NCHW",auto_pad:w,ceil_mode:$,count_include_pad:k,storage_order:I,dilations:M?Array.from(u().subarray(M>>>0,K>>>0)):[],kernel_shape:X?Array.from(u().subarray(X>>>0,ue>>>0)):[],pads:de?Array.from(u().subarray(de>>>0,Ee>>>0)):[],strides:Ue?Array.from(u().subarray(Ue>>>0,Le>>>0)):[]})},876192:(c,w)=>{f.jb("GlobalAveragePool",c,{format:w?"NHWC":"NCHW"})},876283:(c,w,$,k,I,M,K,X,ue,de,Ee,Ue,Le,H)=>{f.jb("AveragePool",c,{format:H?"NHWC":"NCHW",auto_pad:w,ceil_mode:$,count_include_pad:k,storage_order:I,dilations:M?Array.from(u().subarray(M>>>0,K>>>0)):[],kernel_shape:X?Array.from(u().subarray(X>>>0,ue>>>0)):[],pads:de?Array.from(u().subarray(de>>>0,Ee>>>0)):[],strides:Ue?Array.from(u().subarray(Ue>>>0,Le>>>0)):[]})},876698:(c,w)=>{f.jb("GlobalMaxPool",c,{format:w?"NHWC":"NCHW"})},876785:(c,w,$,k,I,M,K,X,ue,de,Ee,Ue,Le,H)=>{f.jb("MaxPool",c,{format:H?"NHWC":"NCHW",auto_pad:w,ceil_mode:$,count_include_pad:k,storage_order:I,dilations:M?Array.from(u().subarray(M>>>0,K>>>0)):[],kernel_shape:X?Array.from(u().subarray(X>>>0,ue>>>0)):[],pads:de?Array.from(u().subarray(de>>>0,Ee>>>0)):[],strides:Ue?Array.from(u().subarray(Ue>>>0,Le>>>0)):[]})},877196:(c,w)=>{f.jb("GlobalMaxPool",c,{format:w?"NHWC":"NCHW"})},877283:(c,w,$,k,I,M,K,X,ue,de,Ee,Ue,Le,H)=>{f.jb("MaxPool",c,{format:H?"NHWC":"NCHW",auto_pad:w,ceil_mode:$,count_include_pad:k,storage_order:I,dilations:M?Array.from(u().subarray(M>>>0,K>>>0)):[],kernel_shape:X?Array.from(u().subarray(X>>>0,ue>>>0)):[],pads:de?Array.from(u().subarray(de>>>0,Ee>>>0)):[],strides:Ue?Array.from(u().subarray(Ue>>>0,Le>>>0)):[]})},877694:(c,w,$,k,I)=>{f.jb("Gemm",c,{alpha:w,beta:$,transA:k,transB:I})},877798:c=>{f.jb("MatMul",c,void 0)},877852:(c,w,$,k)=>{f.jb("ArgMax",c,{keepDims:!!w,selectLastIndex:!!$,axis:k})},877960:(c,w,$,k)=>{f.jb("ArgMin",c,{keepDims:!!w,selectLastIndex:!!$,axis:k})},878068:(c,w)=>{f.jb("Softmax",c,{axis:w})},878131:(c,w)=>{f.jb("Concat",c,{axis:w})},878191:(c,w,$,k,I)=>{f.jb("Split",c,{axis:w,numOutputs:$,splitSizes:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},878331:c=>{f.jb("Expand",c,void 0)},878385:(c,w)=>{f.jb("Gather",c,{axis:Number(w)})},878456:(c,w)=>{f.jb("GatherElements",c,{axis:Number(w)})},878535:(c,w,$,k,I,M,K,X,ue,de,Ee)=>{f.jb("Resize",c,{antialias:w,axes:$?Array.from(u().subarray($>>>0,k>>>0)):[],coordinateTransformMode:at(I),cubicCoeffA:M,excludeOutside:K,extrapolationValue:X,keepAspectRatioPolicy:at(ue),mode:at(de),nearestMode:at(Ee)})},878881:(c,w,$,k,I,M,K)=>{f.jb("Slice",c,{starts:w?Array.from(u().subarray(w>>>0,$>>>0)):[],ends:k?Array.from(u().subarray(k>>>0,I>>>0)):[],axes:M?Array.from(u().subarray(M>>>0,K>>>0)):[]})},879097:c=>{f.jb("Tile",c,void 0)},879149:(c,w,$)=>{f.jb("InstanceNormalization",c,{epsilon:w,format:$?"NHWC":"NCHW"})},879263:(c,w,$)=>{f.jb("InstanceNormalization",c,{epsilon:w,format:$?"NHWC":"NCHW"})},879377:c=>{f.jb("Range",c,void 0)},879430:(c,w)=>{f.jb("Einsum",c,{equation:at(w)})},879511:(c,w,$,k,I)=>{f.jb("Pad",c,{mode:w,value:$,pads:k?Array.from(u().subarray(k>>>0,I>>>0)):[]})},879638:(c,w,$,k,I,M)=>{f.jb("BatchNormalization",c,{epsilon:w,momentum:$,spatial:!!I,trainingMode:!!k,format:M?"NHWC":"NCHW"})},879807:(c,w,$,k,I,M)=>{f.jb("BatchNormalization",c,{epsilon:w,momentum:$,spatial:!!I,trainingMode:!!k,format:M?"NHWC":"NCHW"})},879976:(c,w,$)=>{f.jb("CumSum",c,{exclusive:Number(w),reverse:Number($)})},880073:(c,w,$)=>{f.jb("DequantizeLinear",c,{axis:w,blockSize:$})},880163:(c,w,$,k,I,M,K,X,ue)=>{f.jb("Attention",c,{numHeads:w,isUnidirectional:$,maskFilterValue:k,scale:I,doRotary:M,qkvHiddenSizes:K?Array.from(u().subarray(Number(X)>>>0,Number(X)+K>>>0)):[],pastPresentShareBuffer:!!ue})},880435:c=>{f.jb("BiasAdd",c,void 0)},880490:c=>{f.jb("BiasSplitGelu",c,void 0)},880551:c=>{f.jb("FastGelu",c,void 0)},880607:(c,w,$,k,I,M,K,X,ue,de,Ee,Ue,Le,H,Ne,tt)=>{f.jb("Conv",c,{format:Ue?"NHWC":"NCHW",auto_pad:w,dilations:$?Array.from(u().subarray($>>>0,k>>>0)):[],group:I,kernel_shape:M?Array.from(u().subarray(M>>>0,K>>>0)):[],pads:X?Array.from(u().subarray(X>>>0,ue>>>0)):[],strides:de?Array.from(u().subarray(de>>>0,Ee>>>0)):[],w_is_const:()=>!!i()[Le>>>0],activation:at(H),activation_params:Ne?Array.from(m().subarray(Ne>>>0,tt>>>0)):[]})},881103:c=>{f.jb("Gelu",c,void 0)},881155:(c,w,$,k)=>{f.jb("GroupQueryAttention",c,{numHeads:w,kvNumHeads:$,scale:k})},881268:(c,w,$,k)=>{f.jb("LayerNormalization",c,{axis:w,epsilon:$,simplified:!!k})},881379:(c,w,$,k)=>{f.jb("LayerNormalization",c,{axis:w,epsilon:$,simplified:!!k})},881490:(c,w,$,k,I,M)=>{f.jb("MatMulNBits",c,{k:w,n:$,accuracyLevel:k,bits:I,blockSize:M})},881617:(c,w,$,k,I,M)=>{f.jb("MultiHeadAttention",c,{numHeads:w,isUnidirectional:$,maskFilterValue:k,scale:I,doRotary:M})},881776:(c,w)=>{f.jb("QuickGelu",c,{alpha:w})},881840:(c,w,$,k,I)=>{f.jb("RotaryEmbedding",c,{interleaved:!!w,numHeads:$,rotaryEmbeddingDim:k,scale:I})},881979:(c,w,$)=>{f.jb("SkipLayerNormalization",c,{epsilon:w,simplified:!!$})},882081:(c,w,$)=>{f.jb("SkipLayerNormalization",c,{epsilon:w,simplified:!!$})},882183:(c,w,$,k)=>{f.jb("GatherBlockQuantized",c,{gatherAxis:w,quantizeAxis:$,blockSize:k})},882304:c=>{f.Zb(c)},882338:(c,w)=>f.bc(c,w,f.Eb.fc,f.Eb.errors)};function no(c,w,$){return bo(async()=>{await f.Xb(c,w,$)})}function ro(){return typeof wasmOffsetConverter<"u"}function Xr(c){this.name="ExitStatus",this.message=`Program terminated with exit(${c})`,this.status=c}var hr=c=>{c.terminate(),c.onmessage=()=>{}},Pa=c=>{Nn.length==0&&(Jn(),Xn(Nn[0]));var w=Nn.pop();if(!w)return 6;bn.push(w),Wt[c.Ab]=w,w.Ab=c.Ab;var $={cmd:"run",start_routine:c.hc,arg:c.Qb,pthread_ptr:c.Ab};return w.postMessage($,c.mc),0},en=0,Qe=(c,w,...$)=>{for(var k=2*$.length,I=gi(),M=sa(8*k),K=M>>>3,X=0;X<$.length;X++){var ue=$[X];typeof ue=="bigint"?(Ce[K+2*X]=1n,Ce[K+2*X+1]=ue):(Ce[K+2*X]=0n,g()[K+2*X+1>>>0]=ue)}return c=Lo(c,0,k,M,w),mi(I),c};function Ba(c){if(T)return Qe(0,1,c);if(q=c,!(0<en)){for(var w of bn)hr(w);for(w of Nn)hr(w);Nn=[],bn=[],Wt=[],De=!0}U(c,new Xr(c))}function Ma(c){if(T)return Qe(1,0,c);Ni(c)}var Ni=c=>{if(q=c,T)throw Ma(c),"unwind";Ba(c)},Nn=[],bn=[],Li=[],Wt={},Ui=c=>{var w=c.Ab;delete Wt[w],Nn.push(c),bn.splice(bn.indexOf(c),1),c.Ab=0,Nt(w)};function ji(){Li.forEach(c=>c())}var Xn=c=>new Promise(w=>{c.onmessage=I=>{var M=(I=I.data).cmd;if(I.targetThread&&I.targetThread!=nr()){var K=Wt[I.targetThread];K?K.postMessage(I,I.transferList):le(`Internal error! Worker sent a message "${M}" to target pthread ${I.targetThread}, but that thread no longer exists!`)}else M==="checkMailbox"?nn():M==="spawnThread"?Pa(I):M==="cleanupThread"?Ui(Wt[I.thread]):M==="killThread"?(I=I.thread,M=Wt[I],delete Wt[I],hr(M),Nt(I),bn.splice(bn.indexOf(M),1),M.Ab=0):M==="cancelThread"?Wt[I.thread].postMessage({cmd:"cancel"}):M==="loaded"?(c.loaded=!0,w(c)):M==="alert"?alert(`Thread ${I.threadId}: ${I.text}`):I.target==="setimmediate"?c.postMessage(I):M==="callHandler"?f[I.handler](...I.args):M&&le(`worker sent an unknown command ${M}`)},c.onerror=I=>{throw le(`worker sent an error! ${I.filename}:${I.lineno}: ${I.message}`),I};var $,k=[];for($ of[])f.hasOwnProperty($)&&k.push($);c.postMessage({cmd:"load",handlers:k,wasmMemory:ve,wasmModule:Se})});function Jn(){var c=new Worker(new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});Nn.push(c)}var Jr=c=>{for(;0<c.length;)c.shift()(f)},io=()=>{var c=nr(),w=h()[c+52>>>2>>>0];c=h()[c+56>>>2>>>0],ws(w,w-c),mi(w)},ao=(c,w)=>{en=0,c=Uo(c,w),0<en?q=c:Vn(c)};class so{constructor(w){this.Jb=w-24}}function oo(c,w,$){var k=new so(c>>>=0);throw w>>>=0,$>>>=0,h()[k.Jb+16>>>2>>>0]=0,h()[k.Jb+4>>>2>>>0]=w,h()[k.Jb+8>>>2>>>0]=$,c}function Fi(c,w,$,k){return T?Qe(2,1,c,w,$,k):Da(c,w,$,k)}function Da(c,w,$,k){if(c>>>=0,w>>>=0,$>>>=0,k>>>=0,A===void 0)return le("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var I=[];return T&&I.length===0?Fi(c,w,$,k):(c={hc:$,Ab:c,Qb:k,mc:I},T?(c.Mb="spawnThread",postMessage(c,I),0):Pa(c))}var mr=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Wi=(c,w,$)=>{var k=(w>>>=0)+$;for($=w;c[$]&&!($>=k);)++$;if(16<$-w&&c.buffer&&mr)return mr.decode(c.buffer instanceof A?c.slice(w,$):c.subarray(w,$));for(k="";w<$;){var I=c[w++];if(128&I){var M=63&c[w++];if((224&I)==192)k+=String.fromCharCode((31&I)<<6|M);else{var K=63&c[w++];65536>(I=(240&I)==224?(15&I)<<12|M<<6|K:(7&I)<<18|M<<12|K<<6|63&c[w++])?k+=String.fromCharCode(I):(I-=65536,k+=String.fromCharCode(55296|I>>10,56320|1023&I))}}else k+=String.fromCharCode(I)}return k},at=(c,w)=>(c>>>=0)?Wi(s(),c,w):"";function uo(c,w,$){return T?Qe(3,1,c,w,$):0}function gr(c,w){if(T)return Qe(4,1,c,w)}var yr=c=>{for(var w=0,$=0;$<c.length;++$){var k=c.charCodeAt($);127>=k?w++:2047>=k?w+=2:55296<=k&&57343>=k?(w+=4,++$):w+=3}return w},ei=(c,w,$,k)=>{if(!(0<k))return 0;var I=$>>>=0;k=$+k-1;for(var M=0;M<c.length;++M){var K=c.charCodeAt(M);if(55296<=K&&57343>=K&&(K=65536+((1023&K)<<10)|1023&c.charCodeAt(++M)),127>=K){if($>=k)break;w[$++>>>0]=K}else{if(2047>=K){if($+1>=k)break;w[$++>>>0]=192|K>>6}else{if(65535>=K){if($+2>=k)break;w[$++>>>0]=224|K>>12}else{if($+3>=k)break;w[$++>>>0]=240|K>>18,w[$++>>>0]=128|K>>12&63}w[$++>>>0]=128|K>>6&63}w[$++>>>0]=128|63&K}}return w[$>>>0]=0,$-I},Ln=(c,w,$)=>ei(c,s(),w,$);function lo(c,w){if(T)return Qe(5,1,c,w)}function co(c,w,$){if(T)return Qe(6,1,c,w,$)}function fo(c,w,$){return T?Qe(7,1,c,w,$):0}function Un(c,w){if(T)return Qe(8,1,c,w)}function Na(c,w,$){if(T)return Qe(9,1,c,w,$)}function La(c,w,$,k){if(T)return Qe(10,1,c,w,$,k)}function po(c,w,$,k){if(T)return Qe(11,1,c,w,$,k)}function Ua(c,w,$,k){if(T)return Qe(12,1,c,w,$,k)}function ja(c){if(T)return Qe(13,1,c)}function Fa(c,w){if(T)return Qe(14,1,c,w)}function Wa(c,w,$){if(T)return Qe(15,1,c,w,$)}var ho,jn,ut=()=>{Dn("")},dn=c=>{for(var w="";s()[c>>>0];)w+=ho[s()[c++>>>0]];return w},ti={},Vi={};function Vt(c,w,$={}){if(!("argPackAdvance"in w))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(k,I,M={}){var K=I.name;if(!k)throw new jn(`type "${K}" must have a positive integer typeid pointer`);if(Vi.hasOwnProperty(k)){if(M.Sb)return;throw new jn(`Cannot register type '${K}' twice`)}Vi[k]=I,ti.hasOwnProperty(k)&&(I=ti[k],delete ti[k],I.forEach(X=>X()))}(c,w,$)}var mo=(c,w,$)=>{switch(w){case 1:return $?k=>i()[k>>>0]:k=>s()[k>>>0];case 2:return $?k=>o()[k>>>1>>>0]:k=>d()[k>>>1>>>0];case 4:return $?k=>u()[k>>>2>>>0]:k=>h()[k>>>2>>>0];case 8:return $?k=>Ce[k>>>3]:k=>je[k>>>3];default:throw new TypeError(`invalid integer width (${w}): ${c}`)}};function go(c,w,$){$>>>=0,Vt(c>>>=0,{name:w=dn(w>>>0),fromWireType:k=>k,toWireType:function(k,I){if(typeof I!="bigint"&&typeof I!="number")throw I=I===null?"null":(k=typeof I)=="object"||k==="array"||k==="function"?I.toString():""+I,new TypeError(`Cannot convert "${I}" to ${this.name}`);return typeof I=="number"&&(I=BigInt(I)),I},argPackAdvance:tn,readValueFromPointer:mo(w,$,w.indexOf("u")==-1),Db:null})}var tn=8;function cn(c,w,$,k){Vt(c>>>=0,{name:w=dn(w>>>0),fromWireType:function(I){return!!I},toWireType:function(I,M){return M?$:k},argPackAdvance:tn,readValueFromPointer:function(I){return this.fromWireType(s()[I>>>0])},Db:null})}var Va=[],ht=[];function Ha(c){9<(c>>>=0)&&--ht[c+1]==0&&(ht[c]=void 0,Va.push(c))}var Ht=c=>{if(!c)throw new jn("Cannot use deleted val. handle = "+c);return ht[c]},qt=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let w=Va.pop()||ht.length;return ht[w]=c,ht[w+1]=1,w}};function wr(c){return this.fromWireType(h()[c>>>2>>>0])}var Hi={name:"emscripten::val",fromWireType:c=>{var w=Ht(c);return Ha(c),w},toWireType:(c,w)=>qt(w),argPackAdvance:tn,readValueFromPointer:wr,Db:null};function ni(c){return Vt(c>>>0,Hi)}var qi=(c,w)=>{switch(w){case 4:return function($){return this.fromWireType(m()[$>>>2>>>0])};case 8:return function($){return this.fromWireType(g()[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${w}): ${c}`)}};function ol(c,w,$){$>>>=0,Vt(c>>>=0,{name:w=dn(w>>>0),fromWireType:k=>k,toWireType:(k,I)=>I,argPackAdvance:tn,readValueFromPointer:qi(w,$),Db:null})}function ul(c,w,$,k,I){if(c>>>=0,$>>>=0,w=dn(w>>>0),I===-1&&(I=4294967295),I=X=>X,k===0){var M=32-8*$;I=X=>X<<M>>>M}var K=w.includes("unsigned")?function(X,ue){return ue>>>0}:function(X,ue){return ue};Vt(c,{name:w,fromWireType:I,toWireType:K,argPackAdvance:tn,readValueFromPointer:mo(w,$,k!==0),Db:null})}function qa(c,w,$){function k(M){var K=h()[M>>>2>>>0];return M=h()[M+4>>>2>>>0],new I(i().buffer,M,K)}var I=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][w];Vt(c>>>=0,{name:$=dn($>>>0),fromWireType:k,argPackAdvance:tn,readValueFromPointer:k},{Sb:!0})}function yo(c,w){c>>>=0;var $=(w=dn(w>>>0))==="std::string";Vt(c,{name:w,fromWireType:function(k){var I=h()[k>>>2>>>0],M=k+4;if($)for(var K=M,X=0;X<=I;++X){var ue=M+X;if(X==I||s()[ue>>>0]==0){if(K=at(K,ue-K),de===void 0)var de=K;else de+="\0",de+=K;K=ue+1}}else{for(de=Array(I),X=0;X<I;++X)de[X]=String.fromCharCode(s()[M+X>>>0]);de=de.join("")}return pn(k),de},toWireType:function(k,I){I instanceof ArrayBuffer&&(I=new Uint8Array(I));var M=typeof I=="string";if(!(M||I instanceof Uint8Array||I instanceof Uint8ClampedArray||I instanceof Int8Array))throw new jn("Cannot pass non-string to std::string");var K=$&&M?yr(I):I.length,X=aa(4+K+1),ue=X+4;if(h()[X>>>2>>>0]=K,$&&M)Ln(I,ue,K+1);else if(M)for(M=0;M<K;++M){var de=I.charCodeAt(M);if(255<de)throw pn(ue),new jn("String has UTF-16 code units that do not fit in 8 bits");s()[ue+M>>>0]=de}else for(M=0;M<K;++M)s()[ue+M>>>0]=I[M];return k!==null&&k.push(pn,X),X},argPackAdvance:tn,readValueFromPointer:wr,Db(k){pn(k)}})}var Gi=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ri=(c,w)=>{for(var $=c>>1,k=$+w/2;!($>=k)&&d()[$>>>0];)++$;if(32<($<<=1)-c&&Gi)return Gi.decode(s().slice(c,$));for($="",k=0;!(k>=w/2);++k){var I=o()[c+2*k>>>1>>>0];if(I==0)break;$+=String.fromCharCode(I)}return $},ll=(c,w,$)=>{if($??($=2147483647),2>$)return 0;var k=w;$=($-=2)<2*c.length?$/2:c.length;for(var I=0;I<$;++I){var M=c.charCodeAt(I);o()[w>>>1>>>0]=M,w+=2}return o()[w>>>1>>>0]=0,w-k},Ga=c=>2*c.length,Ke=(c,w)=>{for(var $=0,k="";!($>=w/4);){var I=u()[c+4*$>>>2>>>0];if(I==0)break;++$,65536<=I?(I-=65536,k+=String.fromCharCode(55296|I>>10,56320|1023&I)):k+=String.fromCharCode(I)}return k},wo=(c,w,$)=>{if(w>>>=0,$??($=2147483647),4>$)return 0;var k=w;$=k+$-4;for(var I=0;I<c.length;++I){var M=c.charCodeAt(I);if(55296<=M&&57343>=M&&(M=65536+((1023&M)<<10)|1023&c.charCodeAt(++I)),u()[w>>>2>>>0]=M,(w+=4)+4>$)break}return u()[w>>>2>>>0]=0,w-k},vo=c=>{for(var w=0,$=0;$<c.length;++$){var k=c.charCodeAt($);55296<=k&&57343>=k&&++$,w+=4}return w};function Ka(c,w,$){if(c>>>=0,w>>>=0,$=dn($>>>=0),w===2)var k=ri,I=ll,M=Ga,K=X=>d()[X>>>1>>>0];else w===4&&(k=Ke,I=wo,M=vo,K=X=>h()[X>>>2>>>0]);Vt(c,{name:$,fromWireType:X=>{for(var ue,de=h()[X>>>2>>>0],Ee=X+4,Ue=0;Ue<=de;++Ue){var Le=X+4+Ue*w;Ue!=de&&K(Le)!=0||(Ee=k(Ee,Le-Ee),ue===void 0?ue=Ee:(ue+="\0",ue+=Ee),Ee=Le+w)}return pn(X),ue},toWireType:(X,ue)=>{if(typeof ue!="string")throw new jn(`Cannot pass non-string to C++ string type ${$}`);var de=M(ue),Ee=aa(4+de+w);return h()[Ee>>>2>>>0]=de/w,I(ue,Ee+4,de+w),X!==null&&X.push(pn,Ee),Ee},argPackAdvance:tn,readValueFromPointer:wr,Db(X){pn(X)}})}function _o(c,w){Vt(c>>>=0,{Tb:!0,name:w=dn(w>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var $o=()=>1;function xo(c){gs(c>>>0,!b,1,!S,131072,!1),ji()}var Ki=c=>{if(!De)try{if(c(),!(0<en))try{T?Vn(q):Ni(q)}catch(w){w instanceof Xr||w=="unwind"||U(1,w)}}catch(w){w instanceof Xr||w=="unwind"||U(1,w)}};function vr(c){c>>>=0,typeof Atomics.nc=="function"&&(Atomics.nc(u(),c>>>2,c).value.then(nn),c+=128,Atomics.store(u(),c>>>2,1))}var nn=()=>{var c=nr();c&&(vr(c),Ki(ys))};function Fn(c,w){(c>>>=0)==w>>>0?setTimeout(nn):T?postMessage({targetThread:c,cmd:"checkMailbox"}):(c=Wt[c])&&c.postMessage({cmd:"checkMailbox"})}var fn=[];function ii(c,w,$,k,I){for(w>>>=0,k/=2,fn.length=k,$=I>>>0>>>3,I=0;I<k;I++)fn[I]=Ce[$+2*I]?Ce[$+2*I+1]:g()[$+2*I+1>>>0];return(w?Di[w]:Do[c])(...fn)}function ai(c){c>>>=0,T?postMessage({cmd:"cleanupThread",thread:c}):Ui(Wt[c])}function Wn(c){}var Qa=(c,w)=>{var $=Vi[c];if($===void 0)throw c=ia(c),$=dn(c),pn(c),new jn(`${w} has unknown type ${$}`);return $},Ya=(c,w,$)=>{var k=[];return c=c.toWireType(k,$),k.length&&(h()[w>>>2>>>0]=qt(k)),c};function si(c,w,$){return w>>>=0,$>>>=0,c=Ht(c>>>0),w=Qa(w,"emval::as"),Ya(w,$,c)}var Qi=c=>{try{c()}catch(w){Dn(w)}},Sn=0,Mt=null,Za=0,Yi=[],_r={},$r={},xr=0,br=null,dl=[];function bo(c){return function(w){if(!De){if(Sn===0){var $=!1,k=!1;w((I=0)=>{if(!De&&(Za=I,$=!0,k)){Sn=2,Qi(()=>oa(Mt)),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.resume(),I=!1;try{var M=function(){var ue=u()[Mt+8>>>2>>>0];return ue=_e[$r[ue]],--en,ue()}()}catch(ue){M=ue,I=!0}var K=!1;if(!Mt){var X=br;X&&(br=null,(I?X.reject:X.resolve)(M),K=!0)}if(I&&!K)throw M}}),k=!0,$||(Sn=1,Mt=function(){var I=aa(65548),M=I+12;h()[I>>>2>>>0]=M,h()[I+4>>>2>>>0]=M+65536,M=Yi[0];var K=_r[M];return K===void 0&&(K=xr++,_r[M]=K,$r[K]=M),M=K,u()[I+8>>>2>>>0]=M,I}(),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.pause(),Qi(()=>jo(Mt)))}else Sn===2?(Sn=0,Qi(Cr),pn(Mt),Mt=null,dl.forEach(Ki)):Dn(`invalid state: ${Sn}`);return Za}}(w=>{c().then(w)})}function Xa(c){return c>>>=0,bo(()=>(c=Ht(c)).then(qt))}var er=[];function Ja(c,w,$,k){return $>>>=0,k>>>=0,(c=er[c>>>0])(null,w=Ht(w>>>0),$,k)}var So={},rn=c=>{var w=So[c];return w===void 0?dn(c):w};function es(c,w,$,k,I){return $>>>=0,k>>>=0,I>>>=0,(c=er[c>>>0])(w=Ht(w>>>0),w[$=rn($)],k,I)}var oi=()=>typeof globalThis=="object"?globalThis:Function("return this")();function ko(c){return(c>>>=0)==0?qt(oi()):(c=rn(c),qt(oi()[c]))}var Zi=c=>{var w=er.length;return er.push(c),w},Xi=(c,w)=>{for(var $=Array(c),k=0;k<c;++k)$[k]=Qa(h()[w+4*k>>>2>>>0],"parameter "+k);return $},ts=(c,w)=>Object.defineProperty(w,"name",{value:c});function Dt(c,w,$){var k=(w=Xi(c,w>>>0)).shift();c--;var I=`return function (obj, func, destructorsRef, args) {
`,M=0,K=[];$===0&&K.push("obj");for(var X=["retType"],ue=[k],de=0;de<c;++de)K.push("arg"+de),X.push("argType"+de),ue.push(w[de]),I+=`  var arg${de} = argType${de}.readValueFromPointer(args${M?"+"+M:""});
`,M+=w[de].argPackAdvance;return I+=`  var rv = ${$===1?"new func":"func.call"}(${K.join(", ")});
`,k.Tb||(X.push("emval_returnValue"),ue.push(Ya),I+=`  return emval_returnValue(retType, destructorsRef, rv);
`),X.push(I+`};
`),c=function(Ee){var Ue=Function;if(!(Ue instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof Ue} which is not a function`);var Le=ts(Ue.name||"unknownFunctionName",function(){});return Le.prototype=Ue.prototype,Le=new Le,(Ee=Ue.apply(Le,Ee))instanceof Object?Ee:Le}(X)(...ue),$=`methodCaller<(${w.map(Ee=>Ee.name).join(", ")}) => ${k.name}>`,Zi(ts($,c))}function Sr(c){return c=rn(c>>>0),qt(f[c])}function ns(c,w){return w>>>=0,c=Ht(c>>>0),w=Ht(w),qt(c[w])}function ui(c){9<(c>>>=0)&&(ht[c+1]+=1)}function cl(){return qt([])}function rs(c){c=Ht(c>>>0);for(var w=Array(c.length),$=0;$<c.length;$++)w[$]=c[$];return qt(w)}function is(c){return qt(rn(c>>>0))}function li(){return qt({})}function Ji(c){for(var w=Ht(c>>>=0);w.length;){var $=w.pop();w.pop()($)}Ha(c)}function Eo(c,w,$){w>>>=0,$>>>=0,c=Ht(c>>>0),w=Ht(w),$=Ht($),c[w]=$}function fl(c,w){return w>>>=0,c=(c=Qa(c>>>0,"_emval_take_value")).readValueFromPointer(w),qt(c)}function pl(c,w){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),w>>>=0,c=new Date(1e3*c),u()[w>>>2>>>0]=c.getUTCSeconds(),u()[w+4>>>2>>>0]=c.getUTCMinutes(),u()[w+8>>>2>>>0]=c.getUTCHours(),u()[w+12>>>2>>>0]=c.getUTCDate(),u()[w+16>>>2>>>0]=c.getUTCMonth(),u()[w+20>>>2>>>0]=c.getUTCFullYear()-1900,u()[w+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,u()[w+28>>>2>>>0]=c}var kr=c=>c%4==0&&(c%100!=0||c%400==0),ea=[0,31,60,91,121,152,182,213,244,274,305,335],Co=[0,31,59,90,120,151,181,212,243,273,304,334];function hl(c,w){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),w>>>=0,c=new Date(1e3*c),u()[w>>>2>>>0]=c.getSeconds(),u()[w+4>>>2>>>0]=c.getMinutes(),u()[w+8>>>2>>>0]=c.getHours(),u()[w+12>>>2>>>0]=c.getDate(),u()[w+16>>>2>>>0]=c.getMonth(),u()[w+20>>>2>>>0]=c.getFullYear()-1900,u()[w+24>>>2>>>0]=c.getDay();var $=(kr(c.getFullYear())?ea:Co)[c.getMonth()]+c.getDate()-1|0;u()[w+28>>>2>>>0]=$,u()[w+36>>>2>>>0]=-60*c.getTimezoneOffset(),$=new Date(c.getFullYear(),6,1).getTimezoneOffset();var k=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|($!=k&&c.getTimezoneOffset()==Math.min(k,$)),u()[w+32>>>2>>>0]=c}function ml(c){c>>>=0;var w=new Date(u()[c+20>>>2>>>0]+1900,u()[c+16>>>2>>>0],u()[c+12>>>2>>>0],u()[c+8>>>2>>>0],u()[c+4>>>2>>>0],u()[c>>>2>>>0],0),$=u()[c+32>>>2>>>0],k=w.getTimezoneOffset(),I=new Date(w.getFullYear(),6,1).getTimezoneOffset(),M=new Date(w.getFullYear(),0,1).getTimezoneOffset(),K=Math.min(M,I);return 0>$?u()[c+32>>>2>>>0]=+(I!=M&&K==k):0<$!=(K==k)&&(I=Math.max(M,I),w.setTime(w.getTime()+6e4*((0<$?K:I)-k))),u()[c+24>>>2>>>0]=w.getDay(),$=(kr(w.getFullYear())?ea:Co)[w.getMonth()]+w.getDate()-1|0,u()[c+28>>>2>>>0]=$,u()[c>>>2>>>0]=w.getSeconds(),u()[c+4>>>2>>>0]=w.getMinutes(),u()[c+8>>>2>>>0]=w.getHours(),u()[c+12>>>2>>>0]=w.getDate(),u()[c+16>>>2>>>0]=w.getMonth(),u()[c+20>>>2>>>0]=w.getYear(),c=w.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function To(c,w,$,k,I,M,K){return T?Qe(16,1,c,w,$,k,I,M,K):-52}function Io(c,w,$,k,I,M){if(T)return Qe(17,1,c,w,$,k,I,M)}function zo(c,w,$,k){c>>>=0,w>>>=0,$>>>=0,k>>>=0;var I=new Date().getFullYear(),M=new Date(I,0,1),K=new Date(I,6,1);I=M.getTimezoneOffset();var X=K.getTimezoneOffset(),ue=Math.max(I,X);h()[c>>>2>>>0]=60*ue,u()[w>>>2>>>0]=+(I!=X),M=(c=de=>de.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(M),K=c(K),X<I?(Ln(M,$,17),Ln(K,k,17)):(Ln(M,k,17),Ln(K,$,17))}var as=[],Ao=(c,w)=>{as.length=0;for(var $;$=s()[c++>>>0];){var k=$!=105;w+=(k&=$!=112)&&w%8?4:0,as.push($==112?h()[w>>>2>>>0]:$==106?Ce[w>>>3]:$==105?u()[w>>>2>>>0]:g()[w>>>3>>>0]),w+=k?8:4}return as};function gl(c,w,$){return c>>>=0,w=Ao(w>>>0,$>>>0),Di[c](...w)}function yl(c,w,$){return c>>>=0,w=Ao(w>>>0,$>>>0),Di[c](...w)}var ss=()=>{},wl=()=>Date.now();function vl(c,w){return le(at(c>>>0,w>>>0))}var Ro,Oo=()=>{throw en+=1,"unwind"};function _l(){return 4294901760}Ro=()=>performance.timeOrigin+performance.now();var $l=()=>navigator.hardwareConcurrency;function xl(){return Dn("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function bl(c){c>>>=0;var w=s().length;if(c<=w||4294901760<c)return!1;for(var $=1;4>=$;$*=2){var k=w*(1+.2/$);k=Math.min(k,c+100663296);var I=Math;k=Math.max(c,k);e:{I=(I.min.call(I,4294901760,k+(65536-k%65536)%65536)-ve.buffer.byteLength+65535)/65536;try{ve.grow(I),Ve();var M=1;break e}catch{}M=void 0}if(M)return!0}return!1}var ta=()=>(Dn("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),di={},Po=c=>{c.forEach(w=>{ta()})};function os(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),Po(c),di.Pb=ta(),di.ec=c,di.Pb}function ci(c,w,$){if(c>>>=0,w>>>=0,di.Pb==c)var k=di.ec;else(k=Error().stack.toString().split(`
`))[0]=="Error"&&k.shift(),Po(k);for(var I=3;k[I]&&ta()!=c;)++I;for(c=0;c<$&&k[c+I];++c)u()[w+4*c>>>2>>>0]=ta();return c}var us,na={},ls=()=>{if(!us){var c,w={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:F};for(c in na)na[c]===void 0?delete w[c]:w[c]=na[c];var $=[];for(c in w)$.push(`${c}=${w[c]}`);us=$}return us};function ds(c,w){if(T)return Qe(18,1,c,w);c>>>=0,w>>>=0;var $=0;return ls().forEach((k,I)=>{var M=w+$;for(I=h()[c+4*I>>>2>>>0]=M,M=0;M<k.length;++M)i()[I++>>>0]=k.charCodeAt(M);i()[I>>>0]=0,$+=k.length+1}),0}function cs(c,w){if(T)return Qe(19,1,c,w);c>>>=0,w>>>=0;var $=ls();h()[c>>>2>>>0]=$.length;var k=0;return $.forEach(I=>k+=I.length+1),h()[w>>>2>>>0]=k,0}function fs(c){return T?Qe(20,1,c):52}function tr(c,w,$,k){return T?Qe(21,1,c,w,$,k):52}function Bo(c,w,$,k){return T?Qe(22,1,c,w,$,k):70}var Sl=[null,[],[]];function Mo(c,w,$,k){if(T)return Qe(23,1,c,w,$,k);w>>>=0,$>>>=0,k>>>=0;for(var I=0,M=0;M<$;M++){var K=h()[w>>>2>>>0],X=h()[w+4>>>2>>>0];w+=8;for(var ue=0;ue<X;ue++){var de=s()[K+ue>>>0],Ee=Sl[c];de===0||de===10?((c===1?ge:le)(Wi(Ee,0)),Ee.length=0):Ee.push(de)}I+=X}return h()[k>>>2>>>0]=I,0}var ps=[31,29,31,30,31,30,31,31,30,31,30,31],hs=[31,28,31,30,31,30,31,31,30,31,30,31],fi=(c,w)=>{i().set(c,w>>>0)};function Er(c,w,$,k){function I(H,Ne,tt){for(H=typeof H=="number"?H.toString():H||"";H.length<Ne;)H=tt[0]+H;return H}function M(H,Ne){return I(H,Ne,"0")}function K(H,Ne){function tt(Tr){return 0>Tr?-1:0<Tr?1:0}var ir;return(ir=tt(H.getFullYear()-Ne.getFullYear()))===0&&(ir=tt(H.getMonth()-Ne.getMonth()))===0&&(ir=tt(H.getDate()-Ne.getDate())),ir}function X(H){switch(H.getDay()){case 0:return new Date(H.getFullYear()-1,11,29);case 1:return H;case 2:return new Date(H.getFullYear(),0,3);case 3:return new Date(H.getFullYear(),0,2);case 4:return new Date(H.getFullYear(),0,1);case 5:return new Date(H.getFullYear()-1,11,31);case 6:return new Date(H.getFullYear()-1,11,30)}}function ue(H){var Ne=H.Bb;for(H=new Date(new Date(H.Cb+1900,0,1).getTime());0<Ne;){var tt=H.getMonth(),ir=(kr(H.getFullYear())?ps:hs)[tt];if(!(Ne>ir-H.getDate())){H.setDate(H.getDate()+Ne);break}Ne-=ir-H.getDate()+1,H.setDate(1),11>tt?H.setMonth(tt+1):(H.setMonth(0),H.setFullYear(H.getFullYear()+1))}return tt=new Date(H.getFullYear()+1,0,4),Ne=X(new Date(H.getFullYear(),0,4)),tt=X(tt),0>=K(Ne,H)?0>=K(tt,H)?H.getFullYear()+1:H.getFullYear():H.getFullYear()-1}c>>>=0,w>>>=0,$>>>=0,k>>>=0;var de=h()[k+40>>>2>>>0];for(var Ee in k={kc:u()[k>>>2>>>0],jc:u()[k+4>>>2>>>0],Hb:u()[k+8>>>2>>>0],Lb:u()[k+12>>>2>>>0],Ib:u()[k+16>>>2>>>0],Cb:u()[k+20>>>2>>>0],ub:u()[k+24>>>2>>>0],Bb:u()[k+28>>>2>>>0],rc:u()[k+32>>>2>>>0],ic:u()[k+36>>>2>>>0],lc:de?at(de):""},$=at($),de={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})$=$.replace(new RegExp(Ee,"g"),de[Ee]);var Ue="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Le="January February March April May June July August September October November December".split(" ");for(Ee in de={"%a":H=>Ue[H.ub].substring(0,3),"%A":H=>Ue[H.ub],"%b":H=>Le[H.Ib].substring(0,3),"%B":H=>Le[H.Ib],"%C":H=>M((H.Cb+1900)/100|0,2),"%d":H=>M(H.Lb,2),"%e":H=>I(H.Lb,2," "),"%g":H=>ue(H).toString().substring(2),"%G":ue,"%H":H=>M(H.Hb,2),"%I":H=>((H=H.Hb)==0?H=12:12<H&&(H-=12),M(H,2)),"%j":H=>{for(var Ne=0,tt=0;tt<=H.Ib-1;Ne+=(kr(H.Cb+1900)?ps:hs)[tt++]);return M(H.Lb+Ne,3)},"%m":H=>M(H.Ib+1,2),"%M":H=>M(H.jc,2),"%n":()=>`
`,"%p":H=>0<=H.Hb&&12>H.Hb?"AM":"PM","%S":H=>M(H.kc,2),"%t":()=>"	","%u":H=>H.ub||7,"%U":H=>M(Math.floor((H.Bb+7-H.ub)/7),2),"%V":H=>{var Ne=Math.floor((H.Bb+7-(H.ub+6)%7)/7);if(2>=(H.ub+371-H.Bb-2)%7&&Ne++,Ne)Ne==53&&((tt=(H.ub+371-H.Bb)%7)==4||tt==3&&kr(H.Cb)||(Ne=1));else{Ne=52;var tt=(H.ub+7-H.Bb-1)%7;(tt==4||tt==5&&kr(H.Cb%400-1))&&Ne++}return M(Ne,2)},"%w":H=>H.ub,"%W":H=>M(Math.floor((H.Bb+7-(H.ub+6)%7)/7),2),"%y":H=>(H.Cb+1900).toString().substring(2),"%Y":H=>H.Cb+1900,"%z":H=>{var Ne=0<=(H=H.ic);return H=Math.abs(H)/60,(Ne?"+":"-")+("0000"+(H/60*100+H%60)).slice(-4)},"%Z":H=>H.lc,"%%":()=>"%"},$=$.replace(/%%/g,"\0\0"),de)$.includes(Ee)&&($=$.replace(new RegExp(Ee,"g"),de[Ee](k)));return Ee=function(H){var Ne=Array(yr(H)+1);return ei(H,Ne,0,Ne.length),Ne}($=$.replace(/\0\0/g,"%")),Ee.length>w?0:(fi(Ee,c),Ee.length-1)}function kl(c,w,$,k){return Er(c>>>0,w>>>0,$>>>0,k>>>0)}T||function(){for(var c=f.numThreads-1;c--;)Jn();Ft.unshift(()=>{It++,function(w){T?w():Promise.all(Nn.map(Xn)).then(w)}(()=>Zr())})}();for(var pi=Array(256),ra=0;256>ra;++ra)pi[ra]=String.fromCharCode(ra);ho=pi,jn=f.BindingError=class extends Error{constructor(c){super(c),this.name="BindingError"}},f.InternalError=class extends Error{constructor(c){super(c),this.name="InternalError"}},ht.push(0,1,void 0,1,null,1,!0,1,!1,1),f.count_emval_handles=()=>ht.length/2-5-Va.length;var Do=[Ba,Ma,Fi,uo,gr,lo,co,fo,Un,Na,La,po,Ua,ja,Fa,Wa,To,Io,ds,cs,fs,tr,Bo,Mo],_e=function(){function c($,k){return _e=$.exports,_e=function(){var I=_e,M={};for(let[K,X]of Object.entries(I))M[K]=typeof X=="function"?(...ue)=>{Yi.push(K);try{return X(...ue)}finally{De||(Yi.pop(),Mt&&Sn===1&&Yi.length===0&&(Sn=0,en+=1,Qi(rr),typeof Fibers<"u"&&Fibers.sc()))}}:X;return M}(),_e=function(){var I=_e,M=X=>ue=>X(ue)>>>0,K=X=>()=>X()>>>0;return(I=Object.assign({},I)).Ca=M(I.Ca),I.fb=K(I.fb),I.gb=M(I.gb),I.emscripten_main_runtime_thread_id=K(I.emscripten_main_runtime_thread_id),I.sb=M(I.sb),I.tb=K(I.tb),I}(),Li.push(_e.ib),et.unshift(_e.Ba),Se=k,Zr(),_e}var w=Oa();if(It++,f.instantiateWasm)try{return f.instantiateWasm(w,c)}catch($){le(`Module.instantiateWasm callback failed with error: ${$}`),v($)}return Pi||(Pi=f.locateFile?Bi("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":f.locateFile?f.locateFile("ort-wasm-simd-threaded.jsep.wasm",Y):Y+"ort-wasm-simd-threaded.jsep.wasm":new URL("/yolo-object-detection-onnxruntime-web/assets/ort-wasm-simd-threaded.jsep-Bj7LIWiD.wasm",import.meta.url).href),function($,k){var I=Pi;return ae||typeof WebAssembly.instantiateStreaming!="function"||Bi(I)||pr(I)||typeof fetch!="function"?Mi(I,$,k):fetch(I,{credentials:"same-origin"}).then(M=>WebAssembly.instantiateStreaming(M,$).then(k,function(K){return le(`wasm streaming compile failed: ${K}`),le("falling back to ArrayBuffer instantiation"),Mi(I,$,k)}))}(w,function($){c($.instance,$.module)}).catch(v),{}}(),ia=c=>(ia=_e.Ca)(c),ms=()=>(ms=_e.Da)();f._OrtInit=(c,w)=>(f._OrtInit=_e.Ea)(c,w),f._OrtGetLastError=(c,w)=>(f._OrtGetLastError=_e.Fa)(c,w),f._OrtCreateSessionOptions=(c,w,$,k,I,M,K,X,ue,de)=>(f._OrtCreateSessionOptions=_e.Ga)(c,w,$,k,I,M,K,X,ue,de),f._OrtAppendExecutionProvider=(c,w)=>(f._OrtAppendExecutionProvider=_e.Ha)(c,w),f._OrtAddFreeDimensionOverride=(c,w,$)=>(f._OrtAddFreeDimensionOverride=_e.Ia)(c,w,$),f._OrtAddSessionConfigEntry=(c,w,$)=>(f._OrtAddSessionConfigEntry=_e.Ja)(c,w,$),f._OrtReleaseSessionOptions=c=>(f._OrtReleaseSessionOptions=_e.Ka)(c),f._OrtCreateSession=(c,w,$)=>(f._OrtCreateSession=_e.La)(c,w,$),f._OrtReleaseSession=c=>(f._OrtReleaseSession=_e.Ma)(c),f._OrtGetInputOutputCount=(c,w,$)=>(f._OrtGetInputOutputCount=_e.Na)(c,w,$),f._OrtGetInputName=(c,w)=>(f._OrtGetInputName=_e.Oa)(c,w),f._OrtGetOutputName=(c,w)=>(f._OrtGetOutputName=_e.Pa)(c,w),f._OrtFree=c=>(f._OrtFree=_e.Qa)(c),f._OrtCreateTensor=(c,w,$,k,I,M)=>(f._OrtCreateTensor=_e.Ra)(c,w,$,k,I,M),f._OrtGetTensorData=(c,w,$,k,I)=>(f._OrtGetTensorData=_e.Sa)(c,w,$,k,I),f._OrtReleaseTensor=c=>(f._OrtReleaseTensor=_e.Ta)(c),f._OrtCreateRunOptions=(c,w,$,k)=>(f._OrtCreateRunOptions=_e.Ua)(c,w,$,k),f._OrtAddRunConfigEntry=(c,w,$)=>(f._OrtAddRunConfigEntry=_e.Va)(c,w,$),f._OrtReleaseRunOptions=c=>(f._OrtReleaseRunOptions=_e.Wa)(c),f._OrtCreateBinding=c=>(f._OrtCreateBinding=_e.Xa)(c),f._OrtBindInput=(c,w,$)=>(f._OrtBindInput=_e.Ya)(c,w,$),f._OrtBindOutput=(c,w,$,k)=>(f._OrtBindOutput=_e.Za)(c,w,$,k),f._OrtClearBoundOutputs=c=>(f._OrtClearBoundOutputs=_e._a)(c),f._OrtReleaseBinding=c=>(f._OrtReleaseBinding=_e.$a)(c),f._OrtRunWithBinding=(c,w,$,k,I)=>(f._OrtRunWithBinding=_e.ab)(c,w,$,k,I),f._OrtRun=(c,w,$,k,I,M,K,X)=>(f._OrtRun=_e.bb)(c,w,$,k,I,M,K,X),f._OrtEndProfiling=c=>(f._OrtEndProfiling=_e.cb)(c),f._JsepOutput=(c,w,$)=>(f._JsepOutput=_e.db)(c,w,$),f._JsepGetNodeName=c=>(f._JsepGetNodeName=_e.eb)(c);var hi,nr=()=>(nr=_e.fb)(),aa=f._malloc=c=>(aa=f._malloc=_e.gb)(c),pn=f._free=c=>(pn=f._free=_e.hb)(c),gs=(c,w,$,k,I,M)=>(gs=_e.kb)(c,w,$,k,I,M),No=()=>(No=_e.lb)(),Lo=(c,w,$,k,I)=>(Lo=_e.mb)(c,w,$,k,I),Nt=c=>(Nt=_e.nb)(c),Vn=c=>(Vn=_e.ob)(c),ys=()=>(ys=_e.pb)(),ws=(c,w)=>(ws=_e.qb)(c,w),mi=c=>(mi=_e.rb)(c),sa=c=>(sa=_e.sb)(c),gi=()=>(gi=_e.tb)(),Uo=f.dynCall_ii=(c,w)=>(Uo=f.dynCall_ii=_e.vb)(c,w),jo=c=>(jo=_e.wb)(c),rr=()=>(rr=_e.xb)(),oa=c=>(oa=_e.yb)(c),Cr=()=>(Cr=_e.zb)();function ua(){0<It||(T?(_(f),T||Jr(et),startWorker(f)):(Jr(Ft),0<It||hi||(hi=!0,f.calledRun=!0,De||(T||Jr(et),_(f),T||Jr(it)))))}return f.___start_em_js=882450,f.___stop_em_js=882672,f.stackSave=()=>gi(),f.stackRestore=c=>mi(c),f.stackAlloc=c=>sa(c),f.UTF8ToString=at,f.stringToUTF8=Ln,f.lengthBytesUTF8=yr,xn=function c(){hi||ua(),hi||(xn=c)},ua(),x}),f0=Kd,((e=globalThis.self)==null?void 0:e.name)==="em-pthread"&&Kd()}),Ca,$h,xh,bh,Qd,p0,Sh,h0,il=re(()=>{var e,r;Jc(),Ca=import.meta.url??(typeof document<"u"?(e=document.currentScript)==null?void 0:e.src:typeof self<"u"?(r=self.location)==null?void 0:r.href:void 0),$h=typeof location>"u"?void 0:location.origin,xh=(i,s)=>{try{let o=s??Ca;return(o?new URL(i,o):new URL(i)).origin===$h}catch{return!1}},bh=async i=>{let s=await(await fetch(i,{credentials:"same-origin"})).blob();return URL.createObjectURL(s)},Qd=(F2(),Gu(l0)).default,p0=async()=>{if(!Ca)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(xh(Ca))return[void 0,Qd()];let i=await bh(Ca);return[i,Qd(i)]},Sh=(W2(),Gu(c0)).default,h0=async(i,s,o)=>[void 0,Sh]}),Yd,Pu,Ls,Zd,kh,Eh,ef,xt,Oi=re(()=>{il(),Pu=!1,Ls=!1,Zd=!1,kh=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Eh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ef=async e=>{if(Pu)return Promise.resolve();if(Ls)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Zd)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ls=!0;let r=e.initTimeout,i=e.numThreads;if(!Eh())throw new Error("WebAssembly SIMD is not supported in the current environment.");let s=kh();i>1&&!s&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let o=e.wasmPaths,d=typeof o=="string"?o:void 0,u=o==null?void 0:o.mjs,h=(u==null?void 0:u.href)??u,m=o==null?void 0:o.wasm,g=(m==null?void 0:m.href)??m,_=e.wasmBinary,[v,f]=await h0(h,d,i>1),x=!1,S=[];if(r>0&&S.push(new Promise(b=>{setTimeout(()=>{x=!0,b()},r)})),S.push(new Promise((b,T)=>{let A={numThreads:i};_?A.wasmBinary=_:(g||d)&&(A.locateFile=(C,O)=>g??(d??O)+C),f(A).then(C=>{Ls=!1,Pu=!0,Yd=C,b(),v&&URL.revokeObjectURL(v)},C=>{Ls=!1,Zd=!0,T(C)})})),await Promise.race(S),x)throw new Error(`WebAssembly backend initializing failed due to timeout: ${r}ms`)},xt=()=>{if(Pu&&Yd)return Yd;throw new Error("WebAssembly is not initialized yet.")}}),Tt,Yu,ct,tf=re(()=>{Oi(),Tt=(e,r)=>{let i=xt(),s=i.lengthBytesUTF8(e)+1,o=i._malloc(s);return i.stringToUTF8(e,o,s),r.push(o),o},Yu=(e,r,i,s)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([o,d])=>{let u=r?r+o:o;if(typeof d=="object")Yu(d,u+".",i,s);else if(typeof d=="string"||typeof d=="number")s(u,d.toString());else if(typeof d=="boolean")s(u,d?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof d}`)})},ct=e=>{let r=xt(),i=r.stackSave();try{let s=r.stackAlloc(8);r._OrtGetLastError(s,s+4);let o=r.HEAP32[s/4],d=r.HEAPU32[s/4+1],u=d?r.UTF8ToString(d):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${u}`)}finally{r.stackRestore(i)}}}),m0,V2=re(()=>{Oi(),tf(),m0=e=>{let r=xt(),i=0,s=[],o=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)o.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)o.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(o.terminate=!1);let d=0;return(e==null?void 0:e.tag)!==void 0&&(d=Tt(e.tag,s)),i=r._OrtCreateRunOptions(o.logSeverityLevel,o.logVerbosityLevel,!!o.terminate,d),i===0&&ct("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Yu(e.extra,"",new WeakSet,(u,h)=>{let m=Tt(u,s),g=Tt(h,s);r._OrtAddRunConfigEntry(i,m,g)!==0&&ct(`Can't set a run config entry: ${u} - ${h}.`)}),[i,s]}catch(d){throw i!==0&&r._OrtReleaseRunOptions(i),s.forEach(u=>r._free(u)),d}}}),Ch,Th,Ih,zh,g0,H2=re(()=>{Oi(),tf(),Ch=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Th=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Ih=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let r=e.extra.session;r.use_ort_model_bytes_directly||(r.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},zh=(e,r,i)=>{for(let s of r){let o=typeof s=="string"?s:s.name;switch(o){case"webnn":if(o="WEBNN",typeof s!="string"){let u=s==null?void 0:s.deviceType;if(u){let h=Tt("deviceType",i),m=Tt(u,i);xt()._OrtAddSessionConfigEntry(e,h,m)!==0&&ct(`Can't set a session config entry: 'deviceType' - ${u}.`)}}break;case"webgpu":if(o="JS",typeof s!="string"){let u=s;if(u!=null&&u.preferredLayout){if(u.preferredLayout!=="NCHW"&&u.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${u.preferredLayout}`);let h=Tt("preferredLayout",i),m=Tt(u.preferredLayout,i);xt()._OrtAddSessionConfigEntry(e,h,m)!==0&&ct(`Can't set a session config entry: 'preferredLayout' - ${u.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let d=Tt(o,i);xt()._OrtAppendExecutionProvider(e,d)!==0&&ct(`Can't append execution provider: ${o}.`)}},g0=e=>{let r=xt(),i=0,s=[],o=e||{};Ih(o);try{let d=Ch(o.graphOptimizationLevel??"all"),u=Th(o.executionMode??"sequential"),h=typeof o.logId=="string"?Tt(o.logId,s):0,m=o.logSeverityLevel??2;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log serverity level is not valid: ${m}`);let g=o.logVerbosityLevel??0;if(!Number.isInteger(g)||g<0||g>4)throw new Error(`log verbosity level is not valid: ${g}`);let _=typeof o.optimizedModelFilePath=="string"?Tt(o.optimizedModelFilePath,s):0;if(i=r._OrtCreateSessionOptions(d,!!o.enableCpuMemArena,!!o.enableMemPattern,u,!!o.enableProfiling,0,h,m,g,_),i===0&&ct("Can't create session options."),o.executionProviders&&zh(i,o.executionProviders,s),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);let v=Tt("enableGraphCapture",s),f=Tt(o.enableGraphCapture.toString(),s);r._OrtAddSessionConfigEntry(i,v,f)!==0&&ct(`Can't set a session config entry: 'enableGraphCapture' - ${o.enableGraphCapture}.`)}if(o.freeDimensionOverrides)for(let[v,f]of Object.entries(o.freeDimensionOverrides)){if(typeof v!="string")throw new Error(`free dimension override name must be a string: ${v}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let x=Tt(v,s);r._OrtAddFreeDimensionOverride(i,x,f)!==0&&ct(`Can't set a free dimension override: ${v} - ${f}.`)}return o.extra!==void 0&&Yu(o.extra,"",new WeakSet,(v,f)=>{let x=Tt(v,s),S=Tt(f,s);r._OrtAddSessionConfigEntry(i,x,S)!==0&&ct(`Can't set a session config entry: ${v} - ${f}.`)}),[i,s]}catch(d){throw i!==0&&r._OrtReleaseSessionOptions(i),s.forEach(u=>r._free(u)),d}}}),Qs,Ri,Ia,nf,Zu,rf,af,Oc,Ae=re(()=>{Qs=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ri=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ia=(e,r)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],s=typeof r=="number"?r:r.reduce((o,d)=>o*d,1);return i>0?Math.ceil(s*i):void 0},nf=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Zu=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},rf=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",af=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",Oc=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),sf,y0=re(()=>{Jc(),sf=async e=>{if(typeof e=="string"){let r=await fetch(e);if(!r.ok)throw new Error(`failed to load external data file: ${e}`);let i=r.headers.get("Content-Length"),s=i?parseInt(i,10):0;if(s<1073741824)return new Uint8Array(await r.arrayBuffer());{if(!r.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let o=r.body.getReader(),d;try{d=new ArrayBuffer(s)}catch(h){if(h instanceof RangeError){let m=Math.ceil(s/65536);d=new WebAssembly.Memory({initial:m,maximum:m}).buffer}else throw h}let u=0;for(;;){let{done:h,value:m}=await o.read();if(h)break;let g=m.byteLength;new Uint8Array(d,u,g).set(m),u+=g}return new Uint8Array(d,0,s)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ah,Rh,Oh,Ph,of,Bh,Ye,Yn=re(()=>{Ae(),Ah=["V","I","W","E","F"],Rh=(e,r)=>{console.log(`[${Ah[e]},${new Date().toISOString()}]${r}`)},of=(e,r)=>{Oh=e,Ph=r},Bh=(e,r)=>{let i=Zu(e),s=Zu(Oh);i>=s&&Rh(i,typeof r=="function"?r():r)},Ye=(...e)=>{Ph&&Bh(...e)}}),uf,w0=re(()=>{Ae(),uf=(e,r)=>new(nf(r))(e)}),lf=re(()=>{}),Xd,Bu,Mu,Mh,Dh,Jd,Pc,Nh,v0,q2=re(()=>{Yn(),lf(),Xd=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Bu=[],Mu=e=>Math.ceil(e/16)*16,Mh=e=>{for(let r=0;r<Bu.length;r++){let i=Bu[r];if(e<=i)return i}return Math.ceil(e/16)*16},Dh=1,Jd=()=>Dh++,Pc=async(e,r,i,s)=>{let o=Mu(i),d=e.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let u=e.getCommandEncoder();e.endComputePass(),u.copyBufferToBuffer(r,0,d,0,o),e.flush(),await d.mapAsync(GPUMapMode.READ);let h=d.getMappedRange();if(s){let m=s();return m.set(new Uint8Array(h,0,i)),m}else return new Uint8Array(h.slice(0,i))}finally{d.destroy()}},Nh=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[r]of Xd)Bu.push(r),this.freeBuffers.set(r,[]),this.freeUniformBuffers.set(r,[])}upload(e,r){let i=r.buffer,s=r.byteOffset,o=r.byteLength,d=Mu(o),u=this.storageCache.get(e);if(!u)throw new Error("gpu data for uploading does not exist");if(u.originalSize!==o)throw new Error(`inconsistent data size. gpu data size=${u.originalSize}, data size=${o}`);let h=this.backend.device.createBuffer({mappedAtCreation:!0,size:d,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),m=h.getMappedRange();new Uint8Array(m).set(new Uint8Array(i,s,o)),h.unmap();let g=this.backend.getCommandEncoder();this.backend.endComputePass(),g.copyBufferToBuffer(h,0,u.gpuData.buffer,0,d),Ye("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(h)}memcpy(e,r){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let s=this.storageCache.get(r);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");let o=Mu(i.originalSize),d=this.backend.getCommandEncoder();this.backend.endComputePass(),d.copyBufferToBuffer(i.gpuData.buffer,0,s.gpuData.buffer,0,o)}registerExternalBuffer(e,r,i){let s;if(i){if(s=i[0],e===i[1])return Ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=Jd();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:e},originalSize:r}),Ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, registered.`),s}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ye("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=Mh(e),s,o=(r&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,d=(r&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(o||d){let h=(o?this.freeBuffers:this.freeUniformBuffers).get(i);h?h.length>0?s=h.pop():s=this.backend.device.createBuffer({size:i,usage:r}):s=this.backend.device.createBuffer({size:i,usage:r})}else s=this.backend.device.createBuffer({size:i,usage:r});let u={id:Jd(),type:0,buffer:s};return this.storageCache.set(u.id,{gpuData:u,originalSize:e}),Ye("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${u.id}`),u}get(e){var r;return(r=this.storageCache.get(e))==null?void 0:r.gpuData}release(e){let r=this.storageCache.get(e);if(!r)throw new Error("releasing data does not exist");return Ye("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,r){let i=this.storageCache.get(e);if(!i)throw new Error("data does not exist");await Pc(this.backend,i.gpuData.buffer,i.originalSize,r)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let r=Xd.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let r of this.buffersPending)e.push(r);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let r=this.capturedPendingBuffers.get(e);r&&(r.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e))}},v0=(...e)=>new Nh(...e)}),Lh,Ze,gt=re(()=>{Lh=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ze=e=>new Lh(e)}),Uh,Aa,Q,Xu,_0,$0,x0,Be=re(()=>{Uh=class{static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},Aa=class{static calcShape(e,r,i=!1){let s=e.length,o=r.length;if(s===0)return r;if(o===0)return e;let d=Math.max(e.length,r.length),u=new Array(d);if(i){if(s<2||o<2)return;let h=Uh.calcMatMulShape([e[s-2],e[s-1]],[r[o-2],r[o-1]]);if(h===void 0)return;[u[d-2],u[d-1]]=h}for(let h=i?3:1;h<=d;h++){let m=s-h<0?1:e[s-h],g=o-h<0?1:r[o-h];if(m!==g&&m>1&&g>1)return;let _=Math.max(m,g);if(m&&g)u[d-h]=Math.max(m,g);else{if(_>1)return;u[d-h]=0}}return u}static isValidBroadcast(e,r){let i=e.length,s=r.length;if(i>s)return!1;for(let o=1;o<=i;o++)if(e[i-o]!==1&&e[i-o]!==r[s-o])return!1;return!0}},Q=class Hu{static size(r){return Hu.getSizeFromDimensionRange(r,0,r.length)}static convertShape(r,i=4){let s=r.length;if(s===0)return[];let o=new Array(s),d=s-1;for(;d>=0;){if(r[d]%i===0){o[d]=r[d]/i;break}if(i%r[d]!==0)throw new Error("cannot convert shape");o[d]=1,i/=r[d],d--}for(d--;d>=0;d--)o[d]=r[d];return o}static sizeFromDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${r.length} dimensions.`);return Hu.getSizeFromDimensionRange(r,i,r.length)}static sizeToDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${r.length} dimensions.`);return Hu.getSizeFromDimensionRange(r,0,i)}static getSizeFromDimensionRange(r,i,s){let o=1;for(let d=i;d<s;d++){if(r[d]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");o*=r[d]}return o}static computeStrides(r){let i=r.length;if(i===0)return[];if(i===1)return[1];let s=new Array(i);s[i-1]=1,s[i-2]=r[i-1];for(let o=i-3;o>=0;--o)s[o]=s[o+1]*r[o+1];return s}static normalizeAxis(r,i){if(r<-i&&r>=i)throw new Error("unsupported axis for this operation.");return r<0?r+i:r}static normalizeAxes(r,i){return r.map(s=>this.normalizeAxis(s,i??r.length))}static sortBasedOnPerm(r,i){return i?i.map(s=>r[s]):r.slice().reverse()}static padShape(r,i){let s=r.length;return r.map((o,d)=>o+i[d]+i[d+s])}static areEqual(r,i){return r.length!==i.length?!1:r.every((s,o)=>s===i[o])}},Xu=class Ys{static adjustPoolAttributes(r,i,s,o,d,u){if(!r&&s.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(r)for(let h=0;h<i.length-2;h++)h>=s.length?s.push(i[h+2]):s[h]=i[h+2];for(let h=0;h<s.length;h++)if(h<o.length){if(o[h]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let h=0;h<s.length;h++)if(h<d.length){if(d[h]<0)throw new Error("dilations should be greater than or equal to 1")}else d.push(1);for(let h=0;h<s.length*2;h++)if(h<u.length){if(u[h]<0)throw new Error("pad should be greater than or equal to 1")}else u.push(0);for(let h=0;h<s.length;h++){if(s[h]<=0)throw new Error("kernel shapes need to be greater than 0");if(u[h]>=s[h]||u[h+s.length]>=s[h])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(r,i,s,o,d,u,h){if(h){if(d.length!==2*(r.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==r.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==r.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let m=0;m<r.length-2;m++)Ys.adjustPadAndReturnShape(r[m+(u?1:2)],i[m],s[m],o[m],d,m,m+r.length-2,h)}}static computePoolOutputShape(r,i,s,o,d,u,h){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let m=[i[0],i[1]];return Ys.computeShapeHelper(r,i,m,s,o,d,u,h),m}static computeConvOutputShape(r,i,s,o,d,u,h){if(r.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let m=[r[0],i[0]];return Ys.computeShapeHelper(!1,r,m,s,o,d,u,h),m}static computeShapeHelper(r,i,s,o,d,u,h,m){if(r)for(let g=0;g<i.length-2;g++)s.push(1);else for(let g=0;g<i.length-2;g++)s.push(Ys.adjustPadAndReturnShape(i[g+2],o[g],d[g],u[g],h,g,g+i.length-2,m))}static adjustPadAndReturnShape(r,i,s,o,d,u,h,m){let g=s*(o-1)+1;if(m&&m!=="NOTSET")switch(m){case"VALID":return d[u]=0,d[h]=0,Math.floor((r-g)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(s!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let _=((r+i-1)/i-1)*i+o-r;return d[u]=Math.floor(m==="SAME_LOWER"?(_+1)/2:_/2),d[h]=_-d[u],Math.floor((r+_-o)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((r+d[u]+d[h]-g)/i+1)}},_0=class{static getShapeOfGemmResult(e,r,i,s,o){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let d,u,h;r?(d=e[1],u=e[0]):(d=e[0],u=e[1]);let m=-1;if(s?(h=i[0],m=1):(h=i[1],m=0),i[m]!==u)throw new Error("dimension mismatch");if(d<=0||h<=0||u<=0)throw new Error("invalid shape specified");if(o&&!Aa.isValidBroadcast(o,[d,h]))throw new Error("gemm: invalid bias shape for broadcast");return[d,h,u]}},$0=-34028234663852886e22,x0=34028234663852886e22}),Ra,Du,vt,Pt,he,pt,Bc,za,Hr,we,Nu,Z,be,df,jh,b0,Js,Me=re(()=>{Ae(),Be(),Ra=64,Du=(e,r)=>{if(r===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return r>1?`vec${r}<f16>`:"f16";case 1:return r>1?`vec${r}<f32>`:"f32";case 6:return r>1?`vec${r}<i32>`:"i32";case 12:return r>1?`vec${r}<u32>`:"u32";case 7:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(r!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},vt=(e,r=1)=>{let i=Du(e,r);return typeof i=="string"?i:i[0]},Pt=(e,r=1)=>{let i=Du(e,r);return typeof i=="string"?i:i[1]},he=(...e)=>{let r=[];return e.forEach(i=>{i.length!==0&&r.push({type:12,data:i},{type:12,data:Q.computeStrides(i)})}),r},pt=e=>e%4===0?4:e%2===0?2:1,Bc=(e="f32",r,i="0")=>!r||r===1?`${e}(${i})`:`vec${r}<${e}>(${i})`,za=(e,r,i)=>e==="f32"?i:r===1?`f32(${i})`:`vec${r}<f32>(${i})`,Hr=(e,r)=>r===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:r===2?`(${e}.x + ${e}.y)`:r===3?`(${e}.x + ${e}.y + ${e}.z)`:e,we=(e,r,i,s)=>e.startsWith("uniforms.")&&i>4?typeof r=="string"?s==="f16"?`${e}[(${r}) / 8][(${r}) % 8 / 4][(${r}) % 8 % 4]`:`${e}[(${r}) / 4][(${r}) % 4]`:s==="f16"?`${e}[${Math.floor(r/8)}][${Math.floor(r%8/4)}][${r%8%4}]`:`${e}[${Math.floor(r/4)}][${r%4}]`:i>1?`${e}[${r}]`:e,Nu=(e,r,i,s,o)=>{let d=typeof i=="number",u=d?i:i.length,h=[...new Array(u).keys()],m=u<2?"u32":u<=4?`vec${u}<u32>`:`array<u32, ${u}>`,g=Du(r,o),_=typeof g=="string"?g:g[1],v=typeof g=="string"?g:g[0],f={indices:m,value:_,storage:v,tensor:r},x=z=>typeof z=="string"?z:`${z}u`,S={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=d?"uniforms.":"",T=`${b}${e}_shape`,A=`${b}${e}_strides`,C="";for(let z=0;z<u-1;z++)C+=`
    let dim${z} = current / ${we(A,z,u)};
    let rest${z} = current % ${we(A,z,u)};
    indices[${z}] = dim${z};
    current = rest${z};
    `;C+=`indices[${u-1}] = current;`;let O=u<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${C}
    return indices;
  }`,R=z=>(S.offsetToIndices=!0,u<2?z:`o2i_${e}(${z})`),B=[];if(u>=2)for(let z=u-1;z>=0;z--)B.push(`${we(A,z,u)} * (indices[${z}])`);let F=u<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${B.join("+")};
  }`,U=z=>(S.indicesToOffset=!0,u<2?z:`i2o_${e}(${z})`),Y=(...z)=>u===0?"0u":`${f.indices}(${z.map(x).join(",")})`,ae=(z,N)=>u<2?`${z}`:`${we(z,N,u)}`,oe=(z,N,ne)=>u<2?`${z}=${ne};`:`${we(z,N,u)}=${ne};`,me={},ge=(z,N)=>{S.broadcastedIndicesToOffset=!0;let ne=`${N.name}broadcastedIndicesTo${e}Offset`;if(ne in me)return`${ne}(${z})`;let ce=[];for(let xe=u-1;xe>=0;xe--){let Ce=N.indicesGet("outputIndices",xe+N.rank-u);ce.push(`${ae(A,xe)} * (${Ce} % ${ae(T,xe)})`)}return me[ne]=`fn ${ne}(outputIndices: ${N.type.indices}) -> u32 {
             return ${ce.length>0?ce.join("+"):"0u"};
           }`,`${ne}(${z})`},le=(z,N)=>(()=>{if(f.storage===f.value)return`${e}[${z}]=${N};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${z}]=vec2<u32>(u32(${N}), select(0u, 0xFFFFFFFFu, ${N} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${z}]=vec2<u32>(u32(${N}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${z}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${N}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),Te=z=>(()=>{if(f.storage===f.value)return`${e}[${z}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${z}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${z}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${z}] & 0xFFu), bool(${e}[${z}] & 0xFF00u), bool(${e}[${z}] & 0xFF0000u), bool(${e}[${z}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),Oe=u<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${_} {
    return ${Te(`i2o_${e}(indices)`)};
  }`,ve=u<2?"":(()=>{let z=h.map(ne=>`d${ne}: u32`).join(", "),N=h.map(ne=>`d${ne}`).join(", ");return`
  fn get_${e}(${z}) -> ${_} {
    return get_${e}ByIndices(${Y(N)});
  }`})(),Se=(...z)=>{if(z.length!==u)throw new Error(`indices length must be ${u}`);let N=z.map(x).join(",");return u===0?Te("0u"):u===1?Te(N[0]):(S.get=!0,S.getByIndices=!0,S.indicesToOffset=!0,`get_${e}(${N})`)},q=z=>u<2?Te(z):(S.getByIndices=!0,S.indicesToOffset=!0,`get_${e}ByIndices(${z})`),J=u<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${_}) {
    ${le(`i2o_${e}(indices)`,"value")}
  }`,G=u<2?"":(()=>{let z=h.map(ne=>`d${ne}: u32`).join(", "),N=h.map(ne=>`d${ne}`).join(", ");return`
  fn set_${e}(${z}, value: ${_}) {
    set_${e}ByIndices(${Y(N)}, value);
  }`})();return{impl:()=>{let z=[],N=!1;return S.offsetToIndices&&(z.push(O),N=!0),S.indicesToOffset&&(z.push(F),N=!0),S.broadcastedIndicesToOffset&&(Object.values(me).forEach(ne=>z.push(ne)),N=!0),S.set&&(z.push(G),N=!0),S.setByIndices&&(z.push(J),N=!0),S.get&&(z.push(ve),N=!0),S.getByIndices&&(z.push(Oe),N=!0),!d&&N&&z.unshift(`const ${T} = ${f.indices}(${i.join(",")});`,`const ${A} = ${f.indices}(${Q.computeStrides(i).join(",")});`),z.join(`
`)},type:f,offsetToIndices:R,indicesToOffset:U,broadcastedIndicesToOffset:ge,indices:Y,indicesGet:ae,indicesSet:oe,set:(...z)=>{if(z.length!==u+1)throw new Error(`indices length must be ${u}`);let N=z[u];if(typeof N!="string")throw new Error("value must be string");let ne=z.slice(0,u).map(x).join(",");return u===0?le("0u",N):u===1?le(ne[0],N):(S.set=!0,S.setByIndices=!0,S.indicesToOffset=!0,`set_${e}(${ne}, ${N})`)},setByOffset:le,setByIndices:(z,N)=>u<2?le(z,N):(S.setByIndices=!0,S.indicesToOffset=!0,`set_${e}ByIndices(${z}, ${N});`),get:Se,getByOffset:Te,getByIndices:q,usage:s,name:e,strides:A,shape:T,rank:u}},Z=(e,r,i,s=1)=>Nu(e,r,i,"input",s),be=(e,r,i,s=1)=>Nu(e,r,i,"output",s),df=(e,r,i,s=1)=>Nu(e,r,i,"internal",s),jh=class{constructor(e,r){this.normalizedDispatchGroup=e,this.limits=r,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ra){let r=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],s=typeof e=="number"?1:e[2];if(r>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(r*i*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let o=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,d=o?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,u=o?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${r*i*s}u + local_idx;`;return`@compute @workgroup_size(${r}, ${i}, ${s})
  fn main(${d}) {
    ${u}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,r){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",s=e.type.storage;return`@group(0) @binding(${r}) var<storage, ${i}> ${e.name}: array<${s}>;`}declareVariables(...e){return e.map(r=>this.declareVariable(r,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(r=>this.registerInternalVariable(r)),this}registerUniform(e,r,i=1){return this.uniforms.push({name:e,type:r,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:r,type:i,length:s}of this.uniforms)if(s&&s>4)i==="f16"?e.push(`@align(16) ${r}:array<mat2x4<${i}>, ${Math.ceil(s/8)}>`):e.push(`${r}:array<vec4<${i}>, ${Math.ceil(s/4)}>`);else{let o=s==null||s===1?i:`vec${s}<${i}>`;e.push(`${r}:${o}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=r=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(r)];return this.uniforms.map(r=>[e(r.type),r.length??1])}},b0=(e,r)=>new jh(e,r),Js=(e,r)=>{let i=e.length,s=[];for(let o=0;o<i;o++){let d=i-1-o,u=e[d]||1;(r[r.length-1-o]||1)>1&&u===1&&s.unshift(d)}return s}}),Fh,ec,Wh,Vh,Hh,ln,S0,k0,Qr=re(()=>{Ae(),Be(),gt(),Me(),Fh=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},ec=(e,r)=>r&&r.length!==e?[...new Array(e).keys()].reverse():r,Wh=(e,r)=>Q.sortBasedOnPerm(e,ec(e.length,r)),Vh=(e,r,i,s)=>{let o=`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let d=0;d<r;++d)o+=i.indicesSet("a",e[d],`i[${d}]`);return o+="return a;}"},Hh=(e,r)=>{let i=[],s=[];for(let o=0;o<e.length;++o)e[o]!==1&&i.push(e[o]),e[r[o]]!==1&&s.push(r[o]);return{newShape:i,newPerm:s}},ln=(e,r)=>{let i=e.dataType,s=e.dims.length,o=ec(s,r),d=Wh(e.dims,o),{newShape:u,newPerm:h}=Hh(e.dims,o),m=Q.areEqual(h,[2,3,1]),g=Q.areEqual(h,[3,1,2]),_=u.length===2&&h[0]>h[1]||m||g,v=_?u:e.dims,f=d;_&&(v=m?[u[0],u[1]*u[2]]:g?[u[0]*u[1],u[2]]:u,f=[v[1],v[0]]);let x=Z("a",i,v.length),S=be("output",i,f.length),b=16,T;return _?T=A=>`
  ${A.registerUniform("output_size","u32").declareVariables(x,S)}
  var<workgroup> tile : array<array<${S.type.value}, ${b+1}>, ${b}>;
  ${A.mainStart([b,b,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${b} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${b}u + local_id.x;
    let input_row = workgroup_id_x * ${b}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${x.getByIndices(`${x.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${b}u + local_id.x;
    let output_row = workgroup_id_y * ${b}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${S.setByIndices(`${S.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`:T=A=>`
  ${A.registerUniform("output_size","u32").declareVariables(x,S)}

  ${Vh(o,s,x,S)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`,{name:_?"TransposeShared":"Transpose",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>{let A=Q.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:_?{x:Math.ceil(f[1]/b),y:Math.ceil(f[0]/b)}:{x:Math.ceil(A/64)},programUniforms:[{type:12,data:A},...he(v,f)]}},getShaderSource:T}},S0=(e,r)=>{Fh(e.inputs),e.compute(ln(e.inputs[0],r.perm))},k0=e=>Ze({perm:e.perm})}),qh,Gh,Kh,Qh,Yh,Zh,Xh,Jh,em,tm,zn,E0,C0,T0,I0,z0,A0,R0,O0,P0,B0,G2=re(()=>{Ae(),Be(),Me(),cf(),Qr(),qh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Gh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Kh={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Qh={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Yh=(e,r)=>{let i=[];for(let s=r-e;s<r;++s)i.push(s);return i},Zh=(e,r)=>{let i=[],s=e.length;for(let d=0;d<s;d++)r.indexOf(d)===-1&&i.push(e[d]);let o=r.map(d=>e[d]);return[i,o]},Xh=(e,r)=>{let i=e.length+r.length,s=[],o=0;for(let d=0;d<i;d++)r.indexOf(d)===-1?s.push(e[o++]):s.push(1);return s},Jh=(e,r)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==r-1-i)return!1;return!0},em=(e,r)=>{let i=[];if(!Jh(e,r)){for(let s=0;s<r;++s)e.indexOf(s)===-1&&i.push(s);e.forEach(s=>i.push(s))}return i},tm=(e,r,i,s,o,d,u)=>{let h=i[0].dims,m=Q.size(d),g=Q.size(u),_=Z("_A",i[0].dataType,h),v=be("output",o,d),f=32,x=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:r,getShaderSource:S=>`
        ${S.registerUniform("reduceSize","u32").declareVariables(_,v)}
        ${x}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${S.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Kh[s]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${_.getByOffset("offset + k")});
           bestValue = ${qh[s]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Gh[s]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${v.setByOffset("outputIndex",`${s==="mean"?`${v.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${v.type.storage}(${Qh[s]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:m},programUniforms:[{type:12,data:g}]})}},zn=(e,r,i,s)=>{let o=e.inputs.length===1?i:Mc(e.inputs,i),d=o.axes;d.length===0&&!o.noopWithEmptyAxes&&(d=e.inputs[0].dims.map((x,S)=>S));let u=Q.normalizeAxes(d,e.inputs[0].dims.length),h=u,m=e.inputs[0],g=em(h,e.inputs[0].dims.length);g.length>0&&(m=e.compute(ln(e.inputs[0],g),{inputs:[0],outputs:[-1]})[0],h=Yh(h.length,m.dims.length));let[_,v]=Zh(m.dims,h),f=_;o.keepDims&&(f=Xh(_,u)),e.compute(tm(r,{hint:o.cacheKey,inputDependencies:["type"]},[m],s,e.inputs[0].dataType,f,v),{inputs:[m]})},E0=(e,r)=>{zn(e,"ReduceMeanShared",r,"mean")},C0=(e,r)=>{zn(e,"ReduceL1Shared",r,"l1")},T0=(e,r)=>{zn(e,"ReduceL2Shared",r,"l2")},I0=(e,r)=>{zn(e,"ReduceLogSumExpShared",r,"logSumExp")},z0=(e,r)=>{zn(e,"ReduceMaxShared",r,"max")},A0=(e,r)=>{zn(e,"ReduceMinShared",r,"min")},R0=(e,r)=>{zn(e,"ReduceProdShared",r,"prod")},O0=(e,r)=>{zn(e,"ReduceSumShared",r,"sum")},P0=(e,r)=>{zn(e,"ReduceSumSquareShared",r,"sumSquare")},B0=(e,r)=>{zn(e,"ReduceLogSumShared",r,"logSum")}}),An,nm,Ju,Mc,Rn,rm,im,am,sm,om,um,lm,dm,cm,fm,On,M0,D0,N0,L0,U0,j0,F0,W0,V0,H0,cf=re(()=>{Ae(),Be(),gt(),Me(),G2(),An=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},nm=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ju=(e,r,i,s,o,d,u=!1,h=!1)=>{let m=[],g=i[0].dims,_=g.length,v=Q.normalizeAxes(o,_),f=!h&&v.length===0;g.forEach((b,T)=>{f||v.indexOf(T)>=0?u&&m.push(1):m.push(b)});let x=m.length,S=Q.size(m);return{name:e,shaderCache:r,getShaderSource:b=>{let T=[],A=Z("_A",i[0].dataType,_),C=be("output",d,x),O=s(A,C,v),R=O[2];for(let B=0,F=0;B<_;B++)f||v.indexOf(B)>=0?(u&&F++,R=`for(var j${B}: u32 = 0; j${B} < ${g[B]}; j${B}++) {
                  ${O[2].includes("last_index")?`let last_index = j${B};`:""}
                  ${A.indicesSet("input_indices",B,`j${B}`)}
                  ${R}
                }`):(T.push(`${A.indicesSet("input_indices",B,C.indicesGet("output_indices",F))};`),F++);return`

        ${b.registerUniform("output_size","u32").declareVariables(A,C)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${A.type.indices};
          let output_indices = ${C.offsetToIndices("global_idx")};

          ${T.join(`
`)}
          ${O[0]}       // init ops for reduce max/min
          ${O[1]}
          ${R}
          ${O[3]}
          ${O.length===4?C.setByOffset("global_idx","value"):O.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...he(g,m)]})}},Mc=(e,r)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),Ze({axes:i,keepDims:r.keepDims,noopWithEmptyAxes:r.noopWithEmptyAxes})},Rn=(e,r,i,s)=>{let o=e.inputs,d=o.length===1?i:Mc(o,i);e.compute(Ju(r,{hint:d.cacheKey,inputDependencies:["rank"]},[o[0]],d.noopWithEmptyAxes&&d.axes.length===0?nm:s,d.axes,o[0].dataType,d.keepDims,d.noopWithEmptyAxes),{inputs:[0]})},rm=(e,r)=>{An(e.inputs),Rn(e,"ReduceLogSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},im=(e,r)=>{An(e.inputs),Rn(e,"ReduceL1",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},am=(e,r)=>{An(e.inputs),Rn(e,"ReduceL2",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},sm=(e,r)=>{An(e.inputs),Rn(e,"ReduceLogSumExp",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},om=(e,r)=>{An(e.inputs),Rn(e,"ReduceMax",r,(i,s,o)=>{let d=[];for(let u=0;u<i.rank;u++)(o.indexOf(u)>=0||o.length===0)&&d.push(i.indicesSet("input_indices",u,0));return[`${d.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},um=(e,r)=>{An(e.inputs),Rn(e,"ReduceMean",r,(i,s,o)=>{let d=1;for(let u=0;u<i.rank;u++)(o.indexOf(u)>=0||o.length===0)&&(d*=e.inputs[0].dims[u]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${d});`]})},lm=(e,r)=>{An(e.inputs),Rn(e,"ReduceMin",r,(i,s,o)=>{let d=[];for(let u=0;u<i.rank;u++)(o.indexOf(u)>=0||o.length===0)&&d.push(`input_indices[${u}] = 0;`);return[`${d.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},dm=(e,r)=>{An(e.inputs),Rn(e,"ReduceProd",r,(i,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},cm=(e,r)=>{An(e.inputs),Rn(e,"ReduceSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},fm=(e,r)=>{An(e.inputs),Rn(e,"ReduceSumSquare",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},On=(e,r,i)=>{if(r.length===0)return i;let s=1,o=1;for(let d=0;d<r.length;d++)r.indexOf(d)===-1?s*=e[d]:o*=e[d];return o<32&&s>1024},M0=(e,r)=>{On(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?um(e,r):E0(e,r)},D0=(e,r)=>{On(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?im(e,r):C0(e,r)},N0=(e,r)=>{On(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?am(e,r):T0(e,r)},L0=(e,r)=>{On(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?sm(e,r):I0(e,r)},U0=(e,r)=>{On(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?om(e,r):z0(e,r)},j0=(e,r)=>{On(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?lm(e,r):A0(e,r)},F0=(e,r)=>{On(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?dm(e,r):R0(e,r)},W0=(e,r)=>{On(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?cm(e,r):O0(e,r)},V0=(e,r)=>{On(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?fm(e,r):P0(e,r)},H0=(e,r)=>{On(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rm(e,r):B0(e,r)}}),tc,q0,G0,Dc,K2=re(()=>{Ae(),gt(),cf(),tc=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},q0=(e,r)=>{tc(e.inputs);let i=(s,o,d)=>{let u=[];for(let h=0;h<s.rank;h++)(d.indexOf(h)>=0||d.length===0)&&u.push(`input_indices[${h}] = 0;`);return[`${u.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?"<=":"<"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Ju("ArgMin",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},G0=(e,r)=>{tc(e.inputs);let i=(s,o,d)=>{let u=[];for(let h=0;h<s.rank;h++)(d.indexOf(h)>=0||d.length===0)&&u.push(`input_indices[${h}] = 0;`);return[`${u.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?">=":">"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Ju("argMax",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},Dc=e=>Ze(e)}),pm,hm,mm,gm,eo,ym,K0,ff=re(()=>{Ae(),Be(),lf(),Me(),pm=(e,r)=>{let i=e[0],s=e[1],o=e[2],d=e[3],u=e[4],h=e[5];if(u&&h)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let m=i.dims[0],g=i.dims[1],_=i.dims[2];if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(s.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(s.dims[0]!==_)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(o.dims[0]!==s.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let v=o.dims[0]/3,f=v,x=f;if(r.qkvHiddenSizes.length>0){if(r.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let O of r.qkvHiddenSizes)if(O%r.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");v=r.qkvHiddenSizes[0],f=r.qkvHiddenSizes[1],x=r.qkvHiddenSizes[2]}let S=g;if(v!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(o.dims[0]!==v+f+x)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(u){if(f!==x)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(u.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(u.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(u.dims[1]!==m)throw new Error('Input "past" second dimension must be batch_size');if(u.dims[2]!==r.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(u.dims[4]!==f/r.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');r.pastPresentShareBuffer||(b=u.dims[3])}let T=S+b,A=-1,C=0;if(d)throw new Error("Mask not supported");if(u)throw new Error("past is not supported");if(h){if(h.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(h.dims[0]!==m||h.dims[1]!==r.numHeads||h.dims[2]!==g||h.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:g,pastSequenceLength:b,kvSequenceLength:S,totalSequenceLength:T,maxSequenceLength:A,inputHiddenSize:_,hiddenSize:v,vHiddenSize:x,headSize:Math.floor(v/r.numHeads),vHeadSize:Math.floor(x/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:C,scale:r.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},hm=(e,r,i)=>{let s=pt(i),o=64,d=i/s;d<o&&(o=32);let u=Math.ceil(i/s/o),h=[{type:1,data:1/i},{type:12,data:d},{type:12,data:u}],m=vt(e.dataType,s),g=Pt(1,s),_=["type"],v=f=>{let x=be("x",e.dataType,e.dims,s),S=Pt(e.dataType),b=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${o}>;
  var<workgroup> thread_sum: array<f32, ${o}>;
  ${f.registerUniforms(b).declareVariables(x)}
  ${f.mainStart([o,1,1])}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${o}) * uniforms.d_comp + local_offset;

    var thread_max_vector = ${g}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      thread_max_vector = max(${g}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(s){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${s}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${o}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${g}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
      sum_vector += exp(${g}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(s){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${s}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${o}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        x[offset + i] = ${x.type.value}(${S}(uniforms.d_inv));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < uniforms.d_comp; i++) {
        var f32input = ${g}(x[offset + i]);
        x[offset + i] = ${x.type.value}(exp(f32input - max_value) / sum);
      }
    }
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${o};${m};${s}`,inputDependencies:_},getShaderSource:v,getRunData:()=>({outputs:[],dispatchGroup:{x:r},programUniforms:h})}},mm=(e,r,i,s,o,d,u,h)=>{let m=h+d.kvSequenceLength,g=[d.batchSize,d.numHeads,d.sequenceLength,m],_=d.kvNumHeads===void 0&&e>1&&s,v=_?[d.batchSize,d.numHeads,m,d.headSize]:void 0,f=u.scale===0?1/Math.sqrt(d.headSize):u.scale,x=pt(d.headSize),S=d.headSize/x,b=12,T={x:Math.ceil(m/b),y:Math.ceil(d.sequenceLength/b),z:d.batchSize*d.numHeads},A=[{type:12,data:d.sequenceLength},{type:12,data:S},{type:12,data:m},{type:12,data:d.numHeads},{type:1,data:f},{type:12,data:h},{type:12,data:d.kvSequenceLength}],C=_&&s&&Q.size(s.dims)>0,O=["type","type"];C&&O.push("type"),o&&O.push("type");let R=[{dims:g,dataType:r.dataType,gpuDataType:0}];_&&R.push({dims:v,dataType:r.dataType,gpuDataType:0});let B=F=>{let U=Z("q",r.dataType,r.dims,x),Y=Z("key",i.dataType,i.dims,x),ae=[U,Y];if(C){let Te=Z("past_key",s.dataType,s.dims,x);ae.push(Te)}o&&ae.push(Z("attention_bias",o.dataType,o.dims));let oe=be("output",r.dataType,g),me=[oe];_&&me.push(be("present_key",r.dataType,v,x));let ge=Pt(1,x),le=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${U.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${U.type.storage}, ${b*b}>;
  ${F.registerUniforms(le).declareVariables(...ae,...me)}
  ${F.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let qOffset = uniforms.M * uniforms.K * headIdx + m * uniforms.K;
    ${C&&_?`
    let kOffset = uniforms.kv_sequence_length * uniforms.K * headIdx;
    let pastKeyOffset = uniforms.past_sequence_length * uniforms.K * headIdx;`:`
    let kOffset = uniforms.N * uniforms.K * headIdx + n * uniforms.K;`}
    ${_?"let presentKeyOffset = headIdx * uniforms.N * uniforms.K;":""}
    var value = ${ge}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&_?`
              if (n + local_id.y < uniforms.past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else {
                tileK[idx] =
                         key[kOffset + (n + local_id.y - uniforms.past_sequence_length) * uniforms.K + w + local_id.x];
              }`:"tileK[idx] = key[kOffset + local_id.y * uniforms.K + w + local_id.x];"}
      ${_?"present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];":""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
        value += ${ge}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${oe.type.value} (sum * uniforms.alpha) + ${o?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${o!==void 0};${s!==void 0};${e}`,inputDependencies:O},getRunData:()=>({outputs:R,dispatchGroup:T,programUniforms:A}),getShaderSource:B}},gm=(e,r,i,s,o,d)=>{let u=d+o.kvSequenceLength,h=o.nReps?o.nReps:1,m=o.vHiddenSize*h,g=o.kvNumHeads==null&&e>1&&s,_=g?[o.batchSize,o.numHeads,u,o.headSize]:void 0,v=[o.batchSize,o.sequenceLength,m],f=12,x={x:Math.ceil(o.vHeadSize/f),y:Math.ceil(o.sequenceLength/f),z:o.batchSize*o.numHeads},S=[{type:12,data:o.sequenceLength},{type:12,data:u},{type:12,data:o.vHeadSize},{type:12,data:o.numHeads},{type:12,data:m},{type:12,data:d},{type:12,data:o.kvSequenceLength}],b=g&&s&&Q.size(s.dims)>0,T=["type","type"];b&&T.push("type");let A=[{dims:v,dataType:r.dataType,gpuDataType:0}];g&&A.push({dims:_,dataType:r.dataType,gpuDataType:0});let C=O=>{let R=Z("probs",r.dataType,r.dims),B=Z("v",i.dataType,i.dims),F=[R,B];b&&F.push(Z("past_value",s.dataType,s.dims));let U=[be("output",r.dataType,v)];g&&U.push(be("present_value",r.dataType,_));let Y=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${f}u;
  var<workgroup> tileQ: array<${R.type.value}, ${f*f}>;
  var<workgroup> tileK: array<${R.type.value}, ${f*f}>;
  ${O.registerUniforms(Y).declareVariables(...F,...U)}
  ${O.mainStart([f,f,1])}
   let headIdx = workgroup_id.z;
   let m = global_id.y;
   let n = global_id.x;

   let offsetA = headIdx * (uniforms.M * uniforms.K) + m * uniforms.K;
   ${b&&g?`
    let pastValueOffset = headIdx * uniforms.N * uniforms.past_sequence_length + n;
    let vOffset = headIdx * uniforms.N * uniforms.kv_sequence_length + n;
      `:`
   let offsetB = headIdx * uniforms.N * uniforms.K + n;
            `}
    ${g?"let presentValueOffset = headIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${R.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&g?`
        if (w + local_id.y < uniforms.past_sequence_length) {
          tileK[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else {
          tileK[idx] = v[vOffset + (w + local_id.y - uniforms.past_sequence_length) * uniforms.N];
        }
      `:`
        tileK[idx] = v[offsetB + (w + local_id.y) * uniforms.N];
      `}
        ${g?"present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileK[idx];":""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let currentBatchHeadNumber = workgroup_id.z % uniforms.num_heads;
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + currentBatchHeadNumber * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${s!==void 0};${e}`,inputDependencies:T},getRunData:()=>({outputs:A,dispatchGroup:x,programUniforms:S}),getShaderSource:C}},eo=(e,r,i,s,o,d,u,h,m,g,_)=>{let v=Math.min(e.outputCount,1+(u?1:0)+(h?1:0)),f=g.kvNumHeads!==void 0||v>1?g.pastSequenceLength:0,x=f+g.kvSequenceLength,S=m&&Q.size(m.dims)>0?m:void 0,b=[r,i];g.kvNumHeads===void 0&&v>1&&u&&Q.size(u.dims)>0&&b.push(u),S&&b.push(S);let T=e.compute(mm(v,r,i,u,S,g,_,f),{inputs:b,outputs:g.kvNumHeads===void 0&&v>1?[-1,1]:[-1]})[0];e.compute(hm(T,g.batchSize*g.numHeads*g.sequenceLength,x),{inputs:[T],outputs:[]});let A=[T,s];g.kvNumHeads===void 0&&v>1&&h&&Q.size(h.dims)>0&&A.push(h),e.compute(gm(v,T,s,h,g,f),{inputs:A,outputs:g.kvNumHeads===void 0&&v>1?[0,2]:[0]})},ym=(e,r)=>{let i=[r.batchSize,r.numHeads,r.sequenceLength,r.headSize],s=r.sequenceLength,o=r.inputHiddenSize,d=r.headSize,u=12,h={x:Math.ceil(r.headSize/u),y:Math.ceil(r.sequenceLength/u),z:r.batchSize*r.numHeads},m=[e.inputs[0],e.inputs[1],e.inputs[2]],g=[{type:12,data:s},{type:12,data:o},{type:12,data:d},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:r.hiddenSize},{type:12,data:r.hiddenSize+r.hiddenSize+r.vHiddenSize}],_=v=>{let f=be("output_q",m[0].dataType,i),x=be("output_k",m[0].dataType,i),S=be("output_v",m[0].dataType,i),b=Z("input",m[0].dataType,m[0].dims),T=Z("weight",m[1].dataType,m[1].dims),A=Z("bias",m[2].dataType,m[2].dims),C=b.type.storage,O=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${u}u;
  var<workgroup> tileInput: array<${C}, ${u*u}>;
  var<workgroup> tileWeightQ: array<${C}, ${u*u}>;
  var<workgroup> tileWeightK: array<${C}, ${u*u}>;
  var<workgroup> tileWeightV: array<${C}, ${u*u}>;
  ${v.registerUniforms(O).declareVariables(b,T,A,f,x,S)}
  ${v.mainStart([u,u,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${C}(0);
    var valueK = ${C}(0);
    var valueV = ${C}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:h,programUniforms:g}),getShaderSource:_},{inputs:m,outputs:[-1,-1,-1]})},K0=(e,r)=>{let i=pm(e.inputs,r),[s,o,d]=ym(e,i);return eo(e,s,o,d,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i,r)}}),wm,vm,_m,Q0,Q2=re(()=>{Mn(),Ae(),Be(),gt(),Me(),wm=(e,r)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(s,o,d)=>{let u=o.length;if(u!==s.length)throw new Error(`${d}: num dimensions != ${u}`);o.forEach((h,m)=>{if(h!==s[m])throw new Error(`${d}: dim[${m}] do not match`)})};if(e[0].dims.length>1){let s=r.format==="NHWC"?r.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,r.spatial?2:void 0);i(e[1].dims,s,"Invalid input scale"),i(e[2].dims,s,"Invalid input B"),i(e[3].dims,s,"Invalid input mean"),i(e[4].dims,s,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},vm=(e,r)=>{let{epsilon:i,spatial:s,format:o}=r,d=e[0].dims,u=s?pt(d[d.length-1]):1,h=o==="NHWC"&&d.length>1?u:1,m=Q.size(d)/u,g=s,_=g?d.length:d,v=Z("x",e[0].dataType,e[0].dims,u),f=Z("scale",e[1].dataType,e[1].dims,h),x=Z("bias",e[2].dataType,e[2].dims,h),S=Z("inputMean",e[3].dataType,e[3].dims,h),b=Z("inputVar",e[4].dataType,e[4].dims,h),T=be("y",e[0].dataType,_,u),A=()=>{let O="";if(s)O=`let cOffset = ${d.length===1?"0u":o==="NHWC"?`outputIndices[${d.length-1}] / ${u}`:"outputIndices[1]"};`;else if(o==="NCHW")O=`
            ${T.indicesSet("outputIndices","0","0")}
            let cOffset = ${T.indicesToOffset("outputIndices")};`;else{O=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${d.length-1}];`;for(let R=1;R<f.rank;R++)O+=`cIndices[${R}] = outputIndices[${R}];`;O+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return O},C=O=>`
  const epsilon = ${i};
  ${O.registerUniform("outputSize","u32").declareVariables(v,f,x,S,b,T)}
  ${O.mainStart()}
  ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${T.offsetToIndices(`global_idx * ${u}`)};
    ${A()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${x.getByOffset("cOffset")};
    let inputMean = ${S.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${v.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${T.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${r.epsilon}_${r.format}_${s}_${u}`,inputDependencies:g?["rank","type","type","type","type"]:void 0},getShaderSource:C,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g?[{type:12,data:m},...he(d)]:[{type:12,data:m}]})}},_m=e=>Ze(e),Q0=(e,r)=>{let{inputs:i,outputCount:s}=e,o=_m({...r,outputCount:s});if(Je.webgpu.validateInputContent&&wm(i,o),r.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(vm(i,o))}}),$m,xm,Y0,Y2=re(()=>{Be(),Me(),$m=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},xm=e=>{let r=e[0].dims,i=e[0].dims[2],s=Q.size(r)/4,o=e[0].dataType,d=Z("input",o,r,4),u=Z("bias",o,[i],4),h=Z("residual",o,r,4),m=be("output",o,r,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:g=>`
  const channels = ${i}u / 4;
  ${g.declareVariables(d,u,h,m)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let value = ${d.getByOffset("global_idx")}
      + ${u.getByOffset("global_idx % channels")} + ${h.getByOffset("global_idx")};
    ${m.setByOffset("global_idx","value")}
  }`}},Y0=e=>{$m(e.inputs),e.compute(xm(e.inputs))}}),bm,He,Z0,X0,J0,ew,tw,nw,rw,iw,aw,Sm,sw,ow,uw,lw,Zs,dw,qu,cw,fw,pw,hw,mw,gw,yw,ww,vw,_w,$w,xw,bw,Sw,kw,Ew,nc,Cw,Nc,Lc,Tw,Iw,zw,km,Em,Aw,pf=re(()=>{Ae(),Be(),gt(),Me(),bm=(e,r,i,s,o,d,u)=>{let h=Math.ceil(r/4),m="";typeof o=="string"?m=`${o}(a)`:m=o("a");let g=Z("inputData",i,[h],4),_=be("outputData",s,[h],4),v=[{name:"vec_size",type:"u32"}];return u&&v.push(...u),`
      ${e.registerUniforms(v).declareVariables(g,_)}

  ${d??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${g.getByOffset("global_idx")};
    ${_.setByOffset("global_idx",m)}
  }`},He=(e,r,i,s,o,d=e.dataType,u,h)=>{let m=[{type:12,data:Math.ceil(Q.size(e.dims)/4)}];return u&&m.push(...u),{name:r,shaderCache:{hint:o,inputDependencies:["type"]},getShaderSource:g=>bm(g,Q.size(e.dims),e.dataType,d,i,s,h),getRunData:g=>({outputs:[{dims:e.dims,dataType:d}],dispatchGroup:{x:Math.ceil(Q.size(g[0].dims)/64/4)},programUniforms:m})}},Z0=e=>{e.compute(He(e.inputs[0],"Abs","abs"))},X0=e=>{e.compute(He(e.inputs[0],"Acos","acos"))},J0=e=>{e.compute(He(e.inputs[0],"Acosh","acosh"))},ew=e=>{e.compute(He(e.inputs[0],"Asin","asin"))},tw=e=>{e.compute(He(e.inputs[0],"Asinh","asinh"))},nw=e=>{e.compute(He(e.inputs[0],"Atan","atan"))},rw=e=>{e.compute(He(e.inputs[0],"Atanh","atanh"))},iw=e=>Ze(e),aw=(e,r)=>{let i;switch(r.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${r.to}`)}e.compute(He(e.inputs[0],"Cast",i,void 0,r.cacheKey,r.to))},Sm=e=>{let r,i,s=e.length>=2&&e[1].data!==0,o=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:r=s?e[1].getFloat32Array()[0]:-34028234663852886e22,i=o?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:r=s?e[1].getUint16Array()[0]:64511,i=o?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ze({min:r,max:i})},sw=(e,r)=>{let i=r||Sm(e.inputs),s=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Clip",o=>`clamp(${o}, vec4<${s}>(uniforms.min), vec4<${s}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:s},{name:"max",type:s}]),{inputs:[0]})},ow=e=>{e.compute(He(e.inputs[0],"Ceil","ceil"))},uw=e=>{e.compute(He(e.inputs[0],"Cos","cos"))},lw=e=>{e.compute(He(e.inputs[0],"Cosh","cosh"))},Zs=e=>Ze(e),dw=(e,r)=>{let i=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Elu",s=>`elu_vf32(${s})`,`
  const elu_alpha_ = ${i}(${r.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,r.cacheKey))},qu=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,cw=e=>{let r=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,qu(r)))},fw=e=>{e.compute(He(e.inputs[0],"Exp","exp"))},pw=e=>{e.compute(He(e.inputs[0],"Floor","floor"))},hw=e=>{let r=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,qu(r)))},mw=(e,r)=>{let i=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"LeakyRelu",s=>`select(leaky_relu_alpha_ * ${s}, ${s}, ${s} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${r.alpha});`,r.cacheKey))},gw=e=>{e.compute(He(e.inputs[0],"Not",r=>`!${r}`))},yw=e=>{e.compute(He(e.inputs[0],"Neg",r=>`-${r}`))},ww=e=>{e.compute(He(e.inputs[0],"Reciprocal",r=>`1.0/${r}`))},vw=e=>{let r=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Relu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > vec4<${r}>(0.0))`))},_w=e=>{e.compute(He(e.inputs[0],"Sigmoid",r=>`(1.0 / (1.0 + exp(-${r})))`))},$w=e=>Ze(e),xw=(e,r)=>{let i=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"HardSigmoid",s=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${r.alpha} * ${s} + vec4<${i}>(${r.beta})))`,void 0,r.cacheKey))},bw=e=>{e.compute(He(e.inputs[0],"Sin","sin"))},Sw=e=>{e.compute(He(e.inputs[0],"Sinh","sinh"))},kw=e=>{e.compute(He(e.inputs[0],"Sqrt","sqrt"))},Ew=e=>{e.compute(He(e.inputs[0],"Tan","tan"))},nc=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Cw=e=>{e.compute(He(e.inputs[0],"Tanh",nc))},Nc=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${nc("v")};
}
`,Lc=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Tw=e=>{let r=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"FastGelu",Lc,Nc(r),void 0,e.inputs[0].dataType))},Iw=(e,r)=>{let i=Pt(e.inputs[0].dataType);return e.compute(He(e.inputs[0],"ThresholdedRelu",s=>`select(vec4<${i}>(0.0), ${s}, ${s} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${r.alpha});`,r.cacheKey)),0},zw=e=>{e.compute(He(e.inputs[0],"Log","log"))},km=(e,r)=>`
const alpha = vec4<${e}>(${r});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Em=e=>`quick_gelu_impl(${e})`,Aw=(e,r)=>{let i=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"QuickGelu",Em,km(i,r.alpha),r.cacheKey,e.inputs[0].dataType))}}),Cm,Tm,Rw,Z2=re(()=>{Be(),Me(),pf(),Cm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Tm=e=>{let r=e[0].dims.slice();r[2]=r[2]/2;let i=Z("input",e[0].dataType,e[0].dims,4),s=Z("bias",e[0].dataType,[e[0].dims[2]],4),o=be("output",e[0].dataType,r,4),d=Q.size(r)/4,u=vt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)}}),getShaderSource:h=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${h.declareVariables(i,s,o)}

  ${qu(u)}

  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes(d)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${o.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Rw=e=>{Cm(e.inputs),e.compute(Tm(e.inputs))}}),Im,zm,Pn,Ow,Pw,Bw,Mw,Dw,Nw,Lw,Uw,jw,Fw,X2=re(()=>{Ae(),Be(),Me(),Im=(e,r,i,s,o,d,u,h,m,g,_,v)=>{let f,x;typeof h=="string"?f=x=(C,O)=>`${h}((${C}),(${O}))`:typeof h=="function"?f=x=h:(f=h.scalar,x=h.vector);let S=be("outputData",_,s.length,4),b=Z("aData",m,r.length,4),T=Z("bData",g,i.length,4),A;if(o)if(d){let C=Q.size(r)===1,O=Q.size(i)===1,R=r.length>0&&r[r.length-1]%4===0,B=i.length>0&&i[i.length-1]%4===0;C||O?A=S.setByOffset("global_idx",x(C?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),O?`${T.type.value}(${T.getByOffset("0")}.x)`:T.getByOffset("global_idx"))):A=`
            let outputIndices = ${S.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",S)};
            let offsetB = ${T.broadcastedIndicesToOffset("outputIndices",S)};
            ${S.setByOffset("global_idx",x(u||R?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,u||B?T.getByOffset("offsetB / 4u"):`${T.type.value}(${T.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else A=S.setByOffset("global_idx",x(b.getByOffset("global_idx"),T.getByOffset("global_idx")));else{if(!d)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let C=(O,R,B="")=>{let F=`aData[indexA${R}][componentA${R}]`,U=`bData[indexB${R}][componentB${R}]`;return`
            let outputIndices${R} = ${S.offsetToIndices(`global_idx * 4u + ${R}u`)};
            let offsetA${R} = ${b.broadcastedIndicesToOffset(`outputIndices${R}`,S)};
            let offsetB${R} = ${T.broadcastedIndicesToOffset(`outputIndices${R}`,S)};
            let indexA${R} = offsetA${R} / 4u;
            let indexB${R} = offsetB${R} / 4u;
            let componentA${R} = offsetA${R} % 4u;
            let componentB${R} = offsetB${R} % 4u;
            ${O}[${R}] = ${B}(${f(F,U)});
          `};_===9?A=`
            var data = vec4<u32>(0);
            ${C("data",0,"u32")}
            ${C("data",1,"u32")}
            ${C("data",2,"u32")}
            ${C("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:A=`
            ${C("outputData[global_idx]",0)}
            ${C("outputData[global_idx]",1)}
            ${C("outputData[global_idx]",2)}
            ${C("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(b,T,S)}

        ${v??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${A}
      }`},zm=(e,r,i,s,o,d,u=i.dataType)=>{let h=!Q.areEqual(i.dims,s.dims),m=i.dims,g=Q.size(i.dims),_=!1,v=!1,f=[h];if(h){let x=Aa.calcShape(i.dims,s.dims,!1);if(!x)throw new Error("Can't perform binary op on the given tensors");m=x,g=Q.size(m);let S=Q.size(i.dims)===1,b=Q.size(s.dims)===1,T=i.dims.length>0&&i.dims[i.dims.length-1]%4===0,A=s.dims.length>0&&s.dims[s.dims.length-1]%4===0;f.push(S),f.push(b),f.push(T),f.push(A);let C=1;for(let O=1;O<m.length;O++){let R=i.dims[i.dims.length-O]??1,B=s.dims[s.dims.length-O]??1;if(R===B)C*=R;else break}C%4===0?(v=!0,_=!0):(S||b||T||A)&&(_=!0)}else _=!0;return f.push(_),{name:e,shaderCache:{hint:r+f.map(x=>x.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:x=>Im(x,i.dims,s.dims,m,_,h,v,o,i.dataType,s.dataType,u,d),getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(Q.size(m)/4)},...he(i.dims,s.dims,m)]})}},Pn=(e,r,i,s,o,d)=>{e.compute(zm(r,o??"",e.inputs[0],e.inputs[1],i,s,d))},Ow=e=>{Pn(e,"Add",(r,i)=>`${r}+${i}`)},Pw=e=>{Pn(e,"Div",(r,i)=>`${r}/${i}`)},Bw=e=>{Pn(e,"Equal",{scalar:(r,i)=>`u32(${r}==${i})`,vector:(r,i)=>`vec4<u32>(${r}==${i})`},void 0,void 0,9)},Mw=e=>{Pn(e,"Mul",(r,i)=>`${r}*${i}`)},Dw=e=>{let r=Z("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Pn(e,"Pow",{scalar:(i,s)=>`pow_custom(${i},${s})`,vector:(i,s)=>`pow_vector_custom(${i},${s})`},`
    fn pow_custom(a : ${r}, b : ${r}) -> ${r} {
      if (b == ${r}(0.0)) {
        return ${r}(1.0);
      } else if (a < ${r}(0.0) && f32(b) != floor(f32(b))) {
        return ${r}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${r}(1.0), round(f32(abs(b) % ${r}(2.0))) != 1.0) * ${r}(${r==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${r}>, b : vec4<${r}>) -> vec4<${r}> {
      // TODO: implement vectorized pow
      return vec4<${r}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Nw=e=>{Pn(e,"Sub",(r,i)=>`${r}-${i}`)},Lw=e=>{Pn(e,"Greater",{scalar:(r,i)=>`u32(${r}>${i})`,vector:(r,i)=>`vec4<u32>(${r}>${i})`},void 0,void 0,9)},Uw=e=>{Pn(e,"Less",{scalar:(r,i)=>`u32(${r}<${i})`,vector:(r,i)=>`vec4<u32>(${r}<${i})`},void 0,void 0,9)},jw=e=>{Pn(e,"GreaterOrEqual",{scalar:(r,i)=>`u32(${r}>=${i})`,vector:(r,i)=>`vec4<u32>(${r}>=${i})`},void 0,void 0,9)},Fw=e=>{Pn(e,"LessOrEqual",{scalar:(r,i)=>`u32(${r}<=${i})`,vector:(r,i)=>`vec4<u32>(${r}<=${i})`},void 0,void 0,9)}}),Am,Rm,Om,Pm,Ww,Vw,J2=re(()=>{Ae(),Be(),gt(),Me(),Am=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,s=e[i],o=s.dataType,d=s.dims.length;e.forEach((u,h)=>{if(h!==i){if(u.dataType!==o)throw new Error("input tensors should be one type");if(u.dims.length!==d)throw new Error("input tensors should have the same shape");u.dims.forEach((m,g)=>{if(g!==r&&m!==s.dims[g])throw new Error("non concat dimensions must match")})}})},Rm=(e,r)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${r});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Om=(e,r)=>{let i=e.length,s=[];for(let o=0;o<i;++o){let d=r.setByOffset("global_idx",e[o].getByIndices("indices"));i===1?s.push(d):o===0?s.push(`if (inputIndex == ${o}u) { ${d} }`):o===i-1?s.push(`else { ${d} }`):s.push(`else if (inputIndex == ${o}) { ${d} }`)}return s.join(`
`)},Pm=(e,r,i,s)=>{let o=Q.size(i),d=new Array(e.length),u=new Array(e.length),h=0,m=[],g=[],_=[{type:12,data:o}];for(let b=0;b<e.length;++b)h+=e[b].dims[r],d[b]=h,g.push(e[b].dims.length),u[b]=Z(`input${b}`,s,g[b]),m.push("rank"),_.push({type:12,data:d[b]});for(let b=0;b<e.length;++b)_.push(...he(e[b].dims));_.push(...he(i));let v=be("output",s,i.length),f=v.indicesGet("indices",r),x=Array.from(Array(d.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),S=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let T=0;T<e.length;T++)b.registerUniform(`sizeInConcatAxis${T}`,"u32");return b.declareVariables(...u,v)})()}

  ${Rm(d.length,x)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${v.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${d.length}u>(${x});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Om(u,v)}
  }`;return{name:"Concat",shaderCache:{hint:`${r}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:_}),getShaderSource:S}},Ww=(e,r)=>{let i=e.inputs,s=i[0].dims,o=Q.normalizeAxis(r.axis,s.length);Am(i,o);let d=s.slice();d[o]=i.reduce((h,m)=>h+(m.dims.length>o?m.dims[o]:0),0);let u=i.filter(h=>Q.size(h.dims)>0);e.compute(Pm(u,o,d,i[0].dataType),{inputs:u})},Vw=e=>Ze({axis:e.axis})}),qr,Gr,Kr,hf,Yr=re(()=>{Ae(),Be(),qr=(e,r,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${r}(0.0));`;case"Sigmoid":return`value = (${r}(1.0) / (${r}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${r}(${i}(uniforms.clip_min)), ${r}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${r}(0.0), min(${r}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${r}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Gr=(e,r)=>{e.activation==="Clip"?r.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?r.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&r.push({type:1,data:e.alpha})},Kr=(e,r)=>{e.activation==="Clip"?r.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?r.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&r.push({name:"alpha",type:"f32"})},hf=e=>{let r=(e==null?void 0:e.activation)||"";if(r==="HardSigmoid"){let[i,s]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:r,alpha:i,beta:s}}else if(r==="Clip"){let[i,s]=(e==null?void 0:e.activation_params)||[$0,x0];return{activation:r,clipMax:s,clipMin:i}}else if(r==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:r,alpha:i}}return{activation:r}}}),Bt,mf,al=re(()=>{Bt=(e,r)=>{switch(e){case 1:return r;case 2:return`vec2<${r}>`;case 3:return`vec3<${r}>`;case 4:return`vec4<${r}>`;default:throw new Error(`${e}-component is not supported.`)}},mf=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),gf,Hw=re(()=>{gf=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Bm,Mm,el,rc,Dm,tl,Nm,yf,sl=re(()=>{Ae(),Be(),Me(),Yr(),al(),Bm=(e,r)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${r?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${r?", batchIndices":""});
        `,Mm=(e,r)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${r===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${r===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${r===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,el=(e,r,i="f32",s,o=!1,d=32,u=!1,h=32)=>{let m=r[1]*e[1],g=r[0]*e[0],_=o?m:d,v=o?d:m,f=_/r[0],x=d/r[1];if(!((o&&f===4&&e[1]===4||!o&&(f===3||f===4))&&_%r[0]===0&&d%r[1]===0&&e[0]===4))throw new Error(`If transposeA ${o} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${_} must be divisible by workgroupSize[0]${r[0]}. tileInner ${d} must be divisible by workgroupSize[1] ${r[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${i}>, ${_/f}>, ${v}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${g/e[0]}>, ${d}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${d};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${u?"0":"i32(globalId.z)"};
  ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${m};

  let num_tiles = ${u?`${Math.ceil(h/d)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${u?`i32(globalId.z) * ${h}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${x};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Bm(o,s)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${s?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Mm(o,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},rc=(e,r)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${r?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${r?", batchIndices":""});
            `,Dm=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",tl=(e,r,i="f32",s,o=!1,d=32,u=!1,h=32,m=!1)=>{let g=e[1]*r[1],_=e[0]*r[0],v=o?g:d,f=o?d:g;if(!(f%r[1]===0&&v%r[0]===0&&d%r[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${r[1]}, tileAWidth ${v} must be divisible by workgroupSize[0]${r[0]}, tileInner ${d} must be divisible by workgroupSize[1]${r[1]}`);let x=f/r[1],S=v/r[0],b=d/r[1],T=m?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${g};
    let globalColStart = i32(workgroupId.x) * ${_};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${r[1]}) {
        for (var inputCol = localCol; inputCol < ${v}; inputCol = inputCol + ${r[0]}) {
          ${rc(o,s)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${d}; inputRow = inputRow + ${r[1]}) {
            for (var inputCol = localCol; inputCol < ${_}; inputCol = inputCol + ${r[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${s?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${r[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${o?`mm_Asub[k][localRow + innerRow * ${r[1]}];`:`mm_Asub[localRow + innerRow * ${r[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${r[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${r[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${g};

let tileRowA = i32(localId.y) * ${x};
let tileColA = i32(localId.x) * ${S};
let tileRowB = i32(localId.y) * ${b};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${x}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${S}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${rc(o,s)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${s?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Dm(o)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${v}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${_}>, ${d}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${d};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${u?"0":"i32(globalId.z)"};
    ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${u?`${Math.ceil(h/d)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${u?`i32(globalId.z) * ${h}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${T}
  }
`},Nm=(e,r,i,s,o,d=!1)=>{let[u,h,m]=o,[g,_,v,f]=s,x=Js(u,m),S=Js(h,m),b=vt(s[0].type.tensor),T=()=>{let C=_.rank,O=g.rank,R=`var aIndices: ${_.type.indices};`;for(let B=C-2-1,F=O-1;B>=0;B--,F--)R+=`
aIndices[${B}] = ${O>1?`batchIndices[${F}]`:"batchIndices"};`;return x.forEach(B=>{R+=`
aIndices[${B}] = 0;`}),R+=`
aIndices[${C-2}] = u32(row);
                   aIndices[${C-1}] = u32(colIn);`,R},A=()=>{let C=v.rank,O=g.rank,R=`var bIndices: ${v.type.indices};`;for(let B=C-2-1,F=O-1;B>=0;B--,F--)R+=`
bIndices[${B}] = ${O>1?`batchIndices[${F}]`:"batchIndices"};`;return S.forEach(B=>{R+=`
bIndices[${B}] = 0;`}),R+=`
bIndices[${C-2}] = u32(row);
                   bIndices[${C-1}] = u32(colIn);`,R};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${g.type.indices}) -> ${Bt(e,b)} {
      var value = ${Bt(e,b)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${T()}
        value = ${_.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${g.type.indices}) -> ${Bt(e,b)} {
      var value = ${Bt(e,b)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${A()}
        value = ${v.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Bt(e,b)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${r?`value = value + ${d?"bias[colIn]":`${Bt(e,b)}(bias[row])`};`:""}
        ${i}
        ${f.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},yf=(e,r,i,s,o=!1,d)=>{let u=e[0].dims,h=e[1].dims,m=u.slice(0,-2),g=h.slice(0,-2),_=s?s.slice(0,-2):i.slice(0,-2),v=Q.size(_),f=u[u.length-2],x=u[u.length-1],S=h[h.length-1],b=x%4===0&&S%4===0,T=f<=8?[4,1,1]:[4,4,1],A=[8,8,1],C=[Math.ceil(S/A[0]/T[0]),Math.ceil(f/A[1]/T[1]),Math.ceil(v/A[2]/T[2])],O=b?4:1,R=[...m,f,x/O],B=R.length,F=[...g,x,S/O],U=F.length,Y=[v,f,S/O],ae=[{type:6,data:f},{type:6,data:S},{type:6,data:x}];Gr(r,ae),ae.push(...he(_,R,F));let oe=["rank","rank"],me=e.length>2;me&&(ae.push(...he(e[2].dims)),oe.push("rank")),ae.push(...he(Y));let ge=le=>{let Te=_.length,Oe=df("batchDims",e[0].dataType,Te,1),ve=vt(e[0].dataType),Se=Z("a",e[0].dataType,B,O),q=Z("b",e[1].dataType,U,O),J=be("result",e[0].dataType,Y.length,O),G=[Se,q];if(me){let xe=o?O:1;G.push(Z("bias",e[2].dataType,e[2].dims.length,xe))}let z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Kr(r,z);let N=vt(J.type.tensor),ne=qr(r,J.type.value,N),ce=Nm(O,me,ne,[Oe,Se,q,J],[m,g,_],o);return`
  ${le.registerUniforms(z).registerInternalVariables(Oe).declareVariables(...G,J)}
  ${ce}
  ${b?el(T,A,ve,Oe):tl(T,A,ve,Oe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${T};${r.activation};${b};${o}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:C[0],y:C[1],z:C[2]},programUniforms:ae}),getShaderSource:ge}}}),Lm,qw,e_=re(()=>{Ae(),Yn(),Me(),Yr(),al(),Hw(),sl(),Lm=(e,r,i,s,o=!1,d,u=4,h=4,m=4,g="f32")=>{let _=ae=>{switch(ae){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${g}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${ae} is not supported.`)}},v=ae=>{switch(ae){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${ae} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,x=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,S=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",T=e?"row":"col",A=e?"col":"row",C=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${T} / outWidth;
    let outCol = ${T} % outWidth;

    let WRow = ${A} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${A} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${A} % inChannels;
    var resData = ${Bt(u,g)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${S} && xCol >= 0 && xCol < ${b}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${_(u)}
    }
    return resData;`,O=e?r&&s?`
    let col = colIn * ${u};
    ${C}`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${C}
    }
    return ${Bt(u,g)}(0.0);`:s&&i?`
    let col = colIn * ${u};
    ${C}`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${C}
    }
    return ${Bt(u,g)}(0.0);`,R=`${v(h)}`,B=Bt(m,g),F=Bt(e?u:h,g),U=Bt(e?h:u,g),Y=qr(d,B,g);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${F} {
      ${e?O:R}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${U} {
      ${e?R:O}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${B}) {
      let col = colIn * ${m};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${x}
      ${mf(o)}
      ${Y}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},qw=(e,r,i,s,o,d,u,h,m)=>{let g=r.format==="NHWC",_=g?e[0].dims[3]:e[0].dims[1],v=i[0],f=g?i[2]:i[3],x=g?i[1]:i[2],S=g?i[3]:i[1],b=g&&(_%4===0||_%3===0)&&S%4===0,T=g?S:f*x,A=g?f*x:S,C=[8,8,1],O=s<=8?[4,1,1]:[4,4,1],R=[Math.ceil(T/C[0]/O[0]),Math.ceil(A/C[1]/O[1]),Math.ceil(v/C[2]/O[2])];Ye("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${R}`);let B=b?g&&_%4!==0?3:4:1,F=C[1]*O[1],U=C[0]*O[0],Y=Math.max(C[0]*B,C[1]),ae=s%F===0,oe=o%U===0,me=d%Y===0,ge=b?[B,4,4]:[1,1,1],le=[{type:6,data:s},{type:6,data:o},{type:6,data:d},{type:6,data:[r.pads[0],r.pads[1]]},{type:6,data:r.strides},{type:6,data:r.dilations}];Gr(r,le),le.push(...he(e[0].dims,e[1].dims));let Te=["rank","rank"];u&&(le.push(...he(e[2].dims)),Te.push("rank")),le.push(...he(i));let Oe=ve=>{let Se=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Kr(r,Se);let q=b?4:1,J=vt(e[0].dataType),G=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${J}>`:J}) {
        result[flatIndex] = ${b?`vec4<${J}>`:J}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${J}>`:J}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,z=Z("x",e[0].dataType,e[0].dims.length,B===3?1:B),N=Z("w",e[1].dataType,e[1].dims.length,q),ne=[z,N],ce=be("result",e[0].dataType,i.length,q);if(u){let xe=Z("bias",e[2].dataType,e[2].dims.length,q);ne.push(xe),G+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${J}>`:J} {
          return bias[coords.${g?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${gf("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ve.registerUniforms(Se).declareVariables(...ne,ce)}
        ${G}
        ${Lm(g,ae,oe,me,u,r,ge[0],ge[1],ge[2],J)}
        ${b?el(O,C,J,void 0,!g,Y):tl(O,C,J,void 0,!g,Y,!1,void 0,h)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${r.cacheKey};${B};${b};${ae};${oe};${me};${F};${U};${Y}`,inputDependencies:Te},getRunData:()=>({outputs:[{dims:m?m(i):i,dataType:e[0].dataType}],dispatchGroup:{x:R[0],y:R[1],z:R[2]},programUniforms:le}),getShaderSource:Oe}}}),Um,ic,Us,jm,ac,Fm,Gw,Kw,t_=re(()=>{Ae(),Yn(),Be(),Me(),Yr(),al(),Um=e=>{let r=1;for(let i=0;i<e.length;i++)r*=e[i];return r},ic=e=>typeof e=="number"?[e,e,e]:e,Us=(e,r)=>r<=1?e:e+(e-1)*(r-1),jm=(e,r,i,s=1)=>{let o=Us(r,s);return Math.floor((e[0]*(i-1)-i+o)/2)},ac=(e,r,i,s,o)=>{o==null&&(o=jm(e,r[0],s[0]));let d=[0,0,0,i];for(let u=0;u<3;u++)e[u]+2*o>=r[u]&&(d[u]=Math.trunc((e[u]-r[u]+2*o)/s[u]+1));return d},Fm=(e,r,i,s,o,d,u,h,m,g)=>{let _,v,f,x;if(e==="VALID"&&(e=0),typeof e=="number"){_={top:e,bottom:e,left:e,right:e,front:e,back:e};let S=ac([r,i,s,1],[h,m,g],1,[o,d,u],e);v=S[0],f=S[1],x=S[2]}else if(Array.isArray(e)){if(!e.every((b,T,A)=>b===A[0]))throw Error(`Unsupported padding parameter: ${e}`);_={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let S=ac([r,i,s,1],[h,m,g],1,[o,d,u],e[0]);v=S[0],f=S[1],x=S[2]}else if(e==="SAME_UPPER"){v=Math.ceil(r/o),f=Math.ceil(i/d),x=Math.ceil(s/u);let S=(v-1)*o+h-r,b=(f-1)*d+m-i,T=(x-1)*u+g-s,A=Math.floor(S/2),C=S-A,O=Math.floor(b/2),R=b-O,B=Math.floor(T/2),F=T-B;_={top:O,bottom:R,left:B,right:F,front:A,back:C}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:_,outDepth:v,outHeight:f,outWidth:x}},Gw=(e,r,i,s,o,d=!1,u="channelsLast")=>{let h,m,g,_,v;if(u==="channelsLast")[h,m,g,_,v]=e;else if(u==="channelsFirst")[h,v,m,g,_]=e;else throw new Error(`Unknown dataFormat ${u}`);let[f,,x,S,b]=r,[T,A,C]=ic(i),[O,R,B]=ic(s),F=Us(x,O),U=Us(S,R),Y=Us(b,B),{padInfo:ae,outDepth:oe,outHeight:me,outWidth:ge}=Fm(o,m,g,_,T,A,C,F,U,Y),le=d?f*v:f,Te=[0,0,0,0,0];return u==="channelsFirst"?Te=[h,le,oe,me,ge]:u==="channelsLast"&&(Te=[h,oe,me,ge,le]),{batchSize:h,dataFormat:u,inDepth:m,inHeight:g,inWidth:_,inChannels:v,outDepth:oe,outHeight:me,outWidth:ge,outChannels:le,padInfo:ae,strideDepth:T,strideHeight:A,strideWidth:C,filterDepth:x,filterHeight:S,filterWidth:b,effectiveFilterDepth:F,effectiveFilterHeight:U,effectiveFilterWidth:Y,dilationDepth:O,dilationHeight:R,dilationWidth:B,inShape:e,outShape:Te,filterShape:r}},Kw=(e,r,i,s,o,d)=>{let u=d==="channelsLast";u?e[0].dims[3]:e[0].dims[1];let h=[64,1,1],m={x:i.map((T,A)=>A)},g=[Math.ceil(Um(m.x.map(T=>i[T]))/h[0]),1,1];Ye("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${g}`);let _=1,v=Q.size(i),f=[{type:12,data:v},{type:12,data:s},{type:12,data:o},{type:12,data:r.strides},{type:12,data:r.dilations}];Gr(r,f),f.push(...he(e[0].dims,e[1].dims));let x=["rank","rank"],S=e.length===3;S&&(f.push(...he(e[2].dims)),x.push("rank")),f.push(...he(i));let b=T=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:s.length},{name:"pads",type:"u32",length:o.length},{name:"strides",type:"u32",length:r.strides.length},{name:"dilations",type:"u32",length:r.dilations.length}];Kr(r,A);let C=1,O=vt(e[0].dataType),R=Z("x",e[0].dataType,e[0].dims.length,_),B=Z("W",e[1].dataType,e[1].dims.length,C),F=[R,B],U=be("result",e[0].dataType,i.length,C),Y="";if(S){let me=Z("bias",e[2].dataType,e[2].dims.length,C);F.push(me),Y+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${O} {
          return bias[${u?we("coords",4,5):we("coords",1,5)}];
        }`}let ae=Bt(_,O),oe=qr(r,ae,O);return`
            ${Y}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${R.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${B.getByIndices("aIndices")};
            }
          ${T.registerUniforms(A).declareVariables(...F,U)}
          ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${U.offsetToIndices("global_idx")};
              let batch = ${we("coords",0,R.rank)};
              let d2 = ${u?we("coords",R.rank-1,R.rank):we("coords",1,R.rank)};
              let xFRCCorner = vec3<u32>(${u?we("coords",1,R.rank):we("coords",2,R.rank)},
              ${u?we("coords",2,R.rank):we("coords",3,R.rank)},
              ${u?we("coords",3,R.rank):we("coords",4,R.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${u?we("uniforms.x_shape",1,R.rank):we("uniforms.x_shape",2,R.rank)};
              let xShapeZ = ${u?we("uniforms.x_shape",2,R.rank):we("uniforms.x_shape",3,R.rank)};
              let xShapeW = ${u?we("uniforms.x_shape",3,R.rank):we("uniforms.x_shape",4,R.rank)};
              let xShapeU = ${u?we("uniforms.x_shape",4,R.rank):we("uniforms.x_shape",1,R.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${u?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${u?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${u?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${u?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${S?"value = value + getBiasByOutputCoords(coords)":""};
              ${oe}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${r.cacheKey};${u};${_};${S}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:f}),getShaderSource:b}}}),Qw,Yw,n_=re(()=>{Ae(),Be(),Me(),Yr(),Qw=(e,r,i,s)=>{let o=e.length>2,d=o?"value += b[output_channel];":"",u=e[0].dims,h=e[1].dims,m=r.format==="NHWC",g=m?i[3]:i[1],_=g/r.group,v=m&&_>=4?pt(g):1,f=Q.size(i)/v,x=[{type:12,data:f},{type:12,data:r.dilations},{type:12,data:[r.strides[0],r.strides[1]]},{type:12,data:[r.pads[0],r.pads[1]]},{type:12,data:_}];Gr(r,x),x.push(...he(u,[h[0],h[1],h[2],h[3]/v]));let S=o?["rank","rank","rank"]:["rank","rank"];x.push(...he([i[0],i[1],i[2],i[3]/v]));let b=T=>{let A=be("output",e[0].dataType,i.length,v),C=vt(A.type.tensor),O=qr(r,A.type.value,C),R=Z("x",e[0].dataType,u.length),B=Z("w",e[1].dataType,h.length,v),F=[R,B];o&&F.push(Z("b",e[2].dataType,e[2].dims,v));let U=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:r.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Kr(r,U);let Y=m?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${R.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${B.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${R.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${B.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${T.registerUniforms(U).declareVariables(...F,A)}

  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${A.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${m?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${m?1:2}], outputIndices[${m?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${v} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${m?2:1}];

    var value: ${A.type.value} = ${A.type.value}(0);
    ${Y}
    ${d}
    ${O}
    ${A.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${r.cacheKey}_${v}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:x}),getShaderSource:b}},Yw=(e,r,i,s)=>{let o=e.length>2,d=pt(i[3]),u=pt(i[2]),h=Q.size(i)/d/u,m=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/d],g=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/d],_=[i[0],i[1],i[2],i[3]/d],v=[{type:12,data:h},{type:6,data:[r.strides[0],r.strides[1]]},{type:6,data:[r.pads[0],r.pads[1]]}];Gr(r,v),v.push(...he(m,g,_));let f=(u-1)*r.strides[1]+g[1],x=S=>{let b=be("output",e[0].dataType,_.length,d),T=vt(b.type.tensor),A=qr(r,b.type.value,T),C=Z("x",e[0].dataType,m.length,d),O=Z("w",e[1].dataType,g.length,d),R=[C,O];o&&R.push(Z("b",e[2].dataType,e[2].dims,d));let B=o?"value += b[output_channel];":"",F=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Kr(r,F),`
  ${S.registerUniforms(F).declareVariables(...R,b)}
  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${u}u;
    let col = (index1 % width1) * ${u}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${C.type.value}, ${f}>;
    var values: array<${b.type.value}, ${u}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${g[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${C.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${C.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${g[1]}; w_width++) {
          let w_val = ${O.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${u}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${u}u; i++) {
      var value = values[i];
      ${B}
      ${A}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${r.cacheKey};${d};${u};${f};${g[0]};${g[1]}`,inputDependencies:o?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:x}}}),Uc,Wm,Zw,Xw=re(()=>{Ae(),Be(),sl(),Me(),Yr(),Uc=(e,r,i,s,o=!1,d)=>{let u=e[0].dims,h=e[1].dims,m=u[u.length-2],g=h[h.length-1],_=u[u.length-1],v=pt(g),f=pt(_),x=pt(m),S=Q.size(i)/v/x,b=e.length>2,T=s?s.slice(0,-2):i.slice(0,-2),A=[Q.size(T),m,g],C=[{type:12,data:S},{type:12,data:m},{type:12,data:g},{type:12,data:_}];Gr(r,C),C.push(...he(T,u,h)),b&&C.push(...he(e[2].dims)),C.push(...he(A));let O=R=>{let B=df("batch_dims",e[0].dataType,T.length),F=Z("a",e[0].dataType,u.length,f),U=Z("b",e[1].dataType,h.length,v),Y=be("output",e[0].dataType,A.length,v),ae=vt(Y.type.tensor),oe=qr(r,Y.type.value,ae),me=[F,U],ge="";if(b){let G=o?v:1;me.push(Z("bias",e[2].dataType,e[2].dims.length,G)),ge=`${o?`value += bias[col / ${G}];`:`value += ${Y.type.value}(bias[row + i]);`}`}let le=u.slice(0,-2),Te=h.slice(0,-2),Oe=Js(le,T),ve=Js(Te,T),Se=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Kr(r,Se);let q=(G,z)=>{let N=G.rank,ne=G.name;if(N===2)return`var ${ne}_indices = ${G.type.indices}(0u, 0u);`;let ce=B.rank,xe=`var ${ne}_indices: ${G.type.indices};`;for(let Ce=N-2-1,je=ce-1;Ce>=0;Ce--,je--)xe+=`
${ne}_indices[${Ce}] = ${ce>1?`batch_indices[${je}]`:"batch_indices"};`;return z.forEach(Ce=>{xe+=`
${ne}_indices[${Ce}] = 0;`}),xe+=`${ne}_indices[${N-2}] = 0u;
                     ${ne}_indices[${N-1}] = 0u;`,xe},J=()=>{let G=`var a_data: ${F.type.value};`;for(let z=0;z<f;z++)G+=`
              let b_data${z} = b[(b_offset + (k + ${z}) * uniforms.N + col) / ${v}];`;for(let z=0;z<x;z++){G+=`a_data = a[(a_offset + (row + ${z}) * uniforms.K + k) / ${f}];`;for(let N=0;N<f;N++)G+=`
            values[${z}] = fma(${U.type.value}(a_data${f===1?"":`[${N}]`}), b_data${N}, values[${z}]);
`}return G};return`
  ${R.registerUniforms(Se).registerInternalVariables(B).declareVariables(...me,Y)}
  ${R.mainStart()}
    ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${v})) * ${v};
    var index1 = global_idx / (uniforms.N / ${v});
    let stride1 = uniforms.M / ${x};
    let row = (index1 % stride1) * ${x};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${B.offsetToIndices("batch")};`}
    ${q(F,Oe)}
    let a_offset = ${F.indicesToOffset("a_indices")};
    ${q(U,ve)}
    let b_offset = ${U.indicesToOffset("b_indices")};
    var values: array<${Y.type.value}, ${x}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${J()}
    }
    for (var i = 0u; i < ${x}u; i++) {
      var value = values[i];
      ${ge}
      ${oe}
      let cur_indices = ${Y.type.indices}(batch, row + i, col);
      let offset = ${Y.indicesToOffset("cur_indices")};
      ${Y.setByOffset(`offset / ${v}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${r.activation};${v};${f};${x};${o}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:C}),getShaderSource:O}},Wm=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Zw=e=>{Wm(e.inputs);let r=Aa.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!r)throw new Error("Can't use matmul on the given tensors");let i=r[r.length-1],s=e.inputs[0].dims[e.inputs[0].dims.length-1];i<8&&s<8?e.compute(Uc(e.inputs,{activation:""},r)):e.compute(yf(e.inputs,{activation:""},r))}}),Vm,Lu,Hm,Uu,jc,sc,qm,Gm,Fc,r_=re(()=>{Be(),e_(),t_(),sl(),n_(),Yr(),Xw(),Qr(),Vm=(e,r,i,s,o,d)=>{let u=e[0],h=e.slice(d?1:2,d?3:4),m=h.length,g=r[0],_=r.slice(2).map((f,x)=>f+(f-1)*(i[x]-1)),v=h.map((f,x)=>f+s[x]+s[x+m]).map((f,x)=>Math.floor((f-_[x]+o[x])/o[x]));return v.splice(0,0,u),v.splice(d?3:1,0,g),v},Lu=[2,3,1,0],Hm=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[1]*r.group;if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let o=e[0].dims.length-2;if(r.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(r.strides.length!==o)throw new Error(`strides should be ${o}D`);if(r.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Uu=(e,r)=>{let i=e.kernelShape.slice();i.length<r[1].dims.length-2&&i.push(...Array(r[1].dims.length-2-i.length).fill(0));for(let d=2;d<r[1].dims.length;++d)i[d-2]===0&&(i[d-2]=r[1].dims[d]);let s=e.pads.slice();Xu.adjustPadsBasedOnAutoPad(r[0].dims,e.strides,e.dilations,i,s,e.format==="NHWC",e.autoPad);let o=Object.assign({},e);return Object.assign(o,{kernelShape:i,pads:s}),o},jc=e=>{let r=hf(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],o=e.dilations,d=e.group,u=e.kernel_shape,h=e.pads,m=e.strides,g=e.w_is_const();return{autoPad:s,format:i,dilations:o,group:d,kernelShape:u,pads:h,strides:m,wIsConst:g,...r,cacheKey:`${e.format};${r.activation};`}},sc=(e,r,i,s)=>{let o=i.format==="NHWC",d=Vm(r[0].dims,r[1].dims,i.dilations,i.pads,i.strides,o);if(i.group!==1){let F=[r[0]];if(o){let U=e.kernelCustomData.wT??e.compute(ln(r[1],Lu),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=U),F.push(U)}else F.push(r[1]);r.length===3&&F.push(r[2]),!e.adapterInfo.isArchitecture("ampere")&&o&&r[1].dims[0]===i.group&&r[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(Yw(F,i,d,s),{inputs:F}):e.compute(Qw(F,i,d,s),{inputs:F});return}let u=r.length===3,h=r[0].dims[o?1:2],m=r[0].dims[o?2:3],g=r[0].dims[o?3:1],_=r[1].dims[2],v=r[1].dims[3],f=d[o?1:2],x=d[o?2:3],S=d[o?3:1],b=o&&_===h&&v===m&&i.pads[0]===0&&i.pads[1]===0;if(b||_===1&&v===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let F=d[0],U,Y,ae,oe=[];if(o){let le=e.kernelCustomData.wT??e.compute(ln(r[1],Lu),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=le),b){let Te=h*m*g;U=r[0].reshape([1,F,Te]),Y=le.reshape([1,Te,S]),ae=[1,F,S]}else U=r[0].reshape([F,h*m,g]),Y=le.reshape([1,g,S]),ae=[F,f*x,S];oe.push(U),oe.push(Y)}else U=r[0].reshape([F,g,h*m]),Y=r[1].reshape([1,S,g]),ae=[F,S,f*x],oe.push(Y),oe.push(U);u&&oe.push(r[2]);let me=ae[2],ge=oe[0].dims[oe[0].dims.length-1];me<8&&ge<8?e.compute(Uc(oe,i,d,ae,o,s),{inputs:oe}):e.compute(yf(oe,i,d,ae,o,s),{inputs:oe});return}let T=!0,A=e.kernelCustomData.wT??e.compute(ln(r[1],Lu),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A);let C=[r[0],A];u&&C.push(r[2]);let O=o?f*x:S,R=o?S:f*x,B=_*v*g;e.compute(qw(C,i,d,O,R,B,u,T,s),{inputs:C})},qm=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=[0,r.pads[0],0,r.pads[1]],d=[1].concat(r.strides),u=[1].concat(r.dilations),h=[1].concat(r.kernelShape),m=Uu({...r,pads:o,strides:d,dilations:u,kernelShape:h},s);sc(e,s,m,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]])},Gm=(e,r,i)=>{let s=i.format==="NHWC"?"channelsLast":"channelsFirst",o=Uu(i,r),d=i.autoPad==="NOTSET"?i.pads:i.autoPad,u=Gw(r[0].dims,r[1].dims,i.strides,i.dilations,d,!1,s);e.compute(Kw(r,o,u.outShape,[u.filterDepth,u.filterHeight,u.filterWidth],[u.padInfo.front,u.padInfo.top,u.padInfo.left],s))},Fc=(e,r)=>{if(Hm(e.inputs,r),e.inputs[0].dims.length===3)qm(e,r);else if(e.inputs[0].dims.length===5)Gm(e,e.inputs,r);else{let i=Uu(r,e.inputs);sc(e,e.inputs,i)}}}),Km,Jw,i_=re(()=>{Ae(),Yn(),Me(),Yr(),al(),Hw(),sl(),Km=(e,r=!1,i,s,o=4)=>{let d=T=>{switch(T){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${s}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${T} is not supported.`)}},u=e?`
      let coord = vec4<i32>(batch, iXR, iXC, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, iXR, iXC);
      `,h=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",g=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",_=e?"row":"col",v=e?"col":"row",f=`
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      let outRow = ${_} / outWidth;
      let outCol = ${_} % outWidth;

      let WRow = ${v} / (uniforms.filter_dims[1] * inChannels);
      let WCol = ${v} / inChannels % uniforms.filter_dims[1];
      let xR = f32(outRow - uniforms.pads[0] + uniforms.dilations[0] * WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + uniforms.dilations[1] * WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(${m}) || fract(xR) > 0.0) {
        return ${s}(0.0);
      }
      if (xC < 0.0 || xC >= f32(${g}) || fract(xC) > 0.0) {
        return ${s}(0.0);
      }
      let iXR = i32(xR);
      let iXC = i32(xC);
      let xCh = ${v} % inChannels;
      ${u}
      return x[getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape))/${o}];`,x=e?`
      let col = colIn * ${o};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
        ${f}
      }
      return ${s}(0.0);`:`
      let col = colIn * ${o};
      if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
        ${f}
      }
      return ${s}(0.0);`,S=`
      let col = colIn * ${o};
      let inChannels = ${e?"i32(uniforms.x_shape[3])":"i32(uniforms.x_shape[1])"};
      let coordX = uniforms.filter_dims[0] - 1 - row / (uniforms.filter_dims[1] * inChannels);
      let coordY = uniforms.filter_dims[1] - 1 - (row / inChannels) % uniforms.filter_dims[1];
      if (${e?"row < uniforms.dim_inner && col < uniforms.dim_b_outer":"row < uniforms.dim_inner && col < uniforms.dim_a_outer"}  && coordX >= 0 && coordY >= 0) {
        let rowInner = row % inChannels;
        let coord = vec4<i32>(coordX, coordY, col, rowInner);
        ${d(o)}
      }
      return ${s}(0.0);
      `,b=qr(i,s);return`
  fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${s} {
    ${e?x:S}
  }

  fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${s} {
    ${e?S:x}
  }

  fn mm_write(batch: i32, row : i32, colIn : i32, valueInput : ${s}) {
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
      var value = valueInput;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${h}
      ${mf(r)}
      ${b}
      result[getIndexFromCoords4D(coords, vec4<i32>(uniforms.result_shape))/${o}] = value;
    }
  }`},Jw=(e,r,i,s,o,d,u,h)=>{let m=r.format==="NHWC",g=m?e[0].dims[3]:e[0].dims[1],_=i[0],v=m?i[2]:i[3],f=m?i[1]:i[2],x=m?i[3]:i[1],S=m&&g%4===0&&g%3&&x%4===0,b=m?x:v*f,T=m?v*f:x,A=[8,8,1],C=s<=8?[4,1,1]:[4,4,1],O=[Math.ceil(b/A[0]/C[0]),Math.ceil(T/A[1]/C[1]),Math.ceil(_/A[2]/C[2])];Ye("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${O}`);let R=S?4:1,B=Math.max(A[0]*R,A[1]),F=S?4:1,U=[r.kernelShape[m?1:2],r.kernelShape[m?2:3]],Y=[U[0]+(r.dilations[0]<=1?0:(U[0]-1)*(r.dilations[0]-1)),U[1]+(r.dilations[1]<=1?0:(U[1]-1)*(r.dilations[1]-1))],ae=[Y[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),Y[1]-1-Math.floor((r.pads[1]+r.pads[3])/2)],oe=[{type:6,data:s},{type:6,data:o},{type:6,data:d},{type:6,data:r.strides},{type:6,data:r.dilations},{type:6,data:U},{type:6,data:ae}];Gr(r,oe),oe.push(...he(e[0].dims,e[1].dims));let me=["rank","rank"];u&&(oe.push(...he(e[2].dims)),me.push("rank")),oe.push(...he(i));let ge=le=>{let Te=Z("x",e[0].dataType,e[0].dims.length,F),Oe=Z("w",e[1].dataType,e[1].dims.length,1),ve=be("result",e[0].dataType,i.length,F),Se=[Te,Oe],q="";if(u){let z=Z("bias",e[2].dataType,e[2].dims.length,F);Se.push(z),q+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${z.type.value} {
            return bias[coords.${m?"w":"y"}${S?"/ 4":""}];
          }`}let J=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:U.length},{name:"pads",type:"i32",length:ae.length}];Kr(r,J);let G=vt(e[0].dataType,1);if(G!=="f16"&&G!=="f32")throw new Error(`elemType ${G} is not supported.`);return`
        ${gf("uniforms.result_strides")}
        ${le.registerUniforms(J).declareVariables(...Se,ve)};
        ${q}
        ${Km(m,u,r,Te.type.value,R)}
        ${S?el(C,A,G,void 0,!m,B):tl(C,A,G,void 0,!m,B,!1,void 0,h)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${r.cacheKey};${C};${A};${S}`,inputDependencies:me},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:O[0],y:O[1],z:O[2]},programUniforms:oe}),getShaderSource:ge}}}),Qm,Wc,a_=re(()=>{Ae(),Yn(),Be(),Me(),Qm=(e,r,i,s,o,d=!1,u,h,m=!1)=>{let g=m?1:2,_=m?2:3,v=m?3:1,f=d?2:1,x=`
  fn setOutputAtIndex(flatIndex : u32, value : ${d?`vec4<${u}>`:u}) {
    result[flatIndex] = ${d?`vec4<${u}>`:u}(value);
  }`;s&&(x+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${d?`vec4<${u}>`:u} {
      return bias[coords.${m?"w":"y"}${d?"/ 4":""}];
    }`);let S=d?4:1,b=Z("W",r[1].dataType,r[1].dims.length,S),T=Z("Dy",r[0].dataType,r[0].dims.length,S),A=[T,b];s&&A.push(Z("bias",r[2].dataType,[i[v]].length,S));let C=be("result",r[0].dataType,i.length,S),O=`{
        let batch: u32 = ${o?"global_id.z":"workgroup_id.z"} / uniforms.result_shape[1];
        let r = ${o?"global_id.z":"workgroup_id.z"} % uniforms.result_shape[1];
        let c = ${o?"global_id.y":"workgroup_id.y"} * ${f};
        let d1: u32 = ${o?"global_id.x":"workgroup_id.x"} * 4;

        let dyCorner = vec2<i32>(i32(r), i32(c)) - vec2<i32>(uniforms.pads);

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd: array<vec4<${u}>, ${f}>;
        for (var i = 0; i < ${f}; i++) {
          dotProd[i] = vec4<${u}>(0.0);
        }
        for (var wR: u32 = 0; wR < uniforms.filter_dims[0]; wR = wR + 1) {
          var dyR = (${u}(dyCorner.x) + ${u}(wR)) / ${u}(uniforms.strides.x);
          let wRPerm = uniforms.filter_dims[0] - 1 - wR;
          if (dyR < 0.0 || dyR >= ${u}(uniforms.Dy_shape[1]) ||
              fract(dyR) > 0.0 || wRPerm < 0) {
            continue;
          }
          let idyR: u32 = u32(dyR);

          for (var wC: u32 = 0; wC < uniforms.filter_dims[1]; wC = wC + 1) {
            let dyC = (${u}(dyCorner.y) + ${u}(wC)) / ${u}(uniforms.strides.y);
            let dyC2 = (${u}(dyCorner.y) + 1.0 + ${u}(wC)) / ${u}(uniforms.strides.y);
            let wCPerm = uniforms.filter_dims[1] - 1 - wC;
            if (wCPerm < 0) {
              continue;
            }
            var bDyCVal = true;
            var bDyCVal2 = true;
            if (dyC < 0.0 || dyC >= ${u}(uniforms.Dy_shape[2]) ||
                fract(dyC) > 0.0) {
              bDyCVal = false;
            }
            if (dyC2 < 0.0 || dyC2 >= ${u}(uniforms.Dy_shape[2]) ||
                fract(dyC2) > 0.0) {
              bDyCVal2 = false;
            }

            let idyC: u32 = u32(dyC);
            let idyC2: u32 = u32(dyC2);
            if (bDyCVal && bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2 :u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${T.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${u}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${T.get("batch","idyR","idyC2","d2")};

                dotProd[1] = dotProd[1] + vec4<${u}>(dot(xValue, wValue0),
                                                    dot(xValue, wValue1),
                                                    dot(xValue, wValue2),
                                                    dot(xValue, wValue3));
              }
            } else if (bDyCVal) {
              let d2Length = uniforms.Dy_shape[${v}];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${T.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${u}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;
              }
            } else if (bDyCVal2) {
              let d2Length = uniforms.Dy_shape[3];
              for (var d2: u32 = 0; d2 < d2Length; d2 = d2 + 4) {
                let wValue0 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1","d2")};
                let wValue1 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 1","d2")};
                let wValue2 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 2","d2")};
                let wValue3 = ${b.get("u32(wRPerm)","u32(wCPerm)","d1 + 3","d2")};

                var xValue = ${T.get("batch","idyR","idyC2","d2")};
                let tmpval = vec4<${u}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[1] = dotProd[1] + tmpval;
              }
            }
          }
        }

        for (var i: u32 = 0; i < ${f}; i = i + 1) {
          let value = dotProd[i] + ${s?"bias[c+i]":`vec4<${u}>(0.0)`};
          ${C.set("batch","r","c + i","d1","value")};
        }
      }`,R=`
          let outputIndices = ${C.offsetToIndices("global_idx")};
          let batch = ${C.indicesGet("outputIndices",0)};
          let d1 = ${C.indicesGet("outputIndices",v)};
          let r = ${C.indicesGet("outputIndices",g)};
          let c = ${C.indicesGet("outputIndices",_)};
          let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
          let dyRCorner = dyCorner.x;
          let dyCCorner = dyCorner.y;
          let groupId = d1 / uniforms.output_channels_per_group;
          let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
          // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
          // ? = to be determined. : = across all values in that axis.
          var dotProd = ${u}(0.0);
          for (var wR: u32 = 0; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
            if (wR % uniforms.dilations.x != 0) {
              continue;
            }
            let dyR = (${u}(dyRCorner) + ${u}(wR)) / ${u}(uniforms.strides[0]);
            let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
            if (dyR < 0.0 || dyR >= ${u}(uniforms.Dy_shape[${g}]) || fract(dyR) > 0.0 ||
                wRPerm < 0) {
              continue;
            }
            let idyR: u32 = u32(dyR);

            for (var wC: u32 = 0; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
              if (wC % uniforms.dilations.y != 0) {
                continue;
              }
              let dyC = (${u}(dyCCorner) + ${u}(wC)) / ${u}(uniforms.strides.y);
              let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
              if (dyC < 0.0 || dyC >= ${u}(uniforms.Dy_shape[${_}]) ||
                  fract(dyC) > 0.0 || wCPerm < 0) {
                continue;
              }
              let idyC: u32 = u32(dyC);
              var inputChannel = groupId * uniforms.input_channels_per_group;
              for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + 1) {
                let xValue = ${m?T.get("batch","idyR","idyC","inputChannel"):T.get("batch","inputChannel","idyR","idyC")};
                let wValue = ${b.get("inputChannel","wOutChannel","u32(wRPerm)","u32(wCPerm)")};
                dotProd = dotProd + xValue * wValue;
                inputChannel = inputChannel + 1;
              }
            }
          }
          let value = dotProd + ${s?"bias[d1]":`${u}(0.0)`};
          ${C.setByOffset("global_idx","value")};
        `;return`
  ${e.registerUniforms(h).declareVariables(...A,C)}
  ${x}

    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
  ${d?O:R}}`},Wc=(e,r,i)=>{let s=e.length>2,o=r.outputShape,d=Q.size(o),u=[Math.ceil(d/64),1,1];Ye("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${u}`);let h=r.format==="NHWC",m=["rank","rank"],g=[r.strides[0],r.strides[1]],_=[r.kernelShape[h?1:2],r.kernelShape[h?2:3]],v=[r.dilations[0],r.dilations[1]],f=[_[0]+(r.dilations[0]<=1?0:(r.kernelShape[h?1:2]-1)*(r.dilations[0]-1)),_[1]+(r.dilations[1]<=1?0:(r.kernelShape[h?2:3]-1)*(r.dilations[1]-1))],x=[f[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),f[1]-1-Math.floor(r.pads[1]+r.pads[3])/2],S=!1,b=r.group,T=e[1].dims,A=T[0]/b,C=T[1],O=[{type:12,data:d},{type:12,data:g},{type:12,data:_},{type:12,data:v},{type:12,data:f},{type:6,data:x},{type:12,data:A},{type:12,data:C},...he(e[0].dims,e[1].dims)];s&&(O.push(...he(e[2].dims)),m.push("rank")),O.push(...he(o));let R=u[1]===1&&u[2]===1,B=F=>{let U=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:g.length},{name:"filter_dims",type:"u32",length:_.length},{name:"dilations",type:"u32",length:_.length},{name:"effective_filter_dims",type:"u32",length:f.length},{name:"pads",type:"i32",length:x.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Y=vt(e[0].dataType);return`${Qm(F,e,o,s,R,S,Y,U,h)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${r.cacheKey};`,inputDependencies:m},getRunData:()=>({dispatchGroup:{x:u[0],y:u[1],z:u[2]},outputs:[{dims:i?i(o):o,dataType:e[0].dataType}],programUniforms:O}),getShaderSource:B}}}),Ym,Zm,Xm,oc,ev,Jm,eg,tg,ng,tv,s_=re(()=>{i_(),a_(),Yr(),Qr(),Ym=(e,r,i,s,o,d)=>(e-1)*r+i+(s-1)*o+1-d,Zm=(e,r,i,s,o)=>{let d=Math.floor(e/2);r==="SAME_UPPER"?(i[s]=d,i[o]=e-d):r==="SAME_LOWER"&&(i[s]=e-d,i[o]=d)},Xm=(e,r,i,s,o,d,u,h,m,g)=>{let _=e.length-2,v=g.length===0;m.length<_&&m.push(...Array(_-m.length).fill(0));let f=e[0],x=r[h?3:1]*o;for(let S=0,b=e.length-_-(h?1:0);S<_;++S,++b){let T=e[b],A=v?T*u[S]:g[S],C=Ym(T,u[S],d[S],r[b],i[S],A);Zm(C,s,d,S,S+_),v&&g.push(u[S]*(T-1)+m[S]+(r[b]-1)*i[S]+1-d[S]-d[S+_])}g.splice(0,0,f),g.splice(h?3:1,0,x)},oc=(e,r)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((v,f)=>v*f,1)===0){i.length=0;for(let v=2;v<r[1].dims.length;++v)i.push(r[1].dims[v])}let s=e.format==="NHWC";i.splice(0,0,r[1].dims[0]),i.splice(s?3:1,0,r[1].dims[1]);let o=e.pads.slice(),d=e.outputShape.slice(),u=e.outputPadding.slice(),h=r[0].dims,m=e.dilations.slice();if(m.reduce((v,f)=>v+f,0)===0){let v=r[0].dims.length-2;m=new Array(v).fill(1)}let g=e.strides.slice();if(g.reduce((v,f)=>v+f,0)===0){let v=r[0].dims.length-2;g=new Array(v).fill(1)}Xm(h,i,m,e.autoPad,e.group,o,g,s,u,d);let _=Object.assign({},e);return Object.assign(_,{kernelShape:i,pads:o,outputPadding:u,outputShape:d,dilations:m,strides:g}),_},ev=e=>{let r=hf(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],o=e.dilations,d=e.group,u=e.kernelShape,h=e.pads,m=e.strides,g=e.wIsConst(),_=e.outputPadding,v=e.outputShape;return{autoPad:s,format:i,dilations:o,group:d,kernelShape:u,outputPadding:_,outputShape:v,pads:h,strides:m,wIsConst:g,...r,cacheKey:`${e.format};${r.activation};`}},Jm=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[0];if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=e[1].dims[1]*r.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==o))throw new Error("invalid bias");let d=e[0].dims.length-2;if(r.dilations.reduce((u,h)=>u+h,0)>0&&r.dilations.length!==d)throw new Error(`dilations should be ${d}D`);if(r.strides.reduce((u,h)=>u+h,0)>0&&r.strides.length!==d)throw new Error(`strides should be ${d}D`);if(r.pads.reduce((u,h)=>u+h,0)>0&&r.pads.length!==d*2)throw new Error(`pads should be ${d*2}D`);if(r.outputPadding.length!==d&&r.outputPadding.length!==0)throw new Error(`output_padding should be ${d}D`);if(r.kernelShape.reduce((u,h)=>u+h,0)>0&&r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(r.outputShape.length!==0&&r.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},eg=[2,3,1,0],tg=(e,r,i)=>{let s=oc(i,r),o=i.format==="NHWC",d=s.outputShape,u=d[o?3:1],h=r[0].dims[o?3:1];if(s.group!==1||u===1&&h===1){e.compute(Wc(r,s));return}let m=d[o?1:2],g=d[o?2:3],_=r[1].dims[2],v=r[1].dims[3],f=o?m*g:u,x=o?u:m*g,S=_*v*h,b=!0,T=e.kernelCustomData.wT??e.compute(ln(r[1],eg),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=T);let A=[r[0],T],C=r.length===3;C&&(!o&&r[2].dims.length===1?A.push(r[2].reshape([r[2].dims[0],1,1])):A.push(r[2])),e.compute(Jw(A,s,d,f,x,S,C,b),{inputs:A})},ng=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=r.kernelShape;(o.length===0||o[0]===0)&&(o=[e.inputs[1].dims[2]]);let d=r.dilations;(d.length===0||d[0]===0)&&(d=[1]);let u=r.strides;(u.length===0||u[0]===0)&&(u=[1]);let h=r.pads;h.length===0&&(h=[0,0]),h=[0,h[0],0,h[1]],u=[1].concat(u),d=[1].concat(d),o=[1].concat(o);let m=oc({...r,pads:h,strides:u,dilations:d,kernelShape:o},s);e.compute(Wc(s,m,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]]))},tv=(e,r)=>{Jm(e.inputs,r),e.inputs[0].dims.length===3?ng(e,r):tg(e,e.inputs,r)}}),rg,nv,rv,o_=re(()=>{Ae(),Be(),gt(),Me(),rg=(e,r,i,s)=>{let o=Q.size(r),d=r.length,u=Z("input",e,d),h=be("output",e,d),m=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),g=Q.normalizeAxis(m,d),_=v=>{let f=` i32(${u.indicesGet("inputIndices","uniforms.axis")}) `,x=we("uniforms.input_shape","uniforms.axis",d),S=s.reverse?f+(s.exclusive?" + 1":""):"0",b=s.reverse?x:f+(s.exclusive?"":" + 1");return`
                ${v.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(u,h)}
                ${v.mainStart()}
                  ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${h.offsetToIndices("global_idx")};
                  var sum = ${h.type.value}(0);
                  let first : i32 = ${S};
                  let last : i32 = ${b};
                  for (var i : i32 = first; i < last; i++) {
                    ${u.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${u.getByIndices("inputIndices")};
                  }
                  ${h.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:s.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:e}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:g},...he(r,r)]}),getShaderSource:_}},nv=(e,r)=>{let i=e.inputs[0].dims,s=e.inputs[0].dataType,o=e.inputs[1];e.compute(rg(s,i,o,r),{inputs:[0]})},rv=e=>{let r=e.exclusive===1,i=e.reverse===1;return Ze({exclusive:r,reverse:i})}}),ig,ag,sg,iv,av,u_=re(()=>{Ae(),Be(),gt(),Me(),ig=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ag=(e,r,i,s)=>{let o=[];o.push(`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let d=0;d<r;++d)o.push(i.indicesSet("a",e[d],`i[${d}]`));return o.push("return a;}"),o.join(`
`)},sg=(e,r)=>{let i,s,o,d,u,h,m=r.format==="NHWC",g=r.blocksize,_=r.mode==="DCR";m?([i,s,o,d]=e.dims,u=_?[i,s,o,g,g,d/g**2]:[i,s,o,d/g**2,g,g],h=_?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,s,o,d]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],u=_?[i,g,g,d/g**2,s,o]:[i,d/g**2,g,g,s,o],h=_?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let v=e.reshape(u),f=v.dims.length,x=e.dataType,S=Z("a",x,f),b=be("output",x,f),T=A=>`
  ${A.registerUniform("output_size","u32").declareVariables(S,b)}

  ${ag(h,f,S,b)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",S.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${r.blocksize};${r.mode}`,inputDependencies:["rank"]},getRunData:A=>{let C=m?[i,s*g,o*g,d/g**2]:[i,d/g**2,s*g,o*g],O=Q.size(C),R=v.dims,B=Q.sortBasedOnPerm(R,h);return{outputs:[{dims:C,dataType:A[0].dataType}],dispatchGroup:{x:Math.ceil(O/64)},programUniforms:[{type:12,data:O},...he(R,B)]}},getShaderSource:T}},iv=(e,r)=>{ig(e.inputs),e.compute(sg(e.inputs[0],r))},av=e=>Ze({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ju,js,uc,og,ug,lg,dg,lc,cg,sv,ov,l_=re(()=>{Ae(),Be(),gt(),Me(),ju="[a-zA-Z]|\\.\\.\\.",js="("+ju+")+",uc="^"+js+"$",og="("+js+",)*"+js,ug="^"+og+"$",lg=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,r){let i=this.symbolToIndices.get(e);i===void 0?i=[r]:i.push(r),this.symbolToIndices.set(e,i)}},dg=class{constructor(e,r){var o;this.equation=r,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,s]=r.includes("->")?r.split("->",2):[r,""];if(!i.match(RegExp(ug)))throw new Error("Invalid LHS term");if(i.split(",").forEach((d,u)=>{let h=e[u].dims.slice();if(!d.match(RegExp(uc)))throw new Error("Invalid LHS term");let m=this.processTerm(d,!0,h,u);this.lhs.push(m)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([d,u])=>u.count===1||d==="...").map(([d])=>d).join("");else if(!s.match(RegExp(js)))throw new Error("Invalid RHS");(o=s.match(RegExp(ju,"g")))==null||o.forEach(d=>{if(d==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let u=this.symbolToInfo.get(d);if(u===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(u.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(e,r,i){let s=this.symbolToInfo.get(e);if(s!==void 0){if(s.dimValue!==r&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(i)}else s={count:1,dimValue:r,inputIndices:[i]};this.symbolToInfo.set(e,s)}processTerm(e,r,i,s=-1){let o=i.length,d=!1,u=[],h=0;if(!e.match(RegExp(uc))&&!r&&e!=="")throw new Error("Invalid LHS term");let m=e.match(RegExp(ju,"g")),g=new lg(s);return m==null||m.forEach((_,v)=>{if(_==="..."){if(d)throw new Error("Only one ellipsis is allowed per input term");d=!0;let f=o-m.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(u=i.slice(h,h+f),this.hasEllipsis){if(this.ellipsisDims.length!==u.length||this.ellipsisDims.toString()!==u.toString())throw new Error("Ellipsis dimensions mismatch")}else if(r)this.hasEllipsis=!0,this.ellipsisDims=u;else throw new Error("Ellipsis must be specified in the LHS");for(let x=0;x<u.length;x++){let S=String.fromCharCode(48+x);g.addSymbol(S,v+x),this.addSymbol(S,i[h++],s)}}else g.addSymbol(_,v+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(_,i[h++],s)}),g}},lc=e=>e+"_max",cg=(e,r,i,s)=>{let o=e.map(g=>g.length).map((g,_)=>Z(`input${_}`,r,g)),d=Q.size(s),u=be("output",r,s.length),h=[...i.symbolToInfo.keys()].filter(g=>!i.rhs.symbolToIndices.has(g)),m=g=>{let _=[],v="var prod = 1.0;",f="var sum = 0.0;",x="sum += prod;",S=[],b=[],T=[],A=[],C=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((R,B)=>{var F;if(i.rhs.symbolToIndices.has(B)){let U=(F=i.rhs.symbolToIndices.get(B))==null?void 0:F[0];U!==void 0&&i.lhs.forEach((Y,ae)=>{if(R.inputIndices.includes(ae)){let oe=Y.symbolToIndices.get(B);if(oe===void 0)throw new Error("Invalid symbol error");oe.forEach(me=>{_.push(`${o[ae].indicesSet(`input${ae}Indices`,me,u.indicesGet("outputIndices",U))}`)})}})}else i.lhs.forEach((U,Y)=>{if(R.inputIndices.includes(Y)){let ae=U.symbolToIndices.get(B);if(ae===void 0)throw new Error("Invalid symbol error");ae.forEach(oe=>{S.push(`${o[Y].indicesSet(`input${Y}Indices`,oe,`${B}`)}`)}),A.push(`prod *= ${o[Y].getByIndices(`input${Y}Indices`)};`)}}),b.push(`for(var ${B}: u32 = 0; ${B} < uniforms.${lc(B)}; ${B}++) {`),T.push("}")});let O=C?[..._,`let sum = ${o.map((R,B)=>R.getByIndices(`input${B}Indices`)).join(" * ")};`]:[..._,f,...b,...S,v,...A,x,...T];return`
            ${g.registerUniforms(h.map(R=>({name:`${lc(R)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...o,u)}

            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${u.offsetToIndices("global_idx")};
            ${o.map((R,B)=>`var input${B}Indices: ${o[B].type.indices};`).join(`
`)}
            ${O.join(`
`)};
            ${u.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let g=h.filter(v=>i.symbolToInfo.has(v)).map(v=>{var f;return{type:12,data:((f=i.symbolToInfo.get(v))==null?void 0:f.dimValue)||0}});g.push({type:12,data:d});let _=e.map((v,f)=>[...he(v)]).reduce((v,f)=>v.concat(f),g);return _.push(...he(s)),{outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:_}},getShaderSource:m}},sv=(e,r)=>{let i=new dg(e.inputs,r.equation),s=i.outputDims,o=e.inputs.map((d,u)=>d.dims);e.compute(cg(o,e.inputs[0].dataType,i,s))},ov=e=>{let r=e.equation.replace(/\s+/g,"");return Ze({equation:r})}}),fg,dc,pg,hg,uv,d_=re(()=>{Ae(),Be(),Me(),fg=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=i.length<r.length?0:i.length-r.length,o=r.length<i.length?0:r.length-i.length;for(;s<i.length&&o<r.length;++s,++o)if(i[s]!==r[o]&&i[s]!==1&&r[o]!==1)throw new Error("Expand requires shape to be broadcastable to input")},dc=(e,r)=>{let i=e.length-r.length,s=[];for(let o=0;o<i;++o)s.push(e[o]);for(let o=0;o<r.length;++o)s.push(r[o]===1?e[o+i]:r[o]);return s},pg=(e,r)=>e.length>r.length?dc(e,r):dc(r,e),hg=e=>{let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=pg(r,i),o=e[0].dataType,d=o===9?4:1,u=Math.ceil(Q.size(s)/d),h=g=>{let _=Z("input",o,r.length,d),v=be("output",o,s.length,d),f;if(o===9){let x=(S,b,T="")=>`
          let outputIndices${b} = ${v.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${_.broadcastedIndicesToOffset(`outputIndices${b}`,v)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${S}[${b}] = ${T}(${_.getByOffset(`index${b}`)}[component${b}]);
        `;f=`
        let outputOffset = global_idx * ${d};
        var data = vec4<u32>(0);
        ${x("data",0,"u32")}
        ${x("data",1,"u32")}
        ${x("data",2,"u32")}
        ${x("data",3,"u32")}
        ${v.setByOffset("global_idx","data")}
      }`}else f=`
        let outputIndices = ${v.offsetToIndices("global_idx")};
        let inputOffset = ${_.broadcastedIndicesToOffset("outputIndices",v)};
        ${v.setByOffset("global_idx",_.getByOffset("inputOffset"))}
      }`;return`
    ${g.registerUniform("vec_size","u32").declareVariables(_,v)}
    ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${f}`},m=[{type:12,data:u},...he(r,s)];return{name:"Expand",shaderCache:{hint:`${s.length}`,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m})}},uv=e=>{fg(e.inputs),e.compute(hg(e.inputs),{inputs:[0]})}}),mg,lv,c_=re(()=>{Ae(),Be(),Me(),pf(),mg=e=>{let r=e[0].dataType,i=Q.size(e[0].dims),s=Q.size(e[1].dims),o=s%4===0,d=u=>{let h=Z("x",r,[1],4),m=Z("bias",r,[1],4),g=be("y",r,[1],4),_=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],v=x=>`
      let bias${x}_offset: u32 = (global_idx * 4 + ${x}) % uniforms.bias_size;
      let bias${x} = ${m.getByOffset(`bias${x}_offset / 4`)}[bias${x}_offset % 4];`,f=o?`
      let bias = ${m.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${v(0)}${v(1)}${v(2)}${v(3)}
      let bias = ${h.type.value}(bias0, bias1, bias2, bias3);`;return`${u.registerUniforms(_).declareVariables(h,m,g)}

    ${Nc(Pt(r))}

    ${u.mainStart(Ra)}
      ${u.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${h.getByOffset("global_idx")};
      ${f}
      let x_in = x + bias;
      ${g.setByOffset("global_idx",Lc("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${o}`,inputDependencies:["type","type"]},getShaderSource:d,getRunData:u=>({outputs:[{dims:u[0].dims,dataType:u[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:s}],dispatchGroup:{x:Math.ceil(i/Ra/4)}})}},lv=e=>{e.inputs.length<2||Q.size(e.inputs[1].dims)===0?Tw(e):e.compute(mg(e.inputs))}}),gg,yg,dv,fv,f_=re(()=>{Ae(),Be(),gt(),Me(),gg=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},yg=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,d=Q.normalizeAxis(r.axis,o),u=i.slice(0);u.splice(d,1,...s);let h=i[d],m=e[0].dataType===9?4:1,g=Math.ceil(Q.size(u)/m),_=[{type:12,data:g},{type:6,data:h},{type:12,data:d},...he(e[0].dims,e[1].dims,u)],v=f=>{let x=Z("data",e[0].dataType,e[0].dims.length,m),S=Z("inputIndices",e[1].dataType,e[1].dims.length),b=be("output",e[0].dataType,u.length,m),T=C=>{let O=s.length,R=`var indicesIndices${C}  = ${S.type.indices}(0);`;for(let B=0;B<O;B++)R+=`${O>1?`indicesIndices${C}[${B}]`:`indicesIndices${C}`} = ${u.length>1?`outputIndices${C}[uniforms.axis + ${B}]`:`outputIndices${C}`};`;R+=`
          var idx${C} = ${S.getByIndices(`indicesIndices${C}`)};
          if (idx${C} < 0) {
            idx${C} = idx${C} + uniforms.axisDimLimit;
          }
          var dataIndices${C} : ${x.type.indices};
        `;for(let B=0,F=0;B<o;B++)B===d?(R+=`${o>1?`dataIndices${C}[${B}]`:`dataIndices${C}`} = u32(idx${C});`,F+=O):(R+=`${o>1?`dataIndices${C}[${B}]`:`dataIndices${C}`} = ${u.length>1?`outputIndices${C}[${F}]`:`outputIndices${C}`};`,F++);return R},A;if(e[0].dataType===9){let C=(O,R,B="")=>`
          let outputIndices${R} = ${b.offsetToIndices(`outputOffset + ${R}u`)};
          ${T(R)};
          let offset${R} = ${x.indicesToOffset(`dataIndices${R}`)};
          let index${R} = offset${R} / 4u;
          let component${R} = offset${R} % 4u;
          ${O}[${R}] = ${B}(${x.getByOffset(`index${R}`)}[component${R}]);
        `;A=`
        let outputOffset = global_idx * ${m};
        var value = vec4<u32>(0);
        ${C("value",0,"u32")}
        ${C("value",1,"u32")}
        ${C("value",2,"u32")}
        ${C("value",3,"u32")}
        ${b.setByOffset("global_idx","value")}
      `}else A=`
      let outputIndices = ${b.offsetToIndices("global_idx")};
      ${T("")};
      let value = ${x.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(x,S,b)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${A}
      }`};return{name:"Gather",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:v}},dv=e=>Ze({axis:e.axis}),fv=(e,r)=>{let i=e.inputs;gg(i),e.compute(yg(e.inputs,r))}}),wg,vg,pv,hv,p_=re(()=>{Ae(),Be(),gt(),Me(),wg=(e,r)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=Q.normalizeAxis(r.quantizeAxis,e[0].dims.length),s=r.blockSize,o=e[0],d=e[2],u=e.length===4?e[3]:void 0;if(d.dims.length!==o.dims.length||!o.dims.map((h,m)=>m===i?Math.ceil(h/s)===d.dims[m]:h===d.dims[m]).reduce((h,m)=>h&&m,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(u){if(u.dataType!==o.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(u.dims.length!==d.dims.length||!u.dims.map((h,m)=>h===d.dims[m]).reduce((h,m)=>h&&m,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},vg=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,d=Q.normalizeAxis(r.gatherAxis,o),u=Q.normalizeAxis(r.quantizeAxis,o),h=i.slice(0);h.splice(d,1,...s);let m=Q.size(h),g=e[2].dataType,_=e[0].dataType===22,v=[{type:12,data:m},{type:12,data:u},{type:12,data:d},{type:12,data:r.blockSize},...he(...e.map((x,S)=>x.dims),h)],f=x=>{let S=Z("data",e[0].dataType,e[0].dims.length),b=Z("inputIndices",e[1].dataType,e[1].dims.length),T=Z("scales",e[2].dataType,e[2].dims.length),A=e.length>3?Z("zeroPoint",e[3].dataType,e[3].dims.length):void 0,C=be("output",g,h.length),O=[S,b,T];A&&O.push(A);let R=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${x.registerUniforms(R).declareVariables(...O,C)}
        ${x.mainStart()}
        let output_indices = ${C.offsetToIndices("global_idx")};
        var indices_indices = ${b.type.indices}(0);
        ${s.length>1?`
          for (var i: u32 = 0; i < ${s.length}; i++) {
            let index = ${C.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${b.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${C.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${S.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${C.indicesGet("output_indices","i")};
          ${S.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${b.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[d]};
        }
        ${S.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${h.length}; i++) {
          let index = ${C.indicesGet("output_indices",`i + ${s.length} - 1`)};
          ${S.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${S.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${S.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${_?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${T.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${T.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${T.getByIndices("scale_indices")};
        ${A?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${A.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${A.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${_?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Pt(g)}(quantized_data - zero_point) * scale;
        ${C.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${r.cacheKey};${e.filter((x,S)=>S!==1).map(x=>x.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(x,S)=>"rank")},getRunData:()=>({outputs:[{dims:h,dataType:g}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:f}},pv=(e,r)=>{let i=e.inputs;wg(i,r),e.compute(vg(e.inputs,r))},hv=e=>Ze({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),_g,$g,mv,gv,h_=re(()=>{Ae(),Be(),gt(),Me(),_g=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},$g=(e,r)=>{let i=e[0].dims,s=e[0].dataType,o=i.length,d=e[1].dims,u=e[1].dataType,h=Q.normalizeAxis(r.axis,o),m=i[h],g=d.slice(0),_=Q.size(g),v=Z("input",s,o),f=Z("indicesInput",u,d.length),x=be("output",s,g.length),S=[{type:12,data:_},{type:6,data:m},{type:12,data:h}];return S.push(...he(i,d,g)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:g,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:S}),getShaderSource:b=>`
      ${b.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(v,f,x)}
      ${b.mainStart()}
      ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${x.offsetToIndices("global_idx")};

      var idx = ${f.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${v.type.indices}(outputIndices);
      ${v.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${v.getByIndices("inputIndices")};

      ${x.setByOffset("global_idx","value")};
  }`}},mv=e=>Ze({axis:e.axis}),gv=(e,r)=>{let i=e.inputs;_g(i),e.compute($g(e.inputs,r))}}),xg,bg,yv,wv,m_=re(()=>{Ae(),Be(),Me(),xg=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},bg=(e,r)=>{let i=e[0].dims.slice(),s=e[1].dims.slice(),[o,d,u]=_0.getShapeOfGemmResult(i,r.transA,s,r.transB,e.length===3?e[2].dims:void 0),h=[o,d];if(!h)throw new Error("Can't use gemm on the given tensors");let m=Q.size(h),g=[{type:12,data:m},{type:12,data:o},{type:12,data:d},{type:12,data:u},{type:1,data:r.alpha},{type:1,data:r.beta}],_=["type","type"];e.length===3&&(g.push(...he(e[2].dims)),_.push("rank")),g.push(...he(h));let v=f=>{let x="";r.transA&&r.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":r.transA&&!r.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!r.transA&&r.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!r.transA&&!r.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=r.alpha===1?"":"value *= uniforms.alpha;",b=Z("a",e[0].dataType,e[0].dims),T=Z("b",e[1].dataType,e[1].dims),A=b.type.value,C=null,O=[b,T];e.length===3&&(C=Z("c",e[2].dataType,e[2].dims.length),O.push(C));let R=be("output",e[0].dataType,h.length);O.push(R);let B=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${f.registerUniforms(B).declareVariables(...O)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${A}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${x}
    }

    ${S}
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",R)}; value += ${A}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`};return{name:"Gemm",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:h,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:v}},yv=e=>{let r=e.transA,i=e.transB,s=e.alpha,o=e.beta;return{transA:r,transB:i,alpha:s,beta:o,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},wv=(e,r)=>{xg(e.inputs),e.compute(bg(e.inputs,r))}}),jt,Sg,vv,cc,kg,Xs,_v,$v=re(()=>{Ae(),Be(),gt(),lf(),ff(),Me(),Qr(),jt=(e,r)=>e.length>r&&e[r].dims.length>0?e[r]:void 0,Sg=(e,r)=>{let i=e[0],s=jt(e,1),o=jt(e,2),d=jt(e,3),u=jt(e,4),h=jt(e,5),m=jt(e,6),g=jt(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let _=i.dims[0],v=i.dims[1],f=i.dims.length===3?i.dims[2]:r.numHeads*i.dims[4],x=v,S=0,b=0,T=Math.floor(f/r.numHeads);if(m&&g&&Q.size(m.dims)&&Q.size(g.dims)){if(m.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(m.dims[0]!==_||m.dims[1]!==r.numHeads||m.dims[3]!==T)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(g.dims[0]!==_||g.dims[1]!==r.numHeads||g.dims[3]!==T)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(m.dims[2]!==g.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(g.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');S=m.dims[2],b=m.dims[2]}else if(m&&Q.size(m.dims)||g&&Q.size(g.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A;if(s&&Q.size(s.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(s.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');A=2,x=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==T)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');A=5,x=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==T)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');A=0,x=s.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==r.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}if(d&&Q.size(d.dims)>0){if(d.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(s&&s.dims.length===5&&s.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let C=S+x,O=0;if(u&&Q.size(u.dims)>0){O=8;let U=u.dims;throw U.length===1?U[0]===_?O=1:U[0]===3*_+2&&(O=3):U.length===2&&U[0]===_&&U[1]===C&&(O=5),O===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let R=!1,B=f;if(o&&Q.size(o.dims)>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(x!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');B=o.dims[2]}else{if(x!==o.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');B=o.dims[1]*o.dims[3],R=!0}}let F=!1;if(u&&Q.size(u.dims)>0)throw new Error("Key padding mask is not supported");if(h&&Q.size(h.dims)>0){if(h.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(h.dims[0]!==_||h.dims[1]!==r.numHeads||h.dims[2]!==v||h.dims[3]!==C)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:_,sequenceLength:v,pastSequenceLength:S,kvSequenceLength:x,totalSequenceLength:C,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:f,vHiddenSize:B,headSize:T,vHeadSize:Math.floor(B/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:O,scale:r.scale,broadcastResPosBias:F,passPastInKv:R,qkvFormat:A}},vv=e=>Ze({...e}),cc=Ze({perm:[0,2,1,3]}),kg=(e,r,i,s,o,d,u)=>{let h=[s,o,d],m=Q.size(h),g=[{type:12,data:m},{type:12,data:u},{type:12,data:d}],_=v=>{let f=be("qkv_with_bias",r.dataType,h),x=Z("qkv",r.dataType,h),S=Z("bias",i.dataType,h),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${v.registerUniforms(b).declareVariables(x,S,f)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:h,dataType:r.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:_},{inputs:[r,i],outputs:[-1]})[0]},Xs=(e,r,i,s,o,d,u,h)=>{let m=d;if(u&&Q.size(u.dims)>0){if(s===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return m=kg(e,d,u,r,s,i*o,h),m=m.reshape([r,s,i,o]),i===1||s===1?m:e.compute(ln(m,cc.perm),{inputs:[m],outputs:[-1]})[0]}else return d.dims.length===3&&(m=d.reshape([r,s,i,o])),i===1||s===1?m:e.compute(ln(m,cc.perm),{inputs:[m],outputs:[-1]})[0]},_v=(e,r)=>{let i=Sg(e.inputs,r),s=e.inputs[0],o=jt(e.inputs,1),d=jt(e.inputs,2),u=jt(e.inputs,3),h=jt(e.inputs,4),m=jt(e.inputs,5),g=jt(e.inputs,6),_=jt(e.inputs,7);if(s.dims.length===5)throw new Error("Packed QKV is not implemented");if((o==null?void 0:o.dims.length)===5)throw new Error("Packed KV is not implemented");let v=o&&d&&o.dims.length===4&&d.dims.length===4,f=Xs(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,s,u,0);if(v)return eo(e,f,o,d,h,void 0,g,_,m,i,r);if(!o||!d)throw new Error("key and value must be provided");let x=Xs(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,o,u,i.hiddenSize),S=Xs(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,d,u,2*i.hiddenSize);eo(e,f,x,S,h,void 0,g,_,m,i,r)}}),fc,Eg,Cg,Vc,xv,bv=re(()=>{Ae(),Be(),Me(),fc=e=>Array.from(e.getBigInt64Array(),Number),Eg=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(fc(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Cg=(e,r)=>{let i=[];for(let s=0;s<e.length;++s)i.push(e[s]*r[s]);return i},Vc=(e,r)=>{let i=e[0].dims,s=r??fc(e[1]),o=Cg(i,s),d=Q.size(o),u=e[0].dataType,h=Z("input",u,i.length),m=be("output",u,o.length),g=_=>`
      const inputShape = ${h.indices(...i)};
      ${_.registerUniform("output_size","u32").declareVariables(h,m)}
      ${_.mainStart()}
      ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${m.offsetToIndices("global_idx")};
      var input_indices: ${h.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${h.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${m.indicesGet("output_indices","i")}  % input_dim_i;

        ${h.indicesSet("input_indices","i","input_dim_value")}
      }
      ${m.setByOffset("global_idx",h.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...he(e[0].dims,o)]}),getShaderSource:g}},xv=e=>{Eg(e.inputs),e.compute(Vc(e.inputs),{inputs:[0]})}}),Tg,pc,Sv,Ig,hc,kv,g_=re(()=>{Ae(),Be(),gt(),ff(),Me(),$v(),bv(),Qr(),Tg=(e,r)=>{let i=e[0],s=e[1],o=e[2],d=e[3],u=e[4];if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=!1,m=i.dims[0],g=i.dims[1],_=i.dims.length===3?h?i.dims[2]/3:i.dims[2]:r.numHeads*i.dims[4],v=g,f=0,x=0,S=Math.floor(_/r.numHeads),b=d&&d.dims.length!==0,T=u&&u.dims.length!==0,A=!0;if(b&&T){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=d.dims[1],x=d.dims[1]}else if(b||T)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let C;if(s){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(i.dims[2]%s.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');C=2,v=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');C=5,v=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');C=0,v=s.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==r.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');C=3}let O=0,R=!1,B=_;if(o){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(v!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');B=o.dims[2]}else{if(v!==o.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');B=o.dims[1]*o.dims[3],R=!0}}let F=f+v;return{batchSize:m,sequenceLength:g,pastSequenceLength:f,kvSequenceLength:v,totalSequenceLength:F,maxSequenceLength:x,inputHiddenSize:0,hiddenSize:_,vHiddenSize:B,headSize:S,vHeadSize:Math.floor(B/r.kvNumHeads),numHeads:r.numHeads,kvNumHeads:r.kvNumHeads,nReps:r.numHeads/r.kvNumHeads,pastPresentShareBuffer:!1,maskType:O,scale:r.scale,broadcastResPosBias:!1,passPastInKv:R,qkvFormat:C,isPastkvBSNH:A}},pc=(e,r,i,s)=>{let o=[s.batchSize,s.totalSequenceLength,s.kvNumHeads,s.headSize],d=4,u=Q.size(o)/d,h=s.totalSequenceLength,m=be("present_kv",i,o.length,d),g=Z("new_kv",e.dataType,e.dims.length,d),_=r?Z("past_kv",r.dataType,r.dims.length,d):void 0,v=Math.ceil(s.headSize/d),f={x:h,y:e.dims[0],z:1},x=r?["rank","rank"]:["rank"],S=[{type:12,data:u},{type:12,data:s.pastSequenceLength},{type:12,data:s.kvSequenceLength},{type:12,data:s.totalSequenceLength}],b=[g];_?(S.push(...he(e.dims),...he(r.dims),...he(o)),b.push(_)):S.push(...he(e.dims),...he(o));let T=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],A=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
        var past_head_stride = uniforms.past_seqlen * H;
        if (is_bsnh) {
          past_head_stride = H;
        }
        let in_offset = b * past_batch_stride + s * row_stride + n * past_head_stride + h;
        present_kv[out_offset] = past_kv[in_offset];`,C=`      let new_batch_stride = uniforms.new_seqlen * num_heads * H;
        let new_row_stride = num_heads * H;
        let new_head_stride = H;
        let in_offset = b * new_batch_stride + (s - past_seqlen) * new_row_stride + n * new_head_stride + h;
        present_kv[out_offset] = new_kv[in_offset];`,O=r?`if (s < past_seqlen) {
        ${A}
        } else if (s < past_seqlen + uniforms.new_seqlen) {
        ${C}
        }`:`if (s < past_seqlen + uniforms.new_seqlen) {
          ${C}
        }`,R=B=>`

  ${B.registerUniforms(T).declareVariables(...b,m)}
  ${B.mainStart([v,s.kvNumHeads,1])}
    ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    var indices = ${m.offsetToIndices("global_idx")};
    let h = local_id.x;
    let n = local_id.y;
    let s = workgroup_id.x;
    let b = workgroup_id.y;
    let num_heads = ${s.kvNumHeads}u;
    let H = ${v}u;

    let present_seqlen = uniforms.present_seqlen;
    let present_batch_stride = present_seqlen * num_heads * H;
    var row_stride = H;
    let is_bsnh = ${s.isPastkvBSNH};

    if (is_bsnh) {
      row_stride = num_heads * H;
    }
    var present_head_stride = present_seqlen * H;
    if (is_bsnh) {
      present_head_stride = H;
    }

    let past_seqlen = uniforms.past_seqlen;

    let out_offset = b * present_batch_stride + s * row_stride + n * present_head_stride + h;
    ${O}
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${s.kvNumHeads}${v}${!!r}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:f,programUniforms:S}),getShaderSource:R}},Sv=e=>Ze({...e}),Ig=Ze({perm:[0,2,1,3]}),hc=(e,r,i,s,o)=>{let d=r,u=s.kvNumHeads,h=s.nReps;return r.dims.length===3&&s.kvSequenceLength!==0&&(d=r.reshape([s.batchSize,s.kvSequenceLength,u,s.headSize])),i?d=e.compute(pc(d,i,d.dataType,s),{inputs:[d,i],outputs:[s.isPastkvBSNH?o:-1]})[0]:d=e.compute(pc(d,void 0,d.dataType,s),{inputs:[d],outputs:[s.isPastkvBSNH?o:-1]})[0],h!==1&&(d=e.compute(Vc([d],[1,1,1,h]),{inputs:[d],outputs:[-1]})[0],d=d.reshape([s.batchSize,s.totalSequenceLength,u*h,s.headSize])),e.compute(ln(d,Ig.perm),{inputs:[d],outputs:[-1]})[0]},kv=(e,r)=>{var m;let i=Tg(e.inputs,r);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((m=e.inputs[1])==null?void 0:m.dims.length)===5)throw new Error("Packed KV is not implemented");let s=Xs(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,e.inputs[0],void 0,0),o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,d=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=hc(e,e.inputs[1],o,i,1),h=hc(e,e.inputs[2],d,i,2);eo(e,s,u,h,void 0,void 0,void 0,void 0,void 0,i,r)}}),mc,zg,Ag,Ev,y_=re(()=>{Ae(),Be(),Qr(),Me(),mc=(e,r,i,s,o,d,u,h)=>{let m=pt(d),g=m===1?"f32":`vec${m}f`,_=m===1?"vec2f":`mat2x${m}f`,v=o*u,f=[o,u,d/m],x=[o,u,2],S=["rank","type","type"],b=[];b.push(...he(f,x));let T=A=>{let C=Z("x",r.dataType,3,m),O=Z("scale",i.dataType,i.dims),R=Z("bias",s.dataType,s.dims),B=be("output",1,3,2),F=[C,O,R,B],U=64;return`
  var<workgroup> workgroup_shared : array<${_}, ${U}>;
  const workgroup_size = ${U}u;
  ${A.declareVariables(...F)}
  ${A.mainStart(U)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${g}(0);
    var squared_sum = ${g}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${g}(${C.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${_}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${Hr("workgroup_shared[0][0]",m)} / f32(hight * ${m});
      let squared_sum_final = ${Hr("workgroup_shared[0][1]",m)} / f32(hight * ${m});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${h}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${m};${h}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:x,dataType:1}],dispatchGroup:{x:v},programUniforms:b}),getShaderSource:T},{inputs:[r,i,s],outputs:[-1]})[0]},zg=(e,r,i)=>{let s=r[0].dims,o=s,d=2,u=s[0],h=s[1],m=Q.sizeFromDimension(s,d),g=pt(m),_=Q.size(o)/g,v=mc(e,r[0],r[1],r[2],u,m,h,i.epsilon),f=[u,h,m/g],x=[u,h],S=["type","none"],b=T=>{let A=Z("x",r[0].dataType,f.length,g),C=Z("scale_shift",1,x.length,2),O=be("output",r[0].dataType,f.length,g),R=[A,C,O];return`
  ${T.registerUniform("output_size","u32").declareVariables(...R)}
  ${T.mainStart()}
  ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${O.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${C.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${A.getByOffset("global_idx")} * ${O.type.value}(scale_shift.x) + ${O.type.value}(scale_shift.y);
      ${O.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${g}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...he(f,x,f)]}),getShaderSource:b},{inputs:[r[0],v]})},Ag=(e,r,i)=>{let s=r[0].dims,o=s,d=s[0],u=s[s.length-1],h=Q.sizeFromDimension(s,1)/u,m=pt(u),g=Q.size(o)/m,_=[{type:12,data:h},{type:12,data:Math.floor(u/m)}],v=["type","type"],f=[0,s.length-1];for(let T=0;T<s.length-2;T++)f.push(T+1);let x=e.compute(ln(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0],S=mc(e,x,r[1],r[2],d,h,u,i.epsilon),b=T=>{let A=vt(r[0].dataType),C=m===1?"vec2f":`mat${m}x2f`,O=F=>{let U=F===0?"x":"y",Y=m===1?"f32":`vec${m}f`;switch(m){case 1:return`${A}(${Y}(scale.${U}))`;case 2:return`vec2<${A}>(${Y}(scale[0].${U}, scale[1].${U}))`;case 4:return`vec4<${A}>(${Y}(scale[0].${U}, scale[1].${U}, scale[2].${U}, scale[3].${U}))`;default:throw new Error(`Not supported compoents ${m}`)}},R=Z("input",r[0].dataType,r[0].dims,m),B=be("output",r[0].dataType,o,m);return`
  @group(0) @binding(0) var<storage, read> input : array<${R.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${B.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${T.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${O(0)}, ${O(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${m}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:b},{inputs:[r[0],S]})},Ev=(e,r)=>{r.format==="NHWC"?Ag(e,e.inputs,r):zg(e,e.inputs,r)}}),Rg,Og,Cv,w_=re(()=>{Ae(),Be(),Me(),Rg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Og=(e,r,i)=>{let s=r.simplified,o=e[0].dims,d=e[1],u=!s&&e[2],h=o,m=Q.normalizeAxis(r.axis,o.length),g=Q.sizeToDimension(o,m),_=Q.sizeFromDimension(o,m),v=Q.size(d.dims),f=u?Q.size(u.dims):0;if(v!==_||u&&f!==_)throw new Error(`Size of X.shape()[axis:] == ${_}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${v} and bias size of ${f}`);let x=[];for(let B=0;B<o.length;++B)B<m?x.push(o[B]):x.push(1);let S=pt(_),b=["type","type"],T=[{type:12,data:g},{type:1,data:_},{type:12,data:Math.floor(_/S)},{type:1,data:r.epsilon}];u&&b.push("type");let A=i>1,C=i>2,O=B=>{let F=vt(e[0].dataType),U=[Z("x",e[0].dataType,e[0].dims,S),Z("scale",d.dataType,d.dims,S)];u&&U.push(Z("bias",u.dataType,u.dims,S)),U.push(be("output",e[0].dataType,h,S)),A&&U.push(be("mean_data_output",1,x)),C&&U.push(be("inv_std_output",1,x));let Y=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${B.registerUniforms(Y).declareVariables(...U)}
  ${B.mainStart()}
    ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Bc("f32",S)};
    var mean_square_vector = ${Bc("f32",S)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${za(F,S,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${Hr("mean_vector",S)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${Hr("mean_square_vector",S)} / uniforms.norm_size ${s?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${za(F,S,"x[j + offset]")};
      let f32scale = ${za(F,S,"scale[j]")};
      output[j + offset] = ${U[0].type.value}((f32input ${s?"":"- mean"}) * inv_std_dev * f32scale
        ${u?`+ ${za(F,S,"bias[j]")}`:""}
      );
    }

    ${A?"mean_data_output[global_idx] = mean":""};
    ${C?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},R=[{dims:h,dataType:e[0].dataType}];return A&&R.push({dims:x,dataType:1}),C&&R.push({dims:x,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${S};${i};${s}`,inputDependencies:b},getRunData:()=>({outputs:R,dispatchGroup:{x:Math.ceil(g/64)},programUniforms:T}),getShaderSource:O}},Cv=(e,r)=>{Rg(e.inputs),e.compute(Og(e.inputs,r,e.outputCount))}}),Pg,Bg,Mg,Tv,Iv,v_=re(()=>{Ae(),Be(),gt(),Me(),Pg=(e,r)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],s=i.dims.length;if(i.dims[s-1]!==r.k)throw new Error("The last dim of input shape does not match the k value");let o=Math.floor((r.k+r.blockSize-1)/r.blockSize),d=r.blockSize/8*r.bits,u=e[1];if(!Q.areEqual(u.dims,[r.n,o,d]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let h=e[2].dims;if(Q.size(h)!==r.n*o)throw new Error("scales input size error.");if(e.length===4){let m=e[3].dims,g=r.bits>4?r.n*o:r.n*Math.floor((o+1)/2);if(Q.size(m)!==g)throw new Error("zeroPoints input size error.")}},Bg=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],d=r.k,u=r.n,h=i.slice(0,s-2),m=Q.size(h),g=e[1].dims[2]/4,_=e[0].dataType,v=pt(r.k),f=pt(g),x=pt(u),S=h.concat([o,u]),b=o>1&&u/x%2===0?2:1,T=Q.size(S)/x/b,A=64,C=[],O=[m,o,d/v],R=Q.convertShape(e[1].dims).slice();R.splice(-1,1,g/f),C.push(...he(O)),C.push(...he(R)),C.push(...he(e[2].dims)),e.length===4&&C.push(...he(Q.convertShape(e[3].dims)));let B=[m,o,u/x];C.push(...he(B));let F=U=>{let Y=O.length,ae=Z("a",e[0].dataType,Y,v),oe=Z("b",12,R.length,f),me=Z("scales",e[2].dataType,e[2].dims.length),ge=[ae,oe,me],le=e.length===4?Z("zero_points",12,e[3].dims.length):void 0;le&&ge.push(le);let Te=B.length,Oe=be("output",e[0].dataType,Te,x),ve=vt(e[0].dataType),Se=(()=>{switch(v){case 1:return`array<${ve}, 8>`;case 2:return`mat4x2<${ve}>`;case 4:return`mat2x4<${ve}>`;default:throw new Error(`${v}-component is not supported.`)}})(),q=()=>{let z=`
          // reuse a data
            var input_offset = ${ae.indicesToOffset(`${ae.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Se};
            for (var j: u32 = 0; j < ${8/v}; j++) {
              a_data[j] = ${ae.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let N=0;N<x*b;N++)z+=`
            b_value = ${f===1?`b${N}_data`:`b${N}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Se}(${Array.from({length:4},(ne,ce)=>`${ve}(b_value_lower[${ce}]), ${ve}(b_value_upper[${ce}])`).join(", ")});
            b_dequantized_values = ${v===1?`${Se}(${Array.from({length:8},(ne,ce)=>`(b_quantized_values[${ce}] - ${le?`zero_point${N}`:"zero_point"}) * scale${N}`).join(", ")});`:`(b_quantized_values - ${Se}(${Array(8).fill(`${le?`zero_point${N}`:"zero_point"}`).join(",")})) * scale${N};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(N/x)}]${x>1?`[${N%x}]`:""} += ${Array.from({length:8/v},(ne,ce)=>`${v===1?`a_data[${ce}] * b_dequantized_values[${ce}]`:`dot(a_data[${ce}], b_dequantized_values[${ce}])`}`).join(" + ")};
          `;return z},J=()=>{let z=`
            var col_index = col * ${x};
            ${le?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${ve}(8);`}
            `;for(let N=0;N<x*b;N++)z+=`
            let scale${N} = ${me.getByOffset("col_index * nBlocksPerCol + block")};
            ${le?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${le.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${N} = ${ve}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return z},G=()=>{let z=`col_index = col * ${x};`;for(let N=0;N<x*b;N++)z+=`
            let b${N}_data = ${oe.getByIndices(`${oe.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return z+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Se};
            var b_dequantized_values: ${Se};`,z};return`
        var<workgroup> workgroup_shared: array<${Oe.type.value}, ${b*A}>;
        ${U.declareVariables(...ge,Oe)}
        ${U.mainStart([A,1,1])}
          let output_indices = ${Oe.offsetToIndices(`(global_idx / ${A}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${A}) {
            //process one block
            var word_offset: u32 = block * ${r.blockSize/v};
            ${J()}
            for (var word: u32 = 0; word < ${g}; word += ${f}) {
              ${G()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${q()}
                word_offset += ${8/v};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${Oe.type.value} = ${Oe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${A}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${Oe.setByIndices(`${Oe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${r.blockSize};${r.bits};${v};${f};${x};${b};${A}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:_}],dispatchGroup:{x:T},programUniforms:C}),getShaderSource:F}},Mg=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],d=r.k,u=r.n,h=i.slice(0,s-2),m=Q.size(h),g=e[1].dims[2]/4,_=e[0].dataType,v=pt(r.k),f=pt(g),x=h.concat([o,u]),S=128,b=u%8===0?8:u%4===0?4:1,T=S/b,A=T*f*8,C=A/v,O=A/r.blockSize,R=Q.size(x)/b,B=[],F=[m,o,d/v],U=Q.convertShape(e[1].dims).slice();U.splice(-1,1,g/f),B.push(...he(F)),B.push(...he(U)),B.push(...he(e[2].dims)),e.length===4&&B.push(...he(Q.convertShape(e[3].dims)));let Y=[m,o,u];B.push(...he(Y));let ae=oe=>{let me=F.length,ge=Z("a",e[0].dataType,me,v),le=Z("b",12,U.length,f),Te=Z("scales",e[2].dataType,e[2].dims.length),Oe=[ge,le,Te],ve=e.length===4?Z("zero_points",12,e[3].dims.length):void 0;ve&&Oe.push(ve);let Se=Y.length,q=be("output",e[0].dataType,Se),J=vt(e[0].dataType),G=()=>{switch(v){case 1:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${J}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${J}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${v}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ge.type.value}, ${C}>;
        var<workgroup> inter_results: array<array<${q.type.value}, ${T}>, ${b}>;
        ${oe.declareVariables(...Oe,q)}
        ${oe.mainStart([T,b,1])}
          let output_indices = ${q.offsetToIndices(`workgroup_index * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${O} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${C};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${C}; a_offset += ${S})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ge.getByIndices(`${ge.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ge.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${O} + local_id.x;
            ${ve?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${ve.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${J}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${J}(8);`}
            let scale = ${Te.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${le.getByIndices(`${le.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${r.blockSize/v};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${G()}
              let b_value = ${f===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${J}>(${Array.from({length:4},(z,N)=>`${J}(b_value_lower[${N}]), ${J}(b_value_upper[${N}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${J}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(z,N)=>`${`dot(a_data${N}, b_dequantized_values[${N}])`}`).join(" + ")};
              word_offset += ${8/v};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${q.type.value} = ${q.type.value}(0);
            for (var b = 0u; b < ${T}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${q.setByIndices(`${q.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${r.blockSize};${v};${f};${T};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:x,dataType:_}],dispatchGroup:{x:R},programUniforms:B}),getShaderSource:ae}},Tv=(e,r)=>{Pg(e.inputs,r),r.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Mg(e.inputs,r)):e.compute(Bg(e.inputs,r))},Iv=e=>Ze(e)}),Dg,Ng,Lg,Ug,jg,Fg,Wg,Vg,zv,__=re(()=>{Ae(),Be(),Me(),Dg=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let r=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(r=e[3].dims[0]*2===e[1].dims[0]),!r)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ng=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
            k = i32(${e.indicesGet("indices",o)}) - ${we("uniforms.pads",o,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${we("uniforms.x_shape",o,r)})) {
              break;
            }
            offset += k * i32(${we("uniforms.x_strides",o,r)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${s}
            value = x[offset];
          }
      `},Lg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${we("uniforms.pads",o,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${we("uniforms.x_shape",o,r)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${we("uniforms.x_shape",o,r)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${we("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Ug=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${we("uniforms.pads",o,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${we("uniforms.x_shape",o,r)})) {
                  k = i32(${we("uniforms.x_shape",o,r)}) - 1;
                }
                offset += k * i32(${we("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},jg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${we("uniforms.pads",o,i)};
                if (k < 0)  {
                  k += i32(${we("uniforms.x_shape",o,r)}]);
                }
                if (k >= i32(${we("uniforms.x_shape",o,r)})) {
                  k -= i32(${we("uniforms.x_shape",o,r)});
                }
                offset += k * i32(${we("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Fg=(e,r,i)=>{switch(i.mode){case 0:return Ng(e,r,i.pads.length);case 1:return Lg(e,r,i.pads.length);case 2:return Ug(e,r,i.pads.length);case 3:return jg(e,r,i.pads.length);default:throw new Error("Invalid mode")}},Wg=(e,r)=>{let i=Q.padShape(e[0].dims.slice(),r.pads),s=e[0].dims,o=Q.size(i),d=[{type:12,data:o},{type:6,data:r.pads}],u=e.length>=3&&e[2].data;r.mode===0&&d.push({type:u?e[2].dataType:1,data:r.value}),d.push(...he(e[0].dims,i));let h=["rank"],m=g=>{let _=be("output",e[0].dataType,i.length),v=Z("x",e[0].dataType,s.length),f=v.type.value,x=Fg(_,s.length,r),S=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:r.pads.length}];return r.mode===0&&S.push({name:"constant_value",type:u?f:"f32"}),`
            ${g.registerUniforms(S).declareVariables(v,_)}
            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${_.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${x}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${r.mode}${u}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(Q.size(i)/64)},programUniforms:d}),getShaderSource:m}},Vg=(e,r)=>{if(e.length>1){let i=e[1].getBigInt64Array(),s=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,o=e[0].dims.length,d=new Int32Array(2*o).fill(0);if(e.length>=4){let h=e[3].getBigInt64Array();for(let m=0;m<h.length;m++)d[Number(h[m])]=Number(i[m]),d[Number(h[m])+o]=Number(i[m+h.length])}else i.forEach((h,m)=>d[Number(m)]=Number(h));let u=[];return d.forEach(h=>u.push(h)),{mode:r.mode,value:s,pads:u}}else return r},zv=(e,r)=>{Dg(e.inputs);let i=Vg(e.inputs,r);e.compute(Wg(e.inputs,i),{inputs:[0]})}}),Fs,gc,yc,wc,vc,Hg,qg,_c,$c,Av,Rv,xc,Ov,Pv,bc,Bv,Mv,Dv,Nv,$_=re(()=>{Mn(),Ae(),Be(),Me(),Fs=e=>{if(Je.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},gc=(e,r,i)=>{let s=r.format==="NHWC",o=e.dims.slice();s&&o.splice(1,0,o.pop());let d=Object.hasOwnProperty.call(r,"dilations"),u=r.kernelShape.slice(),h=r.strides.slice(),m=d?r.dilations.slice():[],g=r.pads.slice();Xu.adjustPoolAttributes(i,o,u,h,m,g);let _=Xu.computePoolOutputShape(i,o,h,m,u,g,r.autoPad),v=Object.assign({},r);d?Object.assign(v,{kernelShape:u,strides:h,pads:g,dilations:m,cacheKey:r.cacheKey}):Object.assign(v,{kernelShape:u,strides:h,pads:g,cacheKey:r.cacheKey});let f=_.slice();return f.push(f.splice(1,1)[0]),[v,s?f:_]},yc=(e,r)=>{let i=r.format==="NHWC",s=Q.size(e),o=Q.size(r.kernelShape),d=[{type:12,data:s},{type:12,data:o}],u=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(r.kernelShape.length<=2){let h=r.kernelShape[r.kernelShape.length-1],m=r.strides[r.strides.length-1],g=r.pads[r.pads.length/2-1],_=r.pads[r.pads.length-1],v=!!(g+_);d.push({type:12,data:h},{type:12,data:m},{type:12,data:g},{type:12,data:_}),u.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(r.kernelShape.length===2){let x=r.kernelShape[r.kernelShape.length-2],S=r.strides[r.strides.length-2],b=r.pads[r.pads.length/2-2],T=r.pads[r.pads.length-2];f=!!(b+T),d.push({type:12,data:x},{type:12,data:S},{type:12,data:b},{type:12,data:T}),u.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[d,u,!0,v,f]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let h=Q.computeStrides(r.kernelShape);d.push({type:12,data:h},{type:12,data:r.pads},{type:12,data:r.strides}),u.push({name:"kernelStrides",type:"u32",length:h.length},{name:"pads",type:"u32",length:r.pads.length},{name:"strides",type:"u32",length:r.strides.length});let m=r.pads.reduce((g,_)=>g+_);return[d,u,!!m,!1,!1]}},wc=(e,r,i,s,o,d,u,h,m,g,_,v)=>{let f=o.format==="NHWC",x=r.type.value,S=be("output",r.type.tensor,s);if(o.kernelShape.length<=2){let b="",T="",A="",C=i-(f?2:1);if(_?b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${C}] < 0 || xIndices[${C}]
                      >= uniforms.x_shape[${C}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${d}
                }`:b=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${C}] = indices[${C}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${d}
                }`,o.kernelShape.length===2){let O=i-(f?3:2);v?T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${O}] = indices[${O}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${O}] < 0 || xIndices[${O}] >= uniforms.x_shape[${O}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:T=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${O}] = indices[${O}] * uniforms.sh - uniforms.phStart + j;
                `,A=`
              }
            `}return`
            ${e.registerUniforms(m).declareVariables(r,S)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${S.offsetToIndices("global_idx")};
              var xIndices = ${S.offsetToIndices("global_idx")};

              var value = ${x}(${h});
              var pad = 0;
              ${T}
              ${b}
              ${A}
              ${u}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=o.kernelShape.length,T=o.pads.length,A="";return g?A=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${r.indicesToOffset("xIndices")}];
                ${d}
              }`:A=`
              }
              let x_val = x[${r.indicesToOffset("xIndices")}];
              ${d}
            `,`
            ${e.registerUniforms(m).declareVariables(r,S)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${S.offsetToIndices("global_idx")};
              var xIndices = ${S.offsetToIndices("global_idx")};

              var offsets: array<u32, ${b}>;

              var value = ${x}(${h});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${b-1}u; j++) {
                  offsets[j] = offset / ${we("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${we("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${i-b}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${we("uniforms.strides",`j - ${i-b}u`,b)}
                    + offsets[j - ${i-b}u] - ${we("uniforms.pads","j - 2u",T)};
                  ${A}
              }
              ${u}

              output[global_idx] = value;
            }`}},vc=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Hg=e=>`${vc(e)};${e.countIncludePad}`,qg=e=>`${vc(e)};${e.storageOrder};${e.dilations}`,_c=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),$c=(e,r,i,s)=>{let[o,d]=gc(r,s,i),u=Z("x",r.dataType,r.dims.length),h=u.type.value,m="value += x_val;",g="";o.countIncludePad?g+=`value /= ${h}(uniforms.kernelSize);`:g+=`value /= ${h}(i32(uniforms.kernelSize) - pad);`;let[_,v,f,x,S]=yc(d,o);_.push(...he(r.dims,d));let b=["rank"];return{name:e,shaderCache:{hint:`${s.cacheKey};${f};${x};${S}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:d,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(Q.size(d)/64)},programUniforms:_}),getShaderSource:T=>wc(T,u,r.dims.length,d.length,o,m,g,0,v,f,x,S)}},Av=e=>{let r=e.count_include_pad!==0,i=_c(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let s={countIncludePad:r,...i,cacheKey:""};return{...s,cacheKey:Hg(s)}},Rv=(e,r)=>{Fs(e.inputs),e.compute($c("AveragePool",e.inputs[0],!1,r))},xc={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Ov=e=>{let r=e.format;return{format:r,...xc,cacheKey:r}},Pv=(e,r)=>{Fs(e.inputs),e.compute($c("GlobalAveragePool",e.inputs[0],!0,r))},bc=(e,r,i,s)=>{let[o,d]=gc(r,s,i),u=`
      value = max(x_val, value);
    `,h="",m=Z("x",r.dataType,r.dims.length),g=["rank"],[_,v,f,x,S]=yc(d,o);return _.push(...he(r.dims,d)),{name:e,shaderCache:{hint:`${s.cacheKey};${f};${x};${S}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:d,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(Q.size(d)/64)},programUniforms:_}),getShaderSource:b=>wc(b,m,r.dims.length,d.length,o,u,h,r.dataType===10?-65504:-1e5,v,f,x,S)}},Bv=(e,r)=>{Fs(e.inputs),e.compute(bc("MaxPool",e.inputs[0],!1,r))},Mv=e=>{let r=e.storage_order,i=e.dilations,s=_c(e);if(r!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(s.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let o={storageOrder:r,dilations:i,...s,cacheKey:""};return{...o,cacheKey:qg(o)}},Dv=e=>{let r=e.format;return{format:r,...xc,cacheKey:r}},Nv=(e,r)=>{Fs(e.inputs),e.compute(bc("GlobalMaxPool",e.inputs[0],!0,r))}}),Gg,Kg,Lv,Uv,x_=re(()=>{Ae(),Be(),gt(),Me(),Gg=(e,r)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,s)=>i===e[2].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(r.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((o,d)=>d===r.axis||o===e[0].dims[d]).reduce((o,d)=>o&&d,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[r.axis],s=e[1].dims[r.axis];if(r.blockSize<Math.ceil(i/s)||r.blockSize>Math.ceil(i/(s-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Kg=(e,r)=>{let i=Q.normalizeAxis(r.axis,e[0].dims.length),s=e[0].dataType,o=s===3,d=e[0].dims,u=e[1].dataType,h=Q.size(d),m=s===3||s===2,g=m?[Math.ceil(Q.size(e[0].dims)/4)]:e[0].dims,_=e[1].dims,v=e.length>2?e[2]:void 0,f=v?m?[Math.ceil(Q.size(v.dims)/4)]:v.dims:void 0,x=_.length===0||_.length===1&&_[0]===1,S=x===!1&&_.length===1,b=pt(h),T=x&&(!m||b===4),A=T?b:1,C=T&&!m?b:1,O=Z("input",m?12:s,g.length,C),R=Z("scale",u,_.length),B=v?Z("zero_point",m?12:s,f.length):void 0,F=be("output",u,d.length,A),U=[O,R];B&&U.push(B);let Y=[g,_];v&&Y.push(f);let ae=[{type:12,data:h/A},{type:12,data:i},{type:12,data:r.blockSize},...he(...Y,d)],oe=me=>{let ge=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${me.registerUniforms(ge).declareVariables(...U,F)}
      ${me.mainStart()}
          ${me.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${F.offsetToIndices("global_idx")};

          // Set input x
          ${m?`
            let input = ${O.getByOffset("global_idx / 4")};
            let x_vec = ${o?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${A===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${O.getByOffset("global_idx")};`};

          // Set scale input
          ${x?`let scale_value= ${R.getByOffset("0")}`:S?`
            let scale_index = ${F.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${R.getByOffset("scale_index")};`:`
            var scale_indices: ${R.type.indices} = output_indices;
            let index = ${R.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${R.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${R.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${B?x?m?`
                let zero_point_input = ${B.getByOffset("0")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${B.getByOffset("0")}`:S?m?`
                let zero_point_index = ${F.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${B.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${F.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${B.getByOffset("zero_point_index")};`:m?`
                let zero_point_offset = ${R.indicesToOffset("scale_indices")};
                let zero_point_input = ${B.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${B.getByIndices("scale_indices")};`:`let zero_point_value = ${m?o?"i32":"u32":O.type.value}(0);`};
      // Compute and write output
      ${F.setByOffset("global_idx",`${F.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:r.cacheKey,inputDependencies:B?["rank","rank","rank"]:["rank","rank"]},getShaderSource:oe,getRunData:()=>({outputs:[{dims:d,dataType:u}],dispatchGroup:{x:Math.ceil(h/A/64),y:1,z:1},programUniforms:ae})}},Lv=(e,r)=>{Gg(e.inputs,r),e.compute(Kg(e.inputs,r))},Uv=e=>Ze({axis:e.axis,blockSize:e.blockSize})}),Qg,Yg,jv,b_=re(()=>{Mn(),Ae(),Me(),Qg=(e,r,i)=>{let s=e===r,o=e<r&&i<0,d=e>r&&i>0;if(s||o||d)throw new Error("Range these inputs' contents are invalid.")},Yg=(e,r,i,s)=>{let o=Math.abs(Math.ceil((r-e)/i)),d=[o],u=o,h=[{type:12,data:u},{type:s,data:e},{type:s,data:i},...he(d)],m=g=>{let _=be("output",s,d.length),v=_.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:v},{name:"delta",type:v}];return`
        ${g.registerUniforms(f).declareVariables(_)}
        ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${v}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${s}`},getShaderSource:m,getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},jv=e=>{let r=0,i=0,s=0;e.inputs[0].dataType===6?(r=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],s=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(r=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],s=e.inputs[2].getFloat32Array()[0]),Je.webgpu.validateInputContent&&Qg(r,i,s),e.compute(Yg(r,i,s,e.inputs[0].dataType),{inputs:[]})}}),Zg,Xg,Jg,ey,ty,ny,ry,iy,ay,sy,oy,Sc,uy,ly,dy,cy,fy,Fv,Wv,S_=re(()=>{Ae(),Be(),gt(),Me(),Zg=(e,r)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(r.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(r.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},Xg=(e,r,i)=>{r.every(o=>o>=0&&o<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let s=new Array(i).fill(1);return r.forEach((o,d)=>s[o]=e[d]),s},Jg=(e,r,i,s,o,d)=>{let[u,h,m]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],g=e[0].dims.length;if(u>0&&e.length>u&&e[u].dims.length>0)e[u].getFloat32Array().forEach(_=>d.push(_));else if(r.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(h>0&&e.length>h&&e[h].dims.length===1&&e[h].dims[0]>0){if(e[h].getFloat32Array().forEach(_=>s.push(_)),s.length!==0&&s.length!==g&&i>=18&&s.length!==r.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");Zg(s,r),r.axes.length>0&&Xg(s,r.axes,g).forEach((_,v)=>s[v]=_)}if(m>0&&e.length>m&&e[m].dims.length===1&&e[m].dims[0]>0&&(e[m].getBigInt64Array().forEach(_=>o.push(Number(_))),o.length!==0&&o.length!==g&&i>=18&&o.length!==r.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(r.axes.length>0){if(s.length!==0&&s.length!==r.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(o.length!==0&&o.length!==r.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof s<"u"&&typeof o<"u"&&s.length>0&&o.length>g)throw new Error("Resize requires only of scales or sizes to be specified")},ey=(e,r)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${r} { `+(()=>{switch(e){case"asymmetric":return`return ${r}(xResized) / ${r}(xScale);`;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${r}(xResized) + 0.5) / ${r}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${r}(xResized) + 0.5) / ${r}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    // The whole part and the fractional part are calculated separately due to inaccuracy of floating
                    // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
                    // offset-by-one error later in floor().
                    let whole = ${r}(xResized * (lengthOriginal - 1) / (lengthResized - 1));
                    let fract =
                        ${r}(xResized * (lengthOriginal - 1) % (lengthResized - 1)) / ${r}(lengthResized - 1);
                    return whole + fract;
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${r}(roiStart) * ${r}(lengthOriginal - 1) +
                        (${r}(xResized) * ${r}(roiEnd - roiStart) * ${r}(lengthOriginal - 1)) /
                        ${r}(lengthResized - 1);
                  } else {
                    return 0.5 * ${r}(roiStart + roiEnd) * ${r}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${r}xScale * ${r}(lengthResized);
                  const adjustment = ${r}(lengthResized) / outputWidth;
                  const center = ${r}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;case"half_pixel":return`return ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ty=(e,r,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(r<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ny=(e,r,i)=>{let s=new Array(i).fill(0).concat(new Array(i).fill(1)),o=e.length===0?s:e.slice();return r.length>0?(r.forEach((d,u)=>{s[d]=o[u],s[u+i]=o[r.length+u]}),s):o},ry=(e,r,i,s)=>{let o=[];if(i.length>0)if(s.length>0){if(e.forEach(d=>o.push(d)),Math.max(...s)>e.length)throw new Error("axes is out of bound");s.forEach((d,u)=>o[d]=i[u])}else i.forEach(d=>o.push(d));else{if(r.length===0)throw new Error("Resize requires either scales or sizes.");o=e.map((d,u)=>Math.round(d*r[u]))}return o},iy=(e,r,i)=>{let s=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(d=>r[d]),Number.MAX_VALUE):Math.min(...r,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(d=>r[d]),Number.MIN_VALUE):Math.max(...r,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();r.fill(1,0,r.length);let o=e.slice();return i.axes.length>0?(i.axes.forEach(d=>r[d]=s),i.axes.forEach(d=>o[d]=Math.round(e[d]*r[d]))):(r.fill(s,0,r.length),o.forEach((d,u)=>o[u]=Math.round(d*r[u]))),o},ay=(e,r,i,s,o)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${we("uniforms.scales","i",s)};
        var roi_low = ${we("uniforms.roi","i",o)};
        var roi_hi = ${we("uniforms.roi",`i + ${r.length}`,o)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${we("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${we("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,sy=(e,r,i,s,o,d,u)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${s.length}; i++) {
        var output_index = ${r.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${we("uniforms.scales","i",o)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${we("uniforms.roi","i",d)};
          var roi_hi = ${we("uniforms.roi",`i + ${i.length}`,d)};
          var input_shape_i = ${we("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${we("uniforms.output_shape","i",s.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${u} || (original_idx >= 0 && original_idx < ${r.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${r.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i"," input_index")}
      }
      return input_indices;
    }`,oy=(e,r)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${we("uniforms.input_shape","i",r.length)}) {
          return false;
        }
      }
      return true;
    }`,Sc=(e,r,i,s)=>e.rank>s?`
    ${e.indicesSet("input_indices",r,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",uy=(e,r,i,s,o)=>{let[d,u,h,m]=i.length===2?[-1,0,1,-1]:[0,2,3,1],g=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${g} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",u,`max(0, min(row, ${i[u]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(col, ${i[h]} - 1))`)};
      ${Sc(e,m,d,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${r.type.indices}) -> ${g} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${g} = originalIndices[${u}];
      var col:${g} = originalIndices[${h}];
      ${s?`if (row < 0 || row > (${i[u]} - 1) || col < 0 || col > (${i[h]} - 1)) {
        return ${o};
      }`:""};
      row = max(0, min(row, ${i[u]} - 1));
      col = max(0, min(col, ${i[h]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${m}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${d}])`:"0"};
      var x11: ${g} = getInputValue(batch, channel, row1, col1);
      var x12: ${g} = getInputValue(batch, channel, row1, col2);
      var x21: ${g} = getInputValue(batch, channel, row2, col1);
      var x22: ${g} = getInputValue(batch, channel, row2, col2);
      var dx1: ${g} = abs(row - ${g}(row1));
      var dx2: ${g} = abs(${g}(row2) - row);
      var dy1: ${g} = abs(col - ${g}(col1));
      var dy2: ${g} = abs(${g}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},ly=(e,r,i,s,o,d,u,h,m,g)=>{let _=i.length===2,[v,f]=_?[0,1]:[2,3],x=e.type.value,S=b=>{let T=b===v?"row":"col";return`
      fn ${T}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${r.type.indices}) -> ${x} {
        var output_index = ${r.indicesGet("output_indices",b)};
        var originalIdx: ${x} = getOriginalCoordinateFromResizedCoordinate(output_index, ${o[b]},
        ${s[b]}, ${i[b]}, ${d[b]}, ${d[b]} + ${i.length});
        var fractOriginalIdx: ${x} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${h} && (originalIdx < 0 || originalIdx > (${i[b]} - 1))) {
          return ${m};
        }
        var data: array<${x}, 4> = array<${x}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${T}: ${x} = originalIdx + ${x}(i);
          if (${T} < 0 || ${T} >= ${i[b]}) {
            ${g?`coefs[i + 1] = 0.0;
                        continue;`:h?`return ${m};`:`${T} = max(0, min(${T}, ${i[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${T})`)};
          data[i + 1] = ${b===v?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${S(v)};
    ${S(f)};
  fn getCubicInterpolationCoefs(s: ${x}) -> array<${x}, 4> {
    var absS = abs(s);
    var coeffs: array<${x}, 4> = array<${x}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${x} = 1.0 - absS;
    var twoMinusAbsS: ${x} = 2.0 - absS;
    var onePlusAbsS: ${x} = 1.0 + absS;
    coeffs[0] = ((${u} * onePlusAbsS - 5 * ${u}) * onePlusAbsS + 8 * ${u}) * onePlusAbsS - 4 * ${u};
    coeffs[1] = ((${u} + 2) * absS - (${u} + 3)) * absS * absS + 1;
    coeffs[2] = ((${u} + 2) * oneMinusAbsS - (${u} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${u} * twoMinusAbsS - 5 * ${u}) * twoMinusAbsS + 8 * ${u}) * twoMinusAbsS - 4 * ${u};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${x}, 4>, coefs: array<${x}, 4>) -> ${x} {
    var coefsSum: ${x} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${r.type.indices}) -> ${x} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},dy=(e,r,i,s,o)=>{let[d,u,h,m,g]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],_=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${_} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",u,`max(0, min(depth, ${i[u]} - 1))`)};
      ${e.indicesSet("input_indices",h,`max(0, min(height, ${i[h]} - 1))`)};
      ${e.indicesSet("input_indices",m,`max(0, min(width, ${i[m]} - 1))`)};
      ${Sc(e,g,d,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${r.type.indices}) -> ${_} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${_} = originalIndices[${u}];
      var height:${_} = originalIndices[${h}];
      var width:${_} = originalIndices[${m}];
      ${s?`if (depth < 0 || depth > (${i[u]} - 1) || height < 0 || height > (${i[h]} - 1) || width < 0 || (width > ${i[m]} - 1)) {
      return ${o};
        }`:""};

    depth = max(0, min(depth, ${i[u]} - 1));
      height = max(0, min(height, ${i[h]} - 1));
      width = max(0, min(width, ${i[m]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${g}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${d}])`:"0"};

      var x111: ${_} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${_} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${_} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${_} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${_} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${_} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${_} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${_} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${_} = abs(depth - ${_}(depth1));
      var dx2: ${_} = abs(${_}(depth2) - depth);
      var dy1: ${_} = abs(height - ${_}(height1));
      var dy2: ${_} = abs(${_}(height2) - height);
      var dz1: ${_} = abs(width - ${_}(width1));
      var dz2: ${_} = abs(${_}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},cy=(e,r,i,s,o,d)=>{let u=e.dims,h=ny(d,r.axes,u.length),m=ry(u,s,o,r.axes),g=s.slice();s.length===0&&(g=u.map((C,O)=>C===0?1:m[O]/C),r.keepAspectRatioPolicy!=="stretch"&&(m=iy(u,g,r)));let _=be("output",e.dataType,m.length),v=Z("input",e.dataType,u.length),f=Q.size(m),x=u.length===m.length&&u.every((C,O)=>C===m[O]),S=r.coordinateTransformMode==="tf_crop_and_resize",b=r.extrapolationValue,T=v.type.value,A=C=>`
      ${x?"":`
      ${ey(r.coordinateTransformMode,T)};
      ${(()=>{switch(r.mode){case"nearest":return`
              ${oy(v,u)};
              ${ty(r.nearestMode,i,T)};
              ${sy(v,_,u,m,g.length,h.length,S)};
              `;case"linear":return`
              ${ay(_,u,m,g.length,h.length)};
              ${(()=>{if(u.length===2||u.length===4)return`${uy(v,_,u,S,b)}`;if(u.length===3||u.length===5)return`${dy(v,_,u,S,b)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(u.length===2||u.length===4)return`${ly(v,_,u,m,g,h,r.cubicCoeffA,S,r.extrapolationValue,r.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${C.registerUniform("output_size","u32").registerUniform("scales","f32",g.length).registerUniform("roi","f32",h.length).declareVariables(v,_)}
      ${C.mainStart()}
        ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${x?"output[global_idx] = input[global_idx];":`
        let output_indices = ${_.offsetToIndices("global_idx")};
        var input_indices: ${v.type.indices};
        ${(()=>{switch(r.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${v.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${r.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${u.length===2||u.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${r.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${r.cacheKey}|${i}|${g.length>0?g:""}|${o.length>0?o:""}|${h.length>0?h:""}|${x}|${u}`,inputDependencies:["rank"]},getShaderSource:A,getRunData:()=>({outputs:[{dims:m,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:g},{type:1,data:h},...he(u,m)]})}},fy=e=>{let r=e.customDataBuffer;return new Uint32Array(r,r.byteOffset,1)[0]},Fv=(e,r)=>{let i=[],s=[],o=[],d=fy(e);if(r.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Jg(e.inputs,r,d,i,s,o),e.compute(cy(e.inputs[0],r,d,i,s,o),{inputs:[0]})},Wv=e=>{let r=e.antialias,i=e.axes,s=e.coordinateTransformMode,o=e.cubicCoeffA,d=e.excludeOutside!==0,u=e.extrapolationValue,h=e.keepAspectRatioPolicy,m=e.mode,g=e.nearestMode===""?"simple":e.nearestMode;return Ze({antialias:r,axes:i,coordinateTransformMode:s,cubicCoeffA:o,excludeOutside:d,extrapolationValue:u,keepAspectRatioPolicy:h,mode:m,nearestMode:g})}}),py,hy,Vv,k_=re(()=>{Ae(),Be(),gt(),Me(),py=(e,r)=>{let[i,s,o,d]=e,{numHeads:u,rotaryEmbeddingDim:h}=r;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!Q.areEqual(s.dims,[])&&!Q.areEqual(s.dims,[1])&&s.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${s.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(d.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${d.dims.length}`);if(!Q.areEqual(o.dims,d.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(h>0&&u===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let m=i.dims[0],g=i.dims[i.dims.length-2],_=o.dims[0],v=Q.sizeFromDimension(i.dims,1)/g,f=h===0?o.dims[1]*2:v/u;if(h>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(s.dims.length===2){if(m!==s.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${s.dims[0]}`);if(g!==s.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${s.dims[1]}`)}if(f/2!==o.dims[1]&&h/2!==o.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${o.dims[1]}`);if(g>_)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},hy=(e,r)=>{let{interleaved:i,numHeads:s,rotaryEmbeddingDim:o,scale:d}=r,u=e[0].dims[0],h=Q.sizeFromDimension(e[0].dims,1),m=e[0].dims[e[0].dims.length-2],g=h/m,_=e[2].dims[1],v=o===0?_*2:g/s,f=new Array(u,m,g/v,v-_),x=Q.computeStrides(f),S=[{type:1,data:d},{type:12,data:f},{type:12,data:x},...e[0].dims.length===3?new Array({type:12,data:[h,g,v,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[h,v,m*v,1]}):[],...he(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=T=>{let A=Z("input",e[0].dataType,e[0].dims.length),C=Z("position_ids",e[1].dataType,e[1].dims.length),O=Z("cos_cache",e[2].dataType,e[2].dims.length),R=Z("sin_cache",e[3].dataType,e[3].dims.length),B=be("output",e[0].dataType,e[0].dims.length);return T.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:x.length},{name:"input_output_strides",type:"u32",length:x.length}]),`
        ${T.declareVariables(A,C,O,R,B)}

        ${T.mainStart(Ra)}
          let half_rotary_emb_dim = uniforms.${O.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${C.broadcastedIndicesToOffset("bsnh.xy",be("",C.type.tensor,2))};
            let position_id =
                u32(${C.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${A.getByOffset("i")} * ${O.get("position_id","bsnh[3]")} -
                ${A.getByOffset("j")} * ${R.get("position_id","bsnh[3]")};
            ${B.setByOffset("i","re")}
            let im = ${A.getByOffset("i")} * ${R.get("position_id","bsnh[3]")} +
                ${A.getByOffset("j")} * ${O.get("position_id","bsnh[3]")};
            ${B.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${B.setByOffset("k",A.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ze({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(Q.size(f)/Ra)},programUniforms:S})}},Vv=(e,r)=>{py(e.inputs,r),e.compute(hy(e.inputs,r))}}),my,gy,Hv,E_=re(()=>{Ae(),Be(),Me(),my=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let r=e[0],i=e[1],s=e[2];if(r.dataType!==i.dataType||r.dataType!==s.dataType)throw new Error("All inputs must have the same data type");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let o=r.dims[r.dims.length-1],d=r.dims[r.dims.length-2];if(i.dims[i.dims.length-1]!==o)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==d)throw new Error("Skip must have the same sequence length as input");if(s.dims.length!==1)throw new Error("Gamma must be 1D");if(s.dims[s.dims.length-1]!==o)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let u=e[3];if(u.dims.length!==1)throw new Error("Beta must be 1D");if(u.dims[u.dims.length-1]!==o)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let u=e[4];if(u.dims.length!==1)throw new Error("Bias must be 1D");if(u.dims[u.dims.length-1]!==o)throw new Error("Bias must have the same hidden size as input")}},gy=(e,r,i,s)=>{let o=r.simplified,d=e[0].dims,u=Q.size(d),h=d,m=u,g=d.slice(-1)[0],_=s?d.slice(0,-1).concat(1):[],v=!o&&e.length>3,f=e.length>4,x=s&&i>1,S=s&&i>2,b=i>3,T=64,A=pt(g),C=[{type:12,data:m},{type:12,data:A},{type:12,data:g},{type:1,data:r.epsilon}],O=B=>{let F=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],U=[Z("x",e[0].dataType,e[0].dims,A),Z("skip",e[1].dataType,e[1].dims,A),Z("gamma",e[2].dataType,e[2].dims,A)];v&&U.push(Z("beta",e[3].dataType,e[3].dims,A)),f&&U.push(Z("bias",e[4].dataType,e[4].dims,A)),U.push(be("output",e[0].dataType,h,A)),x&&U.push(be("mean_output",1,_)),S&&U.push(be("inv_std_output",1,_)),b&&U.push(be("input_skip_bias_sum",e[0].dataType,h,A));let Y=vt(e[0].dataType),ae=vt(1,A);return`

      ${B.registerUniforms(F).declareVariables(...U)}
      var<workgroup> sum_shared : array<${ae}, ${T}>;
      var<workgroup> sum_squared_shared : array<${ae}, ${T}>;

      ${B.mainStart([T,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${T};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${T};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${T-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":Y+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${za(Y,A,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${T};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${Hr("sum",A)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${Hr("square_sum",A)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${x?"mean_output[global_idx] = mean;":""}
        ${S?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${Y}(mean)`}) *
            ${Y}(inv_std_dev) * gamma[offset1d + i]
            ${v?"+ beta[offset1d + i]":""};
        }
      }`},R=[{dims:h,dataType:e[0].dataType}];return i>1&&R.push({dims:_,dataType:1}),i>2&&R.push({dims:_,dataType:1}),i>3&&R.push({dims:d,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${A};${x};${S};${b}`,inputDependencies:e.map((B,F)=>"type")},getShaderSource:O,getRunData:()=>({outputs:R,dispatchGroup:{x:Math.ceil(m/g)},programUniforms:C})}},Hv=(e,r)=>{my(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(gy(e.inputs,r,e.outputCount,!1),{outputs:i})}}),yy,Ws,wy,kc,vy,_y,qv,Gv,C_=re(()=>{Ae(),Be(),gt(),Me(),yy=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");if(r.axes.length!==0){if(r.axes.length!==r.starts.length||r.axes.length!==r.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(r.starts.length!==r.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,s)=>{if(e[s+1].dataType!==6&&e[s+1].dataType!==7)throw new Error(`Input ${s} must be an array of int32 or int64`)})},Ws=(e,r)=>{let i=[];if(e.length>r)if(e[r].dataType===7)e[r].getBigInt64Array().forEach(s=>i.push(Number(s)));else if(e[r].dataType===6)e[r].getInt32Array().forEach(s=>i.push(Number(s)));else throw new Error(`Input ${r} must be an array of int32 or int64`);return i},wy=(e,r)=>{if(e.length>1){let i=Ws(e,1),s=Ws(e,2),o=Ws(e,3);return o.length===0&&(o=[...Array(e[0].dims.length).keys()]),Ze({starts:i,ends:s,axes:o})}else return r},kc=(e,r,i,s,o)=>{let d=e;return e<0&&(d+=i[s[r]]),o[r]<0?Math.max(0,Math.min(d,i[s[r]]-1)):Math.max(0,Math.min(d,i[s[r]]))},vy=(e,r,i)=>`fn calculateInputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length}; i >= 0; i--) {
            let input_shape_i = ${we("uniforms.input_shape","i",i.length)};
            let steps_i = ${we("uniforms.steps","i",i.length)};
            let signs_i = ${we("uniforms.signs","i",i.length)};
            let starts_i = ${we("uniforms.starts","i",i.length)};
            var output_index = ${r.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,_y=(e,r)=>{let i=e[0].dims,s=Q.size(i),o=r.axes.length>0?Q.normalizeAxes(r.axes,i.length):[...Array(i.length).keys()],d=Ws(e,4);d.forEach(A=>A!==0||(()=>{throw new Error("step cannot be 0")})),d.length===0&&(d=Array(o.length).fill(1));let u=r.starts.map((A,C)=>kc(A,C,i,o,d)),h=r.ends.map((A,C)=>kc(A,C,i,o,d));if(o.length!==u.length||o.length!==h.length)throw new Error("start, ends and axes should have the same number of elements");if(o.length!==i.length)for(let A=0;A<i.length;++A)o.includes(A)||(u.splice(A,0,0),h.splice(A,0,i[A]),d.splice(A,0,1));let m=d.map(A=>Math.sign(A));d.forEach((A,C,O)=>{if(A<0){let R=(h[C]-u[C])/A,B=u[C],F=B+R*d[C];u[C]=F,h[C]=B,O[C]=-A}});let g=i.slice(0);o.forEach((A,C)=>{g[A]=Math.ceil((h[A]-u[A])/d[A])});let _={dims:g,dataType:e[0].dataType},v=be("output",e[0].dataType,g.length),f=Z("input",e[0].dataType,e[0].dims.length),x=Q.size(g),S=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:u.length},{name:"signs",type:"i32",length:m.length},{name:"steps",type:"u32",length:d.length}],b=[{type:12,data:x},{type:12,data:u},{type:6,data:m},{type:12,data:d},...he(e[0].dims,g)],T=A=>`
      ${A.registerUniforms(S).declareVariables(f,v)}
        ${vy(f,v,i)}
        ${A.mainStart()}
          ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${v.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${v.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${m.length}_${u.length}_${d.length}`,inputDependencies:["rank"]},getShaderSource:T,getRunData:()=>({outputs:[_],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:b})}},qv=(e,r)=>{yy(e.inputs,r);let i=wy(e.inputs,r);e.compute(_y(e.inputs,i),{inputs:[0]})},Gv=e=>{let r=e.starts,i=e.ends,s=e.axes;return Ze({starts:r,ends:i,axes:s})}}),$y,xy,Kv,Qv,T_=re(()=>{Ae(),Be(),gt(),Qr(),Me(),$y=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},xy=(e,r)=>{let i=e.inputs[0],s=i.dims,o=Q.size(s),d=64,u=s.length,h=Q.normalizeAxis(r.axis,u),m=h<s.length-1,g,_=[];m?(_=Array.from({length:u},(U,Y)=>Y),_[h]=u-1,_[u-1]=h,g=e.compute(ln(i,_),{inputs:[i],outputs:[-1]})[0]):g=i;let v=g.dims,f=v[u-1],x=o/f,S=pt(f),b=f/S,T=(U,Y)=>Y===4?`max(max(${U}.x, ${U}.y), max(${U}.z, ${U}.w))`:Y===2?`max(${U}.x, ${U}.y)`:Y===3?`max(max(${U}.x, ${U}.y), ${U}.z)`:U,A=Z("x",g.dataType,g.dims,S),C=be("result",g.dataType,g.dims,S),O=A.type.value,R=vt(g.dataType)==="f32"?`var threadMax = ${O}(-3.402823e+38f);`:`var threadMax = ${O}(-65504.0h);`,B=U=>`
      var<workgroup> rowMaxShared : ${O};
      var<workgroup> rowSumShared : ${O};
      var<workgroup> threadShared : array<${O}, ${d}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${O} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${O}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${U.registerUniform("packedCols","i32").declareVariables(A,C)}
      ${U.mainStart()}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${d};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${R}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${O}(${T("threadShared[0]",S)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${O}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${O}(${Hr("threadShared[0]",S)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,F=e.compute({name:"Softmax",shaderCache:{hint:`${S}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:v,dataType:g.dataType}],dispatchGroup:{x},programUniforms:[{type:6,data:b}]}),getShaderSource:B},{inputs:[g],outputs:[m?-1:0]})[0];m&&e.compute(ln(F,_),{inputs:[F]})},Kv=(e,r)=>{$y(e.inputs),xy(e,r)},Qv=e=>Ze({axis:e.axis})}),by,Sy,ky,Ey,Cy,Yv,Zv,I_=re(()=>{Ae(),Be(),gt(),Me(),by=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Sy=(e,r)=>{let i=[],s=r.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(o=>i.push(Number(o))),s=i.length),Ze({numOutputs:s,axis:r.axis,splitSizes:i})},ky=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${we("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ey=e=>{let r=e.length,i=[];for(let s=0;s<r;++s){let o=e[s].setByIndices("indices","input[global_idx]");r===1?i.push(o):s===0?i.push(`if (output_number == ${s}u) { ${o} }`):s===r-1?i.push(`else { ${o} }`):i.push(`else if (output_number == ${s}) { ${o} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Cy=(e,r)=>{let i=e[0].dims,s=Q.size(i),o=e[0].dataType,d=Q.normalizeAxis(r.axis,i.length),u=new Array(r.numOutputs),h=Z("input",o,i.length),m=new Array(r.numOutputs),g=[],_=[],v=0,f=[{type:12,data:s}];for(let S=0;S<r.numOutputs;S++){v+=r.splitSizes[S],m[S]=v;let b=i.slice();b[d]=r.splitSizes[S],_.push(b),u[S]=be(`output${S}`,o,b.length),g.push({dims:_[S],dataType:e[0].dataType})}f.push({type:12,data:m},...he(i,..._));let x=S=>`
  ${S.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",m.length).declareVariables(h,...u)}
  ${ky(m.length)}
  ${Ey(u)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${h.offsetToIndices("global_idx")};
    var index = ${h.indicesGet("indices",d)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${we("uniforms.size_in_split_axis","output_number - 1u",m.length)};
      ${h.indicesSet("indices",d,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:g,dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f})}},Yv=(e,r)=>{by(e.inputs);let i=e.inputs.length===1?r:Sy(e.inputs,r);e.compute(Cy(e.inputs,i),{inputs:[0]})},Zv=e=>{let r=e.axis,i=e.splitSizes,s=e.numOutputs<0?i.length:e.numOutputs;if(s!==i.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Ze({axis:r,numOutputs:s,splitSizes:i})}}),Ty,Iy,Xv,z_=re(()=>{Ae(),Be(),Me(),Ty=(e,r,i,s,o)=>{let d=be("output_data",o,i.length,4),u=Z("a_data",r[1].dataType,r[1].dims.length,4),h=Z("b_data",r[2].dataType,r[2].dims.length,4),m=Z("c_data",r[0].dataType,r[0].dims.length,4),g,_=(v,f,x)=>`select(${f}, ${v}, ${x})`;if(!s)g=d.setByOffset("global_idx",_(u.getByOffset("global_idx"),h.getByOffset("global_idx"),m.getByOffset("global_idx")));else{let v=(f,x,S="")=>{let b=`a_data[index_a${x}][component_a${x}]`,T=`b_data[index_b${x}][component_b${x}]`,A=`bool(c_data[index_c${x}] & (0xffu << (component_c${x} * 8)))`;return`
            let output_indices${x} = ${d.offsetToIndices(`global_idx * 4u + ${x}u`)};
            let offset_a${x} = ${u.broadcastedIndicesToOffset(`output_indices${x}`,d)};
            let offset_b${x} = ${h.broadcastedIndicesToOffset(`output_indices${x}`,d)};
            let offset_c${x} = ${m.broadcastedIndicesToOffset(`output_indices${x}`,d)};
            let index_a${x} = offset_a${x} / 4u;
            let index_b${x} = offset_b${x} / 4u;
            let index_c${x} = offset_c${x} / 4u;
            let component_a${x} = offset_a${x} % 4u;
            let component_b${x} = offset_b${x} % 4u;
            let component_c${x} = offset_c${x} % 4u;
            ${f}[${x}] = ${S}(${_(b,T,A)});
          `};o===9?g=`
            var data = vec4<u32>(0);
            ${v("data",0,"u32")}
            ${v("data",1,"u32")}
            ${v("data",2,"u32")}
            ${v("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:g=`
            ${v("output_data[global_idx]",0)}
            ${v("output_data[global_idx]",1)}
            ${v("output_data[global_idx]",2)}
            ${v("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(m,u,h,d)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${g}
      }`},Iy=e=>{let r=e[1].dims,i=e[2].dims,s=e[0].dims,o=e[1].dataType,d=!(Q.areEqual(r,i)&&Q.areEqual(i,s)),u=r,h=Q.size(r);if(d){let g=Aa.calcShape(Aa.calcShape(r,i,!1),s,!1);if(!g)throw new Error("Can't perform where op on the given tensors");u=g,h=Q.size(u)}let m=Math.ceil(h/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:g=>Ty(g,e,u,d,o),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:m},...he(s,r,i,u)]})}},Xv=e=>{e.compute(Iy(e.inputs))}}),Jv,A_=re(()=>{K2(),ff(),Q2(),Y2(),Z2(),X2(),J2(),r_(),s_(),o_(),u_(),l_(),d_(),c_(),f_(),p_(),h_(),m_(),g_(),y_(),w_(),Xw(),v_(),$v(),__(),$_(),x_(),b_(),cf(),S_(),k_(),E_(),C_(),T_(),I_(),bv(),Qr(),pf(),z_(),Jv=new Map([["Abs",[Z0]],["Acos",[X0]],["Acosh",[J0]],["Add",[Ow]],["ArgMax",[G0,Dc]],["ArgMin",[q0,Dc]],["Asin",[ew]],["Asinh",[tw]],["Atan",[nw]],["Atanh",[rw]],["Attention",[K0]],["AveragePool",[Rv,Av]],["BatchNormalization",[Q0]],["BiasAdd",[Y0]],["BiasSplitGelu",[Rw]],["Cast",[aw,iw]],["Ceil",[ow]],["Clip",[sw]],["Concat",[Ww,Vw]],["Conv",[Fc,jc]],["ConvTranspose",[tv,ev]],["Cos",[uw]],["Cosh",[lw]],["CumSum",[nv,rv]],["DepthToSpace",[iv,av]],["DequantizeLinear",[Lv,Uv]],["Div",[Pw]],["Einsum",[sv,ov]],["Elu",[dw,Zs]],["Equal",[Bw]],["Erf",[cw]],["Exp",[fw]],["Expand",[uv]],["FastGelu",[lv]],["Floor",[pw]],["FusedConv",[Fc,jc]],["Gather",[fv,dv]],["GatherElements",[gv,mv]],["GatherBlockQuantized",[pv,hv]],["Gelu",[hw]],["Gemm",[wv,yv]],["GlobalAveragePool",[Pv,Ov]],["GlobalMaxPool",[Nv,Dv]],["Greater",[Lw]],["GreaterOrEqual",[jw]],["GroupQueryAttention",[kv,Sv]],["HardSigmoid",[xw,$w]],["InstanceNormalization",[Ev]],["LayerNormalization",[Cv]],["LeakyRelu",[mw,Zs]],["Less",[Uw]],["LessOrEqual",[Fw]],["Log",[zw]],["MatMul",[Zw]],["MatMulNBits",[Tv,Iv]],["MaxPool",[Bv,Mv]],["Mul",[Mw]],["MultiHeadAttention",[_v,vv]],["Neg",[yw]],["Not",[gw]],["Pad",[zv]],["Pow",[Dw]],["QuickGelu",[Aw,Zs]],["Range",[jv]],["Reciprocal",[ww]],["ReduceMin",[j0]],["ReduceMean",[M0]],["ReduceMax",[U0]],["ReduceSum",[W0]],["ReduceProd",[F0]],["ReduceL1",[D0]],["ReduceL2",[N0]],["ReduceLogSum",[H0]],["ReduceLogSumExp",[L0]],["ReduceSumSquare",[V0]],["Relu",[vw]],["Resize",[Fv,Wv]],["RotaryEmbedding",[Vv]],["Sigmoid",[_w]],["Sin",[bw]],["Sinh",[Sw]],["Slice",[qv,Gv]],["SkipLayerNormalization",[Hv]],["Split",[Yv,Zv]],["Sqrt",[kw]],["Softmax",[Kv,Qv]],["Sub",[Nw]],["Tan",[Ew]],["Tanh",[Cw]],["ThresholdedRelu",[Iw,Zs]],["Tile",[xv]],["Transpose",[S0,k0]],["Where",[Xv]]])}),e1,R_=re(()=>{Mn(),Yn(),Me(),e1=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,i,s,o){Qn(e.programInfo.name);let d=this.backend.device,u=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let h=[];for(let g of r)h.push({binding:h.length,resource:{buffer:g.buffer}});for(let g of i)h.push({binding:h.length,resource:{buffer:g.buffer}});o&&h.push({binding:h.length,resource:o});let m=d.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:h,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let g={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:m,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(g)}u.setPipeline(e.computePipeline),u.setBindGroup(0,m),u.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Bn(e.programInfo.name)}dispose(){}build(e,r){Qn(e.name);let i=this.backend.device,s=[];i.features.has("shader-f16")&&s.push("enable f16;");let o=b0(r,this.backend.device.limits),d=e.getShaderSource(o),u=`${s.join(`
`)}
${o.additionalImplementations}
${d}`,h=i.createShaderModule({code:u,label:e.name});Ye("verbose",()=>`[WebGPU] ${e.name} shader code: ${u}`);let m=i.createComputePipeline({compute:{module:h,entryPoint:"main"},layout:"auto",label:e.name});return Bn(e.name),{programInfo:e,computePipeline:m,uniformVariablesInfo:o.variablesInfo}}normalizeDispatchGroupSize(e){let r=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,s=typeof e=="number"?1:e.z||1,o=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(r<=o&&i<=o&&s<=o)return[r,i,s];let d=r*i*s,u=Math.ceil(Math.sqrt(d));if(u>o){if(u=Math.ceil(Math.cbrt(d)),u>o)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[u,u,u]}else return[u,u,1]}}}),zy,Ay,Ry,t1,O_=re(()=>{Mn(),Ae(),Yn(),w0(),q2(),A_(),R_(),zy=(e,r)=>{if(r.length!==e.length)throw new Error(`inputDependencies length ${r.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let s=0;s<e.length;++s){let o=e[s].dataType;switch(r[s]){case"none":{i.push("");break}case"type":{i.push(`${o}`);break}case"rank":{let d=e[s].dims.length;i.push(`${o};${d}`);break}case"dims":{let d=e[s].dims.join(",");i.push(`${o};${d}`);break}default:throw new Error(`unsupported input dependency: ${r[s]}`)}}return i.join("|")},Ay=(e,r,i)=>{var o,d;let s=e.name;return(o=e.shaderCache)!=null&&o.hint&&(s+="["+e.shaderCache.hint+"]"),s+=":"+i+`:${zy(r,((d=e.shaderCache)==null?void 0:d.inputDependencies)??new Array(r.length).fill("dims"))}`,s},Ry=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},t1=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,r){this.env=e;let i=[],s={requiredLimits:{maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxBufferSize:r.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:r.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:r.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:r.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:r.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i};r.features.has("chromium-experimental-timestamp-query-inside-passes")?i.push("chromium-experimental-timestamp-query-inside-passes"):r.features.has("timestamp-query")&&i.push("timestamp-query"),r.features.has("shader-f16")&&i.push("shader-f16"),this.device=await r.requestDevice(s),this.adapterInfo=new Ry(r.info||await r.requestAdapterInfo()),this.gpuDataManager=v0(this),this.programManager=new e1(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,of(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:r,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),r={};this.queryType==="at-passes"&&(r.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(r)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Qn(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var s;let r=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let o=0;o<r.length/2;o++){let d=i[o],u=d.kernelId,h=this.kernels.get(u),m=h.kernelType,g=h.kernelName,_=d.programName,v=d.inputTensorViews,f=d.outputTensorViews,x=r[o*2],S=r[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=x);let b=Number(x-this.queryTimeBase),T=Number(S-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(T))throw new RangeError("incorrect timestamp range");if((s=this.env.webgpu.profiling)!=null&&s.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:v.map(A=>({dims:A.dims,dataType:Ri(A.dataType)})),outputsMetadata:f.map(A=>({dims:A.dims,dataType:Ri(A.dataType)})),kernelId:u,kernelType:m,kernelName:g,programName:_,startTime:b,endTime:T});else{let A="";v.forEach((O,R)=>{A+=`input[${R}]: [${O.dims}] | ${Ri(O.dataType)}, `});let C="";f.forEach((O,R)=>{C+=`output[${R}]: [${O.dims}] | ${Ri(O.dataType)}, `}),console.log(`[profiling] kernel "${u}|${m}|${g}|${_}" ${A}${C}execution time: ${T-b} ns`)}Ku("GPU",`${_}::${x}::${S}`)}e.unmap(),this.pendingQueries.delete(e)}),Bn()}run(e,r,i,s,o,d){Qn(e.name);let u=[];for(let C=0;C<r.length;++C){let O=r[C].data;if(O===0)continue;let R=this.gpuDataManager.get(O);if(!R)throw new Error(`no GPU data for input: ${O}`);u.push(R)}let{outputs:h,dispatchGroup:m,programUniforms:g}=e.getRunData(r),_=i.length===0?h.map((C,O)=>O):i;if(_.length!==h.length)throw new Error(`Output size ${_.length} must be equal to ${h.length}.`);let v=[],f=[];for(let C=0;C<h.length;++C){if(!Number.isInteger(_[C])||_[C]<-3||_[C]>=d)throw new Error(`Invalid output index: ${_[C]}`);if(_[C]===-3)continue;let O=_[C]===-1,R=_[C]===-2,B=O||R?o(h[C].dataType,h[C].dims):s(_[C],h[C].dataType,h[C].dims);if(v.push(B),B.data===0)continue;let F=this.gpuDataManager.get(B.data);if(!F)throw new Error(`no GPU data for output: ${B.data}`);if(O&&this.temporaryData.push(F),R){let U=this.kernelPersistentData.get(this.currentKernelId);U||(U=[],this.kernelPersistentData.set(this.currentKernelId,U)),U.push(F)}f.push(F)}if(u.length!==r.length||f.length!==v.length){if(f.length===0)return Bn(e.name),v;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let x;if(g){let C=0,O=[];g.forEach(U=>{let Y=typeof U.data=="number"?[U.data]:U.data;if(Y.length===0)return;let ae=U.type===10?2:4,oe,me;U.type===10?(me=Y.length>4?16:Y.length>2?8:Y.length*ae,oe=Y.length>4?16:ae*Y.length):(me=Y.length<=2?Y.length*ae:16,oe=16),C=Math.ceil(C/me)*me,O.push(C);let ge=U.type===10?8:4;C+=Y.length>4?Math.ceil(Y.length/ge)*oe:Y.length*ae});let R=16;C=Math.ceil(C/R)*R;let B=new ArrayBuffer(C);g.forEach((U,Y)=>{let ae=O[Y],oe=typeof U.data=="number"?[U.data]:U.data;if(U.type===6)new Int32Array(B,ae,oe.length).set(oe);else if(U.type===12)new Uint32Array(B,ae,oe.length).set(oe);else if(U.type===10)new Uint16Array(B,ae,oe.length).set(oe);else if(U.type===1)new Float32Array(B,ae,oe.length).set(oe);else throw new Error(`Unsupported uniform type: ${Ri(U.type)}`)});let F=this.gpuDataManager.create(C,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(F.buffer,0,B,0,C),this.gpuDataManager.release(F.id),x={offset:0,size:C,buffer:F.buffer}}let S=this.programManager.normalizeDispatchGroupSize(m),b=S[1]===1&&S[2]===1,T=Ay(e,r,b),A=this.programManager.getArtifact(T);if(A||(A=this.programManager.build(e,S),this.programManager.setArtifact(T,A),Ye("info",()=>`[artifact] key: ${T}, programName: ${e.name}`)),g&&A.uniformVariablesInfo){if(g.length!==A.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${A.uniformVariablesInfo.length}, got ${g.length} in program "${A.programInfo.name}".`);for(let C=0;C<g.length;C++){let O=g[C],R=O.type,B=typeof O.data=="number"?1:O.data.length,[F,U]=A.uniformVariablesInfo[C];if(R!==F||B!==U)throw new Error(`Uniform variable ${C} mismatch: expect type ${F} with size ${U}, got type ${R} with size ${B} in program "${A.programInfo.name}".`)}}if(Ye("info",()=>`[ProgramManager] run "${e.name}" (key=${T}) with ${S[0]}x${S[1]}x${S[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let C={kernelId:this.currentKernelId,programName:A.programInfo.name,inputTensorViews:r,outputTensorViews:v};this.pendingKernels.push(C),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(C)}return this.programManager.run(A,u,f,S,x),Bn(e.name),v}upload(e,r){this.gpuDataManager.upload(e,r)}memcpy(e,r){this.gpuDataManager.memcpy(e,r)}async download(e,r){await this.gpuDataManager.download(e,r)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,r,i,s){let o=Jv.get(e);if(!o)throw new Error(`kernel not implemented: ${e}`);let d={kernelType:e,kernelName:s,kernelEntry:o[0],attributes:[o[1],i]};this.kernels.set(r,d)}releaseKernel(e){let r=this.kernelPersistentData.get(e);if(r){for(let i of r)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,r,i){let s=this.kernels.get(e);if(!s)throw new Error(`kernel not created: ${e}`);let o=s.kernelType,d=s.kernelName,u=s.kernelEntry,h=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${o}] ${d}" is not allowed to be called recursively`);this.currentKernelId=e,h[0]&&(h[1]=h[0](h[1]),h[0]=void 0),Ye("info",()=>`[WebGPU] Start to run kernel "[${o}] ${d}"...`);let m=this.env.debug;this.temporaryData=[];try{return m&&this.device.pushErrorScope("validation"),u(r,h[1]),0}catch(g){return i.push(Promise.resolve(`[WebGPU] Kernel "[${o}] ${d}" failed. ${g}`)),1}finally{m&&i.push(this.device.popErrorScope().then(g=>g?`GPU validation error for kernel "[${o}] ${d}": ${g.message}`:null));for(let g of this.temporaryData)this.gpuDataManager.release(g.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,r,i,s){let o=this.sessionExternalDataMapping.get(e);o||(o=new Map,this.sessionExternalDataMapping.set(e,o));let d=o.get(r),u=this.gpuDataManager.registerExternalBuffer(i,s,d);return o.set(r,[u,i]),u}unregisterBuffers(e){let r=this.sessionExternalDataMapping.get(e);r&&(r.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let r=this.gpuDataManager.get(e);if(!r)throw new Error(`no GPU data for buffer: ${e}`);return r.buffer}createDownloader(e,r,i){return async()=>{let s=await Pc(this,e,r);return uf(s.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ye("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ye("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ye("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),r=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let s=0;s<i;s++){let o=this.getComputePassEncoder(),d=e[s];this.writeTimestamp(this.pendingDispatchNumber*2),o.setPipeline(d.computePipeline),o.setBindGroup(0,d.bindGroup),o.dispatchWorkgroups(...d.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(r[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Oy,Ec,Cc,Py,n1,P_=re(()=>{Yn(),Oy=1,Ec=()=>Oy++,Cc=class{constructor(e,r){this.mlContext=e,this.tensorEntry=r,this.tensorCache=r?[r]:[]}get tensor(){var e;return(e=this.tensorEntry)==null?void 0:e[0]}get context(){if(!this.mlContext)throw new Error("MLContext has not been set.");return this.mlContext}set context(e){if(this.mlContext&&this.mlContext!==e)throw new Error("MLTensor in use in a different MLContext.");this.mlContext=e}destroy(){for(let[e]of this.tensorCache)e.destroy();this.tensorCache=[],this.tensorEntry=void 0}trySelectTensor(e,r){for(let[i,s,o]of this.tensorCache)if(r===i){if(this.context!==e)throw new Error("MLTensor cannot be registered with a different MLContext.");return this.tensorEntry=[i,s,o],!0}return!1}async ensureTensor(e,r,i){var d;if(this.tensorEntry){let[u,h,m]=this.tensorEntry;if(h===e&&m.every((g,_)=>g===r[_]))return u}for(let[u,h,m]of this.tensorCache)if(h===e&&m.every((g,_)=>g===r[_])){if(i&&this.tensorEntry){Ye("verbose",()=>`[WebNN] Slowdown may occur, having to copy existing tensor {dataType: ${e}, shape: ${r}}`);let g=await this.context.readTensor(this.tensorEntry[0]);this.context.writeTensor(u,g)}return this.tensorEntry=[u,h,m],u}Ye("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${r}}`);let s=MLTensorUsage.READ|MLTensorUsage.WRITE,o=await this.context.createTensor({dataType:e,shape:r,dimensions:r,usage:s});return this.tensorEntry=[o,e,r],this.tensorCache.push(this.tensorEntry),this.activeUpload&&((d=this.mlContext)==null||d.writeTensor(o,this.activeUpload),this.activeUpload=void 0),o}upload(e){var r;if(!this.tensorEntry){this.activeUpload=new Uint8Array(e);return}(r=this.mlContext)==null||r.writeTensor(this.tensorEntry[0],e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.tensorEntry)throw new Error("Tensor has not been created.");return e?this.context.readTensor(this.tensorEntry[0],e):this.context.readTensor(this.tensorEntry[0])}},Py=class{constructor(e){this.backend=e,this.tensorsById=new Map,this.tensorIdsByContext=new Map}reserveTensorId(){let e=Ec();return this.tensorsById.set(e,new Cc),e}releaseTensorId(e){let r=this.tensorsById.get(e);if(r){r.destroy(),this.tensorsById.delete(e);for(let[i,s]of this.tensorIdsByContext)if(s.has(e)){s.delete(e),s.size===0&&this.tensorIdsByContext.delete(i);break}}}async ensureTensor(e,r,i,s){var d;Ye("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${r}, shape: ${i}, copyOld: ${s}}`);let o=this.tensorsById.get(e);if(!o)throw new Error("Tensor not found.");return o.context=this.backend.currentContext,this.tensorIdsByContext.has(this.backend.currentContext)||this.tensorIdsByContext.set(this.backend.currentContext,new Set),(d=this.tensorIdsByContext.get(this.backend.currentContext))==null||d.add(e),o.ensureTensor(r,i,s)}upload(e,r){this.tensorsById.get(e).upload(r)}async download(e,r){return Ye("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${r==null?void 0:r.byteLength}}`),this.tensorsById.get(e).download(r)}releaseTensorsForContext(e){let r=this.tensorIdsByContext.get(e);if(r){for(let i of r)this.tensorsById.get(i).destroy(),this.tensorsById.delete(i);this.tensorIdsByContext.delete(e)}}registerTensor(e,r,i,s){for(let[u,h]of this.tensorsById)if(h.trySelectTensor(e,r))return u;let o=Ec();this.tensorsById.set(o,new Cc(e,[r,i,s]));let d=this.tensorIdsByContext.get(e);return d||(d=new Set,this.tensorIdsByContext.set(e,d)),d.add(o),o}},n1=(...e)=>new Py(...e)}),Tc,r1,B_=re(()=>{Ae(),Oi(),w0(),P_(),Yn(),Tc=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),r1=class{constructor(e){this.tensorManager=n1(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,of(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,r){this.mlContextBySessionId.set(e,r);let i=this.sessionIdsByMLContext.get(r);i||(i=new Set,this.sessionIdsByMLContext.set(r,i)),i.add(e)}onReleaseSession(e){let r=this.mlContextBySessionId.get(e);if(!r)return;this.mlContextBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(r);i.delete(e),i.size===0&&(this.sessionIdsByMLContext.delete(r),this.tensorManager.releaseTensorsForContext(r))}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ye("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,r,i,s){let o=Tc.get(r);if(!o)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e,o,i,s)}uploadTensor(e,r){if(!xt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ye("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${r.byteLength}}`),this.tensorManager.upload(e,r)}async downloadTensor(e,r){return this.tensorManager.download(e,r)}createMLTensorDownloader(e,r){return async()=>{let i=await this.tensorManager.download(e);return uf(i,r)}}registerMLTensor(e,r,i){let s=Tc.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let o=this.tensorManager.registerTensor(this.currentContext,e,s,i);return Ye("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${s}, dimensions: ${i}} -> {tensorId: ${o}}`),o}flush(){}}}),i1={};to(i1,{init:()=>a1});var Fu,By,a1,M_=re(()=>{Ae(),O_(),Yn(),Be(),B_(),Fu=class s1{constructor(r,i,s,o){this.module=r,this.dataType=i,this.data=s,this.dims=o}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let r=Q.size(this.dims);return r===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,r)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let r=Q.size(this.dims);return r===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,r)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let r=Q.size(this.dims);return r===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,r)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let r=Q.size(this.dims);return r===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,r)}reshape(r){if(Q.size(r)!==Q.size(this.dims))throw new Error("Invalid new shape");return new s1(this.module,this.dataType,this.data,r)}},By=class{constructor(e,r,i){this.module=e,this.backend=r,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=r.adapterInfo;let s=e.HEAPU32,o=i>>>2;this.opKernelContext=s[o++];let d=s[o++];this.outputCount=s[o++],this.customDataOffset=s[o++],this.customDataSize=s[o++];let u=[];for(let h=0;h<d;h++){let m=s[o++],g=s[o++],_=s[o++],v=[];for(let f=0;f<_;f++)v.push(s[o++]);u.push(new Fu(e,m,g,v))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,r){var u;let i=((u=r==null?void 0:r.inputs)==null?void 0:u.map(h=>typeof h=="number"?this.inputs[h]:h))??this.inputs,s=(r==null?void 0:r.outputs)??[],o=(h,m,g)=>new Fu(this.module,m,this.output(h,g),g),d=(h,m)=>{let g=Ia(h,m);if(!g)throw new Error(`Unsupported data type: ${h}`);let _=g>0?this.backend.gpuDataManager.create(g).id:0;return new Fu(this.module,h,_,m)};return this.backend.run(e,i,s,o,d,this.outputCount)}output(e,r){let i=this.module.stackSave();try{let s=this.module.stackAlloc((1+r.length)*4),o=s>>2;this.module.HEAPU32[o++]=r.length;for(let d=0;d<r.length;d++)this.module.HEAPU32[o++]=r[d];return this.module._JsepOutput(this.opKernelContext,e,s)}catch(s){throw new Error(`Failed to generate kernel's output[${e}] with dims [${r}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(i)}}},a1=async(e,r,i,s)=>{let o=r.jsepInit;if(!o)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let d=new t1;await d.initialize(i,s),o("webgpu",[d,u=>d.alloc(u),u=>d.free(u),(u,h,m,g=!1)=>{if(g)Ye("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${u}, dst=${h}, size=${m}`),d.memcpy(u,h);else{Ye("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${u}, gpuDataId=${h}, size=${m}`);let _=r.HEAPU8.subarray(u>>>0,(u>>>0)+m);d.upload(h,_)}},async(u,h,m)=>{Ye("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${h}, size=${m}`),await d.download(u,()=>r.HEAPU8.subarray(h>>>0,(h>>>0)+m))},(u,h,m)=>d.createKernel(u,h,m,r.UTF8ToString(r._JsepGetNodeName(h))),u=>d.releaseKernel(u),(u,h,m,g)=>{Ye("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${m}, kernel=${u}, contextDataOffset=${h}`);let _=new By(r,d,h);return d.computeKernel(u,_,g)},()=>d.captureBegin(),()=>d.captureEnd(),()=>d.replay()])}else{let d=new r1(i);o("webnn",[d,()=>d.reserveTensorId(),u=>d.releaseTensorId(u),async(u,h,m,g)=>d.ensureTensor(u,h,m,g),(u,h)=>{d.uploadTensor(u,h)},async(u,h)=>d.downloadTensor(u,h)])}}}),My,wf,vf,Wr,Dy,nl,_f,$f,Ic,xf,bf,Sf,o1=re(()=>{V2(),H2(),Ae(),Oi(),tf(),y0(),My=(e,r)=>{xt()._OrtInit(e,r)!==0&&ct("Can't initialize onnxruntime.")},wf=async e=>{My(e.wasm.numThreads,Zu(e.logLevel))},vf=async(e,r)=>{{let i=(M_(),Gu(i1)).init;if(r==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let s=e.webgpu.adapter;if(s){if(typeof s.limits!="object"||typeof s.features!="object"||typeof s.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let d=e.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(s=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:d}),!s)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",xt(),e,s)}if(r==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await i("webnn",xt(),e)}}},Wr=new Map,Dy=e=>{let r=xt(),i=r.stackSave();try{let s=r.stackAlloc(8);return r._OrtGetInputOutputCount(e,s,s+4)!==0&&ct("Can't get session input/output count."),[r.HEAP32[s/4],r.HEAP32[s/4+1]]}finally{r.stackRestore(i)}},nl=e=>{let r=xt(),i=r._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return r.HEAPU8.set(e,i),[i,e.byteLength]},_f=async(e,r)=>{var v,f;let i,s,o=xt();Array.isArray(e)?[i,s]=e:e.buffer===o.HEAPU8.buffer?[i,s]=[e.byteOffset,e.byteLength]:[i,s]=nl(e);let d=0,u=0,h=0,m=[],g=[],_=[];try{if([u,m]=g0(r),(r==null?void 0:r.externalData)&&o.mountExternalData){let R=[];for(let B of r.externalData){let F=typeof B=="string"?B:B.path;R.push(sf(typeof B=="string"?B:B.data).then(U=>{o.mountExternalData(F,U)}))}await Promise.all(R)}for(let R of(r==null?void 0:r.executionProviders)??[])if((typeof R=="string"?R:R.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,o.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof R!="string"){let B=R,F=B==null?void 0:B.context,U=B==null?void 0:B.gpuDevice,Y=B==null?void 0:B.deviceType,ae=B==null?void 0:B.numThreads,oe=B==null?void 0:B.powerPreference;F?o.currentContext=F:U?o.currentContext=await navigator.ml.createContext(U):o.currentContext=await navigator.ml.createContext({deviceType:Y,numThreads:ae,powerPreference:oe})}else o.currentContext=await navigator.ml.createContext();break}d=await o._OrtCreateSession(i,s,u),d===0&&ct("Can't create a session."),o.currentContext&&(o.jsepRegisterMLContext(d,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[x,S]=Dy(d),b=!!(r!=null&&r.enableGraphCapture),T=[],A=[],C=[];for(let R=0;R<x;R++){let B=o._OrtGetInputName(d,R);B===0&&ct("Can't get an input name."),g.push(B),T.push(o.UTF8ToString(B))}for(let R=0;R<S;R++){let B=o._OrtGetOutputName(d,R);B===0&&ct("Can't get an output name."),_.push(B);let F=o.UTF8ToString(B);A.push(F);{if(b&&(r==null?void 0:r.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let U=typeof(r==null?void 0:r.preferredOutputLocation)=="string"?r.preferredOutputLocation:((v=r==null?void 0:r.preferredOutputLocation)==null?void 0:v[F])??"cpu";if(U!=="cpu"&&U!=="cpu-pinned"&&U!=="gpu-buffer"&&U!=="ml-tensor")throw new Error(`Not supported preferred output location: ${U}.`);if(b&&U!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${U}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(U)}}let O=null;return C.some(R=>R==="gpu-buffer"||R==="ml-tensor")&&(h=o._OrtCreateBinding(d),h===0&&ct("Can't create IO binding."),O={handle:h,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(R=>Oc(R))}),Wr.set(d,[d,g,_,O,b,!1]),[d,T,A]}catch(x){throw g.forEach(S=>o._OrtFree(S)),_.forEach(S=>o._OrtFree(S)),h!==0&&o._OrtReleaseBinding(h),d!==0&&o._OrtReleaseSession(d),x}finally{o._free(i),u!==0&&o._OrtReleaseSessionOptions(u),m.forEach(x=>o._free(x)),(f=o.unmountExternalData)==null||f.call(o)}},$f=e=>{var m;let r=xt(),i=Wr.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[s,o,d,u,h]=i;u&&(h&&r._OrtClearBoundOutputs(u.handle),r._OrtReleaseBinding(u.handle)),(m=r.jsepOnReleaseSession)==null||m.call(r,e),o.forEach(g=>r._OrtFree(g)),d.forEach(g=>r._OrtFree(g)),r._OrtReleaseSession(s),Wr.delete(e)},Ic=(e,r,i,s,o,d=!1)=>{if(!e){r.push(0);return}let u=xt(),h=e[0],m=e[1],g=e[3],_,v;if(h==="string"&&(g==="gpu-buffer"||g==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&g!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(g==="gpu-buffer"){let S=e[2].gpuBuffer;v=Ia(Qs(h),m);let b=u.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=b(s,o,S,v)}else if(g==="ml-tensor"){let S=e[2].mlTensor;v=Ia(Qs(h),m);let b=u.jsepRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=b(S,Qs(h),m)}else{let S=e[2];if(Array.isArray(S)){v=4*S.length,_=u._malloc(v),i.push(_);let b=_/4;for(let T=0;T<S.length;T++){if(typeof S[T]!="string")throw new TypeError(`tensor data at index ${T} is not a string`);u.HEAPU32[b++]=Tt(S[T],i)}}else v=S.byteLength,_=u._malloc(v),i.push(_),u.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,v),_)}let f=u.stackSave(),x=u.stackAlloc(4*m.length);try{let S=x/4;m.forEach(T=>u.HEAP32[S++]=T);let b=u._OrtCreateTensor(Qs(h),_,v,x,m.length,Oc(g));b===0&&ct(`Can't create tensor for input/output. session=${s}, index=${o}.`),r.push(b)}finally{u.stackRestore(f)}},xf=async(e,r,i,s,o,d)=>{var oe,me;let u=xt(),h=Wr.get(e);if(!h)throw new Error(`cannot run inference. invalid session id: ${e}`);let m=h[0],g=h[1],_=h[2],v=h[3],f=h[4],x=h[5],S=r.length,b=s.length,T=0,A=[],C=[],O=[],R=[],B=u.stackSave(),F=u.stackAlloc(S*4),U=u.stackAlloc(S*4),Y=u.stackAlloc(b*4),ae=u.stackAlloc(b*4);try{(oe=u.jsepOnRunStart)==null||oe.call(u,m),[T,A]=m0(d);for(let q=0;q<S;q++)Ic(i[q],C,R,e,r[q],f);for(let q=0;q<b;q++)Ic(o[q],O,R,e,S+s[q],f);let ge=F/4,le=U/4,Te=Y/4,Oe=ae/4;for(let q=0;q<S;q++)u.HEAPU32[ge++]=C[q],u.HEAPU32[le++]=g[r[q]];for(let q=0;q<b;q++)u.HEAPU32[Te++]=O[q],u.HEAPU32[Oe++]=_[s[q]];if(v&&!x){let{handle:q,outputPreferredLocations:J,outputPreferredLocationsEncoded:G}=v;if(g.length!==S)throw new Error(`input count from feeds (${S}) is expected to be always equal to model's input count (${g.length}).`);for(let z=0;z<S;z++){let N=r[z];await u._OrtBindInput(q,g[N],C[z])!==0&&ct(`Can't bind input[${z}] for session=${e}.`)}for(let z=0;z<b;z++){let N=s[z];(me=o[z])!=null&&me[3]?u._OrtBindOutput(q,_[N],O[z],0)!==0&&ct(`Can't bind pre-allocated output[${z}] for session=${e}.`):u._OrtBindOutput(q,_[N],0,G[N])!==0&&ct(`Can't bind output[${z}] to ${J[z]} for session=${e}.`)}Wr.set(e,[m,g,_,v,f,!0])}let ve;v?ve=await u._OrtRunWithBinding(m,v.handle,b,Y,T):ve=await u._OrtRun(m,U,F,S,ae,b,Y,T),ve!==0&&ct("failed to call OrtRun().");let Se=[];for(let q=0;q<b;q++){let J=u.HEAPU32[Y/4+q];if(J===O[q]){Se.push(o[q]);continue}let G=u.stackSave(),z=u.stackAlloc(4*4),N=!1,ne,ce=0;try{u._OrtGetTensorData(J,z,z+4,z+8,z+12)!==0&&ct(`Can't access output tensor data on index ${q}.`);let xe=z/4,Ce=u.HEAPU32[xe++];ce=u.HEAPU32[xe++];let je=u.HEAPU32[xe++],We=u.HEAPU32[xe++],De=[];for(let et=0;et<We;et++)De.push(u.HEAPU32[je/4+et]);u._OrtFree(je);let Ve=De.reduce((et,it)=>et*it,1);ne=Ri(Ce);let Ft=v==null?void 0:v.outputPreferredLocations[s[q]];if(ne==="string"){if(Ft==="gpu-buffer"||Ft==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let et=[],it=ce/4;for(let It=0;It<Ve;It++){let xn=u.HEAPU32[it++],Zr=It===Ve-1?void 0:u.HEAPU32[it]-xn;et.push(u.UTF8ToString(xn,Zr))}Se.push([ne,De,et,"cpu"])}else if(Ft==="gpu-buffer"&&Ve>0){let et=u.jsepGetBuffer;if(!et)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let it=et(ce),It=Ia(Ce,Ve);if(It===void 0||!rf(ne))throw new Error(`Unsupported data type: ${ne}`);N=!0,Se.push([ne,De,{gpuBuffer:it,download:u.jsepCreateDownloader(it,It,ne),dispose:()=>{u._OrtReleaseTensor(J)}},"gpu-buffer"])}else if(Ft==="ml-tensor"&&Ve>0){let et=u.jsepEnsureTensor;if(!et)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ia(Ce,Ve)===void 0||!af(ne))throw new Error(`Unsupported data type: ${ne}`);let it=await et(ce,Ce,De,!1);N=!0,Se.push([ne,De,{mlTensor:it,download:u.jsepCreateMLTensorDownloader(ce,ne),dispose:()=>{u.jsepReleaseTensorId(ce),u._OrtReleaseTensor(J)}},"ml-tensor"])}else{let et=nf(ne),it=new et(Ve);new Uint8Array(it.buffer,it.byteOffset,it.byteLength).set(u.HEAPU8.subarray(ce,ce+it.byteLength)),Se.push([ne,De,it,"cpu"])}}finally{u.stackRestore(G),ne==="string"&&ce&&u._free(ce),N||u._OrtReleaseTensor(J)}}return v&&!f&&(u._OrtClearBoundOutputs(v.handle),Wr.set(e,[m,g,_,v,f,!1])),Se}finally{u.stackRestore(B),C.forEach(ge=>u._OrtReleaseTensor(ge)),O.forEach(ge=>u._OrtReleaseTensor(ge)),R.forEach(ge=>u._free(ge)),T!==0&&u._OrtReleaseRunOptions(T),A.forEach(ge=>u._free(ge))}},bf=e=>{let r=xt(),i=Wr.get(e);if(!i)throw new Error("invalid session id");let s=i[0],o=r._OrtEndProfiling(s);o===0&&ct("Can't get an profile file name."),r._OrtFree(o)},Sf=e=>{let r=[];for(let i of e){let s=i[2];!Array.isArray(s)&&"buffer"in s&&r.push(s.buffer)}return r}}),Vr,Jt,Ea,Vs,Hs,Wu,zc,Vu,Ii,zi,Ny,u1,l1,d1,c1,f1,p1,h1,m1=re(()=>{Mn(),o1(),Oi(),il(),Vr=()=>!!Je.wasm.proxy&&typeof document<"u",Ea=!1,Vs=!1,Hs=!1,Vu=new Map,Ii=(e,r)=>{let i=Vu.get(e);i?i.push(r):Vu.set(e,[r])},zi=()=>{if(Ea||!Vs||Hs||!Jt)throw new Error("worker not ready")},Ny=e=>{switch(e.data.type){case"init-wasm":Ea=!1,e.data.err?(Hs=!0,zc[1](e.data.err)):(Vs=!0,zc[0]()),Wu&&(URL.revokeObjectURL(Wu),Wu=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let r=Vu.get(e.data.type);e.data.err?r.shift()[1](e.data.err):r.shift()[0](e.data.out);break}}},u1=async()=>{if(!Vs){if(Ea)throw new Error("multiple calls to 'initWasm()' detected.");if(Hs)throw new Error("previous call to 'initWasm()' failed.");if(Ea=!0,Vr())return new Promise((e,r)=>{Jt==null||Jt.terminate(),p0().then(([i,s])=>{try{Jt=s,Jt.onerror=d=>r(d),Jt.onmessage=Ny,zc=[e,r];let o={type:"init-wasm",in:Je};Jt.postMessage(o),Wu=i}catch(o){r(o)}},r)});try{await ef(Je.wasm),await wf(Je),Vs=!0}catch(e){throw Hs=!0,e}finally{Ea=!1}}},l1=async e=>{if(Vr())return zi(),new Promise((r,i)=>{Ii("init-ep",[r,i]);let s={type:"init-ep",in:{epName:e,env:Je}};Jt.postMessage(s)});await vf(Je,e)},d1=async e=>Vr()?(zi(),new Promise((r,i)=>{Ii("copy-from",[r,i]);let s={type:"copy-from",in:{buffer:e}};Jt.postMessage(s,[e.buffer])})):nl(e),c1=async(e,r)=>{if(Vr()){if(r!=null&&r.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return zi(),new Promise((i,s)=>{Ii("create",[i,s]);let o={type:"create",in:{model:e,options:{...r}}},d=[];e instanceof Uint8Array&&d.push(e.buffer),Jt.postMessage(o,d)})}else return _f(e,r)},f1=async e=>{if(Vr())return zi(),new Promise((r,i)=>{Ii("release",[r,i]);let s={type:"release",in:e};Jt.postMessage(s)});$f(e)},p1=async(e,r,i,s,o,d)=>{if(Vr()){if(i.some(u=>u[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(u=>u))throw new Error("pre-allocated output tensor is not supported for proxy.");return zi(),new Promise((u,h)=>{Ii("run",[u,h]);let m=i,g={type:"run",in:{sessionId:e,inputIndices:r,inputs:m,outputIndices:s,options:d}};Jt.postMessage(g,Sf(m))})}else return xf(e,r,i,s,o,d)},h1=async e=>{if(Vr())return zi(),new Promise((r,i)=>{Ii("end-profiling",[r,i]);let s={type:"end-profiling",in:e};Jt.postMessage(s)});bf(e)}}),Ac,Ly,g1,D_=re(()=>{Mn(),m1(),Ae(),Jc(),y0(),Ac=(e,r)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${r()}`)}},Ly=e=>{switch(e[3]){case"cpu":return new wt(e[0],e[2],e[1]);case"gpu-buffer":{let r=e[0];if(!rf(r))throw new Error(`not supported data type: ${r} for deserializing GPU tensor`);let{gpuBuffer:i,download:s,dispose:o}=e[2];return wt.fromGpuBuffer(i,{dataType:r,dims:e[1],download:s,dispose:o})}case"ml-tensor":{let r=e[0];if(!af(r))throw new Error(`not supported data type: ${r} for deserializing MLTensor tensor`);let{mlTensor:i,download:s,dispose:o}=e[2];return wt.fromMLTensor(i,{dataType:r,dims:e[1],download:s,dispose:o})}default:throw new Error(`invalid data location: ${e[3]}`)}},g1=class{async fetchModelAndCopyToWasmMemory(e){return d1(await sf(e))}async loadModel(e,r){Qn();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames]=await c1(i,r),Bn()}async dispose(){return f1(this.sessionId)}async run(e,r,i){Qn();let s=[],o=[];Object.entries(e).forEach(v=>{let f=v[0],x=v[1],S=this.inputNames.indexOf(f);if(S===-1)throw new Error(`invalid input '${f}'`);s.push(x),o.push(S)});let d=[],u=[];Object.entries(r).forEach(v=>{let f=v[0],x=v[1],S=this.outputNames.indexOf(f);if(S===-1)throw new Error(`invalid output '${f}'`);d.push(x),u.push(S)});let h=s.map((v,f)=>Ac(v,()=>`input "${this.inputNames[o[f]]}"`)),m=d.map((v,f)=>v?Ac(v,()=>`output "${this.outputNames[u[f]]}"`):null),g=await p1(this.sessionId,o,h,u,m,i),_={};for(let v=0;v<g.length;v++)_[this.outputNames[u[v]]]=d[v]??Ly(g[v]);return Bn(),_}startProfiling(){}endProfiling(){h1(this.sessionId)}}}),y1={};to(y1,{OnnxruntimeWebAssemblyBackend:()=>qc,initializeFlags:()=>Hc,wasmBackend:()=>w1});var Hc,qc,w1,N_=re(()=>{Mn(),m1(),D_(),il(),Hc=()=>{if((typeof Je.wasm.initTimeout!="number"||Je.wasm.initTimeout<0)&&(Je.wasm.initTimeout=0),Je.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof Je.wasm.proxy!="boolean"&&(Je.wasm.proxy=!1),typeof Je.wasm.trace!="boolean"&&(Je.wasm.trace=!1),typeof Je.wasm.numThreads!="number"||!Number.isInteger(Je.wasm.numThreads)||Je.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)Je.wasm.numThreads=1;else{let e=typeof navigator>"u"?S2("node:os").cpus().length:navigator.hardwareConcurrency;Je.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},qc=class{async init(e){Hc(),await u1(),await l1(e)}async createInferenceSessionHandler(e,r){let i=new g1;return await i.loadModel(e,r),Promise.resolve(i)}},w1=new qc});Mn();Mn();Mn();var L_="1.20.1";{let e=(N_(),Gu(y1)).wasmBackend;Ta("webgpu",e,5),Ta("webnn",e,5),Ta("cpu",e,10),Ta("wasm",e,10)}Object.defineProperty(Je.versions,"web",{value:L_,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const U_={class:{0:"person",1:"bicycle",2:"car",3:"motorcycle",4:"airplane",5:"bus",6:"train",7:"truck",8:"boat",9:"traffic light",10:"fire hydrant",11:"stop sign",12:"parking meter",13:"bench",14:"bird",15:"cat",16:"dog",17:"horse",18:"sheep",19:"cow",20:"elephant",21:"bear",22:"zebra",23:"giraffe",24:"backpack",25:"umbrella",26:"handbag",27:"tie",28:"suitcase",29:"frisbee",30:"skis",31:"snowboard",32:"sports ball",33:"kite",34:"baseball bat",35:"baseball glove",36:"skateboard",37:"surfboard",38:"tennis racket",39:"bottle",40:"wine glass",41:"cup",42:"fork",43:"knife",44:"spoon",45:"bowl",46:"banana",47:"apple",48:"sandwich",49:"orange",50:"brocolli",51:"carrot",52:"hot dog",53:"pizza",54:"donut",55:"cake",56:"chair",57:"couch",58:"potted plant",59:"bed",60:"dining table",61:"toilet",62:"tv",63:"laptop",64:"mouse",65:"remote",66:"keyboard",67:"cell phone",68:"microwave",69:"oven",70:"toaster",71:"sink",72:"refrigerator",73:"book",74:"clock",75:"vase",76:"scissors",77:"teddy bear",78:"hair drier",79:"toothbrush"}};function j_(e,r){const i=r.getContext("2d");i.clearRect(0,0,r.width,r.height);const o=Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2))/250;e.forEach(d=>{const u=rl.getColor(d.class_idx,.2),h=rl.getColor(d.class_idx,.8),m=`rgba(${u[0]}, ${u[1]}, ${u[2]}, ${u[3]})`,g=`rgba(${h[0]}, ${h[1]}, ${h[2]}, ${h[3]})`,[_,v,f,x]=d.bbox;i.fillStyle=m,i.fillRect(_,v,f,x),i.lineWidth=o,i.strokeStyle=g,i.strokeRect(_,v,f,x),i.fillStyle=g,i.font="16px Arial";const S=`${U_.class[d.class_idx]} ${d.score.toFixed(2)}`,b=i.measureText(S).width,T=parseInt(i.font,10);let A=v-5,C=v-T-4;C<0&&(A=v+T+5,C=v+1),i.fillRect(_-1,C,b+4,T+4),i.fillStyle="white",i.fillText(S,_,A)})}const _n=class _n{static hex2rgba(r,i=1){return[parseInt(r.slice(1,3),16),parseInt(r.slice(3,5),16),parseInt(r.slice(5,7),16),i]}static getColor(r,i=1,s=!1){const o=`${r}-${i}-${s}`;if(_n.cache[o])return _n.cache[o];const u=[..._n.palette[r%_n.n].slice(0,3),i],h=s?[u[2],u[1],u[0],u[3]]:u;return _n.cache[o]=h,h}};Au(_n,"palette",["042AFF","0BDBEB","F3F3F3","00DFB7","111F68","FF6FDD","FF444F","CCED00","00F344","BD00FF","00B4FF","DD00BA","00FFFF","26C000","01FFB3","7D24FF","7B0068","FF1B6C","FC6D2F","A2FF0B"].map(r=>_n.hex2rgba(`#${r}`))),Au(_n,"n",_n.palette.length),Au(_n,"cache",{});let rl=_n;async function v1(e,r,i,s){const{yolo:o,nms:d,config:u}=r,{isV10:h,input_shape:m,tensor_topk:g,tensor_iou_threshold:_,tensor_score_threshold:v}=u,f=await F_(e,m[2],m[3]),x=new wt("float32",f.data32F,m);f.delete();const S=performance.now(),{output0:b}=await o.run({images:x}),T=performance.now();i((T-S).toFixed(2)),x.dispose();const A=e.cols/m[2],C=e.rows/m[3];e.delete();const O=[],R=v.data[0];if(h)for(let B=0;B<b.dims[1];B++){const F=b.data.slice(B*b.dims[2],(B+1)*b.dims[2]),U=F[4];if(U>R){const[Y,ae,oe,me]=F.slice(0,4),[ge,le,Te,Oe]=[Y*A,ae*C,(oe-Y)*A,(me-ae)*C];O.push({bbox:[ge,le,Te,Oe],class_idx:F[5],score:U})}}else{const{output_selected:B}=await d.run({input:b,topk:g,iou_threshold:_,score_threshold:v});for(let F=0;F<B.dims[1];F++){const U=B.data.slice(F*B.dims[2],(F+1)*B.dims[2]),[Y,ae,oe,me]=U.slice(0,4),ge=U.slice(4),le=Math.max(...ge),Te=ge.indexOf(le),[Oe,ve,Se,q]=[(Y-.5*oe)*A,(ae-.5*me)*C,oe*A,me*C];O.push({bbox:[Oe,ve,Se,q],class_idx:Te,score:le})}B.dispose()}b.dispose(),j_(O,s)}function F_(e,r,i){return cv.cvtColor(e,e,cv.COLOR_RGBA2RGB),cv.blobFromImage(e,1/255,new cv.Size(r,i),new cv.Scalar(0,0,0),!0,!1)}let qs=null,Uy=null,Rc=!0;async function W_(e,r,i,s,o,d){const u=async()=>{if(!Rc)return;Uy.drawImage(s,0,0,o.width,o.height);const h=cv.imread(o);await v1(h,e,r,i),requestAnimationFrame(u)};qs?(qs.getTracks().forEach(h=>h.stop()),s.srcObject=null,qs=null,Rc=!1,i.width=0,i.height=0):(qs=await navigator.mediaDevices.getUserMedia({video:{deviceId:d?{exact:d}:void 0},audio:!1}),s.srcObject=qs,Uy=o.getContext("2d",{willReadFrequently:!0}),s.onloadedmetadata=()=>{i.width=s.videoWidth,i.height=s.videoHeight},Rc=!0,u())}const Gs=[1,3,640,640],V_=100,H_=.45,q_=.25,jy=new wt("int32",new Int32Array([V_])),Fy=new wt("float32",new Float32Array([H_])),Wy=new wt("float32",new Float32Array([q_]));function G_(){const e=ot.useRef(null),r=ot.useRef(null),[i,s]=ot.useState(null),o=ot.useRef(null),[d,u]=ot.useState([]),[h,m]=ot.useState(""),g=ot.useRef(null),_=ot.useRef(null),v=ot.useRef(null),f=ot.useRef(null),x=ot.useRef(null),[S,b]=ot.useState(!1),[T,A]=ot.useState(!1),[C,O]=ot.useState([]),[R,B]=ot.useState(""),[F,U]=ot.useState(0),[Y,ae]=ot.useState(0),oe=ot.useRef(null);ot.useEffect(()=>{me(),Se()},[]);const me=async()=>{b(!0);const G=oe.current;G.textContent="Loading model...",G.style.color="red";const z=e.current.value,N=r.current.value,ne=d.find(xe=>xe.url===N),ce=ne?ne.url:`${window.location.href}/models/${N}.onnx`;try{const xe=performance.now();Je.wasm.wasmPaths="./";const Ce=await Qu.create(ce,{executionProviders:[z]}),je=await Qu.create(`${window.location.href}/yolo-decoder.onnx`),We=new wt("float32",new Float32Array(Gs.reduce((et,it)=>et*it)),Gs),{output0:De}=await Ce.run({images:We}),{output_selected:Ve}=await je.run({input:De,topk:jy,iou_threshold:Fy,score_threshold:Wy}),Ft=performance.now();ae((Ft-xe).toFixed(2)),ge([We,De,Ve]),s({yolo:Ce,nms:je,config:{isV10:N.includes("yolov10"),input_shape:Gs,tensor_topk:jy,tensor_iou_threshold:Fy,tensor_score_threshold:Wy}})}catch(xe){G.textContent="Model loading failed.",G.style.color="red",console.error(xe);return}b(!1),G.textContent="Model loaded.",G.style.color="green"},ge=G=>{G.forEach(z=>z.dispose())},le=ot.useCallback(()=>{f.current.width=v.current.width,f.current.height=v.current.height;const G=cv.imread(v.current);v1(G,i,U,f.current)},[i]),Te=ot.useCallback(()=>{m(null);const G=f.current;G.width=0,G.height=0},[]),Oe=ot.useCallback(G=>{const z=G.target.files[0];z&&m(URL.createObjectURL(z))},[]),ve=ot.useCallback(G=>{const z=G.target.files[0];if(z){const N=z.name.replace(".onnx","");u(ne=>[...ne,{name:N,url:URL.createObjectURL(z)}])}},[]),Se=async()=>{const z=(await navigator.mediaDevices.enumerateDevices()).filter(N=>N.kind==="videoinput");O(z),z.length>0&&B(z[0].deviceId)},q=G=>{B(G.target.value)},J=async()=>{T?(W_(i,U,f.current,_.current,g.current,R),A(!T)):(await Se(),document.getElementById("camera-selector").focus())};return Pe.jsxs(Pe.Fragment,{children:[Pe.jsxs("div",{children:[Pe.jsx("h1",{children:"Yolo object detection App"}),Pe.jsx("h2",{children:"Powered by onnxruntime-web"})]}),Pe.jsxs("div",{id:"setting-container",children:[Pe.jsxs("div",{children:[Pe.jsx("label",{htmlFor:"device-selector",children:"Backend:"}),Pe.jsxs("select",{name:"device-selector",ref:e,onChange:me,children:[Pe.jsx("option",{value:"webgpu",children:"webGPU"}),Pe.jsx("option",{value:"wasm",children:"Wasm(cpu)"})]})]}),Pe.jsxs("div",{children:[Pe.jsx("label",{htmlFor:"model-selector",children:"Model:"}),Pe.jsxs("select",{name:"model-selector",ref:r,onChange:me,children:[Pe.jsx("option",{value:"yolov10n-simplify",children:"yolov10n-2.3M"}),Pe.jsx("option",{value:"yolov10s-simplify",children:"yolov10s-7.2M"}),Pe.jsx("option",{value:"yolov9t-simplify",children:"yolov9t-2.0M"}),Pe.jsx("option",{value:"yolov9s-simplify",children:"yolov9s-7.1M"}),Pe.jsx("option",{value:"gelan-s2-simplify",children:"gelan-s2"}),Pe.jsx("option",{value:"yolov8n-simplify",children:"yolov8n-3.2M"}),Pe.jsx("option",{value:"yolov8s-simplify",children:"yolov8s-11.2M"}),d.map((G,z)=>Pe.jsx("option",{value:G.url,children:G.name},z))]})]}),Pe.jsxs("div",{id:"camera-selector-container",children:[Pe.jsx("label",{htmlFor:"camera-selector",children:"Select Camera:"}),Pe.jsx("select",{id:"camera-selector",value:R,onChange:q,children:C.map((G,z)=>Pe.jsx("option",{value:G.deviceId,children:G.label||`Camera ${z+1}`},z))})]})]}),Pe.jsxs("div",{id:"content-container",children:[Pe.jsx("canvas",{ref:g,width:Gs[2],height:Gs[3],hidden:!0}),Pe.jsx("video",{ref:_,style:{display:h?"none":"block"},autoPlay:!0}),Pe.jsx("img",{id:"img",src:h,ref:v,onLoad:le}),Pe.jsx("canvas",{id:"overlay",ref:f})]}),Pe.jsxs("div",{id:"btn-container",children:[Pe.jsx("input",{type:"file",accept:"image/*",ref:x,style:{display:"none"},onChange:Oe}),Pe.jsx("button",{disabled:S||T,onClick:()=>{h?Te():x.current.click()},children:h?"Close Image":"Open Image"}),Pe.jsx("button",{disabled:S||h||C.length===0,onClick:J,children:T?"Close Camera":"Open Camera"}),Pe.jsx("input",{type:"file",accept:".onnx",onChange:ve,ref:o,hidden:!0}),Pe.jsx("button",{onClick:()=>o.current.click(),children:"Add model"})]}),Pe.jsxs("div",{id:"model-status-container",children:[Pe.jsx("p",{ref:oe,children:"yolov10 model loaded."}),Pe.jsxs("div",{id:"inferenct-time-container",children:[Pe.jsxs("p",{children:["Warm up time: ",Y,"ms"]}),Pe.jsxs("p",{children:["Inference time: ",F,"ms"]})]})]})]})}_2.createRoot(document.getElementById("root")).render(Pe.jsx(p2.StrictMode,{children:Pe.jsx(G_,{})}));
