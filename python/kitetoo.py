def add (a, b):
    return a + b
    
result =add(5, 3)

print(result)

class car():
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

Ferarri = car( make="Ferrari", model="F8 Tributo", year=2020)

print(Ferarri.make)
print(Ferarri.model)
print(Ferarri.year)
