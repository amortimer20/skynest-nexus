---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 1.8 Constants, Math Functions, and Random Numbers
---

[← Back](/python-fundamentals/)

## Activity 1.8 Math Functions and Random Numbers

---

### Introduction

This lesson introduces you to some essential math functions and constants provided by the Python math module. These tools will be invaluable throughout your programming journey, helping you perform advanced mathematical operations with ease. Here are some of the functions and constants we'll cover:

- `round()` - Rounds a number to the nearest integer or to a specified number of decimal places.
- `math.sqrt()` - Calculates the square root of a non-negative number.
- `math.pow()` - Raises a base number to the specified exponent.
- `math.pi` - Represents the constant value π (pi).

#### Importing Modules

In Python, to use the functions and constants provided by the math module, you need to import it first. This is done using the import statement:

```python
import math
```

Modules are collections of code that you can easily add, or import, into your application to extend its functionality.

Note that you don't need to use `math.` before the `round()` function because it's already available for you to use directly.

**Examples**

```python
import math

# Rounding a number using round()
rounded_number = round(33.526)  # Rounds to the nearest integer (34)
rounded_number_2 = round(33.526, 2)  # Rounds to the second decimal place (33.53)

# Rounding up and down using math functions
ceil_number = math.ceil(33.526)  # Rounds up to 34
floor_number = math.floor(33.526)  # Rounds down to 33

# Calculating square root
sqrt_value = math.sqrt(16)  # Returns 4.0

# Raising to a power
power_value = math.pow(2, 3)  # Returns 8.0

# Using the constant π
pi_value = math.pi  # Returns 3.141592653589793
print(f"Pi value: {pi_value}")
```

#### Random Number Generation

Another interesting aspect of programming is the ability to generate random numbers. This capability allows us to create dynamic games involving chance, automatically generate data, and much more.

In Python, we use the `random` module to generate random numbers. We import the `random` module and use its functions to generate random values.

To generate a random integer within a specified range, you can use the `randint()` function.

```python
import random

random_number = random.randint(1, 100)  # Generates a number between 1 and 100
print(f"Random number between 1 and 100: {random_number}")
```

**Example Video**

<video src="/courses/python-fundamentals/random-number-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Skills to Practice

- Importing modules
- Utilizing math functions for complex math operations
- Generating random numbers using the `randint()` function

### Instructions

#### Setup

1. Create a new Python application. Name the project **1-8 Math Functions and Random Numbers**.
2. Click Create.

#### Code

```python
# Import the math and random modules
import math
import random

print("--- Demo 1 - Circumference Calculator ---\n")
radius = float(input("Enter radius: "))
circumference = 2 * math.pi * radius
print(f"Radius: {radius}, Circumference: {circumference}")
print(f"Rounded circumference: {round(circumference, 2)}\n")

input("Press enter to continue...")

print("--- Demo 2 - More Math Functions ---")
print("-Exponents-")
number = float(input("Enter base number: "))
exponent = float(input("Enter exponent: "))
print(f"{number}^{exponent} is {math.pow(number, exponent)}\n")

print("-Square Roots-")
number = float(input("Enter a positive number: "))
print(f"The square root of {number} is {math.sqrt(number)}\n")

input("Press enter to continue...")

print("--- Demo 3 - Random Number Generation ---")
n1 = random.randint(1, 10)  # 1 to 10
n2 = random.randint(1, 1000)  # 1 to 1000
print(f"Random number between 1 and 10: {n1}")
print(f"Random number between 1 and 1000: {n2}")
```

#### Debug

```txt
--- Demo 1 - Circumference Calculator ---

Enter radius: 42
Radius: 42.0, Circumference: 263.89378290154264
Rounded circumference: 263.89

Press enter to continue...
--- Demo 2 - More Math Functions ---
-Exponents-
Enter base number: 2
Enter exponent: 8
2.0^8.0 is 256.0

-Square Roots-
Enter a positive number: 45
The square root of 45.0 is 6.708203932499369

Press enter to continue...
--- Demo 3 - Random Number Generation ---
Random number between 1 and 10: 1
Random number between 1 and 1000: 374
```

### Tips, Tricks, and Reflection

- Explore some more math functions [here](https://docs.python.org/3/library/math.html).
