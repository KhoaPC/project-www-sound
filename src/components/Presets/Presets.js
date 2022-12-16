import "./Presets.css";
import { useState } from "react";
import ModalPresets from "./ModalPresets";

function Presets(props) {
  const { playItems, setPlayItems } = props;
  const [show, setShow] = useState(false);

  const handlerClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <h2 className="btn-presets" onClick={handlerClick}>Presets</h2>
      {show && (
        <ModalPresets
          setPlayItems={setPlayItems}
          playItems={playItems}
          onClick={handlerClick}
        />
      )}
    </div>
  );
}

export default Presets;
