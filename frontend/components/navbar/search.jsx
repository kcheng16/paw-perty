import React from "react";
import ResultsIndexItem from "./results_index_item";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    }
    
    this.updateSearch = this.updateSearch.bind(this);
    this.closeSearch = this.closeSearch.bind(this);
  }

  updateSearch() {
    return (event) => {
      // this.props.searchUsers({ searchValue: event.target.value});
      this.setState({ searchValue: event.target.value });
    }
  }
  
  closeSearch(event) {
    event.preventDefault();
    this.setState({ searchValue: "" });
    this.props.clearSearch();
  }

  render() {
    let { searchResults } = this.props;

    return (
      <div className="search-bar">
        <input
          type="text"
          onChange={this.updateSearch()}
          placeholder="Search..."
          value={this.state.searchValue}
        />

        {this.state.searchValue.length > 0 ? (
          <>
            <div className="clear-results-background" onClick={this.closeSearch}></div>
            <div className="results-background" onClick={this.closeSearch}></div>
          </>
        ) : null}

        {searchResults.length === 0 ? null : (
          <div className="results-index">
            <ul>
              {searchResults.map((listing, idx) => {
                return (
                  <ResultsIndexItem
                    key={idx}
                    listing={listing}
                    closeSearch={this.closeSearch}
                  />
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }

}