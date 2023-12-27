import { renderProducts } from './js/products';
import { save, load } from './js/storage';
import { common } from './js/common';
import { renderSelects } from './js/filters';
import { renderPopular } from './js/popular';
import { dataDiscountProd } from './js/dicsount_products';
import { renderFooter } from './js/footer';
import { handleMediaChange } from './js/pagination';

const mediaQuery = window.matchMedia('(min-width: 768px)');

save(common.LOCAL_QUERY_KEY, common.INIT_QUERY);

const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

renderSelects();

renderProducts(storage_query);

handleMediaChange(mediaQuery);

renderPopular();
dataDiscountProd();
renderFooter();


