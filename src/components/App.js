import React from 'react';
import axios from 'axios';

import Header from './Header';
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
          // set state on completed requests
          this.setState({ user: userRes.data, repos: repoRes.data });
        })
      ) //TODO: handle errors gracefully, test , dockerise, serve
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
          console.log(error.message);
        }
      });
  };

  render() {
    return (
      <div
        className="container-fluid"
        style={{
          backgroundColor: `tomato`,
          minHeight: `100vh`
        }}
      >
        <div className="row">
          <div className="col-md-12">
            <Header />
          </div>
          <div className="mx-auto col-sm-3 col-md-3">
            <SearchBar onSubmit={this.onSearchSubmit} />
          </div>
          <div className="col-sm-12 col-md-12">
            <PageView user={this.state.user} repos={this.state.repos} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
