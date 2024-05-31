import{h as p,r as b,o as f,g as v,u as h,f as K,w,b as k,M as S,t as j,l as g,c as O,a as $,be as N,F as P}from"../app.c684b821.js";const z=p({__name:"basic",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,r=1,a="node")=>{let n=0;return Array.from({length:o}).fill(r).map(()=>{const c=r===e?0:Math.round(Math.random()*t),l=u(a,++n);return{id:l,label:l,children:c?s(e,t,c,r+1,l):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=b("el-tree-v2");return f(),v(o,{style:{"max-width":"600px"},data:h(d),props:_,height:208},null,8,["data"])}}});var R=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));const T=p({__name:"custom-node",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,r=1,a="node")=>{let n=0;return Array.from({length:o}).fill(r).map(()=>{const c=r===e?0:Math.round(Math.random()*t),l=u(a,++n);return{id:l,label:l,children:c?s(e,t,c,r+1,l):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=b("el-tree-v2");return f(),v(o,{style:{"max-width":"600px"},data:h(d),props:_,height:208},{default:w(({node:r})=>[k("span",{class:S(["prefix",{"is-leaf":r.isLeaf}])},"[ElementPlus]",2),k("span",null,j(r.label),1)]),_:1},8,["data"])}}});var A=K(T,[["__scopeId","data-v-77b4dc9b"]]),q=Object.freeze(Object.defineProperty({__proto__:null,default:A},Symbol.toStringTag,{value:"Module"}));const V=p({__name:"default-state",setup(m){const u=(a,n)=>`${a}-${n}`,s=(a,n,c,l=1,M="node")=>{let x=0;return Array.from({length:c}).fill(l).map(()=>{const y=l===a?0:Math.round(Math.random()*n),i=u(M,++x);return{id:i,label:i,children:y?s(a,n,y,l+1,i):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40),e=[],t=[];for(const a of d){const n=a.children;if(n){t.push(a.id),e.push(n[0].id);break}}const o=g(e),r=g(t);return(a,n)=>{const c=b("el-tree-v2");return f(),v(c,{style:{"max-width":"600px"},data:h(d),height:208,props:_,"show-checkbox":"","default-checked-keys":o.value,"default-expanded-keys":r.value},null,8,["data","default-checked-keys","default-expanded-keys"])}}});var D=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));const B=p({__name:"disabled",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,r=1,a="node")=>{let n=0;return Array.from({length:o}).fill(r).map(()=>{const c=r===e?0:Math.round(Math.random()*t),l=u(a,++n);return{id:l,label:l,children:c?s(e,t,c,r+1,l):void 0,disabled:l.includes("2")}})},_={value:"id",label:"label",children:"children",disabled:"disabled"},d=s(4,30,40);return(e,t)=>{const o=b("el-tree-v2");return f(),v(o,{style:{"max-width":"600px"},data:h(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}});var L=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const E=p({__name:"filter",setup(m){const u=(a,n)=>`${a}-${n}`,s=(a,n,c,l=1,M="node")=>{let x=0;return Array.from({length:c}).fill(l).map(()=>{const y=l===a?0:Math.round(Math.random()*n),i=u(M,++x);return{id:i,label:i,children:y?s(a,n,y,l+1,i):void 0}})},_=g(""),d=g(),e=s(4,30,5),t={value:"id",label:"label",children:"children"},o=a=>{d.value.filter(a)},r=(a,n)=>n.label.includes(a);return(a,n)=>{const c=b("el-input");return f(),O(P,null,[$(c,{modelValue:_.value,"onUpdate:modelValue":n[0]||(n[0]=l=>_.value=l),style:{width:"240px"},placeholder:"Please enter keyword",onInput:o},null,8,["modelValue"]),$(h(N),{ref_key:"treeRef",ref:d,style:{"max-width":"600px"},data:h(e),props:t,"filter-method":r,height:208},null,8,["data"])],64)}}});var Q=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));const F=p({__name:"selectable",setup(m){const u=(e,t)=>`${e}-${t}`,s=(e,t,o,r=1,a="node")=>{let n=0;return Array.from({length:o}).fill(r).map(()=>{const c=r===e?0:Math.round(Math.random()*t),l=u(a,++n);return{id:l,label:l,children:c?s(e,t,c,r+1,l):void 0}})},_={value:"id",label:"label",children:"children"},d=s(4,30,40);return(e,t)=>{const o=b("el-tree-v2");return f(),v(o,{style:{"max-width":"600px"},data:h(d),props:_,"show-checkbox":"",height:208},null,8,["data"])}}});var U=Object.freeze(Object.defineProperty({__proto__:null,default:F},Symbol.toStringTag,{value:"Module"}));export{R as _,q as a,D as b,L as c,Q as d,U as e};