def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False

""" A complexidade de tempo é de 0(n),
pois faz uma iteração com cada item do array numbers.

A complexidade de memoria dele é de 0(1),
pois a função apenas altera o valor de uma variavel,
independente da entrada.
"""