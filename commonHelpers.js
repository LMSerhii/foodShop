import{l,s,c as a,a as L,r,p as u,b as g}from"./assets/refs-3010f107.js";import"./assets/vendor-38dd3e46.js";const d=l(a.LOCAL_CART_KEY)??[];d.forEach(t=>{t.amount=1});s(a.ORDER,d);console.log(d);async function E(){const t=document.getElementById("user-email").value,e=l(a.LOCAL_CART_KEY)??[];e.forEach(n=>{n.amount=1}),s(a.ORDER,e),console.log(e);const o=e.map(n=>({productId:n._id,amount:n.amount}));try{const n=await L(t,o);console.log("Відповідь на замовлення:",n),console.log(t,o),setTimeout(()=>{s(a.LOCAL_CART_KEY,[]),s(a.ORDER,[]),location.reload()},2e3),console.log("Відповідь на замовлення:",n)}catch(n){console.error("Помилка при замовленні:",n)}}document.getElementById("checkoutButton").addEventListener("click",function(t){t.preventDefault(),E()});const A="/foodShop/assets/yellow_shopping_basket-566aede4.png",c=l(a.LOCAL_CART_KEY)??[],f=document.querySelector(".order-container"),m=()=>{const t=c.length;r.productsCount.textContent=`(${t})`,r.productsCountHeader.textContent=`(${t})`},y=t=>{const e=c.findIndex(({_id:o})=>o===t);console.log(e),c.splice(e,1),g(a.LOCAL_CART_KEY),s(a.LOCAL_CART_KEY,c),r.cartList.innerHTML=u(c),p(),m()},_=t=>{if(t.currentTarget===t.target)return;const e=t.target.closest(".js-card").dataset.id;console.log(t.target),t.target.classList.contains("js-close")&&y(e)},p=()=>{const t=c.reduce((e,o)=>e+o.price,0).toFixed(2);r.totalAmountDisplay.textContent=`$${t}`},h=()=>{localStorage.setItem("cart","[]"),location.reload()},T=()=>{r.cartList.innerHTML=`<li><img class="basket-img" src="${A}" alt="Yellow empty basket">
  <div class="basket-text">
      <p class="empty-text"> Your basket is <span>empty...</span></p>
      <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
  </div></li>`,f.innerHTML="",r.deleteAllButton.innerHTML=""},k=()=>{if(c.length>3&&r.cartList.classList.add("scrollable"),!c.length){T();return}r.cartList.innerHTML=u(c),r.cartList.addEventListener("click",_),p()},R=document.querySelectorAll(".counter-pr");R.forEach(t=>{const e=t.querySelector("#value");let o=0;const n=t.querySelector('[data-action="decrement"]'),C=t.querySelector('[data-action="increment"]');n.addEventListener("click",()=>{o>0&&(o-=1,i(e,o))}),C.addEventListener("click",()=>{o+=1,i(e,o)})});const i=(t,e)=>{t.textContent=e};m();k();r.deleteAllButton.addEventListener("click",h);
//# sourceMappingURL=commonHelpers.js.map