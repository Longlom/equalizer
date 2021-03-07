const defaultFrequency = 5;
const defaultGain = 10;
export function vibrato(audioContext, audioParam) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.frequency.value = options.frequency || defaultFrequency;
  gainNode.gain.value = options.gain || defaultGain;

  oscillator.connect(gainNode).connect(audioParam);
  oscillator.start();
}
