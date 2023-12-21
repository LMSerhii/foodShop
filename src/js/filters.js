import axios from 'axios';
import SlimSelect from 'slim-select';
import '../../node_modules/slim-select/dist/slimselect.css';
import { getCategories } from './api_service';

const filtersSection = document.querySelector('.filters-form-container');

const arrCategories = await getCategories();

function createMarkupFilters(arr) {
    return `<div class="container">
    <label class="filters-form-label" for="filters-form-id">Filters:</label>
    <form class="filters-form" id="filters-form-id">
        <input type="text" placeholder="Search for anything">
        <select class="categories-select" name="categories" id="categories-select-id">
            <option value="">${arrCategories[0]}</option>
            <option value="">${arrCategories[1]}</option>
            <option value="">${arrCategories[2]}</option>
            <option value="">${arrCategories[3]}</option>
            <option value="">${arrCategories[4]}</option>
            <option value="">${arrCategories[5]}</option>
            <option value="">${arrCategories[6]}</option>
            <option value="">${arrCategories[7]}</option>
            <option value="">${arrCategories[8]}</option>
            <option value="">${arrCategories[9]}</option>
            <option value="">${arrCategories[10]}</option>
            <option value="">Show all</option>
        </select>
        <select class="filters-select" name="filters" id="filters-select-id">
            <option value="A to Z">A to Z</option>
            <option value="Z to A">Z to A</option>
            <option value="Cheap">Cheap</option>
            <option value="Expensive">Expensive</option>
            <option value="Popular">Popular</option>
            <option value="Not popular">Not popular</option>
            <option value="Show all">Show all</option>
        </select>
        <button class="filters-button" type="submit">
            <svg width="20" height="20" fill="#010101">
                <path d="M12.917 11.667h-.659l-.233-.225a5.392 5.392 0 0 0 1.308-3.525 5.417 5.417 0 1 0-5.416 5.416 5.393 5.393 0 0 0 3.525-1.308l.225.233v.659l4.166 4.158 1.242-1.242-4.158-4.166Zm-5 0a3.745 3.745 0 0 1-3.75-3.75 3.745 3.745 0 0 1 3.75-3.75 3.745 3.745 0 0 1 3.75 3.75 3.745 3.745 0 0 1-3.75 3.75Z"></path>
              </svg>
        </button>
    </form>
    </div>`}

filtersSection.innerHTML = createMarkupFilters(arrCategories);

new SlimSelect({
  select: '#filters-select-id',
  settings: {
    showSearch: false,
  },
});

new SlimSelect({
  select: '#categories-select-id',
  settings: {
    placeholderText: 'Categories',
    showSearch: false,
  },
});