import "./App.css";
import Header from "./Layout/Header/Header";
import Content from "./Layout/Content/Content";
import data from "../src/assets/data.json";
import { useEffect, useState } from "react";

export const CONST_PLAY_ITEM_MAX = 3;

function App() {
  const boxes = data.map((item) => ({
    ...item,
    volume: 0.5,
  }));

  const [isPlay, setIsPlay] = useState(false);
  const [playItems, setPlayItems] = useState([]);
  const [numBox, setNum] = useState(0);
  const [widthVolume, setWidthVolume] = useState(50);
  const [volume, setVolume] = useState(0.5);

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
        boxes={boxes}
      />

      <Content
        playItems={playItems}
        numBox={numBox}
        setNum={setNum}
        setPlayItems={setPlayItems}
        boxes={boxes}
      />
    </div>
  );
}

export default App;
