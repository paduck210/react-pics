import React from 'react';
import axios from 'axios';
import SearchWord from './SearchWord';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: { Authorization: process.env.REACT_APP_UNSPLASH_ID },
    });
  }

  render() {
    return (
      <div className="container" style={{ margin: '50px' }}>
        <SearchWord onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
