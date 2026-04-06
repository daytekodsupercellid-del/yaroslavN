// Варіант 1: Керування множинними запитами з обробкою таймауту

function fetchWithTimeout(url, timeout) {
  return Promise.race([
    fetch(url),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
  ]);
}

async function runRequests() {
  const btn = document.getElementById('runRequestsBtn');
  const resultDiv = document.getElementById('requestsResult');

  btn.disabled = true;
  btn.textContent = 'Завантаження...';
  resultDiv.innerHTML = '<span class="loading">Виконання запитів...</span>';

  try {
    const results = await Promise.allSettled([
      fetchWithTimeout('https://jsonplaceholder.typicode.com/posts/1', 5000),
      fetchWithTimeout('https://jsonplaceholder.typicode.com/users/1', 5000)
    ]);

    let hasTimeout = false;
    let summary = '';

    results.forEach((result, index) => {
      if (result.status === 'rejected' && result.reason.message === 'Timeout') {
        hasTimeout = true;
        summary += `Запит ${index + 1}: Таймаут<br>`;
      } else if (result.status === 'fulfilled') {
        summary += `Запит ${index + 1}: Успішно<br>`;
      } else {
        summary += `Запит ${index + 1}: Помилка<br>`;
      }
    });

    if (hasTimeout) {
      resultDiv.innerHTML = '<span class="error">Request timeout</span><br>' + summary;
    } else {
      resultDiv.innerHTML = '<span class="success">Запити виконані успішно!</span><br>' + summary;
    }
  } catch (error) {
    resultDiv.innerHTML = '<span class="error">Несподівана помилка: ' + error.message + '</span>';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Запустити запити';
  }
}

// Варіант 2: Ланцюжок обробки асинхронних даних

function getRandomNumber() {
  return new Promise(resolve => {
    setTimeout(() => resolve(Math.floor(Math.random() * 100) + 1), 1000);
  });
}

async function processNumber() {
  const resultDiv = document.getElementById('numberResult');
  resultDiv.innerHTML = '<span class="loading">Генерація числа...</span>';

  try {
    const num = await getRandomNumber();
    let result;
    if (num < 50) {
      result = await Promise.resolve(num + 20);
      resultDiv.innerHTML = `<span class="success">Число: ${num} → Результат: ${result}</span>`;
    } else {
      throw new Error("Занадто велике число!");
    }
  } catch (error) {
    resultDiv.innerHTML = '<span class="error">Оброблено помилку</span>';
  }
}

// Додаємо обробники подій після завантаження DOM
document.addEventListener('DOMContentLoaded', () => {
  // Для варіанту 2: автоматично запускаємо при завантаженні
  processNumber();

  // Для варіанту 1: додаємо обробник на кнопку
  document.getElementById('runRequestsBtn').addEventListener('click', () => {
    runRequests();
  });
});