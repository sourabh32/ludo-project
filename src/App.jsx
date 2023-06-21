import Board from "./components/Board"
import { useContext } from "react"
import { gameContext } from "./context/GameContext"


function App() {

  const {generateRandom} = useContext(gameContext)
  
  
  return (
    <>
  <Board />
   <button onClick={generateRandom}>generate</button>
    </>
  )
}

export default App
