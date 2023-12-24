import{a as y,i as E}from"./assets/vendor-2dcf4ad5.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();const s={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",INIT_QUERY:{keyword:null,category:null,page:1,limit:6,sort:null},PAGES:"pages"},g={productList:document.querySelector(".product-list")};async function _(t){try{return(await y({url:`${s.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(e){return e}}async function v(){try{return(await y({url:`${s.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}const u=(t,e)=>{try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){console.error("Set state error: ",r.message)}},n=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},d="/foodShop/assets/sprite-83c9fed8.svg",S=t=>{t.target.closest(".js-card").dataset,t.target.closest(".js-cart").innerHTML=` <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${d}#check"></use>
                    </svg>`,E.success({message:"Successfully added to cart"})},L=t=>{if(t.length)return t.map(({_id:e,name:r,img:c,category:a,price:o,size:i,is10PercentOff:b,popularity:h})=>b?`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${r}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${r}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${a.replace("_"," ")}</span></li>
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
                    <span>${a.replace("_"," ")}</span>
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
                            `},p=async t=>{const e=await _(t);if(!e.results.length){m(g.productList);return}u(s.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages}),g.productList.innerHTML=L(e.results)},C=t=>{t.preventDefault(),t.target.closest(".js-cart")&&S(t),t.target.classList.contains("js-info")&&openModal(t)};g.productList.addEventListener("click",C);let f=[];const l={searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list")},Y=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],A=t=>t.length?t.map(e=>`<option value="${e}">${e.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',$=(t,e)=>{const r=t.map(c=>`<option value="${c.value}">${c.label}</option>`);e.innerHTML=r.join("")};$(Y,l.abcField);const w=async()=>{f=[...await v(),"Show_all"];const e=A(f);l.categoryField.insertAdjacentHTML("beforeend",e)};w();const P=t=>{const e=t.target.value,r=n(s.LOCAL_QUERY_KEY);e==="Show_all"?r.category=null:r.category=e,u(s.LOCAL_QUERY_KEY,r);const c=n(s.LOCAL_QUERY_KEY);p(c)},O=t=>{t.preventDefault();const e=l.searchField.value,r=n(s.LOCAL_QUERY_KEY);e?r.keyword=e:r.keyword=null,u(s.LOCAL_QUERY_KEY,r);const c=n(s.LOCAL_QUERY_KEY);p(c)},R=async t=>{const e=t.target.value,r=n(s.LOCAL_QUERY_KEY);r.sort=e,u(s.LOCAL_QUERY_KEY,r);const c=n(s.LOCAL_QUERY_KEY),a=c.sort,o=Q(a),i=await U(c,o);F(i)},Q=t=>{let e={};switch(t){case"alphabetical":e="&byABC=true";break;case"reverse-alphabetical":e="&byABC=false";break;case"cheap":e="&byPrice=true";break;case"expensive":e="&byPrice=false";break;case"popular":e="&byPopularity=false";break;case"not-popular":e="&byPopularity=true";break}return e};async function U(t,e){try{return(await y({url:`${s.BASE_URL}/products?${e}`,method:"GET",header:{"Content-Type":"application/json"},params:t})).data}catch(r){return r}}const F=async t=>{if(!t.results.length){m(l.productList);return}u(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages}),l.productList.innerHTML=L(t.results)},k=t=>{if(t.target.value===""){const e=n(s.LOCAL_QUERY_KEY);e.keyword=null,u(s.LOCAL_QUERY_KEY,e);const r=n(s.LOCAL_QUERY_KEY);p(r)}};l.form.addEventListener("submit",O);l.categoryField.addEventListener("change",P);l.abcField.addEventListener("change",R);l.searchField.addEventListener("input",k);u(s.LOCAL_QUERY_KEY,s.INIT_QUERY);const T=n(s.LOCAL_QUERY_KEY)??[];p(T);
//# sourceMappingURL=commonHelpers2.js.map
