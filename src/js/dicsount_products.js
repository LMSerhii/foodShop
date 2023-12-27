import { getDiscount } from './api_service';
import { refs } from './refs';
import { createDiscountMarkup } from './markupFunctions';
import { addToCart } from './helpers/addToCart';
import { getRandomProduct } from './helpers/getRandomProduct';
import { validChecked } from './helpers/validChecked';
import { openModal } from './helpers/openModal';

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
    return;
  }

  openModal(evt, refs.discProdList);
};

refs.discProdList.addEventListener('click', clickOnDiscount);

export { dataDiscountProd };
