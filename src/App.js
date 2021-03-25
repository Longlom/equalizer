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
  const [file, setFile] = useState(null);
  const [sourceNode, setSourceNode] = useState({});
  const [playerState, setPlayerState] = useState(audioContext.state);

  return (
    <Paper elevation={3} className={classes.app}>
      <FileLoader
        sourceNode={sourceNode}
        file={file}
        setFile={setFile}
        setPlayerState={setPlayerState}
      />
      <ListPanel />
      <div className={classes.control}>
        <Control
          file={file}
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
