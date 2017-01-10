# Inheritance in JavaScript

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


## Prototypal inheritance

In the last 20 minutes of lab, we will be covering prototypal inheritance.

### ES6 Classes
In JavaScript classes don't actually exist. 😱 The new (ES6) class syntax is just syntactical “sugar”, but behind the scenes javascript is using what’s called prototypal inheritance.

But first let’s review what inheritance looks like in Java. Java uses class inheritance: A class is like a blueprint—a description of the object to be created. In Java, classes inherit from classes, which create subclass relationships. Instances of classes are created with constructors by using the 'new' keyword.

Even though javascript has the 'class' keyword, behind the scenes it is still just a function.
```
class Foo {}
typeof Foo // 'function'
```

### Prototypes
When it comes to inheritance, JavaScript only has one construct: objects. Functions, and objects literals are both objects, and unlike with classes, javascript objects are instantiated upon declaration.

When an object is created in Javascript, it has an internal link to another object called its **prototype**. This prototype is a ***working object instance.*** Objects inherit directly from other objects, so each prototype has a prototype of it’s own, and so on until an object is reached with null as it’s prototype. Null doesn’t have a prototype, and is the end of this chain of prototypes.


### Inheritance And The Prototype Chain
Javascript objects are like bags of properties, and also have a link to a prototype object. When trying to access a property of an object, JavaScript will first look in that object, then the prototype of the object, the prototype of the prototype, and so on until a property is fount or the end of the chain is reached.

### Cloning an Existing Object
Javascript gives us a handy method for creating new objects with a specified prototype: `Object.create()` This can be used to clone an existing object, by passing it as a parameter to the method as follows:

Note that creating a object literal like: `var foo = {}` is a succint way of creating a clone of Object.prototype and extending it with new properties.

```
var a = {a: 1}; 
// a ---> Object.prototype ---> null

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
// d ---> null
console.log(d.hasOwnProperty); 
// undefined, because d doesn't inherit from Object.prototype
```

### Extending an Object
In the above example we cloned objects in order to create a prototype chain of inheritence, but what if we want to extend the functionality of our cloned objects?

Easy. Remember that objects are just dynamic bags of properties, so you can just add functionality as you go!

For example if you wanted to add a method called baz to the object 'c', just do:
```
c.baz = function(){
	console.log('prints baz!');
}
```

## Excercise

Open up **lab2-proto.js**.

Re-implement part 4 of the bank accounts example from before, but using the Object.create() syntax to inherit from a base class instead of using the new class+extends syntax. This will help you get a better understanding of how the new class+extends syntax is working behind the scenes with prototypal inheritance.

## Take home

If you are still confused about prototypical inheritance and/or we ran out of time for lab, read [this short article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) about Prototypical Inheritance.

Ask questions!
