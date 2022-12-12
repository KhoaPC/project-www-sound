import "./Header.css";
import ControllAll from "../../components/ControllAll/ControllAll";
import BoxHeader from "../../components/BoxHeader/BoxHeader";
import Presets from "../../components/Presets/Presets";
import { useEffect, useState } from "react";
import VolumeBox from "../../components/BoxHeader/VolumeBox";
import { CONST_PLAY_ITEM_MAX } from "../../App";

function Header(props) {
  const { boxes, isPlay, setIsPlay, playItems } = props;
  const addedPlayItems = Array.from({
    length: CONST_PLAY_ITEM_MAX - playItems.length,
  });
  const playItemsWithEmpties = [...playItems, ...addedPlayItems];

  return (
    <div className="header">
      <ControllAll setIsPlay={setIsPlay} isPlay={isPlay} boxes={boxes} />
      <div className="foo">
        {playItemsWithEmpties.map((box, index) => {
          return <VolumeBox key={index} info={box} />;
        })}
      </div>
      <Presets />
    </div>
  );
}

export default Header;
