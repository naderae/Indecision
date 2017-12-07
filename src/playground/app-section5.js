
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options  /// this changes over time, and thus we have to define it as a key-value pair in state object
    }
  }
  componentDidMount() {

    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => {
          return{
            options: options
          }
        });
      }

    } catch (e) {
      // do nothing at all
    }

  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }
  componentWillUnmount() {
    console.log('component will unmount');
  }
  // here we define a method that the children can use so that they manipulate the data, by passing it in as a prop!!
  handleDeleteOptions() {
    this.setState(() => { // again, if you eant to use this inside of a function besides render, we have to bind the function to the current state, as is done above
      return {
        options: []
      };
    });
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => { // again, if you eant to use this inside of a function besides render, we have to bind the function to the current state, as is done above
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option
        })
      }
    });
  }
  handlePick() {

    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  handleAddOption(option){
    if (!option) {
      return 'Enter Valid Value to add Item'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already Exists'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option) //wierd, but this returns undefined
      };
    });
  }


  render() {

    const subtitle = 'Put Your life in the Hands of a Computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption}
          handleDeleteOptions={this.handleDeleteOptions}
          />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}




const Header = (props) => {
  return(
    <div>
      <h1>{props.title}</h1> {/* here, we access to the props defined in the header tag above in the form a js object called props */}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

// you can provide a default prop, so if one is not defined above in the parent componenent, it ill use wtvr ins in the function
Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
          What Should I do?
      </button>
    </div>
  )
};



const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Delete All</button>
      {props.options.length === 0 && <p>Please add an Option to get started</p>}
      {
        props.options.map( (option) => {
          return <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        })
      }
    </div>
  );
};



const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
        >

      </button>
    </div>
  );
};


class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();
    const option = e.target.elements.option.value.trim(); // .trim removes extra space in the beggining and the end
    const error = this.props.handleAddOption(option); // if there is no error, it will return undefined

    this.setState(() => {
      return{
        error: error
      }
    });
    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}



ReactDOM.render(<IndecisionApp options={['Devils Den', 'Decond District']}/>, document.getElementById('app'));
// here we are overriding the default buy providing our own props
