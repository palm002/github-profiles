import React from 'react';

class SearchBar extends React.Component {
  state = { user: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.user);

    // set search back to blank upon submit
    this.setState({ user: '' });
  };

  render() {
    return (
      <div className="" style={{ textAlign: `center` }}>
        <form className="" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            placeholder="Search User"
            value={this.state.user}
            onChange={e => this.setState({ user: e.target.value })}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
