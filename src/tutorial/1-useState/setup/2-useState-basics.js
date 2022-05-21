import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title')
  let changeText = () => {
    if (text === 'random title') {
      setText('Yo')
    }
    else setText('random title')
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={changeText}>Change Title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
