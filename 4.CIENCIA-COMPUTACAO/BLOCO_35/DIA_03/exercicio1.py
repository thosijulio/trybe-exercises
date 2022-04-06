import requests

def exercicio1():
    result = requests.get("https://httpbin.org/encoding/utf8").text
    print(result)

exercicio1()
