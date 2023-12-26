import{c as s,l as o,s as c,b as C,r as n,d as h,n as f,e as T,f as U,g as Q,h as M}from"./assets/refs-53991314.js";import{a as p,i as m,P,S as A}from"./assets/vendor-38dd3e46.js";async function b(e){try{return(await p({url:`${s.BASE_URL}/products`,method:"GET",header:{"Content-Type":"aplication/json"},params:e})).data}catch(t){return t}}async function Y(e){try{return(await p({url:`${s.BASE_URL}/products/${e}`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(t){console.log(t)}}async function v(e){try{let t=null;return e&&(t={limit:e}),(await p({url:`${s.BASE_URL}/products/popular`,method:"GET",header:{"Content-Type":"aplication/json"},params:t})).data}catch(t){return t}}async function K(){try{return(await p({url:`${s.BASE_URL}/products/discount`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}async function I(){try{return(await p({url:`${s.BASE_URL}/products/categories`,method:"GET",header:{"Content-Type":"aplication/json"}})).data}catch(e){return e}}const u=o(s.LOCAL_CART_KEY)??[],S=async e=>{const{id:t}=e.target.closest(".js-card").dataset,a=await Y(t);u.some(({_id:i})=>i===a._id)||(u.push(a),c(s.LOCAL_CART_KEY,u),e.target.closest(".js-cart").innerHTML=`<button class="card-btn" type="button">
                    <svg class="card-btn-icon-check" width="18" height="18">
                        <use href="${C}#check"></use>
                    </svg>
                </button>`,m.success({title:"OK",message:"Added to cart!"}))},j=async e=>{const{id:t}=e.target.closest(".js-card").dataset,a=await Y(t);u.some(({_id:i})=>i===a._id)||(u.push(a),c(s.LOCAL_CART_KEY,u),e.target.closest(".js-cart").innerHTML=`<button class="popular-card-btn" type="button">
                    <svg class="popular-icon-check" width="18" height="18">
                      <use href="${C}#check"></use>
                    </svg>
                </button>`,m.success({title:"OK",message:"Added to cart!"}))};let g;const O=window.matchMedia("(min-width: 768px)"),R=e=>{e.matches?(g=4,E()):(g=2,E())};R(O);O.addEventListener("change",R);function E(){new P(n.paginationContainer,{page:o("pages").page,totalItems:o("pages").perPage*o("pages").totalPages,itemsPerPage:o("pages").perPage,visiblePages:g,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(a){const r=JSON.parse(localStorage.getItem("pages"));r.page=a.page,localStorage.setItem("pages",JSON.stringify(r));const i=JSON.parse(localStorage.getItem("pages")),l=o(s.LOCAL_QUERY_KEY);l.page=i.page,c(s.LOCAL_QUERY_KEY,l);const d=o(s.LOCAL_QUERY_KEY);k(d)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?n.paginationContainer.style.display="none":n.paginationContainer.style.display="block"}function w(){new P(n.paginationContainer,{page:s.INIT_QUERY.page,totalItems:o("pages").perPage*o("pages").totalPages,itemsPerPage:o("pages").perPage,visiblePages:g,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child"}).on("beforeMove",function(a){const r=JSON.parse(localStorage.getItem("pages"));r.page=a.page,localStorage.setItem("pages",JSON.stringify(r));const i=JSON.parse(localStorage.getItem("pages")),l=o(s.LOCAL_QUERY_KEY);l.page=i.page,c(s.LOCAL_QUERY_KEY,l);const d=o(s.LOCAL_QUERY_KEY);k(d)}),JSON.parse(localStorage.getItem("pages")).totalPages<=1?n.paginationContainer.style.display="none":n.paginationContainer.style.display="block"}async function k(e){const t=await b(e);if(!t.results.length){notFoundMarkup(n.productList);return}n.productList.innerHTML=h(t.results)}const y=e=>{const t=o(s.LOCAL_CART_KEY)??[];return e.map(r=>t.some(({_id:l})=>l===r._id)?(r.isChecked=!0,r):(r.isChecked=!1,r))},L=async e=>{const t=await b(e);if(!t.results.length){f(n.productList);return}c(s.PAGES,{page:t.page,perPage:t.perPage,totalPages:t.totalPages});const a=y(t.results);n.productList.innerHTML=h(a),w()},N=e=>{e.preventDefault(),e.target.closest(".js-cart")&&S(e),e.target.classList.contains("js-info")&&openModal(e)};n.productList.addEventListener("click",N);new A({select:"#abcField",settings:{showSearch:!1}});let _=[];const F=[{value:"alphabetical",label:"A to Z"},{value:"reverse-alphabetical",label:"Z to A"},{value:"cheap",label:"Cheap"},{value:"expensive",label:"Expensive"},{value:"popular",label:"Popular"},{value:"not-popular",label:"Not popular"},{value:"",label:"Show all"}],D=async()=>{_=[...await I(),"Show_all"];const t=T(_);n.categoryField.insertAdjacentHTML("beforeend",t),n.abcField.innerHTML=U(F),new A({select:"#categoryField",settings:{placeholderText:"Categories",showSearch:!1}})},$=e=>{const t=e.target.value,a=o(s.LOCAL_QUERY_KEY);a.page="1",t==="Show_all"?a.category=null:a.category=t,c(s.LOCAL_QUERY_KEY,a);const r=o(s.LOCAL_QUERY_KEY);L(r)},q=e=>{e.preventDefault();const t=n.searchField.value,a=o(s.LOCAL_QUERY_KEY);a.page="1",t?a.keyword=t:a.keyword=null,c(s.LOCAL_QUERY_KEY,a);const r=o(s.LOCAL_QUERY_KEY);L(r)},B=async e=>{const t=e.target.value,a=o(s.LOCAL_QUERY_KEY);a.sort=t,c(s.LOCAL_QUERY_KEY,a);const r=o(s.LOCAL_QUERY_KEY),i=r.sort;a.page="1";const l=H(i),d=await G(r,l);J(d)},H=e=>{let t={};switch(e){case"alphabetical":t="&byABC=true";break;case"reverse-alphabetical":t="&byABC=false";break;case"cheap":t="&byPrice=true";break;case"expensive":t="&byPrice=false";break;case"popular":t="&byPopularity=false";break;case"not-popular":t="&byPopularity=true";break}return t};async function G(e,t){try{return(await p({url:`${s.BASE_URL}/products?${t}`,method:"GET",header:{"Content-Type":"application/json"},params:e})).data}catch(a){return a}}const J=async e=>{if(!e.results.length){f(n.productList);return}c(s.PAGES,{page:e.page,perPage:e.perPage,totalPages:e.totalPages}),n.productList.innerHTML=h(e.results),w()},x=e=>{if(e.target.value===""){const t=o(s.LOCAL_QUERY_KEY);t.page="1",t.keyword=null,c(s.LOCAL_QUERY_KEY,t);const a=o(s.LOCAL_QUERY_KEY);L(a)}};n.form.addEventListener("submit",q);n.categoryField.addEventListener("change",$);n.abcField.addEventListener("change",B);n.searchField.addEventListener("input",x);const V=async()=>{const e=await v();if(!e.length){notFoundMarkup(n.popularProductList);return}const t=y(e),a=Q(t);n.popularProductList.insertAdjacentHTML("beforeend",a)},Z=e=>{e.preventDefault(),e.target.closest(".js-cart")&&j(e),e.target.classList.contains("js-info")&&openModal(e)};n.popularProductList.addEventListener("click",Z);const z=e=>{const t=[],a=[];for(;t.length<s.NUMBER_OF_DISCOUNT;){const r=Math.floor(Math.random()*e.length);a.includes(r)||(a.push(r),t.push(e[r]))}return t},W=async()=>{const e=await K(),t=z(e),a=y(t),r=M(a);n.dicsProd.innerHTML=r},X=e=>{e.preventDefault(),e.target.closest(".js-cart")&&S(e),e.target.classList.contains("js-info")&&openModal(e)};n.discProdList.addEventListener("click",X);c(s.LOCAL_QUERY_KEY,s.INIT_QUERY);const ee=o(s.LOCAL_QUERY_KEY)??[];D();L(ee);V();W();
//# sourceMappingURL=commonHelpers2.js.map
