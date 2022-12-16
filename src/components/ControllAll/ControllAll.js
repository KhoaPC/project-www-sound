import "./ControllAll.css";
import PlayBtn from "./PlayBtn";
import Volume from "./Volume";
import { useEffect, useState } from "react";

function ControllAll(props) {
  const {
    isPlay,
    setIsPlay,
    playItems,
    setPlayItems,
    widthVolume,
    setWidthVolume,
    volume,
    setVolume,
  } = props;
  const allAudio = document.querySelectorAll("audio");

  // function setVolumeAll(event) {
  //   setPlayItems(current => {
  //     return current.map(item => {
  //       return {
  //         ...item,
  //         volume: event.target.value
  //       }
  //     })
  //   })
  // } // setVolumeAll

  useEffect(() => {
    if (!isPlay) {
      Array.from(allAudio).forEach((elm) => {
        elm.pause();
      });
    } else {
      playItems.forEach((item) => {
        const elm = document
          .querySelector(`.box-sound[data-id="${item.id}"]`)
          .querySelector("audio");
        elm.play();
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
        volume={volume}
      ></PlayBtn>
      <Volume
        widthVolume={setWidthVolume}
        volumeAll={(vol) => setVolume(vol)}
      ></Volume>
    </div>
  );
}

export default ControllAll;
