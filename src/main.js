import { renderPopular } from './js/popular';
import { save, load } from './js/storage';
import { common } from './js/common';

save(common.LOCAL_QUERY_KEY, common.INIT_QUERY);

const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];
console.log(storage_query);

// renderPopular(storage_query);
