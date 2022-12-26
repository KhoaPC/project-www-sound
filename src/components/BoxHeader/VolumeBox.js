import { useEffect, useRef, useState } from "react";
import BoxHeader from "./BoxHeader";
import "./BoxHeader.css";
import {
  CONST_DEAFAUT_VOLUME as defaultVolume,
  CONST_WIDTH_INPUT_MASTER as widthInputMaster,
  CONST_WIDTH_INPUT as widthInput,
} from "../../App";

function VolumeBox(props) {
  const { info, playItems, volume, matches } = props;
  const [value, setValue] = useState(widthInputMaster / 2);
  const [width, setWidth] = useState(`${widthInput / 2}px`);
  const [volumeBox, setVolumeBox] = useState(defaultVolume);
  const [color, setColor] = useState("");
  const refSub = useRef();

  useEffect(() => {
    if (info) {
      const curItem = playItems.find((item) => {
        return item.id === info.id;
      });

      if (curItem) {
        setColor(curItem.color);
      }
    }
  }, [info]);

  // useEffect(() => {
  //   const num = +width.replace("px", "");

  //   if (num < 35) {
  //     refSub.current.style.borderRadius = "500px 0px 0px 500px";
  //   } else if (refSub.current) {
  //     refSub.current.style.borderRadius = "500px";
  //   }
  // }, [width]);

  useEffect(() => {
    if (info) {
      try {
        const elm = document.querySelector(`.box-sound[data-id="${info.id}"]`);
        const audio = elm.querySelector("audio");
        audio.volume = volumeBox;
      } catch {}
    }
  }, [volumeBox]);

  useEffect(() => {
    setWidth(`${volume * widthInput}px`);
  }, [volume]);

  const volumeChange = (event) => {
    setVolumeBox((1 / widthInputMaster) * event.target.value);
    setWidth(`${event.target.value * (widthInput / 100)}px`);
    setValue(event.target.value);
  };

  if (!info) return <BoxHeader />;

  return (
    <>
      {!matches && (
        <div className="container-volume-box">
          <h3 className="title-box-header">{info.title}</h3>
          <div
            ref={refSub}
            style={{ "--width": width, "--color": color }}
            className="sub-input-box"
          ></div>
          <input
            min={0}
            max={100}
            step={5}
            onChange={(event) => volumeChange(event)}
            className="input-box-header"
            type="range"
            value={value}
            style={{ "--color": color }}
          />
        </div>
      )}
      {matches && (
        <div className="container-volume-box-min">
          <h3 className="title-box-header">{info.title}</h3>
          <div
            ref={refSub}
            style={{ "--width": width, "--color": color }}
            className="sub-input-box"
          ></div>
          <input
            min={0}
            max={100}
            step={5}
            onChange={(event) => volumeChange(event)}
            className="input-box-header"
            type="range"
            value={value}
            style={{ "--color": color }}
          />
        </div>
      )}
    </>
  );
}

export default VolumeBox;
