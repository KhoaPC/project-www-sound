import "./ControllAll.css";
import images from "../../assets/img";
import audio from "../../assets/audio";
import { useEffect, useRef, useState } from "react";

function PlayBtn(props) {
  const { volume, setBoxes, isPlay, setIsPlay } = props;

  const tooglePlay = () => {
    setIsPlay((prev) => !prev);
  };

  return (
    <>
      <div onClick={tooglePlay} className="play-btn">
        {isPlay ? (
          <img src={images.play_btn} />
        ) : (
          <img src={images.pause_btn} />
        )}
      </div>
    </>
  );
}

export default PlayBtn;
