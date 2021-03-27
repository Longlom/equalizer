import { Button, Chip } from "@material-ui/core";
import QueueMusicIcon from "@material-ui/icons/QueueMusic";
const FileLoader = (props) => {
  const { sourceNode, file, setFile, setPlayerState } = props;

  const handleDelete = () => {
    setFile(null);
    setPlayerState("suspended");
    sourceNode.bufferSourceNode.stop();
    sourceNode.oscillatorNode.stop();
  };
  const handleChangeFile = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <div style={{ display: "flex", gap: "1em" }}>
      {file !== null ? (
        <Chip
          color="primary"
          variant="outlined"
          icon={<QueueMusicIcon />}
          label={file.name}
          onDelete={handleDelete}
        />
      ) : (
        <Button
          variant="contained"
          color="secondary"
          component="label"
          size="small"
        >
          Upload Audio File
          <input
            hidden
            type="file"
            onChange={(e) => {
              handleChangeFile(e);
            }}
          />
        </Button>
      )}
    </div>
  );
};

export default FileLoader;
