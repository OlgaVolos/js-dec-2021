// function userCreator(name, age){
//     let obj = {name:name, age: age}
//     return{ //manipulator
//         getName: function (){
//             return obj.name
//         },
//         getAge: function (){
//             return obj.age
//         },
//         setAge: function (age){
//             if(age<0 || age<obj.age){
//                 alert('!!!')
//             }else {
//                 obj.age = age
//             }
//         }
//     }
// }
// let manipulator = userCreator('Olya', 33);
// console.log(manipulator);
// console.log(manipulator.getName());
// console.log(manipulator.getAge());
// (manipulator.setAge(35));
// console.log(manipulator.getAge());
// замикання



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

//  function Car(model, producer, year, maxSpeed, volume){
//     this['model'] = model;
//     this['producer'] = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     this.info = function (){
//         for (const key in this) {
//             if(typeof this[key] !== "function"){
//                 console.log(`${key} ${this[key]}`)
//             }
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed){
//         this.maxSpeed = this.maxSpeed+newSpeed;
//         console.log(this.maxSpeed)
//     };
//     this.changeYear = function (newValue){
//         this.year = newValue;
//         console.log(this.year)
//     };
//     this.addDriver = function (driver){
//         this.driver = driver
//     }
//  };
// let car = new Car('opel', 'corsa', 2010, 160, 2);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(10);
// car.changeYear(2020);
// car.addDriver('vova' );
// car.info();


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car{
//      constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info(){
//         for (const key in this) {
//             if(typeof this[key] !== "function"){
//                 console.log(`${key} ${this[key]}`)
//             }
//         }
//     }
//     increaseMaxSpeed(newSpeed){
//         console.log(this.maxSpeed = this.maxSpeed + newSpeed);
//     }
//     changeYear (newValue){
//         console.log(this.year = newValue);
//     }
//     addDriver (driver){
//         console.log(this.driver = driver);
//     }
// }
// const addCar = new Car('corsa', 'opel', 2007, 150, 2.0);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(15);
// addCar.changeYear(2020);
// addCar.addDriver('Olya');
// console.log(addCar);
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

function Cinderella(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
}
const girls = [
    new Cinderella('Anna', 18, 35),
    new Cinderella('Alina', 19, 37),
    new Cinderella('Yulia', 20, 38),
    new Cinderella('Ulia', 21, 39),
    new Cinderella('Olya', 22, 36),
    new Cinderella('Katya', 23, 34),
    new Cinderella('Maryna', 18, 35),
    new Cinderella('Svitlana', 30, 41),
    new Cinderella('Oksana', 25, 36),
    new Cinderella('Sophia', 18, 33),
];

class Prince{
      constructor(name, age, findSize) {
        this.name = name;
        this.age = age;
        this.findSize = findSize;
    }
}
const boy = new Prince('Artur', 30, 41)
const findCinderella = (array, prince) => {
    for (const item of array) {
        if(prince.findSize === item.size){
           return console.log(`My name is ${prince.name} and I found you ${item.name}`)
        }
    }
}
findCinderella(girls, boy);

const boy1 = new Prince('Vova', 33, 39);
findCinderella(girls, boy1);

const findGirl = girls.find((girl)=> girl.size === boy.findSize);
console.log(findGirl);

