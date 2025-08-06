---
containerStyle: "container mt-4"
layout: "../../layouts/Layout.astro"
title: Code Challenge 2.2 Quadratic Equation
---

<a href="/code-challenges/" class="btn btn-sm btn-outline-light mb-3">
  ← Back
</a>

## Code Challenge 2.2 - Quadratic Equation

---

### Introduction

Your task is to create a program that solves quadratic equations using the quadratic formula. Given coefficients a, b, and c, your program should calculate the roots of the equation a<sup>2</sup> + bx + c = 0.

![Quadratic Equation](/courses/code-challenges/quadratic-equation.png)

### Skills to Practice

- Invoking math functions for complex calculations
- Branching with selection statements

### Challenge Tasks

- Create a console project named **Challenge 2-2**.
- Prompt the user to input the coefficients a, b, and c.
- Calculate the discriminant (_b<sup>2</sup> - 4ac_).
- Determine the roots of the equation based on the discriminant:
    - If the discriminant is positive, there are two distinct real roots.
    - If the discriminant is zero, there is one real root.
    - If the discriminant is negative, there are no real roots.
- Display the roots in a clear format.


### Sample Output

**Sample 1: two real roots**
```txt
Enter the coefficient a: 1 [Enter]
Enter the coefficient b: -3 [Enter]
Enter the coefficient c: 2 [Enter]
The roots of the equation are: 2 and 1.
```

**Sample 2: one real root**
```txt
Enter the coefficient a: 1 [Enter]
Enter the coefficient b: 2 [Enter]
Enter the coefficient c: 1 [Enter]
The root of the equation is: -1.
```

**Sample 3: no real roots**
```txt
Enter the coefficient a: 1 [Enter]
Enter the coefficient b: 2 [Enter]
Enter the coefficient c: 5 [Enter]
There are no real roots.
```