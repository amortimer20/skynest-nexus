---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: "Python Fundamentals Part 1 Summary"
---

[← Back](/python-fundamentals/)

## Python Fundamentals Part 1 Summary

---

### Functions

- Functions in programming perform specific tasks or actions. They have a name, parentheses, and sometimes arguments specified within the parentheses. Arguments are values provided to a function that help it carry out its task. Examples from this section:
    - `print()`
    - `float()`
    - `round()`

- When a function does its job, it often gives back a result. This result is called the **return value**. The return value may be saved to a variable or used in some expression.

### Data Types

- Data types specify the kinds of data used in programming. There many built-in types, but this section starts with three basic types:
    - string - Represents a sequence of characters, used for text. Example: `"Hello, World!"`
    - int - Stands for integer, used for whole numbers without a decimal point. Example: `42`
    - float - Represents A floating-point number, used for large and precise decimal numbers. Example: `3.14159`

### Output

- Console output refers to information displayed to the user in a console application.
- `print()` - Outputs text to the console and then moves the cursor to a new line, ready for the next output.

### Arithmetic

- **`+`** Addition: Adds two numbers together.
- **`-`** Subtraction: Subtracts one number from another.
- **`*`** Multiplication: Multiplies two numbers.
- **`/`** Division: Divides one number by another and returns the quotient as a decimal.
- **`//`** Integer Division: Divides one number by another and cuts off the decimal.
- **`%`** Modulus (aka mod): Returns the remainder after division.
- Use parenthesis () for order of operations.


### String Formatting

- A new way to format strings is through string interpolation. You prefix a string with the letter f. Then you use curly braces {} to insert code expressions directly within the string.

### Variables

- Variables store data during a program's execution. They can be described as containers for storing information.
- Creating a variable is called declaring a variable.
- Use the equal sign ( = ) to assign a value to a variable.
- Variables must be initialized before they can be used. This is referred to as variable scope.

### Input

- `input()` - Allows the user to input via the keyboard. Returns the input as a string value.
    - String values do not perform arithmetic. Therefore, any user input must be converted from a string to a numeric type.

### Type Conversion

- `int()` - Converts a specified value to an integer. Returns the integer if successful.
- `float()` - Converts a specified value to a floating-point (decimal) number. Returns the double if successful.
- These methods can be used to convert user input from strings to the appropriate numeric type.

### Math Methods and Constants

- `round()` - Rounds a number to either an integer or to some decimal place
- `math.sqrt()` - Calculate the square root of a non-negative number.
- `math.pow()` - Raise a base number to the specified exponent.
- `math.pi` - Represents the constant value π (pi).

### Random Numbers

- Random numbers are used for generating chance in games, for sample data generation, security, etc.
- The random module is used for random number generation.
    - Import the `random` module using `import random`.
    - Use the `randint()` function to generate a random integer within a specified range. For example, `random.randint(1, 100)` generates a number between 1 and 100.