
class IndecisionApp extends React.Component{
  constructor(props){
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: []
    }
  }
  handleDeleteOptions(){
    this.setState(() => {
      return {
        options: []
      };
    })
  }
  handlePick(){
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option){

    if (!option) {
      return "You Cannot Leave this Field Blank"
    } else if (this.state.options.indexOf(option) > -1) {
      return "This Item Already Exists"
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }


  render(){
    const title = 'Indecision';
    const subtitle = 'Put Your Life in the Hands of a Computer';
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    )
  }
}

class Action extends React.Component{

  render(){
    return(
      <div>
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
          >What Should I do
        </button>
      </div>
    )
  }
}

class Options extends React.Component{

  render(){
    return(
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map( (option) => {
            return <Option key={option} optionText={option}/> // here you are returning an instance of option, and setting an optionText property in order to access the instance in the option component
          })
        }

      </div>
    )
  }
}

class Option extends React.Component{
  render() {
    return(
      <div>
        <p>{this.props.optionText}</p>
      </div>
    )
  }
}

class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)

    this.state = {
      error: undefined
    };
  }

  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => {
      return{
        error: error
      }
    });
  }



  render(){
    return(
      <div>
        <h3>{this.state.error}</h3>
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' ></input>
          <button>Add Option</button>
        </form>

      </div>
    )
  }
}


// when you have simple components that dont deal with state, you can just create a stateless functional component
// this stateless funtional componenet, is a function, and is exactly like the render method
const User = (props) => { // here, you cannot use 'this' and so you have to pass in 'props' as an argument
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
};
// you cant use state, but you can use props, the same way you use others






ReactDOM.render(<User name='Nader' age={24}/>, document.getElementById('app'));
