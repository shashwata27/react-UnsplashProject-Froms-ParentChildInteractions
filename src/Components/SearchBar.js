import React from "react";
import "../css/searchBar.css";

class SearchBar extends React.Component {
  state = { term: "" };
  // on-element-event naming
  onInputChange = (e) => {
    this.setState({ term: e.target.value.toUpperCase() });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    // props.onSubmit is props.App.onFromSubmit
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui container topOfPage">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="SearchThings">Search</label>
            <div className="ui icon input loading">
              <input
                type="text"
                id="SearchThings"
                name="SearchKeywords"
                placeholder="Search..."
                value={this.state.term} //this is how the input is controlled
                onChange={this.onInputChange}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
