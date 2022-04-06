import requests

def exercicio2():
    result = [ (user["login"], user["url"]) for user in requests.get("https://api.github.com/users").json()]
    print(result)

exercicio2()
