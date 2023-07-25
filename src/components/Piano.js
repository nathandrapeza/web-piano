import React, { useState, useEffect } from 'react';
import { Key } from './Key'
import './Piano.css'
import { NOTES, VALID_KEYS } from '../global/constants'
import _ from 'lodash';

const Piano = () => {

  const [pressedKeys, setPressedKeys] = useState([]);
  const keys = _.map(NOTES, (note, index) => {
    return (
      <Key 
        key={index}
        note={note}
        pressedKeys = {pressedKeys}
      />
    );
  });

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, );

  const handleKeyDown = (event) => {
    const key = event.key;
    if (!pressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      setPressedKeys((prevPressedKeys) => [...prevPressedKeys, key]);
    }
    console.log(`Current pressedKeys: ${pressedKeys}`);
  };

  const handleKeyUp = (event) => {
    const key = event.key;
    if (pressedKeys.includes(key)) {
      setPressedKeys((prevPressedKeys) =>
        prevPressedKeys.filter((pressedKey) => pressedKey !== key)
      );
    }
    console.log(`Current pressedKeys: ${pressedKeys}`);
  };


  return (
    <div className="piano">
      {keys}
    </div>
  );
}

export { Piano };