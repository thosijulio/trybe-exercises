function maiorString (array) {
    for (index = 0; index < array.length; index += 1) {
        for (index2 = 0; index2 < array.length; index2 += 1) {
            if (array[index2].length > array[index].length) {
                maior = array[index2];
            }
        }
    }
    console.log (maior);
    return maior;
}

maiorString(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
