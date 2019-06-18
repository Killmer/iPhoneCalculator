import React from "react";
import "../css/iphone-x.scss";

function IphoneX({children}) {
  return (
    <div className="iphone-x">
      <div className="divider" />
      <div className="bezel" />
      <div className="screen">{children}</div>
      <div className="speaker" />
      <div className="camera" />
      <div className="button mute" />
      <div className="button vol-up" />
      <div className="button vol-down" />
      <div className="button right" />
      <div className="divider" />
    </div>
  );
}

export default IphoneX;
