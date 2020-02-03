import React from 'react';

class SearchWord extends React.Component {
  state = { input: '' };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <div className="container">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>User Input</label>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchWord;
