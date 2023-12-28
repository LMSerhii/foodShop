import{c as a,l as c,s as d,r as W}from"./assets/common-8da94c95.js";import{a as y,i as q,P as U,b as F,S as M}from"./assets/vendor-4cc552dc.js";const n={productList:document.querySelector(".product-list"),searchField:document.querySelector(".js-input"),categoryField:document.querySelector("#categoryField"),abcField:document.querySelector("#abcField"),form:document.querySelector(".form"),productList:document.querySelector(".product-list"),emailForm:document.querySelector(".subscribe-form"),emailInput:document.querySelector(".subscribe-input"),sendBtn:document.querySelector(".send-btn"),popularProductList:document.querySelector(".popular-products"),totalAmountDisplay:document.querySelector(".total-amount"),cartList:document.querySelector(".cart-product-list"),deleteAllButton:document.getElementById("deleteAllButton"),productsCount:document.getElementById("product-count"),dicsProd:document.querySelector(".discount-product-list"),discProdList:document.querySelector(".discount-product-list"),paginationContainer:document.getElementById("pagination-container"),popularProductList:document.querySelector(".popular_products_list"),productsCountHeader:document.querySelector("#product-count-header"),divHome:document.querySelector(".home-sections")};async function I(t){try{return(await y({url:`${a.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(e){return e}}async function $(t){try{return(await y({url:`${a.BASE_URL}/products/${t}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}async function Z(t){try{let e=null;return t&&(e={limit:t}),(await y({url:`${a.BASE_URL}/products/popular`,method:"GET",header:{"Content-Type":"aplication/json"},params:e})).data}catch(e){return e}}async function X(){try{return(await y({url:`${a.BASE_URL}/products/discount`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function tt(){try{return(await y({url:`${a.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function et(t){try{return(await y({url:`${a.BASE_URL}/subscription`,method:"POST",headers:{"Content-Type":"application/json"},data:{email:t}})).status}catch(e){return e.response.status}}const p="/foodShop/assets/sprite-10b57387.svg",L=()=>{const t=document.querySelector("#product-count-header"),e=c(a.LOCAL_CART_KEY)??[];t.innerHTML=`(${e.length})`},b=c(a.LOCAL_CART_KEY)??[],B=async t=>{const{id:e}=t.target.closest(".js-card").dataset,s=await $(e);b.some(({_id:r})=>r===s._id)||(b.push(s),d(a.LOCAL_CART_KEY,b),t.target.closest(".js-cart").innerHTML=`<button class="card-btn" type="button">
                    <svg class="card-btn-icon-check" width="18" height="18">
                        <use href="${p}#check"></use>
                    </svg>
                </button>`,L(),q.success({title:"OK",message:"Added to cart!"}))},st=async t=>{const{id:e}=t.target.closest(".js-card").dataset,s=await $(e);b.some(({_id:r})=>r===s._id)||(b.push(s),d(a.LOCAL_CART_KEY,b),t.target.closest(".js-cart").innerHTML=`<button class="popular-btn-check" type="button">
                    <svg class="popular-icon-check" width="18" height="18">
                      <use href="${p}#check"></use>
                    </svg>
                </button>`,L(),q.success({title:"OK",message:"Added to cart!"}))},S=t=>{if(t.length)return t.map(({_id:e,name:s,img:o,category:r,price:i,size:l,is10PercentOff:u,popularity:m,isChecked:f})=>u?f?`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${o}" alt="${s}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${s}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${r.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${l}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${m}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${i}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${p}#check"></use>
                  </svg>
              </button>

              <svg class="discount-icon" width="60" height="60">
                <use href="${p}#discount"></use>
              </svg>
              
            </div>
        </li>`:`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${o}" alt="${s}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${s}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${r.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${l}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${m}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${i}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${p}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${p}#discount"></use>
              </svg>
              
            </div>
        </li>`:f?`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${o}" alt="${s}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${s}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${r.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${l}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${m}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${i}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${p}#check"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`:`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${o}" alt="${s}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${s}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${r.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${l}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${m}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${i}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${p}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`).join("")},N=t=>{t.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span class="notFound_title_span">filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `,n.paginationContainer.style.display="none"},at=t=>t.length?t.map(e=>`<option value="${e}">${e.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',ot=t=>t.map(e=>`<option value="${e.value}">${e.label}</option>`).join(""),rt=t=>{if(!t.length){console.log("Sorry not data");return}return t.map(({_id:e,name:s,img:o,category:r,size:i,popularity:l,isChecked:u})=>u?`<li class="popular-card js-card" data-id=${e}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${o}" alt="${s}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${s}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${r.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${i}</span></li>
                <li class="popular-info-style">Popularity: <span>${l}</span></li>
                </div>
            </ul>
                                </div>
          </div>

        <div class="popular-card-bottom">
          
          <button class="popular-card-btn js-cart" type="button">
            <svg class="popular-icon-check" width="18" height="18">
              <use href="${p}#check"></use>
            </svg>
          </button>
          
        </div>
        </div>
    </li>`:`<li class="popular-card js-card" data-id=${e}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${o}" alt="${s}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${s}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${r.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${i}</span></li>
                <li class="popular-info-style">Popularity: <span>${l}</span></li>
                </div>
            </ul>
                                </div>
          </div>

        <div class="popular-card-bottom">
          
          <button class="popular-card-btn js-cart" type="button">
              <svg class="popular-icon" width="18" height="18">
                  <use href="${p}#cart"></use>
              </svg>
          </button>
        </div>
        </div>
    </li>`).join("")},ct=t=>t.map(({img:e,name:s,price:o,_id:r,is10PercentOff:i,isChecked:l})=>i?l?`
          <li class="discount-product-element js-card" data-id=${r}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${p}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${e}" alt="${s}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${s}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${o}</p>
  
            <button class="card-btn js-cart" type="button">
            <svg class="card-btn-icon-check" width="18" height="18">
                <use href="${p}#check"></use>
            </svg>

        </button>
          </div>
  
          </div>
          
          </li>`:`
          <li class="discount-product-element js-card" data-id=${r}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${p}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${e}" alt="${s}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${s}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${o}</p>
  
            <button class="discount-product-btn js-cart" type="button">
  
              <svg class="discount-product-icon" width="18" height="18">
                <use href=" ${p}#cart"></use>
              </svg>
           
            </button>
          </div>
  
          </div>
          
          </li>`:`<div class="notFound_box">
                  <p class="notFound_title">
                      Nothing was found for the selected <span>filters...</span>
                  </p>
                  <p class="notFound_text">
                    Try adjusting your search parameters or browse our range by other criteria to
                    find the perfect product for you.
                  </p>
                </div>
      `).join("");let _;const nt=window.matchMedia("(min-width: 768px)"),D=t=>{t.matches?(_=4,T()):(_=2,T())};nt.addEventListener("change",D);function T(){const t=c(a.PAGES).page,e=c(a.PAGES).perPage,s=c(a.PAGES).totalPages;new U(n.paginationContainer,{page:t,totalItems:e*s,itemsPerPage:e,visiblePages:_,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(i){const l=JSON.parse(localStorage.getItem("pages"));l.page=i.page,localStorage.setItem("pages",JSON.stringify(l));const u=JSON.parse(localStorage.getItem("pages")),m=c(a.LOCAL_QUERY_KEY);m.page=u.page,d(a.LOCAL_QUERY_KEY,m);const f=c(a.LOCAL_QUERY_KEY);z(f)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?n.paginationContainer.style.display="none":n.paginationContainer.style.display="block"}function H(){new U(n.paginationContainer,{page:a.INIT_QUERY.page,totalItems:c("pages").perPage*c("pages").totalPages,itemsPerPage:c("pages").perPage,visiblePages:_,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(s){const o=JSON.parse(localStorage.getItem("pages"));o.page=s.page,localStorage.setItem("pages",JSON.stringify(o));const r=JSON.parse(localStorage.getItem("pages")),i=c(a.LOCAL_QUERY_KEY);i.page=r.page,d(a.LOCAL_QUERY_KEY,i);const l=c(a.LOCAL_QUERY_KEY);z(l)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?n.paginationContainer.style.display="none":n.paginationContainer.style.display="block"}async function z(t){const e=await I(t);if(!e.results.length){notFoundMarkup(n.productList);return}n.productList.innerHTML=S(e.results)}const A=t=>{const e=c(a.LOCAL_CART_KEY)??[];return t.map(o=>e.some(({_id:i})=>i===o._id)?(o.isChecked=!0,o):(o.isChecked=!1,o))},it="/foodShop/assets/subscribing@1x-6a8ff382.png",x="/foodShop/assets/subscribing@2x-9debc6b5.png",lt=`
                  <div class="modal">

                    <div class="container">

                      <div class="modal-box-success">

                        <button class="modal-close js-modal-close" type="button" >
                          <svg class="modal-icon" width="22" height="22">
                            <use href="${p}#close"></use>
                          </svg>
                        </button>

                        <div class="modal-text-box">

                          <p class="subscription-thanks">
                            Thanks for subscribing for
                            <span class="subscription-accent">new</span> products
                          </p>

                          <p class="subscription-promise">
                            We promise you organic and high-quality products that will meet your
                            expectations. Please stay with us and we promise you many pleasant
                            surprises.
                          </p>

                        </div>
                        <img
                        class="modal-image"
                        srcset="${it} 1x, ${x} 2x"
                        src="${x}"
                        alt="basket of fresh vegetables"
                        width="490"
                        />
   
                      </div>
                     

                    </div>

                  </div>
`,dt=`
              <div class="modal">

                <div class="container">
                  <div class="modal-box">
                    <button class="modal-close js-modal-close" type="button" data-modal-close>
                      <svg class="modal-icon" width="22" height="22">
                        <use href="${p}#close"></use>
                      </svg>
                    </button>
                    <div class="modal-text-box">
                      <p class="subscription-thanks">
                        This <span class="subscription-accent">email address</span> has already been entered
                      </p>
                      <p class="subscription-promise">
                        You have already subscribed to our new products. Watch for offers at the mailing address.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              `,ut=({name:t,desc:e,img:s,category:o,price:r,size:i,is10PercentOff:l,popularity:u})=>`
            <div class="modal">
            <div class="container">
              <div class="modal-box-product">
                <button class="modal-product-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${p}#close"></use>
                  </svg>
                </button>

                <div class="modal-product-top">
                  <div class="modal-product-img-box">
                    <img
                      class="modal-product-image"
                      src="${s}"
                      alt="${t}"
                      width="160"
                      height="160"
                      loading="lazy"
                    />
                  </div>
                  <div class="modal-product-text-box">
                    <p class="modal-product-name">${t}</p>
                    <ul class="modal-product-list">
                      <li class="modal-produt-item">Category:
                        <span class="list-variables">${o}</span>
                      </li>
                      <li class="modal-produt-item">Size:
                        <span class="list-variables">${i}</span>
                      </li>
                      <li class="modal-produt-item">Popularity:
                        <span class="list-variables">${u}</span>
                      </li>
                    </ul>
                    <div class="scroll">
                    <p class="modal-product-desc">
                      ${e}
                    </p>
                    </div>
                  </div>
                </div>

                <div class="modal-product-bottom">
                  <p class="modal-product-price">$${r}</p>

                  <button class="modal-product-addBtn js-to-cart">
                    Add to
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${p}#cart"></use>
                    </svg>
                  </button>

                  <button class="modal-product-removeBtn js-from-cart">
                    Remove from
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${p}#cart"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

`,Y=async(t,e)=>{const{id:s}=t.target.closest(".js-card").dataset,o=await $(s),r=ut(o),i=F.create(r,{onShow:u=>{e.addEventListener("keydown",l),u.element().querySelector(".js-modal-close").onclick=()=>{u.close();const g=c(a.LOCAL_QUERY_KEY)??[];h(g)},(c(a.LOCAL_CART_KEY)??[]).some(({_id:g})=>g===s)?(u.element().querySelector(".js-to-cart").style.display="none",u.element().querySelector(".js-from-cart").style.display="flex"):(u.element().querySelector(".js-to-cart").style.display="flex",u.element().querySelector(".js-from-cart").style.display="none");const E=u.element().querySelector(".js-to-cart"),w=u.element().querySelector(".js-from-cart");E.addEventListener("click",()=>{const g=c(a.LOCAL_CART_KEY)??[];g.some(({_id:C})=>C===s)||(g.push(o),d(a.LOCAL_CART_KEY,g),L(),E.style.display="none",w.style.display="flex")}),w.addEventListener("click",()=>{const g=c(a.LOCAL_CART_KEY)??[],R=g.findIndex(({_id:C})=>C===s);g.splice(R,1),W(a.LOCAL_CART_KEY),d(a.LOCAL_CART_KEY,g),L(),w.style.display="none",E.style.display="flex"})},onClose:u=>{e.removeEventListener("keydown",l)}});function l(u){u.code==="Escape"&&i.close()}i.show()},h=async t=>{n.productList.innerHTML='<div class="loader-box"><span class="loader"></span></div>';const e=await I(t);if(!e.results.length){N(n.productList);return}d(a.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages});const s=A(e.results);n.productList.innerHTML=S(s),H()},pt=t=>{if(t.preventDefault(),t.currentTarget!==t.target){if(t.target.closest(".js-cart")){B(t);return}Y(t,n.productList)}};n.productList.addEventListener("click",pt);new M({select:"#abcField",settings:{showSearch:!1}});let Q=[];const gt=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],ht=async()=>{Q=[...await tt(),"Show_all"];const e=at(Q);n.categoryField.insertAdjacentHTML("beforeend",e),n.abcField.innerHTML=ot(gt),new M({select:"#categoryField",settings:{placeholderText:"Categories",showSearch:!1}})},mt=async t=>{const e=t.target.value,s=c(a.LOCAL_QUERY_KEY);s.page="1",e==="Show_all"?s.category=null:s.category=e,d(a.LOCAL_QUERY_KEY,s);const o=c(a.LOCAL_SORT),r=c(a.LOCAL_QUERY_KEY);let i=P(a.BASE_URL,r);i=O(i,o);const l=await k(i);j(l)},yt=async t=>{t.preventDefault();const e=n.searchField.value,s=c(a.LOCAL_QUERY_KEY);s.page="1",e?s.keyword=e:s.keyword=null,d(a.LOCAL_QUERY_KEY,s);const o=c(a.LOCAL_SORT),r=c(a.LOCAL_QUERY_KEY);let i=P(a.BASE_URL,r);i=O(i,o);const l=await k(i);j(l)},P=(t,e)=>{let s=`${t}/products?page=${e.page}&limit=${e.limit}`;return e.keyword&&(s+=`&keyword=${e.keyword}`),e.category&&e.category!=="all"&&(s+=`&category=${vt(e.category)}`),s},vt=t=>{switch(t){case"Meat_&_Seafood":return"Meat_%26_Seafood";case"Breads_&_Bakery":return"Breads_%26_Bakery";default:return t}},O=(t,e)=>{if(e&&e!=="all")switch(e){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}return t},bt=async t=>{const e=t.target.value;d(a.LOCAL_SORT,e);const s=c(a.LOCAL_SORT),o=c(a.LOCAL_QUERY_KEY);let r=P(a.BASE_URL,o);r=O(r,s);const i=await k(r);j(i)};async function k(t){try{return(await y({url:`${t}`,method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(e){return console.error("Error:",e),e}}const j=async t=>{if(!t.results.length){N(n.productList);return}d(a.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages}),n.productList.innerHTML=S(t.results),H()},ft=t=>{if(t.target.value===""){const e=c(a.LOCAL_QUERY_KEY);e.page="1",e.keyword=null,d(a.LOCAL_QUERY_KEY,e);const s=c(a.LOCAL_QUERY_KEY);h(s)}};n.form.addEventListener("submit",yt);n.categoryField.addEventListener("change",mt);n.abcField.addEventListener("change",bt);n.searchField.addEventListener("input",ft);const Lt=async()=>{const t=await Z();if(!t.length){notFoundMarkup(n.popularProductList);return}const e=A(t),s=rt(e);n.popularProductList.insertAdjacentHTML("beforeend",s)},_t=t=>{if(t.preventDefault(),t.target.closest(".js-cart")){st(t);return}Y(t,n.popularProductList)};n.popularProductList.addEventListener("click",_t);const Et=t=>{const e=[],s=[];for(;e.length<a.NUMBER_OF_DISCOUNT;){const o=Math.floor(Math.random()*t.length);s.includes(o)||(s.push(o),e.push(t[o]))}return e},wt=async()=>{const t=await X(),e=Et(t),s=A(e),o=ct(s);n.dicsProd.innerHTML=o},Ct=t=>{if(t.preventDefault(),t.target.closest(".js-cart")){B(t);return}Y(t,n.discProdList)};n.discProdList.addEventListener("click",Ct);const K=(t,e)=>{const s=r=>{r.code==="Escape"&&o.close()},o=F.create(e,{onShow:r=>{t.addEventListener("keydown",s),r.element().querySelector(".js-modal-close").onclick=()=>r.close()},onClose:r=>{t.removeEventListener("keydown",s)}});o.show()},$t=()=>{n.emailForm.addEventListener("submit",St)},St=t=>{t.preventDefault();const e=n.emailInput.value.trim();e&&(At(e),n.emailForm.reset())};async function At(t){const e=await et(t);switch(e){case 201:K(n.emailForm,lt);break;case 409:K(n.emailForm,dt);break}return e}const G=window.matchMedia("(min-width: 768px)"),J=window.matchMedia("(min-width: 1440px)"),V=window.matchMedia("(max-width: 767.9px)"),Yt=window.matchMedia("(max-width: 1439.9px)"),Pt=window.matchMedia("(min-width: 768px) and (max-width: 1439.9px)");d(a.LOCAL_QUERY_KEY,a.INIT_QUERY);const v=c(a.LOCAL_QUERY_KEY)??[];L();ht();if(J.matches&&Object.keys(v).length){const t=c(a.LOCAL_QUERY_KEY)??[];t.limit=9,d(a.LOCAL_QUERY_KEY,t),h(t)}if(Pt.matches&&Object.keys(v).length){const t=c(a.LOCAL_QUERY_KEY)??[];t.limit=8,d(a.LOCAL_QUERY_KEY,t),h(t)}if(V.matches&&Object.keys(v).length){const t=c(a.LOCAL_QUERY_KEY)??[];t.limit=6,d(a.LOCAL_QUERY_KEY,t),h(t)}D(G);Lt();wt();$t();G.addListener(t=>{if(t.matches&&Object.keys(v).length){const e=c(a.LOCAL_QUERY_KEY)??[];e.limit=8,d(a.LOCAL_QUERY_KEY,e),h(e)}});J.addListener(t=>{if(t.matches&&Object.keys(v).length){const e=c(a.LOCAL_QUERY_KEY)??[];e.limit=9,d(a.LOCAL_QUERY_KEY,e),h(e)}});Yt.addListener(t=>{if(t.matches&&Object.keys(v).length){const e=c(a.LOCAL_QUERY_KEY)??[];e.limit=8,d(a.LOCAL_QUERY_KEY,e),h(e)}});V.addListener(t=>{if(t.matches&&Object.keys(v).length){const e=c(a.LOCAL_QUERY_KEY)??[];e.limit=6,d(a.LOCAL_QUERY_KEY,e),h(e)}});
//# sourceMappingURL=commonHelpers2.js.map
