import{l as n,c,s as p,r as L,a as y,b as d}from"./assets/api_service-36df922c.js";import"./assets/vendor-85c19974.js";const C="/foodShop/assets/yellow_shopping_basket-566aede4.png",a={cartList:document.querySelector(".cart-list"),deleteAll:document.querySelector(".cart-delete-all"),orderBox:document.querySelector(".order-box"),orderForm:document.querySelector(".order-form"),totalSum:document.querySelector(".order-box-total-price-var")},m=t=>t.length?t.map(({_id:r,img:e,name:s,category:o,size:l,price:i})=>`<li class="cart-item js-card" data-id="${r}">
                    <button class="cart-product-delete js-product-cart-delete">
                        <svg class="cart-product-delete-icon" width="18" height="18">
                            <use href="${d}#close"></use>
                        </svg>
                    </button>

                <img src="${e}" alt="${s}" class="cart-img" />
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
                        <p class="cart-content-price">$${i}</p>
                      

                        <div class="cart-content-bottom-addition">
                        <button class="cart-content-bottom" type="button" aria-label="subtraction">
                          <svg class="minus-icon" width="18" height="18" aria-label="minus">
                            <use class="cart-minus-svg" href="${d}#minus"></use>
                          </svg>
                        </button>

                        <span class="quantity">1</span>

                        <button class="cart-content-bottom" type="button" aria-label="addition">
                          <svg class="plus-icon" width="18" height="18" aria-label="plus">
                            <use class="cart-plus-svg" href="${d}#plus"></use>
                          </svg>
                        </button>
                      </div>

                        
                    </div>
                </div>
            </li>
        `):`<li class="emty-cart">
                    <img src="${C}" alt="Emty Cart" class="emty-cart-img" width="132" height="114" />
                    <p class="emty-cart-title">
                        Your basket is <span class="accent">empty...</span>
                    </p>
                    <p class="emty-cart-text">
                        Go to the main page to select your favorite products and add them to the
                        cart.
                    </p>
            </li>`,b=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length)return;const r=1;return t.reduce((e,s)=>e+s.price*r,0).toFixed(2)},u=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length){a.deleteAll.style.display="none",a.orderBox.style.display="none";const s=m(t);a.cartList.innerHTML=s;return}a.deleteAll.style.display="flex",a.orderBox.style.display="block";const r=m(t),e=b();a.cartList.innerHTML=r,a.totalSum.innerHTML=`$${e}`},g=()=>{const t=document.querySelector("#product-count-cart"),r=n(c.LOCAL_CART_KEY)??[];t.innerHTML=`(${r.length})`},h=()=>{p(c.LOCAL_CART_KEY,[]),u()},v=t=>{if(t.currentTarget!==t.target&&t.target.closest(".js-product-cart-delete")){const{id:r}=t.target.closest(".js-card").dataset,e=n(c.LOCAL_CART_KEY)??[],s=e.findIndex(({_id:o})=>o===r);e.splice(s,1),L(c.LOCAL_CART_KEY),p(c.LOCAL_CART_KEY,e),g(),u()}},A=t=>{if(t.preventDefault(),!document.querySelector(".order-box-input").value){alert("blank space");return}const e="goodemail@gmail.com",s=n(c.LOCAL_CART_KEY)??[];let o=[];s.map(i=>{o.push({productId:i._id,amount:1})});const l=JSON.stringify({email:e,products:o});y(l)};a.orderForm.addEventListener("submit",A);a.cartList.addEventListener("click",v);a.deleteAll.addEventListener("click",h);g();u();
//# sourceMappingURL=commonHelpers.js.map
