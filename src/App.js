import { makeStyles, Paper, Typography } from "@material-ui/core/";
import Action from "components/Action";
import Effect from "components/Effect";
import Volume from "components/Volume";
import ListPanel from "./components/ListPanel";
function App() {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.app}>
      <ListPanel />
      <div className={classes.control}>
        <Action />
        <Volume />
      </div>
      <div className={classes.control}>
        <Effect title="Vibrato" />
        <Effect title="Delay" />
      </div>
    </Paper>
  );
}
const useStyles = makeStyles({
  app: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "1em",
    display: "flex",
    gap: "1em",
    flexDirection: "column",
  },
  control: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "1em",
  },
});
export default App;
