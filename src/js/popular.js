import axios from 'axios';
import { common } from './common';
import { getPopular } from './api_service';
import { addToCart } from './helpers/addToCart';

import svg_sprite from '../img/sprite.svg';
import { save, load } from './storage';

const refs = {
  popularProductList: document.querySelector('.popular-products'),
};

const popularProductList = document.querySelector('.popular_products_list');
console.dir(popularProductList);

popularProductList.addEventListener('click', onPopularList);

// getPopular();

renderPopular();

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

  const markup = createMarkup(results);
  popularProductList.insertAdjacentHTML('beforeend', markup);
}

function createMarkup(arrey) {
  if (!arrey.length) {
    console.log('Sorry not data');
    return;
  }
  return arrey
    .map(({ _id, name, img, category, size, popularity }) => {
      return `<li class="popular-card js-card" data-id=${_id}>
                    <div class="popular-box">
                      <div class="popular-card-img-wrap">
                          <img src="${img}" alt="${name}" width="56" height="56" loading="lazy"/>
                      </div>
                      <div class="card-info-box">
                      
                        <h3 class="popular-name">${name}</h3>
                      
                      <ul class="popular-info-list">
                          <li class="info-style">Category:
                          <span>${category.replace('_', ' ')}</span></li>
                          <div class="popular-info-wraper">
                          <li class="info-style">Size: <span>${size}</span></li>
                          <li class="info-style">Popularity: <span>${popularity}</span></li>
                      </ul>
                      </div>
                    </div>

                    <div class="card-bottom">
                      
                      <button class="card-btn js-cart" type="button">
                          <svg class="icon" width="18" height="18">
                              <use href="${svg_sprite}#cart"></use>
                          </svg>
                      </button>
                    </div>
                </li>`;
    })
    .join('');
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
