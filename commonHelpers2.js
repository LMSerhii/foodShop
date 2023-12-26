import{l as r,c as s,g as S,s as l,d as g,r as o,e as w,f as m,n as A,h as x,i as U,j as N,k as j,m as D,o as B,q as $,t as q}from"./assets/refs-f5da4603.js";import{i as k,P as O,S as Y,a as H,b as G}from"./assets/vendor-eaa4441d.js";const d=r(s.LOCAL_CART_KEY)??[],M=async e=>{const{id:t}=e.target.closest(".js-card").dataset,a=await S(t);d.some(({_id:c})=>c===a._id)||(d.push(a),l(s.LOCAL_CART_KEY,d),e.target.closest(".js-cart").innerHTML=`<button class="card-btn" type="button">
                    <svg class="card-btn-icon-check" width="18" height="18">
                        <use href="${g}#check"></use>
                    </svg>
                </button>`,k.success({title:"OK",message:"Added to cart!"}))},J=async e=>{const{id:t}=e.target.closest(".js-card").dataset,a=await S(t);d.some(({_id:c})=>c===a._id)||(d.push(a),l(s.LOCAL_CART_KEY,d),e.target.closest(".js-cart").innerHTML=`<button class="popular-card-btn" type="button">
                    <svg class="popular-icon-check" width="18" height="18">
                      <use href="${g}#check"></use>
                    </svg>
                </button>`,k.success({title:"OK",message:"Added to cart!"}))};let p;const V=window.matchMedia("(min-width: 768px)"),R=e=>{e.matches?(p=4,C()):(p=2,C())};V.addEventListener("change",R);function C(){if(!(r(s.PAGES)??{}).length)return;const t=r(s.PAGES).page,a=r(s.PAGES).perPage,n=r(s.PAGES).totalPages;new O(o.paginationContainer,{page:t,totalItems:a*n,itemsPerPage:a,visiblePages:p,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(u){const _=JSON.parse(localStorage.getItem("pages"));_.page=u.page,localStorage.setItem("pages",JSON.stringify(_));const I=JSON.parse(localStorage.getItem("pages")),E=r(s.LOCAL_QUERY_KEY);E.page=I.page,l(s.LOCAL_QUERY_KEY,E);const F=r(s.LOCAL_QUERY_KEY);Q(F)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?o.paginationContainer.style.display="none":o.paginationContainer.style.display="block"}function T(){new O(o.paginationContainer,{page:s.INIT_QUERY.page,totalItems:r("pages").perPage*r("pages").totalPages,itemsPerPage:r("pages").perPage,visiblePages:p,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(a){const n=JSON.parse(localStorage.getItem("pages"));n.page=a.page,localStorage.setItem("pages",JSON.stringify(n));const c=JSON.parse(localStorage.getItem("pages")),i=r(s.LOCAL_QUERY_KEY);i.page=c.page,l(s.LOCAL_QUERY_KEY,i);const u=r(s.LOCAL_QUERY_KEY);Q(u)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?o.paginationContainer.style.display="none":o.paginationContainer.style.display="block"}async function Q(e){const t=await w(e);if(!t.results.length){notFoundMarkup(o.productList);return}o.productList.innerHTML=m(t.results)}const h=e=>{const t=r(s.LOCAL_CART_KEY)??[];return e.map(n=>t.some(({_id:i})=>i===n._id)?(n.isChecked=!0,n):(n.isChecked=!1,n))},K=async e=>{const t=await w(e);if(!t.results.length){A(o.productList);return}l(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages});const a=h(t.results);o.productList.innerHTML=m(a),T()},W=e=>{e.preventDefault(),e.target.closest(".js-cart")&&M(e),e.target.classList.contains("js-info")&&openModal(e)};o.productList.addEventListener("click",W);new Y({select:"#abcField",settings:{showSearch:!1}});let P=[];const Z=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],z=async()=>{P=[...await x(),"Show_all"];const t=U(P);o.categoryField.insertAdjacentHTML("beforeend",t),o.abcField.innerHTML=N(Z),new Y({select:"#categoryField",settings:{placeholderText:"Categories",showSearch:!1}})},X=async e=>{const t=e.target.value,a=r(s.LOCAL_QUERY_KEY);a.page="1",t==="Show_all"?a.category=null:a.category=t,l(s.LOCAL_QUERY_KEY,a);const n=r(s.LOCAL_SORT),c=r(s.LOCAL_QUERY_KEY);let i=L(s.BASE_URL,c);i=y(i,n);const u=await b(i);f(u)},ee=async e=>{e.preventDefault();const t=o.searchField.value,a=r(s.LOCAL_QUERY_KEY);a.page="1",t?a.keyword=t:a.keyword=null,l(s.LOCAL_QUERY_KEY,a);const n=r(s.LOCAL_SORT),c=r(s.LOCAL_QUERY_KEY);let i=L(s.BASE_URL,c);i=y(i,n);const u=await b(i);f(u)},L=(e,t)=>{let a=`${e}/products?page=${t.page}&limit=${t.limit}`;return t.keyword&&(a+=`&keyword=${t.keyword}`),t.category&&t.category!=="all"&&(a+=`&category=${te(t.category)}`),a},te=e=>{switch(e){case"Meat_&_Seafood":return"Meat_%26_Seafood";case"Breads_&_Bakery":return"Breads_%26_Bakery";default:return e}},y=(e,t)=>{if(t&&t!=="all")switch(t){case"alphabetical":e+="&byABC=true";break;case"reverse-alphabetical":e+="&byABC=false";break;case"cheap":e+="&byPrice=true";break;case"expensive":e+="&byPrice=false";break;case"popular":e+="&byPopularity=false";break;case"not-popular":e+="&byPopularity=true";break}return e},ae=async e=>{const t=e.target.value;l(s.LOCAL_SORT,t);const a=r(s.LOCAL_SORT),n=r(s.LOCAL_QUERY_KEY);let c=L(s.BASE_URL,n);c=y(c,a);const i=await b(c);f(i)};async function b(e){try{return(await H({url:`${e}`,method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(t){return console.error("Error:",t),t}}const f=async e=>{if(!e.results.length){A(o.productList);return}l(s.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages}),o.productList.innerHTML=m(e.results),T()},se=e=>{if(e.target.value===""){const t=r(s.LOCAL_QUERY_KEY);t.page="1",t.keyword=null,l(s.LOCAL_QUERY_KEY,t);const a=r(s.LOCAL_QUERY_KEY);K(a)}};o.form.addEventListener("submit",ee);o.categoryField.addEventListener("change",X);o.abcField.addEventListener("change",ae);o.searchField.addEventListener("input",se);const oe=async()=>{const e=await j();if(!e.length){notFoundMarkup(o.popularProductList);return}const t=h(e),a=D(t);o.popularProductList.insertAdjacentHTML("beforeend",a)},ne=e=>{e.preventDefault(),e.target.closest(".js-cart")&&J(e),e.target.classList.contains("js-info")&&openModal(e)};o.popularProductList.addEventListener("click",ne);const re=e=>{const t=[],a=[];for(;t.length<s.NUMBER_OF_DISCOUNT;){const n=Math.floor(Math.random()*e.length);a.includes(n)||(a.push(n),t.push(e[n]))}return t},ce=async()=>{const e=await B(),t=re(e),a=h(t),n=$(a);o.dicsProd.innerHTML=n},ie=e=>{e.preventDefault(),e.target.closest(".js-cart")&&M(e),e.target.classList.contains("js-info")&&openModal(e)};o.discProdList.addEventListener("click",ie);const v=(e,t)=>{const a=c=>{c.code==="Escape"&&n.close()},n=G.create(t,{onShow:c=>{e.addEventListener("keydown",a),c.element().querySelector(".js-modal-close").onclick=()=>c.close()},onClose:c=>{e.removeEventListener("keydown",a)}});n.show()},le=`
                  <div class="modal">

                    <div class="container">

                      <div class="modal-box-success">

                        <button class="modal-close js-modal-close" type="button" >
                          <svg class="modal-icon" width="22" height="22">
                            <use href="${g}#close"></use>
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
                        srcset="../img/subscribing@1x.png 1x, ../img/subscribing@2x.png 2x"
                        src="../img/subscribing@1x.png"
                        alt="basket of fresh vegetables"
                        width="490"
                        />
   
                      </div>
                     

                    </div>

                  </div>
`,ue=`
              <div class="modal">

                <div class="container">
                  <div class="modal-box">
                    <button class="modal-close js-modal-close" type="button" data-modal-close>
                      <svg class="modal-icon" width="22" height="22">
                        <use href="${g}#close"></use>
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
              `,de=()=>{o.emailForm.addEventListener("submit",pe)},pe=e=>{e.preventDefault();const t=o.emailInput.value.trim();t&&ge(t)};async function ge(e){const t=await q(e);switch(t){case 201:v(o.emailForm,le);break;case 409:v(o.emailForm,ue);break}return t}const me=window.matchMedia("(min-width: 768px)");l(s.LOCAL_QUERY_KEY,s.INIT_QUERY);const he=r(s.LOCAL_QUERY_KEY)??[];z();K(he);R(me);oe();ce();de();
//# sourceMappingURL=commonHelpers2.js.map
