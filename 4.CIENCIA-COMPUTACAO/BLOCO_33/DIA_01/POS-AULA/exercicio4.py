names = ["João", "Katia", "Ricardo", "Antonio", "Cláudia"]

def exerc4 (nameList):
  greatestName = nameList[0]
  for name in nameList:
      if len(name) > len(greatestName):
          greatestName = name
  return greatestName

print(exerc4(names))
