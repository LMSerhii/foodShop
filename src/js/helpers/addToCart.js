import iziToast from 'izitoast';
import '../../../node_modules/izitoast/dist/css/iziToast.min.css';
import svg_sprite from '../../img/sprite.svg';

const addToCart = evt => {
  const { id } = evt.target.closest('.js-card').dataset;

  evt.target.closest(
    '.js-cart'
  ).innerHTML = ` <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${svg_sprite}#check"></use>
                    </svg>`;

  iziToast.success({
    message: 'Successfully added to cart',
  });
};

export { addToCart };
