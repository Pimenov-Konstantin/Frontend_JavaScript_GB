// Task 1
// function userParam(name, firstname, age) {
//     console.log(`Привет ${name} ${firstname} с возрастом ${+age}`);
// }
// userParam('Kostya', 'Pimenov', 29);

// Task 2
// let counts = Number(prompt('Введите число'));
// const lvlCube = () => counts ** 2;
// console.log(`Ваше число в кубе ${lvlCube()}`);

// Task 3
// function checkNumber(number) {
//     console.log(+number > 0 ? '+++' : '---');
// }
// checkNumber(10);
// checkNumber(-10);

// Task 4
// const sumNumb = (num1, num2, num3) => num1 + num2 + num3;
// console.log(sumNumb(2, 4, 6));

// Task 5
// let param1 = '1';
// let param2 = 2;
// let param3 = 3;

// function sumNumb(num1, num2, num3) {
//     return Number(num1) + Number(num2) + Number(num3);
// }
// console.log(sumNumb(param1, param2, param3));

// Task 6
// function root(number) {
//     let result = Math.sqrt(number);
//     return result;
// }

// function getSum(callback) {
//     let num1 = callback(Number(prompt('Enther number one: ')));
//     let num2 = callback(Number(prompt('Enther number two: ')));

//     let result = num1 + num2;
//     return result;
// }

// let finalResult = getSum(root);
// console.log(finalResult);

// Task 7
// function minNumber(num1, num2) {
//     if (num1 === num2) {
//         console.log(`Число ${num1} и ${num2} равны`);
//     } else if (num1 < num2) {
//         console.log(`Число ${num1} меньше ${num2}`);
//     } else {
//         console.log(`Число ${num1} больше ${num2}`);
//     }
// }
// minNumber(4, 3);

// Task 8
// const getDay = (day) => {
//     switch (day) {
//         case 1:
//             return 'пн';
//         case 2:
//             return 'вт';
//         case 3:
//             return 'ср';
//         case 4:
//             return 'чт';
//         case 5:
//             return 'пт';
//         case 6:
//             return 'сб';
//         case 7:
//             return 'вс';
//     }
// }
// console.log(getDay(3));

// Task 9
// const getMessage = (name) => {
//     const currentHours = new Date().getHours();

//     if (currentHours >= 6 && currentHours < 12) {
//         return `Доброе утро, ${name}`;
//     } else if (currentHours >= 12 && currentHours < 16) {
//         return `Добрый день, ${name}`;
//     } else if (currentHours >= 16 && currentHours < 21) {
//         return `Добрый вечер, ${name}`;
//     } else if (currentHours >= 21 && currentHours < 6) {
//         return `Доброй ночи, ${name}`;
//     }
// }
// console.log(getMessage('Kostya'));

// Task 10

function askQuestion(userAnswer, realAnswer) {
    if (userAnswer.toLowerCase() === realAnswer) {
        alert('ДА');
        return true;
    } else {
        let secondAnswer;
        let hits = ['Это овощь, попробуй снова'];
        for (let i = 0; i < hits.length; i++) {
            secondAnswer = prompt(`Не правильно. подсказка ${hits[i]}`);
            if (userAnswer.toLowerCase() === realAnswer) {
                alert('ДА');
                return true;
            } else {
                alert('Опять не угадал');
            }
            return false;
        }

    }
}

askQuestion(prompt('Сидит дед во 100 шуб одет кто его раздевает тот слезы проливает'), 'лук');