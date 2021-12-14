import axios from "axios";
import React from "react";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import NewTrack from "./NewTrack";

class NewAlbum extends React.Component {
  state = {
    id: -1,
    title: "",
    artist: "",
    description: "",
    year: "",
    tracks: [],
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
    console.log("Submit", this.state);
    this.saveAlbum(this.state);
  };

  saveAlbum = async (album) => {
    axios
      .post("http://localhost:3000/albums", album)
      .then((result) => {
        console.log("Create Album result", result);
        alert("Album Creation Successful");
        this.props.loadAlbums();
        this.props.history.push("/albums");
      })
      .catch(() => {
        alert("Album Creation Failed");
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
        <h1>Create New Album</h1>
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

export default NewAlbum;