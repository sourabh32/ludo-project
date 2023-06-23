import Board from "./components/Board"
import { useContext } from "react"
import { gameContext } from "./context/GameContext"


function App() {

  const {generateRandom,random} = useContext(gameContext)
  
  
  return (
    <div className="container">
     <button onClick={generateRandom}>{random}</button>
  <Board />
  
    </div>
  )
}

export default App
