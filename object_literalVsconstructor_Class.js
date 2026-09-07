"use strict";

// object literal {}
let user = {
  name: "Wally",
  admin: false,
};

user;

// use a constructor function to create or construct an object i.e to create a new user anytime someone signs up to our app. This has more advantage over using the object literal because you can create multiple objects using just one regular function just by calling the function with the new keyword. Note: Its a convention to start with a constructor function capital letter
function Member(username) {
  if (!new.target) {
    throw new Error(
      "You cant call this function without using the new keyword",
    );
  }
  // private member
  age = 23;
  // public member
  this.name = username;
  this.admin = false;
  console.log(this);
}

let user0 = Member(
  "Calling the Constructor function without using the new keyword gives error in strict mode",
);
let user1 = new Member("Dolly");
user1;
let user2 = new Member("Julie");
user2;
console.log(user2.age); // undefined because age is private i.e not defined with the this keyword inside Member function

// class is a modern way of creating an object instead of using a regular function
class Members {
  constructor(username) {
    this.name = username;
    this.admin = false;
  }
}

let test1 = new Members("GVS");
test1;

// So when to use one over the other?
// It essentially boils down to if we need multiple instances of our object or not. Objects created from a Constructor Function let us have multiple instances of that object.

// Object literals are basically singletons with variables that are all public.

// Bottom line: it really doesn’t matter which approach you use. I always stick with the KISS principle. If you find you’re having to retype your code a bunch of times, or if you like the idea of having private and public variables easily defined, then use a constructor function. Otherwise, stick with objects literals.

// Basically the new keyword does a few things for us
// 1. Creates a new empty object and assigns it to `this` keyword
// 2. Assigns peroperties to `this` keyword
// 3. Returns the `this` object
