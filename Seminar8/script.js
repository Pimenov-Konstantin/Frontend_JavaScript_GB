// Task 1 (1)
// Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов. 

// const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);
// }

// const two = [1, 2, 3];
// console.log(two[0]);
// console.log(two[1]);
// console.log(two[2]);

// Task 1 (2)
// Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

// const array = [1, 2, '3', 'home'];
// console.log(array);
// console.log(array.length);

// const myArray = [];
// myArray.push(1, 3, 5, 2, 7);
// console.log(myArray);
// console.log(myArray.length);

// Task 1 (3)
// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

// let array = ['a', 'b', 'c'];
// array[0] = 1;
// array[1] = -2;
// array[2] = -3;
// console.log(array);

// Task 2 (1)
// Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

// const array = [1, 2, 3];
// for (let i = 0; i < array.length; i++) {
//     const element = ++array[i];
// }
// console.log(array);

// Task 2 (2)
// Узнайте длину следующего массива: 
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';

// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

// Task 2 (3)
// Пусть дан такой массив: const arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.

// const arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// console.log(arr);

// const arr = [1, 2, 3];
// arr.push(4, 5);
// console.log(arr);

// Task 2 (4)
// Создайте произвольный массив из 5 элементов, Удалите из него два последних элемента. Проверьте, какое станет значение свойства length после этого.

// const arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.pop();
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 3));


// Task 3 (1)
// С помощью цикла for выведите в консоль числа от 11 до 33.

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

// Task 3 (2)
// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.

// for (let i = 1; i <= 99; i++) {
//     if (i % 2 !== 0) console.log(i);
// }

// Task 3 (3)
// С помощью цикла for выведите в консоль числа от 100 до 0.

// for (let i = 100; i >= 0; i--) {
//     console.log(i);
// }

// Task 3 (4)
// Дано число num с неким начальным значением. 
// Умножайте его на 3 столько раз, пока результат 
// умножения не станет больше 1000. 
// Какое число получится? 
// Посчитайте количество итераций, необходимых для этого.

// const resultProd = number => number * 3;

// function allCount(num) {
//     let count = 0;
//     while (num <= 1000) {
//         num += resultProd(num);
//         count++;
//     }
//     console.log(count);
//     console.log(num);
//     return num;
// }
// const resultAll = allCount(5);

// Task 4 (1)
// Дан массив const arr = [2, 5, 9, 15, 1, 4]; Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }
// }

// Task 4 (2)
// Найдите сумму четных чисел от 2 до 100.

// const sumArray = (minNum, maxNum) => {
//     let sumArray = 0;
//     for (let i = minNum; i <= maxNum; i++) {
//         if (i % 2 === 0) {
//             sumArray += i;
//         }
//     }
//     return sumArray;
// }
// console.log('Summa: ' + sumArray(2, 100));

// Task 4 (3)
// Дан массив const = [2, 5, 9, 3, 1, 4]; Найдите сумму элементов этого массива.

// const sumArray = (array) => {
//     let sumArray = 0;
//     for (let i = 0; i < array.length; i++) {
//         sumArray += array[i];
//     }
//     return sumArray;
// }
// console.log('Summ Array: ' + sumArray([2, 5, 9, 15, 1, 4]));

// Task 4 (4)
// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// let strLine = '-';
// for (let i = 1; i <= 9; i++) {
//     strLine += i + '-';
// }
// console.log(strLine);

// Task 4 (5)
// Дан массив с числами [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

// const arrPrintZero = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             break;
//         }
//         console.log(arr[i]);
//     }
// }
// arrPrintZero([2, 5, 9, 0, 3, 1, 4]);

// Task 5 (1)
// Пусть у нас дан массив состоящий из 10 элементов с произвольными числами.Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         console.log(`Number ${array[i]} v kvadrate ${Math.pow(array[i], 2)}`);
//     } else if (array[i] % 3 == 0) {
//         console.log(`Number ${array[i]} v kube ${Math.pow(array[i], 3)}`);
//     }
// }

// Task 5 (2)
// С помощью двух вложенных циклов выведите на экран следующую строку: [[1, 2, 3], [4, 5, 6]]

// let array = [];
// let rows = 2;
// let columns = 3;
// let count = 0;
// for (let i = 0; i < rows; i++) {
//     array[i] = [];
//     for (let j = 0; j < columns; j++) {
//         array[i][j] = ++count;
//     }
// }
// console.log(array);

// Task 5 (3)
// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.

// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         count++;
//     }
// }
// console.log(count);

// Task 5 (4)
// Дан следующий массив: [1, 2, 3, 4, 5] С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

// let array = [1, 2, 3, 4, 5];
// array.splice(1, 2);
// console.log(array);