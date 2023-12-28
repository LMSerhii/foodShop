import{o as L,h as i,l as n,c,s as g,r as b,a as h,b as m}from"./assets/header-fc852dda.js";import{v as y,i as v}from"./assets/vendor-f213eb09.js";const _="/foodShop/assets/yellow_shopping_basket-566aede4.png",r={cartList:document.querySelector(".cart-list"),deleteAll:document.querySelector(".cart-delete-all"),orderBox:document.querySelector(".order-box"),orderForm:document.querySelector(".order-form"),totalSum:document.querySelector(".order-box-total-price-var"),footerForm:document.querySelector(".subscribe-form"),headerCount:document.querySelector("#product-count-header")},p=t=>t.length?t.map(({_id:e,img:s,name:a,category:o,size:l,price:C})=>`<li class="cart-item js-card" data-id="${e}">
      <div class="cart-product-container">
       <div class="cart-product-img-box"><img src="${s}" alt="${a}" class="cart-img" /></div>             
<div class="cart-content">
                    <p class="cart-content-title">${a}</p>                    

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
                        <p class="cart-content-price">$${C}</p>
                        
                        

<div class="cart-content-bottom-addition">
                        <button class="cart-content-bottom" type="button" aria-label="subtraction">
                          <svg class="minus-icon" width="18" height="18" aria-label="minus">
                            <use class="cart-minus-svg" href="${m}#minus"></use>
                          </svg>
                        </button>

                        <span class="quantity">1</span>

                        <button class="cart-content-bottom" type="button" aria-label="addition">
                          <svg class="plus-icon" width="18" height="18" aria-label="plus">
                            <use class="cart-plus-svg" href="${m}#plus"></use>
                          </svg>
                        </button>
                      </div>
      
                    <div class="cart-close-btn">
                      <button class="cart-product-delete js-product-cart-delete">
                        <svg class="cart-product-delete-icon" width="18" height="18">
                            <use href="./img/sprite.svg#close"></use>
                        </svg>
                    </button>
                    </div>
                      

                        

                        
                    </div>
                       
                </li>`).join(" "):`<li class="emty-cart">
                    <img src="${_}" alt="Emty Cart" class="emty-cart-img" width="132" height="114" />
                    <p class="emty-cart-title">
                        Your basket is <span class="accent">empty...</span>
                    </p>
                    <p class="emty-cart-text">
                        Go to the main page to select your favorite products and add them to the
                        cart.
                    </p>
            </li>`,f=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length)return;const e=1;return t.reduce((s,a)=>s+a.price*e,0).toFixed(2)},d=()=>{const t=n(c.LOCAL_CART_KEY)??[];if(!t.length){r.deleteAll.style.display="none",r.orderBox.style.display="none";const a=p(t);r.cartList.innerHTML=a;return}r.deleteAll.style.display="flex",r.orderBox.style.display="block";const e=p(t),s=f();r.cartList.innerHTML=e,r.totalSum.innerHTML=`$${s}`},u=()=>{const t=document.querySelector("#product-count-cart"),e=n(c.LOCAL_CART_KEY)??[];t.innerHTML=`(${e.length})`},A=()=>{g(c.LOCAL_CART_KEY,[]),i(),u(),d()},E=t=>{if(t.currentTarget!==t.target&&t.target.closest(".js-product-cart-delete")){const{id:e}=t.target.closest(".js-card").dataset,s=n(c.LOCAL_CART_KEY)??[],a=s.findIndex(({_id:o})=>o===e);s.splice(a,1),b(c.LOCAL_CART_KEY),g(c.LOCAL_CART_KEY,s),i(),console.log(r.headerCount),u(),d()}},S=t=>{t.preventDefault();const e=document.querySelector(".order-box-input").value;if(!y(e)){v.warning({title:"Caution",message:"Check your email address"});return}const s=n(c.LOCAL_CART_KEY)??[];let a=[];s.map(l=>{a.push({productId:l._id,amount:1})});const o=JSON.stringify({email:e,products:a});t.target.reset(),h(o)};r.orderForm.addEventListener("submit",S);r.cartList.addEventListener("click",E);r.deleteAll.addEventListener("click",A);r.footerForm.addEventListener("submit",L);i();u();d();
//# sourceMappingURL=commonHelpers.js.map
