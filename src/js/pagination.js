import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { load } from './storage';

let page = load('pages').page;


document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('pagination-container');

  const pagination = new Pagination(container, {
    page,
    totalItems: load('pages').perPage * load('pages').totalPages,
    itemsPerPage: load('pages').perPage,
    visiblePages: 2,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    // template: {
    //     page: `<a href="#" class="tui-page-btn">{{page}}</a>`,
    //     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    //     moveButton:
    //       `<a href="#" class="tui-page-btn tui-next">` +
    //         `<span class="tui-ico-next">1</span>` +
    //       `</a>`,
    //     disabledMoveButton:
    //       '<span class="tui-page-btn tui-is-disabled tui-disabled">' +
    //         '<span class="tui-ico-disabled"></span>' +
    //       '</span>',
    //     moreButton:
    //       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
    //         '<span class="tui-ico-ellip">...</span>' +
    //       '</a>'
    //   }
  });
});
