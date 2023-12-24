import{a as p}from"./assets/vendor-b325e1ef.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const a={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",INIT_QUERY:{keyword:null,category:null,page:1,limit:6,sort:null},PAGES:"pages"},n={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products")};async function E(e){try{return(await p({url:`${a.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:e})).data}catch(t){return t}}async function S(e){try{return(await p({url:`${a.BASE_URL}/products/${e}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function $(e){try{let t=null;return e&&(t={limit:e}),(await p({url:`${a.BASE_URL}/products/popular`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(t){return t}}async function A(){try{return(await p({url:`${a.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}const u=(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(r){console.error("Set state error: ",r.message)}},i=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},d="/foodShop/assets/sprite-83c9fed8.svg",y=i(a.LOCAL_CART_KEY)??[],m=async e=>{const{id:t}=e.target.closest(".js-card").dataset,r=await S(t);y.some(({_id:s})=>s===r._id)||(y.push(r),u(a.LOCAL_CART_KEY,y),e.target.closest(".js-cart").innerHTML=`<button class="btn-check js-cart" type="button">
   <svg class="icon-check" width="18" height="18">
                               <use href="${d}#check"></use>
                           </svg>
                         </button>`)},b=e=>{if(e.length)return e.map(({_id:t,name:r,img:c,category:s,price:o,size:l,is10PercentOff:v,popularity:f})=>v?`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${r}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${r}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${s.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${l}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${f}</span></li>
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
        </li>`:`<li class="card js-card" data-id=${t}>
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
                    <span>${l}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${f}</span>
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
        </li>`).join("")},_=e=>{e.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span>filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `},C=e=>e.length?e.map(t=>`<option value="${t}">${t.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',P=e=>e.map(t=>`<option value="${t.value}">${t.label}</option>`).join("");function Y(e){if(!e.length){console.log("Sorry not data");return}return e.map(({_id:t,name:r,img:c,category:s,size:o,popularity:l})=>`<li class="popular-card js-card" data-id=${t}>
                    <div class="popular-box">
                      <div class="popular-card-img-wrap">
                          <img src="${c}" alt="${r}" width="56" height="56" loading="lazy"/>
                      </div>
                      <div class="card-info-box">
                      
                        <h3 class="popular-name">${r}</h3>
                      
                      <ul class="popular-info-list">
                          <li class="info-style">Category:
                          <span>${s.replace("_"," ")}</span></li>
                          <div class="popular-info-wraper">
                          <li class="info-style">Size: <span>${o}</span></li>
                          <li class="info-style">Popularity: <span>${l}</span></li>
                      </ul>
                      </div>
                    </div>

                    <div class="card-bottom">
                      
                      <button class="card-btn js-cart" type="button">
                          <svg class="icon" width="18" height="18">
                              <use href="${d}#cart"></use>
                          </svg>
                      </button>
                    </div>
                </li>`).join("")}const g=async e=>{const t=await E(e);if(!t.results.length){_(n.productList);return}u(a.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages}),n.productList.innerHTML=b(t.results)},w=e=>{e.preventDefault(),e.target.closest(".js-cart")&&m(e),e.target.classList.contains("js-info")&&openModal(e)};n.productList.addEventListener("click",w);let L=[];const j=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],R=async()=>{L=[...await A(),"Show_all"];const t=C(L);n.categoryField.insertAdjacentHTML("beforeend",t),n.abcField.innerHTML=P(j)},O=e=>{const t=e.target.value,r=i(a.LOCAL_QUERY_KEY);t==="Show_all"?r.category=null:r.category=t,u(a.LOCAL_QUERY_KEY,r);const c=i(a.LOCAL_QUERY_KEY);g(c)},T=e=>{e.preventDefault();const t=n.searchField.value,r=i(a.LOCAL_QUERY_KEY);t?r.keyword=t:r.keyword=null,u(a.LOCAL_QUERY_KEY,r);const c=i(a.LOCAL_QUERY_KEY);g(c)},k=async e=>{const t=e.target.value,r=i(a.LOCAL_QUERY_KEY);r.sort=t,u(a.LOCAL_QUERY_KEY,r);const c=i(a.LOCAL_QUERY_KEY),s=c.sort,o=U(s),l=await F(c,o);Q(l)},U=e=>{let t={};switch(e){case"alphabetical":t="&byABC=true";break;case"reverse-alphabetical":t="&byABC=false";break;case"cheap":t="&byPrice=true";break;case"expensive":t="&byPrice=false";break;case"popular":t="&byPopularity=false";break;case"not-popular":t="&byPopularity=true";break}return t};async function F(e,t){try{return(await p({url:`${a.BASE_URL}/products?${t}`,method:"GET",header:{"Content-Type":"application/json"},params:e})).data}catch(r){return r}}const Q=async e=>{if(!e.results.length){_(n.productList);return}u(a.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages}),n.productList.innerHTML=b(e.results)},q=e=>{if(e.target.value===""){const t=i(a.LOCAL_QUERY_KEY);t.keyword=null,u(a.LOCAL_QUERY_KEY,t);const r=i(a.LOCAL_QUERY_KEY);g(r)}};n.form.addEventListener("submit",T);n.categoryField.addEventListener("change",O);n.abcField.addEventListener("change",k);n.searchField.addEventListener("input",q);const h=document.querySelector(".popular_products_list");console.dir(h);h.addEventListener("click",M);async function K(){const e=await $();if(!e.length){notFoundMarkup(n.popularProductList);return}u(a.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages});const t=Y(e);h.insertAdjacentHTML("beforeend",t)}function M(e){e.preventDefault(),e.target.closest(".js-cart")&&m(e),e.target.classList.contains("js-info")&&openModal(e)}u(a.LOCAL_QUERY_KEY,a.INIT_QUERY);const G=i(a.LOCAL_QUERY_KEY)??[];R();g(G);K();
//# sourceMappingURL=commonHelpers2.js.map
