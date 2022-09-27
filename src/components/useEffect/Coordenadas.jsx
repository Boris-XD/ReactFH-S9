import { useEffect, useState } from 'react'

const Coordenadas = () => {
    const [coords, setCoords] = useState({
        x:0,
        y:0,
    });

    useEffect(()=> {
        const onMouseMove = ({ x, y }) => {
            setCoords({ x, y });
        };
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }

    },[]);
  return (
    <div>
        <h4>Coordenadas</h4>
        <h5>{JSON.stringify(coords)}</h5>
    </div>
  )
}

export default Coordenadas