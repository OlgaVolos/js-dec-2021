// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// const a = +prompt('Введіть перше число');
// const b = +prompt('Введіть друге число');
//
// if(a===b){
//     console.log('числа рівні')
// }else if(a>b){
//     console.log(a)
// } else {
//     console.log(b)
// }
//
//
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// const number = parseInt(prompt('Введіть число від 1 до 90'));
//
// if(number>=1 && number<=20){
//     console.log('перший під"їзд')
// } else if(number>=21 && number<=48){
//     console.log('другий під"їзд')
// }else if(number>=49 && number<=90) {
//     console.log('третій під"їзд')
// } else {
//     console.log('ви ввели невірний номер')
// };
//
//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
//
// const number = +prompt('Введіть число');
// (number === 10) ? console.log('вірно') : console.log('невірно');
//
// (+prompt('Введіть число') === 10) ? console.log('вірно') : console.log('невірно');
//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// const temperature = +prompt('Введіть число')
//
// if(temperature>=10 && temperature<=22){
//     console.log('йдемо вчитися!')
// } else {
//     console.log('Сидимо вдома!')
// }

//
//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// const surprise = +prompt('Введіть число')
//
// switch (surprise){
//     case 1:
//         console.log('Авто');
//         break;
//     case 2:
//         console.log('Мото');
//         break;
//     case 3:
//         console.log('Телефон');
//         break;
//     case 4:
//         console.log('Сковорідка');
//         break;
//     case 5:
//         console.log('Батарейка');
//         break;
//     default:
//         console.log('Дуля з маком!')
// };
