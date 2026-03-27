// Практична робота: DOM та обробка подій (варіанти 1+2)

// ======== ВАРІАНТ 1: Динамічне створення та сортування списку ========
const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const sortListBtn = document.getElementById('sortListBtn');
const dynamicList = document.getElementById('dynamicList');
const variant1Message = document.getElementById('variant1Message');

function showMessage1(text, isError = false) {
  variant1Message.textContent = text;
  variant1Message.style.color = isError ? '#b00020' : '#2e7d32';
}

function addListItem() {
  const raw = itemInput.value.trim();
  if (!raw) {
    showMessage1('Помилка: введіть текст перед додаванням', true);
    itemInput.focus();
    return;
  }

  const existing = [...dynamicList.children].find(li => li.textContent === raw);
  if (existing) {
    showMessage1('Помилка: такий елемент уже існує', true);
    return;
  }

  const li = document.createElement('li');
  li.textContent = raw;
  li.addEventListener('click', () => {
    dynamicList.removeChild(li);
    showMessage1(`Елемент «${raw}» видалено`);
  });

  dynamicList.appendChild(li);
  itemInput.value = '';
  showMessage1(`Елемент «${raw}» додано`);
}

addItemBtn.addEventListener('click', addListItem);
itemInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    event.preventDefault();
    addListItem();
  }
});

sortListBtn.addEventListener('click', () => {
  const items = Array.from(dynamicList.querySelectorAll('li'))
    .map(li => li.textContent)
    .sort((a, b) => a.localeCompare(b, 'uk', { sensitivity: 'base' }));
  dynamicList.innerHTML = '';
  for (const text of items) {
    const li = document.createElement('li');
    li.textContent = text;
    li.addEventListener('click', () => {
      dynamicList.removeChild(li);
      showMessage1(`Елемент «${text}» видалено`);
    });
    dynamicList.appendChild(li);
  }
  showMessage1('Список відсортовано');
});

// ======== ВАРІАНТ 2: Динамічна зміна стилю сторінки ========
const textBox = document.getElementById('textBox');
const textColor = document.getElementById('textColor');
const bgColor = document.getElementById('bgColor');
const fontSizeRange = document.getElementById('fontSizeRange');
const fontSizeValue = document.getElementById('fontSizeValue');
const boldToggle = document.getElementById('boldToggle');
const italicToggle = document.getElementById('italicToggle');
const underlineToggle = document.getElementById('underlineToggle');
const toggleTextBtn = document.getElementById('toggleTextBtn');
const darkModeToggle = document.getElementById('darkModeToggle');
const resetStylesBtn = document.getElementById('resetStylesBtn');
const variant2Message = document.getElementById('variant2Message');

function showMessage2(text, isError = false) {
  variant2Message.textContent = text;
  variant2Message.style.color = isError ? '#b00020' : '#2e7d32';
}

function updateTextStyle() {
  textBox.style.color = textColor.value;
  textBox.style.backgroundColor = bgColor.value;
  const fontSize = Number(fontSizeRange.value);
  if (Number.isNaN(fontSize) || fontSize < 8 || fontSize > 120) {
    showMessage2('Помилка розміру шрифту', true);
    return;
  }
  fontSizeValue.textContent = fontSize;
  textBox.style.fontSize = `${fontSize}px`;
  textBox.style.fontWeight = boldToggle.checked ? '700' : '400';
  textBox.style.fontStyle = italicToggle.checked ? 'italic' : 'normal';
  textBox.style.textDecoration = underlineToggle.checked ? 'underline' : 'none';
  showMessage2('Стилі застосовано');
}

textColor.addEventListener('input', updateTextStyle);
bgColor.addEventListener('input', updateTextStyle);
fontSizeRange.addEventListener('input', updateTextStyle);
boldToggle.addEventListener('change', updateTextStyle);
italicToggle.addEventListener('change', updateTextStyle);
underlineToggle.addEventListener('change', updateTextStyle);

let hidden = false;

toggleTextBtn.addEventListener('click', () => {
  hidden = !hidden;
  textBox.classList.toggle('hidden', hidden);
  toggleTextBtn.textContent = hidden ? 'Показати текст' : 'Сховати текст';
  showMessage2(hidden ? 'Текст сховано' : 'Текст показано');
});

// Перемикач Light/Dark mode
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode', darkModeToggle.checked);
  showMessage2(darkModeToggle.checked ? 'Dark mode: увімкнено' : 'Dark mode: вимкнено');
});

resetStylesBtn.addEventListener('click', () => {
  // початкові значення
  textColor.value = '#222222';
  bgColor.value = '#ffffff';
  fontSizeRange.value = '20';
  boldToggle.checked = false;
  italicToggle.checked = false;
  underlineToggle.checked = false;
  hidden = false;
  textBox.classList.remove('hidden');
  toggleTextBtn.textContent = 'Сховати текст';
  darkModeToggle.checked = false;
  body.classList.remove('dark-mode');
  updateTextStyle();
  showMessage2('Стилі скинуто до початкових');
});

// Ініціалізація початкового стану
updateTextStyle();
showMessage1('Готово до роботи. Додайте елемент до списку.');
showMessage2('Готово до роботи. Налаштуйте стиль тексту.');
