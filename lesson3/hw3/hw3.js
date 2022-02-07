// --створити масив з:
//     - з 5 числових значень
// const numArr = [12, 2, 45, 78, 89];
// console.log(numArr);

// - з 5 стічкових значень

// const strArr = ['my', 'name', 'is', 'Olya', 'Volos'];
// console.log(strArr);

// - з 5 значень стрічкового, числового та булевого типу
// const mixArr = [89, 'my', 98, 'name', false];
// console.log(mixArr);
// - та вивести його в консоль
//
// // -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//  const arr = [];
//  arr[0] = 'my';
//  arr[1] = 35;
//  arr[2] = true;
//  arr[3] = 'olya';
//
// console.log(arr);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>item</div>`);
//
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 1; i <= 10; i++) {
//     document.write(`<div>${i} item</div>`);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i=0;
// while (i<20){
//     document.write(`<h1> item</h1>`);
//     i++;
// };

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i=1;
// while (i<=20){
//     document.write(`<h1>${i} item</h1>`);
//     i++
// };
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// const numArr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
// for (let i = 0; i < numArr.length; i++) {
//     console.log(numArr[i]);
// };

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// const strArr = ['my', 'name', 'is', 'Olya', 'Volos', 'i', 'live', 'in', 'this', 'city'];
// for (let i = 0; i < strArr.length; i++) {
//     console.log(strArr[i]);
// };

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// const mixArr = [12, 2, 45, 78, 'my', 'name', 'is', 'Olya', true, false];
// for (let i = 0; i < mixArr.length; i++) {
//     console.log(mixArr[i]);
//
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
const mixArr = [12, 2, 45, 78, 'my', 'name', 'is', 'Olya', true, false];
// for (let i = 0; i < mixArr.length; i++) {
//     if(typeof mixArr[i] === "boolean"){
//         console.log(mixArr[i]);
//     }
// }
// for (const mixArrElement of mixArr) {
//     if(typeof mixArrElement === "boolean"){
//         console.log(mixArrElement)
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (const mixArrElement of mixArr) {
//     if(typeof mixArrElement === 'number'){
//         console.log(mixArrElement);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// for (const mixArrElement of mixArr) {
//     if(typeof mixArrElement === 'string'){
//         console.log(mixArrElement);
//     }
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// const arr =[];
// arr[0] = 35;
// arr[1] = 453;
// arr[2] = 34;
// arr[3] = 86;
// arr[4] = 123;
// arr[5] = 'qwe';
// arr[6] = 'asd';
// arr[7] = 'rty';
// arr[8] = true;
// arr[9] = false;
//
// for (const arrElement of arr) {
//     console.log(arrElement)
// }
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`<div>поточний номер ${i}</div>`)
//
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 101; i++) {
//     console.log(i);
//     document.write(`<div>поточний номер ${i}</div>`)
//
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i+=2) {
//     console.log(i);
//     document.write(`<div>поточний номер ${i}</div>`)
//
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i%2 ===0){
//         console.log(i);
//         document.write(`<div>поточний номер ${i}</div>`)
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if(i%2 === 1){
//         console.log(i);
//         document.write(`<div>поточний номер ${i}</div>`)
//     }
// }
