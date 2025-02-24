import React from 'react'

import Square from './Square';

export default function Grid({grid, stg}) {
  let key = 0;
  return (<div className='grid grid-cols-10 gap-1 bg-blue-300 px-2 py-2'>
    {grid.map(stat => {
      key++;
        return(<div key={key}>
          <Square stat={stat} cust={null} stg={stg}/>
        </div>);
      })}
    </div>)
}
