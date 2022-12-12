import { useEffect, useRef, useState } from "react";
import audio from "../../assets/audio";
import images from "../../assets/img";
import "./BoxItem.css";

function BoxItem({
  info,
  setBoxes,
  boxes,
  setPlayItems,
  num,
  setNum,
  playItems,
}) {
  const { id, title, source, volume, selected } = info;
  const refBox = useRef();
  const refAudio = useRef();

  useEffect(() => {
    if (selected) {
      refAudio.current.volume = volume;
      refAudio.current.play();
    } else refAudio.current.pause();
  }, [selected, volume]);

  useEffect(() => {
    let playItem = boxes.filter((box) => {
      return box.selected;
    });
    setPlayItems(playItem);
  }, [boxes]);

  useEffect(() => {
    setNum(playItems.length);
  }, [playItems]);

  const handlerClick = () => {
    setBoxes((current) => {
      return current.map((box) => {
        if (num < 3) {
          return box.id !== id
            ? box
            : {
                ...box,
                selected: !box.selected,
                play: !box.play,
              };
        }
        return box.id !== id
          ? box
          : {
              ...box,
              selected: false,
              play: false,
            };
      });
    });

    if (num < 3) {
      refBox.current.classList.toggle("select");
    } else {
      refBox.current.classList.remove("select");
    }
  };

  const handlerEnded = () => {
    refAudio.current.currentTime = 0;
    refAudio.current.play();
  };

  return (
    <div ref={refBox} onClick={handlerClick} data-id={id} className="box-sound">
      <img className="img-box" src={images[source]} />
      <h2 className="title-box">{title}</h2>
      <audio onEnded={handlerEnded} ref={refAudio} src={audio[source]} />
    </div>
  );
}

export default BoxItem;
