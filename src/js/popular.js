import { common } from './common';
import { refs } from './refs';
import { getPopular } from './api_service';
import { addToCart } from './helpers/addToCart';
import { save, load } from './storage';
import { createMarkupPopular } from './markupFunctions';

const popularProductList = document.querySelector('.popular_products_list');
console.dir(popularProductList);

popularProductList.addEventListener('click', onPopularList);

async function renderPopular() {
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
  popularProductList.insertAdjacentHTML('beforeend', markup);
}

function onPopularList(evt) {
  evt.preventDefault();

  if (evt.target.closest('.js-cart')) {
    addToCart(evt);
  }

  if (evt.target.classList.contains('js-info')) {
    openModal(evt);
  }
}

export { renderPopular };
