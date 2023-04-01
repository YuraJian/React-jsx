import React, { Component } from "react";
import { UserCard } from "./UserCard";
import { UserCardText } from "./UserCardText";

export default class User extends Component {
  constructor({ name, surname, age }) {
    super();
    this.state = {
      name: name,
      surname: surname,
      age: age,
    };
  }

  render() {
    return (
      <div>
        <UserCard
          name={this.state.name}
          surname={this.state.surname}
          age={this.state.age}
        />
        <UserCardText {...this.state} />
      </div>
    );
  }
}
