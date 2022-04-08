def multiply_arrays(array1, array2):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f'Array 1: {number1}')
        for number2 in array2:
            print(f'Array 2: {number2}')
            result.append(number1 * number2)
            number_of_iterations += 1

    print(f'{number_of_iterations} iterações!')
    return result


meu_array = list(range(1, 2000))

multiply_arrays(meu_array, meu_array)

"""
Tempo de execucao com um array de 1000 elementos:
  real: 0m16.995s
  user: 0m1.880s
  sys: 0m3.031s

Tempo de execucao com um array de 2000 elementos:
  real: 1m13.312s
  user: 0m7.357s
  sys: 0m12.322s

Complexidade de tempo: O(n²)
"""
