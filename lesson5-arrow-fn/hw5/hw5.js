// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
// const square = (a,b) => a*b;
// console.log(square(10, 2));

// - створити функцію яка обчислює та повертає площу кола
// const circle  = (r) => 3.14*Math.pow(r, 2);
// console.log(circle(2));

// - створити функцію яка обчислює та повертає площу циліндру
// const cylinder  = (r, h) => 3.14*Math.pow(r,2)*h;
// console.log(cylinder(2, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
// const array = ['wqe', 15, 'rty', 21]
// const printArray  = (arr) => {
//     for (const arrElement of arr) {
//         console.log(arrElement)
//     }
// };
// printArray(array)


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

// const paragraf = (text) => {
//     document.write(`<p>${text}</p>`)
// };
// paragraf('abra cadabra');
// paragraf('1,2,2')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const list = (text) => {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// };
// list('qwe')


// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//     Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const list1 = (text, number) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// };
// list1('qwe', 3)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// const array = ['wqe', 15, 'rty', 21]
// const list2 = (arr) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ul>`)
// };
// list2(array)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. ' +
// 'Для кожного об'єкту окремий блок.
// const users = [
//     {
//         id: 1,
//         name: 'Olya',
//         age: 35
//     },
//     {
//         id: 2,
//         name: 'Vova',
//         age: 30
//     },
//     {
//         id: 3,
//         name: 'Ulia',
//         age: 11
//     },
// ];
//
// const block = (arr) => {
//     for (const arrElement of arr) {
//         document.writeln(`<div>${arrElement.id}-${arrElement.name}-${arrElement.age} <hr></div>`)
//     }
// };
// block(users)
