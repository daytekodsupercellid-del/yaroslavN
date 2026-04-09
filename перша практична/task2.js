
function runTask2() {
    console.log("%c--- Завдання 2: Обчислення ---", "color: #3498db; font-weight: bold; font-size: 14px;");

  
    let val1 = prompt("Введіть перше число (a):", "10");
    let val2 = prompt("Введіть друге число (b):", "5");
    let val3 = prompt("Введіть третє число (c):", "8");


    let a = parseFloat(val1);
    let b = parseFloat(val2);
    let c = parseFloat(val3);

   
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Помилка! Будь ласка, введіть числові значення.");
        return;
    }

    
    let average = (a + b + c) / 3;
    let power = Math.pow(a, b);
    let absA = Math.abs(a);
    let ceilAvg = Math.ceil(average);
    let floorAvg = Math.floor(average);

    
    let isDivisible7 = (a + b + c) % 7 === 0;


    let canExist = (a + b > c) && (a + c > b) && (b + c > a);


    let report = `Результати обчислень:
------------------------------
Середнє арифметичне: ${average.toFixed(2)}
Модуль числа A: ${absA}
Округлення вгору: ${ceilAvg}
Округлення вниз: ${floorAvg}
A в степені B: ${power}
Сума ділиться на 7 без залишку: ${isDivisible7 ? "Так" : "Ні"}
Трикутник зі сторонами ${a}, ${b}, ${c} можливий: ${canExist ? "ТАК ✅" : "НІ ❌"}`;

    alert(report);
    console.log(report);
}

console.log("Скрипт task2.js успішно завантажено. Натисніть кнопку на сторінці.");
