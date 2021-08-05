"use strict";

// let userNum = +prompt("Введи число!");
// function gameBot(n) {
//     return function (x) {
//         if (n === x) {
//             return alert("Угадал!");
//         } else if (n === 0) {
//             return alert("Игра окончена");
//         } else if (n > x) {
//             alert("Загаданное число больше");
//         } else if (n < x) {
//             console.log(n);
//             return alert("Загаданное число меньше");
//         }
//     };
// }

// const start = gameBot(userNum);
// console.log(start(Math.ceil(Math.random() * 100)));

function game() {
    let botNum = Math.ceil(Math.random() * 100);
    return function gameBot() {
        let userNum = prompt("Угадай число от 1 до 100");
        if (+userNum === botNum) {
            return alert("Поздравляю, Вы угадали!!!");
        } else if (userNum === null) {
            return alert("Игра окончена");
        } else if (+userNum < botNum) {
            alert("Загаданное число больше");
            return gameBot();
        } else if (+userNum > botNum) {
            alert("Загаданное число меньше");
            return gameBot();
        }
    };
}

let start = game();
start();
