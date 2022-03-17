// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// for (const user of users) {
//     const userDiv = document.createElement('div');
//     userDiv.innerText = JSON.stringify(user);
//
//     const btn = document.createElement('button');
//     btn.innerText = 'Add to favorite'
//
//     userDiv.append(btn);
//     document.body.appendChild(userDiv);
//
//     btn.onclick  = () => {
//         let favorite = localStorage.getItem('user');
//         console.log(favorite); // на початку дасть null, бо ми не маємо такого ключа
//         if(!favorite){
//             favorite = [];
//             favorite.push(user);
//             localStorage.setItem('user', JSON.stringify(favorite))
//         } else{
//             let parseUser = JSON.parse(favorite)
//             parseUser.push(user);
//             localStorage.setItem('user', JSON.stringify(parseUser))
//         }
//     };

//     btn.onclick  = () => {
//         let favorite = JSON.parse(localStorage.getItem('user')) || [];
//         favorite.push(user);
//         localStorage.setItem('user', JSON.stringify(favorite));
//          btn.disabled = true;
//     };
// }

// або!!!!

// localStorage.setItem('user', JSON.stringify([])); // при перезагрузці сторінки видалиться весь сторедж

users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.innerText = JSON.stringify(user);

    const btn = document.createElement('button');
    btn.innerText = 'Add to favorite'


    btn.onclick  = () => {
        const favorite = JSON.parse(localStorage.getItem('user')) || []
        favorite.push(user);
        localStorage.setItem('user', JSON.stringify(favorite));
        btn.disabled = true
    };
    userDiv.append(btn);
    document.body.appendChild(userDiv);
})
const button = document.createElement('button');
button.innerText = 'clear localstorage';
document.body.appendChild(button);
button.onclick  = () => {
    localStorage.clear()
};
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених"
// при натисканні на яку об'єкт потрапляє до масиву favorites улюблених
// обраних об'єктів в локальному сховищі.


// Створити сторніку favorites.html при переході на яку потрібно вивест
// в документ всіх обраних на попередньому етапі.


