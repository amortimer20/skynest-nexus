---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 2.2 If Statements
---

[← Back](/python-fundamentals/)

## Activity 2.2 If Statements

---

### Introduction

In programming, we often need to make decisions based on certain conditions. For instance, you might want your program to perform one task if a user is old enough to drive and another if they are not. To control the flow of your program and make decisions like this, we use something called selection statements.

The most basic selection statement is the if statement. An if statement allows your program to check a condition and decide whether or not to execute a block of code based on whether that condition is true or false. If the condition is true, the code inside the block runs. If the condition is false, the code is skipped entirely.

In Python, the code block following an if statement is indicated by indentation. Here's an example:

```python
number = 100

if number == 100:
    print("Code inside this block runs because the condition is true.")
    print("More code inside the same block...")
```

In this example, since `number == 100` is true, the code indented under the if statement is executed. If the condition were false, the program would skip that block entirely.

#### Common Mistakes

1. **Using the Assignment Operator Instead of the Equality Operator**: One common mistake is using a single `=` (assignment operator) instead of a double `==` (comparison operator) in a condition:

```python
if number = 100:  # This causes an error because it's trying to assign a value
```

Remember, the `==` operator checks for equality, while `=` assigns a value. This is a frequent error that can lead to unexpected results, so always double-check your conditions!

2. **Incorrect Indentation**: Another common mistake is improper indentation. Python relies on indentation to define blocks of code. If the indentation is not consistent, it can lead to errors or unexpected behavior:

```python
if number == 100:
print("This code will cause an error due to improper indentation")
```

Ensure that all code blocks are properly indented to avoid these issues.

**Example Video**

<video src="/courses/python-fundamentals/if-statement-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Skills to Practice

- Constructing if statements
  - Creating a condition
  - Creating a code block

---

### Instructions

#### Setup

1. Create a new Python project.
2. Name the project **2.2 If Statements**.

#### Code

```python
print("--- Demo 1 - Age Validator ---\n")

age = int(input("Enter your age: "))

if age >= 16:
    print("Time to hit the road! You've earned your driving permit.\n")
if age >= 18:
    print("Adulting 101: You can now vote and live independently.")
    print("Please exit your mom's basement.\n")
if age >= 35:
    print("You're old enough to run for president.")
    name = input("Enter your full name: ")
    year = input("What year will you run? ")
    nickname = input("What's your nickname (adjective): ")

    print(f"{nickname} {name} for president in {year}!")


print("\n--- Demo 2 - Simple Score Calculator ---\n")

score = int(input("Enter your score (0-100): "))

if score >= 60:
    print("You passed!")
if score < 60:
    print("You did not pass.")
```

#### Debug

```txt
--- Demo 1 - Age Validator ---

Enter your age: 42
Time to hit the road! You've earned your driving permit.

Adulting 101: You can now vote and live independently.
Please exit your mom's basement.

You're old enough to run for president.
Enter your full name: Anthony Mortimer
What year will you run? 2032
What's your nickname (adjective): Lazy
Lazy Anthony Mortimer for president in 2032!

--- Demo 2 - Simple Score Calculator ---

Enter your score (0-100): 76
You passed!
```

### Tips, Tricks, and Reflection

- In Python, indentation is not just for readability; it's crucial for defining the structure and flow of your program. Ensure that all code inside a block is consistently indented to avoid errors and unexpected behavior.
