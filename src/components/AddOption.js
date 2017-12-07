
import React from 'react';

// we romoved the contructor function, and replaced them with the new plugin that doesnt require contructor funtions.
export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
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
  };

  render() {
    return (
      <div>
        {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAddOption}>
          <input className='add-option__input' type='text' name='option'/>
          <button className='button'>Add Option</button>
        </form>
      </div>
    );
  }
}
