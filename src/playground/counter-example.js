
/// here we are talking about componenet state, instead of calling the function everytime we make a change to re-render





class Counter extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = { // here, we are defining all the states that we want to track
      count: 0 // step 1: here, we are setting up the default state object that we wish to track
    };
  }
  componentDidMount(){
    const stringNumber = localStorage.getItem('count')
    const number = parseInt(stringNumber, 10)

    if(!isNaN(number)) {
      this.setState(() => {
        return{
          count: number
        }
      });
  }

  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.count !== this.state.count) {
      const number = this.state.count
      localStorage.setItem( 'count' , number)
    }


  }
  handleAddOne(){
    // step 3: you cant just manually update the object or set this.state.count ++, you must do the following
    this.setState( (previousState) => { // setState takes a function as an argument, and this function defines the updates to be made, and takes the previous state of the object as an argument
      return {
        count: previousState.count + 1 // here, we change the state based on an event
      }
    });
  }
  handleMinusOne(){
    this.setState( (prevState) => {
      return {
        count: prevState.count -1
      }
    });
  }
  handleReset(){
    this.setState( () => {
      return {
        count: 0
      }
    });
  }
  render(){
    return (
      <div>
        <h1>Count: {this.state.count} </h1> {/*step 2: we are rendering the default state values*/}
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  Count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));










// let count = 0;
//
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
//
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//   </div>
// );



// ReactDOM.render(templateTwo, appRoot );  // renders things to the DOM



//JSX does not have built-in data-binding: you have to rerender it to the screen by running reactDOM.render again after the data has changed
// so we render when the app first loads, then when we manipulate our count variable, in the functions wriutten above
// it doesnt actually re-render the whole thing, only what has changed!!
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();
