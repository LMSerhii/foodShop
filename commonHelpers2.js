import{c as r,l as s,s as n,a as b,n as g,b as E,d as f,e as A,f as C}from"./assets/markupFunctions-52d6f1e1.js";import{a as u}from"./assets/vendor-b325e1ef.js";const o={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products")};async function S(e){try{return(await u({url:`${r.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:e})).data}catch(t){return t}}async function P(e){try{return(await u({url:`${r.BASE_URL}/products/${e}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function Y(e){try{let t=null;return e&&(t={limit:e}),(await u({url:`${r.BASE_URL}/products/popular`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(t){return t}}async function v(){try{return(await u({url:`${r.BASE_URL}/products/discount`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}async function k(){try{return(await u({url:`${r.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}const p=s(r.LOCAL_CART_KEY)??[],h=async e=>{const{id:t}=e.target.closest(".js-card").dataset,a=await P(t);p.some(({_id:i})=>i===a._id)||(p.push(a),n(r.LOCAL_CART_KEY,p),e.target.closest(".js-cart").innerHTML=`<button class="btn-check js-cart" type="button">
   <svg class="icon-check" width="18" height="18">
                               <use href="${b}#check"></use>
                           </svg>
                         </button>`)},l=async e=>{const t=await S(e);if(!t.results.length){g(o.productList);return}n(r.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages}),o.productList.innerHTML=E(t.results)},w=e=>{e.preventDefault(),e.target.closest(".js-cart")&&h(e),e.target.classList.contains("js-info")&&openModal(e)};o.productList.addEventListener("click",w);let L=[];const R=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],T=async()=>{L=[...await k(),"Show_all"];const t=f(L);o.categoryField.insertAdjacentHTML("beforeend",t),o.abcField.innerHTML=A(R)},U=e=>{const t=e.target.value,a=s(r.LOCAL_QUERY_KEY);t==="Show_all"?a.category=null:a.category=t,n(r.LOCAL_QUERY_KEY,a);const c=s(r.LOCAL_QUERY_KEY);l(c)},q=e=>{e.preventDefault();const t=o.searchField.value,a=s(r.LOCAL_QUERY_KEY);t?a.keyword=t:a.keyword=null,n(r.LOCAL_QUERY_KEY,a);const c=s(r.LOCAL_QUERY_KEY);l(c)},Q=async e=>{const t=e.target.value,a=s(r.LOCAL_QUERY_KEY);a.sort=t,n(r.LOCAL_QUERY_KEY,a);const c=s(r.LOCAL_QUERY_KEY),i=c.sort,d=F(i),_=await j(c,d);O(_)},F=e=>{let t={};switch(e){case"alphabetical":t="&byABC=true";break;case"reverse-alphabetical":t="&byABC=false";break;case"cheap":t="&byPrice=true";break;case"expensive":t="&byPrice=false";break;case"popular":t="&byPopularity=false";break;case"not-popular":t="&byPopularity=true";break}return t};async function j(e,t){try{return(await u({url:`${r.BASE_URL}/products?${t}`,method:"GET",header:{"Content-Type":"application/json"},params:e})).data}catch(a){return a}}const O=async e=>{if(!e.results.length){g(o.productList);return}n(r.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages}),o.productList.innerHTML=E(e.results)},K=e=>{if(e.target.value===""){const t=s(r.LOCAL_QUERY_KEY);t.keyword=null,n(r.LOCAL_QUERY_KEY,t);const a=s(r.LOCAL_QUERY_KEY);l(a)}};o.form.addEventListener("submit",q);o.categoryField.addEventListener("change",U);o.abcField.addEventListener("change",Q);o.searchField.addEventListener("input",K);const y=document.querySelector(".popular_products_list");console.dir(y);y.addEventListener("click",$);async function M(){const e=await Y();if(!e.length){notFoundMarkup(o.popularProductList);return}n(r.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages});const t=C(e);y.insertAdjacentHTML("beforeend",t)}function $(e){e.preventDefault(),e.target.closest(".js-cart")&&h(e),e.target.classList.contains("js-info")&&openModal(e)}const B=document.querySelector(".discount-product-list");async function D(){const e=await v();console.log(e);const t=G(e);B.innerHTML=t}function G(e){return e.map(({img:t,name:a,price:c,_id:i,is10PercentOff:d})=>{if(d)return`
        <li class="discount-product-element">
        <div class="discount-product-img-wrapper">
        <img class="discount-product-img" src="${t}" alt="${a}">
        </div>
        
        <div class="discount-product-descr">
         <div class="discount-product-name-wrapper">
           <h3 class="discount-product-name">${a}</h3>
          </div>
         <div class="discount-product-price-wrapper">
          <p class="discount-product-price">$${c}</p>
          <button class="discount-product-btn" type="button">add</button>
          </div>
        </div>
        
        </li>`}).join("")}const m=document.querySelector(".discount-product-list");console.log(m);m.addEventListener("click",void 0);n(r.LOCAL_QUERY_KEY,r.INIT_QUERY);const H=s(r.LOCAL_QUERY_KEY)??[];T();l(H);M();D();
//# sourceMappingURL=commonHelpers2.js.map