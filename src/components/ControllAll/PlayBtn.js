import images from "../../assets/img";
import audio from "../../assets/audio";
import { useEffect, useRef, useState } from "react";

function PlayBtn(props) {
  const ref = useRef();
  const { volume, isPlay, setIsPlay, playItems } = props;

  useEffect(() => {
    if(!playItems.length) {
      ref.current.classList.add('disable')
    } else {
      ref.current.classList.remove('disable')
    }
  }, [playItems]);

  const tooglePlay = () => {
    setIsPlay((prev) => !prev);
  };

  return (
    <>
      <div ref={ref} onClick={tooglePlay} className="play-btn">
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
