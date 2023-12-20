import axios from 'axios';
import { common } from './common';
import './api_service';
import { getData, fetchData, render, createMarkup, queryParams } from './products';
const filterForm = document.getElementById('filterForm');



filterForm.addEventListener('submit', async function (event) {
  event.preventDefault();
  const keywordInput = document.getElementById('keywordInput');
  const inputValue = keywordInput.value;
  queryParams.keyword = inputValue;

  if (!inputValue.trim()) {
    console.log('Please enter a keyword before submitting.');
    return;
  }

  try {
    const data = await fetchData(queryParams);
    await render(queryParams);
  } catch (error) {
    console.error(error);
  }
});


document.getElementById('sortProducts').addEventListener('click', () => {
    document.getElementById('sortBProductsList').classList.toggle('show');
});
document.getElementById('categorySelect').addEventListener('click', () => {
    document.getElementById('categoryBProductsList').classList.toggle('show');
});


// получение значения списка
document.addEventListener('DOMContentLoaded', function() {
    const s = (e) => document.getElementById(e);
    const hideList = (l, t) => (event) => {
        if (!l.contains(event.target) && event.target !== t) {
            l.classList.remove('show');
        }
    };
    const handleCategoryClick = (event) => {
        if (event.target.classList.contains('category-item')) {
            const selectedCategory = event.target.getAttribute('data-value');
            console.log('Selected category:', selectedCategory);
        }
    };

    const sortTriggerElement = s('sortProducts');
    const sortList = s('sortBProductsList');
    const categoryTriggerElement = s('categorySelect');
    const categoryList = s('categoryBProductsList');

    document.addEventListener('click', hideList(sortList, sortTriggerElement));
    document.addEventListener('click', hideList(categoryList, categoryTriggerElement));

    categoryList.addEventListener('click', handleCategoryClick);
    sortList.addEventListener('click', handleCategoryClick);
});

  