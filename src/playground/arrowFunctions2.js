// arguments are no longer bound!

// const add = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
//
// console.log(add(55, 1));
// we can no longer access the keyword 'Arguments' inside the functions


// this keyword is no longer bound with arrow functions
const user = {
  name: 'Andrew',
  cities: ['philli', 'New York', 'Dublin'],
  printPlacesLived(){
    // dont use arrow function on top because you want this to refer to user.
    const cityMessages = this.cities.map(city) => {
      return this.name + ' has lived in ' + city
    });
    return cityMessages
    // this.cities.forEach(city) => {
    //   console.log(this.name + ' has lived in' + city);
    // });
  }
};

console.log(user.printPlacesLived());

// when you use the arrow function, you can use 'this' anywhere, and uit will still refer to the object.
// inside of a function, it will always refer to what the function was called on.


const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply(function(){
    return this.numbers.map ((number) => number * this.multiplyBy)
  });
};
console.log(multiplier.multiply());
