import React from "react";
import SearchForm from "./SearchForm";
import Albums from "./Albums";
import Navbar from "./Navbar";
import NewAlbum from "./NewAlbum";
import Album from "./Album";
import EditAlbum from "./EditAlbum";
import "./App.css";
// import albums from "./albums.json";
import dataSouce from "./dataSource";
import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class App extends React.Component {
  state = {
    albums: [],
    searchTerm: "",
    selectedAlbumIndex: -1,
  };

  componentDidMount() {
    this.loadAlbums();
  }

  loadAlbums = async () => {
    const response = await dataSouce.get("/albums");
    this.setState({ albums: response.data });
  };

  updateSearchResults = (term) => {
    this.setState({
      searchTerm: term,
    });
  };

  selectAlbum = (id) => {
    for (var i = 0; i < this.state.albums.length; i++) {
      if (this.state.albums[i].id === id) {
        this.setState({
          selectedAlbumIndex: i,
        });
        history.push("/album/" + id);
      }
    }
  };

  render() {
    return (
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/albums"
            render={() => {
              return (
                <div>
                  <div className="container">
                    <SearchForm
                      updateSearchResults={this.updateSearchResults}
                    />
                  </div>
                  <div className="container">
                    <Albums
                      albums={this.state.albums}
                      searchTerm={this.state.searchTerm}
                      selectAlbum={this.selectAlbum}
                    />
                  </div>
                </div>
              );
            }}
          />
          <Route
            exact
            className="container"
            path="/new"
            render={() => {
              return (
                <div>
                  <NewAlbum history={history} loadAlbums={this.loadAlbums} />
                </div>
              );
            }}
          />
          <Route
            exact
            className="container"
            path="/album/:index"
            render={() => {
              return (
                <div>
                  <Album
                    album={this.state.albums[this.state.selectedAlbumIndex]}
                    history={history}
                  />
                </div>
              );
            }}
          />
          <Route
            exact
            className="container"
            path="/album/:index/edit"
            render={() => {
              return (
                <div>
                  <EditAlbum
                    album={this.state.albums[this.state.selectedAlbumIndex]}
                    history={history}
                    loadAlbums={this.loadAlbums}
                  />
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
