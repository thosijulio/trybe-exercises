let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27], sumNumbers = 0;

for (index = 0; index < numbers.length; index += 1) {
    sumNumbers += numbers[index];
}

console.log ('A média aritmética é: ' + (sumNumbers / numbers.length));