import React from "react";
import Song from "./Song";

const SongList = ({ songs }) => {
  const songNodes = songs.map((song) => {
    return (
      <li key={song.id.attributes["im:id"]}>
        {song["im:artist"].label} - {song["im:name"].label}
      </li>
    );
  });
  return <ul>{songNodes}</ul>;
};

export default SongList;