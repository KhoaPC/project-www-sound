import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function AddPresets(props) {
  const { playItems, setPresets } = props;
  const [keyPreset, setKeyPreset] = useState("");

  const handlerChange = (event) => {
    setKeyPreset(event.target.value);
  };

  const handlerAddPreset = () => {
    if (!keyPreset) {
      return alert("Empty");
    }
    if (!playItems.length) {
      return alert("No sound selected");
    }

    if (keyPreset && playItems.length) {
      let local;
      const data = {
        id: uuid(),
        title: keyPreset,
        sound: playItems,
      };

      if (localStorage.getItem("presets")) {
        local = JSON.parse(localStorage.getItem("presets"));
        local.push(data);
        setPresets(local);
        localStorage.setItem("presets", JSON.stringify(local));
      } else {
        setPresets([data]);
        localStorage.setItem("presets", JSON.stringify([data]));
      }
    }
    setKeyPreset("");
  };

  const handlerEnterKey = (event) => {
    const CONST_ENTER_KEY = "Enter";
    if (event.key === CONST_ENTER_KEY) handlerAddPreset();
  };

  return (
    <div className="container-add">
      <input
        placeholder="Name of preset sound "
        onChange={(event) => {
          handlerChange(event);
        }}
        value={keyPreset}
        onKeyDown={(event) => handlerEnterKey(event)}
      />
      <button onClick={handlerAddPreset}>Add</button>
    </div>
  );
}

export default AddPresets;
