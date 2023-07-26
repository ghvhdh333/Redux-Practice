import './App.css';
import { styled } from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { increase, decrease, setCounter, changeName } from './action';

export default function App() {
  const dispatch = useDispatch()
  
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)

  const counter = useSelector((state) => {return state.counterReducer})
  const greeting = useSelector((state) => state.greetingReducer)
  return (
    <>
      <h1>{greeting}</h1>
      <div>
        <input ref={inputRef1}/>
        <button onClick={() => dispatch( changeName(inputRef1.current.value) )}>Change Name</button>
      </div>
      <h1>Count : {counter} </h1>
      <div>
        <button onClick={()=>dispatch(increase())}>+</button>
        <button onClick={()=>dispatch(decrease())}>-</button>
      </div>
      <div>
        <input ref={inputRef2}/>
        <button onClick={() => dispatch( setCounter(inputRef2.current.value) )}>Change Counter</button>
      </div>
    </>
  );
}