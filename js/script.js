/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

/*
l'utente sceglie pari o dispari
l'utente inserisce un numero da 1 a 5
il computer genera una altro numero random da 1 a 5
sommiamo e paragoniamo i numeri (funzione);
*/

const userOddOrEven = prompt('pari o dispari');
const userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
let computerNumber;

let i = computerNumber;
while (i < 5) {
    console.log(getRandomInteger(1, 5));
    i++
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let sum = somma(userNumber + computerNumber);

function somma(a, b) {
    if (somma % 2 == 0) {
        console.log('il valore è pari');
    } else {
        console.log('il valore è dispari');
    }
    return a + b;
}

if (userOddOrEven === 'pari' && somma % 2 == 0) {
    console.log('hai vinto');
} else (console.log('hai perso'));

if (userOddOrEven === 'dispari' && somma % 2 != 0) {
    console.log('hai vinto');
} else (console.log('hai perso'));

/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userWord = prompt('inserisci una parola');
let palindrome = controlloPalindromo(userWord);
console.log(palindrome);

let parola = controlloPalindromo;

function controlloPalindromo(parola) {
    const lunghezza = parola.length;

    for (let i = 0; i < lunghezza / 2; i++) {
        if (parola[i] != parola[lunghezza - 1 - i]) {
            return 'la parola non è palindroma';
        } else {
            return 'la parola è palindroma';
        }
    } 
};
