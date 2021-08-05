"use strict";

// Функция проверки ввода числа
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// Игра
function game() {
    let botNum = Math.ceil(Math.random() * 100);
    return function gameBot() {
        let userNum = prompt("Угадай число от 1 до 100");
        if (userNum === null) {
            return alert("Игра окончена");
        } else if (!isNumber(userNum)) {
            alert("Введите число!");
            return gameBot();
        } else if (+userNum === botNum) {
            return alert("Поздравляю, Вы угадали!!!");
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
