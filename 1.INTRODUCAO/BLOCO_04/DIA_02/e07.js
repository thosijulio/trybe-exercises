let numbers = [6, 8, 4, 18, 70, 8, 100, 2, 36, 25],  lowerValue = numbers[0];

for (index = 0; index < numbers.length; index += 1) {
    if (lowerValue > numbers[index]) {
        lowerValue = numbers[index];
    }
}

console.log (lowerValue);