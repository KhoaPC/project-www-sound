import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import audio from "../../assets/audio";
import images from "../../assets/img";
import "./BoxItem.css";
import { CONST_PLAY_ITEM_MAX as itemMax } from "../../App";

function BoxItem({ info, setPlayItems, playItems }) {
  const { id, title, source } = info;
  const [color, setColor] = useState("black");
  const refBox = useRef();
  const refAudio = useRef();
  // const [selected, setSelected] = useState(false);

  const selected = useMemo(() => {
    const curItem = playItems.find((item) => {
      return item.id === id;
    });

    if (curItem) {
      setColor(curItem.color);
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
    if (!selected && playItems.length < itemMax) {
      refBox.current.classList.toggle("select");
    } else {
      refBox.current.classList.remove("select");
    }

    if (selected)
      return setPlayItems((prev) => {
        return prev.filter((item) => item.id !== id);
      });

    setPlayItems((prev) => {
      if (playItems.length === itemMax) return prev;
      return [...prev, info];
    });
  }, [playItems, selected]);

  const handlerEnded = () => {
    refAudio.current.currentTime = 0;
    refAudio.current.play();
  };

  return (
    <div
      style={{
        "--color": selected ? color : "transparent",
        // opacity: selected ? "1" : "0.6",
        backgroundImage:  `url("${images[source]}")`
      }}
      ref={refBox}
      onClick={(event) => handlerClick(event)}
      data-id={id}
      className="box-sound"
    >
      <div
      style={{
        opacity: selected ? "0" : "1",
      }}
      className="blur-box"></div>
      <h2
       style={{
        color: selected ? "white" : "black",
        textShadow: selected ? "0px 0px 1px black" : '0px 0px 1px white'
     
      }}
      className="title-box">{title}</h2>
      <audio onEnded={handlerEnded} ref={refAudio} src={audio[source]} />
    </div>
  );
}

export default BoxItem;

// bỏ callback
//
