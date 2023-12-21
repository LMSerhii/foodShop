import axios from 'axios';
import { common } from './common';




const productList = document.querySelector('.product-list');

const pages = {
  page: 0,
  perPage: 0,
  totalPages: 0,
};

let queryParams = {
  page: '1',
  limit: '6',
  keyword: null, 
  category: null, 
  
};

render(queryParams);

async function fetchData(params) {

  
  const response = await axios({
    url: `${common.BASE_URL}/products`,
    method: 'GET',
    header: {
      'Content-Type': 'aplication/json',
    },
    params,
  });
  return response.data;
}
// console.log(fetchData());

async function getData(params) {
  try {
    const data = await fetchData(params);

    pages.page = data.page;
    pages.perPage = data.perPage;
    pages.totalPages = data.totalPages;

    return data.results;
  } catch (error) {
    errorMarkup(error.response.status);
  }
}



async function render(params) {
  const results = await getData(params);

  if (!results) {
    return;
  }

  const markup = createMarkup(results);
  productList.innerHTML = '';
  productList.insertAdjacentHTML('beforeend', markup);
}
// console.log(render());


function createMarkup(arrey) {
  if (!arrey.length) {
    console.log('Sorry not data');
    return;
  }
  return arrey
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        size,
        is10PercentOff,
        popularity,
      }) => {
        return `<li class="card" data-id=${_id}>
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
                      <p class="card-producs-price">$${price}</p>
                      <button class="card-btn" type="button">
                          <svg class="card-btn-icon" width="18" height="18">
                              <use href="./img/sprite.svg#cart"></use>
                          </svg>
                      </button>
                    </div>
                </li>`;
      }
    )
    .join('');
}

function errorMarkup(status) {
  productList.innerHTML = `<p class="error_status error">${status}</p><p class="error_text error">Ой, щось пішло не так ...</p>`;
}

export {getData, fetchData, render, createMarkup, queryParams}
export default queryParams;

