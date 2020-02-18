import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';
import PageView from './PageView';

class App extends React.Component {
  state = { user: {}, repos: [] };

  onSearchSubmit = async user => {
    await axios
      .all([
        axios.get(`https://api.github.com/users/${user}`),
        axios.get(`https://api.github.com/users/${user}/repos`)
      ])
      .then(
        axios.spread((userRes, repoRes) => {
          // completed requests
          // TODO: confirm if this is the correct way to do things or outside of promises
          this.setState({ user: userRes.data, repos: repoRes.data });
        })
      )
      .catch(error => {
        // catch & handle error here
        console.log(error);

        if (error.response) {
          // show friendly msg to user
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // this block is for when there is no response coming back
          console.log(error.response);
        } else {
          // other error -- in the setting up the request
          console.log(error.message)
        }
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <PageView user={this.state.user} repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
