# initial counter for number of questions answered correctly
answeredCorrect = 0

# questions list contains nested lists: the first item is the question asked,
# and the secound item is a set of all possible answers (membership tests are faster with sets)
questions = [
    ["Who is our computer science teacher?", {"colin veldkamp", "mr. veldkamp", 'veldkamp', 'mr. v'}],
    ["Who is the author of this program", {"heril", 'heril saha'}],
    ["How many planets are in our solar system", {"8", 'eight'}],
    ["Who created facebook", {'mark zuckerberg'}]
]

# all quiz feedback lines in accordance to the number of questions answered correctly
# includes a line for 0 questions answered correctly
quizFeedback = [
    "Yikes! Better luck next time.",
    "Atleast you got one correct.",
    "Not bad, but not so great either.",
    "Well done, you did OK!",
    "You achieved a perfect score, pat yourself on the back!"
]

for question in questions:
    # append extra space at the end of the question for proper formatting
    userResponse = input(question[0] + ' ')

    if userResponse.lower() in question[1]:
        answeredCorrect += 1
        print("Correct Answer!")
    else:
        print("Incorrect Answer!")

percentageMark = int((answeredCorrect / len(questions)) * 100)

print('Your final score is {0} / {1} ({2}%)'.format(answeredCorrect, len(questions), percentageMark))
print(quizFeedback[answeredCorrect])
