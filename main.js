// var x = 7;

// function getName () {
//     console.log('hello javaSrcipt')
// }

// getName()
// console.log(x)

//HOISTING IN JAVASCRIPT
// var x = 1;
// a()
// b()
// console.log(x)
// function a() {
//     const x = 10;
//     console.log(x)
// }

// function b() {
//     const x = 100;
//     console.log(x)
// }

//SCOPE & LEXICAL ENVIRONMENT
/*1.Scope is basically where we can access a 
variable and function in our code
 2.Lexical environment is the local memory 
 along with the lexical environment of it's parent
 3.Lexical means in a sequence or in order,
 so we can say that the function (c) is lexicaly inside (a)
 and function (a) is lexcially in the global scope.
*/

// function a(){
//     //inside the function is known as the local memory space
//     /* Two ways to look at scope
//     1. What is the scope of this variable?
//     (meaning where can excess this variable (b)
//     2. Is (b) inside this scope of function (c)?
//     (Meaning is (b) inside this scope of function (c))
//     */
//     var b = 100;
//     c();
//     function c(){
//         console.log(b)
//     }
// }
// a();//=100

//Block
/*Block is used to combine multiple javascript statement into
a group
 Why do we group all this statement together?
 We need to group this statement together so we can use multiple statement
 in a place where javascript needs only one statement
*/ 

//  {
//     //Block is defined by this curly braces
//     //Block is also know as a compound Statem ent
//     //EXAMPLE
//     if(true) {
//         console.log('We combine statement in block so we can use them in place where javascript need only one statement')
//     }
//  }

//Block Scope
// Block Scope simply means the variable and function we can access in the block.
//Because 'let' and 'const' are located in the block scope they cannot be accessed outside of the block scope
// var e = 100;
// let b = 50;
// {
//     /*the variable 'e' in the block has SHADOWED the one outside
//     and also modify the value of the (e) outside. Why?
//     This is because the both are pointing to the same memory location
//     */
//  var e = 20;
//  let b = 30;
//  const c = 40;
//  console.log(e)
//  console.log(b);
//  console.log(c);
// }

// console.log(e);
// console.log(b)
// // console.log(b);//This throws a ReferenceError: b is not defined.
// // console.log(c);//And the same as this as well.

// //This concept is know as shadowing
// let z = 500;
// function add() {
//     let z = 200;
//     console.log(z)
// }
// add()
// console.log(z)

// //ilegal shadowing
// // let r = 200;
// // {
// //     var r =300;
// // }

// //legal shadowing
// var a =20;
// {
//     let a = 40;
// }
// //laxical scope works the same way in the blocks
// const g = 80;
// {
//     const g = 70;
//     {
//         const g = 90
//         console.log(g);
//     }
    
// }

// //Closures: This is Closures
// //Closures is a function bundled together with it's lexical environment

// function d(){
//     var b = "This closures and it's so nice";
//     //The (return e) means that the function (e) no longer resides inside the d()
//     function e () {
//         console.log(b)
//     }
//     return e
// }
// /*This returned the whole closure been the function along with lexical
//  scope was returned and it was added inside (check).
//  So when we execute check() somewhere in my code it still remembers refrence to (b)
//  it came from.
//  */
// let check = d();
// console.log(check);
// check()

// function r(){
//     var b = 300;
//     function x () {
//         console.log(b)
//     }
//     x()
// }
// r()

//Say we're to print in the console 1,2,3,4,5 after each and every seconds
/* Now code will console 6 into 5 places which is not what we want.
   It works this way because of the closure. Rememeber a 'clsoure is a function 
   along with it's lexical environment' so because our 'for loop' is a function 
   that is now stored in a setTimeout() so our for loop() remembers
   the reference to i.

   So when the loop run the first time it makes a copy of the function in the 
   setTimeout and attach a timer and also remembers the refrence of (i). and so 
   is the rest of them the numbers till it's done.

   The five copy of this functions are pointing to the same refernce of i because they
   have the same enviornment

   JavaScript does not wait for anything 
*/


// function i() {
//     for(var i = 1; i <= 5; i++){//because js doesn't wait the loop start running
//           setTimeout(function () {
//             console.log(i);
//           }, i * 1000); //when timer expires it is too late and value of becomes (6)
//         }
//     }
//     console.log('Hello World');//this prints out frist
// }
// i();

//Slove it with var

// function i() {
//   for (var i = 1; i <= 5; i++) {
//     //because js doesn't wait the loop start running
//     function v(x) {
//       setTimeout(function () {
//         console.log(x);
//       }, x * 1000); //when timer expires it is too late and value of becomes (6)
//     }
//     v(i);
//   }
//   console.log("Hello World"); //this prints out frist
// }
// i();

/* Let is a Block scope meaning that every time this loop runs the (i) becomes a new variable
 Also each time the setTimeout() runs the callback function has a new copy of (i) with it. 
*/

// function c() {
//     for (let a = 1; a <= 5; a++){
//         setTimeout(() => {
//             console.log(a)
//         }, a * 1000)

//         console.log('Closure fixed')
//     }
// }
// c()

/*INTERVIEW QUESTIONS ON CLOSURES 
 1: What happens when i add a parameter in our (outer) function and an agrument where the function is called?
 ans: It acts the same way all we do is add the parameter (b) in our inner() console
 and this is beacuse our inner() forms closures with our outer() and 'b' is part of our outer()
 
 2: What happens when our outer() is nested in another?
 ans: So it will simply form closures with enviornment function also.

 3: If a let variable with a conflicting name (a) what will happen?
 ans: Already our inner() has formed a closures with our previous (a) but if it doesn't
 find (a) in the enviornment of outest() then it goes out to global scope and prints
 what is there.
*/
function outest () {
    var c = 20;
    function outer(b) {

      function inner() {
        console.log(a, b, c);
      }

        let a = 10;
      return inner;
    }

    return outer;

}

let a = 100;
var i = (outest())('Hello People');/*When the outest() is 
called it returns the outer() and the second one is the 
outer function called with a parameter (b)*/
i();

/*ADVANTAGES OF CLOSURES 
   Closure is a very important part of js.
   1: Closures is used in the modern pattern
   2: Closures can also be used for data hiding and 
   encapsulation. So other code cannot access this value.
*/

/*Data hiding and encapsulation. 
   Say we have a variable and we want to have some data privacy over it
   so that other function or codes cannot have access to it.
   EXAMPLE:
*/

//Not hidden meaning anybody can access this counter
// var counter = 0

// function incrementCounter() {
//     counter++;
// }

//but over here is the data privacy with closure

// function counter () {
//     var count = 0
//     function incrementCounter () {
//         count++
//         console.log(count)
//     }
//     return incrementCounter
// }

// var m = counter()

//To incrementCounter and decrementCounter we do the following.

function Counter() {
  var count = 0;
  // incrementCounter has closure with the variable
  this.incrementCounter = function() {
    count++;
    console.log(count);
  }

  this.decrementCounter = function() {
    count--;
    console.log(count);
  }
}

var c1 = new Counter();
c1.incrementCounter();
c1.incrementCounter();
c1.incrementCounter();

c1.decrementCounter();
c1.decrementCounter();
c1.decrementCounter();
// var c1 = counter()
// c1();
// c1();
// c1()
// c1()

// //we can make another c2 out of this it's going to give a brand new counter and it has no business with frist one .
// var c2 = counter();
// c2()
// c2()
// c2();
// c2();

/*DISADVANTAGES OF CLOSURES

a: There could be an over use of memories in closures because when closure is formed 
it consumes lots of memories.
b: Somethings the closed over variable are not garbage collected meaning it's having
a lot of memories if you create a lot of closures because they are garbage collected till
programm expires.
c: if not handled nicely it can cause memory leak and it can fricy the browser

 
1:What is a garbage collectors and what does it do?

  Garbage collectors is like a programm in the browser of the js engine
  which frees up the not utilized memory.
  Some browsers now have smart garbage collectors that automatically 
  deletes variables that are not used outside closures.

  2: What is the relation between closures and garbage collectors?
   I will show by example.
*/

function m(){
    var k = 20, z =10;
    function o(){
        console.log(k)
    }
    return o
}
var s = m();
s()

// function outest(){
//   var w = 30;
//  function outer(n) {
//    function inner() {
//      console.log(c, n, w);
//    }
//    let c = 20;
//    return inner;
//  }
//  return outer
// }

// let c = 100;

// // outer()()
// var y = outest()("Yes it's alright");
// y();

function Counter(){// This secure our data so anyone can't just have access to it.
  var count = 0;

  this.incrementCounter = function () {
    count++
    console.log(count)
  }

  this.decrementCounter = function () {
    count--
    console.log(count);
  };
}
var b = new Counter()

b.incrementCounter();
b.incrementCounter();

//Diffrence between this two is hoisting



// Function Statement aka Function Declaration
// function a(){
//   console.log('hello');
// }

//Function Expression
var b = function(param1) {
   console.log(param1)
}

b(function() {

})

/*Frist class function is simply the 
ability to use function as a value
var h = function (){
  return function xyz(){

  }
}
console.log(h());*/ 

//Anonymous function
//Anonymous function are used in a place where 
//functions are used as a value like in variables
// function () {

// }

//Name Function Expression

// var m = function xyz() {
//   console.log('sssss')
// }


//Frist Class functions
//What is a callback function in javascript

function x (y){
  console.log('x')
  y()
}
x(function y(){
 console.log('h')
})
 setTimeout(() => {
   console.log('runner')
 },  5000)

 //Garbage Collection & removeEventListeners

function attach () {
  let count = 0;
  document.getElementById("clickMe")
  .addEventListener("click", 
  function () {
    setTimeout(() => {
      console.log("setTimeOut good", ++count);
    }, 2000);
  });
}
attach()
document.getElementById('clickNow')
.addEventListener('click', function () {
  console.log('I can see')
})

 


 




