import React from 'react';
import { Key } from './Key'
import './Piano.css'

const Piano = () => {
  return (
    <div className="piano">
      <Key />
      <Key />
      <Key />
    </div>
  );
}

export { Piano };