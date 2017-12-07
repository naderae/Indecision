var nameVar = 'Andrew';
var namevar = "nader"
console.log('nameVar', namevar);

let nameLet = 'Nader';
// let nameLet = 'Marwan';
nameLet = 'Waseem';
 // with 'let', you cannot ovverride the variable!!
 // you can ofcourse reassign it, there no problem
console.log('nameLet', nameLet);


const nameConst = 'Frank';
const nameConst = 'john';
//with const, you cant even reassign the variable, it  must remain the same!!
console.log("nameConst", nameConst);


// with const and let, you dont have outside access to variables that are defined inside an if statement, or any other block;
// if you need access to it outside, define it outside with let, and then access it outside.

const user = {
  name: 'Andrew',
  age: 26,
  location: 'Toronto'
  // location: 'Bangladesh'
};

function getLocation(location){
  if (location) {
    return <p> Location: {location}</p>;
  }
};

// ternary operator: true ? "Nader" : "Anonymous" ==> if the conditional evaluates to true, return Nader. if not, return anonymous!


// const template2 = (
//   <div>
//
//     <h1>{user.name ? user.name : "Anonymous"} </h1>
//
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//
//     {getLocation(user.location)}
//   </div>
// );
