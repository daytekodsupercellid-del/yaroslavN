console.log("%c--- Завдання 1: Змінні та Типи ---", "color: #e67e22; font-weight: bold; font-size: 14px;");

let myNumber = 100;
let myString = "Тестовий рядок";
let myBool = true;
let myFloat = 10.5;

console.log("Початкові типи:", {
    "Число": typeof myNumber,
    "Рядок": typeof myString,
    "Булеве": typeof myBool
});

myNumber = "Тепер я рядок";
console.log("Після зміни (число -> рядок):", typeof myNumber);

// Перетворення та аналіз
console.log("Аналіз перетворень:");
console.log("- Конкатенація (10 + '5'):", 10 + "5"); // "105"
console.log("- True як число:", Number(true)); // 1
console.log("- False як число:", Number(false)); // 0

const myData = { id: 1, title: "Робота", status: "Active", value: 99.9 };
console.log("Об'єкт у JSON форматі:");
console.log(JSON.stringify(myData, null, 2));
