import { useEffect, useMemo, useState } from "react";

function ListPresets(props) {
  const { playItems, presets, setPlayItems, setPresets } = props;

  const [selected, setSelected] = useState(false);

  useEffect(() => {}, [playItems]);

  useEffect(() => {}, [selected]);

  const getPresetItem = (id) => {
    const presetItem = presets.find((item) => {
      return item.id === id;
    });

    setPlayItems(presetItem.sound);
  };

  const removePreset = (event, id) => {
    event.stopPropagation();
    const newPresets = presets.filter((item) => {
      return item.id !== id;
    });

    if (window.confirm("Remove preset sound?")) {
      setPresets(newPresets);
      localStorage.setItem("presets", JSON.stringify(newPresets));
    } else return;
  };

  return (
    <>
      <h1>Hello</h1>
      {presets.length ? (
        presets.map((item, index) => {
          return (
            <div
              onClick={() => getPresetItem(item.id)}
              className="container-presets"
              key={index}
            >
              <h2>{item.title}</h2>
              <div className="container-item-preset">
                {item.sound.map((box, index) => {
                  return (
                    <span
                      style={{ "--color": box.color }}
                      className="preset-box"
                      key={index}
                    >
                      {box.title}
                    </span>
                  );
                })}
                <span
                  onClick={(event) => removePreset(event, item.id)}
                  className="remove-preset"
                >
                  X
                </span>
              </div>
            </div>
          );
        })
      ) : (
        <span className="no-preset">You don't have a preset sound yet</span>
      )}
    </>
  );
}

export default ListPresets;
