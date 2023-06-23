import { useEffect, useState } from "react";
import { createContext } from "react";

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
  const [selectedToken, setSelectedToken] = useState(null);
  const [red, setRed] = useState({ rt1: 0, rt2: 0 });
  const [blue, setBlue] = useState({ bt1: 0, bt2: 0 });
  const [redTurn, setRedTurn] = useState(true);
  const [random,setRandom] = useState(0)

  const generateRandom = () =>{
      const random = Math.floor(Math.random() * 6 + 1);
    
      setRandom(random)
  }


  const moveRed = (random,token) => {
    
    if(redTurn ){

    
    if (token === "rt1" && red.rt1+random <= 41) {
      setRed((prev) => ({ ...prev, rt1: prev.rt1 + random }));
      setRedTurn(false);
  
    } else if (token === "rt2" && red.rt2+random <= 41) {
      setRed((prev) => ({ ...prev, rt2: prev.rt2 + random }));
      setRedTurn(false);
      
    }
    }
};

const moveBlue = (random,token) => {

  if(!redTurn){

    if (token === "bt1" && blue.bt1+random <= 41) {
      setBlue((prev) => ({ ...prev, bt1: prev.bt1 + random }));
      setRedTurn(true);
      
    } else if (token === "bt2" && blue.bt2+random <=41) {
      setBlue((prev) => ({ ...prev, bt2: prev.bt2 + random }));
      setRedTurn(true);
      
    }
  }
};
  

  useEffect(() => {
    console.log(random);
    console.log(redTurn)
  }, [random]);

  const value = { generateRandom, red, blue,random,moveRed,moveBlue,redTurn };
  return <gameContext.Provider value={value}>{children}</gameContext.Provider>;
};

export default GameProvider;





