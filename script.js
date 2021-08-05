"use strict";

// Функция проверки ввода числа
let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// Игра
function game() {
    let botNum = Math.ceil(Math.random() * 100);
    let attempts = 10;

    return function gameBot() {
        // Проверка кол-ва оставшихся попыток
        if (attempts <= 0) {
            let flag = confirm("Попытки закончились, хотите сыграть еще?");
            if (flag === true) {
                return location.reload();
            } else {
                return alert("Досвидания!");
            }
        }

        // Логика бота
        let userNum = prompt("Угадай число от 1 до 100");
        if (userNum === null) {
            //если нажали отмену
            return alert("Игра окончена");
        } else if (!isNumber(userNum)) {
            //если введено не число
            alert("Введите число!");
            return gameBot();
        } else if (+userNum === botNum) {
            //если число угадано
            let flag = confirm(
                "Поздравляю, Вы угадали!!! Хотели бы сыграть еще?"
            );
            if (flag === true) {
                //перезапуск или выход
                return location.reload();
            } else {
                return alert("Досвидания!");
            }
        } else if (+userNum < botNum) {
            //если число больше
            attempts = attempts - 1;
            alert(
                "Загаданное число больше, осталось попыток " + String(attempts)
            );
            return gameBot();
        } else if (+userNum > botNum) {
            //если чило меньше
            attempts = attempts - 1;
            alert(
                "Загаданное число меньше, осталось попыток " + String(attempts)
            );
            return gameBot();
        }
    };
}
// Запуск игры
let start = game();
console.dir(start);
start();
