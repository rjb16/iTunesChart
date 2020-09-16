import React, { Component } from "react";
import SongList from "../components/SongList";

class SongsContainer extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ songs: data.feed.entry }))
      .catch((error) => console.error(error));
  }

  render() {
    return (
      <>
        <div>Top 20 Songs from iTunes</div>
        <SongList songs={this.state.songs} />
      </>
    );
  }
}

export default SongsContainer;