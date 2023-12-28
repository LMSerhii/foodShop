import svg_sprite from '../../img/sprite.svg';
import sub1x from '../../img/subscribing@1x.png';
import sub2x from '../../img/subscribing@2x.png';

const success = `
                  <div class="modal">

                    <div class="container">

                      <div class="modal-box-success">

                        <button class="modal-close js-modal-close" type="button" >
                          <svg class="modal-icon" width="22" height="22">
                            <use href="${svg_sprite}#close"></use>
                          </svg>
                        </button>

                        <div class="modal-text-box">

                          <p class="subscription-thanks">
                            Thanks for subscribing for
                            <span class="subscription-accent">new</span> products
                          </p>

                          <p class="subscription-promise">
                            We promise you organic and high-quality products that will meet your
                            expectations. Please stay with us and we promise you many pleasant
                            surprises.
                          </p>

                        </div>
                        <img
                        class="modal-image"
                        srcset="${sub1x} 1x, ${sub2x} 2x"
                        src="${sub2x}"
                        alt="basket of fresh vegetables"
                        width="490"
                        />
   
                      </div>
                     

                    </div>

                  </div>
`;

const error = `
              <div class="modal">

                <div class="container">
                  <div class="modal-box">
                    <button class="modal-close js-modal-close" type="button" data-modal-close>
                      <svg class="modal-icon" width="22" height="22">
                        <use href="${svg_sprite}#close"></use>
                      </svg>
                    </button>
                    <div class="modal-text-box">
                      <p class="subscription-thanks">
                        This <span class="subscription-accent">email address</span> has already been entered
                      </p>
                      <p class="subscription-promise">
                        You have already subscribed to our new products. Watch for offers at the mailing address.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
              `;

const succesOrder = arrey => {
  const { img, name } = arrey[0];

  return `<div class="modal">
            <div class="container">
              <div class="order-modal-box">
                <button class="modal-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${svg_sprite}#close"></use>
                  </svg>
                </button>
            
                <img class="order-image js-img-order" src="${img}" alt="${name}" width="140" height="140" />
                <p class="order-title">Order success</p>
                <p class="order-text">
                  Thank you for shopping at Food Boutique. Your order has been received and
                  is now being freshly prepared just for you! Get ready to indulge in
                  nourishing goodness, delivered right to your doorstep. We're thrilled to
                  be part of your journey to better health and happiness.
                </p>
              </div>
            </div>
          </div>`;
};

const modalProductMarkup = ({
  name,
  desc,
  img,
  category,
  price,
  size,
  is10PercentOff,
  popularity,
}) => {
  return `
            <div class="modal">
            <div class="container">
              <div class="modal-box-product">
                <button class="modal-product-close js-modal-close" type="button">
                  <svg class="modal-icon" width="22" height="22">
                    <use href="${svg_sprite}#close"></use>
                  </svg>
                </button>

                <div class="modal-product-top">
                  <div class="modal-product-img-box">
                    <img
                      class="modal-product-image"
                      src="${img}"
                      alt="${name}"
                      width="160"
                      height="160"
                      loading="lazy"
                    />
                  </div>
                  <div class="modal-product-text-box">
                    <p class="modal-product-name">${name}</p>
                    <ul class="modal-product-list">
                      <li class="modal-produt-item">Category:
                        <span class="list-variables">${category}</span>
                      </li>
                      <li class="modal-produt-item">Size:
                        <span class="list-variables">${size}</span>
                      </li>
                      <li class="modal-produt-item">Popularity:
                        <span class="list-variables">${popularity}</span>
                      </li>
                    </ul>
                    <div class="scroll">
                    <p class="modal-product-desc">
                      ${desc}
                    </p>
                    </div>
                  </div>
                </div>

                <div class="modal-product-bottom">
                  <p class="modal-product-price">$${price}</p>

                  <button class="modal-product-addBtn js-to-cart">
                    Add to
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${svg_sprite}#cart"></use>
                    </svg>
                  </button>

                  <button class="modal-product-removeBtn js-from-cart">
                    Remove from
                    <svg class="modal-product-icon" width="18" height="18">
                      <use href="${svg_sprite}#cart"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

`;
};

export { success, error, succesOrder, modalProductMarkup };
