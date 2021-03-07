import { createContext, useContext } from "react";

export const AudioContext = createContext();
export function useAudioContext() {
  return useContext(AudioContext);
}
