// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world';
// let str1 = 'lorem ipsum';
// let str2 = 'javascript is cool'
// console.log(str.length);
// console.log(str1.length);
// console.log(str2.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// console.log(str.toUpperCase());
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str3 = 'HELLO WORLD'
// let str4 = 'LOREM IPSUM'
// let str5 = 'JAVASCRIPT IS COOL'
// console.log(str3.toLowerCase());
// console.log(str4.toLowerCase());
// console.log(str5.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// console.log(str.trim());
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать'
// const stringToArr  = (string) => {
//     return string.split(' ')
// };
// console.log(stringToArr(str));

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// const delete_characters =  (string, length) => {
//     return string.substring(0, length)
// };
// console.log(delete_characters(str, 9));
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let string = "HTML JavaScript PHP";
// const insert_dash = (str) => {
//     return str.split(' ').join('-').toUpperCase()
// }
// console.log(insert_dash(string));
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// const firstToUpper = (str) => {
//     let newString = str[0].toUpperCase() + str.slice(1)
//     return newString
// };
// const qwe = 'jkfgnkj sgrg gdgerg';
// const asd = 'hffjf iiejoiwej'
// console.log(firstToUpper(asd));
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// const capitalize = (string) => {
//     const arrFromStr = string.split(" "); //спочатку робимо масив по пробілу;
//     const mapArr = arrFromStr.map(value => value[0].toUpperCase()+ value.slice(1)); //зробить кажну першу букву великою і додасть порізаний кожен елемент з 1 символу
//     const newStr = mapArr.join(" "); //зробить стрічку по пробілу
//     return newStr
// };
// let str = 'Каждый охотник желает знать';
// console.log(capitalize(str));


