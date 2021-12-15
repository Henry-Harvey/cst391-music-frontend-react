import axios from "axios";
import React from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import NewTrack from "./NewTrack";

class EditAlbum extends React.Component {
  state = {
    id: this.props.album.id,
    title: this.props.album.title,
    artist: this.props.album.artist,
    description: this.props.album.description,
    year: this.props.album.year,
    tracks: this.props.album.tracks,
  };

  changeTitle = (title) => {
    this.setState({ title: title });
  };

  changeArtist = (artist) => {
    this.setState({ artist: artist });
  };

  changeDescription = (description) => {
    this.setState({ description: description });
  };

  changeYear = (year) => {
    this.setState({ year: year });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Edit", this.state);
    this.editAlbum(this.state);
  };

  editAlbum = async (album) => {
    axios
      .put("https://cst391-music-backend.herokuapp.com/albums", album)
      .then((result) => {
        console.log("Edit Album result", result);
        alert("Album Edit Successful");
        this.props.loadAlbums();
        this.props.history.push("/albums");
      })
      .catch(() => {
        alert("Album Edit Failed");
      });
  };

  addTrack = () => {
    this.setState({
      tracks: this.state.tracks.concat({
        id: -1,
        title: "",
        number: this.state.tracks.length + 1,
        lyrics: "",
      }),
    });
  };

  deleteTrack = () => {
    this.setState({
      tracks: this.state.tracks.slice(0, -1),
    });
  };

  cancel = () => {
    this.props.history.push("/albums");
  };

  changeTrackTitle = (trackNumber, title) => {
    var s = this.state;
    s.tracks[trackNumber - 1].title = title;
    this.setState(s);
  };

  changeTrackLyrics = (trackNumber, lyrics) => {
    var s = this.state;
    s.tracks[trackNumber - 1].lyrics = lyrics;
    this.setState(s);
  };

  render() {
    return (
      <div>
        <h1>Edit Album</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="title"
            label="Title"
            changeData={this.changeTitle}
            value={this.state.title}
          />
          <FormInput
            id="artist"
            label="Artist"
            changeData={this.changeArtist}
            value={this.state.artist}
          />
          <FormTextarea
            id="description"
            label="Description"
            changeData={this.changeDescription}
            value={this.state.description}
          />
          <FormInput
            id="year"
            label="Year"
            changeData={this.changeYear}
            value={this.state.year}
          />
          {this.state.tracks.map((track) => {
            return (
              <NewTrack
                track={track}
                changeTrackTitle={this.changeTrackTitle}
                changeTrackLyrics={this.changeTrackLyrics}
              />
            );
          })}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <span className="btn btn-primary" onClick={this.cancel}>
            Cancel
          </span>
        </form>
        <br />
        <span className="btn btn-primary" onClick={this.addTrack}>
          Add Track
        </span>
        <span className="btn btn-primary" onClick={this.deleteTrack}>
          Delete Track
        </span>
      </div>
    );
  }
}

export default EditAlbum;
