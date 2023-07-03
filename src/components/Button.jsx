import React,{useContext} from 'react'
import { gameContext } from '../context/GameContext'
import {motion} from "framer-motion"
const Button = ({val,sty}) => {
    const {generateRandom,random,redTurn} = useContext(gameContext)
    
  return (
    <motion.div  initial={{ opacity: 0, scale: 0.1 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }} className='btn-container'>
             <button disabled={val} className={`button ${sty}`} onClick={generateRandom}>{random}</button>
    </motion.div>
  )
}

export default Button