import * as basicLightbox from 'basiclightbox';
import '../../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import { getDataId } from '../api_service';
import { modalProductMarkup } from './modalMarkups';

const openModal = async (evt, element) => {
  const { id } = evt.target.closest('.js-card').dataset;

  const data = await getDataId(id);

  const markup = modalProductMarkup(data);

  const onProduct = event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  };

  const instance = basicLightbox.create(markup, {
    onShow: instance => {
      element.addEventListener('keydown', onProduct);

      instance.element().querySelector('.js-modal-close').onclick = () =>
        instance.close();
    },

    onClose: instance => {
      element.removeEventListener('keydown', onProduct);
    },
  });

  instance.show();
};

export { openModal };
