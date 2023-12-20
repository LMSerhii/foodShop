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
    
    // Функция для обработки клика по категории или сортировке
    const handleCategoryClick = (event, listElement, triggerElement) => {
        if (event.target.classList.contains('category-item')) {
            const selectedCategory = event.target.getAttribute('data-value');
            
            // Обновление текста кнопки
            triggerElement.textContent = event.target.textContent;
    
            // Присвоение выбранной категории сортировки к элементу
            triggerElement.setAttribute('data-selected-category', selectedCategory);
    
            console.log('Selected category:', selectedCategory);

            // Закрытие списка после выбора категории
            listElement.classList.remove('show');
        }
    };

    const sortTriggerElement = s('sortProducts');
    const sortList = s('sortBProductsList');
    const categoryTriggerElement = s('categorySelect');
    const categoryList = s('categoryBProductsList');

    // Добавление слушателей событий
    document.addEventListener('click', hideList(sortList, sortTriggerElement));
    document.addEventListener('click', hideList(categoryList, categoryTriggerElement));

    // Передача параметров в функцию обработки клика
    categoryList.addEventListener('click', (event) => handleCategoryClick(event, categoryList, categoryTriggerElement));
    sortList.addEventListener('click', (event) => handleCategoryClick(event, sortList, sortTriggerElement));
});
