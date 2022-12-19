import "./App.css";
import Header from "./Layout/Header/Header";
import Content from "./Layout/Content/Content";
import data from "../src/assets/data.json";
import { useEffect, useState } from "react";

export const CONST_PLAY_ITEM_MAX = 3;
export const CONST_WIDTH_INPUT_MASTER = 100;
export const CONST_WIDTH_INPUT = 140;
export const CONST_DEAFAUT_VOLUME = 0.5;

function App() {
  const boxes = data.map((item) => ({
    ...item,
    volume: CONST_DEAFAUT_VOLUME,
  }));

  const [isPlay, setIsPlay] = useState(false);
  const [playItems, setPlayItems] = useState([]);
  const [widthVolume, setWidthVolume] = useState(50);
  const [volume, setVolume] = useState(CONST_DEAFAUT_VOLUME);

  useEffect(() => {
    playItems.length ? setIsPlay(true) : setIsPlay(false);
  }, [playItems]);

  return (
    <div className="App">
      <Header
        volume={volume}
        setVolume={setVolume}
        widthVolume={widthVolume}
        setWidthVolume={setWidthVolume}
        playItems={playItems}
        setPlayItems={setPlayItems}
        setIsPlay={setIsPlay}
        isPlay={isPlay}
      />

      <Content
        playItems={playItems}
        setPlayItems={setPlayItems}
        boxes={boxes}
      />
    </div>
  );
}

export default App;

// selected
