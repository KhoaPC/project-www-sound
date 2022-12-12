import "./Header.css";
import ControllAll from "../../components/ControllAll/ControllAll";
import BoxEmpty from "../../components/BoxHeader/BoxEmpty";
import Presets from "../../components/Presets/Presets";
import { useEffect, useState } from "react";
import BoxHeader from "../../components/BoxHeader/BoxHeader";
function Header(props) {
  const { boxes, setBoxes, isPlay, setIsPlay, playItems, num } = props;
  const [Elm, setElm] = useState(
    <div className="foo">
      <BoxEmpty />
      <BoxEmpty />
      <BoxEmpty />
    </div>
  );

  useEffect(() => {
    console.log(Elm);
  }, [Elm]);

  useEffect(() => {
    // setElm((prev) => {
    // });
  }, [num]);

  return (
    <div className="header">
      <ControllAll
        setIsPlay={setIsPlay}
        isPlay={isPlay}
        boxes={boxes}
        setBoxes={setBoxes}
      />
      <div className="foo">
        {playItems.map((item, index) => {
          if (num == 0) {
            return (
              <div className="foo">
                <BoxEmpty />
                <BoxEmpty />
                <BoxEmpty />
              </div>
            );
          } else if (num == 1) {
            return (
              <div className="foo">
                <BoxEmpty />
                <BoxEmpty />
                <BoxHeader title={item.title}/>
              </div>
            );
          } else if (num == 2) {
            return (
              <div className="foo">
                <BoxEmpty />
                <BoxHeader title={item.title}/>
                <BoxHeader title={item.title}/>
              </div>
            );
          } else if (num == 3) {
            return (
              <div className="foo">
                <BoxHeader title={item.title}/>
                <BoxHeader title={item.title}/>
                <BoxHeader title={item.title}/>
              </div>
            );
          }
        })}
      </div>
      <Presets />
    </div>
  );
}

export default Header;
