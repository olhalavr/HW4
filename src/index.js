const inputNumber = parseInt(prompt("Введіть число:"));

if (isNaN(inputNumber)) {
  console.log("Будь ласка, введіть коректне число.");
} else {
  let isPrime = true;

  if (inputNumber <= 1) {
    isPrime = false;
  } else {
    for (let i = 2; i * i <= inputNumber; i++) {
      if (inputNumber % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    console.log(`Число ${inputNumber} є простим числом.`);
  } else {
    console.log(`Число ${inputNumber} не є простим числом.`);
  }
}
