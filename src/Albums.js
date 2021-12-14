import React from "react";
import Card from "./Card";

class Albums extends React.Component {
  render() {
    return this.props.albums.map((album) => {
      if (
        album.title
          .toLowerCase()
          .includes(this.props.searchTerm.toLowerCase()) ||
        album.description
          .toLowerCase()
          .includes(this.props.searchTerm.toLowerCase()) ||
        this.props.searchTerm === ""
      ) {
        return (
          <Card
            key={album.id}
            id={album.id}
            title={album.title}
            description={album.description}
            image_name={album.image_name}
            buttonText="OK"
            selectAlbum={this.props.selectAlbum}
          />
        );
      } else {
        return null;
      }
    });
  }
}

export default Albums;
