import axios from 'axios';
import { common } from './common';
import { refs } from './refs';
import { productMarkup, notFoundMarkup } from './markupFunctions';
import { getCategories } from './api_service';
import { save, load } from './storage';
import { renderProducts } from './products';
import { createCategoryMarkup, createSortMarkup } from './markupFunctions';

let categories = [];

const sortArrey = [
  { value: 'alphabetical', label: 'A to Z' },
  { value: 'reverse-alphabetical', label: 'Z to A' },
  { value: 'cheap', label: 'Cheap' },
  { value: 'expensive', label: 'Expensive' },
  { value: 'popular', label: 'Popular' },
  { value: 'not-popular', label: 'Not popular' },
  { value: '', label: 'Show all' },
];

const renderSelects = async () => {
  const data = await getCategories();

  categories = [...data, 'Show_all'];

  const markup = createCategoryMarkup(categories);

  refs.categoryField.insertAdjacentHTML('beforeend', markup);
  refs.abcField.innerHTML = createSortMarkup(sortArrey);
};

const onCategoryField = evt => {
  const currentCategory = evt.target.value;
  const currQuery = load(common.LOCAL_QUERY_KEY);

  if (currentCategory === 'Show_all') {
    currQuery.category = null;
  } else {
    currQuery.category = currentCategory;
  }
  save(common.LOCAL_QUERY_KEY, currQuery);
  const query = load(common.LOCAL_QUERY_KEY);
  renderProducts(query);
};

const onForm = evt => {
  evt.preventDefault();
  const currentValue = refs.searchField.value;
  const currQuery = load(common.LOCAL_QUERY_KEY);

  if (!currentValue) {
    currQuery.keyword = null;
  } else {
    currQuery.keyword = currentValue;
  }

  save(common.LOCAL_QUERY_KEY, currQuery);

  const query = load(common.LOCAL_QUERY_KEY);
  renderProducts(query);
};

const onAbcField = async evt => {
  const currentCategory = evt.target.value;
  const currQuery = load(common.LOCAL_QUERY_KEY);

  currQuery.sort = currentCategory;
  save(common.LOCAL_QUERY_KEY, currQuery);

  const query = load(common.LOCAL_QUERY_KEY);
  const sortCategory = query.sort;

  const getSort = SortValue(sortCategory);

  const result = await get(query, getSort);
  renderProductsSort(result);
};

const SortValue = sortCategory => {
  let getSort = {};

  switch (sortCategory) {
    case 'alphabetical':
      getSort = '&byABC=true';
      break;
    case 'reverse-alphabetical':
      getSort = '&byABC=false';
      break;
    case 'cheap':
      getSort = '&byPrice=true';
      break;
    case 'expensive':
      getSort = '&byPrice=false';
      break;
    case 'popular':
      getSort = '&byPopularity=false';
      break;
    case 'not-popular':
      getSort = '&byPopularity=true';
      break;
    default:
      break;
  }

  return getSort;
};

async function get(query, getSort) {
  try {
    const response = await axios({
      url: `${common.BASE_URL}/products?${getSort}`,
      method: 'GET',
      header: {
        'Content-Type': 'application/json',
      },
      params: query,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

const renderProductsSort = async result => {
  if (!result.results.length) {
    notFoundMarkup(refs.productList);
    return;
  }
  save(common.PAGES, {
    page: result.page,
    perPage: result.perPage,
    totalPages: result.totalPages,
  });
  refs.productList.innerHTML = productMarkup(result.results);
};

const onSearchField = evt => {
  if (evt.target.value === '') {
    const currentQuery = load(common.LOCAL_QUERY_KEY);
    currentQuery.keyword = null;
    save(common.LOCAL_QUERY_KEY, currentQuery);
    const query = load(common.LOCAL_QUERY_KEY);
    renderProducts(query);
  }
};

refs.form.addEventListener('submit', onForm);
refs.categoryField.addEventListener('change', onCategoryField);
refs.abcField.addEventListener('change', onAbcField);
refs.searchField.addEventListener('input', onSearchField);

export { renderSelects };
