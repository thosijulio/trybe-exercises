class Tv:
    def __init__(self):
        self.__volume = 50
        self.__canal = 1
        self.__tamanho = 40
        self.__ligada = False

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1

    def diminuir_volume(self):
        if self.__volume > 1:
            self.__volume -= 1

    def modificar_canal(self, choised_channel):
        if 1 < choised_channel > 99:
            raise ValueError("Canal deve estar entre 1 e 99.")
        else:
            self.__canal = choised_channel

    def ligar_desligar(self):
        self.__ligada = not self.__ligada
