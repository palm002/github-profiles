import React from 'react';

class SearchBar extends React.Component {
  state = { user: '' };

  onFormSubmit = event => {
    event.preventDefault();
    console.log('STATE: ', this.state.user)

    this.props.onSubmit(this.state.user);

    // set search back to blank upon submit
    this.setState({ user: '' })
  };

  render() {
    return (
      <form className="" onSubmit={this.onFormSubmit}>
        <div className="">
          <placeholder>Search User</placeholder>
          <input
            type="text"
            placeholder='Search User'
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          />
        </div>
      </form>
    );
  }
}

export default SearchBar;
