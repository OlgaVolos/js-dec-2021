const decryptMessage = (message) => {
    let result = ''
    for (let i = message.length - 1; i >= 0; i--) {

        result += message[i];
    }
    console.log(result);
}

decryptMessage('volos');

const makeAbbr = (words) => {
    let abbrev = words[0];
    for (let i = 0; i < words.length; i++) {
        if (words[i] === ' ') {
            abbrev += words[i + 1];
        }
    }
    console.log(abbrev.toUpperCase());
}

makeAbbr('olya volos igorivna')

// const isWerewolf = (target) => {
//     const targetToLover = target.toLowerCase()
//     let direct = '';
//     let reversed = '';
//     const abc = 'abcdefghijklmnopqrstuvwyxz'
//     for (const el of targetToLover) {
//         if (abc.includes(el)) {
//             direct += el;
//             reversed = el + reversed;
//         }
//     }
//     console.log(direct === reversed, reversed)
//
// }

const isWerewolf = (target) => {
    let direct = '';
    let reversed = '';
    for (const el of target.toLowerCase()) {
        if (typeof el === "string") {
            direct += el;
            reversed = el +reversed;
        }
    }
    return direct === reversed;
    // console.log(direct === reversed);
}

isWerewolf('Cac');
isWerewolf('Caca');
isWerewolf('ca1ac');
// isWerewolf(1);


// const getSuccessRate = (statistic) => {
//     const arr = statistic.split('').join('');
//     const sum1 = [];
//     for (const el of arr) {
//         if(el === '1'){
//             sum1.push(el)
//         }
//     }
//     const result = sum1.length / arr.length*100
//     console.log(Math.round(result));
// }
function getSuccessRate(statistic) {
    let understood = 0;
    for (let num of statistic) {
        if (num === '1'){
            understood++;
        }
    }
    const result = (understood/statistic.length*100);
    console.log(Math.round(result));
}

getSuccessRate('11000')
getSuccessRate('110001')

