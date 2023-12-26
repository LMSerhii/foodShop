(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=e(s);fetch(s.href,c)}})();const n=(r,t)=>{try{const e=JSON.stringify(t);localStorage.setItem(r,e)}catch(e){console.error("Set state error: ",e.message)}},p=r=>{try{const t=localStorage.getItem(r);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},h=r=>{try{localStorage.removeItem(r)}catch(t){console.error("Get state error: ",t.message)}},g={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",INIT_QUERY:{keyword:null,category:null,page:1,limit:6,sort:null},PAGES:"pages"},l="/foodShop/assets/sprite-10b57387.svg",m=r=>r.length?r.map(({_id:t,name:e,img:a,category:s,price:c,size:o,is10PercentOff:d,popularity:i})=>d?`<li class="js-card product-card" data-id=${t}>
        
                    <img class="product-card-img" src="${a}" alt="${e}">
                    
                                        
                        <div class="product-container"> 
                            <div class="product-title">
                                <h2 class="product-name">${e}</h2>
                                
                                <button type="button" id="test" class="btn-del-product js-close" data-product-id="${t}">
                                    <svg class="delete-icon js-close" width="18" height="18">
                                        <use href="${l}#close"></use>
                                    </svg>
                                </button>
                        </div>

                        <div class="product-category">
                            <p class="product-info"><span class="info-style">Category:</span> ${s.replace("_"," ")} <span class="info-style info-space">Size:</span> ${o}</p>
                        </div>
                        <div class="discount">
                        <p class="product-price product-name m">$${c}</p>
                        <svg class="" width="35" height="35">
                        <use href="${l}#discount"></use>
                        </svg>
                        </div>
                        
                        
                </li>
                `:`<li class="js-card product-card" data-id=${t}>

                
                    <img class="product-card-img" src="${a}" alt="${e}">

                        <div class="product-container"> 
                            <div class="product-title">
                                <h2 class="product-name">${e}</h2>
                                <button type="button" id="test" class="btn-del-product js-close" data-product-id="${t}">
                                    <svg class="delete-icon js-close" width="18" height="18">
                                        <use href="${l}#close"></use>
                                    </svg>
                                </button>
                        </div>

                        <div class="product-category">
                            <p class="product-info"><span class="info-style">Category:</span> ${s.replace("_"," ")} <span class="info-style info-space">Size:</span> ${o}</p>
                        </div>

                        <p class="product-price product-name m">$${c}</p>
                </li>`):(deleteContainer.classList.add("visually-hidden"),orderContainer.classList.add("visually-hidden"),`
        <img class="basket-img" src="${empty_basket}" alt="Yellow empty basket">
        <div class="basket-text">
            <p class="empty-text"> Your basket is <span>empty...</span></p>
            <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
        </div>
        `),v=r=>{if(r.length)return r.map(({_id:t,name:e,img:a,category:s,price:c,size:o,is10PercentOff:d,popularity:i,isChecked:u})=>d?u?`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${a}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${s.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${o}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${i}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${c}</p>
  
              <button class="btn-check" type="button">
                  <svg class="icon-check" width="18" height="18">
                      <use href="${l}#check"></use>
                  </svg>
              </button>

              <svg class="discount-icon" width="60" height="60">
                <use href="${l}#discount"></use>
              </svg>
              
            </div>
        </li>`:`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${a}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${s.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${o}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${i}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${c}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${l}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${l}#discount"></use>
              </svg>
              
            </div>
        </li>`:u?`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${a}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${s.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${o}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${i}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${c}</p>
  
              <button class="btn-check" type="button">
  
                  <svg class="icon-check" width="18" height="18">
                      <use href="${l}#check"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`:`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${a}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${s.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${o}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${i}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${c}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${l}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`).join("")},$=r=>{r.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span>filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `},f=r=>r.length?r.map(t=>`<option value="${t}">${t.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',y=r=>r.map(t=>`<option value="${t.value}">${t.label}</option>`).join(""),b=r=>{if(!r.length){console.log("Sorry not data");return}return r.map(({_id:t,name:e,img:a,category:s,size:c,popularity:o})=>`<li class="popular-card js-card" data-id=${t}>
                    <div class="popular-box">
                      <div class="popular-wraper">
                        <div class="popular-card-img-wrap">
                            <img src="${a}" alt="${e}" width="56" height="56" loading="lazy"/>
                        </div>
                        <div class="popular-card-info-box">
                        
                          <h3 class="popular-name">${e}</h3>
                        
                        <ul class="popular-info-list">
                            <li class="popular-info-style">Category:
                            <span>${s.replace("_"," ")}</span></li>
                            <div class="popular-info-wraper">
                            <li class="popular-info-style">Size: <span>${c}</span></li>
                            <li class="popular-info-style">Popularity: <span>${o}</span></li>
                            </div>
                        </ul>
                                            </div>
                      </div>

                    <div class="popular-card-bottom">
                      
                      <button class="popular-card-btn js-cart" type="button">
                          <svg class="popular-icon" width="18" height="18">
                              <use href="${l}#cart"></use>
                          </svg>
                      </button>
                    </div>
                    </div>
                </li>`).join("")},S=r=>r.map(({img:t,name:e,price:a,_id:s,is10PercentOff:c})=>{if(c)return`
        <li class="discount-product-element">

          <svg class="discount-label" width="60" height="60">
          <use href="${l}#discount"></use>
          </svg>

          <div class="discount-product-img-wrapper">
           <img class="discount-product-img" src="${t}" alt="${e}">
          </div>
        
        <div class="discount-product-descr">

         <div class="discount-product-name-wrapper">
           <h3 class="discount-product-name">${e}</h3>
          </div>

         <div class="discount-product-price-wrapper">
          <p class="discount-product-price">$${a}</p>
          <button class="discount-product-btn" type="button">
            <svg class="discount-product-icon" width="18" height="18">
              <use href=" ${l}#cart"></use>
            </svg>
         
          </button>
        </div>

        </div>
        
        </li>`}).join(""),w={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products"),totalAmountDisplay:document.querySelector(".total-amount"),cartList:document.querySelector(".cart-product-list"),deleteAllButton:document.getElementById("deleteAllButton"),productsCount:document.getElementById("product-count"),dicsProd:document.querySelector(".discount-product-list"),discProdList:document.querySelector(".discount-product-list"),popularProductList:document.querySelector(".popular_products_list"),productsCountHeader:document.querySelector("#product-count-header")};export{h as a,l as b,g as c,v as d,f as e,y as f,b as g,S as h,p as l,$ as n,m as p,w as r,n as s};
//# sourceMappingURL=refs-aae2997d.js.map
