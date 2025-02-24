import React, {useEffect, useState} from 'react'

export default function Square({stat, cust, stg}){
    const [color, setColor] = useState('white');
    const [useSquare, setSquare] = useState(stat);

    const onClick= () => {
        let status = {};

        switch(stg){
            case 1:
                switch(useSquare.stat){
                    case false:
                        status = {ui: 3, stat: useSquare.stat};
                        break;
                    default:
                        status = {ui: 2, stat: useSquare.stat};
                        break;
                }
                break;
            default:
                switch(useSquare.ui){
                    case 1:
                        status = {ui: 0, stat: true};
                        break;
                    default:
                        status = {ui: 1, stat: false};
                        break;
                }
                break;
        }

        setSquare(status);
    }

    useEffect(()=>{
        switch(useSquare.ui){
            case 1:
                setColor('w-10 h-10 rounded-md bg-slate-400 border-2 border-slate-500');
                break;
            case 2:
                setColor('w-10 h-10 rounded-md bg-white border-2 border-slate-500');
                break;
            case 3:
                setColor('w-10 h-10 rounded-md bg-red-500 border-2 border-slate-500');
                break;
            default:
                setColor('w-10 h-10 rounded-md bg-blue-300 border-2 border-slate-500');
                break;
        }
    },[useSquare.ui]);
    
  return (<div className={cust === null? color : cust} onClick={onClick}></div>)
}
