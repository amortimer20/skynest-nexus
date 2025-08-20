---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 1.2 Arithmetic
---

[← Back](/python-fundamentals/)

## Activity 1.2 Arithmetic

---

### Introduction

Mathematics is a cornerstone of computer science. Any useful program, from video games to online stores, relies on numbers. Whether it's calculating scores, processing transactions, or generating graphics, math is everywhere in software.

In Python, we don’t just use math to crunch numbers; we also use it to display results to users. The `print()` function helps us with this—it can output text messages, numbers, and the results of math expressions.

**Integers and Floats**

Python, like many other programming languages, differentiates between whole numbers and decimal numbers. Whole numbers are called integers, while decimal numbers are referred to as floats (or floating-point numbers). This distinction is crucial for handling arithmetic operations accurately.

**Math Operators**

- **`+`** Addition: Adds two numbers together.
- **`-`** Subtraction: Subtracts one number from another.
- **`*`** Multiplication: Multiplies two numbers.
- **`/`** Division: Divides one number by another and returns the quotient as a decimal.
- **`//`** Integer Division: Divides one number by another and cuts off the decimal.
- **`%`** Modulus (aka mod): Returns the remainder after division.

The use of multiple division symbols might seem a bit unfamiliar because they don't match the ones we use in traditional arithmetic. Don't worry, we'll practice them thoroughly so you can see how useful they are for dividing numbers in different ways.

#### Skills to Practice

- Write math expressions
- Output numbers with `print()`
- Document code with single line comments
- Control math calculation with order of operations

### Instructions

#### Setup

1. Create a new Python application. Name the project **1-2-math.py**.
2. Click Create.

#### Code

```python
# Addition
print("I'm adding 2 and 1. The result is:")
print(2 + 1)
print()

print("Adding $1000 and $500.96 gives us:")
print(1000 + 500.96)
print()

# Subtraction
print("I have 3 apples, and I eat one. Now, I have:")
print(3 - 1)
print()

# Multiplication
print("I'm 30 years old. In months, that's: ") # Replace 30 with your age
print(30 * 12) # Replace 30 with your age
print()

# Division - Quotient and remainder

# Quotient
print("If we divide 8 pizza slices between 2 people, each person gets:")
print(8 / 2)
print()

print("Dividing $100 among 6 people gives each person:")
print(100 / 6)
print("Without fractional amounts, each person gets:")
print(100 // 6)
print()

# Remainder using the modulus, or mod, operator
print("After dividing $100 among 6 people, the leftover cents are:")
print(100 % 6)
print()

# Order of operations
print("The expression 4 * 10 + 12 equals:")
print(4 * 10 + 12)
print("The expression 4 * (10 + 12) equals:")
print(4 * (10 + 12))
```

#### Debug

```txt
I'm adding 2 and 1. The result is:
3

Adding $1000 and $500.96 gives us:
1500.96

I have 3 apples, and I eat one. Now, I have:
2

I'm 30 years old. In months, that's:
360

If we divide 8 pizza slices between 2 people, each person gets:
4.0

Dividing $100 among 6 people gives each person:
16.666666666666668
Without fractional amounts, each person gets:
16

After dividing $100 among 6 people, the leftover cents are:
4

The expression 4 * 10 + 12 equals:
52
The expression 4 * (10 + 12) equals:
88
```

### Tips, Tricks, and Reflection

This program works correctly, but the output could be much easier to read. Formatting is key to making your code and its output more user-friendly.

- Formatting Issues: Notice how the division involving money returns a repeating decimal, every answer is on its own line, and the monetary values lack a dollar sign. We'll learn how to fix these issues in future lessons to make the output more readable and professional.
- Spacing in Math Expressions: While it’s valid to write `2+2`, it’s much clearer to write `2 + 2`. Using spaces around math operators improves readability and helps you spot errors more easily.
- You will see this math terms used frequently:
    - Operators: The symbols used in math expressions (+, -, *, /, %).
    - Operands: The numbers used with operators.
    - Expressions: Math statements that combine operators and operands to calculate a value.
