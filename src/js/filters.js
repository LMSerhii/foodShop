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
        <input class="filters-input" type="text" placeholder="Search for anything">
        <select class="categories-select" name="categories" id="categories-select-id">
            <option data-placeholder="true"></option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[0]}">${arr[0]}</option>
            <option data-placeholder="true"></option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[1]}">${arr[1]}</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[2]}">${arr[2]}</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[3]}">${arr[3]}</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[4]}">${arr[4]}</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[5]}">${arr[5]}</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[6]}">${arr[6]}</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[7]}">${arr[7]}</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[8]}">${arr[8]}</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[9]}">${arr[9]}</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="${arr[10]}">${arr[10]}</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="">Show all</option>
        </select>
        <select class="filters-select" name="filters" id="filters-select-id">
            <option class="option-placeholder" data-placeholder="true">A to Z</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="A to Z">A to Z</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="Z to A">Z to A</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="Cheap">Cheap</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="Expensive">Expensive</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="Popular">Popular</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="Not popular">Not popular</option>
            <option style="color: rgba(1, 1, 1, 0.50); font-size: 14px; line-height: 1.28;" 
            value="Show all">Show all</option>
        </select>
        <button class="filters-button" type="submit">
            <svg width="20" height="20" fill="#010101">
                <path d="M12.917 11.667h-.659l-.233-.225a5.392 5.392 0 0 0 1.308-3.525 5.417 5.417 0 1 0-5.416 5.416 5.393 5.393 0 0 0 3.525-1.308l.225.233v.659l4.166 4.158 1.242-1.242-4.158-4.166Zm-5 0a3.745 3.745 0 0 1-3.75-3.75 3.745 3.745 0 0 1 3.75-3.75 3.745 3.745 0 0 1 3.75 3.75 3.745 3.745 0 0 1-3.75 3.75Z"></path>
              </svg>
        </button>
    </form>
    </div>`
}

filtersSection.innerHTML = createMarkupFilters(arrCategories);

new SlimSelect({
  select: '#filters-select-id',
  settings: {
    placeholderText: 'A to Z',
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