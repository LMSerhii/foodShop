import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

const openModalFooter = (element, markup) => {
  const handleGalleryElement = event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  };

  const instance = basicLightbox.create(markup, {
    onShow: instance => {
      element.addEventListener('keydown', handleGalleryElement);

      instance.element().querySelector('.js-modal-close').onclick = () =>
        instance.close();
    },

    onClose: instance => {
      element.removeEventListener('keydown', handleGalleryElement);
    },
  });

  instance.show();
};

export { openModalFooter };
