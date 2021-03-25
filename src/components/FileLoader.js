import { Button, Chip, TextField } from "@material-ui/core";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
const FileLoader = (props) => {
  const { sourceNode, file, setFile, setPlayerState } = props;

  const handleDelete = () => {
    setFile(null);
    setPlayerState("suspended");
    sourceNode.bufferSourceNode.stop();
    sourceNode.oscillatorNode.stop();
  };

  return (
    <div style={{ display: "flex", gap: "1em" }}>
      {file !== null ? (
        <Chip
          icon={<QueueMusicIcon />}
          label={file.name}
          onDelete={handleDelete}
        />
      ) : (
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
      )}
    </div>
  );
};

export default FileLoader;
