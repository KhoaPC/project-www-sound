import { useEffect, useState } from "react";

function Volume({ volumeAll }) {
  const [volume, setVolume] = useState(50);
  const [width, setWidth] = useState("50px");

  useEffect(() => {
    volumeAll((1 / 100) * volume);
  }, [volume]);

  const volumeChange = (event) => {
    setVolume(event.target.value);
    setWidth((prev) => (prev = `${event.target.value}px`));
  };

  return (
    <div className="container-volume">
      <h2> Volume</h2>
      <div style={{ "--width": width }} className="sub-volume"></div>
      <input
        min={0}
        max={100}
        step={5}
        onChange={(event) => volumeChange(event)}
        className="volume-all"
        type="range"
        value={volume}
      />
    </div>
  );
}

export default Volume;
