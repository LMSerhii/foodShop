import { openModalFooter } from '../modal';
import { getDataId } from '../api_service';
import { modalProductMarkup } from './modalMarkups';

const openModal = async (evt, element) => {
  const { id } = evt.target.closest('.js-card').dataset;

  const data = await getDataId(id);

  const markup = modalProductMarkup(data);

  openModalFooter(element, markup);
};

export { openModal };
