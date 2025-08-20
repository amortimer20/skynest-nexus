---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 1.7 Prompting for Numerical Input
---

[← Back](/python-fundamentals/)

## Activity 1.7 Prompting for Numerical Input

---

### Introduction

In the last activity, we learned how to prompt the user for input and store their response in a variable using `input()`. However, there's an important detail to remember: `input()` function always returns the user input as a **string**. This means if you ask the user to enter a number, you’ll get that number as text, not as something you can use for arithmetic.

**Examples**

```python
num1 = "5"
num2 = "3"
print(num1 + num2)  # Outputs "53", not 8!
print(num1 * num2)  # Error, cannot multiply strings
```

#### Converting Strings to Numbers

There are a few functions in Python that help us convert strings that contain numbers into numeric types, such as integers and floats.

- `int()` - Converts a string into an integer
- `float()` - Convert a string into a float (decimal)

These functions will attempt to convert the string into its corresponding number, and if successful, it will return that number. Remember, some functions can return data. We can then save that returned value to a variable or use it in some other expression.

**Examples**

```python
# Converting to an integer (whole number)
number = int("32")  # Converts the string "32" to the number 32
print(number + 10)  # Outputs 42

# Converting to a float (number with a decimal)
decimal_number = float("100.4")  # Converts the string "100.4" to 100.4
print(decimal_number + 10.6)  # Outputs 111.0

```

**Example Video 1: Get input and convert over two lines**

<video src="/courses/python-fundamentals/numeric-input-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

**Example Video 2: Get input and convert in one line**

<video src="/courses/python-fundamentals/numeric-input-animation-2.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Handling Errors with Invalid Input

What happens if a user enters something unexpected, like trying to convert "abc" into a number? Or what if we try to convert a string that contains a decimal into an integer, like "32.5"?

```python
bad = int("32.5")  # This will cause an error!
```

In this case, we’ll get an error because the int() function cannot handle a number with a decimal—it only works with whole numbers.

#### Skills to Practice

- Prompt a user for input and saving it to a variable
- Convert input from a string to a number
  - Convert a string into an integer using `int()`
  - Convert a string into a floating point number (decimal) using `float()`

### Instructions

#### Setup

1. Create a new Python application. Name the project **1-7 Numerical Input**.
2. Click Create.

#### Code

```python
print("--- Demo 1 - Age to Months Calculator ---")

# Steps involved in the statements below:
# 1) User types in age
# 2) Convert string input to integer and save it to a new variable
age_str = input("Enter your age: ")
age = int(age_str)
print(f"You are {age} years old. That's {age * 12} months old, you old fart!\n")

input("\nPress enter to continue...")

print("--- Demo 2 - Square Area Calculator ---")

# Shorter, concise way to get input, convert to number, and save to variable
length = float(input("Enter the length of the square: "))
area = length * length
print(f"The area of the square is {area}")
```

#### Debug

```txt
--- Demo 1 - Age to Months Calculator ---
Enter your age: 30
You are 30 years old. That's 360 months old, you old fart!


Press enter to continue...

--- Demo 2 - Square Area Calculator ---
Enter the length of the square: 45
The area of the square is 2025
```

### Tips, Tricks, and Reflection

If writing input, conversion, and variable assignment all in one line feels confusing, it’s completely okay to break it up into multiple steps. In fact, it’s often helpful to write each step on its own line when you’re learning, so you can better understand what’s happening at each stage.

Remember, there’s no rush to write code in fewer lines—what’s important is that the code makes sense to you! Breaking things down into smaller steps can make it easier to spot errors and understand how each part of the program works.