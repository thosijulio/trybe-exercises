def multiply_arrays(array1, array2, array3):
    iterations = 0
    multiplied_array = []
    for number_array1 in array1:
        for number_array2 in array2:
            for number_array3 in array3:
                multiplied_array.append(number_array1 * number_array2 * number_array3)
                iterations += 1
    print(f"Iterações: {iterations}")
    return multiplied_array

array = list(range(0, 20))

multiply_arrays(array, array, array)
