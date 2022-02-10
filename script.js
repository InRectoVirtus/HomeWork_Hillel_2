// First
let firstNumber = +prompt("Введите число от 0 до 40", 0),
    secondNumber = +prompt("Введите число от 100 до 200");

for (i = firstNumber; i <= secondNumber; i++) {
    if (i % 2 === 0) {
        console.log(Math.pow(i, 2));
    }
}

// Second
let writeNumber;
do {
    writeNumber = +prompt("Напиши число но не строку и не NaN" );
} while (isNaN(writeNumber) || writeNumber =='');

// Third

let isPrime = +prompt('Проверка на простое число');

stepThird:
for(i = 2; i <= isPrime; i++){
    for(j = 2; j < i; j++){
        if(i % j == 0) continue stepThird;
    }
    if(i == isPrime) {
        alert(`${isPrime} простое число`)
    }
}


// Fourth

let summ = 0;

stepFourth:
for(i = 0; i <= 250; i++) {
    if (i == 0 || i == 1) continue stepFourth;

    for(j = 2; j < i; j++) {
        if (i % j == 0) continue stepFourth;
    }
    summ += i;
}

alert(summ)