import { Fab, makeStyles, Tooltip } from "@material-ui/core/";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
import { useAudioSchema } from "context/AudioSchema";

const Control = (props) => {
  const classes = useStyles();
  const { audioContext, listNodes } = useAudioSchema();
  const { url, sourceNode, setSourceNode, playerState, setPlayerState } = props;
  const { shaperNode, vibratoNode, filterNodes } = listNodes;

  const handlePlayerState = async () => {
    if (playerState === "running") {
      audioContext.suspend();
      setPlayerState("pause");
    } else if (playerState === "pause") {
      audioContext.resume();
      setPlayerState("running");
    } else {
      const bufferSourceNode = new AudioBufferSourceNode(audioContext);
      const oscillatorNode = new OscillatorNode(audioContext, {
        type: "sine",
        frequency: 15,
      });
      setSourceNode({ bufferSourceNode, oscillatorNode });

      oscillatorNode.connect(shaperNode).connect(vibratoNode.gain);
      bufferSourceNode.connect(filterNodes[0]);

      oscillatorNode.start();
      bufferSourceNode.start();
      const response = await fetch(url);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      bufferSourceNode.buffer = audioBuffer;
      audioContext.resume();
      setPlayerState("running");
    }
  };

  const handleStop = () => {
    sourceNode.oscillatorNode.stop();
    sourceNode.bufferSourceNode.stop();
    setPlayerState("suspended");
  };

  return (
    <div className={classes.btns}>
      <Tooltip title={playerState === "running" ? "Pause" : "Play"}>
        <Fab
          size="small"
          color="primary"
          aria-label="play"
          disabled={url === ""}
          onClick={() => handlePlayerState()}
        >
          {playerState === "running" ? <PauseIcon /> : <PlayArrowIcon />}
        </Fab>
      </Tooltip>
      <Tooltip title="Stop playing">
        <Fab
          size="small"
          color="secondary"
          aria-label="stop"
          disabled={url === ""}
          onClick={handleStop}
        >
          <StopIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};
const useStyles = makeStyles({
  btns: {
    display: "flex",
    gap: "0.5em",
  },
});

export default Control;
