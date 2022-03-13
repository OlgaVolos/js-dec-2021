// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let user1 = new User(12, "Oleg", "Vovk", 'vovk@gmail.com', 123123123);
// let user2 = new User(21, "Olya", "Vovk", 'vovkollya@gmail.com', 321321321);
// let user3 = new User(38, "Kolya", "Zajec", 'zajec@gmail.com', 123123123);
// let user4 = new User(47, "Svitlana", "Slon", 'Slon@gmail.com', 165965789);
// let user5 = new User(50, "Vova", "Pes", 'Pes@gmail.com', 98725869);
// let user6 = new User(68, "Yulia", "Kit", 'Kit@gmail.com', 852456789);
// let user7 = new User(11, "Ulia", "Kotyk", 'Kotyk@gmail.com', 213213213);
// let user8 = new User(8, "Maria", "Pesuk", 'Pesuk@gmail.com', 456546546);
// let user9 = new User(9, "Igor", "Vovchyk", 'Vovchyk@gmail.com', 963693693);
// let user10 = new User(10, "Kira", "Slonyk", 'Slonyk@gmail.com', 471456895);
//
// let userArray = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

// або можна відразу в userArray робити нових юзерів
// const userArray = [
// new User(1, "Oleg", "Vovk", 'vovk@gmail.com', 123123123);
// new User(2, "Olya", "Vovk", 'vovkollya@gmail.com', 321321321);....

// ]
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filterUserArray = userArray.filter(value => {
//     if (value.id % 2 === 0) {
//         return value
//     }
// });
// console.log(filterUserArray);
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// const usersSort = userArray.sort(
//     (a, b) => a.id - b.id
// );
// console.log(usersSort);
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
     constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const clientArray =[
    new Client(12, 'Vova', 'Pes', 'pes@gmail.com', 961231231, ['phone', 'car']),
    new Client(1, 'Olya', 'Pesyk', 'pesuk@gmail.com', 964561554, ['phone', 'car', 'cat']),
    new Client(23, 'Igor', 'Cat', 'cat@gmail.com', 961231231, ['phone', 'car', 'bike', 'apple']),
    new Client(34, 'Yulia', 'Kit', 'kit@gmail.com', 78946123, ['phone']),
    new Client(11, 'Vasya', 'Slon', 'slon@gmail.com', 2332154, ['car']),
    new Client(3, 'Max', 'Max', 'max@gmail.com', 78961654, ['phone', 'car', 'apple', 'cherry', 'mobile']),
    new Client(6, 'Ira', 'Ira', 'Ira@gmail.com', 961231231, ['phone', 'car', 'book', 'apple', 'cherry']),
    new Client(7, 'Katya', 'Katya', 'Katya@gmail.com', 45646798, ['phone', 'car']),
    new Client(2, 'Maria', 'Maria', 'Maria@gmail.com', 7984654, ['phone']),
    new Client(9, 'Nastia', 'Nastia', 'Nastia@gmail.com', 56464313, ['phone', 'car']),


]

// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const clientsSort = clientArray.sort(
    (a,b) => a.order.length-b.order.length
);
console.log(clientsSort);
