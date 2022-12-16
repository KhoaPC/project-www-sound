import "./Header.css";
import ControllAll from "../../components/ControllAll/ControllAll";
import Presets from "../../components/Presets/Presets";
import { useEffect, useState } from "react";
import VolumeBox from "../../components/BoxHeader/VolumeBox";
import { CONST_PLAY_ITEM_MAX } from "../../App";

function Header(props) {
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
  const addedPlayItems = Array.from({
    length: CONST_PLAY_ITEM_MAX - playItems.length,
  });
  const playItemsWithEmpties = [...playItems, ...addedPlayItems];

  return (
    <div className="header">
      <ControllAll
        volume={volume}
        setVolume={setVolume}
        widthVolume={widthVolume}
        setWidthVolume={setWidthVolume}
        playItems={playItems}
        setIsPlay={setIsPlay}
        isPlay={isPlay}
      />
      <div className="foo">
        {playItemsWithEmpties.map((box, index) => {
          return (
            <VolumeBox
              volume={volume}
              widthVolume={widthVolume}
              playItems={playItems}
              setPlayItems={setPlayItems}
              key={index}
              info={box}
            />
          );
        })}
      </div>
      <Presets setPlayItems={setPlayItems} playItems={playItems}/>
    </div>
  );
}

export default Header;
