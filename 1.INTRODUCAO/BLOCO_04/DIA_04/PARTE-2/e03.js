function menorValor (array) {
    for (index = 0; index < array.length; index += 1) {
        for (index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index2] < array[index]) {
                menor = array[index2];
            }
        }
    }
}

menorValor([2, 4, 6, 7, 10, 0, -3]);