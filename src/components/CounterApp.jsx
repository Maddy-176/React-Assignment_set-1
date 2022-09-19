import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {increment,decrement,reset} from "../redux/features/counter/counterSlice"
import "../styles/counter.css"


function CounterApp() {

  const counterVal= useSelector(state=>state.counter.value)
  const dispatch= useDispatch();
  return (
    
    <>
    <h1>CounterApp</h1>

    <div className="counter-app-container">
    <h2 data-testid="counter">{counterVal}</h2>
    <div className="btn-container" style={{margin:"auto",marginTop:"1%"}}>
      <span className="btn">
      <button aria-label="Increment value"
      onClick={()=>dispatch(increment())}
      data-testid="button-increment"
      >Increment
      </button>
      </span>
      <span className="btn">
      <button aria-label="Decrement value"
       onClick={()=>dispatch(decrement())}
       data-testid="button-decrement"
       >Decrement
       </button>
      </span>
      <span className="btn">
      <button aria-label="Reset value"
        onClick={()=>dispatch(reset())}
        data-testid="button-reset"
      >Reset
      </button>
      </span>
    </div>
    </div>
    </>
    
  )
}

export default CounterApp