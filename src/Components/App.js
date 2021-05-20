import React from "react";
import unsplashAxios from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

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
        <ImageList img={this.state.Image} />
      </div>
    );
  }
}
export default App;
