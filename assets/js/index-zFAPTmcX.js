import{j as e,r as c,u as p}from"./vendor-crfcZH_I.js";import{b as N,L as v}from"./index-C0zQf8n3.js";import{A as w,I as a}from"./Avatar-CB6fJAtS.js";import{f as x}from"./index-7-n3CxbF.js";const m=({title:o,data:s})=>e.jsx("div",{className:"flex-1 p-2 transition-transform transform hover:scale-105 ",children:e.jsxs("div",{className:"bg-green-100 py-4 max-w-80 mx-auto rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300",children:[e.jsx("div",{className:"px-4 mb-2 text-center text-green-800 font-bold",children:o}),e.jsx("div",{className:"mb-4",children:e.jsx(w,{url:s.avatar_url})}),e.jsxs("div",{className:"px-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-center font-bold text-center text-sm text-green-800",children:["Scores: ",s.public_repos]}),e.jsx("div",{className:"mb-4 flex items-center justify-center",children:e.jsx("a",{href:s.html_url,target:"_blank",rel:"noopener noreferrer",className:"font-bold text-green-600 text-center text-sm truncate hover:text-purple-600",title:s.login,children:s.login})}),e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx(a,{iconName:"fa-location-arrow",className:" text-blue-500"}),e.jsx("div",{className:"ml-2 flex-auto text-xs text-green-700 truncate",children:s.location})]}),e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx(a,{iconName:"fa-users",className:" text-green-500"}),e.jsx("div",{className:"ml-2 flex-auto text-xs text-green-700 truncate",children:s.followers})]}),e.jsxs("div",{className:"flex items-center mb-2",children:[e.jsx(a,{iconName:"fa-user-plus",className:" text-orange-600"}),e.jsx("div",{className:"ml-2 flex-auto text-xs text-green-700 truncate",children:s.following})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(a,{iconName:"fa-code",className:" text-black"}),e.jsx("div",{className:"ml-2 flex-auto text-xs text-green-700 truncate",children:s.public_repos})]})]})]})}),y=()=>{const o=p(),{githubUserOne:s,githubUserTwo:r}=N(),[l,d]=c.useState(null),[n,f]=c.useState(null);c.useEffect(()=>{s&&u(),r&&h()},[s,r]);const u=async()=>{try{const t=await x(s);d(t)}catch(t){console.error(t)}},h=async()=>{try{const t=await x(r);f(t)}catch(t){console.error(t)}},i=()=>{o("/battle")};if(!s||!r)return e.jsxs("div",{className:"py-4 h-full flex flex-col items-center",children:[e.jsx("h1",{className:"pb-4",children:"计算无法完成，因为用户输入有误"}),e.jsx("button",{onClick:i,className:"bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow",children:"重置"})]});if(!l||!n)return e.jsx("div",{className:"py-4 h-full flex flex-col items-center",children:e.jsx(v,{})});const b=()=>l.public_repos>n.public_repos?["无敌胜者","努力加油！"]:l.public_repos<n.public_repos?["努力加油！","无敌胜者"]:["势均力敌？","势均力敌？"],[g,j]=b();return e.jsxs("div",{className:"py-4 h-full flex flex-col items-center bg-green-50",children:[e.jsxs("div",{className:"flex w-full mb-10",children:[e.jsx("div",{className:"w-1/2",children:e.jsx(m,{title:g,data:l})}),e.jsx("div",{className:"w-1/2",children:e.jsx(m,{title:j,data:n})})]}),e.jsx("button",{onClick:i,className:"bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow",children:"重置"})]})},k=c.memo(y);export{k as default};
