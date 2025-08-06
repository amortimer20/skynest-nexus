---
containerStyle: "container mt-4"
layout: "../../layouts/Layout.astro"
title: Code Challenge 3.2 - Sample Data Generator
---

<a href="/code-challenges/" class="btn btn-sm btn-outline-light mb-3">
  <i class="si-arrow-left"></i> Back
</a>

## Code Challenge 3.2 - Sample Data Generator 📊

---

### Objective

Create a program that generates large sets of random numeric data. This data can be used for testing algorithms or automating data entry during debugging. The user can choose to copy and paste the data into an application or save it to a file.

### Skills to Practice

- Generating random numbers
- Appending data to a collection
- Sorting data in a collection

### Challenge Tasks

- Create a console project named **Challenge 3-2**.
- User Inputs:
    - Ask the user for a minimum and maximum number to define the range of the sample data.
    - Ask the user how many data points to generate (e.g., entering 500 should generate 500 sample numbers).
- Sorting Option: Ask the user if they want the data sorted before displaying it.
- Data Generation: Create a collection and fill it with the specified number of random data points within the given range.
- Show the generated data according to the user's preferences (sorted or unsorted).

**Bonus Challenge**

- Output the data to plain text file.

### Sample Output

```txt
Enter the minimum number: 1 [Enter]
Enter the maximum number: 100 [Enter]
How many data points to generate: 10 [Enter]
Do you want the data sorted? (yes/no): yes [Enter]

Generated Data: 
2, 5, 18, 23, 34, 45, 56, 67, 89, 100
``
