import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };

  static propTypes = {
    setAlert: PropTypes.func.isRequired,
    searchPokemon: PropTypes.func.isRequired,
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please enter something...', 'light');
    } else {
      this.props.searchPokemon(this.state.text);

      this.setState({ text: '' });
    }
  };

  render() {
    const { showClear, clearPokemon } = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Search Pokemon..."
            value={this.state.text.toLowerCase()}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-dark btn-block"
          />
        </form>
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearPokemon}>
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
