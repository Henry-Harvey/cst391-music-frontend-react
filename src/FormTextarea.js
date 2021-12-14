import React from "react";

class FormTextarea extends React.Component {
  handleChange = (event) => {
    this.props.changeData(event.target.value);
  };

  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <textarea
          type="text"
          className="form-control"
          id={this.props.id}
          placeholder={"Enter " + this.props.label}
          onChange={this.handleChange}
          onBlur={this.handleChange}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default FormTextarea;
