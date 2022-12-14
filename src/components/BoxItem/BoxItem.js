import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import audio from "../../assets/audio";
import images from "../../assets/img";
import "./BoxItem.css";

function BoxItem({ info, boxes, setPlayItems, numBox, setNum, playItems }) {
  const { id, title, source } = info;
  const refBox = useRef();
  const refAudio = useRef();

  const selected = useMemo(() => {
    const curItem = playItems.find((item) => {
      return item.id === id;
    });

    if (curItem) {
      refAudio.current.volume = curItem.volume;
    }
    return playItems.some((item) => item.id === id);
  }, [playItems]);

  useEffect(() => {
    if (selected) {
      refAudio.current.play();
    } else refAudio.current.pause();
  }, [selected]);

  const handlerClick = useCallback(() => {
    if (!selected && playItems.length < 3) {
      refBox.current.classList.toggle("select");
    } else {
      refBox.current.classList.remove("select");
    }

    if (selected)
      return setPlayItems((prev) => {
        return prev.filter((item) => item.id !== id);
      });

    setPlayItems((prev) => {
      if (playItems.length === 3) return prev;
      return (prev = [...prev, info]);
    });

    setNum((prev) => (prev = playItems.length + 1));
  }, [playItems, selected]);
  const handlerEnded = () => {
    refAudio.current.currentTime = 0;
    refAudio.current.play();
  };

  return (
    <div
      ref={refBox}
      onClick={(event) => handlerClick(event)}
      data-id={id}
      className="box-sound"
    >
      <img className="img-box" src={images[source]} />
      <h2 className="title-box">{title}</h2>
      <audio onEnded={handlerEnded} ref={refAudio} src={audio[source]} />
    </div>
  );
}

export default BoxItem;
