import{l as n,c as r,s as d,r as L,e as C}from"./assets/yellow_shopping_basket-bc064f0a.js";const e={cartList:document.querySelector(".cart-list"),deleteAll:document.querySelector(".cart-delete-all"),orderBox:document.querySelector(".order-box")},i=t=>t.length?t.map(({_id:c,img:s,name:a,category:l,size:p,price:m})=>`<li class="cart-item js-card" data-id="${c}">
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
                        <span class="cart-content-item-var">${l}</span>
                        </li>
                        <li class="cart-content-item">
                        Size:
                        <span class="cart-content-item-var">${p}</span>
                        </li>
                    </ul>
                    <div class="cart-content-bottom">   
                        <p class="cart-content-price">$${m}</p>
                        <div class="cart-content-bottom-addition"></div>
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
            </li>`,o=()=>{const t=n(r.LOCAL_CART_KEY)??[];if(!t.length){e.deleteAll.style.display="none",e.orderBox.style.display="none";const s=i(t);e.cartList.innerHTML=s;return}e.deleteAll.style.display="flex",e.orderBox.style.display="block";const c=i(t);e.cartList.innerHTML=c},u=()=>{const t=document.querySelector("#product-count-cart"),c=n(r.LOCAL_CART_KEY)??[];t.innerHTML=`(${c.length})`},y=()=>{d(r.LOCAL_CART_KEY,[]),o()},g=t=>{if(t.currentTarget!==t.target&&t.target.closest(".js-product-cart-delete")){const{id:c}=t.target.closest(".js-card").dataset,s=n(r.LOCAL_CART_KEY)??[],a=s.findIndex(({_id:l})=>l===c);s.splice(a,1),L(r.LOCAL_CART_KEY),d(r.LOCAL_CART_KEY,s),u(),o()}};e.cartList.addEventListener("click",g);e.deleteAll.addEventListener("click",y);u();o();
//# sourceMappingURL=commonHelpers.js.map
