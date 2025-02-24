import React from 'react'
import { useNavigate } from 'react-router-dom'

import Button from '../components/Button'

export default function Home() {
    let navigate  = useNavigate();
    
    const toGameBoard = () => {navigate('/game-board');}
    const toScore = () => {navigate('/score');}

  return (<div className='flex flex-col'>
    <h1 className='font-bold text-2xl text-center mt-3'>Battle Ships Game</h1>
    <Button value={'Start the game'} onClick={toGameBoard}></Button>
    <Button value={'To the score menu'} onClick={toScore}></Button>
  </div>)
}
