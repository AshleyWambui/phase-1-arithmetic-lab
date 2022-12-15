//CHALLENGE 1

const multiply = function(num1,num2){
    console.log(num1*num2)
}
multiply(31,2)
//Used multiplication(*) to multiply the two numbers


//CHALLENGE 2
function random(number) {
    return Math.floor(Math.random() * number);
  }
  
  console.log(random(50));
//Used Math.floor() to return the largest integer
//Used Math.random() to return a random number that is greater than 0 and less than 50


//CHALLENGE 3

const mod = function(num3,num4){
    console.log(num3%num4);
}
mod(22,9)
//Used remainder(%) to return the remainder number when num3 and num4 are divided


//CHALLENGE 4

const max = [ 12, 8, 20, 16, 4];

console.log(Math.max(...max));
//Used Math.max() to return the largest number in the array