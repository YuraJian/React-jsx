import React, { Component } from "react";

export default class MyComponent extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      value: 0,
    };

    
  }

  onClick = () => {
    let val = this.state.value;
    val++;
    this.setState({ value: val });
  };

  componentDidMount() {
    console.log("Component did mount");
    // componentDidMount спрацьовує один раз разом з constructor, щоб відобразити щось на сторінці
    // Відпрацьовує в такому порядку:
    // 1. Спочатку спрацьовує конструктор
    // 2. Викликається метод render
    // 3. Викликається метод componentDidMount
  }

  componentDidUpdate() {
    console.log("Component did update");
    // componentDidUpdate спрацьовує після кожного змінення state
    // Відпрацьовує в такому порядку:
    // 1. При натисканні на кнопку спрацьовує оброблювач подій onClick який використовує метод onClick
    // 2. В методі onClick змінюється state за допомогою setState
    // 3. Викликається метод render
    // 4. Викликається метод componentDidUpdate, так як ми змінила
  }

  render() {
    console.log('render')
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={this.onClick}>Click Me!</button>
      </div>
    );
  }
}