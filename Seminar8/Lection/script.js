// task 1
// for (let i = 0; i < 3; i++) {
//     console.log('hello for');
// }

// for (let j = 0; j <= 2; j++) {
//     console.log(j);
// }

// // task 2
// let pass;
// let count = 0;

// do {
//     if (count >= 3) {
//         alert('Пароль неверный');
//     }
//     pass = Number(prompt('Введите пароль'));
//     count++;
// } while (pass !== 234);

// Task 2
// const arr = [];
// arr.push(1);
// console.log(arr);

// Task 3
// const arr = [1, 2, 'Hello', 4, 5, 8];
// console.log(arr);
// console.log(arr[1]);
// console.log(arr.length);
// console.log(arr[arr.length - 1]); //Выводит последний элемент массива.

// Task 4
// const user = [];
// const userName = prompt('Введите ваше имя');
// user.push(userName);
// console.log(user);

// Task 5
// const user = [];
// user.push(prompt('Введите ваше имя'));
// user.push(Number(prompt('Введите ваш возраст')));
// console.log(user);

// Task 6 последнее число
// const numbers = [2, 3, 19, 15];
// alert(`Запомни цыфры ${numbers}`);
// console.log(numbers.pop());

// Task 7 split - разбивает, join - соединяет.
// const word = 'example';
// const arrWord = word.split('');
// const upWord = arrWord.pop();
// arrWord.push(upWord.toLocaleUpperCase());
// console.log(arrWord.join(''));

// Task 8
// const arr = [1, 2, 3, 7, 19];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element >= 5) {
//         console.log(element);
//     } else {
//         continue;
//     }
// }

// Task 9
const arrAnswers = ['ель', 'елка', 'ёлка'];
const userAnswers = prompt('Зимой и летом одним цветом');

for (let i = 0; i < arrAnswers.length; i++) {
    const element = arrAnswers[i];
    if (element === userAnswers) {
        alert('Молодец');
        break;
    } else {
        continue;
    }
}