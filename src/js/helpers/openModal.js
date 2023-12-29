import * as basicLightbox from 'basiclightbox';
import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';
import { getDataId } from '../api_service';
import { modalProductMarkup } from './modalMarkups';
import { save, load, remove } from '../storage';
import { common } from '../common';
import { renderProducts } from '../products';
import { headerCount } from '../header';

const openModal = async (evt, element) => {
  const { id } = evt.target.closest('.js-card').dataset;

  const data = await getDataId(id);

  const markup = modalProductMarkup(data);

  const instance = basicLightbox.create(markup, {
    onShow: instance => {
      element.addEventListener('keydown', onProduct);

      instance.element().querySelector('.js-modal-close').onclick = () => {
        instance.close();
      };

      const currentCart = load(common.LOCAL_CART_KEY) ?? [];

      const inStorage = currentCart.some(({ _id }) => _id === id);

      if (inStorage) {
        instance.element().querySelector('.js-to-cart').style.display = 'none';
        instance.element().querySelector('.js-from-cart').style.display =
          'flex';
      } else {
        instance.element().querySelector('.js-to-cart').style.display = 'flex';
        instance.element().querySelector('.js-from-cart').style.display =
          'none';
      }

      const toCart = instance.element().querySelector('.js-to-cart');
      const fromCart = instance.element().querySelector('.js-from-cart');

      toCart.addEventListener('click', () => {
        const currentCart = load(common.LOCAL_CART_KEY) ?? [];

        const inStorage = currentCart.some(({ _id }) => _id === id);

        if (inStorage) {
          return;
        }

        currentCart.push(data);
        save(common.LOCAL_CART_KEY, currentCart);
        headerCount();
        toCart.style.display = 'none';
        fromCart.style.display = 'flex';
      });

      fromCart.addEventListener('click', () => {
        const currentCart = load(common.LOCAL_CART_KEY) ?? [];

        const index = currentCart.findIndex(({ _id }) => _id === id);

        currentCart.splice(index, 1);

        remove(common.LOCAL_CART_KEY);

        save(common.LOCAL_CART_KEY, currentCart);
        headerCount();
        fromCart.style.display = 'none';
        toCart.style.display = 'flex';
      });
    },

    onClose: instance => {
      element.removeEventListener('keydown', onProduct);
    },
  });

  function onProduct(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

  instance.show();
};

export { openModal };
