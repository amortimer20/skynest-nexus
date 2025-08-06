---
containerStyle: "container mt-4"
layout: "../../layouts/Layout.astro"
title: Code Challenge 2.3 - Dungeon Crawler
---

<a href="/code-challenges/" class="btn btn-sm btn-outline-light mb-3">
  <i class="si-arrow-left"></i> Back
</a>

## Code Challenge 2.3 - Dungeon Crawler 🏰🐉

---

### Objective

In your introductory programming course, you learned how to make a lightweight _choose your own adventure_ dungeon crawler program. In this challenge, you will be able to put your own creativity to the test and implement your own version of the dungeon crawler program.

### Skills to Practice

- Writing nested if statements
- Writing compound Boolean logic expressions with `&&` (AND) and `||` (OR)
- Branching with if, else if, and else
- Debugging an application

### Challenge Tasks

- Create a console project named **Challenge 2-3**.
- Game development: Design an engaging dungeon crawler that allows players to make choices and explore different paths. Utilize nested if statements to create intricate levels and scenarios.
- Implement Boolean Logic: Make your game logic more dynamic by using compound Boolean expressions (&& for AND, || for OR) to control the flow of your adventure.
- Track Game Variables: Use at least two numerical variables to manage elements such as player health, inventory, or score. Incorporate at least one boolean variable to handle game states like unlocking doors or triggering traps.
- Use Your Imagination: This is your chance to build an epic story. Whether it’s battling mythical creatures, discovering hidden treasures, or solving ancient puzzles, make it memorable!

### Sample Output

These examples are not complete applications. They are snippets of output designed to help you generate ideas.

**Sample 1**

```txt
You enter a dark and musty room. A flickering torch hangs on the wall.
Do you (1) take the torch, or (2) proceed in darkness? 
1 [Enter]

You grab the torch. The light reveals a hidden door at the back of the room.
Do you (1) open the hidden door, or (2) continue exploring the room?
2 [Enter]

As you search the room, you find an old chest. Inside, you discover a healing potion.
Your health is now: 80
```

**Sample 2**

```txt
You find yourself at a fork in the path.
Do you (1) go left, or (2) go right?
1 [Enter]

A giant spider attacks you! Do you (1) fight, or (2) run?
1 [Enter]

You bravely fight the spider and defeat it. You gain a magic amulet.
```

**Sample 3**

```txt
You reach a locked door. Do you (1) use the key you found earlier, or (2) try to force it open?
2 [Enter]

The door won't budge, but you notice a lever on the wall.
Do you (1) pull the lever, or (2) keep searching the area?
1 [Enter]

The lever opens a secret passage! You proceed deeper into the dungeon.
Your inventory: 2 health potions, 1 magic amulet
```