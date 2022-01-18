import math

# input to number conversion
firstSide = input("What is the first side of the triangle (cm)? ")
firstSide = float(firstSide)

secoundSide = input("What is the second side of the triangle (cm)? ")
secoundSide = float(secoundSide)

# calculate c squared
cSquared = firstSide ** 2 + secoundSide ** 2

# sqrt cSquared, and turn into string
hypotenuse =  str(round(math.sqrt(cSquared), 2))

# output
print("The hypotenuse is", hypotenuse, "cm")
