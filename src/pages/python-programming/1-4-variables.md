---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 1.4 Variables
---

[← Back](/python-fundamentals/)

## Activity 1.4 Variables

---

### Introduction

Variables allow us to store data during our program's execution. Sometimes, variables are described as containers for storing information. For example, in an RPG video game, your character has attributes such as health, magic, and stamina. These values need to be tracked throughout the game. Variables enable us to store and use this data within the program.

You use the equal sign (=) to assign a value to a variable. Here, you can both declare and assign a value in one line, which is known as initialization. Python handles data types like strings, integers, and floats seamlessly. Python uses dynamic typing, which means the data type a variable stores can change during runtime.

```python
# Assign a string value to a variable
name = "Anthony"

# Initialize an integer and a float variable
age = 5
weight = 500.55
name = 10  # This will overwrite the previous value, Python is flexible like that
```

Variables can be used anywhere their given data type may be used.

```python
number1 = 10
number2 = 400
sum = number1 + number2
print(f"The sum is {sum}")
```

**Example Video**

<video src="/courses/python-fundamentals/variables-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Variable Scope

Variable scope refers to where a variable can be accessed in your code. For example, the program below will raise an error because number1 must be declared before it can be used.

```python
# Error
print(number1)
number1 = 5
```

#### Naming Rules and Conventions

There are some syntax rules for naming variables, and there are best practices known as conventions. Here are a few tips for naming variables:

- Use meaningful names. `age = 25` is more descriptive than `x = 25` if the variable is storing an age value.
- Variables can't have spaces in their names. For readability, use `snake_case` when naming a variable containing multiple words.
- Variable names cannot start with a number.

#### Skills to Practice

- Declaring and assigning values to variables
- Use variables in formatted strings

### Instructions

#### Setup

1. Create a new Python application. Name the project **1-4 Variables**.
2. Click Create.

#### Code

```python
# String variables
print("- String variables -")

# Declare string variables
name = "Anthony"  # Try using your name instead of mine
food = "Steak"  # Try replacing steak with your favorite food.
item = "peppers"  # Try replacing this with some other noun.

print(f"Hello, this is {name}!")
print(f"{name} loves to eat {food}.")
print()

print("Try saying this five times fast:")
print(f"Peter Piper picked a peck of pickled {item}")
print(f"A peck of pickled {item} Peter Piper picked")
print(f"If Peter Piper picked a peck of {item},")
print(f"Where’s the peck of {item} Peter Piper picked?")
print()

# Number variables
print("- Number variables -")

age = 30  # Replace the number with your age
print(f"You will reach age 100 in {100 - age} years!")
print()

balance = 35.25
withdraw = 0  # Replace the 0 with a larger number.
leftover = balance - withdraw
print(f"You have a balance of ${balance} in your bank account.")
print(f"If you withdraw ${withdraw}, you will have ${leftover}.")
print()

health = 100
damage = 55.5
print(f"You've taken {damage} damage. You have {health - damage} health left.")
```

#### Debug

```txt
- String variables -
Hello, this is Anthony!
Anthony loves to eat Steak.

Try saying this five times fast:
Peter Piper picked a peck of pickled peppers
A peck of pickled peppers Peter Piper picked
If Peter Piper picked a peck of peppers,
Where's the peck of peppers Peter Piper picked?

- Number variables -
You will reach age 100 in 70 years!

You have a balance of $35.25 in your bank account.
If you withdraw $0, you will have $35.25.

You've taken 55.5 damage. You have 44.5 health left.
```

### Tips, Tricks, and Reflection

- Students might often get into the habit of always using f-strings (string interpolation) when printing variables. Remember, `print()` in Python does not always need a string argument. For example, don't write `print(f"{number_variable}")` when `print(number_variable)` will suffice.
- There are a number of naming conventions that different programming language communities adhere to. We will use even more naming conventions for other programming constructs. For fun, check out some of these examples:
    - snake_case
    - PascalCase
    - kebab-case
    - SCREAMING_SNAKE_CASE
    - HungarianNotation