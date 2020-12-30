let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], sumNumbers = 0;

for (index = 0; index < numbers.length; index += 1) {
    sumNumbers += numbers[index];
}

console.log ('A média aritmética é: ' + (sumNumbers / numbers.length));

if ((sumNumbers / numbers.length) > 20) {
    console.log ('Valor maior que 20');
}
else {
    console.log ('Valor menor ou igual a 20');
}