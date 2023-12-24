import { renderProducts } from './js/products';
import { save, load } from './js/storage';
import { common } from './js/common';
import { renderSelects } from './js/filters';

save(common.LOCAL_QUERY_KEY, common.INIT_QUERY);

const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

renderSelects();
renderProducts(storage_query);
