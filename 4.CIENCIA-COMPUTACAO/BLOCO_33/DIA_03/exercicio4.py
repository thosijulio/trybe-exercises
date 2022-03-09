from exercicio3 import email_is_valid

def emailList_is_valid(emailList):
    validList = []
    for email in emailList:
        try:
            email_is_valid(email)
            validList.append(email)
        except ValueError as error:
            print(f"{error} E-mail inválido: \"{email}\"")
    
    return validList

print(emailList_is_valid(["thosijulio@outlook.com", "thosijulio", "teste@teste.com"]))
