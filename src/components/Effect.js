import { Switch, Typography } from "@material-ui/core";
import { useAudioSchema } from "context/AudioSchema";
import { useState } from "react";

const Effect = ({ title, node }) => {
  const { audioContext } = useAudioSchema();
  const [underEffect, setUnderEffect] = useState(false);
  const handleEffectChange = (event) => {
    if (event.target.checked) node.connect(audioContext.destination);
    else node.disconnect(audioContext.destination);
    setUnderEffect(event.target.checked);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Switch
        color="primary"
        checked={underEffect}
        onChange={handleEffectChange}
      />
      <Typography variant="body2">{title}</Typography>
    </div>
  );
};

export default Effect;
