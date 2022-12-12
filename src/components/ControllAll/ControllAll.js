import "./ControllAll.css";
import PlayBtn from "./PlayBtn";
import Volume from "./Volume";
import { useEffect, useState } from "react";

function ControllAll(props) {
  const { boxes, setBoxes, isPlay, setIsPlay } = props;
  const [volume, setVolume] = useState(0.5);
  const allAudio = document.querySelectorAll("audio");

  useEffect(() => {
    Array.from(allAudio).forEach((elm) => {
      elm.volume = volume;
    });
  }, [volume]);

  return (
    <div className="controll-all">
      <PlayBtn
        setBoxes={setBoxes}
        setIsPlay={setIsPlay}
        isPlay={isPlay}
        volume={volume}
      ></PlayBtn>
      <Volume volumeAll={(vol) => setVolume(vol)}></Volume>
    </div>
  );
}

export default ControllAll;
