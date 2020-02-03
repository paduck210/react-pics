import React from 'react';
import SearchWord from './SearchWord';

class App extends React.Component {
  render() {
    return (
      <div className="container" style={{ margin: '50px' }}>
        <SearchWord />
      </div>
    );
  }
}

export default App;
