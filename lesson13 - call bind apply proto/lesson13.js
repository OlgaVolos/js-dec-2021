// let user1 = {
//     name: 'vasya',
//     greeting: function (){
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
// let user2 = {name: 'kokos'};
//
// user.greeting.call(user2); //дозволяє підмінити функцію комусь, в кого її нема.
// //делегування своєрідне

// let user1 = {
//     name: 'vasya',
//     greeting: function (msg){
//         console.log(`${msg}, my name is ${this.name}`);
//     },
//     foobar: function (a,b,c){
//         console.log(this, a,b,c)
//     },
// };
// let user2 = {name: 'kokos'};
//
// user.greeting.call(user2, 'hi'); //через кому передаємо аргументи
//
// let args = ['asd', 'qwe','zxc']
// user1.foobar.apply(user2, args) //приймає лише два аргументи, другий може бути массивом, послідовність і кількість має значення
//
//
// const greeting = user1.greeting.bind(user2, 'aloha'); //робить повноцінну копію ф-ції
// greeting() //тепер можна писати аргументи і вона буде працювати для user2


//наслідування від функцій без використання класів

// function User(name, surname){
//     this.name = name;
//     this.surname = surname;
// }
//
// function Customer (name, surname, password){
//     User.apply(this, arguments);
//     this.password = password;
// }
//  let customer = new Customer('qwe', 'asd', 'zxc');
// console.log(customer)


//прототипи - це передавання масивам своїх методів, які ссилаються на новий масив

let nums = [1,2,3];

Array.prototype.print = function (){
    for (const item of this) {
        console.log(item);
    }
}// this ссилатиметься на масив, до якого буде застосовватися прототипний метод


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

nums.print();
users.print();




