// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//

const usersDiv = document.createElement('div');
usersDiv.classList.add('main');
document.body.appendChild(usersDiv);

const userContainer = document.getElementsByClassName('main')[0];

fetch('https://jsonplaceholder.typicode.com/users').then(users => users.json()).then(users => {
    for (const user of users) {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML= `<h5>${user.id} ${user.name}</h5>`

        const btn = document.createElement('button');
        const anchor = document.createElement('a');
        anchor.innerText = 'user-details';
        anchor.href = `./user-details.html?data=${JSON.stringify(user)}`


        userDiv.appendChild(btn);
        usersDiv.appendChild(userDiv);
        btn.appendChild(anchor)
    }
})





// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
