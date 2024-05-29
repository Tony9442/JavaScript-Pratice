//Height order functions
/*A Height order functions a fuction that takes another function 
as an argurment or retrues a function from it.*/

function c(){
  console.log('I see you')
}

function b(c){
 c()
}
b(c)

//Tasks
//1. Calculate the area of radius cricles
//2. Calculate the cicumference of radius cricles
//3. Calculate the diameter of radius cricles

const radius = [1, 2, 3, 4];

const area = function(radius){
  return Math.PI * radius * radius;
};

const cicumference = function(radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};


const calculate = function (radius, logic) {
  const output=[];
  for(let i = 0; i < radius.length; i++){
    output.push(logic(radius[i]));
  }
  return output;
}


console.log(calculate(radius, area));
console.log(calculate(radius, cicumference));
console.log(calculate(radius, diameter));


console.log('Hello');

setTimeout(() => {
  console.log('Callback Function')
}, 5000)

console.log("End");

let startData = new Date().getTime();
let endDate = startData;
while(endDate < startData + 10000){
  endDate = new Date().getTime();
}
console.log(endDate)

let arr = [2, 3, 4, 5, 6, 8, 9]

//Double the arr

//Triple the arr

//Binary of the numbers of arr.
//Binary logic is x.toString(2); 

const data = arr
.map((ar) =>{
  return ar.toString(2)
})

console.log(data)
