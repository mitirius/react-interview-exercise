import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './AddFriendInput.css';

class AddFriendInput extends Component {

  render() {
    return (
      <div>
        <input type="text" autoFocus="true" className={ classnames('form-control', styles.addFriendInput) } placeholder="Type the name of a friend" value={ this.state.name } onChange={ this.handleNameChange }
        />
        <form className='radios'>
          <div className='form-group'>
            <label className="radio-inline">
              <input type="radio" name="gender" id="maleRadio" value='Male' onChange={ this.handleGenderChange } checked={ this.state.gender === 'Male' } /> Male
            </label>
            <label className="radio-inline">
              <input type="radio" name="gender" id="femaleRadio2" value='Female' onChange={ this.handleGenderChange } checked={ this.state.gender === 'Female' } /> Female
            </label>
            <button type="submit" className="btn btn-default" aria-expanded="false" onClick={ this.handleClick }>Submit</button>
          </div>
        </form>
      </div>
      );
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      name: this.props.name || '',
      gender: ''
    };
  }

  handleNameChange = e => this.setState({
    name: e.target.value
  });

  handleGenderChange = e => this.setState({
    gender: e.target.value
  });

  handleClick = e => {
    const name = this.state.name.trim();
    const gender = this.state.gender;

    if (name !== '' && gender !== '') {
      this.props.addFriend(name, gender);
      this.setState({
        name: '',
        gender: ''
      });
    } else {
      alert('Please choose gender...');
    }
    e.preventDefault();
  }
}

AddFriendInput.propTypes = {
  addFriend: PropTypes.func.isRequired
};

export default AddFriendInput;