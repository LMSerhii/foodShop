import{a as p}from"./assets/vendor-b325e1ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const a={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",INIT_QUERY:{keyword:null,category:null,page:1,limit:6,sort:null},PAGES:"pages"},n={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn")};async function _(t){try{return(await p({url:`${a.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(e){return e}}async function E(t){try{return(await p({url:`${a.BASE_URL}/products/${t}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}async function v(){try{return(await p({url:`${a.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}const u=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},l=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},d="/foodShop/assets/sprite-83c9fed8.svg",y=l(a.LOCAL_CART_KEY)??[],S=async t=>{const{id:e}=t.target.closest(".js-card").dataset,r=await E(e);y.some(({_id:s})=>s===r._id)||(y.push(r),u(a.LOCAL_CART_KEY,y),t.target.closest(".js-cart").innerHTML=`<button class="btn-check js-cart" type="button">
   <svg class="icon-check" width="18" height="18">
                               <use href="${d}#check"></use>
                           </svg>
                         </button>`)},L=t=>{if(t.length)return t.map(({_id:e,name:r,img:c,category:s,price:o,size:i,is10PercentOff:b,popularity:h})=>b?`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${r}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${r}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${s.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${i}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${h}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${o}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${d}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${d}#discount"></use>
              </svg>
              
            </div>
        </li>`:`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${r}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${r}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${s.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${i}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${h}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${o}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${d}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`).join("")},m=t=>{t.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span>filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `},A=t=>t.length?t.map(e=>`<option value="${e}">${e.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',C=t=>t.map(e=>`<option value="${e.value}">${e.label}</option>`).join(""),g=async t=>{const e=await _(t);if(!e.results.length){m(n.productList);return}u(a.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages}),n.productList.innerHTML=L(e.results)},Y=t=>{t.preventDefault(),t.target.closest(".js-cart")&&S(t),t.target.classList.contains("js-info")&&openModal(t)};n.productList.addEventListener("click",Y);let f=[];const $=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],w=async()=>{f=[...await v(),"Show_all"];const e=A(f);n.categoryField.insertAdjacentHTML("beforeend",e),n.abcField.innerHTML=C($)},R=t=>{const e=t.target.value,r=l(a.LOCAL_QUERY_KEY);e==="Show_all"?r.category=null:r.category=e,u(a.LOCAL_QUERY_KEY,r);const c=l(a.LOCAL_QUERY_KEY);g(c)},O=t=>{t.preventDefault();const e=n.searchField.value,r=l(a.LOCAL_QUERY_KEY);e?r.keyword=e:r.keyword=null,u(a.LOCAL_QUERY_KEY,r);const c=l(a.LOCAL_QUERY_KEY);g(c)},P=async t=>{const e=t.target.value,r=l(a.LOCAL_QUERY_KEY);r.sort=e,u(a.LOCAL_QUERY_KEY,r);const c=l(a.LOCAL_QUERY_KEY),s=c.sort,o=U(s),i=await F(c,o);Q(i)},U=t=>{let e={};switch(t){case"alphabetical":e="&byABC=true";break;case"reverse-alphabetical":e="&byABC=false";break;case"cheap":e="&byPrice=true";break;case"expensive":e="&byPrice=false";break;case"popular":e="&byPopularity=false";break;case"not-popular":e="&byPopularity=true";break}return e};async function F(t,e){try{return(await p({url:`${a.BASE_URL}/products?${e}`,method:"GET",header:{"Content-Type":"application/json"},params:t})).data}catch(r){return r}}const Q=async t=>{if(!t.results.length){m(n.productList);return}u(a.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages}),n.productList.innerHTML=L(t.results)},T=t=>{if(t.target.value===""){const e=l(a.LOCAL_QUERY_KEY);e.keyword=null,u(a.LOCAL_QUERY_KEY,e);const r=l(a.LOCAL_QUERY_KEY);g(r)}};n.form.addEventListener("submit",O);n.categoryField.addEventListener("change",R);n.abcField.addEventListener("change",P);n.searchField.addEventListener("input",T);u(a.LOCAL_QUERY_KEY,a.INIT_QUERY);const j=l(a.LOCAL_QUERY_KEY)??[];w();g(j);
//# sourceMappingURL=commonHelpers2.js.map
