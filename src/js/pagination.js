import Pagination from 'tui-pagination';
import { load, save } from './storage';
import { common } from './common';
import { renderProducts } from './products';

Pagination.prototype.updateView = function () {
  this._paginate(this.getCurrentPage());
};

const container = document.getElementById('pagination');
const options = {
  totalItems: 90,
  itemsPerPage: 6,
  visiblePages: window.innerWidth < 768 ? 2 : 3,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}} ">' +
      `` +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' + '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);

pagination.on('afterMove', function (eventData) {
  const pages = load(common.PAGES);
  const dataquery = load(common.LOCAL_QUERY_KEY);
  save(common.LOCAL_QUERY_KEY, {
    ...dataquery,
    page: eventData.page,
    limit: pages.perPage,
  });
  const storage_query = load(common.LOCAL_QUERY_KEY) ?? [];

  renderProducts(storage_query);
});

function setTotalItems(totalItems) {
  console.log(options.itemsPerPage);
  const pages = Math.ceil(totalItems / options.itemsPerPage);
  if (pages < 2) {
    container.classList.add('hidden');
  } else {
    container.classList.remove('hidden');
  }
  pagination.setTotalItems(totalItems);

  pagination.updateView();
}

function reset() {
  pagination.reset();

  pagination.updateView();
}
function getCurrentPage() {
  return pagination.getCurrentPage();
}
export { setTotalItems, reset, getCurrentPage };
