import { useState } from "react";
import "./BoxHeader.css";

function VolumeBox(props) {
  const { title } = props;
  const [width, setWidth] = useState("70px");
  const [volume, setVolume] = useState(0.5);

  const volumeChange = (event) => {
    setVolume((prev) => (prev = (1 / 100) * event.target.value));
    setWidth((prev) => (prev = `${event.target.value * (140 / 100)}px`));
  };

  return (
    <div className="container-volume-box">
      <h3 className="title-box-header">{title}</h3>
      <div style={{ "--width": width }} className="sub-input-box"></div>
      <input
        min={0}
        max={100}
        step={5}
        onChange={(event) => volumeChange(event)}
        className="input-box-header"
        type="range"
      />
    </div>
  );
}

export default VolumeBox;
