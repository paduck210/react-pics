import React from 'react';
import axios from 'axios';
import SearchWord from './SearchWord';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: { Authorization: process.env.REACT_APP_UNSPLASH_ID },
    });
    // console.log(this);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="container" style={{ margin: '50px' }}>
        <SearchWord onSubmit={this.onSearchSubmit} />
        <h1>{this.state.images}</h1>
      </div>
    );
  }
}

export default App;
