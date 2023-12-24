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
// import Pagination from 'tui-pagination';
// import 'tui-pagination/dist/tui-pagination.css';

// const container = document.getElementById('pagination-container');
// const pagination = new Pagination(container, {
//   totalItems: 500,
// });

// let itemsPerPage = 10;
// let currentPage = 1;

// async function fetchPage({ page, perPage }) {
//   try {
//     const response = await axios({
//       url: `${common.BASE_URL}/products`,
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       params: { page, perPage },
//     });
//     if (response.status === 200) {
//       return response.data;
//     } else {
//       throw new Error(`Request failed with status ${response.status}`);
//     }
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// }

// function updatePage(pageData) {
//   // Обробляйте отримані дані та оновлюйте сторінку
//   console.log('Received page data:', pageData);
// }

// pagination.on('beforeMove', event => {
//   const newPage = event.page;
//   if (newPage !== currentPage) {
//     currentPage = newPage;

//     fetchPage({ page: currentPage, perPage: itemsPerPage }).then(updatePage);

//     // Використовуйте return false для відміни стандартної обробки події
//     return false;
//   }
// });

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('pagination-container');
let itemsPerPage = 10;
let currentPage = 1;

// Отримання даних від сервера (ваш власний метод)
async function fetchPageData(page) {
  try {
    const response = await axios.get(`${common.BASE_URL}/products`, {
      params: { page, itemsPerPage },
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
  // Оновлення сторінки з отриманими даними
  console.log('Received page data:', pageData);
}

const pagination = new Pagination(container, {
  totalItems: 500, // Загальна кількість елементів на сервері
  itemsPerPage: itemsPerPage,
  visiblePages: 5,
  page: currentPage,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton: '<a href="#" class="tui-page-btn tui-{{type}}">{{type}}</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">{{type}}</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
});

pagination.on('beforeMove', async event => {
  const newPage = event.page;

  if (newPage !== currentPage) {
    currentPage = newPage;

    const pageData = await fetchPageData(currentPage);
    updatePage(pageData);

    // Використовуйте return false для відміни стандартної обробки події
    return false;
  }
});

export { renderProducts };
