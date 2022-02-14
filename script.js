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
let check = 0;

for (let i = 1; i <= isPrime; i++) {
  if(isPrime % i == 0) {
    check += 1;
  };
};

(check <= 2 && isPrime != 0 && isPrime != 1) ? console.log(`${isPrime} простое`) : console.log('Простого числа нету')


// Fourth

let primeSumm = 0;
for (i = 0; i <= 250; i++) {
  let checkPrime = 0;

  for (j = 0; j <= i; j++) {
    (i % j == 0) ? checkPrime += 1 : false;
  }
    (checkPrime <= 2  && i != 0 && i !=1) ? primeSumm += i : false;
}
console.log(primeSumm);
