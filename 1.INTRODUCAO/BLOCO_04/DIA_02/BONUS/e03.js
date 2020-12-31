let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], numbersMultiplicado = [];

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === (numbers.lenght - 1)) {
    numbersMultiplicado.push (numbers[index] * numbers[index + 1]);
    }
    else {
        numbersMultiplicado.push (numbers[index] * 2);
    }
}
console.log (numbersMultiplicado);