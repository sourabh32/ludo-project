import { useEffect, useState } from "react";
import { createContext } from "react";
import { redObject,blueObject } from "../constant.js/gameConstants";
import move from "../assets/move.mp3"
import snake from "../assets/move.mp3"
import winner from "../assets/move.mp3"
import { toast } from "react-hot-toast";
export const gameContext = createContext({
  generateRandom: () => {},
  red: 0,
  blue: 0,
  selectedToken: null,
  setSelectedToken: () => {},
  setSelectonPhase:()=>{},
  moveRed:()=>{},
  moveBlue:()=>{},
  redTurn:true,
});

const GameProvider = ({ children }) => {
  const [red, setRed] = useState({ rt1: 0, rt2: 0 });
  const [blue, setBlue] = useState({ bt1: 35, bt2: 34 });
  const [redTurn, setRedTurn] = useState(true);
  const [random,setRandom] = useState(0)

  const playSound = (voice) => {
    let audio = new Audio(voice);
    audio.play();
  };

  const generateRandom = () =>{
    if(random === 0){
      const random = Math.floor(Math.random() * 6 + 1);
      setRandom(random)
    }
  }

  const moveRed = (random, token) => {

    const totalSteps = token === "rt1" ? red.rt1 + random : red.rt2 + random;
    if (redTurn && random !== 0) {
      playSound(move);
      if (random === 6) {
        
        if (token === "rt1" && red.rt1 !== 41 && !(totalSteps>41)) {
          setRed((prev) => ({ ...prev, rt1: prev.rt1 + random }));
          setRandom(0);
        } else if (token === "rt2" && red.rt2 !== 41 && !(totalSteps>41) ) {
          setRed((prev) => ({ ...prev, rt2: prev.rt2 + random }));
          setRandom(0);
        }
        else{
          setRandom(0)
          setRedTurn(false)
        }
      } else {
        if ((red.rt1 === 41 || totalSteps>41) && token === "rt1") {
          setRedTurn(false);
          setRandom(0);
        } else if ((red.rt2 === 41 || totalSteps>41)  && token === "rt2") {
          setRedTurn(false);
          setRandom(0);
        } else {
         
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
    }
  };
  
  

  const moveBlue = (random, token) => {
    const totalSteps = token === "bt1" ? blue.bt1 + random : blue.bt2 + random;
    if (!redTurn && random !== 0) {
      playSound(move);
      if (random === 6) {
       
        if (token === "bt1" && blue.bt1 !== 41 && !(totalSteps>41)  ) {
          setBlue((prev) => ({ ...prev, bt1: prev.bt1 + random }));
          setRandom(0);
        } else if (token === "bt2" && blue.bt2 !== 41 && !(totalSteps>41) ) {
          setBlue((prev) => ({ ...prev, bt2: prev.bt2 + random }));
          setRandom(0);
        }
        else{
          setRandom(0)
          setRedTurn(false)
        }
      } else {
        if ((blue.bt1 === 41 || totalSteps>41) && token === "bt1") {
          setRedTurn(true);
          setRandom(0);
        } else if ((blue.bt2 === 41 || totalSteps>41)  && token === "bt2") {
          setRedTurn(true);
          setRandom(0);
        } else {
          
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
    }
  };
  


  const conditions = {
    1:redObject[red.rt1] === blueObject[blue.bt1] ,
    2:redObject[red.rt1] === blueObject[blue.bt2],
    3:redObject[red.rt2] === blueObject[blue.bt2],
    4:redObject[red.rt2] === blueObject[blue.bt1]
  }

  const contradiction = () =>{
if(conditions[1]){
  playSound(snake)
  if(redTurn){
    setRed(prev => ({...prev,rt1:0 }))
  }
  else{
    setBlue(prev => ({...prev,bt1:0 }))
  }
}
else if(conditions[2]){
  playSound(snake)
  if(redTurn){
    setRed(prev => ({...prev,rt1:0 }))
  }
  else{
    setBlue(prev => ({...prev,bt2:0 }))
  }
}
else if(conditions[3]){
  playSound(snake)
  if(redTurn){
    setRed(prev => ({...prev,rt2:0 }))
  }
  else{
    setBlue(prev => ({...prev,bt2:0 }))
  }
}
else if(conditions[4]){
  playSound(snake)
  if(redTurn){
    setRed(prev => ({...prev,rt2:0 }))
  }
  else{
    setBlue(prev => ({...prev,bt1:0 }))
  }
}
  }
  const calculateWinner = () =>{
    if(red.rt1 === 41 && red.rt2 === 41){
      playSound(winner)
      toast('Yellow Wins!', {
        icon: '👏',
      });
    }
    else if(blue.bt1 === 41 && blue.bt2 === 41){
      playSound(winner)
      toast('Blue Wins!', {
        icon: '👏',
      });
    }
  }
  
  useEffect(() => {
    calculateWinner()
    contradiction()
  }, [red,blue]);

  const value = { generateRandom, red, blue,random,moveRed,moveBlue,redTurn};
  return <gameContext.Provider value={value}>{children}</gameContext.Provider>;
};

export default GameProvider;





