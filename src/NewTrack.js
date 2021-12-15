import React from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";

class NewTrack extends React.Component {
  changeTitle = (title) => {
    this.props.changeTrackTitle(this.props.track.number, title);
  };

  changeLyrics = (lyrics) => {
    this.props.changeTrackLyrics(this.props.track.number, lyrics);
  };

  changeVideo_url = (video_url) => {
    this.props.changeTrackVideo_url(this.props.track.number, video_url);
  };

  render() {
    return (
      <div>
        <h3>Track {this.props.track?.number}</h3>
        <FormInput
          id="title"
          label="Title"
          changeData={this.changeTitle}
          value={this.props.track.title}
        />
        <FormTextarea
          id="lyrics"
          label="Lyrics"
          changeData={this.changeLyrics}
          value={this.props.track.lyrics}
        />
        <FormInput
          id="video_url"
          label="Video URL"
          changeData={this.changeVideo_url}
          value={this.props.track.video_url}
        />
      </div>
    );
  }
}

export default NewTrack;
