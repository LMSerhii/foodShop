import iziToast from 'izitoast';
import '../../../node_modules/izitoast/dist/css/iziToast.min.css';
import svg_sprite from '../../img/sprite.svg';
import { getDataId } from '../api_service';
import { save, load } from '../storage';
import { common } from '../common';

const cart = load(common.LOCAL_CART_KEY) ?? [];

const addToCart = async evt => {
  const { id } = evt.target.closest('.js-card').dataset;
  console.log(id);

  const product = await getDataId(id);

  const inStorage = cart.some(({ _id }) => _id === product._id);

  if (inStorage) {
    return;
  }

  console.log(product);

  cart.push(product);
  save(common.LOCAL_CART_KEY, cart);

  evt.target.closest(
    '.js-cart'
  ).innerHTML = `<button class="card-btn js-cart" type="button">
                    <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${svg_sprite}#check"></use>
                    </svg>
                 </button>`;
};

const addToCartFromPopular = async evt => {
  const { id } = evt.target.closest('.js-card').dataset;
  console.log(id);

  const product = await getDataId(id);

  const inStorage = cart.some(({ _id }) => _id === product._id);

  if (inStorage) {
    return;
  }

  console.log(product);

  cart.push(product);
  save(common.LOCAL_CART_KEY, cart);

  evt.target.closest(
    '.js-cart'
  ).innerHTML = `<button class="popular-card-btn js-cart" type="button">
                    <svg class="popular-icon-check" width="18" height="18">
                      <use href="${svg_sprite}#check"></use>
                    </svg>
                 </button>`;
};

export { addToCart, addToCartFromPopular };
