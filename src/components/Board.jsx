import React from 'react'
import Square from './Square'
import { redHome,blueHome,winPath } from '../constant.js/gameConstants'
const Board = () => {
    let squares = []
    for(let i = 1;i<=60;i++){
     if(winPath.includes(i)){
        squares.push(<Square color={"white"} key={i} num={i} />)
     }
     else if(redHome.includes(i)){
        squares.push(<Square color={"red"} key={i} num={i} />)
     }
     else if(blueHome.includes(i)){
        squares.push(<Square color={"blue"} key={i} num={i} />)
     }
     else{
        squares.push(<Square  key={i} num={i} />)
     }
        
    }
  return (
    <div className='board'>{squares}</div>
  )
}

export default Board