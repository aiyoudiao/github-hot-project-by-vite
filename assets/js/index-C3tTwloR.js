import{j as e,r as s,u as y}from"./vendor-crfcZH_I.js";import{I as r,A as p}from"./Avatar-CB6fJAtS.js";import{f as w}from"./index-7-n3CxbF.js";function S(){return e.jsxs("div",{className:"w-full",children:[e.jsx("h2",{className:"text-2xl text-center text-green-800",children:"使用说明"}),e.jsxs("div",{className:"mt-8 flex items-center justify-around",children:[e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center",children:[e.jsx("h4",{className:"mb-2 text-green-700",children:"输入两个 GitHub 用户"}),e.jsx("div",{className:"mt-4 bg-green-100 w-32 h-32 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300",children:e.jsx(r,{iconName:"fa-user-group",className:" text-orange-500 text-5xl"})})]}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center",children:[e.jsx("h4",{className:"mb-2 text-green-700",children:"比较"}),e.jsx("div",{className:"mt-4 bg-green-100 w-32 h-32 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300",children:e.jsx(r,{iconName:"fa-jet-fighter",className:" text-blue-500 text-5xl"})})]}),e.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center",children:[e.jsx("h4",{className:"mb-2 text-green-700",children:"查看胜者"}),e.jsx("div",{className:"mt-4 bg-green-100 w-32 h-32 flex items-center justify-center rounded-full hover:scale-110 transition-transform duration-300",children:e.jsx(r,{iconName:"fa-trophy",className:" text-yellow-500 text-5xl"})})]})]})]})}function b({title:x,onSubmitUser:i}){const[a,c]=s.useState(""),[o,m]=s.useState({}),[l,d]=s.useState(!1),[n,u]=s.useState(!1),[h,f]=s.useState(null),g=a==="",N=t=>{n||(c(t.target.value),d(!1),f(null))},v=t=>{t.code==="Enter"&&j()},j=async()=>{if(!g&&!n){u(!0),u(!0),f(null);try{const t=await w(a);m(t),d(!0),i(a,t)}catch(t){f((t==null?void 0:t.toString())||"请求失败")}finally{u(!1)}}};return e.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300",children:[e.jsx("h4",{className:"text-sm font-medium leading-6 text-gray-900",children:x}),e.jsxs("div",{className:"flex items-center mt-2",children:[e.jsxs("div",{className:"relative w-full mr-3",children:[e.jsx("input",{type:"text",value:a,onKeyDown:v,onChange:N,className:"block w-full rounded-md border-0 py-1.5 pl-4 pr-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6",placeholder:"输入 Github 用户名，获取用户信息"}),l&&e.jsx("div",{className:"absolute right-2 top-1.5 text-green-600",children:e.jsx(r,{iconName:"fa-check",className:" text-green-600"})})]}),e.jsx("button",{type:"button",className:"ml-2 disabled:cursor-not-allowed disabled:opacity-50 bg-green-100 inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-green-200",onClick:j,disabled:g||l,children:n?e.jsx(r,{iconName:"fa-spinner",className:" text-green-600 text-2xl  animate-spin"}):l?e.jsx(r,{iconName:"fa-ban",className:" text-green-700 text-2xl"}):e.jsx(r,{iconName:"fa-rocket",className:" text-green-700 text-2xl"})})]}),h?e.jsx("div",{className:"mt-1 text-xs text-red-500 h-[16px]",children:h}):l&&e.jsx("div",{className:"mt-2",children:e.jsx(p,{url:`${o==null?void 0:o.avatar_url}`})})]})}const U=()=>{const x=y(),[i,a]=s.useState(""),[c,o]=s.useState(""),[m,l]=s.useState(!1);s.useEffect(()=>{l(!!(i&&c))},[i,c,x]);const d=()=>{x(`/result?userOne=${i}&userTwo=${c}`)};return e.jsxs("div",{className:"py-4 h-full flex flex-col items-center bg-green-50",children:[e.jsx(S,{}),e.jsxs("div",{className:"w-full mt-20",children:[e.jsxs("h3",{className:"text-xl text-center mb-6 text-green-700 font-bold",children:["玩家们，准备好了吗？",m&&e.jsx("button",{onClick:d,className:"bg-green-100 hover:bg-green-200 text-green-800 text-xl font-semibold px-4 border border-green-400 rounded shadow",children:"战斗"})]}),e.jsxs("div",{className:"flex items-start justify-between mx-10",children:[e.jsx("div",{className:"flex-1 w-[50%] mr-10",children:e.jsx(b,{title:"玩家一号",onSubmitUser:n=>{a(n)}})}),e.jsx("div",{className:"flex-1 w-[50%]",children:e.jsx(b,{title:"玩家二号",onSubmitUser:n=>{o(n)}})})]})]})]})},G=s.memo(U);export{G as default};