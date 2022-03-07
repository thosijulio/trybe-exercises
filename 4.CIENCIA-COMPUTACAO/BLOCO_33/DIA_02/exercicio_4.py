import json
import csv

def get_books(path):
    books = []
    with open(path, mode="r") as file:
        books = json.load(file)
    return books


def get_percentage_by_category():
    books = get_books("books.json")
    categories_count = { }
    for book in books:
        for category in book["categories"]:
            if category in categories_count:
                categories_count[category] += 1
            else:
                categories_count.update({ category: 1 })

    for category in categories_count:
        categories_count[category] /= len(books)

    return categories_count


def save_data(path):
    categories_percentage = get_percentage_by_category()

    with open(path, "w") as file:
        header = ["categoria", "porcentagem"]
        writer = csv.writer(file)

        writer.writerow(header)
        
        for category in categories_percentage:
            writer.writerow([category, categories_percentage[category]])


save_data("file.csv")