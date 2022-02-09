// "use strict";

// let pippo = "ciao";

// console.log(pippo);

// function checkIfIsEven(numberToCheck) {
//     return numberToCheck % 2 === 0;
// }

// // controllo se è pari
// function check(n) {
//     return n % 2 === 0;
// }

// let pluto = 4;
// let paperino = false;
// console.log("🚀 ~ file: script.js ~ line 18 ~ paperino", paperino)

// console.log("pippo, pluto, paperino", pippo, pluto, paperino);

// let array = ["pippo", "pluto", "paperino"];
// console.log("🚀 ~ file: script.js ~ line 23 ~ array", array)

// console.table(array);

// let stud1 = {name: "andrea", age: 11};
// let stud2 = {name: "claudio", age: 12};
// let stud3 = {name: "marco", age: 13};
// let stud4 = {name: "filippo", age: 14};
// let stud5 = {name: "giovanni", age: 15};

// let array2 = [stud1, stud2, stud3, stud4, stud5];
// console.table(array2);

// let player = {name: "andrea", game: "space invaders", age: 12, address: "via pippo pippo 2", match: 2, surname: "pippoPippo", highscore: 120000, position: 10000, store: "gamestop", score: 112};
// console.log("🚀 ~ file: script.js ~ line 36 ~ player", player)
// console.log("🚀 ~ file: script.js ~ line 36 ~ player", JSON.stringify(player));
// player.score = 200;

// class EmptyStringError extends Error{
//     constructor(message){
//         super(message);
//     }
// }

// class InvalidStringError extends Error{
//     constructor(message){
//         super(message);
//     }
// }

// function parseStringToNumber(string) {
//     if (string.length === 0) {
//         throw new EmptyStringError("Stringa vuota!")
//     }
//     let stringNumber = string;
//     if (string.includes(",")) {
//         stringNumber = string.replace(",", ".");
//     }
//     const number = parseFloat(stringNumber);
//     if (isNaN(number)) {
//         throw new InvalidStringError("Stringa non valida!")
//     }
//     return number;
// }

// let age1;

// try {
//     age1 = parseStringToNumber("13");
//     console.log(age1);
// } catch (error) {
//     if (error instanceof EmptyStringError) {
//         age1 = 0
//         console.log(age1);
//     } else {
//         console.log(error.message);
//         console.log("inserisci di nuovo");
//     }
//     // if (error.message === "Stringa vuota!") {
//     //     age1 = 0
//     //     console.log(age1);
//     // }else {
//     //     console.log(error.message);
//     //     console.log("inserisci di nuovo");
//     // }
// }

// let age = parseStringToNumber("13");

// console.log(age);
// if (isNaN(age)) {
//     console.log("Non sono riuscito a convertire");
// } else{
//     console.log(age);
// }

// console.log(parseStringToNumber("2"));
// console.log(parseStringToNumber("2.1"));
// console.log(parseStringToNumber("2,1"));
// console.log(parseStringToNumber("2pippo"));
// console.log(parseStringToNumber("pippo2"));
// console.log(parseStringToNumber("pippo"));

//crea funzione CSVparse, converti stringa in array di numeri
// se un elemento non è parsabile, ritorna errore "stringa parzialmente invalida" e return di oggetto con oggetti parsabili;
// errore se string è vuota
//funzione deve essere statica, errors in altro file.

string1 = "2; 2,5; 4.1; 6; pippo"

function CSVparse(string) {
    let tempArray = []
    let stringNumber = string
    if (string.includes(",")) {
        stringNumber = string.replace(",", ".");
    }
    tempArray = stringNumber.split("; ")
    console.log(tempArray);
}

CSVparse(string1);
