import React, { useState } from 'react';
import './App.css';

function Stack() {

  const [stack, setStack] = useState([]);
  const [newValue, setNewValue] = useState('');
  const [boxes, setBoxes] = useState(Array(10).fill(''));

  const pushValue = () => {
    if (newValue.trim() !== '') {
      if (stack.length >= 10) {
        alert('Stack is full');
        return;
      }

      const newStack = [...stack];
      newStack.push(newValue);
      setStack(newStack);
      setNewValue('');
      const newBoxes = [...boxes];
      if (newStack.length <= 10) {
        newStack.forEach((value, index) => {
          newBoxes[9 - index] = value;
        });
      } else {
        for (let i = 0; i < 10; i++) {
          newBoxes[9 - i] = newStack[newStack.length - 10 + i];
        }
      }
      setBoxes(newBoxes);
    } else {
      alert('Input is empty');
    }
  };

  const popValue = () => {
    const newStack = [...stack];
    newStack.pop();
    setStack(newStack);

    const newBoxes = [...boxes];
    if (newStack.length < 10) {
      newStack.forEach((value, index) => {
        newBoxes[9 - index] = value;
      });
      for (let i = newStack.length; i < 10; i++) {
        newBoxes[9 - i] = '';
      }
    } else {
      for (let i = 0; i < 10; i++) {
        newBoxes[9 - i] = newStack[newStack.length - 10 + i];
      }
    }
    setBoxes(newBoxes);
  };

  return (
    <div className='base'>
      <main className="main">
        <input className="input" type="text" value={newValue} onChange={(e) => setNewValue(e.target.value)} />
        <div className="actions">
          <button className='popBtn' onClick={popValue}>Pop</button>
          <button className='pushBtn' onClick={pushValue}>Push</button>
        </div>
        <div className="stack">
          {boxes.map((value, index) => (
            <span key={index} className='box'>{value}</span>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Stack;