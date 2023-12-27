import { load } from './storage';
import { common } from './common';

const headerCount = () => {
  const cartCounter = document.querySelector('#product-count-header');
  const currValue = load(common.LOCAL_CART_KEY) ?? [];
  cartCounter.innerHTML = `(${currValue.length})`;
};

export { headerCount };
