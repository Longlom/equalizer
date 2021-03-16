import { makeStyles, Paper } from "@material-ui/core/";
import Control from "components/Control";
import Effect from "components/Effect";
import FileLoader from "components/FileLoader";
import Volume from "components/Volume";
import { useAudioSchema } from "context/AudioSchema";
import { useState } from "react";
import ListPanel from "./components/ListPanel";
function App() {
  const classes = useStyles();
  const { audioContext, listNodes } = useAudioSchema();
  const { vibratoNode, delayNode } = listNodes;
  const [url, setUrl] = useState("");
  const [sourceNode, setSourceNode] = useState({});
  const [playerState, setPlayerState] = useState(audioContext.state);

  return (
    <Paper elevation={3} className={classes.app}>
      <FileLoader
        sourceNode={sourceNode}
        url={url}
        setUrl={setUrl}
        setPlayerState={setPlayerState}
      />
      <ListPanel />
      <div className={classes.control}>
        <Control
          url={url}
          sourceNode={sourceNode}
          setSourceNode={setSourceNode}
          playerState={playerState}
          setPlayerState={setPlayerState}
        />
        <Volume />
      </div>
      <div className={classes.control}>
        <Effect title="Vibrato" node={vibratoNode} />
        <Effect title="Delay" node={delayNode} />
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
