//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = +prompt("Введіть число від 0 до 59");
//  if (time >=0 && time <=14){
//      console.log("Це перша чверть")
// } else if( time>=15 && time<=29){
//      console.log("Це друга чверть")
//  } else if( time>=30 && time<=44){
//      console.log("Це третя чверть")
//  } else if( time>=45 && time<=59){
//      console.log("Це четверта чверть")
//  } else {
//      alert("Введіть число від 0 до 59")
//  }

//
//
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// const day = +prompt("Введіть число від 1 до 31");
//  if (day>=1 && day<=10){
//      alert('Це перша декада')
//  } else if (day>=11 && day<=20){
//      alert('Це друга декада')
//  } else if (day>=21 && day<=31){
//      alert('Це третя декада')
//  } else {
//      alert('Ви ввели неправильне число!')
//  }
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// let test = 0;
// if(!!test){
//     console.log("Вірно")
// } else {
//     console.log("невірно")
// }
// test=true;
// //
// //    Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//  !!test ? console.log("Вірно"):console.log("невірно");

//
// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let a= +prompt('Введіть число 1, 0, -3');
// if(a !== 0){
//     console.log("Вірно")
// } else {
//     console.log("невірно")
// }

//
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.


// const day = prompt('введіть порядковий номер дня тижня'); // буде стрінгою. Якщо писати числом, то в кейсі без лапок
//
// switch (day){
//     case '1':
//         console.log("Прочитати книжку");
//         break;
//     case '2':
//         console.log("Випити кави");
//         break;
//     case '3':
//         console.log('Помити посуд');
//         break;
//     case '4':
//         console.log('Витерти пил');
//         break;
//     case '5':
//         console.log('Піти в магазин');
//         break;
//     case '6':
//         console.log('Прибрати');
//         break;
//     case '7':
//         console.log('З"їсти вареників');
//         break;
//     default:
//         console.log('Немає такого дня');
// }
// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// const year = +prompt('Введіть рік');
// //
// if(year !== 0 && year %4 === 0){
//     console.log('Цей рік високосний')
// } else {
//     console.log('Цей рік нормальний')
// };

//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
//
// const ecma = prompt('Яка офіційна назва JavaScript?')
// if (ecma.trim() === 'ECMAScript'){
//     console.log('Правильно')
// } else {
//     console.log('Не знаєте? ECMAScript!')
// }
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!