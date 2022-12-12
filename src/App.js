import "./App.css";
import Header from "./Layout/Header/Header";
import Content from "./Layout/Content/Content";
import data from "../src/assets/data.json";
import { useEffect, useState } from "react";

function App() {
  const [boxes, setBoxes] = useState(
    data.map((item) => ({
      ...item,
      selected: false,
      play: false,
      volume: 0.5,
    }))
  );
  const [isPlay, setIsPlay] = useState(false);
  const [playItems, setPlayItems] = useState([]);
  const [num, setNum] = useState(0);

  useEffect(() => {
    const play = boxes.find((box) => {
      return box.play;
    });

    play ? setIsPlay(true) : setIsPlay(false);
  }, [boxes]);

  return (
    <div className="App">
      <Header
        num={num}
        playItems={playItems}
        setIsPlay={setIsPlay}
        isPlay={isPlay}
        boxes={boxes}
        setBoxes={setBoxes}
      />

      <Content
        playItems={playItems}
        num={num}
        setNum={setNum}
        setPlayItems={setPlayItems}
        boxes={boxes}
        setBoxes={setBoxes}
      />
    </div>
  );
}

export default App;
