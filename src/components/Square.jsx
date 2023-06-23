import React, { useContext } from "react";
import { redObject, blueObject } from "../constant.js/gameConstants";
import { gameContext } from "../context/GameContext";
const Square = ({ num, color }) => {
  const {red,blue,random,moveBlue,moveRed,redTurn} = useContext(gameContext)

  return (
    <div className={`square ${color}`}>
      {num}

      {redObject[red.rt1] === num && (
         <div id={`${redTurn && "enlarge"}`}  className="yellowToken" onClick={()=>moveRed(random,"rt1")}></div>
      )}
      {redObject[red.rt2] === num && (
         <div id={`${redTurn && "enlarge"}`}   className="yellowToken" onClick={()=>moveRed(random,"rt2")}></div>
      )}
      {blueObject[blue.bt1] === num && (
         <div id={`${!redTurn && "enlarge"}`}    className="blueToken" onClick={()=>moveBlue(random,"bt1")}></div>
      )}
      {blueObject[blue.bt2] === num && (
         <div id={`${!redTurn && "enlarge"}`}    className="blueToken" onClick={()=>moveBlue(random,"bt2")}></div>
      )}
    </div>
  );
};

export default Square;


