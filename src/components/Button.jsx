import React,{useContext} from 'react'
import { gameContext } from '../context/GameContext'
const Button = () => {
    const {generateRandom,random,redTurn} = useContext(gameContext)
    console.log(redTurn)
  return (
    <div className='btn-container'>
             <button id={`${!redTurn && "bluebtn"}`} className='button' onClick={generateRandom}>{random}</button>
    </div>
  )
}

export default Button