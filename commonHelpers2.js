import{a as d}from"./assets/vendor-b325e1ef.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(o){if(o.ep)return;o.ep=!0;const a=r(o);fetch(o.href,a)}})();const s={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",INIT_QUERY:{keyword:null,category:null,page:1,limit:6,sort:null},PAGES:"pages"},n={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products")};async function S(t){try{return(await d({url:`${s.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(e){return e}}async function $(t){try{return(await d({url:`${s.BASE_URL}/products/${t}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}async function A(t){try{let e=null;return t&&(e={limit:t}),(await d({url:`${s.BASE_URL}/products/popular`,method:"GET",header:{"Content-Type":"aplication/json"},params:e})).data}catch(e){return e}}async function C(){try{return(await d({url:`${s.BASE_URL}/products/discount`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function P(){try{return(await d({url:`${s.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}const u=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},l=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},p="/foodShop/assets/sprite-83c9fed8.svg",y=l(s.LOCAL_CART_KEY)??[],L=async t=>{const{id:e}=t.target.closest(".js-card").dataset,r=await $(e);y.some(({_id:o})=>o===r._id)||(y.push(r),u(s.LOCAL_CART_KEY,y),t.target.closest(".js-cart").innerHTML=`<button class="btn-check js-cart" type="button">
   <svg class="icon-check" width="18" height="18">
                               <use href="${p}#check"></use>
                           </svg>
                         </button>`)},b=t=>{if(t.length)return t.map(({_id:e,name:r,img:c,category:o,price:a,size:i,is10PercentOff:E,popularity:f})=>E?`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${r}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${r}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${o.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${i}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${f}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${a}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${p}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${p}#discount"></use>
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
                    <span>${o.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${i}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${f}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${a}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${p}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`).join("")},v=t=>{t.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span>filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `},w=t=>t.length?t.map(e=>`<option value="${e}">${e.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',Y=t=>t.map(e=>`<option value="${e.value}">${e.label}</option>`).join("");function j(t){if(!t.length){console.log("Sorry not data");return}return t.map(({_id:e,name:r,img:c,category:o,size:a,popularity:i})=>`<li class="popular-card js-card" data-id=${e}>
                    <div class="popular-box">
                      <div class="popular-card-img-wrap">
                          <img src="${c}" alt="${r}" width="56" height="56" loading="lazy"/>
                      </div>
                      <div class="card-info-box">
                      
                        <h3 class="popular-name">${r}</h3>
                      
                      <ul class="popular-info-list">
                          <li class="info-style">Category:
                          <span>${o.replace("_"," ")}</span></li>
                          <div class="popular-info-wraper">
                          <li class="info-style">Size: <span>${a}</span></li>
                          <li class="info-style">Popularity: <span>${i}</span></li>
                      </ul>
                      </div>
                    </div>

                    <div class="card-bottom">
                      
                      <button class="card-btn js-cart" type="button">
                          <svg class="icon" width="18" height="18">
                              <use href="${p}#cart"></use>
                          </svg>
                      </button>
                    </div>
                </li>`).join("")}const g=async t=>{const e=await S(t);if(!e.results.length){v(n.productList);return}u(s.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages}),n.productList.innerHTML=b(e.results)},k=t=>{t.preventDefault(),t.target.closest(".js-cart")&&L(t),t.target.classList.contains("js-info")&&openModal(t)};n.productList.addEventListener("click",k);let m=[];const R=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],T=async()=>{m=[...await P(),"Show_all"];const e=w(m);n.categoryField.insertAdjacentHTML("beforeend",e),n.abcField.innerHTML=Y(R)},O=t=>{const e=t.target.value,r=l(s.LOCAL_QUERY_KEY);e==="Show_all"?r.category=null:r.category=e,u(s.LOCAL_QUERY_KEY,r);const c=l(s.LOCAL_QUERY_KEY);g(c)},U=t=>{t.preventDefault();const e=n.searchField.value,r=l(s.LOCAL_QUERY_KEY);e?r.keyword=e:r.keyword=null,u(s.LOCAL_QUERY_KEY,r);const c=l(s.LOCAL_QUERY_KEY);g(c)},q=async t=>{const e=t.target.value,r=l(s.LOCAL_QUERY_KEY);r.sort=e,u(s.LOCAL_QUERY_KEY,r);const c=l(s.LOCAL_QUERY_KEY),o=c.sort,a=F(o),i=await Q(c,a);K(i)},F=t=>{let e={};switch(t){case"alphabetical":e="&byABC=true";break;case"reverse-alphabetical":e="&byABC=false";break;case"cheap":e="&byPrice=true";break;case"expensive":e="&byPrice=false";break;case"popular":e="&byPopularity=false";break;case"not-popular":e="&byPopularity=true";break}return e};async function Q(t,e){try{return(await d({url:`${s.BASE_URL}/products?${e}`,method:"GET",header:{"Content-Type":"application/json"},params:t})).data}catch(r){return r}}const K=async t=>{if(!t.results.length){v(n.productList);return}u(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages}),n.productList.innerHTML=b(t.results)},M=t=>{if(t.target.value===""){const e=l(s.LOCAL_QUERY_KEY);e.keyword=null,u(s.LOCAL_QUERY_KEY,e);const r=l(s.LOCAL_QUERY_KEY);g(r)}};n.form.addEventListener("submit",U);n.categoryField.addEventListener("change",O);n.abcField.addEventListener("change",q);n.searchField.addEventListener("input",M);const h=document.querySelector(".popular_products_list");console.dir(h);h.addEventListener("click",B);async function G(){const t=await A();if(!t.length){notFoundMarkup(n.popularProductList);return}u(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages});const e=j(t);h.insertAdjacentHTML("beforeend",e)}function B(t){t.preventDefault(),t.target.closest(".js-cart")&&L(t),t.target.classList.contains("js-info")&&openModal(t)}const N=document.querySelector(".discount-product-list");async function D(){const t=await C();console.log(t);const e=I(t);N.innerHTML=e}function I(t){return t.map(({img:e,name:r,price:c,_id:o,is10PercentOff:a})=>{if(a)return`
        <li class="discount-product-element">
        <div class="discount-product-img-wrapper">
        <img class="discount-product-img" src="${e}" alt="${r}">
        </div>
        
        <div class="discount-product-descr">
         <div class="discount-product-name-wrapper">
           <h3 class="discount-product-name">${r}</h3>
          </div>
         <div class="discount-product-price-wrapper">
          <p class="discount-product-price">$${c}</p>
          <button class="discount-product-btn" type="button">add</button>
          </div>
        </div>
        
        </li>`}).join("")}const _=document.querySelector(".discount-product-list");console.log(_);_.addEventListener("click",void 0);u(s.LOCAL_QUERY_KEY,s.INIT_QUERY);const x=l(s.LOCAL_QUERY_KEY)??[];T();g(x);G();D();
//# sourceMappingURL=commonHelpers2.js.map
