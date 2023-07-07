import React from "react";

export const AlbumsContext = React.createContext();

export class AlbumsProvider extends React.Component {
  constructor() {
    super();
    this.BASE_URL = "https://jsonplaceholder.typicode.com/albums";
  }

  state = {
    error: ``,
    albums: [],
    index: [],
  };

  componentDidMount = async () => {
    fetch(this.BASE_URL)
      .then((response) => {
        if (!response.ok) {
          this.setState({ error: `Can't collect data from server` });
          throw new Error(`Can't collect data from server`);
        }
        return response.json();
      })
      .then((albums) => {
        this.setState({ albums: albums, error: `` });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <AlbumsContext.Provider value={this.state}>
        {this.props.children}
      </AlbumsContext.Provider>
    );
  }
}
