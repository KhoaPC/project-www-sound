import { useEffect, useState } from "react";
import BoxHeader from "./BoxHeader";
import "./BoxHeader.css";

function VolumeBox(props) {
  const { info, playItems, setPlayItems, volume: volumeAll } = props;
  const [value, setValue] = useState(70);
  const [width, setWidth] = useState("70px");
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (info) {
      const elm = document
        .querySelector(`.box-sound[data-id="${info.id}"]`)
        .querySelector("audio");
      elm.volume = volume;
    }
    setWidth((prev) => (prev = `${volumeAll * 140}px`));

  }, [info, volume, volumeAll]);

  const volumeChange = (event) => {
    setVolume((prev) => (prev = (1 / 100) * event.target.value));
    setWidth((prev) => (prev = `${event.target.value * (140 / 100)}px`));
    setValue((prev) => (prev = event.target.value * (140 / 100)));
  };

  if (!info) return <BoxHeader />;

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
        value={value}
      />
    </div>
  );
}

export default VolumeBox;
