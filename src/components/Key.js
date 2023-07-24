import React from 'react';
import './Key.css';

const Key = (props) => {
  const isFlat = props.note.includes("flat");
  return (
    <div className={ isFlat ? "flat-key" : "key"}>
      { isFlat ? null : (<div className="key-text">{props.note}</div>) }
    </div>
  );
}

export { Key };