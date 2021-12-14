import React from "react";
import Tracks from "./Tracks";
import Lyrics from "./Lyrics";
import Video from "./Video";

class Album extends React.Component {
  state = {
    selectedTrackIndex: 0,
  };

  selectTrack = (index) => {
    this.setState({
      selectedTrackIndex: index,
    });
  };

  handleAlbumEdit = () => {
    this.props.history.push("/album/" + this.props.album?.id + "/edit");
  };

  render() {
    console.log(this);
    return (
      <div>
        <h2>Album Details for {this.props.album?.title}</h2>
        <div className="row">
          <div className="col col-sm-3">
            <div className="card">
              <img
                src={"/images/" + this.props.album.image_name}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{this.props.album?.title}</h5>
                <p className="card-text">
                  By {this.props.album?.artist} - {this.props.album?.year}
                </p>
                <p className="card-text">{this.props.album?.description}</p>
                <div className="list-group">
                  <Tracks
                    tracks={this.props.album.tracks}
                    selectTrack={this.selectTrack}
                  />
                </div>
                <span
                  href="#"
                  onClick={this.handleAlbumEdit}
                  className="btn btn-primary"
                >
                  Edit
                </span>
              </div>
            </div>
          </div>
          <div className="col col-sm-9">
            <div className="card">
              <Lyrics
                track={this.props.album.tracks[this.state.selectedTrackIndex]}
              />
            </div>
            <div className="card">
              <Video
                track={this.props.album.tracks[this.state.selectedTrackIndex]}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
