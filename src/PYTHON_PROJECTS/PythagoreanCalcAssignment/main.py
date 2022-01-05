import math
# input to number conversion
firstSide = input("What is the first side of the triangle (cm)? ")
firstSide = float(firstSide)

secoundSide = input("What is the second side of the triangle (cm)? ")
secoundSide = float(secoundSide)

# Calculate c squared
hypotenuse = str(round(math.sqrt((firstSide ** 2) + (secoundSide ** 2)), 2))
print("The hypotenuse is", hypotenuse, "cm")
