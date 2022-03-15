// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//

let block = document.createElement('div');
block.innerText = 'block'
block.classList.add('wrap');
block.classList.add('collapse');
block.classList.add('alpha');
block.classList.add('beta');
block.style.backgroundColor = 'silver';
block.style.color = 'white';
block.style.fontSize='20px';
document.body.appendChild(block);

let clone = block.cloneNode(true)
document.body.appendChild(clone)


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт
// котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//


const ul = document.getElementsByClassName('menu');
const txt = ['Main','Products','About us','Contacts'];
for (let i = 0; i < txt.length; i++) {
    const li = document.createElement('li');
    li.innerText = txt[i];
    ul[0].appendChild(li)
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// for (const el of coursesAndDurationArray) {
//     const div = document.createElement('div');
//     div.innerText = `${el.title} ${el.monthDuration}`;
//     document.body.appendChild(div)
// }

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const el of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');

    const h1 = document.createElement('h1');
    h1.classList.add('heading')
    h1.innerText = `${el.title}`;

    const p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${el.monthDuration}`

    div.appendChild(h1);
    div.appendChild(p);
    document.body.appendChild(div)
}
