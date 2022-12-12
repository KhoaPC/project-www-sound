import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import audio from "../../assets/audio";
import images from "../../assets/img";
import "./BoxItem.css";

function BoxItem({
  info,
  setBoxes,
  boxes,
  setPlayItems,
  numBox,
  setNum,
  playItems,
}) {
  const { id, title, source } = info;
  const refBox = useRef();
  const refAudio = useRef();
  const [foo, setFoo] = useState([]);

  const selected = useMemo(() => {
    return playItems.some((item) => item.id === id);
  }, [playItems]);

  const handlerClick2 = useCallback(() => {
    if (selected)
      return setPlayItems((current) => {
        return current.filter((item) => item.id !== id);
      });

    setPlayItems(current => [...current, info]);
  }, [playItems, selected]); //

  useEffect(() => {
    if (selected) {
      refAudio.current.play();
    } else refAudio.current.pause();
  }, [selected]);

  useEffect(() => {
    let playItem = boxes.filter((box) => {
      return box.selected;
    });



    setPlayItems(playItem);
  }, [boxes]);

  useEffect(() => {
    setNum(playItems.length);
  }, [playItems]);

  const handlerClick = (event) => {
    // setIdd(id);
    // console.log(event.target.closest(".box-sound").dataset.id);

    setBoxes((current) => {
      return current.map((box) => {
        if (numBox < 3) {
          return box.id !== id
            ? box
            : {
                ...box,
                selected: !box.selected,
              };
        }
        return box.id !== id
          ? box
          : {
              ...box,
              selected: false,
            };
      });
    });

    if (numBox < 3) {
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
    <div
      ref={refBox}
      onClick={(event) => handlerClick2(event)}
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
