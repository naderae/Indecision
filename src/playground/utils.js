console.log("utils.js is running");

const square = (x) => x * x;

const add = (a, b) => a + b;



// or you can do it in one shot

//


// default exports: you can only have 1 thing to export bu default

const subtract = (a, b) => {
  return a - b;
};

export { square, add, subtract as default };

// or, you can do this
export default subtract;
