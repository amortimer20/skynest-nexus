---
divStyles: "container mt-4"
layout: "../../layouts/Layout.astro"
title: Python Fundamentals 1.1 Hello World
---

[← Back](/python-fundamentals/)

## Activity 1.1 Hello World!

---

### Introduction

In this lesson, you will learn about output in programming. For console applications, **output** refers to information displayed to the user. However, the meaning of output can vary depending on the context. To output information to the user, we use the `print()` function.

The `print()` function is a fundamental concept in programming. **Functions** perform specific actions, and in this case, `print()` outputs a message to the user via the console. The console is a simple terminal for running text-based computer applications. Most of the introductory applications in these programming activities will be console-based.

Additionally, we will learn how to write comments in Python. **Comments** serve two main purposes: documenting your code and temporarily disabling parts of your program for testing. As we progress, our programs will grow in size and complexity. It’s crucial to document your code to ensure it is easily understood and maintainable by yourself and your team. In Python, comments begin with the `#` symbol.

#### Skills to Practice

- Writing and executing code
- Output messages with the `print()` function
- Debugging potential errors in your code.
- Writing comments to document or disable code.

---

### Instructions

#### Setup

1. Create a new Python application. Name the project **1-1-output.py**.
2. Click Create.

#### Code

Starting on line 1, write the following code below. No copy and pasting! You will never be good at coding if you don’t write your own code.

```python
print("Hello, world!")
print("This class is taught by Mr. Mortimer.")
print("You are currently visiting: https://sehs.io")
print() # Display a blank line

print("What is the answer to life, the universe, and everything?")
print("The answer is 42.")
print()

print("Sally sells seashells by the seashore.")
print("Sally wants to invite you to invest in a money making opportunity.")
print()

print("If you start to feel overwhelmed, just remember:")
print("Mortimers don't quit, we get fired!")
print()
print()

print("Sincerely,")
print("Mr. Mortimer")

# These lines are disabled.
# Remove the comment symbols below (#) and run the program one more time.

# print()
# print("Display this message for 1 extra credit point")
```

#### Debug

To execute your new program, click the run button at the top of your workspace. If everything was written correctly, you will see the various message output to the console. If not, you need to try and see where you made a mistake in your code. The process of testing your program is called _debugging_.

Compare your console output with the example below to see if they match.

```txt
Hello, world!
This class is taught by Mr. Mortimer.
You are currently visiting: https://sehs.io

What is the answer to life, the universe, and everything?
The answer is 42.

Sally sells seashells by the seashore.
Sally wants to invite you to invest in a money making opportunity.

If you start to feel overwhelmed, just remember:
Mortimers don't quit, we get fired!


Sincerely,
Mr. Mortimer
```

---

### Tips, Tricks, and Reflection

- What happens when you write `print()` without a message in the parenthesis?
