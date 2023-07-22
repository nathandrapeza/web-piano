import React from 'react';
import { Key } from './Key'
import './Piano.css'
import { Notes } from '../global/constants'
import _ from 'lodash';

const Piano = () => {
  const keys = _.map(Notes, (note, index) => {
    return (
      <Key 
        key={index}
        note={note}
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