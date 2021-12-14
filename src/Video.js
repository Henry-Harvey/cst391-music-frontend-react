import React from "react";

class Video extends React.Component {
  render() {
    return (
      <div>
        <h5>{this.props.track?.title} Video</h5>
        <p>{this.props.track?.video_url}</p>
      </div>
    );
  }
}

export default Video;
