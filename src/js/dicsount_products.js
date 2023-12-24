import { getDiscount } from './api_service';
const dicsProd = document.querySelector('.discount-product-list');
// fetch data
async function dataDiscountProd() {
  const data = await getDiscount();
  console.log(data);
  const markup = createDiscountMarkup(data);
  dicsProd.innerHTML = markup;
}
dataDiscountProd();

// add to ul

function createDiscountMarkup(array) {
  return array
    .map(({ img, name, price, _id, is10PercentOff }) => {
      if (is10PercentOff) {
        return `
        <li class="discount-product-element">
        <div class="discount-product-img-wrapper">
        <img class="discount-product-img" src="${img}" alt="${name}">
        </div>
        
        <div class="discount-product-descr">
         <div class="discount-product-name-wrapper">
           <h3 class="discount-product-name">${name}</h3>
          </div>
         <div class="discount-product-price-wrapper">
          <p class="discount-product-price">$${price}</p>
          <button class="discount-product-btn" type="button">add</button>
          </div>
        </div>
        
        </li>`;
      }
    })
    .join('');
}

// add listner to products

const discProdList = document.querySelector('.discount-product-list');
console.log(discProdList);

discProdList.addEventListener('click', clickOnDiscount());

function clickOnDiscount() {}
