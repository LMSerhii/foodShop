import axios from 'axios';
// import { common } from './common';
import { getPopular } from './api_service';

import { getDataId } from './api_service';

import { refs } from './refs';
console.log(refs);

const popularProductList = document.querySelector('.popular_products_list');
console.log(popularProductList);

getPopular();

render();

async function render() {
  const results = await getPopular();

  if (!results) {
    return;
  }

  const markup = createMarkup(results);
  // popularProductList.innerHTML = '';
  popularProductList.insertAdjacentHTML('beforeend', markup);
}

function createMarkup(arrey) {
  if (!arrey.length) {
    console.log('Sorry not data');
    return;
  }
  return arrey
    .map(({ _id, name, img, category, size, popularity }) => {
      return `<li class="popular-card" data-id=${_id}>
                    <div class="popular-box">
                      <a href="#" class="popular-card-img-link">
                          <img src="${img}" alt="${name}" width="56" height="56" loading="lazy"/>
                      </a>
                      <div class="card-info-box">
                      <a href="#" class="card-name-link">
                        <h3 class="popular-name">${name}</h3>
                      </a>
                      <ul class="product-container">
                          <li class="info-style">Category: <span>${category}</span></li>
                          <li class="info-style">Size: <span>${size}</span></li>
                          <li class="info-style">Popularity: <span>${popularity}</span></li>
                      </ul>
                      </div>
                    </div>

                    <div class="card-bottom">
                      
                      <button class="card-btn" type="button">
                          <svg class="card-btn-icon" width="18" height="18">
                              <use href="./img/sprite.svg#cart"></use>
                          </svg>
                      </button>
                    </div>
                </li>`;
    })
    .join('');
}

// getDataId();
