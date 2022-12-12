import "./Header.css";
import ControllAll from "../../components/ControllAll/ControllAll";
import BoxHeader from "../../components/BoxHeader/BoxHeader";
import Presets from "../../components/Presets/Presets";
import { useEffect, useState } from "react";
import VolumeBox from "../../components/BoxHeader/VolumeBox";
function Header(props) {
  const { boxes, setBoxes, isPlay, setIsPlay, playItems, numBox } = props;
  const numEmpty = 3 - numBox;
  const ArrEmpty = Array.from(Array(numEmpty).keys());

  return (
    <div className="header">
      <ControllAll
        setIsPlay={setIsPlay}
        isPlay={isPlay}
        boxes={boxes}
        setBoxes={setBoxes}
      />
      <div className="foo">
        {playItems.map((box, index) => {
          return <VolumeBox key={index} title={box.title} />;
        })}
        {ArrEmpty.map((box, index) => {
          return <BoxHeader key={index} />;
        })}
      </div>
      <Presets />
    </div>
  );
}

export default Header;
