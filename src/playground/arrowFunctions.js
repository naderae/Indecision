const square = function(x){
  return x * x;
};



const squareArrow = (x) => {
  return x * x;
};
arrow functions are always anonymous!! so you have to assign it to a variable!

const squareArrow = (x) => x * x;
// you dont need the return keyword here!!
console.log(squareArrow(4));





const firstName = (fullName) => {
  return fullName.split(" ")[0]
};

const firstName = (fullName) => fullName.split(" ")[0];

console.log(firstName("Nader Ezze"));
