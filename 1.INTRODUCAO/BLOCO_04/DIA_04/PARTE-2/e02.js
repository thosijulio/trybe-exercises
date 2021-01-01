function maiorValor (array) {
    for (index = 0; index < array.length; index += 1) {
        for (index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index2] > array[index]) {
                maior = array[index2];
            }   
        }
    }
    return array.indexOf(maior);
}
