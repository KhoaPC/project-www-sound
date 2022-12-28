import "./Header.css";
import ControllAll from "../../components/ControllMaster/ControllMaster";
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
    matches,
  } = props;
  const addedPlayItems = Array.from({
    length: CONST_PLAY_ITEM_MAX - playItems.length,
  });
  const playItemsWithEmpties = [...playItems, ...addedPlayItems];

  return (
    <>
      {matches && (
        <div className="header min-header">
          <ControllAll
            volume={volume}
            setVolume={setVolume}
            setWidthVolume={setWidthVolume}
            playItems={playItems}
            setIsPlay={setIsPlay}
            isPlay={isPlay}
          />
          <Presets setPlayItems={setPlayItems} playItems={playItems} />

          <div className="foo min-box">
            {playItemsWithEmpties.map((box, index) => {
              return (
                <VolumeBox
                  matches={matches}
                  volume={volume}
                  widthVolume={widthVolume}
                  playItems={playItems}
                  key={index}
                  info={box}
                />
              );
            })}
          </div>
        </div>
      )}
      {!matches && (
        <div className="header">
          <ControllAll
            volume={volume}
            setVolume={setVolume}
            setWidthVolume={setWidthVolume}
            playItems={playItems}
            setIsPlay={setIsPlay}
            isPlay={isPlay}
          />

          <div className="foo">
            {playItemsWithEmpties.map((box, index) => {
              return (
                <VolumeBox
                  matches={matches}
                  volume={volume}
                  widthVolume={widthVolume}
                  playItems={playItems}
                  key={index}
                  info={box}
                />
              );
            })}
          </div>
          <Presets setPlayItems={setPlayItems} playItems={playItems} />
        </div>
      )}
    </>
  );
}

export default Header;
