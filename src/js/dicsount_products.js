import { getDiscount } from './api_service';
import { refs } from './refs';
import { createDiscountMarkup } from './markupFunctions';
import { addToCart } from './helpers/addToCart';
import { getRandomProduct } from './helpers/getRandomProduct';
import { validChecked } from './helpers/validChecked';

// fetch data
const dataDiscountProd = async () => {
  const data = await getDiscount();
  const randomProducts = getRandomProduct(data);

  const result = validChecked(randomProducts);

  const markup = createDiscountMarkup(result);
  refs.dicsProd.innerHTML = markup;
};

// add to ul

// add listner to products

const clickOnDiscount = evt => {
  evt.preventDefault();

  if (evt.target.closest('.js-cart')) {
    addToCart(evt);
  }

  if (evt.target.classList.contains('js-info')) {
    openModal(evt);
  }
};

refs.discProdList.addEventListener('click', clickOnDiscount);

export { dataDiscountProd };
