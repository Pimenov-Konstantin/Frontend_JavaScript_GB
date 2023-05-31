// Task1
const cube = (number1, numberCube = 3) => number1 ** numberCube;
console.log(cube(2) + cube(3));

// Task 2
const percentTax = (money, tax = 13) => money * (1 - tax / 100);

let salary = Number(prompt("Введите вашу заработную плату"));

if (!isNaN(salary)) {
    alert(`Размер заработной платы за вычетом налогов равен: ${percentTax(salary)}`)
    console.log(`Размер заработной платы за вычетом налогов равен: ${percentTax(salary)}`);
} else {
    alert("Вы ввели неверное значение");
    console.log("Вы ввели неверное значение");
}

// Task 3
const num1 = Number(prompt('Введите первое число'));
const num2 = Number(prompt('Введите второе число'));
const num3 = Number(prompt('Введите третье число'));

let max = (num1 >= num2 && num1 >= num3 ? num1 : (num2 >= num1 && num2 >= num3 ? num2 : num3));
console.log(max);

// Task 4
const summ = (num1, num2) => (num1 + num2);
const difference = (num1, num2) => (num1 - num2);
const multiplication = (num1, num2) => (num1 * num2);
const division = (num1, num2) => (num1 / num2);

console.log(`Сумма равна ${summ(2, 6)}`);
console.log(`Разность равна ${difference(2, 6)}`);
console.log(`Разность равна ${difference(6, 2)}`);
console.log(`Разность равна ${difference(6, 6)}`);
console.log(`Произведение равно ${multiplication(2, 6)}`);
console.log(`Частное равно ${division(2, 6)}`);
console.log(`Частное равно ${division(6, 2)}`);