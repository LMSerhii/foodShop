import{l as o,c as s,g as w,s as d,b as p,h as f,d as c,e as K,r as H,m as J,f as G,i as V,j as Z,k as W}from"./assets/header-559f1abd.js";import{i as T,P as x,b as X,S as M,a as tt}from"./assets/vendor-f213eb09.js";const L=o(s.LOCAL_CART_KEY)??[],U=async t=>{const{id:e}=t.target.closest(".js-card").dataset,a=await w(e);L.some(({_id:n})=>n===a._id)||(L.push(a),d(s.LOCAL_CART_KEY,L),t.target.closest(".js-cart").innerHTML=`<button class="card-btn" type="button">
                    <svg class="card-btn-icon-check" width="18" height="18">
                        <use href="${p}#check"></use>
                    </svg>
                </button>`,f(),T.success({title:"OK",message:"Added to cart!"}))},et=async t=>{const{id:e}=t.target.closest(".js-card").dataset,a=await w(e);L.some(({_id:n})=>n===a._id)||(L.push(a),d(s.LOCAL_CART_KEY,L),t.target.closest(".js-cart").innerHTML=`<button class="popular-btn-check" type="button">
                    <svg class="popular-icon-check" width="18" height="18">
                      <use href="${p}#check"></use>
                    </svg>
                </button>`,f(),T.success({title:"OK",message:"Added to cart!"}))},$=t=>{if(t.length)return t.map(({_id:e,name:a,img:r,category:n,price:i,size:l,is10PercentOff:u,popularity:h,isChecked:_})=>u?_?`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${a}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${a}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${n.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${l}</span></li>
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
                  <li class="card-prodcuts-item">Size: <span>${l}</span></li>
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
        </li>`:_?`<li class="card js-card" data-id=${e}>
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
                    <span>${l}</span>
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
                    <span>${l}</span>
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
        </li>`).join("")},F=t=>{t.innerHTML=`<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span class="notFound_title_span">filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `,c.paginationContainer.style.display="none"},at=t=>t.length?t.map(e=>`<option value="${e}">${e.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',st=t=>t.map(e=>`<option value="${e.value}">${e.label}</option>`).join(""),rt=t=>{if(!t.length){console.log("Sorry not data");return}return t.map(({_id:e,name:a,img:r,category:n,size:i,popularity:l,isChecked:u})=>u?`<li class="popular-card js-card" data-id=${e}>
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
                <img src="${r}" alt="${a}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${a}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${n.replace("_"," ")}</span></li>
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
    </li>`).join("")},ot=t=>t.map(({img:e,name:a,price:r,_id:n,is10PercentOff:i,isChecked:l})=>i?l?`
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
      `).join("");let v;const ct=window.matchMedia("(min-width: 768px)"),I=t=>{t.matches?(v=4,j()):(v=2,j())};ct.addEventListener("change",I);function j(){const t=o(s.PAGES).page,e=o(s.PAGES).perPage,a=o(s.PAGES).totalPages;new x(c.paginationContainer,{page:t,totalItems:e*a,itemsPerPage:e,visiblePages:v,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(i){const l=JSON.parse(localStorage.getItem("pages"));l.page=i.page,localStorage.setItem("pages",JSON.stringify(l));const u=JSON.parse(localStorage.getItem("pages")),h=o(s.LOCAL_QUERY_KEY);h.page=u.page,d(s.LOCAL_QUERY_KEY,h);const _=o(s.LOCAL_QUERY_KEY);N(_)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?c.paginationContainer.style.display="none":c.paginationContainer.style.display="block"}function q(){new x(c.paginationContainer,{page:s.INIT_QUERY.page,totalItems:o("pages").perPage*o("pages").totalPages,itemsPerPage:o("pages").perPage,visiblePages:v,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(a){const r=JSON.parse(localStorage.getItem("pages"));r.page=a.page,localStorage.setItem("pages",JSON.stringify(r));const n=JSON.parse(localStorage.getItem("pages")),i=o(s.LOCAL_QUERY_KEY);i.page=n.page,d(s.LOCAL_QUERY_KEY,i);const l=o(s.LOCAL_QUERY_KEY);N(l)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?c.paginationContainer.style.display="none":c.paginationContainer.style.display="block"}async function N(t){const e=await K(t);if(!e.results.length){notFoundMarkup(c.productList);return}c.productList.innerHTML=$(e.results)}const A=t=>{const e=o(s.LOCAL_CART_KEY)??[];return t.map(r=>e.some(({_id:i})=>i===r._id)?(r.isChecked=!0,r):(r.isChecked=!1,r))},Y=async(t,e)=>{const{id:a}=t.target.closest(".js-card").dataset,r=await w(a),n=J(r),i=X.create(n,{onShow:u=>{e.addEventListener("keydown",l),u.element().querySelector(".js-modal-close").onclick=()=>{u.close()},(o(s.LOCAL_CART_KEY)??[]).some(({_id:g})=>g===a)?(u.element().querySelector(".js-to-cart").style.display="none",u.element().querySelector(".js-from-cart").style.display="flex"):(u.element().querySelector(".js-to-cart").style.display="flex",u.element().querySelector(".js-from-cart").style.display="none");const b=u.element().querySelector(".js-to-cart"),E=u.element().querySelector(".js-from-cart");b.addEventListener("click",()=>{const g=o(s.LOCAL_CART_KEY)??[];g.some(({_id:C})=>C===a)||(g.push(r),d(s.LOCAL_CART_KEY,g),f(),b.style.display="none",E.style.display="flex")}),E.addEventListener("click",()=>{const g=o(s.LOCAL_CART_KEY)??[],R=g.findIndex(({_id:C})=>C===a);g.splice(R,1),H(s.LOCAL_CART_KEY),d(s.LOCAL_CART_KEY,g),f(),E.style.display="none",b.style.display="flex"})},onClose:u=>{e.removeEventListener("keydown",l)}});function l(u){u.code==="Escape"&&i.close()}i.show()},m=async t=>{c.productList.innerHTML='<div class="loader-box"><span class="loader"></span></div>';const e=await K(t);if(!e.results.length){F(c.productList);return}d(s.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages});const a=A(e.results);c.productList.innerHTML=$(a),q()},it=t=>{if(t.preventDefault(),t.currentTarget!==t.target){if(t.target.closest(".js-cart")){U(t);return}Y(t,c.productList)}};c.productList.addEventListener("click",it);new M({select:"#abcField",settings:{showSearch:!1}});let Q=[];const nt=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],lt=async()=>{document.getElementById("loader").style.display="block";const t=await G();document.getElementById("loader").style.display="none",Q=[...t,"Show_all"];const e=at(Q);c.categoryField.insertAdjacentHTML("beforeend",e),c.abcField.innerHTML=st(nt),document.getElementById("filtersForm").classList.remove("hidden"),new M({select:"#categoryField",settings:{placeholderText:"Categories",showSearch:!1}})};window.addEventListener("load",()=>{let t=document.querySelector(".mask");t&&setTimeout(()=>{t.style.opacity="1"},600);const e=document.querySelector(".loaderr");e&&setTimeout(()=>{e.parentNode.removeChild(e)},300)});const dt=async t=>{const e=t.target.value,a=o(s.LOCAL_QUERY_KEY);a.page="1",e==="Show_all"?a.category=null:a.category=e,d(s.LOCAL_QUERY_KEY,a);const r=o(s.LOCAL_SORT),n=o(s.LOCAL_QUERY_KEY);let i=O(s.BASE_URL,n);i=P(i,r);const l=await S(i);k(l)},ut=async t=>{t.preventDefault();const e=c.searchField.value,a=o(s.LOCAL_QUERY_KEY);a.page="1",e?a.keyword=e:a.keyword=null,d(s.LOCAL_QUERY_KEY,a);const r=o(s.LOCAL_SORT),n=o(s.LOCAL_QUERY_KEY);let i=O(s.BASE_URL,n);i=P(i,r);const l=await S(i);k(l)},O=(t,e)=>{let a=`${t}/products?page=${e.page}&limit=${e.limit}`;return e.keyword&&(a+=`&keyword=${e.keyword}`),e.category&&e.category!=="all"&&(a+=`&category=${pt(e.category)}`),a},pt=t=>{switch(t){case"Meat_&_Seafood":return"Meat_%26_Seafood";case"Breads_&_Bakery":return"Breads_%26_Bakery";default:return t}},P=(t,e)=>{if(e&&e!=="all")switch(e){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}return t},gt=async t=>{const e=t.target.value;d(s.LOCAL_SORT,e);const a=o(s.LOCAL_SORT),r=o(s.LOCAL_QUERY_KEY);let n=O(s.BASE_URL,r);n=P(n,a);const i=await S(n);k(i)};async function S(t){try{return(await tt({url:`${t}`,method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(e){return console.error("Error:",e),e}}const k=async t=>{if(!t.results.length){F(c.productList);return}d(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages}),c.productList.innerHTML=$(t.results),q()},ht=t=>{if(t.target.value===""){const e=o(s.LOCAL_QUERY_KEY);e.page="1",e.keyword=null,d(s.LOCAL_QUERY_KEY,e);const a=o(s.LOCAL_QUERY_KEY);m(a)}};c.form.addEventListener("submit",ut);c.categoryField.addEventListener("change",dt);c.abcField.addEventListener("change",gt);c.searchField.addEventListener("input",ht);const mt=async()=>{const t=await V();if(!t.length){notFoundMarkup(c.popularProductList);return}const e=A(t),a=rt(e);c.popularProductList.insertAdjacentHTML("beforeend",a)},yt=t=>{if(t.preventDefault(),t.target.closest(".js-cart")){et(t);return}Y(t,c.popularProductList)};c.popularProductList.addEventListener("click",yt);const Lt=t=>{const e=[],a=[];for(;e.length<s.NUMBER_OF_DISCOUNT;){const r=Math.floor(Math.random()*t.length);a.includes(r)||(a.push(r),e.push(t[r]))}return e},_t=async()=>{const t=await Z(),e=Lt(t),a=A(e),r=ot(a);c.dicsProd.innerHTML=r},ft=t=>{if(t.preventDefault(),t.target.closest(".js-cart")){U(t);return}Y(t,c.discProdList)};c.discProdList.addEventListener("click",ft);const D=window.matchMedia("(min-width: 768px)"),B=window.matchMedia("(min-width: 1440px)"),z=window.matchMedia("(max-width: 767.9px)"),vt=window.matchMedia("(max-width: 1439.9px)"),bt=window.matchMedia("(min-width: 768px) and (max-width: 1439.9px)");d(s.LOCAL_QUERY_KEY,s.INIT_QUERY);const y=o(s.LOCAL_QUERY_KEY)??[];f();lt();if(B.matches&&Object.keys(y).length){const t=o(s.LOCAL_QUERY_KEY)??[];t.limit=9,d(s.LOCAL_QUERY_KEY,t),m(t)}if(bt.matches&&Object.keys(y).length){const t=o(s.LOCAL_QUERY_KEY)??[];t.limit=8,d(s.LOCAL_QUERY_KEY,t),m(t)}if(z.matches&&Object.keys(y).length){const t=o(s.LOCAL_QUERY_KEY)??[];t.limit=6,d(s.LOCAL_QUERY_KEY,t),m(t)}I(D);mt();_t();W();D.addListener(t=>{if(t.matches&&Object.keys(y).length){const e=o(s.LOCAL_QUERY_KEY)??[];e.limit=8,d(s.LOCAL_QUERY_KEY,e),m(e)}});B.addListener(t=>{if(t.matches&&Object.keys(y).length){const e=o(s.LOCAL_QUERY_KEY)??[];e.limit=9,d(s.LOCAL_QUERY_KEY,e),m(e)}});vt.addListener(t=>{if(t.matches&&Object.keys(y).length){const e=o(s.LOCAL_QUERY_KEY)??[];e.limit=8,d(s.LOCAL_QUERY_KEY,e),m(e)}});z.addListener(t=>{if(t.matches&&Object.keys(y).length){const e=o(s.LOCAL_QUERY_KEY)??[];e.limit=6,d(s.LOCAL_QUERY_KEY,e),m(e)}});
//# sourceMappingURL=commonHelpers2.js.map
