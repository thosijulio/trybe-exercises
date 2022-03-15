class Retangulo:
    def __init__(self, altura, base):
        self.altura = altura
        self.base = base
    
    def calcular_area(self):
        area = self.base * self.altura
        print("Area do retângulo:", area)
    
    def calcular_perimetro(self):
        perimetro = 2 * (self.base + self.altura)
        print("Perimetro do retangulo:", perimetro)

novo_retangulo = Retangulo(10, 15)

print(novo_retangulo.altura)
print(novo_retangulo.base)

novo_retangulo.calcular_area()
novo_retangulo.calcular_perimetro()
