import { common } from './common';
import { refs } from './refs';
import { getPopular } from './api_service';
import { save, load } from './storage';
import { createMarkupPopular } from './markupFunctions';
import { addToCartFromPopular } from './helpers/addToCart';
import { validChecked } from './helpers/validChecked';
import { openModal } from './helpers/openModal';

const renderPopular = async () => {
  const response = await getPopular();
  if (!response.length) {
    notFoundMarkup(refs.popularProductList);
    return;
  }

  const results = validChecked(response);

  const markup = createMarkupPopular(results);
  refs.popularProductList.insertAdjacentHTML('beforeend', markup);
};

const onPopularList = evt => {
  evt.preventDefault();

  if (evt.target.closest('.js-cart')) {
    addToCartFromPopular(evt);
    return;
  }

  openModal(evt, refs.popularProductList);
};

refs.popularProductList.addEventListener('click', onPopularList);

export { renderPopular };
