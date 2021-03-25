import { listBand } from "constants/listBand";
import { AudioSchema } from "context/AudioSchema";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const WebContextAudio = window.AudioContext || window.webkitAudioContext;
const audioContext = new WebContextAudio();
const gainNode = new GainNode(audioContext);

const filterNodes = [];
for (let i = 0; i < 8; i++) {
  const filterNode = new BiquadFilterNode(audioContext, {
    type: "peaking",
  });
  filterNode.frequency.value = (listBand[i].min + listBand[i].max) / 2;
  filterNodes.push(filterNode);
  if (i > 0) filterNodes[i - 1].connect(filterNode);
  if (i === 7) {
    filterNode.connect(gainNode);
  }
}

const delayNode = new DelayNode(audioContext, { delayTime: 0.6 });
const gainDelayNode = new GainNode(audioContext, { gain: 0.4 });
gainDelayNode.connect(delayNode);

const vibratoNode = new GainNode(audioContext, { gain: 0 });
const shaperNode = new WaveShaperNode(audioContext, {
  curve: new Float32Array([0, 1]),
});

gainNode.connect(audioContext.destination);
gainNode.connect(vibratoNode);
gainNode.connect(gainDelayNode);
audioContext.suspend();

ReactDOM.render(
  <React.StrictMode>
    <AudioSchema.Provider
      value={{
        audioContext,
        listNodes: {
          filterNodes,
          gainNode,
          delayNode,
          vibratoNode,
          shaperNode,
        },
      }}
    >
      <App />
    </AudioSchema.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
