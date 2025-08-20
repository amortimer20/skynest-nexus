---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 1.3 String Formatting
---

[← Back](/python-fundamentals/)

## Activity 1.3 String Formatting

---

### Introduction

In the previous activity, we output math expressions separately from strings. While this works, it may not always look neat or readable. In programming, we format strings to create more complex and user-friendly text outputs. In Python, there are two common ways to format strings: passing multiple arguments to `print()` and string interpolation.

Passing multiple arguments means providing different pieces of data, separated by commas, within the `print()` function. Each argument is printed in sequence, with spaces automatically added between them.

```python
print("My age in months is", 30 * 12)
```

Although this is technically output formatting rather than true string formatting, it achieves a similar result in terms of combining text and data.

A more modern and flexible way to format strings is to use string interpolation. This method allows you to embed expressions directly within a string. To use it, you prefix the string with the letter f and place any code or expressions inside curly braces `{ }` to have them evaluated and included in the output.

```python
print(f"My age in months is {30 * 12}.")
```

#### Skills to Practice

- Passing multiple arguments to the `print()` function
- String interpolation

### Instructions

#### Setup

1. Create a new Python application. Name the project **1-3 String Formatting**.
2. Click Create.

#### Code

```python
# Passing multiple arguments - Use the *,* character to seperate data that you want to put together.
print("10 squared is ", 10 * 10)
print()

print("I'm 5 foot 10 inches. That's ", 5 * 12 + 10, " inches.")
print()


# String inpterpolation - Prefix the string with an f and insert code within { }.
print(f"If I take out a $1000 loan, and pay $25 each month, I will pay my loan off in {1000 / 25} months.")
print()

print("A woodchuck can chuck 32 wood panels every minute.")
print(f"Therefore, a woodchuck can chuck {32 * 60} wood panels every hour.")
print()
```

#### Debug

```txt
10 squared is 100

I'm 5 foot 10 inches. That's 70 inches.

If I take out a $1000 loan, and pay $25 each month, I will pay my loan off in 40.0 months.

A woodchuck can chuck 32 wood panels every minute.
Therefore, a woodchuck can chuck 1920 wood panels every hour.
```

### Tips, Tricks, and Reflection

- You are welcome to use either technique for formatting, but this course favors string interpolation. I personally only use passing multiple arguments for basic examples.
