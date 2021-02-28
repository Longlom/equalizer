import { Fab, makeStyles, Tooltip } from "@material-ui/core/";
import { useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
const Action = () => {
  const classes = useStyles();
  const [playing, setPlaying] = useState(false);
  const handlePlaying = () => {
    setPlaying(!playing);
  };
  const handleStop = () => {
    setPlaying(false);
  };
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
          disabled={!playing}
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
    gap: "1em",
  },
});

export default Action;
