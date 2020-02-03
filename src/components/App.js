import React from 'react';
import SearchWord from './SearchWord';

class App extends React.Component {
  state = { data: '' };

  callbackFunction = childData => {
    this.setState({ data: childData });
  };

  render() {
    return (
      <div className="container" style={{ margin: '50px' }}>
        <SearchWord onSubmit={this.callbackFunction} />
        <h1>{this.state.data}</h1>
      </div>
    );
  }
}

export default App;
