import React,{ useState } from 'react'
import './App.css'

function App() {
  const[value, setValue]=useState('');

const number =e=> setValue(value+e.target.value)
const clear = () => setValue('');
const deleteLast = () => setValue(value.slice(0, -1));
const calculate = () => setValue(eval(value));
  return (
    <>
  <div className="container">
    <div className="calculator">
      <div className='screen'>
        <input type="text" value={value}/>
      </div>
      <div>
      <button value={'AC'} onClick={clear}>AC</button>
      <button value={'DELL'} onClick={deleteLast}>DELL</button>
      <button value={'*'} onClick={number}>*</button>
      <button value={'/'} onClick={number}>/</button>
      </div>
      <div>
      <button value={'7'} onClick={number}>7</button>
      <button value={'8'} onClick={number}>8</button>
      <button value={'9'} onClick={number}>9</button>
      <button value={'-'} onClick={number}>-</button>
      </div>
      <div>
      <button value={'4'} onClick={number}>4</button>
      <button value={'5'} onClick={number}>5</button>
      <button value={'6'} onClick={number}>6</button>
      <button value={'+'} onClick={number}>+</button>
      </div>
      <div>
      <button value={'1'} onClick={number}>1</button>
      <button value={'2'} onClick={number}>2</button>
      <button value={'3'} onClick={number}>3</button>
      <button value={'.'} onClick={number}>.</button>
      </div>
      <div>
      <button value={'00'} onClick={number}>00</button>
      <button value={'0'}onClick={number}>0</button>
      <button value={'='} onClick={calculate} className='eqaul'>=</button>
      </div>
    </div>


  </div>
    </>
  )
}

export default App
