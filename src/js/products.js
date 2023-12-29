import { common } from './common';
import { refs } from './refs';
import { getData } from './api_service';
import { save, load } from './storage';
import { addToCart } from './helpers/addToCart';
import { productMarkup, notFoundMarkup } from './markupFunctions';
import { loadPaginationData } from './pagination';
import { validChecked } from './helpers/validChecked';
import { openModal } from './helpers/openModal';

const renderProducts = async query => {
  refs.productList.innerHTML = `<div class="loader-box"><span class="loader"></span></div>`;
  

  const data = await getData(query);

  if (!data.results.length) {
    notFoundMarkup(refs.productList);
    return;
  }

  save(common.PAGES, {
    page: data.page,
    perPage: data.perPage,
    totalPages: data.totalPages,
  });

  const result = validChecked(data.results);

  refs.productList.innerHTML = productMarkup(result);

  loadPaginationData();
};

const onProductList = evt => {
  evt.preventDefault();

  if (evt.currentTarget === evt.target) {
    return;
  }

  if (evt.target.closest('.js-cart')) {
    addToCart(evt);
    return;
  }

  openModal(evt, refs.productList);
};

refs.productList.addEventListener('click', onProductList);

export { renderProducts };
