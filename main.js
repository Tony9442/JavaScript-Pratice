//Understanding Promise 
//say we are biulding and e-commerce web-site with a cart

const cartTwo = ["Shoes", "Pants", "Ball", "Car", "Watch"];

/*Step1 whenever we call on this line of code it return us a promise and 
 a promise is nothing and empty object with data value in it, and the
 data value holds what our createOrder api returns to us.

 Important ponits
 a) The createOrder() api is an async operation it will take some time to 
 execute but we don't know how long it will take and while it's the time other codes 
 below it will keep run running. As soon it is executed 
 it will automaticaly fill our empty promise data with values which is the items that 
 was ordered.
*/
/*Step 2
 How do we proceed to payment?
 Ans: We will attach our callback function to our promise object
*/
//Once we get our orderdetails in createOrder the callback on our promise object is automatically called.

const promise = createOrder(cart);//returns orderId or orderdetails
//{data: orederedDetails}

promise.then(function (orderDetails){
  //this is how we attach callback to our promise object.
  processPayment(orderDetails);
})

//Same as 
createOrder(cart).promise.then(function (orderDetails) {
  processPayment(orderDetails);
});

//Promise is not just an empty object with data it much special and advance then that.

//To see the promise data object we will need a function fetch()
//fetch() is api given to us by browser to make external calls.
//fetch() by desgin retruns us a promise
/*When execute the fetch line of code we will get a promise
 object inside this person fetch() retrun us a promise*/
 //promise objects are immutable

const API = "https://api.github.com/users/akshaymarch7"

const person = fetch(API);//when run this

console.log(person)

person.then(function (data){
   console.log(data)
})

 
const array = [5, 1, 3, 2, 6, 10];
// return c % 2 check Odd numbers 
// return c % 2 ==== 0 Even numbers
// return c > 4 To see the values greater 4
//say we are biulding and e-commerce web-site with a cart

// const isOdd = array.filter((c) =>{
const cart = ["Shoes", "pants", "ball"];

//   return c % 2;
// })
// Once we create an order in our page we can now process in the 
//processToPayment() which is to pay for orders that we have it as
//a call back function in createorder()

// console.log(isOdd)
/* We have now given this processToPayment() to createOrder()
 as callback function now createOrder() carries the responsebilty
 to create an order and the function back that way we can handle async
*/

function findMax(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++){
    if(array[i] > max){
      max = array[i]
    }
  }
  return max;
}
console.log(findMax(array))
/*The problem in this code that we have a large code base and so many api
 and the apis are depened on one after the other what will happen is that 
 we will end up falling into the "CALLBACK HELL"
*/

const check = array.reduce((max, curr) => {
  if (curr > max){
    max = curr;
  }
  return max;
}, 0);
console.log(check)
api.createOrder(cart, function() {

const output = array.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
 }, 0);
 console.log(output)
  api.paymentSection(function () {

    api.orderReviewSummary(function () {

        api.backHomePage()
    })
  })

 const users = [
   { fristName: "akshay", lastName: "Joe", age: 20 },
   { fristName: "akhay", lastName: "Zoe", age: 10 },
   { fristName: "akay", lastName: "Moe", age: 40 },
   { fristName: "andrew", lastName: "Tate", age: 10 },
 ];

 //printout the list of full names for the users.
 const see = users.map((user) => {
  let fullName = user.fristName +" "+ user.lastName;
  let age = user.age;
  return `${fullName} ${age}`

 })
 console.log(see)

 //Print array with the same age and how many they are
 //We use reduce() When we have an array and need to through over that array and make out a single value out of it. 
// The map(),filter(),reduce(), has power of chaining meaning they can be chained together
 const result = users.filter((acc, curr) => {
   if(acc.age < 30){
    return acc
   }
 }).map((acc) => acc.fristName);

 console.log(result);

 const reduce = users.reduce((acc, curr) => {
  if(curr.age < 30){
    acc.push(curr.fristName);
  };
  return acc;
 }, [])
 console.log(reduce);
});
