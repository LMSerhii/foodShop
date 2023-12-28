import{l as n,c,s as p,r as L,a as v}from"./assets/api_service-b1b40ba7.js";import"./assets/vendor-85c19974.js";const d=document.querySelector(".order-submit");function y(){const t=document.querySelector(".order-box-input").value;console.log(t);const e=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;e.test(t)?(console.log(e.test(t)),alert("Email is valid!")):(console.log(e.test(t)),alert("Invalid email format!"))}d&&d.addEventListener("click",function(t){t.preventDefault(),y()});const C="/foodShop/assets/yellow_shopping_basket-566aede4.png",r={cartList:document.querySelector(".cart-list"),deleteAll:document.querySelector(".cart-delete-all"),orderBox:document.querySelector(".order-box"),orderForm:document.querySelector(".order-form")},m=t=>t.length?t.map(({_id:e,img:s,name:a,category:o,size:l,price:i})=>`<li class="cart-item js-card" data-id="${e}">
                    <button class="cart-product-delete js-product-cart-delete">
                        <svg class="cart-product-delete-icon" width="18" height="18">
                            <use href="./img/sprite.svg#close"></use>
                        </svg>
                    </button>

                <img src="${s}" alt="${a}" class="cart-img" />
                <div class="cart-content">
                    <p class="cart-content-title">${a}</p>
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
                        <button class="cart-content-bottom" type="button" aria-label="subtraction"><svg class="minus-icon" width="18" height="18" aria-label="minus">
                            <use class="cart-minus-svg" xlink:href="./img/sprite.svg#minus"></use>
                          </svg></button>

                        <span class="quantity">1</span>

                        <button class="cart-content-bottom" type="button" aria-label="addition"><svg class="plus-icon" width="18" height="18" aria-label="plus">
                            <use class="cart-plus-svg" xlink:href="./img/sprite.svg#plus"></use>
                          </svg></button>
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
            </li>`,u=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length){r.deleteAll.style.display="none",r.orderBox.style.display="none";const s=m(t);r.cartList.innerHTML=s;return}r.deleteAll.style.display="flex",r.orderBox.style.display="block";const e=m(t);r.cartList.innerHTML=e},g=()=>{const t=document.querySelector("#product-count-cart"),e=n(c.LOCAL_CART_KEY)??[];t.innerHTML=`(${e.length})`},b=()=>{p(c.LOCAL_CART_KEY,[]),u()},h=t=>{if(t.currentTarget!==t.target&&t.target.closest(".js-product-cart-delete")){const{id:e}=t.target.closest(".js-card").dataset,s=n(c.LOCAL_CART_KEY)??[],a=s.findIndex(({_id:o})=>o===e);s.splice(a,1),L(c.LOCAL_CART_KEY),p(c.LOCAL_CART_KEY,s),g(),u()}},A=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length)return;const e=1;return t.reduce((s,a)=>s+a.price*e,0).toFixed(2)};console.log(A());const f=t=>{if(t.preventDefault(),!document.querySelector(".order-box-input").value){alert("blank space");return}const s="goodemail@gmail.com",a=n(c.LOCAL_CART_KEY)??[];let o=[];a.map(i=>{o.push({productId:i._id,amount:1})});const l=JSON.stringify({email:s,products:o});v(l)};r.orderForm.addEventListener("submit",f);r.cartList.addEventListener("click",h);r.deleteAll.addEventListener("click",b);g();u();
//# sourceMappingURL=commonHelpers.js.map
