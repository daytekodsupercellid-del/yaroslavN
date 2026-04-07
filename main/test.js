// Варіант 1: Обробка масиву чисел
const numbers = [12, 45, 78, 23, 56, 89, 34, 67, 90, 11];
const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
const max = Math.max(...numbers);
const min = Math.min(...numbers);
const sorted = [...numbers].sort((a, b) => a - b);
console.log('Варіант 1:', { average: average.toFixed(2), max, min, sorted });

// Варіант 2: Робота з масивом об'єктів
const users = [
    { name: 'Олександр', age: 25 },
    { name: 'Марія', age: 17 },
    { name: 'Іван', age: 30 },
    { name: 'Анна', age: 16 },
    { name: 'Петро', age: 22 }
];
const adults = users.filter(user => user.age > 18);
const names = users.map(user => user.name);
const avgAge = users.reduce((sum, user) => sum + user.age, 0) / users.length;
console.log('Варіант 2:', { adults, names, avgAge: avgAge.toFixed(2) });

// Варіант 3: Групування об'єктів
const products = [
    { name: 'Яблуко', category: 'Фрукти' },
    { name: 'Банан', category: 'Фрукти' },
    { name: 'Морква', category: 'Овочі' },
    { name: 'Помідор', category: 'Овочі' },
    { name: 'Апельсин', category: 'Фрукти' },
    { name: 'Картопля', category: 'Овочі' }
];
const grouped = products.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category].push(product.name);
    return acc;
}, {});
console.log('Варіант 3:', grouped);

// Варіант 4: Обробка вкладених об'єктів
const students = {
    'Олександр': { математика: 90, англійська: 85, фізика: 88 },
    'Марія': { математика: 95, англійська: 92, фізика: 89 },
    'Іван': { математика: 80, англійська: 78, фізика: 82 },
    'Анна': { математика: 87, англійська: 91, фізика: 85 }
};
const averages = {};
for (const student in students) {
    const grades = Object.values(students[student]);
    averages[student] = (grades.reduce((a, b) => a + b, 0) / grades.length).toFixed(2);
}
console.log('Варіант 4:', averages);

// Варіант 5: Генерація об'єктів з масиву
const namesArray = ['Олександр', 'Марія', 'Іван', 'Анна', 'Петро'];
const nameLengths = namesArray.reduce((acc, name) => {
    acc[name] = name.length;
    return acc;
}, {});
console.log('Варіант 5:', nameLengths);