import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from  './Header';
import Action from  './Action';
import OptionModal from './OptionModal';



export default class IndecisionApp extends React.Component {

  state = {
    options: [],
    selectedOption: undefined
  };
  // here we define a method that the children can use so that they manipulate the data, by passing it in as a prop!!
  handleClearModal = () => {
    this.setState(() => {
      return {
        selectedOption: undefined
      };
    });
  }
  handleDeleteOptions = () => {
    this.setState(() => { // again, if you eant to use this inside of a function besides render, we have to bind the function to the current state, as is done above
      return {
        options: []
      };
    });
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => { // again, if you eant to use this inside of a function besides render, we have to bind the function to the current state, as is done above
      return {
        options: prevState.options.filter((option) => {
          return optionToRemove !== option
        })
      }
    });
  }

  handlePick = () => {

    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];

    this.setState(() => {
      return{
        selectedOption: option
      }
    });
  };

  handleAddOption = (option) => {
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




  render() {

    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
              />
            <AddOption
              handleAddOption={this.handleAddOption}
            />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearModal = {this.handleClearModal}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}
