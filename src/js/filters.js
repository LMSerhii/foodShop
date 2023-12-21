

import { render} from './products';


// Навешиваем обработчик события "click" на элемент с id "sortProducts"
// при клике вызываем функцию toggleSortList
document.getElementById('sortProducts').addEventListener('click', toggleSortList);
function toggleSortList() {
  toggleList('sortBProductsList');
}
// Навешиваем обработчик события "click" на элемент с id "categorySelect"
// при клике вызываем функцию toggleCategoryList
document.getElementById('categorySelect').addEventListener('click', toggleCategoryList);

function toggleCategoryList() {
  toggleList('categoryBProductsList');
}
// Функция для переключения видимости списка элементов по его id
function toggleList(listId) {
  const listElement = document.getElementById(listId);
  listElement.classList.toggle('show');
}

// Функция, скрывающая список, если произошел клик за его пределами
function hideList(listElement, triggerElement) {
  return function (event) {
    if (!listElement.contains(event.target) && event.target !== triggerElement) {
      listElement.classList.remove('show');
    }
  };
}

// Функция для создания объекта с параметрами запроса
const createQueryParams = (selectedCategory, sortingValue, inputValue) => {
  // Инициализируем объект queryParams с обязательным параметром "category"
  const queryParams = {
    category: selectedCategory,
  };

  // Добавляем параметры в зависимости от выбранного значения сортировки
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

  // Добавляем параметр "keyword" в случае наличия введенного значения
  if (inputValue) {
    queryParams.keyword = inputValue;
  }

  return queryParams;
};

// Функция обработки клика по категории
function handleCategoryClick(event, listElement, triggerElement) {
  if (event.target.classList.contains('category-item')) {
    let selectedCategory = event.target.getAttribute('data-value');
    console.log('Selected category:', selectedCategory);

    triggerElement.textContent = event.target.textContent;
    triggerElement.setAttribute('data-selected-category', selectedCategory);

    listElement.classList.remove('show');

    // Получаем значения сортировки и ключевого слова
    const sortingValue = document.getElementById('sortProducts').getAttribute('data-selected-sort');
    const keywordInput = document.getElementById('keywordInput');
    const inputValue = keywordInput.value;

    // Формируем объект с параметрами и вызываем функцию отрисовки
    const queryParams = createQueryParams(selectedCategory, sortingValue, inputValue);
    render(queryParams);
  }
}

// Функция обработки клика по сортировке
function handleSortClick(event, listElement, triggerElement) {
  if (event.target.classList.contains('category-item')) {
    let selectedSort = event.target.getAttribute('data-value');
    console.log('Selected sort:', selectedSort);

    triggerElement.textContent = event.target.textContent;
    triggerElement.setAttribute('data-selected-sort', selectedSort);

    listElement.classList.remove('show');

    // Получаем значения категории и ключевого слова
    const selectedCategory = document.getElementById('categorySelect').getAttribute('data-selected-category');
    const keywordInput = document.getElementById('keywordInput');
    const inputValue = keywordInput.value;

    // Формируем объект с параметрами и вызываем функцию отрисовки
    const queryParams = createQueryParams(selectedCategory, selectedSort, inputValue);
    render(queryParams);
  }
}

// Навешиваем обработчики событий и инициализируем некоторые переменные после полной загрузки документа
document.addEventListener('DOMContentLoaded', function () {
  // Инициализация переменных
  const sortTriggerElement = document.getElementById('sortProducts');
  const sortList = document.getElementById('sortBProductsList');
  const categoryTriggerElement = document.getElementById('categorySelect');
  const categoryList = document.getElementById('categoryBProductsList');

  // Навешиваем обработчики событий для переключения видимости списков
  document.getElementById('sortProducts').addEventListener('click', toggleSortList);
  document.getElementById('categorySelect').addEventListener('click', toggleCategoryList);

  // Навешиваем обработчики для скрытия списков при клике за их пределами
  document.addEventListener('click', hideList(sortList, sortTriggerElement));
  document.addEventListener('click', hideList(categoryList, categoryTriggerElement));

  // Навешиваем обработчики событий для выбора категории и сортировки из списков
  categoryList.addEventListener('click', event => handleCategoryClick(event, categoryList, categoryTriggerElement));
  sortList.addEventListener('click', event => handleSortClick(event, sortList, sortTriggerElement));

  // Навешиваем обработчик события submit для формы фильтра
  const filterForm = document.getElementById('filterForm');
  filterForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Получаем введенное значение из поля для ключевого слова
    const keywordInput = document.getElementById('keywordInput');
    const inputValue = keywordInput.value;

    // Проверяем, что введено хотя бы одно значение перед отправкой запроса
    if (!inputValue.trim()) {
      console.log('Please enter a keyword before submitting.');
      return;
    }

    try {
      // Получаем выбранные категорию и сортировку
      const selectedCategory = categoryTriggerElement.getAttribute('data-selected-category');
      const selectedSort = sortTriggerElement.getAttribute('data-selected-sort');

      // Формируем объект с параметрами и вызываем функцию отрисовки
      const queryParams = createQueryParams(selectedCategory, selectedSort, inputValue);
      render(queryParams);
    } catch (error) {
      console.error(error);
    }
  });
});




// document.addEventListener('DOMContentLoaded', function () {
//   const getById = id => document.getElementById(id);

//   const hideList = (listElement, triggerElement) => event => {
//     if (
//       !listElement.contains(event.target) &&
//       event.target !== triggerElement
//     ) {
//       listElement.classList.remove('show');
//     }
//   };

//   const createQueryParams = (selectedCategory, sortingValue, inputValue) => {
//     const queryParams = {
//       category: selectedCategory,
//     };

//     if (sortingValue) {
//       if (sortingValue === 'alphabetical') {
//         queryParams.byABC = true;
//       } else if (sortingValue === 'reverse-alphabetical') {
//         queryParams.byABC = false;
//       }

//       if (sortingValue === 'cheap') {
//         queryParams.byPrice = true;
//       } else if (sortingValue === 'expensive') {
//         queryParams.byPrice = false;
//       }

//       if (sortingValue === 'popular') {
//         queryParams.byPopularity = false;
//       } else if (sortingValue === 'not-popular') {
//         queryParams.byPopularity = true;
//       }
//     }

//     if (inputValue) {
//       queryParams.keyword = inputValue;
//     }

//     return queryParams;
//   };

//   const handleCategoryClick = (event, listElement, triggerElement) => {
//     if (event.target.classList.contains('category-item')) {
//       let selectedCategory = event.target.getAttribute('data-value');

//       console.log('Selected category:', selectedCategory);

//       triggerElement.textContent = event.target.textContent;
//       triggerElement.setAttribute('data-selected-category', selectedCategory);

//       listElement.classList.remove('show');

//       const sortingValue =
//         getById('sortProducts').getAttribute('data-selected-sort');
//       const keywordInput = getById('keywordInput');
//       const inputValue = keywordInput.value;
//       const queryParams = createQueryParams(
//         selectedCategory,
//         sortingValue,
//         inputValue
//       );

//       render(queryParams);
//     }
//   };

//   const handleSortClick = (event, listElement, triggerElement) => {
//     if (event.target.classList.contains('category-item')) {
//       let selectedSort = event.target.getAttribute('data-value');

//       console.log('Selected sort:', selectedSort);

//       triggerElement.textContent = event.target.textContent;
//       triggerElement.setAttribute('data-selected-sort', selectedSort);

//       listElement.classList.remove('show');

//       const selectedCategory = getById('categorySelect').getAttribute(
//         'data-selected-category'
//       );
//       const keywordInput = getById('keywordInput');
//       const inputValue = keywordInput.value;

//       const queryParams = createQueryParams(
//         selectedCategory,
//         selectedSort,
//         inputValue
//       );

//       render(queryParams);
//     }
//   };

//   const sortTriggerElement = getById('sortProducts');
//   const sortList = getById('sortBProductsList');
//   const categoryTriggerElement = getById('categorySelect');
//   const categoryList = getById('categoryBProductsList');

//   document.addEventListener('click', hideList(sortList, sortTriggerElement));
//   document.addEventListener(
//     'click',
//     hideList(categoryList, categoryTriggerElement)
//   );

//   categoryList.addEventListener('click', event =>
//     handleCategoryClick(event, categoryList, categoryTriggerElement)
//   );
//   sortList.addEventListener('click', event =>
//     handleSortClick(event, sortList, sortTriggerElement)
//   );

//   const filterForm = getById('filterForm');
//   filterForm.addEventListener('submit', async function (event) {
//     event.preventDefault();
//     const keywordInput = getById('keywordInput');
//     const inputValue = keywordInput.value;

//     if (!inputValue.trim()) {
//       console.log('Please enter a keyword before submitting.');
//       return;
//     }

//     try {
//       const selectedCategory = categoryTriggerElement.getAttribute(
//         'data-selected-category'
//       );
//       const selectedSort =
//         sortTriggerElement.getAttribute('data-selected-sort');

//       const queryParams = createQueryParams(
//         selectedCategory,
//         selectedSort,
//         inputValue
//       );

//       render(queryParams);
//     } catch (error) {
//       console.error(error);
//     }
//   });
// });


