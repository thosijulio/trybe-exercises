from multiprocessing.sharedctypes import Value
import sys
import pytest

sys.path.insert(0, "/home/thosijulio/Projects/Trybe/trybe-exercises/4.CIENCIA-COMPUTACAO/BLOCO_33/DIA_03/")

from exercicio3 import email_is_valid

def test_email_is_valid_if_pass_a_email_without_atsign_raise_error():
    with pytest.raises(ValueError, match="Erro: Formato de email inválido."):
        email_is_valid("thosijuliooutlook.com")

def test_email_is_valid_if_pass_a_email_without_dot_raise_error():
    with pytest.raises(ValueError, match="Erro: Formato de email inválido."):
        email_is_valid("thosijulio@outlookcom")

def test_email_is_valid_if_pass_a_email_with_first_char_not_letter_raises_error():
    with pytest.raises(ValueError, match="Erro: Primeiro caracter do nome de usuario deve ser letra."):
        email_is_valid("#hosijulio@outlook.com")

def test_email_is_valid_if_pass_a_email_with_invalid_username_raise_error():
    with pytest.raises(ValueError, match="Erro: Nome de usuário inválido."):
        email_is_valid("tho#ijulio@outlook.com")

def test_email_is_valid_if_pass_a_email_with_invalid_domainname_raises_error():
    with pytest.raises(ValueError, match="Erro: Nome de domínio inválido."):
        email_is_valid("thosijulio@out$ook.com")

def test_email_is_valid_if_pass_a_email_with_invalid_extension_raises_error():
    with pytest.raises(ValueError, match="Erro: Extensão inválida."):
        email_is_valid("thosijulio@outlook.c$m")