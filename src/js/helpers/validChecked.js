import { common } from '../common';
import { load } from '../storage';

const validChecked = products => {
  const currentCartProducts = load(common.LOCAL_CART_KEY) ?? [];

  const result = products.map(product => {
    const isInclude = currentCartProducts.some(
      ({ _id }) => _id === product._id
    );

    if (isInclude) {
      product['isChecked'] = true;
      return product;
    } else {
      product['isChecked'] = false;
      return product;
    }
  });

  return result;
};

export { validChecked };
