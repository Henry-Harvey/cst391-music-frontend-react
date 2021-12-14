import React from "react";

class Card extends React.Component {
  handleAlbumClick = (event) => {
    this.props.selectAlbum(this.props.id);
  };

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={"/images/" + this.props.image_name}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <span
            href="#"
            onClick={this.handleAlbumClick}
            className="btn btn-primary"
          >
            {this.props.buttonText}
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
