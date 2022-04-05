import requests
from parsel import Selector


def exercicio4():
    book_data = {}
    response = requests.get("http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
    selector = Selector(response.text)
    book_data["page_url"] = response.url
    book_data["title"] = selector.css(".col-sm-6.product_main > h1::text").get()
    book_data["description"] = selector.css("#product_description + p::text").get()
    book_data["cover_book_url"] = response.url + selector.css("#product_gallery img::attr(src)").get()

    suffix = "...more"

    if suffix in book_data["description"]:
        book_data["description"] = book_data["description"][:-len(suffix)]

    print(book_data)

exercicio4()
