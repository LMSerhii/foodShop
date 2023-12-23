import './js/filters';

import { renderProducts } from './js/products';
import { save, load } from './js/storage';
import { common } from './js/common';

save(common.LOCAL_QUERY_KEY, common.INIT_QUERY);

const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];
console.log(storage_query);

renderProducts(storage_query);
