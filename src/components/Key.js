import React from 'react';
import './Key.css';

const Key = (props) => {
  const isFlat = !props.note.includes("flat");
  return (
    <div className={ isFlat ? "key" : "flat-key"}>
      { isFlat ? (<div className="key-text">{props.note}</div>) : null }
    </div>
  );
}

export { Key };