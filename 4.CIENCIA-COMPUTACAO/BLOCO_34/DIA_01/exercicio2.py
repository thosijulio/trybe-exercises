class Circulo():
    def __init__(self, raio, PI):
        self.raio = raio
        self.PI = PI

    def calcular_area(self):
        area = self.PI * self.raio * self.raio
        print("Área do círculo:", area)
    
    def calcular_perimetro(self):
        perimetro = 2 * self.PI * self.raio
        print("Perímetro do círculo:", perimetro)

novo_circulo = Circulo(3, 3.1415)

print(novo_circulo.PI)
print(novo_circulo.raio)

novo_circulo.calcular_area()
novo_circulo.calcular_perimetro()