const array = [5, 1, 3, 2, 6, 10];
// return c % 2 check Odd numbers 
// return c % 2 ==== 0 Even numbers
// return c > 4 To see the values greater 4

// const isOdd = array.filter((c) =>{

//   return c % 2;
// })

// console.log(isOdd)

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

const check = array.reduce((max, curr) => {
  if (curr > max){
    max = curr;
  }
  return max;
}, 0);
console.log(check)

const output = array.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
 }, 0);
 console.log(output)


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