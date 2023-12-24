import { common } from '../common';

const addToCart = async evt => {
  const { id } = evt.target.closest('.js-card').dataset;

  const popularProduct = await getDataId(id);

  const inStorage = cart.some(({ _id }) => _id === product._id);

  if (inStorage) {
    return;
  }

  cart.push(product);
  save(common.LOCAL_CART_KEY, cart);

  evt.target.closest();
};
