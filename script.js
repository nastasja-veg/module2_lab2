// 1. Напишите функцию, которая принимает три числовых параметра и
// возвращает произведение двух максимальных из них.

function execute1(a,b,c) {
    const numbers = [a, b, c];
    numbers.sort((x, y) => y - x);
    return numbers[0] * numbers[1];
}

console.log(execute1(9, 10, 1)); // 9 * 10 = 90
console.log(execute1(7, 4, 5)); // 7 * 5 = 35
console.log(execute1(5, 12, 2)); // 5 * 12 = 60

// 2. Объявите функцию, которая принимает на вход два параметра: имя и
// звание. Значение звания по умолчанию «рядовой».
// Продемонстрируйте вариант использования функции с передачей 1 и 2
// параметров.

function execute2(name, rank = 'рядовой') {
    return rank + " " + name;
}

console.log(execute2('Артём'));
console.log(execute2('Василий', 'лейтенант'));

// 3. Объявите функцию, которая принимает на вход функциональное
// выражение и набор параметров для его вызова, а возвращает результат
// вызова переданного функционального выражения.

const fn = function(a, b){
    return a / b;
}
function execute3(funExp, a, b = 3) {
    return funExp(a, b);
}

console.log(fn(15, 3));
console.log(execute3(fn, 15, 3));
console.log(execute3(fn, 15));

// 4. Объявите функцию, которая принимает на вход целые числа. Для
// чётных значений функция возвращает стрелочное выражение
// возведения числа в квадрат, а для нечётных – стрелочное выражение
// возведения в куб.

function execute4(a){
    if (!Number.isInteger(a)){
        console.log('Число не простое');
        return;
    }

    if (a % 2 == 0) {
        return (x) => x * x;
    } else {
        return (x) => Math.pow (x, 3);
    }
}

console.log(execute4(8.1));
console.log(execute4(4));
console.log(execute4(8));
console.log(execute4(4)(4));
console.log(execute4(8)(8));

// 5. Напишите рекурсивную функцию для расчёта факториала числа n.

function execute5(n) {
    if (n < 1) return;
    if (n == 1) return 1;
    return n * execute5(n-1);
}

console.log(execute5(-3));
console.log(execute5(1));
console.log(execute5(2));
console.log(execute5(5));
console.log(execute5(9));