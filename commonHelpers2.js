import{l as r,c as s,g as v,s as l,d as g,r as o,e as S,f as m,n as w,h as F,i as x,j as U,k as N,m as j,o as D,q as B,t as $}from"./assets/refs-c54c085b.js";import{i as A,P as k,S as O,a as q,b as H}from"./assets/vendor-eaa4441d.js";const d=r(s.LOCAL_CART_KEY)??[],Y=async e=>{const{id:t}=e.target.closest(".js-card").dataset,a=await v(t);d.some(({_id:c})=>c===a._id)||(d.push(a),l(s.LOCAL_CART_KEY,d),e.target.closest(".js-cart").innerHTML=`<button class="card-btn" type="button">
                    <svg class="card-btn-icon-check" width="18" height="18">
                        <use href="${g}#check"></use>
                    </svg>
                </button>`,A.success({title:"OK",message:"Added to cart!"}))},J=async e=>{const{id:t}=e.target.closest(".js-card").dataset,a=await v(t);d.some(({_id:c})=>c===a._id)||(d.push(a),l(s.LOCAL_CART_KEY,d),e.target.closest(".js-cart").innerHTML=`<button class="popular-btn-check" type="button">
                    <svg class="popular-icon-check" width="18" height="18">
                      <use href="${g}#check"></use>
                    </svg>
                </button>`,A.success({title:"OK",message:"Added to cart!"}))};let p;const G=window.matchMedia("(min-width: 768px)"),M=e=>{e.matches?(p=4,E()):(p=2,E())};G.addEventListener("change",M);function E(){const e=r(s.PAGES).page,t=r(s.PAGES).perPage,a=r(s.PAGES).totalPages;new k(o.paginationContainer,{page:e,totalItems:t*a,itemsPerPage:t,visiblePages:p,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(i){const u=JSON.parse(localStorage.getItem("pages"));u.page=i.page,localStorage.setItem("pages",JSON.stringify(u));const K=JSON.parse(localStorage.getItem("pages")),_=r(s.LOCAL_QUERY_KEY);_.page=K.page,l(s.LOCAL_QUERY_KEY,_);const I=r(s.LOCAL_QUERY_KEY);T(I)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?o.paginationContainer.style.display="none":o.paginationContainer.style.display="block"}function R(){new k(o.paginationContainer,{page:s.INIT_QUERY.page,totalItems:r("pages").perPage*r("pages").totalPages,itemsPerPage:r("pages").perPage,visiblePages:p,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(a){const n=JSON.parse(localStorage.getItem("pages"));n.page=a.page,localStorage.setItem("pages",JSON.stringify(n));const c=JSON.parse(localStorage.getItem("pages")),i=r(s.LOCAL_QUERY_KEY);i.page=c.page,l(s.LOCAL_QUERY_KEY,i);const u=r(s.LOCAL_QUERY_KEY);T(u)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?o.paginationContainer.style.display="none":o.paginationContainer.style.display="block"}async function T(e){const t=await S(e);if(!t.results.length){notFoundMarkup(o.productList);return}o.productList.innerHTML=m(t.results)}const h=e=>{const t=r(s.LOCAL_CART_KEY)??[];return e.map(n=>t.some(({_id:i})=>i===n._id)?(n.isChecked=!0,n):(n.isChecked=!1,n))},Q=async e=>{const t=await S(e);if(!t.results.length){w(o.productList);return}l(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages});const a=h(t.results);o.productList.innerHTML=m(a),R()},V=e=>{e.preventDefault(),e.target.closest(".js-cart")&&Y(e),e.target.classList.contains("js-info")&&openModal(e)};o.productList.addEventListener("click",V);new O({select:"#abcField",settings:{showSearch:!1}});let C=[];const W=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],Z=async()=>{C=[...await F(),"Show_all"];const t=x(C);o.categoryField.insertAdjacentHTML("beforeend",t),o.abcField.innerHTML=U(W),new O({select:"#categoryField",settings:{placeholderText:"Categories",showSearch:!1}})},z=async e=>{const t=e.target.value,a=r(s.LOCAL_QUERY_KEY);a.page="1",t==="Show_all"?a.category=null:a.category=t,l(s.LOCAL_QUERY_KEY,a);const n=r(s.LOCAL_SORT),c=r(s.LOCAL_QUERY_KEY);let i=L(s.BASE_URL,c);i=y(i,n);const u=await b(i);f(u)},X=async e=>{e.preventDefault();const t=o.searchField.value,a=r(s.LOCAL_QUERY_KEY);a.page="1",t?a.keyword=t:a.keyword=null,l(s.LOCAL_QUERY_KEY,a);const n=r(s.LOCAL_SORT),c=r(s.LOCAL_QUERY_KEY);let i=L(s.BASE_URL,c);i=y(i,n);const u=await b(i);f(u)},L=(e,t)=>{let a=`${e}/products?page=${t.page}&limit=${t.limit}`;return t.keyword&&(a+=`&keyword=${t.keyword}`),t.category&&t.category!=="all"&&(a+=`&category=${ee(t.category)}`),a},ee=e=>{switch(e){case"Meat_&_Seafood":return"Meat_%26_Seafood";case"Breads_&_Bakery":return"Breads_%26_Bakery";default:return e}},y=(e,t)=>{if(t&&t!=="all")switch(t){case"alphabetical":e+="&byABC=true";break;case"reverse-alphabetical":e+="&byABC=false";break;case"cheap":e+="&byPrice=true";break;case"expensive":e+="&byPrice=false";break;case"popular":e+="&byPopularity=false";break;case"not-popular":e+="&byPopularity=true";break}return e},te=async e=>{const t=e.target.value;l(s.LOCAL_SORT,t);const a=r(s.LOCAL_SORT),n=r(s.LOCAL_QUERY_KEY);let c=L(s.BASE_URL,n);c=y(c,a);const i=await b(c);f(i)};async function b(e){try{return(await q({url:`${e}`,method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(t){return console.error("Error:",t),t}}const f=async e=>{if(!e.results.length){w(o.productList);return}l(s.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages}),o.productList.innerHTML=m(e.results),R()},ae=e=>{if(e.target.value===""){const t=r(s.LOCAL_QUERY_KEY);t.page="1",t.keyword=null,l(s.LOCAL_QUERY_KEY,t);const a=r(s.LOCAL_QUERY_KEY);Q(a)}};o.form.addEventListener("submit",X);o.categoryField.addEventListener("change",z);o.abcField.addEventListener("change",te);o.searchField.addEventListener("input",ae);const se=async()=>{const e=await N();if(!e.length){notFoundMarkup(o.popularProductList);return}const t=h(e),a=j(t);o.popularProductList.insertAdjacentHTML("beforeend",a)},oe=e=>{e.preventDefault(),e.target.closest(".js-cart")&&J(e),e.target.classList.contains("js-info")&&openModal(e)};o.popularProductList.addEventListener("click",oe);const ne=e=>{const t=[],a=[];for(;t.length<s.NUMBER_OF_DISCOUNT;){const n=Math.floor(Math.random()*e.length);a.includes(n)||(a.push(n),t.push(e[n]))}return t},re=async()=>{const e=await D(),t=ne(e),a=h(t),n=B(a);o.dicsProd.innerHTML=n},ce=e=>{e.preventDefault(),e.target.closest(".js-cart")&&Y(e),e.target.classList.contains("js-info")&&openModal(e)};o.discProdList.addEventListener("click",ce);const P=(e,t)=>{const a=c=>{c.code==="Escape"&&n.close()},n=H.create(t,{onShow:c=>{e.addEventListener("keydown",a),c.element().querySelector(".js-modal-close").onclick=()=>c.close()},onClose:c=>{e.removeEventListener("keydown",a)}});n.show()},ie=`
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
`,le=`
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
              `,ue=()=>{o.emailForm.addEventListener("submit",de)},de=e=>{e.preventDefault();const t=o.emailInput.value.trim();t&&pe(t)};async function pe(e){const t=await $(e);switch(t){case 201:P(o.emailForm,ie);break;case 409:P(o.emailForm,le);break}return t}const ge=window.matchMedia("(min-width: 768px)");l(s.LOCAL_QUERY_KEY,s.INIT_QUERY);const me=r(s.LOCAL_QUERY_KEY)??[];Z();Q(me);M(ge);se();re();ue();
//# sourceMappingURL=commonHelpers2.js.map
