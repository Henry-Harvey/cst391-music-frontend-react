import React from "react";

class Tracks extends React.Component {
  clickTrack = (id) => {
    for (var i = 0; i < this.props.tracks.length; i++) {
      if (this.props.tracks[i].id === id) {
        this.props.selectTrack(i);
      }
    }
  };

  render() {
    return (
      <div>
        {this.props.tracks.map((track) => {
          return (
            <li key={track.id} onClick={() => this.clickTrack(track.id)}>
              {track.title}
            </li>
          );
        })}
      </div>
    );
  }
}

export default Tracks;
