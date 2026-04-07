const DEFAULT_THEMES = {
  light: {
    id: 'light',
    name: 'Світла',
    bgColor: '#f8fafc',
    textColor: '#111827',
    accentColor: '#2563eb',
    type: 'default',
  },
  dark: {
    id: 'dark',
    name: 'Темна',
    bgColor: '#0f172a',
    textColor: '#e2e8f0',
    accentColor: '#7c3aed',
    type: 'default',
  },
  colorful: {
    id: 'colorful',
    name: 'Кольорова',
    bgColor: '#fff7ed',
    textColor: '#1f2937',
    accentColor: '#ec4899',
    type: 'default',
  },
};

const STORAGE_THEME_KEY = 'savedThemes';
const STORAGE_SELECTED_KEY = 'selectedThemeId';

const themeForm = document.getElementById('customThemeForm');
const themeNameInput = document.getElementById('themeName');
const bgColorInput = document.getElementById('bgColor');
const textColorInput = document.getElementById('textColor');
const accentColorInput = document.getElementById('accentColor');
const editingIdInput = document.getElementById('editingId');
const themesList = document.getElementById('themesList');
const themePreview = document.getElementById('themePreview');
const themeRadios = document.querySelectorAll('input[name="theme"]');
const cancelEditBtn = document.getElementById('cancelEditBtn');

let customThemes = [];
let selectedThemeId = 'light';

function loadSavedThemes() {
  const savedThemes = localStorage.getItem(STORAGE_THEME_KEY);
  if (!savedThemes) {
    customThemes = [];
    return;
  }

  try {
    const parsed = JSON.parse(savedThemes);
    if (Array.isArray(parsed)) {
      customThemes = parsed;
    } else {
      customThemes = [];
    }
  } catch (error) {
    console.warn('Не вдалося завантажити теми:', error);
    customThemes = [];
  }
}

function saveThemes() {
  localStorage.setItem(STORAGE_THEME_KEY, JSON.stringify(customThemes));
}

function loadSelectedTheme() {
  const savedId = localStorage.getItem(STORAGE_SELECTED_KEY);
  selectedThemeId = savedId || 'light';
}

function saveSelectedTheme(id) {
  localStorage.setItem(STORAGE_SELECTED_KEY, id);
}

function getThemeById(id) {
  if (DEFAULT_THEMES[id]) {
    return DEFAULT_THEMES[id];
  }
  return customThemes.find((theme) => theme.id === id) || DEFAULT_THEMES.light;
}

function applyTheme(theme) {
  document.body.classList.remove('light', 'dark', 'colorful', 'custom-theme');
  if (theme.type === 'default') {
    document.body.classList.add(theme.id);
    document.body.style.setProperty('--bg', '');
    document.body.style.setProperty('--text', '');
    document.body.style.setProperty('--accent', '');
  } else {
    document.body.classList.add('custom-theme');
    document.body.style.setProperty('--bg', theme.bgColor);
    document.body.style.setProperty('--text', theme.textColor);
    document.body.style.setProperty('--accent', theme.accentColor);
  }
  themePreview.style.background = theme.type === 'default' ? 'rgba(59, 130, 246, 0.08)' : 'rgba(0, 0, 0, 0.04)';
  themePreview.style.color = theme.textColor || getComputedStyle(document.body).getPropertyValue('--text');
}

function renderThemeList() {
  themesList.innerHTML = '';

  const allThemes = [DEFAULT_THEMES.light, DEFAULT_THEMES.dark, DEFAULT_THEMES.colorful, ...customThemes];
  allThemes.forEach((theme) => {
    const card = document.createElement('article');
    card.className = 'theme-card';

    const meta = document.createElement('div');
    meta.className = 'meta';
    meta.innerHTML = `<strong>${theme.name}</strong><span>${theme.type === 'default' ? 'Системна тема' : 'Власна тема'}</span>`;

    const swatches = document.createElement('div');
    swatches.className = 'theme-swatches';
    ['bgColor', 'textColor', 'accentColor'].forEach((key) => {
      const swatch = document.createElement('span');
      swatch.className = 'swatch';
      swatch.style.backgroundColor = theme[key];
      swatches.appendChild(swatch);
    });

    const actions = document.createElement('div');
    actions.className = 'actions';

    const selectBtn = document.createElement('button');
    selectBtn.textContent = 'Оберіть';
    selectBtn.type = 'button';
    selectBtn.addEventListener('click', () => {
      selectedThemeId = theme.id;
      saveSelectedTheme(theme.id);
      applyTheme(theme);
      updateRadioSelection(theme.id);
    });
    actions.appendChild(selectBtn);

    if (theme.type !== 'default') {
      const editBtn = document.createElement('button');
      editBtn.textContent = 'Редагувати';
      editBtn.type = 'button';
      editBtn.addEventListener('click', () => startEditTheme(theme.id));
      actions.appendChild(editBtn);

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Видалити';
      deleteBtn.type = 'button';
      deleteBtn.addEventListener('click', () => removeTheme(theme.id));
      actions.appendChild(deleteBtn);
    }

    card.appendChild(meta);
    card.appendChild(swatches);
    card.appendChild(actions);
    themesList.appendChild(card);
  });
}

function updateRadioSelection(themeId) {
  themeRadios.forEach((radio) => {
    radio.checked = radio.value === themeId;
  });
}

function validateThemeInputs() {
  const name = themeNameInput.value.trim();
  if (name.length < 2) {
    return 'Назва теми повинна містити щонайменше 2 символи.';
  }
  if (!bgColorInput.value || !textColorInput.value || !accentColorInput.value) {
    return 'Будь ласка, оберіть усі кольори.';
  }
  return '';
}

function createThemeFromForm() {
  return {
    id: editingIdInput.value || `custom-${Date.now()}`,
    name: themeNameInput.value.trim(),
    bgColor: bgColorInput.value,
    textColor: textColorInput.value,
    accentColor: accentColorInput.value,
    type: 'custom',
  };
}

function clearForm() {
  themeNameInput.value = '';
  bgColorInput.value = '#ffffff';
  textColorInput.value = '#000000';
  accentColorInput.value = '#2563eb';
  editingIdInput.value = '';
}

function startEditTheme(themeId) {
  const theme = customThemes.find((item) => item.id === themeId);
  if (!theme) return;

  themeNameInput.value = theme.name;
  bgColorInput.value = theme.bgColor;
  textColorInput.value = theme.textColor;
  accentColorInput.value = theme.accentColor;
  editingIdInput.value = theme.id;
  themeNameInput.focus();
}

function removeTheme(themeId) {
  customThemes = customThemes.filter((item) => item.id !== themeId);
  saveThemes();
  if (selectedThemeId === themeId) {
    selectedThemeId = 'light';
    saveSelectedTheme(selectedThemeId);
    applyTheme(getThemeById(selectedThemeId));
    updateRadioSelection(selectedThemeId);
  }
  renderThemeList();
}

themeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const errorMessage = validateThemeInputs();
  if (errorMessage) {
    alert(errorMessage);
    return;
  }

  const newTheme = createThemeFromForm();
  const existingIndex = customThemes.findIndex((t) => t.id === newTheme.id);
  if (existingIndex >= 0) {
    customThemes[existingIndex] = newTheme;
  } else {
    customThemes.push(newTheme);
  }

  saveThemes();
  renderThemeList();
  clearForm();
  selectedThemeId = newTheme.id;
  saveSelectedTheme(newTheme.id);
  applyTheme(newTheme);
  updateRadioSelection(newTheme.id);
});

cancelEditBtn.addEventListener('click', () => {
  clearForm();
});

themeRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    if (!radio.checked) return;
    selectedThemeId = radio.value;
    saveSelectedTheme(selectedThemeId);
    applyTheme(getThemeById(selectedThemeId));
  });
});

window.addEventListener('DOMContentLoaded', () => {
  loadSavedThemes();
  loadSelectedTheme();
  renderThemeList();
  updateRadioSelection(selectedThemeId);
  applyTheme(getThemeById(selectedThemeId));
});
