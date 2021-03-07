import { makeStyles, Paper } from "@material-ui/core/";
import React from "react";
import { listBand } from "constants/listBand";
import Panel from "./Panel";
import { useAudioContext } from "context/audioContext";
const ListPanel = () => {
  const classes = useStyles();
  const { nodes } = useAudioContext();
  return (
    <div className={classes.listPanel}>
      {listBand.map((band, index) => (
        <Panel
          key={index}
          frequency={band.frequency}
          gainNode={nodes[index].gainNode}
        />
      ))}
    </div>
  );
};
const useStyles = makeStyles({
  listPanel: {
    display: "flex",
    gap: "0.5em",
    padding: "0.5em",
  },
});
export default ListPanel;
