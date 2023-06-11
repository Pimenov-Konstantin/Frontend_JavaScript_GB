// Задание 1 (тайминг 20 минут)
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”

// const dayOfWeeks = {
//     1: 'md',
//     2: 'ts',
//     3: 'wd',
//     4: 'st',
//     5: 'fr',
//     6: 'sa',
//     7: 'su'
// }
// console.log(dayOfWeeks[2]);

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.

// const myName = {
//     name: 'Kostya',
//     surename: 'Pimenov',
//     age: 29
// }
// console.log(`${myName.surename} - ${myName.name} - ${myName.age}`);

// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
// 4. Удалите свойство surname

// myName.patronomic = prompt('Введите отчество');
// console.log(myName.patronomic);
// delete myName.surename;
// console.log(`${myName.surename} - ${myName.name} - ${myName.age}`);


// Задание 2 (тайминг 25 минут)
// 1. Даны два массива: первый с названиями дней недели, а второй - с
// их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут
// названия дней, а значениями - их номера.

// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const dayOfWeeks = {};

// if (arr1.length === arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//         dayOfWeeks[arr1[i]] = arr2[i];
//     }
// }
// console.log(dayOfWeeks);

// 2. const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент
// этого объекта в квадрат.

// const obj = { x: 1, y: 2, z: 3 };
// for (const key in obj) {
//     obj[key] = obj[key] ** 2;
// }
// console.log(obj);

// Задание 3 (тайминг 15 минут)
// const obj = {
// key1: {
// key1: 1,
// key2: 2,
// key3: 3,
// },
// key2: {
// key1: 4,
// key2: 5,
// key3: 6,
// },
// key3: {
// key1: 7,
// key2: 8,
// key3: 9,
// },
// }
// Найдите сумму элементов приведенного объекта.

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// function sumKey(key1) {

//     let sum = 0;
//     for (let item1 of Object.values(key1)) {
//         sum += item1;
//     }
//     return sum; // 6
// }
// console.log(sumKey(key1));



// Задание 4 (тайминг 30 минут)
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

const riddles = {
    question: 'Уссатый полосатый',
    answer: 'Матрас',
    hint1: 'На нем спят',
    hint2: 'На нем лежат',

    askQuestion() {
        const userAnswer = prompt(this.question);
        let counter = 0;
        if (userAnswer === this.answer) {
            alert('Winner');
        } else {
            while (counter < 2) {
                if (counter == 0) {
                    counter++;
                    console.log('Подсказка 1', this.hint1);
                } else if (counter === 1) {
                    counter++;
                    console.log('Подсказка 2', this.hint2);
                } else {
                    console.log('Looser');
                }
            }
        }
    }
}
riddles.askQuestion();