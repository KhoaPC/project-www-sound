import { useEffect, useState } from "react";
import { CONST_WIDTH_INPUT_MASTER as widthInput } from "../../App";

function Volume({ volumeAll }) {
  const [value, setValue] = useState(widthInput / 2);

  useEffect(() => {
    volumeAll((1 / widthInput) * value);
  }, [value]);

  const volumeChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="container-volume">
      <h2> Volume</h2>
      <div style={{ "--width": `${value}px` }} className="sub-volume"></div>
      <input
        min={0}
        max={100}
        step={5}
        onChange={(event) => volumeChange(event)}
        className="volume-all"
        type="range"
        value={value}
      />
    </div>
  );
}

export default Volume;
