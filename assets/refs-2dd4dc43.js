(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const d=(s,t)=>{try{const a=JSON.stringify(t);localStorage.setItem(s,a)}catch(a){console.error("Set state error: ",a.message)}},u=s=>{try{const t=localStorage.getItem(s);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},p=s=>{try{localStorage.removeItem(s)}catch(t){console.error("Get state error: ",t.message)}},m={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",INIT_QUERY:{keyword:null,category:null,page:1,limit:6,sort:null},PAGES:"pages"},l="/foodShop/assets/sprite-10b57387.svg",g=s=>s.length?s.map(({_id:t,name:a,img:c,category:e,price:r,size:o,is10PercentOff:i,popularity:n})=>i?`<li class="product-card" data-product-id="${t}">
            //             <img class="product-card-img" src="${c}" alt="${a}">
            //             <div class="product-container">
            //               <div class="product-title">
            //                 <h2 class="product-name">${a}</h2>
            //                 <button type="button" class="btn-del-product js-close" data-product-id="${t}">
            //                   <svg class="delete-icon" width="18" height="18">
            //                     <use href="${l}#close"></use>
            //                   </svg>
            //                 </button>
            //               </div>
            //               <div class="product-category">
            //                 <p class="product-info"><span class="info-style">Category:</span> ${e.replace("_"," ")} <span class="info-style info-space">Size:</span> ${o}</p>
            //               </div>
            //               <div class="counter">
            //                 <p class="product-price product-name m">$${r}</p>
            //                 <div class="btn-counter">
            //                   <button class="decrement" type="button" data-action="decrement" data-product-id="${t}">
            //                     <svg class="icon-minus" width="14" height="14">
            //                       <use href="${l}#minus"></use>
            //                     </svg>
            //                   </button>
            //                   <span class="counter-value">${quantity}</span>
            //                   <button class="increment" type="button" data-action="increment" data-product-id="${t}">
            //                     <svg class="icon-plus" width="14" height="14">
            //                       <use href="${l}#plus"></use>
            //                     </svg>
            //                   </button>
            //                 </div>
            //               </div>
            //             </div>
            //           </li>
            //         `:`<li class="js-card product-card" data-id=${t}>
                    <img class="product-card-img" src="${c}" alt="${a}">
                <div class="product-container">
                    <div class="product-title">
                        <h2 class="product-name">${a}</h2>
                        <button type="button" id="test" class="btn-del-product js-close" data-product-id="${t}">
                            <svg class="delete-icon js-close" width="18" height="18">
                                <use href="${l}#close"></use>
                            </svg>
                        </button>
                </div>
                <div class="product-category">
                    <p class="product-info"><span class="info-style">Category:</span> ${e.replace("_"," ")} <span class="info-style info-space">Size:</span> ${o}</p>
                </div>
                    <p class="product-price product-name m">$${r}</p>
            </li>`).join(""):(deleteContainer.classList.add("visually-hidden"),orderContainer.classList.add("visually-hidden"),`
        <img class="basket-img" src="${empty_basket}" alt="Yellow empty basket">
        <div class="basket-text">
            <p class="empty-text"> Your basket is <span>empty...</span></p>
            <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
        </div>
        `),h=s=>{if(s.length)return s.map(({_id:t,name:a,img:c,category:e,price:r,size:o,is10PercentOff:i,popularity:n})=>i?`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${a}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${a}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${e.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${o}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${n}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${r}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${l}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${l}#discount"></use>
              </svg>
              
            </div>
        </li>`:`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${a}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${a}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${e.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${o}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${n}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${r}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${l}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`).join("")},f=s=>{s.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span>filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `},v=s=>s.length?s.map(t=>`<option value="${t}">${t.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',y=s=>s.map(t=>`<option value="${t.value}">${t.label}</option>`).join("");function $(s){if(!s.length){console.log("Sorry not data");return}return s.map(({_id:t,name:a,img:c,category:e,size:r,popularity:o})=>`<li class="popular-card js-card" data-id=${t}>
                    <div class="popular-box">
                      <div class="popular-card-img-wrap">
                          <img src="${c}" alt="${a}" width="56" height="56" loading="lazy"/>
                      </div>
                      <div class="card-info-box">
                      
                        <h3 class="popular-name">${a}</h3>
                      
                      <ul class="popular-info-list">
                          <li class="info-style">Category:
                          <span>${e.replace("_"," ")}</span></li>
                          <div class="popular-info-wraper">
                          <li class="info-style">Size: <span>${r}</span></li>
                          <li class="info-style">Popularity: <span>${o}</span></li>
                      </ul>
                      </div>
                    </div>

                    <div class="card-bottom">
                      
                      <button class="card-btn js-cart" type="button">
                          <svg class="icon" width="18" height="18">
                              <use href="${l}#cart"></use>
                          </svg>
                      </button>
                    </div>
                </li>`).join("")}const b={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products"),totalAmountDisplay:document.querySelector(".total-amount"),cartList:document.querySelector(".cart-product-list"),deleteAllButton:document.getElementById("deleteAllButton"),productsCount:document.getElementById("product-count")};export{p as a,l as b,m as c,h as d,v as e,y as f,$ as g,u as l,f as n,g as p,b as r,d as s};
//# sourceMappingURL=refs-2dd4dc43.js.map
