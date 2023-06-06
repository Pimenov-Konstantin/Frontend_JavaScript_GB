// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// const array = (entrance, exit) => {
//     const zero = " - это ноль";
//     const even = " - четное число";
//     const notEven = " - нечетное число";
//     for (let i = entrance; i < exit; i++) {
//         let arr = i;

//         if (i === 0) {
//             arr += zero;
//         } else if (i % 2 === 0) {
//             arr += even;
//         } else {
//             arr += notEven;
//         }
//         console.log(arr);
//     }
// }
// array(0, 11);

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// let array = [1, 2, 3, 4, 5, 6, 7];
// array.splice(3, 2);
// console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

// const randomArray = (value, min, max) => {
//     const arr = [];
//     for (let i = 0; i < value; i++) {
//         const num = Math.floor(Math.random() * (max - min) + min);
//         arr.push(num);
//     }
//     return arr;
// }

// const sumArray = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// const minArray = (arr) => {
//     let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }

// const threeArray = (arr, value) => {
//     let answer = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === value) {
//             answer = true;
//             break;
//         }
//     }
//     return answer;
// }

// const randomArr = randomArray(5, 0, 9);
// console.log(`Random Array ${randomArr}`);
// console.log(`Summ Array =  ${sumArray(randomArr)}`);
// console.log(`Min element Array =  ${minArray(randomArr)}`);
// const threeArr = 3;
// console.log(`Value ${threeArr} : ${threeArray(randomArr, threeArr)}`);