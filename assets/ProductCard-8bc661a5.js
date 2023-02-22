import{u as y,d as A,m as k,r as x,n,c as v,a as s,j as a,i as w,L as B,s as S}from"./index-936b0659.js";import{G as T,a as j,b as p,c as t}from"./index.esm-bded1fbe.js";import{u as D}from"./wishListApi-b6b8b903.js";import{e as M}from"./discountCalculate-864b093a.js";function P(e){return T({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"}},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}}]})(e)}const $=({product:e})=>{var f,g;const o=y(),{user:r}=A(i=>i==null?void 0:i.user),[N,{isSuccess:d,isError:W,error:_,isLoading:h}]=k(),[b,{isSuccess:m,isError:G,error:F,isLoading:u}]=D(),E=()=>{const i=r==null?void 0:r.email,c={product:e==null?void 0:e._id};b({userEmail:i,data:c})},L=()=>{const i=r==null?void 0:r.email,c={product:e==null?void 0:e._id};i?N({email:i,data:c}):o(S(!0))};x.useEffect(()=>{d&&(n.dismiss(),o(v(!0)),n.success("Product added to cart",{id:"toast1"}))},[d]),x.useEffect(()=>{m&&(o(v(!1)),n.dismiss(),n.success("Product added to wishlist",{id:"toast2"}))},[m]);const l=M(e);return console.log(l),s("div",{className:"max-w-[216px] rounded-md",children:a("div",{className:" shadow  p-2",children:[a("div",{className:"relative group ",children:[s("img",{className:"h-[200px] w-full",src:(f=e==null?void 0:e.images)==null?void 0:f[0]}),a("div",{className:" absolute top-10 right-0 p-2 hidden  group-hover:flex flex-col gap-1 text-[1rem] ",children:[u?s(w,{}):s("button",{onClick:E,className:"p-2 bg-[#ccc] rounded-full cursor-pointer border border-transparent hover:border-[#ff4646] hover:text-white hover:bg-[#ff4646]",children:s(j,{})}),s(B,{to:`/product-details/${e._id}`,className:"p-2 bg-[#ccc] rounded-full cursor-pointer border border-transparent hover:order-[#ff4646] hover:text-white hover:bg-[#ff4646]",children:s(P,{})}),h?s(w,{}):s("button",{disabled:h,onClick:L,className:"p-2 bg-[#ccc] rounded-full cursor-pointer border border-transparent hover:border-[#ff4646] hover:text-white hover:bg-[#ff4646]",children:s(p,{})})]})]}),a("div",{className:"text-center mt-2",children:[s("h3",{className:"truncate",children:e==null?void 0:e.name}),a("div",{className:"flex mt-1 gap-1 justify-center items-center flex-wrap ",children:[s(t,{className:"text-orange-500"}),s(t,{className:"text-orange-500"}),s(t,{className:"text-orange-500"}),s(t,{className:"text-orange-500"}),s(t,{}),a("span",{className:"text-[#999]",children:["(",(g=e==null?void 0:e.reviews)==null?void 0:g.length," Reviews)"]})]}),l?a("div",{className:"truncate",children:[a("del",{className:"old-price text-[#aaa]",children:["৳",e==null?void 0:e.price,".00"]}),a("ins",{className:"product-price font-bold ml-2.5 no-underline",children:["৳",l,".00"]})]}):s("strong",{children:e==null?void 0:e.price})]})]})})};export{$ as P};
