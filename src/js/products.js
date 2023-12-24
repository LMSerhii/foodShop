import axios from 'axios';

import { common } from './common.js';
import { refs } from './refs';
import { getData } from './api_service';
import { save, load } from './storage';
import { addToCart } from './helpers/addToCart';
import { productMarkup, notFoundMarkup } from './markupFunctions';

const renderProducts = async query => {
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

  refs.productList.innerHTML = productMarkup(data.results);
};

const onProductList = evt => {
  evt.preventDefault();

  if (evt.target.closest('.js-cart')) {
    addToCart(evt);
  }

  if (evt.target.classList.contains('js-info')) {
    openModal(evt);
  }
};

refs.productList.addEventListener('click', onProductList);

// Отримання даних від сервера (ваш власний метод)
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('pagination-container');
const pagination = new Pagination(container, {
  totalItems: 500,
});

let itemsPerPage = 10;
let currentPage = 1;

async function fetchPage({ page, perPage }) {
  try {
    const response = await axios({
      url: `${common.BASE_URL}/products`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { page, perPage },
    });
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

function updatePage(pageData) {
  // Обробляйте отримані дані та оновлюйте сторінку
  console.log('Received page data:', pageData);
}

pagination.on('beforeMove', event => {
  const newPage = event.page;
  if (newPage !== currentPage) {
    currentPage = newPage;

    fetchPage({ page: currentPage, perPage: itemsPerPage }).then(updatePage);

    // Використовуйте return false для відміни стандартної обробки події
    return false;
  }
});

export { renderProducts };
