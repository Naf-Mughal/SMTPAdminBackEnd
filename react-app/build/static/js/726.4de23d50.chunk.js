"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[726],{3580:(e,t,n)=>{n.d(t,{A:()=>s});n(9950);var i=n(2772),r=n(4414);const s=e=>{let{title:t,description:n,children:s}=e;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(i.m,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{name:"description",content:n})]}),s]})}},3366:(e,t,n)=>{n.d(t,{A:()=>a});n(9950);var i=n(9254),r=n(121),s=n(4414);const a=(0,i.Ay)((e=>(0,s.jsx)(r.A,{...e})))((e=>{let{theme:t}=e;return{"& .MuiOutlinedInput-input::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"1"},"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"1"},"& .Mui-disabled .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.grey[200]}}}))},7494:(e,t,n)=>{n.d(t,{A:()=>o});var i=n(2074);const r=n.p+"static/media/dark-logo.474f7a07abf13df88f58.png";var s=n(9254),a=n(4414);const l=(0,s.Ay)(i.N_)((()=>({height:"70px",width:"100%",display:"flex",alignItems:"center",fontSize:"24px"}))),o=()=>(0,a.jsxs)(l,{to:"/",children:[(0,a.jsx)("img",{src:r,alt:"",className:"h-[70px] w-[70px]"}),(0,a.jsx)("h1",{children:"SalesDriver"})]})},2197:(e,t,n)=>{n.r(t),n.d(t,{default:()=>j});var i=n(9950),r=n(6491),s=n(899),a=n(470),l=n(2053),o=n(2257),d=n(2074),c=n(3580),h=n(7494),p=n(226),x=n(3366);const u=(0,n(7457).A)();var m=n(4414);const g=e=>{let{title:t,subtitle:n,subtext:s}=e;const[a,o]=(0,i.useState)(""),[d,c]=(0,i.useState)("");return(0,m.jsxs)(m.Fragment,{children:[t?(0,m.jsx)(l.A,{fontWeight:"700",variant:"h2",mb:1,children:t}):null,s,(0,m.jsxs)(r.A,{children:[(0,m.jsxs)(u,{mb:3,children:[(0,m.jsx)(l.A,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"name",mb:"5px",children:"User Name"}),(0,m.jsx)(x.A,{id:"name",variant:"outlined",fullWidth:!0,value:a,onChange:e=>{o(e.target.value)}}),(0,m.jsx)(l.A,{variant:"subtitle1",fontWeight:600,component:"label",htmlFor:"password",mb:"5px",mt:"25px",children:"Password"}),(0,m.jsx)(x.A,{id:"password",variant:"outlined",fullWidth:!0,value:d,onChange:e=>{c(e.target.value)}})]}),(0,m.jsx)(p.A,{color:"primary",variant:"contained",size:"large",fullWidth:!0,onClick:function(e){e.preventDefault();try{fetch("http://127.0.0.1:4000/api/register",{method:"POST",body:JSON.stringify({username:a,password:d}),headers:{"Content-Type":"application/json"}})}catch(t){throw t}},children:"Sign Up"})]}),n]})},j=()=>(0,m.jsx)(c.A,{title:"Register",description:"this is Register page",children:(0,m.jsx)(r.A,{sx:{position:"relative","&:before":{content:'""',background:"radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",backgroundSize:"400% 400%",animation:"gradient 15s ease infinite",position:"absolute",height:"100%",width:"100%",opacity:"0.3"}},children:(0,m.jsx)(s.Ay,{container:!0,spacing:0,justifyContent:"center",sx:{height:"100vh"},children:(0,m.jsx)(s.Ay,{item:!0,xs:12,sm:12,lg:4,xl:3,display:"flex",justifyContent:"center",alignItems:"center",children:(0,m.jsxs)(a.A,{elevation:9,sx:{p:4,zIndex:1,width:"100%",maxWidth:"500px"},children:[(0,m.jsx)(r.A,{display:"flex",alignItems:"center",justifyContent:"center",children:(0,m.jsx)(h.A,{})}),(0,m.jsx)(g,{subtext:(0,m.jsx)(l.A,{variant:"subtitle1",textAlign:"center",color:"textSecondary",mb:1,children:"Your Social Campaigns"}),subtitle:(0,m.jsxs)(o.A,{direction:"row",justifyContent:"center",spacing:1,mt:3,children:[(0,m.jsx)(l.A,{color:"textSecondary",variant:"h6",fontWeight:"400",children:"Already have an Account?"}),(0,m.jsx)(l.A,{component:d.N_,to:"/",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Sign In"})]})})]})})})})})}}]);