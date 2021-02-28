import { useState } from "react";
import { Slider, makeStyles, Typography } from "@material-ui/core/";

const Panel = ({ from, to }) => {
  const classes = useStyles();
  const [volume, setVolume] = useState(0);
  const handleSlide = (event, newValue) => {
    setVolume(newValue);
  };
  return (
    <div className={classes.panel}>
      <Typography align="center" color="textSecondary" variant="caption">
        {from}-{to}
      </Typography>
      <Slider
        className={classes.slider}
        orientation="vertical"
        min={-50}
        max={50}
        value={volume}
        onChange={handleSlide}
      />
      <Typography align="center">
        {volume > 0 && `+`}
        {`${volume} dB`}
      </Typography>
    </div>
  );
};
const useStyles = makeStyles({
  panel: {
    height: "20em",
    width: "4.5em",
    display: "flex",
    flexDirection: "column",
    gap: "1em",
    alignItems: "center",
  },
});
export default Panel;
