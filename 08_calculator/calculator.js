const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
  let sum=0
  if(array.length===0){
   sum=sum
  }
	else{
   for(let i=0; i<array.length; i++){

    sum=sum + array[i]
   }

  }
  
  return sum
};

const multiply = function(array) {
  let mult=1
   for(let i=0;i<array.length;i++ ){
    mult=mult*array[i]

   }

return mult
};

const power = function(n,p) {
  let pow=1
	for(let i=0;i<p; i++){
   pow=pow*n

  }
  return pow
};

const factorial = function(f) {
  let fact=1
  if(f===0 || f===1){
    fact===1
  }
	else{
    for(let i=f; i>1;i--){

      fact=fact*i
    }
  }
  return fact
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
