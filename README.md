# lab2-inheritance

In today's lab we will spend 30 minutes practicing writing ES6 style classes (the "new syntax") with TypeScript by writing code for bank accounts. Then we will spend the last 20 minutes learning about prototypical inheritance (an important javascript concept which will not be covered in lecture) and practicing it.

In general for lab this quarter, you will be learning things that won't necessarily be covered in lecture in addition to practicing concepts that you've learned in lecture.

## Programming checkings and savings accounts

### Step 1: Fork and clone the repo

First, you will need to **fork** and then clone [the repo](https://github.com/info498e-w17/lab2-inheritance). Make sure to make commits and push them up to github because you will submit a link to your forked repo at the end of class.

Don't worry about rushing through the lab. Lab is graded based on participation. But if you finish the lab on your own time anyways that would be good for your own learning. 

### Step 2: Write a CheckingsAccount class

Write a TypeScript class in the *lab1-part1.ts* file that satisfies the following requirements:

* Has a constructor with the following parameters
	* initialBalance (a number)
	* ownerName (a string)
* Saves those parameters as private fields in your class
* Has a **deposit** method which takes a number amount as a parameter and adds it to your account's balance
* Has a **withdraw** method which takes a number amount as a parameter and subtracts it to your account's balance
* Has a **checkBalance** method which prints out the current balance of the account and the account owner's name (pro tip: ES6 [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) make this a bit cleaner)

Make sure to write code that creates an instance of your class and calls its methods to make sure it works.

When you are done with this step, commit your changes to git for this file.

### Step 3: Write a SavingsAccount class

In *lab1-part2.ts* write a **SavingsAccount** class with the exact same functionality as your **CheckingsAccount** class (you can copy -> paste -> rename).

The only thing that is different about your SavingsAccount class is that there should be a limit on the number of withdrawals you can make.

Specifically, each instance of the SavingsAccount class should only be allowed to make **3 withdrawals**. Any calls that exceed that limit should *not* perform the withdrawal and additionally should print out an error message for the user to see.

Make sure to write code that creates an instance of your class and calls its methods to make sure it works.

When you are done with this step, commit your changes to git for this file


### Step 4: Write an abstracted Account class

Copy and paste your CheckingsAccount and SavingsAccount classes into your *lab1-part3.ts* file.

At this point, you will probably have noticed that there is a bit of redundant code between your **CheckingsAccount** and **SavingsAccount** classes. For example, your deposit method is identical for both classes.

So now you should create a general **Account** class with all of the default shared behavior that your **CheckingsAccount** and **SavingsAccount** classes should [inherit](http://www.typescriptlang.org/docs/handbook/classes.html#inheritance). 

Make sure to write code that creates an instance of your class and calls its methods to make sure it works.

When you are done with this step, commit your changes to git for this file

### Step 5: Submit

Make sure you push your commits to Github. Submit a link to your Github repo in Canvas for grading. The Canvas submission will close an hour after lab, so please submit it now before you forget. If you are not done, don't worry about it. We are grading based on participation. This is more for your learning than for your grade.


## Prototypical inheritance

In the last 20 minutes of lab, we will be covering prototypical inheritance. If we run out of time, please read [this short MDN article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) on inheritance and the prototypal chain.
