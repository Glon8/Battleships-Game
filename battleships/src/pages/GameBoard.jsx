import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

import Button from '../components/Button';
import Grid from '../components/Grid'

export default function GameBoard() {
    let navigate = useNavigate();

    const [useLoad, setLoad] = useState(true)

    const [usePGrid, setPGrid] = useState([]);
    const [useCGrid, setCGrid] = useState([]);
    const [useStg, setStg] = useState(0);

    const toLeave = () => {navigate('/');}

    const toHide = (grid) => {
      const arrA = [];

      switch(grid){
        case 1:
          for(let i = 0; i < 100; i++){
            arrA.push({ui: 0, stat: useCGrid[i].stat});
          }

          console.log(arrA);

          setCGrid(arrA);
          break;
        default:
          for(let i = 0; i < 100; i++){
            arrA.push({ui: 0, stat: usePGrid[i].stat});
          }

          console.log(arrA);

          setPGrid(arrA);
          break;
      }
    }

    const toClear= (grid) => {
      const arrA = [];

      switch(grid){
        case 1:
          for(let i = 0; i < 100; i++){
            arrA.push({ui: 0, stat: true});
          }

          console.log(arrA);

          setCGrid(arrA);
          break;
        default:
          for(let i = 0; i < 100; i++){
            arrA.push({ui: 0, stat: true});
          }

          console.log(arrA);

          setPGrid(arrA);
          break;
      }
    }
    
    if(useLoad){
      setLoad(!useLoad);

      const arrA = [];
      const arrB = [];

      for(let i = 0; i < 100; i++){
        arrA.push({ui: 0, stat: true});
        arrB.push({ui: 0, stat: true});
      }

      setPGrid(arrA);
      setCGrid(arrB);
      setStg(0);
    }

  return (<div className='flex flex-col'>
      <h1 className='font-bold text-2xl text-center mt-3'>Game Board</h1>
      <div className='flex gap-24 mt-5 mb-3'>
        <Grid grid={usePGrid} stg={useStg}/>
        <Grid grid={useCGrid} stg={useStg}/>
      </div>
      <Button value={'Leave'} onClick={toLeave}></Button>
      <Button value={'Hide players grid'} onClick={() => {toHide(0)}}></Button>
      <Button value={'Clear  players grid'} onClick={() => {toClear(usePGrid)}}></Button>
    </div>)
}