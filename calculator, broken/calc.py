import math

#simple calculator!
number = int(input())
number2 = int(input())
#symbol = +,-,/,*
symbol = input()

if symbol == ["+", "Addition", "Add", "Plus"]:
    print(number + number2)
elif symbol == ["-", "Subtraction", "Subtract", "Minus"]:
    print(number - number2)
elif symbol == ["/", "Division", "Divide"]:
    print(number / number2)
elif symbol == ["*", "Multiplication", "Multiply"]:
    print(number * number2)
else:
    print("Wrong symbol")