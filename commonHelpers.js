import{l as n,c as a,s as m,r as L,a as C}from"./assets/api_service-b1b40ba7.js";import"./assets/vendor-85c19974.js";const g="/foodShop/assets/yellow_shopping_basket-566aede4.png",c={cartList:document.querySelector(".cart-list"),deleteAll:document.querySelector(".cart-delete-all"),orderBox:document.querySelector(".order-box"),orderForm:document.querySelector(".order-form")},u=t=>t.length?t.map(({_id:r,img:e,name:s,category:o,size:l,price:i})=>`<li class="cart-item js-card" data-id="${r}">
                    <button class="cart-product-delete js-product-cart-delete">
                        <svg class="cart-product-delete-icon" width="18" height="18">
                            <use href="./img/sprite.svg#close"></use>
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
                        <div class="cart-content-bottom-addition"></div>
                    </div>
                </div>
            </li>
        `):`<li class="emty-cart">
                    <img src="${g}" alt="Emty Cart" class="emty-cart-img" width="132" height="114" />
                    <p class="emty-cart-title">
                        Your basket is <span class="accent">empty...</span>
                    </p>
                    <p class="emty-cart-text">
                        Go to the main page to select your favorite products and add them to the
                        cart.
                    </p>
            </li>`,d=()=>{const t=n(a.LOCAL_CART_KEY)??[];if(!t.length){c.deleteAll.style.display="none",c.orderBox.style.display="none";const e=u(t);c.cartList.innerHTML=e;return}c.deleteAll.style.display="flex",c.orderBox.style.display="block";const r=u(t);c.cartList.innerHTML=r},p=()=>{const t=document.querySelector("#product-count-cart"),r=n(a.LOCAL_CART_KEY)??[];t.innerHTML=`(${r.length})`},y=()=>{m(a.LOCAL_CART_KEY,[]),d()},A=t=>{if(t.currentTarget!==t.target&&t.target.closest(".js-product-cart-delete")){const{id:r}=t.target.closest(".js-card").dataset,e=n(a.LOCAL_CART_KEY)??[],s=e.findIndex(({_id:o})=>o===r);e.splice(s,1),L(a.LOCAL_CART_KEY),m(a.LOCAL_CART_KEY,e),p(),d()}},_=()=>{const t=n(a.LOCAL_CART_KEY)??[];if(!t.length)return;const r=1;return t.reduce((e,s)=>e+s.price*r,0).toFixed(2)};console.log(_());const h=t=>{if(t.preventDefault(),!document.querySelector(".order-box-input").value){alert("blank space");return}const e="goodemail@gmail.com",s=n(a.LOCAL_CART_KEY)??[];let o=[];s.map(i=>{o.push({productId:i._id,amount:1})});const l=JSON.stringify({email:e,products:o});C(l)};c.orderForm.addEventListener("submit",h);c.cartList.addEventListener("click",A);c.deleteAll.addEventListener("click",y);p();d();
//# sourceMappingURL=commonHelpers.js.map
