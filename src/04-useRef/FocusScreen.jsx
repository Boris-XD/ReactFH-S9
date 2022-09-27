import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {
    const ref = useRef();
    const onClick = () => {
        console.log(ref.current);
        ref.current.select();
    }

  return (
    <>
        <h1>Focus Screen</h1>
        <h4>Seleccionando con el boton el contenido del input</h4>
        <hr />
        <input 
            ref={ref}
            type='text'
            placeholder='Ingrese su nombre'
            className='form-control'
        />
        <button className='btn btn-primary mt-2' onClick={onClick}>Seleccionar</button>
    </>
  )
}
