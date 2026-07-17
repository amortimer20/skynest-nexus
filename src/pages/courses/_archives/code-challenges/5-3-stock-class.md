---
containerStyle: "container mt-4"
layout: "../../layouts/Layout.astro"
title: Code Challenge 5.3 Stock Class
---

<a href="/code-challenges/" class="btn btn-sm btn-outline-light mb-3">
  <i class="si-arrow-left"></i> Back
</a>

## Code Challenge 5.3 - Stock Class

---

### Objective

Your task is to design and implement a Stock class and write a program that tests the class. This challenge focuses on object-oriented programming concepts such as constructors, methods, and fields, as well as applying arithmetic operations.

### Skills to Practice

- Defining and implementing classes.
- Creating constructors.
- Defining and using methods.
- Working with object-oriented design principles.

### Challenge Tasks

1. **Create a console project named Challenge 5-3.**
2. **Draw the Class Diagram:**
   - Draw the class diagram for the Student class, including fields, constructors, and methods.
3. **Class Implementation:**
    - Define a class named Stock with the following specifications:
        - A string data field named `Symbol` for the stock's symbol.
        - A string data field named `Name` for the stock's name.
        - A double data field named `CurrentPrice` that stores the stock's current price.
        - A double data field named `PreviousClosingPrice` that stores the stock price for the previous day.
        - A constructor that initializes the fields with specified parameters: the symbol, name, current price, and previous closing price.
        - A method named GetChangePercent() that calculates and returns the percentage change from `PreviousClosingPrice` to `CurrentPrice`. The formula to calculate the change percentage is:

<div class="text-center">
    <img src="/courses/c-sharp-fundamentals/stock-change-formula.png" class="img-fluid" alt="Stock Change Formula">
</div>

4. **Test Program:**
    - Write a sample program in **Program.cs** that creates a stock object with:
        - Symbol: MSFT
        - Name: Microsoft
        - Current Price: 34.35
        - Previous closing price: 34.5
    - Displays the price-change percentage using the GetChangePercent method.

<sup>*</sup> Use the naming convention that matches your programming language/preference.