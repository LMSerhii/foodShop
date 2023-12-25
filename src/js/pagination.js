import { getData } from './api_service';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { load, save } from './storage';
import { common } from './common';
import { refs } from './refs';
import { productMarkup } from './markupFunctions';

//Функция создания и управления пагинацией, запускается в renderProducts() и в renderProductsSort().
export function loadPaginationData() {

  const pagination = new Pagination(refs.paginationContainer, {
    page: common.INIT_QUERY.page,
    totalItems: load('pages').perPage * load('pages').totalPages,
    itemsPerPage: load('pages').perPage,
    visiblePages: 2,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
  });

  pagination.on('beforeMove', function (eventData) {
    const pagesData = JSON.parse(localStorage.getItem('pages'));
    pagesData.page = eventData.page;
    localStorage.setItem('pages', JSON.stringify(pagesData));
    const storage_query = JSON.parse(localStorage.getItem('pages'));

    const currentQuery = load(common.LOCAL_QUERY_KEY);
    currentQuery.page = storage_query.page;
    save(common.LOCAL_QUERY_KEY, currentQuery);
    const query = load(common.LOCAL_QUERY_KEY);

    renderProductsOnPagination(query);
  });

  const data = JSON.parse(localStorage.getItem('pages'));
  if (data.totalPages <= 1) {
    refs.paginationContainer.style.display = "none";
  } else {
    refs.paginationContainer.style.display = "block";
  }
}


async function renderProductsOnPagination(query) {
  const data = await getData(query);

  if (!data.results.length) {
    notFoundMarkup(refs.productList);
    return;
  }

  refs.productList.innerHTML = productMarkup(data.results);
}


// В filters.js в функции onCategoryField(), onForm(), onAbcField(), onSearchField() добавлена строка 
// "currQuery.page = '1';" для коректного функционирования пагинации при фильтрации.
// в refs.js добавллен контейнер "paginationContainer" для пагинации.