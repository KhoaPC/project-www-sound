import { useEffect, useState } from "react";

function ListPresets(props) {
  const { presets, setPlayItems, setPresets } = props;

  const getPresetItem = (key) => {
    const presetItem = presets.find((item) => {
      return Object.keys(item)[0] === key[0];
    });

    setPlayItems(Object.values(presetItem).flat());
  };

  const removePreset = (event, key) => {
    event.stopPropagation();
    const newPresets = presets.filter((item) => {
      return Object.keys(item)[0] !== key[0];
    });

    if (window.confirm("Remove preset sound?")) setPresets(newPresets);
    else return;
  };

  return (
    <>
    <h1>Hello</h1>
      {presets.length ? presets.map((item, index) => {
        return (
          <div
            onClick={() => getPresetItem(Object.keys(item))}
            className="container-presets"
            key={index}
          >
            <h2>{Object.keys(item)}</h2>
            <div className="container-item-preset">
              {item[Object.keys(item)].map((box, index) => {
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
                onClick={(event) => removePreset(event, Object.keys(item))}
                className="remove-preset"
              >
                X
              </span>
            </div>
          </div>
        );
      }) : <span className="no-preset">You don't have a preset sound yet</span>} 
    </>
  );
}

export default ListPresets;
