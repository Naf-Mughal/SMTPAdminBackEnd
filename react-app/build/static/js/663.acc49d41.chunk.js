"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[663],{6663:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var s=n(9950),i=n(6491),r=n(5769),l=n(4075),a=n(1671),c=n(1320),o=n(9780),d=n(4193),h=n(9213),u=n(7251),p=n(2053),x=n(2235),m=n(1295),f=n(8429),j=n(4497),g=n(4414);function w(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}const b=[{id:"id",label:"Link Id"},{id:"linkUrl",label:"Link Url"},{id:"actions",label:"Actions"}];function A(e){const{order:t,orderBy:n,onRequestSort:s}=e;return(0,g.jsx)(o.A,{children:(0,g.jsx)(h.A,{children:b.map((e=>{return(0,g.jsx)(a.A,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:n===e.id&&t,children:(0,g.jsxs)(u.A,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(r=e.id,e=>{s(e,r)}),children:[e.label,n===e.id?(0,g.jsx)(i.A,{component:"span",sx:m.A,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var r}))})})}function k(){return(0,g.jsxs)("div",{className:"flex justify-between items-center h-20 px-4",children:[(0,g.jsx)(p.A,{sx:{flex:"1 1 100%"},variant:"h2",id:"tableTitle",component:"div",children:"Smtp Emails"}),(0,g.jsxs)("button",{className:"text-white bg-[#142733] flex justify-center items-center text-xl gap-4 border w-[180px] rounded-md border-transparent px-4 py-2",onClick:e=>{!async function(e){e.preventDefault();try{await fetch("http://127.0.0.1:4000/api/links")}catch(t){throw t}}(e)},children:["Open All",(0,g.jsx)(j.ApK,{})]})]})}function y(){const e=(0,f.Zp)(),[t,n]=s.useState("asc"),[o,u]=s.useState("calories"),[p,m]=s.useState([]),[b,y]=s.useState(0),[v,S]=s.useState(10),[C,P]=s.useState([]),[U,N]=s.useState([]),O=e=>{var t,n=Number(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)||e;S(n),y(0)};const T=b>0?Math.max(0,(1+b)*v-C.length):0;var z=s.useMemo((()=>function(e,t){const n=e.map(((e,t)=>[e,t]));return n.sort(((e,n)=>{const s=t(e[0],n[0]);return 0!==s?s:e[1]-n[1]})),n.map((e=>e[0]))}(C,function(e,t){return"desc"===e?(e,n)=>w(e,n,t):(e,n)=>-w(e,n,t)}(t,o)).slice(b*v,b*v+v)),[t,o,b,v]);return s.useEffect((()=>{!async function(){try{const t=await(await fetch("http://127.0.0.1:4000/api/getlinks").then()).json();var e=[];e.push({id:0,linkUrl:"https://lovely-gumption-589f9a.netlify.app/"}),t.forEach(((t,n)=>{e.push({id:n+1,linkUrl:t.linkUrl})})),P(e),O(5)}catch(t){throw t}}()}),[]),200===U&&(e(0),N(0)),(0,g.jsx)(i.A,{sx:{width:"100%"},children:(0,g.jsxs)(x.A,{sx:{width:"100%",mb:2},children:[(0,g.jsx)(k,{numSelected:p.length}),(0,g.jsx)(c.A,{children:(0,g.jsxs)(r.A,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[(0,g.jsx)(A,{numSelected:p.length,order:t,orderBy:o,onSelectAllClick:e=>{if(e.target.checked){const e=C.map((e=>e.id));m(e)}else m([])},onRequestSort:(e,s)=>{n(o===s&&"asc"===t?"desc":"asc"),u(s)},rowCount:C.length}),(0,g.jsxs)(l.A,{children:[z.map(((e,t)=>(0,g.jsxs)(h.A,{tabIndex:-1,children:[(0,g.jsx)(a.A,{component:"th",scope:"row",children:e.id}),(0,g.jsx)(a.A,{children:e.linkUrl}),(0,g.jsx)(a.A,{children:(0,g.jsxs)("button",{className:"text-white bg-[#142733] flex justify-center items-center text-xl gap-4 border rounded-md border-transparent px-4 py-2",onClick:t=>{!async function(e,t){if(e.preventDefault(),"https://lovely-gumption-589f9a.netlify.app/"===t)window.open(t,"_blank").focus();else try{await fetch("http://127.0.0.1:4000/api/link",{method:"POST",body:JSON.stringify({linkUrl:t}),headers:{"Content-Type":"application/json"}})}catch(n){throw n}}(t,e.linkUrl)},children:["Open",(0,g.jsx)(j.ApK,{})]})})]},e.id))),T>0&&(0,g.jsx)(h.A,{style:{height:53*T},children:(0,g.jsx)(a.A,{colSpan:6})})]})]})}),(0,g.jsx)(d.A,{rowsPerPageOptions:[5,10,25],component:"div",count:C.length,rowsPerPage:v,page:b,onPageChange:(e,t)=>{y(t)},onRowsPerPageChange:O})]})})}}}]);