import { useEffect, useState } from "react";
import { createContext } from "react";
import { redObject,blueObject } from "../constant.js/gameConstants";
export const gameContext = createContext({
  generateRandom: () => {},
  red: 0,
  blue: 0,
  selectedToken: null,
  setSelectedToken: () => {},
  setSelectonPhase:()=>{},
  moveRed:()=>{},
  moveBlue:()=>{}
});

const GameProvider = ({ children }) => {
  const [red, setRed] = useState({ rt1: 0, rt2: 0 });
  const [blue, setBlue] = useState({ bt1: 0, bt2: 0 });
  const [redTurn, setRedTurn] = useState(true);
  const [random,setRandom] = useState(0)

  const generateRandom = () =>{
      const random = Math.floor(Math.random() * 6 + 1);
      setRandom(random)
  }

  const moveRed = (random, token) => {
    if (redTurn && random !== 0) {
      if (red.rt1 === 41 && token === "rt1") {
        setRedTurn(false);
        setRandom(0);
      } else if (red.rt2 === 41 && token === "rt2") {
        setRedTurn(false);
        setRandom(0);
      } else {
        const totalSteps = token === "rt1" ? red.rt1 + random : red.rt2 + random;
        if (totalSteps <= 41) {
          if (token === "rt1") {
            setRed((prev) => ({ ...prev, rt1: prev.rt1 + random }));
          } else if (token === "rt2") {
            setRed((prev) => ({ ...prev, rt2: prev.rt2 + random }));
          }
          setRedTurn(false);
          setRandom(0);
        }
      }
    }
  };
  

  const moveBlue = (random, token) => {
    if (!redTurn && random !== 0) {
      if (blue.bt1 === 41 && token === "bt1") {
        setRedTurn(true);
        setRandom(0);
      } else if (blue.bt2 === 41 && token === "bt2") {
        setRedTurn(true);
        setRandom(0);
      } else {
        const totalSteps = token === "bt1" ? blue.bt1 + random : blue.bt2 + random;
        if (totalSteps <= 41) {
          if (token === "bt1") {
            setBlue((prev) => ({ ...prev, bt1: prev.bt1 + random }));
          } else if (token === "bt2") {
            setBlue((prev) => ({ ...prev, bt2: prev.bt2 + random }));
          }
          setRedTurn(true);
          setRandom(0);
        }
      }
    }
  };


  const contradiction = () =>{

  }
  const calculateWinner = () =>{
    if(red.rt1 === 41 && red.rt2){
      error("red")
    }
    else if(blue.bt1 === 41 && blue.bt2){

    }
  }
  
  useEffect(() => {
    calculateWinner()
  }, [red,blue]);

  const value = { generateRandom, red, blue,random,moveRed,moveBlue,redTurn };
  return <gameContext.Provider value={value}>{children}</gameContext.Provider>;
};

export default GameProvider;





