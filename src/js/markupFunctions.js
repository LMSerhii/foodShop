import svg_sprite from '../img/sprite.svg';
import empty_basket from '../img/yellow_shopping_basket.png';
import { refs } from './refs';

// products

const productMarkup = arrey => {
  if (!arrey.length) {
    return;
  }

  return arrey
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        size,
        is10PercentOff,
        popularity,
        isChecked,
      }) => {
        if (!is10PercentOff) {
          if (isChecked) {
            return `<li class="card js-card" data-id=${_id}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${img}" alt="${name}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${name}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${category.replace('_', ' ')}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${size}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${popularity}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${price}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${svg_sprite}#check"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`;
          } else {
            return `<li class="card js-card" data-id=${_id}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${img}" alt="${name}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${name}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category:
                    <span>${category.replace('_', ' ')}</span>
                  </li>
                  <li class="card-prodcuts-item">Size:
                    <span>${size}</span>
                  </li>
                  <li class="card-prodcuts-item">Popularity:
                    <span>${popularity}</span>
                  </li>
              </ul>
              
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${price}</p>
  
              <button class="card-btn js-cart" type="button">
  
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${svg_sprite}#cart"></use>
                  </svg>
  
              </button>
  
            </div>
        </li>`;
          }
        } else {
          if (isChecked) {
            return `<li class="card js-card" data-id=${_id}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${img}" alt="${name}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${name}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${category.replace(
                    '_',
                    ' '
                  )}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${size}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${popularity}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${price}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon-check" width="18" height="18">
                      <use href="${svg_sprite}#check"></use>
                  </svg>
              </button>

              <svg class="discount-icon" width="60" height="60">
                <use href="${svg_sprite}#discount"></use>
              </svg>
              
            </div>
        </li>`;
          } else {
            return `<li class="card js-card" data-id=${_id}>
            <div class="card-top">
  
              <div class="card-img-wrapper">
                  <img src="${img}" alt="${name}" width="140" height="140" loading="lazy"/>
              </div>
  
              <h3 class="card-product-name">${name}</h3>
  
              <ul class="card-prodcuts-list">
                  <li class="card-prodcuts-item">Category: <span>${category.replace(
                    '_',
                    ' '
                  )}</span></li>
                  <li class="card-prodcuts-item">Size: <span>${size}</span></li>
                  <li class="card-prodcuts-item">Popularity: <span>${popularity}</span></li>
              </ul>
            </div>
  
            <div class="card-bottom">
              <p class="card-producs-price">$${price}</p>
  
              <button class="card-btn js-cart" type="button">
                  <svg class="card-btn-icon" width="18" height="18">
                      <use href="${svg_sprite}#cart"></use>
                  </svg>
              </button>
              <svg class="discount-icon" width="60" height="60">
                <use href="${svg_sprite}#discount"></use>
              </svg>
              
            </div>
        </li>`;
          }
        }
      }
    )
    .join('');
};

const errorMarkup = (element, status) => {
  element.innerHTML = ` <div class="error_box">
                                <p class="error_title">
                                    Error<span>${status}</span>
                                </p>
                                <p class="error_text">
                                  🤦‍♂️ Something has gone wrong ....
                                </p>
                              </div>
  `;
};

const notFoundMarkup = element => {
  element.innerHTML = `<div class="notFound_box">
                              <p class="notFound_title">
                                  Nothing was found for the selected <span class="notFound_title_span">filters...</span>
                              </p>
                              <p class="notFound_text">
                                Try adjusting your search parameters or browse our range by other criteria to
                                find the perfect product for you.
                              </p>
                              </div>
                            `;
  refs.paginationContainer.style.display = 'none';
};

// filters

const createCategoryMarkup = arrey => {
  if (!arrey.length) {
    return `<option value="not_found_categories">Not found categories</option>`;
  }
  return arrey
    .map(
      category =>
        `<option value="${category}">${category
          .replace('_', ' ')
          .replace('_', ' ')}</option>`
    )
    .join('');
};

const createSortMarkup = array => {
  return array
    .map(category => {
      return `<option value="${category.value}">${category.label}</option>`;
    })
    .join('');
};

//  Popular

const createMarkupPopular = arrey => {
  if (!arrey.length) {
    return;
  }
  return arrey
    .map(({ _id, name, img, category, size, popularity, isChecked }) => {
      if (isChecked) {
        return `<li class="popular-card js-card" data-id=${_id}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${img}" alt="${name}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${name}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${category.replace('_', ' ')}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${size}</span></li>
                <li class="popular-info-style">Popularity: <span>${popularity}</span></li>
                </div>
            </ul>
                                </div>
          </div>

        <div class="popular-card-bottom">
          
          <button class="popular-btn-check js-cart" type="button">
            <svg class="popular-icon-check" width="18" height="18">
              <use href="${svg_sprite}#check"></use>
            </svg>
          </button>
          
        </div>
        </div>
    </li>`;
      } else {
        return `<li class="popular-card js-card" data-id=${_id}>
        <div class="popular-box">
          <div class="popular-wraper">
            <div class="popular-card-img-wrap">
                <img src="${img}" alt="${name}" width="56" height="56" loading="lazy"/>
            </div>
            <div class="popular-card-info-box">
            
              <h3 class="popular-name">${name}</h3>
            
            <ul class="popular-info-list">
                <li class="popular-info-style">Category:
                <span>${category.replace('_', ' ')}</span></li>
                <div class="popular-info-wraper">
                <li class="popular-info-style">Size: <span>${size}</span></li>
                <li class="popular-info-style">Popularity: <span>${popularity}</span></li>
                </div>
            </ul>
                                </div>
          </div>

        <div class="popular-card-bottom">
          
          <button class="popular-card-btn js-cart" type="button">
              <svg class="popular-icon" width="18" height="18">
                  <use href="${svg_sprite}#cart"></use>
              </svg>
          </button>
        </div>
        </div>
    </li>`;
      }
    })
    .join('');
};

const createDiscountMarkup = arrey => {
  return arrey
    .map(({ img, name, price, _id, is10PercentOff, isChecked }) => {
      if (is10PercentOff) {
        if (isChecked) {
          return `
          <li class="discount-product-element js-card" data-id=${_id}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${svg_sprite}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${img}" alt="${name}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${name}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${price}</p>
  
            <button class="card-btn js-cart" type="button">
            <svg class="card-btn-icon-check" width="18" height="18">
                <use href="${svg_sprite}#check"></use>
            </svg>

        </button>
          </div>
  
          </div>
          
          </li>`;
        } else {
          return `
          <li class="discount-product-element js-card" data-id=${_id}>
  
            <svg class="discount-label" width="60" height="60">
            <use href="${svg_sprite}#discount"></use>
            </svg>
  
            <div class="discount-product-img-wrapper">
             <img class="discount-product-img" src="${img}" alt="${name}" width="114" height="114" loading="lazy">
            </div>
          
          <div class="discount-product-descr">
  
           <div class="discount-product-name-wrapper">
             <h3 class="discount-product-name">${name}</h3>
            </div>
  
           <div class="discount-product-price-wrapper">
            <p class="discount-product-price">$${price}</p>
  
            <button class="discount-product-btn js-cart" type="button">
  
              <svg class="discount-product-icon" width="18" height="18">
                <use href=" ${svg_sprite}#cart"></use>
              </svg>
           
            </button>
          </div>
  
          </div>
          
          </li>`;
        }
      } else {
        return `<div class="notFound_box">
                  <p class="notFound_title">
                      Nothing was found for the selected <span>filters...</span>
                  </p>
                  <p class="notFound_text">
                    Try adjusting your search parameters or browse our range by other criteria to
                    find the perfect product for you.
                  </p>
                </div>
      `;
      }
    })
    .join('');
};

// cart

const producCartMarkup = arrey => {
  if (!arrey.length) {
    return `
 
  <img class="basket-img" src="${empty_basket}" alt="Yellow empty basket">
  <div class="basket-text">
      <p class="empty-text"> Your basket is <span>empty...</span></p>
      <p class="empty-comment">Go to the main page to select your favorite products and add them to the cart.</p>
  </div>
  `;
  }
  return arrey
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        size,
        is10PercentOff,
        popularity,
      }) => {
        if (!is10PercentOff) {
          return `<li class="js-card product-card" data-id=${_id}>
                  <img class="product-card-img" src="${img}" alt="${name}">
                      <div class="product-container">
                          <div class="product-title">
                              <h2 class="product-name">${name}</h2>
                              <button type="button" id="test" class="btn-del-product js-close" data-product-id="${_id}">
                                  <svg class="delete-icon js-close" width="18" height="18">
                                      <use class="js-close" href="${svg_sprite}#close"></use>
                                  </svg>
                              </button>
                      </div>
                      <div class="product-category">
                          <p class="product-info"><span class="info-style">Category:</span> ${category.replace(
                            '_',
                            ' '
                          )} <span class="info-style info-space">Size:</span> ${size}</p>
                      </div>
                      <div class="cart-product-counter ">
                          <p class="product-price product-name m">$${price}</p>
                          
                      </div>
              </li>`;
        } else {
          return `<li class="js-card product-card" data-id=${_id}>
                  <img class="product-card-img" src="${img}" alt="${name}">
                      <div class="product-container">
                          <div class="product-title">
                              <h2 class="product-name">${name}</h2>
                              <button type="button" id="test" class="btn-del-product js-close" data-product-id="${_id}">
                                  <svg class="delete-icon js-close" width="18" height="18">
                                      <use href="${svg_sprite}#close"></use>
                                  </svg>
                              </button>
                      </div>
                      <div class="product-category">
                          <p class="product-info"><span class="info-style">Category:</span> ${category.replace(
                            '_',
                            ' '
                          )} <span class="info-style info-space">Size:</span> ${size}</p>
                      </div>
                      <p class="product-price product-name m">$${price}</p>
                      
              </li>

              `;
        }
      }
    )
    .join('');
};

export {
  productMarkup,
  errorMarkup,
  notFoundMarkup,
  createCategoryMarkup,
  createSortMarkup,
  createMarkupPopular,
  producCartMarkup,
  createDiscountMarkup,
};
