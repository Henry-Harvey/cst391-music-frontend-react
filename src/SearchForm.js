import React from "react";
import "./App.css";

class SearchForm extends React.Component {
  state = {
    term: "",
  };

  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updateSearchResults(this.state.term);
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="search-term">Search Box</label>
            <input
              type="text"
              className="form-control"
              id="search-term"
              placeholder="Enter here"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
