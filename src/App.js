import Panel from "./components/Panel";
import { Paper, Button, makeStyles } from "@material-ui/core/";
import ListPanel from "./components/ListPanel";
import Action from "components/Action";

function App() {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.app}>
      <ListPanel />
      <Action />
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
  },
});
export default App;
