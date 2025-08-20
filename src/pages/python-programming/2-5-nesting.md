---
divStyles: "container mt-4"
layout: "../../../layouts/Layout.astro"
title: Python Fundamentals 2.5 Nesting
---

[← Back](/python-fundamentals/)

## Activity 2.5 Nesting

### Introduction

This lesson doesn't introduce any new syntax. Rather, it focuses on a new technique called nesting. Nesting involves placing code blocks within other code blocks. This technique is crucial for making decisions based on previous selections, which is common in even basic programs.

#### What is Nesting?

Nesting is the process of placing one set of instructions (a code block) inside another. This allows for more complex logic and decision-making within your program. It's like having a series of questions where the answer to one question determines which question will be asked next.

**Example**

```python
answer = input("Would you like to delete your account? ")

if answer == "yes":
  answer = input("Are you ABSOLUTELY SURE? ")

  if answer == "yes":
    print("Deleting your account.")
  else:
    # ... code
else:
  # ... code
```

In this example, we ask the user if they want to delete their account. If they answer "yes", we ask them again to confirm. Depending on their responses, different actions are taken.

#### Importance of Code Formatting

It's crucial to keep your code nicely formatted. Here are some tips:

- **Indentation**: Always indent one tab (2-4 spaces) for every code block. If you have a nested if statement, the code in the nested block should be indented again.
- **Grouping Statements**: if, else if, and else statements that belong together should not have space between them. Group them together to visually indicate that they are related.
- **Spacing Sections**: Space your code based on sections. Avoid bunching up your entire program; this makes it easier to read and debug.

#### Common Pitfalls

- **Misalignment**: Ensure your indents are consistent. Improper indentation in your code can and will crash Python programs because indentation is used for code blocks.

- **Over-nesting**: Too many nested levels can make the code hard to follow. Consider refactoring if your code gets too nested.

#### Dungeon Crawler Activity

Now, let's apply what you've learned to a simple program. This program is a choose-your-own-adventure game, and it's the biggest program you'll write so far. Take your time, and test your code frequently. Don't try to write the whole program and then test it at the end, or it could spell disaster when you try to debug. Write one section at a time, and then test it.


#### Skills to Practice

- Nesting if statements
- Testing nested branching statements

### Instructions

#### Setup

1. Create a new repl.
   1. Select _Python_ for the language.
   2. Name the Repl "_2.5 Nesting_".
2. Click Create repl.

## Code

```python
# If the player beats one of the scenarios, set its boolean variable to true
wolfpack_ending = False
dragon_ending = False
gold = 0
twinkies = 0

print("Your car crashes into a tree during a thunderstorm in the woods.")
print("Darkness surrounds you as thunder crashes and rain pours.")
print("You spot a cave nearby, dimly lit by flashes of lightning, and run towards it for shelter.")
print("Inside, you see two shadowy paths diverging deeper into the unknown...\n")

# Convert user input to lowercase
path = input("Which path do you take? (left or right) -> ").lower()

print("\nAs you move forward, you see something glimmering on the ground — a Hostess Twinkie.")
print("Do you eat the Twinkie for sustenance, or will you save it for later?")

twinkie_choice = input("(take or eat) -> ").lower()

if twinkie_choice == "take":
  print("You slip the Twinkie into your pocket, unsure what awaits in the darkness...\n")
  twinkies = twinkies + 1
elif twinkie_choice == "eat":
  print("Feeling uneasy, you eat the Twinkie to keep up your strength.\n")
else:
  print("You leave the Twinkie untouched, feeling an ominous presence watching.\n")


# Left -> Wolfpack
# Right -> Dragon
# Else -> No path chosen
if path == "left":
  print("You cautiously take the left path.")
  print("A few steps in, you freeze as the piercing eyes of a pack of wolves emerge from the shadows.")
  print("The pack leader, larger and fiercer than the others, steps forward, growling softly...\n")

  wolf_choice = input("Do you offer the pack leader your hand in peace? (yes or no) -> ").lower()

  if wolf_choice == "yes" and twinkies >= 1:
    print("As you reach out, the wolves smell the Twinkie...")
    print("In a frenzy of hunger, they turn on you, and you're surrounded with no escape!\n")
  elif wolf_choice == "yes":
    print("The pack leader sniffs your hand and accepts you into the fold.")
    print("You're given a small satchel of gold as a token of their trust.")
    print("You settle in with the wolves, awaiting dawn as the storm howls outside...\n")
    gold = gold + 5
    wolfpack_ending = True
  else:
    print("Sensing your hesitation, the wolves close in, their teeth bared.")
    print("You feel their claws sink in, and everything goes black...\n")
# End left path
elif path == "right":
  print("You take the right path, deeper into the damp, dark cave.")
  print("Suddenly, a rotten, smoky smell fills the air. A massive dragon with dull, greedy eyes looms in the shadows.")
  print("The dragon sniffs the air and sneers, 'Did you bring me something sweet?'")

  dragon_choice = input("Do you offer him a treat? (yes or no) -> ").lower()

  if dragon_choice == "yes" and twinkies >= 1:
    print("The dragon’s eyes widen as he devours the Twinkie. 'Delicious!' he roars.")
    print("In gratitude, he hands you a pile of gold coins.\n")
    gold_choice = input("How much gold do you take? -> ")
    gold_amount = int(gold_choice)

    if gold_amount > 0 and gold_amount <= 100:
      print("The dragon grunts approval, allowing you to take the gold...\n")
      gold = gold + gold_amount
    elif gold_amount > 100:
      print("The dragon’s eyes narrow, and he hisses, 'Greed will get you nothing.'\n")
    else:
      print("The dragon, impressed by your modesty, lets you take all the gold!\n")
      gold = gold + 100000

    dragon_ending = True
  else:
    print("The dragon’s face darkens, and he lunges towards you!")
    print("His jaws close around you as everything fades to black...\n")
else:
  print("You hesitate, feeling the storm grow stronger as lightning flashes around you.")
  print("Suddenly, a bolt strikes nearby, and you fall to the ground, darkness closing in.\n")

# Endgame
print("-- Ending --")

if wolfpack_ending:
  print("By cuddling with the wolfpack, you weather out the storm.")
  print("Upon leaving the cave, they follow you, seeing you as the new pack leader.")
  print("You survived!!!")
elif dragon_ending:
  print("By tempting the dragon with a delicious Hostess snack cake, you avoid his wrath.")
  print("He flies you back home after the storm, but not after raiding the nearest Hostess factory.")
  print("You survived!!!")
else:
  print("Game Over!")

if gold > 0:
  print(f"\nYou not only survived, but you found {gold} gold!")
```

#### Debug

```txt
Your car crashes into a tree during a thunderstorm in the woods.
Darkness surrounds you as thunder crashes and rain pours.
You spot a cave nearby, dimly lit by flashes of lightning, and run towards it for shelter.
Inside, you see two shadowy paths diverging deeper into the unknown...

Which path do you take? (left or right) -> left

As you move forward, you see something glimmering on the ground - a Hostess Twinkie.
Do you eat the Twinkie for sustenance, or will you save it for later?
(take or eat) -> take
You slip the Twinkie into your pocket, unsure what awaits in the darkness...

You cautiously take the left path.
A few steps in, you freeze as the piercing eyes of a pack of wolves emerge from the shadows.
The pack leader, larger and fiercer than the others, steps forward, growling softly...

Do you offer the pack leader your hand in peace? (yes or no) -> yes
As you reach out, the wolves smell the Twinkie...
In a frenzy of hunger, they turn on you, and you're surrounded with no escape!

-- Ending --
Game Over!
```

### Tips, Tricks, and Reflection

- I cannot stress the importance of testing your application regularly. When you start nesting if statements, your app will potentially have many different paths of execution. It’s important to make sure everything runs as you develop your application.
