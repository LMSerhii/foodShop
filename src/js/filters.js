import { getCategories } from './api_service';
import { save, load } from './storage';
import { common } from './common';
import { renderProducts } from './products';
import SlimSelect from 'slim-select';
import '../../node_modules/slim-select/dist/slimselect.css';

new SlimSelect({
  select: '#abcField',
  settings: {
    placeholderText: 'A to Z',
    showSearch: false,
  },
});

const refs = {
  searchField: document.querySelector('.js-input'),
  categoryField: document.querySelector('#categoryField'),
  abcField: document.querySelector('#abcField'),
  form: document.querySelector('.form'),
};

// const abcList = ["A to Z", "Z to A", "Cheap", "Expensive", "Popular", "Not popular", "Show all"]

const createCategoryMarkup = arrey => {
  if (!arrey.length) {
    return `<option value="not_found_categories">Not found categories</option>`;
  }
  return arrey
    .map(
      category =>
        `<option value="${category}">${category
          .replace('_', ' ')
          .replace('_', ' ')}</option>`
    )
    .join('');
};


const renderCategory = async () => {
  const data = await getCategories();
  const markup = createCategoryMarkup(data);
  refs.categoryField.insertAdjacentHTML('beforeend', markup);

  new SlimSelect({
    select: '#categoryField',
    settings: {
      placeholderText: 'Categories',
      showSearch: false,
    },
  });
};

renderCategory()

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

const onAbcField = evt => {
  const currentCategory = evt.target.value;
  console.log(currentCategory);
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

export { renderCategory };