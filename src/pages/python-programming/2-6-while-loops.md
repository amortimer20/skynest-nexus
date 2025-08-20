---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 2.6 While Loops
---

[← Back](/python-fundamentals/)

## Activity 2.6 While Loops

Ever faced a situation where a piece of code in your app needs to run over and over again? Think back to those battle demos we did—they only ran for one turn. But what if we wanted them to keep going until someone wins? In programming, **loops** allow us to repeat instructions efficiently.

Imagine these scenarios:

- Playing each song in a playlist until you reach the end.
- Adding up the prices of items in your cart, one by one, to get the total.
- Printing out every student's name in a class roster.

In each case, the code follows a pattern: start a task, repeat it as long as a certain condition is true, and then stop.

#### What is a While Loop?

One type of loop in Python is the **while loop**. This loop will keep running a set of instructions while a specific condition is true. Once the condition is false, the loop stops.

A while loop has three main parts:

- **The Keyword**: The loop starts with the keyword `while`.
- **The Condition**: The condition after `while` determines how long the loop will run.
- **The Loop Block**: This block contains the code to repeat each time through the loop.

**Example: Counting Down**

Let’s look at an example where we count down from 10 to 1:

```python
number = 10

# The loop will run as long as number is greater than 0
while number > 0:
    print(f"Number is {number}")
    number = number - 1  # Reduces number by 1 each time
```

**Output**

```txt
Number is 10
Number is 9
Number is 8
Number is 7
Number is 6
Number is 5
Number is 4
Number is 3
Number is 2
Number is 1
```

In this example:

- The loop checks if `number > 0`.
- If `true`, it prints `number` and decreases `number` by 1.
- Once `number` reaches 0, the condition is `false`, and the loop stops.

### While Loop vs. If Statement
A while loop is similar to an if statement in structure, with one big difference: it repeats as long as its condition remains true. This means that we need a statement inside the loop that eventually makes the condition false; otherwise, the loop will continue forever! This kind of loop is called an infinite loop (more on that soon).

### Avoiding Infinite Loops
One major mistake when writing loops is creating a loop that never stops. Loops that run indefinitely are called infinite loops and can cause your program to freeze or crash.

Here’s an example of an infinite loop:

```python
number = 10

# The condition will always be true since number is never decreased
while number > 0:
    print(f"Number is {number}")
```

In this case, `number` is never changed, so `number > 0` is always true, and the loop never stops. To fix it, remember to update the variable in your loop so that the condition eventually becomes false.

### Using Sentinel Values in While Loops
Sometimes, we want a loop to keep running until a specific signal is given to stop, instead of counting down from a set number. A **sentinel value** is a special value that signals the end of input or the stopping point of a loop. Sentinel values are often used when we don’t know in advance how many times a loop should run.

Imagine an example where users can keep entering scores until they input `-1` to indicate they’re done:

```python
score = 0

while score != -1:
    score = int(input("Enter a score (-1 to stop): "))
    if score != -1:
        print(f"You entered: {score}")

print("Input complete.")
```

In this example, -1 is the sentinel value that stops the loop. Sentinel values are a flexible way to end a loop when exact counts aren’t known beforehand.

#### Skills to Practice

- Writing while loops
- Using while loops to implement menu systems

### Instructions

#### Setup

1. Create a new Python application. Name the project **2.6 While Loops**.
2. Click Create.

#### Code

```python
print("--- Demo 1 - 99 Bottles ---\n")
soda = input("Enter your favorite soda: ")
bottles = 99

while bottles > 0:
    print(f"{bottles} bottles of {soda} on the wall,")
    print(f"{bottles} bottles of {soda}!")
    print("You take one down, pass it around,")
    bottles = bottles - 1  # Subtract one from bottles to 'take one down'
    print(f"{bottles} bottles of {soda} on the wall!\n")

    # input()  # Uncomment to pause after every iteration.

input("\nPress enter to continue...")

choice = ""
balance = 100.55
print("-- Demo 2 - ATM Version 2 --")

# Input of "4" signals the user is finished.
while choice != "4":
    print("\n- Menu -")
    print("1) Check Balance")
    print("2) Deposit Money")
    print("3) Withdraw Money")
    print("4) Exit")
    choice = input("-> ")

    if choice == "1":
        print(f"Your balance is: ${balance}")
    elif choice == "2":
        deposit = float(input("How much would you like to deposit? $"))
        balance = balance + deposit
        print(f"Your new balance is ${balance}")
    elif choice == "3":
        withdraw = float(input("How much would you like to withdraw? $"))
        if withdraw > balance:
            print("Insufficient funds!")
        else:
            balance = balance - withdraw
            print(f"Your new balance is ${balance}")
    elif choice == "4":
        print("Thank you for using the ATM")
    else:
        print("Incorrect menu option selected. Try again.")
```

#### Debug

```txt
--- Demo 1 - 99 Bottles ---

Enter your favorite soda: Pepsi
99 bottles of Pepsi on the wall,
99 bottles of Pepsi!
You take one down, pass it around,
98 bottles of Pepsi on the wall!

98 bottles of Pepsi on the wall,
98 bottles of Pepsi!
You take one down, pass it around,
97 bottles of Pepsi on the wall!

...

1 bottles of Pepsi on the wall,
1 bottles of Pepsi!
You take one down, pass it around,
0 bottles of Pepsi on the wall!


Press enter to continue...
-- Demo 2 - ATM Version 2 --

- Menu -
1) Check Balance
2) Deposit Money
3) Withdraw Money
4) Exit
-> 1
Your balance is: $100.55

- Menu -
1) Check Balance
2) Deposit Money
3) Withdraw Money
4) Exit
-> 2
How much would you like to deposit? $25
Your new balance is $125.55

- Menu -
1) Check Balance
2) Deposit Money
3) Withdraw Money
4) Exit
-> 4
Thank you for using the ATM
```

### Tips, Tricks, and Reflection

- **Validation Practice**: Notice that you can specify invalid numbers for the deposit and withdraw values. For example, you shouldn't be able to deposit an amount less than or equal to $0, and you also shouldn't be allowed to withdraw more money than your balance. How can we use if statements to validate these amounts and prevent such errors? Try adding these checks to your program!

- **Tackling Infinite Loops**: Have you ever messed up a line of code and accidentally created an infinite loop? If so, how did you fix it? Share your experience with the class. If you haven't encountered this yet, try purposely breaking your code to create an infinite loop—then practice debugging it. This exercise can be a fun way to get comfortable with identifying and fixing infinite loops.
