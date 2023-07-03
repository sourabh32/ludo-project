import React, { useContext } from "react";
import { redObject, blueObject } from "../constant.js/gameConstants";
import { gameContext } from "../context/GameContext";
import {motion} from "framer-motion"
import Token from "./Token";
const Square = ({ num, color }) => {
  const {red,blue,random,moveBlue,moveRed,redTurn} = useContext(gameContext)

  return (
    <div  className={`square ${color}`}>
     <p>{num}</p> 

      {redObject[red.rt1] === num && (
         <Token color={"yellowToken"} redTurn={redTurn} move={()=>moveRed(random,"rt1")}  />
         
      )}
      {redObject[red.rt2] === num && (
         <Token color={"yellowToken"} redTurn={redTurn} move={()=>moveRed(random,"rt2")}  />
        
      )}
      {blueObject[blue.bt1] === num && (
         <Token color={"blueToken"} redTurn={!redTurn} move={()=>moveBlue(random,"bt1")}  />
       
      )}
      {blueObject[blue.bt2] === num && (
        <Token color={"blueToken"} redTurn={!redTurn} move={()=>moveBlue(random,"bt2")}  />
      )}
    </div>
  );
};

export default Square;


