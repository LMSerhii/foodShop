import { getDiscount } from './api_service';
import { refs } from './refs';

// fetch data
const dataDiscountProd = async () => {
  const data = await getDiscount();
  const markup = createDiscountMarkup(data.slice(0, 2));
  refs.dicsProd.innerHTML = markup;
};

// add to ul

const createDiscountMarkup = array => {
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
};

// add listner to products

const clickOnDiscount = () => {};

refs.discProdList.addEventListener('click', clickOnDiscount());

export { dataDiscountProd };
