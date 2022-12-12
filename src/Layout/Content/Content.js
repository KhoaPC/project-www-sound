import BoxItem from "../../components/BoxItem/BoxItem";
import "./Content.css";
import images from "../../assets/img";
import audio from "../../assets/audio";
import { useEffect } from "react";

function Content(props) {
  const {
    boxes,
    setBoxes,
    isPlay,
    setPlay,
    setPlayItems,
    num,
    setNum,
    playItems,
  } = props;

  return (
    <div className="container-box">
      {boxes.map((box, index) => {
        return (
          <BoxItem
            playItems={playItems}
            num={num}
            setNum={setNum}
            setPlayItems={setPlayItems}
            boxes={boxes}
            isPlay={isPlay}
            setPlay={setPlay}
            key={index}
            info={box}
            setBoxes={setBoxes}
          />
        );
      })}
    </div>
  );
}

export default Content;
