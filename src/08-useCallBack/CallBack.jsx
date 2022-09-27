import React, {useState} from 'react'
import { useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallBack = () => {
    const [ counter, setCounter ] = useState(50);
      
    const memorizedCallBack = useCallback((value)=> {
      console.log('Renderizando el useCallBack')
      setCounter(cont => cont + value);
    },[]);

  return (
    <div>
        <h1>UseCallBack: {counter}</h1>
        <ShowIncrement increment={memorizedCallBack}/>
    </div>
  )
}
