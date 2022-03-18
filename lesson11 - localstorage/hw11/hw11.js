// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// const div = document.createElement('div')
// const form = document.createElement('form');
// form.setAttribute('name', 'myForm');
//
// const nameInput = document.createElement('input');
// nameInput.setAttribute('name', 'nameInput')
// const ageInput = document.createElement('input');
// ageInput.type = 'number';
// ageInput.setAttribute('name', 'ageInput');
//
//
// const btn = document.createElement('button');
// btn.innerText = 'add to localstorage';
//
// form.append(nameInput, ageInput);
// div.append(form, btn);
//
// document.body.appendChild(div);
//
//
// btn.onclick  = () => {
//     let user = {
//         name: nameInput.value,
//         age: ageInput.value
//     };
//
//         localStorage.setItem('user', JSON.stringify(user));
//
//     nameInput.value = ''
//     ageInput.value = ''
// };

// let name = document.forms.userForm.name;
// let age = document.forms.userForm.age;
// let btn = document.getElementById('btn');
// let key = 'user';
//
// let save = (userName, userAge) => {
//     let user = {
//         name: userName,
//         age: userAge
//     };
//     localStorage.setItem(key, JSON.stringify(user));
// };
//
// btn.onclick = () => {
//     save(name.value, age.value);
// } // для готової форми



//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

const {carModel, carType, carVolume} = document.forms.carForm;
const btn = document.getElementById('carBtn');
const key = 'car' //можна запакувати назву ключа в змінну і використовувати її

// let saveCar  = (model, type, volume) => {
//     let carArr = JSON.parse(localStorage.getItem(key)) || [];
//
//     carArr.push({model, type, volume});
//     localStorage.setItem(key, JSON.stringify(carArr))
// };
//
// btn.onclick  = () => {
//     saveCar(carModel.value, carType.value, carVolume.value)
// }; //скорочений запис

// btn.onsubmit  = () => {
//     let car = {
//         model: carModel.value,
//         type: carType.value,
//         volume: carVolume.value
//     }
//     let carArray = localStorage.getItem('car');
//     if(!carArray){
//         carArray = [];
//         carArray.push(car);
//         localStorage.setItem('car', JSON.stringify(carArray))
//     } else {
//         let parseCarArray = JSON.parse(carArray);
//         parseCarArray.push(car);
//         localStorage.setItem('car', JSON.stringify(parseCarArray))
//
//     }
// };

let carArr = JSON.parse(localStorage.getItem('cars')) || [];

document.forms.carForm.onsubmit = function (e){
    e.preventDefault();
    const model = e.target.carModel.value;
    const type = e.target.carType.value;
    const volume = e.target.carVolume.value;

    let car = {model, type, volume}
    carArr.push(car);
    localStorage.setItem('cars', JSON.stringify(carArr))

}
