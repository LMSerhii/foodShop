import axios from 'axios';
import { common } from './common';
import './api_service';
import { getData, fetchData, render, createMarkup, queryParams } from './products';
const filterForm = document.getElementById('filterForm');

document.getElementById('sortProducts').addEventListener('click', () => {
    document.getElementById('sortBProductsList').classList.toggle('show');
});

document.getElementById('categorySelect').addEventListener('click', () => {
    document.getElementById('categoryBProductsList').classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function () {
    const getById = (id) => document.getElementById(id);

    const hideList = (listElement, triggerElement) => (event) => {
        if (!listElement.contains(event.target) && event.target !== triggerElement) {
            listElement.classList.remove('show');
        }
    };

    const createQueryParams = (selectedCategory, sortingValue, inputValue) => {
        const queryParams = {
            category: selectedCategory,
        };

        if (sortingValue) {
          if (sortingValue === 'alphabetical') {
            queryParams.byABC = true;
          } else if (sortingValue === 'reverse-alphabetical') {
            queryParams.byABC = false;
          }

          if (sortingValue === 'cheap') {
            queryParams.byPrice = true;
          } else if (sortingValue === 'expensive') {
            queryParams.byPrice = false;
          }

          if (sortingValue === 'popular') {
            queryParams.byPopularity = false;
          } else if (sortingValue === 'not-popular') {
            queryParams.byPopularity = true;
          }
        }
        

          

       
        if (inputValue) {
            queryParams.keyword = inputValue;
        }

        return queryParams;
    };

    const handleCategoryClick = (event, listElement, triggerElement) => {
        if (event.target.classList.contains('category-item')) {
            let selectedCategory = event.target.getAttribute('data-value');

            console.log('Selected category:', selectedCategory);

            triggerElement.textContent = event.target.textContent;
            triggerElement.setAttribute('data-selected-category', selectedCategory);

            listElement.classList.remove('show');

            const sortingValue = getById('sortProducts').getAttribute('data-selected-sort');
            const keywordInput = getById('keywordInput');
            const inputValue = keywordInput.value;
            const queryParams = createQueryParams(selectedCategory, sortingValue, inputValue);

       
            render(queryParams);
        }
    };

    const handleSortClick = (event, listElement, triggerElement) => {
        if (event.target.classList.contains('category-item')) {
            let selectedSort = event.target.getAttribute('data-value');

            console.log('Selected sort:', selectedSort);

            triggerElement.textContent = event.target.textContent;
            triggerElement.setAttribute('data-selected-sort', selectedSort);

            listElement.classList.remove('show');

            const selectedCategory = getById('categorySelect').getAttribute('data-selected-category');
            const keywordInput = getById('keywordInput');
            const inputValue = keywordInput.value;

            const queryParams = createQueryParams(selectedCategory, selectedSort, inputValue);

           
            render(queryParams);
        }
    };

    const sortTriggerElement = getById('sortProducts');
    const sortList = getById('sortBProductsList');
    const categoryTriggerElement = getById('categorySelect');
    const categoryList = getById('categoryBProductsList');

    document.addEventListener('click', hideList(sortList, sortTriggerElement));
    document.addEventListener('click', hideList(categoryList, categoryTriggerElement));

    categoryList.addEventListener('click', (event) => handleCategoryClick(event, categoryList, categoryTriggerElement));
    sortList.addEventListener('click', (event) => handleSortClick(event, sortList, sortTriggerElement));

    const filterForm = getById('filterForm');
    filterForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const keywordInput = getById('keywordInput');
        const inputValue = keywordInput.value;

        if (!inputValue.trim()) {
            console.log('Please enter a keyword before submitting.');
            return;
        }

        try {
            const selectedCategory = categoryTriggerElement.getAttribute('data-selected-category');
            const selectedSort = sortTriggerElement.getAttribute('data-selected-sort');

            const queryParams = createQueryParams(selectedCategory, selectedSort, inputValue);

           
            render(queryParams);
        } catch (error) {
            console.error(error);
        }
    });
});

// byABC=false
// byABC=false
// byPrice=false
// byPrice=false
// Popularity=false
// Popularity=false


// alphabetical = (byABC=false)
// reverse-alphabetical  = (byABC=false)
// cheap  = (byPrice=false)
// expensive  = (byPrice=false)
// popular  = (Popularity=false)
// not-popular  = (Popularity=false)


// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byABC=false
// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byABC=true
// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byPrice=true
// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byPrice=false
// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byPopularity=false
// https://food-boutique.b.goit.study/api/products?page=1&limit=6&byPopularity=true

// https://food-boutique.b.goit.study/api/products?page=1&limit=6&category=Deli&byABC=false



