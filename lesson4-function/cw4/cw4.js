// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minNum(a,b,c){
//     if(a<b && b<c){
//         return a;
//     } else if(b<a && b<c){
//         return b
//     } else {
//         return c
//     }
// }

// console.log(minNum(5, 1, 2));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNum(a,b,c){
//     if(a>b && a>c){
//         return a
//     } else if(b>a &&b>c){
//         return b
//     } else {
//         return c
//     }
// }

// console.log(maxNum(6, 7, 85));

// - створити функцію яка повертає найбільше число з масиву
// function maxNumOfArr(arr){
//     let max = arr[0];
//     for (const arrElement of arr) {
//         if(arrElement>max){
//             max = arrElement
//         }
//     }
//     return max
// }
// - створити функцію яка повертає найменьше число з масиву
// function minNumArr(arr){
//     let min = arr[0];
//     for (const minElement of arr) {
//         if(minElement<min){
//             min=minElement
//         }
//     }
//     return min
// }
// const array = [45,78,65,566,12,5]
// console.log(maxNumOfArr(array));
// console.log(minNumArr(array));

// // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function sumArrEl(arr){
//     let sum =0
//     for (const arrElement of arr) {
//         sum = arrElement+sum
//     }
//     return sum
// }
// const array = [1,2,3,4,5];
// console.log(sumArrEl(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function average(arr){
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum = arrElement+sum
//     }
//     return sum/arr.length
// }

// console.log(average(array));
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function maxMin(arr){
//     let min = arr[0];
//     let max = arr[0]
//     for (const arrElement of arr) {
//         if(arrElement<min){
//             min = arrElement
//         } else if(arrElement>max){
//             max = arrElement
//         }
//     }
//     document.write(min);
//     console.log(max);
//
// }
// const array = [56, 35, 3, 78, 45];
// (maxMin(array));
// - створити функцію яка заповнює масив рандомними числами
//
// function randomArr(length){
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random()*100))
//
//     }
//     return array
//
// }
//
// console.log(randomArr(10));
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomArrLimit(length, limit){
//     let array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.round(Math.random()*limit))
//     }
//     return array
// }
//
// console.log(randomArrLimit(10, 10));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function reverse(arr) {
//     let newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// const arr2 = [3, 2, 1];
// console.log(reverse(arr2));



