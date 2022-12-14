import BoxItem from "../../components/BoxItem/BoxItem";
import "./Content.css";
import { useEffect } from "react";

function Content(props) {
  const {
    boxes,
    isPlay,
    setPlay,
    setPlayItems,
    numBox,
    setNum,
    playItems,
  } = props;

  return (
    <div className="container-box">
      {boxes.map((box, index) => {
        return (
          <BoxItem
            playItems={playItems}
            numBox={numBox}
            setNum={setNum}
            setPlayItems={setPlayItems}
            boxes={boxes}
            isPlay={isPlay}
            setPlay={setPlay}
            key={index}
            info={box}
          />
        );
      })}
    </div>
  );
}

export default Content;
