import json
import csv

def get_books(path):
    books = []
    with open(path, mode="r") as file:
        books = json.load(file)
    return books


def get_percentage_by_category(category):
    books = get_books("books.json")
    categories_count = {}
    for book in books:
        for category in book["categories"]:
            if category:
                if category in categories_count:
                    categories_count[category] = 2
                else:
                    categories_count.update({category: 1})
    return categories_count

print(get_percentage_by_category())