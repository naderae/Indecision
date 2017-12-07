







class VisibilityToggle extends React.Component{
  constructor(props){
    super(props);
    this.handleToggleVisibilty = this.handleToggleVisibilty.bind(this);

    this.state = {
      toggle: false
    };
  }
  handleToggleVisibilty(){

    this.setState ((prevState) => { // when you try to use 'this' inside a function, ('this' is always undefined in seperate functions) 'this' keyword doesnt get transfered, and thus we have to use .bind() to reinstill the original context. this is done above in the constructor function, wehere we set the function to have the same context.
      return {
        toggle: !prevState.toggle
      }
    })
  }
  render(){
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibilty}>{this.state.toggle === false ? "Show Details" : "Hide Details"}</button>
        <p>{this.state.toggle === false ? "" : "These are some arbitrary details"}</p>
      </div>
    );
  }
}
ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));















//
// const appRoot = document.getElementById('app');
//
// let open = false;
//
// const toggle = () => {
//   open = !open
//   render();
// };
//
// const render = () => {
//   const template = (
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={toggle}>{open === false ? "Show Details" : "Hide Details"}</button>
//     <p>{open === false ? "" : "These are some arbitrary details"}</p>
//     <h3></h3>
//     </div>
//   )
//   ReactDOM.render(template, appRoot);
// };
//
// render();
