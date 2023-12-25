(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const n=(s,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(s,r)}catch(r){console.error("Set state error: ",r.message)}},u=s=>{try{const t=localStorage.getItem(s);return t===null?void 0:JSON.parse(t)}catch(t){console.error("Get state error: ",t.message)}},p=s=>{try{localStorage.removeItem(s)}catch(t){console.error("Get state error: ",t.message)}},m={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",INIT_QUERY:{keyword:null,category:null,page:1,limit:6,sort:null},PAGES:"pages"},i="/foodShop/assets/sprite-10b57387.svg",g=s=>s.length?s.map(({_id:t,name:r,img:c,category:e,price:o,size:a,is10PercentOff:l,popularity:d})=>l?`<li class="js-card product-card" data-id=${t}>
        
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
                            <p class="product-info"><span class="info-style">Category:</span> ${e.replace("_"," ")} <span class="info-style info-space">Size:</span> ${a}</p>
                        </div>
                        <div class="discount">
                        <p class="product-price product-name m">$${o}</p>
                        <svg class="" width="35" height="35">
                        <use href="${i}#discount"></use>
                        </svg>
                        </div>
                        
                        
                </li>
                `:`<li class="js-card product-card" data-id=${t}>

                
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
                            <p class="product-info"><span class="info-style">Category:</span> ${e.replace("_"," ")} <span class="info-style info-space">Size:</span> ${a}</p>
                        </div>

                        <p class="product-price product-name m">$${o}</p>
                </li>`):(deleteContainer.classList.add("visually-hidden"),orderContainer.classList.add("visually-hidden"),`
        <img class="basket-img" src="${empty_basket}" alt="Yellow empty basket">
        <div class="basket-text">
            <p class="empty-text"> Your basket is <span>empty...</span></p>
            <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
        </div>
        `),h=s=>{if(s.length)return s.map(({_id:t,name:r,img:c,category:e,price:o,size:a,is10PercentOff:l,popularity:d})=>l?`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${r}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${r}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${e.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${a}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${d}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${o}</p>
  
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
                    <span>${e.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${a}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${d}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${o}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${i}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`).join("")},v=s=>{s.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span>filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `},f=s=>s.length?s.map(t=>`<option value="${t}">${t.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',y=s=>s.map(t=>`<option value="${t.value}">${t.label}</option>`).join(""),$=s=>{if(!s.length){console.log("Sorry not data");return}return s.map(({_id:t,name:r,img:c,category:e,size:o,popularity:a})=>`<li class="popular-card popular-item js-card" data-id="${t}">
  <div class="popular-box">
    <div class="popular-card-img-wrap">
      <img src="${c}" alt="${r}" width="56" height="56" loading="lazy" />
    </div>
    <div class="card-info-box">
      <h3 class="popular-name">${r}</h3>

      <ul class="popular-info-list">
        <li class="info-style">
          Category: <span>${e.replace("_"," ")}</span>
        </li>
        <div class="popular-info-wraper">
          <li class="info-style">Size: <span>${o}</span></li>
          <li class="info-style">Popularity: <span>${a}</span></li>
        </div>
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
</li>`).join("")},b=s=>s.map(({img:t,name:r,price:c,_id:e,is10PercentOff:o})=>{if(o)return`
        <li class="discount-product-element">

          <svg class="discount-label" width="60" height="60">
          <use href="${i}#discount"></use>
          </svg>

          <div class="discount-product-img-wrapper">
           <img class="discount-product-img" src="${t}" alt="${r}">
          </div>
        
        <div class="discount-product-descr">

         <div class="discount-product-name-wrapper">
           <h3 class="discount-product-name">${r}</h3>
          </div>

         <div class="discount-product-price-wrapper">
          <p class="discount-product-price">$${c}</p>
          <button class="discount-product-btn" type="button">
            <svg class="discount-product-icon" width="18" height="18">
              <use href=" ${i}#cart"></use>
            </svg>
         
          </button>
        </div>

        </div>
        
        </li>`}).join(""),S={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products"),totalAmountDisplay:document.querySelector(".total-amount"),cartList:document.querySelector(".cart-product-list"),deleteAllButton:document.getElementById("deleteAllButton"),productsCount:document.getElementById("product-count"),dicsProd:document.querySelector(".discount-product-list"),discProdList:document.querySelector(".discount-product-list"),popularProductList:document.querySelector(".popular_products_list"),productsCountHeader:document.querySelector("#product-count-header")};export{p as a,i as b,m as c,h as d,f as e,y as f,$ as g,b as h,u as l,v as n,g as p,S as r,n as s};
//# sourceMappingURL=refs-102b93b5.js.map
