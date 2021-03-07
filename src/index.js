import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AudioContext } from "context/audioContext";
import audioSource from "sg.mp3";
import { feedBackward, feedForward } from "constants/coefficients";
const WebContextAudio = window.AudioContext || window.webkitAudioContext;
const audioContext = new WebContextAudio();

const audioElement = new Audio(audioSource);
const track = audioContext.createMediaElementSource(audioElement);
const mergeNode = new ChannelMergerNode(audioContext, { numberOfInputs: 8 });

const nodes = [];
for (let i = 0; i < 8; i++) {
  const filterNode = new IIRFilterNode(audioContext, {
    feedforward: feedForward[i],
    feedback: feedBackward[i],
  });
  const gainNode = new GainNode(audioContext);
  track.connect(filterNode).connect(gainNode).connect(mergeNode);
  nodes.push({
    filterNode,
    gainNode,
  });
}
console.log(nodes);
const gainNode = new GainNode(audioContext);
mergeNode.connect(gainNode).connect(audioContext.destination);
ReactDOM.render(
  <AudioContext.Provider
    value={{ audioContext, audioElement, nodes, gainNode }}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AudioContext.Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
