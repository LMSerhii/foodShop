import { getDiscount } from './api_service';
import { refs } from './refs';
import { createDiscountMarkup } from './markupFunctions';
import { addToCart } from './helpers/addToCart';

// fetch data
const dataDiscountProd = async () => {
  const data = await getDiscount();
  const markup = createDiscountMarkup(data.slice(0, 2));
  refs.dicsProd.innerHTML = markup;
};

// add to ul

// add listner to products

const clickOnDiscount = evt => {
  evt.preventDefault();

  if (evt.target.closest('.js-cart')) {
    console.log(evt.target.closest('.js-cart'));
    addToCart(evt);
  }

  if (evt.target.classList.contains('js-info')) {
    openModal(evt);
  }
};

refs.discProdList.addEventListener('click', clickOnDiscount);

export { dataDiscountProd };
