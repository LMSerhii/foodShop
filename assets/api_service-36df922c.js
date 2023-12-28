import{b as m,a as n}from"./vendor-85c19974.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const f=(t,e)=>{try{const s=JSON.stringify(e);localStorage.setItem(t,s)}catch(s){console.error("Set state error: ",s.message)}},h=t=>{try{const e=localStorage.getItem(t);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},S=t=>{try{localStorage.removeItem(t)}catch(e){console.error("Get state error: ",e.message)}},d={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",LOCAL_SORT:"sort",INIT_QUERY:{keyword:null,category:null,page:1,limit:6},PAGES:"pages",ORDER:"order",NUMBER_OF_DISCOUNT:2},E={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products"),totalAmountDisplay:document.querySelector(".total-amount"),cartList:document.querySelector(".cart-product-list"),deleteAllButton:document.getElementById("deleteAllButton"),productsCount:document.getElementById("product-count"),dicsProd:document.querySelector(".discount-product-list"),discProdList:document.querySelector(".discount-product-list"),paginationContainer:document.getElementById("pagination-container"),popularProductList:document.querySelector(".popular_products_list"),productsCountHeader:document.querySelector("#product-count-header"),divHome:document.querySelector(".home-sections")},l=(t,e)=>{const s=o=>{o.code==="Escape"&&a.close()},a=m.create(e,{onShow:o=>{t.addEventListener("keydown",s),o.element().querySelector(".js-modal-close").onclick=()=>o.close()},onClose:o=>{t.removeEventListener("keydown",s)}});a.show()},c="/foodShop/assets/sprite-10b57387.svg",g="/foodShop/assets/subscribing@1x-6a8ff382.png",u="/foodShop/assets/subscribing@2x-9debc6b5.png",w=`
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
                        srcset="${g} 1x, ${u} 2x"
                        src="${u}"
                        alt="basket of fresh vegetables"
                        width="490"
                        />
   
                      </div>
                     

                    </div>

                  </div>
`,L=`
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
              `,y=t=>{if(!t.length)return"EMPTY";const{img:e,name:s}=t[0];return`<div class="modal">
            <div class="container">
              <div class="order-modal-box">
                <button class="modal-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${c}#close"></use>
                  </svg>
                </button>
            
                <img class="order-image js-img-order" src="${e}" alt="${s}" width="140" height="140" />
                <p class="order-title">Order success</p>
                <p class="order-text">
                  Thank you for shopping at Food Boutique. Your order has been received and
                  is now being freshly prepared just for you! Get ready to indulge in
                  nourishing goodness, delivered right to your doorstep. We're thrilled to
                  be part of your journey to better health and happiness.
                </p>
              </div>
            </div>
          </div>`},v=()=>`<div class="modal">
            <div class="container">
              <div class="order-modal-box">
                <button class="modal-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${c}#close"></use>
                  </svg>
                </button>
                <div class="error_box">
                <p class="error_title">
                    Error<span>${status}</span>
                </p>
                <p class="error_text">
                  🤦‍♂️ Something has gone wrong ....
                </p>
              </div>
                
              </div>
            </div>
          </div>`,$=({name:t,desc:e,img:s,category:a,price:o,size:r,is10PercentOff:i,popularity:p})=>`
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
                      src="${s}"
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
                        <span class="list-variables">${a}</span>
                      </li>
                      <li class="modal-produt-item">Size:
                        <span class="list-variables">${r}</span>
                      </li>
                      <li class="modal-produt-item">Popularity:
                        <span class="list-variables">${p}</span>
                      </li>
                    </ul>
                    <div class="scroll">
                    <p class="modal-product-desc">
                      ${e}
                    </p>
                    </div>
                  </div>
                </div>

                <div class="modal-product-bottom">
                  <p class="modal-product-price">$${o}</p>

                  <button class="modal-product-addBtn js-to-cart">
                    Add to
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${c}#cart"></use>
                    </svg>
                  </button>

                  <button class="modal-product-removeBtn js-from-cart">
                    Remove from
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${c}#cart"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

`;async function q(t){try{return(await n({url:`${d.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(e){return e}}async function x(t){try{return(await n({url:`${d.BASE_URL}/products/${t}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}async function _(t){try{let e=null;return t&&(e={limit:t}),(await n({url:`${d.BASE_URL}/products/popular`,method:"GET",header:{"Content-Type":"aplication/json"},params:e})).data}catch(e){return e}}async function T(){try{return(await n({url:`${d.BASE_URL}/products/discount`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function C(){try{return(await n({url:`${d.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function O(t){try{const e=await n({url:"https://food-boutique.b.goit.study/api/orders",method:"POST",headers:{"Content-Type":"application/json"},data:t}),s=document.querySelector(".order-form"),a=h(d.LOCAL_CART_KEY)??[],o=y(a);l(s,o)}catch{const s=document.querySelector(".order-form"),a=v();l(s,a)}}async function j(t){try{return(await n({url:`${d.BASE_URL}/subscription`,method:"POST",headers:{"Content-Type":"application/json"},data:{email:t}})).status}catch(e){return e.response.status}}export{O as a,c as b,d as c,E as d,q as e,C as f,x as g,_ as h,T as i,j,L as k,h as l,$ as m,w as n,l as o,S as r,f as s};
//# sourceMappingURL=api_service-36df922c.js.map
