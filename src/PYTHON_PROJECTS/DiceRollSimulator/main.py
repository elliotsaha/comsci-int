import random

def showMenu():
    print(
    '''
Dice Roll Simulator Menu
    1. Roll Dice Once
    2. Roll Dice 5 Times
    3. Roll Dice ‘n’ Times
    4. Roll Dice until Snake Eyes
    5. Exit
    '''
    )
    userResponse = int(input("Select an option from the menu (1-5): "))
    match userResponse:
        case 1:
            rollDiceOnce()
        case 2:
            rollDice5Times()
        case 3:
            rollDiceNTimes()
        case 4:
            rollDiceUntilSnakeEyes()
        case 5:
            exitProgram()
        case _:
            print("Invalid number, please select a number between 1 - 5")
    showMenu()

# helper function for all other functions
def rollDice(getData = False):
    firstRoll = random.randint(1, 6)
    secoundRoll = random.randint(1, 6)
    total = firstRoll + secoundRoll
    print("{0} - {1} (total = {2})".format(firstRoll, secoundRoll, total))
    if getData:
        return [firstRoll, secoundRoll, total]

def rollDiceOnce():
    rollDice()

def rollDice5Times():
    for i in range(5):
        rollDice()

def rollDiceNTimes():
    numberOfRolls = int(input("How many rolls would you like? "))
    for i in range(numberOfRolls):
        rollDice()

# rollCounter is the number of times the dice has been rolled until snake eyes occurs
def rollDiceUntilSnakeEyes(rollCounter = 1):
    rollDiceData = rollDice(True)
    # if the first roll and the secound roll both return 1
    if rollDiceData[0] == 1 and rollDiceData[1] == 1:
        print("SNAKE EYES! It took {0} rolls to get snake eyes".format(rollCounter))
        return;
    else:
        # recursively run itself with incremented rollCounter
        rollDiceUntilSnakeEyes(rollCounter + 1)

def exitProgram():
    print("Exiting...")
    exit()

# run show menu to initiate script
showMenu()
