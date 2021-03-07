import { Fab, makeStyles, Tooltip } from "@material-ui/core/";
import { useEffect, useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import { useAudioContext } from "context/audioContext";

const Action = () => {
  const classes = useStyles();
  const { audioContext, audioElement } = useAudioContext();

  const [playing, setPlaying] = useState(false);

  const handlePlaying = () => {
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }
    if (playing) audioElement.pause();
    else {
      audioElement.play();
    }
    setPlaying(!playing);
  };

  const handleStop = () => {
    audioElement.load();
    setPlaying(false);
  };

  useEffect(() => {
    audioElement.addEventListener("ended", () => setPlaying(false));
    return () => {
      audioElement.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return (
    <div className={classes.btns}>
      <Tooltip title={playing ? "Pause" : "Play"}>
        <Fab
          size="small"
          color="primary"
          aria-label="play"
          onClick={handlePlaying}
        >
          {playing ? <PauseIcon /> : <PlayArrowIcon />}
        </Fab>
      </Tooltip>
      <Tooltip title="Stop playing">
        <Fab
          size="small"
          color="secondary"
          aria-label="stop"
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

export default Action;
