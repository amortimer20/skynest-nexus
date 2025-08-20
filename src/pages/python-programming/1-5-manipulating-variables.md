---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 1.5 Manipulating Variables
---

[← Back](/python-fundamentals/)

## Activity 1.5 Manipulating Variables

---

### Introduction

In programming, variables are used to store data that can be used later in the program. You’ve already learned how to declare and use variables. But one of the most powerful things about variables is that they don’t have to stay the same throughout a program. We can change the value of a variable after it's been initialized.

Changing the value of a variable allows you to work with dynamic data. For example, a game might change a player's score every time they earn points, or an app could update a temperature reading when the weather changes.

Let’s say you have a variable that holds your age:

```python
age = 15
```

In this example, `age` is a variable, and it currently holds the value 15. But time passes, and you have a birthday, so now your age is 16. You can change the value of the `age` variable like this:

```python
age = 16
```

Changing the variable's value is as simple as assigning a new value.

#### Keeping Track

Sometimes, you will need to modify a variable by adding, subtracting, etc. to it. For example, let's say you're making a fighting game and your player takes damage:

```python
health = 100

# Take damage
health = health - 10
```

This takes the current value of `health`, subtracts 10, and saves the new result. If you're thinking of variables from Algebra class, this might seem odd. Remember, variables in programming aren't exactly the same as those in math class.

**Example Video**

<video src="/courses/python-fundamentals/manipulating-variables-animation.mp4" controls style="width: 100%; max-width: 640px;"></video>

#### Skills to Practice

- Manipulate variable values using the assignment operator

### Instructions

#### Setup

1. Create a new Python application. Name the project **1-5 Manipulating Variables**.
2. Click Create.

#### Code

```python
print("--- Demo 1 - Battle Demo ---")
player_health = 100
player_attack = 25
enemy_health = 100
enemy_attack = 20
potions = 3
print(f"Health: {player_health}")
print(f"Enemy health: {enemy_health}")
print()

print("Player attacks.")
enemy_health = enemy_health - player_attack
print(f"You did {player_attack} damage! Enemy health: {enemy_health}")
print()

print("Enemy attacks.")
player_health = player_health - enemy_attack
print(f"Enemy did {enemy_attack} damage! Player health: {player_health}")
print()

print("Using potion...")
player_health = player_health + 10
potions = potions - 1
print(f"Player health: {player_health}. Potions left: {potions}")
print("\n\n")  # What does \n do? Google search 'Python \n'


print("--- Demo 2 - Banking Simulator ---")
account_name = "Checking Account"
balance = 100.50
print(f"{account_name} balance: {balance}")
print(f"Depositing $99.01 to {account_name}")
balance = balance + 99.01
print(f"{account_name} balance: {balance}")
```

#### Debug

```txt
--- Demo 1 - Battle Demo ---
Health: 100
Enemy health: 100

Player attacks.
You did 25 damage! Enemy health: 75

Enemy attacks.
Enemy did 20 damage! Player health: 80

Using potion...
Player health: 90. Potions left: 4



--- Demo 2 - Banking Simulator ---
Checking Account balance: 100.5
Depositing $99.01 to Checking Account
Checking Account balance: 199.51
```

### Tips, Tricks, and Reflection

- Remember that variables need to be spelled exactly the same every time.
- Use your judgement when deciding whether to use an integer or float variable. Should the value be allowed to have decimals in it?
    - Can dollar amounts have a decimal?
    - When shopping online, does the quantity of what you're buying usually need a decimal place?