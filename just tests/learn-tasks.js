const decryptMessage = (message) => {
    let result = ''
    for (let i = message.length - 1; i >= 0; i--) {

        result +=message[i];
    }
        console.log(result);
}

decryptMessage('volos');

const makeAbbr = (words) => {
    let abbrev = words[0];
    for (let i = 0; i < words.length; i++) {
        if(words[i] === ' '){
            abbrev += words[i+1];
        }
    }
        console.log(abbrev.toUpperCase());
}

makeAbbr('olya volos igorivna')

const isWerewolf = (target) => {
   let direct = '';
   let reversed = '';
    for (const el of target) {
        if(typeof el === "string"){
            direct += el;
            reversed = el.concat(reversed);
        }
    }
            if(direct.toLowerCase() === reversed.toLowerCase()){
                console.log(true);
            } else {
                console.log(false);
            };

}

isWerewolf('Cac');
isWerewolf('Caca');
