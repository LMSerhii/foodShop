import{o as L,h as u,l as n,c as o,s as g,r as h,a as y,b as i}from"./assets/header-83605e8e.js";import{v as b,i as v}from"./assets/vendor-f213eb09.js";const f="/foodShop/assets/yellow_shopping_basket-566aede4.png",r={cartList:document.querySelector(".cart-list"),deleteAll:document.querySelector(".cart-delete-all"),orderBox:document.querySelector(".order-box"),orderForm:document.querySelector(".order-form"),totalSum:document.querySelector(".order-box-total-price-var"),footerForm:document.querySelector(".subscribe-form"),headerCount:document.querySelector("#product-count-header")},p=t=>t.length?t.map(({_id:e,img:s,name:a,category:c,size:l,price:C})=>`<li class="cart-item js-card" data-id="${e}">
                    <button class="cart-product-delete js-product-cart-delete">
                        <svg class="cart-product-delete-icon" width="18" height="18">
                            <use href="${i}#close"></use>
                        </svg>
                    </button>

                <img src="${s}" alt="${a}" class="cart-img" />
                <div class="cart-content">
                    <p class="cart-content-title">${a}</p>
                    <ul class="cart-content-list">
                        <li class="cart-content-item">
                        Category:
                        <span class="cart-content-item-var">${c}</span>
                        </li>
                        <li class="cart-content-item">
                        Size:
                        <span class="cart-content-item-var">${l}</span>
                        </li>
                    </ul>
                    <div class="cart-content-bottom">   
                        <p class="cart-content-price">$${C}</p>
                      

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
                    <img src="${f}" alt="Emty Cart" class="emty-cart-img" width="132" height="114" />
                    <p class="emty-cart-title">
                        Your basket is <span class="accent">empty...</span>
                    </p>
                    <p class="emty-cart-text">
                        Go to the main page to select your favorite products and add them to the
                        cart.
                    </p>
            </li>`,A=()=>{const t=n(o.LOCAL_CART_KEY)??[];if(!t.length)return;const e=1;return t.reduce((s,a)=>s+a.price*e,0).toFixed(2)},d=()=>{const t=n(o.LOCAL_CART_KEY)??[];if(!t.length){r.deleteAll.style.display="none",r.orderBox.style.display="none";const a=p(t);r.cartList.innerHTML=a;return}r.deleteAll.style.display="flex",r.orderBox.style.display="block";const e=p(t),s=A();r.cartList.innerHTML=e,r.totalSum.innerHTML=`$${s}`},m=()=>{const t=document.querySelector("#product-count-cart"),e=n(o.LOCAL_CART_KEY)??[];t.innerHTML=`(${e.length})`},_=()=>{g(o.LOCAL_CART_KEY,[]),u(),m(),d()},E=t=>{if(t.currentTarget!==t.target&&t.target.closest(".js-product-cart-delete")){const{id:e}=t.target.closest(".js-card").dataset,s=n(o.LOCAL_CART_KEY)??[],a=s.findIndex(({_id:c})=>c===e);s.splice(a,1),h(o.LOCAL_CART_KEY),g(o.LOCAL_CART_KEY,s),u(),console.log(r.headerCount),m(),d()}},$=t=>{t.preventDefault();const e=document.querySelector(".order-box-input").value;if(!b(e)){v.warning({title:"Caution",message:"Check your email address"});return}const s=n(o.LOCAL_CART_KEY)??[];let a=[];s.map(l=>{a.push({productId:l._id,amount:1})});const c=JSON.stringify({email:e,products:a});t.target.reset(),y(c)};r.orderForm.addEventListener("submit",$);r.cartList.addEventListener("click",E);r.deleteAll.addEventListener("click",_);r.footerForm.addEventListener("submit",L);u();m();d();
//# sourceMappingURL=commonHelpers.js.map
