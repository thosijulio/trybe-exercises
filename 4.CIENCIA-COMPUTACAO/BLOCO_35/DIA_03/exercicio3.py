import requests

def exercicio3():
    result = requests.get("https://scrapethissite.com/pages/advanced/?gotcha=headers", headers={"user-agent": "mozilla", "accept": "text/html"}).text
    assert "bot detected" not in result
    print(result)

exercicio3()