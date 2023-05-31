// function helloName(name) {
//     console.log(name);
// }
// helloName('Kostya');

// let age = +prompt('Сколько вам лет?');
// const lvlUpAge = () => age + 5;
// console.log(`Через 5 лет вам будет ${lvlUpAge()}`);

// const salary = (money) => {
//     money = money * 0.87;
//     return money * 0.75;
// }
// const userMoney = Number(prompt('Сколько ты зарабатываешь? '));
// let moneyEat = salary(userMoney);
// console.log(`Для расходов есть: ${salary(userMoney)}`);
// console.log(`Для еды есть: ${moneyEat * 0.3}`);

// function sayHello() {
//     alert('Hello');
//     alert('Bye');
// }

// Игра в загадки
// Долгий вариант
// const userAnswer = prompt('Зимой и летом одним цветом');
// if (userAnswer === 'елка') {
//     alert('Yes');
// } else {
//     alert('No');
// }

// const userAnswer2 = prompt('Сидит дед во 100 шуб одетб кто его раздевает тот слезы проливает');
// if (userAnswer2 === 'лук') {
//     alert('Yes');
// } else {
//     alert('No');
// }

// Нужный вариант

function askQuestion(answer, question) {
    const userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === answer) {
        alert('ДА');
    } else {
        alert('НЕТ');
    }
}

function puzzle() {
    askQuestion('лук', 'Сидит дед во 100 шуб одетб кто его раздевает тот слезы проливает')
    askQuestion('елка', 'Зимой и летом одним цветом')
}