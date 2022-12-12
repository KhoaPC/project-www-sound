import { useState } from "react";
import "./BoxHeader.css";
import VolumeBox from "./VolumeBox";

function BoxEmpty({ title }) {
  const [isEmpty, setIsEmpty] = useState(true);

  return (
    <div className="container-box-header">
      <h3 className="title-box-header">{title ? title : "Empty"}</h3>
      {isEmpty ? <div className="box-header"></div> : <VolumeBox />}
    </div>
  );
}

export default BoxEmpty;
