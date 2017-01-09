# lab2-inheritance

In today's lab we will spend 30 minutes practicing writing ES6 style classes (the "new syntax") with TypeScript by writing code for bank accounts. Then we will spend the last 20 minutes learning about prototypical inheritance (an important javascript concept which will not be covered in lecture) and practicing it.

In general for lab this quarter, you will be learning things that won't necessarily be covered in lecture in addition to practicing concepts that you've learned in lecture.

## Programming checkings and savings accounts

### Step 1: Fork and clone the repo

First, you will need to fork and then clone [the repo](https://github.com/info498e-w17/lab2-inheritance). Make sure to make commits and push them up to github because you will submit a link to your forked repo at the end of class.

Don't worry about rushing through the lab. Lab is graded based on participation. But if you finish the lab on your own time anyways that would be good for your own learning. 

### Step 2: Write a CheckingsAccount class

Write a TypeScript class that satisfies the following requirements:

* Has a constructor with the following parameters
	* initialBalance (a number)
	* ownerName (a string)
* Saves those parameters as private fields in your class
* Has a **deposit** method which takes a number amount as a parameter and adds it to your account's balance
* Has a **withdraw** method which takes a number amount as a parameter and subtracts it to your account's balance
* Has a **checkBalance** method which prints out the current balance of the account and the account owner's name (pro tip: ES6 [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) make this a bit cleaner)

### Step 3: Write a SavingsAccount class

Now, write a **SavingsAccount** class with the exact same functionality as your **CheckingsAccount** class.

### Step 4: Write an abstracted Account class

## Prototypical inheritance

### Takeaways

* Prototype chain
* Objects inherit from objects not from classes
* When an object inherits from another object it extends the prototype


#### Template markdown 

I'm no good at writing sample / filler text, so go write something yourself.

Look, a list!

 * foo
 * bar
 * baz

And here's some code! :+1:

```javascript
$(function(){
  $('div').html('I am a div.');
});
```

This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've b0rked it somewhere.


Props to Mr. Doob and his [code editor](http://mrdoob.com/projects/code-editor/), from which
the inspiration to this, and some handy implementation hints, came.

