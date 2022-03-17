// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// const div1 = document.createElement('div')
// div1.innerText = 'One'
//
// const form1 = document.createElement('form');
// form1.setAttribute('name', 'form1');
//
// const input1 = document.createElement('input');
// input1.setAttribute('name', 'input1');
// const input2 = document.createElement('input');
// input2.setAttribute('name', 'input2');
//
// form1.append(input1, input2);
// div1.appendChild(form1);
//
// const div2 = document.createElement('div')
// div2.innerText = 'Two'
//
// const form2 = document.createElement('form');
// form2.setAttribute('name', 'form2')
// const input3 = document.createElement('input');
// input3.setAttribute('name', 'input3');
// const input4 = document.createElement('input');
// input4.setAttribute('name', 'input4');
//
// form2.append(input3, input4);
// div2.appendChild(form2);
//
// const btn = document.createElement('button');
// btn.innerText = 'Send info';
//
// document.body.append(div1, div2, btn);
//
// // btn.addEventListener('click', function (){
// //     console.log(document.forms.form1.input1.value);
// //     console.log(document.forms.form1.input2.value);
// //     console.log(document.forms.form2.input3.value);
// //     console.log(document.forms.form2.input4.value);
// // })

// або
// btn.onclick  = () => {
//     const element = document.getElementsByTagName('input');
//     for (const el of element) {
//         console.log(el.value)
//     }
// };


//
//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// const div = document.createElement('div');
// const form = document.createElement('form');
// form.setAttribute('name', 'formName');
//
// const input1 = document.createElement('input');
// const input2 = document.createElement('input')
// const input3 = document.createElement('input')
//
// input1.setAttribute('name', 'inputOne')
// input2.setAttribute('name', 'inputTwo')
// input3.setAttribute('name', 'inputThree')
// input1.setAttribute('type', 'number')
// input2.setAttribute('type', 'number')
// input3.setAttribute('type', 'text')
//
// form.append(input1, input2, input3);
//
// const btn = document.createElement('button');
// btn.innerText = 'Print table';
//
// document.body.append(form, btn);
//
// btn.addEventListener('click', function (){
//     let tr = input1.value;
//     let td = input2.value;
//     let txt = input3.value;
//
//     function generate (row, column, text){
//         const divTable = document.createElement('div')
//         const table =document.createElement('table');
//
//         table.style.border = '1px solid red';
//         div.appendChild(table);
//         document.body.appendChild(div);
//
//         for (let i = 0; i < row; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid green';
//             for (let j = 0; j < column; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid blue';
//                 td.innerText = `${text}`
//                 tr.appendChild(td);
//                 table.appendChild(tr)
//
//             }
//
//         }
//
//     }
//     generate(tr, td, txt)
// })
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// const badWords = ['козел', 'дурак', 'свиня', 'мудак', 'придурок'];
//
// const input = document.createElement("input");
// input.setAttribute('name', 'badWordsInput');
//
// const btn = document.createElement('button');
// btn.innerText = 'check'
//
// document.body.append(input, btn);
//
// btn.onclick  = () => {
//     for (const bad of badWords) {
//         if(input.value === bad){
//             alert("Но-но-но!");
//             input.value = '';
//             return
//         }
//     }
//     if(input.value){
//         alert('Good!');
//         input.value = ''
//     }
// };

//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
const badWords = ['козел', 'дурак', 'свиня', 'мудак', 'придурок'];

const input = document.createElement("input");
input.setAttribute('name', 'badWordsInput');

const btn = document.createElement('button');
btn.innerText = 'check'

document.body.append(input, btn);

btn.onclick  = () => {
    for (const bad of badWords) {
        if(input.value.includes(bad)){
            alert("Но-но-но!");
            input.value = '';
            return
        }
    }
    if(input.value){
        alert('Good!');
        input.value = ''
    }
};
