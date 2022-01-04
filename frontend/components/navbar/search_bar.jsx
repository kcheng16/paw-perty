import React from "react";
import { withRouter } from "react-router";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: 'all' };
  }

  search() {
    this.props.history.location.pathname = "/"
    this.props.history.push(`search/${this.state.city.toUpperCase()}`)
  }

  handleChange(e) {
      this.setState({ city: e.target.value })
      if(e.target.value === ''){
        this.setState({ city: 'all' })
      }
  }

  render() {
    return (
      <form className="search" onSubmit={() => this.search()}>
        <label className="searchlabel">
          Location:
          <br />
          <input
            onChange={(e) => this.handleChange(e)}
            type="search"
            className="inputs"
            placeholder="city"
          />
        </label>
        <button >
search icon        </button>
      </form>
    );
  }
}

export default withRouter(SearchBar);