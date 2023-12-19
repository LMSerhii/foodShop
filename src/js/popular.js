// import axios from 'axios';
// async function fetchData() {
//   const apiUrl = 'https://food-boutique.b.goit.study/api/products/popular';
//   const params = { limit: '6' };
//   try {
//     const response = await axios.get(apiUrl, { params });
//     console.log(response.data);
//   } catch (error) {
//     console.error(`Помилка: ${error.message}`);
//   }
// }
// fetchData();

import axios from 'axios';
// import { common } from './common';
const BASE_URL = 'https://food-boutique.b.goit.study/api/products/popular';

const queryParams = {
  limit: '6',
};

const divPopular = document.querySelector('.popular-products');
console.dir(divPopular);
const popularProductList = document.querySelector('.popular_products_list');
console.log(popularProductList);

// const pages = {
//   page: 0,
//   perPage: 0,
//   totalPages: 0,
// };

async function fetchData() {
  try {
    const response = await axios.get(BASE_URL, {
      params: queryParams,
    });
    // method: 'GET',
    // header: {
    //   'Content-Type': 'aplication/json',
    // },

    // );
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

fetchData();

async function getData(params) {
  try {
    const data = await fetchData(params);

    // pages.page = data.page;
    // pages.perPage = data.perPage;
    // pages.totalPages = data.totalPages;

    return data.results;
  } catch (error) {
    errorMarkup(error.status);
  }
}

render(params);
async function render(params) {
  const results = await getData(params);

  if (!results) {
    return;
  }

  const markup = createMarkup(results);
  popularProductList.innerHTML = '';
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
                    <div class="card-top">
                      <a href="#" class="card-img-link">
                          <img src="${img}" alt="${name}" width="140" height="140" loading="lazy"/>
                      </a>
                      <a href="#" class="card-name-link">
                        <h3 class="card-product-name">${name}</h3>
                      </a>
                      <ul class="card-prodcuts-list">
                          <li class="card-prodcuts-item">Category: <span>${category}</span></li>
                          <li class="card-prodcuts-item">Size: <span>${size}</span></li>
                          <li class="card-prodcuts-item">Popularity: <span>${popularity}</span></li>
                      </ul>
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

function errorMarkup(status) {
  popularProductList.innerHTML = `<p class="error_status error">${status}</p><p class="error_text error">Ой, щось пішло не так ...</p>`;
}
