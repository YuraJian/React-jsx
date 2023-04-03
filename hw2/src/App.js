import React, { Component } from "react";
import User from "./Task 1/components/User";
import Form from "./Task 2/components/Form";
import MyComponent from "./Task 3/components/component";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Task 1</h2>
        <User name={"Yura"} surname={"Demianchuk"} age={17} />
        <h2>Task 2</h2>
        <Form />
        <h2>Task 3</h2>
        <MyComponent />
      </div>
    );
  }
}
