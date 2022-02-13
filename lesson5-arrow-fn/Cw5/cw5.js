//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const minNum  = (a,b,c) => {
//     if(a<b && a<c){
//         return a
//     } else if(b<a && b<c){
//         return b
//     } else {
//         return c
//     }
//
// };
// console.log(minNum(65, 2, 8));
// console.log(minNum(1, 2, 8));
// console.log(minNum(5, 6, 4));


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const maxNum = (a,b,c) => {
//     if(a>b && a>c){
//         return a
//     } else if(b>a && b>c){
//         return b
//     } else {
//         return c
//     }
// }
// console.log(maxNum(65, 2, 8));
// console.log(maxNum(1, 2, 8));
// console.log(maxNum(5, 6, 4));

// - створити функцію яка повертає найбільше число з масиву
// const array = [11,22,33,44,55,66,77]
//
// const maxNumArr  = (arr) => {
//     let max = arr[0];
//     for (const element of arr) {
//         if(element>max){
//             max = element
//         }
//     }
//     return max
// };
// console.log(maxNumArr(array));
// // - створити функцію яка повертає найменьше число з масиву
// const minNumArr  = (arr) => {
//     let min = arr[0];
//     for (const minElement of arr) {
//         if(minElement<min){
//             min = minElement
//         }
//     }
//     return min
// };
// console.log(minNumArr(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const number = [1, 2, 3, 4];
const sumator = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum
};
console.log(sumator(number));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const avg = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum / arr.length
};
console.log(avg(number));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// const minMax = (...argumetns) => {
//     let min = argumetns[0];
//     let max = argumetns[0];
//     for (const element of argumetns) {
//         if (element<min){
//             min=element
//         }else if(element>max){
//             max=element
//         }
//     }
//     console.log(max);
//     document.write(min)
// }
// minMax( 4, 6, 7, 9, 15, 2, 3);

// - створити функцію яка заповнює масив рандомними числами

const random = (length) => {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100))// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
    }
    return array
};
console.log(random(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

const randomLimit = (length, limit) => {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * limit))// (цей код генерує рандомні числа в діапазоні від 0 до limit - Math.round(Math.random()*100)) та виводить його.
    }
    return array
};
console.log(randomLimit(10, 100));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const revers = (arr) => {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
};
console.log(revers(number));

const reverse = (arr) => {
    let newArray = [];
    for (let i = arr.length - 1, ri=0; i >= 0; i--, ri++) {
        newArray[ri]= arr[i]

    }
  return newArray
};
console.log(reverse(number));
