---
containerStyle: "container mt-4"
layout: "../../layouts/Layout.astro"
title: Code Challenge 2.5 - ATM Validation
---

<a href="/code-challenges/" class="btn btn-sm btn-outline-light mb-3">
  ← Back
</a>

## Code Challenge 2.5 - ATM Validation 🏧💳

---

### Objective

An ATM is a machine that allows banking customers to easily access their bank accounts. It performs three basic tasks:

- Inquiry - See your account balance
- Deposit - Put money in your account
- Withdraw - Take money out of your account

Performing validation means to verify that the input from the user is in the correct form. For example, when depositing money, a user cannot deposit a dollar amount less than or equal to 0. Also, when withdrawing money, a user can neither widraw an amount less than or equal to zero or an amount greater than their balance.

Your task is to improve upon your previous ATM application by implementing data validation. The goal is to ensure that user inputs for withdrawals and deposits are valid and within acceptable ranges.

#### Skills to Practice

- Repeating statements using loops
- Making decisions with if statements
- Nesting if statements
- Validating user input

### Challenge Tasks

- Create a console project named **Challenge 2-5**.
- ATM Program Features:
   - Implement a banking ATM program with the following main menu options:
      - Inquire Balance: Allows the user to see their account balance.
      - Deposit: Enables the user to add money to their account.
      - Withdraw: Allows the user to take money out of their account.
      - Exit: Ends the program.
   - Validation Rules:
      - When depositing money, ensure the user cannot deposit an amount less than or equal to $0. Inform them that their deposit must be at least $1.
      - When withdrawing money, ensure the user cannot withdraw more money than is in their account. Inform them that they have an insufficient balance.
      - If the user selects an invalid menu option, prompt them to try again.
   - Setup Initial Balance:
      - Initialize your balance variable with a starting value, such as one of the examples below:
         - `double balance = 500;` (C#, Java, C++)
         - `balance = 500` (Python, Ruby)
         - `var balance = 500;` (JavaScript)

### Sample Output

```txt
--- ATM ---
Please select an option:
1. Inquire Balance
2. Deposit
3. Withdraw
4. Exit
Choice: 2 [Enter]

Enter the amount to deposit: -50 [Enter]
Invalid amount. Please enter an amount greater than $0.

Enter the amount to deposit: 100 [Enter]
Deposit successful. Your new balance is $600.00.

Would you like to perform another transaction? (yes/no): yes [Enter]

```
