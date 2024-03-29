/* eslint-disable no-unused-vars */
import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    surname: "",
    error: "",
  };

  validator = async () => {
    const userName = this.state.name;
    const userSurname = this.state.surname;

    if (userName.length < 3 || userSurname.length < 3) {
      const errorText = "Something is wrong with your data ;(";
      await this.setState({ error: errorText });
      alert(this.state.error);
      return;
    }

    alert(`Welcome ${this.state.name} ${this.state.surname}`);
    this.setState({ error: "" });
  };

  onSubmit = (event) => {
    event.preventDefault();

    this.validator();

    this.setState({ name: "", surname: "" });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value.trim(),
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.onChange}
        ></input>
        <input
          placeholder="Surname"
          name="surname"
          value={this.state.surname}
          onChange={this.onChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
