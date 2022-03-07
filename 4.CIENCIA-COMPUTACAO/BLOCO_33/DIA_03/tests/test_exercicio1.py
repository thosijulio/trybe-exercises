import sys

sys.path.insert(0, "/home/thosijulio/Projects/Trybe/trybe-exercises/4.CIENCIA-COMPUTACAO/BLOCO_33/DIA_03/")

from exercicio1 import exercicio1

def test_exercicio1_if_passed_a_array_of_numbers_including_one_divisible_by_3_returns_fizz():
    result = exercicio1([3])
    assert ("Fizz" in result) is True

def test_exercicio1_if_passed_a_array_of_numbers_including_one_divisible_by_5_returns_buzz():
    result = exercicio1([5])
    assert("Buzz" in result) is True

def test_exercicio1_if_passed_a_array_of_numbers_not_including_one_divisible_by_3_or_5_returns_the_number_itself():
    result = exercicio1([3, 5, 17])
    assert(17 in result) is True
