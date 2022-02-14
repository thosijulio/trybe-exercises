list = [1, 5, 10, 15, 20, 25, 30]

def exerc2 (list):
    media = 0
    for number in list:
        media += number
    return media / len(list)


print(exerc2(list))