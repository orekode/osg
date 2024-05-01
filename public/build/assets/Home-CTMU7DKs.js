import{r as l,j as e,a as o}from"./app-Djs5CSDn.js";/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),d=(...s)=>s.filter((t,i,a)=>!!t&&a.indexOf(t)===i).join(" ");/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=l.forwardRef(({color:s="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:a,className:x="",children:c,iconNode:m,...p},h)=>l.createElement("svg",{ref:h,...b,width:t,height:t,stroke:s,strokeWidth:a?Number(i)*24/Number(t):i,className:d("lucide",x),...p},[...m.map(([u,f])=>l.createElement(u,f)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=(s,t)=>{const i=l.forwardRef(({className:a,...x},c)=>l.createElement(v,{ref:c,iconNode:t,className:d(`lucide-${j(s)}`,a),...x}));return i.displayName=`${s}`,i};/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=n("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=n("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=n("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=n("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=n("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),r=[{title:"Intuitive User Interfaces",content:"We would design sleek and intuitive user interfaces for seamless navigation and productivity."},{title:"Customization Options",content:"Personalize your device with a wide range of customization options, including themes, wallpapers, and widgets."},{title:"Enhanced Security",content:"Protect your data with advanced security features such as encryption, secure boot, and app permissions management."},{title:"Optimized Performance",content:"Enjoy smooth performance and efficient resource management for enhanced battery life and responsiveness."},{title:"App Ecosystem",content:"Access a rich ecosystem of apps and services through our curated app store, ensuring a diverse range of software for every need."}],C=[{title:"Kernel Developer",image:"kernel.webp"},{title:"Platform Developer",image:"platform.webp"},{title:"System Developer",image:"system.webp"},{title:"App Developer",image:"app.webp"},{title:"Backend Developer",image:"backend.png"},{title:"Frontend Developer",image:"frontend.jpg"}],M=()=>{const[s,t]=l.useState(!1);return e.jsxs("div",{children:[e.jsxs("nav",{className:"flex justify-between p-4 px-6 relative",children:[e.jsxs("div",{className:"logo font-black text-3xl",children:[e.jsx("span",{className:"text-red-500",children:"O"}),e.jsx("span",{className:"text-yellow-500",children:"S"}),e.jsx("span",{className:"text-green-500",children:"G"})]}),e.jsx("div",{onClick:()=>t(!s),className:"menu",children:e.jsx(w,{size:50,strokeWidth:1.4})}),e.jsxs("div",{className:`fixed top-0 ${s?"right-0":"-right-[200vw]"} transition-all duration-300 h-screen border-l w-[400px] z-50 bg-white`,children:[e.jsx("div",{className:"flex items-center justify-center py-6",children:e.jsx("div",{onClick:()=>t(!s),className:"h-[50px] w-[50px] rounded-full cursor-pointer border border-black text-3xl flex items-center justify-center",children:e.jsx(z,{})})}),e.jsxs("div",{className:"",children:[e.jsx("div",{className:"text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer",children:"Home"}),e.jsx("div",{className:"text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer",children:"About"}),e.jsx("div",{className:"text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer",children:"Docs"}),e.jsx("div",{className:"text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer",children:"Blog"}),e.jsx(o,{href:"/login",children:e.jsx("div",{className:"text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer",children:"Login"})}),e.jsx(o,{href:"/register",children:e.jsx("div",{className:"text-center text-3xl font-thin p-4 opacity-80 hover:scale-105 transition duration-100 mb-2 cursor-pointer",children:"Contribute"})})]})]})]}),e.jsx("header",{className:"relative pt-12",children:e.jsxs("div",{className:"flex min-h-screen spacing",children:[e.jsxs("div",{className:"middle h-full relative z-10 max-[1250px]:max-w-[700px] max-[1190px]:max-w-[500px] max-[850px]:text-white",children:[e.jsx("h1",{className:"large-txt ",children:"Inspiring Mobile Experiences Beyond The Norm"}),e.jsx("p",{className:"max-w-[600px] my-3",children:"Welcome to OS-Ghana, an open-source initiative dedicated to revolutionizing the mobile experience. Our project aims to provide a cutting-edge mobile operating system that empowers users with flexibility, performance, and security"}),e.jsxs("div",{className:"flex gap-3 py-3",children:[e.jsx("button",{className:"bg-white border-2 border-yellow-600 text-yellow-600",children:"Learn More"}),e.jsx(o,{href:"/register",children:e.jsx("button",{className:"bg-green-600",children:"Join Us"})})]})]}),e.jsxs("div",{className:"right w-[650px] max-[1000px]:w-[50vw] max-[850px]:w-full h-full absolute top-0 right-0 z-0",children:[e.jsx("img",{src:"/images/cool.png",className:"object-contain h-full w-full max-[850px]:hidden"}),e.jsx("img",{src:"/images/phones.jpg",className:"object-cover h-full w-full min-[850px]:hidden"}),e.jsx("div",{className:"absolute top-0 left-0 h-full w-full max-[850px]:bg-black max-[850px]:bg-opacity-80"})]})]})}),e.jsxs("section",{className:"min-[850px]:-mt-16 relative max-[1050px]:py-12",children:[e.jsxs("div",{className:"grid grid-cols-12 max-[850px]:grid-cols-8 max-[560px]:grid-cols-4 gap-6 justify-center relative z-10",children:[e.jsxs("div",{className:"col-span-4 flex flex-col justify-center gap-6",children:[e.jsx("div",{className:"flex max-w-[400px] bg-white border border-gray-200 rounded-xl",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"font-bold text-3xl max-[1050px]:text-xl border-b px-4 py-2",children:r[0].title}),e.jsx("p",{className:"px-4 py-2",children:r[0].content})]})}),e.jsx("div",{className:"flex max-w-[400px] bg-white border border-gray-200 rounded-xl min-[850px]:hidden",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"font-bold text-3xl max-[1050px]:text-xl border-b px-4 py-2",children:r[2].title}),e.jsx("p",{className:"px-4 py-2",children:r[2].content})]})})]}),e.jsxs("div",{className:"col-span-4 flex flex-col justify-center gap-6",children:[e.jsx("div",{className:"flex max-w-[400px] bg-white border border-gray-200 rounded-xl",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"font-bold text-3xl max-[1050px]:text-xl border-b px-4 py-2",children:r[1].title}),e.jsx("p",{className:"px-4 py-2",children:r[1].content})]})}),e.jsx("div",{className:"h-[400px] my-3 max-[650px]:hidden",children:e.jsx("img",{src:"/images/phone.png",className:"object-contain h-full w-full"})}),e.jsx("div",{className:"flex max-w-[400px] bg-white border border-gray-200 rounded-xl",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"font-bold text-3xl max-[1050px]:text-xl border-b px-4 py-2",children:r[3].title}),e.jsx("p",{className:"px-4 py-2",children:r[3].content})]})})]}),e.jsx("div",{className:"col-span-4 flex items-center max-[850px]:hidden",children:e.jsx("div",{className:"flex max-w-[400px] bg-white border border-gray-200 rounded-xl",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"font-bold text-3xl max-[1050px]:text-xl border-b px-4 py-2",children:r[2].title}),e.jsx("p",{className:"px-4 py-2",children:r[2].content})]})})})]}),e.jsx("div",{className:"absolute top-0 left-0 h-full w-full",children:e.jsx("img",{src:"/images/lines.jpg",alt:"",className:"object-cover h-full w-full opacity-20"})})]}),e.jsxs("section",{className:"py-12",children:[e.jsxs("h1",{className:"medium-txt text-center",children:["Join Our Team ",e.jsx("br",{})," Build The Future !"]}),e.jsx("div",{className:"grid grid-cols-12 max-[1095px]:grid-cols-8 max-[600px]:grid-cols-4 max-[720px]:gap-6 gap-12 my-12",children:C.map(({title:i,image:a})=>e.jsxs("div",{className:"card col-span-4 max- rounded-xl overflow-hidden shadow hover:scale-105 transition duration-300",children:[e.jsx("div",{className:"h-[300px] bg-black",children:e.jsx("img",{src:`/images/${a}`,className:"object-cover h-full w-full"})}),e.jsxs("div",{className:"content p-2",children:[e.jsx("h2",{className:"font-bold text-xl mb-2",children:i}),e.jsx(o,{href:"/register",children:e.jsx("button",{className:"w-full bg-white border-2 border-black hover:border-blue-600 py-1.5 text-black",children:"Apply Now"})})]})]}))})]}),e.jsxs("footer",{className:"bg-[#111] text-white spacing py-12 grid grid-cols-12 max-[1020px]:grid-cols-8 max-[650px]:grid-cols-4",children:[e.jsxs("div",{className:"col-span-4 flex items-center flex-col h-full justify-center",children:[e.jsx("div",{className:"border rounded-3xl border-white px-6 py-2 mb-3 min-w-[300px] text-center",children:"info@osg.com"}),e.jsx("div",{className:"border rounded-3xl border-white px-6 py-2 mb-3 min-w-[300px] text-center",children:"0508809987"})]}),e.jsx("div",{className:"col-span-4 h-full flex items-center justify-center text-center",children:e.jsx("div",{className:"text-9xl opacity-30 font-black",children:"OSG"})}),e.jsx("div",{className:"col-span-4 max-[650px]:row-start-1 max-[650px]:mb-6",children:e.jsxs("div",{className:"flex items-center gap-6 h-full justify-center",children:[e.jsx("div",{className:"h-[50px] w-[50px] rounded-full flex items-center justify-center border border-white border-opacity-30",children:e.jsx(N,{})}),e.jsx("div",{className:"h-[50px] w-[50px] rounded-full flex items-center justify-center border border-white border-opacity-30",children:e.jsx(g,{})}),e.jsx("div",{className:"h-[50px] w-[50px] rounded-full flex items-center justify-center border border-white border-opacity-30",children:e.jsx(y,{})}),e.jsx("div",{className:"h-[50px] w-[50px] rounded-full flex items-center justify-center border border-white border-opacity-30",children:e.jsx(k,{})})]})})]})]})};export{M as default};
