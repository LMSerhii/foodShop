import{o as C,h as d,l as n,c,s as g,r as y,a as L,b as i}from"./assets/header-be924cb4.js";import{v as b,i as v}from"./assets/vendor-f213eb09.js";const _="/foodShop/assets/yellow_shopping_basket-566aede4.png",r={cartList:document.querySelector(".cart-list"),deleteAll:document.querySelector(".cart-delete-all"),orderBox:document.querySelector(".order-box"),orderForm:document.querySelector(".order-form"),totalSum:document.querySelector(".order-box-total-price-var"),footerForm:document.querySelector(".subscribe-form"),headerCount:document.querySelector("#product-count-header"),cartWrapper:document.querySelector(".cart-wrapper")},m=t=>t.length?t.map(({_id:e,img:a,name:s,category:o,size:l,price:h})=>`<li class="cart-item js-card" data-id="${e}">
                  <button class="cart-product-delete js-product-cart-delete">
                      <svg class="cart-product-delete-icon" width="18" height="18">
                          <use href="${i}#close"></use>
                      </svg>
                    </button>
                <div class="cart-product-container">
                    <div class="cart-product-img-box">
                        <img src="${a}" alt="${s}" class="cart-img" width="64" height="64" />
                      </div>             
                <div class="cart-content">
                    <p class="cart-content-title">${s}</p>                    

                    <ul class="cart-content-list">
                        <li class="cart-content-item">
                        Category:
                        <span class="cart-content-item-var">${o.replace("_"," ")}</span>
                        </li>
                        <li class="cart-content-item">Size:
                        <span class="cart-content-item-var">${l}</span>
                        </li>
                    </ul>                    
                    <div class="cart-content-bottom">   
                        <p class="cart-content-price">$${h}</p>
                        
                        

                      <div class="cart-content-bottom-addition">
                        <button class="cart-content-bottom" type="button" aria-label="subtraction">
                          <svg class="minus-icon" width="18" height="18" aria-label="minus">
                            <use class="cart-minus-svg" href="${i}#minus"></use>
                          </svg>
                        </button>

                        <span class="quantity">1</span>

                        <button class="cart-content-bottom" type="button" aria-label="addition">
                          <svg class="plus-icon" width="18" height="18" aria-label="plus">
                            <use class="cart-plus-svg" href="${i}#plus"></use>
                          </svg>
                        </button>
                      </div>       
                    </div>
                       
                </li>`).join(" "):`<div class="emty-cart">
                    <img src="${_}" alt="Emty Cart" class="emty-cart-img" width="132" height="114" />
                    <p class="emty-cart-title">
                        Your basket is <span class="accent">empty...</span>
                    </p>
                    <p class="emty-cart-text">
                        Go to the main page to select your favorite products and add them to the
                        cart.
                    </p>
            </div>`,f=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length)return;const e=1;return t.reduce((a,s)=>a+s.price*e,0).toFixed(2)},u=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length){r.deleteAll.style.display="none",r.orderBox.style.display="none";const s=m(t);r.cartWrapper.innerHTML=s;return}r.deleteAll.style.display="flex",r.orderBox.style.display="block";const e=m(t),a=f();r.cartList.innerHTML=e,r.totalSum.innerHTML=`$${a}`},p=()=>{const t=document.querySelector("#product-count-cart"),e=n(c.LOCAL_CART_KEY)??[];t.innerHTML=`(${e.length})`},A=()=>{g(c.LOCAL_CART_KEY,[]),d(),p(),u()},E=t=>{if(t.currentTarget!==t.target&&t.target.closest(".js-product-cart-delete")){const{id:e}=t.target.closest(".js-card").dataset,a=n(c.LOCAL_CART_KEY)??[],s=a.findIndex(({_id:o})=>o===e);a.splice(s,1),y(c.LOCAL_CART_KEY),g(c.LOCAL_CART_KEY,a),d(),console.log(r.headerCount),p(),u()}},S=t=>{t.preventDefault();const e=document.querySelector(".order-box-input").value;if(!b(e)){v.warning({title:"Caution",message:"Check your email address"});return}const a=n(c.LOCAL_CART_KEY)??[];let s=[];a.map(l=>{s.push({productId:l._id,amount:1})});const o=JSON.stringify({email:e,products:s});t.target.reset(),L(o)};r.orderForm.addEventListener("submit",S);r.cartList.addEventListener("click",E);r.deleteAll.addEventListener("click",A);r.footerForm.addEventListener("submit",C);d();p();u();
//# sourceMappingURL=commonHelpers.js.map
