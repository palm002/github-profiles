import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';


class App extends React.Component {
  state = { user: [] }

  onSearchSubmit = async user => {
    const response = await axios.get(`https://api.github.com/users/${user}`)
  
    console.log(response.data);
    this.setState({ user: response.data })
  };

  render() {
    return (
      <div className="container-fluid">
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* <RepoList /> */}
      </div>
    );
  }
}

export default App;
