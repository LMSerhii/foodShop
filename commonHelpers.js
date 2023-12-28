import{l as n,c,s as m,r as L,a as C,b as i}from"./assets/api_service-90f6c88c.js";import{v as y,i as b}from"./assets/vendor-f213eb09.js";const h="/foodShop/assets/yellow_shopping_basket-566aede4.png",a={cartList:document.querySelector(".cart-list"),deleteAll:document.querySelector(".cart-delete-all"),orderBox:document.querySelector(".order-box"),orderForm:document.querySelector(".order-form"),totalSum:document.querySelector(".order-box-total-price-var")},u=t=>t.length?t.map(({_id:e,img:r,name:s,category:o,size:l,price:g})=>`<li class="cart-item js-card" data-id="${e}">
                    <button class="cart-product-delete js-product-cart-delete">
                        <svg class="cart-product-delete-icon" width="18" height="18">
                            <use href="${i}#close"></use>
                        </svg>
                    </button>

                <img src="${r}" alt="${s}" class="cart-img" />
                <div class="cart-content">
                    <p class="cart-content-title">${s}</p>
                    <ul class="cart-content-list">
                        <li class="cart-content-item">
                        Category:
                        <span class="cart-content-item-var">${o}</span>
                        </li>
                        <li class="cart-content-item">
                        Size:
                        <span class="cart-content-item-var">${l}</span>
                        </li>
                    </ul>
                    <div class="cart-content-bottom">   
                        <p class="cart-content-price">$${g}</p>
                      

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
                </div>
            </li>
        `):`<li class="emty-cart">
                    <img src="${h}" alt="Emty Cart" class="emty-cart-img" width="132" height="114" />
                    <p class="emty-cart-title">
                        Your basket is <span class="accent">empty...</span>
                    </p>
                    <p class="emty-cart-text">
                        Go to the main page to select your favorite products and add them to the
                        cart.
                    </p>
            </li>`,v=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length)return;const e=1;return t.reduce((r,s)=>r+s.price*e,0).toFixed(2)},d=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length){a.deleteAll.style.display="none",a.orderBox.style.display="none";const s=u(t);a.cartList.innerHTML=s;return}a.deleteAll.style.display="flex",a.orderBox.style.display="block";const e=u(t),r=v();a.cartList.innerHTML=e,a.totalSum.innerHTML=`$${r}`},p=()=>{const t=document.querySelector("#product-count-cart"),e=n(c.LOCAL_CART_KEY)??[];t.innerHTML=`(${e.length})`},A=()=>{m(c.LOCAL_CART_KEY,[]),d()},_=t=>{if(t.currentTarget!==t.target&&t.target.closest(".js-product-cart-delete")){const{id:e}=t.target.closest(".js-card").dataset,r=n(c.LOCAL_CART_KEY)??[],s=r.findIndex(({_id:o})=>o===e);r.splice(s,1),L(c.LOCAL_CART_KEY),m(c.LOCAL_CART_KEY,r),p(),d()}},f=t=>{t.preventDefault();const e=document.querySelector(".order-box-input").value;if(!y(e)){b.warning({title:"Caution",message:"Check your email address"});return}const r=n(c.LOCAL_CART_KEY)??[];let s=[];r.map(l=>{s.push({productId:l._id,amount:1})});const o=JSON.stringify({email:e,products:s});C(o)};a.orderForm.addEventListener("submit",f);a.cartList.addEventListener("click",_);a.deleteAll.addEventListener("click",A);p();d();
//# sourceMappingURL=commonHelpers.js.map
