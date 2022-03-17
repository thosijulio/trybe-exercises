from abc import ABC, abstractmethod
import json
import csv

class SalesReport(ABC):
    def __init__(self, file_name):
        self.file_name = file_name
    
    def build_report(self):
        return [
          {
            "Coluna 1": "Dado 1",
            "Coluna 2": "Dado 2",
            "Coluna 3": "Dado 3",
          },
          {
            "Coluna 1": "Dado 4",
            "Coluna 2": "Dado 5",
            "Coluna 3": "Dado 7",
          },
        ]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.file_name + ".json", mode="w") as file:
            json.dump(self.build_report(), file)

class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.file_name + ".csv", mode="w") as file:
            writer = csv.DictWriter(file, fieldnames=["Coluna 1", "Coluna 2", "Coluna 3"])
            writer.writeheader()

            for dict in self.build_report():
                writer.writerow(dict)

SalesReportJSON("teste").serialize()
SalesReportCSV("teste").serialize()
