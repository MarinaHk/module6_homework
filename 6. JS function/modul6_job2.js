/*Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
  определяет, является ли оно простым, 
    и выводит простое число или нет. 
    Если введено больше 1 000, то выводится сообщение, что данные неверны. 
    Обратите внимание на числа 0 и 1.*/


function number(num) {
    let _true = 'число простое', _false1 = 'данные неверны', _false2 = 'число не простое';
    if (num <= 1 && num > 1000) return _false1;
    if (num == 2) return _true;
    if (num == 1) return _false2;
    if (num == 0) return _false2;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return _false2;
            }
        if (num > 1000) {
            return _false1;
            }
    }
        return _true;
}
console.log(number(1001));
console.log(number(571));
console.log(number(42));
console.log(number(0));
console.log(number(1));