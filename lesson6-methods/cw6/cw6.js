// // - Дано список імен.
//     let n1 ='Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// const validator  = (str) => {
//     const newStr = str.replaceAll('.', ' ')
//         .replaceAll('_',' ')
//         .replaceAll('-',' ')
//         .replaceAll('   ', ' ')
//         .replaceAll('  ', ' ');
//     return newStr
// };
// console.log(validator(n1));
// console.log(validator(n2));
// console.log(validator(n3));

//
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// const randomNum  = (length) => {
//       let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random()*100))
//
//     }
//     return arr
// };
// console.log(randomNum(10));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// const array = randomNum(10);
// console.log(array);
// console.log(array.sort((a, b) => {
//     return a - b
// }));
// array.sort((a,b) => b-a)
//
// const randomNum  = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random()*100));
//     }
//     return arr.sort((a,b)=> a-b) // або return arr.sort((a,b)=> b-a)
//
// };

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// console.log(array.filter(value => value % 2 === 0));
// --------------------
// const randomNum  = (length) => {
//      let arr = [];
//      for (let i = 0; i < length; i++) {
//          arr.push(Math.floor(Math.random()*100));
//      }
//      return arr.filter(value => value%2===0)
//  };

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.4

// console.log(array.map(value => value.toString()));
// -----------------
// const randomNum  = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random()*100));
//     }
//     return arr.map(value => value.toString())
// };

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// // sortNums('ascending') // [3,11,21]
// // sortNums('descending') // [21,11,3]
// const sorting = (arr, direction) => {
//     if(direction === 'asc'){
//         return arr.sort((a, b) => a-b);
//     } else if(direction === 'des'){
//         return arr.sort((a, b) => b-a)
//     }
// };
// console.log(sorting(nums, 'asc'));
// console.log(sorting(nums, 'des'));
//
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// const filterArr = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration>5);
// console.log(filterArr);

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
