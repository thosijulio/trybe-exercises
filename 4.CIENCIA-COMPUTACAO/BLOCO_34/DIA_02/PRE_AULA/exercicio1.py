import json
import csv

class SalesReport():
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        """ Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos! """
        return [{
                'Coluna 1': 'Dado 5',
                'Coluna 2': 'Dado 2',
                'Coluna 3': 'Dado 3'
                },
                {
                'Coluna 1': 'Dado A',
                'Coluna 2': 'Dado B',
                'Coluna 3': 'Dado C'
                }]

    def serialize(self, type):
        if type == "json":
            with open(f"{self.export_file}.{type}", 'w') as file:
                json.dump(self.build(), file)
        elif type == "csv":
            with open(f"{self.export_file}.{type}", 'w') as file:
                writer = csv.DictWriter(file, fieldnames=["Coluna 1", "Coluna 2", "Coluna 3"])
                writer.writeheader()

                for dict in self.build():
                    writer.writerow(dict)


saleReport1 = SalesReport("teste")

saleReport1.serialize("json")
saleReport1.serialize("csv")