(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const c of e)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const c={};return e.integrity&&(c.integrity=e.integrity),e.referrerpolicy&&(c.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?c.credentials="include":e.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(e){if(e.ep)return;e.ep=!0;const c=t(e);fetch(e.href,c)}})();const n=(r,s)=>{try{const t=JSON.stringify(s);localStorage.setItem(r,t)}catch(t){console.error("Set state error: ",t.message)}},p=r=>{try{const s=localStorage.getItem(r);return s===null?void 0:JSON.parse(s)}catch(s){console.error("Get state error: ",s.message)}},h=r=>{try{localStorage.removeItem(r)}catch(s){console.error("Get state error: ",s.message)}},v={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",INIT_QUERY:{keyword:null,category:null,page:1,limit:6,sort:null},PAGES:"pages",NUMBER_OF_DISCOUNT:2},l="/foodShop/assets/sprite-10b57387.svg",g=r=>r.length?r.map(({_id:s,name:t,img:a,category:e,price:c,size:o,is10PercentOff:i,popularity:d})=>i?`<li class="js-card product-card" data-id=${s}>
        
                    <img class="product-card-img" src="${a}" alt="${t}">
                    
                                        
                        <div class="product-container"> 
                            <div class="product-title">
                                <h2 class="product-name">${t}</h2>
                                
                                <button type="button" id="test" class="btn-del-product js-close" data-product-id="${s}">
                                    <svg class="delete-icon js-close" width="18" height="18">
                                        <use href="${l}#close"></use>
                                    </svg>
                                </button>
                        </div>

                        <div class="product-category">
                            <p class="product-info"><span class="info-style">Category:</span> ${e.replace("_"," ")} <span class="info-style info-space">Size:</span> ${o}</p>
                        </div>
                        <div class="discount">
                        <p class="product-price product-name m">$${c}</p>
                        <svg class="" width="35" height="35">
                        <use href="${l}#discount"></use>
                        </svg>
                        </div>
                        
                        
                </li>
                `:`<li class="js-card product-card" data-id=${s}>

                
                    <img class="product-card-img" src="${a}" alt="${t}">

                        <div class="product-container"> 
                            <div class="product-title">
                                <h2 class="product-name">${t}</h2>
                                <button type="button" id="test" class="btn-del-product js-close" data-product-id="${s}">
                                    <svg class="delete-icon js-close" width="18" height="18">
                                        <use href="${l}#close"></use>
                                    </svg>
                                </button>
                        </div>

                        <div class="product-category">
                            <p class="product-info"><span class="info-style">Category:</span> ${e.replace("_"," ")} <span class="info-style info-space">Size:</span> ${o}</p>
                        </div>

                        <p class="product-price product-name m">$${c}</p>
                </li>`):(deleteContainer.classList.add("visually-hidden"),orderContainer.classList.add("visually-hidden"),`
        <img class="basket-img" src="${empty_basket}" alt="Yellow empty basket">
        <div class="basket-text">
            <p class="empty-text"> Your basket is <span>empty...</span></p>
            <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
        </div>
        `),m=r=>{if(r.length)return r.map(({_id:s,name:t,img:a,category:e,price:c,size:o,is10PercentOff:i,popularity:d,isChecked:u})=>i?u?`<li class="card js-card" data-id=${s}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${a}" alt="${t}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${t}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${e.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${o}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${d}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${c}</p>
  
              <button class="card-btn" type="button">
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${l}#check"></use>
                  </svg>
              </button>

              <svg class="discount-icon" width="60" height="60">
                <use href="${l}#discount"></use>
              </svg>
              
            </div>
        </li>`:`<li class="card js-card" data-id=${s}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${a}" alt="${t}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${t}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${e.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${o}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${d}</span></li>
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
        </li>`:u?`<li class="card js-card" data-id=${s}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${a}" alt="${t}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${t}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${e.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${o}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${d}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${c}</p>
  
              <button class="card-btn" type="button">
  
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${l}#check"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`:`<li class="card js-card" data-id=${s}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${a}" alt="${t}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${t}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${e.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${o}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${d}</span>
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
                            `},f=r=>r.length?r.map(s=>`<option value="${s}">${s.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',y=r=>r.map(s=>`<option value="${s.value}">${s.label}</option>`).join(""),b=r=>{if(!r.length){console.log("Sorry not data");return}return r.map(({_id:s,name:t,img:a,category:e,size:c,popularity:o,isChecked:i})=>i?`<li class="popular-card js-card" data-id=${s}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${a}" alt="${t}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${t}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${e.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${c}</span></li>
                <li class="popular-info-style">Popularity: <span>${o}</span></li>
                </div>
            </ul>
                                </div>
          </div>

        <div class="popular-card-bottom">
          
          <button class="popular-card-btn" type="button">
            <svg class="popular-icon-check" width="18" height="18">
              <use href="${l}#check"></use>
            </svg>
          </button>
          
        </div>
        </div>
    </li>`:`<li class="popular-card js-card" data-id=${s}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${a}" alt="${t}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${t}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${e.replace("_"," ")}</span></li>
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
    </li>`).join("")},w=r=>r.map(({img:s,name:t,price:a,_id:e,is10PercentOff:c,isChecked:o})=>c?o?`
          <li class="discount-product-element js-card" data-id=${e}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${l}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${s}" alt="${t}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${t}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${a}</p>
  
            <button class="card-btn" type="button">
            <svg class="card-btn-icon-check" width="18" height="18">
                <use href="${l}#check"></use>
            </svg>

        </button>
          </div>
  
          </div>
          
          </li>`:`
          <li class="discount-product-element js-card" data-id=${e}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${l}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${s}" alt="${t}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${t}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${a}</p>
  
            <button class="discount-product-btn js-cart" type="button">
  
              <svg class="discount-product-icon" width="18" height="18">
                <use href=" ${l}#cart"></use>
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
      `).join(""),S={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products"),totalAmountDisplay:document.querySelector(".total-amount"),cartList:document.querySelector(".cart-product-list"),deleteAllButton:document.getElementById("deleteAllButton"),productsCount:document.getElementById("product-count"),dicsProd:document.querySelector(".discount-product-list"),discProdList:document.querySelector(".discount-product-list"),popularProductList:document.querySelector(".popular_products_list"),productsCountHeader:document.querySelector("#product-count-header")};export{h as a,l as b,v as c,m as d,f as e,y as f,b as g,w as h,p as l,$ as n,g as p,S as r,n as s};
//# sourceMappingURL=refs-98a47283.js.map
