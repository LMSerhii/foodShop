import{l as o,c as s,g as w,s as d,b as p,d as c,e as M,r as J,m as G,f as V,h as Z,i as W,j as X,o as Q,k as tt,n as et}from"./assets/api_service-90f6c88c.js";import{i as $,P as U,b as at,S as x,a as st,v as rt}from"./assets/vendor-f213eb09.js";const f=()=>{const t=document.querySelector("#product-count-header"),e=o(s.LOCAL_CART_KEY)??[];t.innerHTML=`(${e.length})`},L=o(s.LOCAL_CART_KEY)??[],F=async t=>{const{id:e}=t.target.closest(".js-card").dataset,a=await w(e);L.some(({_id:i})=>i===a._id)||(L.push(a),d(s.LOCAL_CART_KEY,L),t.target.closest(".js-cart").innerHTML=`<button class="card-btn" type="button">
                    <svg class="card-btn-icon-check" width="18" height="18">
                        <use href="${p}#check"></use>
                    </svg>
                </button>`,f(),$.success({title:"OK",message:"Added to cart!"}))},ot=async t=>{const{id:e}=t.target.closest(".js-card").dataset,a=await w(e);L.some(({_id:i})=>i===a._id)||(L.push(a),d(s.LOCAL_CART_KEY,L),t.target.closest(".js-cart").innerHTML=`<button class="popular-btn-check" type="button">
                    <svg class="popular-icon-check" width="18" height="18">
                      <use href="${p}#check"></use>
                    </svg>
                </button>`,f(),$.success({title:"OK",message:"Added to cart!"}))},A=t=>{if(t.length)return t.map(({_id:e,name:a,img:r,category:i,price:n,size:l,is10PercentOff:u,popularity:m,isChecked:_})=>u?_?`<li class="card js-card" data-id=${e}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${r}" alt="${a}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${a}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${i.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${l}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${m}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${n}</p>
  
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
                  <li class="card-prodcuts-item">Category: <span>${i.replace("_"," ")}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${l}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${m}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${n}</p>
  
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
                    <span>${i.replace("_"," ")}</span>
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
              <p class="card-producs-price">$${n}</p>
  
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
                    <span>${i.replace("_"," ")}</span>
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
              <p class="card-producs-price">$${n}</p>
  
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
                            `,c.paginationContainer.style.display="none"},ct=t=>t.length?t.map(e=>`<option value="${e}">${e.replace("_"," ").replace("_"," ")}</option>`).join(""):'<option value="not_found_categories">Not found categories</option>',nt=t=>t.map(e=>`<option value="${e.value}">${e.label}</option>`).join(""),it=t=>{if(!t.length){console.log("Sorry not data");return}return t.map(({_id:e,name:a,img:r,category:i,size:n,popularity:l,isChecked:u})=>u?`<li class="popular-card js-card" data-id=${e}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${r}" alt="${a}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${a}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${i.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${n}</span></li>
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
                <span>${i.replace("_"," ")}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${n}</span></li>
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
    </li>`).join("")},lt=t=>t.map(({img:e,name:a,price:r,_id:i,is10PercentOff:n,isChecked:l})=>n?l?`
          <li class="discount-product-element js-card" data-id=${i}>
  
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
          <li class="discount-product-element js-card" data-id=${i}>
  
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
      `).join("");let v;const dt=window.matchMedia("(min-width: 768px)"),I=t=>{t.matches?(v=4,K()):(v=2,K())};dt.addEventListener("change",I);function K(){const t=o(s.PAGES).page,e=o(s.PAGES).perPage,a=o(s.PAGES).totalPages;new U(c.paginationContainer,{page:t,totalItems:e*a,itemsPerPage:e,visiblePages:v,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(n){const l=JSON.parse(localStorage.getItem("pages"));l.page=n.page,localStorage.setItem("pages",JSON.stringify(l));const u=JSON.parse(localStorage.getItem("pages")),m=o(s.LOCAL_QUERY_KEY);m.page=u.page,d(s.LOCAL_QUERY_KEY,m);const _=o(s.LOCAL_QUERY_KEY);D(_)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?c.paginationContainer.style.display="none":c.paginationContainer.style.display="block"}function N(){new U(c.paginationContainer,{page:s.INIT_QUERY.page,totalItems:o("pages").perPage*o("pages").totalPages,itemsPerPage:o("pages").perPage,visiblePages:v,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(a){const r=JSON.parse(localStorage.getItem("pages"));r.page=a.page,localStorage.setItem("pages",JSON.stringify(r));const i=JSON.parse(localStorage.getItem("pages")),n=o(s.LOCAL_QUERY_KEY);n.page=i.page,d(s.LOCAL_QUERY_KEY,n);const l=o(s.LOCAL_QUERY_KEY);D(l)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?c.paginationContainer.style.display="none":c.paginationContainer.style.display="block"}async function D(t){const e=await M(t);if(!e.results.length){notFoundMarkup(c.productList);return}c.productList.innerHTML=A(e.results)}const Y=t=>{const e=o(s.LOCAL_CART_KEY)??[];return t.map(r=>e.some(({_id:n})=>n===r._id)?(r.isChecked=!0,r):(r.isChecked=!1,r))},O=async(t,e)=>{const{id:a}=t.target.closest(".js-card").dataset,r=await w(a),i=G(r),n=at.create(i,{onShow:u=>{e.addEventListener("keydown",l),u.element().querySelector(".js-modal-close").onclick=()=>{u.close();const g=o(s.LOCAL_QUERY_KEY)??[];h(g)},(o(s.LOCAL_CART_KEY)??[]).some(({_id:g})=>g===a)?(u.element().querySelector(".js-to-cart").style.display="none",u.element().querySelector(".js-from-cart").style.display="flex"):(u.element().querySelector(".js-to-cart").style.display="flex",u.element().querySelector(".js-from-cart").style.display="none");const b=u.element().querySelector(".js-to-cart"),E=u.element().querySelector(".js-from-cart");b.addEventListener("click",()=>{const g=o(s.LOCAL_CART_KEY)??[];g.some(({_id:C})=>C===a)||(g.push(r),d(s.LOCAL_CART_KEY,g),f(),b.style.display="none",E.style.display="flex")}),E.addEventListener("click",()=>{const g=o(s.LOCAL_CART_KEY)??[],j=g.findIndex(({_id:C})=>C===a);g.splice(j,1),J(s.LOCAL_CART_KEY),d(s.LOCAL_CART_KEY,g),f(),E.style.display="none",b.style.display="flex"})},onClose:u=>{e.removeEventListener("keydown",l)}});function l(u){u.code==="Escape"&&n.close()}n.show()},h=async t=>{c.productList.innerHTML='<div class="loader-box"><span class="loader"></span></div>';const e=await M(t);if(!e.results.length){q(c.productList);return}d(s.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages});const a=Y(e.results);c.productList.innerHTML=A(a),N()},ut=t=>{if(t.preventDefault(),t.currentTarget!==t.target){if(t.target.closest(".js-cart")){F(t);return}O(t,c.productList)}};c.productList.addEventListener("click",ut);new x({select:"#abcField",settings:{showSearch:!1}});let T=[];const pt=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],gt=async()=>{T=[...await V(),"Show_all"];const e=ct(T);c.categoryField.insertAdjacentHTML("beforeend",e),c.abcField.innerHTML=nt(pt),new x({select:"#categoryField",settings:{placeholderText:"Categories",showSearch:!1}})};window.addEventListener("load",()=>{let t=document.querySelector(".mask");t&&setTimeout(()=>{t.style.opacity="1"},600);const e=document.querySelector(".loaderr");e&&setTimeout(()=>{e.parentNode.removeChild(e)},300)});const ht=async t=>{const e=t.target.value,a=o(s.LOCAL_QUERY_KEY);a.page="1",e==="Show_all"?a.category=null:a.category=e,d(s.LOCAL_QUERY_KEY,a);const r=o(s.LOCAL_SORT),i=o(s.LOCAL_QUERY_KEY);let n=S(s.BASE_URL,i);n=P(n,r);const l=await k(n);R(l)},mt=async t=>{t.preventDefault();const e=c.searchField.value,a=o(s.LOCAL_QUERY_KEY);a.page="1",e?a.keyword=e:a.keyword=null,d(s.LOCAL_QUERY_KEY,a);const r=o(s.LOCAL_SORT),i=o(s.LOCAL_QUERY_KEY);let n=S(s.BASE_URL,i);n=P(n,r);const l=await k(n);R(l)},S=(t,e)=>{let a=`${t}/products?page=${e.page}&limit=${e.limit}`;return e.keyword&&(a+=`&keyword=${e.keyword}`),e.category&&e.category!=="all"&&(a+=`&category=${yt(e.category)}`),a},yt=t=>{switch(t){case"Meat_&_Seafood":return"Meat_%26_Seafood";case"Breads_&_Bakery":return"Breads_%26_Bakery";default:return t}},P=(t,e)=>{if(e&&e!=="all")switch(e){case"alphabetical":t+="&byABC=true";break;case"reverse-alphabetical":t+="&byABC=false";break;case"cheap":t+="&byPrice=true";break;case"expensive":t+="&byPrice=false";break;case"popular":t+="&byPopularity=false";break;case"not-popular":t+="&byPopularity=true";break}return t},Lt=async t=>{const e=t.target.value;d(s.LOCAL_SORT,e);const a=o(s.LOCAL_SORT),r=o(s.LOCAL_QUERY_KEY);let i=S(s.BASE_URL,r);i=P(i,a);const n=await k(i);R(n)};async function k(t){try{return(await st({url:`${t}`,method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(e){return console.error("Error:",e),e}}const R=async t=>{if(!t.results.length){q(c.productList);return}d(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages}),c.productList.innerHTML=A(t.results),N()},_t=t=>{if(t.target.value===""){const e=o(s.LOCAL_QUERY_KEY);e.page="1",e.keyword=null,d(s.LOCAL_QUERY_KEY,e);const a=o(s.LOCAL_QUERY_KEY);h(a)}};c.form.addEventListener("submit",mt);c.categoryField.addEventListener("change",ht);c.abcField.addEventListener("change",Lt);c.searchField.addEventListener("input",_t);const ft=async()=>{const t=await Z();if(!t.length){notFoundMarkup(c.popularProductList);return}const e=Y(t),a=it(e);c.popularProductList.insertAdjacentHTML("beforeend",a)},vt=t=>{if(t.preventDefault(),t.target.closest(".js-cart")){ot(t);return}O(t,c.popularProductList)};c.popularProductList.addEventListener("click",vt);const bt=t=>{const e=[],a=[];for(;e.length<s.NUMBER_OF_DISCOUNT;){const r=Math.floor(Math.random()*t.length);a.includes(r)||(a.push(r),e.push(t[r]))}return e},Et=async()=>{const t=await W(),e=bt(t),a=Y(e),r=lt(a);c.dicsProd.innerHTML=r},Ct=t=>{if(t.preventDefault(),t.target.closest(".js-cart")){F(t);return}O(t,c.discProdList)};c.discProdList.addEventListener("click",Ct);const wt=()=>{c.emailForm.addEventListener("submit",$t)},$t=t=>{t.preventDefault();const e=c.emailInput.value.trim();if(!rt(e)){$.warning({title:"Caution",message:"Check your email address"});return}At(e),c.emailForm.reset()};async function At(t){const e=await X(t);switch(e){case 201:Q(c.emailForm,et);break;case 409:Q(c.emailForm,tt);break}return e}const B=window.matchMedia("(min-width: 768px)"),H=window.matchMedia("(min-width: 1440px)"),z=window.matchMedia("(max-width: 767.9px)"),Yt=window.matchMedia("(max-width: 1439.9px)"),Ot=window.matchMedia("(min-width: 768px) and (max-width: 1439.9px)");d(s.LOCAL_QUERY_KEY,s.INIT_QUERY);const y=o(s.LOCAL_QUERY_KEY)??[];f();gt();if(H.matches&&Object.keys(y).length){const t=o(s.LOCAL_QUERY_KEY)??[];t.limit=9,d(s.LOCAL_QUERY_KEY,t),h(t)}if(Ot.matches&&Object.keys(y).length){const t=o(s.LOCAL_QUERY_KEY)??[];t.limit=8,d(s.LOCAL_QUERY_KEY,t),h(t)}if(z.matches&&Object.keys(y).length){const t=o(s.LOCAL_QUERY_KEY)??[];t.limit=6,d(s.LOCAL_QUERY_KEY,t),h(t)}I(B);ft();Et();wt();B.addListener(t=>{if(t.matches&&Object.keys(y).length){const e=o(s.LOCAL_QUERY_KEY)??[];e.limit=8,d(s.LOCAL_QUERY_KEY,e),h(e)}});H.addListener(t=>{if(t.matches&&Object.keys(y).length){const e=o(s.LOCAL_QUERY_KEY)??[];e.limit=9,d(s.LOCAL_QUERY_KEY,e),h(e)}});Yt.addListener(t=>{if(t.matches&&Object.keys(y).length){const e=o(s.LOCAL_QUERY_KEY)??[];e.limit=8,d(s.LOCAL_QUERY_KEY,e),h(e)}});z.addListener(t=>{if(t.matches&&Object.keys(y).length){const e=o(s.LOCAL_QUERY_KEY)??[];e.limit=6,d(s.LOCAL_QUERY_KEY,e),h(e)}});
//# sourceMappingURL=commonHelpers2.js.map
