import React, { Component } from "react";
import User from "./Task 1/components/User";
import Form from "./Task 2/components/Form";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Task 1</h2>
        <User name={"Yura"} surname={"Demianchuk"} age={17} />
        <h2>Task 2</h2>
        <Form />
      </div>
    );
  }
}
