import{a as l,b as m}from"./vendor-85c19974.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const f=(t,s)=>{try{const e=JSON.stringify(s);localStorage.setItem(t,e)}catch(e){console.error("Set state error: ",e.message)}},$=t=>{try{const s=localStorage.getItem(t);return s===null?void 0:JSON.parse(s)}catch(s){console.error("Get state error: ",s.message)}},w=t=>{try{localStorage.removeItem(t)}catch(s){console.error("Get state error: ",s.message)}},n={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",LOCAL_SORT:"sort",INIT_QUERY:{keyword:null,category:null,page:1,limit:6},PAGES:"pages",ORDER:"order",NUMBER_OF_DISCOUNT:2},c="/foodShop/assets/sprite-10b57387.svg",v="/foodShop/assets/yellow_shopping_basket-566aede4.png",g={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products"),totalAmountDisplay:document.querySelector(".total-amount"),cartList:document.querySelector(".cart-product-list"),deleteAllButton:document.getElementById("deleteAllButton"),productsCount:document.getElementById("product-count"),dicsProd:document.querySelector(".discount-product-list"),discProdList:document.querySelector(".discount-product-list"),paginationContainer:document.getElementById("pagination-container"),popularProductList:document.querySelector(".popular_products_list"),productsCountHeader:document.querySelector("#product-count-header"),divHome:document.querySelector(".home-sections")},S=t=>{if(t.length)return t.map(({_id:s,name:e,img:r,category:a,price:o,size:i,is10PercentOff:d,popularity:u,isChecked:p})=>d?p?`<li class="card js-card" data-id=${s}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${a.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${i}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${u}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${o}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${c}#check"></use>
                  </svg>
              </button>

              <svg class="discount-icon" width="60" height="60">
                <use href="${c}#discount"></use>
              </svg>
              
            </div>
        </li>`:`<li class="card js-card" data-id=${s}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${a.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${i}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${u}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${o}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${c}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${c}#discount"></use>
              </svg>
              
            </div>
        </li>`:p?`<li class="card js-card" data-id=${s}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${a.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${i}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${u}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${o}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${c}#check"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`:`<li class="card js-card" data-id=${s}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${e}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${e}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${a.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${i}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${u}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${o}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${c}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`).join("")},j=t=>{t.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span class="notFound_title_span">filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `,g.paginationContainer.style.display="none"},k=t=>t.length?t.map(s=>`<option value="${s}">${s.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',x=t=>t.map(s=>`<option value="${s.value}">${s.label}</option>`).join(""),_=t=>{if(!t.length){console.log("Sorry not data");return}return t.map(({_id:s,name:e,img:r,category:a,size:o,popularity:i,isChecked:d})=>d?`<li class="popular-card js-card" data-id=${s}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${r}" alt="${e}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${e}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${a.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${o}</span></li>
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
    </li>`:`<li class="popular-card js-card" data-id=${s}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${r}" alt="${e}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${e}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${a.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${o}</span></li>
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
    </li>`).join("")},C=t=>t.map(({img:s,name:e,price:r,_id:a,is10PercentOff:o,isChecked:i})=>o?i?`
          <li class="discount-product-element js-card" data-id=${a}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${c}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${s}" alt="${e}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${e}</h3>
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
          <li class="discount-product-element js-card" data-id=${a}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${c}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${s}" alt="${e}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${e}</h3>
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
      `).join(""),L=t=>t.length?t.map(({_id:s,name:e,img:r,category:a,price:o,size:i,is10PercentOff:d,popularity:u})=>d?`<li class="js-card product-card" data-id=${s}>
                  <img class="product-card-img" src="${r}" alt="${e}">
                      <div class="product-container">
                          <div class="product-title">
                              <h2 class="product-name">${e}</h2>
                              <button type="button" id="test" class="btn-del-product js-close" data-product-id="${s}">
                                  <svg class="delete-icon js-close" width="18" height="18">
                                      <use href="${c}#close"></use>
                                  </svg>
                              </button>
                      </div>
                      <div class="product-category">
                          <p class="product-info"><span class="info-style">Category:</span> ${a.replace("_"," ")} <span class="info-style info-space">Size:</span> ${i}</p>
                      </div>
                      <p class="product-price product-name m">$${o}</p>
                      <div id="counter">
                          <button type="button" data-action="decrement">-1</button>
                              <span id="value">0</span>
                          <button type="button" data-action="increment">+1</button>
                      </div>
              </li>

              `:`<li class="js-card product-card" data-id=${s}>
                  <img class="product-card-img" src="${r}" alt="${e}">
                      <div class="product-container">
                          <div class="product-title">
                              <h2 class="product-name">${e}</h2>
                              <button type="button" id="test" class="btn-del-product js-close" data-product-id="${s}">
                                  <svg class="delete-icon js-close" width="18" height="18">
                                      <use class="js-close" href="${c}#close"></use>
                                  </svg>
                              </button>
                      </div>
                      <div class="product-category">
                          <p class="product-info"><span class="info-style">Category:</span> ${a.replace("_"," ")} <span class="info-style info-space">Size:</span> ${i}</p>
                      </div>
                      <div class="cart-product-counter ">
                          <p class="product-price product-name m">$${o}</p>
                          
                      </div>
              </li>`).join(""):(deleteContainer.classList.add("visually-hidden"),orderContainer.classList.add("visually-hidden"),`
 
  <img class="basket-img" src="${v}" alt="Yellow empty basket">
  <div class="basket-text">
      <p class="empty-text"> Your basket is <span>empty...</span></p>
      <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
  </div>
  `);async function E(t){try{return(await l({url:`${n.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(s){return s}}async function q(t){try{return(await l({url:`${n.BASE_URL}/products/${t}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(s){return s}}async function T(t){try{let s=null;return t&&(s={limit:t}),(await l({url:`${n.BASE_URL}/products/popular`,method:"GET",header:{"Content-Type":"aplication/json"},params:s})).data}catch(s){return s}}async function P(){try{return(await l({url:`${n.BASE_URL}/products/discount`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function F(){try{return(await l({url:`${n.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function O(t,s){try{return await l({url:"https://food-boutique.b.goit.study/api/orders",method:"POST",headers:{"Content-Type":"application/json"},data:{email:t,products:s}})}catch(e){return e}}async function A(t){try{return(await l({url:`${n.BASE_URL}/subscription`,method:"POST",headers:{"Content-Type":"application/json"},data:{email:t}})).status}catch(s){return s.response.status}}const z=(t,s)=>{const e=a=>{a.code==="Escape"&&r.close()},r=m.create(s,{onShow:a=>{t.addEventListener("keydown",e),a.element().querySelector(".js-modal-close").onclick=()=>a.close()},onClose:a=>{t.removeEventListener("keydown",e)}});r.show()},b="/foodShop/assets/subscribing@1x-6a8ff382.png",h="/foodShop/assets/subscribing@2x-9debc6b5.png",B=`
                  <div class="modal">

                    <div class="container">

                      <div class="modal-box-success">

                        <button class="modal-close js-modal-close" type="button" >
                          <svg class="modal-icon" width="22" height="22">
                            <use href="${c}#close"></use>
                          </svg>
                        </button>

                        <div class="modal-text-box">

                          <p class="subscription-thanks">
                            Thanks for subscribing for
                            <span class="subscription-accent">new</span> products
                          </p>

                          <p class="subscription-promise">
                            We promise you organic and high-quality products that will meet your
                            expectations. Please stay with us and we promise you many pleasant
                            surprises.
                          </p>

                        </div>
                        <img
                        class="modal-image"
                        srcset="${b} 1x, ${h} 2x"
                        src="${h}"
                        alt="basket of fresh vegetables"
                        width="490"
                        />
   
                      </div>
                     

                    </div>

                  </div>
`,R=`
              <div class="modal">

                <div class="container">
                  <div class="modal-box">
                    <button class="modal-close js-modal-close" type="button" data-modal-close>
                      <svg class="modal-icon" width="22" height="22">
                        <use href="${c}#close"></use>
                      </svg>
                    </button>
                    <div class="modal-text-box">
                      <p class="subscription-thanks">
                        This <span class="subscription-accent">email address</span> has already been entered
                      </p>
                      <p class="subscription-promise">
                        You have already subscribed to our new products. Watch for offers at the mailing address.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              `,I=t=>{const{img:s,name:e}=t[0];return`<div class="modal">
            <div class="container">
              <div class="order-modal-box">
                <button class="modal-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${c}#close"></use>
                  </svg>
                </button>
            
                <img class="order-image js-img-order" src="${s}" alt="${e}" width="140" height="140" />
                <p class="order-title">Order success</p>
                <p class="order-text">
                  Thank you for shopping at Food Boutique. Your order has been received and
                  is now being freshly prepared just for you! Get ready to indulge in
                  nourishing goodness, delivered right to your doorstep. We're thrilled to
                  be part of your journey to better health and happiness.
                </p>
              </div>
            </div>
          </div>`},M=({name:t,desc:s,img:e,category:r,price:a,size:o,is10PercentOff:i,popularity:d})=>`
            <div class="modal">
            <div class="container">
              <div class="modal-box-product">
                <button class="modal-product-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${c}#close"></use>
                  </svg>
                </button>

                <div class="modal-product-top">
                  <div class="modal-product-img-box">
                    <img
                      class="modal-product-image"
                      src="${e}"
                      alt="${t}"
                      width="160"
                      height="160"
                      loading="lazy"
                    />
                  </div>
                  <div class="modal-product-text-box">
                    <p class="modal-product-name">${t}</p>
                    <ul class="modal-product-list">
                      <li class="modal-produt-item">Category:
                        <span class="list-variables">${r}</span>
                      </li>
                      <li class="modal-produt-item">Size:
                        <span class="list-variables">${o}</span>
                      </li>
                      <li class="modal-produt-item">Popularity:
                        <span class="list-variables">${d}</span>
                      </li>
                    </ul>
                    <p class="modal-product-desc">
                      A round, orange vegetable with a thick shell and seeds inside. It is
                      often used in cooking and baking for its sweet and earthy flavor.
                    </p>
                  </div>
                </div>

                <div class="modal-product-bottom">
                  <p class="modal-product-price">$${a}</p>
                  <button class="modal-product-btn">
                    Add to
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${c}#cart"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

`;export{O as a,I as b,n as c,w as d,v as e,c as f,q as g,E as h,S as i,F as j,k,$ as l,M as m,j as n,z as o,L as p,x as q,g as r,f as s,T as t,_ as u,P as v,C as w,A as x,R as y,B as z};
//# sourceMappingURL=modalMarkups-a149f7cd.js.map
