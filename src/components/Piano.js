import React, { useState, useEffect } from 'react';
import { Key } from './Key'
import './Piano.css'
import { KEY_TO_NOTE, NOTES, VALID_KEYS } from '../global/constants'
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
  const audiofiles = _.map(NOTES, (note, index) => {
    return (
      <audio 
        id={note}
        key={index}
        src={`../../notes/${note}.mp3`}
      />
    )
  })

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, );

  const handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    const key = event.key;
    if (!pressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      setPressedKeys((prevPressedKeys) => [...prevPressedKeys, key]);
    }
    playNote(KEY_TO_NOTE[key])
    console.log(`KeyDown: current pressedKeys: ${pressedKeys}`);
  };

  const handleKeyUp = (event) => {
    const key = event.key;
    if (pressedKeys.includes(key)) {
      setPressedKeys((prevPressedKeys) =>
        prevPressedKeys.filter((pressedKey) => pressedKey !== key)
      );
    }
    console.log(`KeyUp: Current pressedKeys: ${pressedKeys}`);
  };

  const playNote = (note) => {
    if (!_.isEmpty(note)) {
      const noteAudio = new Audio(document.getElementById(note).src);
      noteAudio.play();
    }
  }

  return (
    <div>
      <div className="piano">
        {keys}
      </div>
      <div>
        {audiofiles}
      </div>
    </div>
  );
}

export { Piano };