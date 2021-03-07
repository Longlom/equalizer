import { useState } from "react";
import { Slider, makeStyles, Typography } from "@material-ui/core/";

const Panel = ({ frequency, gainNode }) => {
  const classes = useStyles();
  const [volume, setVolume] = useState(1);
  const handleSlide = (event, newValue) => {
    setVolume(newValue);
    gainNode.gain.value = newValue;
  };
  const valueFrequency = (frequency) => {
    if (frequency > 1000) return Math.round(frequency / 1000) + "kHz";
    else return frequency + "Hz";
  };
  return (
    <div className={classes.panel}>
      <Typography align="center" color="textSecondary" variant="caption">
        {valueFrequency(frequency)}
      </Typography>
      <Slider
        className={classes.slider}
        orientation="vertical"
        min={0}
        max={2}
        step={0.02}
        value={volume}
        onChange={handleSlide}
      />
      <Typography align="center" variant="body2">
        {Math.round(50 * volume) - 50 + "dB"}
      </Typography>
    </div>
  );
};
const useStyles = makeStyles({
  panel: {
    height: "15em",
    width: "3em",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    alignItems: "center",
  },
});
export default Panel;
