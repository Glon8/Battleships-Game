import React from 'react'
import {useNavigate} from 'react-router-dom'

import Button from '../components/Button';

export default function Score() {
    let navigate = useNavigate();

    const toMain = () => {navigate('/');}

  return (<div className='flex flex-col'>
      <h1 className='font-bold text-2xl text-center mt-3'>Score</h1>
      <Button value={'To the main menu'} onClick={toMain}></Button>
    </div>)
}
