import { useEffect, useState } from "react";
import "./BoxHeader.css";
import VolumeBox from "./VolumeBox";

function BoxHeader(props) {
  const {} = props;

  return (
    <div className="container-box-header">
      <h3 className="title-box-header">Empty</h3>
      <div className="box-header"></div>
    </div>
  );
}

export default BoxHeader;
