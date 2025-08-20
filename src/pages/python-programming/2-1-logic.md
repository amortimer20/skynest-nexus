---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 2.1 Boolean Logic
---

[← Back](/python-fundamentals/)

## Activity 2.1 Boolean Logic

---

### Introduction

Computers aren’t just for arithmetic calculations; they can also make decisions based on certain conditions. This ability to make decisions allows programs to handle different outcomes. Let's explore a few everyday scenarios where a computer might need to make decisions:

- **Logging into an application**: The app needs to verify if you entered a valid username and password.
- **Viewing age-restricted games on Steam**: The app store checks if you meet the age requirement to view the game.
- **Playing a fighting game**: The game needs to determine if you’ve won or lost based on certain conditions.

In each of these examples, the computer is evaluating a question that can be answered with "yes" or "no", or more precisely, **True** or **False** . In programming, we use something called a boolean to represent these two values: true and false.

#### What is a Boolean?

In Python, the `bool` data type is used to store values that can be either `True` or `False`. This makes it perfect for logical expressions, which are questions or conditions that the computer can evaluate.

**Example**

```python
is_raining = False
has_umbrella = True
```

In this example, `is_raining` is set to `False` because it's not raining, while `has_umbrella` is set to `True` because you have an umbrella.

#### Boolean Logic

The study of how logical expressions are formed and evaluated is called **boolean logic**. In programming, these logical expressions are constructed using operators and values, and they always result in either `True` or `False`. Let’s revisit our earlier scenarios to see how they can be expressed as boolean logic:

- **Logging into an application**: If I enter my username but an invalid password, will I see my feed? `True` or `False`?
- **Viewing age-restricted games on Steam**: If I enter my birthday, January 1, 1990, will I be able to view the game? `True` or `False`?
- **Playing a fighting game**: If my health goes below or equal to 0, do I lose the game? `True` or `False`?

Just as math has arithmetic operators (like +, -, *, /), Python has operators specifically for boolean logic. These operators allow you to create logical expressions that the computer can evaluate. There are several types of operators:

**Comparison Operators**

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Equality <code class="language-python">==</code></th><th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-python">100 == 100</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">100 == 99</code></td>
      <td><code class="language-python">False</code></td>
    </tr>
    <tr>
      <td><code class="language-python">"abc" == "abc"</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">"ABC" == "abc"</code></td>
      <td><code class="language-python">False</code></td>
    </tr>
    <tr>
      <td><code class="language-python">True == True</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">True == False</code></td>
      <td><code class="language-python">False</code></td>
    </tr>
  </tbody>
</table>

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Inequality <code class="language-python">!=</code></th><th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-python">100 != 100</code></td>
      <td><code class="language-python">False</code></td>
    </tr>
    <tr>
      <td><code class="language-python">100 != 99</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">"abc" != "abc"</code></td>
      <td><code class="language-python">False</code></td>
    </tr>
    <tr>
      <td><code class="language-python">"ABC" != "abc"</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">True != True</code></td>
      <td><code class="language-python">False</code></td>
    </tr>
    <tr>
      <td><code class="language-python">True != False</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
  </tbody>
</table>

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Greater/Less than <code class="language-python">&gt; &lt;</code>
      </th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-python">100 > 100</code></td>
      <td><code class="language-python">False</code></td>
    </tr>
    <tr>
      <td><code class="language-python">100 > 99</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">0 < 10</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">0 < -1</code></td>
      <td><code class="language-python">False</code></td>
    </tr>
  </tbody>
</table>

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Greater/Less than or equal <code class="language-python">>= <=</code>
      </th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-python">100 >= 100</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">10 >= 99</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">0 <= 0</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">0 <= -1</code></td>
      <td><code class="language-python">False</code></td>
    </tr>
  </tbody>
</table>

**Logical Operators**

There are two important operators in this category that are not listed: logical AND, and logical OR. We will cover these in subsequent lessons.

<table class="table table-hover table-bordered table-sm table-responsive w-auto">
  <thead>
    <tr>
      <th>Logical Negation (NOT) <code class="language-python">not</code>
      </th>
      <th>Result</th>
    </tr>
  </thead>
  <tbody class="table-striped">
    <tr>
      <td><code class="language-python">not True</code></td>
      <td><code class="language-python">not False</code></td>
    </tr>
    <tr>
      <td><code class="language-python">not False</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
    <tr>
      <td><code class="language-python">not (100 > 100)</code></td>
      <td><code class="language-python">True</code></td>
    </tr>
  </tbody>
</table>

#### Examples of Boolean Expressions

Let’s look at some examples of boolean expressions in Python:

```python
age = 18
is_old_enough = age >= 18
```

In this example, the expression `age >= 18` checks if the age is greater than or equal to 18. If the condition is true, `is_old_enough` is set to `True`; otherwise, it will be set to `False`.

```python
is_equal = (1000 == 1000)
```

Here, we are checking if 1000 is equal to 1000. Since this is obviously true, `is_equal` is assigned the value `True`.

#### Conclusion

Boolean logic is essential for enabling computers to make decisions. By using boolean values (`True` or `False`) and operators, we can write programs that evaluate conditions and respond accordingly. We'll dive deeper into boolean logic as we continue, exploring how it can be combined with control flow statements like if statements to create more complex decision-making structures.

#### Skills to Practice

- Constructing boolean expressions

### Instructions

#### Setup

1. Create a new Python application. Name the project **2-1 Boolean Logic**.
2. Click Create.

#### Code

```python
# Initialize variables
name = "Mr. Mortimer"
age = 30
bank_account = 150.00
is_a_teacher = True
is_a_millionaire = False

# Assign boolean expressions to variables
is_my_name_mortimer = name == "Mr. Mortimer"
is_old_enough_to_drive = age >= 16
can_buy_dodge_challenger = bank_account > 31000
is_senior_citizen = age >= 65

print("-Name Checks-")
print(f"Is my name Mr. Mortimer? {is_my_name_mortimer}")
print(f"Is my name Mr. Mertens? {name == 'Mr. Mertens'}")
print(f"My name is not Mr. Merriman: {name != 'Mr. Merriman'}")

print("\n-Age-Related Checks-")
print(f"Am I old enough to drive? {is_old_enough_to_drive}")
is_old_enough_to_rent_car = age >= 25
print(f"Am I old enough to rent a car? {is_old_enough_to_rent_car}")
print(f"Am I eligible for a senior citizen discount? {is_senior_citizen}")

print("-Bank Account Checks-")
print(f"Do I have enough to buy a Dodge Challenger? {can_buy_dodge_challenger}")
has_positive_balance = bank_account > 0
print(f"Do I have a positive bank balance? {has_positive_balance}")

print("\n-Boolean Checks-")
print(f"{name} is a teacher: {is_a_teacher}")
print(f"{name} is a millionaire: {is_a_millionaire}")
is_not_millionaire = not is_a_millionaire
print(f"So, {name} isn't a millionaire? {is_not_millionaire}")

# Bonus: logical AND and logical OR (Covered in 2.4)
print("\n-Logical Operator Examples-")
can_drive_and_buy_car = is_old_enough_to_drive and can_buy_dodge_challenger
print(f"Am I old enough to drive AND have enough to buy a Dodge Challenger? {can_drive_and_buy_car}")
can_drive_or_buy_car = is_old_enough_to_drive or can_buy_dodge_challenger
print(f"Am I old enough to drive OR have enough to buy a Dodge Challenger? {can_drive_or_buy_car}")
```

#### Debug

```txt
-Name Checks-
Is my name Mr. Mortimer? True
Is my name Mr. Mertens? False
My name is not Mr. Merriman: True

-Age-Related Checks-
Am I old enough to drive? True
Am I old enough to rent a car? True
Am I eligible for a senior citizen discount? False
-Bank Account Checks-
Do I have enough to buy a Dodge Challenger? False
Do I have a positive bank balance? True

-Boolean Checks-
Mr. Mortimer is a teacher: True
Mr. Mortimer is a millionaire: False
So, Mr. Mortimer isn't a millionaire? True

-Logical Operator Examples-
Am I old enough to drive AND have enough to buy a Dodge Challenger? False
Am I old enough to drive OR have enough to buy a Dodge Challenger? True
```

### Tips, Tricks, and Reflection

- This demo is just the beginning. Over the next few activities, you'll see how powerful Boolean expressions can be in decision-making.
- The categorization of operators may differ between programming languages. The key is understanding their usage, regardless of how they are classified.
- You can quickly test a Boolean expression using the Python REPL.
