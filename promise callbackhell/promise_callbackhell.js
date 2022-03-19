// console.log('start');
// setTimeout(() => {
//     let counter = 0;
//     console.log('do1', counter)
//     setTimeout(() => {
//         counter ++;
//         console.log('do2', counter);
//         setTimeout(() => {
//             counter ++;
//             console.log('do3', counter);
//             setTimeout(() => {
//                 counter ++;
//                 console.log('do4', counter);
//                 setTimeout(() => {
//                     counter ++;
//                     console.log('do5', counter);
//                     setTimeout(() => {
//                         counter ++;
//                         console.log('do6', counter);
//                         setTimeout(() => {
//                             counter ++;
//                             console.log('do7', counter);
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 3000)
//     }, 2500)
// }, 2000)
// console.log('finish');


// setTimeout(() => {
//     let counter = 0
//     console.log(counter,'start');
//     setTimeout(() => {
//         counter++;
//         console.log(counter,'Прокидаємося');
//         setTimeout(() => {
//             counter++;
//             console.log(counter,'Зарядка');
//             setTimeout(() => {
//                 counter++;
//                 console.log(counter,'Чистити зуби');
//                 setTimeout(() => {
//                     counter++;
//                     console.log(counter,'Снідати');
//                     setTimeout(() => {
//                         counter++;
//                         console.log(counter,'Одягатися');
//                         setTimeout(() => {
//                             counter++;
//                             console.log(counter,'Включити комп');
//                             setTimeout(() => {
//                                 counter++;
//                                 console.log(counter,'Вчитися');
//                                 setTimeout(() => {
//                                     counter++;
//                                     console.log(counter,'Обід');
//                                     setTimeout(() => {
//                                         counter++;
//                                         console.log(counter,'Вчитися');
//                                         setTimeout(() => {
//                                             counter++;
//                                             console.log(counter, 'Вечеря');
//                                             setTimeout(() => {
//                                                 counter++;
//                                                 console.log(counter, 'Спати')
//                                             },1000)
//                                         },1000)
//                                     },1000)
//                                 }, 1000)
//                             }, 1000)
//                         }, 1000)
//                     },1000)
//                 },1000)
//             },1000)
//         }, 1000)
//     },1000)
// }, 1000)
//
// let promise = new Promise((resolve, reject) => {
//     let counter = 0;
//     setTimeout(() => {
//         console.log('do', counter);
//         counter++;
//         resolve(counter);
//     }, 1000)
// });
//
// let promise1 = promise.then((counter) => {
//     console.log(counter);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('do', counter);
//             counter++;
//             resolve(counter);
//         },1000)
//     })
// });
// promise1.then(value => console.log(value));

//або!!!! те ж саме:

// let promise = new Promise((resolve, reject) => {
//     let counter = 0;
//     console.log(counter);
//     setTimeout(() => {
//         console.log('do', counter);
//         counter++;
//         resolve(counter);
//     }, 1000)
// });
//
// promise
//     .then((counter) => {
//         console.log(counter);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('do', counter);
//                 counter++;
//                 resolve(counter);
//             }, 1000)
//         })
//     })
//     .then(counter => {
//         console.log(counter);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(counter, 'do');
//                 counter++;
//                 resolve(counter);
//             }, 1000)
//         });
//     })
//     .then((counter => {
//        return  new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('do', counter);
//                 counter++;
//                 resolve(counter);
//             }, 2000)
//         })
//     }))
//можна не працювати від зміної promise, а взяти просто new Promise(...).then().then() і тд

// new Promise((resolve, reject) => {
//     let counter = 0;
//     console.log(counter);
//     setTimeout(() => {
//         console.log('do', counter);
//         counter++;
//         resolve(counter);
//     }, 1000)
// })
//     .then(counter => {
//         console.log(counter);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('do', counter);
//                 counter++;
//                 resolve(counter);
//             }, 1000)
//         })
//     })
//     .then(counter => {
//         console.log(counter);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log(counter, 'do');
//                 counter++;
//                 resolve(counter);
//             }, 1000)
//         });
//     })
//     .then(counter => {
//         return  new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('do', counter);
//                 counter++;
//                 if(counter>2){
//                     reject('finish')
//                 }
//                 resolve(counter);
//             }, 2000)
//         })
//     })
//     .catch(reason => console.log(reason));



// полегшення конструкції через ф-ю

// function timeout(counter, milliseconds){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('async operation', counter);
//             counter++;
//             resolve(counter);
//
//         }, milliseconds)
//
//     })
// }
// timeout(0, 2000).then(value => {
//     return timeout(value, 1000)
// }).then(value => timeout(value, 1000) )

// new Promise((resolve, reject) => {
//     let counter = 0;
//     setTimeout(() => {
//         console.log(counter, 'встати');
//         counter++;
//         resolve(counter)
//     },1000)
// }).then(counter => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(counter, 'поснідати');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     })
// }).then(counter => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(counter, 'включити комп');
//             counter++;
//             resolve(counter)
//         },1000)
//     })
// }).then(counter=> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(counter, 'вчитися');
//             counter++;
//             resolve(counter)
//         }, 1000)
//     })
// }).then(counter => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(counter, 'обідати');
//             counter++;
//             resolve(counter);
//         },1000)
//     })
// }).then(counter => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(counter, 'вечеряти');
//             counter++;
//             resolve(counter);
//         }, 1000)
//     } )
// }).then(counter => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(counter, 'спати');
//             counter++;
//             resolve(counter)
//         },1000)
//     })
// })
