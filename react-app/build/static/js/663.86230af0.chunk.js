"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[663],{6663:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var s=a(9950),n=a(6491),l=a(5769),i=a(4075),c=a(1671),o=a(1320),r=a(9780),d=a(4193),u=a(9213),m=a(7251),x=a(2053),h=a(2235),p=a(1295),g=a(8429),j=a(5277),f=a(327),v=a(6365),b=a(4382),w=a(1608),T=a(917),A=a(7738),F=a(2935),S=a(2875),N=a(1950),y=a(7108),k=a(4414);function P(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}const B=[{id:"id",label:"Link Id"},{id:"imgUrl",label:"Logo"},{id:"linkUrl",label:"Link Url"},{id:"actions",label:"Actions"}];function M(e){const{order:t,orderBy:a,onRequestSort:s}=e;return(0,k.jsx)(r.A,{children:(0,k.jsx)(u.A,{children:B.map((e=>{return(0,k.jsx)(c.A,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:a===e.id&&t,children:(0,k.jsxs)(m.A,{active:a===e.id,direction:a===e.id?t:"asc",onClick:(l=e.id,e=>{s(e,l)}),children:[e.label,a===e.id?(0,k.jsx)(n.A,{component:"span",sx:p.A,children:"desc"===t?"sorted descending":"sorted ascending"}):null]})},e.id);var l}))})})}function C(){const e=(0,g.Zp)(),[t,a]=s.useState("asc"),[r,m]=s.useState("calories"),[p,B]=s.useState([]),[C,U]=s.useState([]),[O,R]=s.useState([]),[L,q]=s.useState([]),[E,K]=s.useState(0),[z,D]=s.useState(10),[I,G]=s.useState([]),[H,V]=s.useState([]),_=[(0,k.jsx)(S.CMH,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(v.mV5,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(T.lcK,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(v.RGO,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(f.Fx2,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(v.mV5,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(f.rRo,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(b.P5p,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(v.RGO,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(w.EHK,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(A.Ohx,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(F.qTh,{className:"h-10 w-10 text-[#539BFF]"}),(0,k.jsx)(N.wii,{className:"h-10 w-10 text-[#539BFF]"})],W=[["Number of emails:"],["Total mailing accounts:","Total domains:","Secure SMTP port:"],["Number of platforms:"],["Total inbox count:","Total active accounts:","Total inactive accounts:"],["Total mails processed:","Total mails failed:","Total sent mail:"],["Total mailing accounts:","Total domains:","Secure SMTP port:"],["Total mailing accounts:","Total domains:","Secure SMTP port:"],["Number of forwarded emails:"],["Total inbox count:","Total active accounts:","Total inactive accounts:"],["Total mailing accounts:","Total domains:","Secure SMTP port:"],["Total mailing accounts:","Total domains:","Secure SMTP port:"],["Total mailing accounts:","Total domains:","Secure SMTP port:"],["Total mailing accounts:","Total domains:","Secure SMTP port:"]],Z=[[300],C,[7],L,O,C,C,[100],L,C,C,C,C],J=e=>{var t,a=Number(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)||e;D(a),K(0)};async function Q(){try{await y.A.get("http://vmi2000569.contaboserver.net:4000/api/smtpBuilderLogs").then((e=>{U([e.data.mailingAcc,e.data.domains,e.data.sslPort])}))}catch(e){}}async function X(){try{await y.A.get("https://mailwarmer.onrender.com/logs/log-stats").then((e=>{R([e.data.TotalMailsProcessed,e.data.TotalMailsFailed,e.data.TotalSentMail])}))}catch(e){}}async function Y(){try{await y.A.get("https://sea-turtle-app-m6etq.ondigitalocean.app/api/logs").then((e=>{q([e.data.inbox.count,e.data.accounts.activeAccounts,e.data.accounts.inactiveAccounts])}))}catch(e){}}async function $(){try{var e=[];await y.A.get("http://vmi2000569.contaboserver.net:4000/api/links").then((t=>{var a;null===t||void 0===t||null===(a=t.data)||void 0===a||a.forEach(((t,a)=>{e.push({id:a+1,linkUrl:t.linkUrl,name:null===t||void 0===t?void 0:t.name})}))})),G(e),J(5)}catch(t){}}const ee=E>0?Math.max(0,(1+E)*z-I.length):0;var te=s.useMemo((()=>function(e,t){const a=e.map(((e,t)=>[e,t]));return a.sort(((e,a)=>{const s=t(e[0],a[0]);return 0!==s?s:e[1]-a[1]})),a.map((e=>e[0]))}(I,function(e,t){return"desc"===e?(e,a)=>P(e,a,t):(e,a)=>-P(e,a,t)}(t,r)).slice(E*z,E*z+z)),[t,r,E,z]);return s.useEffect((()=>{$(),Q(),X(),Y(),setInterval((()=>{$(),Q(),X(),Y()}),1e4)}),[!1]),200===H&&(e(0),V(0)),(0,k.jsxs)(n.A,{sx:{width:"100%"},children:[(0,k.jsx)("div",{className:"grid grid-flow-row grid-cols-4 items-center justify-center gap-4 w-full h-full",children:null===I||void 0===I?void 0:I.map(((e,t)=>{var a;return(0,k.jsxs)("div",{className:"card h-[200px] flex flex-col justify-center bg-[#09141a] items-center rounded-xl gap-2",children:[(0,k.jsx)("h1",{className:"font-bold text-xl",children:null===e||void 0===e?void 0:e.name}),_[t],(0,k.jsx)("div",{className:"flex-col gap-1 flex",children:null===(a=W[t])||void 0===a?void 0:a.map(((e,a)=>(0,k.jsxs)("div",{className:"flex gap-1",children:[(0,k.jsx)("h5",{className:"",children:e}),(0,k.jsx)("h4",{className:"font-black text-[#539BFF]",children:Z[t][a]})]})))})]},t)}))}),(0,k.jsxs)(h.A,{sx:{width:"100%",mb:2,mt:2},children:[(0,k.jsxs)("div",{className:"flex justify-between items-center h-20 px-4",children:[(0,k.jsx)(x.A,{sx:{flex:"1 1 100%"},variant:"h2",id:"tableTitle",component:"div",children:"Links"}),(0,k.jsx)("div",{className:"flex gap-4",children:(0,k.jsxs)("button",{className:"text-white bg-[#142733] flex justify-center items-center text-xl gap-4 border w-[180px] rounded-md border-transparent px-4 py-2",onClick:e=>{!async function(e){e.preventDefault();let t=[];try{await y.A.get("http://vmi2000569.contaboserver.net:4000/api/links").then((e=>{t=null===e||void 0===e?void 0:e.data}));for(let e=0;e<t.length;e++)setTimeout((()=>{const a=document.createElement("a");a.style.display="none",a.href=t[e].linkUrl,a.target="_blank",document.body.appendChild(a),a.click(),a.remove()}),1250*e)}catch(a){}}(e)},children:["Open All",(0,k.jsx)(j.ApK,{})]})})]}),(0,k.jsx)(o.A,{children:(0,k.jsxs)(l.A,{sx:{minWidth:750},"aria-labelledby":"tableTitle",size:"medium",children:[(0,k.jsx)(M,{numSelected:p.length,order:t,orderBy:r,onSelectAllClick:e=>{if(e.target.checked){const e=I.map((e=>e.id));B(e)}else B([])},onRequestSort:(e,s)=>{a(r===s&&"asc"===t?"desc":"asc"),m(s)},rowCount:I.length}),(0,k.jsxs)(i.A,{children:[te.map(((e,t)=>(0,k.jsxs)(u.A,{tabIndex:-1,children:[(0,k.jsx)(c.A,{component:"th",scope:"row",children:e.id}),(0,k.jsx)(c.A,{children:_[t]}),(0,k.jsx)(c.A,{children:e.linkUrl}),(0,k.jsx)(c.A,{children:(0,k.jsxs)("button",{className:"text-white bg-[#142733] flex justify-center items-center text-xl gap-4 border rounded-md border-transparent px-4 py-2",onClick:t=>{!async function(e,t){e.preventDefault(),t&&window.open(t,"_blank").focus()}(t,e.linkUrl)},children:["Open",(0,k.jsx)(j.ApK,{})]})})]},e.id))),ee>0&&(0,k.jsx)(u.A,{style:{height:53*ee},children:(0,k.jsx)(c.A,{colSpan:6})})]})]})}),(0,k.jsx)(d.A,{rowsPerPageOptions:[5,10,25],component:"div",count:I.length,rowsPerPage:z,page:E,onPageChange:(e,t)=>{K(t)},onRowsPerPageChange:J})]})]})}}}]);