// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// const div = document.createElement('div');
// div.id = 'text'
// div.style.width = '100px'
// div.style.height = '100px'
// div.style.backgroundColor = 'silver';
// div.innerText = 'Hello';
// document.body.appendChild(div);
//
// const btn = document.createElement('button');
// btn.innerText = 'click me';
// document.body.appendChild(btn);
//
//
// const clickBtn = document.getElementsByTagName('button')[0];
// clickBtn.onclick = function (){
//         const txt = document.getElementById('text');
//             txt.style.display = 'none'
// }


//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// const btn = document.getElementById('btn');
// btn.onclick = function (){
//     btn.hidden = true
// }

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
// та повідомити про це користувача

// const btnAge = document.getElementById("btnAge");
// btnAge.onclick  = () => {
//     const byId = document.getElementById('age');
//     if(!byId.value){
//         alert('Введіть ваш вік!')
//     } else if(byId.value<18){
//         alert('Вам мало років')
//     } else {
//         alert("Ласкаво просимо на сайт!")
//     }
// };
//
// - Создайте меню, которое раскрывается/сворачивается при клике
const menu = document.getElementsByClassName('menu')[0];
const title = document.querySelector('.title');

title.onclick = () => {
    menu.classList.toggle('hidden')
};

//
//
// - Создать список комментариев , пример объекта коментария
// - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];

//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

for (const comment of comments) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    h4.innerText = comment.name;
    p.innerText = comment.body;

    const btn = document.createElement('button');
    btn.innerText = 'hide';

    div.append(h4, p, btn);

    btn.onclick = () => {
        p.style.display = 'none'
    }

    document.body.appendChild(div)

}
