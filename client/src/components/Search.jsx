import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={event => this.props.handleSubmit(event, this.state.value)}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Search....."
          />
          <input type="submit" value="GO!" />
        </form>
      </div>
    );
  }
}

export default Search;
