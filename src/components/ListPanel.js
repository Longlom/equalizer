import { makeStyles } from "@material-ui/core/";
import React from "react";
import { listBand } from "constants/listBand";
import Panel from "./Panel";
const ListPanel = () => {
  const classes = useStyles();
  return (
    <div className={classes.listPanel}>
      {listBand.map((band) => (
        <Panel key={band.id} from={band.from} to={band.to} />
      ))}
    </div>
  );
};
const useStyles = makeStyles({
  listPanel: {
    display: "flex",
    gap: "0.5em",
  },
});
export default ListPanel;
