const questions = [

{
id:1,
type:"multi-dropdown",
question:"Evaluate the code and select the correct output for each print statement.",
image:"screenshot/A (1).png",

code:`numList = [1,2,3,4,5]
alphaList = ["a","b","c","d","e"]

print(numList is alphaList)
print(numList == alphaList)

numList = alphaList

print(numList is alphaList)
print(numList == alphaList)`,

subquestions:[
{
text:"What is displayed after the first print?",
choices:["True","False"],
answer:"False"
},
{
text:"What is displayed after the second print?",
choices:["True","False"],
answer:"False"
},
{
text:"What is displayed after the third print?",
choices:["True","False"],
answer:"True"
},
{
text:"What is displayed after the fourth print?",
choices:["True","False"],
answer:"True"
}
]
},

{
id:2,
type:"multi-dropdown",
question:"A video store needs a way to determine the amount to charge customers for DVD rentals.",
image:"screenshot/A (2).png",

code:`#DVD Rental Calculator
ontime = input("Was the video returned before 8 PM? Y or N").lower()
days_rented = int(input("How many days was the video rented"))
weekday = input("What day was the video rented").capitalize()

cost_per_day = 1.59

if ontime __ "n":
    days_rented += 1

if weekday __ "Sunday":
    total = (days_rented * cost_per_day) * 0.7

elif weekday __ "Thursday":
    total = (days_rented * cost_per_day) * 0.5

else:
    total = days_rented * cost_per_day

print("Cost of the DVD is: $", total)`,

subquestions:[
{
text:"if ontime __ 'n'",
choices:["==","=","!="],
answer:"=="
},
{
text:"if weekday __ 'Sunday'",
choices:["==","=","!="],
answer:"=="
},
{
text:"elif weekday __ 'Thursday'",
choices:["==","=","!="],
answer:"=="
}
]
},

{
id:3,
type:"mcq",
question:"Which code should you write at line 02?",
image:"screenshot/A (3).png",

code:`print("What is your name?")
??
print(name)`,

choices:[
"input(name)",
"name = input()",
'input("name")',
"name = input"
],

answer:1
},

{
id:4,
type:"mcq",
question:"Complete the formula where b equals a multiplied by negative one then raised to the power of two.",
image:"screenshot/A (4).png",

code:`a = eval(input("Enter a number for the equation: "))
b = ?`,

choices:[
"a ** 2",
"(-a) ** 2",
"a * -1 ** 2",
"-a ** 2"
],

answer:1
},

{
id:5,
type:"multi-select",
question:"Choose TWO correct solutions that produce comma separated output with quotes around the string.",
image:"screenshot/A (5).png",

code:`item = input("Enter item name: ")
sales = input("Enter quantity: ")`,

choices:[
`print('"' + item + '",' + sales)`,
`print(item + "," + sales)`,
`print("{0}, {1}".format(item, sales))`,
`print('"{0}", {1}'.format(item, sales))`
],

answers:[0,3]
},

{
id:6,
type:"truefalse-group",
question:"For each statement select True or False.",
image:"screenshot/A (6).png",

subquestions:[
{
text:"The function returns a value.",
choices:["True","False"],
answer:"False"
},
{
text:"The function calls at lines 14 and 17 are valid.",
choices:["True","False"],
answer:"True"
},
{
text:"The function calls at lines 16 and 18 will result in an error.",
choices:["True","False"],
answer:"True"
}
]
},

{
id:7,
type:"code-display",
question:"Complete the function to compute roots based on conditions.",
image:"screenshot/A (7).png",

code:`def safe_root(a,b):

if a >= 0:
    answer = a ** (1/b)

else:
    if a % 2 == 0:
        answer = "Result is an imaginary number"
    else:
        answer = -(-a) ** (1/b)

return answer`
},

{
id:8,
type:"code-display",
question:"Complete the loop that stops when product ID 6 is found.",
image:"screenshot/A (8).png",

code:`productIdList = [0,1,2,3,4,5,6,7,8,9]

index = 0

while index < 10:
    print(productIdList[index])

    if productIdList[index] == 6:
        break
    else:
        index += 1`
},

{
id:9,
type:"code-display",
question:"Complete the grade converter program.",
image:"screenshot/A (9).png",
code:`grade = int(input("Enter numeric grade"))

if grade >= 90:
    letter_grade = 'A'
elif grade >= 80:
    letter_grade = 'B'
elif grade >= 70:
    letter_grade = 'C'
elif grade > 65:
    letter_grade = 'D'
else:
    letter_grade = 'F'

print("Your letter grade is", letter_grade)`
},

{
id:10,
type:"mcq",
question:"Which code should you write for line 05 and line 06 to ignore blank lines while reading a file?",
image:"screenshot/A (10).png",
choices:["A","B","C","D"],
answer:2
},
/* ===================== QUESTION 11 ===================== */

{
id:11,
type:"truefalse-group",
question:"Evaluate the following program. Line numbers are included for reference only.",
image:"screenshot/A (11).png",
subquestions:[
{
text:"Line 02 will cause a runtime error.",
choices:["True","False"],
answer:"True"
},
{
text:"Line 06 will cause a runtime error.",
choices:["True","False"],
answer:"False"
},
{
text:"The eval() function should be used in lines 03 and 04.",
choices:["True","False"],
answer:"True"
}
]
},

/* ===================== QUESTION 12 ===================== */

{
id:12,
type:"code-display",
question:"Complete the grading logic program.",
image:"screenshot/A (12).png",
code:`if grade <= 100:
    if grade >= 90:
        print("Your grade is A.")
    elif grade >= 80:
        print("Your grade is B.")
    elif grade < 80 and grade > 69:
        print("Your grade is C.")
    else:
        print("Failed")
else:
    print("Invalid grade entered")`
},

/* ===================== QUESTION 13 ===================== */

{
id:13,
type:"multi-select",
question:"Which TWO math functions remove decimals and return the absolute value?",
image:"screenshot/A (13).png",
choices:[
"math.floor(x)",
"math.fmod(x)",
"math.frexp(x)",
"math.fabs(x)"
],

answers:[0,3]
},

/* ===================== QUESTION 14 ===================== */

{
id:14,
type:"mcq",
question:"Which code opens a file for reading and writing, creating it if it does not exist and deleting existing content?",
image:"screenshot/A (14).png",
choices:[
"open('local_data','r+')",
"open('local_data','w')",
"open('local_data','r')",
"open('local_data','w+')"
],

answer:3
},

/* ===================== QUESTION 15 ===================== */

{
id:15,
type:"docstring",
question:"Python docstring questions.",
image:"screenshot/A (15).png",
answers:[
'""" triple quotes """',
"Immediately after the function header",
"print(cube.__doc__)"
]
},

/* ===================== QUESTION 16 ===================== */

{
id:16,
type:"code-display",
question:"Complete the function to perform safe division.",
image:"screenshot/A (16).png",
code:`def safe_divide(numerator, denominator):

    if numerator is None or denominator is None:
        print("A required value is missing.")

    elif denominator == 0:
        print("The denominator is zero.")

    else:
        return numerator / denominator`
},

/* ===================== QUESTION 17 ===================== */

{
id:17,
type:"mcq",
question:"What is the output of the following code?",
image:"screenshot/A (17).png",
code:`import datetime

d = datetime.datetime(2017,4,7)

print('{:%B-%d-%y}'.format(d))`,

choices:[
"04-07-2017",
"04-07-17",
"2017-April-07",
"April-07-17"
],

answer:3
},

/* ===================== QUESTION 18 ===================== */

{
id:18,
type:"multi-select",
question:"Which two function calls are correct?",
image:"screenshot/A (18).png",
choices:[
"roomAssignment(name, year = grade)",
"roomAssignment(student, year)",
'roomAssignment("Sherlock Sassafrass", 4)',
'roomAssignment(year = 6, name = "Minnie George")'
],

answers:[0,2]
},

/* ===================== QUESTION 19 ===================== */

{
id:19,
type:"code-display",
question:"Complete the error handling structure.",
image:"screenshot/A (19).png",
code:`try:
    process()

except:
    logError()

finally:
    displayResult()`
},

/* ===================== QUESTION 20 ===================== */

{
id:20,
type:"multi-select",
question:"Which two functions generate a random integer between 5 and 11?",
image:"screenshot/A (20).png",
choices:[
"random.randint(5,11)",
"random.randrange(5,11,1)",
"random.randint(5,12)",
"random.randrange(5,12,1)"
],

answers:[0,3]
},

/* ===================== QUESTION 21 ===================== */

{
id:21,
type:"mcq",
question:"Which documentation syntax is correct?",
image:"screenshot/A (21).png",
code:`def get_balance():
    # Returns the current balance of the bank account
    return balance`,

choices:[
"/* comment */",
"// comment",
"' comment",
"# comment"
],

answer:3
},

/* ===================== QUESTION 22 ===================== */

{
id:22,
type:"multi-select",
question:"Which two code segments truncate the decimal portion of a division result?",
image:"screenshot/A (22).png",
choices:[
"average_balance = int(total_deposits / number_of_customers)",
"average_balance = float(total_deposits // number_of_customers)",
"average_balance = total_deposits ** number_of_customers",
"average_balance = total_deposits // number_of_customers"
],

answers:[0,3]
},

/* ===================== QUESTION 23 ===================== */

{
id:23,
type:"code-display",
question:"Complete the multiplication table generator.",
image:"screenshot/A (23).png",
code:`def times_tables():

    for col in range(2,13):
        for row in range(2,13):
            print(row * col, end=' ')
        print()

times_tables()`
},

/* ===================== QUESTION 24 ===================== */

{
id:24,
type:"mcq",
question:"What is the output value?",
image:"screenshot/A (24).png",
code:`list_1 = [1,2]
list_2 = [3,4]

list_3 = list_1 + list_2
list_4 = list_3 * 3

print(list_4)`,

choices:[
"[[1,2,3,4],[1,2,3,4],[1,2,3,4]]",
"[[1,2],[3,4],[1,2],[3,4],[1,2],[3,4]]",
"[1,2,3,4,1,2,3,4,1,2,3,4]",
"[3,6,9,12]"
],

answer:2
},

/* ===================== QUESTION 25 ===================== */

{
id:25,
type:"multi-dropdown",
question:"Evaluate the code.",
image:"screenshot/A (25).png",
code:`a = 'Config1'
print(a)

b = a
a += 'Config2'

print(a)
print(b)`,

subquestions:[
{
text:"What is displayed after the second print?",
choices:["Config1","Config1Config2","Config2"],
answer:"Config1Config2"
},
{
text:"What is displayed after the third print?",
choices:["Config1","Config1Config2","Config2"],
answer:"Config1"
}
]
},

/* ===================== QUESTION 26 ===================== */

{
id:26,
type:"code-display",
question:"Complete the formatted table output.",
image:"screenshot/A (26).png",
code:`print("{0:10}{1:5.1f}{2:7.2f}".format(fields[0], eval(fields[1]), eval(fields[2])))`
},

/* ===================== QUESTION 27 ===================== */

{
id:27,
type:"multi-dropdown",
question:"Correct the errors in the code.",
image:"screenshot/A (27).png",
code:`numbers = [0,1,2,3,4,5,6,7,8,9]

index = 0

while (index < 10)

    print(numbers[index])

    if numbers(index) = 6
        break
    else
        index += 1`,

subquestions:[
{
text:"Which code segment should you use at line 03?",
choices:["while(index < 10):","while index < 10","for index < 10"],
answer:"while(index < 10):"
},
{
text:"Which code segment should you use at line 06?",
choices:["if numbers[index] == 6:","if numbers(index) == 6","if numbers == 6"],
answer:"if numbers[index] == 6:"
}
]
},

/* ===================== QUESTION 28 ===================== */

{
id:28,
type:"code-display",
question:"Complete the loop that counts characters.",
image:"screenshot/A (28).png",
code:`x = "Hello World"

while x != "QUIT":
    num = 0

    for char in x:
        num += 1

    print(num)

    x = input("Enter a new word or QUIT to exit: ")`
},

/* ===================== QUESTION 29 ===================== */

{
id:29,
type:"code-display",
question:"Arrange the code segments to complete the function.",
image:"screenshot/A (29).png",
code:`def get_first_line(filename, mode):

    if os.path.isfile(filename):

        with open(filename,'r') as file:
            return file.readline()

    else:
        return None`
},

/* ===================== QUESTION 30 ===================== */

{
id:30,
type:"multi-dropdown",
question:"Complete the code to display specials.",
image:"screenshot/A (30).png",

subquestions:[
{
text:"In line 04 retrieve the current date.",
choices:[
"now = datetime.datetime.now()",
"today = datetime.now()"
],
answer:"now = datetime.datetime.now()"
},
{
text:"In line 05 retrieve the weekday.",
choices:[
'today = now.strftime("%A")',
"today = now.weekday()"
],
answer:'today = now.strftime("%A")'
},
{
text:"In line 15 calculate the days left in the week.",
choices:[
"daysLeft = 6 - now.weekday()",
"daysLeft = now.weekday()"
],
answer:"daysLeft = 6 - now.weekday()"
}
]
},

/* ===================== QUESTION 31 ===================== */

{
id:31,
type:"truefalse-group",
question:"For each statement about try statements select True or False.",
image:"screenshot/A (31).png",

subquestions:[
{
text:"A try statement can have one or more except clauses.",
choices:["True","False"],
answer:"True"
},
{
text:"A try statement can have a finally clause without an except clause.",
choices:["True","False"],
answer:"True"
},
{
text:"A try statement can have a finally clause and an except clause.",
choices:["True","False"],
answer:"True"
},
{
text:"A try statement can have one or more finally clauses.",
choices:["True","False"],
answer:"False"
}
]
},

/* ===================== QUESTION 32 ===================== */

{
id:32,
type:"multi-dropdown",
question:"Evaluate the program.",
image:"screenshot/A (32).png",
code:`rooms = {1:'Foyer',2:'Conference Room'}

room = input("Enter the room number:")

if not room in rooms:
    print("Room does not exist.")
else:
    print("The room name is " + rooms[room])`,

subquestions:[
{
text:"Which two data types are stored in the rooms list at line 01?",
choices:["int and string","string and string","int and int"],
answer:"int and string"
},
{
text:"What is the data type of room at line 02?",
choices:["string","integer"],
answer:"string"
},
{
text:"Why does line 03 fail to find the rooms?",
choices:[
"Mismatched data type(s)",
"Invalid dictionary",
"Incorrect operator"
],
answer:"Mismatched data type(s)"
}
]
},

/* ===================== QUESTION 33 ===================== */

{
id:33,
type:"multi-dropdown",
question:"Complete the statements about assert methods.",
image:"screenshot/A (33).png",
subquestions:[
{
text:"To test that values of variables a and b are the same use",
choices:["assertEqual(a,b)","assertIs(a,b)","assertIn(a,b)"],
answer:"assertEqual(a,b)"
},
{
text:"To test that objects a and b are the same use",
choices:["assertIs(a,b)","assertEqual(a,b)","assertIn(a,b)"],
answer:"assertIs(a,b)"
},
{
text:"To test whether a value exists in a list use",
choices:["assertIn(a,b)","assertEqual(a,b)","assertIs(a,b)"],
answer:"assertIn(a,b)"
}
]
},

/* ===================== QUESTION 34 ===================== */

{
id:34,
type:"multi-dropdown",
question:"Complete the program that prints the letter E using asterisks.",
image:"screenshot/A (34).png",
subquestions:[
{
text:"Value for row range",
choices:["6","5","4"],
answer:"6"
},
{
text:"Value for column range",
choices:["4","5","6"],
answer:"5"
}
]
},

/* ===================== QUESTION 35 ===================== */

{
id:35,
type:"code-display",
question:"Arrange the code segments to complete the search function.",
image:"screenshot/A (35).png",
code:`def search(items, term):

    for i in range(len(items)):
        if items[i] == term:
            print("{0} was found in the list.".format(term))
            break
    else:
        print("{0} was not found in the list.".format(term))`
},

/* ===================== QUESTION 36 ===================== */

{
id:36,
type:"truefalse-group",
question:"For each statement about the program select True or False.",
image:"screenshot/A (36).png",
subquestions:[
{
text:"To meet the requirements you must change line 01 to include a default parameter.",
choices:["True","False"],
answer:"True"
},
{
text:"After a parameter with default value, parameters to the right must also have defaults.",
choices:["True","False"],
answer:"True"
},
{
text:"If called with two parameters the third will be None.",
choices:["True","False"],
answer:"False"
},
{
text:"The function modifies the outside variable points.",
choices:["True","False"],
answer:"False"
}
]
},

/* ===================== QUESTION 37 ===================== */

{
id:37,
type:"code-display",
question:"Complete the rating program.",
image:"screenshot/A (37).png",
code:`sum = count = done = 0
average = 0.0

while done != -1:

    rating = float(input("Enter next rating (1-5, -1 for done)"))

    if rating == -1:
        break

    sum += rating
    count += 1

average = float(sum / count)

print("The average star rating for the new coffee is " + format(average,'.2f'))`
},

/* ===================== QUESTION 38 ===================== */

{
id:38,
type:"code-display",
question:"Complete the guessing game loop.",
image:"screenshot/A (38).png",

code:`from random import randint

target = randint(1,10)
chance = 1

print("Guess an integer from 1 to 10. You will have 3 chances.")

while chance <= 3:

    guess = int(input("Guess an integer: "))

    if guess > target:
        print("Guess is too high")

    elif guess < target:
        print("Guess is too low")

    else:
        print("Guess is just right!")
        break

    chance += 1`
},

/* ===================== QUESTION 39 ===================== */

{
id:39,
type:"multi-dropdown",
question:"Fix the payroll calculation errors.",
image:"screenshot/A (39).png",

subquestions:[
{
text:"Correct range statement",
choices:[
"len(employee_pay)",
"0, len(employee_pay) - 1",
"1, len(employee_pay)"
],
answer:"len(employee_pay)"
},
{
text:"Correct average calculation",
choices:[
"sum / count",
"sum // count",
"count / sum"
],
answer:"sum / count"
}
]
},

/* ===================== QUESTION 40 ===================== */

{
id:40,
type:"mcq",
question:"When running the code an error occurs on line 03. What causes the error?",
image:"screenshot/A (40).png",

code:`def read_file(file):
    line = None
    if os.path.isfile(file):
        data = open(file,'r')
        for line in data:
            print(line)`,

choices:[
"The isfile method does not accept one parameter.",
"The path method does not exist in the os object.",
"The isfile method does not exist in the path object.",
"You need to import the os library."
],

answer:3
},

/* ===================== QUESTION 41 ===================== */

{
id:41,
type:"multi-select",
question:"Which two code segments should you use for line 01 and line 04? (Choose 2)",
image:"screenshot/A (41).png",

choices:[
"def get_name():",
"def get_name(biker):",
"def get_name(name):",
"def calc_calories():",
"def calc_calories(miles, burn_rate):",
"def calc_calories(miles, calories_per_mile):"
],

answers:[0,4]
},

/* ===================== QUESTION 42 ===================== */

{
id:42,
type:"multi-select",
question:"Which two code segments generate a random number that is a multiple of 5 between 5 and 100?",
image:"screenshot/A (42).png",

choices:[
"from random import randint\nprint(randint(1,20) * 5)",
"from random import randint\nprint(randint(0,20) * 5)",
"from random import randrange\nprint(randrange(5,105,5))",
"from random import randrange\nprint(randrange(0,100,5))"
],

answers:[0,2]
},

/* ===================== QUESTION 43 ===================== */

{
id:43,
type:"multi-dropdown",
question:"Complete the function that counts how many words contain a specific letter.",
image:"screenshot/A (43).png",

code:`def count_letter(letter, word_list):
    count = 0

    for word in word_list:
        if letter in word:
            count += 1

    return count`,

subquestions:[
{
text:"Loop statement",
choices:[
"for word in word_list",
"for word in letter",
"for letter in word_list"
],
answer:"for word in word_list"
},
{
text:"Condition check",
choices:[
"letter in word",
"word in letter",
"letter == word"
],
answer:"letter in word"
}
]
},

/* ===================== QUESTION 44 ===================== */

{
id:44,
type:"truefalse-group",
question:"Review the following code and select True or False.",
image:"screenshot/A (44).png",

code:`f = open("python.txt","a")
f.write("This is a line of text.")
f.close()`,

subquestions:[
{
text:"A file named python.txt is created if it does not exist.",
choices:["True","False"],
answer:"True"
},
{
text:"The data in the file will be overwritten.",
choices:["True","False"],
answer:"False"
},
{
text:"Other code can open the file after this code runs.",
choices:["True","False"],
answer:"True"
}
]
},

/* ===================== QUESTION 45 ===================== */

{
id:45,
type:"code-display",
question:"Complete the program that prints all prime numbers from 2 to 100.",
image:"screenshot/A (45).png",

code:`p = 2

while p <= 100:
    is_prime = True

    for i in range(2, p):
        if p % i == 0:
            is_prime = False
            break

    if is_prime == True:
        print(p)

    p = p + 1`
},

/* ===================== QUESTION 46 ===================== */

{
id:46,
type:"truefalse-group",
question:"You are creating a Python program that compares numbers. You create the following code. Line numbers are included for reference only.",
image:"screenshot/A (46).png",

code:`num1 = eval(input("Please enter the first number: "))
num2 = eval(input("Please enter the second number: "))

if num1 == num2:
    print("The two numbers are equal.")

if num1 <= num2:
    print("Number 1 is less than number 2.")

if num1 > num2:
    print("Number 1 is greater than number 2.")

if num2 = num1:
    print("The two numbers are the same.")`,

subquestions:[
{
text:"The print statement at line 04 will only print if the two numbers are equal in value.",
choices:["True","False"],
answer:"True"
},
{
text:"The print statement at line 06 will only print if num1 is less than num2.",
choices:["True","False"],
answer:"False"
},
{
text:"The print statement at line 08 will only print if num1 is greater than num2.",
choices:["True","False"],
answer:"True"
},
{
text:"The statement at line 09 is an invalid comparison.",
choices:["True","False"],
answer:"True"
}
]
},

/* ===================== QUESTION 47 ===================== */

{
id:47,
type:"truefalse-group",
question:"You create the following Python function to calculate the power of a number. Line numbers are included for reference only.",
image:"screenshot/A (47).png",

code:`# The calc_power function calculates exponents
# x is the base
# y is the exponent
# The value of x raised to the y power is returned
def calc_power(x, y):
    comment = "#Return the value"
    return x**y  # raise x to the y power`,

subquestions:[
{
text:"Python will not check the syntax of lines 01 through 04.",
choices:["True","False"],
answer:"True"
},
{
text:"The pound sign (#) is optional for lines 02 and 03.",
choices:["True","False"],
answer:"False"
},
{
text:"The string in line 06 will be interpreted as a comment.",
choices:["True","False"],
answer:"False"
},
{
text:"Line 07 contains an inline comment.",
choices:["True","False"],
answer:"True"
}
]
},

/* ===================== QUESTION 48 ===================== */

{
id:48,
type:"matching",
question:"Match the slicing operations with their results.",
image:"screenshot/A (48).png",

code:`alph = "abcdefghijklmnopqrstuvwxyz"`,

pairs:[
{ left:"alph[3:6]", right:"def" },
{ left:"alph[:6]", right:"abcdef" }
]
},

/* ===================== QUESTION 49 ===================== */

{
id:49,
type:"multi-dropdown",
question:"Complete the file manipulation program.",
image:"screenshot/A (49).png",

code:`import os
file = open("myFile.txt", __ )
file.__("End of listing")
file.close()`,

subquestions:[
{
text:"File mode",
choices:["r","w","w+","a"],
answer:"w+"
},
{
text:"Method used to add text",
choices:["write","append","print"],
answer:"write"
}
]
},

/* ===================== QUESTION 50 ===================== */

{
id:50,
type:"mcq",
question:"What value will print?",
image:"screenshot/A (50).png",

code:`grade = 76
rank = 3

if grade > 80 and rank >= 3:
    grade += 10
elif grade >= 70 and rank > 3:
    grade += 5
else:
    grade -= 5

print(grade)`,

choices:[
"71",
"76",
"81",
"86"
],

answer:0
},

/* ===================== QUESTION 51 ===================== */

{
id:51,
type:"mcq",
question:"What is the output of the command?",
image:"screenshot/A (51).png",

code:`import sys
print(sys.argv[2])

Command:
python Script.py Cheese Bacon Bread`,

choices:[
"Script.py",
"Cheese",
"Bacon",
"Bread"
],

answer:2
},

/* ===================== QUESTION 52 ===================== */

{
id:52,
type:"multi-dropdown",
question:"Complete the comparison statement.",
image:"screenshot/A (52).png",

code:`numList = [1,2,3,4,5]
alphaList = ["a","b","c","d","e"]

if numList __ alphaList:
    print("The values in numList are equal to alphaList")
else:
    print("The values in numList are not equal to alphaList")`,

subquestions:[
{
text:"Operator to compare list values",
choices:["=","==","is"],
answer:"=="
}
]
},

/* ===================== QUESTION 53 ===================== */

{
id:53,
type:"multi-dropdown",
question:"Complete the program to properly handle input errors.",
image:"screenshot/A (53).png",

code:`while True:
    __:
        x = int(input("Please enter a number: "))
        break
    __ ValueError:
        print("Not a valid number. Try again...")`,

subquestions:[
{
text:"Start of error handling",
choices:["try","catch","test"],
answer:"try"
},
{
text:"Exception handler",
choices:["except","error","handle"],
answer:"except"
}
]
},

/* ===================== QUESTION 54 ===================== */

{
id:54,
type:"mcq",
question:"How many lines of output does the code print?",
image:"screenshot/A (54).png",

code:`product = 2
n = 5

while (n != 0):
    product *= n
    print(product)
    n -= 1
    if n == 3:
        break`,

choices:[
"1",
"2",
"3",
"4"
],

answer:1
},

/* ===================== QUESTION 55 ===================== */

{
id:55,
type:"mcq",
question:"What is the result of the code?",
image:"screenshot/A (55).png",

code:`value1 = 9
value2 = 4

answer = (value1 % value2 * 10) // 2.0 ** 3.0 + value2`,

choices:[
"The value 129 is displayed",
"The value 5.667 is displayed",
"A syntax error occurs",
"The value 5.0 is displayed"
],

answer:3
}

];
