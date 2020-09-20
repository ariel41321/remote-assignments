// Assignment 1: Function and Array

function max(numbers) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > result) {
      result = numbers[i];
    }
  }
  return result;
}
max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]);

// Assignment 2: Object

function calculate(args){ 
  let result;
  if (args.op==="+"){ 
    result=args.n1+args.n2;
  } else if (args.op==="-"){
    result=args.n1-args.n2;
  } else {
    result="Not supported";
  }
  return result; }

// first way to call the function
calculate({op:"+", n1:4, n2:5});

// second way to call the function

class Integer {
  constructor(op, n1, n2) {
      this.op = op; 
      this.n1 = n1;
      this.n2 = n2;
  }
}

const firstset = new Integer('+', 6, 2);
const secondset = new Integer('-', 9, 6);
const thirdset = new Integer('*', 3, 8);

calculate(firstset);
calculate(secondset);
calculate(thirdset);

// Assignment 3: Function, Array, and Object

function avg(data){
  let total = 0;
  for ( let i = 0; i < data.size; i++) {
    total += data.products[i].price;
  }
  return total/data.size;
}
//not sure if the property 'size' implies total number of the products
//if not, replace data.size with data.products.length

avg({
size:3, products:[
{
name:"Product 1",
price:100 },
{
name:"Product 2",
price:700 },
{
name:"Product 3",
price:250 }
]
});


//Assignment 5: Algorithm Practice (Advanced Optional)
var twoSum = function(nums, target) {
  for(var i = 0; i < nums.length; i++) {
    for(var j = i + 1; j < nums.length; j++) {
      if( nums[i] + nums[j]  == target ) {
        return [i,j];
      }
    }

  }
  return 'NULL';
};