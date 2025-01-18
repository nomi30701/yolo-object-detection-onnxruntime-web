var u2=Object.defineProperty;var l2=(e,r,i)=>r in e?u2(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i;var Au=(e,r,i)=>l2(e,typeof r!="symbol"?r+"":r,i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const u of d.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function i(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerPolicy&&(d.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?d.credentials="include":o.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(o){if(o.ep)return;o.ep=!0;const d=i(o);fetch(o.href,d)}})();function Vy(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Dd={exports:{}},Ds={},Nd={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dh;function d2(){if(dh)return Fe;dh=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function f(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,b={};function I(z,N,ie){this.props=z,this.context=N,this.refs=b,this.updater=ie||x}I.prototype.isReactComponent={},I.prototype.setState=function(z,N){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,N,"setState")},I.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function A(){}A.prototype=I.prototype;function C(z,N,ie){this.props=z,this.context=N,this.refs=b,this.updater=ie||x}var O=C.prototype=new A;O.constructor=C,S(O,I.prototype),O.isPureReactComponent=!0;var R=Array.isArray,M=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Q(z,N,ie){var ee,ce={},be=null,Ue=null;if(N!=null)for(ee in N.ref!==void 0&&(Ue=N.ref),N.key!==void 0&&(be=""+N.key),N)M.call(N,ee)&&!U.hasOwnProperty(ee)&&(ce[ee]=N[ee]);var We=arguments.length-2;if(We===1)ce.children=ie;else if(1<We){for(var Me=Array(We),Ve=0;Ve<We;Ve++)Me[Ve]=arguments[Ve+2];ce.children=Me}if(z&&z.defaultProps)for(ee in We=z.defaultProps,We)ce[ee]===void 0&&(ce[ee]=We[ee]);return{$$typeof:e,type:z,key:be,ref:Ue,props:ce,_owner:F.current}}function se(z,N){return{$$typeof:e,type:z.type,key:N,ref:z.ref,props:z.props,_owner:z._owner}}function ue(z){return typeof z=="object"&&z!==null&&z.$$typeof===e}function we(z){var N={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ie){return N[ie]})}var he=/\/+/g;function de(z,N){return typeof z=="object"&&z!==null&&z.key!=null?we(""+z.key):N.toString(36)}function Te(z,N,ie,ee,ce){var be=typeof z;(be==="undefined"||be==="boolean")&&(z=null);var Ue=!1;if(z===null)Ue=!0;else switch(be){case"string":case"number":Ue=!0;break;case"object":switch(z.$$typeof){case e:case r:Ue=!0}}if(Ue)return Ue=z,ce=ce(Ue),z=ee===""?"."+de(Ue,0):ee,R(ce)?(ie="",z!=null&&(ie=z.replace(he,"$&/")+"/"),Te(ce,N,ie,"",function(Ve){return Ve})):ce!=null&&(ue(ce)&&(ce=se(ce,ie+(!ce.key||Ue&&Ue.key===ce.key?"":(""+ce.key).replace(he,"$&/")+"/")+z)),N.push(ce)),1;if(Ue=0,ee=ee===""?".":ee+":",R(z))for(var We=0;We<z.length;We++){be=z[We];var Me=ee+de(be,We);Ue+=Te(be,N,ie,Me,ce)}else if(Me=f(z),typeof Me=="function")for(z=Me.call(z),We=0;!(be=z.next()).done;)be=be.value,Me=ee+de(be,We++),Ue+=Te(be,N,ie,Me,ce);else if(be==="object")throw N=String(z),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return Ue}function Pe(z,N,ie){if(z==null)return z;var ee=[],ce=0;return Te(z,ee,"","",function(be){return N.call(ie,be,ce++)}),ee}function _e(z){if(z._status===-1){var N=z._result;N=N(),N.then(function(ie){(z._status===0||z._status===-1)&&(z._status=1,z._result=ie)},function(ie){(z._status===0||z._status===-1)&&(z._status=2,z._result=ie)}),z._status===-1&&(z._status=0,z._result=N)}if(z._status===1)return z._result.default;throw z._result}var Ee={current:null},q={transition:null},X={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:q,ReactCurrentOwner:F};function J(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:Pe,forEach:function(z,N,ie){Pe(z,function(){N.apply(this,arguments)},ie)},count:function(z){var N=0;return Pe(z,function(){N++}),N},toArray:function(z){return Pe(z,function(N){return N})||[]},only:function(z){if(!ue(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},Fe.Component=I,Fe.Fragment=i,Fe.Profiler=o,Fe.PureComponent=C,Fe.StrictMode=s,Fe.Suspense=m,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=X,Fe.act=J,Fe.cloneElement=function(z,N,ie){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var ee=S({},z.props),ce=z.key,be=z.ref,Ue=z._owner;if(N!=null){if(N.ref!==void 0&&(be=N.ref,Ue=F.current),N.key!==void 0&&(ce=""+N.key),z.type&&z.type.defaultProps)var We=z.type.defaultProps;for(Me in N)M.call(N,Me)&&!U.hasOwnProperty(Me)&&(ee[Me]=N[Me]===void 0&&We!==void 0?We[Me]:N[Me])}var Me=arguments.length-2;if(Me===1)ee.children=ie;else if(1<Me){We=Array(Me);for(var Ve=0;Ve<Me;Ve++)We[Ve]=arguments[Ve+2];ee.children=We}return{$$typeof:e,type:z.type,key:ce,ref:be,props:ee,_owner:Ue}},Fe.createContext=function(z){return z={$$typeof:u,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:d,_context:z},z.Consumer=z},Fe.createElement=Q,Fe.createFactory=function(z){var N=Q.bind(null,z);return N.type=z,N},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(z){return{$$typeof:h,render:z}},Fe.isValidElement=ue,Fe.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:_e}},Fe.memo=function(z,N){return{$$typeof:g,type:z,compare:N===void 0?null:N}},Fe.startTransition=function(z){var N=q.transition;q.transition={};try{z()}finally{q.transition=N}},Fe.unstable_act=J,Fe.useCallback=function(z,N){return Ee.current.useCallback(z,N)},Fe.useContext=function(z){return Ee.current.useContext(z)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(z){return Ee.current.useDeferredValue(z)},Fe.useEffect=function(z,N){return Ee.current.useEffect(z,N)},Fe.useId=function(){return Ee.current.useId()},Fe.useImperativeHandle=function(z,N,ie){return Ee.current.useImperativeHandle(z,N,ie)},Fe.useInsertionEffect=function(z,N){return Ee.current.useInsertionEffect(z,N)},Fe.useLayoutEffect=function(z,N){return Ee.current.useLayoutEffect(z,N)},Fe.useMemo=function(z,N){return Ee.current.useMemo(z,N)},Fe.useReducer=function(z,N,ie){return Ee.current.useReducer(z,N,ie)},Fe.useRef=function(z){return Ee.current.useRef(z)},Fe.useState=function(z){return Ee.current.useState(z)},Fe.useSyncExternalStore=function(z,N,ie){return Ee.current.useSyncExternalStore(z,N,ie)},Fe.useTransition=function(){return Ee.current.useTransition()},Fe.version="18.3.1",Fe}var ch;function Gc(){return ch||(ch=1,Nd.exports=d2()),Nd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh;function c2(){if(fh)return Ds;fh=1;var e=Gc(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function u(h,m,g){var _,v={},f=null,x=null;g!==void 0&&(f=""+g),m.key!==void 0&&(f=""+m.key),m.ref!==void 0&&(x=m.ref);for(_ in m)s.call(m,_)&&!d.hasOwnProperty(_)&&(v[_]=m[_]);if(h&&h.defaultProps)for(_ in m=h.defaultProps,m)v[_]===void 0&&(v[_]=m[_]);return{$$typeof:r,type:h,key:f,ref:x,props:v,_owner:o.current}}return Ds.Fragment=i,Ds.jsx=u,Ds.jsxs=u,Ds}var ph;function f2(){return ph||(ph=1,Dd.exports=c2()),Dd.exports}var Ae=f2(),at=Gc();const p2=Vy(at);var Ru={},Ld={exports:{}},Xt={},Ud={exports:{}},jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function h2(){return hh||(hh=1,function(e){function r(q,X){var J=q.length;q.push(X);e:for(;0<J;){var z=J-1>>>1,N=q[z];if(0<o(N,X))q[z]=X,q[J]=N,J=z;else break e}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var X=q[0],J=q.pop();if(J!==X){q[0]=J;e:for(var z=0,N=q.length,ie=N>>>1;z<ie;){var ee=2*(z+1)-1,ce=q[ee],be=ee+1,Ue=q[be];if(0>o(ce,J))be<N&&0>o(Ue,ce)?(q[z]=Ue,q[be]=J,z=be):(q[z]=ce,q[ee]=J,z=ee);else if(be<N&&0>o(Ue,J))q[z]=Ue,q[be]=J,z=be;else break e}}return X}function o(q,X){var J=q.sortIndex-X.sortIndex;return J!==0?J:q.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;e.unstable_now=function(){return d.now()}}else{var u=Date,h=u.now();e.unstable_now=function(){return u.now()-h}}var m=[],g=[],_=1,v=null,f=3,x=!1,S=!1,b=!1,I=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(q){for(var X=i(g);X!==null;){if(X.callback===null)s(g);else if(X.startTime<=q)s(g),X.sortIndex=X.expirationTime,r(m,X);else break;X=i(g)}}function R(q){if(b=!1,O(q),!S)if(i(m)!==null)S=!0,_e(M);else{var X=i(g);X!==null&&Ee(R,X.startTime-q)}}function M(q,X){S=!1,b&&(b=!1,A(Q),Q=-1),x=!0;var J=f;try{for(O(X),v=i(m);v!==null&&(!(v.expirationTime>X)||q&&!we());){var z=v.callback;if(typeof z=="function"){v.callback=null,f=v.priorityLevel;var N=z(v.expirationTime<=X);X=e.unstable_now(),typeof N=="function"?v.callback=N:v===i(m)&&s(m),O(X)}else s(m);v=i(m)}if(v!==null)var ie=!0;else{var ee=i(g);ee!==null&&Ee(R,ee.startTime-X),ie=!1}return ie}finally{v=null,f=J,x=!1}}var F=!1,U=null,Q=-1,se=5,ue=-1;function we(){return!(e.unstable_now()-ue<se)}function he(){if(U!==null){var q=e.unstable_now();ue=q;var X=!0;try{X=U(!0,q)}finally{X?de():(F=!1,U=null)}}else F=!1}var de;if(typeof C=="function")de=function(){C(he)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Pe=Te.port2;Te.port1.onmessage=he,de=function(){Pe.postMessage(null)}}else de=function(){I(he,0)};function _e(q){U=q,F||(F=!0,de())}function Ee(q,X){Q=I(function(){q(e.unstable_now())},X)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(q){q.callback=null},e.unstable_continueExecution=function(){S||x||(S=!0,_e(M))},e.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<q?Math.floor(1e3/q):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return i(m)},e.unstable_next=function(q){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var J=f;f=X;try{return q()}finally{f=J}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(q,X){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var J=f;f=q;try{return X()}finally{f=J}},e.unstable_scheduleCallback=function(q,X,J){var z=e.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?z+J:z):J=z,q){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=J+N,q={id:_++,callback:X,priorityLevel:q,startTime:J,expirationTime:N,sortIndex:-1},J>z?(q.sortIndex=J,r(g,q),i(m)===null&&q===i(g)&&(b?(A(Q),Q=-1):b=!0,Ee(R,J-z))):(q.sortIndex=N,r(m,q),S||x||(S=!0,_e(M))),q},e.unstable_shouldYield=we,e.unstable_wrapCallback=function(q){var X=f;return function(){var J=f;f=X;try{return q.apply(this,arguments)}finally{f=J}}}}(jd)),jd}var mh;function m2(){return mh||(mh=1,Ud.exports=h2()),Ud.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gh;function g2(){if(gh)return Xt;gh=1;var e=Gc(),r=m2();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function d(t,n){u(t,n),u(t+"Capture",n)}function u(t,n){for(o[t]=n,t=0;t<n.length;t++)s.add(n[t])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function f(t){return m.call(v,t)?!0:m.call(_,t)?!1:g.test(t)?v[t]=!0:(_[t]=!0,!1)}function x(t,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function S(t,n,a,l){if(n===null||typeof n>"u"||x(t,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function b(t,n,a,l,p,y,E){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=t,this.type=n,this.sanitizeURL=y,this.removeEmptyString=E}var I={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){I[t]=new b(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];I[n]=new b(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){I[t]=new b(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){I[t]=new b(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){I[t]=new b(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){I[t]=new b(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){I[t]=new b(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){I[t]=new b(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){I[t]=new b(t,5,!1,t.toLowerCase(),null,!1,!1)});var A=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(A,C);I[n]=new b(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(A,C);I[n]=new b(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(A,C);I[n]=new b(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){I[t]=new b(t,1,!1,t.toLowerCase(),null,!1,!1)}),I.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){I[t]=new b(t,1,!1,t.toLowerCase(),null,!0,!0)});function O(t,n,a,l){var p=I.hasOwnProperty(n)?I[n]:null;(p!==null?p.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(S(n,a,p,l)&&(a=null),l||p===null?f(n)&&(a===null?t.removeAttribute(n):t.setAttribute(n,""+a)):p.mustUseProperty?t[p.propertyName]=a===null?p.type===3?!1:"":a:(n=p.attributeName,l=p.attributeNamespace,a===null?t.removeAttribute(n):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,l?t.setAttributeNS(l,n,a):t.setAttribute(n,a))))}var R=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,M=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),ue=Symbol.for("react.provider"),we=Symbol.for("react.context"),he=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),_e=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),q=Symbol.iterator;function X(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var J=Object.assign,z;function N(t){if(z===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);z=n&&n[1]||""}return`
`+z+t}var ie=!1;function ee(t,n){if(!t||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(V){var l=V}Reflect.construct(t,[],n)}else{try{n.call()}catch(V){l=V}t.call(n.prototype)}else{try{throw Error()}catch(V){l=V}t()}}catch(V){if(V&&l&&typeof V.stack=="string"){for(var p=V.stack.split(`
`),y=l.stack.split(`
`),E=p.length-1,P=y.length-1;1<=E&&0<=P&&p[E]!==y[P];)P--;for(;1<=E&&0<=P;E--,P--)if(p[E]!==y[P]){if(E!==1||P!==1)do if(E--,P--,0>P||p[E]!==y[P]){var D=`
`+p[E].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=E&&0<=P);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?N(t):""}function ce(t){switch(t.tag){case 5:return N(t.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return t=ee(t.type,!1),t;case 11:return t=ee(t.type.render,!1),t;case 1:return t=ee(t.type,!0),t;default:return""}}function be(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case U:return"Fragment";case F:return"Portal";case se:return"Profiler";case Q:return"StrictMode";case de:return"Suspense";case Te:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case we:return(t.displayName||"Context")+".Consumer";case ue:return(t._context.displayName||"Context")+".Provider";case he:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pe:return n=t.displayName||null,n!==null?n:be(t.type)||"Memo";case _e:n=t._payload,t=t._init;try{return be(t(n))}catch{}}return null}function Ue(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return be(n);case 8:return n===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function We(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Me(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ve(t){var n=Me(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,y=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return p.call(this)},set:function(E){l=""+E,y.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Bt(t){t._valueTracker||(t._valueTracker=Ve(t))}function Xe(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=Me(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bt(t,n){var a=n.checked;return J({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function en(t,n){var a=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;a=We(n.value!=null?n.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Zn(t,n){n=n.checked,n!=null&&O(t,"checked",n,!1)}function cn(t,n){Zn(t,n);var a=We(n.value),l=n.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Mi(t,n.type,a):n.hasOwnProperty("defaultValue")&&Mi(t,n.type,We(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function Pi(t,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,a||n===t.value||(t.value=n),t.defaultValue=n}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Mi(t,n,a){(n!=="number"||tt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var hr=Array.isArray;function Xn(t,n,a,l){if(t=t.options,n){n={};for(var p=0;p<a.length;p++)n["$"+a[p]]=!0;for(a=0;a<t.length;a++)p=n.hasOwnProperty("$"+t[a].value),t[a].selected!==p&&(t[a].selected=p),p&&l&&(t[a].defaultSelected=!0)}else{for(a=""+We(a),n=null,p=0;p<t.length;p++){if(t[p].value===a){t[p].selected=!0,l&&(t[p].defaultSelected=!0);return}n!==null||t[p].disabled||(n=t[p])}n!==null&&(n.selected=!0)}}function Bi(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return J({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Oa(t,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(i(92));if(hr(a)){if(1<a.length)throw Error(i(93));a=a[0]}n=a}n==null&&(n=""),a=n}t._wrapperState={initialValue:We(a)}}function Di(t,n){var a=We(n.value),l=We(n.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),n.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function no(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function ro(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xr(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?ro(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mr,Pa=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,l,p){MSApp.execUnsafeLocalFunction(function(){return t(n,a,l,p)})}:t}(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(mr=mr||document.createElement("div"),mr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=mr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function tn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ma=["Webkit","ms","Moz","O"];Object.keys(Qe).forEach(function(t){Ma.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),Qe[n]=Qe[t]})});function Ba(t,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||Qe.hasOwnProperty(t)&&Qe[t]?(""+n).trim():n+"px"}function Ni(t,n){t=t.style;for(var a in n)if(n.hasOwnProperty(a)){var l=a.indexOf("--")===0,p=Ba(a,n[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,p):t[a]=p}}var Nn=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Sn(t,n){if(n){if(Nn[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function Li(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wt=null;function Ui(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ji=null,Jn=null,er=null;function Jr(t){if(t=xs(t)){if(typeof ji!="function")throw Error(i(280));var n=t.stateNode;n&&(n=qo(n),ji(t.stateNode,t.type,n))}}function io(t){Jn?er?er.push(t):er=[t]:Jn=t}function ao(){if(Jn){var t=Jn,n=er;if(er=Jn=null,Jr(t),n)for(t=0;t<n.length;t++)Jr(n[t])}}function so(t,n){return t(n)}function oo(){}var Fi=!1;function Da(t,n,a){if(Fi)return t(n,a);Fi=!0;try{return so(t,n,a)}finally{Fi=!1,(Jn!==null||er!==null)&&(oo(),ao())}}function gr(t,n){var a=t.stateNode;if(a===null)return null;var l=qo(a);if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,n,typeof a));return a}var Wi=!1;if(h)try{var st={};Object.defineProperty(st,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",st,st),window.removeEventListener("test",st,st)}catch{Wi=!1}function uo(t,n,a,l,p,y,E,P,D){var V=Array.prototype.slice.call(arguments,3);try{n.apply(a,V)}catch(ne){this.onError(ne)}}var yr=!1,wr=null,ei=!1,Ln=null,lo={onError:function(t){yr=!0,wr=t}};function co(t,n,a,l,p,y,E,P,D){yr=!1,wr=null,uo.apply(lo,arguments)}function fo(t,n,a,l,p,y,E,P,D){if(co.apply(this,arguments),yr){if(yr){var V=wr;yr=!1,wr=null}else throw Error(i(198));ei||(ei=!0,Ln=V)}}function Un(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,n.flags&4098&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function Na(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function La(t){if(Un(t)!==t)throw Error(i(188))}function po(t){var n=t.alternate;if(!n){if(n=Un(t),n===null)throw Error(i(188));return n!==t?null:t}for(var a=t,l=n;;){var p=a.return;if(p===null)break;var y=p.alternate;if(y===null){if(l=p.return,l!==null){a=l;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===a)return La(p),t;if(y===l)return La(p),n;y=y.sibling}throw Error(i(188))}if(a.return!==l.return)a=p,l=y;else{for(var E=!1,P=p.child;P;){if(P===a){E=!0,a=p,l=y;break}if(P===l){E=!0,l=p,a=y;break}P=P.sibling}if(!E){for(P=y.child;P;){if(P===a){E=!0,a=y,l=p;break}if(P===l){E=!0,l=y,a=p;break}P=P.sibling}if(!E)throw Error(i(189))}}if(a.alternate!==l)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:n}function Ua(t){return t=po(t),t!==null?ja(t):null}function ja(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=ja(t);if(n!==null)return n;t=t.sibling}return null}var Fa=r.unstable_scheduleCallback,Wa=r.unstable_cancelCallback,ho=r.unstable_shouldYield,jn=r.unstable_requestPaint,ut=r.unstable_now,fn=r.unstable_getCurrentPriorityLevel,ti=r.unstable_ImmediatePriority,Vi=r.unstable_UserBlockingPriority,Vt=r.unstable_NormalPriority,mo=r.unstable_LowPriority,go=r.unstable_IdlePriority,nn=null,pn=null;function Va(t){if(pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(nn,t,void 0,(t.current.flags&128)===128)}catch{}}var ht=Math.clz32?Math.clz32:qt,Ha=Math.log,Ht=Math.LN2;function qt(t){return t>>>=0,t===0?32:31-(Ha(t)/Ht|0)|0}var vr=64,Hi=4194304;function ni(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qi(t,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,p=t.suspendedLanes,y=t.pingedLanes,E=a&268435455;if(E!==0){var P=E&~p;P!==0?l=ni(P):(y&=E,y!==0&&(l=ni(y)))}else E=a&~p,E!==0?l=ni(E):y!==0&&(l=ni(y));if(l===0)return 0;if(n!==0&&n!==l&&!(n&p)&&(p=l&-l,y=n&-n,p>=y||p===16&&(y&4194240)!==0))return n;if(l&4&&(l|=a&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)a=31-ht(n),p=1<<a,l|=t[a],n&=~p;return l}function ol(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ul(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,p=t.expirationTimes,y=t.pendingLanes;0<y;){var E=31-ht(y),P=1<<E,D=p[E];D===-1?(!(P&a)||P&l)&&(p[E]=ol(P,n)):D<=n&&(t.expiredLanes|=P),y&=~P}}function qa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yo(){var t=vr;return vr<<=1,!(vr&4194240)&&(vr=64),t}function Gi(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ri(t,n,a){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-ht(n),t[n]=a}function ll(t,n){var a=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var p=31-ht(a),y=1<<p;n[p]=0,l[p]=-1,t[p]=-1,a&=~y}}function Ga(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-ht(a),p=1<<l;p&n|t[l]&n&&(t[l]|=n),a&=~p}}var Ke=0;function wo(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vo,Ka,_o,$o,xo,Ki=!1,_r=[],rn=null,Fn=null,hn=null,ii=new Map,ai=new Map,Wn=[],Qa="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ya(t,n){switch(t){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":hn=null;break;case"pointerover":case"pointerout":ii.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(n.pointerId)}}function si(t,n,a,l,p,y){return t===null||t.nativeEvent!==y?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:y,targetContainers:[p]},n!==null&&(n=xs(n),n!==null&&Ka(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,p!==null&&n.indexOf(p)===-1&&n.push(p),t)}function Qi(t,n,a,l,p){switch(n){case"focusin":return rn=si(rn,t,n,a,l,p),!0;case"dragenter":return Fn=si(Fn,t,n,a,l,p),!0;case"mouseover":return hn=si(hn,t,n,a,l,p),!0;case"pointerover":var y=p.pointerId;return ii.set(y,si(ii.get(y)||null,t,n,a,l,p)),!0;case"gotpointercapture":return y=p.pointerId,ai.set(y,si(ai.get(y)||null,t,n,a,l,p)),!0}return!1}function kn(t){var n=yi(t.target);if(n!==null){var a=Un(n);if(a!==null){if(n=a.tag,n===13){if(n=Na(a),n!==null){t.blockedOn=n,xo(t.priority,function(){_o(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dt(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ja(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Wt=l,a.target.dispatchEvent(l),Wt=null}else return n=xs(a),n!==null&&Ka(n),t.blockedOn=a,!1;n.shift()}return!0}function Za(t,n,a){Dt(t)&&a.delete(n)}function Yi(){Ki=!1,rn!==null&&Dt(rn)&&(rn=null),Fn!==null&&Dt(Fn)&&(Fn=null),hn!==null&&Dt(hn)&&(hn=null),ii.forEach(Za),ai.forEach(Za)}function $r(t,n){t.blockedOn===n&&(t.blockedOn=null,Ki||(Ki=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Yi)))}function xr(t){function n(p){return $r(p,t)}if(0<_r.length){$r(_r[0],t);for(var a=1;a<_r.length;a++){var l=_r[a];l.blockedOn===t&&(l.blockedOn=null)}}for(rn!==null&&$r(rn,t),Fn!==null&&$r(Fn,t),hn!==null&&$r(hn,t),ii.forEach(n),ai.forEach(n),a=0;a<Wn.length;a++)l=Wn[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<Wn.length&&(a=Wn[0],a.blockedOn===null);)kn(a),a.blockedOn===null&&Wn.shift()}var br=R.ReactCurrentBatchConfig,Sr=!0;function dl(t,n,a,l){var p=Ke,y=br.transition;br.transition=null;try{Ke=1,Xa(t,n,a,l)}finally{Ke=p,br.transition=y}}function bo(t,n,a,l){var p=Ke,y=br.transition;br.transition=null;try{Ke=4,Xa(t,n,a,l)}finally{Ke=p,br.transition=y}}function Xa(t,n,a,l){if(Sr){var p=Ja(t,n,a,l);if(p===null)Cl(t,n,l,tr,a),Ya(t,l);else if(Qi(p,t,n,a,l))l.stopPropagation();else if(Ya(t,l),n&4&&-1<Qa.indexOf(t)){for(;p!==null;){var y=xs(p);if(y!==null&&vo(y),y=Ja(t,n,a,l),y===null&&Cl(t,n,l,tr,a),y===p)break;p=y}p!==null&&l.stopPropagation()}else Cl(t,n,l,null,a)}}var tr=null;function Ja(t,n,a,l){if(tr=null,t=Ui(l),t=yi(t),t!==null)if(n=Un(t),n===null)t=null;else if(a=n.tag,a===13){if(t=Na(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return tr=t,null}function So(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fn()){case ti:return 1;case Vi:return 4;case Vt:case mo:return 16;case go:return 536870912;default:return 16}default:return 16}}var an=null,es=null,oi=null;function ko(){if(oi)return oi;var t,n=es,a=n.length,l,p="value"in an?an.value:an.textContent,y=p.length;for(t=0;t<a&&n[t]===p[t];t++);var E=a-t;for(l=1;l<=E&&n[a-l]===p[y-l];l++);return oi=p.slice(t,1<l?1-l:void 0)}function Zi(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Xi(){return!0}function ts(){return!1}function Nt(t){function n(a,l,p,y,E){this._reactName=a,this._targetInst=p,this.type=l,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var P in t)t.hasOwnProperty(P)&&(a=t[P],this[P]=a?a(y):y[P]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Xi:ts,this.isPropagationStopped=ts,this}return J(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xi)},persist:function(){},isPersistent:Xi}),n}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=Nt(kr),ui=J({},kr,{view:0,detail:0}),cl=Nt(ui),rs,is,li,Ji=J({},ui,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ss,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==li&&(li&&t.type==="mousemove"?(rs=t.screenX-li.screenX,is=t.screenY-li.screenY):is=rs=0,li=t),rs)},movementY:function(t){return"movementY"in t?t.movementY:is}}),Eo=Nt(Ji),fl=J({},Ji,{dataTransfer:0}),pl=Nt(fl),Er=J({},ui,{relatedTarget:0}),ea=Nt(Er),Co=J({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),hl=Nt(Co),ml=J({},kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),To=Nt(ml),Io=J({},kr,{data:0}),zo=Nt(Io),as={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ao={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yl(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=gl[t])?!!n[t]:!1}function ss(){return yl}var wl=J({},ui,{key:function(t){if(t.key){var n=as[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Zi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ao[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ss,charCode:function(t){return t.type==="keypress"?Zi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vl=Nt(wl),Ro=J({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=Nt(Ro),_l=J({},ui,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ss}),$l=Nt(_l),xl=J({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),bl=Nt(xl),ta=J({},Ji,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),di=Nt(ta),Po=[9,13,27,32],os=h&&"CompositionEvent"in window,ci=null;h&&"documentMode"in document&&(ci=document.documentMode);var us=h&&"TextEvent"in window&&!ci,na=h&&(!os||ci&&8<ci&&11>=ci),ls=" ",ds=!1;function cs(t,n){switch(t){case"keyup":return Po.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var nr=!1;function Mo(t,n){switch(t){case"compositionend":return fs(n);case"keypress":return n.which!==32?null:(ds=!0,ls);case"textInput":return t=n.data,t===ls&&ds?null:t;default:return null}}function Sl(t,n){if(nr)return t==="compositionend"||!os&&cs(t,n)?(t=ko(),oi=es=an=null,nr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return na&&n.locale!=="ko"?null:n.data;default:return null}}var Bo={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ps(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Bo[t.type]:n==="textarea"}function hs(t,n,a,l){io(l),n=Wo(n,"onChange"),0<n.length&&(a=new ns("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var fi=null,Cr=null;function kl(t){Ef(t,0)}function pi(t){var n=ca(t);if(Xe(n))return t}function ra(t,n){if(t==="change")return n}var Do=!1;if(h){var $e;if(h){var ia="oninput"in document;if(!ia){var ms=document.createElement("div");ms.setAttribute("oninput","return;"),ia=typeof ms.oninput=="function"}$e=ia}else $e=!1;Do=$e&&(!document.documentMode||9<document.documentMode)}function hi(){fi&&(fi.detachEvent("onpropertychange",rr),Cr=fi=null)}function rr(t){if(t.propertyName==="value"&&pi(Cr)){var n=[];hs(n,Cr,t,Ui(t)),Da(kl,n)}}function aa(t,n,a){t==="focusin"?(hi(),fi=n,Cr=a,fi.attachEvent("onpropertychange",rr)):t==="focusout"&&hi()}function mn(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return pi(Cr)}function gs(t,n){if(t==="click")return pi(n)}function No(t,n){if(t==="input"||t==="change")return pi(n)}function Lo(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Lt=typeof Object.is=="function"?Object.is:Lo;function Vn(t,n){if(Lt(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var p=a[l];if(!m.call(n,p)||!Lt(t[p],n[p]))return!1}return!0}function ys(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ws(t,n){var a=ys(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ys(a)}}function mi(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?mi(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function sa(){for(var t=window,n=tt();n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=tt(t.document)}return n}function gi(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function Uo(t){var n=sa(),a=t.focusedElem,l=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&mi(a.ownerDocument.documentElement,a)){if(l!==null&&gi(a)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(t,a.value.length);else if(t=(n=a.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var p=a.textContent.length,y=Math.min(l.start,p);l=l.end===void 0?y:Math.min(l.end,p),!t.extend&&y>l&&(p=l,l=y,y=p),p=ws(a,y);var E=ws(a,l);p&&E&&(t.rangeCount!==1||t.anchorNode!==p.node||t.anchorOffset!==p.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(n=n.createRange(),n.setStart(p.node,p.offset),t.removeAllRanges(),y>l?(t.addRange(n),t.extend(E.node,E.offset)):(n.setEnd(E.node,E.offset),t.addRange(n)))}}for(n=[],t=a;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)t=n[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jo=h&&"documentMode"in document&&11>=document.documentMode,ir=null,oa=null,Tr=null,ua=!1;function c(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ua||ir==null||ir!==tt(l)||(l=ir,"selectionStart"in l&&gi(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Tr&&Vn(Tr,l)||(Tr=l,l=Wo(oa,"onSelect"),0<l.length&&(n=new ns("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=ir)))}function w(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $={animationend:w("Animation","AnimationEnd"),animationiteration:w("Animation","AnimationIteration"),animationstart:w("Animation","AnimationStart"),transitionend:w("Transition","TransitionEnd")},k={},T={};h&&(T=document.createElement("div").style,"AnimationEvent"in window||(delete $.animationend.animation,delete $.animationiteration.animation,delete $.animationstart.animation),"TransitionEvent"in window||delete $.transitionend.transition);function B(t){if(k[t])return k[t];if(!$[t])return t;var n=$[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in T)return k[t]=n[a];return t}var G=B("animationend"),Z=B("animationiteration"),le=B("animationstart"),fe=B("transitionend"),Ce=new Map,je="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Le(t,n){Ce.set(t,n),d(n,[t])}for(var H=0;H<je.length;H++){var Ne=je[H],nt=Ne.toLowerCase(),ar=Ne[0].toUpperCase()+Ne.slice(1);Le(nt,"on"+ar)}Le(G,"onAnimationEnd"),Le(Z,"onAnimationIteration"),Le(le,"onAnimationStart"),Le("dblclick","onDoubleClick"),Le("focusin","onFocus"),Le("focusout","onBlur"),Le(fe,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ir="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));function kf(t,n,a){var l=t.type||"unknown-event";t.currentTarget=a,fo(l,n,void 0,t),t.currentTarget=null}function Ef(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],p=l.event;l=l.listeners;e:{var y=void 0;if(n)for(var E=l.length-1;0<=E;E--){var P=l[E],D=P.instance,V=P.currentTarget;if(P=P.listener,D!==y&&p.isPropagationStopped())break e;kf(p,P,V),y=D}else for(E=0;E<l.length;E++){if(P=l[E],D=P.instance,V=P.currentTarget,P=P.listener,D!==y&&p.isPropagationStopped())break e;kf(p,P,V),y=D}}}if(ei)throw t=Ln,ei=!1,Ln=null,t}function rt(t,n){var a=n[Ol];a===void 0&&(a=n[Ol]=new Set);var l=t+"__bubble";a.has(l)||(Cf(n,t,2,!1),a.add(l))}function El(t,n,a){var l=0;n&&(l|=4),Cf(a,t,l,n)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function vs(t){if(!t[Fo]){t[Fo]=!0,s.forEach(function(a){a!=="selectionchange"&&(_1.has(a)||El(a,!1,t),El(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Fo]||(n[Fo]=!0,El("selectionchange",!1,n))}}function Cf(t,n,a,l){switch(So(n)){case 1:var p=dl;break;case 4:p=bo;break;default:p=Xa}a=p.bind(null,n,a,t),p=void 0,!Wi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(p=!0),l?p!==void 0?t.addEventListener(n,a,{capture:!0,passive:p}):t.addEventListener(n,a,!0):p!==void 0?t.addEventListener(n,a,{passive:p}):t.addEventListener(n,a,!1)}function Cl(t,n,a,l,p){var y=l;if(!(n&1)&&!(n&2)&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var P=l.stateNode.containerInfo;if(P===p||P.nodeType===8&&P.parentNode===p)break;if(E===4)for(E=l.return;E!==null;){var D=E.tag;if((D===3||D===4)&&(D=E.stateNode.containerInfo,D===p||D.nodeType===8&&D.parentNode===p))return;E=E.return}for(;P!==null;){if(E=yi(P),E===null)return;if(D=E.tag,D===5||D===6){l=y=E;continue e}P=P.parentNode}}l=l.return}Da(function(){var V=y,ne=Ui(a),ae=[];e:{var te=Ce.get(t);if(te!==void 0){var pe=ns,ye=t;switch(t){case"keypress":if(Zi(a)===0)break e;case"keydown":case"keyup":pe=vl;break;case"focusin":ye="focus",pe=ea;break;case"focusout":ye="blur",pe=ea;break;case"beforeblur":case"afterblur":pe=ea;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Eo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=pl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=$l;break;case G:case Z:case le:pe=hl;break;case fe:pe=bl;break;case"scroll":pe=cl;break;case"wheel":pe=di;break;case"copy":case"cut":case"paste":pe=To;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Oo}var xe=(n&4)!==0,mt=!xe&&t==="scroll",j=xe?te!==null?te+"Capture":null:te;xe=[];for(var L=V,W;L!==null;){W=L;var oe=W.stateNode;if(W.tag===5&&oe!==null&&(W=oe,j!==null&&(oe=gr(L,j),oe!=null&&xe.push(_s(L,oe,W)))),mt)break;L=L.return}0<xe.length&&(te=new pe(te,ye,null,a,ne),ae.push({event:te,listeners:xe}))}}if(!(n&7)){e:{if(te=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",te&&a!==Wt&&(ye=a.relatedTarget||a.fromElement)&&(yi(ye)||ye[sr]))break e;if((pe||te)&&(te=ne.window===ne?ne:(te=ne.ownerDocument)?te.defaultView||te.parentWindow:window,pe?(ye=a.relatedTarget||a.toElement,pe=V,ye=ye?yi(ye):null,ye!==null&&(mt=Un(ye),ye!==mt||ye.tag!==5&&ye.tag!==6)&&(ye=null)):(pe=null,ye=V),pe!==ye)){if(xe=Eo,oe="onMouseLeave",j="onMouseEnter",L="mouse",(t==="pointerout"||t==="pointerover")&&(xe=Oo,oe="onPointerLeave",j="onPointerEnter",L="pointer"),mt=pe==null?te:ca(pe),W=ye==null?te:ca(ye),te=new xe(oe,L+"leave",pe,a,ne),te.target=mt,te.relatedTarget=W,oe=null,yi(ne)===V&&(xe=new xe(j,L+"enter",ye,a,ne),xe.target=W,xe.relatedTarget=mt,oe=xe),mt=oe,pe&&ye)t:{for(xe=pe,j=ye,L=0,W=xe;W;W=la(W))L++;for(W=0,oe=j;oe;oe=la(oe))W++;for(;0<L-W;)xe=la(xe),L--;for(;0<W-L;)j=la(j),W--;for(;L--;){if(xe===j||j!==null&&xe===j.alternate)break t;xe=la(xe),j=la(j)}xe=null}else xe=null;pe!==null&&Tf(ae,te,pe,xe,!1),ye!==null&&mt!==null&&Tf(ae,mt,ye,xe,!0)}}e:{if(te=V?ca(V):window,pe=te.nodeName&&te.nodeName.toLowerCase(),pe==="select"||pe==="input"&&te.type==="file")var ke=ra;else if(ps(te))if(Do)ke=No;else{ke=mn;var Ie=aa}else(pe=te.nodeName)&&pe.toLowerCase()==="input"&&(te.type==="checkbox"||te.type==="radio")&&(ke=gs);if(ke&&(ke=ke(t,V))){hs(ae,ke,a,ne);break e}Ie&&Ie(t,te,V),t==="focusout"&&(Ie=te._wrapperState)&&Ie.controlled&&te.type==="number"&&Mi(te,"number",te.value)}switch(Ie=V?ca(V):window,t){case"focusin":(ps(Ie)||Ie.contentEditable==="true")&&(ir=Ie,oa=V,Tr=null);break;case"focusout":Tr=oa=ir=null;break;case"mousedown":ua=!0;break;case"contextmenu":case"mouseup":case"dragend":ua=!1,c(ae,a,ne);break;case"selectionchange":if(jo)break;case"keydown":case"keyup":c(ae,a,ne)}var ze;if(os)e:{switch(t){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else nr?cs(t,a)&&(Oe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Oe="onCompositionStart");Oe&&(na&&a.locale!=="ko"&&(nr||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&nr&&(ze=ko()):(an=ne,es="value"in an?an.value:an.textContent,nr=!0)),Ie=Wo(V,Oe),0<Ie.length&&(Oe=new zo(Oe,t,null,a,ne),ae.push({event:Oe,listeners:Ie}),ze?Oe.data=ze:(ze=fs(a),ze!==null&&(Oe.data=ze)))),(ze=us?Mo(t,a):Sl(t,a))&&(V=Wo(V,"onBeforeInput"),0<V.length&&(ne=new zo("onBeforeInput","beforeinput",null,a,ne),ae.push({event:ne,listeners:V}),ne.data=ze))}Ef(ae,n)})}function _s(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Wo(t,n){for(var a=n+"Capture",l=[];t!==null;){var p=t,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=gr(t,a),y!=null&&l.unshift(_s(t,y,p)),y=gr(t,n),y!=null&&l.push(_s(t,y,p))),t=t.return}return l}function la(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tf(t,n,a,l,p){for(var y=n._reactName,E=[];a!==null&&a!==l;){var P=a,D=P.alternate,V=P.stateNode;if(D!==null&&D===l)break;P.tag===5&&V!==null&&(P=V,p?(D=gr(a,y),D!=null&&E.unshift(_s(a,D,P))):p||(D=gr(a,y),D!=null&&E.push(_s(a,D,P)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var $1=/\r\n?/g,x1=/\u0000|\uFFFD/g;function If(t){return(typeof t=="string"?t:""+t).replace($1,`
`).replace(x1,"")}function Vo(t,n,a){if(n=If(n),If(t)!==n&&a)throw Error(i(425))}function Ho(){}var Tl=null,Il=null;function zl(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Al=typeof setTimeout=="function"?setTimeout:void 0,b1=typeof clearTimeout=="function"?clearTimeout:void 0,zf=typeof Promise=="function"?Promise:void 0,S1=typeof queueMicrotask=="function"?queueMicrotask:typeof zf<"u"?function(t){return zf.resolve(null).then(t).catch(k1)}:Al;function k1(t){setTimeout(function(){throw t})}function Rl(t,n){var a=n,l=0;do{var p=a.nextSibling;if(t.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(l===0){t.removeChild(p),xr(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=p}while(a);xr(n)}function zr(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Af(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}var da=Math.random().toString(36).slice(2),Hn="__reactFiber$"+da,$s="__reactProps$"+da,sr="__reactContainer$"+da,Ol="__reactEvents$"+da,E1="__reactListeners$"+da,C1="__reactHandles$"+da;function yi(t){var n=t[Hn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[sr]||a[Hn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Af(t);t!==null;){if(a=t[Hn])return a;t=Af(t)}return n}t=a,a=t.parentNode}return null}function xs(t){return t=t[Hn]||t[sr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ca(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function qo(t){return t[$s]||null}var Pl=[],fa=-1;function Ar(t){return{current:t}}function it(t){0>fa||(t.current=Pl[fa],Pl[fa]=null,fa--)}function Je(t,n){fa++,Pl[fa]=t.current,t.current=n}var Rr={},zt=Ar(Rr),Gt=Ar(!1),wi=Rr;function pa(t,n){var a=t.type.contextTypes;if(!a)return Rr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in a)p[y]=n[y];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=p),p}function Kt(t){return t=t.childContextTypes,t!=null}function Go(){it(Gt),it(zt)}function Rf(t,n,a){if(zt.current!==Rr)throw Error(i(168));Je(zt,n),Je(Gt,a)}function Of(t,n,a){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var p in l)if(!(p in n))throw Error(i(108,Ue(t)||"Unknown",p));return J({},a,l)}function Ko(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,wi=zt.current,Je(zt,t),Je(Gt,Gt.current),!0}function Pf(t,n,a){var l=t.stateNode;if(!l)throw Error(i(169));a?(t=Of(t,n,wi),l.__reactInternalMemoizedMergedChildContext=t,it(Gt),it(zt),Je(zt,t)):it(Gt),Je(Gt,a)}var or=null,Qo=!1,Ml=!1;function Mf(t){or===null?or=[t]:or.push(t)}function T1(t){Qo=!0,Mf(t)}function Or(){if(!Ml&&or!==null){Ml=!0;var t=0,n=Ke;try{var a=or;for(Ke=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}or=null,Qo=!1}catch(p){throw or!==null&&(or=or.slice(t+1)),Fa(ti,Or),p}finally{Ke=n,Ml=!1}}return null}var ha=[],ma=0,Yo=null,Zo=0,gn=[],yn=0,vi=null,ur=1,lr="";function _i(t,n){ha[ma++]=Zo,ha[ma++]=Yo,Yo=t,Zo=n}function Bf(t,n,a){gn[yn++]=ur,gn[yn++]=lr,gn[yn++]=vi,vi=t;var l=ur;t=lr;var p=32-ht(l)-1;l&=~(1<<p),a+=1;var y=32-ht(n)+p;if(30<y){var E=p-p%5;y=(l&(1<<E)-1).toString(32),l>>=E,p-=E,ur=1<<32-ht(n)+p|a<<p|l,lr=y+t}else ur=1<<y|a<<p|l,lr=t}function Bl(t){t.return!==null&&(_i(t,1),Bf(t,1,0))}function Dl(t){for(;t===Yo;)Yo=ha[--ma],ha[ma]=null,Zo=ha[--ma],ha[ma]=null;for(;t===vi;)vi=gn[--yn],gn[yn]=null,lr=gn[--yn],gn[yn]=null,ur=gn[--yn],gn[yn]=null}var sn=null,on=null,ot=!1,En=null;function Df(t,n){var a=$n(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=t,n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)}function Nf(t,n){switch(t.tag){case 5:var a=t.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,sn=t,on=zr(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,sn=t,on=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=vi!==null?{id:ur,overflow:lr}:null,t.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=$n(18,null,null,0),a.stateNode=n,a.return=t,t.child=a,sn=t,on=null,!0):!1;default:return!1}}function Nl(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ll(t){if(ot){var n=on;if(n){var a=n;if(!Nf(t,n)){if(Nl(t))throw Error(i(418));n=zr(a.nextSibling);var l=sn;n&&Nf(t,n)?Df(l,a):(t.flags=t.flags&-4097|2,ot=!1,sn=t)}}else{if(Nl(t))throw Error(i(418));t.flags=t.flags&-4097|2,ot=!1,sn=t}}}function Lf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;sn=t}function Xo(t){if(t!==sn)return!1;if(!ot)return Lf(t),ot=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!zl(t.type,t.memoizedProps)),n&&(n=on)){if(Nl(t))throw Uf(),Error(i(418));for(;n;)Df(t,n),n=zr(n.nextSibling)}if(Lf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(n===0){on=zr(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}t=t.nextSibling}on=null}}else on=sn?zr(t.stateNode.nextSibling):null;return!0}function Uf(){for(var t=on;t;)t=zr(t.nextSibling)}function ga(){on=sn=null,ot=!1}function Ul(t){En===null?En=[t]:En.push(t)}var I1=R.ReactCurrentBatchConfig;function bs(t,n,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var l=a.stateNode}if(!l)throw Error(i(147,t));var p=l,y=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===y?n.ref:(n=function(E){var P=p.refs;E===null?delete P[y]:P[y]=E},n._stringRef=y,n)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function Jo(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function jf(t){var n=t._init;return n(t._payload)}function Ff(t){function n(j,L){if(t){var W=j.deletions;W===null?(j.deletions=[L],j.flags|=16):W.push(L)}}function a(j,L){if(!t)return null;for(;L!==null;)n(j,L),L=L.sibling;return null}function l(j,L){for(j=new Map;L!==null;)L.key!==null?j.set(L.key,L):j.set(L.index,L),L=L.sibling;return j}function p(j,L){return j=jr(j,L),j.index=0,j.sibling=null,j}function y(j,L,W){return j.index=W,t?(W=j.alternate,W!==null?(W=W.index,W<L?(j.flags|=2,L):W):(j.flags|=2,L)):(j.flags|=1048576,L)}function E(j){return t&&j.alternate===null&&(j.flags|=2),j}function P(j,L,W,oe){return L===null||L.tag!==6?(L=Ad(W,j.mode,oe),L.return=j,L):(L=p(L,W),L.return=j,L)}function D(j,L,W,oe){var ke=W.type;return ke===U?ne(j,L,W.props.children,oe,W.key):L!==null&&(L.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===_e&&jf(ke)===L.type)?(oe=p(L,W.props),oe.ref=bs(j,L,W),oe.return=j,oe):(oe=bu(W.type,W.key,W.props,null,j.mode,oe),oe.ref=bs(j,L,W),oe.return=j,oe)}function V(j,L,W,oe){return L===null||L.tag!==4||L.stateNode.containerInfo!==W.containerInfo||L.stateNode.implementation!==W.implementation?(L=Rd(W,j.mode,oe),L.return=j,L):(L=p(L,W.children||[]),L.return=j,L)}function ne(j,L,W,oe,ke){return L===null||L.tag!==7?(L=Ti(W,j.mode,oe,ke),L.return=j,L):(L=p(L,W),L.return=j,L)}function ae(j,L,W){if(typeof L=="string"&&L!==""||typeof L=="number")return L=Ad(""+L,j.mode,W),L.return=j,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case M:return W=bu(L.type,L.key,L.props,null,j.mode,W),W.ref=bs(j,null,L),W.return=j,W;case F:return L=Rd(L,j.mode,W),L.return=j,L;case _e:var oe=L._init;return ae(j,oe(L._payload),W)}if(hr(L)||X(L))return L=Ti(L,j.mode,W,null),L.return=j,L;Jo(j,L)}return null}function te(j,L,W,oe){var ke=L!==null?L.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return ke!==null?null:P(j,L,""+W,oe);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return W.key===ke?D(j,L,W,oe):null;case F:return W.key===ke?V(j,L,W,oe):null;case _e:return ke=W._init,te(j,L,ke(W._payload),oe)}if(hr(W)||X(W))return ke!==null?null:ne(j,L,W,oe,null);Jo(j,W)}return null}function pe(j,L,W,oe,ke){if(typeof oe=="string"&&oe!==""||typeof oe=="number")return j=j.get(W)||null,P(L,j,""+oe,ke);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case M:return j=j.get(oe.key===null?W:oe.key)||null,D(L,j,oe,ke);case F:return j=j.get(oe.key===null?W:oe.key)||null,V(L,j,oe,ke);case _e:var Ie=oe._init;return pe(j,L,W,Ie(oe._payload),ke)}if(hr(oe)||X(oe))return j=j.get(W)||null,ne(L,j,oe,ke,null);Jo(L,oe)}return null}function ye(j,L,W,oe){for(var ke=null,Ie=null,ze=L,Oe=L=0,Et=null;ze!==null&&Oe<W.length;Oe++){ze.index>Oe?(Et=ze,ze=null):Et=ze.sibling;var Ge=te(j,ze,W[Oe],oe);if(Ge===null){ze===null&&(ze=Et);break}t&&ze&&Ge.alternate===null&&n(j,ze),L=y(Ge,L,Oe),Ie===null?ke=Ge:Ie.sibling=Ge,Ie=Ge,ze=Et}if(Oe===W.length)return a(j,ze),ot&&_i(j,Oe),ke;if(ze===null){for(;Oe<W.length;Oe++)ze=ae(j,W[Oe],oe),ze!==null&&(L=y(ze,L,Oe),Ie===null?ke=ze:Ie.sibling=ze,Ie=ze);return ot&&_i(j,Oe),ke}for(ze=l(j,ze);Oe<W.length;Oe++)Et=pe(ze,j,Oe,W[Oe],oe),Et!==null&&(t&&Et.alternate!==null&&ze.delete(Et.key===null?Oe:Et.key),L=y(Et,L,Oe),Ie===null?ke=Et:Ie.sibling=Et,Ie=Et);return t&&ze.forEach(function(Fr){return n(j,Fr)}),ot&&_i(j,Oe),ke}function xe(j,L,W,oe){var ke=X(W);if(typeof ke!="function")throw Error(i(150));if(W=ke.call(W),W==null)throw Error(i(151));for(var Ie=ke=null,ze=L,Oe=L=0,Et=null,Ge=W.next();ze!==null&&!Ge.done;Oe++,Ge=W.next()){ze.index>Oe?(Et=ze,ze=null):Et=ze.sibling;var Fr=te(j,ze,Ge.value,oe);if(Fr===null){ze===null&&(ze=Et);break}t&&ze&&Fr.alternate===null&&n(j,ze),L=y(Fr,L,Oe),Ie===null?ke=Fr:Ie.sibling=Fr,Ie=Fr,ze=Et}if(Ge.done)return a(j,ze),ot&&_i(j,Oe),ke;if(ze===null){for(;!Ge.done;Oe++,Ge=W.next())Ge=ae(j,Ge.value,oe),Ge!==null&&(L=y(Ge,L,Oe),Ie===null?ke=Ge:Ie.sibling=Ge,Ie=Ge);return ot&&_i(j,Oe),ke}for(ze=l(j,ze);!Ge.done;Oe++,Ge=W.next())Ge=pe(ze,j,Oe,Ge.value,oe),Ge!==null&&(t&&Ge.alternate!==null&&ze.delete(Ge.key===null?Oe:Ge.key),L=y(Ge,L,Oe),Ie===null?ke=Ge:Ie.sibling=Ge,Ie=Ge);return t&&ze.forEach(function(o2){return n(j,o2)}),ot&&_i(j,Oe),ke}function mt(j,L,W,oe){if(typeof W=="object"&&W!==null&&W.type===U&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case M:e:{for(var ke=W.key,Ie=L;Ie!==null;){if(Ie.key===ke){if(ke=W.type,ke===U){if(Ie.tag===7){a(j,Ie.sibling),L=p(Ie,W.props.children),L.return=j,j=L;break e}}else if(Ie.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===_e&&jf(ke)===Ie.type){a(j,Ie.sibling),L=p(Ie,W.props),L.ref=bs(j,Ie,W),L.return=j,j=L;break e}a(j,Ie);break}else n(j,Ie);Ie=Ie.sibling}W.type===U?(L=Ti(W.props.children,j.mode,oe,W.key),L.return=j,j=L):(oe=bu(W.type,W.key,W.props,null,j.mode,oe),oe.ref=bs(j,L,W),oe.return=j,j=oe)}return E(j);case F:e:{for(Ie=W.key;L!==null;){if(L.key===Ie)if(L.tag===4&&L.stateNode.containerInfo===W.containerInfo&&L.stateNode.implementation===W.implementation){a(j,L.sibling),L=p(L,W.children||[]),L.return=j,j=L;break e}else{a(j,L);break}else n(j,L);L=L.sibling}L=Rd(W,j.mode,oe),L.return=j,j=L}return E(j);case _e:return Ie=W._init,mt(j,L,Ie(W._payload),oe)}if(hr(W))return ye(j,L,W,oe);if(X(W))return xe(j,L,W,oe);Jo(j,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,L!==null&&L.tag===6?(a(j,L.sibling),L=p(L,W),L.return=j,j=L):(a(j,L),L=Ad(W,j.mode,oe),L.return=j,j=L),E(j)):a(j,L)}return mt}var ya=Ff(!0),Wf=Ff(!1),eu=Ar(null),tu=null,wa=null,jl=null;function Fl(){jl=wa=tu=null}function Wl(t){var n=eu.current;it(eu),t._currentValue=n}function Vl(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function va(t,n){tu=t,jl=wa=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&n&&(Qt=!0),t.firstContext=null)}function wn(t){var n=t._currentValue;if(jl!==t)if(t={context:t,memoizedValue:n,next:null},wa===null){if(tu===null)throw Error(i(308));wa=t,tu.dependencies={lanes:0,firstContext:t}}else wa=wa.next=t;return n}var $i=null;function Hl(t){$i===null?$i=[t]:$i.push(t)}function Vf(t,n,a,l){var p=n.interleaved;return p===null?(a.next=a,Hl(n)):(a.next=p.next,p.next=a),n.interleaved=a,dr(t,l)}function dr(t,n){t.lanes|=n;var a=t.alternate;for(a!==null&&(a.lanes|=n),a=t,t=t.return;t!==null;)t.childLanes|=n,a=t.alternate,a!==null&&(a.childLanes|=n),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Pr=!1;function ql(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cr(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function Mr(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,qe&2){var p=l.pending;return p===null?n.next=n:(n.next=p.next,p.next=n),l.pending=n,dr(t,a)}return p=l.interleaved,p===null?(n.next=n,Hl(l)):(n.next=p.next,p.next=n),l.interleaved=n,dr(t,a)}function nu(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Ga(t,a)}}function qf(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var p=null,y=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};y===null?p=y=E:y=y.next=E,a=a.next}while(a!==null);y===null?p=y=n:y=y.next=n}else p=y=n;a={baseState:l.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}function ru(t,n,a,l){var p=t.updateQueue;Pr=!1;var y=p.firstBaseUpdate,E=p.lastBaseUpdate,P=p.shared.pending;if(P!==null){p.shared.pending=null;var D=P,V=D.next;D.next=null,E===null?y=V:E.next=V,E=D;var ne=t.alternate;ne!==null&&(ne=ne.updateQueue,P=ne.lastBaseUpdate,P!==E&&(P===null?ne.firstBaseUpdate=V:P.next=V,ne.lastBaseUpdate=D))}if(y!==null){var ae=p.baseState;E=0,ne=V=D=null,P=y;do{var te=P.lane,pe=P.eventTime;if((l&te)===te){ne!==null&&(ne=ne.next={eventTime:pe,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var ye=t,xe=P;switch(te=n,pe=a,xe.tag){case 1:if(ye=xe.payload,typeof ye=="function"){ae=ye.call(pe,ae,te);break e}ae=ye;break e;case 3:ye.flags=ye.flags&-65537|128;case 0:if(ye=xe.payload,te=typeof ye=="function"?ye.call(pe,ae,te):ye,te==null)break e;ae=J({},ae,te);break e;case 2:Pr=!0}}P.callback!==null&&P.lane!==0&&(t.flags|=64,te=p.effects,te===null?p.effects=[P]:te.push(P))}else pe={eventTime:pe,lane:te,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ne===null?(V=ne=pe,D=ae):ne=ne.next=pe,E|=te;if(P=P.next,P===null){if(P=p.shared.pending,P===null)break;te=P,P=te.next,te.next=null,p.lastBaseUpdate=te,p.shared.pending=null}}while(!0);if(ne===null&&(D=ae),p.baseState=D,p.firstBaseUpdate=V,p.lastBaseUpdate=ne,n=p.shared.interleaved,n!==null){p=n;do E|=p.lane,p=p.next;while(p!==n)}else y===null&&(p.shared.lanes=0);Si|=E,t.lanes=E,t.memoizedState=ae}}function Gf(t,n,a){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],p=l.callback;if(p!==null){if(l.callback=null,l=a,typeof p!="function")throw Error(i(191,p));p.call(l)}}}var Ss={},qn=Ar(Ss),ks=Ar(Ss),Es=Ar(Ss);function xi(t){if(t===Ss)throw Error(i(174));return t}function Gl(t,n){switch(Je(Es,n),Je(ks,t),Je(qn,Ss),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:Xr(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=Xr(n,t)}it(qn),Je(qn,n)}function _a(){it(qn),it(ks),it(Es)}function Kf(t){xi(Es.current);var n=xi(qn.current),a=Xr(n,t.type);n!==a&&(Je(ks,t),Je(qn,a))}function Kl(t){ks.current===t&&(it(qn),it(ks))}var lt=Ar(0);function iu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ql=[];function Yl(){for(var t=0;t<Ql.length;t++)Ql[t]._workInProgressVersionPrimary=null;Ql.length=0}var au=R.ReactCurrentDispatcher,Zl=R.ReactCurrentBatchConfig,bi=0,dt=null,_t=null,St=null,su=!1,Cs=!1,Ts=0,z1=0;function At(){throw Error(i(321))}function Xl(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Lt(t[a],n[a]))return!1;return!0}function Jl(t,n,a,l,p,y){if(bi=y,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,au.current=t===null||t.memoizedState===null?P1:M1,t=a(l,p),Cs){y=0;do{if(Cs=!1,Ts=0,25<=y)throw Error(i(301));y+=1,St=_t=null,n.updateQueue=null,au.current=B1,t=a(l,p)}while(Cs)}if(au.current=lu,n=_t!==null&&_t.next!==null,bi=0,St=_t=dt=null,su=!1,n)throw Error(i(300));return t}function ed(){var t=Ts!==0;return Ts=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?dt.memoizedState=St=t:St=St.next=t,St}function vn(){if(_t===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var n=St===null?dt.memoizedState:St.next;if(n!==null)St=n,_t=t;else{if(t===null)throw Error(i(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},St===null?dt.memoizedState=St=t:St=St.next=t}return St}function Is(t,n){return typeof n=="function"?n(t):n}function td(t){var n=vn(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var l=_t,p=l.baseQueue,y=a.pending;if(y!==null){if(p!==null){var E=p.next;p.next=y.next,y.next=E}l.baseQueue=p=y,a.pending=null}if(p!==null){y=p.next,l=l.baseState;var P=E=null,D=null,V=y;do{var ne=V.lane;if((bi&ne)===ne)D!==null&&(D=D.next={lane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),l=V.hasEagerState?V.eagerState:t(l,V.action);else{var ae={lane:ne,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null};D===null?(P=D=ae,E=l):D=D.next=ae,dt.lanes|=ne,Si|=ne}V=V.next}while(V!==null&&V!==y);D===null?E=l:D.next=P,Lt(l,n.memoizedState)||(Qt=!0),n.memoizedState=l,n.baseState=E,n.baseQueue=D,a.lastRenderedState=l}if(t=a.interleaved,t!==null){p=t;do y=p.lane,dt.lanes|=y,Si|=y,p=p.next;while(p!==t)}else p===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function nd(t){var n=vn(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var l=a.dispatch,p=a.pending,y=n.memoizedState;if(p!==null){a.pending=null;var E=p=p.next;do y=t(y,E.action),E=E.next;while(E!==p);Lt(y,n.memoizedState)||(Qt=!0),n.memoizedState=y,n.baseQueue===null&&(n.baseState=y),a.lastRenderedState=y}return[y,l]}function Qf(){}function Yf(t,n){var a=dt,l=vn(),p=n(),y=!Lt(l.memoizedState,p);if(y&&(l.memoizedState=p,Qt=!0),l=l.queue,rd(Jf.bind(null,a,l,t),[t]),l.getSnapshot!==n||y||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,zs(9,Xf.bind(null,a,l,p,n),void 0,null),kt===null)throw Error(i(349));bi&30||Zf(a,n,p)}return p}function Zf(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n={lastEffect:null,stores:null},dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Xf(t,n,a,l){n.value=a,n.getSnapshot=l,ep(n)&&tp(t)}function Jf(t,n,a){return a(function(){ep(n)&&tp(t)})}function ep(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Lt(t,a)}catch{return!0}}function tp(t){var n=dr(t,1);n!==null&&zn(n,t,1,-1)}function np(t){var n=Gn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:t},n.queue=t,t=t.dispatch=O1.bind(null,dt,t),[n.memoizedState,t]}function zs(t,n,a,l){return t={tag:t,create:n,destroy:a,deps:l,next:null},n=dt.updateQueue,n===null?(n={lastEffect:null,stores:null},dt.updateQueue=n,n.lastEffect=t.next=t):(a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t)),t}function rp(){return vn().memoizedState}function ou(t,n,a,l){var p=Gn();dt.flags|=t,p.memoizedState=zs(1|n,a,void 0,l===void 0?null:l)}function uu(t,n,a,l){var p=vn();l=l===void 0?null:l;var y=void 0;if(_t!==null){var E=_t.memoizedState;if(y=E.destroy,l!==null&&Xl(l,E.deps)){p.memoizedState=zs(n,a,y,l);return}}dt.flags|=t,p.memoizedState=zs(1|n,a,y,l)}function ip(t,n){return ou(8390656,8,t,n)}function rd(t,n){return uu(2048,8,t,n)}function ap(t,n){return uu(4,2,t,n)}function sp(t,n){return uu(4,4,t,n)}function op(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function up(t,n,a){return a=a!=null?a.concat([t]):null,uu(4,4,op.bind(null,n,t),a)}function id(){}function lp(t,n){var a=vn();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&Xl(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function dp(t,n){var a=vn();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&Xl(n,l[1])?l[0]:(t=t(),a.memoizedState=[t,n],t)}function cp(t,n,a){return bi&21?(Lt(a,n)||(a=yo(),dt.lanes|=a,Si|=a,t.baseState=!0),n):(t.baseState&&(t.baseState=!1,Qt=!0),t.memoizedState=a)}function A1(t,n){var a=Ke;Ke=a!==0&&4>a?a:4,t(!0);var l=Zl.transition;Zl.transition={};try{t(!1),n()}finally{Ke=a,Zl.transition=l}}function fp(){return vn().memoizedState}function R1(t,n,a){var l=Lr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},pp(t))hp(n,a);else if(a=Vf(t,n,a,l),a!==null){var p=jt();zn(a,t,l,p),mp(a,n,l)}}function O1(t,n,a){var l=Lr(t),p={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(pp(t))hp(n,p);else{var y=t.alternate;if(t.lanes===0&&(y===null||y.lanes===0)&&(y=n.lastRenderedReducer,y!==null))try{var E=n.lastRenderedState,P=y(E,a);if(p.hasEagerState=!0,p.eagerState=P,Lt(P,E)){var D=n.interleaved;D===null?(p.next=p,Hl(n)):(p.next=D.next,D.next=p),n.interleaved=p;return}}catch{}finally{}a=Vf(t,n,p,l),a!==null&&(p=jt(),zn(a,t,l,p),mp(a,n,l))}}function pp(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function hp(t,n){Cs=su=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function mp(t,n,a){if(a&4194240){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,Ga(t,a)}}var lu={readContext:wn,useCallback:At,useContext:At,useEffect:At,useImperativeHandle:At,useInsertionEffect:At,useLayoutEffect:At,useMemo:At,useReducer:At,useRef:At,useState:At,useDebugValue:At,useDeferredValue:At,useTransition:At,useMutableSource:At,useSyncExternalStore:At,useId:At,unstable_isNewReconciler:!1},P1={readContext:wn,useCallback:function(t,n){return Gn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:ip,useImperativeHandle:function(t,n,a){return a=a!=null?a.concat([t]):null,ou(4194308,4,op.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ou(4194308,4,t,n)},useInsertionEffect:function(t,n){return ou(4,2,t,n)},useMemo:function(t,n){var a=Gn();return n=n===void 0?null:n,t=t(),a.memoizedState=[t,n],t},useReducer:function(t,n,a){var l=Gn();return n=a!==void 0?a(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=R1.bind(null,dt,t),[l.memoizedState,t]},useRef:function(t){var n=Gn();return t={current:t},n.memoizedState=t},useState:np,useDebugValue:id,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=np(!1),n=t[0];return t=A1.bind(null,t[1]),Gn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,a){var l=dt,p=Gn();if(ot){if(a===void 0)throw Error(i(407));a=a()}else{if(a=n(),kt===null)throw Error(i(349));bi&30||Zf(l,n,a)}p.memoizedState=a;var y={value:a,getSnapshot:n};return p.queue=y,ip(Jf.bind(null,l,y,t),[t]),l.flags|=2048,zs(9,Xf.bind(null,l,y,a,n),void 0,null),a},useId:function(){var t=Gn(),n=kt.identifierPrefix;if(ot){var a=lr,l=ur;a=(l&~(1<<32-ht(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=Ts++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=z1++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},M1={readContext:wn,useCallback:lp,useContext:wn,useEffect:rd,useImperativeHandle:up,useInsertionEffect:ap,useLayoutEffect:sp,useMemo:dp,useReducer:td,useRef:rp,useState:function(){return td(Is)},useDebugValue:id,useDeferredValue:function(t){var n=vn();return cp(n,_t.memoizedState,t)},useTransition:function(){var t=td(Is)[0],n=vn().memoizedState;return[t,n]},useMutableSource:Qf,useSyncExternalStore:Yf,useId:fp,unstable_isNewReconciler:!1},B1={readContext:wn,useCallback:lp,useContext:wn,useEffect:rd,useImperativeHandle:up,useInsertionEffect:ap,useLayoutEffect:sp,useMemo:dp,useReducer:nd,useRef:rp,useState:function(){return nd(Is)},useDebugValue:id,useDeferredValue:function(t){var n=vn();return _t===null?n.memoizedState=t:cp(n,_t.memoizedState,t)},useTransition:function(){var t=nd(Is)[0],n=vn().memoizedState;return[t,n]},useMutableSource:Qf,useSyncExternalStore:Yf,useId:fp,unstable_isNewReconciler:!1};function Cn(t,n){if(t&&t.defaultProps){n=J({},n),t=t.defaultProps;for(var a in t)n[a]===void 0&&(n[a]=t[a]);return n}return n}function ad(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:J({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var du={isMounted:function(t){return(t=t._reactInternals)?Un(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var l=jt(),p=Lr(t),y=cr(l,p);y.payload=n,a!=null&&(y.callback=a),n=Mr(t,y,p),n!==null&&(zn(n,t,p,l),nu(n,t,p))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=jt(),p=Lr(t),y=cr(l,p);y.tag=1,y.payload=n,a!=null&&(y.callback=a),n=Mr(t,y,p),n!==null&&(zn(n,t,p,l),nu(n,t,p))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=jt(),l=Lr(t),p=cr(a,l);p.tag=2,n!=null&&(p.callback=n),n=Mr(t,p,l),n!==null&&(zn(n,t,l,a),nu(n,t,l))}};function gp(t,n,a,l,p,y,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,y,E):n.prototype&&n.prototype.isPureReactComponent?!Vn(a,l)||!Vn(p,y):!0}function yp(t,n,a){var l=!1,p=Rr,y=n.contextType;return typeof y=="object"&&y!==null?y=wn(y):(p=Kt(n)?wi:zt.current,l=n.contextTypes,y=(l=l!=null)?pa(t,p):Rr),n=new n(a,y),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=du,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=p,t.__reactInternalMemoizedMaskedChildContext=y),n}function wp(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&du.enqueueReplaceState(n,n.state,null)}function sd(t,n,a,l){var p=t.stateNode;p.props=a,p.state=t.memoizedState,p.refs={},ql(t);var y=n.contextType;typeof y=="object"&&y!==null?p.context=wn(y):(y=Kt(n)?wi:zt.current,p.context=pa(t,y)),p.state=t.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(ad(t,n,y,a),p.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(n=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),n!==p.state&&du.enqueueReplaceState(p,p.state,null),ru(t,a,p,l),p.state=t.memoizedState),typeof p.componentDidMount=="function"&&(t.flags|=4194308)}function $a(t,n){try{var a="",l=n;do a+=ce(l),l=l.return;while(l);var p=a}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:t,source:n,stack:p,digest:null}}function od(t,n,a){return{value:t,source:null,stack:a??null,digest:n??null}}function ud(t,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var D1=typeof WeakMap=="function"?WeakMap:Map;function vp(t,n,a){a=cr(-1,a),a.tag=3,a.payload={element:null};var l=n.value;return a.callback=function(){yu||(yu=!0,bd=l),ud(t,n)},a}function _p(t,n,a){a=cr(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var p=n.value;a.payload=function(){return l(p)},a.callback=function(){ud(t,n)}}var y=t.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(a.callback=function(){ud(t,n),typeof l!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var E=n.stack;this.componentDidCatch(n.value,{componentStack:E!==null?E:""})}),a}function $p(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new D1;var p=new Set;l.set(n,p)}else p=l.get(n),p===void 0&&(p=new Set,l.set(n,p));p.has(a)||(p.add(a),t=Z1.bind(null,t,n,a),n.then(t,t))}function xp(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function bp(t,n,a,l,p){return t.mode&1?(t.flags|=65536,t.lanes=p,t):(t===n?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=cr(-1,1),n.tag=2,Mr(a,n,1))),a.lanes|=1),t)}var N1=R.ReactCurrentOwner,Qt=!1;function Ut(t,n,a,l){n.child=t===null?Wf(n,null,a,l):ya(n,t.child,a,l)}function Sp(t,n,a,l,p){a=a.render;var y=n.ref;return va(n,p),l=Jl(t,n,a,l,y,p),a=ed(),t!==null&&!Qt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~p,fr(t,n,p)):(ot&&a&&Bl(n),n.flags|=1,Ut(t,n,l,p),n.child)}function kp(t,n,a,l,p){if(t===null){var y=a.type;return typeof y=="function"&&!zd(y)&&y.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=y,Ep(t,n,y,l,p)):(t=bu(a.type,null,l,n,n.mode,p),t.ref=n.ref,t.return=n,n.child=t)}if(y=t.child,!(t.lanes&p)){var E=y.memoizedProps;if(a=a.compare,a=a!==null?a:Vn,a(E,l)&&t.ref===n.ref)return fr(t,n,p)}return n.flags|=1,t=jr(y,l),t.ref=n.ref,t.return=n,n.child=t}function Ep(t,n,a,l,p){if(t!==null){var y=t.memoizedProps;if(Vn(y,l)&&t.ref===n.ref)if(Qt=!1,n.pendingProps=l=y,(t.lanes&p)!==0)t.flags&131072&&(Qt=!0);else return n.lanes=t.lanes,fr(t,n,p)}return ld(t,n,a,l,p)}function Cp(t,n,a){var l=n.pendingProps,p=l.children,y=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(ba,un),un|=a;else{if(!(a&1073741824))return t=y!==null?y.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,Je(ba,un),un|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=y!==null?y.baseLanes:a,Je(ba,un),un|=l}else y!==null?(l=y.baseLanes|a,n.memoizedState=null):l=a,Je(ba,un),un|=l;return Ut(t,n,p,a),n.child}function Tp(t,n){var a=n.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function ld(t,n,a,l,p){var y=Kt(a)?wi:zt.current;return y=pa(n,y),va(n,p),a=Jl(t,n,a,l,y,p),l=ed(),t!==null&&!Qt?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~p,fr(t,n,p)):(ot&&l&&Bl(n),n.flags|=1,Ut(t,n,a,p),n.child)}function Ip(t,n,a,l,p){if(Kt(a)){var y=!0;Ko(n)}else y=!1;if(va(n,p),n.stateNode===null)fu(t,n),yp(n,a,l),sd(n,a,l,p),l=!0;else if(t===null){var E=n.stateNode,P=n.memoizedProps;E.props=P;var D=E.context,V=a.contextType;typeof V=="object"&&V!==null?V=wn(V):(V=Kt(a)?wi:zt.current,V=pa(n,V));var ne=a.getDerivedStateFromProps,ae=typeof ne=="function"||typeof E.getSnapshotBeforeUpdate=="function";ae||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(P!==l||D!==V)&&wp(n,E,l,V),Pr=!1;var te=n.memoizedState;E.state=te,ru(n,l,E,p),D=n.memoizedState,P!==l||te!==D||Gt.current||Pr?(typeof ne=="function"&&(ad(n,a,ne,l),D=n.memoizedState),(P=Pr||gp(n,a,P,l,te,D,V))?(ae||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(n.flags|=4194308)):(typeof E.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=D),E.props=l,E.state=D,E.context=V,l=P):(typeof E.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{E=n.stateNode,Hf(t,n),P=n.memoizedProps,V=n.type===n.elementType?P:Cn(n.type,P),E.props=V,ae=n.pendingProps,te=E.context,D=a.contextType,typeof D=="object"&&D!==null?D=wn(D):(D=Kt(a)?wi:zt.current,D=pa(n,D));var pe=a.getDerivedStateFromProps;(ne=typeof pe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(P!==ae||te!==D)&&wp(n,E,l,D),Pr=!1,te=n.memoizedState,E.state=te,ru(n,l,E,p);var ye=n.memoizedState;P!==ae||te!==ye||Gt.current||Pr?(typeof pe=="function"&&(ad(n,a,pe,l),ye=n.memoizedState),(V=Pr||gp(n,a,V,l,te,ye,D)||!1)?(ne||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,ye,D),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,ye,D)),typeof E.componentDidUpdate=="function"&&(n.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof E.componentDidUpdate!="function"||P===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=ye),E.props=l,E.state=ye,E.context=D,l=V):(typeof E.componentDidUpdate!="function"||P===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||P===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),l=!1)}return dd(t,n,a,l,y,p)}function dd(t,n,a,l,p,y){Tp(t,n);var E=(n.flags&128)!==0;if(!l&&!E)return p&&Pf(n,a,!1),fr(t,n,y);l=n.stateNode,N1.current=n;var P=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&E?(n.child=ya(n,t.child,null,y),n.child=ya(n,null,P,y)):Ut(t,n,P,y),n.memoizedState=l.state,p&&Pf(n,a,!0),n.child}function zp(t){var n=t.stateNode;n.pendingContext?Rf(t,n.pendingContext,n.pendingContext!==n.context):n.context&&Rf(t,n.context,!1),Gl(t,n.containerInfo)}function Ap(t,n,a,l,p){return ga(),Ul(p),n.flags|=256,Ut(t,n,a,l),n.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Rp(t,n,a){var l=n.pendingProps,p=lt.current,y=!1,E=(n.flags&128)!==0,P;if((P=E)||(P=t!==null&&t.memoizedState===null?!1:(p&2)!==0),P?(y=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(p|=1),Je(lt,p&1),t===null)return Ll(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(n.mode&1?t.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(E=l.children,t=l.fallback,y?(l=n.mode,y=n.child,E={mode:"hidden",children:E},!(l&1)&&y!==null?(y.childLanes=0,y.pendingProps=E):y=Su(E,l,0,null),t=Ti(t,l,a,null),y.return=n,t.return=n,y.sibling=t,n.child=y,n.child.memoizedState=fd(a),n.memoizedState=cd,t):pd(n,E));if(p=t.memoizedState,p!==null&&(P=p.dehydrated,P!==null))return L1(t,n,E,l,P,p,a);if(y){y=l.fallback,E=n.mode,p=t.child,P=p.sibling;var D={mode:"hidden",children:l.children};return!(E&1)&&n.child!==p?(l=n.child,l.childLanes=0,l.pendingProps=D,n.deletions=null):(l=jr(p,D),l.subtreeFlags=p.subtreeFlags&14680064),P!==null?y=jr(P,y):(y=Ti(y,E,a,null),y.flags|=2),y.return=n,l.return=n,l.sibling=y,n.child=l,l=y,y=n.child,E=t.child.memoizedState,E=E===null?fd(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},y.memoizedState=E,y.childLanes=t.childLanes&~a,n.memoizedState=cd,l}return y=t.child,t=y.sibling,l=jr(y,{mode:"visible",children:l.children}),!(n.mode&1)&&(l.lanes=a),l.return=n,l.sibling=null,t!==null&&(a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)),n.child=l,n.memoizedState=null,l}function pd(t,n){return n=Su({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function cu(t,n,a,l){return l!==null&&Ul(l),ya(n,t.child,null,a),t=pd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function L1(t,n,a,l,p,y,E){if(a)return n.flags&256?(n.flags&=-257,l=od(Error(i(422))),cu(t,n,E,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(y=l.fallback,p=n.mode,l=Su({mode:"visible",children:l.children},p,0,null),y=Ti(y,p,E,null),y.flags|=2,l.return=n,y.return=n,l.sibling=y,n.child=l,n.mode&1&&ya(n,t.child,null,E),n.child.memoizedState=fd(E),n.memoizedState=cd,y);if(!(n.mode&1))return cu(t,n,E,null);if(p.data==="$!"){if(l=p.nextSibling&&p.nextSibling.dataset,l)var P=l.dgst;return l=P,y=Error(i(419)),l=od(y,l,void 0),cu(t,n,E,l)}if(P=(E&t.childLanes)!==0,Qt||P){if(l=kt,l!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(l.suspendedLanes|E)?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,dr(t,p),zn(l,t,p,-1))}return Id(),l=od(Error(i(421))),cu(t,n,E,l)}return p.data==="$?"?(n.flags|=128,n.child=t.child,n=X1.bind(null,t),p._reactRetry=n,null):(t=y.treeContext,on=zr(p.nextSibling),sn=n,ot=!0,En=null,t!==null&&(gn[yn++]=ur,gn[yn++]=lr,gn[yn++]=vi,ur=t.id,lr=t.overflow,vi=n),n=pd(n,l.children),n.flags|=4096,n)}function Op(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),Vl(t.return,n,a)}function hd(t,n,a,l,p){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:p}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=a,y.tailMode=p)}function Pp(t,n,a){var l=n.pendingProps,p=l.revealOrder,y=l.tail;if(Ut(t,n,l.children,a),l=lt.current,l&2)l=l&1|2,n.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Op(t,a,n);else if(t.tag===19)Op(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Je(lt,l),!(n.mode&1))n.memoizedState=null;else switch(p){case"forwards":for(a=n.child,p=null;a!==null;)t=a.alternate,t!==null&&iu(t)===null&&(p=a),a=a.sibling;a=p,a===null?(p=n.child,n.child=null):(p=a.sibling,a.sibling=null),hd(n,!1,p,a,y);break;case"backwards":for(a=null,p=n.child,n.child=null;p!==null;){if(t=p.alternate,t!==null&&iu(t)===null){n.child=p;break}t=p.sibling,p.sibling=a,a=p,p=t}hd(n,!0,a,null,y);break;case"together":hd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function fu(t,n){!(n.mode&1)&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function fr(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Si|=n.lanes,!(a&n.childLanes))return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,a=jr(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=jr(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function U1(t,n,a){switch(n.tag){case 3:zp(n),ga();break;case 5:Kf(n);break;case 1:Kt(n.type)&&Ko(n);break;case 4:Gl(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,p=n.memoizedProps.value;Je(eu,l._currentValue),l._currentValue=p;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(Je(lt,lt.current&1),n.flags|=128,null):a&n.child.childLanes?Rp(t,n,a):(Je(lt,lt.current&1),t=fr(t,n,a),t!==null?t.sibling:null);Je(lt,lt.current&1);break;case 19:if(l=(a&n.childLanes)!==0,t.flags&128){if(l)return Pp(t,n,a);n.flags|=128}if(p=n.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Je(lt,lt.current),l)break;return null;case 22:case 23:return n.lanes=0,Cp(t,n,a)}return fr(t,n,a)}var Mp,md,Bp,Dp;Mp=function(t,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},md=function(){},Bp=function(t,n,a,l){var p=t.memoizedProps;if(p!==l){t=n.stateNode,xi(qn.current);var y=null;switch(a){case"input":p=bt(t,p),l=bt(t,l),y=[];break;case"select":p=J({},p,{value:void 0}),l=J({},l,{value:void 0}),y=[];break;case"textarea":p=Bi(t,p),l=Bi(t,l),y=[];break;default:typeof p.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Ho)}Sn(a,l);var E;a=null;for(V in p)if(!l.hasOwnProperty(V)&&p.hasOwnProperty(V)&&p[V]!=null)if(V==="style"){var P=p[V];for(E in P)P.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else V!=="dangerouslySetInnerHTML"&&V!=="children"&&V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&V!=="autoFocus"&&(o.hasOwnProperty(V)?y||(y=[]):(y=y||[]).push(V,null));for(V in l){var D=l[V];if(P=p!=null?p[V]:void 0,l.hasOwnProperty(V)&&D!==P&&(D!=null||P!=null))if(V==="style")if(P){for(E in P)!P.hasOwnProperty(E)||D&&D.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in D)D.hasOwnProperty(E)&&P[E]!==D[E]&&(a||(a={}),a[E]=D[E])}else a||(y||(y=[]),y.push(V,a)),a=D;else V==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,P=P?P.__html:void 0,D!=null&&P!==D&&(y=y||[]).push(V,D)):V==="children"?typeof D!="string"&&typeof D!="number"||(y=y||[]).push(V,""+D):V!=="suppressContentEditableWarning"&&V!=="suppressHydrationWarning"&&(o.hasOwnProperty(V)?(D!=null&&V==="onScroll"&&rt("scroll",t),y||P===D||(y=[])):(y=y||[]).push(V,D))}a&&(y=y||[]).push("style",a);var V=y;(n.updateQueue=V)&&(n.flags|=4)}},Dp=function(t,n,a,l){a!==l&&(n.flags|=4)};function As(t,n){if(!ot)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Rt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var p=t.child;p!==null;)a|=p.lanes|p.childLanes,l|=p.subtreeFlags&14680064,l|=p.flags&14680064,p.return=t,p=p.sibling;else for(p=t.child;p!==null;)a|=p.lanes|p.childLanes,l|=p.subtreeFlags,l|=p.flags,p.return=t,p=p.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function j1(t,n,a){var l=n.pendingProps;switch(Dl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(n),null;case 1:return Kt(n.type)&&Go(),Rt(n),null;case 3:return l=n.stateNode,_a(),it(Gt),it(zt),Yl(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Xo(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,En!==null&&(Ed(En),En=null))),md(t,n),Rt(n),null;case 5:Kl(n);var p=xi(Es.current);if(a=n.type,t!==null&&n.stateNode!=null)Bp(t,n,a,l,p),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return Rt(n),null}if(t=xi(qn.current),Xo(n)){l=n.stateNode,a=n.type;var y=n.memoizedProps;switch(l[Hn]=n,l[$s]=y,t=(n.mode&1)!==0,a){case"dialog":rt("cancel",l),rt("close",l);break;case"iframe":case"object":case"embed":rt("load",l);break;case"video":case"audio":for(p=0;p<Ir.length;p++)rt(Ir[p],l);break;case"source":rt("error",l);break;case"img":case"image":case"link":rt("error",l),rt("load",l);break;case"details":rt("toggle",l);break;case"input":en(l,y),rt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!y.multiple},rt("invalid",l);break;case"textarea":Oa(l,y),rt("invalid",l)}Sn(a,y),p=null;for(var E in y)if(y.hasOwnProperty(E)){var P=y[E];E==="children"?typeof P=="string"?l.textContent!==P&&(y.suppressHydrationWarning!==!0&&Vo(l.textContent,P,t),p=["children",P]):typeof P=="number"&&l.textContent!==""+P&&(y.suppressHydrationWarning!==!0&&Vo(l.textContent,P,t),p=["children",""+P]):o.hasOwnProperty(E)&&P!=null&&E==="onScroll"&&rt("scroll",l)}switch(a){case"input":Bt(l),Pi(l,y,!0);break;case"textarea":Bt(l),no(l);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(l.onclick=Ho)}l=p,n.updateQueue=l,l!==null&&(n.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ro(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[Hn]=n,t[$s]=l,Mp(t,n,!1,!1),n.stateNode=t;e:{switch(E=Li(a,l),a){case"dialog":rt("cancel",t),rt("close",t),p=l;break;case"iframe":case"object":case"embed":rt("load",t),p=l;break;case"video":case"audio":for(p=0;p<Ir.length;p++)rt(Ir[p],t);p=l;break;case"source":rt("error",t),p=l;break;case"img":case"image":case"link":rt("error",t),rt("load",t),p=l;break;case"details":rt("toggle",t),p=l;break;case"input":en(t,l),p=bt(t,l),rt("invalid",t);break;case"option":p=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},p=J({},l,{value:void 0}),rt("invalid",t);break;case"textarea":Oa(t,l),p=Bi(t,l),rt("invalid",t);break;default:p=l}Sn(a,p),P=p;for(y in P)if(P.hasOwnProperty(y)){var D=P[y];y==="style"?Ni(t,D):y==="dangerouslySetInnerHTML"?(D=D?D.__html:void 0,D!=null&&Pa(t,D)):y==="children"?typeof D=="string"?(a!=="textarea"||D!=="")&&tn(t,D):typeof D=="number"&&tn(t,""+D):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(o.hasOwnProperty(y)?D!=null&&y==="onScroll"&&rt("scroll",t):D!=null&&O(t,y,D,E))}switch(a){case"input":Bt(t),Pi(t,l,!1);break;case"textarea":Bt(t),no(t);break;case"option":l.value!=null&&t.setAttribute("value",""+We(l.value));break;case"select":t.multiple=!!l.multiple,y=l.value,y!=null?Xn(t,!!l.multiple,y,!1):l.defaultValue!=null&&Xn(t,!!l.multiple,l.defaultValue,!0);break;default:typeof p.onClick=="function"&&(t.onclick=Ho)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return Rt(n),null;case 6:if(t&&n.stateNode!=null)Dp(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(a=xi(Es.current),xi(qn.current),Xo(n)){if(l=n.stateNode,a=n.memoizedProps,l[Hn]=n,(y=l.nodeValue!==a)&&(t=sn,t!==null))switch(t.tag){case 3:Vo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vo(l.nodeValue,a,(t.mode&1)!==0)}y&&(n.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[Hn]=n,n.stateNode=l}return Rt(n),null;case 13:if(it(lt),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&on!==null&&n.mode&1&&!(n.flags&128))Uf(),ga(),n.flags|=98560,y=!1;else if(y=Xo(n),l!==null&&l.dehydrated!==null){if(t===null){if(!y)throw Error(i(318));if(y=n.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(i(317));y[Hn]=n}else ga(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Rt(n),y=!1}else En!==null&&(Ed(En),En=null),y=!0;if(!y)return n.flags&65536?n:null}return n.flags&128?(n.lanes=a,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,n.mode&1&&(t===null||lt.current&1?$t===0&&($t=3):Id())),n.updateQueue!==null&&(n.flags|=4),Rt(n),null);case 4:return _a(),md(t,n),t===null&&vs(n.stateNode.containerInfo),Rt(n),null;case 10:return Wl(n.type._context),Rt(n),null;case 17:return Kt(n.type)&&Go(),Rt(n),null;case 19:if(it(lt),y=n.memoizedState,y===null)return Rt(n),null;if(l=(n.flags&128)!==0,E=y.rendering,E===null)if(l)As(y,!1);else{if($t!==0||t!==null&&t.flags&128)for(t=n.child;t!==null;){if(E=iu(t),E!==null){for(n.flags|=128,As(y,!1),l=E.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=a,a=n.child;a!==null;)y=a,t=l,y.flags&=14680066,E=y.alternate,E===null?(y.childLanes=0,y.lanes=t,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=E.childLanes,y.lanes=E.lanes,y.child=E.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=E.memoizedProps,y.memoizedState=E.memoizedState,y.updateQueue=E.updateQueue,y.type=E.type,t=E.dependencies,y.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Je(lt,lt.current&1|2),n.child}t=t.sibling}y.tail!==null&&ut()>Sa&&(n.flags|=128,l=!0,As(y,!1),n.lanes=4194304)}else{if(!l)if(t=iu(E),t!==null){if(n.flags|=128,l=!0,a=t.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),As(y,!0),y.tail===null&&y.tailMode==="hidden"&&!E.alternate&&!ot)return Rt(n),null}else 2*ut()-y.renderingStartTime>Sa&&a!==1073741824&&(n.flags|=128,l=!0,As(y,!1),n.lanes=4194304);y.isBackwards?(E.sibling=n.child,n.child=E):(a=y.last,a!==null?a.sibling=E:n.child=E,y.last=E)}return y.tail!==null?(n=y.tail,y.rendering=n,y.tail=n.sibling,y.renderingStartTime=ut(),n.sibling=null,a=lt.current,Je(lt,l?a&1|2:a&1),n):(Rt(n),null);case 22:case 23:return Td(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&n.mode&1?un&1073741824&&(Rt(n),n.subtreeFlags&6&&(n.flags|=8192)):Rt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function F1(t,n){switch(Dl(n),n.tag){case 1:return Kt(n.type)&&Go(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return _a(),it(Gt),it(zt),Yl(),t=n.flags,t&65536&&!(t&128)?(n.flags=t&-65537|128,n):null;case 5:return Kl(n),null;case 13:if(it(lt),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));ga()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return it(lt),null;case 4:return _a(),null;case 10:return Wl(n.type._context),null;case 22:case 23:return Td(),null;case 24:return null;default:return null}}var pu=!1,Ot=!1,W1=typeof WeakSet=="function"?WeakSet:Set,me=null;function xa(t,n){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){ft(t,n,l)}else a.current=null}function gd(t,n,a){try{a()}catch(l){ft(t,n,l)}}var Np=!1;function V1(t,n){if(Tl=Sr,t=sa(),gi(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var p=l.anchorOffset,y=l.focusNode;l=l.focusOffset;try{a.nodeType,y.nodeType}catch{a=null;break e}var E=0,P=-1,D=-1,V=0,ne=0,ae=t,te=null;t:for(;;){for(var pe;ae!==a||p!==0&&ae.nodeType!==3||(P=E+p),ae!==y||l!==0&&ae.nodeType!==3||(D=E+l),ae.nodeType===3&&(E+=ae.nodeValue.length),(pe=ae.firstChild)!==null;)te=ae,ae=pe;for(;;){if(ae===t)break t;if(te===a&&++V===p&&(P=E),te===y&&++ne===l&&(D=E),(pe=ae.nextSibling)!==null)break;ae=te,te=ae.parentNode}ae=pe}a=P===-1||D===-1?null:{start:P,end:D}}else a=null}a=a||{start:0,end:0}}else a=null;for(Il={focusedElem:t,selectionRange:a},Sr=!1,me=n;me!==null;)if(n=me,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,me=t;else for(;me!==null;){n=me;try{var ye=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ye!==null){var xe=ye.memoizedProps,mt=ye.memoizedState,j=n.stateNode,L=j.getSnapshotBeforeUpdate(n.elementType===n.type?xe:Cn(n.type,xe),mt);j.__reactInternalSnapshotBeforeUpdate=L}break;case 3:var W=n.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(oe){ft(n,n.return,oe)}if(t=n.sibling,t!==null){t.return=n.return,me=t;break}me=n.return}return ye=Np,Np=!1,ye}function Rs(t,n,a){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var p=l=l.next;do{if((p.tag&t)===t){var y=p.destroy;p.destroy=void 0,y!==void 0&&gd(n,a,y)}p=p.next}while(p!==l)}}function hu(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==n)}}function yd(t){var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof n=="function"?n(t):n.current=t}}function Lp(t){var n=t.alternate;n!==null&&(t.alternate=null,Lp(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[Hn],delete n[$s],delete n[Ol],delete n[E1],delete n[C1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Up(t){return t.tag===5||t.tag===3||t.tag===4}function jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Up(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function wd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ho));else if(l!==4&&(t=t.child,t!==null))for(wd(t,n,a),t=t.sibling;t!==null;)wd(t,n,a),t=t.sibling}function vd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(vd(t,n,a),t=t.sibling;t!==null;)vd(t,n,a),t=t.sibling}var Ct=null,Tn=!1;function Br(t,n,a){for(a=a.child;a!==null;)Fp(t,n,a),a=a.sibling}function Fp(t,n,a){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(nn,a)}catch{}switch(a.tag){case 5:Ot||xa(a,n);case 6:var l=Ct,p=Tn;Ct=null,Br(t,n,a),Ct=l,Tn=p,Ct!==null&&(Tn?(t=Ct,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Ct.removeChild(a.stateNode));break;case 18:Ct!==null&&(Tn?(t=Ct,a=a.stateNode,t.nodeType===8?Rl(t.parentNode,a):t.nodeType===1&&Rl(t,a),xr(t)):Rl(Ct,a.stateNode));break;case 4:l=Ct,p=Tn,Ct=a.stateNode.containerInfo,Tn=!0,Br(t,n,a),Ct=l,Tn=p;break;case 0:case 11:case 14:case 15:if(!Ot&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){p=l=l.next;do{var y=p,E=y.destroy;y=y.tag,E!==void 0&&(y&2||y&4)&&gd(a,n,E),p=p.next}while(p!==l)}Br(t,n,a);break;case 1:if(!Ot&&(xa(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(P){ft(a,n,P)}Br(t,n,a);break;case 21:Br(t,n,a);break;case 22:a.mode&1?(Ot=(l=Ot)||a.memoizedState!==null,Br(t,n,a),Ot=l):Br(t,n,a);break;default:Br(t,n,a)}}function Wp(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new W1),n.forEach(function(l){var p=J1.bind(null,t,l);a.has(l)||(a.add(l),l.then(p,p))})}}function In(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var p=a[l];try{var y=t,E=n,P=E;e:for(;P!==null;){switch(P.tag){case 5:Ct=P.stateNode,Tn=!1;break e;case 3:Ct=P.stateNode.containerInfo,Tn=!0;break e;case 4:Ct=P.stateNode.containerInfo,Tn=!0;break e}P=P.return}if(Ct===null)throw Error(i(160));Fp(y,E,p),Ct=null,Tn=!1;var D=p.alternate;D!==null&&(D.return=null),p.return=null}catch(V){ft(p,n,V)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Vp(n,t),n=n.sibling}function Vp(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(n,t),Kn(t),l&4){try{Rs(3,t,t.return),hu(3,t)}catch(xe){ft(t,t.return,xe)}try{Rs(5,t,t.return)}catch(xe){ft(t,t.return,xe)}}break;case 1:In(n,t),Kn(t),l&512&&a!==null&&xa(a,a.return);break;case 5:if(In(n,t),Kn(t),l&512&&a!==null&&xa(a,a.return),t.flags&32){var p=t.stateNode;try{tn(p,"")}catch(xe){ft(t,t.return,xe)}}if(l&4&&(p=t.stateNode,p!=null)){var y=t.memoizedProps,E=a!==null?a.memoizedProps:y,P=t.type,D=t.updateQueue;if(t.updateQueue=null,D!==null)try{P==="input"&&y.type==="radio"&&y.name!=null&&Zn(p,y),Li(P,E);var V=Li(P,y);for(E=0;E<D.length;E+=2){var ne=D[E],ae=D[E+1];ne==="style"?Ni(p,ae):ne==="dangerouslySetInnerHTML"?Pa(p,ae):ne==="children"?tn(p,ae):O(p,ne,ae,V)}switch(P){case"input":cn(p,y);break;case"textarea":Di(p,y);break;case"select":var te=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var pe=y.value;pe!=null?Xn(p,!!y.multiple,pe,!1):te!==!!y.multiple&&(y.defaultValue!=null?Xn(p,!!y.multiple,y.defaultValue,!0):Xn(p,!!y.multiple,y.multiple?[]:"",!1))}p[$s]=y}catch(xe){ft(t,t.return,xe)}}break;case 6:if(In(n,t),Kn(t),l&4){if(t.stateNode===null)throw Error(i(162));p=t.stateNode,y=t.memoizedProps;try{p.nodeValue=y}catch(xe){ft(t,t.return,xe)}}break;case 3:if(In(n,t),Kn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{xr(n.containerInfo)}catch(xe){ft(t,t.return,xe)}break;case 4:In(n,t),Kn(t);break;case 13:In(n,t),Kn(t),p=t.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(xd=ut())),l&4&&Wp(t);break;case 22:if(ne=a!==null&&a.memoizedState!==null,t.mode&1?(Ot=(V=Ot)||ne,In(n,t),Ot=V):In(n,t),Kn(t),l&8192){if(V=t.memoizedState!==null,(t.stateNode.isHidden=V)&&!ne&&t.mode&1)for(me=t,ne=t.child;ne!==null;){for(ae=me=ne;me!==null;){switch(te=me,pe=te.child,te.tag){case 0:case 11:case 14:case 15:Rs(4,te,te.return);break;case 1:xa(te,te.return);var ye=te.stateNode;if(typeof ye.componentWillUnmount=="function"){l=te,a=te.return;try{n=l,ye.props=n.memoizedProps,ye.state=n.memoizedState,ye.componentWillUnmount()}catch(xe){ft(l,a,xe)}}break;case 5:xa(te,te.return);break;case 22:if(te.memoizedState!==null){Gp(ae);continue}}pe!==null?(pe.return=te,me=pe):Gp(ae)}ne=ne.sibling}e:for(ne=null,ae=t;;){if(ae.tag===5){if(ne===null){ne=ae;try{p=ae.stateNode,V?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(P=ae.stateNode,D=ae.memoizedProps.style,E=D!=null&&D.hasOwnProperty("display")?D.display:null,P.style.display=Ba("display",E))}catch(xe){ft(t,t.return,xe)}}}else if(ae.tag===6){if(ne===null)try{ae.stateNode.nodeValue=V?"":ae.memoizedProps}catch(xe){ft(t,t.return,xe)}}else if((ae.tag!==22&&ae.tag!==23||ae.memoizedState===null||ae===t)&&ae.child!==null){ae.child.return=ae,ae=ae.child;continue}if(ae===t)break e;for(;ae.sibling===null;){if(ae.return===null||ae.return===t)break e;ne===ae&&(ne=null),ae=ae.return}ne===ae&&(ne=null),ae.sibling.return=ae.return,ae=ae.sibling}}break;case 19:In(n,t),Kn(t),l&4&&Wp(t);break;case 21:break;default:In(n,t),Kn(t)}}function Kn(t){var n=t.flags;if(n&2){try{e:{for(var a=t.return;a!==null;){if(Up(a)){var l=a;break e}a=a.return}throw Error(i(160))}switch(l.tag){case 5:var p=l.stateNode;l.flags&32&&(tn(p,""),l.flags&=-33);var y=jp(t);vd(t,y,p);break;case 3:case 4:var E=l.stateNode.containerInfo,P=jp(t);wd(t,P,E);break;default:throw Error(i(161))}}catch(D){ft(t,t.return,D)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function H1(t,n,a){me=t,Hp(t)}function Hp(t,n,a){for(var l=(t.mode&1)!==0;me!==null;){var p=me,y=p.child;if(p.tag===22&&l){var E=p.memoizedState!==null||pu;if(!E){var P=p.alternate,D=P!==null&&P.memoizedState!==null||Ot;P=pu;var V=Ot;if(pu=E,(Ot=D)&&!V)for(me=p;me!==null;)E=me,D=E.child,E.tag===22&&E.memoizedState!==null?Kp(p):D!==null?(D.return=E,me=D):Kp(p);for(;y!==null;)me=y,Hp(y),y=y.sibling;me=p,pu=P,Ot=V}qp(t)}else p.subtreeFlags&8772&&y!==null?(y.return=p,me=y):qp(t)}}function qp(t){for(;me!==null;){var n=me;if(n.flags&8772){var a=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:Ot||hu(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Ot)if(a===null)l.componentDidMount();else{var p=n.elementType===n.type?a.memoizedProps:Cn(n.type,a.memoizedProps);l.componentDidUpdate(p,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var y=n.updateQueue;y!==null&&Gf(n,y,l);break;case 3:var E=n.updateQueue;if(E!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}Gf(n,E,a)}break;case 5:var P=n.stateNode;if(a===null&&n.flags&4){a=P;var D=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":D.autoFocus&&a.focus();break;case"img":D.src&&(a.src=D.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var V=n.alternate;if(V!==null){var ne=V.memoizedState;if(ne!==null){var ae=ne.dehydrated;ae!==null&&xr(ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Ot||n.flags&512&&yd(n)}catch(te){ft(n,n.return,te)}}if(n===t){me=null;break}if(a=n.sibling,a!==null){a.return=n.return,me=a;break}me=n.return}}function Gp(t){for(;me!==null;){var n=me;if(n===t){me=null;break}var a=n.sibling;if(a!==null){a.return=n.return,me=a;break}me=n.return}}function Kp(t){for(;me!==null;){var n=me;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{hu(4,n)}catch(D){ft(n,a,D)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var p=n.return;try{l.componentDidMount()}catch(D){ft(n,p,D)}}var y=n.return;try{yd(n)}catch(D){ft(n,y,D)}break;case 5:var E=n.return;try{yd(n)}catch(D){ft(n,E,D)}}}catch(D){ft(n,n.return,D)}if(n===t){me=null;break}var P=n.sibling;if(P!==null){P.return=n.return,me=P;break}me=n.return}}var q1=Math.ceil,mu=R.ReactCurrentDispatcher,_d=R.ReactCurrentOwner,_n=R.ReactCurrentBatchConfig,qe=0,kt=null,yt=null,Tt=0,un=0,ba=Ar(0),$t=0,Os=null,Si=0,gu=0,$d=0,Ps=null,Yt=null,xd=0,Sa=1/0,pr=null,yu=!1,bd=null,Dr=null,wu=!1,Nr=null,vu=0,Ms=0,Sd=null,_u=-1,$u=0;function jt(){return qe&6?ut():_u!==-1?_u:_u=ut()}function Lr(t){return t.mode&1?qe&2&&Tt!==0?Tt&-Tt:I1.transition!==null?($u===0&&($u=yo()),$u):(t=Ke,t!==0||(t=window.event,t=t===void 0?16:So(t.type)),t):1}function zn(t,n,a,l){if(50<Ms)throw Ms=0,Sd=null,Error(i(185));ri(t,a,l),(!(qe&2)||t!==kt)&&(t===kt&&(!(qe&2)&&(gu|=a),$t===4&&Ur(t,Tt)),Zt(t,l),a===1&&qe===0&&!(n.mode&1)&&(Sa=ut()+500,Qo&&Or()))}function Zt(t,n){var a=t.callbackNode;ul(t,n);var l=qi(t,t===kt?Tt:0);if(l===0)a!==null&&Wa(a),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(a!=null&&Wa(a),n===1)t.tag===0?T1(Yp.bind(null,t)):Mf(Yp.bind(null,t)),S1(function(){!(qe&6)&&Or()}),a=null;else{switch(wo(l)){case 1:a=ti;break;case 4:a=Vi;break;case 16:a=Vt;break;case 536870912:a=go;break;default:a=Vt}a=ih(a,Qp.bind(null,t))}t.callbackPriority=n,t.callbackNode=a}}function Qp(t,n){if(_u=-1,$u=0,qe&6)throw Error(i(327));var a=t.callbackNode;if(ka()&&t.callbackNode!==a)return null;var l=qi(t,t===kt?Tt:0);if(l===0)return null;if(l&30||l&t.expiredLanes||n)n=xu(t,l);else{n=l;var p=qe;qe|=2;var y=Xp();(kt!==t||Tt!==n)&&(pr=null,Sa=ut()+500,Ei(t,n));do try{Q1();break}catch(P){Zp(t,P)}while(!0);Fl(),mu.current=y,qe=p,yt!==null?n=0:(kt=null,Tt=0,n=$t)}if(n!==0){if(n===2&&(p=qa(t),p!==0&&(l=p,n=kd(t,p))),n===1)throw a=Os,Ei(t,0),Ur(t,l),Zt(t,ut()),a;if(n===6)Ur(t,l);else{if(p=t.current.alternate,!(l&30)&&!G1(p)&&(n=xu(t,l),n===2&&(y=qa(t),y!==0&&(l=y,n=kd(t,y))),n===1))throw a=Os,Ei(t,0),Ur(t,l),Zt(t,ut()),a;switch(t.finishedWork=p,t.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:Ci(t,Yt,pr);break;case 3:if(Ur(t,l),(l&130023424)===l&&(n=xd+500-ut(),10<n)){if(qi(t,0)!==0)break;if(p=t.suspendedLanes,(p&l)!==l){jt(),t.pingedLanes|=t.suspendedLanes&p;break}t.timeoutHandle=Al(Ci.bind(null,t,Yt,pr),n);break}Ci(t,Yt,pr);break;case 4:if(Ur(t,l),(l&4194240)===l)break;for(n=t.eventTimes,p=-1;0<l;){var E=31-ht(l);y=1<<E,E=n[E],E>p&&(p=E),l&=~y}if(l=p,l=ut()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*q1(l/1960))-l,10<l){t.timeoutHandle=Al(Ci.bind(null,t,Yt,pr),l);break}Ci(t,Yt,pr);break;case 5:Ci(t,Yt,pr);break;default:throw Error(i(329))}}}return Zt(t,ut()),t.callbackNode===a?Qp.bind(null,t):null}function kd(t,n){var a=Ps;return t.current.memoizedState.isDehydrated&&(Ei(t,n).flags|=256),t=xu(t,n),t!==2&&(n=Yt,Yt=a,n!==null&&Ed(n)),t}function Ed(t){Yt===null?Yt=t:Yt.push.apply(Yt,t)}function G1(t){for(var n=t;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var p=a[l],y=p.getSnapshot;p=p.value;try{if(!Lt(y(),p))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ur(t,n){for(n&=~$d,n&=~gu,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var a=31-ht(n),l=1<<a;t[a]=-1,n&=~l}}function Yp(t){if(qe&6)throw Error(i(327));ka();var n=qi(t,0);if(!(n&1))return Zt(t,ut()),null;var a=xu(t,n);if(t.tag!==0&&a===2){var l=qa(t);l!==0&&(n=l,a=kd(t,l))}if(a===1)throw a=Os,Ei(t,0),Ur(t,n),Zt(t,ut()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Ci(t,Yt,pr),Zt(t,ut()),null}function Cd(t,n){var a=qe;qe|=1;try{return t(n)}finally{qe=a,qe===0&&(Sa=ut()+500,Qo&&Or())}}function ki(t){Nr!==null&&Nr.tag===0&&!(qe&6)&&ka();var n=qe;qe|=1;var a=_n.transition,l=Ke;try{if(_n.transition=null,Ke=1,t)return t()}finally{Ke=l,_n.transition=a,qe=n,!(qe&6)&&Or()}}function Td(){un=ba.current,it(ba)}function Ei(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,b1(a)),yt!==null)for(a=yt.return;a!==null;){var l=a;switch(Dl(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Go();break;case 3:_a(),it(Gt),it(zt),Yl();break;case 5:Kl(l);break;case 4:_a();break;case 13:it(lt);break;case 19:it(lt);break;case 10:Wl(l.type._context);break;case 22:case 23:Td()}a=a.return}if(kt=t,yt=t=jr(t.current,null),Tt=un=n,$t=0,Os=null,$d=gu=Si=0,Yt=Ps=null,$i!==null){for(n=0;n<$i.length;n++)if(a=$i[n],l=a.interleaved,l!==null){a.interleaved=null;var p=l.next,y=a.pending;if(y!==null){var E=y.next;y.next=p,l.next=E}a.pending=l}$i=null}return t}function Zp(t,n){do{var a=yt;try{if(Fl(),au.current=lu,su){for(var l=dt.memoizedState;l!==null;){var p=l.queue;p!==null&&(p.pending=null),l=l.next}su=!1}if(bi=0,St=_t=dt=null,Cs=!1,Ts=0,_d.current=null,a===null||a.return===null){$t=1,Os=n,yt=null;break}e:{var y=t,E=a.return,P=a,D=n;if(n=Tt,P.flags|=32768,D!==null&&typeof D=="object"&&typeof D.then=="function"){var V=D,ne=P,ae=ne.tag;if(!(ne.mode&1)&&(ae===0||ae===11||ae===15)){var te=ne.alternate;te?(ne.updateQueue=te.updateQueue,ne.memoizedState=te.memoizedState,ne.lanes=te.lanes):(ne.updateQueue=null,ne.memoizedState=null)}var pe=xp(E);if(pe!==null){pe.flags&=-257,bp(pe,E,P,y,n),pe.mode&1&&$p(y,V,n),n=pe,D=V;var ye=n.updateQueue;if(ye===null){var xe=new Set;xe.add(D),n.updateQueue=xe}else ye.add(D);break e}else{if(!(n&1)){$p(y,V,n),Id();break e}D=Error(i(426))}}else if(ot&&P.mode&1){var mt=xp(E);if(mt!==null){!(mt.flags&65536)&&(mt.flags|=256),bp(mt,E,P,y,n),Ul($a(D,P));break e}}y=D=$a(D,P),$t!==4&&($t=2),Ps===null?Ps=[y]:Ps.push(y),y=E;do{switch(y.tag){case 3:y.flags|=65536,n&=-n,y.lanes|=n;var j=vp(y,D,n);qf(y,j);break e;case 1:P=D;var L=y.type,W=y.stateNode;if(!(y.flags&128)&&(typeof L.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(Dr===null||!Dr.has(W)))){y.flags|=65536,n&=-n,y.lanes|=n;var oe=_p(y,P,n);qf(y,oe);break e}}y=y.return}while(y!==null)}eh(a)}catch(ke){n=ke,yt===a&&a!==null&&(yt=a=a.return);continue}break}while(!0)}function Xp(){var t=mu.current;return mu.current=lu,t===null?lu:t}function Id(){($t===0||$t===3||$t===2)&&($t=4),kt===null||!(Si&268435455)&&!(gu&268435455)||Ur(kt,Tt)}function xu(t,n){var a=qe;qe|=2;var l=Xp();(kt!==t||Tt!==n)&&(pr=null,Ei(t,n));do try{K1();break}catch(p){Zp(t,p)}while(!0);if(Fl(),qe=a,mu.current=l,yt!==null)throw Error(i(261));return kt=null,Tt=0,$t}function K1(){for(;yt!==null;)Jp(yt)}function Q1(){for(;yt!==null&&!ho();)Jp(yt)}function Jp(t){var n=rh(t.alternate,t,un);t.memoizedProps=t.pendingProps,n===null?eh(t):yt=n,_d.current=null}function eh(t){var n=t;do{var a=n.alternate;if(t=n.return,n.flags&32768){if(a=F1(a,n),a!==null){a.flags&=32767,yt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{$t=6,yt=null;return}}else if(a=j1(a,n,un),a!==null){yt=a;return}if(n=n.sibling,n!==null){yt=n;return}yt=n=t}while(n!==null);$t===0&&($t=5)}function Ci(t,n,a){var l=Ke,p=_n.transition;try{_n.transition=null,Ke=1,Y1(t,n,a,l)}finally{_n.transition=p,Ke=l}return null}function Y1(t,n,a,l){do ka();while(Nr!==null);if(qe&6)throw Error(i(327));a=t.finishedWork;var p=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var y=a.lanes|a.childLanes;if(ll(t,y),t===kt&&(yt=kt=null,Tt=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||wu||(wu=!0,ih(Vt,function(){return ka(),null})),y=(a.flags&15990)!==0,a.subtreeFlags&15990||y){y=_n.transition,_n.transition=null;var E=Ke;Ke=1;var P=qe;qe|=4,_d.current=null,V1(t,a),Vp(a,t),Uo(Il),Sr=!!Tl,Il=Tl=null,t.current=a,H1(a),jn(),qe=P,Ke=E,_n.transition=y}else t.current=a;if(wu&&(wu=!1,Nr=t,vu=p),y=t.pendingLanes,y===0&&(Dr=null),Va(a.stateNode),Zt(t,ut()),n!==null)for(l=t.onRecoverableError,a=0;a<n.length;a++)p=n[a],l(p.value,{componentStack:p.stack,digest:p.digest});if(yu)throw yu=!1,t=bd,bd=null,t;return vu&1&&t.tag!==0&&ka(),y=t.pendingLanes,y&1?t===Sd?Ms++:(Ms=0,Sd=t):Ms=0,Or(),null}function ka(){if(Nr!==null){var t=wo(vu),n=_n.transition,a=Ke;try{if(_n.transition=null,Ke=16>t?16:t,Nr===null)var l=!1;else{if(t=Nr,Nr=null,vu=0,qe&6)throw Error(i(331));var p=qe;for(qe|=4,me=t.current;me!==null;){var y=me,E=y.child;if(me.flags&16){var P=y.deletions;if(P!==null){for(var D=0;D<P.length;D++){var V=P[D];for(me=V;me!==null;){var ne=me;switch(ne.tag){case 0:case 11:case 15:Rs(8,ne,y)}var ae=ne.child;if(ae!==null)ae.return=ne,me=ae;else for(;me!==null;){ne=me;var te=ne.sibling,pe=ne.return;if(Lp(ne),ne===V){me=null;break}if(te!==null){te.return=pe,me=te;break}me=pe}}}var ye=y.alternate;if(ye!==null){var xe=ye.child;if(xe!==null){ye.child=null;do{var mt=xe.sibling;xe.sibling=null,xe=mt}while(xe!==null)}}me=y}}if(y.subtreeFlags&2064&&E!==null)E.return=y,me=E;else e:for(;me!==null;){if(y=me,y.flags&2048)switch(y.tag){case 0:case 11:case 15:Rs(9,y,y.return)}var j=y.sibling;if(j!==null){j.return=y.return,me=j;break e}me=y.return}}var L=t.current;for(me=L;me!==null;){E=me;var W=E.child;if(E.subtreeFlags&2064&&W!==null)W.return=E,me=W;else e:for(E=L;me!==null;){if(P=me,P.flags&2048)try{switch(P.tag){case 0:case 11:case 15:hu(9,P)}}catch(ke){ft(P,P.return,ke)}if(P===E){me=null;break e}var oe=P.sibling;if(oe!==null){oe.return=P.return,me=oe;break e}me=P.return}}if(qe=p,Or(),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(nn,t)}catch{}l=!0}return l}finally{Ke=a,_n.transition=n}}return!1}function th(t,n,a){n=$a(a,n),n=vp(t,n,1),t=Mr(t,n,1),n=jt(),t!==null&&(ri(t,1,n),Zt(t,n))}function ft(t,n,a){if(t.tag===3)th(t,t,a);else for(;n!==null;){if(n.tag===3){th(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dr===null||!Dr.has(l))){t=$a(a,t),t=_p(n,t,1),n=Mr(n,t,1),t=jt(),n!==null&&(ri(n,1,t),Zt(n,t));break}}n=n.return}}function Z1(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),n=jt(),t.pingedLanes|=t.suspendedLanes&a,kt===t&&(Tt&a)===a&&($t===4||$t===3&&(Tt&130023424)===Tt&&500>ut()-xd?Ei(t,0):$d|=a),Zt(t,n)}function nh(t,n){n===0&&(t.mode&1?(n=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):n=1);var a=jt();t=dr(t,n),t!==null&&(ri(t,n,a),Zt(t,a))}function X1(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),nh(t,a)}function J1(t,n){var a=0;switch(t.tag){case 13:var l=t.stateNode,p=t.memoizedState;p!==null&&(a=p.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),nh(t,a)}var rh;rh=function(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps||Gt.current)Qt=!0;else{if(!(t.lanes&a)&&!(n.flags&128))return Qt=!1,U1(t,n,a);Qt=!!(t.flags&131072)}else Qt=!1,ot&&n.flags&1048576&&Bf(n,Zo,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;fu(t,n),t=n.pendingProps;var p=pa(n,zt.current);va(n,a),p=Jl(null,n,l,t,p,a);var y=ed();return n.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Kt(l)?(y=!0,Ko(n)):y=!1,n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ql(n),p.updater=du,n.stateNode=p,p._reactInternals=n,sd(n,l,t,a),n=dd(null,n,l,!0,y,a)):(n.tag=0,ot&&y&&Bl(n),Ut(null,n,p,a),n=n.child),n;case 16:l=n.elementType;e:{switch(fu(t,n),t=n.pendingProps,p=l._init,l=p(l._payload),n.type=l,p=n.tag=t2(l),t=Cn(l,t),p){case 0:n=ld(null,n,l,t,a);break e;case 1:n=Ip(null,n,l,t,a);break e;case 11:n=Sp(null,n,l,t,a);break e;case 14:n=kp(null,n,l,Cn(l.type,t),a);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:Cn(l,p),ld(t,n,l,p,a);case 1:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:Cn(l,p),Ip(t,n,l,p,a);case 3:e:{if(zp(n),t===null)throw Error(i(387));l=n.pendingProps,y=n.memoizedState,p=y.element,Hf(t,n),ru(n,l,null,a);var E=n.memoizedState;if(l=E.element,y.isDehydrated)if(y={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},n.updateQueue.baseState=y,n.memoizedState=y,n.flags&256){p=$a(Error(i(423)),n),n=Ap(t,n,l,a,p);break e}else if(l!==p){p=$a(Error(i(424)),n),n=Ap(t,n,l,a,p);break e}else for(on=zr(n.stateNode.containerInfo.firstChild),sn=n,ot=!0,En=null,a=Wf(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ga(),l===p){n=fr(t,n,a);break e}Ut(t,n,l,a)}n=n.child}return n;case 5:return Kf(n),t===null&&Ll(n),l=n.type,p=n.pendingProps,y=t!==null?t.memoizedProps:null,E=p.children,zl(l,p)?E=null:y!==null&&zl(l,y)&&(n.flags|=32),Tp(t,n),Ut(t,n,E,a),n.child;case 6:return t===null&&Ll(n),null;case 13:return Rp(t,n,a);case 4:return Gl(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=ya(n,null,l,a):Ut(t,n,l,a),n.child;case 11:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:Cn(l,p),Sp(t,n,l,p,a);case 7:return Ut(t,n,n.pendingProps,a),n.child;case 8:return Ut(t,n,n.pendingProps.children,a),n.child;case 12:return Ut(t,n,n.pendingProps.children,a),n.child;case 10:e:{if(l=n.type._context,p=n.pendingProps,y=n.memoizedProps,E=p.value,Je(eu,l._currentValue),l._currentValue=E,y!==null)if(Lt(y.value,E)){if(y.children===p.children&&!Gt.current){n=fr(t,n,a);break e}}else for(y=n.child,y!==null&&(y.return=n);y!==null;){var P=y.dependencies;if(P!==null){E=y.child;for(var D=P.firstContext;D!==null;){if(D.context===l){if(y.tag===1){D=cr(-1,a&-a),D.tag=2;var V=y.updateQueue;if(V!==null){V=V.shared;var ne=V.pending;ne===null?D.next=D:(D.next=ne.next,ne.next=D),V.pending=D}}y.lanes|=a,D=y.alternate,D!==null&&(D.lanes|=a),Vl(y.return,a,n),P.lanes|=a;break}D=D.next}}else if(y.tag===10)E=y.type===n.type?null:y.child;else if(y.tag===18){if(E=y.return,E===null)throw Error(i(341));E.lanes|=a,P=E.alternate,P!==null&&(P.lanes|=a),Vl(E,a,n),E=y.sibling}else E=y.child;if(E!==null)E.return=y;else for(E=y;E!==null;){if(E===n){E=null;break}if(y=E.sibling,y!==null){y.return=E.return,E=y;break}E=E.return}y=E}Ut(t,n,p.children,a),n=n.child}return n;case 9:return p=n.type,l=n.pendingProps.children,va(n,a),p=wn(p),l=l(p),n.flags|=1,Ut(t,n,l,a),n.child;case 14:return l=n.type,p=Cn(l,n.pendingProps),p=Cn(l.type,p),kp(t,n,l,p,a);case 15:return Ep(t,n,n.type,n.pendingProps,a);case 17:return l=n.type,p=n.pendingProps,p=n.elementType===l?p:Cn(l,p),fu(t,n),n.tag=1,Kt(l)?(t=!0,Ko(n)):t=!1,va(n,a),yp(n,l,p),sd(n,l,p,a),dd(null,n,l,!0,t,a);case 19:return Pp(t,n,a);case 22:return Cp(t,n,a)}throw Error(i(156,n.tag))};function ih(t,n){return Fa(t,n)}function e2(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,n,a,l){return new e2(t,n,a,l)}function zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function t2(t){if(typeof t=="function")return zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===he)return 11;if(t===Pe)return 14}return 2}function jr(t,n){var a=t.alternate;return a===null?(a=$n(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function bu(t,n,a,l,p,y){var E=2;if(l=t,typeof t=="function")zd(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case U:return Ti(a.children,p,y,n);case Q:E=8,p|=8;break;case se:return t=$n(12,a,n,p|2),t.elementType=se,t.lanes=y,t;case de:return t=$n(13,a,n,p),t.elementType=de,t.lanes=y,t;case Te:return t=$n(19,a,n,p),t.elementType=Te,t.lanes=y,t;case Ee:return Su(a,p,y,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ue:E=10;break e;case we:E=9;break e;case he:E=11;break e;case Pe:E=14;break e;case _e:E=16,l=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=$n(E,a,n,p),n.elementType=t,n.type=l,n.lanes=y,n}function Ti(t,n,a,l){return t=$n(7,t,l,n),t.lanes=a,t}function Su(t,n,a,l){return t=$n(22,t,l,n),t.elementType=Ee,t.lanes=a,t.stateNode={isHidden:!1},t}function Ad(t,n,a){return t=$n(6,t,null,n),t.lanes=a,t}function Rd(t,n,a){return n=$n(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function n2(t,n,a,l,p){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Gi(0),this.expirationTimes=Gi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gi(0),this.identifierPrefix=l,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Od(t,n,a,l,p,y,E,P,D){return t=new n2(t,n,a,P,D),n===1?(n=1,y===!0&&(n|=8)):n=0,y=$n(3,null,null,n),t.current=y,y.stateNode=t,y.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(y),t}function r2(t,n,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:l==null?null:""+l,children:t,containerInfo:n,implementation:a}}function ah(t){if(!t)return Rr;t=t._reactInternals;e:{if(Un(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Kt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(Kt(a))return Of(t,a,n)}return n}function sh(t,n,a,l,p,y,E,P,D){return t=Od(a,l,!0,t,p,y,E,P,D),t.context=ah(null),a=t.current,l=jt(),p=Lr(a),y=cr(l,p),y.callback=n??null,Mr(a,y,p),t.current.lanes=p,ri(t,p,l),Zt(t,l),t}function ku(t,n,a,l){var p=n.current,y=jt(),E=Lr(p);return a=ah(a),n.context===null?n.context=a:n.pendingContext=a,n=cr(y,E),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=Mr(p,n,E),t!==null&&(zn(t,p,E,y),nu(t,p,E)),E}function Eu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function oh(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Pd(t,n){oh(t,n),(t=t.alternate)&&oh(t,n)}var uh=typeof reportError=="function"?reportError:function(t){console.error(t)};function Md(t){this._internalRoot=t}Cu.prototype.render=Md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));ku(t,n,null,null)},Cu.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;ki(function(){ku(null,t,null,null)}),n[sr]=null}};function Cu(t){this._internalRoot=t}Cu.prototype.unstable_scheduleHydration=function(t){if(t){var n=$o();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Wn.length&&n!==0&&n<Wn[a].priority;a++);Wn.splice(a,0,t),a===0&&kn(t)}};function Bd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lh(){}function i2(t,n,a,l,p){if(p){if(typeof l=="function"){var y=l;l=function(){var V=Eu(E);y.call(V)}}var E=sh(n,l,t,0,null,!1,!1,"",lh);return t._reactRootContainer=E,t[sr]=E.current,vs(t.nodeType===8?t.parentNode:t),ki(),E}for(;p=t.lastChild;)t.removeChild(p);if(typeof l=="function"){var P=l;l=function(){var V=Eu(D);P.call(V)}}var D=Od(t,0,!1,null,null,!1,!1,"",lh);return t._reactRootContainer=D,t[sr]=D.current,vs(t.nodeType===8?t.parentNode:t),ki(function(){ku(n,D,a,l)}),D}function Iu(t,n,a,l,p){var y=a._reactRootContainer;if(y){var E=y;if(typeof p=="function"){var P=p;p=function(){var D=Eu(E);P.call(D)}}ku(n,E,t,p)}else E=i2(a,n,t,p,l);return Eu(E)}vo=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var a=ni(n.pendingLanes);a!==0&&(Ga(n,a|1),Zt(n,ut()),!(qe&6)&&(Sa=ut()+500,Or()))}break;case 13:ki(function(){var l=dr(t,1);if(l!==null){var p=jt();zn(l,t,1,p)}}),Pd(t,1)}},Ka=function(t){if(t.tag===13){var n=dr(t,134217728);if(n!==null){var a=jt();zn(n,t,134217728,a)}Pd(t,134217728)}},_o=function(t){if(t.tag===13){var n=Lr(t),a=dr(t,n);if(a!==null){var l=jt();zn(a,t,n,l)}Pd(t,n)}},$o=function(){return Ke},xo=function(t,n){var a=Ke;try{return Ke=t,n()}finally{Ke=a}},ji=function(t,n,a){switch(n){case"input":if(cn(t,a),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var p=qo(l);if(!p)throw Error(i(90));Xe(l),cn(l,p)}}}break;case"textarea":Di(t,a);break;case"select":n=a.value,n!=null&&Xn(t,!!a.multiple,n,!1)}},so=Cd,oo=ki;var a2={usingClientEntryPoint:!1,Events:[xs,ca,qo,io,ao,Cd]},Bs={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s2={bundleType:Bs.bundleType,version:Bs.version,rendererPackageName:Bs.rendererPackageName,rendererConfig:Bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ua(t),t===null?null:t.stateNode},findFiberByHostInstance:Bs.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{nn=zu.inject(s2),pn=zu}catch{}}return Xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a2,Xt.createPortal=function(t,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bd(n))throw Error(i(200));return r2(t,n,null,a)},Xt.createRoot=function(t,n){if(!Bd(t))throw Error(i(299));var a=!1,l="",p=uh;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Od(t,1,!1,null,null,a,!1,l,p),t[sr]=n.current,vs(t.nodeType===8?t.parentNode:t),new Md(n)},Xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=Ua(n),t=t===null?null:t.stateNode,t},Xt.flushSync=function(t){return ki(t)},Xt.hydrate=function(t,n,a){if(!Tu(n))throw Error(i(200));return Iu(null,t,n,!0,a)},Xt.hydrateRoot=function(t,n,a){if(!Bd(t))throw Error(i(405));var l=a!=null&&a.hydratedSources||null,p=!1,y="",E=uh;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(y=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),n=sh(n,null,t,1,a??null,p,!1,y,E),t[sr]=n.current,vs(t),l)for(t=0;t<l.length;t++)a=l[t],p=a._getVersion,p=p(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,p]:n.mutableSourceEagerHydrationData.push(a,p);return new Cu(n)},Xt.render=function(t,n,a){if(!Tu(n))throw Error(i(200));return Iu(null,t,n,!1,a)},Xt.unmountComponentAtNode=function(t){if(!Tu(t))throw Error(i(40));return t._reactRootContainer?(ki(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[sr]=null})}),!0):!1},Xt.unstable_batchedUpdates=Cd,Xt.unstable_renderSubtreeIntoContainer=function(t,n,a,l){if(!Tu(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return Iu(t,n,a,!1,l)},Xt.version="18.3.1-next-f1338f8080-20240426",Xt}var yh;function y2(){if(yh)return Ld.exports;yh=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),Ld.exports=g2(),Ld.exports}var wh;function w2(){if(wh)return Ru;wh=1;var e=y2();return Ru.createRoot=e.createRoot,Ru.hydrateRoot=e.hydrateRoot,Ru}var v2=w2();const _2=Vy(v2);/*!
 * ONNX Runtime Web v1.20.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Kc=Object.defineProperty,$2=Object.getOwnPropertyDescriptor,x2=Object.getOwnPropertyNames,b2=Object.prototype.hasOwnProperty,S2=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,i)=>(typeof require<"u"?require:r)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),re=(e,r)=>()=>(e&&(r=e(e=0)),r),to=(e,r)=>{for(var i in r)Kc(e,i,{get:r[i],enumerable:!0})},k2=(e,r,i,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of x2(r))!b2.call(e,o)&&o!==i&&Kc(e,o,{get:()=>r[o],enumerable:!(s=$2(r,o))||s.enumerable});return e},Gu=e=>k2(Kc({},"__esModule",{value:!0}),e),Ns,Wr,Ta,vh,Qc,Yc=re(()=>{Ns=new Map,Wr=[],Ta=(e,r,i)=>{if(r&&typeof r.init=="function"&&typeof r.createInferenceSessionHandler=="function"){let s=Ns.get(e);if(s===void 0)Ns.set(e,{backend:r,priority:i});else{if(s.priority>i)return;if(s.priority===i&&s.backend!==r)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let o=Wr.indexOf(e);o!==-1&&Wr.splice(o,1);for(let d=0;d<Wr.length;d++)if(Ns.get(Wr[d]).priority<=i){Wr.splice(d,0,e);return}Wr.push(e)}return}throw new TypeError("not a valid backend")},vh=async e=>{let r=Ns.get(e);if(!r)return"backend not found.";if(r.initialized)return r.backend;if(r.aborted)return r.error;{let i=!!r.initPromise;try{return i||(r.initPromise=r.backend.init(e)),await r.initPromise,r.initialized=!0,r.backend}catch(s){return i||(r.error=`${s}`,r.aborted=!0),r.error}finally{delete r.initPromise}}},Qc=async e=>{let r=e.executionProviders||[],i=r.map(m=>typeof m=="string"?m:m.name),s=i.length===0?Wr:i,o,d=[],u=new Set;for(let m of s){let g=await vh(m);typeof g=="string"?d.push({name:m,err:g}):(o||(o=g),o===g&&u.add(m))}if(!o)throw new Error(`no available backend found. ERR: ${d.map(m=>`[${m.name}] ${m.err}`).join(", ")}`);for(let{name:m,err:g}of d)i.includes(m)&&console.warn(`removing requested execution provider "${m}" from session options because it is not available: ${g}`);let h=r.filter(m=>u.has(typeof m=="string"?m:m.name));return[o,new Proxy(e,{get:(m,g)=>g==="executionProviders"?h:Reflect.get(m,g)})]}}),E2=re(()=>{Yc()}),Hy,C2=re(()=>{Hy="1.20.1"}),Fd,bn,qy=re(()=>{C2(),Fd="warning",bn={wasm:{},webgl:{},webgpu:{},versions:{common:Hy},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Fd=e}},get logLevel(){return Fd}},Object.defineProperty(bn,"logLevel",{enumerable:!0})}),et,T2=re(()=>{qy(),et=bn}),Gy,Ky,I2=re(()=>{Gy=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let s=i.getContext("2d");if(s!=null){let o,d;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],d=e.dims[3]):(o=e.dims[3],d=e.dims[2]);let u=(r==null?void 0:r.format)!==void 0?r.format:"RGB",h=r==null?void 0:r.norm,m,g;h===void 0||h.mean===void 0?m=[255,255,255,255]:typeof h.mean=="number"?m=[h.mean,h.mean,h.mean,h.mean]:(m=[h.mean[0],h.mean[1],h.mean[2],0],h.mean[3]!==void 0&&(m[3]=h.mean[3])),h===void 0||h.bias===void 0?g=[0,0,0,0]:typeof h.bias=="number"?g=[h.bias,h.bias,h.bias,h.bias]:(g=[h.bias[0],h.bias[1],h.bias[2],0],h.bias[3]!==void 0&&(g[3]=h.bias[3]));let _=d*o,v=0,f=_,x=_*2,S=-1;u==="RGBA"?(v=0,f=_,x=_*2,S=_*3):u==="RGB"?(v=0,f=_,x=_*2):u==="RBG"&&(v=0,x=_,f=_*2);for(let b=0;b<d;b++)for(let I=0;I<o;I++){let A=(e.data[v++]-g[0])*m[0],C=(e.data[f++]-g[1])*m[1],O=(e.data[x++]-g[2])*m[2],R=S===-1?255:(e.data[S++]-g[3])*m[3];s.fillStyle="rgba("+A+","+C+","+O+","+R+")",s.fillRect(I,b,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Ky=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),s;if(i!=null){let o,d,u;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],d=e.dims[1],u=e.dims[3]):(o=e.dims[3],d=e.dims[2],u=e.dims[1]);let h=r!==void 0&&r.format!==void 0?r.format:"RGB",m=r==null?void 0:r.norm,g,_;m===void 0||m.mean===void 0?g=[255,255,255,255]:typeof m.mean=="number"?g=[m.mean,m.mean,m.mean,m.mean]:(g=[m.mean[0],m.mean[1],m.mean[2],255],m.mean[3]!==void 0&&(g[3]=m.mean[3])),m===void 0||m.bias===void 0?_=[0,0,0,0]:typeof m.bias=="number"?_=[m.bias,m.bias,m.bias,m.bias]:(_=[m.bias[0],m.bias[1],m.bias[2],0],m.bias[3]!==void 0&&(_[3]=m.bias[3]));let v=d*o;if(r!==void 0&&(r.format!==void 0&&u===4&&r.format!=="RGBA"||u===3&&r.format!=="RGB"&&r.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let f=4,x=0,S=1,b=2,I=3,A=0,C=v,O=v*2,R=-1;h==="RGBA"?(A=0,C=v,O=v*2,R=v*3):h==="RGB"?(A=0,C=v,O=v*2):h==="RBG"&&(A=0,O=v,C=v*2),s=i.createImageData(o,d);for(let M=0;M<d*o;x+=f,S+=f,b+=f,I+=f,M++)s.data[x]=(e.data[A++]-_[0])*g[0],s.data[S]=(e.data[C++]-_[1])*g[1],s.data[b]=(e.data[O++]-_[2])*g[2],s.data[I]=R===-1?255:(e.data[R++]-_[3])*g[3]}else throw new Error("Can not access image data");return s}}),Ou,Qy,Yy,Zy,Xy,Jy,z2=re(()=>{Zc(),Ou=(e,r)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(r.height===void 0||r.width===void 0)throw new Error("Image height and width must be defined");if(r.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:s}=r,o=r.norm??{mean:255,bias:0},d,u;typeof o.mean=="number"?d=[o.mean,o.mean,o.mean,o.mean]:d=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?u=[o.bias,o.bias,o.bias,o.bias]:u=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let h=r.format!==void 0?r.format:"RGBA",m=r.tensorFormat!==void 0&&r.tensorFormat!==void 0?r.tensorFormat:"RGB",g=i*s,_=m==="RGBA"?new Float32Array(g*4):new Float32Array(g*3),v=4,f=0,x=1,S=2,b=3,I=0,A=g,C=g*2,O=-1;h==="RGB"&&(v=3,f=0,x=1,S=2,b=-1),m==="RGBA"?O=g*3:m==="RBG"?(I=0,C=g,A=g*2):m==="BGR"&&(C=0,A=g,I=g*2);for(let R=0;R<g;R++,f+=v,S+=v,x+=v,b+=v)_[I++]=(e[f]+u[0])/d[0],_[A++]=(e[x]+u[1])/d[1],_[C++]=(e[S]+u[2])/d[2],O!==-1&&b!==-1&&(_[O++]=(e[b]+u[3])/d[3]);return m==="RGBA"?new ln("float32",_,[1,4,i,s]):new ln("float32",_,[1,3,i,s])},Qy=async(e,r)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,s=typeof ImageData<"u"&&e instanceof ImageData,o=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,d=typeof e=="string",u,h=r??{},m=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},g=_=>typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||_ instanceof OffscreenCanvas?_.getContext("2d"):null;if(i){let _=m();_.width=e.width,_.height=e.height;let v=g(_);if(v!=null){let f=e.height,x=e.width;if(r!==void 0&&r.resizedHeight!==void 0&&r.resizedWidth!==void 0&&(f=r.resizedHeight,x=r.resizedWidth),r!==void 0){if(h=r,r.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");h.tensorFormat="RGBA",h.height=f,h.width=x}else h.tensorFormat="RGBA",h.height=f,h.width=x;v.drawImage(e,0,0),u=v.getImageData(0,0,x,f).data}else throw new Error("Can not access image data")}else if(s){let _,v;if(r!==void 0&&r.resizedWidth!==void 0&&r.resizedHeight!==void 0?(_=r.resizedHeight,v=r.resizedWidth):(_=e.height,v=e.width),r!==void 0&&(h=r),h.format="RGBA",h.height=_,h.width=v,r!==void 0){let f=m();f.width=v,f.height=_;let x=g(f);if(x!=null)x.putImageData(e,0,0),u=x.getImageData(0,0,v,_).data;else throw new Error("Can not access image data")}else u=e.data}else if(o){if(r===void 0)throw new Error("Please provide image config with format for Imagebitmap");let _=m();_.width=e.width,_.height=e.height;let v=g(_);if(v!=null){let f=e.height,x=e.width;return v.drawImage(e,0,0,x,f),u=v.getImageData(0,0,x,f).data,h.height=f,h.width=x,Ou(u,h)}else throw new Error("Can not access image data")}else{if(d)return new Promise((_,v)=>{let f=m(),x=g(f);if(!e||!x)return v();let S=new Image;S.crossOrigin="Anonymous",S.src=e,S.onload=()=>{f.width=S.width,f.height=S.height,x.drawImage(S,0,0,f.width,f.height);let b=x.getImageData(0,0,f.width,f.height);h.height=f.height,h.width=f.width,_(Ou(b.data,h))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(u!==void 0)return Ou(u,h);throw new Error("Input data provided is not supported - aborted tensor creation")},Yy=(e,r)=>{let{width:i,height:s,download:o,dispose:d}=r,u=[1,s,i,4];return new ln({location:"texture",type:"float32",texture:e,dims:u,download:o,dispose:d})},Zy=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:d}=r;return new ln({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:s,download:o,dispose:d})},Xy=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:d}=r;return new ln({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:s,download:o,dispose:d})},Jy=(e,r,i)=>new ln({location:"cpu-pinned",type:e,data:r,dims:i??[r.length]})}),Ai,Ks,Wd,e0,A2=re(()=>{Ai=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Ks=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Wd=!1,e0=()=>{if(!Wd){Wd=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,r=typeof BigUint64Array<"u"&&BigUint64Array.from,i=typeof Float16Array<"u"&&Float16Array.from;e&&(Ai.set("int64",BigInt64Array),Ks.set(BigInt64Array,"int64")),r&&(Ai.set("uint64",BigUint64Array),Ks.set(BigUint64Array,"uint64")),i?(Ai.set("float16",Float16Array),Ks.set(Float16Array,"float16")):Ai.set("float16",Uint16Array)}}}),t0,n0,R2=re(()=>{Zc(),t0=e=>{let r=1;for(let i=0;i<e.length;i++){let s=e[i];if(typeof s!="number"||!Number.isSafeInteger(s))throw new TypeError(`dims[${i}] must be an integer, got: ${s}`);if(s<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${s}`);r*=s}return r},n0=(e,r)=>{switch(e.location){case"cpu":return new ln(e.type,e.data,r);case"cpu-pinned":return new ln({location:"cpu-pinned",data:e.data,type:e.type,dims:r});case"texture":return new ln({location:"texture",texture:e.texture,type:e.type,dims:r});case"gpu-buffer":return new ln({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:r});case"ml-tensor":return new ln({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:r});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),ln,Zc=re(()=>{I2(),z2(),A2(),R2(),ln=class{constructor(e,r,i){e0();let s,o;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,s=e.type,o=e.dims,e.location){case"cpu-pinned":{let u=Ai.get(s);if(!u)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(e.data instanceof u))throw new TypeError(`buffer should be of type ${u.name}`);this.cpuData=e.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let u,h;if(typeof e=="string")if(s=e,h=i,e==="string"){if(!Array.isArray(r))throw new TypeError("A string tensor's data must be a string array.");u=r}else{let m=Ai.get(e);if(m===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(r)){if(e==="float16"&&m===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${m.name} as data.`);e==="uint64"||e==="int64"?u=m.from(r,BigInt):u=m.from(r)}else if(r instanceof m)u=r;else if(r instanceof Uint8ClampedArray)if(e==="uint8")u=Uint8Array.from(r);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else throw new TypeError(`A ${s} tensor's data must be type of ${m}`)}else if(h=r,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let m=typeof e[0];if(m==="string")s="string",u=e;else if(m==="boolean")s="bool",u=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${m}.`)}else if(e instanceof Uint8ClampedArray)s="uint8",u=Uint8Array.from(e);else{let m=Ks.get(e.constructor);if(m===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);s=m,u=e}if(h===void 0)h=[u.length];else if(!Array.isArray(h))throw new TypeError("A tensor's dims must be a number array");o=h,this.cpuData=u,this.dataLocation="cpu"}let d=t0(o);if(this.cpuData&&d!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(d/2)===this.cpuData.length))throw new Error(`Tensor's size(${d}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=o,this.size=d}static async fromImage(e,r){return Qy(e,r)}static fromTexture(e,r){return Yy(e,r)}static fromGpuBuffer(e,r){return Zy(e,r)}static fromMLTensor(e,r){return Xy(e,r)}static fromPinnedBuffer(e,r,i){return Jy(e,r,i)}toDataURL(e){return Gy(this,e)}toImageData(e){return Ky(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,e&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return n0(this,e)}}}),wt,Xc=re(()=>{Zc(),wt=ln}),Ku,Vd,Qn,Bn,r0=re(()=>{qy(),Ku=(e,r)=>{(typeof bn.trace>"u"?!bn.wasm.trace:!bn.trace)||console.timeStamp(`${e}::ORT::${r}`)},Vd=(e,r)=>{var o;let i=((o=new Error().stack)==null?void 0:o.split(/\r\n|\r|\n/g))||[],s=!1;for(let d=0;d<i.length;d++){if(s&&!i[d].includes("TRACE_FUNC")){let u=`FUNC_${e}::${i[d].trim().split(" ")[1]}`;r&&(u+=`::${r}`),Ku("CPU",u);return}i[d].includes("TRACE_FUNC")&&(s=!0)}},Qn=e=>{(typeof bn.trace>"u"?!bn.wasm.trace:!bn.trace)||Vd("BEGIN",e)},Bn=e=>{(typeof bn.trace>"u"?!bn.wasm.trace:!bn.trace)||Vd("END",e)}}),i0,O2=re(()=>{Yc(),Xc(),r0(),i0=class a0{constructor(r){this.handler=r}async run(r,i,s){Qn();let o={},d={};if(typeof r!="object"||r===null||r instanceof wt||Array.isArray(r))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let u=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof wt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");u=!1;for(let g of i){if(typeof g!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(g)===-1)throw new RangeError(`'fetches' contains invalid output name: ${g}.`);o[g]=null}if(typeof s=="object"&&s!==null)d=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let g=!1,_=Object.getOwnPropertyNames(i);for(let v of this.outputNames)if(_.indexOf(v)!==-1){let f=i[v];(f===null||f instanceof wt)&&(g=!0,u=!1,o[v]=f)}if(g){if(typeof s=="object"&&s!==null)d=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else d=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let g of this.inputNames)if(typeof r[g]>"u")throw new Error(`input '${g}' is missing in 'feeds'.`);if(u)for(let g of this.outputNames)o[g]=null;let h=await this.handler.run(r,o,d),m={};for(let g in h)if(Object.hasOwnProperty.call(h,g)){let _=h[g];_ instanceof wt?m[g]=_:m[g]=new wt(_.type,_.data,_.dims)}return Bn(),m}async release(){return this.handler.dispose()}static async create(r,i,s,o){Qn();let d,u={};if(typeof r=="string"){if(d=r,typeof i=="object"&&i!==null)u=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof Uint8Array){if(d=r,typeof i=="object"&&i!==null)u=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&r instanceof SharedArrayBuffer){let _=r,v=0,f=r.byteLength;if(typeof i=="object"&&i!==null)u=i;else if(typeof i=="number"){if(v=i,!Number.isSafeInteger(v))throw new RangeError("'byteOffset' must be an integer.");if(v<0||v>=_.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${_.byteLength}).`);if(f=r.byteLength-v,typeof s=="number"){if(f=s,!Number.isSafeInteger(f))throw new RangeError("'byteLength' must be an integer.");if(f<=0||v+f>_.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${_.byteLength-v}].`);if(typeof o=="object"&&o!==null)u=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof s<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");d=new Uint8Array(_,v,f)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[h,m]=await Qc(u),g=await h.createInferenceSessionHandler(d,m);return Bn(),new a0(g)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Qu,P2=re(()=>{O2(),Qu=i0}),M2=re(()=>{}),B2=re(()=>{}),D2=re(()=>{}),N2=re(()=>{}),_h,s0,L2=re(()=>{Yc(),Xc(),_h="Training backend could not be resolved. Make sure you're using the correct configuration & WebAssembly files.",s0=class o0{constructor(r,i,s){this.handler=r,this.hasOptimizerModel=i,this.hasEvalModel=s}get trainingInputNames(){return this.handler.inputNames}get trainingOutputNames(){return this.handler.outputNames}get evalInputNames(){if(this.hasEvalModel)return this.handler.evalInputNames;throw new Error("This training session has no evalModel loaded.")}get evalOutputNames(){if(this.hasEvalModel)return this.handler.evalOutputNames;throw new Error("This training session has no evalModel loaded.")}static async create(r,i){let s=r.evalModel||"",o=r.optimizerModel||"",d=i||{},[u,h]=await Qc(d);if(u.createTrainingSessionHandler){let m=await u.createTrainingSessionHandler(r.checkpointState,r.trainModel,s,o,h);return new o0(m,!!r.optimizerModel,!!r.evalModel)}else throw new Error(_h)}typeNarrowingForRunStep(r,i,s,o,d){let u={},h={};if(typeof s!="object"||s===null||s instanceof wt||Array.isArray(s))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let m=!0;if(typeof o=="object"){if(o===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(o instanceof wt)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(o)){if(o.length===0)throw new TypeError("'fetches' cannot be an empty array.");m=!1;for(let g of o){if(typeof g!="string")throw new TypeError("'fetches' must be a string array or an object.");if(i.indexOf(g)===-1)throw new RangeError(`'fetches' contains invalid output name: ${g}.`);u[g]=null}if(typeof d=="object"&&d!==null)h=d;else if(typeof d<"u")throw new TypeError("'options' must be an object.")}else{let g=!1,_=Object.getOwnPropertyNames(o);for(let v of i)if(_.indexOf(v)!==-1){let f=o[v];(f===null||f instanceof wt)&&(g=!0,m=!1,u[v]=f)}if(g){if(typeof d=="object"&&d!==null)h=d;else if(typeof d<"u")throw new TypeError("'options' must be an object.")}else h=o}}else if(typeof o<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let g of r)if(typeof s[g]>"u")throw new Error(`input '${g}' is missing in 'feeds'.`);if(m)for(let g of i)u[g]=null;return[u,h]}convertHandlerReturnTypeToMapOfTensors(r){let i={};for(let s in r)if(Object.hasOwnProperty.call(r,s)){let o=r[s];o instanceof wt?i[s]=o:i[s]=new wt(o.type,o.data,o.dims)}return i}async lazyResetGrad(){await this.handler.lazyResetGrad()}async runTrainStep(r,i,s){let[o,d]=this.typeNarrowingForRunStep(this.trainingInputNames,this.trainingOutputNames,r,i,s),u=await this.handler.runTrainStep(r,o,d);return this.convertHandlerReturnTypeToMapOfTensors(u)}async runOptimizerStep(r){if(this.hasOptimizerModel)await this.handler.runOptimizerStep(r||{});else throw new Error("This TrainingSession has no OptimizerModel loaded.")}async runEvalStep(r,i,s){if(this.hasEvalModel){let[o,d]=this.typeNarrowingForRunStep(this.evalInputNames,this.evalOutputNames,r,i,s),u=await this.handler.runEvalStep(r,o,d);return this.convertHandlerReturnTypeToMapOfTensors(u)}else throw new Error("This TrainingSession has no EvalModel loaded.")}async getParametersSize(r=!0){return this.handler.getParametersSize(r)}async loadParametersBuffer(r,i=!0){let s=await this.getParametersSize(i);if(r.length!==4*s)throw new Error("Size of the buffer passed into loadParametersBuffer must match the number of parameters in the model. Please use getParametersSize method to check.");return this.handler.loadParametersBuffer(r,i)}async getContiguousParameters(r=!0){return this.handler.getContiguousParameters(r)}async release(){return this.handler.dispose()}}}),u0,U2=re(()=>{L2(),u0=s0}),j2={};to(j2,{InferenceSession:()=>Qu,TRACE:()=>Ku,TRACE_FUNC_BEGIN:()=>Qn,TRACE_FUNC_END:()=>Bn,Tensor:()=>wt,TrainingSession:()=>u0,env:()=>et,registerBackend:()=>Ta});var Dn=re(()=>{E2(),T2(),P2(),Xc(),M2(),B2(),r0(),D2(),N2(),U2()}),Jc=re(()=>{}),l0={};to(l0,{default:()=>d0});var Hd,qd,d0,F2=re(()=>{var e;o1(),Oi(),il(),Hd="ort-wasm-proxy-worker",qd=((e=globalThis.self)==null?void 0:e.name)===Hd,qd&&(self.onmessage=r=>{let{type:i,in:s}=r.data;try{switch(i){case"init-wasm":ef(s.wasm).then(()=>{wf(s).then(()=>{postMessage({type:i})},o=>{postMessage({type:i,err:o})})},o=>{postMessage({type:i,err:o})});break;case"init-ep":{let{epName:o,env:d}=s;vf(d,o).then(()=>{postMessage({type:i})},u=>{postMessage({type:i,err:u})});break}case"copy-from":{let{buffer:o}=s,d=nl(o);postMessage({type:i,out:d});break}case"create":{let{model:o,options:d}=s;_f(o,d).then(u=>{postMessage({type:i,out:u})},u=>{postMessage({type:i,err:u})});break}case"release":$f(s),postMessage({type:i});break;case"run":{let{sessionId:o,inputIndices:d,inputs:u,outputIndices:h,options:m}=s;xf(o,d,u,h,new Array(h.length).fill(null),m).then(g=>{g.some(_=>_[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:g},Sf([...u,...g]))},g=>{postMessage({type:i,err:g})});break}case"end-profiling":bf(s),postMessage({type:i});break;default:}}catch(o){postMessage({type:i,err:o})}}),d0=qd?null:r=>new Worker(r??Ca,{type:"module",name:Hd})}),c0={};to(c0,{default:()=>f0});var Gd,Kd,f0,W2=re(()=>{var e;Kd=(Gd=import.meta.url,async function(r={}){function i(){return _e.buffer!=X.buffer&&Ve(),X}function s(){return _e.buffer!=X.buffer&&Ve(),J}function o(){return _e.buffer!=X.buffer&&Ve(),z}function d(){return _e.buffer!=X.buffer&&Ve(),N}function u(){return _e.buffer!=X.buffer&&Ve(),ie}function h(){return _e.buffer!=X.buffer&&Ve(),ee}function m(){return _e.buffer!=X.buffer&&Ve(),ce}function g(){return _e.buffer!=X.buffer&&Ve(),We}var _,v,f=Object.assign({},r),x=new Promise((c,w)=>{_=c,v=w}),S=typeof window=="object",b=typeof importScripts=="function",I=b&&self.name=="em-pthread";f.mountExternalData=(c,w)=>{c.startsWith("./")&&(c=c.substring(2)),(f.Fb||(f.Fb=new Map)).set(c,w)},f.unmountExternalData=()=>{delete f.Fb};var A=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let C=()=>{let c=($,k,T)=>(...B)=>{let G=Dt,Z=k==null?void 0:k();B=$(...B);let le=k==null?void 0:k();return Z!==le&&($=le,T(Z),k=T=null),Dt!=G?new Promise((fe,Ce)=>{Sr={resolve:fe,reject:Ce}}):B},w=$=>async(...k)=>{var T;try{if(f.Eb)throw Error("Session already started");let B=f.Eb={fc:k[0],errors:[]},G=await $(...k);if(f.Eb!==B)throw Error("Session mismatch");(T=f.Gb)==null||T.flush();let Z=B.errors;if(0<Z.length){let le=await Promise.all(Z);if(le=le.filter(fe=>fe),0<le.length)throw Error(le.join(`
`))}return G}finally{f.Eb=null}};f._OrtCreateSession=c(f._OrtCreateSession,()=>f._OrtCreateSession,$=>f._OrtCreateSession=$),f._OrtRun=w(c(f._OrtRun,()=>f._OrtRun,$=>f._OrtRun=$)),f._OrtRunWithBinding=w(c(f._OrtRunWithBinding,()=>f._OrtRunWithBinding,$=>f._OrtRunWithBinding=$)),f._OrtBindInput=c(f._OrtBindInput,()=>f._OrtBindInput,$=>f._OrtBindInput=$),C=void 0};f.jsepInit=(c,w)=>{if(C==null||C(),c==="webgpu"){[f.Gb,f.Ub,f.Yb,f.Nb,f.Xb,f.jb,f.Zb,f.bc,f.Vb,f.Wb,f.$b]=w;let $=f.Gb;f.jsepRegisterBuffer=(k,T,B,G)=>$.registerBuffer(k,T,B,G),f.jsepGetBuffer=k=>$.getBuffer(k),f.jsepCreateDownloader=(k,T,B)=>$.createDownloader(k,T,B),f.jsepOnReleaseSession=k=>{$.onReleaseSession(k)},f.jsepOnRunStart=k=>$.onRunStart(k),f.cc=(k,T)=>{$.upload(k,T)}}else if(c==="webnn"){[f.Gb,f.ac,f.Ob,f.jsepEnsureTensor,f.dc,f.jsepDownloadTensor]=w,f.jsepReleaseTensorId=f.Ob;let $=f.Gb;f.jsepOnRunStart=k=>$.onRunStart(k),f.jsepRegisterMLContext=(k,T)=>{$.registerMLContext(k,T)},f.jsepOnReleaseSession=k=>{$.onReleaseSession(k)},f.jsepCreateMLTensorDownloader=(k,T)=>$.createMLTensorDownloader(k,T),f.jsepRegisterMLTensor=(k,T,B)=>$.registerMLTensor(k,T,B)}};var O,R,M=Object.assign({},f),F="./this.program",U=(c,w)=>{throw w},Q="";(S||b)&&(b?Q=self.location.href:typeof document<"u"&&document.currentScript&&(Q=document.currentScript.src),Gd&&(Q=Gd),Q=Q.startsWith("blob:")?"":Q.substr(0,Q.replace(/[?#].*/,"").lastIndexOf("/")+1),b&&(R=c=>{var w=new XMLHttpRequest;return w.open("GET",c,!1),w.responseType="arraybuffer",w.send(null),new Uint8Array(w.response)}),O=(c,w,$)=>{var k=new XMLHttpRequest;k.open("GET",c,!0),k.responseType="arraybuffer",k.onload=()=>{k.status==200||k.status==0&&k.response?w(k.response):$()},k.onerror=$,k.send(null)});var se,ue=console.log.bind(console),we=console.error.bind(console),he=ue,de=we;if(Object.assign(f,M),M=null,I){let c=function(w){try{var $=w.data,k=$.cmd;if(k==="load"){let T=[];self.onmessage=B=>T.push(B),self.startWorker=()=>{postMessage({cmd:"loaded"});for(let B of T)c(B);self.onmessage=c};for(let B of $.handlers)f[B]&&!f[B].proxy||(f[B]=(...G)=>{postMessage({Mb:"callHandler",oc:B,args:G})},B=="print"&&(he=f[B]),B=="printErr"&&(de=f[B]));_e=$.wasmMemory,Ve(),Te($.wasmModule)}else if(k==="run"){gs($.pthread_ptr,0,0,1,0,0),_r($.pthread_ptr),io(),ji(),Pe||(ms(),Pe=!0);try{ao($.start_routine,$.arg)}catch(T){if(T!="unwind")throw T}}else k==="cancel"?rr()&&Vn(-1):$.target!=="setimmediate"&&(k==="checkMailbox"?Pe&&rn():k&&(de(`worker: received unknown command ${k}`),de($)))}catch(T){throw No(),T}};var Te,Pe=!1;de=function(...w){w=w.join(" "),console.error(w)},self.alert=function(...w){postMessage({Mb:"alert",text:w.join(" "),qc:rr()})},f.instantiateWasm=(w,$)=>new Promise(k=>{Te=T=>{T=new WebAssembly.Instance(T,Oa()),$(T),k()}}),self.onunhandledrejection=w=>{throw w.reason||w},self.onmessage=c}f.wasmBinary&&(se=f.wasmBinary);var _e,Ee,q,X,J,z,N,ie,ee,ce,be,Ue,We,Me=!1;function Ve(){var c=_e.buffer;f.HEAP8=X=new Int8Array(c),f.HEAP16=z=new Int16Array(c),f.HEAPU8=J=new Uint8Array(c),f.HEAPU16=N=new Uint16Array(c),f.HEAP32=ie=new Int32Array(c),f.HEAPU32=ee=new Uint32Array(c),f.HEAPF32=ce=new Float32Array(c),f.HEAPF64=We=new Float64Array(c),f.HEAP64=be=new BigInt64Array(c),f.HEAPU64=Ue=new BigUint64Array(c)}if(!I){if(!((_e=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0})).buffer instanceof A))throw de("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"),Error("bad memory");Ve()}var Bt=[],Xe=[],tt=[],bt=0,en=null;function Zn(){if(--bt==0&&en){var c=en;en=null,c()}}function cn(c){throw de(c="Aborted("+c+")"),Me=!0,q=1,c=new WebAssembly.RuntimeError(c+". Build with -sASSERTIONS for more info."),v(c),c}var Pi,Mi=c=>c.startsWith("data:application/octet-stream;base64,"),hr=c=>c.startsWith("file://");function Xn(c){if(c==Pi&&se)return new Uint8Array(se);if(R)return R(c);throw"both async and sync fetching of the wasm failed"}function Bi(c,w,$){return function(k){if(!se&&(S||b)){if(typeof fetch=="function"&&!hr(k))return fetch(k,{credentials:"same-origin"}).then(T=>{if(!T.ok)throw`failed to load wasm binary file at '${k}'`;return T.arrayBuffer()}).catch(()=>Xn(k));if(O)return new Promise((T,B)=>{O(k,G=>T(new Uint8Array(G)),B)})}return Promise.resolve().then(()=>Xn(k))}(c).then(k=>WebAssembly.instantiate(k,w)).then($,k=>{de(`failed to asynchronously prepare wasm: ${k}`),cn(k)})}function Oa(){return{a:{O:ro,Aa:no,b:oo,aa:Da,B:uo,qa:yr,Y:lo,_:co,ra:fo,oa:Un,ha:Na,na:La,L:po,Z:Ua,W:ja,pa:Fa,X:Wa,wa:ut,F:go,Q:pn,P:ni,E:ol,u:ul,q:qa,G:yo,A:Ka,R:_o,ua:$o,ka:xo,U:Fn,ba:ii,H:ai,ja:_r,ta:Wn,t:si,x:Xa,o:Ja,l:es,c:Ha,n:ko,j:Nt,w:kr,p:ns,g:ui,s:cl,m:rs,e:is,k:li,i:Ji,h:Eo,d:fl,ea:pl,fa:hl,ga:ml,ca:To,da:Io,T:zo,f:gl,D:yl,I:ss,M:wl,y:vl,sa:Oo,V:_l,v:Ro,z:$l,N:xl,S:bl,za:os,ya:ci,la:ds,ma:cs,$:Ni,C:fs,K:nr,ia:Mo,J:Bo,a:_e,xa:Ma,va:Cr,r:kl}}}var Di={868340:(c,w,$,k,T)=>{if(f===void 0||!f.Fb)return 1;if((c=st(c>>>0)).startsWith("./")&&(c=c.substring(2)),!(c=f.Fb.get(c)))return 2;if(k>>>=0,(w>>>=0)+($>>>=0)>c.byteLength)return 3;try{let B=c.subarray(w,w+$);switch(T){case 0:s().set(B,k>>>0);break;case 1:f.cc(k,B);break;default:return 4}return 0}catch{return 4}},869023:(c,w,$)=>{f.dc(c,s().subarray(w>>>0,w+$>>>0))},869086:()=>f.ac(),869127:c=>{f.Ob(c)},869163:()=>{f.Vb()},869194:()=>{f.Wb()},869223:()=>{f.$b()},869248:c=>f.Ub(c),869281:c=>f.Yb(c),869313:(c,w,$)=>{f.Nb(c,w,$,!0)},869352:(c,w,$)=>{f.Nb(c,w,$)},869385:()=>typeof wasmOffsetConverter<"u",869442:c=>{f.jb("Abs",c,void 0)},869493:c=>{f.jb("Neg",c,void 0)},869544:c=>{f.jb("Floor",c,void 0)},869597:c=>{f.jb("Ceil",c,void 0)},869649:c=>{f.jb("Reciprocal",c,void 0)},869707:c=>{f.jb("Sqrt",c,void 0)},869759:c=>{f.jb("Exp",c,void 0)},869810:c=>{f.jb("Erf",c,void 0)},869861:c=>{f.jb("Sigmoid",c,void 0)},869916:(c,w,$)=>{f.jb("HardSigmoid",c,{alpha:w,beta:$})},869995:c=>{f.jb("Log",c,void 0)},870046:c=>{f.jb("Sin",c,void 0)},870097:c=>{f.jb("Cos",c,void 0)},870148:c=>{f.jb("Tan",c,void 0)},870199:c=>{f.jb("Asin",c,void 0)},870251:c=>{f.jb("Acos",c,void 0)},870303:c=>{f.jb("Atan",c,void 0)},870355:c=>{f.jb("Sinh",c,void 0)},870407:c=>{f.jb("Cosh",c,void 0)},870459:c=>{f.jb("Asinh",c,void 0)},870512:c=>{f.jb("Acosh",c,void 0)},870565:c=>{f.jb("Atanh",c,void 0)},870618:c=>{f.jb("Tanh",c,void 0)},870670:c=>{f.jb("Not",c,void 0)},870721:(c,w,$)=>{f.jb("Clip",c,{min:w,max:$})},870790:c=>{f.jb("Clip",c,void 0)},870842:(c,w)=>{f.jb("Elu",c,{alpha:w})},870900:c=>{f.jb("Gelu",c,void 0)},870952:c=>{f.jb("Relu",c,void 0)},871004:(c,w)=>{f.jb("LeakyRelu",c,{alpha:w})},871068:(c,w)=>{f.jb("ThresholdedRelu",c,{alpha:w})},871138:(c,w)=>{f.jb("Cast",c,{to:w})},871196:c=>{f.jb("Add",c,void 0)},871247:c=>{f.jb("Sub",c,void 0)},871298:c=>{f.jb("Mul",c,void 0)},871349:c=>{f.jb("Div",c,void 0)},871400:c=>{f.jb("Pow",c,void 0)},871451:c=>{f.jb("Equal",c,void 0)},871504:c=>{f.jb("Greater",c,void 0)},871559:c=>{f.jb("GreaterOrEqual",c,void 0)},871621:c=>{f.jb("Less",c,void 0)},871673:c=>{f.jb("LessOrEqual",c,void 0)},871732:(c,w,$,k,T)=>{f.jb("ReduceMean",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},871891:(c,w,$,k,T)=>{f.jb("ReduceMax",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},872049:(c,w,$,k,T)=>{f.jb("ReduceMin",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},872207:(c,w,$,k,T)=>{f.jb("ReduceProd",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},872366:(c,w,$,k,T)=>{f.jb("ReduceSum",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},872524:(c,w,$,k,T)=>{f.jb("ReduceL1",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},872681:(c,w,$,k,T)=>{f.jb("ReduceL2",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},872838:(c,w,$,k,T)=>{f.jb("ReduceLogSum",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},872999:(c,w,$,k,T)=>{f.jb("ReduceSumSquare",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},873163:(c,w,$,k,T)=>{f.jb("ReduceLogSumExp",c,{keepDims:!!w,noopWithEmptyAxes:!!$,axes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},873327:c=>{f.jb("Where",c,void 0)},873380:(c,w,$)=>{f.jb("Transpose",c,{perm:w?Array.from(u().subarray(w>>>0,$>>>0)):[]})},873488:(c,w,$,k)=>{f.jb("DepthToSpace",c,{blocksize:w,mode:st($),format:k?"NHWC":"NCHW"})},873621:(c,w,$,k)=>{f.jb("DepthToSpace",c,{blocksize:w,mode:st($),format:k?"NHWC":"NCHW"})},873754:(c,w,$,k,T,B,G,Z,le,fe,Ce,je,Le,H,Ne)=>{f.jb("ConvTranspose",c,{format:le?"NHWC":"NCHW",autoPad:w,dilations:[$],group:k,kernelShape:[T],pads:[B,G],strides:[Z],wIsConst:()=>!!i()[fe>>>0],outputPadding:Ce?Array.from(u().subarray(Ce>>>0,je>>>0)):[],outputShape:Le?Array.from(u().subarray(Le>>>0,H>>>0)):[],activation:st(Ne)})},874155:(c,w,$,k,T,B,G,Z,le,fe,Ce,je,Le,H)=>{f.jb("ConvTranspose",c,{format:Z?"NHWC":"NCHW",autoPad:w,dilations:Array.from(u().subarray($>>>0,2+($>>>0)>>>0)),group:k,kernelShape:Array.from(u().subarray(T>>>0,2+(T>>>0)>>>0)),pads:Array.from(u().subarray(B>>>0,4+(B>>>0)>>>0)),strides:Array.from(u().subarray(G>>>0,2+(G>>>0)>>>0)),wIsConst:()=>!!i()[le>>>0],outputPadding:fe?Array.from(u().subarray(fe>>>0,Ce>>>0)):[],outputShape:je?Array.from(u().subarray(je>>>0,Le>>>0)):[],activation:st(H)})},874720:(c,w,$,k,T,B,G,Z,le,fe,Ce,je,Le,H,Ne)=>{f.jb("ConvTranspose",c,{format:le?"NHWC":"NCHW",autoPad:w,dilations:[$],group:k,kernelShape:[T],pads:[B,G],strides:[Z],wIsConst:()=>!!i()[fe>>>0],outputPadding:Ce?Array.from(u().subarray(Ce>>>0,je>>>0)):[],outputShape:Le?Array.from(u().subarray(Le>>>0,H>>>0)):[],activation:st(Ne)})},875121:(c,w,$,k,T,B,G,Z,le,fe,Ce,je,Le,H)=>{f.jb("ConvTranspose",c,{format:Z?"NHWC":"NCHW",autoPad:w,dilations:Array.from(u().subarray($>>>0,2+($>>>0)>>>0)),group:k,kernelShape:Array.from(u().subarray(T>>>0,2+(T>>>0)>>>0)),pads:Array.from(u().subarray(B>>>0,4+(B>>>0)>>>0)),strides:Array.from(u().subarray(G>>>0,2+(G>>>0)>>>0)),wIsConst:()=>!!i()[le>>>0],outputPadding:fe?Array.from(u().subarray(fe>>>0,Ce>>>0)):[],outputShape:je?Array.from(u().subarray(je>>>0,Le>>>0)):[],activation:st(H)})},875686:(c,w)=>{f.jb("GlobalAveragePool",c,{format:w?"NHWC":"NCHW"})},875777:(c,w,$,k,T,B,G,Z,le,fe,Ce,je,Le,H)=>{f.jb("AveragePool",c,{format:H?"NHWC":"NCHW",auto_pad:w,ceil_mode:$,count_include_pad:k,storage_order:T,dilations:B?Array.from(u().subarray(B>>>0,G>>>0)):[],kernel_shape:Z?Array.from(u().subarray(Z>>>0,le>>>0)):[],pads:fe?Array.from(u().subarray(fe>>>0,Ce>>>0)):[],strides:je?Array.from(u().subarray(je>>>0,Le>>>0)):[]})},876192:(c,w)=>{f.jb("GlobalAveragePool",c,{format:w?"NHWC":"NCHW"})},876283:(c,w,$,k,T,B,G,Z,le,fe,Ce,je,Le,H)=>{f.jb("AveragePool",c,{format:H?"NHWC":"NCHW",auto_pad:w,ceil_mode:$,count_include_pad:k,storage_order:T,dilations:B?Array.from(u().subarray(B>>>0,G>>>0)):[],kernel_shape:Z?Array.from(u().subarray(Z>>>0,le>>>0)):[],pads:fe?Array.from(u().subarray(fe>>>0,Ce>>>0)):[],strides:je?Array.from(u().subarray(je>>>0,Le>>>0)):[]})},876698:(c,w)=>{f.jb("GlobalMaxPool",c,{format:w?"NHWC":"NCHW"})},876785:(c,w,$,k,T,B,G,Z,le,fe,Ce,je,Le,H)=>{f.jb("MaxPool",c,{format:H?"NHWC":"NCHW",auto_pad:w,ceil_mode:$,count_include_pad:k,storage_order:T,dilations:B?Array.from(u().subarray(B>>>0,G>>>0)):[],kernel_shape:Z?Array.from(u().subarray(Z>>>0,le>>>0)):[],pads:fe?Array.from(u().subarray(fe>>>0,Ce>>>0)):[],strides:je?Array.from(u().subarray(je>>>0,Le>>>0)):[]})},877196:(c,w)=>{f.jb("GlobalMaxPool",c,{format:w?"NHWC":"NCHW"})},877283:(c,w,$,k,T,B,G,Z,le,fe,Ce,je,Le,H)=>{f.jb("MaxPool",c,{format:H?"NHWC":"NCHW",auto_pad:w,ceil_mode:$,count_include_pad:k,storage_order:T,dilations:B?Array.from(u().subarray(B>>>0,G>>>0)):[],kernel_shape:Z?Array.from(u().subarray(Z>>>0,le>>>0)):[],pads:fe?Array.from(u().subarray(fe>>>0,Ce>>>0)):[],strides:je?Array.from(u().subarray(je>>>0,Le>>>0)):[]})},877694:(c,w,$,k,T)=>{f.jb("Gemm",c,{alpha:w,beta:$,transA:k,transB:T})},877798:c=>{f.jb("MatMul",c,void 0)},877852:(c,w,$,k)=>{f.jb("ArgMax",c,{keepDims:!!w,selectLastIndex:!!$,axis:k})},877960:(c,w,$,k)=>{f.jb("ArgMin",c,{keepDims:!!w,selectLastIndex:!!$,axis:k})},878068:(c,w)=>{f.jb("Softmax",c,{axis:w})},878131:(c,w)=>{f.jb("Concat",c,{axis:w})},878191:(c,w,$,k,T)=>{f.jb("Split",c,{axis:w,numOutputs:$,splitSizes:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},878331:c=>{f.jb("Expand",c,void 0)},878385:(c,w)=>{f.jb("Gather",c,{axis:Number(w)})},878456:(c,w)=>{f.jb("GatherElements",c,{axis:Number(w)})},878535:(c,w,$,k,T,B,G,Z,le,fe,Ce)=>{f.jb("Resize",c,{antialias:w,axes:$?Array.from(u().subarray($>>>0,k>>>0)):[],coordinateTransformMode:st(T),cubicCoeffA:B,excludeOutside:G,extrapolationValue:Z,keepAspectRatioPolicy:st(le),mode:st(fe),nearestMode:st(Ce)})},878881:(c,w,$,k,T,B,G)=>{f.jb("Slice",c,{starts:w?Array.from(u().subarray(w>>>0,$>>>0)):[],ends:k?Array.from(u().subarray(k>>>0,T>>>0)):[],axes:B?Array.from(u().subarray(B>>>0,G>>>0)):[]})},879097:c=>{f.jb("Tile",c,void 0)},879149:(c,w,$)=>{f.jb("InstanceNormalization",c,{epsilon:w,format:$?"NHWC":"NCHW"})},879263:(c,w,$)=>{f.jb("InstanceNormalization",c,{epsilon:w,format:$?"NHWC":"NCHW"})},879377:c=>{f.jb("Range",c,void 0)},879430:(c,w)=>{f.jb("Einsum",c,{equation:st(w)})},879511:(c,w,$,k,T)=>{f.jb("Pad",c,{mode:w,value:$,pads:k?Array.from(u().subarray(k>>>0,T>>>0)):[]})},879638:(c,w,$,k,T,B)=>{f.jb("BatchNormalization",c,{epsilon:w,momentum:$,spatial:!!T,trainingMode:!!k,format:B?"NHWC":"NCHW"})},879807:(c,w,$,k,T,B)=>{f.jb("BatchNormalization",c,{epsilon:w,momentum:$,spatial:!!T,trainingMode:!!k,format:B?"NHWC":"NCHW"})},879976:(c,w,$)=>{f.jb("CumSum",c,{exclusive:Number(w),reverse:Number($)})},880073:(c,w,$)=>{f.jb("DequantizeLinear",c,{axis:w,blockSize:$})},880163:(c,w,$,k,T,B,G,Z,le)=>{f.jb("Attention",c,{numHeads:w,isUnidirectional:$,maskFilterValue:k,scale:T,doRotary:B,qkvHiddenSizes:G?Array.from(u().subarray(Number(Z)>>>0,Number(Z)+G>>>0)):[],pastPresentShareBuffer:!!le})},880435:c=>{f.jb("BiasAdd",c,void 0)},880490:c=>{f.jb("BiasSplitGelu",c,void 0)},880551:c=>{f.jb("FastGelu",c,void 0)},880607:(c,w,$,k,T,B,G,Z,le,fe,Ce,je,Le,H,Ne,nt)=>{f.jb("Conv",c,{format:je?"NHWC":"NCHW",auto_pad:w,dilations:$?Array.from(u().subarray($>>>0,k>>>0)):[],group:T,kernel_shape:B?Array.from(u().subarray(B>>>0,G>>>0)):[],pads:Z?Array.from(u().subarray(Z>>>0,le>>>0)):[],strides:fe?Array.from(u().subarray(fe>>>0,Ce>>>0)):[],w_is_const:()=>!!i()[Le>>>0],activation:st(H),activation_params:Ne?Array.from(m().subarray(Ne>>>0,nt>>>0)):[]})},881103:c=>{f.jb("Gelu",c,void 0)},881155:(c,w,$,k)=>{f.jb("GroupQueryAttention",c,{numHeads:w,kvNumHeads:$,scale:k})},881268:(c,w,$,k)=>{f.jb("LayerNormalization",c,{axis:w,epsilon:$,simplified:!!k})},881379:(c,w,$,k)=>{f.jb("LayerNormalization",c,{axis:w,epsilon:$,simplified:!!k})},881490:(c,w,$,k,T,B)=>{f.jb("MatMulNBits",c,{k:w,n:$,accuracyLevel:k,bits:T,blockSize:B})},881617:(c,w,$,k,T,B)=>{f.jb("MultiHeadAttention",c,{numHeads:w,isUnidirectional:$,maskFilterValue:k,scale:T,doRotary:B})},881776:(c,w)=>{f.jb("QuickGelu",c,{alpha:w})},881840:(c,w,$,k,T)=>{f.jb("RotaryEmbedding",c,{interleaved:!!w,numHeads:$,rotaryEmbeddingDim:k,scale:T})},881979:(c,w,$)=>{f.jb("SkipLayerNormalization",c,{epsilon:w,simplified:!!$})},882081:(c,w,$)=>{f.jb("SkipLayerNormalization",c,{epsilon:w,simplified:!!$})},882183:(c,w,$,k)=>{f.jb("GatherBlockQuantized",c,{gatherAxis:w,quantizeAxis:$,blockSize:k})},882304:c=>{f.Zb(c)},882338:(c,w)=>f.bc(c,w,f.Eb.fc,f.Eb.errors)};function no(c,w,$){return bo(async()=>{await f.Xb(c,w,$)})}function ro(){return typeof wasmOffsetConverter<"u"}function Xr(c){this.name="ExitStatus",this.message=`Program terminated with exit(${c})`,this.status=c}var mr=c=>{c.terminate(),c.onmessage=()=>{}},Pa=c=>{Nn.length==0&&(er(),Jn(Nn[0]));var w=Nn.pop();if(!w)return 6;Sn.push(w),Wt[c.Ab]=w,w.Ab=c.Ab;var $={cmd:"run",start_routine:c.hc,arg:c.Qb,pthread_ptr:c.Ab};return w.postMessage($,c.mc),0},tn=0,Qe=(c,w,...$)=>{for(var k=2*$.length,T=gi(),B=sa(8*k),G=B>>>3,Z=0;Z<$.length;Z++){var le=$[Z];typeof le=="bigint"?(be[G+2*Z]=1n,be[G+2*Z+1]=le):(be[G+2*Z]=0n,g()[G+2*Z+1>>>0]=le)}return c=Lo(c,0,k,B,w),mi(T),c};function Ma(c){if(I)return Qe(0,1,c);if(q=c,!(0<tn)){for(var w of Sn)mr(w);for(w of Nn)mr(w);Nn=[],Sn=[],Wt=[],Me=!0}U(c,new Xr(c))}function Ba(c){if(I)return Qe(1,0,c);Ni(c)}var Ni=c=>{if(q=c,I)throw Ba(c),"unwind";Ma(c)},Nn=[],Sn=[],Li=[],Wt={},Ui=c=>{var w=c.Ab;delete Wt[w],Nn.push(c),Sn.splice(Sn.indexOf(c),1),c.Ab=0,Lt(w)};function ji(){Li.forEach(c=>c())}var Jn=c=>new Promise(w=>{c.onmessage=T=>{var B=(T=T.data).cmd;if(T.targetThread&&T.targetThread!=rr()){var G=Wt[T.targetThread];G?G.postMessage(T,T.transferList):de(`Internal error! Worker sent a message "${B}" to target pthread ${T.targetThread}, but that thread no longer exists!`)}else B==="checkMailbox"?rn():B==="spawnThread"?Pa(T):B==="cleanupThread"?Ui(Wt[T.thread]):B==="killThread"?(T=T.thread,B=Wt[T],delete Wt[T],mr(B),Lt(T),Sn.splice(Sn.indexOf(B),1),B.Ab=0):B==="cancelThread"?Wt[T.thread].postMessage({cmd:"cancel"}):B==="loaded"?(c.loaded=!0,w(c)):B==="alert"?alert(`Thread ${T.threadId}: ${T.text}`):T.target==="setimmediate"?c.postMessage(T):B==="callHandler"?f[T.handler](...T.args):B&&de(`worker sent an unknown command ${B}`)},c.onerror=T=>{throw de(`worker sent an error! ${T.filename}:${T.lineno}: ${T.message}`),T};var $,k=[];for($ of[])f.hasOwnProperty($)&&k.push($);c.postMessage({cmd:"load",handlers:k,wasmMemory:_e,wasmModule:Ee})});function er(){var c=new Worker(new URL(import.meta.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});Nn.push(c)}var Jr=c=>{for(;0<c.length;)c.shift()(f)},io=()=>{var c=rr(),w=h()[c+52>>>2>>>0];c=h()[c+56>>>2>>>0],ws(w,w-c),mi(w)},ao=(c,w)=>{tn=0,c=Uo(c,w),0<tn?q=c:Vn(c)};class so{constructor(w){this.Jb=w-24}}function oo(c,w,$){var k=new so(c>>>=0);throw w>>>=0,$>>>=0,h()[k.Jb+16>>>2>>>0]=0,h()[k.Jb+4>>>2>>>0]=w,h()[k.Jb+8>>>2>>>0]=$,c}function Fi(c,w,$,k){return I?Qe(2,1,c,w,$,k):Da(c,w,$,k)}function Da(c,w,$,k){if(c>>>=0,w>>>=0,$>>>=0,k>>>=0,A===void 0)return de("Current environment does not support SharedArrayBuffer, pthreads are not available!"),6;var T=[];return I&&T.length===0?Fi(c,w,$,k):(c={hc:$,Ab:c,Qb:k,mc:T},I?(c.Mb="spawnThread",postMessage(c,T),0):Pa(c))}var gr=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Wi=(c,w,$)=>{var k=(w>>>=0)+$;for($=w;c[$]&&!($>=k);)++$;if(16<$-w&&c.buffer&&gr)return gr.decode(c.buffer instanceof A?c.slice(w,$):c.subarray(w,$));for(k="";w<$;){var T=c[w++];if(128&T){var B=63&c[w++];if((224&T)==192)k+=String.fromCharCode((31&T)<<6|B);else{var G=63&c[w++];65536>(T=(240&T)==224?(15&T)<<12|B<<6|G:(7&T)<<18|B<<12|G<<6|63&c[w++])?k+=String.fromCharCode(T):(T-=65536,k+=String.fromCharCode(55296|T>>10,56320|1023&T))}}else k+=String.fromCharCode(T)}return k},st=(c,w)=>(c>>>=0)?Wi(s(),c,w):"";function uo(c,w,$){return I?Qe(3,1,c,w,$):0}function yr(c,w){if(I)return Qe(4,1,c,w)}var wr=c=>{for(var w=0,$=0;$<c.length;++$){var k=c.charCodeAt($);127>=k?w++:2047>=k?w+=2:55296<=k&&57343>=k?(w+=4,++$):w+=3}return w},ei=(c,w,$,k)=>{if(!(0<k))return 0;var T=$>>>=0;k=$+k-1;for(var B=0;B<c.length;++B){var G=c.charCodeAt(B);if(55296<=G&&57343>=G&&(G=65536+((1023&G)<<10)|1023&c.charCodeAt(++B)),127>=G){if($>=k)break;w[$++>>>0]=G}else{if(2047>=G){if($+1>=k)break;w[$++>>>0]=192|G>>6}else{if(65535>=G){if($+2>=k)break;w[$++>>>0]=224|G>>12}else{if($+3>=k)break;w[$++>>>0]=240|G>>18,w[$++>>>0]=128|G>>12&63}w[$++>>>0]=128|G>>6&63}w[$++>>>0]=128|63&G}}return w[$>>>0]=0,$-T},Ln=(c,w,$)=>ei(c,s(),w,$);function lo(c,w){if(I)return Qe(5,1,c,w)}function co(c,w,$){if(I)return Qe(6,1,c,w,$)}function fo(c,w,$){return I?Qe(7,1,c,w,$):0}function Un(c,w){if(I)return Qe(8,1,c,w)}function Na(c,w,$){if(I)return Qe(9,1,c,w,$)}function La(c,w,$,k){if(I)return Qe(10,1,c,w,$,k)}function po(c,w,$,k){if(I)return Qe(11,1,c,w,$,k)}function Ua(c,w,$,k){if(I)return Qe(12,1,c,w,$,k)}function ja(c){if(I)return Qe(13,1,c)}function Fa(c,w){if(I)return Qe(14,1,c,w)}function Wa(c,w,$){if(I)return Qe(15,1,c,w,$)}var ho,jn,ut=()=>{cn("")},fn=c=>{for(var w="";s()[c>>>0];)w+=ho[s()[c++>>>0]];return w},ti={},Vi={};function Vt(c,w,$={}){if(!("argPackAdvance"in w))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(k,T,B={}){var G=T.name;if(!k)throw new jn(`type "${G}" must have a positive integer typeid pointer`);if(Vi.hasOwnProperty(k)){if(B.Sb)return;throw new jn(`Cannot register type '${G}' twice`)}Vi[k]=T,ti.hasOwnProperty(k)&&(T=ti[k],delete ti[k],T.forEach(Z=>Z()))}(c,w,$)}var mo=(c,w,$)=>{switch(w){case 1:return $?k=>i()[k>>>0]:k=>s()[k>>>0];case 2:return $?k=>o()[k>>>1>>>0]:k=>d()[k>>>1>>>0];case 4:return $?k=>u()[k>>>2>>>0]:k=>h()[k>>>2>>>0];case 8:return $?k=>be[k>>>3]:k=>Ue[k>>>3];default:throw new TypeError(`invalid integer width (${w}): ${c}`)}};function go(c,w,$){$>>>=0,Vt(c>>>=0,{name:w=fn(w>>>0),fromWireType:k=>k,toWireType:function(k,T){if(typeof T!="bigint"&&typeof T!="number")throw T=T===null?"null":(k=typeof T)=="object"||k==="array"||k==="function"?T.toString():""+T,new TypeError(`Cannot convert "${T}" to ${this.name}`);return typeof T=="number"&&(T=BigInt(T)),T},argPackAdvance:nn,readValueFromPointer:mo(w,$,w.indexOf("u")==-1),Db:null})}var nn=8;function pn(c,w,$,k){Vt(c>>>=0,{name:w=fn(w>>>0),fromWireType:function(T){return!!T},toWireType:function(T,B){return B?$:k},argPackAdvance:nn,readValueFromPointer:function(T){return this.fromWireType(s()[T>>>0])},Db:null})}var Va=[],ht=[];function Ha(c){9<(c>>>=0)&&--ht[c+1]==0&&(ht[c]=void 0,Va.push(c))}var Ht=c=>{if(!c)throw new jn("Cannot use deleted val. handle = "+c);return ht[c]},qt=c=>{switch(c){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let w=Va.pop()||ht.length;return ht[w]=c,ht[w+1]=1,w}};function vr(c){return this.fromWireType(h()[c>>>2>>>0])}var Hi={name:"emscripten::val",fromWireType:c=>{var w=Ht(c);return Ha(c),w},toWireType:(c,w)=>qt(w),argPackAdvance:nn,readValueFromPointer:vr,Db:null};function ni(c){return Vt(c>>>0,Hi)}var qi=(c,w)=>{switch(w){case 4:return function($){return this.fromWireType(m()[$>>>2>>>0])};case 8:return function($){return this.fromWireType(g()[$>>>3>>>0])};default:throw new TypeError(`invalid float width (${w}): ${c}`)}};function ol(c,w,$){$>>>=0,Vt(c>>>=0,{name:w=fn(w>>>0),fromWireType:k=>k,toWireType:(k,T)=>T,argPackAdvance:nn,readValueFromPointer:qi(w,$),Db:null})}function ul(c,w,$,k,T){if(c>>>=0,$>>>=0,w=fn(w>>>0),T===-1&&(T=4294967295),T=Z=>Z,k===0){var B=32-8*$;T=Z=>Z<<B>>>B}var G=w.includes("unsigned")?function(Z,le){return le>>>0}:function(Z,le){return le};Vt(c,{name:w,fromWireType:T,toWireType:G,argPackAdvance:nn,readValueFromPointer:mo(w,$,k!==0),Db:null})}function qa(c,w,$){function k(B){var G=h()[B>>>2>>>0];return B=h()[B+4>>>2>>>0],new T(i().buffer,B,G)}var T=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][w];Vt(c>>>=0,{name:$=fn($>>>0),fromWireType:k,argPackAdvance:nn,readValueFromPointer:k},{Sb:!0})}function yo(c,w){c>>>=0;var $=(w=fn(w>>>0))==="std::string";Vt(c,{name:w,fromWireType:function(k){var T=h()[k>>>2>>>0],B=k+4;if($)for(var G=B,Z=0;Z<=T;++Z){var le=B+Z;if(Z==T||s()[le>>>0]==0){if(G=st(G,le-G),fe===void 0)var fe=G;else fe+="\0",fe+=G;G=le+1}}else{for(fe=Array(T),Z=0;Z<T;++Z)fe[Z]=String.fromCharCode(s()[B+Z>>>0]);fe=fe.join("")}return mn(k),fe},toWireType:function(k,T){T instanceof ArrayBuffer&&(T=new Uint8Array(T));var B=typeof T=="string";if(!(B||T instanceof Uint8Array||T instanceof Uint8ClampedArray||T instanceof Int8Array))throw new jn("Cannot pass non-string to std::string");var G=$&&B?wr(T):T.length,Z=aa(4+G+1),le=Z+4;if(h()[Z>>>2>>>0]=G,$&&B)Ln(T,le,G+1);else if(B)for(B=0;B<G;++B){var fe=T.charCodeAt(B);if(255<fe)throw mn(le),new jn("String has UTF-16 code units that do not fit in 8 bits");s()[le+B>>>0]=fe}else for(B=0;B<G;++B)s()[le+B>>>0]=T[B];return k!==null&&k.push(mn,Z),Z},argPackAdvance:nn,readValueFromPointer:vr,Db(k){mn(k)}})}var Gi=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,ri=(c,w)=>{for(var $=c>>1,k=$+w/2;!($>=k)&&d()[$>>>0];)++$;if(32<($<<=1)-c&&Gi)return Gi.decode(s().slice(c,$));for($="",k=0;!(k>=w/2);++k){var T=o()[c+2*k>>>1>>>0];if(T==0)break;$+=String.fromCharCode(T)}return $},ll=(c,w,$)=>{if($??($=2147483647),2>$)return 0;var k=w;$=($-=2)<2*c.length?$/2:c.length;for(var T=0;T<$;++T){var B=c.charCodeAt(T);o()[w>>>1>>>0]=B,w+=2}return o()[w>>>1>>>0]=0,w-k},Ga=c=>2*c.length,Ke=(c,w)=>{for(var $=0,k="";!($>=w/4);){var T=u()[c+4*$>>>2>>>0];if(T==0)break;++$,65536<=T?(T-=65536,k+=String.fromCharCode(55296|T>>10,56320|1023&T)):k+=String.fromCharCode(T)}return k},wo=(c,w,$)=>{if(w>>>=0,$??($=2147483647),4>$)return 0;var k=w;$=k+$-4;for(var T=0;T<c.length;++T){var B=c.charCodeAt(T);if(55296<=B&&57343>=B&&(B=65536+((1023&B)<<10)|1023&c.charCodeAt(++T)),u()[w>>>2>>>0]=B,(w+=4)+4>$)break}return u()[w>>>2>>>0]=0,w-k},vo=c=>{for(var w=0,$=0;$<c.length;++$){var k=c.charCodeAt($);55296<=k&&57343>=k&&++$,w+=4}return w};function Ka(c,w,$){if(c>>>=0,w>>>=0,$=fn($>>>=0),w===2)var k=ri,T=ll,B=Ga,G=Z=>d()[Z>>>1>>>0];else w===4&&(k=Ke,T=wo,B=vo,G=Z=>h()[Z>>>2>>>0]);Vt(c,{name:$,fromWireType:Z=>{for(var le,fe=h()[Z>>>2>>>0],Ce=Z+4,je=0;je<=fe;++je){var Le=Z+4+je*w;je!=fe&&G(Le)!=0||(Ce=k(Ce,Le-Ce),le===void 0?le=Ce:(le+="\0",le+=Ce),Ce=Le+w)}return mn(Z),le},toWireType:(Z,le)=>{if(typeof le!="string")throw new jn(`Cannot pass non-string to C++ string type ${$}`);var fe=B(le),Ce=aa(4+fe+w);return h()[Ce>>>2>>>0]=fe/w,T(le,Ce+4,fe+w),Z!==null&&Z.push(mn,Ce),Ce},argPackAdvance:nn,readValueFromPointer:vr,Db(Z){mn(Z)}})}function _o(c,w){Vt(c>>>=0,{Tb:!0,name:w=fn(w>>>0),argPackAdvance:0,fromWireType:()=>{},toWireType:()=>{}})}var $o=()=>1;function xo(c){gs(c>>>0,!b,1,!S,131072,!1),ji()}var Ki=c=>{if(!Me)try{if(c(),!(0<tn))try{I?Vn(q):Ni(q)}catch(w){w instanceof Xr||w=="unwind"||U(1,w)}}catch(w){w instanceof Xr||w=="unwind"||U(1,w)}};function _r(c){c>>>=0,typeof Atomics.nc=="function"&&(Atomics.nc(u(),c>>>2,c).value.then(rn),c+=128,Atomics.store(u(),c>>>2,1))}var rn=()=>{var c=rr();c&&(_r(c),Ki(ys))};function Fn(c,w){(c>>>=0)==w>>>0?setTimeout(rn):I?postMessage({targetThread:c,cmd:"checkMailbox"}):(c=Wt[c])&&c.postMessage({cmd:"checkMailbox"})}var hn=[];function ii(c,w,$,k,T){for(w>>>=0,k/=2,hn.length=k,$=T>>>0>>>3,T=0;T<k;T++)hn[T]=be[$+2*T]?be[$+2*T+1]:g()[$+2*T+1>>>0];return(w?Di[w]:Do[c])(...hn)}function ai(c){c>>>=0,I?postMessage({cmd:"cleanupThread",thread:c}):Ui(Wt[c])}function Wn(c){}var Qa=(c,w)=>{var $=Vi[c];if($===void 0)throw c=ia(c),$=fn(c),mn(c),new jn(`${w} has unknown type ${$}`);return $},Ya=(c,w,$)=>{var k=[];return c=c.toWireType(k,$),k.length&&(h()[w>>>2>>>0]=qt(k)),c};function si(c,w,$){return w>>>=0,$>>>=0,c=Ht(c>>>0),w=Qa(w,"emval::as"),Ya(w,$,c)}var Qi=c=>{try{c()}catch(w){cn(w)}},kn=0,Dt=null,Za=0,Yi=[],$r={},xr={},br=0,Sr=null,dl=[];function bo(c){return function(w){if(!Me){if(kn===0){var $=!1,k=!1;w((T=0)=>{if(!Me&&(Za=T,$=!0,k)){kn=2,Qi(()=>oa(Dt)),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.resume(),T=!1;try{var B=function(){var le=u()[Dt+8>>>2>>>0];return le=$e[xr[le]],--tn,le()}()}catch(le){B=le,T=!0}var G=!1;if(!Dt){var Z=Sr;Z&&(Sr=null,(T?Z.reject:Z.resolve)(B),G=!0)}if(T&&!G)throw B}}),k=!0,$||(kn=1,Dt=function(){var T=aa(65548),B=T+12;h()[T>>>2>>>0]=B,h()[T+4>>>2>>>0]=B+65536,B=Yi[0];var G=$r[B];return G===void 0&&(G=br++,$r[B]=G,xr[G]=B),B=G,u()[T+8>>>2>>>0]=B,T}(),typeof Browser<"u"&&Browser.Kb.Rb&&Browser.Kb.pause(),Qi(()=>jo(Dt)))}else kn===2?(kn=0,Qi(Tr),mn(Dt),Dt=null,dl.forEach(Ki)):cn(`invalid state: ${kn}`);return Za}}(w=>{c().then(w)})}function Xa(c){return c>>>=0,bo(()=>(c=Ht(c)).then(qt))}var tr=[];function Ja(c,w,$,k){return $>>>=0,k>>>=0,(c=tr[c>>>0])(null,w=Ht(w>>>0),$,k)}var So={},an=c=>{var w=So[c];return w===void 0?fn(c):w};function es(c,w,$,k,T){return $>>>=0,k>>>=0,T>>>=0,(c=tr[c>>>0])(w=Ht(w>>>0),w[$=an($)],k,T)}var oi=()=>typeof globalThis=="object"?globalThis:Function("return this")();function ko(c){return(c>>>=0)==0?qt(oi()):(c=an(c),qt(oi()[c]))}var Zi=c=>{var w=tr.length;return tr.push(c),w},Xi=(c,w)=>{for(var $=Array(c),k=0;k<c;++k)$[k]=Qa(h()[w+4*k>>>2>>>0],"parameter "+k);return $},ts=(c,w)=>Object.defineProperty(w,"name",{value:c});function Nt(c,w,$){var k=(w=Xi(c,w>>>0)).shift();c--;var T=`return function (obj, func, destructorsRef, args) {
`,B=0,G=[];$===0&&G.push("obj");for(var Z=["retType"],le=[k],fe=0;fe<c;++fe)G.push("arg"+fe),Z.push("argType"+fe),le.push(w[fe]),T+=`  var arg${fe} = argType${fe}.readValueFromPointer(args${B?"+"+B:""});
`,B+=w[fe].argPackAdvance;return T+=`  var rv = ${$===1?"new func":"func.call"}(${G.join(", ")});
`,k.Tb||(Z.push("emval_returnValue"),le.push(Ya),T+=`  return emval_returnValue(retType, destructorsRef, rv);
`),Z.push(T+`};
`),c=function(Ce){var je=Function;if(!(je instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof je} which is not a function`);var Le=ts(je.name||"unknownFunctionName",function(){});return Le.prototype=je.prototype,Le=new Le,(Ce=je.apply(Le,Ce))instanceof Object?Ce:Le}(Z)(...le),$=`methodCaller<(${w.map(Ce=>Ce.name).join(", ")}) => ${k.name}>`,Zi(ts($,c))}function kr(c){return c=an(c>>>0),qt(f[c])}function ns(c,w){return w>>>=0,c=Ht(c>>>0),w=Ht(w),qt(c[w])}function ui(c){9<(c>>>=0)&&(ht[c+1]+=1)}function cl(){return qt([])}function rs(c){c=Ht(c>>>0);for(var w=Array(c.length),$=0;$<c.length;$++)w[$]=c[$];return qt(w)}function is(c){return qt(an(c>>>0))}function li(){return qt({})}function Ji(c){for(var w=Ht(c>>>=0);w.length;){var $=w.pop();w.pop()($)}Ha(c)}function Eo(c,w,$){w>>>=0,$>>>=0,c=Ht(c>>>0),w=Ht(w),$=Ht($),c[w]=$}function fl(c,w){return w>>>=0,c=(c=Qa(c>>>0,"_emval_take_value")).readValueFromPointer(w),qt(c)}function pl(c,w){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),w>>>=0,c=new Date(1e3*c),u()[w>>>2>>>0]=c.getUTCSeconds(),u()[w+4>>>2>>>0]=c.getUTCMinutes(),u()[w+8>>>2>>>0]=c.getUTCHours(),u()[w+12>>>2>>>0]=c.getUTCDate(),u()[w+16>>>2>>>0]=c.getUTCMonth(),u()[w+20>>>2>>>0]=c.getUTCFullYear()-1900,u()[w+24>>>2>>>0]=c.getUTCDay(),c=(c.getTime()-Date.UTC(c.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,u()[w+28>>>2>>>0]=c}var Er=c=>c%4==0&&(c%100!=0||c%400==0),ea=[0,31,60,91,121,152,182,213,244,274,305,335],Co=[0,31,59,90,120,151,181,212,243,273,304,334];function hl(c,w){c=-9007199254740992>c||9007199254740992<c?NaN:Number(c),w>>>=0,c=new Date(1e3*c),u()[w>>>2>>>0]=c.getSeconds(),u()[w+4>>>2>>>0]=c.getMinutes(),u()[w+8>>>2>>>0]=c.getHours(),u()[w+12>>>2>>>0]=c.getDate(),u()[w+16>>>2>>>0]=c.getMonth(),u()[w+20>>>2>>>0]=c.getFullYear()-1900,u()[w+24>>>2>>>0]=c.getDay();var $=(Er(c.getFullYear())?ea:Co)[c.getMonth()]+c.getDate()-1|0;u()[w+28>>>2>>>0]=$,u()[w+36>>>2>>>0]=-60*c.getTimezoneOffset(),$=new Date(c.getFullYear(),6,1).getTimezoneOffset();var k=new Date(c.getFullYear(),0,1).getTimezoneOffset();c=0|($!=k&&c.getTimezoneOffset()==Math.min(k,$)),u()[w+32>>>2>>>0]=c}function ml(c){c>>>=0;var w=new Date(u()[c+20>>>2>>>0]+1900,u()[c+16>>>2>>>0],u()[c+12>>>2>>>0],u()[c+8>>>2>>>0],u()[c+4>>>2>>>0],u()[c>>>2>>>0],0),$=u()[c+32>>>2>>>0],k=w.getTimezoneOffset(),T=new Date(w.getFullYear(),6,1).getTimezoneOffset(),B=new Date(w.getFullYear(),0,1).getTimezoneOffset(),G=Math.min(B,T);return 0>$?u()[c+32>>>2>>>0]=+(T!=B&&G==k):0<$!=(G==k)&&(T=Math.max(B,T),w.setTime(w.getTime()+6e4*((0<$?G:T)-k))),u()[c+24>>>2>>>0]=w.getDay(),$=(Er(w.getFullYear())?ea:Co)[w.getMonth()]+w.getDate()-1|0,u()[c+28>>>2>>>0]=$,u()[c>>>2>>>0]=w.getSeconds(),u()[c+4>>>2>>>0]=w.getMinutes(),u()[c+8>>>2>>>0]=w.getHours(),u()[c+12>>>2>>>0]=w.getDate(),u()[c+16>>>2>>>0]=w.getMonth(),u()[c+20>>>2>>>0]=w.getYear(),c=w.getTime(),BigInt(isNaN(c)?-1:c/1e3)}function To(c,w,$,k,T,B,G){return I?Qe(16,1,c,w,$,k,T,B,G):-52}function Io(c,w,$,k,T,B){if(I)return Qe(17,1,c,w,$,k,T,B)}function zo(c,w,$,k){c>>>=0,w>>>=0,$>>>=0,k>>>=0;var T=new Date().getFullYear(),B=new Date(T,0,1),G=new Date(T,6,1);T=B.getTimezoneOffset();var Z=G.getTimezoneOffset(),le=Math.max(T,Z);h()[c>>>2>>>0]=60*le,u()[w>>>2>>>0]=+(T!=Z),B=(c=fe=>fe.toLocaleTimeString(void 0,{hour12:!1,timeZoneName:"short"}).split(" ")[1])(B),G=c(G),Z<T?(Ln(B,$,17),Ln(G,k,17)):(Ln(B,k,17),Ln(G,$,17))}var as=[],Ao=(c,w)=>{as.length=0;for(var $;$=s()[c++>>>0];){var k=$!=105;w+=(k&=$!=112)&&w%8?4:0,as.push($==112?h()[w>>>2>>>0]:$==106?be[w>>>3]:$==105?u()[w>>>2>>>0]:g()[w>>>3>>>0]),w+=k?8:4}return as};function gl(c,w,$){return c>>>=0,w=Ao(w>>>0,$>>>0),Di[c](...w)}function yl(c,w,$){return c>>>=0,w=Ao(w>>>0,$>>>0),Di[c](...w)}var ss=()=>{},wl=()=>Date.now();function vl(c,w){return de(st(c>>>0,w>>>0))}var Ro,Oo=()=>{throw tn+=1,"unwind"};function _l(){return 4294901760}Ro=()=>performance.timeOrigin+performance.now();var $l=()=>navigator.hardwareConcurrency;function xl(){return cn("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function bl(c){c>>>=0;var w=s().length;if(c<=w||4294901760<c)return!1;for(var $=1;4>=$;$*=2){var k=w*(1+.2/$);k=Math.min(k,c+100663296);var T=Math;k=Math.max(c,k);e:{T=(T.min.call(T,4294901760,k+(65536-k%65536)%65536)-_e.buffer.byteLength+65535)/65536;try{_e.grow(T),Ve();var B=1;break e}catch{}B=void 0}if(B)return!0}return!1}var ta=()=>(cn("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),di={},Po=c=>{c.forEach(w=>{ta()})};function os(){var c=Error().stack.toString().split(`
`);return c[0]=="Error"&&c.shift(),Po(c),di.Pb=ta(),di.ec=c,di.Pb}function ci(c,w,$){if(c>>>=0,w>>>=0,di.Pb==c)var k=di.ec;else(k=Error().stack.toString().split(`
`))[0]=="Error"&&k.shift(),Po(k);for(var T=3;k[T]&&ta()!=c;)++T;for(c=0;c<$&&k[c+T];++c)u()[w+4*c>>>2>>>0]=ta();return c}var us,na={},ls=()=>{if(!us){var c,w={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:F};for(c in na)na[c]===void 0?delete w[c]:w[c]=na[c];var $=[];for(c in w)$.push(`${c}=${w[c]}`);us=$}return us};function ds(c,w){if(I)return Qe(18,1,c,w);c>>>=0,w>>>=0;var $=0;return ls().forEach((k,T)=>{var B=w+$;for(T=h()[c+4*T>>>2>>>0]=B,B=0;B<k.length;++B)i()[T++>>>0]=k.charCodeAt(B);i()[T>>>0]=0,$+=k.length+1}),0}function cs(c,w){if(I)return Qe(19,1,c,w);c>>>=0,w>>>=0;var $=ls();h()[c>>>2>>>0]=$.length;var k=0;return $.forEach(T=>k+=T.length+1),h()[w>>>2>>>0]=k,0}function fs(c){return I?Qe(20,1,c):52}function nr(c,w,$,k){return I?Qe(21,1,c,w,$,k):52}function Mo(c,w,$,k){return I?Qe(22,1,c,w,$,k):70}var Sl=[null,[],[]];function Bo(c,w,$,k){if(I)return Qe(23,1,c,w,$,k);w>>>=0,$>>>=0,k>>>=0;for(var T=0,B=0;B<$;B++){var G=h()[w>>>2>>>0],Z=h()[w+4>>>2>>>0];w+=8;for(var le=0;le<Z;le++){var fe=s()[G+le>>>0],Ce=Sl[c];fe===0||fe===10?((c===1?he:de)(Wi(Ce,0)),Ce.length=0):Ce.push(fe)}T+=Z}return h()[k>>>2>>>0]=T,0}var ps=[31,29,31,30,31,30,31,31,30,31,30,31],hs=[31,28,31,30,31,30,31,31,30,31,30,31],fi=(c,w)=>{i().set(c,w>>>0)};function Cr(c,w,$,k){function T(H,Ne,nt){for(H=typeof H=="number"?H.toString():H||"";H.length<Ne;)H=nt[0]+H;return H}function B(H,Ne){return T(H,Ne,"0")}function G(H,Ne){function nt(Ir){return 0>Ir?-1:0<Ir?1:0}var ar;return(ar=nt(H.getFullYear()-Ne.getFullYear()))===0&&(ar=nt(H.getMonth()-Ne.getMonth()))===0&&(ar=nt(H.getDate()-Ne.getDate())),ar}function Z(H){switch(H.getDay()){case 0:return new Date(H.getFullYear()-1,11,29);case 1:return H;case 2:return new Date(H.getFullYear(),0,3);case 3:return new Date(H.getFullYear(),0,2);case 4:return new Date(H.getFullYear(),0,1);case 5:return new Date(H.getFullYear()-1,11,31);case 6:return new Date(H.getFullYear()-1,11,30)}}function le(H){var Ne=H.Bb;for(H=new Date(new Date(H.Cb+1900,0,1).getTime());0<Ne;){var nt=H.getMonth(),ar=(Er(H.getFullYear())?ps:hs)[nt];if(!(Ne>ar-H.getDate())){H.setDate(H.getDate()+Ne);break}Ne-=ar-H.getDate()+1,H.setDate(1),11>nt?H.setMonth(nt+1):(H.setMonth(0),H.setFullYear(H.getFullYear()+1))}return nt=new Date(H.getFullYear()+1,0,4),Ne=Z(new Date(H.getFullYear(),0,4)),nt=Z(nt),0>=G(Ne,H)?0>=G(nt,H)?H.getFullYear()+1:H.getFullYear():H.getFullYear()-1}c>>>=0,w>>>=0,$>>>=0,k>>>=0;var fe=h()[k+40>>>2>>>0];for(var Ce in k={kc:u()[k>>>2>>>0],jc:u()[k+4>>>2>>>0],Hb:u()[k+8>>>2>>>0],Lb:u()[k+12>>>2>>>0],Ib:u()[k+16>>>2>>>0],Cb:u()[k+20>>>2>>>0],ub:u()[k+24>>>2>>>0],Bb:u()[k+28>>>2>>>0],rc:u()[k+32>>>2>>>0],ic:u()[k+36>>>2>>>0],lc:fe?st(fe):""},$=st($),fe={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"})$=$.replace(new RegExp(Ce,"g"),fe[Ce]);var je="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Le="January February March April May June July August September October November December".split(" ");for(Ce in fe={"%a":H=>je[H.ub].substring(0,3),"%A":H=>je[H.ub],"%b":H=>Le[H.Ib].substring(0,3),"%B":H=>Le[H.Ib],"%C":H=>B((H.Cb+1900)/100|0,2),"%d":H=>B(H.Lb,2),"%e":H=>T(H.Lb,2," "),"%g":H=>le(H).toString().substring(2),"%G":le,"%H":H=>B(H.Hb,2),"%I":H=>((H=H.Hb)==0?H=12:12<H&&(H-=12),B(H,2)),"%j":H=>{for(var Ne=0,nt=0;nt<=H.Ib-1;Ne+=(Er(H.Cb+1900)?ps:hs)[nt++]);return B(H.Lb+Ne,3)},"%m":H=>B(H.Ib+1,2),"%M":H=>B(H.jc,2),"%n":()=>`
`,"%p":H=>0<=H.Hb&&12>H.Hb?"AM":"PM","%S":H=>B(H.kc,2),"%t":()=>"	","%u":H=>H.ub||7,"%U":H=>B(Math.floor((H.Bb+7-H.ub)/7),2),"%V":H=>{var Ne=Math.floor((H.Bb+7-(H.ub+6)%7)/7);if(2>=(H.ub+371-H.Bb-2)%7&&Ne++,Ne)Ne==53&&((nt=(H.ub+371-H.Bb)%7)==4||nt==3&&Er(H.Cb)||(Ne=1));else{Ne=52;var nt=(H.ub+7-H.Bb-1)%7;(nt==4||nt==5&&Er(H.Cb%400-1))&&Ne++}return B(Ne,2)},"%w":H=>H.ub,"%W":H=>B(Math.floor((H.Bb+7-(H.ub+6)%7)/7),2),"%y":H=>(H.Cb+1900).toString().substring(2),"%Y":H=>H.Cb+1900,"%z":H=>{var Ne=0<=(H=H.ic);return H=Math.abs(H)/60,(Ne?"+":"-")+("0000"+(H/60*100+H%60)).slice(-4)},"%Z":H=>H.lc,"%%":()=>"%"},$=$.replace(/%%/g,"\0\0"),fe)$.includes(Ce)&&($=$.replace(new RegExp(Ce,"g"),fe[Ce](k)));return Ce=function(H){var Ne=Array(wr(H)+1);return ei(H,Ne,0,Ne.length),Ne}($=$.replace(/\0\0/g,"%")),Ce.length>w?0:(fi(Ce,c),Ce.length-1)}function kl(c,w,$,k){return Cr(c>>>0,w>>>0,$>>>0,k>>>0)}I||function(){for(var c=f.numThreads-1;c--;)er();Bt.unshift(()=>{bt++,function(w){I?w():Promise.all(Nn.map(Jn)).then(w)}(()=>Zn())})}();for(var pi=Array(256),ra=0;256>ra;++ra)pi[ra]=String.fromCharCode(ra);ho=pi,jn=f.BindingError=class extends Error{constructor(c){super(c),this.name="BindingError"}},f.InternalError=class extends Error{constructor(c){super(c),this.name="InternalError"}},ht.push(0,1,void 0,1,null,1,!0,1,!1,1),f.count_emval_handles=()=>ht.length/2-5-Va.length;var Do=[Ma,Ba,Fi,uo,yr,lo,co,fo,Un,Na,La,po,Ua,ja,Fa,Wa,To,Io,ds,cs,fs,nr,Mo,Bo],$e=function(){function c($,k){return $e=$.exports,$e=function(){var T=$e,B={};for(let[G,Z]of Object.entries(T))B[G]=typeof Z=="function"?(...le)=>{Yi.push(G);try{return Z(...le)}finally{Me||(Yi.pop(),Dt&&kn===1&&Yi.length===0&&(kn=0,tn+=1,Qi(ir),typeof Fibers<"u"&&Fibers.sc()))}}:Z;return B}(),$e=function(){var T=$e,B=Z=>le=>Z(le)>>>0,G=Z=>()=>Z()>>>0;return(T=Object.assign({},T)).Ca=B(T.Ca),T.fb=G(T.fb),T.gb=B(T.gb),T.emscripten_main_runtime_thread_id=G(T.emscripten_main_runtime_thread_id),T.sb=B(T.sb),T.tb=G(T.tb),T}(),Li.push($e.ib),Xe.unshift($e.Ba),Ee=k,Zn(),$e}var w=Oa();if(bt++,f.instantiateWasm)try{return f.instantiateWasm(w,c)}catch($){de(`Module.instantiateWasm callback failed with error: ${$}`),v($)}return Pi||(Pi=f.locateFile?Mi("ort-wasm-simd-threaded.jsep.wasm")?"ort-wasm-simd-threaded.jsep.wasm":f.locateFile?f.locateFile("ort-wasm-simd-threaded.jsep.wasm",Q):Q+"ort-wasm-simd-threaded.jsep.wasm":new URL("/yolo-object-detection-onnxruntime-web/assets/ort-wasm-simd-threaded.jsep-Bj7LIWiD.wasm",import.meta.url).href),function($,k){var T=Pi;return se||typeof WebAssembly.instantiateStreaming!="function"||Mi(T)||hr(T)||typeof fetch!="function"?Bi(T,$,k):fetch(T,{credentials:"same-origin"}).then(B=>WebAssembly.instantiateStreaming(B,$).then(k,function(G){return de(`wasm streaming compile failed: ${G}`),de("falling back to ArrayBuffer instantiation"),Bi(T,$,k)}))}(w,function($){c($.instance,$.module)}).catch(v),{}}(),ia=c=>(ia=$e.Ca)(c),ms=()=>(ms=$e.Da)();f._OrtInit=(c,w)=>(f._OrtInit=$e.Ea)(c,w),f._OrtGetLastError=(c,w)=>(f._OrtGetLastError=$e.Fa)(c,w),f._OrtCreateSessionOptions=(c,w,$,k,T,B,G,Z,le,fe)=>(f._OrtCreateSessionOptions=$e.Ga)(c,w,$,k,T,B,G,Z,le,fe),f._OrtAppendExecutionProvider=(c,w)=>(f._OrtAppendExecutionProvider=$e.Ha)(c,w),f._OrtAddFreeDimensionOverride=(c,w,$)=>(f._OrtAddFreeDimensionOverride=$e.Ia)(c,w,$),f._OrtAddSessionConfigEntry=(c,w,$)=>(f._OrtAddSessionConfigEntry=$e.Ja)(c,w,$),f._OrtReleaseSessionOptions=c=>(f._OrtReleaseSessionOptions=$e.Ka)(c),f._OrtCreateSession=(c,w,$)=>(f._OrtCreateSession=$e.La)(c,w,$),f._OrtReleaseSession=c=>(f._OrtReleaseSession=$e.Ma)(c),f._OrtGetInputOutputCount=(c,w,$)=>(f._OrtGetInputOutputCount=$e.Na)(c,w,$),f._OrtGetInputName=(c,w)=>(f._OrtGetInputName=$e.Oa)(c,w),f._OrtGetOutputName=(c,w)=>(f._OrtGetOutputName=$e.Pa)(c,w),f._OrtFree=c=>(f._OrtFree=$e.Qa)(c),f._OrtCreateTensor=(c,w,$,k,T,B)=>(f._OrtCreateTensor=$e.Ra)(c,w,$,k,T,B),f._OrtGetTensorData=(c,w,$,k,T)=>(f._OrtGetTensorData=$e.Sa)(c,w,$,k,T),f._OrtReleaseTensor=c=>(f._OrtReleaseTensor=$e.Ta)(c),f._OrtCreateRunOptions=(c,w,$,k)=>(f._OrtCreateRunOptions=$e.Ua)(c,w,$,k),f._OrtAddRunConfigEntry=(c,w,$)=>(f._OrtAddRunConfigEntry=$e.Va)(c,w,$),f._OrtReleaseRunOptions=c=>(f._OrtReleaseRunOptions=$e.Wa)(c),f._OrtCreateBinding=c=>(f._OrtCreateBinding=$e.Xa)(c),f._OrtBindInput=(c,w,$)=>(f._OrtBindInput=$e.Ya)(c,w,$),f._OrtBindOutput=(c,w,$,k)=>(f._OrtBindOutput=$e.Za)(c,w,$,k),f._OrtClearBoundOutputs=c=>(f._OrtClearBoundOutputs=$e._a)(c),f._OrtReleaseBinding=c=>(f._OrtReleaseBinding=$e.$a)(c),f._OrtRunWithBinding=(c,w,$,k,T)=>(f._OrtRunWithBinding=$e.ab)(c,w,$,k,T),f._OrtRun=(c,w,$,k,T,B,G,Z)=>(f._OrtRun=$e.bb)(c,w,$,k,T,B,G,Z),f._OrtEndProfiling=c=>(f._OrtEndProfiling=$e.cb)(c),f._JsepOutput=(c,w,$)=>(f._JsepOutput=$e.db)(c,w,$),f._JsepGetNodeName=c=>(f._JsepGetNodeName=$e.eb)(c);var hi,rr=()=>(rr=$e.fb)(),aa=f._malloc=c=>(aa=f._malloc=$e.gb)(c),mn=f._free=c=>(mn=f._free=$e.hb)(c),gs=(c,w,$,k,T,B)=>(gs=$e.kb)(c,w,$,k,T,B),No=()=>(No=$e.lb)(),Lo=(c,w,$,k,T)=>(Lo=$e.mb)(c,w,$,k,T),Lt=c=>(Lt=$e.nb)(c),Vn=c=>(Vn=$e.ob)(c),ys=()=>(ys=$e.pb)(),ws=(c,w)=>(ws=$e.qb)(c,w),mi=c=>(mi=$e.rb)(c),sa=c=>(sa=$e.sb)(c),gi=()=>(gi=$e.tb)(),Uo=f.dynCall_ii=(c,w)=>(Uo=f.dynCall_ii=$e.vb)(c,w),jo=c=>(jo=$e.wb)(c),ir=()=>(ir=$e.xb)(),oa=c=>(oa=$e.yb)(c),Tr=()=>(Tr=$e.zb)();function ua(){0<bt||(I?(_(f),I||Jr(Xe),startWorker(f)):(Jr(Bt),0<bt||hi||(hi=!0,f.calledRun=!0,Me||(I||Jr(Xe),_(f),I||Jr(tt)))))}return f.___start_em_js=882450,f.___stop_em_js=882672,f.stackSave=()=>gi(),f.stackRestore=c=>mi(c),f.stackAlloc=c=>sa(c),f.UTF8ToString=st,f.stringToUTF8=Ln,f.lengthBytesUTF8=wr,en=function c(){hi||ua(),hi||(en=c)},ua(),x}),f0=Kd,((e=globalThis.self)==null?void 0:e.name)==="em-pthread"&&Kd()}),Ca,$h,xh,bh,Qd,p0,Sh,h0,il=re(()=>{var e,r;Jc(),Ca=import.meta.url??(typeof document<"u"?(e=document.currentScript)==null?void 0:e.src:typeof self<"u"?(r=self.location)==null?void 0:r.href:void 0),$h=typeof location>"u"?void 0:location.origin,xh=(i,s)=>{try{let o=s??Ca;return(o?new URL(i,o):new URL(i)).origin===$h}catch{return!1}},bh=async i=>{let s=await(await fetch(i,{credentials:"same-origin"})).blob();return URL.createObjectURL(s)},Qd=(F2(),Gu(l0)).default,p0=async()=>{if(!Ca)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(xh(Ca))return[void 0,Qd()];let i=await bh(Ca);return[i,Qd(i)]},Sh=(W2(),Gu(c0)).default,h0=async(i,s,o)=>[void 0,Sh]}),Yd,Pu,Ls,Zd,kh,Eh,ef,xt,Oi=re(()=>{il(),Pu=!1,Ls=!1,Zd=!1,kh=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Eh=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ef=async e=>{if(Pu)return Promise.resolve();if(Ls)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Zd)throw new Error("previous call to 'initializeWebAssembly()' failed.");Ls=!0;let r=e.initTimeout,i=e.numThreads;if(!Eh())throw new Error("WebAssembly SIMD is not supported in the current environment.");let s=kh();i>1&&!s&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let o=e.wasmPaths,d=typeof o=="string"?o:void 0,u=o==null?void 0:o.mjs,h=(u==null?void 0:u.href)??u,m=o==null?void 0:o.wasm,g=(m==null?void 0:m.href)??m,_=e.wasmBinary,[v,f]=await h0(h,d,i>1),x=!1,S=[];if(r>0&&S.push(new Promise(b=>{setTimeout(()=>{x=!0,b()},r)})),S.push(new Promise((b,I)=>{let A={numThreads:i};_?A.wasmBinary=_:(g||d)&&(A.locateFile=(C,O)=>g??(d??O)+C),f(A).then(C=>{Ls=!1,Pu=!0,Yd=C,b(),v&&URL.revokeObjectURL(v)},C=>{Ls=!1,Zd=!0,I(C)})})),await Promise.race(S),x)throw new Error(`WebAssembly backend initializing failed due to timeout: ${r}ms`)},xt=()=>{if(Pu&&Yd)return Yd;throw new Error("WebAssembly is not initialized yet.")}}),It,Yu,ct,tf=re(()=>{Oi(),It=(e,r)=>{let i=xt(),s=i.lengthBytesUTF8(e)+1,o=i._malloc(s);return i.stringToUTF8(e,o,s),r.push(o),o},Yu=(e,r,i,s)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([o,d])=>{let u=r?r+o:o;if(typeof d=="object")Yu(d,u+".",i,s);else if(typeof d=="string"||typeof d=="number")s(u,d.toString());else if(typeof d=="boolean")s(u,d?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof d}`)})},ct=e=>{let r=xt(),i=r.stackSave();try{let s=r.stackAlloc(8);r._OrtGetLastError(s,s+4);let o=r.HEAP32[s/4],d=r.HEAPU32[s/4+1],u=d?r.UTF8ToString(d):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${u}`)}finally{r.stackRestore(i)}}}),m0,V2=re(()=>{Oi(),tf(),m0=e=>{let r=xt(),i=0,s=[],o=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)o.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)o.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(o.terminate=!1);let d=0;return(e==null?void 0:e.tag)!==void 0&&(d=It(e.tag,s)),i=r._OrtCreateRunOptions(o.logSeverityLevel,o.logVerbosityLevel,!!o.terminate,d),i===0&&ct("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Yu(e.extra,"",new WeakSet,(u,h)=>{let m=It(u,s),g=It(h,s);r._OrtAddRunConfigEntry(i,m,g)!==0&&ct(`Can't set a run config entry: ${u} - ${h}.`)}),[i,s]}catch(d){throw i!==0&&r._OrtReleaseRunOptions(i),s.forEach(u=>r._free(u)),d}}}),Ch,Th,Ih,zh,g0,H2=re(()=>{Oi(),tf(),Ch=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},Th=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Ih=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let r=e.extra.session;r.use_ort_model_bytes_directly||(r.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},zh=(e,r,i)=>{for(let s of r){let o=typeof s=="string"?s:s.name;switch(o){case"webnn":if(o="WEBNN",typeof s!="string"){let u=s==null?void 0:s.deviceType;if(u){let h=It("deviceType",i),m=It(u,i);xt()._OrtAddSessionConfigEntry(e,h,m)!==0&&ct(`Can't set a session config entry: 'deviceType' - ${u}.`)}}break;case"webgpu":if(o="JS",typeof s!="string"){let u=s;if(u!=null&&u.preferredLayout){if(u.preferredLayout!=="NCHW"&&u.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${u.preferredLayout}`);let h=It("preferredLayout",i),m=It(u.preferredLayout,i);xt()._OrtAddSessionConfigEntry(e,h,m)!==0&&ct(`Can't set a session config entry: 'preferredLayout' - ${u.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${o}`)}let d=It(o,i);xt()._OrtAppendExecutionProvider(e,d)!==0&&ct(`Can't append execution provider: ${o}.`)}},g0=e=>{let r=xt(),i=0,s=[],o=e||{};Ih(o);try{let d=Ch(o.graphOptimizationLevel??"all"),u=Th(o.executionMode??"sequential"),h=typeof o.logId=="string"?It(o.logId,s):0,m=o.logSeverityLevel??2;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log serverity level is not valid: ${m}`);let g=o.logVerbosityLevel??0;if(!Number.isInteger(g)||g<0||g>4)throw new Error(`log verbosity level is not valid: ${g}`);let _=typeof o.optimizedModelFilePath=="string"?It(o.optimizedModelFilePath,s):0;if(i=r._OrtCreateSessionOptions(d,!!o.enableCpuMemArena,!!o.enableMemPattern,u,!!o.enableProfiling,0,h,m,g,_),i===0&&ct("Can't create session options."),o.executionProviders&&zh(i,o.executionProviders,s),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);let v=It("enableGraphCapture",s),f=It(o.enableGraphCapture.toString(),s);r._OrtAddSessionConfigEntry(i,v,f)!==0&&ct(`Can't set a session config entry: 'enableGraphCapture' - ${o.enableGraphCapture}.`)}if(o.freeDimensionOverrides)for(let[v,f]of Object.entries(o.freeDimensionOverrides)){if(typeof v!="string")throw new Error(`free dimension override name must be a string: ${v}`);if(typeof f!="number"||!Number.isInteger(f)||f<0)throw new Error(`free dimension override value must be a non-negative integer: ${f}`);let x=It(v,s);r._OrtAddFreeDimensionOverride(i,x,f)!==0&&ct(`Can't set a free dimension override: ${v} - ${f}.`)}return o.extra!==void 0&&Yu(o.extra,"",new WeakSet,(v,f)=>{let x=It(v,s),S=It(f,s);r._OrtAddSessionConfigEntry(i,x,S)!==0&&ct(`Can't set a session config entry: ${v} - ${f}.`)}),[i,s]}catch(d){throw i!==0&&r._OrtReleaseSessionOptions(i),s.forEach(u=>r._free(u)),d}}}),Qs,Ri,Ia,nf,Zu,rf,af,Oc,Re=re(()=>{Qs=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Ri=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Ia=(e,r)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],s=typeof r=="number"?r:r.reduce((o,d)=>o*d,1);return i>0?Math.ceil(s*i):void 0},nf=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Zu=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},rf=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",af=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool",Oc=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),sf,y0=re(()=>{Jc(),sf=async e=>{if(typeof e=="string"){let r=await fetch(e);if(!r.ok)throw new Error(`failed to load external data file: ${e}`);let i=r.headers.get("Content-Length"),s=i?parseInt(i,10):0;if(s<1073741824)return new Uint8Array(await r.arrayBuffer());{if(!r.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let o=r.body.getReader(),d;try{d=new ArrayBuffer(s)}catch(h){if(h instanceof RangeError){let m=Math.ceil(s/65536);d=new WebAssembly.Memory({initial:m,maximum:m}).buffer}else throw h}let u=0;for(;;){let{done:h,value:m}=await o.read();if(h)break;let g=m.byteLength;new Uint8Array(d,u,g).set(m),u+=g}return new Uint8Array(d,0,s)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Ah,Rh,Oh,Ph,of,Mh,Ye,Yn=re(()=>{Re(),Ah=["V","I","W","E","F"],Rh=(e,r)=>{console.log(`[${Ah[e]},${new Date().toISOString()}]${r}`)},of=(e,r)=>{Oh=e,Ph=r},Mh=(e,r)=>{let i=Zu(e),s=Zu(Oh);i>=s&&Rh(i,typeof r=="function"?r():r)},Ye=(...e)=>{Ph&&Mh(...e)}}),uf,w0=re(()=>{Re(),uf=(e,r)=>new(nf(r))(e)}),lf=re(()=>{}),Xd,Mu,Bu,Bh,Dh,Jd,Pc,Nh,v0,q2=re(()=>{Yn(),lf(),Xd=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Mu=[],Bu=e=>Math.ceil(e/16)*16,Bh=e=>{for(let r=0;r<Mu.length;r++){let i=Mu[r];if(e<=i)return i}return Math.ceil(e/16)*16},Dh=1,Jd=()=>Dh++,Pc=async(e,r,i,s)=>{let o=Bu(i),d=e.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let u=e.getCommandEncoder();e.endComputePass(),u.copyBufferToBuffer(r,0,d,0,o),e.flush(),await d.mapAsync(GPUMapMode.READ);let h=d.getMappedRange();if(s){let m=s();return m.set(new Uint8Array(h,0,i)),m}else return new Uint8Array(h.slice(0,i))}finally{d.destroy()}},Nh=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersForUploadingPending=[],this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[r]of Xd)Mu.push(r),this.freeBuffers.set(r,[]),this.freeUniformBuffers.set(r,[])}upload(e,r){let i=r.buffer,s=r.byteOffset,o=r.byteLength,d=Bu(o),u=this.storageCache.get(e);if(!u)throw new Error("gpu data for uploading does not exist");if(u.originalSize!==o)throw new Error(`inconsistent data size. gpu data size=${u.originalSize}, data size=${o}`);let h=this.backend.device.createBuffer({mappedAtCreation:!0,size:d,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),m=h.getMappedRange();new Uint8Array(m).set(new Uint8Array(i,s,o)),h.unmap();let g=this.backend.getCommandEncoder();this.backend.endComputePass(),g.copyBufferToBuffer(h,0,u.gpuData.buffer,0,d),Ye("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`),this.buffersForUploadingPending.push(h)}memcpy(e,r){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let s=this.storageCache.get(r);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");let o=Bu(i.originalSize),d=this.backend.getCommandEncoder();this.backend.endComputePass(),d.copyBufferToBuffer(i.gpuData.buffer,0,s.gpuData.buffer,0,o)}registerExternalBuffer(e,r,i){let s;if(i){if(s=i[0],e===i[1])return Ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=Jd();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:e},originalSize:r}),Ye("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, registered.`),s}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Ye("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=Bh(e),s,o=(r&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,d=(r&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(o||d){let h=(o?this.freeBuffers:this.freeUniformBuffers).get(i);h?h.length>0?s=h.pop():s=this.backend.device.createBuffer({size:i,usage:r}):s=this.backend.device.createBuffer({size:i,usage:r})}else s=this.backend.device.createBuffer({size:i,usage:r});let u={id:Jd(),type:0,buffer:s};return this.storageCache.set(u.id,{gpuData:u,originalSize:e}),Ye("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${u.id}`),u}get(e){var r;return(r=this.storageCache.get(e))==null?void 0:r.gpuData}release(e){let r=this.storageCache.get(e);if(!r)throw new Error("releasing data does not exist");return Ye("verbose",()=>`[WebGPU] GpuDataManager.release(id=${e}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(e),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,r){let i=this.storageCache.get(e);if(!i)throw new Error("data does not exist");await Pc(this.backend,i.gpuData.buffer,i.originalSize,r)}refreshPendingBuffers(){for(let e of this.buffersForUploadingPending)e.destroy();if(this.buffersForUploadingPending=[],this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let r=Xd.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let r of this.buffersPending)e.push(r);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onReleaseSession(e){let r=this.capturedPendingBuffers.get(e);r&&(r.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e))}},v0=(...e)=>new Nh(...e)}),Lh,Ze,gt=re(()=>{Lh=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ze=e=>new Lh(e)}),Uh,Aa,K,Xu,_0,$0,x0,Be=re(()=>{Uh=class{static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},Aa=class{static calcShape(e,r,i=!1){let s=e.length,o=r.length;if(s===0)return r;if(o===0)return e;let d=Math.max(e.length,r.length),u=new Array(d);if(i){if(s<2||o<2)return;let h=Uh.calcMatMulShape([e[s-2],e[s-1]],[r[o-2],r[o-1]]);if(h===void 0)return;[u[d-2],u[d-1]]=h}for(let h=i?3:1;h<=d;h++){let m=s-h<0?1:e[s-h],g=o-h<0?1:r[o-h];if(m!==g&&m>1&&g>1)return;let _=Math.max(m,g);if(m&&g)u[d-h]=Math.max(m,g);else{if(_>1)return;u[d-h]=0}}return u}static isValidBroadcast(e,r){let i=e.length,s=r.length;if(i>s)return!1;for(let o=1;o<=i;o++)if(e[i-o]!==1&&e[i-o]!==r[s-o])return!1;return!0}},K=class Hu{static size(r){return Hu.getSizeFromDimensionRange(r,0,r.length)}static convertShape(r,i=4){let s=r.length;if(s===0)return[];let o=new Array(s),d=s-1;for(;d>=0;){if(r[d]%i===0){o[d]=r[d]/i;break}if(i%r[d]!==0)throw new Error("cannot convert shape");o[d]=1,i/=r[d],d--}for(d--;d>=0;d--)o[d]=r[d];return o}static sizeFromDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${r.length} dimensions.`);return Hu.getSizeFromDimensionRange(r,i,r.length)}static sizeToDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${r.length} dimensions.`);return Hu.getSizeFromDimensionRange(r,0,i)}static getSizeFromDimensionRange(r,i,s){let o=1;for(let d=i;d<s;d++){if(r[d]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");o*=r[d]}return o}static computeStrides(r){let i=r.length;if(i===0)return[];if(i===1)return[1];let s=new Array(i);s[i-1]=1,s[i-2]=r[i-1];for(let o=i-3;o>=0;--o)s[o]=s[o+1]*r[o+1];return s}static normalizeAxis(r,i){if(r<-i&&r>=i)throw new Error("unsupported axis for this operation.");return r<0?r+i:r}static normalizeAxes(r,i){return r.map(s=>this.normalizeAxis(s,i??r.length))}static sortBasedOnPerm(r,i){return i?i.map(s=>r[s]):r.slice().reverse()}static padShape(r,i){let s=r.length;return r.map((o,d)=>o+i[d]+i[d+s])}static areEqual(r,i){return r.length!==i.length?!1:r.every((s,o)=>s===i[o])}},Xu=class Ys{static adjustPoolAttributes(r,i,s,o,d,u){if(!r&&s.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(r)for(let h=0;h<i.length-2;h++)h>=s.length?s.push(i[h+2]):s[h]=i[h+2];for(let h=0;h<s.length;h++)if(h<o.length){if(o[h]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let h=0;h<s.length;h++)if(h<d.length){if(d[h]<0)throw new Error("dilations should be greater than or equal to 1")}else d.push(1);for(let h=0;h<s.length*2;h++)if(h<u.length){if(u[h]<0)throw new Error("pad should be greater than or equal to 1")}else u.push(0);for(let h=0;h<s.length;h++){if(s[h]<=0)throw new Error("kernel shapes need to be greater than 0");if(u[h]>=s[h]||u[h+s.length]>=s[h])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(r,i,s,o,d,u,h){if(h){if(d.length!==2*(r.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==r.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==r.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let m=0;m<r.length-2;m++)Ys.adjustPadAndReturnShape(r[m+(u?1:2)],i[m],s[m],o[m],d,m,m+r.length-2,h)}}static computePoolOutputShape(r,i,s,o,d,u,h){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let m=[i[0],i[1]];return Ys.computeShapeHelper(r,i,m,s,o,d,u,h),m}static computeConvOutputShape(r,i,s,o,d,u,h){if(r.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let m=[r[0],i[0]];return Ys.computeShapeHelper(!1,r,m,s,o,d,u,h),m}static computeShapeHelper(r,i,s,o,d,u,h,m){if(r)for(let g=0;g<i.length-2;g++)s.push(1);else for(let g=0;g<i.length-2;g++)s.push(Ys.adjustPadAndReturnShape(i[g+2],o[g],d[g],u[g],h,g,g+i.length-2,m))}static adjustPadAndReturnShape(r,i,s,o,d,u,h,m){let g=s*(o-1)+1;if(m&&m!=="NOTSET")switch(m){case"VALID":return d[u]=0,d[h]=0,Math.floor((r-g)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(s!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let _=((r+i-1)/i-1)*i+o-r;return d[u]=Math.floor(m==="SAME_LOWER"?(_+1)/2:_/2),d[h]=_-d[u],Math.floor((r+_-o)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((r+d[u]+d[h]-g)/i+1)}},_0=class{static getShapeOfGemmResult(e,r,i,s,o){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let d,u,h;r?(d=e[1],u=e[0]):(d=e[0],u=e[1]);let m=-1;if(s?(h=i[0],m=1):(h=i[1],m=0),i[m]!==u)throw new Error("dimension mismatch");if(d<=0||h<=0||u<=0)throw new Error("invalid shape specified");if(o&&!Aa.isValidBroadcast(o,[d,h]))throw new Error("gemm: invalid bias shape for broadcast");return[d,h,u]}},$0=-34028234663852886e22,x0=34028234663852886e22}),Ra,Du,vt,Pt,ge,pt,Mc,za,qr,ve,Nu,Y,Se,df,jh,b0,Js,De=re(()=>{Re(),Be(),Ra=64,Du=(e,r)=>{if(r===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(e){case 10:return r>1?`vec${r}<f16>`:"f16";case 1:return r>1?`vec${r}<f32>`:"f32";case 6:return r>1?`vec${r}<i32>`:"i32";case 12:return r>1?`vec${r}<u32>`:"u32";case 7:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(r!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},vt=(e,r=1)=>{let i=Du(e,r);return typeof i=="string"?i:i[0]},Pt=(e,r=1)=>{let i=Du(e,r);return typeof i=="string"?i:i[1]},ge=(...e)=>{let r=[];return e.forEach(i=>{i.length!==0&&r.push({type:12,data:i},{type:12,data:K.computeStrides(i)})}),r},pt=e=>e%4===0?4:e%2===0?2:1,Mc=(e="f32",r,i="0")=>!r||r===1?`${e}(${i})`:`vec${r}<${e}>(${i})`,za=(e,r,i)=>e==="f32"?i:r===1?`f32(${i})`:`vec${r}<f32>(${i})`,qr=(e,r)=>r===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:r===2?`(${e}.x + ${e}.y)`:r===3?`(${e}.x + ${e}.y + ${e}.z)`:e,ve=(e,r,i,s)=>e.startsWith("uniforms.")&&i>4?typeof r=="string"?s==="f16"?`${e}[(${r}) / 8][(${r}) % 8 / 4][(${r}) % 8 % 4]`:`${e}[(${r}) / 4][(${r}) % 4]`:s==="f16"?`${e}[${Math.floor(r/8)}][${Math.floor(r%8/4)}][${r%8%4}]`:`${e}[${Math.floor(r/4)}][${r%4}]`:i>1?`${e}[${r}]`:e,Nu=(e,r,i,s,o)=>{let d=typeof i=="number",u=d?i:i.length,h=[...new Array(u).keys()],m=u<2?"u32":u<=4?`vec${u}<u32>`:`array<u32, ${u}>`,g=Du(r,o),_=typeof g=="string"?g:g[1],v=typeof g=="string"?g:g[0],f={indices:m,value:_,storage:v,tensor:r},x=z=>typeof z=="string"?z:`${z}u`,S={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},b=d?"uniforms.":"",I=`${b}${e}_shape`,A=`${b}${e}_strides`,C="";for(let z=0;z<u-1;z++)C+=`
    let dim${z} = current / ${ve(A,z,u)};
    let rest${z} = current % ${ve(A,z,u)};
    indices[${z}] = dim${z};
    current = rest${z};
    `;C+=`indices[${u-1}] = current;`;let O=u<2?"":`
  fn o2i_${e}(offset: u32) -> ${f.indices} {
    var indices: ${f.indices};
    var current = offset;
    ${C}
    return indices;
  }`,R=z=>(S.offsetToIndices=!0,u<2?z:`o2i_${e}(${z})`),M=[];if(u>=2)for(let z=u-1;z>=0;z--)M.push(`${ve(A,z,u)} * (indices[${z}])`);let F=u<2?"":`
  fn i2o_${e}(indices: ${f.indices}) -> u32 {
    return ${M.join("+")};
  }`,U=z=>(S.indicesToOffset=!0,u<2?z:`i2o_${e}(${z})`),Q=(...z)=>u===0?"0u":`${f.indices}(${z.map(x).join(",")})`,se=(z,N)=>u<2?`${z}`:`${ve(z,N,u)}`,ue=(z,N,ie)=>u<2?`${z}=${ie};`:`${ve(z,N,u)}=${ie};`,we={},he=(z,N)=>{S.broadcastedIndicesToOffset=!0;let ie=`${N.name}broadcastedIndicesTo${e}Offset`;if(ie in we)return`${ie}(${z})`;let ee=[];for(let ce=u-1;ce>=0;ce--){let be=N.indicesGet("outputIndices",ce+N.rank-u);ee.push(`${se(A,ce)} * (${be} % ${se(I,ce)})`)}return we[ie]=`fn ${ie}(outputIndices: ${N.type.indices}) -> u32 {
             return ${ee.length>0?ee.join("+"):"0u"};
           }`,`${ie}(${z})`},de=(z,N)=>(()=>{if(f.storage===f.value)return`${e}[${z}]=${N};`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`${e}[${z}]=vec2<u32>(u32(${N}), select(0u, 0xFFFFFFFFu, ${N} < 0));`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`${e}[${z}]=vec2<u32>(u32(${N}), 0u);`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`${e}[${z}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${N}));`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),Te=z=>(()=>{if(f.storage===f.value)return`${e}[${z}]`;if(f.storage==="vec2<u32>"&&f.value==="i32")return`i32(${e}[${z}].x)`;if(f.storage==="vec2<u32>"&&f.value==="u32")return`u32(${e}[${z}].x)`;if(f.storage==="u32"&&f.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${z}] & 0xFFu), bool(${e}[${z}] & 0xFF00u), bool(${e}[${z}] & 0xFF0000u), bool(${e}[${z}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${f.storage} and value type ${f.value} yet`)})(),Pe=u<2?"":`
  fn get_${e}ByIndices(indices: ${f.indices}) -> ${_} {
    return ${Te(`i2o_${e}(indices)`)};
  }`,_e=u<2?"":(()=>{let z=h.map(ie=>`d${ie}: u32`).join(", "),N=h.map(ie=>`d${ie}`).join(", ");return`
  fn get_${e}(${z}) -> ${_} {
    return get_${e}ByIndices(${Q(N)});
  }`})(),Ee=(...z)=>{if(z.length!==u)throw new Error(`indices length must be ${u}`);let N=z.map(x).join(",");return u===0?Te("0u"):u===1?Te(N[0]):(S.get=!0,S.getByIndices=!0,S.indicesToOffset=!0,`get_${e}(${N})`)},q=z=>u<2?Te(z):(S.getByIndices=!0,S.indicesToOffset=!0,`get_${e}ByIndices(${z})`),X=u<2?"":`
  fn set_${e}ByIndices(indices: ${f.indices}, value: ${_}) {
    ${de(`i2o_${e}(indices)`,"value")}
  }`,J=u<2?"":(()=>{let z=h.map(ie=>`d${ie}: u32`).join(", "),N=h.map(ie=>`d${ie}`).join(", ");return`
  fn set_${e}(${z}, value: ${_}) {
    set_${e}ByIndices(${Q(N)}, value);
  }`})();return{impl:()=>{let z=[],N=!1;return S.offsetToIndices&&(z.push(O),N=!0),S.indicesToOffset&&(z.push(F),N=!0),S.broadcastedIndicesToOffset&&(Object.values(we).forEach(ie=>z.push(ie)),N=!0),S.set&&(z.push(J),N=!0),S.setByIndices&&(z.push(X),N=!0),S.get&&(z.push(_e),N=!0),S.getByIndices&&(z.push(Pe),N=!0),!d&&N&&z.unshift(`const ${I} = ${f.indices}(${i.join(",")});`,`const ${A} = ${f.indices}(${K.computeStrides(i).join(",")});`),z.join(`
`)},type:f,offsetToIndices:R,indicesToOffset:U,broadcastedIndicesToOffset:he,indices:Q,indicesGet:se,indicesSet:ue,set:(...z)=>{if(z.length!==u+1)throw new Error(`indices length must be ${u}`);let N=z[u];if(typeof N!="string")throw new Error("value must be string");let ie=z.slice(0,u).map(x).join(",");return u===0?de("0u",N):u===1?de(ie[0],N):(S.set=!0,S.setByIndices=!0,S.indicesToOffset=!0,`set_${e}(${ie}, ${N})`)},setByOffset:de,setByIndices:(z,N)=>u<2?de(z,N):(S.setByIndices=!0,S.indicesToOffset=!0,`set_${e}ByIndices(${z}, ${N});`),get:Ee,getByOffset:Te,getByIndices:q,usage:s,name:e,strides:A,shape:I,rank:u}},Y=(e,r,i,s=1)=>Nu(e,r,i,"input",s),Se=(e,r,i,s=1)=>Nu(e,r,i,"output",s),df=(e,r,i,s=1)=>Nu(e,r,i,"internal",s),jh=class{constructor(e,r){this.normalizedDispatchGroup=e,this.limits=r,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Ra){let r=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],s=typeof e=="number"?1:e[2];if(r>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(r*i*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let o=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,d=o?`@builtin(global_invocation_id) global_id : vec3<u32>,
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
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=r=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(r)];return this.uniforms.map(r=>[e(r.type),r.length??1])}},b0=(e,r)=>new jh(e,r),Js=(e,r)=>{let i=e.length,s=[];for(let o=0;o<i;o++){let d=i-1-o,u=e[d]||1;(r[r.length-1-o]||1)>1&&u===1&&s.unshift(d)}return s}}),Fh,ec,Wh,Vh,Hh,dn,S0,k0,Yr=re(()=>{Re(),Be(),gt(),De(),Fh=e=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.")},ec=(e,r)=>r&&r.length!==e?[...new Array(e).keys()].reverse():r,Wh=(e,r)=>K.sortBasedOnPerm(e,ec(e.length,r)),Vh=(e,r,i,s)=>{let o=`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let d=0;d<r;++d)o+=i.indicesSet("a",e[d],`i[${d}]`);return o+="return a;}"},Hh=(e,r)=>{let i=[],s=[];for(let o=0;o<e.length;++o)e[o]!==1&&i.push(e[o]),e[r[o]]!==1&&s.push(r[o]);return{newShape:i,newPerm:s}},dn=(e,r)=>{let i=e.dataType,s=e.dims.length,o=ec(s,r),d=Wh(e.dims,o),{newShape:u,newPerm:h}=Hh(e.dims,o),m=K.areEqual(h,[2,3,1]),g=K.areEqual(h,[3,1,2]),_=u.length===2&&h[0]>h[1]||m||g,v=_?u:e.dims,f=d;_&&(v=m?[u[0],u[1]*u[2]]:g?[u[0]*u[1],u[2]]:u,f=[v[1],v[0]]);let x=Y("a",i,v.length),S=Se("output",i,f.length),b=16,I;return _?I=A=>`
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
  }`:I=A=>`
  ${A.registerUniform("output_size","u32").declareVariables(x,S)}

  ${Vh(o,s,x,S)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`,{name:_?"TransposeShared":"Transpose",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>{let A=K.size(d);return{outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:_?{x:Math.ceil(f[1]/b),y:Math.ceil(f[0]/b)}:{x:Math.ceil(A/64)},programUniforms:[{type:12,data:A},...ge(v,f)]}},getShaderSource:I}},S0=(e,r)=>{Fh(e.inputs),e.compute(dn(e.inputs[0],r.perm))},k0=e=>Ze({perm:e.perm})}),qh,Gh,Kh,Qh,Yh,Zh,Xh,Jh,em,tm,An,E0,C0,T0,I0,z0,A0,R0,O0,P0,M0,G2=re(()=>{Re(),Be(),De(),cf(),Yr(),qh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Gh={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Kh={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Qh={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Yh=(e,r)=>{let i=[];for(let s=r-e;s<r;++s)i.push(s);return i},Zh=(e,r)=>{let i=[],s=e.length;for(let d=0;d<s;d++)r.indexOf(d)===-1&&i.push(e[d]);let o=r.map(d=>e[d]);return[i,o]},Xh=(e,r)=>{let i=e.length+r.length,s=[],o=0;for(let d=0;d<i;d++)r.indexOf(d)===-1?s.push(e[o++]):s.push(1);return s},Jh=(e,r)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==r-1-i)return!1;return!0},em=(e,r)=>{let i=[];if(!Jh(e,r)){for(let s=0;s<r;++s)e.indexOf(s)===-1&&i.push(s);e.forEach(s=>i.push(s))}return i},tm=(e,r,i,s,o,d,u)=>{let h=i[0].dims,m=K.size(d),g=K.size(u),_=Y("_A",i[0].dataType,h),v=Se("output",o,d),f=32,x=`
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
        }`,getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:m},programUniforms:[{type:12,data:g}]})}},An=(e,r,i,s)=>{let o=e.inputs.length===1?i:Bc(e.inputs,i),d=o.axes;d.length===0&&!o.noopWithEmptyAxes&&(d=e.inputs[0].dims.map((x,S)=>S));let u=K.normalizeAxes(d,e.inputs[0].dims.length),h=u,m=e.inputs[0],g=em(h,e.inputs[0].dims.length);g.length>0&&(m=e.compute(dn(e.inputs[0],g),{inputs:[0],outputs:[-1]})[0],h=Yh(h.length,m.dims.length));let[_,v]=Zh(m.dims,h),f=_;o.keepDims&&(f=Xh(_,u)),e.compute(tm(r,{hint:o.cacheKey,inputDependencies:["type"]},[m],s,e.inputs[0].dataType,f,v),{inputs:[m]})},E0=(e,r)=>{An(e,"ReduceMeanShared",r,"mean")},C0=(e,r)=>{An(e,"ReduceL1Shared",r,"l1")},T0=(e,r)=>{An(e,"ReduceL2Shared",r,"l2")},I0=(e,r)=>{An(e,"ReduceLogSumExpShared",r,"logSumExp")},z0=(e,r)=>{An(e,"ReduceMaxShared",r,"max")},A0=(e,r)=>{An(e,"ReduceMinShared",r,"min")},R0=(e,r)=>{An(e,"ReduceProdShared",r,"prod")},O0=(e,r)=>{An(e,"ReduceSumShared",r,"sum")},P0=(e,r)=>{An(e,"ReduceSumSquareShared",r,"sumSquare")},M0=(e,r)=>{An(e,"ReduceLogSumShared",r,"logSum")}}),Rn,nm,Ju,Bc,On,rm,im,am,sm,om,um,lm,dm,cm,fm,Pn,B0,D0,N0,L0,U0,j0,F0,W0,V0,H0,cf=re(()=>{Re(),Be(),gt(),De(),G2(),Rn=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},nm=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ju=(e,r,i,s,o,d,u=!1,h=!1)=>{let m=[],g=i[0].dims,_=g.length,v=K.normalizeAxes(o,_),f=!h&&v.length===0;g.forEach((b,I)=>{f||v.indexOf(I)>=0?u&&m.push(1):m.push(b)});let x=m.length,S=K.size(m);return{name:e,shaderCache:r,getShaderSource:b=>{let I=[],A=Y("_A",i[0].dataType,_),C=Se("output",d,x),O=s(A,C,v),R=O[2];for(let M=0,F=0;M<_;M++)f||v.indexOf(M)>=0?(u&&F++,R=`for(var j${M}: u32 = 0; j${M} < ${g[M]}; j${M}++) {
                  ${O[2].includes("last_index")?`let last_index = j${M};`:""}
                  ${A.indicesSet("input_indices",M,`j${M}`)}
                  ${R}
                }`):(I.push(`${A.indicesSet("input_indices",M,C.indicesGet("output_indices",F))};`),F++);return`

        ${b.registerUniform("output_size","u32").declareVariables(A,C)}

        ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${A.type.indices};
          let output_indices = ${C.offsetToIndices("global_idx")};

          ${I.join(`
`)}
          ${O[0]}       // init ops for reduce max/min
          ${O[1]}
          ${R}
          ${O[3]}
          ${O.length===4?C.setByOffset("global_idx","value"):O.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:m,dataType:d}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:[{type:12,data:S},...ge(g,m)]})}},Bc=(e,r)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),Ze({axes:i,keepDims:r.keepDims,noopWithEmptyAxes:r.noopWithEmptyAxes})},On=(e,r,i,s)=>{let o=e.inputs,d=o.length===1?i:Bc(o,i);e.compute(Ju(r,{hint:d.cacheKey,inputDependencies:["rank"]},[o[0]],d.noopWithEmptyAxes&&d.axes.length===0?nm:s,d.axes,o[0].dataType,d.keepDims,d.noopWithEmptyAxes),{inputs:[0]})},rm=(e,r)=>{Rn(e.inputs),On(e,"ReduceLogSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},im=(e,r)=>{Rn(e.inputs),On(e,"ReduceL1",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},am=(e,r)=>{Rn(e.inputs),On(e,"ReduceL2",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},sm=(e,r)=>{Rn(e.inputs),On(e,"ReduceLogSumExp",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},om=(e,r)=>{Rn(e.inputs),On(e,"ReduceMax",r,(i,s,o)=>{let d=[];for(let u=0;u<i.rank;u++)(o.indexOf(u)>=0||o.length===0)&&d.push(i.indicesSet("input_indices",u,0));return[`${d.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},um=(e,r)=>{Rn(e.inputs),On(e,"ReduceMean",r,(i,s,o)=>{let d=1;for(let u=0;u<i.rank;u++)(o.indexOf(u)>=0||o.length===0)&&(d*=e.inputs[0].dims[u]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${d});`]})},lm=(e,r)=>{Rn(e.inputs),On(e,"ReduceMin",r,(i,s,o)=>{let d=[];for(let u=0;u<i.rank;u++)(o.indexOf(u)>=0||o.length===0)&&d.push(`input_indices[${u}] = 0;`);return[`${d.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},dm=(e,r)=>{Rn(e.inputs),On(e,"ReduceProd",r,(i,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},cm=(e,r)=>{Rn(e.inputs),On(e,"ReduceSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},fm=(e,r)=>{Rn(e.inputs),On(e,"ReduceSumSquare",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},Pn=(e,r,i)=>{if(r.length===0)return i;let s=1,o=1;for(let d=0;d<r.length;d++)r.indexOf(d)===-1?s*=e[d]:o*=e[d];return o<32&&s>1024},B0=(e,r)=>{Pn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?um(e,r):E0(e,r)},D0=(e,r)=>{Pn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?im(e,r):C0(e,r)},N0=(e,r)=>{Pn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?am(e,r):T0(e,r)},L0=(e,r)=>{Pn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?sm(e,r):I0(e,r)},U0=(e,r)=>{Pn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?om(e,r):z0(e,r)},j0=(e,r)=>{Pn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?lm(e,r):A0(e,r)},F0=(e,r)=>{Pn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?dm(e,r):R0(e,r)},W0=(e,r)=>{Pn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?cm(e,r):O0(e,r)},V0=(e,r)=>{Pn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?fm(e,r):P0(e,r)},H0=(e,r)=>{Pn(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rm(e,r):M0(e,r)}}),tc,q0,G0,Dc,K2=re(()=>{Re(),gt(),cf(),tc=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},q0=(e,r)=>{tc(e.inputs);let i=(s,o,d)=>{let u=[];for(let h=0;h<s.rank;h++)(d.indexOf(h)>=0||d.length===0)&&u.push(`input_indices[${h}] = 0;`);return[`${u.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?"<=":"<"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Ju("ArgMin",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},G0=(e,r)=>{tc(e.inputs);let i=(s,o,d)=>{let u=[];for(let h=0;h<s.rank;h++)(d.indexOf(h)>=0||d.length===0)&&u.push(`input_indices[${h}] = 0;`);return[`${u.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?">=":">"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Ju("argMax",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},Dc=e=>Ze(e)}),pm,hm,mm,gm,eo,ym,K0,ff=re(()=>{Re(),Be(),lf(),De(),pm=(e,r)=>{let i=e[0],s=e[1],o=e[2],d=e[3],u=e[4],h=e[5];if(u&&h)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let m=i.dims[0],g=i.dims[1],_=i.dims[2];if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(s.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(s.dims[0]!==_)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(o.dims[0]!==s.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let v=o.dims[0]/3,f=v,x=f;if(r.qkvHiddenSizes.length>0){if(r.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let O of r.qkvHiddenSizes)if(O%r.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");v=r.qkvHiddenSizes[0],f=r.qkvHiddenSizes[1],x=r.qkvHiddenSizes[2]}let S=g;if(v!==f)throw new Error("qkv_hidden_sizes first element should be same as the second");if(o.dims[0]!==v+f+x)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let b=0;if(u){if(f!==x)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(u.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(u.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(u.dims[1]!==m)throw new Error('Input "past" second dimension must be batch_size');if(u.dims[2]!==r.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(u.dims[4]!==f/r.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');r.pastPresentShareBuffer||(b=u.dims[3])}let I=S+b,A=-1,C=0;if(d)throw new Error("Mask not supported");if(u)throw new Error("past is not supported");if(h){if(h.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(h.dims[0]!==m||h.dims[1]!==r.numHeads||h.dims[2]!==g||h.dims[3]!==I)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:g,pastSequenceLength:b,kvSequenceLength:S,totalSequenceLength:I,maxSequenceLength:A,inputHiddenSize:_,hiddenSize:v,vHiddenSize:x,headSize:Math.floor(v/r.numHeads),vHeadSize:Math.floor(x/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:C,scale:r.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},hm=(e,r,i)=>{let s=pt(i),o=64,d=i/s;d<o&&(o=32);let u=Math.ceil(i/s/o),h=[{type:1,data:1/i},{type:12,data:d},{type:12,data:u}],m=vt(e.dataType,s),g=Pt(1,s),_=["type"],v=f=>{let x=Se("x",e.dataType,e.dims,s),S=Pt(e.dataType),b=[{name:"d_inv",type:"f32"},{name:"d_comp",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
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
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${o};${m};${s}`,inputDependencies:_},getShaderSource:v,getRunData:()=>({outputs:[],dispatchGroup:{x:r},programUniforms:h})}},mm=(e,r,i,s,o,d,u,h)=>{let m=h+d.kvSequenceLength,g=[d.batchSize,d.numHeads,d.sequenceLength,m],_=d.kvNumHeads===void 0&&e>1&&s,v=_?[d.batchSize,d.numHeads,m,d.headSize]:void 0,f=u.scale===0?1/Math.sqrt(d.headSize):u.scale,x=pt(d.headSize),S=d.headSize/x,b=12,I={x:Math.ceil(m/b),y:Math.ceil(d.sequenceLength/b),z:d.batchSize*d.numHeads},A=[{type:12,data:d.sequenceLength},{type:12,data:S},{type:12,data:m},{type:12,data:d.numHeads},{type:1,data:f},{type:12,data:h},{type:12,data:d.kvSequenceLength}],C=_&&s&&K.size(s.dims)>0,O=["type","type"];C&&O.push("type"),o&&O.push("type");let R=[{dims:g,dataType:r.dataType,gpuDataType:0}];_&&R.push({dims:v,dataType:r.dataType,gpuDataType:0});let M=F=>{let U=Y("q",r.dataType,r.dims,x),Q=Y("key",i.dataType,i.dims,x),se=[U,Q];if(C){let Te=Y("past_key",s.dataType,s.dims,x);se.push(Te)}o&&se.push(Y("attention_bias",o.dataType,o.dims));let ue=Se("output",r.dataType,g),we=[ue];_&&we.push(Se("present_key",r.dataType,v,x));let he=Pt(1,x),de=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${U.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${U.type.storage}, ${b*b}>;
  ${F.registerUniforms(de).declareVariables(...se,...we)}
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
    var value = ${he}(0);
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
        value += ${he}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    let headOffset = headIdx * uniforms.M * uniforms.N;
    if (global_id.y < uniforms.M && global_id.x < uniforms.N) {
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(x){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${x}`)}})()};
        output[outputIdx] = ${ue.type.value} (sum * uniforms.alpha) + ${o?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${x};${o!==void 0};${s!==void 0};${e}`,inputDependencies:O},getRunData:()=>({outputs:R,dispatchGroup:I,programUniforms:A}),getShaderSource:M}},gm=(e,r,i,s,o,d)=>{let u=d+o.kvSequenceLength,h=o.nReps?o.nReps:1,m=o.vHiddenSize*h,g=o.kvNumHeads==null&&e>1&&s,_=g?[o.batchSize,o.numHeads,u,o.headSize]:void 0,v=[o.batchSize,o.sequenceLength,m],f=12,x={x:Math.ceil(o.vHeadSize/f),y:Math.ceil(o.sequenceLength/f),z:o.batchSize*o.numHeads},S=[{type:12,data:o.sequenceLength},{type:12,data:u},{type:12,data:o.vHeadSize},{type:12,data:o.numHeads},{type:12,data:m},{type:12,data:d},{type:12,data:o.kvSequenceLength}],b=g&&s&&K.size(s.dims)>0,I=["type","type"];b&&I.push("type");let A=[{dims:v,dataType:r.dataType,gpuDataType:0}];g&&A.push({dims:_,dataType:r.dataType,gpuDataType:0});let C=O=>{let R=Y("probs",r.dataType,r.dims),M=Y("v",i.dataType,i.dims),F=[R,M];b&&F.push(Y("past_value",s.dataType,s.dims));let U=[Se("output",r.dataType,v)];g&&U.push(Se("present_value",r.dataType,_));let Q=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"}];return`
  const TILE_SIZE = ${f}u;
  var<workgroup> tileQ: array<${R.type.value}, ${f*f}>;
  var<workgroup> tileK: array<${R.type.value}, ${f*f}>;
  ${O.registerUniforms(Q).declareVariables(...F,...U)}
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${s!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:A,dispatchGroup:x,programUniforms:S}),getShaderSource:C}},eo=(e,r,i,s,o,d,u,h,m,g,_)=>{let v=Math.min(e.outputCount,1+(u?1:0)+(h?1:0)),f=g.kvNumHeads!==void 0||v>1?g.pastSequenceLength:0,x=f+g.kvSequenceLength,S=m&&K.size(m.dims)>0?m:void 0,b=[r,i];g.kvNumHeads===void 0&&v>1&&u&&K.size(u.dims)>0&&b.push(u),S&&b.push(S);let I=e.compute(mm(v,r,i,u,S,g,_,f),{inputs:b,outputs:g.kvNumHeads===void 0&&v>1?[-1,1]:[-1]})[0];e.compute(hm(I,g.batchSize*g.numHeads*g.sequenceLength,x),{inputs:[I],outputs:[]});let A=[I,s];g.kvNumHeads===void 0&&v>1&&h&&K.size(h.dims)>0&&A.push(h),e.compute(gm(v,I,s,h,g,f),{inputs:A,outputs:g.kvNumHeads===void 0&&v>1?[0,2]:[0]})},ym=(e,r)=>{let i=[r.batchSize,r.numHeads,r.sequenceLength,r.headSize],s=r.sequenceLength,o=r.inputHiddenSize,d=r.headSize,u=12,h={x:Math.ceil(r.headSize/u),y:Math.ceil(r.sequenceLength/u),z:r.batchSize*r.numHeads},m=[e.inputs[0],e.inputs[1],e.inputs[2]],g=[{type:12,data:s},{type:12,data:o},{type:12,data:d},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:r.hiddenSize},{type:12,data:r.hiddenSize+r.hiddenSize+r.vHiddenSize}],_=v=>{let f=Se("output_q",m[0].dataType,i),x=Se("output_k",m[0].dataType,i),S=Se("output_v",m[0].dataType,i),b=Y("input",m[0].dataType,m[0].dims),I=Y("weight",m[1].dataType,m[1].dims),A=Y("bias",m[2].dataType,m[2].dims),C=b.type.storage,O=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${u}u;
  var<workgroup> tileInput: array<${C}, ${u*u}>;
  var<workgroup> tileWeightQ: array<${C}, ${u*u}>;
  var<workgroup> tileWeightK: array<${C}, ${u*u}>;
  var<workgroup> tileWeightV: array<${C}, ${u*u}>;
  ${v.registerUniforms(O).declareVariables(b,I,A,f,x,S)}
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:h,programUniforms:g}),getShaderSource:_},{inputs:m,outputs:[-1,-1,-1]})},K0=(e,r)=>{let i=pm(e.inputs,r),[s,o,d]=ym(e,i);return eo(e,s,o,d,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i,r)}}),wm,vm,_m,Q0,Q2=re(()=>{Dn(),Re(),Be(),gt(),De(),wm=(e,r)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(s,o,d)=>{let u=o.length;if(u!==s.length)throw new Error(`${d}: num dimensions != ${u}`);o.forEach((h,m)=>{if(h!==s[m])throw new Error(`${d}: dim[${m}] do not match`)})};if(e[0].dims.length>1){let s=r.format==="NHWC"?r.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,r.spatial?2:void 0);i(e[1].dims,s,"Invalid input scale"),i(e[2].dims,s,"Invalid input B"),i(e[3].dims,s,"Invalid input mean"),i(e[4].dims,s,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},vm=(e,r)=>{let{epsilon:i,spatial:s,format:o}=r,d=e[0].dims,u=s?pt(d[d.length-1]):1,h=o==="NHWC"&&d.length>1?u:1,m=K.size(d)/u,g=s,_=g?d.length:d,v=Y("x",e[0].dataType,e[0].dims,u),f=Y("scale",e[1].dataType,e[1].dims,h),x=Y("bias",e[2].dataType,e[2].dims,h),S=Y("inputMean",e[3].dataType,e[3].dims,h),b=Y("inputVar",e[4].dataType,e[4].dims,h),I=Se("y",e[0].dataType,_,u),A=()=>{let O="";if(s)O=`let cOffset = ${d.length===1?"0u":o==="NHWC"?`outputIndices[${d.length-1}] / ${u}`:"outputIndices[1]"};`;else if(o==="NCHW")O=`
            ${I.indicesSet("outputIndices","0","0")}
            let cOffset = ${I.indicesToOffset("outputIndices")};`;else{O=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${d.length-1}];`;for(let R=1;R<f.rank;R++)O+=`cIndices[${R}] = outputIndices[${R}];`;O+=`let cOffset = ${f.indicesToOffset("cIndices")};`}return O},C=O=>`
  const epsilon = ${i};
  ${O.registerUniform("outputSize","u32").declareVariables(v,f,x,S,b,I)}
  ${O.mainStart()}
  ${O.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${I.offsetToIndices(`global_idx * ${u}`)};
    ${A()}
    let scale = ${f.getByOffset("cOffset")};
    let bias = ${x.getByOffset("cOffset")};
    let inputMean = ${S.getByOffset("cOffset")};
    let inputVar = ${b.getByOffset("cOffset")};
    let x = ${v.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${I.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${r.epsilon}_${r.format}_${s}_${u}`,inputDependencies:g?["rank","type","type","type","type"]:void 0},getShaderSource:C,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g?[{type:12,data:m},...ge(d)]:[{type:12,data:m}]})}},_m=e=>Ze(e),Q0=(e,r)=>{let{inputs:i,outputCount:s}=e,o=_m({...r,outputCount:s});if(et.webgpu.validateInputContent&&wm(i,o),r.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(vm(i,o))}}),$m,xm,Y0,Y2=re(()=>{Be(),De(),$m=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},xm=e=>{let r=e[0].dims,i=e[0].dims[2],s=K.size(r)/4,o=e[0].dataType,d=Y("input",o,r,4),u=Y("bias",o,[i],4),h=Y("residual",o,r,4),m=Se("output",o,r,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:g=>`
  const channels = ${i}u / 4;
  ${g.declareVariables(d,u,h,m)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let value = ${d.getByOffset("global_idx")}
      + ${u.getByOffset("global_idx % channels")} + ${h.getByOffset("global_idx")};
    ${m.setByOffset("global_idx","value")}
  }`}},Y0=e=>{$m(e.inputs),e.compute(xm(e.inputs))}}),bm,He,Z0,X0,J0,ew,tw,nw,rw,iw,aw,Sm,sw,ow,uw,lw,Zs,dw,qu,cw,fw,pw,hw,mw,gw,yw,ww,vw,_w,$w,xw,bw,Sw,kw,Ew,nc,Cw,Nc,Lc,Tw,Iw,zw,km,Em,Aw,pf=re(()=>{Re(),Be(),gt(),De(),bm=(e,r,i,s,o,d,u)=>{let h=Math.ceil(r/4),m="";typeof o=="string"?m=`${o}(a)`:m=o("a");let g=Y("inputData",i,[h],4),_=Se("outputData",s,[h],4),v=[{name:"vec_size",type:"u32"}];return u&&v.push(...u),`
      ${e.registerUniforms(v).declareVariables(g,_)}

  ${d??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${g.getByOffset("global_idx")};
    ${_.setByOffset("global_idx",m)}
  }`},He=(e,r,i,s,o,d=e.dataType,u,h)=>{let m=[{type:12,data:Math.ceil(K.size(e.dims)/4)}];return u&&m.push(...u),{name:r,shaderCache:{hint:o,inputDependencies:["type"]},getShaderSource:g=>bm(g,K.size(e.dims),e.dataType,d,i,s,h),getRunData:g=>({outputs:[{dims:e.dims,dataType:d}],dispatchGroup:{x:Math.ceil(K.size(g[0].dims)/64/4)},programUniforms:m})}},Z0=e=>{e.compute(He(e.inputs[0],"Abs","abs"))},X0=e=>{e.compute(He(e.inputs[0],"Acos","acos"))},J0=e=>{e.compute(He(e.inputs[0],"Acosh","acosh"))},ew=e=>{e.compute(He(e.inputs[0],"Asin","asin"))},tw=e=>{e.compute(He(e.inputs[0],"Asinh","asinh"))},nw=e=>{e.compute(He(e.inputs[0],"Atan","atan"))},rw=e=>{e.compute(He(e.inputs[0],"Atanh","atanh"))},iw=e=>Ze(e),aw=(e,r)=>{let i;switch(r.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${r.to}`)}e.compute(He(e.inputs[0],"Cast",i,void 0,r.cacheKey,r.to))},Sm=e=>{let r,i,s=e.length>=2&&e[1].data!==0,o=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:r=s?e[1].getFloat32Array()[0]:-34028234663852886e22,i=o?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:r=s?e[1].getUint16Array()[0]:64511,i=o?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ze({min:r,max:i})},sw=(e,r)=>{let i=r||Sm(e.inputs),s=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Clip",o=>`clamp(${o}, vec4<${s}>(uniforms.min), vec4<${s}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:s},{name:"max",type:s}]),{inputs:[0]})},ow=e=>{e.compute(He(e.inputs[0],"Ceil","ceil"))},uw=e=>{e.compute(He(e.inputs[0],"Cos","cos"))},lw=e=>{e.compute(He(e.inputs[0],"Cosh","cosh"))},Zs=e=>Ze(e),dw=(e,r)=>{let i=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"Elu",s=>`elu_vf32(${s})`,`
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
`,Em=e=>`quick_gelu_impl(${e})`,Aw=(e,r)=>{let i=Pt(e.inputs[0].dataType);e.compute(He(e.inputs[0],"QuickGelu",Em,km(i,r.alpha),r.cacheKey,e.inputs[0].dataType))}}),Cm,Tm,Rw,Z2=re(()=>{Be(),De(),pf(),Cm=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Tm=e=>{let r=e[0].dims.slice();r[2]=r[2]/2;let i=Y("input",e[0].dataType,e[0].dims,4),s=Y("bias",e[0].dataType,[e[0].dims[2]],4),o=Se("output",e[0].dataType,r,4),d=K.size(r)/4,u=vt(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)}}),getShaderSource:h=>`
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
  }`}},Rw=e=>{Cm(e.inputs),e.compute(Tm(e.inputs))}}),Im,zm,Mn,Ow,Pw,Mw,Bw,Dw,Nw,Lw,Uw,jw,Fw,X2=re(()=>{Re(),Be(),De(),Im=(e,r,i,s,o,d,u,h,m,g,_,v)=>{let f,x;typeof h=="string"?f=x=(C,O)=>`${h}((${C}),(${O}))`:typeof h=="function"?f=x=h:(f=h.scalar,x=h.vector);let S=Se("outputData",_,s.length,4),b=Y("aData",m,r.length,4),I=Y("bData",g,i.length,4),A;if(o)if(d){let C=K.size(r)===1,O=K.size(i)===1,R=r.length>0&&r[r.length-1]%4===0,M=i.length>0&&i[i.length-1]%4===0;C||O?A=S.setByOffset("global_idx",x(C?`${b.type.value}(${b.getByOffset("0")}.x)`:b.getByOffset("global_idx"),O?`${I.type.value}(${I.getByOffset("0")}.x)`:I.getByOffset("global_idx"))):A=`
            let outputIndices = ${S.offsetToIndices("global_idx * 4u")};
            let offsetA = ${b.broadcastedIndicesToOffset("outputIndices",S)};
            let offsetB = ${I.broadcastedIndicesToOffset("outputIndices",S)};
            ${S.setByOffset("global_idx",x(u||R?b.getByOffset("offsetA / 4u"):`${b.type.value}(${b.getByOffset("offsetA / 4u")}[offsetA % 4u])`,u||M?I.getByOffset("offsetB / 4u"):`${I.type.value}(${I.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else A=S.setByOffset("global_idx",x(b.getByOffset("global_idx"),I.getByOffset("global_idx")));else{if(!d)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let C=(O,R,M="")=>{let F=`aData[indexA${R}][componentA${R}]`,U=`bData[indexB${R}][componentB${R}]`;return`
            let outputIndices${R} = ${S.offsetToIndices(`global_idx * 4u + ${R}u`)};
            let offsetA${R} = ${b.broadcastedIndicesToOffset(`outputIndices${R}`,S)};
            let offsetB${R} = ${I.broadcastedIndicesToOffset(`outputIndices${R}`,S)};
            let indexA${R} = offsetA${R} / 4u;
            let indexB${R} = offsetB${R} / 4u;
            let componentA${R} = offsetA${R} % 4u;
            let componentB${R} = offsetB${R} % 4u;
            ${O}[${R}] = ${M}(${f(F,U)});
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
        ${e.registerUniform("vec_size","u32").declareVariables(b,I,S)}

        ${v??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${A}
      }`},zm=(e,r,i,s,o,d,u=i.dataType)=>{let h=!K.areEqual(i.dims,s.dims),m=i.dims,g=K.size(i.dims),_=!1,v=!1,f=[h];if(h){let x=Aa.calcShape(i.dims,s.dims,!1);if(!x)throw new Error("Can't perform binary op on the given tensors");m=x,g=K.size(m);let S=K.size(i.dims)===1,b=K.size(s.dims)===1,I=i.dims.length>0&&i.dims[i.dims.length-1]%4===0,A=s.dims.length>0&&s.dims[s.dims.length-1]%4===0;f.push(S),f.push(b),f.push(I),f.push(A);let C=1;for(let O=1;O<m.length;O++){let R=i.dims[i.dims.length-O]??1,M=s.dims[s.dims.length-O]??1;if(R===M)C*=R;else break}C%4===0?(v=!0,_=!0):(S||b||I||A)&&(_=!0)}else _=!0;return f.push(_),{name:e,shaderCache:{hint:r+f.map(x=>x.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:x=>Im(x,i.dims,s.dims,m,_,h,v,o,i.dataType,s.dataType,u,d),getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(K.size(m)/4)},...ge(i.dims,s.dims,m)]})}},Mn=(e,r,i,s,o,d)=>{e.compute(zm(r,o??"",e.inputs[0],e.inputs[1],i,s,d))},Ow=e=>{Mn(e,"Add",(r,i)=>`${r}+${i}`)},Pw=e=>{Mn(e,"Div",(r,i)=>`${r}/${i}`)},Mw=e=>{Mn(e,"Equal",{scalar:(r,i)=>`u32(${r}==${i})`,vector:(r,i)=>`vec4<u32>(${r}==${i})`},void 0,void 0,9)},Bw=e=>{Mn(e,"Mul",(r,i)=>`${r}*${i}`)},Dw=e=>{let r=Y("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Mn(e,"Pow",{scalar:(i,s)=>`pow_custom(${i},${s})`,vector:(i,s)=>`pow_vector_custom(${i},${s})`},`
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
      `)},Nw=e=>{Mn(e,"Sub",(r,i)=>`${r}-${i}`)},Lw=e=>{Mn(e,"Greater",{scalar:(r,i)=>`u32(${r}>${i})`,vector:(r,i)=>`vec4<u32>(${r}>${i})`},void 0,void 0,9)},Uw=e=>{Mn(e,"Less",{scalar:(r,i)=>`u32(${r}<${i})`,vector:(r,i)=>`vec4<u32>(${r}<${i})`},void 0,void 0,9)},jw=e=>{Mn(e,"GreaterOrEqual",{scalar:(r,i)=>`u32(${r}>=${i})`,vector:(r,i)=>`vec4<u32>(${r}>=${i})`},void 0,void 0,9)},Fw=e=>{Mn(e,"LessOrEqual",{scalar:(r,i)=>`u32(${r}<=${i})`,vector:(r,i)=>`vec4<u32>(${r}<=${i})`},void 0,void 0,9)}}),Am,Rm,Om,Pm,Ww,Vw,J2=re(()=>{Re(),Be(),gt(),De(),Am=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,s=e[i],o=s.dataType,d=s.dims.length;e.forEach((u,h)=>{if(h!==i){if(u.dataType!==o)throw new Error("input tensors should be one type");if(u.dims.length!==d)throw new Error("input tensors should have the same shape");u.dims.forEach((m,g)=>{if(g!==r&&m!==s.dims[g])throw new Error("non concat dimensions must match")})}})},Rm=(e,r)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${r});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Om=(e,r)=>{let i=e.length,s=[];for(let o=0;o<i;++o){let d=r.setByOffset("global_idx",e[o].getByIndices("indices"));i===1?s.push(d):o===0?s.push(`if (inputIndex == ${o}u) { ${d} }`):o===i-1?s.push(`else { ${d} }`):s.push(`else if (inputIndex == ${o}) { ${d} }`)}return s.join(`
`)},Pm=(e,r,i,s)=>{let o=K.size(i),d=new Array(e.length),u=new Array(e.length),h=0,m=[],g=[],_=[{type:12,data:o}];for(let b=0;b<e.length;++b)h+=e[b].dims[r],d[b]=h,g.push(e[b].dims.length),u[b]=Y(`input${b}`,s,g[b]),m.push("rank"),_.push({type:12,data:d[b]});for(let b=0;b<e.length;++b)_.push(...ge(e[b].dims));_.push(...ge(i));let v=Se("output",s,i.length),f=v.indicesGet("indices",r),x=Array.from(Array(d.length).keys()).map(b=>`uniforms.sizeInConcatAxis${b}`).join(","),S=b=>`

  ${(()=>{b.registerUniform("outputSize","u32");for(let I=0;I<e.length;I++)b.registerUniform(`sizeInConcatAxis${I}`,"u32");return b.declareVariables(...u,v)})()}

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
  }`;return{name:"Concat",shaderCache:{hint:`${r}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:_}),getShaderSource:S}},Ww=(e,r)=>{let i=e.inputs,s=i[0].dims,o=K.normalizeAxis(r.axis,s.length);Am(i,o);let d=s.slice();d[o]=i.reduce((h,m)=>h+(m.dims.length>o?m.dims[o]:0),0);let u=i.filter(h=>K.size(h.dims)>0);e.compute(Pm(u,o,d,i[0].dataType),{inputs:u})},Vw=e=>Ze({axis:e.axis})}),Gr,Kr,Qr,hf,Zr=re(()=>{Re(),Be(),Gr=(e,r,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${r}(0.0));`;case"Sigmoid":return`value = (${r}(1.0) / (${r}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${r}(${i}(uniforms.clip_min)), ${r}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${r}(0.0), min(${r}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${r}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Kr=(e,r)=>{e.activation==="Clip"?r.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?r.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&r.push({type:1,data:e.alpha})},Qr=(e,r)=>{e.activation==="Clip"?r.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?r.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&r.push({name:"alpha",type:"f32"})},hf=e=>{let r=(e==null?void 0:e.activation)||"";if(r==="HardSigmoid"){let[i,s]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:r,alpha:i,beta:s}}else if(r==="Clip"){let[i,s]=(e==null?void 0:e.activation_params)||[$0,x0];return{activation:r,clipMax:s,clipMin:i}}else if(r==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:r,alpha:i}}return{activation:r}}}),Mt,mf,al=re(()=>{Mt=(e,r)=>{switch(e){case 1:return r;case 2:return`vec2<${r}>`;case 3:return`vec3<${r}>`;case 4:return`vec4<${r}>`;default:throw new Error(`${e}-component is not supported.`)}},mf=e=>`
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
`}),Mm,Bm,el,rc,Dm,tl,Nm,yf,sl=re(()=>{Re(),Be(),De(),Zr(),al(),Mm=(e,r)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${r?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${r?", batchIndices":""});
        `,Bm=(e,r)=>e?`
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
          ${Mm(o,s)}
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

          ${Bm(o,f)}
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
            `,Dm=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",tl=(e,r,i="f32",s,o=!1,d=32,u=!1,h=32,m=!1)=>{let g=e[1]*r[1],_=e[0]*r[0],v=o?g:d,f=o?d:g;if(!(f%r[1]===0&&v%r[0]===0&&d%r[1]===0))throw new Error(`tileAHight ${f} must be divisible by workgroupSize[1]${r[1]}, tileAWidth ${v} must be divisible by workgroupSize[0]${r[0]}, tileInner ${d} must be divisible by workgroupSize[1]${r[1]}`);let x=f/r[1],S=v/r[0],b=d/r[1],I=m?`
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
    ${I}
  }
`},Nm=(e,r,i,s,o,d=!1)=>{let[u,h,m]=o,[g,_,v,f]=s,x=Js(u,m),S=Js(h,m),b=vt(s[0].type.tensor),I=()=>{let C=_.rank,O=g.rank,R=`var aIndices: ${_.type.indices};`;for(let M=C-2-1,F=O-1;M>=0;M--,F--)R+=`
aIndices[${M}] = ${O>1?`batchIndices[${F}]`:"batchIndices"};`;return x.forEach(M=>{R+=`
aIndices[${M}] = 0;`}),R+=`
aIndices[${C-2}] = u32(row);
                   aIndices[${C-1}] = u32(colIn);`,R},A=()=>{let C=v.rank,O=g.rank,R=`var bIndices: ${v.type.indices};`;for(let M=C-2-1,F=O-1;M>=0;M--,F--)R+=`
bIndices[${M}] = ${O>1?`batchIndices[${F}]`:"batchIndices"};`;return S.forEach(M=>{R+=`
bIndices[${M}] = 0;`}),R+=`
bIndices[${C-2}] = u32(row);
                   bIndices[${C-1}] = u32(colIn);`,R};return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${g.type.indices}) -> ${Mt(e,b)} {
      var value = ${Mt(e,b)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        ${I()}
        value = ${_.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${g.type.indices}) -> ${Mt(e,b)} {
      var value = ${Mt(e,b)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        ${A()}
        value = ${v.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Mt(e,b)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${r?`value = value + ${d?"bias[colIn]":`${Mt(e,b)}(bias[row])`};`:""}
        ${i}
        ${f.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},yf=(e,r,i,s,o=!1,d)=>{let u=e[0].dims,h=e[1].dims,m=u.slice(0,-2),g=h.slice(0,-2),_=s?s.slice(0,-2):i.slice(0,-2),v=K.size(_),f=u[u.length-2],x=u[u.length-1],S=h[h.length-1],b=x%4===0&&S%4===0,I=f<=8?[4,1,1]:[4,4,1],A=[8,8,1],C=[Math.ceil(S/A[0]/I[0]),Math.ceil(f/A[1]/I[1]),Math.ceil(v/A[2]/I[2])],O=b?4:1,R=[...m,f,x/O],M=R.length,F=[...g,x,S/O],U=F.length,Q=[v,f,S/O],se=[{type:6,data:f},{type:6,data:S},{type:6,data:x}];Kr(r,se),se.push(...ge(_,R,F));let ue=["rank","rank"],we=e.length>2;we&&(se.push(...ge(e[2].dims)),ue.push("rank")),se.push(...ge(Q));let he=de=>{let Te=_.length,Pe=df("batchDims",e[0].dataType,Te,1),_e=vt(e[0].dataType),Ee=Y("a",e[0].dataType,M,O),q=Y("b",e[1].dataType,U,O),X=Se("result",e[0].dataType,Q.length,O),J=[Ee,q];if(we){let ce=o?O:1;J.push(Y("bias",e[2].dataType,e[2].dims.length,ce))}let z=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Qr(r,z);let N=vt(X.type.tensor),ie=Gr(r,X.type.value,N),ee=Nm(O,we,ie,[Pe,Ee,q,X],[m,g,_],o);return`
  ${de.registerUniforms(z).registerInternalVariables(Pe).declareVariables(...J,X)}
  ${ee}
  ${b?el(I,A,_e,Pe):tl(I,A,_e,Pe)}
                   `};return{name:"MatMul",shaderCache:{hint:`${I};${r.activation};${b};${o}`,inputDependencies:ue},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:C[0],y:C[1],z:C[2]},programUniforms:se}),getShaderSource:he}}}),Lm,qw,e_=re(()=>{Re(),Yn(),De(),Zr(),al(),Hw(),sl(),Lm=(e,r,i,s,o=!1,d,u=4,h=4,m=4,g="f32")=>{let _=se=>{switch(se){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${g}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${se} is not supported.`)}},v=se=>{switch(se){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${se} is not supported.`)}},f=e?`
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
    `,S=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",b=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",I=e?"row":"col",A=e?"col":"row",C=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${I} / outWidth;
    let outCol = ${I} % outWidth;

    let WRow = ${A} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${A} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${A} % inChannels;
    var resData = ${Mt(u,g)}(0.0);
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
    return ${Mt(u,g)}(0.0);`:s&&i?`
    let col = colIn * ${u};
    ${C}`:`
    let col = colIn * ${u};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${C}
    }
    return ${Mt(u,g)}(0.0);`,R=`${v(h)}`,M=Mt(m,g),F=Mt(e?u:h,g),U=Mt(e?h:u,g),Q=Gr(d,M,g);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${F} {
      ${e?O:R}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${U} {
      ${e?R:O}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${M}) {
      let col = colIn * ${m};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${x}
      ${mf(o)}
      ${Q}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},qw=(e,r,i,s,o,d,u,h,m)=>{let g=r.format==="NHWC",_=g?e[0].dims[3]:e[0].dims[1],v=i[0],f=g?i[2]:i[3],x=g?i[1]:i[2],S=g?i[3]:i[1],b=g&&(_%4===0||_%3===0)&&S%4===0,I=g?S:f*x,A=g?f*x:S,C=[8,8,1],O=s<=8?[4,1,1]:[4,4,1],R=[Math.ceil(I/C[0]/O[0]),Math.ceil(A/C[1]/O[1]),Math.ceil(v/C[2]/O[2])];Ye("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${R}`);let M=b?g&&_%4!==0?3:4:1,F=C[1]*O[1],U=C[0]*O[0],Q=Math.max(C[0]*M,C[1]),se=s%F===0,ue=o%U===0,we=d%Q===0,he=b?[M,4,4]:[1,1,1],de=[{type:6,data:s},{type:6,data:o},{type:6,data:d},{type:6,data:[r.pads[0],r.pads[1]]},{type:6,data:r.strides},{type:6,data:r.dilations}];Kr(r,de),de.push(...ge(e[0].dims,e[1].dims));let Te=["rank","rank"];u&&(de.push(...ge(e[2].dims)),Te.push("rank")),de.push(...ge(i));let Pe=_e=>{let Ee=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Qr(r,Ee);let q=b?4:1,X=vt(e[0].dataType),J=`
      fn setOutputAtIndex(flatIndex : i32, value : ${b?`vec4<${X}>`:X}) {
        result[flatIndex] = ${b?`vec4<${X}>`:X}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${b?`vec4<${X}>`:X}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${b?"/ 4":""}, value);
      }`,z=Y("x",e[0].dataType,e[0].dims.length,M===3?1:M),N=Y("w",e[1].dataType,e[1].dims.length,q),ie=[z,N],ee=Se("result",e[0].dataType,i.length,q);if(u){let ce=Y("bias",e[2].dataType,e[2].dims.length,q);ie.push(ce),J+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${b?`vec4<${X}>`:X} {
          return bias[coords.${g?"w":"y"}${b?"/ 4":""}];
        }`}return`
        ${gf("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${_e.registerUniforms(Ee).declareVariables(...ie,ee)}
        ${J}
        ${Lm(g,se,ue,we,u,r,he[0],he[1],he[2],X)}
        ${b?el(O,C,X,void 0,!g,Q):tl(O,C,X,void 0,!g,Q,!1,void 0,h)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${r.cacheKey};${M};${b};${se};${ue};${we};${F};${U};${Q}`,inputDependencies:Te},getRunData:()=>({outputs:[{dims:m?m(i):i,dataType:e[0].dataType}],dispatchGroup:{x:R[0],y:R[1],z:R[2]},programUniforms:de}),getShaderSource:Pe}}}),Um,ic,Us,jm,ac,Fm,Gw,Kw,t_=re(()=>{Re(),Yn(),Be(),De(),Zr(),al(),Um=e=>{let r=1;for(let i=0;i<e.length;i++)r*=e[i];return r},ic=e=>typeof e=="number"?[e,e,e]:e,Us=(e,r)=>r<=1?e:e+(e-1)*(r-1),jm=(e,r,i,s=1)=>{let o=Us(r,s);return Math.floor((e[0]*(i-1)-i+o)/2)},ac=(e,r,i,s,o)=>{o==null&&(o=jm(e,r[0],s[0]));let d=[0,0,0,i];for(let u=0;u<3;u++)e[u]+2*o>=r[u]&&(d[u]=Math.trunc((e[u]-r[u]+2*o)/s[u]+1));return d},Fm=(e,r,i,s,o,d,u,h,m,g)=>{let _,v,f,x;if(e==="VALID"&&(e=0),typeof e=="number"){_={top:e,bottom:e,left:e,right:e,front:e,back:e};let S=ac([r,i,s,1],[h,m,g],1,[o,d,u],e);v=S[0],f=S[1],x=S[2]}else if(Array.isArray(e)){if(!e.every((b,I,A)=>b===A[0]))throw Error(`Unsupported padding parameter: ${e}`);_={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let S=ac([r,i,s,1],[h,m,g],1,[o,d,u],e[0]);v=S[0],f=S[1],x=S[2]}else if(e==="SAME_UPPER"){v=Math.ceil(r/o),f=Math.ceil(i/d),x=Math.ceil(s/u);let S=(v-1)*o+h-r,b=(f-1)*d+m-i,I=(x-1)*u+g-s,A=Math.floor(S/2),C=S-A,O=Math.floor(b/2),R=b-O,M=Math.floor(I/2),F=I-M;_={top:O,bottom:R,left:M,right:F,front:A,back:C}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:_,outDepth:v,outHeight:f,outWidth:x}},Gw=(e,r,i,s,o,d=!1,u="channelsLast")=>{let h,m,g,_,v;if(u==="channelsLast")[h,m,g,_,v]=e;else if(u==="channelsFirst")[h,v,m,g,_]=e;else throw new Error(`Unknown dataFormat ${u}`);let[f,,x,S,b]=r,[I,A,C]=ic(i),[O,R,M]=ic(s),F=Us(x,O),U=Us(S,R),Q=Us(b,M),{padInfo:se,outDepth:ue,outHeight:we,outWidth:he}=Fm(o,m,g,_,I,A,C,F,U,Q),de=d?f*v:f,Te=[0,0,0,0,0];return u==="channelsFirst"?Te=[h,de,ue,we,he]:u==="channelsLast"&&(Te=[h,ue,we,he,de]),{batchSize:h,dataFormat:u,inDepth:m,inHeight:g,inWidth:_,inChannels:v,outDepth:ue,outHeight:we,outWidth:he,outChannels:de,padInfo:se,strideDepth:I,strideHeight:A,strideWidth:C,filterDepth:x,filterHeight:S,filterWidth:b,effectiveFilterDepth:F,effectiveFilterHeight:U,effectiveFilterWidth:Q,dilationDepth:O,dilationHeight:R,dilationWidth:M,inShape:e,outShape:Te,filterShape:r}},Kw=(e,r,i,s,o,d)=>{let u=d==="channelsLast";u?e[0].dims[3]:e[0].dims[1];let h=[64,1,1],m={x:i.map((I,A)=>A)},g=[Math.ceil(Um(m.x.map(I=>i[I]))/h[0]),1,1];Ye("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${g}`);let _=1,v=K.size(i),f=[{type:12,data:v},{type:12,data:s},{type:12,data:o},{type:12,data:r.strides},{type:12,data:r.dilations}];Kr(r,f),f.push(...ge(e[0].dims,e[1].dims));let x=["rank","rank"],S=e.length===3;S&&(f.push(...ge(e[2].dims)),x.push("rank")),f.push(...ge(i));let b=I=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:s.length},{name:"pads",type:"u32",length:o.length},{name:"strides",type:"u32",length:r.strides.length},{name:"dilations",type:"u32",length:r.dilations.length}];Qr(r,A);let C=1,O=vt(e[0].dataType),R=Y("x",e[0].dataType,e[0].dims.length,_),M=Y("W",e[1].dataType,e[1].dims.length,C),F=[R,M],U=Se("result",e[0].dataType,i.length,C),Q="";if(S){let we=Y("bias",e[2].dataType,e[2].dims.length,C);F.push(we),Q+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${O} {
          return bias[${u?ve("coords",4,5):ve("coords",1,5)}];
        }`}let se=Mt(_,O),ue=Gr(r,se,O);return`
            ${Q}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${R.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${M.getByIndices("aIndices")};
            }
          ${I.registerUniforms(A).declareVariables(...F,U)}
          ${I.mainStart()}
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${U.offsetToIndices("global_idx")};
              let batch = ${ve("coords",0,R.rank)};
              let d2 = ${u?ve("coords",R.rank-1,R.rank):ve("coords",1,R.rank)};
              let xFRCCorner = vec3<u32>(${u?ve("coords",1,R.rank):ve("coords",2,R.rank)},
              ${u?ve("coords",2,R.rank):ve("coords",3,R.rank)},
              ${u?ve("coords",3,R.rank):ve("coords",4,R.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${u?ve("uniforms.x_shape",1,R.rank):ve("uniforms.x_shape",2,R.rank)};
              let xShapeZ = ${u?ve("uniforms.x_shape",2,R.rank):ve("uniforms.x_shape",3,R.rank)};
              let xShapeW = ${u?ve("uniforms.x_shape",3,R.rank):ve("uniforms.x_shape",4,R.rank)};
              let xShapeU = ${u?ve("uniforms.x_shape",4,R.rank):ve("uniforms.x_shape",1,R.rank)};
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
              ${ue}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${r.cacheKey};${u};${_};${S}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:f}),getShaderSource:b}}}),Qw,Yw,n_=re(()=>{Re(),Be(),De(),Zr(),Qw=(e,r,i,s)=>{let o=e.length>2,d=o?"value += b[output_channel];":"",u=e[0].dims,h=e[1].dims,m=r.format==="NHWC",g=m?i[3]:i[1],_=g/r.group,v=m&&_>=4?pt(g):1,f=K.size(i)/v,x=[{type:12,data:f},{type:12,data:r.dilations},{type:12,data:[r.strides[0],r.strides[1]]},{type:12,data:[r.pads[0],r.pads[1]]},{type:12,data:_}];Kr(r,x),x.push(...ge(u,[h[0],h[1],h[2],h[3]/v]));let S=o?["rank","rank","rank"]:["rank","rank"];x.push(...ge([i[0],i[1],i[2],i[3]/v]));let b=I=>{let A=Se("output",e[0].dataType,i.length,v),C=vt(A.type.tensor),O=Gr(r,A.type.value,C),R=Y("x",e[0].dataType,u.length),M=Y("w",e[1].dataType,h.length,v),F=[R,M];o&&F.push(Y("b",e[2].dataType,e[2].dims,v));let U=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:r.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Qr(r,U);let Q=m?`
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
            let wVal = ${M.get("wHeight","wWidth","wInChannel","output_channel")};
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
            let wVal = ${M.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${I.registerUniforms(U).declareVariables(...F,A)}

  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${A.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${m?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${m?1:2}], outputIndices[${m?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${v} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${m?2:1}];

    var value: ${A.type.value} = ${A.type.value}(0);
    ${Q}
    ${d}
    ${O}
    ${A.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${r.cacheKey}_${v}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:x}),getShaderSource:b}},Yw=(e,r,i,s)=>{let o=e.length>2,d=pt(i[3]),u=pt(i[2]),h=K.size(i)/d/u,m=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/d],g=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/d],_=[i[0],i[1],i[2],i[3]/d],v=[{type:12,data:h},{type:6,data:[r.strides[0],r.strides[1]]},{type:6,data:[r.pads[0],r.pads[1]]}];Kr(r,v),v.push(...ge(m,g,_));let f=(u-1)*r.strides[1]+g[1],x=S=>{let b=Se("output",e[0].dataType,_.length,d),I=vt(b.type.tensor),A=Gr(r,b.type.value,I),C=Y("x",e[0].dataType,m.length,d),O=Y("w",e[1].dataType,g.length,d),R=[C,O];o&&R.push(Y("b",e[2].dataType,e[2].dims,d));let M=o?"value += b[output_channel];":"",F=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Qr(r,F),`
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
      ${M}
      ${A}
      ${b.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${r.cacheKey};${d};${u};${f};${g[0]};${g[1]}`,inputDependencies:o?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:v}),getShaderSource:x}}}),Uc,Wm,Zw,Xw=re(()=>{Re(),Be(),sl(),De(),Zr(),Uc=(e,r,i,s,o=!1,d)=>{let u=e[0].dims,h=e[1].dims,m=u[u.length-2],g=h[h.length-1],_=u[u.length-1],v=pt(g),f=pt(_),x=pt(m),S=K.size(i)/v/x,b=e.length>2,I=s?s.slice(0,-2):i.slice(0,-2),A=[K.size(I),m,g],C=[{type:12,data:S},{type:12,data:m},{type:12,data:g},{type:12,data:_}];Kr(r,C),C.push(...ge(I,u,h)),b&&C.push(...ge(e[2].dims)),C.push(...ge(A));let O=R=>{let M=df("batch_dims",e[0].dataType,I.length),F=Y("a",e[0].dataType,u.length,f),U=Y("b",e[1].dataType,h.length,v),Q=Se("output",e[0].dataType,A.length,v),se=vt(Q.type.tensor),ue=Gr(r,Q.type.value,se),we=[F,U],he="";if(b){let J=o?v:1;we.push(Y("bias",e[2].dataType,e[2].dims.length,J)),he=`${o?`value += bias[col / ${J}];`:`value += ${Q.type.value}(bias[row + i]);`}`}let de=u.slice(0,-2),Te=h.slice(0,-2),Pe=Js(de,I),_e=Js(Te,I),Ee=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Qr(r,Ee);let q=(J,z)=>{let N=J.rank,ie=J.name;if(N===2)return`var ${ie}_indices = ${J.type.indices}(0u, 0u);`;let ee=M.rank,ce=`var ${ie}_indices: ${J.type.indices};`;for(let be=N-2-1,Ue=ee-1;be>=0;be--,Ue--)ce+=`
${ie}_indices[${be}] = ${ee>1?`batch_indices[${Ue}]`:"batch_indices"};`;return z.forEach(be=>{ce+=`
${ie}_indices[${be}] = 0;`}),ce+=`${ie}_indices[${N-2}] = 0u;
                     ${ie}_indices[${N-1}] = 0u;`,ce},X=()=>{let J=`var a_data: ${F.type.value};`;for(let z=0;z<f;z++)J+=`
              let b_data${z} = b[(b_offset + (k + ${z}) * uniforms.N + col) / ${v}];`;for(let z=0;z<x;z++){J+=`a_data = a[(a_offset + (row + ${z}) * uniforms.K + k) / ${f}];`;for(let N=0;N<f;N++)J+=`
            values[${z}] = fma(${U.type.value}(a_data${f===1?"":`[${N}]`}), b_data${N}, values[${z}]);
`}return J};return`
  ${R.registerUniforms(Ee).registerInternalVariables(M).declareVariables(...we,Q)}
  ${R.mainStart()}
    ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${v})) * ${v};
    var index1 = global_idx / (uniforms.N / ${v});
    let stride1 = uniforms.M / ${x};
    let row = (index1 % stride1) * ${x};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${M.offsetToIndices("batch")};`}
    ${q(F,Pe)}
    let a_offset = ${F.indicesToOffset("a_indices")};
    ${q(U,_e)}
    let b_offset = ${U.indicesToOffset("b_indices")};
    var values: array<${Q.type.value}, ${x}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${X()}
    }
    for (var i = 0u; i < ${x}u; i++) {
      var value = values[i];
      ${he}
      ${ue}
      let cur_indices = ${Q.type.indices}(batch, row + i, col);
      let offset = ${Q.indicesToOffset("cur_indices")};
      ${Q.setByOffset(`offset / ${v}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${r.activation};${v};${f};${x};${o}`,inputDependencies:b?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(S/64)},programUniforms:C}),getShaderSource:O}},Wm=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Zw=e=>{Wm(e.inputs);let r=Aa.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!r)throw new Error("Can't use matmul on the given tensors");let i=r[r.length-1],s=e.inputs[0].dims[e.inputs[0].dims.length-1];i<8&&s<8?e.compute(Uc(e.inputs,{activation:""},r)):e.compute(yf(e.inputs,{activation:""},r))}}),Vm,Lu,Hm,Uu,jc,sc,qm,Gm,Fc,r_=re(()=>{Be(),e_(),t_(),sl(),n_(),Zr(),Xw(),Yr(),Vm=(e,r,i,s,o,d)=>{let u=e[0],h=e.slice(d?1:2,d?3:4),m=h.length,g=r[0],_=r.slice(2).map((f,x)=>f+(f-1)*(i[x]-1)),v=h.map((f,x)=>f+s[x]+s[x+m]).map((f,x)=>Math.floor((f-_[x]+o[x])/o[x]));return v.splice(0,0,u),v.splice(d?3:1,0,g),v},Lu=[2,3,1,0],Hm=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[1]*r.group;if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let o=e[0].dims.length-2;if(r.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(r.strides.length!==o)throw new Error(`strides should be ${o}D`);if(r.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Uu=(e,r)=>{let i=e.kernelShape.slice();i.length<r[1].dims.length-2&&i.push(...Array(r[1].dims.length-2-i.length).fill(0));for(let d=2;d<r[1].dims.length;++d)i[d-2]===0&&(i[d-2]=r[1].dims[d]);let s=e.pads.slice();Xu.adjustPadsBasedOnAutoPad(r[0].dims,e.strides,e.dilations,i,s,e.format==="NHWC",e.autoPad);let o=Object.assign({},e);return Object.assign(o,{kernelShape:i,pads:s}),o},jc=e=>{let r=hf(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],o=e.dilations,d=e.group,u=e.kernel_shape,h=e.pads,m=e.strides,g=e.w_is_const();return{autoPad:s,format:i,dilations:o,group:d,kernelShape:u,pads:h,strides:m,wIsConst:g,...r,cacheKey:`${e.format};${r.activation};`}},sc=(e,r,i,s)=>{let o=i.format==="NHWC",d=Vm(r[0].dims,r[1].dims,i.dilations,i.pads,i.strides,o);if(i.group!==1){let F=[r[0]];if(o){let U=e.kernelCustomData.wT??e.compute(dn(r[1],Lu),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=U),F.push(U)}else F.push(r[1]);r.length===3&&F.push(r[2]),!e.adapterInfo.isArchitecture("ampere")&&o&&r[1].dims[0]===i.group&&r[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(Yw(F,i,d,s),{inputs:F}):e.compute(Qw(F,i,d,s),{inputs:F});return}let u=r.length===3,h=r[0].dims[o?1:2],m=r[0].dims[o?2:3],g=r[0].dims[o?3:1],_=r[1].dims[2],v=r[1].dims[3],f=d[o?1:2],x=d[o?2:3],S=d[o?3:1],b=o&&_===h&&v===m&&i.pads[0]===0&&i.pads[1]===0;if(b||_===1&&v===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let F=d[0],U,Q,se,ue=[];if(o){let de=e.kernelCustomData.wT??e.compute(dn(r[1],Lu),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=de),b){let Te=h*m*g;U=r[0].reshape([1,F,Te]),Q=de.reshape([1,Te,S]),se=[1,F,S]}else U=r[0].reshape([F,h*m,g]),Q=de.reshape([1,g,S]),se=[F,f*x,S];ue.push(U),ue.push(Q)}else U=r[0].reshape([F,g,h*m]),Q=r[1].reshape([1,S,g]),se=[F,S,f*x],ue.push(Q),ue.push(U);u&&ue.push(r[2]);let we=se[2],he=ue[0].dims[ue[0].dims.length-1];we<8&&he<8?e.compute(Uc(ue,i,d,se,o,s),{inputs:ue}):e.compute(yf(ue,i,d,se,o,s),{inputs:ue});return}let I=!0,A=e.kernelCustomData.wT??e.compute(dn(r[1],Lu),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A);let C=[r[0],A];u&&C.push(r[2]);let O=o?f*x:S,R=o?S:f*x,M=_*v*g;e.compute(qw(C,i,d,O,R,M,u,I,s),{inputs:C})},qm=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=[0,r.pads[0],0,r.pads[1]],d=[1].concat(r.strides),u=[1].concat(r.dilations),h=[1].concat(r.kernelShape),m=Uu({...r,pads:o,strides:d,dilations:u,kernelShape:h},s);sc(e,s,m,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]])},Gm=(e,r,i)=>{let s=i.format==="NHWC"?"channelsLast":"channelsFirst",o=Uu(i,r),d=i.autoPad==="NOTSET"?i.pads:i.autoPad,u=Gw(r[0].dims,r[1].dims,i.strides,i.dilations,d,!1,s);e.compute(Kw(r,o,u.outShape,[u.filterDepth,u.filterHeight,u.filterWidth],[u.padInfo.front,u.padInfo.top,u.padInfo.left],s))},Fc=(e,r)=>{if(Hm(e.inputs,r),e.inputs[0].dims.length===3)qm(e,r);else if(e.inputs[0].dims.length===5)Gm(e,e.inputs,r);else{let i=Uu(r,e.inputs);sc(e,e.inputs,i)}}}),Km,Jw,i_=re(()=>{Re(),Yn(),De(),Zr(),al(),Hw(),sl(),Km=(e,r=!1,i,s,o=4)=>{let d=I=>{switch(I){case 1:return"return w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = w[getIndexFromCoords4D(coord, vec4<i32>(uniforms.w_shape))];
            let v1 = w[getIndexFromCoords4D(coord1, vec4<i32>(uniforms.w_shape))];
            let v2 = w[getIndexFromCoords4D(coord2, vec4<i32>(uniforms.w_shape))];
            let v3 = w[getIndexFromCoords4D(coord3, vec4<i32>(uniforms.w_shape))];
            return ${s}(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${I} is not supported.`)}},u=e?`
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
      `,b=Gr(i,s);return`
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
  }`},Jw=(e,r,i,s,o,d,u,h)=>{let m=r.format==="NHWC",g=m?e[0].dims[3]:e[0].dims[1],_=i[0],v=m?i[2]:i[3],f=m?i[1]:i[2],x=m?i[3]:i[1],S=m&&g%4===0&&g%3&&x%4===0,b=m?x:v*f,I=m?v*f:x,A=[8,8,1],C=s<=8?[4,1,1]:[4,4,1],O=[Math.ceil(b/A[0]/C[0]),Math.ceil(I/A[1]/C[1]),Math.ceil(_/A[2]/C[2])];Ye("verbose",()=>`[conv_backprop_mm_webgpu] dispatch = ${O}`);let R=S?4:1,M=Math.max(A[0]*R,A[1]),F=S?4:1,U=[r.kernelShape[m?1:2],r.kernelShape[m?2:3]],Q=[U[0]+(r.dilations[0]<=1?0:(U[0]-1)*(r.dilations[0]-1)),U[1]+(r.dilations[1]<=1?0:(U[1]-1)*(r.dilations[1]-1))],se=[Q[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),Q[1]-1-Math.floor((r.pads[1]+r.pads[3])/2)],ue=[{type:6,data:s},{type:6,data:o},{type:6,data:d},{type:6,data:r.strides},{type:6,data:r.dilations},{type:6,data:U},{type:6,data:se}];Kr(r,ue),ue.push(...ge(e[0].dims,e[1].dims));let we=["rank","rank"];u&&(ue.push(...ge(e[2].dims)),we.push("rank")),ue.push(...ge(i));let he=de=>{let Te=Y("x",e[0].dataType,e[0].dims.length,F),Pe=Y("w",e[1].dataType,e[1].dims.length,1),_e=Se("result",e[0].dataType,i.length,F),Ee=[Te,Pe],q="";if(u){let z=Y("bias",e[2].dataType,e[2].dims.length,F);Ee.push(z),q+=`
          fn getBiasByOutputCoords(coords : vec4<i32>) -> ${z.type.value} {
            return bias[coords.${m?"w":"y"}${S?"/ 4":""}];
          }`}let X=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"strides",type:"i32",length:2},{name:"dilations",type:"i32",length:2},{name:"filter_dims",type:"i32",length:U.length},{name:"pads",type:"i32",length:se.length}];Qr(r,X);let J=vt(e[0].dataType,1);if(J!=="f16"&&J!=="f32")throw new Error(`elemType ${J} is not supported.`);return`
        ${gf("uniforms.result_strides")}
        ${de.registerUniforms(X).declareVariables(...Ee,_e)};
        ${q}
        ${Km(m,u,r,Te.type.value,R)}
        ${S?el(C,A,J,void 0,!m,M):tl(C,A,J,void 0,!m,M,!1,void 0,h)}`};return{name:"Conv2DTransposeMatMul",shaderCache:{hint:`${r.cacheKey};${C};${A};${S}`,inputDependencies:we},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:O[0],y:O[1],z:O[2]},programUniforms:ue}),getShaderSource:he}}}),Qm,Wc,a_=re(()=>{Re(),Yn(),Be(),De(),Qm=(e,r,i,s,o,d=!1,u,h,m=!1)=>{let g=m?1:2,_=m?2:3,v=m?3:1,f=d?2:1,x=`
  fn setOutputAtIndex(flatIndex : u32, value : ${d?`vec4<${u}>`:u}) {
    result[flatIndex] = ${d?`vec4<${u}>`:u}(value);
  }`;s&&(x+=`
    fn getBiasByOutputCoords(coords : vec4<u32>) -> ${d?`vec4<${u}>`:u} {
      return bias[coords.${m?"w":"y"}${d?"/ 4":""}];
    }`);let S=d?4:1,b=Y("W",r[1].dataType,r[1].dims.length,S),I=Y("Dy",r[0].dataType,r[0].dims.length,S),A=[I,b];s&&A.push(Y("bias",r[2].dataType,[i[v]].length,S));let C=Se("result",r[0].dataType,i.length,S),O=`{
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

                var xValue = ${I.get("batch","idyR","idyC","d2")};
                let tmpval = vec4<${u}>(dot(xValue, wValue0),
                                      dot(xValue, wValue1),
                                      dot(xValue, wValue2),
                                      dot(xValue, wValue3));
                dotProd[0] = dotProd[0] + tmpval;

                xValue =  ${I.get("batch","idyR","idyC2","d2")};

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

                var xValue = ${I.get("batch","idyR","idyC","d2")};
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

                var xValue = ${I.get("batch","idyR","idyC2","d2")};
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
                let xValue = ${m?I.get("batch","idyR","idyC","inputChannel"):I.get("batch","inputChannel","idyR","idyC")};
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
  ${d?O:R}}`},Wc=(e,r,i)=>{let s=e.length>2,o=r.outputShape,d=K.size(o),u=[Math.ceil(d/64),1,1];Ye("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${u}`);let h=r.format==="NHWC",m=["rank","rank"],g=[r.strides[0],r.strides[1]],_=[r.kernelShape[h?1:2],r.kernelShape[h?2:3]],v=[r.dilations[0],r.dilations[1]],f=[_[0]+(r.dilations[0]<=1?0:(r.kernelShape[h?1:2]-1)*(r.dilations[0]-1)),_[1]+(r.dilations[1]<=1?0:(r.kernelShape[h?2:3]-1)*(r.dilations[1]-1))],x=[f[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),f[1]-1-Math.floor(r.pads[1]+r.pads[3])/2],S=!1,b=r.group,I=e[1].dims,A=I[0]/b,C=I[1],O=[{type:12,data:d},{type:12,data:g},{type:12,data:_},{type:12,data:v},{type:12,data:f},{type:6,data:x},{type:12,data:A},{type:12,data:C},...ge(e[0].dims,e[1].dims)];s&&(O.push(...ge(e[2].dims)),m.push("rank")),O.push(...ge(o));let R=u[1]===1&&u[2]===1,M=F=>{let U=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:g.length},{name:"filter_dims",type:"u32",length:_.length},{name:"dilations",type:"u32",length:_.length},{name:"effective_filter_dims",type:"u32",length:f.length},{name:"pads",type:"i32",length:x.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],Q=vt(e[0].dataType);return`${Qm(F,e,o,s,R,S,Q,U,h)}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${r.cacheKey};`,inputDependencies:m},getRunData:()=>({dispatchGroup:{x:u[0],y:u[1],z:u[2]},outputs:[{dims:i?i(o):o,dataType:e[0].dataType}],programUniforms:O}),getShaderSource:M}}}),Ym,Zm,Xm,oc,ev,Jm,eg,tg,ng,tv,s_=re(()=>{i_(),a_(),Zr(),Yr(),Ym=(e,r,i,s,o,d)=>(e-1)*r+i+(s-1)*o+1-d,Zm=(e,r,i,s,o)=>{let d=Math.floor(e/2);r==="SAME_UPPER"?(i[s]=d,i[o]=e-d):r==="SAME_LOWER"&&(i[s]=e-d,i[o]=d)},Xm=(e,r,i,s,o,d,u,h,m,g)=>{let _=e.length-2,v=g.length===0;m.length<_&&m.push(...Array(_-m.length).fill(0));let f=e[0],x=r[h?3:1]*o;for(let S=0,b=e.length-_-(h?1:0);S<_;++S,++b){let I=e[b],A=v?I*u[S]:g[S],C=Ym(I,u[S],d[S],r[b],i[S],A);Zm(C,s,d,S,S+_),v&&g.push(u[S]*(I-1)+m[S]+(r[b]-1)*i[S]+1-d[S]-d[S+_])}g.splice(0,0,f),g.splice(h?3:1,0,x)},oc=(e,r)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((v,f)=>v*f,1)===0){i.length=0;for(let v=2;v<r[1].dims.length;++v)i.push(r[1].dims[v])}let s=e.format==="NHWC";i.splice(0,0,r[1].dims[0]),i.splice(s?3:1,0,r[1].dims[1]);let o=e.pads.slice(),d=e.outputShape.slice(),u=e.outputPadding.slice(),h=r[0].dims,m=e.dilations.slice();if(m.reduce((v,f)=>v+f,0)===0){let v=r[0].dims.length-2;m=new Array(v).fill(1)}let g=e.strides.slice();if(g.reduce((v,f)=>v+f,0)===0){let v=r[0].dims.length-2;g=new Array(v).fill(1)}Xm(h,i,m,e.autoPad,e.group,o,g,s,u,d);let _=Object.assign({},e);return Object.assign(_,{kernelShape:i,pads:o,outputPadding:u,outputShape:d,dilations:m,strides:g}),_},ev=e=>{let r=hf(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],o=e.dilations,d=e.group,u=e.kernelShape,h=e.pads,m=e.strides,g=e.wIsConst(),_=e.outputPadding,v=e.outputShape;return{autoPad:s,format:i,dilations:o,group:d,kernelShape:u,outputPadding:_,outputShape:v,pads:h,strides:m,wIsConst:g,...r,cacheKey:`${e.format};${r.activation};`}},Jm=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[0];if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=e[1].dims[1]*r.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==o))throw new Error("invalid bias");let d=e[0].dims.length-2;if(r.dilations.reduce((u,h)=>u+h,0)>0&&r.dilations.length!==d)throw new Error(`dilations should be ${d}D`);if(r.strides.reduce((u,h)=>u+h,0)>0&&r.strides.length!==d)throw new Error(`strides should be ${d}D`);if(r.pads.reduce((u,h)=>u+h,0)>0&&r.pads.length!==d*2)throw new Error(`pads should be ${d*2}D`);if(r.outputPadding.length!==d&&r.outputPadding.length!==0)throw new Error(`output_padding should be ${d}D`);if(r.kernelShape.reduce((u,h)=>u+h,0)>0&&r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(r.outputShape.length!==0&&r.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},eg=[2,3,1,0],tg=(e,r,i)=>{let s=oc(i,r),o=i.format==="NHWC",d=s.outputShape,u=d[o?3:1],h=r[0].dims[o?3:1];if(s.group!==1||u===1&&h===1){e.compute(Wc(r,s));return}let m=d[o?1:2],g=d[o?2:3],_=r[1].dims[2],v=r[1].dims[3],f=o?m*g:u,x=o?u:m*g,S=_*v*h,b=!0,I=e.kernelCustomData.wT??e.compute(dn(r[1],eg),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=I);let A=[r[0],I],C=r.length===3;C&&(!o&&r[2].dims.length===1?A.push(r[2].reshape([r[2].dims[0],1,1])):A.push(r[2])),e.compute(Jw(A,s,d,f,x,S,C,b),{inputs:A})},ng=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=r.kernelShape;(o.length===0||o[0]===0)&&(o=[e.inputs[1].dims[2]]);let d=r.dilations;(d.length===0||d[0]===0)&&(d=[1]);let u=r.strides;(u.length===0||u[0]===0)&&(u=[1]);let h=r.pads;h.length===0&&(h=[0,0]),h=[0,h[0],0,h[1]],u=[1].concat(u),d=[1].concat(d),o=[1].concat(o);let m=oc({...r,pads:h,strides:u,dilations:d,kernelShape:o},s);e.compute(Wc(s,m,g=>i?[g[0],g[2],g[3]]:[g[0],g[1],g[3]]))},tv=(e,r)=>{Jm(e.inputs,r),e.inputs[0].dims.length===3?ng(e,r):tg(e,e.inputs,r)}}),rg,nv,rv,o_=re(()=>{Re(),Be(),gt(),De(),rg=(e,r,i,s)=>{let o=K.size(r),d=r.length,u=Y("input",e,d),h=Se("output",e,d),m=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),g=K.normalizeAxis(m,d),_=v=>{let f=` i32(${u.indicesGet("inputIndices","uniforms.axis")}) `,x=ve("uniforms.input_shape","uniforms.axis",d),S=s.reverse?f+(s.exclusive?" + 1":""):"0",b=s.reverse?x:f+(s.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:s.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:e}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:g},...ge(r,r)]}),getShaderSource:_}},nv=(e,r)=>{let i=e.inputs[0].dims,s=e.inputs[0].dataType,o=e.inputs[1];e.compute(rg(s,i,o,r),{inputs:[0]})},rv=e=>{let r=e.exclusive===1,i=e.reverse===1;return Ze({exclusive:r,reverse:i})}}),ig,ag,sg,iv,av,u_=re(()=>{Re(),Be(),gt(),De(),ig=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ag=(e,r,i,s)=>{let o=[];o.push(`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let d=0;d<r;++d)o.push(i.indicesSet("a",e[d],`i[${d}]`));return o.push("return a;}"),o.join(`
`)},sg=(e,r)=>{let i,s,o,d,u,h,m=r.format==="NHWC",g=r.blocksize,_=r.mode==="DCR";m?([i,s,o,d]=e.dims,u=_?[i,s,o,g,g,d/g**2]:[i,s,o,d/g**2,g,g],h=_?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,s,o,d]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],u=_?[i,g,g,d/g**2,s,o]:[i,d/g**2,g,g,s,o],h=_?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let v=e.reshape(u),f=v.dims.length,x=e.dataType,S=Y("a",x,f),b=Se("output",x,f),I=A=>`
  ${A.registerUniform("output_size","u32").declareVariables(S,b)}

  ${ag(h,f,S,b)}

  ${A.mainStart()}
    ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${b.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${b.setByOffset("global_idx",S.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${r.blocksize};${r.mode}`,inputDependencies:["rank"]},getRunData:A=>{let C=m?[i,s*g,o*g,d/g**2]:[i,d/g**2,s*g,o*g],O=K.size(C),R=v.dims,M=K.sortBasedOnPerm(R,h);return{outputs:[{dims:C,dataType:A[0].dataType}],dispatchGroup:{x:Math.ceil(O/64)},programUniforms:[{type:12,data:O},...ge(R,M)]}},getShaderSource:I}},iv=(e,r)=>{ig(e.inputs),e.compute(sg(e.inputs[0],r))},av=e=>Ze({blocksize:e.blocksize,mode:e.mode,format:e.format})}),ju,js,uc,og,ug,lg,dg,lc,cg,sv,ov,l_=re(()=>{Re(),Be(),gt(),De(),ju="[a-zA-Z]|\\.\\.\\.",js="("+ju+")+",uc="^"+js+"$",og="("+js+",)*"+js,ug="^"+og+"$",lg=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,r){let i=this.symbolToIndices.get(e);i===void 0?i=[r]:i.push(r),this.symbolToIndices.set(e,i)}},dg=class{constructor(e,r){var o;this.equation=r,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,s]=r.includes("->")?r.split("->",2):[r,""];if(!i.match(RegExp(ug)))throw new Error("Invalid LHS term");if(i.split(",").forEach((d,u)=>{let h=e[u].dims.slice();if(!d.match(RegExp(uc)))throw new Error("Invalid LHS term");let m=this.processTerm(d,!0,h,u);this.lhs.push(m)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([d,u])=>u.count===1||d==="...").map(([d])=>d).join("");else if(!s.match(RegExp(js)))throw new Error("Invalid RHS");(o=s.match(RegExp(ju,"g")))==null||o.forEach(d=>{if(d==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let u=this.symbolToInfo.get(d);if(u===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(u.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(e,r,i){let s=this.symbolToInfo.get(e);if(s!==void 0){if(s.dimValue!==r&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(i)}else s={count:1,dimValue:r,inputIndices:[i]};this.symbolToInfo.set(e,s)}processTerm(e,r,i,s=-1){let o=i.length,d=!1,u=[],h=0;if(!e.match(RegExp(uc))&&!r&&e!=="")throw new Error("Invalid LHS term");let m=e.match(RegExp(ju,"g")),g=new lg(s);return m==null||m.forEach((_,v)=>{if(_==="..."){if(d)throw new Error("Only one ellipsis is allowed per input term");d=!0;let f=o-m.length+1;if(f<0)throw new Error("Ellipsis out of bounds");if(u=i.slice(h,h+f),this.hasEllipsis){if(this.ellipsisDims.length!==u.length||this.ellipsisDims.toString()!==u.toString())throw new Error("Ellipsis dimensions mismatch")}else if(r)this.hasEllipsis=!0,this.ellipsisDims=u;else throw new Error("Ellipsis must be specified in the LHS");for(let x=0;x<u.length;x++){let S=String.fromCharCode(48+x);g.addSymbol(S,v+x),this.addSymbol(S,i[h++],s)}}else g.addSymbol(_,v+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(_,i[h++],s)}),g}},lc=e=>e+"_max",cg=(e,r,i,s)=>{let o=e.map(g=>g.length).map((g,_)=>Y(`input${_}`,r,g)),d=K.size(s),u=Se("output",r,s.length),h=[...i.symbolToInfo.keys()].filter(g=>!i.rhs.symbolToIndices.has(g)),m=g=>{let _=[],v="var prod = 1.0;",f="var sum = 0.0;",x="sum += prod;",S=[],b=[],I=[],A=[],C=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((R,M)=>{var F;if(i.rhs.symbolToIndices.has(M)){let U=(F=i.rhs.symbolToIndices.get(M))==null?void 0:F[0];U!==void 0&&i.lhs.forEach((Q,se)=>{if(R.inputIndices.includes(se)){let ue=Q.symbolToIndices.get(M);if(ue===void 0)throw new Error("Invalid symbol error");ue.forEach(we=>{_.push(`${o[se].indicesSet(`input${se}Indices`,we,u.indicesGet("outputIndices",U))}`)})}})}else i.lhs.forEach((U,Q)=>{if(R.inputIndices.includes(Q)){let se=U.symbolToIndices.get(M);if(se===void 0)throw new Error("Invalid symbol error");se.forEach(ue=>{S.push(`${o[Q].indicesSet(`input${Q}Indices`,ue,`${M}`)}`)}),A.push(`prod *= ${o[Q].getByIndices(`input${Q}Indices`)};`)}}),b.push(`for(var ${M}: u32 = 0; ${M} < uniforms.${lc(M)}; ${M}++) {`),I.push("}")});let O=C?[..._,`let sum = ${o.map((R,M)=>R.getByIndices(`input${M}Indices`)).join(" * ")};`]:[..._,f,...b,...S,v,...A,x,...I];return`
            ${g.registerUniforms(h.map(R=>({name:`${lc(R)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...o,u)}

            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${u.offsetToIndices("global_idx")};
            ${o.map((R,M)=>`var input${M}Indices: ${o[M].type.indices};`).join(`
`)}
            ${O.join(`
`)};
            ${u.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let g=h.filter(v=>i.symbolToInfo.has(v)).map(v=>{var f;return{type:12,data:((f=i.symbolToInfo.get(v))==null?void 0:f.dimValue)||0}});g.push({type:12,data:d});let _=e.map((v,f)=>[...ge(v)]).reduce((v,f)=>v.concat(f),g);return _.push(...ge(s)),{outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:_}},getShaderSource:m}},sv=(e,r)=>{let i=new dg(e.inputs,r.equation),s=i.outputDims,o=e.inputs.map((d,u)=>d.dims);e.compute(cg(o,e.inputs[0].dataType,i,s))},ov=e=>{let r=e.equation.replace(/\s+/g,"");return Ze({equation:r})}}),fg,dc,pg,hg,uv,d_=re(()=>{Re(),Be(),De(),fg=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=i.length<r.length?0:i.length-r.length,o=r.length<i.length?0:r.length-i.length;for(;s<i.length&&o<r.length;++s,++o)if(i[s]!==r[o]&&i[s]!==1&&r[o]!==1)throw new Error("Expand requires shape to be broadcastable to input")},dc=(e,r)=>{let i=e.length-r.length,s=[];for(let o=0;o<i;++o)s.push(e[o]);for(let o=0;o<r.length;++o)s.push(r[o]===1?e[o+i]:r[o]);return s},pg=(e,r)=>e.length>r.length?dc(e,r):dc(r,e),hg=e=>{let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=pg(r,i),o=e[0].dataType,d=o===9?4:1,u=Math.ceil(K.size(s)/d),h=g=>{let _=Y("input",o,r.length,d),v=Se("output",o,s.length,d),f;if(o===9){let x=(S,b,I="")=>`
          let outputIndices${b} = ${v.offsetToIndices(`outputOffset + ${b}u`)};
          let offset${b} = ${_.broadcastedIndicesToOffset(`outputIndices${b}`,v)};
          let index${b} = offset${b} / 4u;
          let component${b} = offset${b} % 4u;
          ${S}[${b}] = ${I}(${_.getByOffset(`index${b}`)}[component${b}]);
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
    ${f}`},m=[{type:12,data:u},...ge(r,s)];return{name:"Expand",shaderCache:{hint:`${s.length}`,inputDependencies:["rank"]},getShaderSource:h,getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m})}},uv=e=>{fg(e.inputs),e.compute(hg(e.inputs),{inputs:[0]})}}),mg,lv,c_=re(()=>{Re(),Be(),De(),pf(),mg=e=>{let r=e[0].dataType,i=K.size(e[0].dims),s=K.size(e[1].dims),o=s%4===0,d=u=>{let h=Y("x",r,[1],4),m=Y("bias",r,[1],4),g=Se("y",r,[1],4),_=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],v=x=>`
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
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${o}`,inputDependencies:["type","type"]},getShaderSource:d,getRunData:u=>({outputs:[{dims:u[0].dims,dataType:u[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:s}],dispatchGroup:{x:Math.ceil(i/Ra/4)}})}},lv=e=>{e.inputs.length<2||K.size(e.inputs[1].dims)===0?Tw(e):e.compute(mg(e.inputs))}}),gg,yg,dv,fv,f_=re(()=>{Re(),Be(),gt(),De(),gg=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},yg=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,d=K.normalizeAxis(r.axis,o),u=i.slice(0);u.splice(d,1,...s);let h=i[d],m=e[0].dataType===9?4:1,g=Math.ceil(K.size(u)/m),_=[{type:12,data:g},{type:6,data:h},{type:12,data:d},...ge(e[0].dims,e[1].dims,u)],v=f=>{let x=Y("data",e[0].dataType,e[0].dims.length,m),S=Y("inputIndices",e[1].dataType,e[1].dims.length),b=Se("output",e[0].dataType,u.length,m),I=C=>{let O=s.length,R=`var indicesIndices${C}  = ${S.type.indices}(0);`;for(let M=0;M<O;M++)R+=`${O>1?`indicesIndices${C}[${M}]`:`indicesIndices${C}`} = ${u.length>1?`outputIndices${C}[uniforms.axis + ${M}]`:`outputIndices${C}`};`;R+=`
          var idx${C} = ${S.getByIndices(`indicesIndices${C}`)};
          if (idx${C} < 0) {
            idx${C} = idx${C} + uniforms.axisDimLimit;
          }
          var dataIndices${C} : ${x.type.indices};
        `;for(let M=0,F=0;M<o;M++)M===d?(R+=`${o>1?`dataIndices${C}[${M}]`:`dataIndices${C}`} = u32(idx${C});`,F+=O):(R+=`${o>1?`dataIndices${C}[${M}]`:`dataIndices${C}`} = ${u.length>1?`outputIndices${C}[${F}]`:`outputIndices${C}`};`,F++);return R},A;if(e[0].dataType===9){let C=(O,R,M="")=>`
          let outputIndices${R} = ${b.offsetToIndices(`outputOffset + ${R}u`)};
          ${I(R)};
          let offset${R} = ${x.indicesToOffset(`dataIndices${R}`)};
          let index${R} = offset${R} / 4u;
          let component${R} = offset${R} % 4u;
          ${O}[${R}] = ${M}(${x.getByOffset(`index${R}`)}[component${R}]);
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
      ${I("")};
      let value = ${x.getByIndices("dataIndices")};
      ${b.setByOffset("global_idx","value")};
      `;return`
      ${f.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(x,S,b)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${A}
      }`};return{name:"Gather",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:u,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:v}},dv=e=>Ze({axis:e.axis}),fv=(e,r)=>{let i=e.inputs;gg(i),e.compute(yg(e.inputs,r))}}),wg,vg,pv,hv,p_=re(()=>{Re(),Be(),gt(),De(),wg=(e,r)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=K.normalizeAxis(r.quantizeAxis,e[0].dims.length),s=r.blockSize,o=e[0],d=e[2],u=e.length===4?e[3]:void 0;if(d.dims.length!==o.dims.length||!o.dims.map((h,m)=>m===i?Math.ceil(h/s)===d.dims[m]:h===d.dims[m]).reduce((h,m)=>h&&m,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(u){if(u.dataType!==o.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(u.dims.length!==d.dims.length||!u.dims.map((h,m)=>h===d.dims[m]).reduce((h,m)=>h&&m,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},vg=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,d=K.normalizeAxis(r.gatherAxis,o),u=K.normalizeAxis(r.quantizeAxis,o),h=i.slice(0);h.splice(d,1,...s);let m=K.size(h),g=e[2].dataType,_=e[0].dataType===22,v=[{type:12,data:m},{type:12,data:u},{type:12,data:d},{type:12,data:r.blockSize},...ge(...e.map((x,S)=>x.dims),h)],f=x=>{let S=Y("data",e[0].dataType,e[0].dims.length),b=Y("inputIndices",e[1].dataType,e[1].dims.length),I=Y("scales",e[2].dataType,e[2].dims.length),A=e.length>3?Y("zeroPoint",e[3].dataType,e[3].dims.length):void 0,C=Se("output",g,h.length),O=[S,b,I];A&&O.push(A);let R=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
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
        let quantize_axis_index = ${I.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${I.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${I.getByIndices("scale_indices")};
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
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${r.cacheKey};${e.filter((x,S)=>S!==1).map(x=>x.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(x,S)=>"rank")},getRunData:()=>({outputs:[{dims:h,dataType:g}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:f}},pv=(e,r)=>{let i=e.inputs;wg(i,r),e.compute(vg(e.inputs,r))},hv=e=>Ze({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),_g,$g,mv,gv,h_=re(()=>{Re(),Be(),gt(),De(),_g=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},$g=(e,r)=>{let i=e[0].dims,s=e[0].dataType,o=i.length,d=e[1].dims,u=e[1].dataType,h=K.normalizeAxis(r.axis,o),m=i[h],g=d.slice(0),_=K.size(g),v=Y("input",s,o),f=Y("indicesInput",u,d.length),x=Se("output",s,g.length),S=[{type:12,data:_},{type:6,data:m},{type:12,data:h}];return S.push(...ge(i,d,g)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:g,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:S}),getShaderSource:b=>`
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
  }`}},mv=e=>Ze({axis:e.axis}),gv=(e,r)=>{let i=e.inputs;_g(i),e.compute($g(e.inputs,r))}}),xg,bg,yv,wv,m_=re(()=>{Re(),Be(),De(),xg=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},bg=(e,r)=>{let i=e[0].dims.slice(),s=e[1].dims.slice(),[o,d,u]=_0.getShapeOfGemmResult(i,r.transA,s,r.transB,e.length===3?e[2].dims:void 0),h=[o,d];if(!h)throw new Error("Can't use gemm on the given tensors");let m=K.size(h),g=[{type:12,data:m},{type:12,data:o},{type:12,data:d},{type:12,data:u},{type:1,data:r.alpha},{type:1,data:r.beta}],_=["type","type"];e.length===3&&(g.push(...ge(e[2].dims)),_.push("rank")),g.push(...ge(h));let v=f=>{let x="";r.transA&&r.transB?x="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":r.transA&&!r.transB?x="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!r.transA&&r.transB?x="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!r.transA&&!r.transB&&(x="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let S=r.alpha===1?"":"value *= uniforms.alpha;",b=Y("a",e[0].dataType,e[0].dims),I=Y("b",e[1].dataType,e[1].dims),A=b.type.value,C=null,O=[b,I];e.length===3&&(C=Y("c",e[2].dataType,e[2].dims.length),O.push(C));let R=Se("output",e[0].dataType,h.length);O.push(R);let M=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${f.registerUniforms(M).declareVariables(...O)}

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
  }`};return{name:"Gemm",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:h,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:v}},yv=e=>{let r=e.transA,i=e.transB,s=e.alpha,o=e.beta;return{transA:r,transB:i,alpha:s,beta:o,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},wv=(e,r)=>{xg(e.inputs),e.compute(bg(e.inputs,r))}}),Ft,Sg,vv,cc,kg,Xs,_v,$v=re(()=>{Re(),Be(),gt(),lf(),ff(),De(),Yr(),Ft=(e,r)=>e.length>r&&e[r].dims.length>0?e[r]:void 0,Sg=(e,r)=>{let i=e[0],s=Ft(e,1),o=Ft(e,2),d=Ft(e,3),u=Ft(e,4),h=Ft(e,5),m=Ft(e,6),g=Ft(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let _=i.dims[0],v=i.dims[1],f=i.dims.length===3?i.dims[2]:r.numHeads*i.dims[4],x=v,S=0,b=0,I=Math.floor(f/r.numHeads);if(m&&g&&K.size(m.dims)&&K.size(g.dims)){if(m.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(m.dims[0]!==_||m.dims[1]!==r.numHeads||m.dims[3]!==I)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(g.dims[0]!==_||g.dims[1]!==r.numHeads||g.dims[3]!==I)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(m.dims[2]!==g.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(g.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');S=m.dims[2],b=m.dims[2]}else if(m&&K.size(m.dims)||g&&K.size(g.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let A;if(s&&K.size(s.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(s.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');A=2,x=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==I)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');A=5,x=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==I)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');A=0,x=s.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==r.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');A=3}if(d&&K.size(d.dims)>0){if(d.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(s&&s.dims.length===5&&s.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let C=S+x,O=0;if(u&&K.size(u.dims)>0){O=8;let U=u.dims;throw U.length===1?U[0]===_?O=1:U[0]===3*_+2&&(O=3):U.length===2&&U[0]===_&&U[1]===C&&(O=5),O===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let R=!1,M=f;if(o&&K.size(o.dims)>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(x!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');M=o.dims[2]}else{if(x!==o.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');M=o.dims[1]*o.dims[3],R=!0}}let F=!1;if(u&&K.size(u.dims)>0)throw new Error("Key padding mask is not supported");if(h&&K.size(h.dims)>0){if(h.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(h.dims[0]!==_||h.dims[1]!==r.numHeads||h.dims[2]!==v||h.dims[3]!==C)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:_,sequenceLength:v,pastSequenceLength:S,kvSequenceLength:x,totalSequenceLength:C,maxSequenceLength:b,inputHiddenSize:0,hiddenSize:f,vHiddenSize:M,headSize:I,vHeadSize:Math.floor(M/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:O,scale:r.scale,broadcastResPosBias:F,passPastInKv:R,qkvFormat:A}},vv=e=>Ze({...e}),cc=Ze({perm:[0,2,1,3]}),kg=(e,r,i,s,o,d,u)=>{let h=[s,o,d],m=K.size(h),g=[{type:12,data:m},{type:12,data:u},{type:12,data:d}],_=v=>{let f=Se("qkv_with_bias",r.dataType,h),x=Y("qkv",r.dataType,h),S=Y("bias",i.dataType,h),b=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${v.registerUniforms(b).declareVariables(x,S,f)}
  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:h,dataType:r.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:g}),getShaderSource:_},{inputs:[r,i],outputs:[-1]})[0]},Xs=(e,r,i,s,o,d,u,h)=>{let m=d;if(u&&K.size(u.dims)>0){if(s===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return m=kg(e,d,u,r,s,i*o,h),m=m.reshape([r,s,i,o]),i===1||s===1?m:e.compute(dn(m,cc.perm),{inputs:[m],outputs:[-1]})[0]}else return d.dims.length===3&&(m=d.reshape([r,s,i,o])),i===1||s===1?m:e.compute(dn(m,cc.perm),{inputs:[m],outputs:[-1]})[0]},_v=(e,r)=>{let i=Sg(e.inputs,r),s=e.inputs[0],o=Ft(e.inputs,1),d=Ft(e.inputs,2),u=Ft(e.inputs,3),h=Ft(e.inputs,4),m=Ft(e.inputs,5),g=Ft(e.inputs,6),_=Ft(e.inputs,7);if(s.dims.length===5)throw new Error("Packed QKV is not implemented");if((o==null?void 0:o.dims.length)===5)throw new Error("Packed KV is not implemented");let v=o&&d&&o.dims.length===4&&d.dims.length===4,f=Xs(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,s,u,0);if(v)return eo(e,f,o,d,h,void 0,g,_,m,i,r);if(!o||!d)throw new Error("key and value must be provided");let x=Xs(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,o,u,i.hiddenSize),S=Xs(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,d,u,2*i.hiddenSize);eo(e,f,x,S,h,void 0,g,_,m,i,r)}}),fc,Eg,Cg,Vc,xv,bv=re(()=>{Re(),Be(),De(),fc=e=>Array.from(e.getBigInt64Array(),Number),Eg=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(fc(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Cg=(e,r)=>{let i=[];for(let s=0;s<e.length;++s)i.push(e[s]*r[s]);return i},Vc=(e,r)=>{let i=e[0].dims,s=r??fc(e[1]),o=Cg(i,s),d=K.size(o),u=e[0].dataType,h=Y("input",u,i.length),m=Se("output",u,o.length),g=_=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:[{type:12,data:d},...ge(e[0].dims,o)]}),getShaderSource:g}},xv=e=>{Eg(e.inputs),e.compute(Vc(e.inputs),{inputs:[0]})}}),Tg,pc,Sv,Ig,hc,kv,g_=re(()=>{Re(),Be(),gt(),ff(),De(),$v(),bv(),Yr(),Tg=(e,r)=>{let i=e[0],s=e[1],o=e[2],d=e[3],u=e[4];if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let h=!1,m=i.dims[0],g=i.dims[1],_=i.dims.length===3?h?i.dims[2]/3:i.dims[2]:r.numHeads*i.dims[4],v=g,f=0,x=0,S=Math.floor(_/r.numHeads),b=d&&d.dims.length!==0,I=u&&u.dims.length!==0,A=!0;if(b&&I){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');f=d.dims[1],x=d.dims[1]}else if(b||I)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let C;if(s){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(i.dims[2]%s.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');C=2,v=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');C=5,v=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');C=0,v=s.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==r.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');C=3}let O=0,R=!1,M=_;if(o){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(v!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');M=o.dims[2]}else{if(v!==o.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');M=o.dims[1]*o.dims[3],R=!0}}let F=f+v;return{batchSize:m,sequenceLength:g,pastSequenceLength:f,kvSequenceLength:v,totalSequenceLength:F,maxSequenceLength:x,inputHiddenSize:0,hiddenSize:_,vHiddenSize:M,headSize:S,vHeadSize:Math.floor(M/r.kvNumHeads),numHeads:r.numHeads,kvNumHeads:r.kvNumHeads,nReps:r.numHeads/r.kvNumHeads,pastPresentShareBuffer:!1,maskType:O,scale:r.scale,broadcastResPosBias:!1,passPastInKv:R,qkvFormat:C,isPastkvBSNH:A}},pc=(e,r,i,s)=>{let o=[s.batchSize,s.totalSequenceLength,s.kvNumHeads,s.headSize],d=4,u=K.size(o)/d,h=s.totalSequenceLength,m=Se("present_kv",i,o.length,d),g=Y("new_kv",e.dataType,e.dims.length,d),_=r?Y("past_kv",r.dataType,r.dims.length,d):void 0,v=Math.ceil(s.headSize/d),f={x:h,y:e.dims[0],z:1},x=r?["rank","rank"]:["rank"],S=[{type:12,data:u},{type:12,data:s.pastSequenceLength},{type:12,data:s.kvSequenceLength},{type:12,data:s.totalSequenceLength}],b=[g];_?(S.push(...ge(e.dims),...ge(r.dims),...ge(o)),b.push(_)):S.push(...ge(e.dims),...ge(o));let I=[{name:"output_size",type:"u32"},{name:"past_seqlen",type:"u32"},{name:"new_seqlen",type:"u32"},{name:"present_seqlen",type:"u32"}],A=`      let past_batch_stride = uniforms.past_seqlen * num_heads * H;
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
        }`,R=M=>`

  ${M.registerUniforms(I).declareVariables(...b,m)}
  ${M.mainStart([v,s.kvNumHeads,1])}
    ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
  }`;return{name:"ConcatPastNew",shaderCache:{hint:`${s.kvNumHeads}${v}${!!r}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:f,programUniforms:S}),getShaderSource:R}},Sv=e=>Ze({...e}),Ig=Ze({perm:[0,2,1,3]}),hc=(e,r,i,s,o)=>{let d=r,u=s.kvNumHeads,h=s.nReps;return r.dims.length===3&&s.kvSequenceLength!==0&&(d=r.reshape([s.batchSize,s.kvSequenceLength,u,s.headSize])),i?d=e.compute(pc(d,i,d.dataType,s),{inputs:[d,i],outputs:[s.isPastkvBSNH?o:-1]})[0]:d=e.compute(pc(d,void 0,d.dataType,s),{inputs:[d],outputs:[s.isPastkvBSNH?o:-1]})[0],h!==1&&(d=e.compute(Vc([d],[1,1,1,h]),{inputs:[d],outputs:[-1]})[0],d=d.reshape([s.batchSize,s.totalSequenceLength,u*h,s.headSize])),e.compute(dn(d,Ig.perm),{inputs:[d],outputs:[-1]})[0]},kv=(e,r)=>{var m;let i=Tg(e.inputs,r);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((m=e.inputs[1])==null?void 0:m.dims.length)===5)throw new Error("Packed KV is not implemented");let s=Xs(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,e.inputs[0],void 0,0),o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,d=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=hc(e,e.inputs[1],o,i,1),h=hc(e,e.inputs[2],d,i,2);eo(e,s,u,h,void 0,void 0,void 0,void 0,void 0,i,r)}}),mc,zg,Ag,Ev,y_=re(()=>{Re(),Be(),Yr(),De(),mc=(e,r,i,s,o,d,u,h)=>{let m=pt(d),g=m===1?"f32":`vec${m}f`,_=m===1?"vec2f":`mat2x${m}f`,v=o*u,f=[o,u,d/m],x=[o,u,2],S=["rank","type","type"],b=[];b.push(...ge(f,x));let I=A=>{let C=Y("x",r.dataType,3,m),O=Y("scale",i.dataType,i.dims),R=Y("bias",s.dataType,s.dims),M=Se("output",1,3,2),F=[C,O,R,M],U=64;return`
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
      let sum_final = ${qr("workgroup_shared[0][0]",m)} / f32(hight * ${m});
      let squared_sum_final = ${qr("workgroup_shared[0][1]",m)} / f32(hight * ${m});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${h}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${m};${h}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:x,dataType:1}],dispatchGroup:{x:v},programUniforms:b}),getShaderSource:I},{inputs:[r,i,s],outputs:[-1]})[0]},zg=(e,r,i)=>{let s=r[0].dims,o=s,d=2,u=s[0],h=s[1],m=K.sizeFromDimension(s,d),g=pt(m),_=K.size(o)/g,v=mc(e,r[0],r[1],r[2],u,m,h,i.epsilon),f=[u,h,m/g],x=[u,h],S=["type","none"],b=I=>{let A=Y("x",r[0].dataType,f.length,g),C=Y("scale_shift",1,x.length,2),O=Se("output",r[0].dataType,f.length,g),R=[A,C,O];return`
  ${I.registerUniform("output_size","u32").declareVariables(...R)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${O.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${C.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${A.getByOffset("global_idx")} * ${O.type.value}(scale_shift.x) + ${O.type.value}(scale_shift.y);
      ${O.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${g}`,inputDependencies:S},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...ge(f,x,f)]}),getShaderSource:b},{inputs:[r[0],v]})},Ag=(e,r,i)=>{let s=r[0].dims,o=s,d=s[0],u=s[s.length-1],h=K.sizeFromDimension(s,1)/u,m=pt(u),g=K.size(o)/m,_=[{type:12,data:h},{type:12,data:Math.floor(u/m)}],v=["type","type"],f=[0,s.length-1];for(let I=0;I<s.length-2;I++)f.push(I+1);let x=e.compute(dn(e.inputs[0],f),{inputs:[e.inputs[0]],outputs:[-1]})[0],S=mc(e,x,r[1],r[2],d,h,u,i.epsilon),b=I=>{let A=vt(r[0].dataType),C=m===1?"vec2f":`mat${m}x2f`,O=F=>{let U=F===0?"x":"y",Q=m===1?"f32":`vec${m}f`;switch(m){case 1:return`${A}(${Q}(scale.${U}))`;case 2:return`vec2<${A}>(${Q}(scale[0].${U}, scale[1].${U}))`;case 4:return`vec4<${A}>(${Q}(scale[0].${U}, scale[1].${U}, scale[2].${U}, scale[3].${U}))`;default:throw new Error(`Not supported compoents ${m}`)}},R=Y("input",r[0].dataType,r[0].dims,m),M=Se("output",r[0].dataType,o,m);return`
  @group(0) @binding(0) var<storage, read> input : array<${R.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${C}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${M.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${I.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${O(0)}, ${O(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${m}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(g/64)},programUniforms:_}),getShaderSource:b},{inputs:[r[0],S]})},Ev=(e,r)=>{r.format==="NHWC"?Ag(e,e.inputs,r):zg(e,e.inputs,r)}}),Rg,Og,Cv,w_=re(()=>{Re(),Be(),De(),Rg=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Og=(e,r,i)=>{let s=r.simplified,o=e[0].dims,d=e[1],u=!s&&e[2],h=o,m=K.normalizeAxis(r.axis,o.length),g=K.sizeToDimension(o,m),_=K.sizeFromDimension(o,m),v=K.size(d.dims),f=u?K.size(u.dims):0;if(v!==_||u&&f!==_)throw new Error(`Size of X.shape()[axis:] == ${_}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${v} and bias size of ${f}`);let x=[];for(let M=0;M<o.length;++M)M<m?x.push(o[M]):x.push(1);let S=pt(_),b=["type","type"],I=[{type:12,data:g},{type:1,data:_},{type:12,data:Math.floor(_/S)},{type:1,data:r.epsilon}];u&&b.push("type");let A=i>1,C=i>2,O=M=>{let F=vt(e[0].dataType),U=[Y("x",e[0].dataType,e[0].dims,S),Y("scale",d.dataType,d.dims,S)];u&&U.push(Y("bias",u.dataType,u.dims,S)),U.push(Se("output",e[0].dataType,h,S)),A&&U.push(Se("mean_data_output",1,x)),C&&U.push(Se("inv_std_output",1,x));let Q=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${M.registerUniforms(Q).declareVariables(...U)}
  ${M.mainStart()}
    ${M.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Mc("f32",S)};
    var mean_square_vector = ${Mc("f32",S)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${za(F,S,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${qr("mean_vector",S)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${qr("mean_square_vector",S)} / uniforms.norm_size ${s?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${za(F,S,"x[j + offset]")};
      let f32scale = ${za(F,S,"scale[j]")};
      output[j + offset] = ${U[0].type.value}((f32input ${s?"":"- mean"}) * inv_std_dev * f32scale
        ${u?`+ ${za(F,S,"bias[j]")}`:""}
      );
    }

    ${A?"mean_data_output[global_idx] = mean":""};
    ${C?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},R=[{dims:h,dataType:e[0].dataType}];return A&&R.push({dims:x,dataType:1}),C&&R.push({dims:x,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${S};${i};${s}`,inputDependencies:b},getRunData:()=>({outputs:R,dispatchGroup:{x:Math.ceil(g/64)},programUniforms:I}),getShaderSource:O}},Cv=(e,r)=>{Rg(e.inputs),e.compute(Og(e.inputs,r,e.outputCount))}}),Pg,Mg,Bg,Tv,Iv,v_=re(()=>{Re(),Be(),gt(),De(),Pg=(e,r)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],s=i.dims.length;if(i.dims[s-1]!==r.k)throw new Error("The last dim of input shape does not match the k value");let o=Math.floor((r.k+r.blockSize-1)/r.blockSize),d=r.blockSize/8*r.bits,u=e[1];if(!K.areEqual(u.dims,[r.n,o,d]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let h=e[2].dims;if(K.size(h)!==r.n*o)throw new Error("scales input size error.");if(e.length===4){let m=e[3].dims,g=r.bits>4?r.n*o:r.n*Math.floor((o+1)/2);if(K.size(m)!==g)throw new Error("zeroPoints input size error.")}},Mg=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],d=r.k,u=r.n,h=i.slice(0,s-2),m=K.size(h),g=e[1].dims[2]/4,_=e[0].dataType,v=pt(r.k),f=pt(g),x=pt(u),S=h.concat([o,u]),b=o>1&&u/x%2===0?2:1,I=K.size(S)/x/b,A=64,C=[],O=[m,o,d/v],R=K.convertShape(e[1].dims).slice();R.splice(-1,1,g/f),C.push(...ge(O)),C.push(...ge(R)),C.push(...ge(e[2].dims)),e.length===4&&C.push(...ge(K.convertShape(e[3].dims)));let M=[m,o,u/x];C.push(...ge(M));let F=U=>{let Q=O.length,se=Y("a",e[0].dataType,Q,v),ue=Y("b",12,R.length,f),we=Y("scales",e[2].dataType,e[2].dims.length),he=[se,ue,we],de=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;de&&he.push(de);let Te=M.length,Pe=Se("output",e[0].dataType,Te,x),_e=vt(e[0].dataType),Ee=(()=>{switch(v){case 1:return`array<${_e}, 8>`;case 2:return`mat4x2<${_e}>`;case 4:return`mat2x4<${_e}>`;default:throw new Error(`${v}-component is not supported.`)}})(),q=()=>{let z=`
          // reuse a data
            var input_offset = ${se.indicesToOffset(`${se.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Ee};
            for (var j: u32 = 0; j < ${8/v}; j++) {
              a_data[j] = ${se.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let N=0;N<x*b;N++)z+=`
            b_value = ${f===1?`b${N}_data`:`b${N}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Ee}(${Array.from({length:4},(ie,ee)=>`${_e}(b_value_lower[${ee}]), ${_e}(b_value_upper[${ee}])`).join(", ")});
            b_dequantized_values = ${v===1?`${Ee}(${Array.from({length:8},(ie,ee)=>`(b_quantized_values[${ee}] - ${de?`zero_point${N}`:"zero_point"}) * scale${N}`).join(", ")});`:`(b_quantized_values - ${Ee}(${Array(8).fill(`${de?`zero_point${N}`:"zero_point"}`).join(",")})) * scale${N};`};
            workgroup_shared[local_id.x * ${b} + ${Math.floor(N/x)}]${x>1?`[${N%x}]`:""} += ${Array.from({length:8/v},(ie,ee)=>`${v===1?`a_data[${ee}] * b_dequantized_values[${ee}]`:`dot(a_data[${ee}], b_dequantized_values[${ee}])`}`).join(" + ")};
          `;return z},X=()=>{let z=`
            var col_index = col * ${x};
            ${de?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${_e}(8);`}
            `;for(let N=0;N<x*b;N++)z+=`
            let scale${N} = ${we.getByOffset("col_index * nBlocksPerCol + block")};
            ${de?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${de.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${N} = ${_e}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return z},J=()=>{let z=`col_index = col * ${x};`;for(let N=0;N<x*b;N++)z+=`
            let b${N}_data = ${ue.getByIndices(`${ue.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return z+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Ee};
            var b_dequantized_values: ${Ee};`,z};return`
        var<workgroup> workgroup_shared: array<${Pe.type.value}, ${b*A}>;
        ${U.declareVariables(...he,Pe)}
        ${U.mainStart([A,1,1])}
          let output_indices = ${Pe.offsetToIndices(`(global_idx / ${A}) * ${b}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${A}) {
            //process one block
            var word_offset: u32 = block * ${r.blockSize/v};
            ${X()}
            for (var word: u32 = 0; word < ${g}; word += ${f}) {
              ${J()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${q()}
                word_offset += ${8/v};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${b}) {
            var output_value: ${Pe.type.value} = ${Pe.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${A}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${b};
            }
            ${Pe.setByIndices(`${Pe.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${r.blockSize};${r.bits};${v};${f};${x};${b};${A}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:_}],dispatchGroup:{x:I},programUniforms:C}),getShaderSource:F}},Bg=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],d=r.k,u=r.n,h=i.slice(0,s-2),m=K.size(h),g=e[1].dims[2]/4,_=e[0].dataType,v=pt(r.k),f=pt(g),x=h.concat([o,u]),S=128,b=u%8===0?8:u%4===0?4:1,I=S/b,A=I*f*8,C=A/v,O=A/r.blockSize,R=K.size(x)/b,M=[],F=[m,o,d/v],U=K.convertShape(e[1].dims).slice();U.splice(-1,1,g/f),M.push(...ge(F)),M.push(...ge(U)),M.push(...ge(e[2].dims)),e.length===4&&M.push(...ge(K.convertShape(e[3].dims)));let Q=[m,o,u];M.push(...ge(Q));let se=ue=>{let we=F.length,he=Y("a",e[0].dataType,we,v),de=Y("b",12,U.length,f),Te=Y("scales",e[2].dataType,e[2].dims.length),Pe=[he,de,Te],_e=e.length===4?Y("zero_points",12,e[3].dims.length):void 0;_e&&Pe.push(_e);let Ee=Q.length,q=Se("output",e[0].dataType,Ee),X=vt(e[0].dataType),J=()=>{switch(v){case 1:return`
          let a_data0 = vec4<${X}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${X}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${X}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${X}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${v}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${he.type.value}, ${C}>;
        var<workgroup> inter_results: array<array<${q.type.value}, ${I}>, ${b}>;
        ${ue.declareVariables(...Pe,q)}
        ${ue.mainStart([I,b,1])}
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
                sub_a[a_offset] = ${he.getByIndices(`${he.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${he.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${O} + local_id.x;
            ${_e?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${_e.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${X}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${X}(8);`}
            let scale = ${Te.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${de.getByIndices(`${de.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${r.blockSize/v};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${J()}
              let b_value = ${f===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${X}>(${Array.from({length:4},(z,N)=>`${X}(b_value_lower[${N}]), ${X}(b_value_upper[${N}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${X}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(z,N)=>`${`dot(a_data${N}, b_dequantized_values[${N}])`}`).join(" + ")};
              word_offset += ${8/v};
            }
            workgroupBarrier();
          }

          if (local_idx < ${b}) {
            var output_value: ${q.type.value} = ${q.type.value}(0);
            for (var b = 0u; b < ${I}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${q.setByIndices(`${q.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${r.blockSize};${v};${f};${I};${b}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:x,dataType:_}],dispatchGroup:{x:R},programUniforms:M}),getShaderSource:se}},Tv=(e,r)=>{Pg(e.inputs,r),r.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Bg(e.inputs,r)):e.compute(Mg(e.inputs,r))},Iv=e=>Ze(e)}),Dg,Ng,Lg,Ug,jg,Fg,Wg,Vg,zv,__=re(()=>{Re(),Be(),De(),Dg=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let r=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(r=e[3].dims[0]*2===e[1].dims[0]),!r)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ng=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
            k = i32(${e.indicesGet("indices",o)}) - ${ve("uniforms.pads",o,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${ve("uniforms.x_shape",o,r)})) {
              break;
            }
            offset += k * i32(${ve("uniforms.x_strides",o,r)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${s}
            value = x[offset];
          }
      `},Lg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${ve("uniforms.pads",o,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${ve("uniforms.x_shape",o,r)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${ve("uniforms.x_shape",o,r)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${ve("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Ug=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${ve("uniforms.pads",o,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${ve("uniforms.x_shape",o,r)})) {
                  k = i32(${ve("uniforms.x_shape",o,r)}) - 1;
                }
                offset += k * i32(${ve("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},jg=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${ve("uniforms.pads",o,i)};
                if (k < 0)  {
                  k += i32(${ve("uniforms.x_shape",o,r)}]);
                }
                if (k >= i32(${ve("uniforms.x_shape",o,r)})) {
                  k -= i32(${ve("uniforms.x_shape",o,r)});
                }
                offset += k * i32(${ve("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Fg=(e,r,i)=>{switch(i.mode){case 0:return Ng(e,r,i.pads.length);case 1:return Lg(e,r,i.pads.length);case 2:return Ug(e,r,i.pads.length);case 3:return jg(e,r,i.pads.length);default:throw new Error("Invalid mode")}},Wg=(e,r)=>{let i=K.padShape(e[0].dims.slice(),r.pads),s=e[0].dims,o=K.size(i),d=[{type:12,data:o},{type:6,data:r.pads}],u=e.length>=3&&e[2].data;r.mode===0&&d.push({type:u?e[2].dataType:1,data:r.value}),d.push(...ge(e[0].dims,i));let h=["rank"],m=g=>{let _=Se("output",e[0].dataType,i.length),v=Y("x",e[0].dataType,s.length),f=v.type.value,x=Fg(_,s.length,r),S=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:r.pads.length}];return r.mode===0&&S.push({name:"constant_value",type:u?f:"f32"}),`
            ${g.registerUniforms(S).declareVariables(v,_)}
            ${g.mainStart()}
            ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${_.offsetToIndices("global_idx")};

            var value = ${f}(0);
            ${x}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${r.mode}${u}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(i)/64)},programUniforms:d}),getShaderSource:m}},Vg=(e,r)=>{if(e.length>1){let i=e[1].getBigInt64Array(),s=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,o=e[0].dims.length,d=new Int32Array(2*o).fill(0);if(e.length>=4){let h=e[3].getBigInt64Array();for(let m=0;m<h.length;m++)d[Number(h[m])]=Number(i[m]),d[Number(h[m])+o]=Number(i[m+h.length])}else i.forEach((h,m)=>d[Number(m)]=Number(h));let u=[];return d.forEach(h=>u.push(h)),{mode:r.mode,value:s,pads:u}}else return r},zv=(e,r)=>{Dg(e.inputs);let i=Vg(e.inputs,r);e.compute(Wg(e.inputs,i),{inputs:[0]})}}),Fs,gc,yc,wc,vc,Hg,qg,_c,$c,Av,Rv,xc,Ov,Pv,bc,Mv,Bv,Dv,Nv,$_=re(()=>{Dn(),Re(),Be(),De(),Fs=e=>{if(et.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},gc=(e,r,i)=>{let s=r.format==="NHWC",o=e.dims.slice();s&&o.splice(1,0,o.pop());let d=Object.hasOwnProperty.call(r,"dilations"),u=r.kernelShape.slice(),h=r.strides.slice(),m=d?r.dilations.slice():[],g=r.pads.slice();Xu.adjustPoolAttributes(i,o,u,h,m,g);let _=Xu.computePoolOutputShape(i,o,h,m,u,g,r.autoPad),v=Object.assign({},r);d?Object.assign(v,{kernelShape:u,strides:h,pads:g,dilations:m,cacheKey:r.cacheKey}):Object.assign(v,{kernelShape:u,strides:h,pads:g,cacheKey:r.cacheKey});let f=_.slice();return f.push(f.splice(1,1)[0]),[v,s?f:_]},yc=(e,r)=>{let i=r.format==="NHWC",s=K.size(e),o=K.size(r.kernelShape),d=[{type:12,data:s},{type:12,data:o}],u=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(r.kernelShape.length<=2){let h=r.kernelShape[r.kernelShape.length-1],m=r.strides[r.strides.length-1],g=r.pads[r.pads.length/2-1],_=r.pads[r.pads.length-1],v=!!(g+_);d.push({type:12,data:h},{type:12,data:m},{type:12,data:g},{type:12,data:_}),u.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let f=!1;if(r.kernelShape.length===2){let x=r.kernelShape[r.kernelShape.length-2],S=r.strides[r.strides.length-2],b=r.pads[r.pads.length/2-2],I=r.pads[r.pads.length-2];f=!!(b+I),d.push({type:12,data:x},{type:12,data:S},{type:12,data:b},{type:12,data:I}),u.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[d,u,!0,v,f]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let h=K.computeStrides(r.kernelShape);d.push({type:12,data:h},{type:12,data:r.pads},{type:12,data:r.strides}),u.push({name:"kernelStrides",type:"u32",length:h.length},{name:"pads",type:"u32",length:r.pads.length},{name:"strides",type:"u32",length:r.strides.length});let m=r.pads.reduce((g,_)=>g+_);return[d,u,!!m,!1,!1]}},wc=(e,r,i,s,o,d,u,h,m,g,_,v)=>{let f=o.format==="NHWC",x=r.type.value,S=Se("output",r.type.tensor,s);if(o.kernelShape.length<=2){let b="",I="",A="",C=i-(f?2:1);if(_?b=`
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
                }`,o.kernelShape.length===2){let O=i-(f?3:2);v?I=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${O}] = indices[${O}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${O}] < 0 || xIndices[${O}] >= uniforms.x_shape[${O}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:I=`
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
              ${I}
              ${b}
              ${A}
              ${u}

              output[global_idx] = value;
            }`}else{if(f)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let b=o.kernelShape.length,I=o.pads.length,A="";return g?A=`
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
                  offsets[j] = offset / ${ve("uniforms.kernelStrides","j",b)};
                  offset -= offsets[j] * ${ve("uniforms.kernelStrides","j",b)};
                }
                offsets[${b-1}] = offset;

                isPad = false;
                for (var j = ${i-b}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${ve("uniforms.strides",`j - ${i-b}u`,b)}
                    + offsets[j - ${i-b}u] - ${ve("uniforms.pads","j - 2u",I)};
                  ${A}
              }
              ${u}

              output[global_idx] = value;
            }`}},vc=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Hg=e=>`${vc(e)};${e.countIncludePad}`,qg=e=>`${vc(e)};${e.storageOrder};${e.dilations}`,_c=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),$c=(e,r,i,s)=>{let[o,d]=gc(r,s,i),u=Y("x",r.dataType,r.dims.length),h=u.type.value,m="value += x_val;",g="";o.countIncludePad?g+=`value /= ${h}(uniforms.kernelSize);`:g+=`value /= ${h}(i32(uniforms.kernelSize) - pad);`;let[_,v,f,x,S]=yc(d,o);_.push(...ge(r.dims,d));let b=["rank"];return{name:e,shaderCache:{hint:`${s.cacheKey};${f};${x};${S}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:d,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(K.size(d)/64)},programUniforms:_}),getShaderSource:I=>wc(I,u,r.dims.length,d.length,o,m,g,0,v,f,x,S)}},Av=e=>{let r=e.count_include_pad!==0,i=_c(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let s={countIncludePad:r,...i,cacheKey:""};return{...s,cacheKey:Hg(s)}},Rv=(e,r)=>{Fs(e.inputs),e.compute($c("AveragePool",e.inputs[0],!1,r))},xc={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Ov=e=>{let r=e.format;return{format:r,...xc,cacheKey:r}},Pv=(e,r)=>{Fs(e.inputs),e.compute($c("GlobalAveragePool",e.inputs[0],!0,r))},bc=(e,r,i,s)=>{let[o,d]=gc(r,s,i),u=`
      value = max(x_val, value);
    `,h="",m=Y("x",r.dataType,r.dims.length),g=["rank"],[_,v,f,x,S]=yc(d,o);return _.push(...ge(r.dims,d)),{name:e,shaderCache:{hint:`${s.cacheKey};${f};${x};${S}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:d,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(K.size(d)/64)},programUniforms:_}),getShaderSource:b=>wc(b,m,r.dims.length,d.length,o,u,h,r.dataType===10?-65504:-1e5,v,f,x,S)}},Mv=(e,r)=>{Fs(e.inputs),e.compute(bc("MaxPool",e.inputs[0],!1,r))},Bv=e=>{let r=e.storage_order,i=e.dilations,s=_c(e);if(r!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(s.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let o={storageOrder:r,dilations:i,...s,cacheKey:""};return{...o,cacheKey:qg(o)}},Dv=e=>{let r=e.format;return{format:r,...xc,cacheKey:r}},Nv=(e,r)=>{Fs(e.inputs),e.compute(bc("GlobalMaxPool",e.inputs[0],!0,r))}}),Gg,Kg,Lv,Uv,x_=re(()=>{Re(),Be(),gt(),De(),Gg=(e,r)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,s)=>i===e[2].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(r.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((o,d)=>d===r.axis||o===e[0].dims[d]).reduce((o,d)=>o&&d,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[r.axis],s=e[1].dims[r.axis];if(r.blockSize<Math.ceil(i/s)||r.blockSize>Math.ceil(i/(s-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Kg=(e,r)=>{let i=K.normalizeAxis(r.axis,e[0].dims.length),s=e[0].dataType,o=s===3,d=e[0].dims,u=e[1].dataType,h=K.size(d),m=s===3||s===2,g=m?[Math.ceil(K.size(e[0].dims)/4)]:e[0].dims,_=e[1].dims,v=e.length>2?e[2]:void 0,f=v?m?[Math.ceil(K.size(v.dims)/4)]:v.dims:void 0,x=_.length===0||_.length===1&&_[0]===1,S=x===!1&&_.length===1,b=pt(h),I=x&&(!m||b===4),A=I?b:1,C=I&&!m?b:1,O=Y("input",m?12:s,g.length,C),R=Y("scale",u,_.length),M=v?Y("zero_point",m?12:s,f.length):void 0,F=Se("output",u,d.length,A),U=[O,R];M&&U.push(M);let Q=[g,_];v&&Q.push(f);let se=[{type:12,data:h/A},{type:12,data:i},{type:12,data:r.blockSize},...ge(...Q,d)],ue=we=>{let he=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${we.registerUniforms(he).declareVariables(...U,F)}
      ${we.mainStart()}
          ${we.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
          ${M?x?m?`
                let zero_point_input = ${M.getByOffset("0")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${M.getByOffset("0")}`:S?m?`
                let zero_point_index = ${F.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${M.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${F.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${M.getByOffset("zero_point_index")};`:m?`
                let zero_point_offset = ${R.indicesToOffset("scale_indices")};
                let zero_point_input = ${M.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${M.getByIndices("scale_indices")};`:`let zero_point_value = ${m?o?"i32":"u32":O.type.value}(0);`};
      // Compute and write output
      ${F.setByOffset("global_idx",`${F.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:r.cacheKey,inputDependencies:M?["rank","rank","rank"]:["rank","rank"]},getShaderSource:ue,getRunData:()=>({outputs:[{dims:d,dataType:u}],dispatchGroup:{x:Math.ceil(h/A/64),y:1,z:1},programUniforms:se})}},Lv=(e,r)=>{Gg(e.inputs,r),e.compute(Kg(e.inputs,r))},Uv=e=>Ze({axis:e.axis,blockSize:e.blockSize})}),Qg,Yg,jv,b_=re(()=>{Dn(),Re(),De(),Qg=(e,r,i)=>{let s=e===r,o=e<r&&i<0,d=e>r&&i>0;if(s||o||d)throw new Error("Range these inputs' contents are invalid.")},Yg=(e,r,i,s)=>{let o=Math.abs(Math.ceil((r-e)/i)),d=[o],u=o,h=[{type:12,data:u},{type:s,data:e},{type:s,data:i},...ge(d)],m=g=>{let _=Se("output",s,d.length),v=_.type.value,f=[{name:"outputSize",type:"u32"},{name:"start",type:v},{name:"delta",type:v}];return`
        ${g.registerUniforms(f).declareVariables(_)}
        ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${v}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${s}`},getShaderSource:m,getRunData:()=>({outputs:[{dims:d,dataType:s}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:h})}},jv=e=>{let r=0,i=0,s=0;e.inputs[0].dataType===6?(r=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],s=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(r=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],s=e.inputs[2].getFloat32Array()[0]),et.webgpu.validateInputContent&&Qg(r,i,s),e.compute(Yg(r,i,s,e.inputs[0].dataType),{inputs:[]})}}),Zg,Xg,Jg,ey,ty,ny,ry,iy,ay,sy,oy,Sc,uy,ly,dy,cy,fy,Fv,Wv,S_=re(()=>{Re(),Be(),gt(),De(),Zg=(e,r)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(r.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
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
        var scale = ${ve("uniforms.scales","i",s)};
        var roi_low = ${ve("uniforms.roi","i",o)};
        var roi_hi = ${ve("uniforms.roi",`i + ${r.length}`,o)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${ve("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${ve("uniforms.output_shape","i",i.length)};
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
        var scale = ${ve("uniforms.scales","i",o)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${ve("uniforms.roi","i",d)};
          var roi_hi = ${ve("uniforms.roi",`i + ${i.length}`,d)};
          var input_shape_i = ${ve("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${ve("uniforms.output_shape","i",s.length)};
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
        if (input_index < 0 || input_index >= ${ve("uniforms.input_shape","i",r.length)}) {
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
    }`},ly=(e,r,i,s,o,d,u,h,m,g)=>{let _=i.length===2,[v,f]=_?[0,1]:[2,3],x=e.type.value,S=b=>{let I=b===v?"row":"col";return`
      fn ${I}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${r.type.indices}) -> ${x} {
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
          var ${I}: ${x} = originalIdx + ${x}(i);
          if (${I} < 0 || ${I} >= ${i[b]}) {
            ${g?`coefs[i + 1] = 0.0;
                        continue;`:h?`return ${m};`:`${I} = max(0, min(${I}, ${i[b]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",b,`u32(${I})`)};
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
    }`},cy=(e,r,i,s,o,d)=>{let u=e.dims,h=ny(d,r.axes,u.length),m=ry(u,s,o,r.axes),g=s.slice();s.length===0&&(g=u.map((C,O)=>C===0?1:m[O]/C),r.keepAspectRatioPolicy!=="stretch"&&(m=iy(u,g,r)));let _=Se("output",e.dataType,m.length),v=Y("input",e.dataType,u.length),f=K.size(m),x=u.length===m.length&&u.every((C,O)=>C===m[O]),S=r.coordinateTransformMode==="tf_crop_and_resize",b=r.extrapolationValue,I=v.type.value,A=C=>`
      ${x?"":`
      ${ey(r.coordinateTransformMode,I)};
      ${(()=>{switch(r.mode){case"nearest":return`
              ${oy(v,u)};
              ${ty(r.nearestMode,i,I)};
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
      }`;return{name:"Resize",shaderCache:{hint:`${r.cacheKey}|${i}|${g.length>0?g:""}|${o.length>0?o:""}|${h.length>0?h:""}|${x}|${u}`,inputDependencies:["rank"]},getShaderSource:A,getRunData:()=>({outputs:[{dims:m,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:g},{type:1,data:h},...ge(u,m)]})}},fy=e=>{let r=e.customDataBuffer;return new Uint32Array(r,r.byteOffset,1)[0]},Fv=(e,r)=>{let i=[],s=[],o=[],d=fy(e);if(r.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");Jg(e.inputs,r,d,i,s,o),e.compute(cy(e.inputs[0],r,d,i,s,o),{inputs:[0]})},Wv=e=>{let r=e.antialias,i=e.axes,s=e.coordinateTransformMode,o=e.cubicCoeffA,d=e.excludeOutside!==0,u=e.extrapolationValue,h=e.keepAspectRatioPolicy,m=e.mode,g=e.nearestMode===""?"simple":e.nearestMode;return Ze({antialias:r,axes:i,coordinateTransformMode:s,cubicCoeffA:o,excludeOutside:d,extrapolationValue:u,keepAspectRatioPolicy:h,mode:m,nearestMode:g})}}),py,hy,Vv,k_=re(()=>{Re(),Be(),gt(),De(),py=(e,r)=>{let[i,s,o,d]=e,{numHeads:u,rotaryEmbeddingDim:h}=r;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!K.areEqual(s.dims,[])&&!K.areEqual(s.dims,[1])&&s.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${s.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(d.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${d.dims.length}`);if(!K.areEqual(o.dims,d.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(h>0&&u===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let m=i.dims[0],g=i.dims[i.dims.length-2],_=o.dims[0],v=K.sizeFromDimension(i.dims,1)/g,f=h===0?o.dims[1]*2:v/u;if(h>f)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(s.dims.length===2){if(m!==s.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${s.dims[0]}`);if(g!==s.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${s.dims[1]}`)}if(f/2!==o.dims[1]&&h/2!==o.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${o.dims[1]}`);if(g>_)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},hy=(e,r)=>{let{interleaved:i,numHeads:s,rotaryEmbeddingDim:o,scale:d}=r,u=e[0].dims[0],h=K.sizeFromDimension(e[0].dims,1),m=e[0].dims[e[0].dims.length-2],g=h/m,_=e[2].dims[1],v=o===0?_*2:g/s,f=new Array(u,m,g/v,v-_),x=K.computeStrides(f),S=[{type:1,data:d},{type:12,data:f},{type:12,data:x},...e[0].dims.length===3?new Array({type:12,data:[h,g,v,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[h,v,m*v,1]}):[],...ge(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],b=I=>{let A=Y("input",e[0].dataType,e[0].dims.length),C=Y("position_ids",e[1].dataType,e[1].dims.length),O=Y("cos_cache",e[2].dataType,e[2].dims.length),R=Y("sin_cache",e[3].dataType,e[3].dims.length),M=Se("output",e[0].dataType,e[0].dims.length);return I.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:f.length},{name:"global_strides",type:"u32",length:x.length},{name:"input_output_strides",type:"u32",length:x.length}]),`
        ${I.declareVariables(A,C,O,R,M)}

        ${I.mainStart(Ra)}
          let half_rotary_emb_dim = uniforms.${O.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${I.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${C.broadcastedIndicesToOffset("bsnh.xy",Se("",C.type.tensor,2))};
            let position_id =
                u32(${C.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${A.getByOffset("i")} * ${O.get("position_id","bsnh[3]")} -
                ${A.getByOffset("j")} * ${R.get("position_id","bsnh[3]")};
            ${M.setByOffset("i","re")}
            let im = ${A.getByOffset("i")} * ${R.get("position_id","bsnh[3]")} +
                ${A.getByOffset("j")} * ${O.get("position_id","bsnh[3]")};
            ${M.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${M.setByOffset("k",A.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ze({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(f)/Ra)},programUniforms:S})}},Vv=(e,r)=>{py(e.inputs,r),e.compute(hy(e.inputs,r))}}),my,gy,Hv,E_=re(()=>{Re(),Be(),De(),my=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let r=e[0],i=e[1],s=e[2];if(r.dataType!==i.dataType||r.dataType!==s.dataType)throw new Error("All inputs must have the same data type");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let o=r.dims[r.dims.length-1],d=r.dims[r.dims.length-2];if(i.dims[i.dims.length-1]!==o)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==d)throw new Error("Skip must have the same sequence length as input");if(s.dims.length!==1)throw new Error("Gamma must be 1D");if(s.dims[s.dims.length-1]!==o)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let u=e[3];if(u.dims.length!==1)throw new Error("Beta must be 1D");if(u.dims[u.dims.length-1]!==o)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let u=e[4];if(u.dims.length!==1)throw new Error("Bias must be 1D");if(u.dims[u.dims.length-1]!==o)throw new Error("Bias must have the same hidden size as input")}},gy=(e,r,i,s)=>{let o=r.simplified,d=e[0].dims,u=K.size(d),h=d,m=u,g=d.slice(-1)[0],_=s?d.slice(0,-1).concat(1):[],v=!o&&e.length>3,f=e.length>4,x=s&&i>1,S=s&&i>2,b=i>3,I=64,A=pt(g),C=[{type:12,data:m},{type:12,data:A},{type:12,data:g},{type:1,data:r.epsilon}],O=M=>{let F=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],U=[Y("x",e[0].dataType,e[0].dims,A),Y("skip",e[1].dataType,e[1].dims,A),Y("gamma",e[2].dataType,e[2].dims,A)];v&&U.push(Y("beta",e[3].dataType,e[3].dims,A)),f&&U.push(Y("bias",e[4].dataType,e[4].dims,A)),U.push(Se("output",e[0].dataType,h,A)),x&&U.push(Se("mean_output",1,_)),S&&U.push(Se("inv_std_output",1,_)),b&&U.push(Se("input_skip_bias_sum",e[0].dataType,h,A));let Q=vt(e[0].dataType),se=vt(1,A);return`

      ${M.registerUniforms(F).declareVariables(...U)}
      var<workgroup> sum_shared : array<${se}, ${I}>;
      var<workgroup> sum_squared_shared : array<${se}, ${I}>;

      ${M.mainStart([I,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${I};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${I};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${I-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?"bias[offset1d + i]":Q+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${b?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${za(Q,A,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${I};
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
        let mean = ${qr("sum",A)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${qr("square_sum",A)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${x?"mean_output[global_idx] = mean;":""}
        ${S?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${Q}(mean)`}) *
            ${Q}(inv_std_dev) * gamma[offset1d + i]
            ${v?"+ beta[offset1d + i]":""};
        }
      }`},R=[{dims:h,dataType:e[0].dataType}];return i>1&&R.push({dims:_,dataType:1}),i>2&&R.push({dims:_,dataType:1}),i>3&&R.push({dims:d,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${A};${x};${S};${b}`,inputDependencies:e.map((M,F)=>"type")},getShaderSource:O,getRunData:()=>({outputs:R,dispatchGroup:{x:Math.ceil(m/g)},programUniforms:C})}},Hv=(e,r)=>{my(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(gy(e.inputs,r,e.outputCount,!1),{outputs:i})}}),yy,Ws,wy,kc,vy,_y,qv,Gv,C_=re(()=>{Re(),Be(),gt(),De(),yy=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");if(r.axes.length!==0){if(r.axes.length!==r.starts.length||r.axes.length!==r.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(r.starts.length!==r.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,s)=>{if(e[s+1].dataType!==6&&e[s+1].dataType!==7)throw new Error(`Input ${s} must be an array of int32 or int64`)})},Ws=(e,r)=>{let i=[];if(e.length>r)if(e[r].dataType===7)e[r].getBigInt64Array().forEach(s=>i.push(Number(s)));else if(e[r].dataType===6)e[r].getInt32Array().forEach(s=>i.push(Number(s)));else throw new Error(`Input ${r} must be an array of int32 or int64`);return i},wy=(e,r)=>{if(e.length>1){let i=Ws(e,1),s=Ws(e,2),o=Ws(e,3);return o.length===0&&(o=[...Array(e[0].dims.length).keys()]),Ze({starts:i,ends:s,axes:o})}else return r},kc=(e,r,i,s,o)=>{let d=e;return e<0&&(d+=i[s[r]]),o[r]<0?Math.max(0,Math.min(d,i[s[r]]-1)):Math.max(0,Math.min(d,i[s[r]]))},vy=(e,r,i)=>`fn calculateInputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length}; i >= 0; i--) {
            let input_shape_i = ${ve("uniforms.input_shape","i",i.length)};
            let steps_i = ${ve("uniforms.steps","i",i.length)};
            let signs_i = ${ve("uniforms.signs","i",i.length)};
            let starts_i = ${ve("uniforms.starts","i",i.length)};
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
      }`,_y=(e,r)=>{let i=e[0].dims,s=K.size(i),o=r.axes.length>0?K.normalizeAxes(r.axes,i.length):[...Array(i.length).keys()],d=Ws(e,4);d.forEach(A=>A!==0||(()=>{throw new Error("step cannot be 0")})),d.length===0&&(d=Array(o.length).fill(1));let u=r.starts.map((A,C)=>kc(A,C,i,o,d)),h=r.ends.map((A,C)=>kc(A,C,i,o,d));if(o.length!==u.length||o.length!==h.length)throw new Error("start, ends and axes should have the same number of elements");if(o.length!==i.length)for(let A=0;A<i.length;++A)o.includes(A)||(u.splice(A,0,0),h.splice(A,0,i[A]),d.splice(A,0,1));let m=d.map(A=>Math.sign(A));d.forEach((A,C,O)=>{if(A<0){let R=(h[C]-u[C])/A,M=u[C],F=M+R*d[C];u[C]=F,h[C]=M,O[C]=-A}});let g=i.slice(0);o.forEach((A,C)=>{g[A]=Math.ceil((h[A]-u[A])/d[A])});let _={dims:g,dataType:e[0].dataType},v=Se("output",e[0].dataType,g.length),f=Y("input",e[0].dataType,e[0].dims.length),x=K.size(g),S=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:u.length},{name:"signs",type:"i32",length:m.length},{name:"steps",type:"u32",length:d.length}],b=[{type:12,data:x},{type:12,data:u},{type:6,data:m},{type:12,data:d},...ge(e[0].dims,g)],I=A=>`
      ${A.registerUniforms(S).declareVariables(f,v)}
        ${vy(f,v,i)}
        ${A.mainStart()}
          ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${v.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${v.setByOffset("global_idx",f.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${m.length}_${u.length}_${d.length}`,inputDependencies:["rank"]},getShaderSource:I,getRunData:()=>({outputs:[_],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:b})}},qv=(e,r)=>{yy(e.inputs,r);let i=wy(e.inputs,r);e.compute(_y(e.inputs,i),{inputs:[0]})},Gv=e=>{let r=e.starts,i=e.ends,s=e.axes;return Ze({starts:r,ends:i,axes:s})}}),$y,xy,Kv,Qv,T_=re(()=>{Re(),Be(),gt(),Yr(),De(),$y=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},xy=(e,r)=>{let i=e.inputs[0],s=i.dims,o=K.size(s),d=64,u=s.length,h=K.normalizeAxis(r.axis,u),m=h<s.length-1,g,_=[];m?(_=Array.from({length:u},(U,Q)=>Q),_[h]=u-1,_[u-1]=h,g=e.compute(dn(i,_),{inputs:[i],outputs:[-1]})[0]):g=i;let v=g.dims,f=v[u-1],x=o/f,S=pt(f),b=f/S,I=(U,Q)=>Q===4?`max(max(${U}.x, ${U}.y), max(${U}.z, ${U}.w))`:Q===2?`max(${U}.x, ${U}.y)`:Q===3?`max(max(${U}.x, ${U}.y), ${U}.z)`:U,A=Y("x",g.dataType,g.dims,S),C=Se("result",g.dataType,g.dims,S),O=A.type.value,R=vt(g.dataType)==="f32"?`var threadMax = ${O}(-3.402823e+38f);`:`var threadMax = ${O}(-65504.0h);`,M=U=>`
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
          rowMaxShared = ${O}(${I("threadShared[0]",S)});
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
          rowSumShared = ${O}(${qr("threadShared[0]",S)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,F=e.compute({name:"Softmax",shaderCache:{hint:`${S}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:v,dataType:g.dataType}],dispatchGroup:{x},programUniforms:[{type:6,data:b}]}),getShaderSource:M},{inputs:[g],outputs:[m?-1:0]})[0];m&&e.compute(dn(F,_),{inputs:[F]})},Kv=(e,r)=>{$y(e.inputs),xy(e,r)},Qv=e=>Ze({axis:e.axis})}),by,Sy,ky,Ey,Cy,Yv,Zv,I_=re(()=>{Re(),Be(),gt(),De(),by=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Sy=(e,r)=>{let i=[],s=r.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(o=>i.push(Number(o))),s=i.length),Ze({numOutputs:s,axis:r.axis,splitSizes:i})},ky=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${ve("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ey=e=>{let r=e.length,i=[];for(let s=0;s<r;++s){let o=e[s].setByIndices("indices","input[global_idx]");r===1?i.push(o):s===0?i.push(`if (output_number == ${s}u) { ${o} }`):s===r-1?i.push(`else { ${o} }`):i.push(`else if (output_number == ${s}) { ${o} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Cy=(e,r)=>{let i=e[0].dims,s=K.size(i),o=e[0].dataType,d=K.normalizeAxis(r.axis,i.length),u=new Array(r.numOutputs),h=Y("input",o,i.length),m=new Array(r.numOutputs),g=[],_=[],v=0,f=[{type:12,data:s}];for(let S=0;S<r.numOutputs;S++){v+=r.splitSizes[S],m[S]=v;let b=i.slice();b[d]=r.splitSizes[S],_.push(b),u[S]=Se(`output${S}`,o,b.length),g.push({dims:_[S],dataType:e[0].dataType})}f.push({type:12,data:m},...ge(i,..._));let x=S=>`
  ${S.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",m.length).declareVariables(h,...u)}
  ${ky(m.length)}
  ${Ey(u)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${h.offsetToIndices("global_idx")};
    var index = ${h.indicesGet("indices",d)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${ve("uniforms.size_in_split_axis","output_number - 1u",m.length)};
      ${h.indicesSet("indices",d,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getShaderSource:x,getRunData:()=>({outputs:g,dispatchGroup:{x:Math.ceil(s/64)},programUniforms:f})}},Yv=(e,r)=>{by(e.inputs);let i=e.inputs.length===1?r:Sy(e.inputs,r);e.compute(Cy(e.inputs,i),{inputs:[0]})},Zv=e=>{let r=e.axis,i=e.splitSizes,s=e.numOutputs<0?i.length:e.numOutputs;if(s!==i.length)throw new Error("numOutputs and splitSizes lengh must be equal");return Ze({axis:r,numOutputs:s,splitSizes:i})}}),Ty,Iy,Xv,z_=re(()=>{Re(),Be(),De(),Ty=(e,r,i,s,o)=>{let d=Se("output_data",o,i.length,4),u=Y("a_data",r[1].dataType,r[1].dims.length,4),h=Y("b_data",r[2].dataType,r[2].dims.length,4),m=Y("c_data",r[0].dataType,r[0].dims.length,4),g,_=(v,f,x)=>`select(${f}, ${v}, ${x})`;if(!s)g=d.setByOffset("global_idx",_(u.getByOffset("global_idx"),h.getByOffset("global_idx"),m.getByOffset("global_idx")));else{let v=(f,x,S="")=>{let b=`a_data[index_a${x}][component_a${x}]`,I=`b_data[index_b${x}][component_b${x}]`,A=`bool(c_data[index_c${x}] & (0xffu << (component_c${x} * 8)))`;return`
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
            ${f}[${x}] = ${S}(${_(b,I,A)});
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
      }`},Iy=e=>{let r=e[1].dims,i=e[2].dims,s=e[0].dims,o=e[1].dataType,d=!(K.areEqual(r,i)&&K.areEqual(i,s)),u=r,h=K.size(r);if(d){let g=Aa.calcShape(Aa.calcShape(r,i,!1),s,!1);if(!g)throw new Error("Can't perform where op on the given tensors");u=g,h=K.size(u)}let m=Math.ceil(h/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:g=>Ty(g,e,u,d,o),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(h/64/4)},programUniforms:[{type:12,data:m},...ge(s,r,i,u)]})}},Xv=e=>{e.compute(Iy(e.inputs))}}),Jv,A_=re(()=>{K2(),ff(),Q2(),Y2(),Z2(),X2(),J2(),r_(),s_(),o_(),u_(),l_(),d_(),c_(),f_(),p_(),h_(),m_(),g_(),y_(),w_(),Xw(),v_(),$v(),__(),$_(),x_(),b_(),cf(),S_(),k_(),E_(),C_(),T_(),I_(),bv(),Yr(),pf(),z_(),Jv=new Map([["Abs",[Z0]],["Acos",[X0]],["Acosh",[J0]],["Add",[Ow]],["ArgMax",[G0,Dc]],["ArgMin",[q0,Dc]],["Asin",[ew]],["Asinh",[tw]],["Atan",[nw]],["Atanh",[rw]],["Attention",[K0]],["AveragePool",[Rv,Av]],["BatchNormalization",[Q0]],["BiasAdd",[Y0]],["BiasSplitGelu",[Rw]],["Cast",[aw,iw]],["Ceil",[ow]],["Clip",[sw]],["Concat",[Ww,Vw]],["Conv",[Fc,jc]],["ConvTranspose",[tv,ev]],["Cos",[uw]],["Cosh",[lw]],["CumSum",[nv,rv]],["DepthToSpace",[iv,av]],["DequantizeLinear",[Lv,Uv]],["Div",[Pw]],["Einsum",[sv,ov]],["Elu",[dw,Zs]],["Equal",[Mw]],["Erf",[cw]],["Exp",[fw]],["Expand",[uv]],["FastGelu",[lv]],["Floor",[pw]],["FusedConv",[Fc,jc]],["Gather",[fv,dv]],["GatherElements",[gv,mv]],["GatherBlockQuantized",[pv,hv]],["Gelu",[hw]],["Gemm",[wv,yv]],["GlobalAveragePool",[Pv,Ov]],["GlobalMaxPool",[Nv,Dv]],["Greater",[Lw]],["GreaterOrEqual",[jw]],["GroupQueryAttention",[kv,Sv]],["HardSigmoid",[xw,$w]],["InstanceNormalization",[Ev]],["LayerNormalization",[Cv]],["LeakyRelu",[mw,Zs]],["Less",[Uw]],["LessOrEqual",[Fw]],["Log",[zw]],["MatMul",[Zw]],["MatMulNBits",[Tv,Iv]],["MaxPool",[Mv,Bv]],["Mul",[Bw]],["MultiHeadAttention",[_v,vv]],["Neg",[yw]],["Not",[gw]],["Pad",[zv]],["Pow",[Dw]],["QuickGelu",[Aw,Zs]],["Range",[jv]],["Reciprocal",[ww]],["ReduceMin",[j0]],["ReduceMean",[B0]],["ReduceMax",[U0]],["ReduceSum",[W0]],["ReduceProd",[F0]],["ReduceL1",[D0]],["ReduceL2",[N0]],["ReduceLogSum",[H0]],["ReduceLogSumExp",[L0]],["ReduceSumSquare",[V0]],["Relu",[vw]],["Resize",[Fv,Wv]],["RotaryEmbedding",[Vv]],["Sigmoid",[_w]],["Sin",[bw]],["Sinh",[Sw]],["Slice",[qv,Gv]],["SkipLayerNormalization",[Hv]],["Split",[Yv,Zv]],["Sqrt",[kw]],["Softmax",[Kv,Qv]],["Sub",[Nw]],["Tan",[Ew]],["Tanh",[Cw]],["ThresholdedRelu",[Iw,Zs]],["Tile",[xv]],["Transpose",[S0,k0]],["Where",[Xv]]])}),e1,R_=re(()=>{Dn(),Yn(),De(),e1=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,i,s,o){Qn(e.programInfo.name);let d=this.backend.device,u=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let h=[];for(let g of r)h.push({binding:h.length,resource:{buffer:g.buffer}});for(let g of i)h.push({binding:h.length,resource:{buffer:g.buffer}});o&&h.push({binding:h.length,resource:o});let m=d.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:h,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let g={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:m,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(g)}u.setPipeline(e.computePipeline),u.setBindGroup(0,m),u.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Bn(e.programInfo.name)}dispose(){}build(e,r){Qn(e.name);let i=this.backend.device,s=[];i.features.has("shader-f16")&&s.push("enable f16;");let o=b0(r,this.backend.device.limits),d=e.getShaderSource(o),u=`${s.join(`
`)}
${o.additionalImplementations}
${d}`,h=i.createShaderModule({code:u,label:e.name});Ye("verbose",()=>`[WebGPU] ${e.name} shader code: ${u}`);let m=i.createComputePipeline({compute:{module:h,entryPoint:"main"},layout:"auto",label:e.name});return Bn(e.name),{programInfo:e,computePipeline:m,uniformVariablesInfo:o.variablesInfo}}normalizeDispatchGroupSize(e){let r=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,s=typeof e=="number"?1:e.z||1,o=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(r<=o&&i<=o&&s<=o)return[r,i,s];let d=r*i*s,u=Math.ceil(Math.sqrt(d));if(u>o){if(u=Math.ceil(Math.cbrt(d)),u>o)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[u,u,u]}else return[u,u,1]}}}),zy,Ay,Ry,t1,O_=re(()=>{Dn(),Re(),Yn(),w0(),q2(),A_(),R_(),zy=(e,r)=>{if(r.length!==e.length)throw new Error(`inputDependencies length ${r.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let s=0;s<e.length;++s){let o=e[s].dataType;switch(r[s]){case"none":{i.push("");break}case"type":{i.push(`${o}`);break}case"rank":{let d=e[s].dims.length;i.push(`${o};${d}`);break}case"dims":{let d=e[s].dims.join(",");i.push(`${o};${d}`);break}default:throw new Error(`unsupported input dependency: ${r[s]}`)}}return i.join("|")},Ay=(e,r,i)=>{var o,d;let s=e.name;return(o=e.shaderCache)!=null&&o.hint&&(s+="["+e.shaderCache.hint+"]"),s+=":"+i+`:${zy(r,((d=e.shaderCache)==null?void 0:d.inputDependencies)??new Array(r.length).fill("dims"))}`,s},Ry=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},t1=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,r){this.env=e;let i=[],s={requiredLimits:{maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxBufferSize:r.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:r.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:r.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:r.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:r.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i};r.features.has("chromium-experimental-timestamp-query-inside-passes")?i.push("chromium-experimental-timestamp-query-inside-passes"):r.features.has("timestamp-query")&&i.push("timestamp-query"),r.features.has("shader-f16")&&i.push("shader-f16"),this.device=await r.requestDevice(s),this.adapterInfo=new Ry(r.info||await r.requestAdapterInfo()),this.gpuDataManager=v0(this),this.programManager=new e1(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,of(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:r,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),r={};this.queryType==="at-passes"&&(r.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(r)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Qn(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var s;let r=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let o=0;o<r.length/2;o++){let d=i[o],u=d.kernelId,h=this.kernels.get(u),m=h.kernelType,g=h.kernelName,_=d.programName,v=d.inputTensorViews,f=d.outputTensorViews,x=r[o*2],S=r[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=x);let b=Number(x-this.queryTimeBase),I=Number(S-this.queryTimeBase);if(!Number.isSafeInteger(b)||!Number.isSafeInteger(I))throw new RangeError("incorrect timestamp range");if((s=this.env.webgpu.profiling)!=null&&s.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:v.map(A=>({dims:A.dims,dataType:Ri(A.dataType)})),outputsMetadata:f.map(A=>({dims:A.dims,dataType:Ri(A.dataType)})),kernelId:u,kernelType:m,kernelName:g,programName:_,startTime:b,endTime:I});else{let A="";v.forEach((O,R)=>{A+=`input[${R}]: [${O.dims}] | ${Ri(O.dataType)}, `});let C="";f.forEach((O,R)=>{C+=`output[${R}]: [${O.dims}] | ${Ri(O.dataType)}, `}),console.log(`[profiling] kernel "${u}|${m}|${g}|${_}" ${A}${C}execution time: ${I-b} ns`)}Ku("GPU",`${_}::${x}::${S}`)}e.unmap(),this.pendingQueries.delete(e)}),Bn()}run(e,r,i,s,o,d){Qn(e.name);let u=[];for(let C=0;C<r.length;++C){let O=r[C].data;if(O===0)continue;let R=this.gpuDataManager.get(O);if(!R)throw new Error(`no GPU data for input: ${O}`);u.push(R)}let{outputs:h,dispatchGroup:m,programUniforms:g}=e.getRunData(r),_=i.length===0?h.map((C,O)=>O):i;if(_.length!==h.length)throw new Error(`Output size ${_.length} must be equal to ${h.length}.`);let v=[],f=[];for(let C=0;C<h.length;++C){if(!Number.isInteger(_[C])||_[C]<-3||_[C]>=d)throw new Error(`Invalid output index: ${_[C]}`);if(_[C]===-3)continue;let O=_[C]===-1,R=_[C]===-2,M=O||R?o(h[C].dataType,h[C].dims):s(_[C],h[C].dataType,h[C].dims);if(v.push(M),M.data===0)continue;let F=this.gpuDataManager.get(M.data);if(!F)throw new Error(`no GPU data for output: ${M.data}`);if(O&&this.temporaryData.push(F),R){let U=this.kernelPersistentData.get(this.currentKernelId);U||(U=[],this.kernelPersistentData.set(this.currentKernelId,U)),U.push(F)}f.push(F)}if(u.length!==r.length||f.length!==v.length){if(f.length===0)return Bn(e.name),v;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let x;if(g){let C=0,O=[];g.forEach(U=>{let Q=typeof U.data=="number"?[U.data]:U.data;if(Q.length===0)return;let se=U.type===10?2:4,ue,we;U.type===10?(we=Q.length>4?16:Q.length>2?8:Q.length*se,ue=Q.length>4?16:se*Q.length):(we=Q.length<=2?Q.length*se:16,ue=16),C=Math.ceil(C/we)*we,O.push(C);let he=U.type===10?8:4;C+=Q.length>4?Math.ceil(Q.length/he)*ue:Q.length*se});let R=16;C=Math.ceil(C/R)*R;let M=new ArrayBuffer(C);g.forEach((U,Q)=>{let se=O[Q],ue=typeof U.data=="number"?[U.data]:U.data;if(U.type===6)new Int32Array(M,se,ue.length).set(ue);else if(U.type===12)new Uint32Array(M,se,ue.length).set(ue);else if(U.type===10)new Uint16Array(M,se,ue.length).set(ue);else if(U.type===1)new Float32Array(M,se,ue.length).set(ue);else throw new Error(`Unsupported uniform type: ${Ri(U.type)}`)});let F=this.gpuDataManager.create(C,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(F.buffer,0,M,0,C),this.gpuDataManager.release(F.id),x={offset:0,size:C,buffer:F.buffer}}let S=this.programManager.normalizeDispatchGroupSize(m),b=S[1]===1&&S[2]===1,I=Ay(e,r,b),A=this.programManager.getArtifact(I);if(A||(A=this.programManager.build(e,S),this.programManager.setArtifact(I,A),Ye("info",()=>`[artifact] key: ${I}, programName: ${e.name}`)),g&&A.uniformVariablesInfo){if(g.length!==A.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${A.uniformVariablesInfo.length}, got ${g.length} in program "${A.programInfo.name}".`);for(let C=0;C<g.length;C++){let O=g[C],R=O.type,M=typeof O.data=="number"?1:O.data.length,[F,U]=A.uniformVariablesInfo[C];if(R!==F||M!==U)throw new Error(`Uniform variable ${C} mismatch: expect type ${F} with size ${U}, got type ${R} with size ${M} in program "${A.programInfo.name}".`)}}if(Ye("info",()=>`[ProgramManager] run "${e.name}" (key=${I}) with ${S[0]}x${S[1]}x${S[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let C={kernelId:this.currentKernelId,programName:A.programInfo.name,inputTensorViews:r,outputTensorViews:v};this.pendingKernels.push(C),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(C)}return this.programManager.run(A,u,f,S,x),Bn(e.name),v}upload(e,r){this.gpuDataManager.upload(e,r)}memcpy(e,r){this.gpuDataManager.memcpy(e,r)}async download(e,r){await this.gpuDataManager.download(e,r)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,r,i,s){let o=Jv.get(e);if(!o)throw new Error(`kernel not implemented: ${e}`);let d={kernelType:e,kernelName:s,kernelEntry:o[0],attributes:[o[1],i]};this.kernels.set(r,d)}releaseKernel(e){let r=this.kernelPersistentData.get(e);if(r){for(let i of r)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,r,i){let s=this.kernels.get(e);if(!s)throw new Error(`kernel not created: ${e}`);let o=s.kernelType,d=s.kernelName,u=s.kernelEntry,h=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${o}] ${d}" is not allowed to be called recursively`);this.currentKernelId=e,h[0]&&(h[1]=h[0](h[1]),h[0]=void 0),Ye("info",()=>`[WebGPU] Start to run kernel "[${o}] ${d}"...`);let m=this.env.debug;this.temporaryData=[];try{return m&&this.device.pushErrorScope("validation"),u(r,h[1]),0}catch(g){return i.push(Promise.resolve(`[WebGPU] Kernel "[${o}] ${d}" failed. ${g}`)),1}finally{m&&i.push(this.device.popErrorScope().then(g=>g?`GPU validation error for kernel "[${o}] ${d}": ${g.message}`:null));for(let g of this.temporaryData)this.gpuDataManager.release(g.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,r,i,s){let o=this.sessionExternalDataMapping.get(e);o||(o=new Map,this.sessionExternalDataMapping.set(e,o));let d=o.get(r),u=this.gpuDataManager.registerExternalBuffer(i,s,d);return o.set(r,[u,i]),u}unregisterBuffers(e){let r=this.sessionExternalDataMapping.get(e);r&&(r.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let r=this.gpuDataManager.get(e);if(!r)throw new Error(`no GPU data for buffer: ${e}`);return r.buffer}createDownloader(e,r,i){return async()=>{let s=await Pc(this,e,r);return uf(s.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Ye("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){Ye("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){Ye("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),r=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let s=0;s<i;s++){let o=this.getComputePassEncoder(),d=e[s];this.writeTimestamp(this.pendingDispatchNumber*2),o.setPipeline(d.computePipeline),o.setBindGroup(0,d.bindGroup),o.dispatchWorkgroups(...d.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(r[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Oy,Ec,Cc,Py,n1,P_=re(()=>{Yn(),Oy=1,Ec=()=>Oy++,Cc=class{constructor(e,r){this.mlContext=e,this.tensorEntry=r,this.tensorCache=r?[r]:[]}get tensor(){var e;return(e=this.tensorEntry)==null?void 0:e[0]}get context(){if(!this.mlContext)throw new Error("MLContext has not been set.");return this.mlContext}set context(e){if(this.mlContext&&this.mlContext!==e)throw new Error("MLTensor in use in a different MLContext.");this.mlContext=e}destroy(){for(let[e]of this.tensorCache)e.destroy();this.tensorCache=[],this.tensorEntry=void 0}trySelectTensor(e,r){for(let[i,s,o]of this.tensorCache)if(r===i){if(this.context!==e)throw new Error("MLTensor cannot be registered with a different MLContext.");return this.tensorEntry=[i,s,o],!0}return!1}async ensureTensor(e,r,i){var d;if(this.tensorEntry){let[u,h,m]=this.tensorEntry;if(h===e&&m.every((g,_)=>g===r[_]))return u}for(let[u,h,m]of this.tensorCache)if(h===e&&m.every((g,_)=>g===r[_])){if(i&&this.tensorEntry){Ye("verbose",()=>`[WebNN] Slowdown may occur, having to copy existing tensor {dataType: ${e}, shape: ${r}}`);let g=await this.context.readTensor(this.tensorEntry[0]);this.context.writeTensor(u,g)}return this.tensorEntry=[u,h,m],u}Ye("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${e}, shape: ${r}}`);let s=MLTensorUsage.READ|MLTensorUsage.WRITE,o=await this.context.createTensor({dataType:e,shape:r,dimensions:r,usage:s});return this.tensorEntry=[o,e,r],this.tensorCache.push(this.tensorEntry),this.activeUpload&&((d=this.mlContext)==null||d.writeTensor(o,this.activeUpload),this.activeUpload=void 0),o}upload(e){var r;if(!this.tensorEntry){this.activeUpload=new Uint8Array(e);return}(r=this.mlContext)==null||r.writeTensor(this.tensorEntry[0],e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.tensorEntry)throw new Error("Tensor has not been created.");return e?this.context.readTensor(this.tensorEntry[0],e):this.context.readTensor(this.tensorEntry[0])}},Py=class{constructor(e){this.backend=e,this.tensorsById=new Map,this.tensorIdsByContext=new Map}reserveTensorId(){let e=Ec();return this.tensorsById.set(e,new Cc),e}releaseTensorId(e){let r=this.tensorsById.get(e);if(r){r.destroy(),this.tensorsById.delete(e);for(let[i,s]of this.tensorIdsByContext)if(s.has(e)){s.delete(e),s.size===0&&this.tensorIdsByContext.delete(i);break}}}async ensureTensor(e,r,i,s){var d;Ye("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${e}, dataType: ${r}, shape: ${i}, copyOld: ${s}}`);let o=this.tensorsById.get(e);if(!o)throw new Error("Tensor not found.");return o.context=this.backend.currentContext,this.tensorIdsByContext.has(this.backend.currentContext)||this.tensorIdsByContext.set(this.backend.currentContext,new Set),(d=this.tensorIdsByContext.get(this.backend.currentContext))==null||d.add(e),o.ensureTensor(r,i,s)}upload(e,r){this.tensorsById.get(e).upload(r)}async download(e,r){return Ye("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${r==null?void 0:r.byteLength}}`),this.tensorsById.get(e).download(r)}releaseTensorsForContext(e){let r=this.tensorIdsByContext.get(e);if(r){for(let i of r)this.tensorsById.get(i).destroy(),this.tensorsById.delete(i);this.tensorIdsByContext.delete(e)}}registerTensor(e,r,i,s){for(let[u,h]of this.tensorsById)if(h.trySelectTensor(e,r))return u;let o=Ec();this.tensorsById.set(o,new Cc(e,[r,i,s]));let d=this.tensorIdsByContext.get(e);return d||(d=new Set,this.tensorIdsByContext.set(e,d)),d.add(o),o}},n1=(...e)=>new Py(...e)}),Tc,r1,M_=re(()=>{Re(),Oi(),w0(),P_(),Yn(),Tc=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),r1=class{constructor(e){this.tensorManager=n1(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,of(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){this.activeSessionId=e}get currentContext(){let e=this.getMLContext(this.currentSessionId);if(!e)throw new Error(`No MLContext found for session ${this.currentSessionId}`);return e}registerMLContext(e,r){this.mlContextBySessionId.set(e,r);let i=this.sessionIdsByMLContext.get(r);i||(i=new Set,this.sessionIdsByMLContext.set(r,i)),i.add(e)}onReleaseSession(e){let r=this.mlContextBySessionId.get(e);if(!r)return;this.mlContextBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(r);i.delete(e),i.size===0&&(this.sessionIdsByMLContext.delete(r),this.tensorManager.releaseTensorsForContext(r))}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Ye("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,r,i,s){let o=Tc.get(r);if(!o)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e,o,i,s)}uploadTensor(e,r){if(!xt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");Ye("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${r.byteLength}}`),this.tensorManager.upload(e,r)}async downloadTensor(e,r){return this.tensorManager.download(e,r)}createMLTensorDownloader(e,r){return async()=>{let i=await this.tensorManager.download(e);return uf(i,r)}}registerMLTensor(e,r,i){let s=Tc.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let o=this.tensorManager.registerTensor(this.currentContext,e,s,i);return Ye("verbose",()=>`[WebNN] registerMLTensor {tensor: ${e}, dataType: ${s}, dimensions: ${i}} -> {tensorId: ${o}}`),o}flush(){}}}),i1={};to(i1,{init:()=>a1});var Fu,My,a1,B_=re(()=>{Re(),O_(),Yn(),Be(),M_(),Fu=class s1{constructor(r,i,s,o){this.module=r,this.dataType=i,this.data=s,this.dims=o}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,r)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,r)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,r)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,r)}reshape(r){if(K.size(r)!==K.size(this.dims))throw new Error("Invalid new shape");return new s1(this.module,this.dataType,this.data,r)}},My=class{constructor(e,r,i){this.module=e,this.backend=r,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=r.adapterInfo;let s=e.HEAPU32,o=i>>>2;this.opKernelContext=s[o++];let d=s[o++];this.outputCount=s[o++],this.customDataOffset=s[o++],this.customDataSize=s[o++];let u=[];for(let h=0;h<d;h++){let m=s[o++],g=s[o++],_=s[o++],v=[];for(let f=0;f<_;f++)v.push(s[o++]);u.push(new Fu(e,m,g,v))}this.inputs=u}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}getMaxComputeWorkgroupSizes(){return[this.backend.device.limits.maxComputeWorkgroupSizeX,this.backend.device.limits.maxComputeWorkgroupSizeY,this.backend.device.limits.maxComputeWorkgroupSizeZ]}getMaxComputeWorkgroupStoragesize(){return this.backend.device.limits.maxComputeWorkgroupStorageSize}compute(e,r){var u;let i=((u=r==null?void 0:r.inputs)==null?void 0:u.map(h=>typeof h=="number"?this.inputs[h]:h))??this.inputs,s=(r==null?void 0:r.outputs)??[],o=(h,m,g)=>new Fu(this.module,m,this.output(h,g),g),d=(h,m)=>{let g=Ia(h,m);if(!g)throw new Error(`Unsupported data type: ${h}`);let _=g>0?this.backend.gpuDataManager.create(g).id:0;return new Fu(this.module,h,_,m)};return this.backend.run(e,i,s,o,d,this.outputCount)}output(e,r){let i=this.module.stackSave();try{let s=this.module.stackAlloc((1+r.length)*4),o=s>>2;this.module.HEAPU32[o++]=r.length;for(let d=0;d<r.length;d++)this.module.HEAPU32[o++]=r[d];return this.module._JsepOutput(this.opKernelContext,e,s)}catch(s){throw new Error(`Failed to generate kernel's output[${e}] with dims [${r}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(i)}}},a1=async(e,r,i,s)=>{let o=r.jsepInit;if(!o)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let d=new t1;await d.initialize(i,s),o("webgpu",[d,u=>d.alloc(u),u=>d.free(u),(u,h,m,g=!1)=>{if(g)Ye("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${u}, dst=${h}, size=${m}`),d.memcpy(u,h);else{Ye("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${u}, gpuDataId=${h}, size=${m}`);let _=r.HEAPU8.subarray(u>>>0,(u>>>0)+m);d.upload(h,_)}},async(u,h,m)=>{Ye("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${u}, dataOffset=${h}, size=${m}`),await d.download(u,()=>r.HEAPU8.subarray(h>>>0,(h>>>0)+m))},(u,h,m)=>d.createKernel(u,h,m,r.UTF8ToString(r._JsepGetNodeName(h))),u=>d.releaseKernel(u),(u,h,m,g)=>{Ye("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${m}, kernel=${u}, contextDataOffset=${h}`);let _=new My(r,d,h);return d.computeKernel(u,_,g)},()=>d.captureBegin(),()=>d.captureEnd(),()=>d.replay()])}else{let d=new r1(i);o("webnn",[d,()=>d.reserveTensorId(),u=>d.releaseTensorId(u),async(u,h,m,g)=>d.ensureTensor(u,h,m,g),(u,h)=>{d.uploadTensor(u,h)},async(u,h)=>d.downloadTensor(u,h)])}}}),By,wf,vf,Vr,Dy,nl,_f,$f,Ic,xf,bf,Sf,o1=re(()=>{V2(),H2(),Re(),Oi(),tf(),y0(),By=(e,r)=>{xt()._OrtInit(e,r)!==0&&ct("Can't initialize onnxruntime.")},wf=async e=>{By(e.wasm.numThreads,Zu(e.logLevel))},vf=async(e,r)=>{{let i=(B_(),Gu(i1)).init;if(r==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let s=e.webgpu.adapter;if(s){if(typeof s.limits!="object"||typeof s.features!="object"||typeof s.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let o=e.webgpu.powerPreference;if(o!==void 0&&o!=="low-power"&&o!=="high-performance")throw new Error(`Invalid powerPreference setting: "${o}"`);let d=e.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(s=await navigator.gpu.requestAdapter({powerPreference:o,forceFallbackAdapter:d}),!s)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",xt(),e,s)}if(r==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await i("webnn",xt(),e)}}},Vr=new Map,Dy=e=>{let r=xt(),i=r.stackSave();try{let s=r.stackAlloc(8);return r._OrtGetInputOutputCount(e,s,s+4)!==0&&ct("Can't get session input/output count."),[r.HEAP32[s/4],r.HEAP32[s/4+1]]}finally{r.stackRestore(i)}},nl=e=>{let r=xt(),i=r._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return r.HEAPU8.set(e,i),[i,e.byteLength]},_f=async(e,r)=>{var v,f;let i,s,o=xt();Array.isArray(e)?[i,s]=e:e.buffer===o.HEAPU8.buffer?[i,s]=[e.byteOffset,e.byteLength]:[i,s]=nl(e);let d=0,u=0,h=0,m=[],g=[],_=[];try{if([u,m]=g0(r),(r==null?void 0:r.externalData)&&o.mountExternalData){let R=[];for(let M of r.externalData){let F=typeof M=="string"?M:M.path;R.push(sf(typeof M=="string"?M:M.data).then(U=>{o.mountExternalData(F,U)}))}await Promise.all(R)}for(let R of(r==null?void 0:r.executionProviders)??[])if((typeof R=="string"?R:R.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,o.currentContext)throw new Error("WebNN execution provider is already set.");if(typeof R!="string"){let M=R,F=M==null?void 0:M.context,U=M==null?void 0:M.gpuDevice,Q=M==null?void 0:M.deviceType,se=M==null?void 0:M.numThreads,ue=M==null?void 0:M.powerPreference;F?o.currentContext=F:U?o.currentContext=await navigator.ml.createContext(U):o.currentContext=await navigator.ml.createContext({deviceType:Q,numThreads:se,powerPreference:ue})}else o.currentContext=await navigator.ml.createContext();break}d=await o._OrtCreateSession(i,s,u),d===0&&ct("Can't create a session."),o.currentContext&&(o.jsepRegisterMLContext(d,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[x,S]=Dy(d),b=!!(r!=null&&r.enableGraphCapture),I=[],A=[],C=[];for(let R=0;R<x;R++){let M=o._OrtGetInputName(d,R);M===0&&ct("Can't get an input name."),g.push(M),I.push(o.UTF8ToString(M))}for(let R=0;R<S;R++){let M=o._OrtGetOutputName(d,R);M===0&&ct("Can't get an output name."),_.push(M);let F=o.UTF8ToString(M);A.push(F);{if(b&&(r==null?void 0:r.preferredOutputLocation)===void 0){C.push("gpu-buffer");continue}let U=typeof(r==null?void 0:r.preferredOutputLocation)=="string"?r.preferredOutputLocation:((v=r==null?void 0:r.preferredOutputLocation)==null?void 0:v[F])??"cpu";if(U!=="cpu"&&U!=="cpu-pinned"&&U!=="gpu-buffer"&&U!=="ml-tensor")throw new Error(`Not supported preferred output location: ${U}.`);if(b&&U!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${U}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);C.push(U)}}let O=null;return C.some(R=>R==="gpu-buffer"||R==="ml-tensor")&&(h=o._OrtCreateBinding(d),h===0&&ct("Can't create IO binding."),O={handle:h,outputPreferredLocations:C,outputPreferredLocationsEncoded:C.map(R=>Oc(R))}),Vr.set(d,[d,g,_,O,b,!1]),[d,I,A]}catch(x){throw g.forEach(S=>o._OrtFree(S)),_.forEach(S=>o._OrtFree(S)),h!==0&&o._OrtReleaseBinding(h),d!==0&&o._OrtReleaseSession(d),x}finally{o._free(i),u!==0&&o._OrtReleaseSessionOptions(u),m.forEach(x=>o._free(x)),(f=o.unmountExternalData)==null||f.call(o)}},$f=e=>{var m;let r=xt(),i=Vr.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[s,o,d,u,h]=i;u&&(h&&r._OrtClearBoundOutputs(u.handle),r._OrtReleaseBinding(u.handle)),(m=r.jsepOnReleaseSession)==null||m.call(r,e),o.forEach(g=>r._OrtFree(g)),d.forEach(g=>r._OrtFree(g)),r._OrtReleaseSession(s),Vr.delete(e)},Ic=(e,r,i,s,o,d=!1)=>{if(!e){r.push(0);return}let u=xt(),h=e[0],m=e[1],g=e[3],_,v;if(h==="string"&&(g==="gpu-buffer"||g==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&g!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${o} when enableGraphCapture is true.`);if(g==="gpu-buffer"){let S=e[2].gpuBuffer;v=Ia(Qs(h),m);let b=u.jsepRegisterBuffer;if(!b)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');_=b(s,o,S,v)}else if(g==="ml-tensor"){let S=e[2].mlTensor;v=Ia(Qs(h),m);let b=u.jsepRegisterMLTensor;if(!b)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');_=b(S,Qs(h),m)}else{let S=e[2];if(Array.isArray(S)){v=4*S.length,_=u._malloc(v),i.push(_);let b=_/4;for(let I=0;I<S.length;I++){if(typeof S[I]!="string")throw new TypeError(`tensor data at index ${I} is not a string`);u.HEAPU32[b++]=It(S[I],i)}}else v=S.byteLength,_=u._malloc(v),i.push(_),u.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,v),_)}let f=u.stackSave(),x=u.stackAlloc(4*m.length);try{let S=x/4;m.forEach(I=>u.HEAP32[S++]=I);let b=u._OrtCreateTensor(Qs(h),_,v,x,m.length,Oc(g));b===0&&ct(`Can't create tensor for input/output. session=${s}, index=${o}.`),r.push(b)}finally{u.stackRestore(f)}},xf=async(e,r,i,s,o,d)=>{var ue,we;let u=xt(),h=Vr.get(e);if(!h)throw new Error(`cannot run inference. invalid session id: ${e}`);let m=h[0],g=h[1],_=h[2],v=h[3],f=h[4],x=h[5],S=r.length,b=s.length,I=0,A=[],C=[],O=[],R=[],M=u.stackSave(),F=u.stackAlloc(S*4),U=u.stackAlloc(S*4),Q=u.stackAlloc(b*4),se=u.stackAlloc(b*4);try{(ue=u.jsepOnRunStart)==null||ue.call(u,m),[I,A]=m0(d);for(let q=0;q<S;q++)Ic(i[q],C,R,e,r[q],f);for(let q=0;q<b;q++)Ic(o[q],O,R,e,S+s[q],f);let he=F/4,de=U/4,Te=Q/4,Pe=se/4;for(let q=0;q<S;q++)u.HEAPU32[he++]=C[q],u.HEAPU32[de++]=g[r[q]];for(let q=0;q<b;q++)u.HEAPU32[Te++]=O[q],u.HEAPU32[Pe++]=_[s[q]];if(v&&!x){let{handle:q,outputPreferredLocations:X,outputPreferredLocationsEncoded:J}=v;if(g.length!==S)throw new Error(`input count from feeds (${S}) is expected to be always equal to model's input count (${g.length}).`);for(let z=0;z<S;z++){let N=r[z];await u._OrtBindInput(q,g[N],C[z])!==0&&ct(`Can't bind input[${z}] for session=${e}.`)}for(let z=0;z<b;z++){let N=s[z];(we=o[z])!=null&&we[3]?u._OrtBindOutput(q,_[N],O[z],0)!==0&&ct(`Can't bind pre-allocated output[${z}] for session=${e}.`):u._OrtBindOutput(q,_[N],0,J[N])!==0&&ct(`Can't bind output[${z}] to ${X[z]} for session=${e}.`)}Vr.set(e,[m,g,_,v,f,!0])}let _e;v?_e=await u._OrtRunWithBinding(m,v.handle,b,Q,I):_e=await u._OrtRun(m,U,F,S,se,b,Q,I),_e!==0&&ct("failed to call OrtRun().");let Ee=[];for(let q=0;q<b;q++){let X=u.HEAPU32[Q/4+q];if(X===O[q]){Ee.push(o[q]);continue}let J=u.stackSave(),z=u.stackAlloc(4*4),N=!1,ie,ee=0;try{u._OrtGetTensorData(X,z,z+4,z+8,z+12)!==0&&ct(`Can't access output tensor data on index ${q}.`);let ce=z/4,be=u.HEAPU32[ce++];ee=u.HEAPU32[ce++];let Ue=u.HEAPU32[ce++],We=u.HEAPU32[ce++],Me=[];for(let Xe=0;Xe<We;Xe++)Me.push(u.HEAPU32[Ue/4+Xe]);u._OrtFree(Ue);let Ve=Me.reduce((Xe,tt)=>Xe*tt,1);ie=Ri(be);let Bt=v==null?void 0:v.outputPreferredLocations[s[q]];if(ie==="string"){if(Bt==="gpu-buffer"||Bt==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Xe=[],tt=ee/4;for(let bt=0;bt<Ve;bt++){let en=u.HEAPU32[tt++],Zn=bt===Ve-1?void 0:u.HEAPU32[tt]-en;Xe.push(u.UTF8ToString(en,Zn))}Ee.push([ie,Me,Xe,"cpu"])}else if(Bt==="gpu-buffer"&&Ve>0){let Xe=u.jsepGetBuffer;if(!Xe)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let tt=Xe(ee),bt=Ia(be,Ve);if(bt===void 0||!rf(ie))throw new Error(`Unsupported data type: ${ie}`);N=!0,Ee.push([ie,Me,{gpuBuffer:tt,download:u.jsepCreateDownloader(tt,bt,ie),dispose:()=>{u._OrtReleaseTensor(X)}},"gpu-buffer"])}else if(Bt==="ml-tensor"&&Ve>0){let Xe=u.jsepEnsureTensor;if(!Xe)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Ia(be,Ve)===void 0||!af(ie))throw new Error(`Unsupported data type: ${ie}`);let tt=await Xe(ee,be,Me,!1);N=!0,Ee.push([ie,Me,{mlTensor:tt,download:u.jsepCreateMLTensorDownloader(ee,ie),dispose:()=>{u.jsepReleaseTensorId(ee),u._OrtReleaseTensor(X)}},"ml-tensor"])}else{let Xe=nf(ie),tt=new Xe(Ve);new Uint8Array(tt.buffer,tt.byteOffset,tt.byteLength).set(u.HEAPU8.subarray(ee,ee+tt.byteLength)),Ee.push([ie,Me,tt,"cpu"])}}finally{u.stackRestore(J),ie==="string"&&ee&&u._free(ee),N||u._OrtReleaseTensor(X)}}return v&&!f&&(u._OrtClearBoundOutputs(v.handle),Vr.set(e,[m,g,_,v,f,!1])),Ee}finally{u.stackRestore(M),C.forEach(he=>u._OrtReleaseTensor(he)),O.forEach(he=>u._OrtReleaseTensor(he)),R.forEach(he=>u._free(he)),I!==0&&u._OrtReleaseRunOptions(I),A.forEach(he=>u._free(he))}},bf=e=>{let r=xt(),i=Vr.get(e);if(!i)throw new Error("invalid session id");let s=i[0],o=r._OrtEndProfiling(s);o===0&&ct("Can't get an profile file name."),r._OrtFree(o)},Sf=e=>{let r=[];for(let i of e){let s=i[2];!Array.isArray(s)&&"buffer"in s&&r.push(s.buffer)}return r}}),Hr,Jt,Ea,Vs,Hs,Wu,zc,Vu,Ii,zi,Ny,u1,l1,d1,c1,f1,p1,h1,m1=re(()=>{Dn(),o1(),Oi(),il(),Hr=()=>!!et.wasm.proxy&&typeof document<"u",Ea=!1,Vs=!1,Hs=!1,Vu=new Map,Ii=(e,r)=>{let i=Vu.get(e);i?i.push(r):Vu.set(e,[r])},zi=()=>{if(Ea||!Vs||Hs||!Jt)throw new Error("worker not ready")},Ny=e=>{switch(e.data.type){case"init-wasm":Ea=!1,e.data.err?(Hs=!0,zc[1](e.data.err)):(Vs=!0,zc[0]()),Wu&&(URL.revokeObjectURL(Wu),Wu=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let r=Vu.get(e.data.type);e.data.err?r.shift()[1](e.data.err):r.shift()[0](e.data.out);break}}},u1=async()=>{if(!Vs){if(Ea)throw new Error("multiple calls to 'initWasm()' detected.");if(Hs)throw new Error("previous call to 'initWasm()' failed.");if(Ea=!0,Hr())return new Promise((e,r)=>{Jt==null||Jt.terminate(),p0().then(([i,s])=>{try{Jt=s,Jt.onerror=d=>r(d),Jt.onmessage=Ny,zc=[e,r];let o={type:"init-wasm",in:et};Jt.postMessage(o),Wu=i}catch(o){r(o)}},r)});try{await ef(et.wasm),await wf(et),Vs=!0}catch(e){throw Hs=!0,e}finally{Ea=!1}}},l1=async e=>{if(Hr())return zi(),new Promise((r,i)=>{Ii("init-ep",[r,i]);let s={type:"init-ep",in:{epName:e,env:et}};Jt.postMessage(s)});await vf(et,e)},d1=async e=>Hr()?(zi(),new Promise((r,i)=>{Ii("copy-from",[r,i]);let s={type:"copy-from",in:{buffer:e}};Jt.postMessage(s,[e.buffer])})):nl(e),c1=async(e,r)=>{if(Hr()){if(r!=null&&r.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return zi(),new Promise((i,s)=>{Ii("create",[i,s]);let o={type:"create",in:{model:e,options:{...r}}},d=[];e instanceof Uint8Array&&d.push(e.buffer),Jt.postMessage(o,d)})}else return _f(e,r)},f1=async e=>{if(Hr())return zi(),new Promise((r,i)=>{Ii("release",[r,i]);let s={type:"release",in:e};Jt.postMessage(s)});$f(e)},p1=async(e,r,i,s,o,d)=>{if(Hr()){if(i.some(u=>u[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(u=>u))throw new Error("pre-allocated output tensor is not supported for proxy.");return zi(),new Promise((u,h)=>{Ii("run",[u,h]);let m=i,g={type:"run",in:{sessionId:e,inputIndices:r,inputs:m,outputIndices:s,options:d}};Jt.postMessage(g,Sf(m))})}else return xf(e,r,i,s,o,d)},h1=async e=>{if(Hr())return zi(),new Promise((r,i)=>{Ii("end-profiling",[r,i]);let s={type:"end-profiling",in:e};Jt.postMessage(s)});bf(e)}}),Ac,Ly,g1,D_=re(()=>{Dn(),m1(),Re(),Jc(),y0(),Ac=(e,r)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${r()}`)}},Ly=e=>{switch(e[3]){case"cpu":return new wt(e[0],e[2],e[1]);case"gpu-buffer":{let r=e[0];if(!rf(r))throw new Error(`not supported data type: ${r} for deserializing GPU tensor`);let{gpuBuffer:i,download:s,dispose:o}=e[2];return wt.fromGpuBuffer(i,{dataType:r,dims:e[1],download:s,dispose:o})}case"ml-tensor":{let r=e[0];if(!af(r))throw new Error(`not supported data type: ${r} for deserializing MLTensor tensor`);let{mlTensor:i,download:s,dispose:o}=e[2];return wt.fromMLTensor(i,{dataType:r,dims:e[1],download:s,dispose:o})}default:throw new Error(`invalid data location: ${e[3]}`)}},g1=class{async fetchModelAndCopyToWasmMemory(e){return d1(await sf(e))}async loadModel(e,r){Qn();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames]=await c1(i,r),Bn()}async dispose(){return f1(this.sessionId)}async run(e,r,i){Qn();let s=[],o=[];Object.entries(e).forEach(v=>{let f=v[0],x=v[1],S=this.inputNames.indexOf(f);if(S===-1)throw new Error(`invalid input '${f}'`);s.push(x),o.push(S)});let d=[],u=[];Object.entries(r).forEach(v=>{let f=v[0],x=v[1],S=this.outputNames.indexOf(f);if(S===-1)throw new Error(`invalid output '${f}'`);d.push(x),u.push(S)});let h=s.map((v,f)=>Ac(v,()=>`input "${this.inputNames[o[f]]}"`)),m=d.map((v,f)=>v?Ac(v,()=>`output "${this.outputNames[u[f]]}"`):null),g=await p1(this.sessionId,o,h,u,m,i),_={};for(let v=0;v<g.length;v++)_[this.outputNames[u[v]]]=d[v]??Ly(g[v]);return Bn(),_}startProfiling(){}endProfiling(){h1(this.sessionId)}}}),y1={};to(y1,{OnnxruntimeWebAssemblyBackend:()=>qc,initializeFlags:()=>Hc,wasmBackend:()=>w1});var Hc,qc,w1,N_=re(()=>{Dn(),m1(),D_(),il(),Hc=()=>{if((typeof et.wasm.initTimeout!="number"||et.wasm.initTimeout<0)&&(et.wasm.initTimeout=0),et.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof et.wasm.proxy!="boolean"&&(et.wasm.proxy=!1),typeof et.wasm.trace!="boolean"&&(et.wasm.trace=!1),typeof et.wasm.numThreads!="number"||!Number.isInteger(et.wasm.numThreads)||et.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)et.wasm.numThreads=1;else{let e=typeof navigator>"u"?S2("node:os").cpus().length:navigator.hardwareConcurrency;et.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},qc=class{async init(e){Hc(),await u1(),await l1(e)}async createInferenceSessionHandler(e,r){let i=new g1;return await i.loadModel(e,r),Promise.resolve(i)}},w1=new qc});Dn();Dn();Dn();var L_="1.20.1";{let e=(N_(),Gu(y1)).wasmBackend;Ta("webgpu",e,5),Ta("webnn",e,5),Ta("cpu",e,10),Ta("wasm",e,10)}Object.defineProperty(et.versions,"web",{value:L_,enumerable:!0});/**
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
 */const U_={class:{0:"person",1:"bicycle",2:"car",3:"motorcycle",4:"airplane",5:"bus",6:"train",7:"truck",8:"boat",9:"traffic light",10:"fire hydrant",11:"stop sign",12:"parking meter",13:"bench",14:"bird",15:"cat",16:"dog",17:"horse",18:"sheep",19:"cow",20:"elephant",21:"bear",22:"zebra",23:"giraffe",24:"backpack",25:"umbrella",26:"handbag",27:"tie",28:"suitcase",29:"frisbee",30:"skis",31:"snowboard",32:"sports ball",33:"kite",34:"baseball bat",35:"baseball glove",36:"skateboard",37:"surfboard",38:"tennis racket",39:"bottle",40:"wine glass",41:"cup",42:"fork",43:"knife",44:"spoon",45:"bowl",46:"banana",47:"apple",48:"sandwich",49:"orange",50:"brocolli",51:"carrot",52:"hot dog",53:"pizza",54:"donut",55:"cake",56:"chair",57:"couch",58:"potted plant",59:"bed",60:"dining table",61:"toilet",62:"tv",63:"laptop",64:"mouse",65:"remote",66:"keyboard",67:"cell phone",68:"microwave",69:"oven",70:"toaster",71:"sink",72:"refrigerator",73:"book",74:"clock",75:"vase",76:"scissors",77:"teddy bear",78:"hair drier",79:"toothbrush"}};function j_(e,r){const i=r.getContext("2d");i.clearRect(0,0,r.width,r.height);const o=Math.sqrt(Math.pow(r.width,2)+Math.pow(r.height,2))/250;e.forEach(d=>{const u=rl.getColor(d.class_idx,.2),h=rl.getColor(d.class_idx,.8),m=`rgba(${u[0]}, ${u[1]}, ${u[2]}, ${u[3]})`,g=`rgba(${h[0]}, ${h[1]}, ${h[2]}, ${h[3]})`,[_,v,f,x]=d.bbox;i.fillStyle=m,i.fillRect(_,v,f,x),i.lineWidth=o,i.strokeStyle=g,i.strokeRect(_,v,f,x),i.fillStyle=g,i.font="16px Arial";const S=`${U_.class[d.class_idx]} ${d.score.toFixed(2)}`,b=i.measureText(S).width,I=parseInt(i.font,10);let A=v-5,C=v-I-4;C<0&&(A=v+I+5,C=v+1),i.fillRect(_-1,C,b+4,I+4),i.fillStyle="white",i.fillText(S,_,A)})}const xn=class xn{static hex2rgba(r,i=1){return[parseInt(r.slice(1,3),16),parseInt(r.slice(3,5),16),parseInt(r.slice(5,7),16),i]}static getColor(r,i=1,s=!1){const o=`${r}-${i}-${s}`;if(xn.cache[o])return xn.cache[o];const u=[...xn.palette[r%xn.n].slice(0,3),i],h=s?[u[2],u[1],u[0],u[3]]:u;return xn.cache[o]=h,h}};Au(xn,"palette",["042AFF","0BDBEB","F3F3F3","00DFB7","111F68","FF6FDD","FF444F","CCED00","00F344","BD00FF","00B4FF","DD00BA","00FFFF","26C000","01FFB3","7D24FF","7B0068","FF1B6C","FC6D2F","A2FF0B"].map(r=>xn.hex2rgba(`#${r}`))),Au(xn,"n",xn.palette.length),Au(xn,"cache",{});let rl=xn;async function v1(e,r,i,s){const{yolo:o,nms:d,config:u}=r,{isNMS:h,input_shape:m,tensor_topk:g,tensor_iou_threshold:_,tensor_score_threshold:v}=u,f=await F_(e,m[2],m[3]),x=new wt("float32",f.data32F,m);f.delete();const S=performance.now(),{output0:b}=await o.run({images:x}),I=performance.now();i((I-S).toFixed(2)),x.dispose();const A=e.cols/m[2],C=e.rows/m[3];e.delete();const O=[],R=v.data[0];if(h)for(let M=0;M<b.dims[1];M++){const F=b.data.slice(M*b.dims[2],(M+1)*b.dims[2]),U=F[4];if(U>R){const[Q,se,ue,we]=F.slice(0,4),[he,de,Te,Pe]=[Q*A,se*C,(ue-Q)*A,(we-se)*C];O.push({bbox:[he,de,Te,Pe],class_idx:F[5],score:U})}}else{const{output_selected:M}=await d.run({input:b,topk:g,iou_threshold:_,score_threshold:v});for(let F=0;F<M.dims[1];F++){const U=M.data.slice(F*M.dims[2],(F+1)*M.dims[2]),[Q,se,ue,we]=U.slice(0,4),he=U.slice(4),de=Math.max(...he),Te=he.indexOf(de),[Pe,_e,Ee,q]=[(Q-.5*ue)*A,(se-.5*we)*C,ue*A,we*C];O.push({bbox:[Pe,_e,Ee,q],class_idx:Te,score:de})}M.dispose()}b.dispose(),j_(O,s)}function F_(e,r,i){return cv.cvtColor(e,e,cv.COLOR_RGBA2RGB),cv.blobFromImage(e,1/255,new cv.Size(r,i),new cv.Scalar(0,0,0),!0,!1)}let qs=null,Uy=null,Rc=!0;async function W_(e,r,i,s,o,d){const u=async()=>{if(!Rc)return;Uy.drawImage(s,0,0,o.width,o.height);const h=cv.imread(o);await v1(h,e,r,i),requestAnimationFrame(u)};qs?(qs.getTracks().forEach(h=>h.stop()),s.srcObject=null,qs=null,Rc=!1,i.width=0,i.height=0):(qs=await navigator.mediaDevices.getUserMedia({video:{deviceId:d?{exact:d}:void 0},audio:!1}),s.srcObject=qs,Uy=o.getContext("2d",{willReadFrequently:!0}),s.onloadedmetadata=()=>{i.width=s.videoWidth,i.height=s.videoHeight},Rc=!0,u())}const Gs=[1,3,640,640],V_=100,H_=.45,q_=.35,jy=new wt("int32",new Int32Array([V_])),Fy=new wt("float32",new Float32Array([H_])),Wy=new wt("float32",new Float32Array([q_]));function G_(){const e=at.useRef(null),r=at.useRef(null),[i,s]=at.useState(null),o=at.useRef(null),[d,u]=at.useState([]),[h,m]=at.useState(!1),[g,_]=at.useState(""),v=at.useRef(null),f=at.useRef(null),x=at.useRef(null),S=at.useRef(null),b=at.useRef(null),[I,A]=at.useState(!1),[C,O]=at.useState(!1),[R,M]=at.useState([]),[F,U]=at.useState(""),[Q,se]=at.useState(0),[ue,we]=at.useState(0),he=at.useRef(null);at.useEffect(()=>{de(),X()},[d]);const de=async()=>{A(!0);const ee=he.current;ee.textContent="Loading model...",ee.style.color="red";const ce=e.current.value,be=r.current.value,Ue=d.find(Me=>Me.url===be),We=Ue?Ue.url:`${window.location.href}/models/${be}.onnx`;try{const Me=performance.now();et.wasm.wasmPaths="./";const Ve=await Qu.create(We,{executionProviders:[ce]}),Bt=await Qu.create(`${window.location.href}/yolo-decoder.onnx`),Xe=new wt("float32",new Float32Array(Gs.reduce((Zn,cn)=>Zn*cn)),Gs),{output0:tt}=await Ve.run({images:Xe}),{output_selected:bt}=await Bt.run({input:tt,topk:jy,iou_threshold:Fy,score_threshold:Wy}),en=performance.now();we((en-Me).toFixed(2)),Te([Xe,tt,bt]),s({yolo:Ve,nms:Bt,config:{isNMS:h,input_shape:Gs,tensor_topk:jy,tensor_iou_threshold:Fy,tensor_score_threshold:Wy}})}catch(Me){ee.textContent="Model loading failed.",ee.style.color="red",console.error(Me);return}A(!1),ee.textContent="Model loaded.",ee.style.color="green"},Te=ee=>{ee.forEach(ce=>ce.dispose())},Pe=at.useCallback(()=>{S.current.width=x.current.width,S.current.height=x.current.height;const ee=cv.imread(x.current);v1(ee,i,se,S.current)},[i]),_e=at.useCallback(()=>{_("");const ee=S.current;ee.width=0,ee.height=0},[]),Ee=at.useCallback(ee=>{const ce=ee.target.files[0];ce&&(_(URL.createObjectURL(ce)),ee.target.value=null)},[]),q=at.useCallback(ee=>{const ce=ee.target.files[0];if(ce){const be=ce.name.replace(".onnx","");u(Ue=>[...Ue,{name:be,url:URL.createObjectURL(ce)}])}},[]),X=async()=>{const ce=(await navigator.mediaDevices.enumerateDevices()).filter(be=>be.kind==="videoinput");M(ce),ce.length>0&&U(ce[0].deviceId)},J=ee=>{U(ee.target.value)},z=async()=>{W_(i,se,S.current,f.current,v.current,F),O(!C)},N=ee=>{m(ee.target.checked),de()},ie=ee=>{const ce=ee.target.value;m(!ce.includes("yolov10")),de()};return Ae.jsxs(Ae.Fragment,{children:[Ae.jsxs("div",{children:[Ae.jsx("h1",{children:"Yolo object detection App"}),Ae.jsx("h2",{children:"Powered by onnxruntime-web"})]}),Ae.jsxs("div",{id:"setting-container",children:[Ae.jsxs("div",{children:[Ae.jsx("label",{htmlFor:"device-selector",children:"Backend:"}),Ae.jsxs("select",{name:"device-selector",ref:e,onChange:de,children:[Ae.jsx("option",{value:"webgpu",children:"webGPU"}),Ae.jsx("option",{value:"wasm",children:"Wasm(cpu)"})]})]}),Ae.jsxs("div",{children:[Ae.jsxs("div",{children:[Ae.jsx("label",{htmlFor:"model-selector",children:"Model:"}),Ae.jsxs("select",{name:"model-selector",ref:r,onChange:ie,children:[Ae.jsx("option",{value:"yolo11n-simplify",children:"yolo11n-2.6M"}),Ae.jsx("option",{value:"yolo11s-simplify",children:"yolo11s-9.4M"}),Ae.jsx("option",{value:"yolo11m-simplify",children:"yolo11m-20.1M"}),Ae.jsx("option",{value:"yolov10n-simplify",children:"yolov10n-2.3M"}),Ae.jsx("option",{value:"yolov10s-simplify",children:"yolov10s-7.2M"}),Ae.jsx("option",{value:"yolov9t-simplify",children:"yolov9t-2.0M"}),Ae.jsx("option",{value:"yolov9s-simplify",children:"yolov9s-7.1M"}),Ae.jsx("option",{value:"gelan-s2-simplify",children:"gelan-s2"}),Ae.jsx("option",{value:"yolov8n-simplify",children:"yolov8n-3.2M"}),Ae.jsx("option",{value:"yolov8s-simplify",children:"yolov8s-11.2M"}),d.map((ee,ce)=>Ae.jsx("option",{value:ee.url,children:ee.name},ce))]})]}),Ae.jsxs("div",{children:[Ae.jsx("label",{htmlFor:"NMS-checkbox",children:"NMS:"}),Ae.jsx("input",{type:"checkbox",id:"NMS-checkbox",checked:h,onChange:N})]})]}),Ae.jsxs("div",{id:"camera-selector-container",children:[Ae.jsx("label",{htmlFor:"camera-selector",children:"Select Camera:"}),Ae.jsx("select",{id:"camera-selector",value:F,onChange:J,children:R.map((ee,ce)=>Ae.jsx("option",{value:ee.deviceId,children:ee.label||`Camera ${ce+1}`},ce))})]})]}),Ae.jsxs("div",{id:"content-container",children:[Ae.jsx("canvas",{ref:v,width:Gs[2],height:Gs[3],hidden:!0}),Ae.jsx("video",{ref:f,style:{display:g?"none":"block"},autoPlay:!0}),Ae.jsx("img",{id:"img",src:g,ref:x,onLoad:Pe}),Ae.jsx("canvas",{id:"overlay",ref:S})]}),Ae.jsxs("div",{id:"btn-container",children:[Ae.jsx("input",{type:"file",accept:"image/*",ref:b,style:{display:"none"},onChange:Ee}),Ae.jsx("button",{disabled:I||C,onClick:()=>{g?_e():b.current.click()},children:g?"Close Image":"Open Image"}),Ae.jsx("button",{disabled:I||g||R.length===0,onClick:z,children:C?"Close Camera":"Open Camera"}),Ae.jsx("input",{type:"file",accept:".onnx",onChange:q,ref:o,hidden:!0}),Ae.jsx("button",{onClick:()=>o.current.click(),children:"Add model"})]}),Ae.jsxs("div",{id:"model-status-container",children:[Ae.jsx("p",{ref:he,children:"yolov10 model loaded."}),Ae.jsxs("div",{id:"inferenct-time-container",children:[Ae.jsxs("p",{children:["Warm up time: ",ue,"ms"]}),Ae.jsxs("p",{children:["Inference time: ",Q,"ms"]})]})]})]})}_2.createRoot(document.getElementById("root")).render(Ae.jsx(p2.StrictMode,{children:Ae.jsx(G_,{})}));
