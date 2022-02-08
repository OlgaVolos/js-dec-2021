// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function square(a,b){
//     let s = a*b;
//     return s
// };
// console.log(square(2, 10));

// - створити функцію яка обчислює та повертає площу круга з радіусом r
// function circle(r){
//     let square = 3.14*Math.pow(r, 2);
//     return square
// };
// console.log(circle(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function cylinder(r, h){
//     let square = 3.14*Math.pow(r, 2)*h;
//     return square
// };
// console.log(cylinder(2, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
//  function printArr(arr){
//      for (let i = 0; i < arr.length; i++) {
//          console.log(arr[i]);
//      }
//  }
// const num = [11,22,33,44];
//  printArr(num)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraf(msg){
//      document.write(`<p>${msg}</p>`)
// };
//
//  paragraf('hello world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function list(item){
//      document.write('<ul>')
//     document.write(`<li>${item}</li>`)
//     document.write(`<li>${item}</li>`)
//     document.write(`<li>${item}</li>`)
//      document.write('</ul>')
// }
// list('hello');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість
// li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listItem(msg, number){
    document.write('<ul>')
    for (let i = 0; i < number; i++) {
        document.write(`<li>${msg}</li>`)
    }
     document.write('</ul>')
}
listItem('hello', 4)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function listForArray(arr){
    for (let i = 0; i < arr.length; i++) {
        document.write('<ul>')
    document.write(`<li>${arr[i]}</li>`)
         document.write('</ul>')

    }
};
const num1 = [11,22,33,44,45,'yyfhushf', 'fgy', true];
listForArray(num1)
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

function listForObject(arr){
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} - ${arrElement.name} - ${arrElement.age} </div>`)
    }
}

const user = [
    {id:1, name: 'qwe', age: 12},
    {id:2, name: 'eqq', age: 35},
    {id:3, name: 'rew', age: 32},
]

listForObject(user)
