/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "./App.css";
import { Albums } from "./Task 1/components/Albums";
import { AlbumsHook } from "./Task 2/components/AlbumsHook";
import Square from "./Task 3/Task 3.1/components/SquareComponent";
import VideoPlayer from "./Task 3/Task 3.2/components/videoPlayer";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>Task 1</h2>
        <Albums />
        <h2>Task 2</h2>
        <AlbumsHook />
        <h2>Task 3.1</h2>
        <Square />
        <h2>Task 3.2</h2>
        <VideoPlayer />
      </div>
    );
  }
}
