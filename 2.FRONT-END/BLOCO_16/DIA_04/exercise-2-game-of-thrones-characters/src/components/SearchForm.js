import React from 'react';
// importe o connect do pacote 'react-redux'
import propTypes from 'prop-types';
// importe a ação oriunda do thunk
import './SearchForm.css';
import requestAPIAction from '../actions/requestAPIAction';
import { connect } from 'react-redux';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const { searchCharacter } = this.props;

  this.setState({
    inputText: '',
    characterSearched: inputText,
  })
  searchCharacter(inputText);
}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form onSubmit={this.submitName}>
        <h1>Type a character below:</h1>
        <input onChange={this.handleChange} 
        placeholder="Enter Character"
        value={inputText}
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

const mapDispatchToProps = (dispatch) => ({
  searchCharacter: (name) => dispatch(requestAPIAction(name)),
})

export default connect(null, mapDispatchToProps)(SearchForm);

SearchForm.propTypes = {
  searchCharacter: propTypes.func.isRequired,
}
