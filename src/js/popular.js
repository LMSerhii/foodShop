import { common } from './common';
import { refs } from './refs';
import { getPopular } from './api_service';
import { save, load } from './storage';
import { createMarkupPopular } from './markupFunctions';
import { addToCartFromPopular } from './helpers/addToCart';

const renderPopular = async () => {
  const results = await getPopular();
  if (!results.length) {
    notFoundMarkup(refs.popularProductList);
    return;
  }
  save(common.PAGES, {
    page: results.page,
    perPage: results.perPage,
    totalPages: results.totalPages,
  });

  const markup = createMarkupPopular(results);
  refs.popularProductList.insertAdjacentHTML('beforeend', markup);
};

const onPopularList = evt => {
  evt.preventDefault();

  if (evt.target.closest('.js-cart')) {
    addToCartFromPopular(evt);
  }

  if (evt.target.classList.contains('js-info')) {
    openModal(evt);
  }
};

refs.popularProductList.addEventListener('click', onPopularList);

export { renderPopular };
