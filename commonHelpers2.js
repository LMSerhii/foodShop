import{l as o,c as s,g as b,s as l,f as S,r,h as A,i as p,n as O,j as F,k as U,m as N,q as D,t as j,u as B,v as $,w as H,o as E,x as q,y as x}from"./assets/madalMarkups-718ca2de.js";import{i as k,P as Y,S as w,a as J}from"./assets/vendor-85c19974.js";const d=o(s.LOCAL_CART_KEY)??[],M=async e=>{const{id:t}=e.target.closest(".js-card").dataset,a=await b(t);d.some(({_id:i})=>i===a._id)||(d.push(a),l(s.LOCAL_CART_KEY,d),e.target.closest(".js-cart").innerHTML=`<button class="card-btn" type="button">
                    <svg class="card-btn-icon-check" width="18" height="18">
                        <use href="${S}#check"></use>
                    </svg>
                </button>`,k.success({title:"OK",message:"Added to cart!"}))},G=async e=>{const{id:t}=e.target.closest(".js-card").dataset,a=await b(t);d.some(({_id:i})=>i===a._id)||(d.push(a),l(s.LOCAL_CART_KEY,d),e.target.closest(".js-cart").innerHTML=`<button class="popular-btn-check" type="button">
                    <svg class="popular-icon-check" width="18" height="18">
                      <use href="${S}#check"></use>
                    </svg>
                </button>`,k.success({title:"OK",message:"Added to cart!"}))};let g;const V=window.matchMedia("(min-width: 768px)"),R=e=>{e.matches?(g=4,C()):(g=2,C())};V.addEventListener("change",R);function C(){const e=o(s.PAGES).page,t=o(s.PAGES).perPage,a=o(s.PAGES).totalPages;new Y(r.paginationContainer,{page:e,totalItems:t*a,itemsPerPage:t,visiblePages:g,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(c){const u=JSON.parse(localStorage.getItem("pages"));u.page=c.page,localStorage.setItem("pages",JSON.stringify(u));const K=JSON.parse(localStorage.getItem("pages")),f=o(s.LOCAL_QUERY_KEY);f.page=K.page,l(s.LOCAL_QUERY_KEY,f);const I=o(s.LOCAL_QUERY_KEY);Q(I)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?r.paginationContainer.style.display="none":r.paginationContainer.style.display="block"}function v(){new Y(r.paginationContainer,{page:s.INIT_QUERY.page,totalItems:o("pages").perPage*o("pages").totalPages,itemsPerPage:o("pages").perPage,visiblePages:g,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(a){const n=JSON.parse(localStorage.getItem("pages"));n.page=a.page,localStorage.setItem("pages",JSON.stringify(n));const i=JSON.parse(localStorage.getItem("pages")),c=o(s.LOCAL_QUERY_KEY);c.page=i.page,l(s.LOCAL_QUERY_KEY,c);const u=o(s.LOCAL_QUERY_KEY);Q(u)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?r.paginationContainer.style.display="none":r.paginationContainer.style.display="block"}async function Q(e){const t=await A(e);if(!t.results.length){notFoundMarkup(r.productList);return}r.productList.innerHTML=p(t.results)}const L=e=>{const t=o(s.LOCAL_CART_KEY)??[];return e.map(n=>t.some(({_id:c})=>c===n._id)?(n.isChecked=!0,n):(n.isChecked=!1,n))},T=async e=>{const t=await A(e);if(!t.results.length){O(r.productList);return}l(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages});const a=L(t.results);r.productList.innerHTML=p(a),v()},Z=e=>{e.preventDefault(),e.target.closest(".js-cart")&&M(e),e.target.classList.contains("js-info")&&openModal(e)};r.productList.addEventListener("click",Z);new w({select:"#abcField",settings:{showSearch:!1}});let P=[];const z=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],W=async()=>{P=[...await F(),"Show_all"];const t=U(P);r.categoryField.insertAdjacentHTML("beforeend",t),r.abcField.innerHTML=N(z),new w({select:"#categoryField",settings:{placeholderText:"Categories",showSearch:!1}})},X=async e=>{const t=e.target.value,a=o(s.LOCAL_QUERY_KEY);a.page="1",t==="Show_all"?a.category=null:a.category=t,l(s.LOCAL_QUERY_KEY,a);const n=o(s.LOCAL_SORT),i=o(s.LOCAL_QUERY_KEY);let c=y(s.BASE_URL,i);c=_(c,n);const u=await h(c);m(u)},ee=async e=>{e.preventDefault();const t=r.searchField.value,a=o(s.LOCAL_QUERY_KEY);a.page="1",t?a.keyword=t:a.keyword=null,l(s.LOCAL_QUERY_KEY,a);const n=o(s.LOCAL_SORT),i=o(s.LOCAL_QUERY_KEY);let c=y(s.BASE_URL,i);c=_(c,n);const u=await h(c);m(u)},y=(e,t)=>{let a=`${e}/products?page=${t.page}&limit=${t.limit}`;return t.keyword&&(a+=`&keyword=${t.keyword}`),t.category&&t.category!=="all"&&(a+=`&category=${te(t.category)}`),a},te=e=>{switch(e){case"Meat_&_Seafood":return"Meat_%26_Seafood";case"Breads_&_Bakery":return"Breads_%26_Bakery";default:return e}},_=(e,t)=>{if(t&&t!=="all")switch(t){case"alphabetical":e+="&byABC=true";break;case"reverse-alphabetical":e+="&byABC=false";break;case"cheap":e+="&byPrice=true";break;case"expensive":e+="&byPrice=false";break;case"popular":e+="&byPopularity=false";break;case"not-popular":e+="&byPopularity=true";break}return e},ae=async e=>{const t=e.target.value;l(s.LOCAL_SORT,t);const a=o(s.LOCAL_SORT),n=o(s.LOCAL_QUERY_KEY);let i=y(s.BASE_URL,n);i=_(i,a);const c=await h(i);m(c)};async function h(e){try{return(await J({url:`${e}`,method:"GET",headers:{"Content-Type":"application/json"}})).data}catch(t){return console.error("Error:",t),t}}const m=async e=>{if(!e.results.length){O(r.productList);return}l(s.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages}),r.productList.innerHTML=p(e.results),v()},se=e=>{if(e.target.value===""){const t=o(s.LOCAL_QUERY_KEY);t.page="1",t.keyword=null,l(s.LOCAL_QUERY_KEY,t);const a=o(s.LOCAL_QUERY_KEY);T(a)}};r.form.addEventListener("submit",ee);r.categoryField.addEventListener("change",X);r.abcField.addEventListener("change",ae);r.searchField.addEventListener("input",se);const re=async()=>{const e=await D();if(!e.length){notFoundMarkup(r.popularProductList);return}const t=L(e),a=j(t);r.popularProductList.insertAdjacentHTML("beforeend",a)},ne=e=>{e.preventDefault(),e.target.closest(".js-cart")&&G(e),e.target.classList.contains("js-info")&&openModal(e)};r.popularProductList.addEventListener("click",ne);const oe=e=>{const t=[],a=[];for(;t.length<s.NUMBER_OF_DISCOUNT;){const n=Math.floor(Math.random()*e.length);a.includes(n)||(a.push(n),t.push(e[n]))}return t},ce=async()=>{const e=await B(),t=oe(e),a=L(t),n=$(a);r.dicsProd.innerHTML=n},ie=e=>{e.preventDefault(),e.target.closest(".js-cart")&&M(e),e.target.classList.contains("js-info")&&openModal(e)};r.discProdList.addEventListener("click",ie);const le=()=>{r.emailForm.addEventListener("submit",ue)},ue=e=>{e.preventDefault();const t=r.emailInput.value.trim();t&&de(t)};async function de(e){const t=await H(e);switch(t){case 201:E(r.emailForm,x);break;case 409:E(r.emailForm,q);break}return t}const ge=window.matchMedia("(min-width: 768px)");l(s.LOCAL_QUERY_KEY,s.INIT_QUERY);const pe=o(s.LOCAL_QUERY_KEY)??[];W();T(pe);R(ge);re();ce();le();
//# sourceMappingURL=commonHelpers2.js.map
