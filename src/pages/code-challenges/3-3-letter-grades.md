---
containerStyle: "container mt-4"
layout: "../../layouts/Layout.astro"
title: Code Challenge 3.3 - Letter Grade Curve Calculator
---

<a href="/code-challenges/" class="btn btn-sm btn-outline-light mb-3">
  <i class="si-arrow-left"></i> Back
</a>

## Code Challenge 3.3 - Letter Grade

---

### Objective

Create a program that evaluates student scores and assigns letter grades according to the following grade curve rules:
- Letter grade is **A** if the score is within 10 points of the highest score. i.e. `score >= best_score - 10`
- Letter grade is **B** if the score is within 20 points of the highest score. i.e. `score >= best_score - 20`
- Letter grade is **C** if the score is within 30 points of the highest score. i.e. `score >= best_score - 30`
- Letter grade is **D** if the score is within 40 points of the highest score. i.e. `score >= best_score - 40`
- Letter grade is **F** otherwise.

### Skills to Practice

- Assigning elements to a collection
- Traversing a collection
- Finding the max value in a collection

### Challenge Tasks

- Create a console project named **Challenge 3-2**.
- Prompt the user to input the total number of students.
- Prompt the user to input a score for each student.
- Find the highest score among the students.
- Display the letter grades for each students based on the grade curve rules above.

### Sample Output

```txt
Enter the number of students: 4
Enter score for student 1: 78 [Enter]
Enter score for student 2: 85 [Enter]
Enter score for student 3: 92 [Enter]
Enter score for student 4: 67 [Enter]

Student 1 score is 78 and grade is B
Student 2 score is 85 and grade is A
Student 3 score is 92 and grade is A
Student 4 score is 67 and grade is C
```