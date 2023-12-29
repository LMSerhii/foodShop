import { renderProducts } from './js/products';
import { save, load } from './js/storage';
import { common } from './js/common';
import { renderSelects } from './js/filters';
import { renderPopular } from './js/popular';
import { dataDiscountProd } from './js/dicsount_products';
import { renderFooter } from './js/footer';
import { handleMediaChange } from './js/pagination';
import { headerCount } from './js/header';

import { refs } from './js/refs';

const mediaQuery_min768 = window.matchMedia('(min-width: 768px)');

const mediaQuery_min1440 = window.matchMedia('(min-width: 1440px)');
const mediaQuery_max768 = window.matchMedia('(max-width: 767.9px)');
const mediaQuery_max1440 = window.matchMedia('(max-width: 1439.9px)');
const mediaQuery_min768_max1440 = window.matchMedia(
  '(min-width: 768px) and (max-width: 1439.9px)'
);

const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

if (Array.isArray(storage_query)) {
  save(common.LOCAL_QUERY_KEY, common.INIT_QUERY);
} else {
  const currentQuery = load(common.LOCAL_QUERY_KEY);
  save(common.LOCAL_QUERY_KEY, currentQuery);

  refs.searchField.value = currentQuery.keyword;
  refs.categoryField.value = currentQuery.category;
}

headerCount();

renderSelects();

if (mediaQuery_min1440.matches) {
  if (Object.keys(storage_query).length) {
    const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

    storage_query.limit = 9;
    save(common.LOCAL_QUERY_KEY, storage_query);
    renderProducts(storage_query);
  }
}

if (mediaQuery_min768_max1440.matches) {
  if (Object.keys(storage_query).length) {
    const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

    storage_query.limit = 8;
    save(common.LOCAL_QUERY_KEY, storage_query);
    renderProducts(storage_query);
  }
}

if (mediaQuery_max768.matches) {
  if (Object.keys(storage_query).length) {
    const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

    storage_query.limit = 6;
    save(common.LOCAL_QUERY_KEY, storage_query);
    renderProducts(storage_query);
  }
}

handleMediaChange(mediaQuery_min768);

renderPopular();
dataDiscountProd();
renderFooter();

mediaQuery_min768.addListener(mediaQueryList => {
  if (mediaQueryList.matches) {
    if (Object.keys(storage_query).length) {
      const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

      storage_query.limit = 8;
      save(common.LOCAL_QUERY_KEY, storage_query);
      renderProducts(storage_query);
    }
  }
});

mediaQuery_min1440.addListener(mediaQueryList => {
  if (mediaQueryList.matches) {
    if (Object.keys(storage_query).length) {
      const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

      storage_query.limit = 9;
      save(common.LOCAL_QUERY_KEY, storage_query);
      renderProducts(storage_query);
    }
  }
});

mediaQuery_max1440.addListener(mediaQueryList => {
  if (mediaQueryList.matches) {
    if (Object.keys(storage_query).length) {
      const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];
      storage_query.limit = 8;
      save(common.LOCAL_QUERY_KEY, storage_query);
      renderProducts(storage_query);
    }
  }
});

mediaQuery_max768.addListener(mediaQueryList => {
  if (mediaQueryList.matches) {
    if (Object.keys(storage_query).length) {
      const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

      storage_query.limit = 6;
      save(common.LOCAL_QUERY_KEY, storage_query);
      renderProducts(storage_query);
    }
  }
});
