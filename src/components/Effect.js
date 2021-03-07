import { Switch, Typography } from "@material-ui/core";
import { useState } from "react";

const Effect = ({ title }) => {
  const [underEffect, setUnderEffect] = useState(false);
  const handleEffectChange = (event) => {
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
