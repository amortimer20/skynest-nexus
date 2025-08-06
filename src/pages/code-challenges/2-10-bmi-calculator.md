---
containerStyle: "container mt-4"
layout: "../../layouts/Layout.astro"
title: Code Challenge 2.10 - BMI Calculator
---

<a href="/code-challenges/" class="btn btn-sm btn-outline-light mb-3">
  ← Back
</a>

## Code Challenge 2.10 - BMI Calculator

---

### Objective

Create a program that calculates the Body Mass Index (BMI) given a user’s weight in pounds and height in inches.

Note: BMI is not always a great indicator for health metrics, but it makes for a good code challenge.

### Skills to Practice

- Branching with selection statements

### Challenge Tasks

- Create a console project named **Challenge 2-10**.
- Calculate the user's BMI using the formula **BMI = (weight / height<sup>2</sup>) × 703**
- The program should output the BMI along with the corresponding category:
    - Underweight: BMI < 18.5
    - Normal weight: 18.5 <= BMI < 24.9
    - Overweight: 25 <= BMI < 29.9
    - Obesity: BMI >= 30

### Sample Output

```txt
Enter your weight in pounds:180 [Enter]
Enter your height in inches:70 [Enter]
Your BMI is 25.82, which is considered Overweight.
```