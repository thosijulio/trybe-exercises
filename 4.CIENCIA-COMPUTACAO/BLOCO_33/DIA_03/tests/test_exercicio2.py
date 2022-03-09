import sys

sys.path.insert(0, "/home/thosijulio/Projects/Trybe/trybe-exercises/4.CIENCIA-COMPUTACAO/BLOCO_33/DIA_03/")

from exercicio2 import get_number_by_expression

def test_get_number_by_expression_returns_correctly_number():
    result = get_number_by_expression("1-HOME-SWEET-HOME")
    except_result = "1-4663-79338-4663"

    assert result == except_result
