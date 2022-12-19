import { useState } from "react";
import AddPresets from "./AddPresets";
import ListPresets from "./ListPresets";

function ModalPresets(props) {
  const { onClick, playItems, setPlayItems } = props;
  const [presets, setPresets] = useState(
    JSON.parse(localStorage.getItem("presets")) || []
  );

  return (
    <>
      <div className="overlay">
        <div className="modal">
          <div className="top">
            <h2 className="title">Presets</h2>
            <span className="close-modal" onClick={onClick}>
              X
            </span>
          </div>
          <AddPresets
            setPresets={setPresets}
            playItems={playItems}
          ></AddPresets>
          <ListPresets playItems={playItems} setPlayItems={setPlayItems} presets={presets} setPresets={setPresets} />
        </div>
      </div>
    </>
  );
}

export default ModalPresets;
