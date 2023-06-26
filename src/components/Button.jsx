import React,{useContext} from 'react'
import { gameContext } from '../context/GameContext'
const Button = ({val,sty}) => {
    const {generateRandom,random,redTurn} = useContext(gameContext)
    
  return (
    <div className='btn-container'>
             <button disabled={val} className={`button ${sty}`} onClick={generateRandom}>{random}</button>
    </div>
  )
}

export default Button