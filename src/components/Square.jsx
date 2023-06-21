import React, { useContext } from 'react'
import { redObject,blueObject } from '../constant.js/gameConstants'
import { gameContext } from '../context/GameContext'
const Square = ({num,color}) => {
    const {red,blue,setSelectedToken} = useContext(gameContext)
    
  return (
    <div className={`square ${color}`}>
           {num}

{redObject[red.rt1] === num && <button onClick={()=>setSelectedToken("rt1")} className='blueToken'></button>}

{redObject[red.rt2] === num && <button onClick={()=>setSelectedToken("rt2")}  className='blueToken'></button>}
{blueObject[blue.bt1] === num && <button onClick={()=>setSelectedToken("bt1")}  className='yellowToken'></button>}
{blueObject[blue.bt2] === num && <button onClick={()=>setSelectedToken("rt2")}  className='yellowToken'></button>}
    </div>
  )
}

export default Square