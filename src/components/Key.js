import React from 'react';
import './Key.css';
import _ from 'lodash';
import { NOTE_TO_KEY } from '../global/constants'


const Key = (props) => {

  const isFlat = props.note.includes("flat");
  const isPressed = _.includes(props.pressedKeys, NOTE_TO_KEY[props.note])
  let keyClassName = "key";

  if (isFlat) {
    keyClassName += " flat";
  }
  if (isPressed) {
    keyClassName += " pressed";
  }
  return (
    <div className={keyClassName}>
      { isFlat ? null : (<div className="key-text">{props.note}</div>) }
    </div>
  );
}

export { Key };