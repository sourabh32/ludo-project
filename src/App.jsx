import Board from "./components/Board"
import { useContext } from "react"
import { gameContext } from "./context/GameContext"
import { Toaster } from "react-hot-toast"
import Button from "./components/Button"

function App() {

  const {redTurn} = useContext(gameContext)
  
  
  return (
    <div className="container">
      <Toaster />
      <Button val={redTurn} sty={"bluebtn"} />
       <Board />
       <Button val={!redTurn} sty={"yellowbtn"} />
       
    </div>
  )
}

export default App
