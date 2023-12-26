import { getDiscount } from './api_service';
import { refs } from './refs';
import { createDiscountMarkup } from './markupFunctions';

// fetch data
const dataDiscountProd = async () => {
  const data = await getDiscount();
  const markup = createDiscountMarkup(data.slice(0, 2));
  refs.dicsProd.innerHTML = markup;
};

// add to ul

// add listner to products

const discProdList = document.querySelector('.discount-product-list');
console.log(discProdList);

// const clickOnDiscount = () => {};

refs.discProdList.addEventListener('click', clickOnDiscount());

function clickOnDiscount(event) {
  if (event) {
    event.preventDefault();
    console.log(aaaa);
    // const openDiskProd =
    //   openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    // openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    // mobileMenu.classList.toggle('is-open');
  }
}

export { dataDiscountProd };
