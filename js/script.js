
/*
function somma(num1, num2) {
    return num1 + num2;
}

console.log(somma(5, 2));
*/


/*
for (let i = 0; i < 10; i++) {
    console.log(getRandomInteger(1, 100));
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
*/

const userNumber = parseInt(prompt('dammi un numero'));
//tellUserDivisibility(userNumber);

if (isEven(userNumber)) {
    console.log('pari');
} else {
    console.log('dispari');
}

/*
if (userNumber % 2 === 0) {
    console.log('pari');
} else {
    console.log('dispari');
}
*/


function tellUserDivisibility (number) {
    console.log(number);
    if (number % 2) {
        console.log('dispari');
    } else {
        console.log('pari');
    }
}


function isEven(number) {
    if (number % 2) {
        return false;
    } else {
        return true;
    }
}