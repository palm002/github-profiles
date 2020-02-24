import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

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
      )
      .catch(error => {
        if (error.response.status === 404) {
          Swal.fire({
            title: 'Oops!',
            text: `User ${user} does not exist`,
            icon: 'error'
          });
        } else if (error.response.status === 403) {
          // when there is no response coming back
          Swal.fire({
            title: 'Oh no!',
            text: `${error.response.data.message}`,
            icon: 'error'
          });
        } else {
          // other error -- in the setting up the request
          Swal.fire({
            title: 'Something went wrong!',
            text: `${error.message}`,
            icon: 'error'
          });
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
