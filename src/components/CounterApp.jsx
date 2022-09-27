import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const CounterApp = () => {

    const {counter, increment, decrement, reset}= useCounter();

  return (
    <div>
        <h1>useState Counter</h1>
        <h2>{counter}</h2>
        <button className='btn btn-primary m-1' onClick={increment}>+1</button>
        <button className='btn btn-primary m-1' onClick={reset}>Reset</button>
        <button className='btn btn-primary m-1' onClick={decrement}>-1</button>
    </div>

  )
}

export default CounterApp