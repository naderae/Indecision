/// create classes, just like in ruby
class Person {
  constructor(name = 'Anonymous', age = 0) { // this is how you set a default
    this.name = name;
    this.age = age;
  }
  getGreeting() { // this method has to be explicitly called on the instance
    return `Hi, I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name. age); // this calls the parent constructor function so we use what is written there
    this.major = major
  }
  hasMajor(){
    return !!this.major; // if you call ! on a string it returns false, and !! will return true
  }
  getDescription(){       // by defining the same function, you completely override the first getDescription
    let description = super.getDescription(); // you are picking up the parent getDescription

    if (this.hasMajor()) {
        description += `Their major is ${this.major}` // add this piece of string for students who have majors
    }

    return description
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += `I'm visiting from ${this.homeLocation}.`
    }
    return greeting
  }

}



const me = new Traveler ('Nader Ezze', 24, 'Beirut');
console.log(me.getGreeting());


const other = new Traveler();
console.log(other.getGreeting());
