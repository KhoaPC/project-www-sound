import { useState } from "react";
import BoxHeader from "./BoxHeader";
import "./BoxHeader.css";

function VolumeBox(props) {
  const { info } = props;
  const [width, setWidth] = useState("70px");
  const [volume, setVolume] = useState(0.5);

  const volumeChange = (event) => {
    setVolume((prev) => (prev = (1 / 100) * event.target.value));
    setWidth((prev) => (prev = `${event.target.value * (140 / 100)}px`));
  };

  if (!info)
    return <BoxHeader/>
    
  return (
    <div className="container-volume-box">
      <h3 className="title-box-header">{info.title}</h3>
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
