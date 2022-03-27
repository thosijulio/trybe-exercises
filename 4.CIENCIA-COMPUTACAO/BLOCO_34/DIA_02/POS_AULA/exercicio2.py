class Estatistica:
    NUMBER_LIST = [5, 5, 10, 10, 15, 13, 20, 20, 21, 1]

    @classmethod
    def media(cls):
        amount = 0
        for number in cls.NUMBER_LIST:
            amount += number
        return amount / len(cls.NUMBER_LIST)

    @classmethod
    def moda(cls):
        most_appeared_number = 0
        appearance_count = 0

        for number in cls.NUMBER_LIST:
            new_appearance_count = 1
            
            for number_to_match in cls.NUMBER_LIST:
                if number == number_to_match:
                    new_appearance_count += 1
            
            if new_appearance_count > appearance_count:
                appearance_count = new_appearance_count
                most_appeared_number = number
        
        return most_appeared_number

    @classmethod
    def mediana(cls, descending = False):
        sorted_numbers = cls.NUMBER_LIST
        sorted_numbers.sort(reverse = descending)
        middle = len(sorted_numbers) // 2

        if len(sorted_numbers) % 2 == 0:
            return (sorted_numbers[middle - 1] + sorted_numbers[middle]) / 2

        return sorted_numbers[middle]

print(Estatistica.media())
print(Estatistica.moda())
print(Estatistica.mediana())