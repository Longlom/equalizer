import { Button, Chip, TextField } from "@material-ui/core";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
import React, { useState } from "react";
const FileLoader = (props) => {
  const { sourceNode, url, setUrl, setPlayerState } = props;
  const [inputUrl, setInputUrl] = useState("");
  const handleChange = async (event) => {
    setInputUrl(event.target.value);
  };
  const handleClick = () => {
    setUrl(inputUrl);
    setInputUrl("");
  };
  const handleDelete = () => {
    setUrl("");
    setPlayerState("suspended");
    sourceNode.bufferSourceNode.stop();
    sourceNode.oscillatorNode.stop();
  };
  const getFileName = (url) => {
    const arr = url.split("/");
    return arr.slice(-1)[0];
  };
  return (
    <div style={{ display: "flex", gap: "1em" }}>
      {url !== "" ? (
        <Chip
          icon={<QueueMusicIcon />}
          label={getFileName(url)}
          onDelete={handleDelete}
        />
      ) : (
        <>
          <TextField
            autoFocus
            value={inputUrl}
            fullWidth
            size="small"
            variant="outlined"
            onChange={(e) => handleChange(e)}
          />
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            Import
          </Button>
        </>
      )}
    </div>
  );
};

export default FileLoader;
