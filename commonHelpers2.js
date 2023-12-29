import{l as c,c as s,g as A,s as l,b as p,h as _,d as o,e as Y,r as H,m as J,f as G,i as V,j as Z,k as W}from"./assets/header-11d45d43.js";import{i as x,P as M,b as X,S as F,a as tt}from"./assets/vendor-f213eb09.js";const m=c(s.LOCAL_CART_KEY)??[],I=async t=>{const{id:e}=t.target.closest(".js-card").dataset,a=await A(e);m.some(({_id:n})=>n===a._id)||(m.push(a),l(s.LOCAL_CART_KEY,m),t.target.closest(".js-cart").innerHTML=`<button class="card-btn" type="button">
                    <svg class="card-btn-icon-check" width="18" height="18">
                        <use href="${p}#check"></use>
                    </svg>
                </button>`,_(),x.success({title:"OK",message:"Added to cart!"}))},et=async t=>{const{id:e}=t.target.closest(".js-card").dataset,a=await A(e);m.some(({_id:n})=>n===a._id)||(m.push(a),l(s.LOCAL_CART_KEY,m),t.target.closest(".js-cart").innerHTML=`<button class="popular-btn-check" type="button">
                    <svg class="popular-icon-check" width="18" height="18">
                      <use href="${p}#check"></use>
                    </svg>
                </button>`,_(),x.success({title:"OK",message:"Added to cart!"}))},P=t=>{if(t.length)return t.map(({_id:e,name:a,img:r,category:n,price:i,size:d,is10PercentOff:u,popularity:h,isChecked:L})=>u?L?`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${a}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${a}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${n.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${d}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${h}</span></li>
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
                  <img src="${r}" alt="${a}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${a}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${n.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${d}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${h}</span></li>
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
        </li>`:L?`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${a}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${a}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${n.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${d}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${h}</span>
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
                  <img src="${r}" alt="${a}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${a}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${n.replace("_"," ")}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${d}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${h}</span>
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
        </li>`).join("")},q=t=>{t.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span class="notFound_title_span">filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `,o.paginationContainer.style.display="none"},at=t=>t.length?t.map(e=>`<option value="${e}">${e.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',st=t=>t.map(e=>`<option value="${e.value}">${e.label}</option>`).join(""),rt=t=>{if(t.length)return t.map(({_id:e,name:a,img:r,category:n,size:i,popularity:d,isChecked:u})=>u?`<li class="popular-card js-card" data-id=${e}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${r}" alt="${a}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${a}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${n.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${i}</span></li>
                <li class="popular-info-style">Popularity: <span>${d}</span></li>
                </div>
            </ul>
                                </div>
          </div>

        <div class="popular-card-bottom">
          
          <button class="popular-btn-check js-cart" type="button">
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
                <img src="${r}" alt="${a}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${a}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${n.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${i}</span></li>
                <li class="popular-info-style">Popularity: <span>${d}</span></li>
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
    </li>`).join("")},ct=t=>t.map(({img:e,name:a,price:r,_id:n,is10PercentOff:i,isChecked:d})=>i?d?`
          <li class="discount-product-element js-card" data-id=${n}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${p}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${e}" alt="${a}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${a}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${r}</p>
  
            <button class="card-btn js-cart" type="button">
            <svg class="card-btn-icon-check" width="18" height="18">
                <use href="${p}#check"></use>
            </svg>

        </button>
          </div>
  
          </div>
          
          </li>`:`
          <li class="discount-product-element js-card" data-id=${n}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${p}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${e}" alt="${a}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${a}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${r}</p>
  
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
      `).join("");let v;const ot=window.matchMedia("(min-width: 768px)"),w=t=>{t.matches?(v=4,T()):(v=2,T())};ot.addEventListener("change",w);function T(){const t=c(s.PAGES).page,e=c(s.PAGES).perPage,a=c(s.PAGES).totalPages;new M(o.paginationContainer,{page:t,totalItems:e*a,itemsPerPage:e,visiblePages:v,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(i){const d=JSON.parse(localStorage.getItem("pages"));d.page=i.page,localStorage.setItem("pages",JSON.stringify(d));const u=JSON.parse(localStorage.getItem("pages")),h=c(s.LOCAL_QUERY_KEY);h.page=u.page,l(s.LOCAL_QUERY_KEY,h);const L=c(s.LOCAL_QUERY_KEY);D(L)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?o.paginationContainer.style.display="none":o.paginationContainer.style.display="block"}function N(){new M(o.paginationContainer,{page:s.INIT_QUERY.page,totalItems:c("pages").perPage*c("pages").totalPages,itemsPerPage:c("pages").perPage,visiblePages:v,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(a){const r=JSON.parse(localStorage.getItem("pages"));r.page=a.page,localStorage.setItem("pages",JSON.stringify(r));const n=JSON.parse(localStorage.getItem("pages")),i=c(s.LOCAL_QUERY_KEY);i.page=n.page,l(s.LOCAL_QUERY_KEY,i);const d=c(s.LOCAL_QUERY_KEY);D(d)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?o.paginationContainer.style.display="none":o.paginationContainer.style.display="block"}async function D(t){const e=await Y(t);if(!e.results.length){notFoundMarkup(o.productList);return}o.productList.innerHTML=P(e.results)}const O=t=>{const e=c(s.LOCAL_CART_KEY)??[];return t.map(r=>e.some(({_id:i})=>i===r._id)?(r.isChecked=!0,r):(r.isChecked=!1,r))},S=async(t,e)=>{const{id:a}=t.target.closest(".js-card").dataset,r=await A(a),n=J(r),i=X.create(n,{onShow:u=>{e.addEventListener("keydown",d),u.element().querySelector(".js-modal-close").onclick=()=>{u.close()},(c(s.LOCAL_CART_KEY)??[]).some(({_id:g})=>g===a)?(u.element().querySelector(".js-to-cart").style.display="none",u.element().querySelector(".js-from-cart").style.display="flex"):(u.element().querySelector(".js-to-cart").style.display="flex",u.element().querySelector(".js-from-cart").style.display="none");const b=u.element().querySelector(".js-to-cart"),E=u.element().querySelector(".js-from-cart");b.addEventListener("click",()=>{const g=c(s.LOCAL_CART_KEY)??[];g.some(({_id:C})=>C===a)||(g.push(r),l(s.LOCAL_CART_KEY,g),_(),b.style.display="none",E.style.display="flex")}),E.addEventListener("click",()=>{const g=c(s.LOCAL_CART_KEY)??[],K=g.findIndex(({_id:C})=>C===a);g.splice(K,1),H(s.LOCAL_CART_KEY),l(s.LOCAL_CART_KEY,g),_(),E.style.display="none",b.style.display="flex"})},onClose:u=>{e.removeEventListener("keydown",d)}});function d(u){u.code==="Escape"&&i.close()}i.show()},y=async t=>{o.productList.innerHTML='<div class="loader-box"><span class="loader"></span></div>';const e=await Y(t);if(!e.results.length){q(o.productList);return}l(s.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages});const a=O(e.results);o.productList.innerHTML=P(a),N()},it=t=>{if(t.preventDefault(),t.currentTarget!==t.target){if(t.target.closest(".js-cart")){I(t);return}S(t,o.productList)}};o.productList.addEventListener("click",it);new F({select:"#abcField",settings:{showSearch:!1}});let U=[];const nt=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],lt=async()=>{document.getElementById("loader").style.display="block";const t=await G();document.getElementById("loader").style.display="none",U=[...t,"Show_all"];const e=at(U);o.categoryField.insertAdjacentHTML("beforeend",e),o.abcField.innerHTML=st(nt),document.getElementById("filtersForm").classList.remove("hidden"),new F({select:"#categoryField",settings:{placeholderText:"Categories",showSearch:!1}})};window.addEventListener("load",()=>{let t=document.querySelector(".mask");t&&setTimeout(()=>{t.style.opacity="1"},600);const e=document.querySelector(".loaderr");e&&setTimeout(()=>{e.parentNode.removeChild(e)},300)});const dt=async t=>{const e=t.target.value,a=c(s.LOCAL_QUERY_KEY);a.page="1",e==="Show_all"?a.category=null:a.category=e,l(s.LOCAL_QUERY_KEY,a);const r=c(s.LOCAL_SORT),n=c(s.LOCAL_QUERY_KEY);let i=k(s.BASE_URL,n);i=R(i,r);const d=await j(i);Q(d)},ut=async t=>{t.preventDefault();const e=o.searchField.value,a=c(s.LOCAL_QUERY_KEY);a.page="1",e?a.keyword=e:a.keyword=null,l(s.LOCAL_QUERY_KEY,a);const r=c(s.LOCAL_SORT),n=c(s.LOCAL_QUERY_KEY);let i=k(s.BASE_URL,n);i=R(i,r);const d=await j(i);Q(d)},k=(t,e)=>{let a=`${t}/products?page=${e.page}&limit=${e.limit}`;return e.keyword&&(a+=`&keyword=${e.keyword}`),e.category&&e.category!=="all"&&(a+=`&category=${pt(e.category)}`),a},pt=t=>{switch(t){case"Meat_&_Seafood":return"Meat_%26_Seafood";case"Breads_&_Bakery":return"Breads_%26_Bakery";default:return t}},R=(t,e)=>{if(e&&e!=="all")switch(e){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}return t},gt=async t=>{const e=t.target.value;l(s.LOCAL_SORT,e);const a=c(s.LOCAL_SORT),r=c(s.LOCAL_QUERY_KEY);let n=k(s.BASE_URL,r);n=R(n,a);const i=await j(n);Q(i)};async function j(t){try{return(await tt({url:`${t}`,method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(e){return console.error("Error:",e),e}}const Q=async t=>{if(!t.results.length){q(o.productList);return}l(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages}),o.productList.innerHTML=P(t.results),N()},ht=t=>{if(t.target.value===""){const e=c(s.LOCAL_QUERY_KEY);e.page="1",e.keyword=null,l(s.LOCAL_QUERY_KEY,e);const a=c(s.LOCAL_QUERY_KEY);y(a)}};o.form.addEventListener("submit",ut);o.categoryField.addEventListener("change",dt);o.abcField.addEventListener("change",gt);o.searchField.addEventListener("input",ht);const yt=async()=>{const t=await V();if(!t.length){notFoundMarkup(o.popularProductList);return}const e=O(t),a=rt(e);o.popularProductList.insertAdjacentHTML("beforeend",a)},mt=t=>{if(t.preventDefault(),t.target.closest(".js-cart")){et(t);return}S(t,o.popularProductList)};o.popularProductList.addEventListener("click",mt);const Lt=t=>{const e=[],a=[];for(;e.length<s.NUMBER_OF_DISCOUNT;){const r=Math.floor(Math.random()*t.length);a.includes(r)||(a.push(r),e.push(t[r]))}return e},_t=async()=>{const t=await Z(),e=Lt(t),a=O(e),r=ct(a);o.dicsProd.innerHTML=r},ft=t=>{if(t.preventDefault(),t.target.closest(".js-cart")){I(t);return}S(t,o.discProdList)};o.discProdList.addEventListener("click",ft);const $=window.matchMedia("(min-width: 768px)"),B=window.matchMedia("(min-width: 1440px)"),z=window.matchMedia("(max-width: 767.9px)"),vt=window.matchMedia("(max-width: 1439.9px)"),bt=window.matchMedia("(min-width: 768px) and (max-width: 1439.9px)"),f=c(s.LOCAL_QUERY_KEY)??[];async function Et(){if(Array.isArray(f)){l(s.LOCAL_QUERY_KEY,s.INIT_QUERY);const t=await Y();l(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages}),w($)}else{const t=c(s.LOCAL_QUERY_KEY);l(s.LOCAL_QUERY_KEY,t),o.searchField.value=t.keyword,o.categoryField.value=t.category,w($)}}Et();_();lt();if(B.matches){const t=c(s.LOCAL_QUERY_KEY)??[];Object.keys(t).length&&(t.limit=9,l(s.LOCAL_QUERY_KEY,t),y(t))}if(bt.matches){const t=c(s.LOCAL_QUERY_KEY)??[];Object.keys(t).length&&(t.limit=8,l(s.LOCAL_QUERY_KEY,t),y(t))}if(z.matches){const t=c(s.LOCAL_QUERY_KEY)??[];Object.keys(t).length&&(t.limit=6,l(s.LOCAL_QUERY_KEY,t),y(t))}yt();_t();W();$.addListener(t=>{if(t.matches&&Object.keys(f).length){const e=c(s.LOCAL_QUERY_KEY)??[];e.limit=8,l(s.LOCAL_QUERY_KEY,e),y(e)}});B.addListener(t=>{if(t.matches&&Object.keys(f).length){const e=c(s.LOCAL_QUERY_KEY)??[];e.limit=9,l(s.LOCAL_QUERY_KEY,e),y(e)}});vt.addListener(t=>{if(t.matches&&Object.keys(f).length){const e=c(s.LOCAL_QUERY_KEY)??[];e.limit=8,l(s.LOCAL_QUERY_KEY,e),y(e)}});z.addListener(t=>{if(t.matches&&Object.keys(f).length){const e=c(s.LOCAL_QUERY_KEY)??[];e.limit=6,l(s.LOCAL_QUERY_KEY,e),y(e)}});
//# sourceMappingURL=commonHelpers2.js.map
