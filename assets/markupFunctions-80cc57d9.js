(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const d=(e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(r){console.error("Set state error: ",r.message)}},p=e=>{try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},u=e=>{try{localStorage.removeItem(e)}catch(t){console.error("Get state error: ",t.message)}},g={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",INIT_QUERY:{keyword:null,category:null,page:1,limit:6,sort:null},PAGES:"pages"},i="/foodShop/assets/sprite-10b57387.svg",h=e=>e.length?e.map(({_id:t,name:r,img:c,category:s,price:a,size:o,is10PercentOff:l,popularity:n})=>l?`<li class="product-card" data-product-id="${t}">
            //             <img class="product-card-img" src="${c}" alt="${r}">
            //             <div class="product-container">
            //               <div class="product-title">
            //                 <h2 class="product-name">${r}</h2>
            //                 <button type="button" class="btn-del-product js-close" data-product-id="${t}">
            //                   <svg class="delete-icon" width="18" height="18">
            //                     <use href="${i}#close"></use>
            //                   </svg>
            //                 </button>
            //               </div>
            //               <div class="product-category">
            //                 <p class="product-info"><span class="info-style">Category:</span> ${s.replace("_"," ")} <span class="info-style info-space">Size:</span> ${o}</p>
            //               </div>
            //               <div class="counter">
            //                 <p class="product-price product-name m">$${a}</p>
            //                 <div class="btn-counter">
            //                   <button class="decrement" type="button" data-action="decrement" data-product-id="${t}">
            //                     <svg class="icon-minus" width="14" height="14">
            //                       <use href="${i}#minus"></use>
            //                     </svg>
            //                   </button>
            //                   <span class="counter-value">${quantity}</span>
            //                   <button class="increment" type="button" data-action="increment" data-product-id="${t}">
            //                     <svg class="icon-plus" width="14" height="14">
            //                       <use href="${i}#plus"></use>
            //                     </svg>
            //                   </button>
            //                 </div>
            //               </div>
            //             </div>
            //           </li>
            //         `:`<li class="js-card product-card" data-id=${t}>
                    <img class="product-card-img" src="${c}" alt="${r}">
                <div class="product-container">
                    <div class="product-title">
                        <h2 class="product-name">${r}</h2>
                        <button type="button" id="test" class="btn-del-product js-close" data-product-id="${t}">
                            <svg class="delete-icon js-close" width="18" height="18">
                                <use href="${i}#close"></use>
                            </svg>
                        </button>
                </div>
                <div class="product-category">
                    <p class="product-info"><span class="info-style">Category:</span> ${s.replace("_"," ")} <span class="info-style info-space">Size:</span> ${o}</p>
                </div>
                    <p class="product-price product-name m">$${a}</p>
            </li>`).join(""):(deleteContainer.classList.add("visually-hidden"),orderContainer.classList.add("visually-hidden"),`
        <img class="basket-img" src="${empty_basket}" alt="Yellow empty basket">
        <div class="basket-text">
            <p class="empty-text"> Your basket is <span>empty...</span></p>
            <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
        </div>
        `),v=e=>{if(e.length)return e.map(({_id:t,name:r,img:c,category:s,price:a,size:o,is10PercentOff:l,popularity:n})=>l?`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${r}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${r}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${s.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${o}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${n}</span></li>
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
                    <span>${o}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${n}</span>
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
        </li>`).join("")},f=e=>{e.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span>filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `},m=e=>e.length?e.map(t=>`<option value="${t}">${t.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',$=e=>e.map(t=>`<option value="${t.value}">${t.label}</option>`).join("");function y(e){if(!e.length){console.log("Sorry not data");return}return e.map(({_id:t,name:r,img:c,category:s,size:a,popularity:o})=>`<li class="popular-card js-card" data-id=${t}>
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
                          <li class="info-style">Size: <span>${a}</span></li>
                          <li class="info-style">Popularity: <span>${o}</span></li>
                      </ul>
                      </div>
                    </div>

                    <div class="card-bottom">
                      
                      <button class="card-btn js-cart" type="button">
                          <svg class="icon" width="18" height="18">
                              <use href="${i}#cart"></use>
                          </svg>
                      </button>
                    </div>
                </li>`).join("")}export{i as a,v as b,g as c,m as d,$ as e,y as f,p as l,f as n,h as p,u as r,d as s};
//# sourceMappingURL=markupFunctions-80cc57d9.js.map
