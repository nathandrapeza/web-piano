import React, { useState } from 'react';
import { Key } from './Key'
import './Piano.css'
import { NOTES } from '../global/constants'
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

  return (
    <div className="piano">
      {keys}
    </div>
  );
}

export { Piano };