// //
// //
// // Взяти файл template_2.html та працювати в ньому
// // 1) Напишіть код, який :
// // a) додає клас з назвою групи, елементу з ід main_header
// // const elementById = document.getElementById('main_header');
// // elementById.classList.add('dec-2021')
//
// // b) робить шириниу елементу ul 400px
// const element = document.getElementsByTagName('ul');
// for (const el of element) {
//     el.style.width = '400px'
//     el.style.backgroundColor = 'silver'
//
// }
//
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// const linkList = document.getElementsByClassName('linkList')
// for (const el of linkList) {
//     el.style.width = '50%'
//     el.style.border = '1px solid red'
//
// }
// // d) отримує текст який зберігається в елементі з класом listElement2
// const txt = document.getElementsByClassName('listElement2')
// for (const txtElement of txt) {
//     console.log(txtElement.innerText);
// }
// // e) отримує всі елементи li та змінює ім колір фону на сірий
// const liBackground = document.getElementsByTagName('li');
// for (const el of liBackground) {
//     el.style.backgroundColor = 'gray'
// }
// // f) отримує всі елементи 'a' та додає їм клас anchor
// const a = document.getElementsByTagName('a');
// for (const aElement of a) {
//     aElement.classList.add('anchor')
// }
// // g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// const changeTxt = document.getElementsByTagName('a');
// for (const changeTxtElement of changeTxt) {
//     if(changeTxtElement.innerText === 'link3'){
//         changeTxtElement.style.fontSize = '40px'
//     }
// }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const addClass = document.getElementsByTagName('a');
// for (const el of addClass) {
//     el.classList.add(`element_${el.innerText}`)
// }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const subHeader = document.getElementsByClassName('sub-header');
// for (const el of subHeader) {
//     el.style.backgroundColor = prompt("add color")//через цикл для кожного окремо треба ввести колір
// }
// subHeader[0].style.backgroundColor = prompt('add color');
// subHeader[1].style.backgroundColor = prompt('add color');

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// const subHeader = document.getElementsByClassName('sub-header');
// for (const el of subHeader) {
//     if(el.innerText === 'content 2 segment' ){
//         el.style.color = prompt('add color')
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const content = document.getElementsByClassName('content_1');
// for (const el of content) {
//     el.innerText = prompt('add text')
// }
// l) отримати елементи p та змінити їм padding на 20px
// const padding = document.getElementsByTagName('p');
// for (const el of padding) {
//     el.style.padding = '20px'
// }
// // m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const text = document.getElementsByClassName('text2');
// for (const textElement of text) {
//     textElement.innerText = 'dec-2021'
// }
