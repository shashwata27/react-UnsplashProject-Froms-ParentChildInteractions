import React from "react";
import unsplashAxios from "../api/unsplash";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { Image: [] };

  onFormSubmit = (term) => {
    unsplashAxios
      .get("/search/photos/", {
        params: {
          query: term,
        },
      })
      .then((response) => {
        this.setState({ Image: response.data.results });
      });
  };
  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onFormSubmit} />
        Found: {this.state.Image.length}
      </div>
    );
  }
}
export default App;
