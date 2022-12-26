import "./ControllMaster.css";
import PlayBtn from "./PlayBtn";
import Volume from "./VolumeMaster";
import { useEffect, useState } from "react";

function ControllAll(props) {
  const { isPlay, setIsPlay, playItems, setWidthVolume, volume, setVolume } =
    props;
  const allAudio = document.querySelectorAll("audio");

  useEffect(() => {
    if (!isPlay) {
      Array.from(allAudio).forEach((elm) => {
        elm.pause();
      });
    } else {
      playItems.forEach((item) => {
        try {
          const elm = document
            .querySelector(`.box-sound[data-id="${item.id}"]`)
            .querySelector("audio");
          elm.play();
        } catch {}
      });
    }
  }, [isPlay]);

  useEffect(() => {
    Array.from(allAudio).forEach((elm) => {
      elm.volume = volume;
    });
  }, [volume]);

  return (
    <div className="controll-all">
      <PlayBtn
        playItems={playItems}
        setIsPlay={setIsPlay}
        isPlay={isPlay}
      ></PlayBtn>
      <Volume volumeAll={(vol) => setVolume(vol)}></Volume>
    </div>
  );
}

export default ControllAll;
