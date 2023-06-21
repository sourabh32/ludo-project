import { useEffect, useState } from "react";
import { createContext } from "react";


export const gameContext = createContext({
    generateRandom:()=>{},
    red:0,
    blue:0,
    selectedToken:null,
    setSelectedToken:()=>{}
})





const GameProvider = ({children}) => {
  const [selectedToken,setSelectedToken] = useState(null)
  const [selectionPhase,setSelectonPhase] = useState(true)
  const [red,setRed] = useState({rt1:0,
  rt2:0})
  const [blue,setBlue] = useState({bt1:0,
    bt2:0})
  const [redTurn,setRedTurn] = useState(true)
  
  const generateRandom = () =>{
    const random = Math.floor(Math.random()*6+1)
    
     if(redTurn ){
      console.log(selectedToken)

      if(  selectedToken === "rt1"){
        setRed(prev => ({...prev,rt1:prev.rt1 +random}))
        setSelectedToken(null)
      }
      else if(selectedToken === "rt2"){
        setRed(prev => ({...prev,rt1:prev.rt2 +random}))
        setSelectedToken(null)
        
      }
      
      
      setRedTurn(!redTurn)
     }
     else{
      console.log(selectedToken)
      if(selectedToken === "bt1"){
        setBlue(prev => ({...prev,bt1:prev.bt1 +random}))
        setSelectedToken(null)
      }
      else if(selectedToken === "bt2"){
        setBlue(prev => ({...prev,bt2:prev.bt2 +random}))
        setSelectedToken(null)
      }
      
      
      setRedTurn(!redTurn)
     }
   }


   useEffect(()=>{
  console.log(red,blue)
   },[red,blue])


const value = {generateRandom,red,blue,selectedToken,setSelectedToken}
  return (
    <gameContext.Provider value={value}>
        {children}
    </gameContext.Provider>
  )
}





export default GameProvider