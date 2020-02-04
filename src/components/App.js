import React from 'react';
import SearchWord from './SearchWord';
import unsplash from '../api/unsplash';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="container" style={{ margin: '50px' }}>
        <SearchWord onSubmit={this.onSearchSubmit} />
        <h1>{this.state.images.length}</h1>
      </div>
    );
  }
}

export default App;
