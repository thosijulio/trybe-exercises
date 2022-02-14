triangle = [3, 5, 4]

def exerc6 (a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b == c:
          return "Triangulo equilátero"
        elif a == b or a == c or b == c:
          return "Triangulo Isósceles"
        else:
          return "Triangulo escaleno"
    else:
        return "Não é triangulo"

print(exerc6(triangle[0], triangle[1], triangle[2]))