def exercicio1():
    numbers = input("Digite os numeros:").split(",")
    result = []
    for number in numbers:
        if (int(number) % 3 == 0):
            result.append("Fizz")
        elif (int(number) % 5 == 0):
            result.append("Buzz")
        else:
            result.append(int(number))
    
    print(result)

  
exercicio1()