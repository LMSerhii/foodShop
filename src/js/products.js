import { common } from './common';
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
import * as tui from 'tui-pagination'; // або імпорт { Pagination } from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

// Решта вашого коду

// import $ from 'jquery';
// tui.use($, window.jQuery);

async function fetchPage({ page, itemsPerPage }) {
  try {
    const response = await axios({
      url: `${common.BASE_URL}/products`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      params: { page, itemsPerPage },
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('pagination');
  const itemsPerPage = 10;
  let currentPage = 1;

  function updatePage(pageData) {
    const totalItems = pageData.totalItems;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const pagination = new tui.Pagination(container, {
      totalItems: totalItems,
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
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<span class="tui-ico-{{type}}">{{type}}</span>' +
          '</span>',
        moreButton:
          '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
          '<span class="tui-ico-ellip">...</span>' +
          '</a>',
      },
    });

    pagination.on('beforeMove', event => {
      const newPage = event.page;
      if (newPage !== currentPage) {
        currentPage = newPage;
        fetchPage({ page: currentPage, itemsPerPage: itemsPerPage }).then(
          updatePage
        );
      }
      event.stop();
    });
  }

  fetchPage({ page: currentPage, itemsPerPage: itemsPerPage }).then(updatePage);
});

export { renderProducts };
