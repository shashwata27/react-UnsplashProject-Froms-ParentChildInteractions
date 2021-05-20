import React from "react";

export default class ImageList extends React.Component {
  render() {
    const ImgList = this.props.img.map((ig, index) => (
      <img src={ig.urls.regular} key={index} alt={ig.alt_description} />
    ));
    return <div>{ImgList}</div>;
  }
}
