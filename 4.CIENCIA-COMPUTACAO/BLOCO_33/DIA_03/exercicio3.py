def string_is_valid(username):
    result_by_char = []
    for char in username:
        if char.isalpha() or char.isdigit() or char in ["_", "-"]:
            result_by_char.append(1)
        else:
            result_by_char.append(0)
    return not 0 in result_by_char



def email_is_valid(email):
    try:
        user_name, rest_of_email = email.split("@")
        domain_name, extension = rest_of_email.split(".")
    except:
        raise ValueError("Erro: Formato de email inválido.")

    if not user_name[0].isalpha():
        raise ValueError("Erro: Primeiro caracter do nome de usuario deve ser letra.")

    if len(extension) > 3:
        raise ValueError("Erro: Tamanho máximo da extensão é três.")

    if not string_is_valid(user_name):
            raise ValueError("Erro: Nome de usuário inválido.")
  
    if not string_is_valid(domain_name):
            raise ValueError("Erro: Nome de domínio inválido.")
    
    if not string_is_valid(extension):
            raise ValueError("Erro: Extensão inválida.")
    
    return True
