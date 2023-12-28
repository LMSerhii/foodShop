import{l as n,c,s as m,r as g,a as L}from"./assets/api_service-b1b40ba7.js";import"./assets/vendor-85c19974.js";const C="/foodShop/assets/yellow_shopping_basket-566aede4.png",r={cartList:document.querySelector(".cart-list"),deleteAll:document.querySelector(".cart-delete-all"),orderBox:document.querySelector(".order-box"),orderForm:document.querySelector(".order-form")},u=t=>t.length?t.map(({_id:s,img:e,name:a,category:o,size:l,price:i})=>`<li class="cart-item js-card" data-id="${s}">
                    <button class="cart-product-delete js-product-cart-delete">
                        <svg class="cart-product-delete-icon" width="18" height="18">
                            <use href="./img/sprite.svg#close"></use>
                        </svg>
                    </button>

                <img src="${e}" alt="${a}" class="cart-img" />
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
            </li>`,d=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length){r.deleteAll.style.display="none",r.orderBox.style.display="none";const e=u(t);r.cartList.innerHTML=e;return}r.deleteAll.style.display="flex",r.orderBox.style.display="block";const s=u(t);r.cartList.innerHTML=s},p=()=>{const t=document.querySelector("#product-count-cart"),s=n(c.LOCAL_CART_KEY)??[];t.innerHTML=`(${s.length})`},y=()=>{m(c.LOCAL_CART_KEY,[]),d()},b=t=>{if(t.currentTarget!==t.target&&t.target.closest(".js-product-cart-delete")){const{id:s}=t.target.closest(".js-card").dataset,e=n(c.LOCAL_CART_KEY)??[],a=e.findIndex(({_id:o})=>o===s);e.splice(a,1),g(c.LOCAL_CART_KEY),m(c.LOCAL_CART_KEY,e),p(),d()}},h=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length)return;const s=1;return t.reduce((e,a)=>e+a.price*s,0).toFixed(2)};console.log(h());const v=t=>{if(t.preventDefault(),!document.querySelector(".order-box-input").value){alert("blank space");return}const e="goodemail@gmail.com",a=n(c.LOCAL_CART_KEY)??[];let o=[];a.map(i=>{o.push({productId:i._id,amount:1})});const l=JSON.stringify({email:e,products:o});L(l)};r.orderForm.addEventListener("submit",v);r.cartList.addEventListener("click",b);r.deleteAll.addEventListener("click",y);p();d();
//# sourceMappingURL=commonHelpers.js.map
