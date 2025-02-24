import React from 'react'

export default function Button({value, onClick}) {
  return (<div className='self-center'>
    <input className='bg-blue-500 text-white font-bold rounded-md mt-2 h-12 w-40' type='button' value={value} onClick={onClick}></input>
  </div>)
}
