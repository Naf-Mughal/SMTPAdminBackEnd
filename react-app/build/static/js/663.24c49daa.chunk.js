"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[663],{6663:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var i=t(9950),s=t(6491),r=t(5769),l=t(4075),c=t(1671),a=t(1320),d=t(9780),o=t(4193),u=t(9213),h=t(7251),x=t(2053),p=t(2235),m=t(1295),j=t(8429),f=t(4497),g=t(4414);function A(e,n,t){return n[t]<e[t]?-1:n[t]>e[t]?1:0}const b=[{id:"id",label:"Link Id"},{id:"linkUrl",label:"Link Url"},{id:"actions",label:"Actions"}];function k(e){const{order:n,orderBy:t,onRequestSort:i}=e;return(0,g.jsx)(d.A,{children:(0,g.jsx)(u.A,{children:b.map((e=>{return(0,g.jsx)(c.A,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:t===e.id&&n,children:(0,g.jsxs)(h.A,{active:t===e.id,direction:t===e.id?n:"asc",onClick:(r=e.id,e=>{i(e,r)}),children:[e.label,t===e.id?(0,g.jsx)(s.A,{component:"span",sx:m.A,children:"desc"===n?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))})})}function v(){return(0,g.jsx)("div",{className:"flex justify-between items-center h-20 px-4",children:(0,g.jsx)(x.A,{sx:{flex:"1 1 100%"},variant:"h2",id:"tableTitle",component:"div",children:"Smtp Emails"})})}function w(){const e=(0,j.Zp)(),[n,t]=i.useState("asc"),[d,h]=i.useState("calories"),[x,m]=i.useState([]),[b,w]=i.useState(0),[S,y]=i.useState(10),[C,P]=i.useState([]),[U,z]=i.useState([]),E=e=>{var n,t=Number(null===e||void 0===e||null===(n=e.target)||void 0===n?void 0:n.value)||e;y(t),w(0)};const N=b>0?Math.max(0,(1+b)*S-C.length):0;var R=i.useMemo((()=>function(e,n){const t=e.map(((e,n)=>[e,n]));return t.sort(((e,t)=>{const i=n(e[0],t[0]);return 0!==i?i:e[1]-t[1]})),t.map((e=>e[0]))}(C,function(e,n){return"desc"===e?(e,t)=>A(e,t,n):(e,t)=>-A(e,t,n)}(n,d)).slice(b*S,b*S+S)),[n,d,b,S]);return i.useEffect((()=>{!async function(){try{const n=await(await fetch("http://vmi2000569.contaboserver.net:4000/api/getlinks").then()).json();var e=[];n.forEach(((n,t)=>{e.push({id:t+1,linkUrl:n.linkUrl})})),P(e),E(5)}catch(n){throw n}}()}),[]),200===U&&(e(0),z(0)),(0,g.jsx)(s.A,{sx:{width:"100%"},children:(0,g.jsxs)(p.A,{sx:{width:"100%",mb:2},children:[(0,g.jsx)(v,{numSelected:x.length}),(0,g.jsx)(a.A,{children:(0,g.jsxs)(r.A,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[(0,g.jsx)(k,{numSelected:x.length,order:n,orderBy:d,onSelectAllClick:e=>{if(e.target.checked){const e=C.map((e=>e.id));m(e)}else m([])},onRequestSort:(e,i)=>{t(d===i&&"asc"===n?"desc":"asc"),h(i)},rowCount:C.length}),(0,g.jsxs)(l.A,{children:[R.map(((e,n)=>(0,g.jsxs)(u.A,{tabIndex:-1,children:[(0,g.jsx)(c.A,{component:"th",scope:"row",children:e.id}),(0,g.jsx)(c.A,{children:e.linkUrl}),(0,g.jsx)(c.A,{children:(0,g.jsxs)("button",{className:"text-white bg-[#142733] flex justify-center items-center text-xl gap-4 border rounded-md border-transparent px-4 py-2",onClick:n=>{!async function(e,n){e.preventDefault(),n&&window.open(n,"_blank").focus()}(n,e.linkUrl)},children:["Open",(0,g.jsx)(f.ApK,{})]})})]},e.id))),N>0&&(0,g.jsx)(u.A,{style:{height:53*N},children:(0,g.jsx)(c.A,{colSpan:6})})]})]})}),(0,g.jsx)(o.A,{rowsPerPageOptions:[5,10,25],component:"div",count:C.length,rowsPerPage:S,page:b,onPageChange:(e,n)=>{w(n)},onRowsPerPageChange:E})]})})}}}]);