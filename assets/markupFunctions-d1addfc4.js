import{e as u}from"./yellow_shopping_basket-bc064f0a.js";const c="/foodShop/assets/sprite-10b57387.svg",n={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products"),totalAmountDisplay:document.querySelector(".total-amount"),cartList:document.querySelector(".cart-product-list"),deleteAllButton:document.getElementById("deleteAllButton"),productsCount:document.getElementById("product-count"),dicsProd:document.querySelector(".discount-product-list"),discProdList:document.querySelector(".discount-product-list"),paginationContainer:document.getElementById("pagination-container"),popularProductList:document.querySelector(".popular_products_list"),productsCountHeader:document.querySelector("#product-count-header"),divHome:document.querySelector(".home-sections")},v=a=>{if(a.length)return a.map(({_id:t,name:s,img:r,category:o,price:e,size:i,is10PercentOff:d,popularity:l,isChecked:p})=>d?p?`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${s}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${s}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${o.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${i}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${l}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${e}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${c}#check"></use>
                  </svg>
              </button>

              <svg class="discount-icon" width="60" height="60">
                <use href="${c}#discount"></use>
              </svg>
              
            </div>
        </li>`:`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${s}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${s}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${o.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${i}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${l}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${e}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${c}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${c}#discount"></use>
              </svg>
              
            </div>
        </li>`:p?`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${s}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${s}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${o.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${i}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${l}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${e}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${c}#check"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`:`<li class="card js-card" data-id=${t}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${s}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${s}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${o.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${i}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${l}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${e}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${c}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`).join("")},g=a=>{a.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span class="notFound_title_span">filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `,n.paginationContainer.style.display="none"},$=a=>a.length?a.map(t=>`<option value="${t}">${t.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',m=a=>a.map(t=>`<option value="${t.value}">${t.label}</option>`).join(""),b=a=>{if(!a.length){console.log("Sorry not data");return}return a.map(({_id:t,name:s,img:r,category:o,size:e,popularity:i,isChecked:d})=>d?`<li class="popular-card js-card" data-id=${t}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${r}" alt="${s}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${s}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${o.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${e}</span></li>
                <li class="popular-info-style">Popularity: <span>${i}</span></li>
                </div>
            </ul>
                                </div>
          </div>

        <div class="popular-card-bottom">
          
          <button class="popular-card-btn js-cart" type="button">
            <svg class="popular-icon-check" width="18" height="18">
              <use href="${c}#check"></use>
            </svg>
          </button>
          
        </div>
        </div>
    </li>`:`<li class="popular-card js-card" data-id=${t}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${r}" alt="${s}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${s}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${o.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${e}</span></li>
                <li class="popular-info-style">Popularity: <span>${i}</span></li>
                </div>
            </ul>
                                </div>
          </div>

        <div class="popular-card-bottom">
          
          <button class="popular-card-btn js-cart" type="button">
              <svg class="popular-icon" width="18" height="18">
                  <use href="${c}#cart"></use>
              </svg>
          </button>
        </div>
        </div>
    </li>`).join("")},y=a=>a.map(({img:t,name:s,price:r,_id:o,is10PercentOff:e,isChecked:i})=>e?i?`
          <li class="discount-product-element js-card" data-id=${o}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${c}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${t}" alt="${s}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${s}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${r}</p>
  
            <button class="card-btn js-cart" type="button">
            <svg class="card-btn-icon-check" width="18" height="18">
                <use href="${c}#check"></use>
            </svg>

        </button>
          </div>
  
          </div>
          
          </li>`:`
          <li class="discount-product-element js-card" data-id=${o}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${c}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${t}" alt="${s}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${s}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${r}</p>
  
            <button class="discount-product-btn js-cart" type="button">
  
              <svg class="discount-product-icon" width="18" height="18">
                <use href=" ${c}#cart"></use>
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
      `).join(""),f=a=>a.length?a.map(({_id:t,name:s,img:r,category:o,price:e,size:i,is10PercentOff:d,popularity:l})=>d?`<li class="js-card product-card" data-id=${t}>
                  <img class="product-card-img" src="${r}" alt="${s}">
                      <div class="product-container">
                          <div class="product-title">
                              <h2 class="product-name">${s}</h2>
                              <button type="button" id="test" class="btn-del-product js-close" data-product-id="${t}">
                                  <svg class="delete-icon js-close" width="18" height="18">
                                      <use href="${c}#close"></use>
                                  </svg>
                              </button>
                      </div>
                      <div class="product-category">
                          <p class="product-info"><span class="info-style">Category:</span> ${o.replace("_"," ")} <span class="info-style info-space">Size:</span> ${i}</p>
                      </div>
                      <p class="product-price product-name m">$${e}</p>
                      
              </li>

              `:`<li class="js-card product-card" data-id=${t}>
                  <img class="product-card-img" src="${r}" alt="${s}">
                      <div class="product-container">
                          <div class="product-title">
                              <h2 class="product-name">${s}</h2>
                              <button type="button" id="test" class="btn-del-product js-close" data-product-id="${t}">
                                  <svg class="delete-icon js-close" width="18" height="18">
                                      <use class="js-close" href="${c}#close"></use>
                                  </svg>
                              </button>
                      </div>
                      <div class="product-category">
                          <p class="product-info"><span class="info-style">Category:</span> ${o.replace("_"," ")} <span class="info-style info-space">Size:</span> ${i}</p>
                      </div>
                      <div class="cart-product-counter ">
                          <p class="product-price product-name m">$${e}</p>
                          
                      </div>
              </li>`).join(""):`
 
  <img class="basket-img" src="${u}" alt="Yellow empty basket">
  <div class="basket-text">
      <p class="empty-text"> Your basket is <span>empty...</span></p>
      <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
  </div>
  `;export{v as a,m as b,$ as c,b as d,y as e,g as n,f as p,n as r,c as s};
//# sourceMappingURL=markupFunctions-d1addfc4.js.map
