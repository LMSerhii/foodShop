import{a as f,i as h}from"./assets/vendor-2dcf4ad5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const i={BASE_URL:"https://food-boutique.b.goit.study/api",LOCAL_CART_KEY:"cart",LOCAL_QUERY_KEY:"query",INIT_QUERY:{keyword:null,category:null,page:1,limit:6},PAGES:"pages"},d={productList:document.querySelector(".product-list")};async function m(t){try{return(await f({url:`${i.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(s){return s}}const u=(t,s)=>{try{const a=JSON.stringify(s);localStorage.setItem(t,a)}catch(a){console.error("Set state error: ",a.message)}},y=t=>{try{const s=localStorage.getItem(t);return s===null?void 0:JSON.parse(s)}catch(s){console.error("Get state error: ",s.message)}},n="/foodShop/assets/sprite-83c9fed8.svg",L=t=>{t.target.closest(".js-card").dataset,t.target.closest(".js-cart").innerHTML=` <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${n}#check"></use>
                    </svg>`,h.success({message:"Successfully added to cart"})},v=t=>{if(t.length)return t.map(({_id:s,name:a,img:c,category:e,price:r,size:o,is10PercentOff:g,popularity:l})=>g?`<li class="card js-card" data-id=${s}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${a}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${a}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${e.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${o}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${l}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${r}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${n}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${n}#discount"></use>
              </svg>
              
            </div>
        </li>`:`<li class="card js-card" data-id=${s}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${c}" alt="${a}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${a}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${e.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${o}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${l}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${r}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${n}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`).join("")},$=t=>{t.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span>filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `},b=async t=>{const s=await m(t);if(!s.results.length){$(d.productList);return}u(i.PAGES,{page:s.page,perPage:s.perPage,totalPages:s.totalPages}),d.productList.innerHTML=v(s.results)},_=t=>{t.preventDefault(),t.target.closest(".js-cart")&&L(t),t.target.classList.contains("js-info")&&openModal(t)};d.productList.addEventListener("click",_);u(i.LOCAL_QUERY_KEY,i.INIT_QUERY);const p=y(i.LOCAL_QUERY_KEY)??[];console.log(p);b(p);
//# sourceMappingURL=commonHelpers.js.map
