import React from 'react'
import Square from './Square'
import { redHome,blueHome,winPath } from '../constant.js/gameConstants'
import {motion} from "framer-motion"
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
    <motion.div
    initial={{ y:-300,opacity:0.5 }}
    animate={{ y:0,opacity:1  }}
    transition={{ duration: 3,delay:0.2 }} 
    className='board'>{squares}</motion.div>
  )
}

export default Board