import svg_sprite from '../../img/sprite.svg';
import { getDataId } from '../api_service';
import { save, load } from '../storage';
import { common } from '../common';

const cart = load(common.LOCAL_CART_KEY) ?? [];

const addToCart = async evt => {
  const { id } = evt.target.closest('.js-card').dataset;
  const product = await getDataId(id);

  const inStorage = cart.some(({ _id }) => _id === product._id);

  if (inStorage) {
    return;
  }

  cart.push(product);
  save(common.LOCAL_CART_KEY, cart);

  evt.target.closest(
    '.js-cart'
  ).innerHTML = `<button class="btn-check js-cart" type="button">
   <svg class="icon-check" width="18" height="18">
                               <use href="${svg_sprite}#check"></use>
                           </svg>
                         </button>`;
};

export { addToCart };
