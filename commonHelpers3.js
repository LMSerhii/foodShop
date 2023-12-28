import{c as a,l as o,s as l,r as W}from"./assets/yellow_shopping_basket-bc064f0a.js";import{s as m,r,a as A,n as M,c as Z,b as X,d as ee,e as te}from"./assets/markupFunctions-d1addfc4.js";import{a as h,i as $,P as q,b as F,S as I}from"./assets/vendor-4cc552dc.js";async function B(e){try{return(await h({url:`${a.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:e})).data}catch(t){return t}}async function w(e){try{return(await h({url:`${a.BASE_URL}/products/${e}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){return t}}async function ae(e){try{let t=null;return e&&(t={limit:e}),(await h({url:`${a.BASE_URL}/products/popular`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(t){return t}}async function se(){try{return(await h({url:`${a.BASE_URL}/products/discount`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}async function oe(){try{return(await h({url:`${a.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}async function re(e){try{return(await h({url:`${a.BASE_URL}/subscription`,method:"POST",headers:{"Content-Type":"application/json"},data:{email:e}})).status}catch(t){return t.response.status}}const _=()=>{const e=document.querySelector("#product-count-header"),t=o(a.LOCAL_CART_KEY)??[];e.innerHTML=`(${t.length})`},L=o(a.LOCAL_CART_KEY)??[],N=async e=>{const{id:t}=e.target.closest(".js-card").dataset,s=await w(t);L.some(({_id:c})=>c===s._id)||(L.push(s),l(a.LOCAL_CART_KEY,L),e.target.closest(".js-cart").innerHTML=`<button class="card-btn" type="button">
                    <svg class="card-btn-icon-check" width="18" height="18">
                        <use href="${m}#check"></use>
                    </svg>
                </button>`,_(),$.success({title:"OK",message:"Added to cart!"}))},ne=async e=>{const{id:t}=e.target.closest(".js-card").dataset,s=await w(t);L.some(({_id:c})=>c===s._id)||(L.push(s),l(a.LOCAL_CART_KEY,L),e.target.closest(".js-cart").innerHTML=`<button class="popular-btn-check" type="button">
                    <svg class="popular-icon-check" width="18" height="18">
                      <use href="${m}#check"></use>
                    </svg>
                </button>`,_(),$.success({title:"OK",message:"Added to cart!"}))};let E;const ce=window.matchMedia("(min-width: 768px)"),D=e=>{e.matches?(E=4,K()):(E=2,K())};ce.addEventListener("change",D);function K(){const e=o(a.PAGES).page,t=o(a.PAGES).perPage,s=o(a.PAGES).totalPages;new q(r.paginationContainer,{page:e,totalItems:t*s,itemsPerPage:t,visiblePages:E,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(i){const u=JSON.parse(localStorage.getItem("pages"));u.page=i.page,localStorage.setItem("pages",JSON.stringify(u));const d=JSON.parse(localStorage.getItem("pages")),f=o(a.LOCAL_QUERY_KEY);f.page=d.page,l(a.LOCAL_QUERY_KEY,f);const T=o(a.LOCAL_QUERY_KEY);H(T)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?r.paginationContainer.style.display="none":r.paginationContainer.style.display="block"}function G(){new q(r.paginationContainer,{page:a.INIT_QUERY.page,totalItems:o("pages").perPage*o("pages").totalPages,itemsPerPage:o("pages").perPage,visiblePages:E,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(s){const n=JSON.parse(localStorage.getItem("pages"));n.page=s.page,localStorage.setItem("pages",JSON.stringify(n));const c=JSON.parse(localStorage.getItem("pages")),i=o(a.LOCAL_QUERY_KEY);i.page=c.page,l(a.LOCAL_QUERY_KEY,i);const u=o(a.LOCAL_QUERY_KEY);H(u)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?r.paginationContainer.style.display="none":r.paginationContainer.style.display="block"}async function H(e){const t=await B(e);if(!t.results.length){notFoundMarkup(r.productList);return}r.productList.innerHTML=A(t.results)}const Y=e=>{const t=o(a.LOCAL_CART_KEY)??[];return e.map(n=>t.some(({_id:i})=>i===n._id)?(n.isChecked=!0,n):(n.isChecked=!1,n))},ie="/foodShop/assets/subscribing@1x-6a8ff382.png",x="/foodShop/assets/subscribing@2x-9debc6b5.png",le=`
                  <div class="modal">

                    <div class="container">

                      <div class="modal-box-success">

                        <button class="modal-close js-modal-close" type="button" >
                          <svg class="modal-icon" width="22" height="22">
                            <use href="${m}#close"></use>
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
                        srcset="${ie} 1x, ${x} 2x"
                        src="${x}"
                        alt="basket of fresh vegetables"
                        width="490"
                        />
   
                      </div>
                     

                    </div>

                  </div>
`,de=`
              <div class="modal">

                <div class="container">
                  <div class="modal-box">
                    <button class="modal-close js-modal-close" type="button" data-modal-close>
                      <svg class="modal-icon" width="22" height="22">
                        <use href="${m}#close"></use>
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
              `,ue=({name:e,desc:t,img:s,category:n,price:c,size:i,is10PercentOff:u,popularity:d})=>`
            <div class="modal">
            <div class="container">
              <div class="modal-box-product">
                <button class="modal-product-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${m}#close"></use>
                  </svg>
                </button>

                <div class="modal-product-top">
                  <div class="modal-product-img-box">
                    <img
                      class="modal-product-image"
                      src="${s}"
                      alt="${e}"
                      width="160"
                      height="160"
                      loading="lazy"
                    />
                  </div>
                  <div class="modal-product-text-box">
                    <p class="modal-product-name">${e}</p>
                    <ul class="modal-product-list">
                      <li class="modal-produt-item">Category:
                        <span class="list-variables">${n}</span>
                      </li>
                      <li class="modal-produt-item">Size:
                        <span class="list-variables">${i}</span>
                      </li>
                      <li class="modal-produt-item">Popularity:
                        <span class="list-variables">${d}</span>
                      </li>
                    </ul>
                    <div class="scroll">
                    <p class="modal-product-desc">
                      ${t}
                    </p>
                    </div>
                  </div>
                </div>

                <div class="modal-product-bottom">
                  <p class="modal-product-price">$${c}</p>

                  <button class="modal-product-addBtn js-to-cart">
                    Add to
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${m}#cart"></use>
                    </svg>
                  </button>

                  <button class="modal-product-removeBtn js-from-cart">
                    Remove from
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${m}#cart"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

`,O=async(e,t)=>{const{id:s}=e.target.closest(".js-card").dataset,n=await w(s),c=ue(n),i=F.create(c,{onShow:d=>{t.addEventListener("keydown",u),d.element().querySelector(".js-modal-close").onclick=()=>{d.close();const p=o(a.LOCAL_QUERY_KEY)??[];g(p)},(o(a.LOCAL_CART_KEY)??[]).some(({_id:p})=>p===s)?(d.element().querySelector(".js-to-cart").style.display="none",d.element().querySelector(".js-from-cart").style.display="flex"):(d.element().querySelector(".js-to-cart").style.display="flex",d.element().querySelector(".js-from-cart").style.display="none");const b=d.element().querySelector(".js-to-cart"),C=d.element().querySelector(".js-from-cart");b.addEventListener("click",()=>{const p=o(a.LOCAL_CART_KEY)??[];p.some(({_id:v})=>v===s)||(p.push(n),l(a.LOCAL_CART_KEY,p),_(),b.style.display="none",C.style.display="flex")}),C.addEventListener("click",()=>{const p=o(a.LOCAL_CART_KEY)??[],Q=p.findIndex(({_id:v})=>v===s);p.splice(Q,1),W(a.LOCAL_CART_KEY),l(a.LOCAL_CART_KEY,p),_(),C.style.display="none",b.style.display="flex"})},onClose:d=>{t.removeEventListener("keydown",u)}});function u(d){d.code==="Escape"&&i.close()}i.show()},g=async e=>{r.productList.innerHTML='<div class="loader-box"><span class="loader"></span></div>';const t=await B(e);if(!t.results.length){M(r.productList);return}l(a.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages});const s=Y(t.results);r.productList.innerHTML=A(s),G()},pe=e=>{if(e.preventDefault(),e.currentTarget!==e.target){if(e.target.closest(".js-cart")){N(e);return}O(e,r.productList)}};r.productList.addEventListener("click",pe);new I({select:"#abcField",settings:{showSearch:!1}});let U=[];const ge=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],me=async()=>{U=[...await oe(),"Show_all"];const t=Z(U);r.categoryField.insertAdjacentHTML("beforeend",t),r.abcField.innerHTML=X(ge),new I({select:"#categoryField",settings:{placeholderText:"Categories",showSearch:!1}})},he=async e=>{const t=e.target.value,s=o(a.LOCAL_QUERY_KEY);s.page="1",t==="Show_all"?s.category=null:s.category=t,l(a.LOCAL_QUERY_KEY,s);const n=o(a.LOCAL_SORT),c=o(a.LOCAL_QUERY_KEY);let i=S(a.BASE_URL,c);i=P(i,n);const u=await k(i);R(u)},ye=async e=>{e.preventDefault();const t=r.searchField.value,s=o(a.LOCAL_QUERY_KEY);s.page="1",t?s.keyword=t:s.keyword=null,l(a.LOCAL_QUERY_KEY,s);const n=o(a.LOCAL_SORT),c=o(a.LOCAL_QUERY_KEY);let i=S(a.BASE_URL,c);i=P(i,n);const u=await k(i);R(u)},S=(e,t)=>{let s=`${e}/products?page=${t.page}&limit=${t.limit}`;return t.keyword&&(s+=`&keyword=${t.keyword}`),t.category&&t.category!=="all"&&(s+=`&category=${Le(t.category)}`),s},Le=e=>{switch(e){case"Meat_&_Seafood":return"Meat_%26_Seafood";case"Breads_&_Bakery":return"Breads_%26_Bakery";default:return e}},P=(e,t)=>{if(t&&t!=="all")switch(t){case"alphabetical":e+="&byABC=true";break;case"reverse-alphabetical":e+="&byABC=false";break;case"cheap":e+="&byPrice=true";break;case"expensive":e+="&byPrice=false";break;case"popular":e+="&byPopularity=false";break;case"not-popular":e+="&byPopularity=true";break}return e},_e=async e=>{const t=e.target.value;l(a.LOCAL_SORT,t);const s=o(a.LOCAL_SORT),n=o(a.LOCAL_QUERY_KEY);let c=S(a.BASE_URL,n);c=P(c,s);const i=await k(c);R(i)};async function k(e){try{return(await h({url:`${e}`,method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(t){return console.error("Error:",t),t}}const R=async e=>{if(!e.results.length){M(r.productList);return}l(a.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages}),r.productList.innerHTML=A(e.results),G()},Ee=e=>{if(e.target.value===""){const t=o(a.LOCAL_QUERY_KEY);t.page="1",t.keyword=null,l(a.LOCAL_QUERY_KEY,t);const s=o(a.LOCAL_QUERY_KEY);g(s)}};r.form.addEventListener("submit",ye);r.categoryField.addEventListener("change",he);r.abcField.addEventListener("change",_e);r.searchField.addEventListener("input",Ee);const fe=async()=>{const e=await ae();if(!e.length){notFoundMarkup(r.popularProductList);return}const t=Y(e),s=ee(t);r.popularProductList.insertAdjacentHTML("beforeend",s)},be=e=>{if(e.preventDefault(),e.target.closest(".js-cart")){ne(e);return}O(e,r.popularProductList)};r.popularProductList.addEventListener("click",be);const Ce=e=>{const t=[],s=[];for(;t.length<a.NUMBER_OF_DISCOUNT;){const n=Math.floor(Math.random()*e.length);s.includes(n)||(s.push(n),t.push(e[n]))}return t},ve=async()=>{const e=await se(),t=Ce(e),s=Y(t),n=te(s);r.dicsProd.innerHTML=n},Ae=e=>{if(e.preventDefault(),e.target.closest(".js-cart")){N(e);return}O(e,r.discProdList)};r.discProdList.addEventListener("click",Ae);const j=(e,t)=>{const s=c=>{c.code==="Escape"&&n.close()},n=F.create(t,{onShow:c=>{e.addEventListener("keydown",s),c.element().querySelector(".js-modal-close").onclick=()=>c.close()},onClose:c=>{e.removeEventListener("keydown",s)}});n.show()},we=()=>{r.emailForm.addEventListener("submit",Ye)},Ye=e=>{e.preventDefault();const t=r.emailInput.value.trim();t&&(Oe(t),r.emailForm.reset())};async function Oe(e){const t=await re(e);switch(t){case 201:j(r.emailForm,le);break;case 409:j(r.emailForm,de);break}return t}const J=window.matchMedia("(min-width: 768px)"),z=window.matchMedia("(min-width: 1440px)"),V=window.matchMedia("(max-width: 767.9px)"),Se=window.matchMedia("(max-width: 1439.9px)"),Pe=window.matchMedia("(min-width: 768px) and (max-width: 1439.9px)");l(a.LOCAL_QUERY_KEY,a.INIT_QUERY);const y=o(a.LOCAL_QUERY_KEY)??[];_();me();if(z.matches&&Object.keys(y).length){const e=o(a.LOCAL_QUERY_KEY)??[];e.limit=9,l(a.LOCAL_QUERY_KEY,e),g(e)}if(Pe.matches&&Object.keys(y).length){const e=o(a.LOCAL_QUERY_KEY)??[];e.limit=8,l(a.LOCAL_QUERY_KEY,e),g(e)}if(V.matches&&Object.keys(y).length){const e=o(a.LOCAL_QUERY_KEY)??[];e.limit=6,l(a.LOCAL_QUERY_KEY,e),g(e)}D(J);fe();ve();we();J.addListener(e=>{if(e.matches&&Object.keys(y).length){const t=o(a.LOCAL_QUERY_KEY)??[];t.limit=8,l(a.LOCAL_QUERY_KEY,t),g(t)}});z.addListener(e=>{if(e.matches&&Object.keys(y).length){const t=o(a.LOCAL_QUERY_KEY)??[];t.limit=9,l(a.LOCAL_QUERY_KEY,t),g(t)}});Se.addListener(e=>{if(e.matches&&Object.keys(y).length){const t=o(a.LOCAL_QUERY_KEY)??[];t.limit=8,l(a.LOCAL_QUERY_KEY,t),g(t)}});V.addListener(e=>{if(e.matches&&Object.keys(y).length){const t=o(a.LOCAL_QUERY_KEY)??[];t.limit=6,l(a.LOCAL_QUERY_KEY,t),g(t)}});
//# sourceMappingURL=commonHelpers3.js.map
