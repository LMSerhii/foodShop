import { renderProducts } from './js/products';
import { save, load } from './js/storage';
import { common } from './js/common';

import { renderSelects } from './js/filters';
import { renderPopular } from './js/popular';
import { dataDiscountProd } from './js/dicsount_products';
save(common.LOCAL_QUERY_KEY, common.INIT_QUERY);

const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

renderSelects();
renderProducts(storage_query);
renderPopular();
dataDiscountProd();

const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element === 12);

console.log(found);
// Expected output: 12
