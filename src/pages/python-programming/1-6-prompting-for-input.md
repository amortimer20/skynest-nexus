---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 1.6 Prompting for Input
---

[← Back](/python-fundamentals/)

## Activity 1.6 Prompting for Input

---

### Introduction

In our previous lessons, we’ve used the `print()` function to display messages to the user. But so far, our programs haven’t allowed users to provide input.

In this lesson, we’re going to learn how to get input from the user using the `input()` function. With this function, users can interact with the program by typing into the console. This exchange of information between the user and the program is known as input and output (often abbreviated as I/O).

#### input()

`input()` is a function that outputs a message, often referred to as a **prompt**,  pauses the program and waits for the user to type something in the console. When the user presses Enter, the input they typed is returned as a string. When a function does its job, it often gives back a result. This result is called the **return value**. The return value may be saved to a variable or used in some other expression.

In short, `input()` can be thought of as asking a question and waiting for an answer.

```python
favorite_color = input("Enter your favorite color: ")
print("Your favorite color is", favorite_color)

```

```txt
Enter your favorite color:
purple [Enter]
Your favorite color is purple
```

Notice the space after the colon? Run this sample program one more time, but remove the extra space. What changes?

**Example Video**

<video src="/courses/python-fundamentals/input-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Skills to Practice

- Prompt a user for input and saving it to a variable
- Using variables containing user input

### Instructions

#### Setup

1. Create a new Python application. Name the project **1-6 Input**.
2. Click Create.

#### Code

```python
print("--- Demo 1 - Simple To-Do List ---")

print("Let's add a few tasks to your list.")

task1 = input("Task 1: ")
task2 = input("Task 2: ")
task3 = input("Task 3: ")

print("\nYour To-Do List:")
print("1.", task1)
print("2.", task2)
print("3.", task3)


input("Press enter to continue...")


print("--- Demo 2 - User Profile Setup ---")
print("WELCOME! LET'S SET UP YOUR PROFILE...")

username = input("Enter your username: ")
subject = input("What’s your favorite subject in school? ")

# List of options
print("Choose your preferred after-school activity:")
print("- Sports")
print("- Music")
print("- Gaming")
print("- Volunteering")
activity = input("-> ") # Cool arrow prompt; Doesn't do anything special

print("\n- Creating your profile -")
print(f"NAME: {username}")
print(f"FAVORITE SUBJECT: {subject}")
print(f"AFTER-SCHOOL ACTIVITY: {activity}")
```

#### Debug

Since you can now type into the console, it's not enough to just click run and look at the output, you need to interact with the program! To do this, click into the console, type your input, and press **enter** to submit your input.

Your programs no longer need look exactly like the sample output. Feel free to type whatever you like.

```txt
--- Demo 1 - Simple To-Do List ---
Let's add a few tasks to your list.
Task 1: cook
Task 2: clean
Task 3: homework

Your To-Do List:
1. cook
2. clean
3. homework
Press enter to continue...

--- Demo 2 - User Profile Setup ---
WELCOME! LET'S SET UP YOUR PROFILE...
Enter your username: chungus23
What's your favorite subject in school? computer science
Choose your preferred after-school activity:
- Sports
- Music
- Gaming
- Volunteering
-> gaming

- Creating your profile -
NAME: chungus23
FAVORITE SUBJECT: computer science
AFTER-SCHOOL ACTIVITY: gaming
```

### Tips, Tricks, and Reflection

- You might have tried asking the user for a number and then attempted to perform calculations with that input. However, this won’t work just yet because `input()` always returns the input as a string, or text. To perform math operations, we need to convert these strings into numbers. In the next activity, we'll learn how to make this conversion so that we can use the input in calculations!

- Think about other types of input you might need to work with besides numbers and text (dates, colors, lists of items, etc.). How do you think we might handle those kinds of information?