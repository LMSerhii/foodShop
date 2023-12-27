import{a as n}from"./vendor-eaa4441d.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const g=(s,t)=>{try{const e=JSON.stringify(t);localStorage.setItem(s,e)}catch(e){console.error("Set state error: ",e.message)}},v=s=>{try{const t=localStorage.getItem(s);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},m=s=>{try{localStorage.removeItem(s)}catch(t){console.error("Get state error: ",t.message)}},d={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",LOCAL_SORT:"sort",INIT_QUERY:{keyword:null,category:null,page:1,limit:6},PAGES:"pages",ORDER:"order",NUMBER_OF_DISCOUNT:2},i="/foodShop/assets/sprite-10b57387.svg",y=s=>{if(s.length)return s.map(({_id:t,name:e,img:o,category:r,price:a,size:c,is10PercentOff:l,popularity:u,isChecked:p})=>l?p?`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${o}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${r.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${c}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${u}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${a}</p>
  
              <button class="card-btn" type="button">
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${i}#check"></use>
                  </svg>
              </button>

              <svg class="discount-icon" width="60" height="60">
                <use href="${i}#discount"></use>
              </svg>
              
            </div>
        </li>`:`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${o}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${r.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${c}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${u}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${a}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${i}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${i}#discount"></use>
              </svg>
              
            </div>
        </li>`:p?`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${o}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${r.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${c}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${u}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${a}</p>
  
              <button class="card-btn" type="button">
  
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${i}#check"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`:`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${o}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${r.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${c}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${u}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${a}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${i}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`).join("")},$=s=>{s.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span>filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `},f=s=>s.length?s.map(t=>`<option value="${t}">${t.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',b=s=>s.map(t=>`<option value="${t.value}">${t.label}</option>`).join(""),w=s=>{if(!s.length){console.log("Sorry not data");return}return s.map(({_id:t,name:e,img:o,category:r,size:a,popularity:c,isChecked:l})=>l?`<li class="popular-card js-card" data-id=${t}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${o}" alt="${e}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${e}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${r.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${a}</span></li>
                <li class="popular-info-style">Popularity: <span>${c}</span></li>
                </div>
            </ul>
                                </div>
          </div>

        <div class="popular-card-bottom">
          
          <button class="popular-card-btn" type="button">
            <svg class="popular-icon-check" width="18" height="18">
              <use href="${i}#check"></use>
            </svg>
          </button>
          
        </div>
        </div>
    </li>`:`<li class="popular-card js-card" data-id=${t}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${o}" alt="${e}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${e}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${r.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${a}</span></li>
                <li class="popular-info-style">Popularity: <span>${c}</span></li>
                </div>
            </ul>
                                </div>
          </div>

        <div class="popular-card-bottom">
          
          <button class="popular-card-btn js-cart" type="button">
              <svg class="popular-icon" width="18" height="18">
                  <use href="${i}#cart"></use>
              </svg>
          </button>
        </div>
        </div>
    </li>`).join("")},S=s=>s.map(({img:t,name:e,price:o,_id:r,is10PercentOff:a,isChecked:c})=>a?c?`
          <li class="discount-product-element js-card" data-id=${r}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${i}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${t}" alt="${e}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${e}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${o}</p>
  
            <button class="card-btn" type="button">
            <svg class="card-btn-icon-check" width="18" height="18">
                <use href="${i}#check"></use>
            </svg>

        </button>
          </div>
  
          </div>
          
          </li>`:`
          <li class="discount-product-element js-card" data-id=${r}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${i}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${t}" alt="${e}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${e}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${o}</p>
  
            <button class="discount-product-btn js-cart" type="button">
  
              <svg class="discount-product-icon" width="18" height="18">
                <use href=" ${i}#cart"></use>
              </svg>
           
            </button>
          </div>
  
          </div>
          
          </li>`:`<div class="notFound_box">
                  <p class="notFound_title">
                      Nothing was found for the selected <span>filters...</span>
                  </p>
                  <p class="notFound_text">
                    Try adjusting your search parameters or browse our range by other criteria to
                    find the perfect product for you.
                  </p>
                </div>
      `).join(""),j=s=>s.length?s.map(({_id:t,name:e,img:o,category:r,price:a,size:c,is10PercentOff:l,popularity:u})=>l?`<li class="js-card product-card" data-id=${t}>
                  <img class="product-card-img" src="${o}" alt="${e}">
                      <div class="product-container">
                          <div class="product-title">
                              <h2 class="product-name">${e}</h2>
                              <button type="button" id="test" class="btn-del-product js-close" data-product-id="${t}">
                                  <svg class="delete-icon js-close" width="18" height="18">
                                      <use href="${i}#close"></use>
                                  </svg>
                              </button>
                      </div>
                      <div class="product-category">
                          <p class="product-info"><span class="info-style">Category:</span> ${r.replace("_"," ")} <span class="info-style info-space">Size:</span> ${c}</p>
                      </div>
                      <p class="product-price product-name m">$${a}</p>
                      <div id="counter">
                          <button type="button" data-action="decrement">-1</button>
                              <span id="value">0</span>
                          <button type="button" data-action="increment">+1</button>
                      </div>
              </li>
              `:`<li class="js-card product-card" data-id=${t}>
                  <img class="product-card-img" src="${o}" alt="${e}">
                      <div class="product-container">
                          <div class="product-title">
                              <h2 class="product-name">${e}</h2>
                              <button type="button" id="test" class="btn-del-product js-close" data-product-id="${t}">
                                  <svg class="delete-icon js-close" width="18" height="18">
                                      <use href="${i}#close"></use>
                                  </svg>
                              </button>
                      </div>
                      <div class="product-category">
                          <p class="product-info"><span class="info-style">Category:</span> ${r.replace("_"," ")} <span class="info-style info-space">Size:</span> ${c}</p>
                      </div>
                      <div class="cart-product-counter ">
                          <p class="product-price product-name m">$${a}</p>
                          <div class="counter-pr" id="counter">
                              <div class="btn-counter">
                                  <button class="cart-counter-txt" type="button" data-action="decrement">
                                      <svg width="14" height="14">
                                          <use href="${i}#minus"></use>
                                      </svg>
                                  </button>
                                      <span class="cart-counter-txt" id="value">0</span>
                                  <button class="cart-counter-txt" type="button" data-action="increment">
                                      <svg  width="14" height="14">
                                          <use href="${i}#plus"></use>
                                      </svg>
                                  </button>
                              </div>
                          </div>
                      </div>
              </li>`).join(""):(deleteContainer.classList.add("visually-hidden"),orderContainer.classList.add("visually-hidden"),`
  <img class="basket-img" src="${empty_basket}" alt="Yellow empty basket">
  <div class="basket-text">
      <p class="empty-text"> Your basket is <span>empty...</span></p>
      <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
  </div>
  `);async function _(s){try{return(await n({url:`${d.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:s})).data}catch(t){return t}}async function C(s){try{return(await n({url:`${d.BASE_URL}/products/${s}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function L(s){try{let t=null;return s&&(t={limit:s}),(await n({url:`${d.BASE_URL}/products/popular`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(t){return t}}async function E(){try{return(await n({url:`${d.BASE_URL}/products/discount`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(s){return s}}async function q(){try{return(await n({url:`${d.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(s){return s}}async function k(s,t){try{return await n({url:"https://food-boutique.b.goit.study/api/orders",method:"POST",headers:{"Content-Type":"application/json"},data:{email:s,products:t}})}catch(e){return e}}async function T(s){try{return(await n({url:`${d.BASE_URL}/subscription`,method:"POST",headers:{"Content-Type":"application/json"},data:{email:s}})).status}catch(t){return t.response.status}}const P={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products"),totalAmountDisplay:document.querySelector(".total-amount"),cartList:document.querySelector(".cart-product-list"),deleteAllButton:document.getElementById("deleteAllButton"),productsCount:document.getElementById("product-count"),dicsProd:document.querySelector(".discount-product-list"),discProdList:document.querySelector(".discount-product-list"),paginationContainer:document.getElementById("pagination-container"),popularProductList:document.querySelector(".popular_products_list"),productsCountHeader:document.querySelector("#product-count-header")};export{k as a,m as b,d as c,i as d,_ as e,y as f,C as g,q as h,f as i,b as j,L as k,v as l,w as m,$ as n,E as o,j as p,S as q,P as r,g as s,T as t};
//# sourceMappingURL=refs-f0ccfdd5.js.map
