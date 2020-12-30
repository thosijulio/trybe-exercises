let numbers = [6, 8, 4, 18, 70, 8, 100, 2, 36, 25], amountOdd = 0;

for (index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 2) !== 0) {
        amountOdd += 1;
    }
}

if (amountOdd > 0) {
    console.log (amountOdd);
}

else {
    console.log ('Nenhum valor ímpar encontrado');
}
