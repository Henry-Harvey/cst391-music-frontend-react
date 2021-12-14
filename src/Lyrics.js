import React from "react";

class Lyrics extends React.Component {
  render() {
    return (
      <div>
        <h5>{this.props.track?.title} Lyrics</h5>
        <p>{this.props.track?.lyrics}</p>
      </div>
    );
  }
}

export default Lyrics;
